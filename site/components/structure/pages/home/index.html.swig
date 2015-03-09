---
title: Home
---


{% extends "../../templates/default.html.swig" %}
{% block content %}

  {% set hero = home.hero %}
  {% include '../../elements/sections/home/hero/hero.html.swig' %}

  {% set buttons = home.about.buttons %}
  {% include '../../elements/sections/home/about/about.html.swig' %}

{% endblock %}
