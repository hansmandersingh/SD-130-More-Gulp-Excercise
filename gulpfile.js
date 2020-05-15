const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function cleanUpCss() {
  return gulp.src('src/css/*')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
}

function imageCompress() {
  return gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
}

function babel() {
  return gulp.src('src/js/app.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
}

function htmlPipe() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
}

exports.default = gulp.parallel(cleanUpCss, imageCompress, babel, htmlPipe);