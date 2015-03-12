<aside class="value__images value--{{ value.id }}__images">
  <h3>Images for {{ value.title }}</h3>

  <div class="ios-device ios-device--white ipad ipad-mini-3">
    <div class="ios-device__screen">
      {% set image = value.image %}
      {% include '../../../../framework/structure/images/figure.html.swig' %}
    </div>
  </div>

  <style>
    .ios-device {background:#121212;border:1px solid #000;position: relative;box-sizing:border-box;}.ios-device::after {content: ''; width: 8px;height: 8px;border: 1px solid #444;border-radius: 50%; position: absolute; bottom: 2px;left: 50%; -webkit-transform:translateX(-50%); transform:translateX(-50%);display: block; }.ios-device__screen {border-radius: 2px;background: #222;height: 100%; }.ios-device--white {background:#fff;border-color: #ddd;}.ios-device--white::after {border-color: #ddd; }.iphone-4s {border-radius: 6px;width: 58px;height: 123px;padding: 14px 3px; }.iphone-6 {border-radius: 6px;width: 67px;height: 138px;padding: 14px 3px; }.ipad-mini-3 {border-radius: 6px;width: 134px;height: 200px;padding: 18px 8px; }.ipad-mini-3--large {border-radius: 12px;width: 268px; height: 400px; padding: 36px 16px; }.ios-device--large::after {width: 16px;height: 16px;bottom: 5px; }.ipad::after {bottom: 4px; }.ipad.ios-device--large::after {bottom: 9px; }
  </style>
</aside>
