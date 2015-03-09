<div class="button">
  {% if button.url %}
    <a href="{{ site.url }}{{ button.url }}" title="{{ button.text }}">
  {% endif %}

  <span class="text">{{ button.text }}</span>

  {% if button.url %}</a>{% endif %}
</div>
