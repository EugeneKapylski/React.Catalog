/**
 * Created by Evgeny.Kapylsky on 9/8/2015.
 */
"use strict";

var gulp  = require('gulp');
var open = require('gulp-open'); //Runs a local dev server
var connect = require('gulp-connect'); //Opens a URL in a web browser
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling etc.
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify'); //Transform React JSX to JS

var config = {
    port: 1180,
    devUrl: 'http://localhost',
    paths: {
        build: './build',
        html: './app/*.html',
        js: './app/*.js',
        libs: 'libs'
    }
};

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.build))
        .pipe(connect.reload());
});

gulp.task('js', ['external-libraries'], function() {
    browserify({
        entries: ['app/index.js'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {},
        packageCache: {},
        fullPaths: true // Requirement of watchify
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.paths.build))
    .pipe(connect.reload());
});

gulp.task('external-libraries', function() {
    gulp.src([
        './bower_components/react/react.js'
    ])
    .pipe(gulp.dest(config.paths.build + '/libs'));
});

gulp.task('connect', function() {
    connect.server({
        root: ['build'],
        port: config.port,
        base: config.devUrl,
        liverload: true
    });
});

gulp.task('open', ['connect'], function() {
    gulp.src(config.paths.build + '/index.html')
    .pipe(open({
            uri: config.devUrl + ':' + config.port + '/',
            app: 'firefox'
        })
    );
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['js', 'html', 'open', 'watch']);