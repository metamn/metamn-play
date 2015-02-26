---
title: Home
---

{% extends "../../templates/home.html.swig" %}
{% block content %}

  {% for section in index.sections %}
    {% include '../sections/home.html.swig' %}
  {% endfor %}

{% endblock %}
