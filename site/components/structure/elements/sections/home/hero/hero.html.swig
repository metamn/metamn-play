<section id="hero">
  <h3>{{ site.strapline }}</h3>

  {% set video = hero.video %}
  v: {{ video.id }}
  {% include '../../../videos/full-screen-video.html.swig' with video %}
</section>
