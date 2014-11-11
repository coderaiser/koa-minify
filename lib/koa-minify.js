(function() {
    'use strict';
    
    var path    = require('path'),
        minify  = require('minify');
    
    module.exports = function(options) {
        var dir = '';
        
        if (options)
            dir = options.dir;
        
        return function*() {
            var ctx     = this,
                name    = path.join(dir + this.req.url);
           
           ctx.body    = yield minify.bind(null, name);
        };
    };
})();
