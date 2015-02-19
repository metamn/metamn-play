{% include "../structures/head.html.swig" %}



{% include "../organisms/menu.html.swig" %}

<main>
  {% include "../organisms/header.html.swig" %}

  <section id="content">
    {% block content %}{% endblock %}
  </section>

  {% include "../molecules/logo.html.swig" %}
</main>



{% include "../structures/footer.html.swig" %}
