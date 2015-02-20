---
title: Home
---

{% extends "../templates/home.html.swig" %}
{% block content %}

  <section id="ui">
    <h3>User Interface</h3>

    <aside>
      <h1>Clean<br/>User<br/>Interfaces</h1>

      <div class="button">
        View portfolio
      </div>
    </aside>

    <article>
      <h3>Image</h3>

      <figure>
        <img src="{{ site.url }}assets/images/anvelocom-archive-laptop-front-3x.png">
      </figure>
    </article>
  </section>

{% endblock %}
