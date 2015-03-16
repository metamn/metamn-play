<nav class="links links--main">
  <h3>Main links</h3>

  <ul>
    {% for link in site.links.main %}
      {% set link = link %}
      <li>{% include '../../../framework/design/decorations/link/link.html.swig' %}</li>
    {% endfor %}
  </ul>
</nav>
