<article class="value value--{{ value.id }}">
  <h3 class="value__title value--{{ value.id }}__title">{{ value.title }}</h3>

  {% set value = value %}
  {% set filename = '__images/wordpress__images.html.swig' %}
  {% include filename %}
</article>
