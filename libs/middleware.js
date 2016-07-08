// 自定义中间件
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

module.exports = function(){

    return function*(next){

        this.render = function(filename,data){

            var filePath = path.resolve(__dirname,'../dist/'+filename+'.html');

            var _html = ejs.render(fs.readFileSync(filePath).toString(),data);

            this.body = _html;

        };
        console.log(this.render);
        yield next;
    }

}