webpackJsonp([30],{"/v60":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={data:function(){var t=this;return{pagination:{current:1,total:null,size:6},dialogVisible:!1,form:{},ptScore:"",options:[],value:[],list:[],studentname:"",loading:!1,timer:null,rules:{ptScore:[{validator:function(e,a,o){setTimeout(function(){t.form.ptScore>100?o(new Error("不能超过100分")):o()},500)},trigger:"blur"}]}}},created:function(){this.getStudentInfo(),this.searchData()},methods:{search:function(){this.$axios({url:"/${process.env.scoreApi}/addClassMark/Search/",method:"post",data:{subject:"",studentName:""}})},searchData:function(){var t=this;this.$axios({url:"/${process.env.scoreApi}/addClassMark/remoteSearch",method:"get"}).then(function(e){t.list=e.data.data.map(function(t){return{value:"value:"+t,label:""+t}})})},remoteMethod:function(t){var e=this;""!==t?(this.loading=!0,setTimeout(function(){e.loading=!1,e.options=e.list.filter(function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1})},500)):this.options=[]},activity:function(){var t=String(this.form.rate).split(":");1==this.dialogVisible?this.form.score=(parseFloat(this.form.ptScore*t[0]+this.form.etScore*t[1])/10).toFixed(2):clearInterval(this.timer)},getStudentInfo:function(){var t=this;this.$axios("/http://110.41.45.5:21887/scoreApi/addClassMark/"+this.pagination.current+"/"+this.pagination.size).then(function(e){t.pagination=e.data.data,console.log(t.pagination)}).catch(function(t){})},handleSizeChange:function(t){this.pagination.size=t,this.getStudentInfo()},handleCurrentChange:function(t){this.pagination.current=t,this.getStudentInfo()},checkGrade:function(t,e){var a=this;this.dialogVisible=!0,this.$axios("/http://110.41.45.5:21887/scoreApi/addClassMark/modify/"+t+"/"+e).then(function(t){a.form=t.data.data,a.timer=setInterval(function(){a.activity()},500)})},submit:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.dialogVisible=!1,e.$axios({url:"/${process.env.scoreApi}/addClassMark",method:"put",data:{studentId:e.form.studentId,studentName:e.form.studentName,examCode:e.form.examCode,subject:e.form.subject,ptScore:e.form.ptScore,etScore:e.form.etScore,score:e.form.score,phone:e.form.phone,rate:e.form.rate,avatar:e.form.avatar,major:e.form.major,institute:e.form.institute}}).then(function(t){console.log(t),200==t.data.code&&e.$message({message:"更新成功",type:"success"}),e.getStudentInfo()})})},handleClose:function(t){var e=this;this.$confirm("确认关闭？").then(function(a){t(),e.activity()}).catch(function(t){})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all"},[a("label",{staticStyle:{color:"#909399","font-weight":"500"}},[t._v("考试科目：")]),t._v(" "),a("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入关键词","remote-method":t.remoteMethod,loading:t.loading,clearable:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),a("label",{staticStyle:{color:"#909399","font-weight":"500"}},[t._v("学生姓名：")]),t._v(" "),a("el-input",{staticStyle:{width:"200px","margin-right":"30px"},attrs:{placeholder:"请输入学生姓名",clearable:""},model:{value:t.studentname,callback:function(e){t.studentname=e},expression:"studentname"}}),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),t._v(" "),a("el-table",{staticStyle:{"margin-top":"20px"},attrs:{data:t.pagination.records,border:""}},[a("el-table-column",{attrs:{fixed:"left",prop:"studentId",label:"学号",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"left",prop:"studentName",label:"姓名",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"institute",label:"学院",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"major",label:"专业",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"subject",label:"考试科目",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"state",label:"状态",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:"已给平时分"===e.row.state?"success":"danger"}},[t._v(t._s("已给平时分"===e.row.state?"已给":"未给予"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"联系方式",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"avatar",label:"头像",width:"150"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{width:"56px",height:"56px"},attrs:{src:t.row.avatar}})]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.checkGrade(e.row.studentId,e.row.examCode)}}},[t._v("编辑")])]}}])})],1),t._v(" "),a("el-pagination",{staticClass:"page",attrs:{"current-page":t.pagination.current,"page-sizes":[6,10],"page-size":t.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:t.pagination.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),a("el-dialog",{attrs:{title:"设置平时成绩",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("section",{staticClass:"update"},[a("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:t.form,"label-width":"80px",rules:t.rules}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{disabled:""},model:{value:t.form.studentName,callback:function(e){t.$set(t.form,"studentName",e)},expression:"form.studentName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"学院"}},[a("el-input",{attrs:{disabled:""},model:{value:t.form.institute,callback:function(e){t.$set(t.form,"institute",e)},expression:"form.institute"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"专业"}},[a("el-input",{attrs:{disabled:""},model:{value:t.form.major,callback:function(e){t.$set(t.form,"major",e)},expression:"form.major"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"课程"}},[a("el-input",{attrs:{disabled:""},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"平时分与期末占比"}},[a("el-input",{attrs:{disabled:""},model:{value:t.form.rate,callback:function(e){t.$set(t.form,"rate",e)},expression:"form.rate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"平时分",prop:"ptScore"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.ptScore,callback:function(e){t.$set(t.form,"ptScore",e)},expression:"form.ptScore"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"卷面分"}},[a("el-input",{attrs:{disabled:""},model:{value:t.form.etScore,callback:function(e){t.$set(t.form,"etScore",e)},expression:"form.etScore"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"总成绩"}},[a("el-input",{model:{value:t.form.score,callback:function(e){t.$set(t.form,"score",e)},expression:"form.score"}})],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submit("form")}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var l=a("VU/8")(o,r,!1,function(t){a("mrqj")},"data-v-2dd38140",null);e.default=l.exports},mrqj:function(t,e){}});
//# sourceMappingURL=30.c23f3a3e9fd051b742fe.js.map