(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{e044:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"q-pa-md"},[[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"text-h5"},[t._v("Company")])]),a("div",{staticClass:"col-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-8"},[a("div",{staticClass:"q-mr-md"},[a("q-input",{attrs:{dense:"",rounded:"",outlined:"",placeholder:"Search"},on:{input:function(e){return t.searchData(1)}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1)]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"q-pt-sm"},[a("q-btn",{attrs:{to:"/Company/create",color:"green",size:"sm"}},[t._v("create")])],1)])])])])]],2),a("Table",{attrs:{columns:t.columnsCompany,data:t.companyData,pagination:t.paginationData,module:t.companyedit},on:{delete_Refresh:t.deleteAndRefresh}})],1)},s=[],o=(a("386d"),a("7f7f"),a("e91f")),i=a("758b"),r={components:{Table:o["a"]},data:function(){return{company:"",searchText:"",companyedit:{link:"/Company/EditCompany"},paginationData:{},perPage:10,columnsCompany:[{name:"name",required:!0,label:"name",align:"left",field:function(t){return t.name},format:function(t){return"".concat(t)},sortable:!0},{name:"users1",align:"left",label:"Users",field:"calories",sortable:!0}],companyData:[]}},methods:{searchData:function(t){var e=this;this.companyData=[],this.paginationData.page=t,this.paginationData.limit=this.perPage,this.paginationData.search=this.searchText,console.log("dgdfgdfgdf",this.paginationData),i["a"].search(this.paginationData,(function(t){console.log("res",t),e.companyData=t.result;for(var a=0;a<e.companyData.length;a++){console.log("in first loop",e.companyData[a].users),e.companyData[a].users1="";for(var n=0;n<e.companyData[a].users.length;n++)e.companyData[a].users1=e.companyData[a].users1+" "+e.companyData[a].users[n].username+" ",console.log("jjjjjj",e.companyData)}}))},deleteAndRefresh:function(t){var e=this;i["a"].delete(t,(function(t){console.log("response",t),e.searchData(e.page)})),console.log("data in viewCompany",t)}},created:function(){this.searchData(this.page)}},c=r,l=a("2877"),d=a("eebe"),p=a.n(d),u=a("9989"),m=a("27f9"),f=a("9c40"),h=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=h.exports;p()(h,"components",{QPage:u["a"],QInput:m["a"],QBtn:f["a"]})},e91f:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"q-pa-md"},[a("q-table",{attrs:{data:t.data,columns:t.columns,"row-key":"name"},scopedSlots:t._u([{key:"header",fn:function(e){return[a("q-tr",{attrs:{props:e}},[t._l(e.cols,(function(n){return a("q-th",{key:n.name,attrs:{props:e}},[t._v("\n            "+t._s(n.label)+"\n          ")])})),a("q-th",{staticClass:"text-left"},[t._v("Operations")])],2)]}},{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[t._l(e.cols,(function(n){return a("q-td",{key:n.name,attrs:{props:e}},[t._v("\n            "+t._s(e.row[n.name])+"\n          ")])})),a("q-td",[a("div",{staticClass:"fit row inline wrap justify-start items-start content-start"},[a("div",[a("q-btn",{staticClass:"q-mr-md",attrs:{color:"info",size:"xs"},on:{click:function(a){return t.goToPage(e.row._id)}}},[t._v("Edit")])],1),a("div",{staticClass:"col",on:{click:function(a){return t.setId(e.row._id)}}},[a("DeleteButton",{attrs:{data:{id:t.id}},on:{event_child:t.delete1}})],1)])])],2)]}}])})],1)])},s=[],o=(a("b54a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-btn",{staticClass:"q-mr-md",attrs:{label:"Delete",color:"red",size:"xs"},on:{click:function(e){return t.open()}}}),a("q-dialog",{attrs:{persistent:"",position:t.position},model:{value:t.Delete,callback:function(e){t.Delete=e},expression:"Delete"}},[a("q-card",[a("q-card-section",{staticClass:"row items-center"},[a("span",{staticClass:"q-pt-md q-ml-"},[t._v("Are You Sure.You Want To Delete?")])]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Ok",color:"primary"},on:{click:function(e){return t.deleteById()}}})],1)],1)],1)],1)}),i=[],r={props:{data:Object},data:function(){return{opened:!1,Delete:!1,position:"top"}},methods:{open:function(){this.Delete=!0},deleteById:function(){this.$emit("event_child",this.data),console.log("data",this.data)}}},c=r,l=a("2877"),d=a("eebe"),p=a.n(d),u=a("9c40"),m=a("24e8"),f=a("f09f"),h=a("a370"),g=a("4b7e"),v=a("7f67"),b=Object(l["a"])(c,o,i,!1,null,null,null),y=b.exports;p()(b,"components",{QBtn:u["a"],QDialog:m["a"],QCard:f["a"],QCardSection:h["a"],QCardActions:g["a"]}),p()(b,"directives",{ClosePopup:v["a"]});var D={data:function(){return{id:""}},components:{DeleteButton:y},props:["columns","data","pagination","module"],created:function(){},methods:{goToPage:function(t){console.log("this.module",this.module),this.$router.push(this.module.link+"?id="+t)},setId:function(t){this.id=t},delete1:function(t){this.$emit("delete_Refresh",t)},edit:function(){}}},C=D,q=a("9989"),_=a("eaac"),w=a("2c91"),k=a("bd08"),Q=a("357e"),x=a("db86"),T=Object(l["a"])(C,n,s,!1,null,null,null);e["a"]=T.exports;p()(T,"components",{QPage:q["a"],QTable:_["a"],QSpace:w["a"],QBtn:u["a"],QTr:k["a"],QTh:Q["a"],QTd:x["a"]})}}]);