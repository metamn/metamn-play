var valueUISlider = function() {
  var bullets = document.querySelectorAll('.value--ui__slider div');

  for (var i = 0; i < bullets.length; i++) {
    bullets[i].addEventListener('click', slide, false);
  }

  function slide() {
    active = this.classList.contains('active');
    if (!active) {
      removeActiveClass();
      this.classList.add('active');
    }
  }

  function removeActiveClass() {
    for (var i = 0; i < bullets.length; i++) {
      bullets[i].classList.remove('active');
    }
  }
}

valueUISlider();
