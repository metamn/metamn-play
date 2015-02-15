

// Plugins
var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),

    swig = require('gulp-swig'),
    data = require('gulp-data'),
    fm = require('front-matter'),
    fs = require('fs'),

    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify');


// Folder structure
var paths = {
  swig_src: 'app/**/*.swig',
  swig_dest: 'app',
  css: 'app/components/pages/*.css',
  js: 'app/components/**/*.js',
  styles: 'dist/assets/styles',
  scripts: 'dist/assets/scripts',
  assets_src: 'app/assets/**/*',
  assets_dest: 'dist/assets',
  pages: 'app/components/pages/*.html',
  site: 'dist',
  home: 'dist/home',
  watch: ['components/**/*.swig', 'components/pages/*.{js,css}']
};



// Swig
// - compile a .swig file with external JSON data into HTML or SCSS
// - it works also when there is no JSON file
// - the .swig file has to have two prefixes, the first prefix is the output format (.scss, .html)
// - example:
//    colors.json
//    colors.scss.swig
// - output:
//    colors.scss
gulp.task('swig', function() {
  return gulp.src(paths.swig_src)
    .pipe(data(function(file) {
      json = file.path.split('.')[0] + '.json';
      if (fs.existsSync(json)) {
        return require(json);
      }
    }))
    .pipe(swig({
      defaults: {
        cache: false
      }
    }))
    .pipe(rename({ extname: '' }))
    .pipe(gulp.dest(paths.swig_dest));
});



// Swig
// - compile a .swig file with YAML front matter into HTML
gulp.task('swig2', function() {
  return gulp.src(paths.swig)
    .pipe(data(function(file) {
      var content = fm(String(file.contents));
      file.contents = new Buffer(content.body);
      return content.attributes;
    }))
    .pipe(swig({
      defaults: {
        cache: false
      }
    }))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest(paths.components));
});


// Styles
// - move all .css files from components/pages to site/assets/styles
// - .css is created from .scss by Compass not Gulp
// - Compass is used instead of Autoprefixer because of it's well working globbing feature
gulp.task('styles', function() {
  return gulp.src(paths.css)
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest(paths.styles));
});


// Scripts
// - collect all .js files into all.js, then minify into all.min.js, then move to site/assets/scripts
gulp.task('scripts', function() {
  return gulp.src(paths.js)
    .pipe(concat('all.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts));
});


// Assets
// - move all assets from assets/ to site/assets/
gulp.task('assets', function() {
  return gulp.src(paths.assets_src)
    .pipe(gulp.dest(paths.assets_dest));
});


// Pages
// - compacting pages
// - ex: pages/home.html => home/index.html
gulp.task('pages', function() {
  return gulp.src(paths.pages)
    .pipe(rename(function(path) {
      path.dirname = path.basename;
      path.basename = 'index';
    }))
    .pipe(gulp.dest(paths.site))
  ;
});



// Home
// - making a homepage from an existing page
// ex: home/index.html => index.html
gulp.task('home', function(cb) {
  gulp.src(paths.home + '/index.html')
    .pipe(rename('index.html'))
    .pipe(gulp.dest(paths.site))
  del([paths.home]);
  cb();
});



// Clean site/**
gulp.task('clean', function(cb) {
  del([paths.site + '/**/*']);
  cb();
});




// The default task
// - runSequence makes sure all tasks are running one after another
// - otherwise Gulp is messing up everything with it's async task runner
gulp.task('default', function(cb) {
  runSequence(
    'clean',
    'swig',
    'styles',
    'scripts',
    'assets',
    'pages',
    'home',
    cb
  );
});


// Start server
gulp.task('server', function(cb) {
  browserSync({
    server: {
      baseDir: paths.site
    }
  });

  cb();
});


// Watch
gulp.task('watch', ['server'], function(cb) {
  gulp.watch(paths.watch, ['default']);

  cb();
});
