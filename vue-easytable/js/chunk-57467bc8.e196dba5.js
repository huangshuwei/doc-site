(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57467bc8"],{"05f8":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"footer 列事件自定义",fileName:"on-footer-cell.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    打开F12 查看 console 信息\n    <ve-table\n      border-y\n      fixed-header\n      :max-height="300"\n      :columns="columns"\n      :table-data="tableData"\n      :footer-data="footerData"\n      rowKeyFieldName="rowkey"\n      :event-custom-option="eventCustomOption"\n    />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        eventCustomOption: {\n          footerCellEvents: ({ row, column, rowIndex }) => {\n            return {\n              click: (event) => {\n                console.log("click::", row, column, rowIndex, event);\n              },\n              dblclick: (event) => {\n                console.log("dblclick::", row, column, rowIndex, event);\n              },\n              contextmenu: (event) => {\n                console.log("contextmenu::", row, column, rowIndex, event);\n              },\n              mouseenter: (event) => {\n                console.log("mouseenter::", row, column, rowIndex, event);\n              },\n              mouseleave: (event) => {\n                console.log("mouseleave::", row, column, rowIndex, event);\n              },\n            };\n          },\n        },\n        columns: [\n          {\n            field: "",\n            key: "a",\n            title: "",\n            width: 50,\n            align: "center",\n            renderBodyCell: ({ row, column, rowIndex }, h) => {\n              return ++rowIndex;\n            },\n          },\n          { field: "name", key: "b", title: "Name", width: 200, align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", width: 300, align: "left" },\n          { field: "address", key: "d", title: "Address", width: "", align: "left" },\n        ],\n        tableData: [],\n      };\n    },\n    methods: {\n      initTableData() {\n        let data = [];\n        for (let i = 0; i < 15; i++) {\n          data.push({\n            rowkey: i,\n            name: i,\n            date: i,\n            hobby: i,\n            address: i,\n          });\n        }\n        this.tableData = data;\n      },\n\n      initFooterData() {\n        this.footerData = [\n          {\n            rowkey: 0,\n            name: "平均值",\n            date: 213,\n            hobby: 355,\n            address: 189,\n          },\n          {\n            rowkey: 1,\n            name: "汇总值",\n            date: 1780,\n            hobby: 890,\n            address: 2988,\n          },\n        ];\n      },\n    },\n    created() {\n      this.initTableData();\n      this.initFooterData();\n    },\n  };\n<\/script>\n')])])])],2)],1)},r=[];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[e._v("\n    打开F12 查看 console 信息\n    "),t("ve-table",{attrs:{"border-y":"","fixed-header":"","max-height":300,columns:e.columns,"table-data":e.tableData,"footer-data":e.footerData,rowKeyFieldName:"rowkey","event-custom-option":e.eventCustomOption}})],1)]],2)},n=[],t={data:function(){return{eventCustomOption:{footerCellEvents:function(e){var n=e.row,t=e.column,o=e.rowIndex;return{click:function(e){console.log("click::",n,t,o,e)},dblclick:function(e){console.log("dblclick::",n,t,o,e)},contextmenu:function(e){console.log("contextmenu::",n,t,o,e)},mouseenter:function(e){console.log("mouseenter::",n,t,o,e)},mouseleave:function(e){console.log("mouseleave::",n,t,o,e)}}}},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,n){e.row,e.column;var t=e.rowIndex;return++t}},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initTableData:function(){for(var e=[],n=0;n<15;n++)e.push({rowkey:n,name:n,date:n,hobby:n,address:n});this.tableData=e},initFooterData:function(){this.footerData=[{rowkey:0,name:"平均值",date:213,hobby:355,address:189},{rowkey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}},created:function(){this.initTableData(),this.initFooterData()}};return l({render:e,staticRenderFns:n},t)}()}},d=c,s=t("2877"),u=Object(s["a"])(d,o,r,!1,null,null,null);n["a"]=u.exports},"13d3":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"footer 行事件自定义",fileName:"on-footer-row.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    打开F12 查看 console 信息\n    <ve-table\n      border-y\n      fixed-header\n      :max-height="300"\n      :columns="columns"\n      :table-data="tableData"\n      :footer-data="footerData"\n      rowKeyFieldName="rowkey"\n      :event-custom-option="eventCustomOption"\n    />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        eventCustomOption: {\n          footerRowEvents: ({ row, rowIndex }) => {\n            return {\n              click: (event) => {\n                console.log("click::", row, rowIndex, event);\n              },\n              dblclick: (event) => {\n                console.log("dblclick::", row, rowIndex, event);\n              },\n              contextmenu: (event) => {\n                console.log("contextmenu::", row, rowIndex, event);\n              },\n              mouseenter: (event) => {\n                console.log("mouseenter::", row, rowIndex, event);\n              },\n              mouseleave: (event) => {\n                console.log("mouseleave::", row, rowIndex, event);\n              },\n            };\n          },\n        },\n        columns: [\n          {\n            field: "",\n            key: "a",\n            title: "",\n            width: 50,\n            align: "center",\n            renderBodyCell: ({ row, column, rowIndex }, h) => {\n              return ++rowIndex;\n            },\n          },\n          { field: "name", key: "b", title: "Name", width: 200, align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", width: 300, align: "left" },\n          { field: "address", key: "d", title: "Address", width: "", align: "left" },\n        ],\n        tableData: [],\n      };\n    },\n    methods: {\n      initTableData() {\n        let data = [];\n        for (let i = 0; i < 15; i++) {\n          data.push({\n            rowkey: i,\n            name: i,\n            date: i,\n            hobby: i,\n            address: i,\n          });\n        }\n        this.tableData = data;\n      },\n\n      initFooterData() {\n        this.footerData = [\n          {\n            rowkey: 0,\n            name: "平均值",\n            date: 213,\n            hobby: 355,\n            address: 189,\n          },\n          {\n            rowkey: 1,\n            name: "汇总值",\n            date: 1780,\n            hobby: 890,\n            address: 2988,\n          },\n        ];\n      },\n    },\n    created() {\n      this.initTableData();\n      this.initFooterData();\n    },\n  };\n<\/script>\n')])])])],2)],1)},r=[];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[e._v("\n    打开F12 查看 console 信息\n    "),t("ve-table",{attrs:{"border-y":"","fixed-header":"","max-height":300,columns:e.columns,"table-data":e.tableData,"footer-data":e.footerData,rowKeyFieldName:"rowkey","event-custom-option":e.eventCustomOption}})],1)]],2)},n=[],t={data:function(){return{eventCustomOption:{footerRowEvents:function(e){var n=e.row,t=e.rowIndex;return{click:function(e){console.log("click::",n,t,e)},dblclick:function(e){console.log("dblclick::",n,t,e)},contextmenu:function(e){console.log("contextmenu::",n,t,e)},mouseenter:function(e){console.log("mouseenter::",n,t,e)},mouseleave:function(e){console.log("mouseleave::",n,t,e)}}}},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,n){e.row,e.column;var t=e.rowIndex;return++t}},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initTableData:function(){for(var e=[],n=0;n<15;n++)e.push({rowkey:n,name:n,date:n,hobby:n,address:n});this.tableData=e},initFooterData:function(){this.footerData=[{rowkey:0,name:"平均值",date:213,hobby:355,address:189},{rowkey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}},created:function(){this.initTableData(),this.initFooterData()}};return l({render:e,staticRenderFns:n},t)}()}},d=c,s=t("2877"),u=Object(s["a"])(d,o,r,!1,null,null,null);n["a"]=u.exports},"3fa6":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("事件自定义")]),t("Explain"),t("OnBodyRow"),t("OnBodyCell"),t("OnHeaderRow"),t("OnHeaderCell"),t("OnFooterRow"),t("OnFooterCell"),t("API",{attrs:{title:"API",anchor:"API",desc:"eventCustomOption 事件自定义配置"}})],1)},r=[],a=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、"),t("code",[e._v("eventCustomOption")]),e._v(" 配置自定义事件"),t("br"),e._v(" 2、支持 body、header、footer 行和列 事件自定义"),t("br"),e._v(" 3、支持以下事件自定义")]),t("ul",[t("li",[e._v("click")]),t("li",[e._v("dblclick")]),t("li",[e._v("contextmen")]),t("li",[e._v("mouseenter")]),t("li",[e._v("mouseleave")])])]),t("p",[e._v("配置代码速览")]),t("pre",[t("code",[e._v("eventCustomOption: {\n  // body 行事件自定义\n  bodyRowEvents: ({ row, rowIndex }) => {\n    return {\n      click: (event) => {},\n      dblclick: (event) => {},\n      contextmenu: (event) => {},\n      mouseenter: (event) => {},\n      mouseleave: (event) => {},\n    };\n  },\n  // body 列事件自定义\n  bodyCellEvents: ({ row,column,rowIndx }) => {\n    return {\n      click: (event) => {},\n      dblclick: (event) => {},\n      contextmenu: (event) => {},\n      mouseenter: (event) => {},\n      mouseleave: (event) => {},\n    };\n  },\n  // header 行事件自定义\n  headerRowEvents: ({ rowIndx }) => {\n    return {\n      click: (event) => {},\n      dblclick: (event) => {},\n      contextmenu: (event) => {},\n      mouseenter: (event) => {},\n      mouseleave: (event) => {},\n    };\n  },\n  // header 列事件自定义\n  headerCellEvents: ({ column,rowIndx }) => {\n    return {\n      click: (event) => {},\n      dblclick: (event) => {},\n      contextmenu: (event) => {},\n      mouseenter: (event) => {},\n      mouseleave: (event) => {},\n    };\n  },\n  // footer 行事件自定义\n  footerRowEvents: ({ row, rowIndex }) => {\n    return {\n      click: (event) => {},\n      dblclick: (event) => {},\n      contextmenu: (event) => {},\n      mouseenter: (event) => {},\n      mouseleave: (event) => {},\n    };\n  },\n  // footer 列事件自定义\n  footerCellEvents: ({ row,column,rowIndx }) => {\n    return {\n      click: (event) => {},\n      dblclick: (event) => {},\n      contextmenu: (event) => {},\n      mouseenter: (event) => {},\n      mouseleave: (event) => {},\n    };\n  },\n},\n")])])])}],i=t("2877"),c={},d=Object(i["a"])(c,a,l,!1,null,null,null),s=d.exports,u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"body 行事件自定义",fileName:"on-body-row.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    打开F12 查看 console 信息\n    <ve-table :columns="columns" :table-data="tableData" :event-custom-option="eventCustomOption" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        eventCustomOption: {\n          bodyRowEvents: ({ row, rowIndex }) => {\n            return {\n              click: (event) => {\n                console.log("click::", row, rowIndex, event);\n              },\n              dblclick: (event) => {\n                console.log("dblclick::", row, rowIndex, event);\n              },\n              contextmenu: (event) => {\n                console.log("contextmenu::", row, rowIndex, event);\n              },\n              mouseenter: (event) => {\n                console.log("mouseenter::", row, rowIndex, event);\n              },\n              mouseleave: (event) => {\n                console.log("mouseleave::", row, rowIndex, event);\n              },\n            };\n          },\n        },\n        columns: [\n          {\n            field: "",\n            key: "a",\n            title: "",\n            width: 50,\n            align: "center",\n            renderBodyCell: ({ row, column, rowIndex }, h) => {\n              return ++rowIndex;\n            },\n          },\n          { field: "name", key: "b", title: "Name", width: 200, align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", width: 300, align: "left" },\n          { field: "address", key: "d", title: "Address", width: "", align: "left" },\n        ],\n        tableData: [\n          {\n            rowKey: 1001,\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            rowKey: 1002,\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            rowKey: 1003,\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            rowKey: 1004,\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            rowKey: 1005,\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},m=[];function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){y(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[e._v("\n    打开F12 查看 console 信息\n    "),t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"event-custom-option":e.eventCustomOption}})],1)]],2)},n=[],t={data:function(){return{eventCustomOption:{bodyRowEvents:function(e){var n=e.row,t=e.rowIndex;return{click:function(e){console.log("click::",n,t,e)},dblclick:function(e){console.log("dblclick::",n,t,e)},contextmenu:function(e){console.log("contextmenu::",n,t,e)},mouseenter:function(e){console.log("mouseenter::",n,t,e)},mouseleave:function(e){console.log("mouseleave::",n,t,e)}}}},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,n){e.row,e.column;var t=e.rowIndex;return++t}},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return v({render:e,staticRenderFns:n},t)}()}},h=f,w=Object(i["a"])(h,u,m,!1,null,null,null),p=w.exports,g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"body 列事件自定义",fileName:"on-body-cell.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    打开F12 查看 console 信息\n    <ve-table :columns="columns" :table-data="tableData" :event-custom-option="eventCustomOption" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        eventCustomOption: {\n          bodyCellEvents: ({ row, column, rowIndex }) => {\n            return {\n              click: (event) => {\n                console.log("click::", row, column, rowIndex, event);\n              },\n              dblclick: (event) => {\n                console.log("dblclick::", row, column, rowIndex, event);\n              },\n              contextmenu: (event) => {\n                console.log("contextmenu::", row, column, rowIndex, event);\n              },\n              mouseenter: (event) => {\n                console.log("mouseenter::", row, column, rowIndex, event);\n              },\n              mouseleave: (event) => {\n                console.log("mouseleave::", row, column, rowIndex, event);\n              },\n            };\n          },\n        },\n\n        columns: [\n          {\n            field: "",\n            key: "a",\n            title: "",\n            width: 50,\n            align: "center",\n            renderBodyCell: ({ row, column, rowIndex }, h) => {\n              return ++rowIndex;\n            },\n          },\n          { field: "name", key: "b", title: "Name", width: 200, align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", width: 300, align: "left" },\n          { field: "address", key: "d", title: "Address", width: "", align: "left" },\n        ],\n        tableData: [\n          {\n            rowKey: 1001,\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            rowKey: 1002,\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            rowKey: 1003,\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            rowKey: 1004,\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            rowKey: 1005,\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},O=[];function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){C(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var j={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[e._v("\n    打开F12 查看 console 信息\n    "),t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"event-custom-option":e.eventCustomOption}})],1)]],2)},n=[],t={data:function(){return{eventCustomOption:{bodyCellEvents:function(e){var n=e.row,t=e.column,o=e.rowIndex;return{click:function(e){console.log("click::",n,t,o,e)},dblclick:function(e){console.log("dblclick::",n,t,o,e)},contextmenu:function(e){console.log("contextmenu::",n,t,o,e)},mouseenter:function(e){console.log("mouseenter::",n,t,o,e)},mouseleave:function(e){console.log("mouseleave::",n,t,o,e)}}}},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,n){e.row,e.column;var t=e.rowIndex;return++t}},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return x({render:e,staticRenderFns:n},t)}()}},D=j,I=Object(i["a"])(D,g,O,!1,null,null,null),N=I.exports,P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"header 行事件自定义",fileName:"on-header-row.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    打开F12 查看 console 信息\n    <ve-table :columns="columns" :table-data="tableData" :event-custom-option="eventCustomOption" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        eventCustomOption: {\n          headerRowEvents: ({ rowIndex }) => {\n            return {\n              click: (event) => {\n                console.log("click::", rowIndex, event);\n              },\n              dblclick: (event) => {\n                console.log("dblclick::", rowIndex, event);\n              },\n              contextmenu: (event) => {\n                console.log("contextmenu::", rowIndex, event);\n              },\n              mouseenter: (event) => {\n                console.log("mouseenter::", rowIndex, event);\n              },\n              mouseleave: (event) => {\n                console.log("mouseleave::", rowIndex, event);\n              },\n            };\n          },\n        },\n        columns: [\n          {\n            field: "",\n            key: "a",\n            title: "",\n            width: 50,\n            align: "center",\n            renderBodyCell: ({ row, column, rowIndex }, h) => {\n              return ++rowIndex;\n            },\n          },\n          { field: "name", key: "b", title: "Name", width: 200, align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", width: 300, align: "left" },\n          { field: "address", key: "d", title: "Address", width: "", align: "left" },\n        ],\n        tableData: [\n          {\n            rowKey: 1001,\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            rowKey: 1002,\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            rowKey: 1003,\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            rowKey: 1004,\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            rowKey: 1005,\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},_=[];function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){K(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function K(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var F={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[e._v("\n    打开F12 查看 console 信息\n    "),t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"event-custom-option":e.eventCustomOption}})],1)]],2)},n=[],t={data:function(){return{eventCustomOption:{headerRowEvents:function(e){var n=e.rowIndex;return{click:function(e){console.log("click::",n,e)},dblclick:function(e){console.log("dblclick::",n,e)},contextmenu:function(e){console.log("contextmenu::",n,e)},mouseenter:function(e){console.log("mouseenter::",n,e)},mouseleave:function(e){console.log("mouseleave::",n,e)}}}},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,n){e.row,e.column;var t=e.rowIndex;return++t}},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return E({render:e,staticRenderFns:n},t)}()}},S=F,B=Object(i["a"])(S,P,_,!1,null,null,null),R=B.exports,J=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"header 列事件自定义",fileName:"on-header-cell.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    打开F12 查看 console 信息\n    <ve-table :columns="columns" :table-data="tableData" :event-custom-option="eventCustomOption" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        eventCustomOption: {\n          headerCellEvents: ({ column, rowIndex }) => {\n            return {\n              click: (event) => {\n                console.log("click::", column, rowIndex, event);\n              },\n              dblclick: (event) => {\n                console.log("dblclick::", column, rowIndex, event);\n              },\n              contextmenu: (event) => {\n                console.log("contextmenu::", column, rowIndex, event);\n              },\n              mouseenter: (event) => {\n                console.log("mouseenter::", column, rowIndex, event);\n              },\n              mouseleave: (event) => {\n                console.log("mouseleave::", column, rowIndex, event);\n              },\n            };\n          },\n        },\n        columns: [\n          {\n            field: "",\n            key: "a",\n            title: "",\n            width: 50,\n            align: "center",\n            renderBodyCell: ({ row, column, rowIndex }, h) => {\n              return ++rowIndex;\n            },\n          },\n          { field: "name", key: "b", title: "Name", width: 200, align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", width: 300, align: "left" },\n          { field: "address", key: "d", title: "Address", width: "", align: "left" },\n        ],\n        tableData: [\n          {\n            rowKey: 1001,\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            rowKey: 1002,\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            rowKey: 1003,\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            rowKey: 1004,\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            rowKey: 1005,\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},H=[];function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){z(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var G={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[e._v("\n    打开F12 查看 console 信息\n    "),t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"event-custom-option":e.eventCustomOption}})],1)]],2)},n=[],t={data:function(){return{eventCustomOption:{headerCellEvents:function(e){var n=e.column,t=e.rowIndex;return{click:function(e){console.log("click::",n,t,e)},dblclick:function(e){console.log("dblclick::",n,t,e)},contextmenu:function(e){console.log("contextmenu::",n,t,e)},mouseenter:function(e){console.log("mouseenter::",n,t,e)},mouseleave:function(e){console.log("mouseleave::",n,t,e)}}}},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,n){e.row,e.column;var t=e.rowIndex;return++t}},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return q({render:e,staticRenderFns:n},t)}()}},L=G,T=Object(i["a"])(L,J,H,!1,null,null,null),X=T.exports,M=t("13d3"),Q=t("05f8"),U=t("bf98"),V={name:"event-custom",components:{Explain:s,OnBodyRow:p,OnBodyCell:N,OnHeaderRow:R,OnHeaderCell:X,OnFooterRow:M["a"],OnFooterCell:Q["a"],API:U["a"]}},W=V,Y=Object(i["a"])(W,o,r,!1,null,null,null);n["default"]=Y.exports},bf98:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.eventCustomOption.data,columns:e.db.eventCustomOption.columns}})],1)},r=[],a=t("3ef3"),l=t("d890"),i={components:{tpl:a["a"]},props:{anchor:{type:String,default:"事件自定义配置"},desc:{type:String,default:"eventCustomOption"}},data:function(){return{db:l["a"]}}},c=i,d=t("2877"),s=Object(d["a"])(c,o,r,!1,null,null,null);n["a"]=s.exports}}]);
//# sourceMappingURL=chunk-57467bc8.e196dba5.js.map