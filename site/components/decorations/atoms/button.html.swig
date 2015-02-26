{% import "../../../helpers/classname.swig" as c  %}
{% set classname = c.classname(button.title) %}

<div id="{{ classname }}" class="button">
  <a href="{{ site.url }}{{ button.url }}" title="{{ button.title }}">
    {{ button.title }}
  </a>
</div>
