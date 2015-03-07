@mixin full-screen-video {
  position: relative;

  video {
    position: relative;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    background: url({{ site.url }}{{ site.images }}hero.png) no-repeat;
    background-size: cover;

    @include tablet-and-below {
      display: none;
    }
  }

  .video-fallback {
    display: none;

    @include tablet-and-below {
      display: block;
      background: url({{ site.url }}{{ site.images }}hero.png) no-repeat;
      background-size: cover;
      height: 12.5em;
    }
  }

}
