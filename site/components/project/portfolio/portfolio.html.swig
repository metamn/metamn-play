<section class="portfolio">
  <h3>Portfolio</h3>

  {% set portfolio = portfolio %}

  {% include '__services/portfolio__services.html.swig' %}

  <div class="container">
    {% include '__description/portfolio__description.html.swig' %}
    {% include '__images/portfolio__images.html.swig' %}
  </div>
</section>
