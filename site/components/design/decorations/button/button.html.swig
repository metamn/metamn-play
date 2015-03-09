<div class="button">
  {% if button.url %}
    <a href="{{ site.url }}{{ button.url }}" title="{{ button.text }}">
  {% endif %}

  <span class="text">{{ button.text }}</span>
  <span class="arrow">
    {% set arrow = button.arrow %}
    {% include '../arrow/arrow.html.swig' %}
  </span>

  {% if button.url %}</a>{% endif %}
</div>
