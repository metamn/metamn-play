---
title: Home
---

{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}
  {% include '__about/home__about.html.swig' %}

  {% set values = home.values %}
  {% include '__values/home__values.html.swig' %}

{% endblock %}
