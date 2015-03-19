<div class="value--ui__mockup">
  {% for image in images %}
    {% set image = image %}
    {% include '../../../../framework/structure/images/figure.html.swig' %}
  {% endfor %}
</div>
