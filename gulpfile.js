var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpCopy = require('gulp-copy');
var htmlmin = require('gulp-htmlmin');
 
gulp.task('compress', function(){
  gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})

gulp.task('build', ['compress'], function(){
  gulp.src(['src/*.css', 'src/*.html'])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulpCopy('dist', { prefix: 1 }))
    .pipe(gulp.dest('dist'))
})