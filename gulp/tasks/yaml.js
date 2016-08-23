var gulp        = require('gulp');
var yaml        = require('gulp-yaml');
var config      = require('../config');

gulp.src(config.src.data + '/*.yml')
  .pipe(yaml({ schema: 'DEFAULT_SAFE_SCHEMA' }))
  .pipe(gulp.dest(config.dest.data))

gulp.src(config.src.data + '/*.yml')
  .pipe(yaml({ space: 2 }))
  .pipe(gulp.dest(config.dest.data))

gulp.src(config.src.data + '/*.yml')
  .pipe(yaml({ safe: true }))
  .pipe(gulp.dest(config.dest.data))
