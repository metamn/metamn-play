<figure {% if image.class %} class="{{ image.class }}" {% endif %}>
  {% if image.url %}
    <a href="{{ site.url}}{{ image.url }}" title="{{ image.title }}">
  {% endif %}

  <picture>
    <!--[if IE 9]><video style="display: none;"><![endif]-->
    <source media="(min-width: 90em)" srcset="{{ site.url }}assets/images/{{ image.name }}_desktop.png, {{ site.url }}assets/images/{{ image.name }}_desktop2x.png 2x">
    <source media="(min-width: 64em)" srcset="{{ site.url }}assets/images/{{ image.name }}_laptop.png, {{ site.url }}assets/images/{{ image.name }}_laptop2x.png 2x">
    <source media="(min-width: 37.5em)" srcset="{{ site.url }}assets/images/{{ image.name }}_tablet.png, {{ site.url }}assets/images/{{ image.name}}_tablet2x.png 2x">
    <source srcset="{{ site.url }}assets/images/{{ image.name}}_mobile.png, {{ site.url }}assets/images/{{ image.name }}_mobile2x.png 2x">
    <!--[if IE 9]></video><![endif]-->
    <img srcset="{{ site.url }}assets/images/{{ image.name }}_desktop.png" alt="{{ image.title }}">
  </picture>

  <figcaption>
    {{ image.title }}
  </figcaption>

  {% if image.url %}</a>{% endif %}
</figure>
