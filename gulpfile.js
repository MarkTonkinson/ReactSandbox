var gulp = require('gulp');
var uglify = require('gulp-uglify'); //uglify is the minifier
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream'); //the .bundle I think merges files together
var browserify = require('browserify'); //browserify allows for the common.js "require"
var watchify = require('watchify'); // watchify replaces internal gulp watch when you are trying to 
                                    //watch browserify changes which have different dependencies. See article
                                    //for explanation - http://truongtx.me/2014/08/06/using-watchify-with-gulp-for-fast-browserify-build/
var reactify = require('reactify'); //JSX conversion
var streamify = require('gulp-streamify');



//https://www.youtube.com/watch?v=dwSLFai8ovQ this vid helps clarify what is going on
//.pipe uses vinyl.js to stream files internally in gulp
//when there are brackets around the string in the parameters, it has to wait on that dependency to go on.
//watchers watch the files you tell it to for changes and then perform the appropriate actions- you can decide when you
//want files to update and to change

var path = {
  HTML: 'src/index.html',
  MINIFIED_OUT: 'build.min.js', //where we are going to create the minified file
  OUT: 'build.js',
  DEST: 'dist',
  DEST_BUILD: 'dist/build',
  DEST_SRC: 'dist/src',
  ENTRY_POINT: './src/js/App.js'
};

gulp.task('copy', function(){
  gulp.src(path.HTML) //src is where it is looking
    .pipe(gulp.dest(path.DEST));//gulp.dest creates a file
});

gulp.task('watch', function() {
  gulp.watch(path.HTML, ['copy']);

  var watcher  = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function () {
    watcher.bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC))
      console.log('Updated');
  })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('build', function(){
  browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify]
  })
    .bundle()
    .pipe(source(path.MINIFIED_OUT))
    .pipe(streamify(uglify(path.MINIFIED_OUT)))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('replaceHTML', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('production', ['replaceHTML', 'build']);

gulp.task('default', ['watch']);

