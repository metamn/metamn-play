<article class="value value--{{ value.id }}">
  {% set value = value %}
  {% set index = 3 %}
  {% include '../__title/value__title.html.swig' %}

  <div class="container">
    {% include '__description/ux__description.html.swig' %}

    {% set value = value %}
    {% set filename = '__images/ux__images.html.swig' %}
    {% include filename %}
  </div>
</article>
