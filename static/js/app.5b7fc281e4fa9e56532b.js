webpackJsonp([36],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("//Fk"),i=n.n(o),r=n("7+uW"),a=n("/ocq"),l=n("mtWM"),c=n.n(l),u=n("ppUw"),s=n.n(u),p=n("zL8q"),m=n.n(p);r.default.use(a.a);var h=new a.a({routes:[{path:"/",name:"login",component:function(){return n.e(8).then(n.bind(null,"uIdB"))}},{path:"/index",component:function(){return n.e(7).then(n.bind(null,"QxDH"))},children:[{path:"/",component:function(){return n.e(24).then(n.bind(null,"DlBy"))}},{path:"/grade",component:function(){return n.e(29).then(n.bind(null,"zRu7"))}},{path:"/selectExamToPart",component:function(){return n.e(28).then(n.bind(null,"FxeH"))}},{path:"/scorePart",component:function(){return n.e(32).then(n.bind(null,"OB99"))}},{path:"/allStudentsGrade",component:function(){return n.e(33).then(n.bind(null,"1Rb9"))}},{path:"/examDescription",component:function(){return n.e(26).then(n.bind(null,"l1Qr"))}},{path:"/selectExam",component:function(){return Promise.all([n.e(0),n.e(25)]).then(n.bind(null,"wP8f"))}},{path:"/addExam",component:function(){return n.e(23).then(n.bind(null,"tlhq"))}},{path:"/answerDescription",component:function(){return n.e(16).then(n.bind(null,"Tkmf"))}},{path:"/selectAnswer",component:function(){return n.e(21).then(n.bind(null,"PSOo"))}},{path:"/addAnswer",component:function(){return n.e(5).then(n.bind(null,"nbCl"))}},{path:"/addAnswerChildren",component:function(){return n.e(19).then(n.bind(null,"cYcb"))}},{path:"/studentManage",component:function(){return n.e(13).then(n.bind(null,"mog1"))}},{path:"/addStudent",component:function(){return n.e(6).then(n.bind(null,"eK6F"))}},{path:"/teacherManage",component:function(){return n.e(34).then(n.bind(null,"9sXG"))}},{path:"/addTeacher",component:function(){return n.e(11).then(n.bind(null,"Cq1r"))}},{path:"/selectInfo",component:function(){return n.e(2).then(n.bind(null,"ZfSp"))}},{path:"/addSubjective",component:function(){return n.e(3).then(n.bind(null,"BXja"))}},{path:"/addClassMark",component:function(){return n.e(27).then(n.bind(null,"/v60"))}},{path:"/publishScore",component:function(){return n.e(18).then(n.bind(null,"qvYF"))}},{path:"/publishScoreNew",component:function(){return n.e(15).then(n.bind(null,"4n9O"))}}]},{path:"/student",component:function(){return n.e(9).then(n.bind(null,"LttN"))},children:[{path:"/",component:function(){return n.e(17).then(n.bind(null,"qpvD"))}},{path:"/startExam",component:function(){return n.e(30).then(n.bind(null,"5apE"))}},{path:"/manager",component:function(){return n.e(31).then(n.bind(null,"3zII"))}},{path:"/examMsg",component:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"dPZ7"))}},{path:"/message",component:function(){return n.e(10).then(n.bind(null,"x3U5"))}},{path:"/studentScore",component:function(){return n.e(4).then(n.bind(null,"rIdx"))}},{path:"/scoreTable",component:function(){return n.e(22).then(n.bind(null,"rkYX"))}},{path:"/errorinfo",component:function(){return n.e(12).then(n.bind(null,"A9xC"))}},{path:"/rank",component:function(){return n.e(20).then(n.bind(null,"mVZI"))}}]},{path:"/answer",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"RoFm"))}}]});h.beforeEach(function(e,t,n){var o=null!=sessionStorage.getItem("token");"/"==e.path?n():o?n():n("/")});var d=h;var f=n("J150"),g={name:"App",is_login:!1,ws:null,current_id:null,lastTime:null,currentTime:null,timer:1e3,timeInterval:"",methods:{clickDiv:function(){null==this.timeInterval&&(this.timeInterval=setInterval(this.isTimeOut,1e3)),this.lastTime=(new Date).getTime(),console.log(this.lastTime)},exit:function(e){c()({url:"http://110.41.45.5:21888/peopleApi/logout/"+e,method:"put"}).then(function(e){console.log(e),200==e.data.code&&(d.push({path:"/"}),sessionStorage.removeItem("activeInfo"),sessionStorage.removeItem("index"),sessionStorage.removeItem("now"),sessionStorage.removeItem("icon"),sessionStorage.removeItem("token"),sessionStorage.removeItem("image"),Object(p.Message)({type:"error",message:"用户信息已过期,请重新登录"}))})},isTimeOut:function(){if(this.currentTime=(new Date).getTime(),this.currentTime-this.lastTime>36e5&&sessionStorage.getItem("token")){clearInterval(this.timeInterval);var e=Object(f.a)(sessionStorage.getItem("token")).id;this.exit(e),sessionStorage.removeItem("token"),this.timeInterval=null}}}},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"},on:{click:this.clickDiv}},[t("router-view")],1)},staticRenderFns:[]};var w=n("VU/8")(g,b,!1,function(e){n("mEo8")},null,null).exports,v=n("XLwt"),I=n.n(v),S=(n("tvR6"),n("NYxO"));r.default.use(S.a);var x=new S.a.Store({state:{isPractice:!1,flag:!1,userInfo:null,menu:[{index:"1",title:"考试管理",icon:"icon-kechengbiao",content:[{item1:"考试查询",path:"/selectExam",title:"考试查询",now:"0"},{item2:"添加考试",path:"/addExam",title:"添加考试",now:"1"}]},{index:"2",title:"题库管理",icon:"icon-tiku",content:[{item2:"所有题库",path:"/selectAnswer",title:"所有题库",now:"0"},{item3:"增加题库",path:"/addAnswer",title:"增加题库",now:"1"},{path:"/addAnswerChildren",title:"增加题库",now:"2"}]},{index:"3",title:"成绩查询",icon:"icon-performance",content:[{item1:"学生成绩查询",path:"/allStudentsGrade",title:"学生成绩查询",now:"0"},{item2:"科目分段查询",path:"/selectExamToPart",title:"科目分段查询",now:"1"},{item3:"学生详细错题查询",path:"/selectInfo",title:"学生详细错题查询",now:"2"},{path:"/grade",title:"分数",now:"3"},{path:"/scorePart",title:"添加学生",now:"4"}]},{index:"4",title:"成绩发布管理",icon:"icon-performance",content:[{item1:"统计成绩",path:"/publishScore",title:"统计成绩",now:"0"},{item2:"发布成绩",path:"/publishScoreNew",title:"发布成绩",now:"1"}]},{index:"5",title:"学生管理",icon:"icon-role",content:[{item1:"学生管理",path:"/studentManage",title:"学生管理",now:"0"},{item2:"添加学生",path:"/addStudent",title:"添加学生",now:"1"}]},{index:"6",title:"评分管理",icon:"icon-module4mokuai",content:[{item1:"主观题评分",path:"/addSubjective",title:"主观题评分",now:"0"},{item1:"平时分管理",path:"/addClassMark",title:"平时分管理",now:"1"}]}]},mutations:{practice:function(e,t){e.isPractice=t},toggle:function(e){e.flag=!e.flag},changeUserInfo:function(e,t){e.userInfo=t}},getters:{},actions:{getUserInfo:function(e,t){e.commit("changeUserInfo",t)},getPractice:function(e,t){e.commit("practice",t)}}}),k=n("U8jO"),T=n.n(k);var y="ws://localhost:8082/wsserver/",P="ws://localhost:8082/ws/",j="ws://localhost:8082/chat/";var A=function(e){c()({url:"http://110.41.45.5:21888/peopleApi/logout/"+e,method:"put"}).then(e=>{console.log(e),200==e.data.code&&(d.push({path:"/"}),sessionStorage.removeItem("activeInfo"),sessionStorage.removeItem("index"),sessionStorage.removeItem("now"),sessionStorage.removeItem("icon"),sessionStorage.removeItem("token"),sessionStorage.removeItem("image"),Object(p.Message)({type:"error",message:"用户信息已过期,请重新登录"}))})};r.default.prototype.$jwtDecode=f.a,r.default.prototype.$clean=A,r.default.prototype.$message=p.Message,r.default.prototype.$websocketUrl=y,r.default.prototype.$websocketUpUrl=P,r.default.prototype.$websocketChatUrl=j,r.default.use(T.a,"",{connectManually:!0,format:"json",reconnection:!0,reconnectionAttempts:5,reconnectionDelay:2e3}),r.default.use(m.a),r.default.use(s.a),r.default.config.productionTip=!1,r.default.prototype.bus=new r.default,r.default.prototype.$echarts=I.a,r.default.prototype.$axios=c.a,c.a.interceptors.request.use(function(e){return sessionStorage.getItem("token")&&(e.headers.common.token=sessionStorage.getItem("token")),e},function(e){return d.push({path:"/"}),i.a.reject(e)}),c.a.interceptors.response.use(function(e){if(500!=e.data.code)return e;A(Object(f.a)(sessionStorage.getItem("token")).id)},function(e){if(e.response)switch(e.response.status){case 401:console.log("我是测试，方便找一下token有没有失效"),x.commit("del_token"),d.push("/index")}return i.a.reject(e)}),new r.default({el:"#app",router:d,store:x,render:function(e){return e(w)},components:{App:w},template:"<App/>"})},mEo8:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5b7fc281e4fa9e56532b.js.map