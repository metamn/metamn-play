<nav class="links links--contact">
  <h3>Contact links</h3>

  <ul>
    {% for link in site.links.contact %}
      {% set link = link %}
      <li>
        {% include '../../../framework/design/decorations/long-dash/long-dash.html.swig' %}
        {% include '../../../framework/design/decorations/link/link.html.swig' %}
      </li>
    {% endfor %}
  </ul>
</nav>
