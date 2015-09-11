/**
 * Created by Evgeny.Kapylsky on 9/8/2015.
 */
"use strict";

var gulp  = require('gulp');
var open = require('gulp-open'); //Runs a local dev server
var connect = require('gulp-connect'); //Opens a URL in a web browser
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling etc.
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify'); //Transforms React JSX to JS
var concat = require('gulp-concat'); //Concatenates files

var config = {
    port: 1180,
    devUrl: 'http://localhost',
    paths: {
        build: './build',
        html: './app/*.html',
        css: [
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        js: './app/*.js',
        externalLibraries: [
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/react/react.min.js'
        ],
        libs: '/scripts/libs'
    }
};

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.build))
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.build + '/css'));
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
    .pipe(gulp.dest(config.paths.build + '/scripts'))
    .pipe(connect.reload());
});

gulp.task('external-libraries', function() {
    gulp.src(config.paths.externalLibraries)
    .pipe(gulp.dest(config.paths.build + config.paths.libs));
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

gulp.task('default', ['html', 'css', 'js', 'open', 'watch']);