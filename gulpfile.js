/**
 * Created by Evgeny.Kapylsky on 9/8/2015.
 */
"use strict";

var gulp  = require('gulp');
var open = require('gulp-open'); //Runs a local dev server
var connect = require('gulp-connect'); //Opens a URL in a web browser
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling etc.
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

var config = {
    port: 1180,
    devUrl: 'http://localhost',
    paths: {
        build: './build',
        html: './app/*.html',
        libs: 'libs'
    }
};

gulp.task('browserify', function() {
    console.log('Started browserify!');
    var bundler = browserify({
        entries: ['app/index.js'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {},
        packageCache: {},
        fullPaths: true // Requirement of watchify
    });

    var watcher  = watchify(bundler);
    console.log('Completed browserify!');
    return watcher
        .on('update', function () { // When any files update
            console.log('Start bundling scripts to single app.js');
            watcher.bundle() // Create new bundle that uses the cache for high performance
                .pipe(source('app.js'))
                .pipe(gulp.dest(config.paths.build));
            console.log('Completed bunbling of scripts to single app.js file');
        })
        .bundle() // Create the initial bundle when starting the task
        .pipe(source('app.js'))
        .pipe(gulp.dest(config.paths.build));

});

gulp.task("copy-libraries", function() {
    gulp.src([
        './bower_components/react/react.js'
    ])
    .pipe(gulp.dest(config.paths.build + '/libs'));
});

gulp.task("connect", function() {
    connect.server({
        root: ['build'],
        port: config.port,
        base: config.devUrl,
        liverload: true
    });
});

gulp.task("open", ["connect"], function() {
    gulp.src(config.paths.build + '/index.html')
    .pipe(open({
            uri: config.devUrl + ':' + config.port + '/',
            app: 'firefox'
        })
    );
});

gulp.task("html", function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.build))
        .pipe(connect.reload());
});

gulp.task("watch", function(){
    gulp.watch(config.paths.html, ['html']);
});

gulp.task('default', ['copy-libraries', 'browserify', 'html', 'open', 'watch']);