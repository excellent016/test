webpackJsonp([17],{"+keH":function(t,e){},"1Rb9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{pagination:{current:1,total:null,size:6}}},created:function(){this.getAnswerInfo()},methods:{getAnswerInfo:function(){var t=this;this.$axios("/http://110.41.45.5:21886/peopleApi/students/"+this.pagination.current+"/"+this.pagination.size).then(function(e){t.pagination=e.data.data}).catch(function(t){})},handleSizeChange:function(t){this.pagination.size=t,this.getAnswerInfo()},handleCurrentChange:function(t){this.pagination.current=t,this.getAnswerInfo()},checkGrade:function(t){this.$router.push({path:"/grade",query:{studentId:t}})},findErrorInfo:function(t,e){this.$router.push({path:"/selectInfo"}),sessionStorage.setItem("error",1),sessionStorage.setItem("student",t),sessionStorage.setItem("studentName",e)}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all"},[n("el-table",{attrs:{data:t.pagination.records,border:""}},[n("el-table-column",{attrs:{fixed:"left",prop:"studentName",label:"姓名",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"institute",label:"学院",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{prop:"major",label:"专业",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{prop:"grade",label:"年级",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{prop:"clazz",label:"班级",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"sex",label:"性别",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"tel",label:"联系方式",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"查看成绩",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.checkGrade(e.row.studentId)}}},[t._v("查看成绩")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.findErrorInfo(e.row.studentId,e.row.studentName)}}},[t._v("查看错题")])]}}])})],1),t._v(" "),n("el-pagination",{staticClass:"page",attrs:{"current-page":t.pagination.current,"page-sizes":[6,10],"page-size":t.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:t.pagination.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},staticRenderFns:[]};var i=n("VU/8")(a,r,!1,function(t){n("+keH")},"data-v-8d994d7a",null);e.default=i.exports}});
//# sourceMappingURL=17.f667eaa353526a3461ef.js.map