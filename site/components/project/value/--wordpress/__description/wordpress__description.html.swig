<aside class="value__description value--{{ value.id }}__description">
  <h3>Description</h3>

  <ul>
    {% for item in description %}
      <li>{{ item }}</li>
    {% endfor %}
  </ul>
</aside>
