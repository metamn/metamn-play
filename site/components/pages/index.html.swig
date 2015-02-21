---
title: Home
---

{% extends "../templates/home.html.swig" %}
{% block content %}

  {% for section in index.sections %}
    <section id="{{ section.id }}">
      <h3>{{ section.title }}</h3>

      <aside>
        <h1>{{ section.title }}</h1>
      </aside>

      <article>
        <h3>{{ section.image_title }}</h3>

        <figure>
          <img src="{{ site.url }}assets/images/{{ section.image }}" alt="{{ section.image_title }}">
        </figure>
      </article>
    </section>
  {% endfor %}

{% endblock %}
