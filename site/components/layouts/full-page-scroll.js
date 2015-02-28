// http://greensock.com/forums/topic/11155-how-to-optimize-tweenlite-on-scroll/
var pageScroll = function() {
  var container = document.querySelector('.home #content');
  var trigger = document.querySelector('.home #navigation-bullets div');

  function onViewChange(evt) {
    container.classList.toggle('view-change');
  }

  trigger.addEventListener('click', onViewChange, false);
}

pageScroll();
