<div class="ios-device__screen">
  {% for image in images %}
    {% set image = image %}
    {% include '../../../../../structure/images/figure.html.swig' %}
  {% endfor %}
</div>
