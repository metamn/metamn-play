<nav class="links links--articles">
  <h3>Articles</h3>

  <ul>
    {% for link in site.articles %}
      {% set link = link %}
      <li>{% include '../../../framework/design/decorations/link/link.html.swig' %}</li>
    {% endfor %}
  </ul>
</nav>
