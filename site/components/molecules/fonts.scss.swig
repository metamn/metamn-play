// Font settings
// - generated from components/molecules/fonts.scss.json
// - please do not edit directly this file

@mixin font($name) {
  {% for font in fonts %}
  // {{ font.name }}
  @if ($name == {{ font.name }}) {
    font-family: {{ font.family}};
    font-weight: {{ font.weight }};
    font-size: {{ font.size }};
  }
  {% endfor %}
}
