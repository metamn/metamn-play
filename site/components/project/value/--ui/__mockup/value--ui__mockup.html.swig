<div class="value--ui__mockup">
  {# set images = images #}
  {# include '../../../../framework/design/decorations/mockup/ios-device/ios-device.html.swig' #}

  {% for image in images %}
    {% set image = image %}
    {% include '../../../../framework/structure/images/figure.html.swig' %}
  {% endfor %}
</div>
