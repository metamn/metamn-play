<article class="portfolio__images">
  <h3>Portfolio images</h3>

  {% for image in portfolio.images %}
    {% set image = image %}
    {% include '../../../framework/structure/images/figure.html.swig' %}
  {% endfor %}
</article>
