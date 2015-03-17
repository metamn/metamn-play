<article class="value value--{{ value.id }}">
  <h3 class="value__title value--{{ value.id }}__title">{{ value.title }}</h3>

  {% include '__description/ux__description.html.swig' %}

  {% set value = value %}
  {% set filename = '__images/ux__images.html.swig' %}
  {% include filename %}
</article>
