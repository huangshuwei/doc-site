(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7692"],{7762:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Header Fixed")]),n("Explain"),n("Base"),n("AutoHeight"),n("HeaderFixedDisabled")],1)},l=[],r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[e._v("1、"),n("code",[e._v("max-height")]),e._v(" is the max height of the table"),n("br"),e._v(" 2、When the total height of the table is greater than the 'max height' value, a vertical scroll bar will appear"),n("br"),e._v(" 3、When the total height of the table is less than the "),n("code",[e._v("max-height")]),e._v(" value, the table will be highly adaptive")])])])}],o=n("2877"),c={},s=Object(o["a"])(c,r,i,!1,null,null,null),d=s.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Basic Usage",fileName:"base.md"}}),n("demo-block",[n("div",[n("p",[e._v("1、"),n("code",[e._v('fixed-header="true"')]),e._v(" to enable the header to be fixed,Default to "),n("code",[e._v("true")]),n("br"),e._v("2、"),n("code",[e._v("max-height")]),e._v(" to set max height of table")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    :max-height="200"\n    :fixed-header="true"\n    :columns="columns"\n    :table-data="tableData"\n    rowKeyFieldName="rowkey"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "center" },\n          { field: "address", key: "d", title: "Address", align: "left" },\n        ],\n        tableData: [],\n      };\n    },\n    methods: {\n      initTableData() {\n        let data = [];\n        for (let i = 0; i < 15; i++) {\n          data.push({\n            rowkey: i,\n            name: i,\n            date: i,\n            hobby: i,\n            address: i,\n          });\n        }\n        this.tableData = data;\n      },\n    },\n    created() {\n      this.initTableData();\n    },\n  };\n<\/script>\n')])])])],2)],1)},h=[];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{"max-height":200,"fixed-header":!0,columns:e.columns,"table-data":e.tableData,rowKeyFieldName:"rowkey"}})]],2)},t=[],n={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<15;t++)e.push({rowkey:t,name:t,date:t,hobby:t,address:t});this.tableData=e}},created:function(){this.initTableData()}};return f({render:e,staticRenderFns:t},n)}()}},y=p,g=Object(o["a"])(y,b,h,!1,null,null,null),v=g.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Hight Adaptive",fileName:"auto-height.md"}}),n("demo-block",[n("div",[n("p",[e._v("When the content is less than the "),n("code",[e._v("max-height")]),e._v(" setting, the table height is adaptive")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table :max-height="200" fixed-header :columns="columns" :table-data="tableData" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "center" },\n          { field: "address", key: "d", title: "Address", align: "left" },\n        ],\n        tableData: [],\n      };\n    },\n    methods: {\n      initTableData() {\n        let data = [];\n        for (let i = 0; i < 2; i++) {\n          data.push({\n            name: i,\n            date: i,\n            hobby: i,\n            address: i,\n          });\n        }\n        this.tableData = data;\n      },\n    },\n    created() {\n      this.initTableData();\n    },\n  };\n<\/script>\n')])])])],2)],1)},D=[];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{"max-height":200,"fixed-header":"",columns:e.columns,"table-data":e.tableData}})]],2)},t=[],n={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<2;t++)e.push({name:t,date:t,hobby:t,address:t});this.tableData=e}},created:function(){this.initTableData()}};return _({render:e,staticRenderFns:t},n)}()}},w=k,P=Object(o["a"])(w,O,D,!1,null,null,null),E=P.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Disable header fixed",fileName:"header-fixed-disabled.md"}}),n("demo-block",[n("div",[n("p",[n("code",[e._v('fixed-header="false"')]),e._v("disable fixed header.When there is too much content, the header will scroll with table content")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table :max-height="200" :fixed-header="false" :columns="columns" :table-data="tableData" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "center" },\n          { field: "address", key: "d", title: "Address", align: "left" },\n        ],\n        tableData: [],\n      };\n    },\n    methods: {\n      initTableData() {\n        let data = [];\n        for (let i = 0; i < 15; i++) {\n          data.push({\n            name: i,\n            date: i,\n            hobby: i,\n            address: i,\n          });\n        }\n        this.tableData = data;\n      },\n    },\n    created() {\n      this.initTableData();\n    },\n  };\n<\/script>\n')])])])],2)],1)},T=[];function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){$(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{"max-height":200,"fixed-header":!1,columns:e.columns,"table-data":e.tableData}})]],2)},t=[],n={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<15;t++)e.push({name:t,date:t,hobby:t,address:t});this.tableData=e}},created:function(){this.initTableData()}};return A({render:e,staticRenderFns:t},n)}()}},S=F,C=Object(o["a"])(S,H,T,!1,null,null,null),W=C.exports,B={name:"basic-main",components:{Explain:d,Base:v,AutoHeight:E,HeaderFixedDisabled:W}},R=B,J=Object(o["a"])(R,a,l,!1,null,null,null);t["default"]=J.exports}}]);
//# sourceMappingURL=chunk-2d0d7692.c658feee.js.map