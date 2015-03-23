<article class="portfolio__slide">
  <h3>{{ slide.title }}</h3>

  {% set text = slide.text %}
  {% include '../__text/portfolio__text.html.swig' %}

  {% for image in slide.images %}
    {% set image = image %}
    {% include '../__image/portfolio__image.html.swig' %}
  {% endfor %}
</article>
