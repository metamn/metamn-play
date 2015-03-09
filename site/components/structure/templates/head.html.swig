{% import "../../../helpers/classname.swig" as c  %}
{% set classname = c.classname(title) %}

<!doctype html>
<html lang="en" class="{{ classname }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>{{ title }} &mdash; {{ site.title }}</title>

    <script type="text/javascript">
    (function() {
        var path = '//easy.myfonts.net/v2/js?sid=5071(font-family=Neuzeit+Grotesk+Bold)&sid=5070(font-family=Neuzeit+Grotesk+Regular)&sid=5069(font-family=Neuzeit+Grotesk+Light)&key=FcBJMlF3Ms',
            protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
            trial = document.createElement('script');
        trial.type = 'text/javascript';
        trial.async = true;
        trial.src = protocol + path;
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(trial);
    })();
    </script>

    <link href="{{ site.url }}assets/styles/site.css" media="screen, projection" rel="stylesheet" type="text/css" />

    <!-- Picturefill Responsive Images -->
    <script async src="{{ site.url }}assets/scripts/picturefill.min.js"></script>
  </head>

  <body>
