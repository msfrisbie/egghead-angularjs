module.exports = function(config) {
  config.set({
    basePath : '../',

    frameworks : ["jasmine"],

    files : [
      'app/lib/angular/angular.js',
      'app/lib/angular/angular-*.js',
      'test/lib/angular/angular-mocks.js',
      // 'app/js/**/*.js',
      'app/lessons/07/**/*.js'//,
      // 'test/unit/**/*.js'
    ],

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch : true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers : ['PhantomJS'],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun : true,

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  })
}
