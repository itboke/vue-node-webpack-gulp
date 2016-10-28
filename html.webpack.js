'use strict';
const Path   = require('path');
const fs     = require('fs');

var cssReg = /css\(\'(\S+)\'\)/;
var jsReg  = /js\(\'(\S+)\'\)/;
class HtmlWebpack{
	constructor(option){

	}
	apply(compiler){
		var _self = this;
		compiler.plugin("emit",function(compilation,callback){
			
            var stats = compilation.getStats().toJson({
                hash: true,
                publicPath: true,
                assets: true,
                chunks: false,
                modules: false,
                source: false,
                errorDetails: false,
                timings: false
            });
            var mapJson = {};
            var assetsArr = stats.assets;
            assetsArr.map((item)=>{
                var _name = item.name;
                var _nameObj = Path.parse(_name);
                var _ext = _nameObj.ext;
                var _regx = new RegExp(".*\\.([a-z0-9]+)"+_ext);
                var _match,_arr,_rstr;
                if(_regx.test(_name)){
                    _match = _name.match(_regx);
                    //去掉hash
                    if(_match[1]){
                        _rstr = _match[1]+'.';
                    }else{
                        _arr = _nameObj.name.split('.');
                        _rstr = _arr[_arr.length-2]+'.';
                    }
                    _name =  _name.replace(_rstr,'');
                }
                //过滤map 文件
                if(_ext != '.map'){
                    mapJson[_name] = item.name;
                }
            });
            var _assets = compilation.assets;
            Object.keys(_assets).forEach(function(attr) {
				if(attr.indexOf('.html') > -1){
					var _content = String(_assets[attr].source());
					var _css = _content.match(cssReg);
					var _js  = _content.match(jsReg);
					var _cssArr = _css[1].split(',')
						,_jsArr = _js[1].split(',')
						,_cssLinks = ''
						,_jsLinks  = ''
						,_hostPath  = 'localhost:3000';
					_cssArr.forEach(function(key) {
			            key = 'css/' + key;
			            _cssLinks += "<link href='//" + _hostPath + "/" + mapJson[key] + "' rel='stylesheet' type='text/css' />";
			        });
			        _jsArr.forEach(function(key) {
			            key = 'js/' + key;
			            if(key === 'js/zepto.js' || key === 'js/vue.min.js'){
			                _jsLinks += "<script src='//" + _hostPath + "/" + key + "'></script>";
			            }else{
			                _jsLinks += "<script src='//" + _hostPath + "/" + mapJson[key] + "'></script>";
			            }
			        });
					_content = _content.replace(_css[0],_cssLinks);
					_content = _content.replace(_js[0],_jsLinks);					
										
					var fileName = compiler.context + '\\' + attr;
					fs.writeFileSync(fileName,_content,'utf8');
				}
			});
			callback();
		})
	}
}
module.exports = HtmlWebpack;