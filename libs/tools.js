//tools function
var fs = require('fs');
var path = require('path');
var config = require('../config.js');
var Tools= {};
Tools.init_css = function(cssList){
    var _cssArr,_cssPath,_cssLinks='';
    var _cssMapObj = Tools.getMap('css');
    _cssArr = cssList.split(',');
    _cssPath = Tools.getStaticPath();
    if(config.env === 'www'){
        _cssArr.forEach(function(key) {
            key = 'css/' + key;
            _cssLinks += "<link href='//" + _cssPath + "/" + _cssMapObj[key] + "' rel='stylesheet' type='text/css' />";
        });
    }else{
        _cssArr.forEach(function(key) {
            key = 'css/' + key;
            _cssLinks += "<link href='//" + _cssPath + "/" + key + "' rel='stylesheet' type='text/css' />";
        });
    }
    return _cssLinks;
};
Tools.init_js = function(jsList){
    var _jsArr,_jsPath,_jsLinks='';
    var _jsMapObj = Tools.getMap('js');
    _jsArr = jsList.split(',');
    _jsPath = Tools.getStaticPath();
    if(config.env === 'www'){
        _jsArr.forEach(function(key) {
            key = 'js/' + key;
            if(key === 'js/zepto.js' || key === 'js/vue.min.js'){
                _jsLinks += "<script src='//" + _jsPath + "/" + key + "'></script>";
            }else{
                _jsLinks += "<script src='//" + _jsPath + "/" + _jsMapObj[key] + "'></script>";
            }
        });
    }else{
        _jsArr.forEach(function(key) {
            _jsLinks += "<script src='//" + _jsPath + "/" + key + "' type='text/javascript'></script>";
        });
    }
    return _jsLinks;
};
Tools.getMap  = function(type){
    var _mapFile = path.join(__dirname,'../dist/map/map.json');
    var _jsonObject = Tools.getJson(_mapFile);
    return _jsonObject[type];
};
Tools.getJson = function(file){
    var string;
    string = fs.readFileSync(file, 'utf8');
    return JSON.parse(string, true);
};
Tools.getStaticPath = function(type){
    return 'localhost:3000/dist';
}
module.exports = Tools;
