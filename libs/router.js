const path = require('path');
const router = require('koa-router')();
const fs = require('fs');

var runController = function*(name){

    var filePath = path.resolve(__dirname,'../controller/'+name+'.js');

    if(fs.existsSync(filePath)){
        yield require(filePath).bind(this);
    }else{
        console.log('This file not find');
    }

}

module.exports = function(app){

    app.use(router.routes());

    router.get('/',function*(next){
        yield runController.bind(this)('index');
    })

    return function*(next){
        yield next;
    }

};