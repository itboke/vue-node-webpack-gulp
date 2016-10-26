// 自定义中间件
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

const Tools = require('./tools');

var extend = function() {
    var params = Array.prototype.slice.call(arguments),
        method = 'number' == typeof params[params.length - 1] ? params.pop() : 0,
        ret = method & extend.replaceFirst ? params.shift() : {},
        deep = method & extend.deepExtend,
        rmNull = method & extend.removeNull,
        obj;

    while (params.length) {
        obj = params.shift();
        for (var k in obj) {
            if (null === obj[k]) {
                rmNull ? delete ret[k] : ret[k] = obj[k];
            } else if (!ret[k] || ret[k].constructor !== Object || obj[k].constructor !== Object) {
                ret[k] = obj[k];
            } else {
                ret[k] = deep ? extend(ret[k], obj[k], method) : obj[k];
            }
        }
    }
    return ret;
};

module.exports = function() {

    return function*(next) {


        //挂载全局
        this._data = {
            Q: this.request.query,
            init_css: function(cssList) {
                return Tools.init_css(cssList);
            },
            init_js: function(jsList) {
                return Tools.init_js(jsList);
            }
        };

        this.render = function(filename, data) {

            this._data = extend(this._data,data);
            var filePath = path.resolve(__dirname, '../debug/' + filename + '.html');
            var _html = ejs.render(fs.readFileSync(filePath).toString(), this._data);
            this.body = _html;
        };
        yield next;
    }

}
