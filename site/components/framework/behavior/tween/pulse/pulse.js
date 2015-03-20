var pulse = function(elementClass) {
  var element = document.querySelector(elementClass);
  TweenMax.fromTo(element, 1,
    {
      scale: 1
    },
    {
      scale: 1.1,
      glowFilter: {
        color: 0x91e600,
        alpha: 1,
        blurX: 50,
        blurY: 50
      },
      repeat: -1,
      yoyo: true
    }
  );
}
