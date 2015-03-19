<ul>
  {% for item in items %}
    <li>{% include '../../../decorations/long-dash/long-dash.html.swig' %}{{ item }}</li>
  {% endfor %}
</ul>
