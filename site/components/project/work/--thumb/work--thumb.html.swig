<article class="work work--thumb">
  <h3 class="work--thumb__title">{{ work.title }}</h3>

  {% set image = work.images | first %}
  {% include '../../../framework/structure/images/figure.html.swig' %}

  <aside class="work--thumb__services">
    <h3>Services</h3>

    <div>
      {{ work.services | join(', ') }}
    </div>
  </aside>
</article>
