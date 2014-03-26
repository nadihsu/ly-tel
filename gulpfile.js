var jade = require('gulp-jade');
var rename = require("gulp-rename");
var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass')

gulp.task('sass', function () {
    gulp.src('./css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src('./jade/index.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./'))
});


gulp.task('default', ['templates', 'sass'])