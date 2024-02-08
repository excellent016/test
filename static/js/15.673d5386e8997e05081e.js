webpackJsonp([15],{"9sXG":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{pagination:{current:1,total:null,size:6},dialogVisible:!1,form:{}}},created:function(){this.getTeacherInfo()},methods:{handleAvatarSuccess:function(t,e){this.form.avatar=t.data},beforeAvatarUpload:function(t){var e=t.size/1024/1024<2;return e||this.$message.error("上传头像图片大小不能超过 2MB!"),e},getTeacherInfo:function(){var t=this;this.$axios("/peopleApi/teachers/"+this.pagination.current+"/"+this.pagination.size).then(function(e){t.pagination=e.data.data}).catch(function(t){})},handleSizeChange:function(t){this.pagination.size=t,this.getTeacherInfo()},handleCurrentChange:function(t){this.pagination.current=t,this.getTeacherInfo()},checkGrade:function(t){var e=this;this.dialogVisible=!0,this.$axios("/peopleApi/teacher/"+t).then(function(t){e.form=t.data.data})},deleteById:function(t){var e=this;this.$confirm("确定删除当前教师吗？删除后无法恢复","Warning",{confirmButtonText:"确定删除",cancelButtonText:"算了,留着吧",type:"danger"}).then(function(){e.$axios({url:"/peopleApi/teacher/"+t,method:"delete"}).then(function(t){e.getTeacherInfo()})}).catch(function(){})},submit:function(){var t=this;this.dialogVisible=!1,this.$axios({url:"/peopleApi/teacher",method:"put",data:{teacherId:this.form.teacherId,teacherName:this.form.teacherName,institute:this.form.institute,tel:this.form.tel,email:this.form.email,pwd:this.form.pwd,cardId:this.form.cardId,sex:this.form.sex,type:this.form.type,role:1,avatar:this.form.avatar}}).then(function(e){console.log(e),200==e.data.code&&t.$message({message:"更新成功",type:"success"}),t.getTeacherInfo()})},handleClose:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all"},[a("el-table",{attrs:{data:t.pagination.records,border:""}},[a("el-table-column",{attrs:{fixed:"left",prop:"teacherName",label:"姓名",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"institute",label:"学院",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tel",label:"联系方式",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"email",label:"邮件",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cardId",label:"身份证号",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"职称",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"avatar",label:"头像",width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{width:"56px",height:"56px"},attrs:{src:t.row.avatar}})]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.checkGrade(e.row.teacherId)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return t.deleteById(e.row.teacherId)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{staticClass:"page",attrs:{"current-page":t.pagination.current,"page-sizes":[8,16],"page-size":t.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:t.pagination.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),a("el-dialog",{attrs:{title:"编辑教师信息",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("section",{staticClass:"update"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:t.form.teacherName,callback:function(e){t.$set(t.form,"teacherName",e)},expression:"form.teacherName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"学院"}},[a("el-input",{model:{value:t.form.institute,callback:function(e){t.$set(t.form,"institute",e)},expression:"form.institute"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"性别"}},[a("el-input",{model:{value:t.form.sex,callback:function(e){t.$set(t.form,"sex",e)},expression:"form.sex"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"电话号码"}},[a("el-input",{model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{model:{value:t.form.pwd,callback:function(e){t.$set(t.form,"pwd",e)},expression:"form.pwd"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"身份证号"}},[a("el-input",{model:{value:t.form.cardId,callback:function(e){t.$set(t.form,"cardId",e)},expression:"form.cardId"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"职称"}},[a("el-input",{model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"头像"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/otherApi/upload","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.form.avatar?a("img",{staticClass:"avatar",staticStyle:{width:"150px"},attrs:{src:t.form.avatar}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var r=a("VU/8")(i,o,!1,function(t){a("yxbH")},"data-v-a17f250e",null);e.default=r.exports},yxbH:function(t,e){}});
//# sourceMappingURL=15.673d5386e8997e05081e.js.map