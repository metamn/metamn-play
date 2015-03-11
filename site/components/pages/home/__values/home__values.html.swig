<section class="home__values">
  <h3>Values</h3>

  {% for value in values %}
    {% set value = value %}
    {% include '../../../project/value/value.html.swig' %}
  {% endfor %}
</section>
