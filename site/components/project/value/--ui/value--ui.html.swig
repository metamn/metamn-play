<article class="value value--{{ value.id }}">
  {% set value = value %}
  {% set index = 1 %}
  {% include '../__title/value__title.html.swig' %}

  {% set images = value.images %}
  {% include '__mockup/value--ui__mockup.html.swig' %}

  {% include '__slider/value--ui__slider.html.swig' %}
</article>
