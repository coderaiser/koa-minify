#!/usr/bin/env node

(function() {
    'use strict';
    
    var spawn   = require('child_process').spawn,
        
        MINOR   = 1,
        
        version = process.version.split('.')[MINOR],
        child;
    
    if (version < 11) {
        console.error('node < 0.11 not supported');
    } else {
        child = spawn(process.execPath, [ '--harmony', './koa-minify.js' ], {
          cwd: __dirname
        });
        
        child.stdout.pipe(process.stdout);
        child.stderr.pipe(process.stderr);
    }
})();
