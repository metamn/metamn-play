<div class="logo">
  {% include '__first-letter/logo__first-letter.html.swig' %}

  <h1 class="logo__site-title">
    {% set link = { title: site.title, url: site.url, type: "external" } %}
    {% include '../../framework/design/decorations/link/link.html.swig' %}
  </h1>
</div>
