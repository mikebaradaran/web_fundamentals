	/*
		RESPONSIVE DESIGN WITH ELASTIC TEXT & IMAGES
	*/
	
	(function($){ 
		$.fn.elastictext = function(options) {
			var defaults = {  
   				multiplier: 1.4,
				lineheight: 1.4,
				minWidth: 320,  
   				maxWidth: 1200  
  			}; 
			
			var uoptions = $.extend(defaults, options);
			 
			return this.each(function(){
				obj = $(this);
				width = parseInt(obj.width());
				if (width<uoptions.minWidth) width=uoptions.minWidth;
				if (width>uoptions.maxWidth) width=uoptions.maxWidth;
				fontSize = parseFloat(uoptions.multiplier*(width/uoptions.minWidth))+"em";	
				obj.css({fontSize:fontSize,lineHeight:(parseFloat(fontSize)+(uoptions.lineheight-parseFloat(fontSize)))+"em"});
			});
		}
	})(jQuery);	
	
	
	$(document).ready(function(){
		$("article p.intro").elastictext({multiplier:1.15});
		$("article h2").elastictext({multiplier:1.8,lineheight:1});
		$("header h1").elastictext({multiplier:3.05});

		$(window).resize(function(){
			$("article p.intro").elastictext({multiplier:1.15});
			$("article h2").elastictext({multiplier:1.8,lineheight:1});
			$("header h1").elastictext({multiplier:3.05});
		});
	});
	
