/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(86);


/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(87);

	__webpack_require__(88);

	var _index = __webpack_require__(92);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//引入less


	new Vue(_index2.default);
	//页面组件
	/*
	 * @ 主页面js include components/__name__.vue
	*/

	//引入静态页面

/***/ },

/***/ 87:
/***/ function(module, exports) {

	"<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    include(./_common/head.html)\r\n    css('index.css,dd.css')\r\n</head>\r\n<body>\r\n    <h1 id=\"app\"></h1>\r\n    js(\"zepto.js,vue.min.js,index.js,bbb.js\")\r\n    include(./_common/foot.html)\r\n</body>\r\n</html>\r\n"

/***/ },

/***/ 88:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(93)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\components\\index\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(104)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-ad5ece66/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _topBanner = __webpack_require__(94);

	var _topBanner2 = _interopRequireDefault(_topBanner);

	var _list = __webpack_require__(96);

	var _list2 = _interopRequireDefault(_list);

	var _navigation = __webpack_require__(99);

	var _navigation2 = _interopRequireDefault(_navigation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//         <div>
	//             <topbanner></topbanner>
	//             <navigation v-bind:data="data"></navigation>
	//             <list></list>
	//             <div>{{data.nav}}</div>
	//             <img src={{pic}} />
	//             <img src={{pic2}} />
	//         </div>
	// </template>
	// <script>
	var imgs = __webpack_require__(102);
	var imgs2 = __webpack_require__(103);
	exports.default = {
	    el: '#app',
	    ready: function ready() {
	        var _self = this;
	        $.ajax({
	            type: 'GET',
	            url: 'http://localhost:8008/api/88',
	            dataType: 'json',
	            success: function success(result) {
	                _self.data = result['nav'];
	            },
	            error: function error(xhr, type) {
	                //console.log(xhr);
	            }
	        });
	    },
	    data: function data() {
	        return { 'data': '', 'pic': imgs, 'pic2': imgs2 };
	    },

	    components: {
	        topbanner: _topBanner2.default,
	        list: _list2.default,
	        navigation: _navigation2.default
	    }
	};
	// </script>

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(95)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-a9fc0048/topBanner.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 95:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n<div id=\"top_banner\" class=\"top-banner\">\n    <a href=\"/\">\n        <img src=\"http://wegraphics.net/wp-content/themes/wegraphics3/images/top-banner.jpg\" alt=\"\" />\n    </a>\n</div>\n";

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(97)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\components\\index\\list.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(98)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-de12d51a/list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 97:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <!--
	//     渲染一个列表
	// -->
	// <template>
	//     <div id="example-list">
	//         <ul>
	//             <li v-for="item in items">{{item.mes}}</li>
	//         </ul>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    el: '#example-list',
	    data: function data() {
	        return {
	            items: [{ mes: 'hello' }, { mes: 'Vue' }, { mes: 'learssssssssssning' }]
	        };
	    }
	};
	// </script>

/***/ },

/***/ 98:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n<div id=\"example-list\">\n    <ul>\n        <li v-for=\"item in items\">{{item.mes}}</li>\n    </ul>\n</div>\n";

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(100)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\components\\index\\navigation.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(101)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-a170bbae/navigation.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 100:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div>
	//         <header>
	//             <div class="fixed-width">
	//                 <div class="logo"></div>
	//                 <div class="nav">
	//                     <ul>
	//                         <li v-for="item in data"><a href="#">{{item}}</a></li>
	//                     </ul>
	//                 </div>
	//             </div>
	//         </header>
	//     </div>
	// </template>
	//
	// <script>
	//定义子组件的props 作用域
	exports.default = {
	    props: ['data']
	};

	// </script>

/***/ },

/***/ 101:
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <header>\n        <div class=\"fixed-width\">\n            <div class=\"logo\"></div>\n            <div class=\"nav\">\n                <ul>\n                    <li v-for=\"item in data\"><a href=\"#\">{{item}}</a></li>\n                </ul>\n            </div>\n        </div>\n    </header>\n</div>\n";

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/index/www375e67.jpg";

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/common/4444375e67.jpg";

/***/ },

/***/ 104:
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <topbanner></topbanner>\n    <navigation v-bind:data=\"data\"></navigation>\n    <list></list>\n    <div>{{data.nav}}</div>\n    <img src={{pic}} />\n    <img src={{pic2}} />\n</div>\n";

/***/ }

/******/ });