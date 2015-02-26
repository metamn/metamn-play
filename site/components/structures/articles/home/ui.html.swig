<article>
  <h3>{{ section.image.title }}</h3>

  {% set image = section.image %}
  {% include "../../../images/atoms/figure.html.swig" %}
</article>
