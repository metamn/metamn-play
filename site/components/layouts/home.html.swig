{% include "../structures/head.html.swig" %}

{% include "../organisms/menu.html.swig" %}
<main>
  {% include "../organisms/header.html.swig" %}
  {% include "../molecules/logo.html.swig" %}
  
  {% block content %}{% endblock %}
</main>

{% include "../structures/footer.html.swig" %}
