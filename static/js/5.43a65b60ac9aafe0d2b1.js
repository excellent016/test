webpackJsonp([5],{"9bBU":function(e,t,a){a("mClu");var n=a("FeBl").Object;e.exports=function(e,t,a){return n.defineProperty(e,t,a)}},C4MV:function(e,t,a){e.exports={default:a("9bBU"),__esModule:!0}},Sav3:function(e,t){},bOdI:function(e,t,a){"use strict";t.__esModule=!0;var n,o=a("C4MV"),i=(n=o)&&n.__esModule?n:{default:n};t.default=function(e,t,a){return t in e?(0,i.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},mClu:function(e,t,a){var n=a("kM2E");n(n.S+n.F*!a("+E39"),"Object",{defineProperty:a("evD5").f})},nbCl:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("bOdI"),o=a.n(n),i={data:function(){var e;return e={dialogVisibleNew:!1,headers:{"Content-Type":"multipart/form-data;charset=UTF-8"},form:{},pagination:{current:1,total:null,size:4},act:"/${process.env.otherApi}/importExcel/"},o()(e,"headers",{token:sessionStorage.getItem("token")}),o()(e,"loadingDemo",!1),e},created:function(){this.getExamInfo()},methods:{downloadDemo:function(){var e=this;setTimeout(function(){console.log("已经下载了2秒");var t=document.createElement("a"),a="https://exam-xr.oss-cn-hangzhou.aliyuncs.com/online_exam/2024/01/19/%E5%AF%BC%E5%85%A5%E9%A2%98%E5%BA%93%E6%A8%A1%E6%9D%BF.xlsx";t.href=a,t.download="导入题模板.xlsx",t.click(),URL.revokeObjectURL(a),e.$message({type:"success",message:"下载成功"}),e.loadingDemo=!1},1e3),this.loadingDemo=!0},beforeUpload:function(e){var t=String(e.name);return"xlsx"==t.substring(t.lastIndexOf(".")+1,t.length)||"xls"==t.substring(t.lastIndexOf(".")+1,t.length)||(this.$message({message:"文件类型不匹配，建议检查文件",type:"error"}),!1)},handleSuccess1:function(e,t,a){400==e.code&&(this.$message({message:"导入题库成功",type:"success"}),this.dialogVisibleNew=!1,this.handleSuccess()),200==e.code&&(this.$message({message:"导入题库失败，请检查文件",type:"error"}),this.handleSuccess())},handleSuccess:function(e,t,a){this.$refs.upload.clearFiles()},handleClose:function(e){var t=this;this.$confirm("确认关闭？").then(function(a){t.handleSuccess(),e()}).catch(function(e){})},importInfo:function(e,t){this.dialogVisibleNew=!0,this.act="/${process.env.otherApi}/importExcel/"+e},handleExcel:function(e){(new FormData).append("formFile",e.raw)},getExamInfo:function(){var e=this;this.$axios("/http://110.41.45.5:21884/exams/"+this.pagination.current+"/"+this.pagination.size).then(function(t){e.pagination=t.data.data}).catch(function(e){})},handleSizeChange:function(e){this.pagination.size=e,this.getExamInfo()},handleCurrentChange:function(e){this.pagination.current=e,this.getExamInfo()},add:function(e,t){this.$router.push({path:"/addAnswerChildren",query:{paperId:e,subject:t}})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"exam"},[a("el-table",{attrs:{data:e.pagination.records,border:""}},[a("el-table-column",{attrs:{fixed:"left",prop:"source",label:"试卷名称",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"description",label:"介绍",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"institute",label:"所属学院",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"major",label:"所属专业",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"grade",label:"年级",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"examDate",label:"考试日期",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalTime",label:"持续时间",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalScore",label:"总分",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"试卷类型",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tips",label:"考生提示",width:"400"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-upload el-icon--right"},on:{click:function(a){return e.importInfo(t.row.paperId,t.row.source)}}},[e._v("导入题库")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.add(t.row.paperId,t.row.source)}}},[e._v("增加题库")])]}}])})],1),e._v(" "),a("el-dialog",{staticStyle:{height:"100%"},attrs:{title:"导入题库",visible:e.dialogVisibleNew,width:"40%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisibleNew=t}}},[a("div",{staticStyle:{"margin-bottom":"10px",float:"left","margin-left":"150px","padding-top":"10px"}},[a("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("注：需要按照模板进行导入")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"50px","margin-bottom":"30px"},attrs:{type:"primary",loading:e.loadingDemo,icon:"el-icon-download"},on:{click:e.downloadDemo}},[e._v("下载模板")]),e._v(" "),a("el-upload",{ref:"upload",staticClass:"upload-demo",staticStyle:{"text-align":"center"},attrs:{drag:"",action:e.act,multiple:"",headers:e.headers,"on-success":e.handleSuccess1,"before-upload":e.beforeUpload}},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])])])],1),e._v(" "),a("el-pagination",{staticClass:"page",attrs:{"current-page":e.pagination.current,"page-sizes":[4,8,10,20],"page-size":e.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:e.pagination.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var s=a("VU/8")(i,l,!1,function(e){a("Sav3")},"data-v-93b6a3c0",null);t.default=s.exports}});
//# sourceMappingURL=5.43a65b60ac9aafe0d2b1.js.map