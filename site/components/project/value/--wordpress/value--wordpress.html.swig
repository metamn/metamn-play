<article class="value value--{{ value.id }}">
  {% set value = value %}
  {% set index = 4 %}
  {% include '../__title/value__title.html.swig' %}

  <div class="container">
    {% set value = value %}
    {% set filename = '__images/wordpress__images.html.swig' %}
    {% include filename %}{% set value = value %}

    {% set description = value.description %}
    {% set filename = '__description/wordpress__description.html.swig' %}
    {% include filename %}
  </div>
</article>
