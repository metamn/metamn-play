---
title: Reboot
---

{% extends '../../../project/templates/default/default.html.swig' %}
{% block content %}

  {% include '../../../project/title/title.html.swig' %}

  {% set portfolio = reboot %}
  {% include '../../../project/portfolio/portfolio.html.swig' %}


{% endblock %}
