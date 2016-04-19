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
        autoprefixer
	];

	return gulp.src("./app/postcss/**/*.css")
	 	.pipe(sourcemaps.init())
		.pipe(postcss(processors))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("./app/css"))
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

	return gulp.src("./app/postcss/**/*.css")
		.pipe(postcss(processors))
		.pipe(gulp.dest("./dist/css"));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch', ['browserSync'], function(){
	gulp.watch('app/postcss/**/*.css', ['css']); 
	gulp.watch('app/*.html', browserSync.reload); 
  	gulp.watch('app/js/**/*.js', browserSync.reload); 
});

gulp.task("default", ["css"]);