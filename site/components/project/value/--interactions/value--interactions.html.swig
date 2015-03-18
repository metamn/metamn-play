<article class="value value--{{ value.id }}">
  <h3 class="value__title value--{{ value.id }}__title">{{ value.title }}</h3>

  {% set images = value.images %}
  {% include '__mockup/value--interactions__mockup.html.swig' %}
</article>
