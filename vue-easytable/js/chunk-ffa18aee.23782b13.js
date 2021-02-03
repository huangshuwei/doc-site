(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ffa18aee"],{"2c77":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.columns.ellipsisProps.data,columns:e.db.columns.ellipsisProps.columns}})],1)},i=[],o=n("3ef3"),s=n("d890"),l={components:{tpl:o["a"]},props:{anchor:{type:String,default:"单元格省略"},desc:{type:String,default:"ellipsis"}},data:function(){return{db:s["a"]}}},r=l,d=n("2877"),c=Object(d["a"])(r,a,i,!1,null,null,null);t["a"]=c.exports},"3bdf":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("单元格省略")]),n("Explain"),n("Base"),n("Ellipsis"),n("EllipsisLine"),n("API",{attrs:{title:"API",anchor:"API",desc:"ellipsis 单元格省略配置"}})],1)},i=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[e._v("1、通过 "),n("code",[e._v("column")]),e._v(" 的 "),n("code",[e._v("ellipsis")]),e._v(" 属性设置超出显示省略"),n("br"),e._v(" 2、通过 "),n("code",[e._v("lineClamp")]),e._v("内容超出多少行开始出现省略")])])])}],l=n("2877"),r={},d=Object(l["a"])(r,o,s,!1,null,null,null),c=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"超出换行",fileName:"base.md"}}),n("p",[e._v("默认单元格内的文本超出宽度时，换行显示")]),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    rowKeyFieldName="rowkey"\n    :fixed-header="true"\n    :columns="columns"\n    :table-data="tableData"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "left", width: "15%" },\n          { field: "date", key: "b", title: "Date", align: "left", width: "15%" },\n          { field: "hobby", key: "c", title: "Hobby", align: "center", width: "30%" },\n          { field: "address", key: "d", title: "Address", align: "left", width: "40%" },\n        ],\n        // table data\n        tableData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address:\n              "No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text",\n            rowkey: 0,\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address:\n              "No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",\n            rowkey: 1,\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address:\n              "No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text",\n            rowkey: 2,\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen,this is a long text,this is a long text",\n            rowkey: 3,\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n            rowkey: 4,\n          },\n        ],\n      };\n    },\n    methods: {},\n  };\n<\/script>\n')])])])],2)],1)},g=[];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{rowKeyFieldName:"rowkey","fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},t=[],n={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text",rowkey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",rowkey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text",rowkey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen,this is a long text,this is a long text",rowkey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowkey:4}]}},methods:{}};return b({render:e,staticRenderFns:t},n)}()}},p=y,f=Object(l["a"])(p,h,g,!1,null,null,null),x=f.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"超出省略",fileName:"ellipsis.md"}}),n("demo-block",[n("div",[n("p",[e._v("通过 "),n("code",[e._v("column")]),e._v(" 的 "),n("code",[e._v("ellipsis")]),e._v(" 属性设置超出显示省略。默认单行省略")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    rowKeyFieldName="rowkey"\n    :fixed-header="true"\n    :columns="columns"\n    :table-data="tableData"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "left", width: "15%" },\n          { field: "date", key: "b", title: "Date", align: "left", width: "15%" },\n          { field: "hobby", key: "c", title: "Hobby", align: "center", width: "30%" },\n          {\n            field: "address",\n            key: "d",\n            title: "Address",\n            align: "left",\n            width: "40%",\n            ellipsis: {},\n          },\n        ],\n        // table data\n        tableData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address:\n              "No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text",\n            rowkey: 0,\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address:\n              "No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",\n            rowkey: 1,\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address:\n              "No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text",\n            rowkey: 2,\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen,this is a long text,this is a long text",\n            rowkey: 3,\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n            rowkey: 4,\n          },\n        ],\n      };\n    },\n    methods: {},\n  };\n<\/script>\n')])])])],2)],1)},w=[];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{rowKeyFieldName:"rowkey","fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},t=[],n={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%",ellipsis:{}}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text",rowkey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",rowkey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text",rowkey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen,this is a long text,this is a long text",rowkey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowkey:4}]}},methods:{}};return O({render:e,staticRenderFns:t},n)}()}},C=_,N=Object(l["a"])(C,v,w,!1,null,null,null),A=N.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"多行省略",fileName:"ellipsis-line.md"}}),e._m(0),n("demo-block",[n("div",[n("p",[e._v("通过 "),n("code",[e._v("lineClamp")]),e._v("设置超过多少行省略")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    rowKeyFieldName="rowkey"\n    :fixed-header="true"\n    :columns="columns"\n    :table-data="tableData"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "left", width: "15%" },\n          { field: "date", key: "b", title: "Date", align: "left", width: "15%" },\n          { field: "hobby", key: "c", title: "Hobby", align: "center", width: "30%" },\n          {\n            field: "address",\n            key: "d",\n            title: "Address",\n            align: "left",\n            width: "40%",\n            ellipsis: {\n              lineClamp: 2,\n            },\n          },\n        ],\n        // table data\n        tableData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address:\n              "No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text",\n            rowkey: 0,\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address:\n              "No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",\n            rowkey: 1,\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address:\n              "No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text",\n            rowkey: 2,\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen,this is a long text,this is a long text",\n            rowkey: 3,\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n            rowkey: 4,\n          },\n        ],\n      };\n    },\n    methods: {},\n  };\n<\/script>\n')])])])],2)],1)},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("此功能目前只支持 "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp"}},[e._v("-webkit-line-clamp 属性")]),e._v(" 的浏览器")])}];function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){J(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{rowKeyFieldName:"rowkey","fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},t=[],n={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%",ellipsis:{lineClamp:2}}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text",rowkey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",rowkey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text",rowkey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen,this is a long text,this is a long text",rowkey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowkey:4}]}},methods:{}};return S({render:e,staticRenderFns:t},n)}()}},F=$,z=Object(l["a"])(F,D,P,!1,null,null,null),B=z.exports,L=n("2c77"),q={name:"basic-main",components:{Explain:c,Base:x,Ellipsis:A,EllipsisLine:B,API:L["a"]}},G=q,H=Object(l["a"])(G,a,i,!1,null,null,null);t["default"]=H.exports}}]);
//# sourceMappingURL=chunk-ffa18aee.23782b13.js.map