// 自定义中间件
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

const Tools = require('./tools');

module.exports = function() {

    return function*(next) {


        //挂载全局
        this._data = {
            init_css: function(cssList) {
                return Tools.init_css(cssList);
            },
            init_js: function(jsList) {
                return Tools.init_js(jsList);
            }
        };

        this.render = function(filename, data) {

            var filePath = path.resolve(__dirname, '../dist/' + filename + '.html');

            var _html = ejs.render(fs.readFileSync(filePath).toString(), this._data);

            this.body = _html;

        };
        yield next;
    }

}
