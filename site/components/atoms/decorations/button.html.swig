{% import "../../helpers/classname.swig" as c  %}
{% set classname = c.classname(title) %}

<div id="{{ classname }}">
  <a href="{{ site.url }}{{ url }}" title="{{ title }}">
    {{ title }}
  </a>
</div>
