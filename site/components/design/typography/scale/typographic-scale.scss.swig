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

// Reset all block text elements to default font size and line height
h1, h2, h3, h4, h5, h6, p, ul, li, dt, dl {
  font-size: {{ default_scale.font_size }};
  line-height: {{ default_scale.line_height }};
  margin: 0;
  padding: 0;
}


// Different typographic scales
@mixin typographic-scale($variant) {
{% for scale in typographic_scale %}
  // {{ scale.description }}
  @if ($variant == '{{ scale.name }}') {
    font-size: {{ scale.font_size }};
    line-height: {{ scale.line_height }};
  {% if scale.max_width %}max-width: {{ scale.max_width }};{% endif %}
  }
{% endfor %}
}
