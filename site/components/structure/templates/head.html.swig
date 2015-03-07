{% import "../../../helpers/classname.swig" as c  %}
{% set classname = c.classname(title) %}

<!doctype html>
<html lang="en" class="{{ classname }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>{{ title }} &mdash; {{ site.title }}</title>

    <link href="{{ site.url }}assets/styles/site.css" media="screen, projection" rel="stylesheet" type="text/css" />

    <!-- Picturefill Responsive Images -->
    <script async src="{{ site.url }}assets/scripts/picturefill.min.js"></script>
  </head>

  <body>
