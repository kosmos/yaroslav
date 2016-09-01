var gulp = require('gulp');
var postcss = require('gulp-postcss');
var csso = require('postcss-csso');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config');

var processors = [
    csso({
        restructure: true,
        sourceMap: true,
        debug: true
    })
];

gulp.task('csso', function () {
    return gulp.src(config.dest.css + '/*.css')
        .pipe( sourcemaps.init() )
        .pipe( postcss(processors))
        .pipe( sourcemaps.write('.') )
        .pipe(gulp.dest(config.dest.css));
});
