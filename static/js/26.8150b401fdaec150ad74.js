webpackJsonp([26],{wP8f:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("fZjL"),o=a.n(i),l=a("Dd8w"),s=a.n(l),n={data:function(){return{loadingDocx:!1,activeNames:["3"],topicCount:[],score:[],topic:{},examData:{},options:[{value:"1:9",label:"1:9"},{value:"2:8",label:"2:8"},{value:"3:7",label:"3:7"},{value:"4:6",label:"4:6"},{value:"5:5",label:"5:5"}],value:"",form:{},pagination:{current:1,total:null,size:4},dialogVisible:!1,dialogVisibleNew:!1}},created:function(){this.getExamInfo()},methods:{downloadDocx:function(t){var e=this;this.loadingDocx=!0,this.$axios({responseType:"blob",url:"/${process.env.otherApi}/exportDocx/"+t,method:"put"}).then(function(t){e.loadingDocx=!1;var a=new Blob([t.data],{type:"application/docx"}),i=window.URL.createObjectURL(a),o=document.createElement("a");o.href=i,o.download=e.examData.source+".docx",o.click(),URL.revokeObjectURL(i),e.$message({type:"success",message:"导出成功"})})},init:function(t){var e=this;this.topicCount=[],this.score=[],this.$axios("/http://110.41.45.5:21884/examApi/exam/"+t).then(function(t){t.data.data.examDate=t.data.data.examDate.substr(0,10),e.examData=s()({},t.data.data);var a=e.examData.paperId;e.$axios("/http://110.41.45.5:21884/examApi/paper/"+a).then(function(t){e.topic=s()({},t.data),o()(e.topic).forEach(function(t){var a=e.topic[t];e.topicCount.push(a.length);for(var i=0,o=0;o<a.length;o++)i+=a[o].score;e.score.push(i)}),console.log(e.score+" "+e.topicCount)})})},edit:function(t){var e=this;this.dialogVisible=!0,this.$axios("/http://110.41.45.5:21884/examApi/exam/"+t).then(function(t){200==t.data.code&&(e.form=t.data.data)})},preShow:function(t){this.dialogVisibleNew=!0,this.init(t)},handleClose:function(t){var e=this;this.$confirm("确认关闭？").then(function(a){e.loadingDocx=!1,t()}).catch(function(t){})},submit:function(){var t=this;this.dialogVisible=!1,this.$axios({url:"/${process.env.examApi}/exam",method:"put",data:s()({},this.form)}).then(function(e){200==e.data.code&&t.$message({message:"更新成功",type:"success"}),t.getExamInfo()})},deleteRecord:function(t){var e=this;this.$confirm("确定删除该记录吗,该操作不可逆！！！","删除提示",{confirmButtonText:"确定删除",cancelButtonText:"算了,留着",type:"danger"}).then(function(){e.$axios({url:"/http://110.41.45.5:21884/examApi/exam/"+t,method:"delete"}).then(function(t){e.getExamInfo()})}).catch(function(){})},getExamInfo:function(){var t=this;this.$axios("/http://110.41.45.5:21884/examApi/exams/"+this.pagination.current+"/"+this.pagination.size).then(function(e){t.pagination=e.data.data}).catch(function(t){})},handleSizeChange:function(t){this.pagination.size=t,this.getExamInfo()},handleCurrentChange:function(t){this.pagination.current=t,this.getExamInfo()}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"exam"},[a("el-table",{attrs:{data:t.pagination.records,border:""}},[a("el-table-column",{attrs:{fixed:"left",prop:"source",label:"试卷名称",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"description",label:"介绍",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"institute",label:"所属学院",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"major",label:"所属专业",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"grade",label:"年级",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"examDate",label:"考试日期",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"totalTime",label:"持续时间",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"totalScore",label:"总分",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"试卷类型",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tips",label:"考生提示",width:"400"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){return t.preShow(e.row.examCode)}}},[t._v("预览")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.edit(e.row.examCode)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return t.deleteRecord(e.row.examCode)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{staticClass:"page",attrs:{"current-page":t.pagination.current,"page-sizes":[4,8,10,20],"page-size":t.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:t.pagination.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),a("el-dialog",{staticStyle:{height:"100%"},attrs:{title:"预览整卷",visible:t.dialogVisibleNew,width:"70%","lock-scroll":"true","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisibleNew=e}}},[a("el-button",{staticStyle:{"margin-left":"960px"},attrs:{type:"primary",loading:t.loadingDocx,icon:"el-icon-download"},on:{click:function(e){return t.downloadDocx(t.examData.examCode)}}},[t._v("下载文档")]),t._v(" "),a("div",[a("div",{staticStyle:{"font-size":"20px","text-align":"center","margin-bottom":"10px"}},[t._v(t._s(t.examData.source)+" \n      ")]),t._v(" "),4==t.score.length?a("div",{staticStyle:{"text-align":"center","margin-bottom":"10px"}},[t._v("（总分："+t._s(t.score[0]+t.score[1]+t.score[2]+t.score[3])+"分）")]):t._e(),t._v(" "),a("el-collapse",{staticClass:"inner",staticStyle:{height:"300px","overflow-y":"auto"},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[0!=t.topicCount[0]?a("el-collapse-item",[a("template",{attrs:{name:"1"},slot:"title"},[a("div",{staticClass:"titlei"},[t._v("一、选择题 (共"+t._s(t.topicCount[0])+"题 共计"+t._s(t.score[0])+"分)")])]),t._v(" "),a("div",{staticClass:"contenti"},t._l(t.topic[1],function(e,i){return a("ul",{key:i,staticClass:"question",staticStyle:{"margin-top":"10px"}},[a("li",[t._v(t._s(i+1)+". "+t._s(e.question)+" ("+t._s(e.score)+"分)")]),t._v(" "),a("li",[t._v("A."+t._s(e.answerA))]),a("li",[t._v("B."+t._s(e.answerB))]),a("li",[t._v("C."+t._s(e.answerC))]),a("li",[t._v("D."+t._s(e.answerD))])])}),0)],2):t._e(),t._v(" "),0!=t.topicCount[1]?a("el-collapse-item",[a("template",{attrs:{name:"2"},slot:"title"},[a("div",{staticClass:"titlei"},[t._v("二、填空题 (共"+t._s(t.topicCount[1])+"题 共计"+t._s(t.score[1])+"分)")])]),t._v(" "),a("div",{staticClass:"contenti"},t._l(t.topic[2],function(e,i){return a("ul",{key:i,staticClass:"question",staticStyle:{"margin-top":"10px"}},[a("li",[t._v(t._s(i+1)+". "+t._s(e.question)+" ("+t._s(e.score)+"分)")])])}),0)],2):t._e(),t._v(" "),0!=t.topicCount[2]?a("el-collapse-item",[a("template",{attrs:{name:"3"},slot:"title"},[a("div",{staticClass:"titlei"},[t._v("三、判断题 (共"+t._s(t.topicCount[2])+"题 共计"+t._s(t.score[2])+"分)")])]),t._v(" "),a("div",{staticClass:"contenti"},t._l(t.topic[3],function(e,i){return a("ul",{key:i,staticClass:"question",staticStyle:{"margin-top":"10px"}},[a("li",[t._v(t._s(i+1)+". "+t._s(e.question)+" ("+t._s(e.score)+"分)")])])}),0)],2):t._e(),t._v(" "),0!=t.topicCount[3]?a("el-collapse-item",[a("template",{attrs:{name:"4"},slot:"title"},[a("div",{staticClass:"titlei"},[t._v("四、应用分析题 (共"+t._s(t.topicCount[3])+"题 共计"+t._s(t.score[3])+"分)")])]),t._v(" "),a("div",{staticClass:"contenti"},t._l(t.topic[4],function(e,i){return a("ul",{key:i,staticClass:"question",staticStyle:{"margin-top":"10px"}},[a("li",[t._v(t._s(i+1)+". "+t._s(e.question)+" ("+t._s(e.score)+"分)")])])}),0)],2):t._e()],1)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑试卷信息",visible:t.dialogVisible,width:"70%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("section",{staticClass:"update"},[a("el-form",{ref:"form",attrs:{inline:!0,model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"试卷名称"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:t.form.source,callback:function(e){t.$set(t.form,"source",e)},expression:"form.source"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"介绍"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"所属学院"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:t.form.institute,callback:function(e){t.$set(t.form,"institute",e)},expression:"form.institute"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"所属专业"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:t.form.major,callback:function(e){t.$set(t.form,"major",e)},expression:"form.major"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"年级"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:t.form.grade,callback:function(e){t.$set(t.form,"grade",e)},expression:"form.grade"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"考试日期"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.examDate,callback:function(e){t.$set(t.form,"examDate",e)},expression:"form.examDate"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"平时与期末占比"}},[a("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择"},model:{value:t.form.rate,callback:function(e){t.$set(t.form,"rate",e)},expression:"form.rate"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-left":"100px"},attrs:{label:"持续时间"}},[a("el-input",{staticStyle:{width:"60px"},attrs:{maxlength:"3"},model:{value:t.form.totalTime,callback:function(e){t.$set(t.form,"totalTime",e)},expression:"form.totalTime"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-left":"85px"},attrs:{label:"总分"}},[a("el-input",{staticStyle:{width:"60px"},attrs:{maxlength:"3"},model:{value:t.form.totalScore,callback:function(e){t.$set(t.form,"totalScore",e)},expression:"form.totalScore"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-left":"105px"},attrs:{label:"试卷类型"}},[a("el-input",{staticStyle:{width:"96px"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"考生提示"}},[a("el-input",{staticStyle:{width:"890px"},attrs:{type:"textarea"},model:{value:t.form.tips,callback:function(e){t.$set(t.form,"tips",e)},expression:"form.tips"}})],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var c=a("VU/8")(n,r,!1,function(t){a("y4hE")},"data-v-3b6b23a2",null);e.default=c.exports},y4hE:function(t,e){}});
//# sourceMappingURL=26.8150b401fdaec150ad74.js.map