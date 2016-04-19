'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var autoprefixer = require('autoprefixer');
var rucksack = require('rucksack-css');
var vars = require('postcss-simple-vars');
var nested = require('postcss-nested');

gulp.task('css', function(){
	var processors = [
		vars,
        nested,
        rucksack,
        autoprefixer,
        cssnano
	];

	return gulp.src("./postcss/**/*.css")
	 	.pipe(sourcemaps.init())
		.pipe(postcss(processors))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("./styles"))
		.pipe(browserSync.reload({
	      stream: true
	    }));
});

gulp.task('build', function(){
	var processors = [
		vars,
        nested,
        rucksack,
	    cssnano
	];

	return gulp.src("./postcss/**/*.css")
		.pipe(postcss(processors))
		.pipe(gulp.dest("./styles"))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
});

gulp.task('watch', ['browserSync'], function(){
	gulp.watch('postcss/**/*.css', ['css']); 
	gulp.watch('*.html', browserSync.reload); 
  	gulp.watch('scripts/**/*.js', browserSync.reload); 
});

gulp.task("default", ["css"]);