webpackJsonp([0],{QNVh:function(t,e){},hUug:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("oqQY"),s=n.n(r),a={components:{},props:{},data:function(){return{show_love:!1,percentage:0,cloudData:[],nowIndex:0,perentageeIndex:0,perecentageMax:window.$setting.allPoint,pointNum:0,countdown:{endTime:s()().valueOf()+36e5*window.$setting.countdown,countdownStr:""},classObj:""}},watch:{},computed:{},methods:{format:function(t){var e=window.$setting.percentage0+(t>0?t:"");return t>window.$setting.percentage1Num&&(e=window.$setting.percentage1+t),t>window.$setting.percentage2Num&&(e=window.$setting.percentage2+t),t>window.$setting.percentage3Num&&(e=window.$setting.percentage3+t),t===window.$setting.percentage4Num?window.$setting.percentage4:e+" "},createdCloudData:function(){for(var t=0,e=0,n=[{x:55,y:43},{x:3,y:220},{x:320,y:20},{x:540,y:120},{x:620,y:320}];t<this.perecentageMax;){var r=Math.floor(4*Math.random())+1;t+r>this.perecentageMax&&(r=this.perecentageMax-t),t+=r,4===(e+=1)&&(e=0);var s={x:n[e].x,y:n[e].y,pointNum:r,show_cloud_disappear:!1,show_cloud:!0,show_baojian:!1,orderType:e};this.cloudData.push(s)}console.log(this.cloudData),this.nowIndex=this.cloudData.length-1,this.perentageeIndex=this.cloudData.length-1},changeKonglongNow:function(){var t=this;-1!==this.perentageeIndex&&(this.show_love=!0,this.percentage+=this.cloudData[this.perentageeIndex].pointNum,this.cloudData[this.cloudData.length-1-this.nowIndex].show_cloud_disappear=!this.cloudData[this.cloudData.length-1-this.nowIndex].show_cloud_disappear,this.cloudData[this.cloudData.length-1-this.nowIndex].show_baojian=!this.cloudData[this.cloudData.length-1-this.nowIndex].show_baojian,this.perentageeIndex-=1,this.pointNum=this.cloudData[this.nowIndex].pointNum,console.log(this.cloudData.length),console.log(this.perentageeIndex),this.perentageeIndex<=0&&(this.classObj="konglong5"),this.perentageeIndex>.1*this.cloudData.length&&(this.classObj="konglong4"),this.perentageeIndex>.25*this.cloudData.length&&(this.classObj="konglong3"),this.perentageeIndex>.5*this.cloudData.length&&(this.classObj="konglong2"),this.perentageeIndex>.75*this.cloudData.length&&(this.classObj="konglong1"),setTimeout(function(){t.nowIndex-=1,t.show_love=!1},3e3))},updateCountdownStr:function(t){var e=s()().valueOf(),n=t.endTime-e;if(n<0)t.countdownStr=window.$setting.countdownText;else{var r=s()(n).format("HH")-8,a=s()(n).format("mm"),i=s()(n).format("ss");t.countdownStr=r+":"+a+":"+i}}},beforeCreate:function(){},created:function(){},mounted:function(){var t=this;console.log(window.$setting),document.title="拯救小恐龙",this.createdCloudData(),setInterval(function(){t.updateCountdownStr(t.countdown)},1e3);s()().valueOf()}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"konglong-content"},[n("el-progress",{staticStyle:{width:"900px","padding-bottom":"10px","margin-top":"30px"},attrs:{"stroke-width":40,percentage:t.percentage,color:"#f3e993",format:t.format}}),t._v(" "),n("div",{staticClass:"konglong-box"},[n("div",{staticClass:"konglong1",class:t.classObj,on:{click:t.changeKonglongNow}}),t._v(" "),t._l(t.cloudData,function(e,r){return n("div",{key:r,staticClass:"cloud",class:{cloud_xiaoshi:e.show_cloud_disappear,cloud_swing:t.cloudData.length-1+4-r-t.nowIndex<5&&t.cloudData.length-1+4-r-t.nowIndex>0&&!e.show_cloud_disappear},style:{opacity:t.cloudData.length-1+4-r-t.nowIndex<5&&t.cloudData.length-1+4-r-t.nowIndex>0?"1":0,zIndex:t.cloudData.length-r,top:e.y+"px",left:e.x+"px"}},[e.show_baojian?n("div",{staticClass:"baojian baojian_huadong",class:{baojian_huadong:e.show_baojian}}):t._e()])}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.show_love,expression:"show_love"}],staticClass:"love"},[n("span",[t._v(" +"+t._s(t.pointNum))])])],2),t._v(" "),n("div",[n("div",{staticClass:"date-box",staticStyle:{bottom:"120px"}},[t._v(" Time is tight!")]),t._v(" "),n("div",{staticClass:"date-box"},[t._v(" "+t._s(t.countdown.countdownStr))])])],1)])},staticRenderFns:[]};var o=n("VU/8")(a,i,!1,function(t){n("tr8R"),n("QNVh")},"data-v-3df9b134",null);e.default=o.exports},oqQY:function(t,e,n){var r;r=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",s="day",a="week",i="month",o="quarter",u="year",c="date",d="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},w={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,i),a=n-s<0,o=e.clone().add(r+(a?-1:1),i);return+(-(r+(n-s)/(a?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:i,y:u,w:a,d:s,D:c,h:r,m:n,s:e,ms:t,Q:o}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",$={};$[p]=f;var v="$isDayjsObject",m=function(t){return t instanceof y||!(!t||!t[v])},D=function t(e,n,r){var s;if(!e)return p;if("string"==typeof e){var a=e.toLowerCase();$[a]&&(s=a),n&&($[a]=n,s=a);var i=e.split("-");if(!s&&i.length>1)return t(i[0])}else{var o=e.name;$[o]=e,s=o}return!r&&s&&(p=s),s||!r&&p},_=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},x=w;x.l=D,x.i=m,x.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var y=function(){function f(t){this.$L=D(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[v]=!0}var g=f.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var s=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return x},g.isValid=function(){return!(this.$d.toString()===d)},g.isSame=function(t,e){var n=_(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return _(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<_(t)},g.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,o){var d=this,h=!!x.u(o)||o,l=x.p(t),f=function(t,e){var n=x.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return h?n:n.endOf(s)},g=function(t,e){return x.w(d.toDate()[t].apply(d.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},w=this.$W,p=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case u:return h?f(1,0):f(31,11);case i:return h?f(1,p):f(0,p+1);case a:var m=this.$locale().weekStart||0,D=(w<m?w+7:w)-m;return f(h?$-D:$+(6-D),p);case s:case c:return g(v+"Hours",0);case r:return g(v+"Minutes",1);case n:return g(v+"Seconds",2);case e:return g(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(a,o){var d,h=x.p(a),l="set"+(this.$u?"UTC":""),f=(d={},d[s]=l+"Date",d[c]=l+"Date",d[i]=l+"Month",d[u]=l+"FullYear",d[r]=l+"Hours",d[n]=l+"Minutes",d[e]=l+"Seconds",d[t]=l+"Milliseconds",d)[h],g=h===s?this.$D+(o-this.$W):o;if(h===i||h===u){var w=this.clone().set(c,1);w.$d[f](g),w.init(),this.$d=w.set(c,Math.min(this.$D,w.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[x.p(t)]()},g.add=function(t,o){var c,d=this;t=Number(t);var h=x.p(o),l=function(e){var n=_(d);return x.w(n.date(n.date()+Math.round(e*t)),d)};if(h===i)return this.set(i,this.$M+t);if(h===u)return this.set(u,this.$y+t);if(h===s)return l(1);if(h===a)return l(7);var f=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[h]||1,g=this.$d.getTime()+t*f;return x.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=x.z(this),a=this.$H,i=this.$m,o=this.$M,u=n.weekdays,c=n.months,h=function(t,n,s,a){return t&&(t[n]||t(e,r))||s[n].slice(0,a)},f=function(t){return x.s(a%12||12,t,"0")},g=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(l,function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return x.s(e.$y,4,"0");case"M":return o+1;case"MM":return x.s(o+1,2,"0");case"MMM":return h(n.monthsShort,o,c,3);case"MMMM":return h(c,o);case"D":return e.$D;case"DD":return x.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,u,2);case"ddd":return h(n.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(a);case"HH":return x.s(a,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(a,i,!0);case"A":return g(a,i,!1);case"m":return String(i);case"mm":return x.s(i,2,"0");case"s":return String(e.$s);case"ss":return x.s(e.$s,2,"0");case"SSS":return x.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")})},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(t,c,d){var h,l=this,f=x.p(c),g=_(t),w=6e4*(g.utcOffset()-this.utcOffset()),p=this-g,$=function(){return x.m(l,g)};switch(f){case u:h=$()/12;break;case i:h=$();break;case o:h=$()/3;break;case a:h=(p-w)/6048e5;break;case s:h=(p-w)/864e5;break;case r:h=p/36e5;break;case n:h=p/6e4;break;case e:h=p/1e3;break;default:h=p}return d?h:x.a(h)},g.daysInMonth=function(){return this.endOf(i).$D},g.$locale=function(){return $[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return x.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},f}(),M=y.prototype;return _.prototype=M,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",s],["$M",i],["$y",u],["$D",c]].forEach(function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),_.extend=function(t,e){return t.$i||(t(e,y,_),t.$i=!0),_},_.locale=D,_.isDayjs=m,_.unix=function(t){return _(1e3*t)},_.en=$[p],_.Ls=$,_.p={},_},t.exports=r()},tr8R:function(t,e){}});
//# sourceMappingURL=0.093c505745b55c8fe94f.js.map