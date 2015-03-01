// Scrolling a full page instead of the usual scroll
(function() {

  // Saving the top of each section into an array
  // - later we will scroll to these values
  // - http://stackoverflow.com/questions/25630035/javascript-getboundingclientrect-changes-while-scrolling
  var sectionTops = function() {
    ret = [];

    sections = document.querySelectorAll('.home #content section');
    for (var i = 0; i < sections.length; i++ ) {
      position = sections[i].getBoundingClientRect();
      ret.push(position.top + window.scrollY);
    }

    return ret;
  }


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

    tops = sectionTops();
    current = currentSection();
    TweenLite.to(window, 0.5, { scrollTo: tops[current], ease:Power2.easeOut });
  }

  // Get the current section where to scroll
  function currentSection() {
    return 1;
  }
})();
