webpackJsonp([15],{"4n9O":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"exam"},[a("el-table",{attrs:{data:t.pagination.records,border:""}},[a("el-table-column",{attrs:{fixed:"left",prop:"source",label:"试卷名称",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"institute",label:"所属学院",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"major",label:"所属专业",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"grade",label:"年级",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"examDate",label:"考试日期",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"totalTime",label:"持续时间",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"totalScore",label:"总分",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"试卷类型",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.publish(e.row.examCode)}}},[t._v("发布成绩")]),t._v(" "),t._e()]}}])})],1),t._v(" "),a("el-pagination",{staticClass:"page",attrs:{"current-page":t.pagination.current,"page-sizes":[4,8,10,20],"page-size":t.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:t.pagination.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},staticRenderFns:[]};var i=a("VU/8")({data:function(){return{form:{},pagination:{current:1,total:null,size:4},dialogVisible:!1}},created:function(){this.getExamInfo()},methods:{getExamInfo:function(){var t=this;this.$axios("http://110.41.45.5:21888/examApi/exams/"+this.pagination.current+"/"+this.pagination.size).then(function(e){t.pagination=e.data.data}).catch(function(t){})},handleSizeChange:function(t){this.pagination.size=t,this.getExamInfo()},handleCurrentChange:function(t){this.pagination.current=t,this.getExamInfo()},publish:function(t){var e=this;this.$axios({url:"http://110.41.45.5:21888/scoreApi/publishNew/"+t,method:"post"}).then(function(t){400==t.data.code?e.$message({message:"成绩已发布",type:"success"}):e.$message({message:"该科目还有未评完的成绩",type:"error"})}).catch(function(t){})}}},n,!1,function(t){a("9Pny")},"data-v-8abc7378",null);e.default=i.exports},"9Pny":function(t,e){}});
//# sourceMappingURL=15.32071770d706355b9d81.js.map