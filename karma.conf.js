module.exports = function(config){
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      //angular source files
      'client/bower_components/angular/angular.min.js',
      'client/bower_components/angular-ui-router/release/angular-ui-router',
      'client/bower_components/underscore/underscore.js',
      'client/bower_components/angular-mocks/angular-mocks.js',

      //app files
      'client/src/*.js',
      'client/src/**/**/*.js',

      //spec files
      'spec/client/**/*.js'
    ],
    exclude: [
      'karma.conf.js'
    ],
    preprocessors: {
    },
    reporters:['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true;
    concurrency: Infinity
  })
};
