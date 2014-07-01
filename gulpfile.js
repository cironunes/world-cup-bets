'use strict';

var gulp        = require('gulp');
var connect     = require('gulp-connect');
var jshint      = require('gulp-jshint');
var useref      = require('gulp-useref');
var deploy      = require('gulp-gh-pages');
var runSequence = require('run-sequence');
var rimraf      = require('rimraf');
var karma       = require('karma').server;
var _           = require('lodash');

var karmaCommonConf = require('./karma.conf.js');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  karma.start(_.assign({}, karmaCommonConf, {singleRun: true, browsers: ['Firefox']}), done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  karma.start(karmaCommonConf, done);
});

gulp.task('html', function() {
  return gulp.src('./app/**/*.html')
    .pipe(useref.assets())
    .pipe(useref.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('js', ['jshint'], function() {
  return gulp.src('./app/**/*.js')
    .pipe(connect.reload());
});

gulp.task('jshint', function() {
  return gulp.src(['app/**/*.js', '!app/{bower_components,bower_components/**/*.js}'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('css', function() {
  return gulp.src(['app/**/*.css', '!app/{bower_components,bower_components/**/*.css}'])
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', function() {
  gulp.watch(['.app/index.html', './app/**/*.html'], ['html']);
  gulp.watch(['.app/app.js', './app/**/*.js'], ['js']);
});

gulp.task('serve', ['watch'], function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('clean', function(cb) {
  rimraf('dist', rimraf.bind({}, '.tmp', cb));
});

gulp.task('deploy', function() {
  gulp.src('./dist/**/*')
    .pipe(deploy({
      cacheDir: '.tmp'
    }));
});

gulp.task('build', ['clean'], function(cb) {
  runSequence('css', ['images', 'html', 'deploy'], cb);
});

gulp.task('default', ['tdd']);
