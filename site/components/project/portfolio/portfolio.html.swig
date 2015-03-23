<section class="portfolio">
  <h3>Portfolio</h3>

  {% set portfolio = portfolio %}
  {% include '__description/portfolio__description.html.swig' %}

  {% for slide in portfolio.slides %}
    {% set slide = slide %}
    {% include '__slide/portfolio__slide.html.swig' %}
  {% endfor %}
</section>
