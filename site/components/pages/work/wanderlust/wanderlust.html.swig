---
title: Wanderlust
---

{% extends '../../../project/templates/default/default.html.swig' %}
{% block content %}

  {% include '../../../project/title/title.html.swig' %}

  {% set portfolio = wanderlust %}
  {% include '../../../project/portfolio/portfolio.html.swig' %}


{% endblock %}
