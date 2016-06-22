var gulp = require('gulp');
var requireDir = require('require-dir');
var sequence = require('run-sequence');
var tasks = requireDir('./gulp');

gulp.task('build', function() {
  sequence(['sass']);
});

gulp.task('default', ['build'], function() {
  gulp.watch(['src/sass/**/*.scss'], ['sass']);
});