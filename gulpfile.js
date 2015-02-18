

// Plugins
var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
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



var paths = {
  // .swig source files
  swig_src: ['components/**/*.swig'],

  // .swig dest files (same directory)
  swig_dest: 'components',

  // global config.json file
  config_json: './site/config.json',



  // .html files from /site to be moved into dest
  html_src: 'site/components/pages/**/*.html',

  // the destination folder
  dest: 'dist',


  // .html files from /styleguide to be moved to dest
  styleguide_html_src: 'styleguide/components/**/*.html',

  // the destination folder for /styleguide
  styleguide_dest: 'dist/styleguide',




  // .scss file to compile
  scss_src: 'assets/styles/site.scss',

  // .css file destination
  scss_dest: 'dist/assets/styles',

  // .css file destination for /styleguide
  styleguide_scss_dest: 'dist/styleguide/assets/styles',




  // watch these files for changes
  watch: ['site/**/*.{swig,json,scss}', 'styleguide/**/*.{swig,json,scss}']
};




// SCSS

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

gulp.task('scss', function(){
  _scss('site/' + paths.scss_src, paths.scss_dest);
  _scss('styleguide/' + paths.scss_src, paths.styleguide_scss_dest);
});




// HTML

gulp.task('html_styleguide', function() {
  return gulp.src(paths.styleguide_html_src)
    .pipe(rename(function(path) {
      // rename about.html > about/index.html
      if (path.basename != 'index') {
        path.dirname = path.dirname + '/' + path.basename;
        path.basename = 'index';
      }

      // rename pages/index.html > index.html
      if (path.dirname == 'pages' && path.basename == "index") {
        path.dirname = '';
      }
    }))
    .pipe(minifyHTML())
    .pipe(gulp.dest(paths.styleguide_dest));
});


gulp.task('html_site', function() {
  return gulp.src(paths.html_src)
    .pipe(rename(function(path) {
      // rename about.html > about/index.html
      if (path.basename != 'index') {
        path.dirname = path.dirname + '/' + path.basename;
        path.basename = 'index';
      }
    }))
    .pipe(minifyHTML())
    .pipe(gulp.dest(paths.dest));
});





// SWIG

var _swig = function(source, dest, grabJSON) {
  return gulp.src(source)

    // use global JSON definitions from /site in /styleguide
    .pipe(data(function(file) {
      if (grabJSON) {
        components = file.path.replace('styleguide', 'site');
        json = components.split('.')[0] + '.scss.json';
        if (fs.existsSync(json)) {
          return require(json);
        }
      }
    }))

    // use YAML Front Matter
    .pipe(data(function(file) {
      console.log(file.path);
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
    .pipe(gulp.dest(dest));
}



// Swig
gulp.task('swig', function() {
  _swig('site/' + paths.swig_src, 'site/' + paths.swig_dest);
  _swig('styleguide/' + paths.swig_src, 'styleguide/' + paths.swig_dest, true);
});







// Common tasks
//

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
    'html_site',
    'html_styleguide',
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
