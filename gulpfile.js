var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    webserver = require('gulp-webserver');

var src = './app',
    app = './public';

//Format for creating Gulp tasks
// gulp.task('default', function() {
//   // place code for your default task here
// });

gulp.task('js', function() {
  return gulp.src( src + 'App.js' )
    .pipe(browserify({
      transform: 'reactify',
      debug: true
    }))
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest(app + '/js'));
});

gulp.task('default', ['js']);
