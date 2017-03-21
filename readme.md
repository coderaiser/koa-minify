# Koa-minify

[Minify](http://coderaiser.github.io/minify "Minify") middleware for [koa](http://koajs.com/ "Koa").

## Install

`npm i koa-minify --save`

## Use

```js
const koa = require('koa');
const koaMinify = require('koa-minify');
const app = new koa();

app.use(koaMinify({
    dir: __dirname
}));

app.listen(3000);
```

## License

MIT

