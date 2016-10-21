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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(3);

	var _index = __webpack_require__(9);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * @ 主页面js include components/__name__.vue
	*/

	//引入less


	new Vue(_index2.default);

	//页面组件

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(10)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\components\\index\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(20)
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _topBanner = __webpack_require__(11);

	var _topBanner2 = _interopRequireDefault(_topBanner);

	var _list = __webpack_require__(13);

	var _list2 = _interopRequireDefault(_list);

	var _navigation = __webpack_require__(16);

	var _navigation2 = _interopRequireDefault(_navigation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	// <template>
	//         <div>
	//             <topbanner></topbanner>
	//             <navigation v-bind:data="data"></navigation>
	//             <list></list>
	//             <div>{{data.nav}}</div>
	//             <img src={{pic}} />
	//         </div>
	// </template>
	//
	// <script>
	var imgs = __webpack_require__(19);
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
	                console.log(xhr);
	            }
	        });
	    },
	    data: function data() {
	        return { 'data': '', 'pic': imgs };
	    },

	    components: {
	        topbanner: _topBanner2.default,
	        list: _list2.default,
	        navigation: _navigation2.default
	    }
	};
	// </script>

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(12)
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
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n<div id=\"top_banner\" class=\"top-banner\">\n    <a href=\"/\">\n        <img src=\"http://wegraphics.net/wp-content/themes/wegraphics3/images/top-banner.jpg\" alt=\"\" />\n    </a>\n</div>\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(14)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\components\\index\\list.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(15)
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
/* 14 */
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
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n<div id=\"example-list\">\n    <ul>\n        <li v-for=\"item in items\">{{item.mes}}</li>\n    </ul>\n</div>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(17)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\components\\index\\navigation.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(18)
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
/* 17 */
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
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <header>\n        <div class=\"fixed-width\">\n            <div class=\"logo\"></div>\n            <div class=\"nav\">\n                <ul>\n                    <li v-for=\"item in data\"><a href=\"#\">{{item}}</a></li>\n                </ul>\n            </div>\n        </div>\n    </header>\n</div>\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/dist/img/www.375e67c5.jpg";

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n\n\n<div>\n    <topbanner></topbanner>\n    <navigation v-bind:data=\"data\"></navigation>\n    <list></list>\n    <div>{{data.nav}}</div>\n    <img src={{pic}} />\n</div>\n";

/***/ }
/******/ ]);