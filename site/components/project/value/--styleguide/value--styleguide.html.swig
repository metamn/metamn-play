<article class="value value--{{ value.id }}">
  <h3 class="value__title value--{{ value.id }}__title">{{ value.title }}</h3>

  {% set value = value %}
  {% include '__images/styleguide__images.html.swig' %}
</article>
