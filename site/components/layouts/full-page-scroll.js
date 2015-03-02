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
  // - with managing throttle
  // - http://joshbroton.com/hooking-up-to-the-window-onscroll-event-without-killing-your-performance/

  var didScroll = false;
  window.onscroll = doThisStuffOnScroll;

  function doThisStuffOnScroll() {
    didScroll = true;
  }

  setInterval(function() {
    if (didScroll) {
      didScroll = false;
      scrollComplete();
    }
  }, 100);



  // Our own modified scroller
  function scrollComplete() {
    console.log("scrolling done");

    tops = sectionTops();
    current = currentSection(tops);
    TweenLite.to(window, 0.75, { scrollTo: tops[current], ease:Power2.easeOut });
  }



  // Get the current section where to scroll
  // - http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
  function currentSection(tops) {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    console.log("top:" + top);

    for (var i = 0; i < tops.length; i++) {
      console.log("t:" + tops[i]);
      if (top <= tops[i]) {
        return i;
      }
    }
  }
})();
