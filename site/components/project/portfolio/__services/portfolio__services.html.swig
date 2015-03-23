<aside class="portfolio__services">
  <h3>{{ service.title }}</h3>

  {% set items = service.items %}
  {% include '../../../framework/design/typography/mixins/ul/ul.html.swig' %}
</aside>
