var gulp = require('gulp'),
    requireDir = require('require-dir');

requireDir('./_tasks', { recurse: true });

gulp.task('default', ['imagemin', 'browserSync', 'watch']);
