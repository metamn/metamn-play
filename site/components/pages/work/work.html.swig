---
title: Work
---

{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% include '../../project/page-title/page-title.html.swig' %}

  <section class="works">
    <h3>Works</h3>

    {% for work in site.works %}
      {% set work = work %}
      {% include '../../project/work/--thumb/work--thumb.html.swig' %}
    {% endfor %}
  </section>

{% endblock %}
