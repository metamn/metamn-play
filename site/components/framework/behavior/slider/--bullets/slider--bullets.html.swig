{% for item in slider.items %}
<div {% if loop.first %}class="active"{% endif %}>
  <span>{{ slider.inactive | safe }}</span>
  <span class="active">{{ slider.active | safe }}</span>
</div>
{% endfor %}
