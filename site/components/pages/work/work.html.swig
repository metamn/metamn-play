---
title: Work
---

{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% include '../../project/title/title.html.swig' %}

  {% for work in site.works %}
    {% set work = work %}
    {% include '../../project/work/--thumb/work--thumb.html.swig' %}
  {% endfor %}

{% endblock %}
