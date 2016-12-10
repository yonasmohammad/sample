'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('src/scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(['src/scss/*.scss', 'src/scss/**/*.scss'], ['sass']);
});


gulp.task('default', ['sass'])
