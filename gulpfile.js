var pkg = require("./package.json");
var gulp = requite('gulp');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var gutil = require('gulp-util');

gulp.task('watch', function () {
    gulp.watch('lib');
})

gulp.task('default', ['watch']);
