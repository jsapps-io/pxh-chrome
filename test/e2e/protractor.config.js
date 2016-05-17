// protractor.config.js
/*
* Defines protractor configuration for end-to-end tests
* */

exports.config = {
  framework: 'mocha',
  specs: [],
  suites: {
    smoke:      'spec/smoke/*.spec.js',
    nav:        'spec/drawer/*.spec.js',
    responsive: 'spec/responsive/*.spec.js'
  },
  mochaOpts: {
    ui: 'bdd',
    reporter: 'list',
    timeout: '10000'
  }
}
