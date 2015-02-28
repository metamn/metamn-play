
var slidingMenu = function() {
  var container = document.querySelector('#base');
  var trigger = document.querySelector('#base #logo');
  var backButton = document.querySelector('#base #logo');

  function onViewChange(evt) {
    container.classList.toggle('view-change');
  }

  trigger.addEventListener('click', onViewChange, false);
  backButton.addEventListener('click', onViewChange);
}

slidingMenu();
