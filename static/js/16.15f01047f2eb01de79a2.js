webpackJsonp([16],{cYcb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Dd8w"),l=a.n(s),n={data:function(){return{changeNumber:null,fillNumber:null,judgeNumber:null,activeName:"first",options:[{value:"选择题",label:"选择题"},{value:"填空题",label:"填空题"},{value:"判断题",label:"判断题"},{value:"应用分析题",label:"应用分析题"}],difficulty:[{value:"简单",label:"简单"},{value:"一般",label:"一般"},{value:"困难",label:"困难"}],difficultyValue:"简单",levels:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"}],rights:[{value:"A",label:"A"},{value:"B",label:"B"},{value:"C",label:"C"},{value:"D",label:"D"}],scores:[{value:2,label:2},{value:3,label:3},{value:4,label:4},{value:5,label:5}],paperId:null,optionValue:"选择题",subject:"",postChange:{subject:"",level:"",rightAnswer:"",section:"",question:"",analysis:"",answerA:"",answerB:"",answerC:"",answerD:"",score:2},postFill:{subject:"",level:"",answer:"",section:"",question:"",analysis:"",score:2},appFill:{subject:"",level:"",answer:"",section:"",question:"",analysis:"",score:2},postJudge:{subject:"",level:"",answer:"",section:"",question:"",analysis:"",score:2},postPaper:{paperId:null,questionType:null,questionId:null}}},created:function(){this.getParams()},methods:{create:function(){var e=this;this.$axios({url:"/${process.env.examApi}/item",method:"post",data:{changeNumber:this.changeNumber,fillNumber:this.fillNumber,judgeNumber:this.judgeNumber,paperId:this.paperId,subject:"计算机网络"}}).then(function(t){console.log(t);var a=t.data;200==a.code?(setTimeout(function(){e.$router.push({path:"/selectAnswer"})},1e3),e.$message({message:a.message,type:"success"})):400==a.code&&e.$message({message:a.message,type:"error"})})},getParams:function(){var e=this.$route.query.subject,t=this.$route.query.paperId;this.paperId=t,this.subject=e,this.postPaper.paperId=t},changeSubmit:function(){var e=this;this.postChange.subject=this.subject,this.$axios({url:"/${process.env.examApi}/MultiQuestion",method:"post",data:l()({},this.postChange)}).then(function(t){200==t.data.code&&(e.$message({message:"已添加到题库",type:"success"}),e.postChange={})}).then(function(){e.$axios("/http://110.41.45.5:21884/multiQuestionId").then(function(t){var a=t.data.data.questionId;e.postPaper.questionId=a,e.postPaper.questionType=1,e.$axios({url:"/${process.env.examApi}/paperManage",method:"Post",data:l()({},e.postPaper)})})})},analysisSubmit:function(){var e=this;this.appFill.subject=this.subject,this.$axios({url:"/${process.env.examApi}/anaQuestion",method:"post",data:l()({},this.appFill)}).then(function(t){200==t.data.code&&(e.$message({message:"已添加到题库",type:"success"}),e.appFill={})}).then(function(){e.$axios("/http://110.41.45.5:21884/anaQuestionId").then(function(t){var a=t.data.data.questionId;e.postPaper.questionId=a,e.postPaper.questionType=4,e.$axios({url:"/${process.env.examApi}/paperManage",method:"Post",data:l()({},e.postPaper)})})})},fillSubmit:function(){var e=this;this.postFill.subject=this.subject,this.$axios({url:"/${process.env.examApi}/fillQuestion",method:"post",data:l()({},this.postFill)}).then(function(t){200==t.data.code&&(e.$message({message:"已添加到题库",type:"success"}),e.postFill={})}).then(function(){e.$axios("/http://110.41.45.5:21884/fillQuestionId").then(function(t){var a=t.data.data.questionId;e.postPaper.questionId=a,e.postPaper.questionType=2,e.$axios({url:"/${process.env.examApi}/paperManage",method:"Post",data:l()({},e.postPaper)})})})},judgeSubmit:function(){var e=this;this.postJudge.subject=this.subject,this.$axios({url:"/${process.env.examApi}/judgeQuestion",method:"post",data:l()({},this.postJudge)}).then(function(t){200==t.data.code&&(e.$message({message:"已添加到题库",type:"success"}),e.postJudge={})}).then(function(){e.$axios("/http://110.41.45.5:21884/judgeQuestionId").then(function(t){var a=t.data.data.questionId;e.postPaper.questionId=a,e.postPaper.questionType=3,e.$axios({url:"/${process.env.examApi}/paperManage",method:"Post",data:l()({},e.postPaper)})})})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add"},[a("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{name:"first"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-circle-plus"}),e._v("添加试题")]),e._v(" "),a("section",{staticClass:"append"},[a("ul",[a("li",[a("span",[e._v("题目类型:")]),e._v(" "),a("el-select",{staticClass:"w150",attrs:{placeholder:"请选择题型"},model:{value:e.optionValue,callback:function(t){e.optionValue=t},expression:"optionValue"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),"选择题"==e.optionValue?a("li",[a("span",[e._v("所属章节：")]),e._v(" "),a("el-input",{staticClass:"w150",attrs:{placeholder:"请输入对应章节",clearable:""},model:{value:e.postChange.section,callback:function(t){e.$set(e.postChange,"section",t)},expression:"postChange.section"}})],1):e._e(),e._v(" "),"填空题"==e.optionValue?a("li",[a("span",[e._v("所属章节：")]),e._v(" "),a("el-input",{staticClass:"w150",attrs:{placeholder:"请输入对应章节",clearable:""},model:{value:e.postFill.section,callback:function(t){e.$set(e.postFill,"section",t)},expression:"postFill.section"}})],1):e._e(),e._v(" "),"判断题"==e.optionValue?a("li",[a("span",[e._v("所属章节：")]),e._v(" "),a("el-input",{staticClass:"w150",attrs:{placeholder:"请输入对应章节",clearable:""},model:{value:e.postJudge.section,callback:function(t){e.$set(e.postJudge,"section",t)},expression:"postJudge.section"}})],1):e._e(),e._v(" "),"应用分析题"==e.optionValue?a("li",[a("span",[e._v("所属章节：")]),e._v(" "),a("el-input",{staticClass:"w150",attrs:{placeholder:"请输入对应章节",clearable:""},model:{value:e.appFill.section,callback:function(t){e.$set(e.appFill,"section",t)},expression:"appFill.section"}})],1):e._e(),e._v(" "),"选择题"==e.optionValue?a("li",[a("span",[e._v("难度等级:")]),e._v(" "),a("el-select",{staticClass:"w150",attrs:{placeholder:"选择难度等级"},model:{value:e.postChange.level,callback:function(t){e.$set(e.postChange,"level",t)},expression:"postChange.level"}},e._l(e.levels,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1):e._e(),e._v(" "),"填空题"==e.optionValue?a("li",[a("span",[e._v("难度等级:")]),e._v(" "),a("el-select",{staticClass:"w150",attrs:{placeholder:"选择难度等级"},model:{value:e.postFill.level,callback:function(t){e.$set(e.postFill,"level",t)},expression:"postFill.level"}},e._l(e.levels,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1):e._e(),e._v(" "),"判断题"==e.optionValue?a("li",[a("span",[e._v("难度等级:")]),e._v(" "),a("el-select",{staticClass:"w150",attrs:{placeholder:"选择难度等级"},model:{value:e.postJudge.level,callback:function(t){e.$set(e.postJudge,"level",t)},expression:"postJudge.level"}},e._l(e.levels,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1):e._e(),e._v(" "),"应用分析题"==e.optionValue?a("li",[a("span",[e._v("难度等级:")]),e._v(" "),a("el-select",{staticClass:"w150",attrs:{placeholder:"选择难度等级"},model:{value:e.appFill.level,callback:function(t){e.$set(e.appFill,"level",t)},expression:"appFill.level"}},e._l(e.levels,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1):e._e(),e._v(" "),"选择题"==e.optionValue?a("li",[a("span",[e._v("正确选项:")]),e._v(" "),a("el-select",{staticClass:"w150",attrs:{placeholder:"选择正确答案"},model:{value:e.postChange.rightAnswer,callback:function(t){e.$set(e.postChange,"rightAnswer",t)},expression:"postChange.rightAnswer"}},e._l(e.rights,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1):e._e(),e._v(" "),"选择题"==e.optionValue?a("li",[a("span",[e._v("分值:")]),e._v(" "),a("el-select",{staticClass:"w150",attrs:{placeholder:"选择分值"},model:{value:e.postChange.score,callback:function(t){e.$set(e.postChange,"score",t)},expression:"postChange.score"}},e._l(e.scores,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1):e._e(),e._v(" "),"填空题"==e.optionValue?a("li",[a("span",[e._v("分值:")]),e._v(" "),a("el-select",{staticClass:"w150",attrs:{placeholder:"选择分值"},model:{value:e.postFill.score,callback:function(t){e.$set(e.postFill,"score",t)},expression:"postFill.score"}},e._l(e.scores,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1):e._e(),e._v(" "),"判断题"==e.optionValue?a("li",[a("span",[e._v("分值:")]),e._v(" "),a("el-select",{staticClass:"w150",attrs:{placeholder:"选择分值"},model:{value:e.postJudge.score,callback:function(t){e.$set(e.postJudge,"score",t)},expression:"postJudge.score"}},e._l(e.scores,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1):e._e(),e._v(" "),"应用分析题"==e.optionValue?a("li",[a("span",[e._v("分值:")]),e._v(" "),a("el-select",{staticClass:"w150",attrs:{placeholder:"选择分值"},model:{value:e.appFill.score,callback:function(t){e.$set(e.appFill,"score",t)},expression:"appFill.score"}},e._l(e.scores,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1):e._e()]),e._v(" "),"选择题"==e.optionValue?a("div",{staticClass:"change"},[a("div",{staticClass:"title"},[a("el-tag",[e._v("题目:")]),a("span",[e._v("在下面的输入框中输入题目,形如--DNS 服务器和DHCP服务器的作用是（）")]),e._v(" "),a("el-input",{staticClass:"answer",attrs:{type:"textarea",rows:"4",placeholder:"请输入题目内容",resize:"none"},model:{value:e.postChange.question,callback:function(t){e.$set(e.postChange,"question",t)},expression:"postChange.question"}})],1),e._v(" "),a("div",{staticClass:"options"},[a("ul",[a("li",[a("el-tag",{attrs:{type:"success"}},[e._v("A")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入选项A的内容",clearable:""},model:{value:e.postChange.answerA,callback:function(t){e.$set(e.postChange,"answerA",t)},expression:"postChange.answerA"}})],1),e._v(" "),a("li",[a("el-tag",{attrs:{type:"success"}},[e._v("B")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入选项B的内容",clearable:""},model:{value:e.postChange.answerB,callback:function(t){e.$set(e.postChange,"answerB",t)},expression:"postChange.answerB"}})],1),e._v(" "),a("li",[a("el-tag",{attrs:{type:"success"}},[e._v("C")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入选项C的内容",clearable:""},model:{value:e.postChange.answerC,callback:function(t){e.$set(e.postChange,"answerC",t)},expression:"postChange.answerC"}})],1),e._v(" "),a("li",[a("el-tag",{attrs:{type:"success"}},[e._v("D")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入选项D的内容",clearable:""},model:{value:e.postChange.answerD,callback:function(t){e.$set(e.postChange,"answerD",t)},expression:"postChange.answerD"}})],1)])]),e._v(" "),a("div",{staticClass:"title"},[a("el-tag",[e._v("解析:")]),a("span",[e._v("在下面的输入框中输入题目解析")]),e._v(" "),a("el-input",{staticClass:"answer",attrs:{type:"textarea",rows:"4",placeholder:"请输入答案解析",resize:"none"},model:{value:e.postChange.analysis,callback:function(t){e.$set(e.postChange,"analysis",t)},expression:"postChange.analysis"}})],1),e._v(" "),a("div",{staticClass:"submit"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.changeSubmit()}}},[e._v("立即添加")])],1)]):e._e(),e._v(" "),"填空题"==e.optionValue?a("div",{staticClass:"change fill"},[a("div",{staticClass:"title"},[a("el-tag",[e._v("题目:")]),a("span",[e._v("输入题目,形如--从计算机网络系统组成的角度看，计算机网络可以分为()和()。注意需要考生答题部分一定要用括号（英文半角）括起来。")]),e._v(" "),a("el-input",{staticClass:"answer",attrs:{type:"textarea",rows:"4",placeholder:"请输入题目内容",resize:"none"},model:{value:e.postFill.question,callback:function(t){e.$set(e.postFill,"question",t)},expression:"postFill.question"}})],1),e._v(" "),a("div",{staticClass:"fillAnswer"},[a("el-tag",[e._v("正确答案:")]),e._v(" "),a("el-input",{model:{value:e.postFill.answer,callback:function(t){e.$set(e.postFill,"answer",t)},expression:"postFill.answer"}})],1),e._v(" "),a("div",{staticClass:"title analysis"},[a("el-tag",{attrs:{type:"success"}},[e._v("解析:")]),a("span",[e._v("下方输入框中输入答案解析")]),e._v(" "),a("el-input",{staticClass:"answer",attrs:{type:"textarea",rows:"4",placeholder:"请输入答案解析",resize:"none"},model:{value:e.postFill.analysis,callback:function(t){e.$set(e.postFill,"analysis",t)},expression:"postFill.analysis"}})],1),e._v(" "),a("div",{staticClass:"submit"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.fillSubmit()}}},[e._v("立即添加")])],1)]):e._e(),e._v(" "),"应用分析题"==e.optionValue?a("div",{staticClass:"change fill"},[a("div",{staticClass:"title"},[a("el-tag",[e._v("题目:")]),a("span",[e._v("输入题目,形如--从以上材料可以分析出什么？")]),e._v(" "),a("el-input",{staticClass:"answer",attrs:{type:"textarea",rows:"4",placeholder:"请输入题目内容",resize:"none"},model:{value:e.appFill.question,callback:function(t){e.$set(e.appFill,"question",t)},expression:"appFill.question"}})],1),e._v(" "),a("div",{staticClass:"fillAnswer"},[a("el-tag",[e._v("正确答案:")]),e._v(" "),a("el-input",{model:{value:e.appFill.answer,callback:function(t){e.$set(e.appFill,"answer",t)},expression:"appFill.answer"}})],1),e._v(" "),a("div",{staticClass:"title analysis"},[a("el-tag",{attrs:{type:"success"}},[e._v("解析:")]),a("span",[e._v("下方输入框中输入答案解析")]),e._v(" "),a("el-input",{staticClass:"answer",attrs:{type:"textarea",rows:"4",placeholder:"请输入答案解析",resize:"none"},model:{value:e.appFill.analysis,callback:function(t){e.$set(e.appFill,"analysis",t)},expression:"appFill.analysis"}})],1),e._v(" "),a("div",{staticClass:"submit"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.analysisSubmit()}}},[e._v("立即添加")])],1)]):e._e(),e._v(" "),"判断题"==e.optionValue?a("div",{staticClass:"change judge"},[a("div",{staticClass:"title"},[a("el-tag",[e._v("题目:")]),a("span",[e._v("在下面的输入框中输入题目")]),e._v(" "),a("el-input",{staticClass:"answer",attrs:{type:"textarea",rows:"4",placeholder:"请输入题目内容",resize:"none"},model:{value:e.postJudge.question,callback:function(t){e.$set(e.postJudge,"question",t)},expression:"postJudge.question"}})],1),e._v(" "),a("div",{staticClass:"judgeAnswer"},[a("el-radio",{attrs:{label:"T"},model:{value:e.postJudge.answer,callback:function(t){e.$set(e.postJudge,"answer",t)},expression:"postJudge.answer"}},[e._v("正确")]),e._v(" "),a("el-radio",{attrs:{label:"F"},model:{value:e.postJudge.answer,callback:function(t){e.$set(e.postJudge,"answer",t)},expression:"postJudge.answer"}},[e._v("错误")])],1),e._v(" "),a("div",{staticClass:"title"},[a("el-tag",[e._v("解析:")]),a("span",[e._v("在下面的输入框中输入题目解析")]),e._v(" "),a("el-input",{staticClass:"answer",attrs:{type:"textarea",rows:"4",placeholder:"请输入答案解析",resize:"none"},model:{value:e.postJudge.analysis,callback:function(t){e.$set(e.postJudge,"analysis",t)},expression:"postJudge.analysis"}})],1),e._v(" "),a("div",{staticClass:"submit"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.judgeSubmit()}}},[e._v("立即添加")])],1)]):e._e()])]),e._v(" "),a("el-tab-pane",{attrs:{name:"second"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"iconfont icon-daoru-tianchong"}),e._v("在线组卷")]),e._v(" "),a("div",{staticClass:"box"},[a("ul",[a("li",[a("span",[e._v("试题难度:")]),e._v(" "),a("el-select",{staticClass:"w150",attrs:{placeholder:"试题难度"},model:{value:e.difficultyValue,callback:function(t){e.difficultyValue=t},expression:"difficultyValue"}},e._l(e.difficulty,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("li",[a("span",[e._v("选择题数量：")]),e._v(" "),a("el-input",{attrs:{type:"text"},model:{value:e.changeNumber,callback:function(t){e.changeNumber=t},expression:"changeNumber"}})],1),e._v(" "),a("li",[a("span",[e._v("填空题数量：")]),e._v(" "),a("el-input",{attrs:{type:"text"},model:{value:e.fillNumber,callback:function(t){e.fillNumber=t},expression:"fillNumber"}})],1),e._v(" "),a("li",[a("span",[e._v("判断题数量：")]),e._v(" "),a("el-input",{attrs:{type:"text"},model:{value:e.judgeNumber,callback:function(t){e.judgeNumber=t},expression:"judgeNumber"}})],1),e._v(" "),a("li",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.create()}}},[e._v("立即组卷")])],1)])])])],1)],1)},staticRenderFns:[]};var o=a("VU/8")(n,i,!1,function(e){a("u143")},"data-v-b5d9b466",null);t.default=o.exports},u143:function(e,t){}});
//# sourceMappingURL=16.15f01047f2eb01de79a2.js.map