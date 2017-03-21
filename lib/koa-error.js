'use strict';

module.exports = async (next) => {
    try {
        await next;
    } catch (error) {
        this.status = error.status || 418;
        this.body = error.message;
    }
};

