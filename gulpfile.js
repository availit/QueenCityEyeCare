const gulp = require('gulp')
const nunjucksRender = require('gulp-nunjucks-render')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create()

// gulp default
gulp.task('default', ['serve'])

// npm run build
gulp.task('build', ['nunjucks','imageMin', 'sass', 'JS'])

// npm run dev
gulp.task('serve', ['nunjucks','imageMin', 'sass', 'JS'], () => {
  browserSync.init({
    server: "./dist"
  })
  gulp.watch('src/js/*.js', ['JS']).on('change', browserSync.reload)
  gulp.watch('src/scss/*.scss', ['sass']).on('change', browserSync.reload)
  gulp.watch('src/pages/**/*.nj', ['nunjucks']).on('change', browserSync.reload)
  gulp.watch('src/templates/**/*.nj', ['nunjucks']).on('change', browserSync.reload)
})

//compile templates
gulp.task('nunjucks', () => {
  return gulp.src('src/pages/**/*.nj')
    .pipe(nunjucksRender({
      path: ['src/templates']
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
})

// optimze images
gulp.task('imageMin', () => {
  return gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
})


// compile sass
gulp.task('sass', () => {
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
})

// compile Javascript dependancies
gulp.task('JS', () => {
  return gulp.src(['node_modules/jquery/dist/jquery.js', 'src/js/materialize/bin/materialize.min.latest.js', 'src/js/index.js'])
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
})

// minify html
gulp.task('minifyHtml', () => {
  return gulp.src('src/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('dist'))
})
