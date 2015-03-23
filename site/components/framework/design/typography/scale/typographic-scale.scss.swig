// Typographic grid and scale
// - this file is generated please do not edit


// Default scale & grid
// - the deafult font size / line height gives the basic grid cell height. Usually is set to 16px/20px
// - the basic grid cell width is 1lem, which is set to 20px, based on the above
// - now we have a 20px * 20px grid both for typography and positioning all elements

// Scaling
// - any font size / line height changes must preserve the basic 20px grid
// - if we have a smaller font we will make the line height larger to reach the 20px
// - if we have larget font sizes we will make the line height fit to a 20px multiplier
// - for determining the font size we will use Modular Scale / 3:4 Perfect Fourth settings: http://www.modularscale.com/?1&em&1.333&web&text



// The default metric for sizing non-typographic elements
// - it is based on the default font size and line height
{% set default_scale = typographic_scale | first %}
$lem: {{ default_scale.lem }};


// The maximun size of a text block
$text-width: {{ default_scale.text_width }};


// Different typographic scales
@mixin typographic-scale($variant) {
{% for scale in typographic_scale %}
  // {{ scale.description }}
  @if ($variant == '{{ scale.name }}') {
    {% for property in scale.properties %}{{ property.name }}: {{ property.value }};
    {% endfor %}
    {% for responsive in scale.responsive %}
    @include {{ responsive.breakpoint }} {
      {% for property in responsive.properties %}{{ property.name }}: {{ property.value }};
      {% endfor %}
    }
    {% endfor %}
  }
{% endfor %}
}
