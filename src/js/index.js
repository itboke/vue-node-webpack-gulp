/*
 * @ 主页面js include components/__name__.vue
*/

//引入静态页面
import '../html/index.html';

//引入less
import './components/index/index.less';
//页面组件
import index from './components/index/index';


new Vue(index);
