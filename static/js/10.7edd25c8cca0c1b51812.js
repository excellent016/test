webpackJsonp([10],{A9xC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),i=a.n(n),r={data:function(){return{loadingExcel:!1,pagination:{current:1,total:null,size:10},loading:!1,error:[],filter:null,date:"",subject:""}},created:function(){1==this.$cookies.get("error")?(this.fromTable(),this.$cookies.remove("error")):this.getScore(),this.loading=!0},methods:{exportExcel:function(){var t=this,e=this.$cookies.get("cid");this.loadingExcel=!0,this.$axios({headers:{"Content-Type":"application/json"},url:"/api/export",method:"post",responseType:"blob",data:{studentId:e,subject:this.subject,date:this.date}}).then(function(e){t.loadingExcel=!1;var a=new Blob([e.data],{type:"application/xlsx"}),n=window.URL.createObjectURL(a),i=document.createElement("a");i.href=n,i.download="错题详情.xlsx",i.click(),URL.revokeObjectURL(n),t.$message({type:"success",message:"导出成功"})}).catch(function(){t.loadingExcel=!1,t.$message({type:"error",message:"请求超时"})})},getScore:function(){var t=this,e=this.$cookies.get("cid");this.$axios("/api/error/"+this.pagination.current+"/"+this.pagination.size+"/"+e).then(function(e){if(200==e.data.code){t.loading=!1,t.error=e.data.data.records,t.pagination=i()({},e.data.data);var a=[],n=t.error.map(function(t,e){var a={};return a.text=t.answerDate,a.value=t.answerDate,a}).reduce(function(t,e){return!a[e.text]&&(a[e.text]=t.push(e)),t},[]);t.filter=n}})},handleSizeChange:function(t){this.pagination.size=t,this.fromTable()},handleCurrentChange:function(t){this.pagination.current=t,this.fromTable()},formatter:function(t,e){return t.address},filterTag:function(t,e){return e.tag===t},filterHandler:function(t,e,a){return e[a.property]===t},onSubmit:function(){var t=this,e=this.$cookies.get("cid");this.pagination.current=1,this.$axios({headers:{"Content-Type":"application/json"},url:"/api/error/"+this.pagination.current+"/"+this.pagination.size,method:"post",data:{studentId:e,subject:this.subject,date:this.date}}).then(function(e){t.loading=!1,t.error=e.data.data.records,t.pagination=i()({},e.data.data);var a=[],n=t.error.map(function(t,e){var a={};return a.text=t.answerDate,a.value=t.answerDate,a}).reduce(function(t,e){return!a[e.text]&&(a[e.text]=t.push(e)),t},[]);t.filter=n})},fromTable:function(){var t=this,e=this.$cookies.get("cid");null!=this.$cookies.get("date")&&(this.date=this.$cookies.get("date"),this.subject=this.$cookies.get("sub")),this.$axios({headers:{"Content-Type":"application/json"},url:"/api/error/"+this.pagination.current+"/"+this.pagination.size,method:"post",data:{studentId:e,subject:this.subject,date:this.date}}).then(function(e){t.loading=!1,t.$cookies.remove("sub"),t.$cookies.remove("date"),t.error=e.data.data.records,t.pagination=i()({},e.data.data);var a=[],n=t.error.map(function(t,e){var a={};return a.text=t.answerDate,a.value=t.answerDate,a}).reduce(function(t,e){return!a[e.text]&&(a[e.text]=t.push(e)),t},[]);t.filter=n})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("p",{staticClass:"title"},[t._v("\n    错题详情\n  ")]),t._v(" "),a("section",{staticClass:"content-el"},[a("div",[a("label",{staticStyle:{color:"#909399","font-weight":"500"}},[t._v("课程名称：")]),t._v(" "),a("el-input",{staticStyle:{width:"200px","margin-right":"100px"},attrs:{placeholder:"请输入课程名称",clearable:""},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),t._v(" "),a("label",{staticStyle:{color:"#909399","font-weight":"500"}},[t._v("考试日期：")]),t._v(" "),a("el-date-picker",{staticStyle:{"margin-right":"100px"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.onSubmit}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.loadingExcel,icon:"el-icon-download"},on:{click:t.exportExcel}},[t._v("导出excel")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"filterTable",attrs:{data:t.error}},[a("el-table-column",{attrs:{prop:"examDate",label:"考试日期",sortable:"",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"subject",label:"课程名称",width:"150","filter-placement":"bottom-end"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",[t._v(t._s(e.row.subject))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"title",label:"题目",width:"350","filter-placement":"bottom-end"}}),t._v(" "),a("el-table-column",{attrs:{prop:"yourAnswer",label:"你的答案",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.yourAnswer)+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"rightAnswer",label:"正确答案",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{color:"red"}},[t._v(t._s(e.row.rightAnswer))])]}}])})],1),t._v(" "),a("el-row",{staticClass:"pagination",attrs:{type:"flex",justify:"center",align:"middle"}},[a("el-pagination",{attrs:{"current-page":t.pagination.current,"page-sizes":[4,6,8,10],"page-size":t.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:t.pagination.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])},staticRenderFns:[]};var s=a("VU/8")(r,o,!1,function(t){a("PY+j")},"data-v-b5cc3da6",null);e.default=s.exports},"PY+j":function(t,e){}});
//# sourceMappingURL=10.7edd25c8cca0c1b51812.js.map