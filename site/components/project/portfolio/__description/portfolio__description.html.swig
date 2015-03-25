<article class="portfolio__description">
  <h3>Description</h3>

  <div>
    {% for p in portfolio.description %}
      <p>{{ p | safe }}</p>
    {% endfor %}
  </div>
</article>
