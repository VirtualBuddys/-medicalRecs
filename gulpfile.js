var gulp = require('gulp');
//var nodemon =require('gulp-nodemon');
//var karma = require('gulp-karma');
//var bs = require('browser-sync');
//var reload = bs.reload;
//var when = require('gulp-if');
//var shell = require('gulp-shell');
//var concat = require('gulp-concat');
//var rename = require('gulp-rename');
//var uglify = require('gulp-uglify');
//var clean = require('gulp-clean');
//var gulpUtil = require('gulp-util');
//var filesize = require('gulp-filesize');
//var bower = require('gulp-bower');
var Server = require('karma').Server;

var paths = {
    scripts: [
      './client/bower_components/angular/angular.min.js',
      './client/bower_components/angular-ui-router/release/angular-ui-router.min.js',
      './client/bower_components/underscore/underscore.js',
      './client/src/*.js',
      './client/src/**/**/*.js'
    ],
    html: [
      './client/index.html',
      './client/src/**/**/*.html'
    ],
    styles: [
      './client/styles/styles.css'
    ],
    test: [
      './spec/**/*.js'
    ]
};

gulp.task('tdd', function(done){
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});
