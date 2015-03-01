// Scrolling a full page instead of the usual scroll
var fullPageScroll = function() {

  // Hijacking the original scroller
  // - add throttling
  // - http://greensock.com/forums/topic/11155-how-to-optimize-tweenlite-on-scroll/
  var scrollTimeout;
  window.onscroll = scrollHandler;

  function scrollHandler(event) {
    console.log("onscroll");
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(scrollComplete, 200);
  }

  // Do the modified scroll
  function scrollComplete() {
    console.log("scrolling done");
  }

}
fullPageScroll();
