<nav class="links links--articles">
  <h3>Articles</h3>

  <ul>
    {% for article in site.articles %}
      {% set link = { title: article } %}
      <li>
        {% include '../../../framework/design/decorations/long-dash/long-dash.html.swig' %}
        {% include '../../../framework/design/decorations/link/link.html.swig' %}
      </li>
    {% endfor %}
  </ul>
</nav>
