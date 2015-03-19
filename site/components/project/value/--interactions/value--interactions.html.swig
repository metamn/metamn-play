<article class="value value--{{ value.id }}">
  {% set value = value %}
  {% set index = 2 %}
  {% include '../__title/value__title.html.swig' %}

  {% set images = value.images %}
  {% include '__mockup/value--interactions__mockup.html.swig' %}

  {% include '__switcher/value--interactions__switcher.html.swig' %}
</article>
