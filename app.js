const {start, registerRouter} = require('vcms');

const exampleRouter = require('./example.router');

registerRouter('/', exampleRouter);


/* define routers */
start();
