---
title: Home
---

{% extends '../../project/templates/home/home.html.swig' %}
{% block content %}
  {% include '__about/home__about.html.swig' %}

  {% set values = home.values %}
  {% include '__values/home__values.html.swig' %}

  {% include '../../project/links/--main/links--main.html.swig' %}
  {% include '../../project/links/--articles/links--articles.html.swig' %}
  {% include '../../project/links/--contact/links--contact.html.swig' %}
{% endblock %}
