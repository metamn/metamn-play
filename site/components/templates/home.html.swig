{% include "head.html.swig" %}

<h1 class="hidden">{{ site.title }}</h1>

{% include "../organisms/layouts/base.html.swig" %}
<section id="content">
  <h3>Content</h3>
  {% block content %}{% endblock %}
</section>


{% include "foot.html.swig" %}
