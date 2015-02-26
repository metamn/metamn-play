// Breakpoints and responsive mixins
// - generated from components/atoms/grid/breakpoints.scss.json
// - please do not edit directly this file


{% for breakpoint in breakpoints %}
// {{ breakpoint.description }}
$breakpoint-{{ breakpoint.name }}: {{ breakpoint.value }};
{% endfor %}


{% for mixin in responsive_mixins %}
@mixin {{ mixin.name }} {
  @media only screen and {{ mixin.media_query }} {
    @content
  }
}
{% endfor %}
