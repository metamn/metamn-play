<article class="value value--{{ value.id }}">
  {% set value = value %}
  {% set images = value.images %}

  <div class="container">
    {% set index = 1 %}
    {% include '../__title/value__title.html.swig' %}

    {% include '__slider/value--ui__slider.html.swig' %}
  </div>

  {% include '__mockup/value--ui__mockup.html.swig' %}
</article>
