---
title: Home
---


{% extends "../../templates/default.html.swig" %}
{% block content %}

  {% set hero = home.hero %}
  {% include '../../elements/sections/home/hero/hero.html.swig' %}

  {% set about = home.about %}
  {% include '../../elements/sections/home/about/about.html.swig' %}

  {% set ui = home.ui %}
  {% include '../../elements/sections/home/ui/ui.html.swig' %}

{% endblock %}
