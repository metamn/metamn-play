{{ image.name }}

<figure {% if image.class %} class="{{ image.class }}" {% endif %}>
  {% if image.url %}
    <a href="{{ site.url}}{{ image.url }}" title="{{ image.title }}">
  {% endif %}

  <picture>
    <!--[if IE 9]><video style="display: none;"><![endif]-->
    <source media="(min-width: 90em)" srcset="{{ site.url }}assets/images/{{ image.name }}_desktop.png, {{ site.url }}assets/images/{{ image.name }}_desktop2x.png 2x">
    <source media="(min-width: 64em)" srcset="{{ site.url }}assets/images/{{ image.laptop }}, {{ site.url }}assets/images/{{ image.laptop2x }} 2x">
    <source media="(min-width: 37.5em)" srcset="{{ site.url }}assets/images/{{ image.tablet }}, {{ site.url }}assets/images/{{ image.tablet2x }} 2x">
    <source srcset="{{ site.url }}assets/images/{{ image.mobile }}, {{ site.url }}assets/images/{{ image.mobile2x }} 2x">
    <!--[if IE 9]></video><![endif]-->
  </picture>

  <figcaption>
    {{ image.title }}
  </figcaption>

  {% if image.url %}</a>{% endif %}
</figure>
