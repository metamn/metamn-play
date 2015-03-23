<aside class="portfolio__text">
  <h3>Portfolio text</h3>

  {% for p in text %}
    <p> {{ p | safe }}</p>
  {% endfor %}
</aside>
