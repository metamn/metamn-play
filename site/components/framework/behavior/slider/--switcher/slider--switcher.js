
var sliderSwitcher = function(switcherClass, slidesClass) {
  var bullet = document.querySelector(switcherClass);
  var slides = document.querySelectorAll(slidesClass);

  // Mark first slide active
  slides[0].classList.add('active');

  // Listen to the click event
  bullet.addEventListener('click', clickBullet, false);

  // Switch slides
  function clickBullet() {
    for (var i = 0; i < slides.length; i++ ) {
      if (slides[i].classList.contains('active')) {
        active = i;
        break;
      }
    }
    slides[active].classList.remove('active');

    next = active + 1;
    if (active == (slides.length - 1)) next = 0;
    slides[next].classList.add('active');
  }
}
