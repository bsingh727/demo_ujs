// Karma configuration
// Generated on Sat Oct 08 2016 23:25:02 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './App/bower_components/angular.js',
      './App/bower_components/angular-mocks.js',
      './App/component/js/**/*.js',
      './App/component/js/test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      'You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".',
      'You can use glob patterns, eg. "**/*.swp".',
      'Enter empty string to move to the next question.',
      'You can use glob patterns, eg. "**/*.swp".',
      'Enter empty string to move to the next question.'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['phantom'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
  reporters : ['dots', 'junit'],
  junitReporter ={
    outputFile: 'test-results.xml'
  }
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity

  })
}
