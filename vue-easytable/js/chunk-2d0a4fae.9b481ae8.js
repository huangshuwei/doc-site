(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4fae"],{"096e":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("边框")]),t("Explain"),t("DefaultBorder"),t("BorderX"),t("BorderY"),t("BorderAround"),t("BorderAll"),t("AroundX"),t("AroundY")],1)},r=[],o=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、通过"),t("code",[e._v("border-around=true")]),e._v(" 设置外边框"),t("br"),e._v(" 2、通过"),t("code",[e._v("border-x=true")]),e._v(" 设置横向边框"),t("br"),e._v(" 3、通过"),t("code",[e._v("border-y=true")]),e._v(" 设置纵向边框")])])])}],i=t("2877"),c={},l=Object(i["a"])(c,o,d,!1,null,null,null),s=l.exports,b=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"默认",fileName:"default.md"}}),t("demo-block",[t("div",[t("p",[e._v("默认外边框和横向边框")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table :columns="columns" :table-data="tableData" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "right" },\n          { field: "address", key: "d", title: "Address" },\n        ],\n        tableData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},u=[];function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){g(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var p={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return y({render:e,staticRenderFns:n},t)}()}},h=p,f=Object(i["a"])(h,b,u,!1,null,null,null),v=f.exports,O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"横向边框",fileName:"border-x.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    :columns="columns"\n    :table-data="tableData"\n    :border-around="false"\n    :border-x="true"\n    :border-y="false"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "right" },\n          { field: "address", key: "d", title: "Address" },\n        ],\n        tableData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},j=[];function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){N(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var k={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!1,"border-x":!0,"border-y":!1}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return A({render:e,staticRenderFns:n},t)}()}},D=k,P=Object(i["a"])(D,O,j,!1,null,null,null),w=P.exports,_=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"纵向边框",fileName:"border-y.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    :columns="columns"\n    :table-data="tableData"\n    :border-around="false"\n    :border-x="false"\n    :border-y="true"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "right" },\n          { field: "address", key: "d", title: "Address" },\n        ],\n        tableData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},S=[];function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){J(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function J(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var B={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!1,"border-x":!1,"border-y":!0}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return E({render:e,staticRenderFns:n},t)}()}},X=B,$=Object(i["a"])(X,_,S,!1,null,null,null),q=$.exports,z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"外边框",fileName:"border-around.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    :columns="columns"\n    :table-data="tableData"\n    :border-around="true"\n    :border-x="false"\n    :border-y="false"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "right" },\n          { field: "address", key: "d", title: "Address" },\n        ],\n        tableData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},G=[];function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(Object(t),!0).forEach((function(n){F(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var R={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!1,"border-y":!1}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return L({render:e,staticRenderFns:n},t)}()}},Y=R,I=Object(i["a"])(Y,z,G,!1,null,null,null),K=I.exports,M=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"全边框",fileName:"border-all.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table :columns="columns" :table-data="tableData" :border-x="true" :border-y="true" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "right" },\n          { field: "address", key: "d", title: "Address" },\n        ],\n        tableData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},Q=[];function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){V(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function V(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var W={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-x":!0,"border-y":!0}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return U({render:e,staticRenderFns:n},t)}()}},Z=W,ee=Object(i["a"])(Z,M,Q,!1,null,null,null),ne=ee.exports,te=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"外边框+横向边框",fileName:"around-x.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    :columns="columns"\n    :table-data="tableData"\n    :border-around="true"\n    :border-x="true"\n    :border-y="false"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "right" },\n          { field: "address", key: "d", title: "Address" },\n        ],\n        tableData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},ae=[];function re(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function oe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?re(Object(t),!0).forEach((function(n){de(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):re(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function de(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var ie={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!1}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return oe({render:e,staticRenderFns:n},t)}()}},ce=ie,le=Object(i["a"])(ce,te,ae,!1,null,null,null),se=le.exports,be=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"外边框+纵向边框",fileName:"around-y.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    :columns="columns"\n    :table-data="tableData"\n    :border-around="true"\n    :border-x="false"\n    :border-y="true"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "right" },\n          { field: "address", key: "d", title: "Address" },\n        ],\n        tableData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},ue=[];function me(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function ye(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?me(Object(t),!0).forEach((function(n){ge(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):me(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ge(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var pe={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!1,"border-y":!0}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return ye({render:e,staticRenderFns:n},t)}()}},he=pe,fe=Object(i["a"])(he,be,ue,!1,null,null,null),ve=fe.exports,Oe={name:"border",components:{Explain:s,DefaultBorder:v,BorderX:w,BorderY:q,BorderAround:K,BorderAll:ne,AroundX:se,AroundY:ve}},je=Oe,Ce=Object(i["a"])(je,a,r,!1,null,null,null);n["default"]=Ce.exports}}]);
//# sourceMappingURL=chunk-2d0a4fae.9b481ae8.js.map