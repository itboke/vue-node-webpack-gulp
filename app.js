const koa = require('koa');
const app = koa();
const middleware = require('./libs/middleware');
const router = require('./libs/router');



app.use(middleware())
   .use(router(app))

app.listen(3000,'127.0.0.1',()=>{
    console.log('Node服务器运行在3000端口');
});