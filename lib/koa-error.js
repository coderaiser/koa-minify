(function() {
    'use strict';
    
    module.exports = function* (next) {
        try {
            yield next;
        } catch (error) {
            this.status = error.status || 418;
            this.body = error.message;
        }
    };
})();
