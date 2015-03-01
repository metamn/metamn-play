// Full page scrolling
// - debouncing: http://codepen.io/GreenSock/pen/AwHmy

var scrollTimeout;

window.onscroll = doScroll;

function doScroll() {
  console.log("onscroll");
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(scrollComplete, 200);
}
function scrollComplete() {
  // code to run after scrolling here
  console.log("scrolling done");
}
