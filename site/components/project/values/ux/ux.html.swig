<article class="{{ value.id }}">
  <h3 class='ux__title'>{{ value.title }}</h3>

  {% set value = value %}
  {% include '__images/ux__images.html.swig' %}
</article>
