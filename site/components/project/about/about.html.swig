<div class="about">
  {% for p in site.content.about.paragraphs %}
    <p>{{ p | safe }}</p>
  {% endfor %}
</about>
