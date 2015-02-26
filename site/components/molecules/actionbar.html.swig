<aside id="actionbar">
  <h3>Action bar</h3>

  {% include '../molecules/decorations/navigation-bullets.html.swig' %}

  {% set button = {'title': 'View portfolio', 'url': '/portfolio'} %}
  {% include '../atoms/decorations/button.html.swig' %}

  {% set button = {'title': 'Visit styleguide', 'url': '/styleguide'} %}
  {% include '../atoms/decorations/button.html.swig' %}

  {% set button = {'title': 'Contact', 'url': '/contact'} %}
  {% include '../atoms/decorations/button.html.swig' %}
</aside>
