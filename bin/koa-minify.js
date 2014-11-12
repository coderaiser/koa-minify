#!/usr/bin/env node

(function() {
    'use strict';
    
    var koa         = require('koa'),
        
        DIR         = '../lib/',
        
        koaMinify   = require(DIR + 'koa-minify'),
        koaError    = require(DIR + 'koa-error'),
        app         = koa();
    
    app .use(koaError)
        .use(koaMinify({
            dir: process.cwd()
        }));
    
    app.listen(3000);
    console.log('port:', 3000);
})();
