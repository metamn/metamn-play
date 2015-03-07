<!--
Full screen HTML5 video
- http://demosthenes.info/blog/777/Create-Fullscreen-HTML5-Page-Background-Video
-->


<video id="{{ video.id }}" autoplay loop poster="{{ site.url }}{{ site.images }}{{ video.image }}">
  <source src="{{ site.url }}{{ site.images }}{{ video.webm }}" type="video/webm">
  <source src="{{ site.url }}{{ site.images }}{{ video.mp4 }}" type="video/mp4">
</video>
