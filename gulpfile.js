

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
//
// - we have two separate sites (/site) and (/styleguide)
// - the final files are generated into /dist where /styleguide is mounted as a page of /site
// - /styleguide can use all the resources (components, helpers) of /site and can have it's own too
var paths = {
  // the source of all the .html files which will go to the final destination folder, from /site
  site_html_src: 'site/components/pages/**/*.html',

  // the source of all the .html files which will go to the final destination folder, from /styleguide
  styleguide_html_src: 'styleguide/components/**/*.html',

  // the final destination folder
  dest: 'dist',

  // the final destination folder for /styleguide
  dest_styleguide: 'dist/styleguide',



  // the source of all .swig files
  swig_src: '**/*.swig',

  // the config JSON file shared accross all swig templates (it should be an absolute url, starting with './')
  config_json: 'config.json',




  // the main scss file to be compiled to css; they include all other scss partials from /components
  scss_src: 'assets/styles/site.scss',



  // watch these files for changes
  watch: ['site/**/*.swig', '!site/helpers/**/*.swig', 'site/**/*.json', 'site/**/*.scss', 'styleguide/**/*.swig', '!styleguide/helpers/**/*.swig', 'styleguide/**/*.json', 'styleguide/**/*.scss']
};



// Helpers
//
// - they are in fact regular Gulp tasks
// - they are refactored into functions since they'll be used twice, once for /site and once for /styleguide

// SCSS
// - there is a single .scss file in /assets/styles/site.scss which includes (imports) all other scss files from /components
// - only this file is compiled to css, all others in /components are not
// - a sourcemap is created
// - Autoprefixer is used with default settings (https://github.com/ai/browserslist) > 1%, last 2 versions, Firefox ESR, Opera 12.1.
// - The final css is minified
var _scss = function(source, dest) {
  gulp.src(source)
    .pipe(cssGlobbing({
      extensions: ['.scss']
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest));
}


// HTML
// - collect all .html files and move them to the final destination folder
// - URLs are made seo friendly: about.html => about/index.html
var _html = function(source, dest) {
  return gulp.src(source)
    .pipe(rename(function(path) {
      if (path.basename != 'index') {
        path.dirname = path.dirname + '/' + path.basename;
        path.basename = 'index';
      }
    }))
    .pipe(minifyHTML())
    .pipe(gulp.dest(dest));
}



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
// - when in /styleguide if there is a similar file named .json in site/components it will be used
// - example:
//    - input:
//        site/components/atoms/colors.scss.json
//        styleguide/components/atoms/colors.html.swig
//    - output:
//        styleguide/components/atoms/colors.html using data from colors.json
var _swig = function(source) {
  return gulp.src(source + paths.swig_src)
    // if we are in the styleguide get the JSON from components
    .pipe(data(function(file) {
      if (file.path.indexOf('styleguide') > -1) {
        components = file.path.replace('styleguide', 'site');
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
          site: require('./site/' + paths.config_json)
        }
      }
    }))
    .pipe(rename({ extname: '' }))
    .pipe(gulp.dest(source));
}




// Tasks
//
// SCSS
gulp.task('scss', function(){
  _scss('site/' + paths.scss_src, paths.dest + '/assets/style/');
  _scss('styleguide/' + paths.scss_src, paths.dest + '/styleguide');
});


// HTML
gulp.task('html', function() {
  //_html(paths.site_html_src, paths.dest);
  //_html(paths.styleguide_html_src, paths.dest_styleguide);
});


// Swig
gulp.task('swig', function() {
  _swig('site/');
  _swig('styleguide/');
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
    'html',
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
