webpackJsonp([33],{hriz:function(t,e){},zRu7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"grade",data:function(){return{isNull:!1,tableDataX:[],tableDataY:[]}},mounted:function(){this.score()},methods:{score:function(){var t=this,e=this.$route.query.studentId;this.$axios("/http://110.41.45.5:21887/score/"+e).then(function(e){if(console.log(e),200==e.data.code){e.data.data.forEach(function(e,a){t.tableDataX.push("第"+(a+1)+"次"),t.tableDataY.push(e.etScore)});var a=t.$refs.box,s=t.$echarts.init(a),i={xAxis:{type:"category",data:t.tableDataX},yAxis:{type:"value"},series:[{data:t.tableDataY,type:"line",itemStyle:{normal:{label:{show:!0}}}}]};s.setOption(i),s.on("mouseover",function(t){console.log(t.value)})}else t.isNull=!0})}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"grade"}},[e("div",{ref:"box",staticClass:"box"}),this._v(" "),this.isNull?e("div",{staticClass:"notFound"},[e("i",{staticClass:"iconfont icon-LC_icon_tips_fill"}),e("span",[this._v("该考生未参加考试")])]):this._e()])},staticRenderFns:[]};var n=a("VU/8")(s,i,!1,function(t){a("hriz")},"data-v-0da564b0",null);e.default=n.exports}});
//# sourceMappingURL=33.86641c671630e589e9ec.js.map