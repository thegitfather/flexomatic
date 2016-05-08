'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');

var config = {
  entryCss: 'src/scss/flexomatic.scss',
  srcCss: 'src/scss/**/*.scss',
  dist: 'dist'
};

gulp.task('build:css', function(cb) {
  gulp.src(config.entryCss)
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(gulp.dest(config.dist))
    // minified
    .pipe(cleanCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.dist));
  cb();
});

gulp.task('watch', function(cb) {
  gulp.watch(config.srcCss, ['build:css']);
});

gulp.task('default', ['build:css', 'watch']);
