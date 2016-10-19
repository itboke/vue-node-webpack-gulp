//tools function

var Tools= {};
Tools.init_css = function(cssList){
    var _cssArr,_cssPath,_cssLinks='';

    _cssArr = cssList.split(',');
    _cssPath = Tools.getStaticPath('css');
    _cssArr.forEach(function(key) {
          _cssLinks += "<link href='//" + _cssPath + "/" + key + "' rel='stylesheet' type='text/css' />";
    });
    return _cssLinks;
};
Tools.init_js = function(jsList){
    var _jsArr,_jsPath,_jsLinks='';

    _jsArr = jsList.split(',');
    _jsPath = Tools.getStaticPath('js');
    _jsArr.forEach(function(key) {
          _jsLinks += "<script src='//" + _jsPath + "/" + key + "' type='text/javascript' /></script>";
    });
    return _jsLinks;
};
Tools.getStaticPath = function(type){
    switch(type){
        case 'css':
            return 'localhost:3000/dist/css';
            break;
        case 'js':
            return 'localhost:3000/dist/js';
            break;
    }
}

module.exports = Tools;
