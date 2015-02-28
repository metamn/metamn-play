// http://greensock.com/forums/topic/11155-how-to-optimize-tweenlite-on-scroll/
var fullpageScroll = function() {
  var container = document.querySelector('.home #content');
  var triggers = document.querySelectorAll('.home #navigation-bullets div');


  function markTriggerActive(index) {
    for (var i = 0; i < triggers.length; i++ ) {
      triggers[i].classList.remove('active');
    }

    console.log(index);
    triggers[index - 2].classList.add('active');
  }

  function onViewChange(trigger, index) {
    if (!trigger.classList.contains('active')) {
      container.classList.toggle('view-change');
      markTriggerActive(index);
    }
  }

  function attachTriggers() {
    for (var i = 0; i < triggers.length; i++ ) {
      var trigger = triggers[i];
      trigger.addEventListener('click', function(){ onViewChange(trigger, i) }, false);
    }
  }

  attachTriggers();
}

fullpageScroll();
