'use strict';

const path = require('path');
const minify = require('minify');

module.exports = (options) => {
    let dir = '';
    
    if (options)
        dir = options.dir;
    
    return async () => {
        const ctx = this;
        const name = path.join(dir + ctx.req.url);
        const ext = path.extname(name).substr(1);
       
       const stream = await minify.bind(null, name, 'stream');
       
       ctx.body = stream;
       ctx.type = ext;
    };
};

