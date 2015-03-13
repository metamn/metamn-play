<article class="value value--{{ value.id }}">
  {% set content = value.image %}
  {% include '__mockup/value--ui__mockup.html.swig' %}

  <h3 class="value__title value--{{ value.id }}__title">{{ value.title }}</h3>
</article>
