(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e594846"],{"11a5":function(e,t,o){},"3ef3":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"api-tpl"},[o("anchor",{attrs:{"is-edit":!1,label:e.getAnchor}}),o("div",{staticClass:"api-tpl-desc"},[e._v(e._s(e.desc))]),o("ve-table",{staticClass:"tpl-table",attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!1,"row-key-field-name":"rowKey","expand-option":e.expandOption}})],1)},a=[],r={name:"api-tpl",props:{desc:{type:String,required:!0},anchor:{type:String,default:null},tableData:{type:Array,required:!0},columns:{type:Array,required:!0},expandOption:{type:Object,default:function(){return null}}},data:function(){return{}},computed:{getAnchor:function(){return this.anchor?this.anchor:this.desc}}},c=r,l=(o("6d41"),o("2877")),d=Object(l["a"])(c,n,a,!1,null,null,null);t["a"]=d.exports},"58f0":function(e,t,o){"use strict";var n=o("11a5"),a=o.n(n);a.a},"683c":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.columns.filterCustomProps.data,columns:e.db.columns.filterCustomProps.columns}})],1)},a=[],r=o("3ef3"),c=o("7eb4"),l={components:{tpl:r["a"]},props:{anchor:{type:String,default:"Filter custom"},desc:{type:String,default:"filterCustom"}},data:function(){return{db:c["a"]}}},d=l,i=o("2877"),s=Object(i["a"])(d,n,a,!1,null,null,null);t["a"]=s.exports},"6d41":function(e,t,o){"use strict";var n=o("74d6"),a=o.n(n);a.a},"74d6":function(e,t,o){},"758e":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("Filter Custom")]),o("Explain"),o("SingleFilter"),o("CustomIcon"),o("API",{attrs:{title:"API",anchor:"API",desc:"filterCustom Custom filter configuration"}})],1)},a=[],r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"content example-md-doc"},[o("div",{staticClass:"tip"},[o("p",[e._v("1、In order to meet the needs of more scenarios, the filtering custom function is opened.Filtering custom needs to implement interaction logic by itself"),o("br"),e._v(" 2、Filter custom functions by setting the 'filterCustom' property of the 'column' object"),o("br")])])])}],l=o("2877"),d={},i=Object(l["a"])(d,r,c,!1,null,null,null),s=i.exports,u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"content example-md-doc"},[o("anchor",{attrs:{"is-edit":"",label:"Single Condition Filter",fileName:"single-filter.md"}}),o("demo-block",[o("div",[o("p",[e._v("1、"),o("code",[e._v("defaultVisible")]),e._v(" Specifies whether to expand by default"),o("br"),e._v("2、"),o("code",[e._v("render")]),e._v("Render functions,Specifies filtering custom content.The parameter 'showFn' is the display drop-down function、The parameter "),o("code",[e._v("closeFn")]),e._v(" is to close the drop-down function")])]),o("template",{slot:"source"},[o("element-demo0")],1),o("template",{slot:"highlight"},[o("pre",{pre:!0},[o("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    rowKeyFieldName="rowkey"\n    :max-height="300"\n    :fixed-header="true"\n    :columns="columns"\n    :table-data="tableData"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        searchValue: "",\n        columns: [\n          {\n            field: "name",\n            key: "a",\n            title: "Name",\n            align: "left",\n            width: "15%",\n            // filter custom\n            filterCustom: {\n              defaultVisible: true,\n              render: ({ showFn, closeFn }, h) => {\n                return (\n                  <div class="custom-name-filter">\n                    <input\n                      value={this.searchValue}\n                      on-input={(e) => (this.searchValue = e.target.value)}\n                      placeholder="Search name"\n                    />\n                    <div class="custom-name-filter-operation">\n                      <span class="name-filter-cancel" on-click={() => this.searchCancel(closeFn)}>\n                        Cancel\n                      </span>\n                      <span\n                        class="name-filter-confirm"\n                        on-click={() => this.searchConfirm(closeFn)}\n                      >\n                        Search\n                      </span>\n                    </div>\n                  </div>\n                );\n              },\n            },\n          },\n          { field: "date", key: "b", title: "Date", align: "left", width: "15%" },\n          { field: "hobby", key: "c", title: "Hobby", align: "center", width: "30%" },\n          { field: "address", key: "d", title: "Address", align: "left", width: "40%" },\n        ],\n        // real table data\n        tableData: [],\n        // source data\n        sourceData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shanghai",\n            rowkey: 0,\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Beijing",\n            rowkey: 1,\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n            rowkey: 2,\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n            rowkey: 3,\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n            rowkey: 4,\n          },\n        ],\n      };\n    },\n    methods: {\n      // search\n      search() {\n        const searchValue = this.searchValue;\n        this.tableData = this.sourceData.filter(\n          (x) => !searchValue.length || x.name.toLowerCase().includes(searchValue.toLowerCase())\n        );\n      },\n\n      // search cancel\n      searchCancel(closeFn) {\n        closeFn();\n      },\n\n      // search cancel\n      searchConfirm(closeFn) {\n        this.search();\n        closeFn();\n      },\n    },\n    created() {\n      this.tableData = this.sourceData.slice(0);\n    },\n  };\n<\/script>\n\n<style>\n  .custom-name-filter {\n    padding: 10px;\n\n    .custom-name-filter-operation {\n      cursor: pointer;\n\n      margin: 10px 10px 0px 0;\n      .name-filter-cancel,\n      .name-filter-confirm {\n        &:hover {\n          color: #1890ff;\n        }\n      }\n\n      .name-filter-cancel {\n        float: left;\n      }\n\n      .name-filter-confirm {\n        float: right;\n      }\n    }\n  }\n</style>\n')])])])],2)],1)},p=[];function m(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function f(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?m(Object(o),!0).forEach((function(t){h(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function h(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var b={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[[o("ve-table",{attrs:{rowKeyFieldName:"rowkey","max-height":300,"fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},t=[],o={data:function(){var e=this;this.$createElement;return{searchValue:"",columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%",filterCustom:{defaultVisible:!0,render:function(t,o){t.showFn;var n=t.closeFn;return o("div",{class:"custom-name-filter"},[o("input",{domProps:{value:e.searchValue},on:{input:function(t){return e.searchValue=t.target.value}},attrs:{placeholder:"Search name"}}),o("div",{class:"custom-name-filter-operation"},[o("span",{class:"name-filter-cancel",on:{click:function(){return e.searchCancel(n)}}},["Cancel"]),o("span",{class:"name-filter-confirm",on:{click:function(){return e.searchConfirm(n)}}},["Search"])])])}}},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowkey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowkey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowkey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowkey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowkey:4}]}},methods:{search:function(){var e=this.searchValue;this.tableData=this.sourceData.filter((function(t){return!e.length||t.name.toLowerCase().includes(e.toLowerCase())}))},searchCancel:function(e){e()},searchConfirm:function(e){this.search(),e()}},created:function(){this.tableData=this.sourceData.slice(0)}};return f({render:e,staticRenderFns:t},o)}()}},y=b,w=(o("58f0"),Object(l["a"])(y,u,p,!1,null,null,null)),g=w.exports,v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"content example-md-doc"},[o("anchor",{attrs:{"is-edit":"",label:"Custom Icon",fileName:"custom-icon.md"}}),e._m(0),o("demo-block",[o("template",{slot:"source"},[o("element-demo0")],1),o("template",{slot:"highlight"},[o("pre",{pre:!0},[o("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    rowKeyFieldName="rowkey"\n    :max-height="300"\n    :fixed-header="true"\n    :columns="columns"\n    :table-data="tableData"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        searchValue: "",\n        columns: [\n          {\n            field: "name",\n            key: "a",\n            title: "Name",\n            align: "left",\n            width: "15%",\n            // filter custom\n            filterCustom: {\n              defaultVisible: false,\n              render: ({ showFn, closeFn }, h) => {\n                return (\n                  <div class="custom-name-filter">\n                    <input\n                      value={this.searchValue}\n                      on-input={(e) => (this.searchValue = e.target.value)}\n                      placeholder="Search name"\n                    />\n                    <div class="custom-name-filter-operation">\n                      <span class="name-filter-cancel" on-click={() => this.searchCancel(closeFn)}>\n                        取消\n                      </span>\n                      <span\n                        class="name-filter-confirm"\n                        on-click={() => this.searchConfirm(closeFn)}\n                      >\n                        查询\n                      </span>\n                    </div>\n                  </div>\n                );\n              },\n              // custom filter icon\n              filterIcon: () => {\n                return <ve-icon name="search" />;\n              },\n            },\n          },\n          { field: "date", key: "b", title: "Date", align: "left", width: "15%" },\n          { field: "hobby", key: "c", title: "Hobby", align: "center", width: "30%" },\n          { field: "address", key: "d", title: "Address", align: "left", width: "40%" },\n        ],\n        // real table data\n        tableData: [],\n        // source data\n        sourceData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shanghai",\n            rowkey: 0,\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Beijing",\n            rowkey: 1,\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n            rowkey: 2,\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n            rowkey: 3,\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n            rowkey: 4,\n          },\n        ],\n      };\n    },\n    methods: {\n      // search\n      search() {\n        const searchValue = this.searchValue;\n        this.tableData = this.sourceData.filter(\n          (x) => !searchValue.length || x.name.toLowerCase().includes(searchValue.toLowerCase())\n        );\n      },\n\n      // search cancel\n      searchCancel(closeFn) {\n        closeFn();\n      },\n\n      // search cancel\n      searchConfirm(closeFn) {\n        this.search();\n        closeFn();\n      },\n    },\n    created() {\n      this.tableData = this.sourceData.slice(0);\n    },\n  };\n<\/script>\n\n<style>\n  .custom-name-filter {\n    padding: 10px;\n\n    .custom-name-filter-operation {\n      cursor: pointer;\n\n      margin: 10px 10px 0px 0;\n      .name-filter-cancel,\n      .name-filter-confirm {\n        &:hover {\n          color: #1890ff;\n        }\n      }\n\n      .name-filter-cancel {\n        float: left;\n      }\n\n      .name-filter-confirm {\n        float: right;\n      }\n    }\n  }\n</style>\n')])])])],2)],1)},x=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("filterIcon function Support to return custom icon. The built-in "),o("code",[e._v('<ve-icon name="search" />')]),e._v(" icon is used here,You can also use other icon libraries")])}];function C(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function V(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?C(Object(o),!0).forEach((function(t){S(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):C(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function S(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var k={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[[o("ve-table",{attrs:{rowKeyFieldName:"rowkey","max-height":300,"fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},t=[],o={data:function(){var e=this,t=this.$createElement;return{searchValue:"",columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%",filterCustom:{defaultVisible:!1,render:function(t,o){t.showFn;var n=t.closeFn;return o("div",{class:"custom-name-filter"},[o("input",{domProps:{value:e.searchValue},on:{input:function(t){return e.searchValue=t.target.value}},attrs:{placeholder:"Search name"}}),o("div",{class:"custom-name-filter-operation"},[o("span",{class:"name-filter-cancel",on:{click:function(){return e.searchCancel(n)}}},["取消"]),o("span",{class:"name-filter-confirm",on:{click:function(){return e.searchConfirm(n)}}},["查询"])])])},filterIcon:function(){return t("ve-icon",{attrs:{name:"search"}})}}},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowkey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowkey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowkey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowkey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowkey:4}]}},methods:{search:function(){var e=this.searchValue;this.tableData=this.sourceData.filter((function(t){return!e.length||t.name.toLowerCase().includes(e.toLowerCase())}))},searchCancel:function(e){e()},searchConfirm:function(e){this.search(),e()}},created:function(){this.tableData=this.sourceData.slice(0)}};return V({render:e,staticRenderFns:t},o)}()}},O=k,R=(o("fcdb"),Object(l["a"])(O,v,x,!1,null,null,null)),F=R.exports,I=o("683c"),D={name:"basic-main",components:{Explain:s,SingleFilter:g,CustomIcon:F,API:I["a"]}},N=D,A=Object(l["a"])(N,n,a,!1,null,null,null);t["default"]=A.exports},"7eb4":function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var n=[{field:"param",title:"Parameters",width:"10%",align:"left",type:"expand",renderBodyCell:function(e,t){var o=e.row;e.column,e.rowIndex;return t("span",{domProps:{innerHTML:o.param}})}},{field:"desc",title:"Description",width:"60%",align:"left",renderBodyCell:function(e,t){var o=e.row;e.column,e.rowIndex;return t("span",{domProps:{innerHTML:o.desc}})}},{field:"type",title:"Type",width:"10%",align:"left",renderBodyCell:function(e,t){var o=e.row;e.column,e.rowIndex;return t("span",{domProps:{innerHTML:o.type}})}},{field:"optionalVal",title:"Optional",width:"10%",align:"left",renderBodyCell:function(e,t){var o=e.row;e.column,e.rowIndex;return t("span",{domProps:{innerHTML:o.optionalVal}})}},{field:"default",title:"Default",width:"10%",align:"left",renderBodyCell:function(e,t){var o=e.row;e.column,e.rowIndex;return t("span",{domProps:{innerHTML:o.default}})}}],a={table:{data:[{param:"tableData",desc:"table data",type:"<code>Array</code>",optionalVal:"-",default:"-"},{param:"footerData",desc:"Table footer summary data，The data structure is consistent with <code>tableData</code>",type:"<code>Array</code>",optionalVal:"-",default:"-"},{param:"columns",desc:"Column configuration. See the following table columns configuration for specific items",type:"<code>Array</code>",optionalVal:"-",default:"-"},{param:"fixedHeader",desc:"Is the header fixed,Enabled by default.It needs to be used in combination with `maxHeight`",type:"<code>Boolean</code>",optionalVal:"-",default:"true"},{param:"fixedFooter",desc:"Is the fotter fixed,Enabled by default.It needs to be used in combination with `maxHeight`",type:"<code>Boolean</code>",optionalVal:"-",default:"true"},{param:"scrollWidth",desc:"The width of the table's scroll area (the width of the start scroll bar).<code>Number</code>Specify pixels;<code>String</code>Specified percentage",type:"<code>Number</code>、<code>String</code>",optionalVal:"-",default:"-"},{param:"maxHeight",desc:"The maximum height of the table.<code>Number</code>Specify pixels;<code>String</code>Specified percentage.",type:"<code>Number</code>、<code>String</code>",optionalVal:"-",default:"-"},{param:"rowKeyFieldName",desc:"Specifies the field name of the row key.Used for row expand、row radio、row checkbox、row highlight、virtual scrolling",type:"<code>String</code>",optionalVal:"-",default:"-"},{param:"borderAround",desc:"Show table outer border",type:"<code>Boolean</code>",optionalVal:"-",default:"true"},{param:"borderX",desc:"Show column horizontal border",type:"<code>Boolean</code>",optionalVal:"-",default:"true"},{param:"borderY",desc:"Show column vertical border",type:"<code>Boolean</code>",optionalVal:"-",default:"false"},{param:"cellSpanOption",desc:"Cell merge configuration,Refer to cellSpanOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"},{param:"cellStyleOption",desc:"cell style configuration,Refer to cellStyleOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"},{param:"rowStyleOption",desc:"For row style configuration,Refer to rowStyleOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"},{param:"expandOption",desc:"row expand configuration,Refer to expandOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"},{param:"checkboxOption",desc:"Row multiple selection configuration,Refer to checkboxOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"},{param:"radioOption",desc:"Row radio configuration,Refer to radioOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"},{param:"virtualScrollOption",desc:"Virtual scroll configuration, it is recommended to display more than 1000 rows at a time.Refer to virtualScrollOption configuration for details",type:"<code>Boolean</code>",optionalVal:"-",default:"-"},{param:"sortOption",desc:"Sort configuration,Refer to sortOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"},{param:"cellSelectionOption",desc:"Cell selection configuration,Refer to cellSelectionOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"},{param:"eventCustomOption",desc:"Custom event configuration,Refer to eventCustomOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"}],columns:n},columns:{data:[{param:"field",desc:"The field of the column",type:"<code>String</code>",optionalVal:"-",default:"-",rowKey:0},{param:"key",desc:"Unique key value for each column",type:"<code>String</code>",optionalVal:"-",default:"-",rowKey:5},{param:"type",desc:'Column type. "expand"：row expand；"checkbox"：row checkbox；"radio"：row radio',type:"<code>String</code>",optionalVal:'"expand"、"checkbox"、"radio"',default:"-",rowKey:15},{param:"title",desc:"Column header text",type:"<code>String</code>",optionalVal:"-",default:"-",rowKey:20},{param:"width",desc:"<code>Number</code>width pixel value；<code>String</code>width percentage",type:"<code>String</code>、<code>Number</code>",optionalVal:"-",default:"-",rowKey:25},{param:"align",desc:"Cell alignment",type:"<code>String</code>",optionalVal:'"left"、"center"、"right"',default:'"center"',rowKey:30},{param:"sortBy",desc:'Sort rules.<br>1、<code>sortBy=""</code>：Sorting allowed without collation；<br>2、<code>sortBy="asc"</code>：Default current column ascending；<br>3、<code>sortBy="desc"</code>：Default current column descending；',type:"<code>String</code>",optionalVal:'""、"desc"、"asc"',default:'""',rowKey:31},{param:"renderBodyCell",desc:'1、Custom cell rendering function in the table body. jsx ,Writing is close to template syntax<br>\n                2、Parameter information.<code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index、<code>h</code>：createElement<br>3、For more JSX knowledge, please refer to<a href="https://vuejs.org/v2/guide/render-function.html#JSX"> Vue.js Official doc</a>',type:"<code>Function({row,column,rowIndex},h):VNode</code>",optionalVal:"-",default:"-",rowKey:35},{param:"renderHeaderCell",desc:"1、Header custom cell rendering function.The usage is the same as<code>renderBodyCell</code>。<br>\n                2、Parameter information.<code>column</code>:Current column configuration、<code>h</code>：createElement",type:"<code>Function({ column },h):VNode</code>",optionalVal:"-",default:"-",rowKey:40},{param:"renderFooterCell",desc:"1、footer custom cell rendering function.<br>\n                2、Parameter information.<code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index、<code>h</code>：createElement<br>",type:"<code>Function({row,column,rowIndex},h):VNode</code>",optionalVal:"-",default:"-",rowKey:45},{param:"<span class='expand'>ellipsis</span>",desc:"Cell ellipsis configuration",type:"<code>Object</code>",optionalVal:"-",default:"-",rowKey:49},{param:"<span class='expand'>filter</span>",desc:"Filter configuration.",type:"<code>Object</code>",optionalVal:"-",default:"-",rowKey:50},{param:"<span class='expand'>filterCustom</span>",desc:"Filter custom configuration.",type:"<code>Object</code>",optionalVal:"-",default:"-",rowKey:55}],columns:n,filterProps:{data:[{param:"filterList",desc:'\t1、filter conditions<br>\n                    2、It contains three attributes: label、 value and selected. like:<code>[{ value: 0, label: "1900-05-20", selected: false }]</code>',type:"<code>Array</code>",optionalVal:"-",default:"-"},{param:"isMultiple",desc:"Enable multiple selection of filter items",type:"<code>Boolean</code>",optionalVal:"-",default:"false"},{param:"filterConfirm",desc:"1、Filter confirm function。<br>2、Receive 1 parameter，<code>filterList</code>：filter conditions",type:"<code>Function({filterList})</code>",optionalVal:"-",default:"-"},{param:"filterReset",desc:"1、Filter reset function<br>2、Receive 1 parameter，<code>filterList</code>：filter conditions",type:"<code>Function({filterList})</code>",optionalVal:"-",default:"-"},{param:"filterIcon",desc:"1、filter custom icon rendering function.<br>2、parameter information。h：createElement",type:"<code>Function(h):VNode</code>",optionalVal:"-",default:"-"},{param:"maxHeight",desc:"1、The maximum height of the filter box. Height without operation button",type:"<code>Number</code>",optionalVal:"-",default:"1000"}],columns:n},filterCustomProps:{data:[{param:"render",desc:"1、Render function<br>\n                    2、Parameters received by render functions,showFn:show filter box function、closeFn:close filter box function、<code>h</code>：createElement",type:"<code>Function({showFn,closeFn},h):VNode</code>",optionalVal:"-",default:"-"},{param:"filterIcon",desc:"1、filter custom icon rendering function.<br>2、parameter information.h：createElement",type:"<code>Function(h):VNode</code>",optionalVal:"-",default:"-"}],columns:n},ellipsisProps:{data:[{param:"lineClamp",desc:"How many lines start to omit",type:"<code>Number</code>",optionalVal:"-",default:"1"},{param:"showTitle",desc:"Is the mouse hovering to display the title",type:"<code>Boolean</code>",optionalVal:"-",default:"true"}],columns:n}},expandOption:{data:[{param:"expandable",desc:"\t1、Whether the row rendering function is allowed to expand. Returns a Boolean value<br>\n                2、Receive 3 parameter,<code>row</code>:Current row data、<code>column</code>:Column configuration、<code>rowIndex</code>:rowIndex",type:"<code>Function({row,column,rowIndex})</code>",optionalVal:"-",default:"-"},{param:"render",desc:"1、Render functions<br>\n                2、The parameters received by the render function. row:Current row data、column:Column configuration、rowIndex:rowIndex、<code>h</code>：createElement",type:"<code>Function({row,column,rowIndex},h):VNode</code>",optionalVal:"-",default:"-"},{param:"defaultExpandAllRows",desc:"is expand all row",type:"<code>Boolean</code>",optionalVal:"-",default:"false"},{param:"defaultExpandedRowKeys",desc:"The default expanded row key. When parameter<code>defaultExpandAllRows</code> and parameter <code>defaultExpandedRowKeys</code> exist at the same time,priority of use<code>defaultExpandAllRows</code>",type:"<code>String[]</code>、<code>Number[]</code>",optionalVal:"-",default:"-"},{param:"expandedRowKeys",desc:"Controllable attributes of expand row, After setting the property, <code>defaultExpandAllRows</code> and <code>defaultExpandedRowKeys</code> will be invalid.refer to examples for details",type:"<code>String[]</code>、<code>Number[]</code>",optionalVal:"-",default:"-"},{param:"beforeExpandRowChange",desc:"1、Expand functions before switching,If false is returned, execution is interrupted.<br>\n                2、Receive 3 parameter,<code>beforeExpandedRowKeys</code>:All expanded keys before the change,<code>row</code>:The current row data,<code>rowIndex</code>row index",type:"<code>Function({beforeExpandedRowKeys,row,rowIndex})</code>",optionalVal:"-",default:"-"},{param:"afterExpandRowChange",desc:"1、Expand the function after switching.<br>\n                2、Receive 3 parameter,<code>afterExpandedRowKeys</code>:All expanded keys after change,<code>row</code>:Current row data,<code>rowIndex</code>row index",type:"<code>Function({afterExpandedRowKeys,row,rowIndex})</code>",optionalVal:"-",default:"-"},{param:"trigger",desc:"Expand the row event trigger type.\n                <code>icon</code>：expand by click the icon;<code>cell</code>：expand by click cell;<code>row</code>:expand by click row",type:"<code>String</code>",optionalVal:'"icon"、"cell"、"row"',default:'"icon"'}],columns:n},checkboxOption:{data:[{param:"defaultSelectedAllRows",desc:"Is selected all by default",type:"<code>Boolean</code>",optionalVal:"-",default:"false"},{param:"defaultSelectedRowKeys",desc:"Default selected row keys",type:"<code>String[]</code>、<code>Number[]</code>",optionalVal:"-",default:"-"},{param:"disableSelectedRowKeys",desc:"Disable selected row keys",type:"<code>String[]</code>、<code>Number[]</code>",optionalVal:"-",default:"-"},{param:"selectedRowKeys",desc:"The controllable properties. After setting the property,  <code>defaultSelectedAllRows</code> and <code>defaultSelectedRowKeys</code> will be invalid. Refer to example",type:"<code>String[]</code>、<code>Number[]</code>",optionalVal:"-",default:"-"},{param:"selectedRowChange",desc:"Change event for the selected row. Receive 3 parameter,row:Current row data,<code>isSelected</code>Whether the current row is selected,<code>selectedRowKeys</code>All selected rowkey information",type:"<code>Function({row, isSelected, selectedRowKeys})</code>",optionalVal:"-",default:"-"},{param:"selectedAllChange",desc:"Select all change events. The event receives 2 parameters,<code>isSelected</code> Select all or not.<code>selectedRowKeys</code>All selected rowkey information",type:"<code>Function({isSelected, selectedRowKeys})</code>",optionalVal:"-",default:"-"},{param:"hideSelectAll",desc:"Is hide select all button",type:"<code>Boolean</code>",optionalVal:"-",default:"false"}],columns:n},radioOption:{data:[{param:"defaultSelectedRowKey",desc:"Default selected row key",type:"<code>String</code>、<code>Number</code>",optionalVal:"-",default:"-"},{param:"disableSelectedRowKeys",desc:"Disable selected row keys",type:"<code>String[]</code>、<code>Number[]</code>",optionalVal:"-",default:"-"},{param:"selectedRowKey",desc:"The controllable properties of the selected row, After setting the property, <code>defaultSelectedRowKey</code> will be invalid. Refer to example",type:"<code>String</code>、<code>Number</code>",optionalVal:"-",default:"-"},{param:"selectedRowChange",desc:"Change event for the selected row. Method receives 1 parameter, row:Current row data",type:"<code>Function({row})</code>",optionalVal:"-",default:"-"}],columns:n},virtualScrollOption:{data:[{param:"enable",desc:"Enable virtual scrolling",type:"<code>Boolean</code>",optionalVal:"-",default:"false"},{param:"minRowHeight",desc:"The min row height (PX). The smaller the value is, the more row is displayed in the table visualization range. It can be set according to the actual minimum height",type:"<code>Number</code>",optionalVal:"-",default:"42"},{param:"scrolling",desc:"滚动回调事件。",type:"Function({startRowIndex,visibleStartIndex,visibleEndIndex,visibleAboveCount,visibleBelowCount})",optionalVal:"-",default:"-"}],columns:n},sortOption:{data:[{param:"multipleSort",desc:"Enable multi field sorting",type:"<code>Boolean</code>",optionalVal:"-",default:"false"},{param:"sortAlways",desc:"Whether to turn on sorting is only switched between ascending and descending",type:"<code>Boolean</code>",optionalVal:"-",default:"false"},{param:"sortChange",desc:"Sort change events. Event receives 1 Parameter object:Sort rules for columns",type:"<code>Function({row})</code>",optionalVal:"-",default:"-"}],columns:n},cellSpanOption:{data:[{param:"bodyCellSpan",desc:"1、Body cell merge function<br>2、Parameter information. <code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index",type:"<code>Function({row,column,rowIndex})</code>",optionalVal:"-",default:"-"},{param:"footerCellSpan",desc:"1、footer ell merge function<br>2、Parameter information. <code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index",type:"<code>Function({row,column,rowIndex})</code>",optionalVal:"-",default:"-"}],columns:n},eventCustomOption:{data:[{param:"bodyRowEvents",desc:"1、body row custom events,Returns the event that needs to be customized.<br>2、Receive 2 parameters.<code>row</code>Current row data、<code>rowIndex</code>:Row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave",type:"<code>Function({row,rowIndx})</code>",optionalVal:"-",default:"-"},{param:"bodyCellEvents",desc:"1、body column custom events,Returns the event that needs to be customized.<br>2、Receive 3 parameters.<code>row</code>Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave",type:"<code>Function({row,column,rowIndx})</code>",optionalVal:"-",default:"-"},{param:"headerRowEvents",desc:"1、header row custom events,Returns the event that needs to be customized.<br>2、Receive 1 parameters.<code>rowIndex</code>：header row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave<br>",type:"<code>Function({rowIndex})</code>",optionalVal:"-",default:"-"},{param:"headerCellEvents",desc:"1、header column custom events,Returns the event that needs to be customized.<br>2、Receive 2 parameters.<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave",type:"<code>Function({column,rowIndx})</code>",optionalVal:"-",default:"-"},{param:"footerRowEvents",desc:"1、footer row custom events, Returns the event that needs to be customized.<br>2、Receive 2 parameters.<code>row</code>Current row data、<code>rowIndex</code>:Row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave",type:"<code>Function({row,rowIndx})</code>",optionalVal:"-",default:"-"},{param:"footerCellEvents",desc:"1、footer column custom events, Returns the event that needs to be customized.<br>2、Receive 3 parameters.<code>row</code>Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave",type:"<code>Function({row,column,rowIndx})</code>",optionalVal:"-",default:"-"}],columns:n},cellStyleOption:{data:[{param:"bodyCellClass",desc:"1、Table body cell style<br>\n                2、Received 3 parameters,<code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index",type:"<code>Function({row,column,rowIndex})</code>",optionalVal:"-",default:"-"},{param:"headerCellClass",desc:"1、Header cell style<br>\n                2、Received 2 parameters,<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index",type:"<code>Function({column,rowIndex})</code>",optionalVal:"-",default:"-"},{param:"footerCellClass",desc:"1、Footer cell style<br>\n                2、Received 3 parameters,<code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index",type:"<code>Function({row,column,rowIndex})</code>",optionalVal:"-",default:"-"}],columns:n},rowStyleOption:{data:[{param:"hoverHighlight",desc:"row hover background highlight",type:"<code>Boolean</code>",optionalVal:"-",default:"true"},{param:"clickHighlight",desc:"row click background highlight",type:"<code>Boolean</code>",optionalVal:"-",default:"true"},{param:"stripe",desc:"row stripe",type:"<code>Boolean</code>",optionalVal:"-",default:"false"}],columns:n},cellSelectionOption:{data:[{param:"enable",desc:"enable cell selection",type:"<code>Boolean</code>",optionalVal:"-",default:"true"}],columns:n}}},aa4b:function(e,t,o){},fcdb:function(e,t,o){"use strict";var n=o("aa4b"),a=o.n(n);a.a}}]);
//# sourceMappingURL=chunk-1e594846.1244a70e.js.map