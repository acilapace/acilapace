(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5ae2f0e"],{"0757":function(e,t,n){"use strict";n("2385")},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("d3b7");function r(e,t,n,r,a,i,s){try{var c=e[i](s),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var s=e.apply(t,n);function c(e){r(s,a,i,c,o,"next",e)}function o(e){r(s,a,i,c,o,"throw",e)}c(void 0)}))}}},2385:function(e,t,n){},3166:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"discorsivenerdi"}},[n("Header"),n("div",{staticClass:"container mt-5 mb-5"},[n("h1",{attrs:{align:"center"}},[e._v("Discorsi del Venerdì")]),0===e.documents.length?n("div",{attrs:{align:"center"}},[n("b-spinner",{staticClass:"m-5",staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner"}})],1):e._e(),n("div",{attrs:{id:"discorso-venerdi",items:e.documents,"per-page":e.perPage,"current-page":e.currentPage}},e._l(e.documents,(function(t){return n("div",{key:t.id,staticClass:"row mb-2 mt-3"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"card flex-md-row mb-4 box-shadow h-md-250"},[n("div",{staticClass:"card-body d-flex flex-column align-items-start"},[n("h3",{staticClass:"mb-0"},[e._v(" "+e._s(t.title))]),n("div",{staticClass:"mb-1 text-muted"},[e._v(" "+e._s(new Date(t.created_at).getDate())+" "+e._s(new Date(t.created_at).toLocaleString("default",{month:"long"}))+" "+e._s(new Date(t.created_at).getFullYear())+" ")]),"it"==e.getLocale()?n("p",{staticClass:"card-text mb-auto"},[e._v(e._s(t.preview))]):n("p",{staticClass:"card-text mb-auto text-right",attrs:{dir:"rtl"}},[e._v(e._s(t.preview))]),n("router-link",{attrs:{to:{name:"DiscorsoVenerdi",params:{id:t.id}}}},[e._v("Continua a leggere...")])],1)])])])})),0),n("ul",{staticClass:"pagination justify-content-center"},[n("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage,"aria-controls":"discorso-venerdi"},on:{change:e.handlePageChange},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)]),n("Footer")],1)},a=[],i=n("1da1"),s=(n("96cf"),n("0418")),c=n("fd2d"),o={name:"DiscorsiVenerdi",components:{Header:s["a"],Footer:c["a"]},created:function(){this.getData(),this.getSize()},mounted:function(){var e=this;this.$watch("$i18n.locale",(function(t,n){t!==n&&e.getData()}),{immediate:!0})},data:function(){return{perPage:10,currentPage:1,documents:[],rows:0}},methods:{getDiscorsoVenerdi:function(e,t){var n=this.$router.resolve({name:e,params:{id:t}});window.open(n.href,"_blank")},handlePageChange:function(e){this.currentPage=e,this.getData()},getLocale:function(){return this.$i18n.locale},getData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.get("https://discorsivenerdi.herokuapp.com/discorsi-venerdi?limit="+e.perPage+"&page="+e.currentPage+"&lang="+e.$i18n.locale);case 3:n=t.sent,e.documents=n.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getSize:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.get("https://discorsivenerdi.herokuapp.com/discorsi-venerdi/size");case 3:n=t.sent,e.rows=n.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},u=o,d=(n("0757"),n("2877")),l=Object(d["a"])(u,r,a,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-a5ae2f0e.168e1c5b.js.map