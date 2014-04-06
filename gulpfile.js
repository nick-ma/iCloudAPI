var pkg = require("./package.json");
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');

var watching = false;
var onError = function (err) {
    if (watching) {
        this.emit('end');
    } else {
        process.exit(1);
    }
};
gulp.task('lint', function () {
    return gulp.src(['gulpfile.js', 'lib/*.js', 'test/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
    return gulp.src('test/*.js')
        .pipe(mocha({
            reporter: 'spec'
        }))
        .on('error', onError);

});

gulp.task('watch', function () {
    watching = true;
    gulp.watch(['lib/*.js', 'test/*.js'], function () {
        gulp.run('lint', 'test');
    });
});

gulp.task('default', ['watch']);
