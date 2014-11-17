#!/usr/bin/env node

(function() {
    'use strict';
    
    var spawn   = require('child_process').spawn,
        
        argv    = process.argv.slice(2),
        args    = ['--harmony'].concat(argv),
        
        MINOR   = 1,
        
        version = process.version.split('.')[MINOR],
        child;
    
    if (version < 11) {
        console.error('node < 0.11 not supported');
    } else {
        child = spawn(process.execPath, args, {
          cwd: __dirname
        });
        
        child.stdout.pipe(process.stdout);
        child.stderr.pipe(process.stderr);
    }
})();
