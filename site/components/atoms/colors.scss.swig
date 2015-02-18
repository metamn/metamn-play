// Colors
// - generated from components/atoms/colors.scss.json
// - please do not edit directly this file

{% for color in colors %}
// {{ color.description }}
${{ color.name }}: {{ color.value }};
{% endfor %}
