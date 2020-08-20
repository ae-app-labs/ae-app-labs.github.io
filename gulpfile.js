var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('./sass/main.sass')
        .pipe( sass().on('error', sass.logError))
        .pipe( gulp.dest('./css'))
        .pipe( browserSync.stream() )
});

// Clean output directory
gulp.task('clean', () => del(['dist']));

// Gulp task to minify CSS files
gulp.task('styles', function () {
    return gulp.src('./sass/main.sass', {allowEmpty: true})
      // Compile SASS files
      .pipe(sass({
        outputStyle: 'nested',
        precision: 10,
        includePaths: ['.'],
        onError: console.error.bind(console, 'Sass error:')
      }))
      // Minify the file
      .pipe(csso())
      // Output
      .pipe(gulp.dest('./dist/css'))
  });

gulp.task('serve', gulp.series('sass', function(){

    browserSync.init({
        server: "./"
    })

    gulp.watch('./sass/main.sass', gulp.series('sass'))
    gulp.watch("./*.html").on('change', browserSync.reload)
}));

gulp.task('default', gulp.series('serve'));