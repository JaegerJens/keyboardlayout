'use strict';
var gulp = require('gulp'),
    clean = require('gulp-clean');

var paths = {
    wwwroot: './wwwroot'
};

gulp.task('staticHtml', function () {
    gulp.src('*.html')
        .pipe(gulp.dest(paths.wwwroot));
});

gulp.task('default', ['staticHtml'], function () {
    // place code for your default task here
});

gulp.task('clean', function () {
    gulp.src(paths.wwwroot).pipe(clean());
});