
var gulp = require('gulp');
var minifycss   = require("gulp-minify-css");

gulp.task('less', function () {
    return gulp.src('./*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./'));
});

