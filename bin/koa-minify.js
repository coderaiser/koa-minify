#!/usr/bin/env node

'use strict';

const koa = require('koa');
const DIR = '../lib/';
const koaMinify = require(DIR + 'koa-minify');
const koaError = require(DIR + 'koa-error');
const app = new koa();

app .use(koaError)
    .use(koaMinify({
        dir: process.cwd()
    }));

app.listen(3000);
console.log('port:', 3000);
