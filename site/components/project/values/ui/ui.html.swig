<article class="{{ value.id }}">
  <h3 class='ui__title'>{{ value.title }}</h3>

  {% set value = value %}
  {% include '__images/ui__images.html.swig' %}
</article>
