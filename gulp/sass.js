var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var base64 = require('gulp-css-base64');

var browserVersions = ['last 2 versions', 'ie >= 9'];

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    style: 'expanded',
    sourceComments: 'normal'
  }).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: browserVersions
  }))
  .pipe(cleanCSS({compatibility: 'ie9'}))
  .pipe(base64({
    baseDir: "src",
    maxWeightResource: 100000
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./dist/assets/css'))
});