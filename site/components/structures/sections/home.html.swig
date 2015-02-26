<section id="{{ section.id }}">
  <h3>{{ section.title }}</h3>

  <aside>
    <div class="title">
      <h2>{{ section.title | replace(' ', ' <br/> ', 'g') | safe }}</h2>
    </div>
  </aside>

  {% include '../articles/home/ui.html.swig' %}
</section>
