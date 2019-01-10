const gulp 		= require('gulp');
const browserSync = require('browser-sync').create();
const sass 		= require('gulp-sass');
const path = 'http://localthost:8888/path';

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['sass/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream())

});
// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest("js"))
        .pipe(browserSync.stream())

});
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
	browserSync.init({
		browser: "google chrome",
		proxy: path
	})

    gulp.watch(['sass/*.scss', 'sass/partials/*.scss'], ['sass'])
    gulp.watch("css/*.css").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
    gulp.watch("templates/*.html.twig").on('change', browserSync.reload);

});

gulp.task('default', ['js','serve']);