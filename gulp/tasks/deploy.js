var gulp        = require('gulp');
var runSequence = require('run-sequence');
var ghPages     = require('gulp-gh-pages');
var config      = require('../config');

function deply(cb) {
    runSequence(
        'build',
        'push',
        cb
    );
}

gulp.task('push', function() {
    return gulp.src(config.dest.root + '/**/*')
        .pipe(ghPages());
});

gulp.task('deploy', function(cb) {
    deply(cb);
});
