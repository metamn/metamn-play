// Colors
// - generated from app/components/atoms/color.json
// - please do not edit directly this file

{% for color in colors %}
// {{ color.description }}
${{ color.name }}: {{ color.value }};
{% endfor %}
