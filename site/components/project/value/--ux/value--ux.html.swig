<article class="value value--{{ value.id }}">
  <div class="container">
    {% set value = value %}
    {% set index = 3 %}
    {% include '../__title/value__title.html.swig' %}

    {% include '__description/ux__description.html.swig' %}
  </div>

  {% set value = value %}
  {% set filename = '__images/ux__images.html.swig' %}
  {% include filename %}
</article>
