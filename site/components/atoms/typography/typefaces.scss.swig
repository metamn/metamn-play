// Typefaces
// - generated from components/atoms/typography/typefaces.scss.json
// - please do not edit directly this file

{% for font in fonts %}
// {{ font.name }}
// - {{ font.description }}, {{ font.font_family }}
// - character set: {{ font.character_set }}
// - served from {{ font.served_from }}
// - styles and weights: {% for style in font.styles %}{{ style.name }}, {% endfor %}
{% if font.served_from == "Google" %}
@import url(http://fonts.googleapis.com/css?family={{ font.google_font_id }}:{% for style in font.styles %}{{ style.id }},{% endfor %});
{% endif %}
{% endfor %}
