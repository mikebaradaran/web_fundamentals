			$(document).ready(function(){
				
				// Variables required by script
				var currentimage;
				var score = 0;
				var numvotes = 0;
				var starwidth = 0;
				
				// Load Gallery XML file
				$.ajax({
					url: 'gallery.xml',
					type: 'GET',
					dataType: 'xml',
					error: function(){
						alert('Error loading XML document');
					},
					success: function(xmlData){
						// do something with xml
						setupImages(xmlData);
					}
				});
	
			
				// Display images
				function setupImages(xmlData) {
					// read xml and use it to populate page	
				
					// Get first image
					currentimage = $(xmlData).find("image:first");
					
					// Fade in image after countdown
					var t = setTimeout(function(){showNewImage()}, 1000);
					
					
					
					
					// Add forward/prev buttons
					var newhtml = "<a title=\"move to previous image\" id=\"prev\"></a><a title=\"move to next image\" id=\"next\"></a>";
					$("#gallery").append(newhtml);
					
					// Add click events to prev and next buttons
					$("#prev").click(function(){
						var tmp = $(currentimage).prev();
						if ($(tmp).find("path").text()=="") {
							currentimage = $(xmlData).find("image:last");
						} else {
							currentimage = tmp;
						}
						showNewImage();
					});
					$("#next").click(function(){
						var tmp = $(currentimage).next();						  						if ($(tmp).find("path").text()=="") {
							currentimage = $(xmlData).find("image:first");
						} else {
							currentimage = tmp;
						}
						showNewImage();
					});
					
				}
			
			
				// Display the image, caption, rating and label 
				function showNewImage() {
					var image = $(currentimage).find("path").text();
					var caption = $(currentimage).find("caption").text();
					score = parseFloat($(currentimage).find("rating").text());
					numvotes = parseInt($(currentimage).find("numvotes").text());
					starwidth = parseInt(score*40)+50;
					$("#stars").css({width:starwidth});
					$("#imagelabel").removeClass("active");
					// Fade out current image and fade in new image
					$("#imageplaceholder").animate({opacity:0},500, function(){
						$(this).css({"backgroundImage":"url("+image+")"}).animate({opacity:1},500, function(){
							$("#imagelabel").addClass("active");
						});
					});
					// Add caption
					$("#imagelabel").text(caption);	
					// Check to see if voting has happened on this image
					if ($(currentimage).find("hasvoted").text()=="false") {
						$("#instructions").html("Click to rate this image");	
					} else {
						$("#instructions").html("You previously rated this image");	
					}
				}
			
				// deal with voting 
				
				$("#starbg").mousemove(function(e){
					// limit stars to move in whole stars
					var offset = $(this).offset();
					var position = e.pageX - parseInt(offset.left);
					var starwidth = (parseInt((position-50)/40)+1)*40+50;
					if ($(currentimage).find("hasvoted").text()=="false") {
						$("#stars").css({width:starwidth});
					}
				}).mouseout(function(){
					// reset stars to current voting score
					$("#stars").css({width:starwidth});
				}).click(function(){
					// if not previously voted, record vote
					if ($(currentimage).find("hasvoted").text()=="false") {
						$(currentimage).find("hasvoted").text("true");
						newscore = parseInt($("#stars").css("width"));
						var tmpscore = (parseInt((newscore-50)/40));
						totalscore = score*numvotes;
						totalscore = totalscore+tmpscore;
						numvotes = numvotes + 1;
						score = parseInt((totalscore/numvotes)*100)/100;
						$(currentimage).find("rating").text(score);
						starwidth = parseInt(score*40)+50;
						$("#stars").css({width:starwidth});
						tmppath = $(currentimage).find("path").text();
						$.get("updatexml.php", { image: tmppath, rating: tmpscore } );
						$("#instructions").html("Thanks for your rating!");
					} else {
						$("#instructions").html("You've already rated this image!");	
					}
				});
			});