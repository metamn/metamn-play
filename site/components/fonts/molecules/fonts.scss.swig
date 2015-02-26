// Font settings
// - generated from components/molecules/fonts.scss.json
// - please do not edit directly this file

@mixin font($name) {
  {% for font in fonts %}
  // {{ font.name }}
  @if ($name == {{ font.name }}) {
    {% for property in font.properties %}{{ property.name }}: {{ property.value }};
    {% endfor %}{% for mixin in font.mixins %}@include {{ mixin }};
    {% endfor %}
    {% for breakpoint in font.responsive %}@include {{ breakpoint.name }} {
      {% for property in breakpoint.properties %}{{ property.name }}: {{ property.value }};
    {% endfor %}}
  }
  {% endfor %}
}
