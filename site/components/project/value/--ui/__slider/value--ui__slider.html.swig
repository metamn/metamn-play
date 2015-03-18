<div class="value--ui__slider">
  {% for image in images %}
  <div {% if loop.first %}class="active"{% endif %}>
      <span>O</span>
      <span class="active">&bull;</span>
    </div>
  {% endfor %}
</div>
