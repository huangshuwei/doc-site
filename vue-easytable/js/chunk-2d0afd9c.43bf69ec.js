(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afd9c"],{"0fa1":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("列宽设置")]),t("Explain"),t("NoWidth"),t("PercentWidth"),t("PxWidth"),t("FixedWidth")],1)},r=[],d=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、当列宽不设置时，单元格宽度按照内容自动缩放"),t("br"),e._v(" 2、当列宽设置百分比，单元格宽度按照百分比缩放"),t("br"),e._v(" 3、当列宽设置素值（px），单元格宽度按照像素比缩放"),t("br"),e._v(" 4、表格的固定宽度，需要设置外层容器宽度")])])])}],i=t("2877"),c={},l=Object(i["a"])(c,d,o,!1,null,null,null),s=l.exports,b=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"列宽不设置",fileName:"no-width.md"}}),t("demo-block",[t("div",[t("p",[e._v("当列宽不设置时，单元格宽度按照内容自动缩放")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    :columns="columns"\n    :table-data="tableData"\n    :border-around="true"\n    :border-x="true"\n    :border-y="true"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name" },\n          { field: "date", key: "b", title: "Date" },\n          { field: "hobby", key: "c", title: "Hobby" },\n          { field: "address", key: "d", title: "Address" },\n        ],\n        tableData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},u=[];function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){y(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name"},{field:"date",key:"b",title:"Date"},{field:"hobby",key:"c",title:"Hobby"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return m({render:e,staticRenderFns:n},t)}()}},g=h,f=Object(i["a"])(g,b,u,!1,null,null,null),v=f.exports,O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"列宽百分比",fileName:"percent-width.md"}}),t("demo-block",[t("div",[t("p",[e._v("当列宽设置百分比，单元格宽度按照百分比缩放")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    :columns="columns"\n    :table-data="tableData"\n    :border-around="true"\n    :border-x="true"\n    :border-y="true"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name 40%", width: "40%" },\n          { field: "date", key: "b", title: "Tel 20%", width: "20%" },\n          { field: "hobby", key: "c", title: "Hobby 20%", width: "20%" },\n          { field: "address", key: "d", title: "Address 20%", width: "20%" },\n        ],\n        tableData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},w=[];function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){N(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var x={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name 40%",width:"40%"},{field:"date",key:"b",title:"Tel 20%",width:"20%"},{field:"hobby",key:"c",title:"Hobby 20%",width:"20%"},{field:"address",key:"d",title:"Address 20%",width:"20%"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return C({render:e,staticRenderFns:n},t)}()}},k=x,A=Object(i["a"])(k,O,w,!1,null,null,null),D=A.exports,P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"列宽像素值",fileName:"px-width.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、当列宽设置素值（px），单元格宽度按照像素比缩放。如果不希望缩放，需要设置外层容器宽度"),t("br"),e._v("2、设置像素值，记得不要加单位")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    :columns="columns"\n    :table-data="tableData"\n    :border-around="true"\n    :border-x="true"\n    :border-y="true"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name 400px", width: 400 },\n          { field: "date", key: "b", title: "Tel 200px", width: 200 },\n          { field: "hobby", key: "c", title: "Hobby 200px", width: 200 },\n          { field: "address", key: "d", title: "Address 200px", width: 200 },\n        ],\n        tableData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},_=[];function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){J(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function J(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var $={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name 400px",width:400},{field:"date",key:"b",title:"Tel 200px",width:200},{field:"hobby",key:"c",title:"Hobby 200px",width:200},{field:"address",key:"d",title:"Address 200px",width:200}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return E({render:e,staticRenderFns:n},t)}()}},q=$,z=Object(i["a"])(q,P,_,!1,null,null,null),B=z.exports,G=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"表格宽度固定",fileName:"fixed-width.md"}}),t("demo-block",[t("div",[t("p",[e._v("表格的固定宽度，需要设置外层容器宽度。可以通过"),t("code",[e._v('style="width:900px"')]),e._v("方式设置。此处容器宽度为 900px")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    style="width:900px"\n    :columns="columns"\n    :table-data="tableData"\n    :border-around="true"\n    :border-x="true"\n    :border-y="true"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name 100px", width: 100 },\n          { field: "date", key: "b", title: "Tel 200px", width: 200 },\n          { field: "hobby", key: "c", title: "Hobby 300px", width: 300 },\n          { field: "address", key: "d", title: "Address 300px", width: 300 },\n        ],\n        tableData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},H=[];function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach((function(n){X(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function X(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var F={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{staticStyle:{width:"900px"},attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name 100px",width:100},{field:"date",key:"b",title:"Tel 200px",width:200},{field:"hobby",key:"c",title:"Hobby 300px",width:300},{field:"address",key:"d",title:"Address 300px",width:300}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return W({render:e,staticRenderFns:n},t)}()}},T=F,R=Object(i["a"])(T,G,H,!1,null,null,null),I=R.exports,K={name:"basic-main",components:{Explain:s,NoWidth:v,PercentWidth:D,PxWidth:B,FixedWidth:I}},M=K,Q=Object(i["a"])(M,a,r,!1,null,null,null);n["default"]=Q.exports}}]);
//# sourceMappingURL=chunk-2d0afd9c.43bf69ec.js.map