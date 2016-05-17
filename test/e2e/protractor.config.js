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
  capabilities: {
    'browserName': 'chrome' // chrome or firefox ... safari doesn't support mouse move events
  },
  mochaOpts: {
    ui: 'bdd',
    reporter: 'list',
    timeout: '10000'
  }
}
