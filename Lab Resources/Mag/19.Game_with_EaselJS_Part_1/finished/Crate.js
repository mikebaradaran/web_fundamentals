(function(window) {
	function Crate() {
  		this.initialize();
	}
	Crate.prototype = new Container();
	Crate.prototype.img = new Image();
	// constructor:
	Crate.prototype.Container_initialize = Crate.prototype.initialize;	//unique to avoid overiding base class
	
	Crate.prototype.initialize = function() {
		this.Container_initialize();
		var bmp = new Bitmap("img/crate.jpg");
		bmp.x=-20;
		bmp.y=-20;
		this.addChild(bmp);
	}
	window.Crate = Crate;
}(window));