var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/demo_spec.js'],
    multiCapabilities: [{
        browserName: 'firefox'
      },{
          browserName: 'chrome'
      }],
      onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/report/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: './report/screenshots',
           preserveDirectory: 'false'
        }).getJasmine2Reporter());
     }
  };
