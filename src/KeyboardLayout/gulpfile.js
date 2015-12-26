'use strict';
var gulp = require('gulp');

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