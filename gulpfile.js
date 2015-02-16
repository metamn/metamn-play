

// Plugins
var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),

    swig = require('gulp-swig'),
    data = require('gulp-data'),
    fs = require('fs'),
    fm = require('front-matter'),
    minifyHTML = require('gulp-minify-html'),

    sass = require('gulp-sass'),
    cssGlobbing = require('gulp-css-globbing'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    minifyCSS = require('gulp-minify-css');


// Folder structure
var paths = {
  // the source of all html files from Site which will go to the final destination folder
  site_html_src: 'app/site/**/*.html',

  // the source of all html files from Styleguide which will go to the final destination folder
  styleguide_html_src: 'app/styleguide/**/*.html',

  // the final destination folder for Styleguide
  dest_styleguide: 'dist/styleguide',

  // the final destination folder
  dest: 'dist',

  // the source of all swig files
  swig_src: ['app/**/*.swig', '!app/helpers/**/*.swig'],

  // the destination of all compiled swig files
  swig_dest: 'app',

  // the config JSON file shared accross all swig templates (it should be an absolute url)
  config_json: './app/site/config.json',

  // the main scss files to compile to css; they include all other scss partials from /components
  scss_source: 'app/site/assets/styles/site.scss',

  // the destination for the compiled css file
  scss_dest: 'dist/assets/styles',

  // watch these files for changes
  watch: ['app/**/*.swig', '!app/helpers/**/*.swig', 'app/**/*.json']
};




// Helper functions
//
// Make URLs SEO friendly
// - about.html => about/index.html
var seoFriendlyURL = function(path) {
  if (path.basename != 'index') {
    path.dirname = path.dirname + '/' + path.basename;
    path.basename = 'index';
  }
}



// SASS
// - there is a single .scss file in site/assets/styles/site.scss which includes (imports) all other scss files from /components
// - only this file is compiled to css, all others in /components are not
// - a sourcemap is created
// - Autoprefixer is used with default settings (https://github.com/ai/browserslist) > 1%, last 2 versions, Firefox ESR, Opera 12.1.
// - The final css is minified
gulp.task('scss', function(){
  gulp.src(paths.scss_source)
    .pipe(cssGlobbing({
      extensions: ['.scss']
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scss_dest));
});



// Site HTML
// - collect all .html files from site and move them to the final destination folder
// - URLs are made seo friendly: about.html => about/index.html
gulp.task('site_html', function() {
  return gulp.src(paths.site_html_src)
    .pipe(rename(function(path) {
      seoFriendlyURL(path);
    }))
    .pipe(minifyHTML())
    .pipe(gulp.dest(paths.dest));
});


// Styleguide HTML
// - collect all .html files from styleguide and move them to the final destination folder /styleguide
// - URLs are made seo friendly: about.html => about/index.html
gulp.task('styleguide_html', function() {
  return gulp.src(paths.styleguide_html_src)
    .pipe(rename(function(path) {
      seoFriendlyURL(path);
    }))
    .pipe(minifyHTML())
    .pipe(gulp.dest(paths.dest_styleguide));
});



// Swig
// - compile a .swig file into HTML or SCSS
// - the generated file will be saved into the same directory as the source file
//
// - JSON and Front Matter are supported
//    - the JSON has to have the same filename, ie index.html.json
//    - if a data has to be reused accross the site and/or styleguide it has to stay as JSON. ie colors.scss.json
//    - if the data is just local, like page title it can be a YAML Front Matter entry
//
// - the .swig file has to have two prefixes, the first prefix is the output format (.scss, .html)
// - example:
//    - input:
//        colors.scss.json
//        colors.scss.swig
//    - output:
//        colors.scss
//
// - when in Styleguide if there is a JSON in Components it will be used
// - example:
//    - input:
//        components/atoms/colors.scss.json
//        styleguide/atoms/colors.html.swig
//    - output:
//        styleguide/atoms/colors.html using data from colors.json
gulp.task('swig', function() {
  return gulp.src(paths.swig_src)
    // if we are in the styleguide get the JSON from components
    .pipe(data(function(file) {
      if (file.path.indexOf('styleguide') > -1) {
        components = file.path.replace('styleguide', 'components');
        json = components.split('.')[0] + '.scss.json';
        if (fs.existsSync(json)) {
          return require(json);
        }
      }
    }))

    // use YAML Front Matter
    .pipe(data(function(file) {
      var content = fm(String(file.contents));
      file.contents = new Buffer(content.body);
      return content.attributes;
    }))

    // load JSONs
    .pipe(swig({
      // Load a same-name JSON file if found
      load_json: true,
      defaults: {
        cache: false,
        // Load site-wide JSON settings
        locals: {
          site: require(paths.config_json)
        }
      }
    }))
    .pipe(rename({ extname: '' }))
    .pipe(gulp.dest(paths.swig_dest));
});



// Clean destination folder
gulp.task('clean', function(cb) {
  del([paths.dest + '/**/*']);
  cb();
});




// The default task
// - runSequence makes sure all tasks are running one after another
// - otherwise Gulp is messing up everything with it's async task runner
gulp.task('default', function(cb) {
  runSequence(
    'clean',
    'swig',
    'site_html',
    'styleguide_html',
    'scss',
    cb
  );
});


// Start server
gulp.task('server', function(cb) {
  browserSync({
    server: {
      baseDir: paths.dest
    }
  });

  cb();
});


// Watch
gulp.task('watch', ['server'], function(cb) {
  gulp.watch(paths.watch, ['default']);

  cb();
});
