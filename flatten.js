'use-strict';

let importResolve = require('import-resolve');

importResolve({
    ext: "scss",
    pathToMain: 'sass/pxh-chrome.scss',
    output: 'dist/sass/pxh-chrome.scss'
});
