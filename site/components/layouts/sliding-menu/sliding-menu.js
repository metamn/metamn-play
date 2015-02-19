var container = document.querySelector('body');
var trigger = document.querySelector('main #logo');
var backButton = document.querySelector('#menu #logo');

function onViewChange(evt) {
  container.classList.toggle('view-change');
}

trigger.addEventListener('click', onViewChange, false);
backButton.addEventListener('click', onViewChange);
