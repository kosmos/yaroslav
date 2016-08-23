var gulp        = require('gulp');
var yaml        = require('gulp-yaml');
var plumber     = require('gulp-plumber');
var changed     = require('gulp-changed');
var config      = require('../config');


function compileYaml(onlyChanged) {
    return gulp.src(config.src.data + '/*.yml')
        .pipe(plumber({ errorHandler: config.errorHandler }))
        .pipe(yaml({ schema: 'DEFAULT_SAFE_SCHEMA' }))
        .pipe(gulp.dest(config.dest.data));
}

gulp.task('yaml', function() {
    return compileYaml();
});

gulp.task('yaml:changed', function() {
    return compileYaml(true);
});

gulp.task('yaml:watch', function() {
    gulp.watch([config.src.data + '/**/_*.yml'], ['yaml']);
    gulp.watch([config.src.data + '/**/[^_]*.yml'], ['yaml:changed']);
});
