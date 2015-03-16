{#
  - if link.url is not defined we will get it from the title itself
#}

{% import "../../../../../helpers/classname.swig" as c  %}
{% if link.url == '' %}
  {% set url = c.classname(link) %}
  {% set title = link %}
{% else %}
  {% set url = link.url %}
  {% set title = link.title %}
{% endif %}


{#
  - internal, external and mailto URLs are all handled
#}


{% set base_url = site.url %}

{% if link.type == "email" %}
  {% set base_url = "mailto:" %}
{% elseif link.type == "external" %}
  {% set base_url = '' %}
{% endif %}




<a href="{{ base_url }}{{ url }}" title="{{ title }}">{{ title }}</li>
