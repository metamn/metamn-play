<aside class="value__images value--{{ value.id }}__images">
  <h3>Images for {{ value.title }}</h3>

  {% set image = value.images | last %}
  {% include '../../../../framework/structure/images/figure.html.swig' %}
</aside>
