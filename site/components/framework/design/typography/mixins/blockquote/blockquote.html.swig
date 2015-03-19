<div class="blockquote">
  <span>{{ blockquote }}</span>
  <span>&mdash;</span>
  <span class="blockquote__source">
    {% set link = { title: blockquote__source, url: 'zz' } %}
    {% include '../../../decorations/link/link.html.swig' %}
  </span>
</div>
