<section class="home__values">
  <h3>Values</h3>

  {% for value in values %}
    {% set value = value %}
    {% set filename = '../../../project/values/' + value.id + '/' + value.id + '.html.swig' %}
    {% include filename %}
  {% endfor %}
</section>
