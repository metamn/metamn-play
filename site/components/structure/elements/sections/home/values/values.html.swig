<section id="values">
  {% for value in values %}
    {% set value = value %}
    {% set filename = '../../../articles/values/' + value.id + '/' + value.id + '.html.swig' %}
    {% include filename %}
  {% endfor %}
</section>
