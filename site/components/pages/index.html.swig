---
title: Home
---

{% extends "../templates/home.html.swig" %}
{% block content %}

  {% for section in index.sections %}
    <section id="{{ section.id }}">
      <h3>{{ section.title }}</h3>

      <aside>
        <div class="title">
          <h2>{{ section.title | replace(' ', ' <br/> ', 'g') | safe }}</h2>
        </div>
      </aside>

      <article>
        <h3>{{ section.image.title }}</h3>

        {% set image = section.image %}
        {% include "../atoms/figure.html.swig" %}
      </article>
    </section>
  {% endfor %}

{% endblock %}
