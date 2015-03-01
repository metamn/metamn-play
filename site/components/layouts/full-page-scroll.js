// Scrolling a full page instead of the usual scroll
(function() {
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


  // Our own modified scroller
  function scrollComplete() {
    console.log("scrolling done");

    var sectionTops = [0, 1117, "2234"];
    TweenLite.to(window, 0.5, { scrollTo: sectionTops[1], ease:Power2.easeOut });
  }
})();
