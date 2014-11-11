# Koa-minify

[Minify](http://coderaiser.github.io/minify "Minify") middleware for [koa](http://koajs.com/ "Koa").

## Install

`npm i koa-minify --save`

## Use

```js
var koa         = require('koa'),
    koaMinify   = require('koa-minify'),
    app         = koa();

app.use(koaMinify({
    dir: __dirname
}));

app.listen(3000);
```

## License

MIT
