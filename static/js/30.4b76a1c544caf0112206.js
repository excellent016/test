webpackJsonp([30],{"5FvH":function(t,a){},"5apE":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={data:function(){return{loading:!1,key:null,allExam:null,all:"",no_start:"",already_start:"",end_start:"",pagination:{current:1,total:null,size:6},pattern:"",activeIndex2:"1"}},created:function(){this.getExamInfo(),this.loading=!0,this.getInfo()},methods:{handleSelect:function(t){"1"===t?this.search(0):"2"===t?this.search(1):"3"===t?this.search(2):"4"===t&&this.search(3)},getInfo:function(){var t=this;this.$axios({url:"http://110.41.45.5:21888/examApi/exam/all",method:"get"}).then(function(a){200==a.data.code&&(t.all=a.data.data.allNumber,t.no_start=a.data.data.noStartNumber,t.already_start=a.data.data.alreadyNumber,t.end_start=a.data.data.endStartNumber)})},getExamInfo:function(){var t=this;this.$axios("http://110.41.45.5:21888/examApi/exams/"+this.pagination.current+"/"+this.pagination.size).then(function(a){t.pagination=a.data.data,t.loading=!1,console.log(t.pagination)}).catch(function(t){console.log(t)})},handleSizeChange:function(t){this.pagination.size=t,this.getExamInfo()},handleCurrentChange:function(t){this.pagination.current=t,this.getExamInfo()},search:function(t){var a=this;this.$axios({url:"http://110.41.45.5:21888/examApi/exams",method:"put",data:{type:t,key:this.key}}).then(function(e){200==e.data.code&&(console.log(e.data.data),a.pagination.records=e.data.data,a.pattern=0==t?"全部":1==t?"未开始":2==t?"已开始":"已过期")})},toExamMsg:function(t){this.$router.push({path:"/examMsg",query:{examCode:t}}),console.log(t)}}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"myExam"}},[e("div",{staticClass:"title"},[t._v("我的练习")]),t._v(" "),e("div",{staticClass:"wrapper"},[e("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex2,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:t.handleSelect}},[e("el-menu-item",{attrs:{index:"1"}},[e("el-badge",{staticClass:"item",attrs:{value:t.all,type:"primary"}},[t._v("全部")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"2"}},[e("el-badge",{staticClass:"item",attrs:{value:t.no_start,type:"primary"}},[t._v("未开始")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"3"}},[e("el-badge",{staticClass:"item",attrs:{value:t.already_start,type:"primary"}},[t._v("已开始")])],1),t._v(" "),e("el-menu-item",{attrs:{index:"4"}},[e("el-badge",{staticClass:"item",attrs:{value:t.end_start}},[t._v("已过期")])],1)],1),t._v(" "),e("ul",{staticClass:"top"},[e("li",{staticClass:"search-li"},[e("div",{staticClass:"icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],staticClass:"search",attrs:{type:"text",placeholder:"试卷名称"},domProps:{value:t.key},on:{input:function(a){a.target.composing||(t.key=a.target.value)}}}),e("i",{staticClass:"el-icon-search"})])]),t._v(" "),e("li",[e("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.search(0)}}},[t._v("搜索试卷")])],1)]),t._v(" "),e("ul",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"paper"},t._l(t.pagination.records,function(a,n){return e("li",{key:n,staticClass:"item"},[e("h4",{on:{click:function(e){return t.toExamMsg(a.examCode)}}},[t._v(t._s(a.source))]),t._v(" "),e("p",{staticClass:"name"},[t._v(t._s(a.source)+"-"+t._s(a.description))]),t._v(" "),e("div",{staticClass:"info"},[e("i",{staticClass:"el-icon-loading"}),e("span",[t._v(t._s(a.examDate.substr(0,10)))]),t._v(" "),e("i",{staticClass:"iconfont icon-icon-time"}),null!=a.totalTime?e("span",[t._v("限时"+t._s(a.totalTime)+"分钟")]):t._e(),t._v(" "),e("i",{staticClass:"iconfont icon-fenshu"}),e("span",[t._v("满分"+t._s(a.totalScore)+"分")])])])}),0),t._v(" "),e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{"current-page":t.pagination.current,"page-sizes":[6,10,20,40],"page-size":t.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:t.pagination.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])},staticRenderFns:[]};var s=e("VU/8")(n,i,!1,function(t){e("5FvH")},"data-v-1e02a971",null);a.default=s.exports}});
//# sourceMappingURL=30.4b76a1c544caf0112206.js.map