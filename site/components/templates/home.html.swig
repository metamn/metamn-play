{% include "head.html.swig" %}

<!-- for the HTML5 outliner -->
<h1 class="hidden">{{ site.title }}</h1>

{% include "../layers/base.html.swig" %}

<!-- cannot be moved into a partial because of the {% block %} -->
<section id="content">
  <h3>Content</h3>
  {% block content %}{% endblock %}
</section>


{% include "foot.html.swig" %}
