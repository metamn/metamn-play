var slider = function(bulletsSelector, slidesSelector) {
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
    if (bullets.length == 1) {
      clickBulletSingle(this);
    } else {
      clickBulletsMultiple(this);
    }
  }

  // Single navigation bullet
  function clickBulletSingle(bullet) {
    moveSlide(bullet);
  }

  // Multiple navigation bullets
  function clickBulletsMultiple(bullet) {
    active = bullet.classList.contains('active');
    if (!active) {
      moveSlide(bullet);
      removeActiveBulletClass();
      bullet.classList.add('active');
    }
  }

  // Move slide
  function moveSlide(slide) {
    current = slideIndex(slide);
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
  function slideIndex(slide) {
    var childs = slide.parentNode.childNodes;
    for (var i = 0; i < childs.length; i++) {
      if (slide == childs[i]) break;
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
