<article class="value value--{{ value.id }}">
  {% set images = value.images | last %}
  {% for image in value.images %}
    {% set content = image %}
    {% include '__mockup/value--interactions__mockup.html.swig' %}
  {% endfor %}

  <h3 class="value__title value--{{ value.id }}__title">{{ value.title }}</h3>
</article>
