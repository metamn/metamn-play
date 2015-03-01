// Full page scrolling
// - supporting mouse, keyboard and swipe events with no throttle / debounce
// - debouncing: http://codepen.io/GreenSock/pen/AwHmy
// - mouse: http://www.sitepoint.com/html5-javascript-mouse-wheel/


// Mouse + Touchpad
//

// Listen to the scroll event
var body = document.querySelector("body");
if (body.addEventListener) {
	// IE9, Chrome, Safari, Opera
	body.addEventListener("mousewheel", MouseWheelHandler, false);
	// Firefox
	body.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
} else {
  // IE 6/7/8
  body.attachEvent("onmousewheel", MouseWheelHandler);
}

// Debounce & get scrolling direction
var scrollTimeout;
function MouseWheelHandler(e) {
	// cross-browser wheel delta
	var e = window.event || e; // old IE support
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  // Debouncing ...
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(scrollComplete(delta), 5000);
}

function scrollComplete(direction) {
  console.log("delta: " + direction);
}
