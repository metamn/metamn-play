{% set value = value %}
{% if value.id != '' %}
  {% set filename = '--' + value.id + '/value--' + value.id + '.html.swig' %}
  {% include filename %}
{% endif %}
