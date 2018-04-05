const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create()
/*
  -- Top level functions --
  gulp.task - define tasks
  gulp.src - point to file source
  gulp.dest - point to output folder
  gulp.watch - watch files/folders for changes

*/

// gulp default
gulp.task('default', ['serve'])
// gulp Build
gulp.task('build', ['imageMin', 'minifyHtml', 'sass', 'JS'])

gulp.task('serve', ['imageMin', 'minifyHtml', 'sass', 'JS'], () => {
  browserSync.init({
    server: "./dist"
  })

  gulp.watch('src/js/*.js', ['JS'])
  gulp.watch('src/scss/*.scss', ['sass'])
  gulp.watch('src/*.html', ['minifyHtml']).on('change', browserSync.reload)
})

// optimze images
gulp.task('imageMin', () => {
  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
})

// minify html
gulp.task('minifyHtml', () => {
  gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
})

// compile sass
gulp.task('sass', () => {
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
})

// compile Javascript dependancies
gulp.task('JS', () => {
  gulp.src(['node_modules/jquery/dist/jquery.js','src/js/index.js', 'src/js/materialize/bin/materialize.min.js'])
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
})
