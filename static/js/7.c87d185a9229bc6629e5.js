webpackJsonp([7],{"+9DE":function(e,t){},"71qY":function(e,t){},QxDH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Dd8w"),i=n.n(s),o=n("NYxO"),a={data:function(){return{login_flag:!1,user:{userName:null,userId:null},imageUrl:""}},created:function(){this.getUserInfo(),this.updateAvatar()},computed:Object(o.c)(["flag","menu"]),methods:i()({showSetting:function(){this.login_flag=!this.login_flag}},Object(o.b)(["toggle"]),{getUserInfo:function(){var e=this.$jwtDecode(sessionStorage.getItem("token")).name,t=this.$jwtDecode(sessionStorage.getItem("token")).id;this.user.userName=e,this.user.userId=t,this.imageUrl=this.$jwtDecode(sessionStorage.getItem("token")).image},index:function(){},updateAvatar:function(){var e=this;setInterval(function(){e.imageUrl=sessionStorage.getItem("image")},1e3)},exit:function(){var e=this;this.$axios({url:"/${process.env.peopleApi}/logout/"+this.user.userId,method:"put"}).then(function(t){(console.log(t),200==t.data.code)&&(e.$router.push({path:"/"}),sessionStorage.removeItem("role"),sessionStorage.removeItem("image"),new WebSocket(e.$websocketUrl,e.$jwtDecode(sessionStorage.getItem("token")).id).CLOSED,sessionStorage.removeItem("token"),sessionStorage.removeItem("activeInfo"),sessionStorage.removeItem("index"),sessionStorage.removeItem("now"),e.$message({message:"退出成功",type:"success"}))})}})},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{attrs:{id:"topbar"}},[n("el-row",[n("el-col",{staticClass:"topbar-left",attrs:{span:4}},[n("i",{staticClass:"iconfont icon-kaoshi"}),e._v(" "),n("span",{staticClass:"title",on:{click:function(t){return e.index()}}},[e._v("Online-Exam-System")])]),e._v(" "),n("el-col",{staticClass:"topbar-right",attrs:{span:20}},[n("i",{staticClass:"el-icon-menu",on:{click:function(t){return e.toggle()}}}),e._v(" "),n("div",{staticClass:"user"},[n("span",[e._v(e._s(e.user.userName))]),e._v(" "),n("img",{ref:"img",staticClass:"user-img",attrs:{src:e.imageUrl},on:{click:function(t){return e.showSetting()}}}),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.login_flag,expression:"login_flag"}],ref:"out",staticClass:"out"},[n("ul",[n("li",{staticStyle:{width:"70px"}},[n("a",{attrs:{href:"javascript:;"}},[e._v("用户信息")])]),e._v(" "),n("li",[n("a",{attrs:{href:"javascript:;"}},[e._v("设置")])]),e._v(" "),n("li",{staticClass:"exit",on:{click:function(t){return e.exit()}}},[n("a",{attrs:{href:"javascript:;"}},[e._v("退出登录")])])])])])],1)])],1)],1)},staticRenderFns:[]};var r=n("VU/8")(a,c,!1,function(e){n("+9DE")},"data-v-63d73238",null).exports,l={name:"mainLeft",data:function(){return{iconShape:"el-icon-s-home",temp:[]}},computed:Object(o.c)(["flag","menu"]),created:function(){this.addData()},methods:{handleOpen:function(e,t){},handleClose:function(e,t){},handleTitle:function(e,t){var n={index:e,now:t};this.bus.$emit("sendIndex",n)},addData:function(){0==sessionStorage.getItem("role")&&6==this.menu.length&&this.menu.push({index:"7",title:"教师管理",icon:"icon-Userselect",content:[{item1:"教师管理",path:"/teacherManage",title:"教师管理",now:"0"},{item2:"添加教师",path:"/addTeacher",title:"添加教师",now:"1"}]})}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"left"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"active-text-color":"red","text-color":"#000","default-active":this.$route.path,collapse:e.flag,"background-color":"#124280","menu-trigger":"click",router:""},on:{open:e.handleOpen,close:e.handleClose}},[n("el-menu-item",{attrs:{index:"/index"},on:{click:function(t){return e.handleTitle(-1,-1)}}},[n("i",{class:e.iconShape}),e._v(" "),n("span",{staticClass:"title",staticStyle:{"margin-left":"3px"},attrs:{slot:"title"},slot:"title"},[e._v("首页")])]),e._v(" "),e._l(e.menu,function(t,s){return n("el-submenu",{key:s,attrs:{index:t.index}},[n("template",{slot:"title"},[n("div",{staticClass:"left-width"},[n("i",{staticClass:"iconfont",class:t.icon}),e._v(" "),n("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])])]),e._v(" "),e._l(t.content,function(s,i){return n("el-menu-item-group",{key:i},[null!=s.item1?n("el-menu-item",{staticClass:"subtitle",attrs:{index:s.path},on:{click:function(n){return e.handleTitle(t.index,s.now)}}},[e._v(e._s(s.item1))]):e._e(),e._v(" "),null!=s.item2?n("el-menu-item",{staticClass:"subtitle",attrs:{index:s.path},on:{click:function(n){return e.handleTitle(t.index,s.now)}}},[e._v(e._s(s.item2))]):e._e(),e._v(" "),null!=s.item3?n("el-menu-item",{staticClass:"subtitle",attrs:{index:s.path},on:{click:function(n){return e.handleTitle(t.index,s.now)}}},[e._v(e._s(s.item3))]):e._e()],1)})],2)})],2)],1)},staticRenderFns:[]};var m=n("VU/8")(l,u,!1,function(e){n("vqFv")},null,null).exports,d={data:function(){return{active:[],index1:null,now:null,icons:null,link:"#/index"}},computed:Object(o.c)(["menu"]),methods:{getIndex:function(){var e=this;this.bus.$on("sendIndex",function(t){-1==t.index&&-1==t.now?(e.active={title:"首页",content:[{title:""}]},e.index1="/index",e.now=-1,e.icons="el-icon-s-home",sessionStorage.setItem("activeInfo",e.active),sessionStorage.setItem("index",e.index1),sessionStorage.setItem("now",e.now),sessionStorage.setItem("icon","el-icon-s-home")):(e.index1=t.index,e.active=e.menu[t.index-1],e.now=t.now,e.icons=e.active.icon,sessionStorage.setItem("icon",e.active.icon),sessionStorage.setItem("activeInfo",e.active),sessionStorage.setItem("index",e.index1),sessionStorage.setItem("now",e.now))})},toHome:function(){this.active={title:"首页",content:[{title:""}]},this.index1="/index",this.now=-1,this.icons="el-icon-s-home",sessionStorage.removeItem("activeInfo"),sessionStorage.removeItem("index"),sessionStorage.removeItem("now"),sessionStorage.removeItem("icon")},init:function(){null!=sessionStorage.getItem("activeInfo")?(this.active=sessionStorage.getItem("activeInfo"),this.index1=sessionStorage.getItem("index"),this.now=sessionStorage.getItem("now"),this.icons=sessionStorage.getItem("icon")):0==this.active.length&&(this.active={title:"首页",content:[{title:""}]},this.index1="/index",this.now=-1)}},created:function(){this.getIndex(),this.init()},beforeDestroy:function(){}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{staticClass:"title"},[n("a",{attrs:{href:e.link}},[n("span",{staticStyle:{"font-weight":"bold"},on:{click:e.toHome}},[n("i",{staticClass:"el-icon-s-home"}),e._v("  首页")])])]),e._v(" "),"首页"!=e.active.title?n("el-breadcrumb-item",{staticClass:"title"},[n("span",{staticStyle:{"font-weight":"bold"}},[n("i",{staticClass:"iconfont",class:e.icons}),e._v("  "+e._s(e.active.title))])]):e._e(),e._v(" "),0==e.now?n("el-breadcrumb-item",{staticStyle:{"padding-top":"1px"}},[e._v(e._s(e.active.content[e.now].title))]):e._e(),e._v(" "),1==e.now?n("el-breadcrumb-item",{staticStyle:{"padding-top":"1px"}},[e._v(e._s(e.active.content[e.now].title))]):e._e(),e._v(" "),2==e.now?n("el-breadcrumb-item",{staticStyle:{"padding-top":"1px"}},[e._v(e._s(e.active.content[e.now].title))]):e._e()],1)],1)},staticRenderFns:[]};var g=n("VU/8")(d,v,!1,function(e){n("hzFJ")},"data-v-23242524",null).exports,h=n("J150"),f={components:{header1:r,mainLeft:m,navigator:g},data:function(){return{username:"管理员"}},created:function(){this.init()},methods:{init:function(){var e=this;new WebSocket(this.$websocketUrl,this.$jwtDecode(sessionStorage.getItem("token")).id).onmessage=function(t){"is_lock"===JSON.parse(t.data).message&&e.open()}},open:function(){var e=this;this.$confirm("系统检测到有人在登录你的账号, 是否退出?","提示",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(function(){console.log("aaaa"),e.exit(),console.log("bbbb")}).catch(function(){e.$message({type:"success",message:"已取消"})})},exit:function(){var e=this;this.$axios({url:"/${process.env.peopleApi}/logout/"+JSON.parse(Object(h.a)(sessionStorage.getItem("token"))).id,method:"put"}).then(function(t){console.log(t),200==t.data.code&&(e.$router.push({path:"/"}),sessionStorage.removeItem("token"),sessionStorage.removeItem("image"),sessionStorage.removeItem("icon"),sessionStorage.removeItem("activeInfo"),sessionStorage.removeItem("index"),sessionStorage.removeItem("now"),e.$message({message:"退出成功",type:"success"}))})}}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"index"}},[t("header1",{staticClass:"topbar"}),this._v(" "),t("section",{staticClass:"container"},[t("div",{staticClass:"left_side"},[t("mainLeft")],1),this._v(" "),t("div",{staticClass:"main_wrapper"},[t("navigator",{staticClass:"nav"}),this._v(" "),t("router-view")],1)])],1)},staticRenderFns:[]};var _=n("VU/8")(f,p,!1,function(e){n("71qY")},"data-v-6d703e74",null);t.default=_.exports},hzFJ:function(e,t){},vqFv:function(e,t){}});
//# sourceMappingURL=7.c87d185a9229bc6629e5.js.map