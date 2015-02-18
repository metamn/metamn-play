// Typographic grid
// - generated from components/atoms/typography/typographic_grid.scss.json
// - please do not edit directly this file

// The basic font size and line height
body {
  font-size: {{ typographic_grid.font_size }};
  line-height: {{ typographic_grid.line_height }};
}

{% for variable in typographic_grid.s
  css_variables %}
// {{ variable.description }}
${{variable.name }}: {{ variable.value }};
{% endfor %}
