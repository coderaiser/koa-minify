(function() {
    'use strict';
    
    var path    = require('path'),
        minify  = require('minify');
    
    module.exports = function(options) {
        var dir = '';
        
        if (options)
            dir = options.dir;
        
        return function*() {
            var stream,
                ctx     = this,
                name    = path.join(dir + ctx.req.url),
                ext     = path.extname(name).substr(1);
           
           stream     = yield minify.bind(null, name, {
               returnStream: true
           });
           
           ctx.body = stream;
           ctx.type = ext;
        };
    };
})();
