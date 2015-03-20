sliderSwitcher('.value--interactions__switcher div', '.value--interactions__mockup figure');



var positionSwitcher = function() {
  var container = document.querySelector('.value--interactions__mockup .ios-device__screen');
  var x = container.clientWidth;
  var y = container.clientHeight;

  var mockup = document.querySelector('.value--interactions__mockup .ios-device');
  var padding = window.getComputedStyle(mockup,null).getPropertyValue("padding-left");

  var switcher = document.querySelector('.value--interactions__switcher .pulsating-circle');
  var switcher_width = window.getComputedStyle(switcher, null).getPropertyValue("width");
  var switcher_height = window.getComputedStyle(switcher, null).getPropertyValue("height");

  var x1 = x * 52.03/100 + parseFloat(padding.replace('px', '')) - parseFloat(switcher_width.replace('px', '')) / 2;
  var y1 = y * 78.257/100 + parseFloat(switcher_height.replace('px', '')) / 2;
  y1 *= -1;

  console.log('x1: ' + x1 + 'y1: ' + y1 + ' ');

  switcher.style.top = y1 + 'px';
  switcher.style.left = x1 + 'px';
}

window.onload = function(e) {
  positionSwitcher();
}
