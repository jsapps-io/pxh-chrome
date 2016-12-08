'use-strict';

let importResolve = require('import-resolve');

importResolve({
    ext: "scss",
    includePaths: ['.', 'bower_components'],
    pathToMain: 'sass/pxh-chrome.scss',
    output: 'flattened/pxh-chrome.scss'
});


