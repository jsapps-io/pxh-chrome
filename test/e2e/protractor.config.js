exports.config = {
  framework: 'mocha',
  specs: [],
  suites: {
    smoke:      'spec/smoke/*.spec.js',
    nav:        'spec/drawer/*.spec.js',
    responsive: 'spec/responsive/*.spec.js'
  }
}
