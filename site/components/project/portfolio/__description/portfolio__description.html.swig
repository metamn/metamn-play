<article class="portfolio__description">
  <h3>Description</h3>

  {% set service = { title: "Services", items: portfolio.services } %}
  {% include '../__services/portfolio__services.html.swig' %}

  {% set service = { title: "Technologies", items: portfolio.technologies } %}
  {% include '../__services/portfolio__services.html.swig' %}
</article>
