/**
 * better prevent default
 */
export const preventDefault = (e) => {
	e = e || window.event;
	if (e.preventDefault){
		e.preventDefault();
	}
	e.returnValue = false;
};

/**
 * better prevent default
 */
export const preventDefaultForScrollKeys = (e) => {
	// left: 37, up: 38, right: 39, down: 40,
	// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
	const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
	if (keys[e.keyCode]){
		this.preventDefault(e);
		return false;
	}
};

/**
 * better prevent default
 */
export const disableScroll = () => {
	if (window.addEventListener){ // older FF
		window.addEventListener('DOMMouseScroll', this.preventDefault, false);
	}
	window.onwheel = this.preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
	window.ontouchmove = this.preventDefault; // mobile
	document.onkeydown = this.preventDefaultForScrollKeys;
};

/**
 * better prevent default
 */
export const enableScroll = () => {
	if (window.removeEventListener){
		window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
	}
	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	document.onkeydown = null;
};
