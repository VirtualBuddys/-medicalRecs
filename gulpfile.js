var gulp = require('gulp');
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
