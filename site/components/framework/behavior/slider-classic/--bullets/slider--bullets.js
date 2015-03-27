var sliderBullets = function(bulletsSelector, slidesSelector) {
  var bullets = document.querySelectorAll(bulletsSelector);
  var slides = document.querySelectorAll(slidesSelector);


  // Mark first slide active
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.add('moved-right-' + i);
  }

  // Add click event to bullets
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].addEventListener('click', clickBullet, false);
  }


  // Click on a bullet
  function clickBullet() {
    active = this.classList.contains('active');
    if (!active) {
      moveSlide(this);
      removeActiveBulletClass();
      this.classList.add('active');
    }
  }


  // Move slide
  function moveSlide(bullet) {
    current = bulletIndex(bullet);
    for (var i = 0; i < slides.length; i++ ) {
      slides[i].className = '';

      if (i <= current ) {
        slides[i].className = 'moved-left-' + (current - i).toString();
      } else {
        slides[i].className = 'moved-right-' + (i - current).toString();
      }
    }
  }



  // Helpers

  // Return the index of the clicked element
  function bulletIndex(bullet) {
    var siblings = bullet.parentNode.childNodes;
    for (var i = 0; i < siblings.length; i++) {
      if (bullet == siblings[i]) break;
    }
    return i;
  }


  // Clear active state for all bullets
  function removeActiveBulletClass() {
    for (var i = 0; i < bullets.length; i++) {
      bullets[i].classList.remove('active');
    }
  }
}
