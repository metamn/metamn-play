<aside id="actionbar">
  <h3>Action bar</h3>

  {% include '../../../decorations/molecules/navigation-bullets.html.swig' %}

  {% set button = {'title': 'View portfolio', 'url': '/portfolio'} %}
  {% include '../../../decorations/atoms/button.html.swig' %}

  {% set button = {'title': 'Visit styleguide', 'url': '/styleguide'} %}
  {% include '../../../decorations/atoms/button.html.swig' %}

  {% set button = {'title': 'Contact', 'url': '/contact'} %}
  {% include '../../../decorations/atoms/button.html.swig' %}
</aside>
