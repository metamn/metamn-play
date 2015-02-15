

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

    minifyHTML = require('gulp-minify-html');


// Folder structure
var paths = {
  // the source of all html files from site which will go to the final destination folder
  site_html_src: 'app/site/**/*.html',

  // the source of all html files from Styleguide which will go to the final destination folder
  styleguide_html_src: 'app/styleguide/**/*.html',

  // the final destination folder for styleguide
  dest_styleguide: 'dist/styleguide',

  // the final destination folder
  dest: 'dist',

  // the source of all swig files
  swig_src: 'app/**/*.swig',

  // the destination of all compiled swig files
  swig_dest: 'app',

  // watch these files for changes
  watch: ['app/**/*.swig', 'app/**/*.json']
};




// Site HTML
// - collect all .html files from site and move them to the final destination folder
// - URLs are made seo friendly: about.html => about/index.html
gulp.task('site_html', function() {
  return gulp.src(paths.site_html_src)
    .pipe(rename(function(path) {
      if (path.basename != 'index') {
        path.dirname = path.basename;
        path.basename = 'index';
      }
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
      if (path.basename != 'index') {
        path.dirname = path.basename;
        path.basename = 'index';
      }
    }))
    .pipe(minifyHTML())
    .pipe(gulp.dest(paths.dest_styleguide));
});



// Swig
// - compile a .swig file with external JSON data into HTML or SCSS
// - the generated file will be saved into the same directory as the source file
// - it works also when there is no JSON file
//
// - the .swig file has to have two prefixes, the first prefix is the output format (.scss, .html)
// - example:
//    - input:
//        colors.json
//        colors.scss.swig
//    - output:
//        colors.scss
//
// - when in Styleguide if there is a JSON in Components it will be used
// - example:
//    - input:
//        components/atoms/colors.json
//        styleguide/atoms/colors.html.swig
//    - output:
//        styleguide/atoms/colors.html using data from colors.json
gulp.task('swig', function() {
  return gulp.src(paths.swig_src)
    .pipe(data(function(file) {

      // Get the JSON from the same folder
      json = file.path.split('.')[0] + '.json';
      if (fs.existsSync(json)) {
        return require(json);
      }

      // If we are in the styleguide get the JSON from components
      if (file.path.indexOf('styleguide') > -1) {
        components = file.path.replace('styleguide', 'components');
        json = components.split('.')[0] + '.json';
        if (fs.existsSync(json)) {
          return require(json);
        }
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
