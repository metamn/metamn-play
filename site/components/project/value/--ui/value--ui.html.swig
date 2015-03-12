<article class="value value--{{ value.id }}">
  {% set value = value %}
  {% set filename = '__images/ui__images.html.swig' %}
  {% include filename %}

  <h3 class="value__title value--{{ value.id }}__title">{{ value.title }}</h3>
</article>
