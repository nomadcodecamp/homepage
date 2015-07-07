var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var stylus       = require('gulp-stylus');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').stylus;
// var autoprefixer = require('gulp-autoprefixer');
var nib 				 = require('nib');
var jeet 				 = require('jeet');
var concat       = require('gulp-concat')

gulp.task('stylus', function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(stylus({use:
    	[nib(), jeet()]
    }))
    .pipe(concat('app.css'))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
