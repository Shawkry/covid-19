(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5755e012"],{"1148d":function(t,e,a){"use strict";var i=a("a691"),o=a("1d80");t.exports=function(t){var e=String(o(this)),a="",n=i(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},"1c5e":function(t,e,a){t.exports=a.p+"img/数据展示厅.3ab0cdb5.png"},"1dde":function(t,e,a){var i=a("d039"),o=a("b622"),n=a("2d00"),r=o("species");t.exports=function(t){return n>=51||!i((function(){var e=[],a=e.constructor={};return a[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"33d7":function(t,e,a){},"33f3":function(t,e,a){"use strict";a("33d7")},"3c0c":function(t,e,a){},"408a":function(t,e,a){var i=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},4676:function(t,e,a){"use strict";a("d317")},"4d62":function(t,e,a){},"4d6d":function(t,e,a){"use strict";a("3c0c")},"5aa9":function(t,e,a){},"5e74":function(t,e,a){"use strict";a("4d62")},b0c0:function(t,e,a){var i=a("83ab"),o=a("9bf2").f,n=Function.prototype,r=n.toString,s=/^\s*function ([^ (]*)/,l="name";i&&!(l in n)&&o(n,l,{configurable:!0,get:function(){try{return r.call(this).match(s)[1]}catch(t){return""}}})},b680:function(t,e,a){"use strict";var i=a("23e7"),o=a("a691"),n=a("408a"),r=a("1148d"),s=a("d039"),l=1..toFixed,d=Math.floor,c=function(t,e,a){return 0===e?a:e%2===1?c(t,e-1,a*t):c(t*t,e/2,a)},h=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},u=function(t,e,a){var i=-1,o=a;while(++i<6)o+=e*t[i],t[i]=o%1e7,o=d(o/1e7)},f=function(t,e){var a=6,i=0;while(--a>=0)i+=t[a],t[a]=d(i/e),i=i%e*1e7},m=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var i=String(t[e]);a=""===a?i:a+r.call("0",7-i.length)+i}return a},p=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}));i({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,a,i,s,l=n(this),d=o(t),p=[0,0,0,0,0,0],v="",g="0";if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(v="-",l=-l),l>1e-21)if(e=h(l*c(2,69,1))-69,a=e<0?l*c(2,-e,1):l/c(2,e,1),a*=4503599627370496,e=52-e,e>0){u(p,0,a),i=d;while(i>=7)u(p,1e7,0),i-=7;u(p,c(10,i,1),0),i=e-1;while(i>=23)f(p,1<<23),i-=23;f(p,1<<i),u(p,1,1),f(p,2),g=m(p)}else u(p,0,a),u(p,1<<-e,0),g=m(p)+r.call("0",d);return d>0?(s=g.length,g=v+(s<=d?"0."+r.call("0",d-s)+g:g.slice(0,s-d)+"."+g.slice(s-d))):g=v+g,g}})},c435:function(t,e,a){"use strict";a("5aa9")},d317:function(t,e,a){},d79b:function(t,e,a){},d81d:function(t,e,a){"use strict";var i=a("23e7"),o=a("b727").map,n=a("1dde"),r=n("map");i({target:"Array",proto:!0,forced:!r},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},e59d:function(t,e,a){"use strict";a("d79b")},f574:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("el-container",[i("el-header",{attrs:{height:"80px"}},[i("img",{staticClass:"titleImg",attrs:{alt:"数据展示厅",src:a("1c5e")}})]),i("el-container",[i("el-aside",[i("div",{staticClass:"aside_box left top"},[i("div",{staticClass:"echartsTitle"},[t._v("全国现存确诊Top10")]),i("div",{staticClass:"myCharts"},[i("TopTen")],1),i("div",{staticClass:"aside_footer"})]),i("div",{staticClass:"aside_box left bottom"},[i("div",{staticClass:"echartsTitle"},[t._v("世界现存确诊Top10")]),i("div",{staticClass:"myCharts"},[i("NewTrend")],1),i("div",{staticClass:"aside_footer"})])]),i("el-container",[i("el-main",[i("div",{staticClass:"main_head"},[i("div",{staticClass:"mh-hd"},[i("ul",[i("li",[t._v(t._s(t.hdData.confirmedCount))]),i("li",[t._v(t._s(t.hdData.currentConfirmedCount))]),i("li",[t._v(t._s(t.hdData.curedCount))]),i("li",{staticClass:"liLaster"},[t._v(t._s(t.hdData.deadCount))])])]),i("div",{staticClass:"mh-bd"},[i("ul",[i("li",[t._v("累计确诊")]),i("li",[t._v("现存确诊")]),i("li",[t._v("累积治愈")]),i("li",[t._v("累积死亡")])]),i("div",{staticClass:"psInfo"},[t._v("注：国内数据")])])]),i("div",{staticClass:"main_map"},[i("Bar3D")],1)])],1),i("el-aside",[i("div",{staticClass:"aside_box"},[i("div",{staticClass:"echartsTitle"},[t._v("世界每日新增、治疗和死亡图")]),i("div",{staticClass:"myCharts"},[i("WorldData")],1),i("div",{staticClass:"aside_footer"})]),i("div",{staticClass:"aside_box"},[i("div",{staticClass:"echartsTitle"},[t._v("我国近期境外输入趋势图")]),i("div",{staticClass:"myCharts"},[i("OverseasInput")],1),i("div",{staticClass:"aside_footer"})])])],1),i("ButtonMenu")],1)],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"TopTen"}},[a("div",{ref:"top_ref",staticClass:"box",staticStyle:{width:"100%",height:"100%"}})])},r=[],s=(a("b680"),{data:function(){return{topDataCurrent:[],provinceNames:[],currentPercentage:[],topConfirmed:[],confirmedPercentage:[]}},mounted:function(){this.getApi()},methods:{getApi:function(){var t=this;this.axios.get("http://110.42.237.123:8080/CovidData/provinceTop10_data").then((function(e){for(var a=9;a>=0;a--){t.provinceNames.push(e.data[a].provinceName),t.topDataCurrent.push(e.data[a].currentConfirmedCount);var i=100*e.data[a].currentConfirmedCount_percentage;t.currentPercentage.push(i.toFixed(2)),t.topConfirmed.push(100*e.data[a].confirmedCount);var o=100*e.data[a].confirmedCount_percentage;t.confirmedPercentage.push(o.toFixed(2))}t.drawChart()})).catch((function(t){console.log(t),console.log("获取请求失败！")}))},drawChart:function(){var t=this.$echarts.init(this.$refs.top_ref),e={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["当前确诊","确诊占比"]},grid:{top:"8%",left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:this.provinceNames},series:[{name:"当前确诊",type:"bar",data:this.topDataCurrent},{name:"确诊占比",type:"bar",data:this.currentPercentage}]};t.setOption(e),window.addEventListener("resize",(function(){t.resize()}))}}}),l=s,d=(a("4d6d"),a("2877")),c=Object(d["a"])(l,n,r,!1,null,null,null),h=c.exports,u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"NewTrend"}},[a("div",{ref:"top_ref",staticClass:"box",staticStyle:{width:"100%",height:"100%"}})])},f=[],m=(a("b0c0"),a("d81d"),a("a9e3"),{data:function(){return{name:"",addConfirmCount:"",death:"",heal:""}},mounted:function(){this.getApi()},methods:{getApi:function(){var t=this;this.axios.get("http://110.42.237.123:8080/CovidData/worldAddConfirm_data").then((function(e){t.name=e.data.map((function(t){return t.name})),t.addConfirmCount=e.data.map((function(t){return t.addConfirmCount})),t.death=e.data.map((function(t){return t.death})),t.heal=e.data.map((function(t){return t.heal})),t.drawChart()}))},drawChart:function(){var t=this.$echarts.init(this.$refs.top_ref),e=[];for(var a in this.name)this.name[a]=Number(a)+1+"."+this.name[a],e.push({"国家":this.name[a],"新增确诊":this.addConfirmCount[a],"累计死亡":this.death[a],"累计治愈":this.heal[a]});for(var i=[],o=[],n=0;n<e.length;n++){var r=[];o.push(e[n].国家);for(var s=0;s<3;s++){var l={name:"",value:""};0===s&&(l.name="累计治愈",l.value=e[n].累计治愈,r.push(l)),1===s&&(l.name="新增确诊",l.value=e[n].新增确诊,r.push(l)),2===s&&(l.name="累计死亡",l.value=e[n].累计死亡,r.push(l))}i.push(r)}t.on("timelinechanged",(function(t){var e=t.currentIndex;c.baseOption.timeline.data[e]})),t.on("click",(function(t){$("#cmp64062ainput").textbox().textbox("setValue",国家),console.log(t)}));var d=["新增确诊","累计死亡","累计治愈"],c={baseOption:{timeline:{axisType:"category",autoPlay:!0,playInterval:2e3,orient:"vertical",lineStyle:{color:"#b9bbbe"},label:{fontSize:12,textStyle:{color:"#000000"}},controlStyle:{color:"rgba(255,255,255,0.7)"},checkpointStyle:{color:"#3b424a"},left:"6%",right:"65%",top:"0%",bottom:"0%",data:o,inverse:!0},tooltip:{trigger:"item",formatter:function(t){for(var e=t[0].name,a=0,i=t.length;a<i;a++)e+="<br/>"+t[a].seriesName+" : "+formatNum(t[a].value)+"万元";return e}},legend:{orient:"vertical",top:"2%",right:"0%",textStyle:{fontSize:12,color:"#ffff0"},data:d,icon:"circle",itemWidth:7,itemHeight:7},series:[{name:"饼图",type:"pie",radius:"60%",center:["65%","65%"]}]},options:[{series:[{name:"饼图options",color:["#49c790","#d26e1c","#4a90e2"],data:i[0],itemStyle:{normal:{label:{position:"inner",show:!0,textStyle:{fontSize:10,color:"#ffffff"},formatter:"{c}"},lableLine:{show:!1}},emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},{series:[{name:"饼图options",data:i[1],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},{series:[{name:"饼图options",data:i[2],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},{series:[{name:"饼图options",data:i[3],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},{series:[{name:"饼图options",data:i[4],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},{series:[{name:"饼图options",data:i[5],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},{series:[{name:"饼图options",data:i[6],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},{series:[{name:"饼图options",data:i[7],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},{series:[{name:"饼图options",data:i[8],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},{series:[{name:"饼图options",data:i[9],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}]};t.setOption(c),window.addEventListener("resize",(function(){t.resize()}))}}}),p=m,v=(a("4676"),Object(d["a"])(p,u,f,!1,null,null,null)),g=v.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"WorldData"}},[a("div",{ref:"top_ref",staticClass:"box",staticStyle:{width:"100%",height:"100%"}})])},b=[],y=a("313e"),C={mounted:function(){this.drawChart()},methods:{drawChart:function(){var t=this.$echarts.init(this.$refs.top_ref);this.axios.get("http://110.42.237.123:8080/CovidData/world_total_data").then((function(e){var a=e.data.map((function(t){return t.date}));a.pop();for(var i=e.data.map((function(t){return t.addConfirm})),o=e.data.map((function(t){return t.heal})),n=e.data.map((function(t){return t.death})),r=0;r<o.length;r++)o[r]=o[r+1]-o[r];for(var s=0;s<n.length;s++)n[s]=n[s+1]-n[s];var l={dataZoom:[{show:!1,realtime:!0,z:100,height:20,width:"70%",bottom:5,left:"center",containLabel:!0,start:0,end:10,startValue:0,endValue:10},{type:"inside",realtime:!0,start:0,end:100}],tooltip:{trigger:"axis"},legend:{data:["新增人数","治愈人数","死亡人数"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:a,axisLabel:{interval:0,textStyle:{color:"#1B253A",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12},formatter:function(t){var e="",a=t.length,i=4,o=Math.ceil(a/i);if(a>i)for(var n=0;n<o;n++){var r="",s=n*i,l=s+i;r=n==o-1?t.substring(s,a):t.substring(s,l)+"\n",e+=r}else e=t;return e}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#E5E9ED"}},splitLine:{show:!0,lineStyle:{color:"#E5E9ED"}}},yAxis:[{type:"value",splitNumber:5,axisLabel:{textStyle:{color:"#000",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:"#E5E9ED"}}}],series:[{name:"新增人数",type:"line",itemStyle:{normal:{color:"#3A84FF",lineStyle:{color:"#3A84FF",width:1},areaStyle:{color:new y["graphic"].LinearGradient(0,1,0,0,[{offset:0,color:"rgba(0,179,244,0.4)"},{offset:1,color:"rgba(0,179,244, 0.9)"}])}}},data:i},{name:"死亡人数",type:"line",itemStyle:{normal:{color:"rgba(255,80,124,1)",lineStyle:{color:"rgba(255,80,124,1)",width:1},areaStyle:{color:new y["graphic"].LinearGradient(0,1,0,0,[{offset:0,color:"rgba(255,80,124,0)"},{offset:1,color:"rgba(255,80,124,0.6)"}])}}},data:n},{name:"治愈人数",type:"line",itemStyle:{normal:{color:"#00CA60",lineStyle:{color:"#00CA60",width:1},areaStyle:{color:new y["graphic"].LinearGradient(0,1,0,0,[{offset:0,color:"rgba(92,214,113,0.3)"},{offset:1,color:"rgba(92,214,113,0.35)"}])}}},data:o}]};t.setOption(l),window.addEventListener("resize",(function(){t.resize()}))}))}}},x=C,S=(a("5e74"),Object(d["a"])(x,w,b,!1,null,null,null)),_=S.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"TopTen"}},[a("div",{ref:"top_ref",staticClass:"box",staticStyle:{width:"100%",height:"100%"}})])},O=[],A={data:function(){return{timeDate:[],addOverseasCount:[],totalOverseasCount:[]}},mounted:function(){this.getApi()},methods:{getApi:function(){var t=this;this.axios.get("http://110.42.237.123:8080/CovidData/overseas_data").then((function(e){t.addOverseasCount=e.data.map((function(t){return t.addOverseasCount})),t.timeDate=e.data.map((function(t){return t.date})),t.totalOverseasCount=e.data.map((function(t){return t.totalOverseasCount})),t.drawChart()})).catch((function(t){console.log(t),console.log("获取请求失败！")}))},drawChart:function(){var t=this.$echarts.init(this.$refs.top_ref),e={tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0}}},grid:{top:"12%",left:"2%",right:"0%",bottom:"-2%",containLabel:!0},legend:{data:["新增境外输入","总境外输入"],top:"0%",left:"18%",textStyle:{color:"#000",fontSize:11}},xAxis:{data:this.timeDate,axisLine:{show:!0,lineStyle:{color:"#3d5269",width:2}},axisTick:{show:!0,alignWithLabel:!0},axisLabel:{show:!0,textStyle:{color:"#396A87",fontSize:14},interval:0,rotate:30}},yAxis:[{type:"value",name:"境外新增数",nameTextStyle:{color:"#396A87",fontSize:12,left:"2%"},splitLine:{show:!0,lineStyle:{width:2,color:"#3d5269"}},axisTick:{show:!0},axisLine:{show:!0},axisLabel:{show:!0,textStyle:{color:"#396A87",fontSize:12}}},{type:"value",name:"总境外输入数",nameTextStyle:{color:"#396A87",fontSize:12},position:"right",splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:"#396A87",width:1}},axisLabel:{show:!0,formatter:"{value}",textStyle:{color:"#396A87",fontSize:14}}}],series:[{name:"新增境外输入",type:"bar",barWidth:12,itemStyle:{normal:{color:new y["graphic"].LinearGradient(0,0,0,1,[{offset:0,color:"#5092da"},{offset:1,color:"#3d5269"}])}},data:this.addOverseasCount},{name:"总境外输入",type:"line",yAxisIndex:1,showAllSymbol:!0,symbol:"circle",symbolSize:6,itemStyle:{color:"#5092da",borderColor:"#5092da",width:2,shadowColor:"#5092da",shadowBlur:2},lineStyle:{color:"#5092da",width:2,shadowBlur:2},data:this.totalOverseasCount}]};t.setOption(e),window.addEventListener("resize",(function(){t.resize()}))}}},L=A,T=(a("c435"),Object(d["a"])(L,D,O,!1,null,null,null)),z=T.exports,E=a("a129"),B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Bar3D"}},[a("div",{ref:"Bar3D_ref",staticClass:"box",staticStyle:{width:"100%",height:"100%"}})])},F=[],N={data:function(){return{}},mounted:function(){this.drawChart()},methods:{drawChart:function(){var t=this.$echarts.init(this.$refs.Bar3D_ref),e=["0-9","10-19","20-29","30-39","40-49","50-59","60-69","70-79","80-89","90+"],a=["中国","丹麦","意大利","荷兰","韩国","西班牙","瑞士"],i=[[0,0,0],[0,1,.2],[0,2,.2],[0,3,.2],[0,4,.4],[0,5,1.3],[0,6,3.6],[0,7,8],[0,8,14.8],[0,9,14.8],[1,0,.2],[1,1,.2],[1,2,.2],[1,3,.2],[1,4,.2],[1,5,.2],[1,6,4.5],[1,7,14.9],[1,8,24.6],[1,9,36.8],[2,0,.1],[2,1,0],[2,2,.1],[2,3,.3],[2,4,.9],[2,5,2.5],[2,6,9.5],[2,7,24.1],[2,8,30.2],[2,9,25],[3,0,0],[3,1,0],[3,2,.1],[3,3,.2],[3,4,.4],[3,5,1.5],[3,6,7.3],[3,7,20.9],[3,8,28.7],[3,9,27.1],[4,0,0],[4,1,0],[4,2,0],[4,3,.1],[4,4,.2],[4,5,.7],[4,6,2.5],[4,7,9.7],[4,8,22.2],[4,9,22.2],[5,0,.2],[5,1,.3],[5,2,.3],[5,3,.3],[5,4,.6],[5,5,1.3],[5,6,4.5],[5,7,14.2],[5,8,23.4],[5,9,24.7],[6,0,0],[6,1,0],[6,2,0],[6,3,.1],[6,4,0],[6,5,.4],[6,6,2.1],[6,7,8.1],[6,8,19.9],[6,9,19.9]],o={tooltip:{trigger:"axis"},title:{text:"不同国家的COVID-19病死率（%）"},visualMap:{max:30,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]}},xAxis3D:{type:"category",data:e,name:"年龄段"},yAxis3D:{type:"category",data:a,name:"国家"},zAxis3D:{type:"value",name:"病死率%"},grid3D:{boxWidth:200,boxDepth:100,viewControl:{},light:{main:{intensity:1.2,shadow:!0},ambient:{intensity:.3}}},series:[{type:"bar3D",data:i.map((function(t){return{value:[t[1],t[0],t[2]]}})),shading:"lambert",label:{fontSize:16,borderWidth:1},emphasis:{label:{fontSize:30,color:"#eeff32"},itemStyle:{color:"#900"}}}]};t.setOption(o),window.addEventListener("resize",(function(){t.resize()}))}}},k=N,I=(a("e59d"),Object(d["a"])(k,B,F,!1,null,null,null)),X=I.exports,W=a("f747"),P={data:function(){return{hdData:{}}},created:function(){this.getHdData()},methods:{moreTo:function(){this.$router.push("/bank")},home_page:function(){this.$router.push("/")},getHdData:function(){var t=this;this.axios.get("http://110.42.237.123:8080/CovidData/ChinaTotal_data").then((function(e){t.hdData=e.data})).catch((function(t){console.log("获取请求失败！")}))}},name:"Home",components:{TopTen:h,NewTrend:g,WorldData:_,OverseasInput:z,models:E["a"],Bar3D:X,ButtonMenu:W["a"]}},j=P,G=(a("33f3"),Object(d["a"])(j,i,o,!1,null,"907cb1a4",null));e["default"]=G.exports}}]);