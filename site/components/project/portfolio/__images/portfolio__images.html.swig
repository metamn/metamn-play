<article class="portfolio__images">
  <h3>Portfolio images</h3>

  <aside class="portfolio__slides">
    <h3>Slides</h3>

    {% for slide in portfolio.slides %}
      {% set slide = slide %}
      <div class="slide">
        {% for image in slide.images %}
          {% set image = image %}
          {% include '../../../framework/structure/images/figure.html.swig' %}
        {% endfor %}
      </div>
    {% endfor %}
  </aside>

  <button onclick="prev()">&rsaquo;</button>
  <button onclick="next()">&raquo;</button>
</article>
