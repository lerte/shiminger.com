(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{139:function(e,t,s){"use strict";s(25),s(38);var n={props:{questions:Array},data:function(){return{e1:1,timeInterval:10,isSubmitted:!1,questionTypes:{fill:"填空题",single:"单选题",multiple:"多选题",judgment:"判断题"},answerTypes:["A","B","C","D","E","F","G","H","I"],start:new Date,elapsed:0}},computed:{startTime:function(){return"".concat(this.start.getHours(),":").concat(this.start.getMinutes()).replace(/\b(\d)\b/g,"0$1")},elapsedTime:function(){return this.second2Minutes(Math.round(this.elapsed/1e3))},isFinished:function(){var e=!0;return this.questions.forEach(function(t){e=t.userAnswer instanceof Array?e&&Boolean(t.userAnswer.length):e&&Boolean(t.userAnswer)}),e}},methods:{prevStep:function(e){this.e1=e-1},nextStep:function(e){this.e1=e+1},submit:function(){this.isSubmitted=!0,clearInterval(this.timeInterval)},redo:function(){this.isSubmitted=!1,this.e1=1,this.elapsed=0,this.start=new Date,this.doing()},calcElapsed:function(){this.elapsed=(new Date).getTime()-this.start.getTime()},doing:function(){var e=this;this.timeInterval=setInterval(function(){e.calcElapsed()},1e3)},second2Minutes:function(e){return e?[parseInt(e/60/60),parseInt(e/60%60),e%60].join(":").replace(/\b(\d)\b/g,"0$1"):e}},mounted:function(){this.doing()}},i=s(11),r=Object(i.a)(n,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:""}},[s("v-card",{staticClass:"mb-3"},[s("v-card-text",[e._v("\n      开始时间："+e._s(e.startTime)+"    用时："+e._s(e.elapsedTime)+"\n    ")])],1),e._v(" "),e.isSubmitted?s("v-card",{staticClass:"mb-3"},[s("v-card-title",[e._v("\n      参考答案\n    ")]),e._v(" "),s("v-card-text",[s("ul",e._l(e.questions,function(t,n){return s("li",{key:n},[s("p",{staticClass:"subheading primary--text"},[e._v(e._s(t.content))]),e._v(" "),s("p",{staticClass:"info--text"},[e._v("用户答案："+e._s(t.userAnswer))]),e._v(" "),t.answer?s("p",{staticClass:"success--text"},[e._v("正确答案："+e._s(t.answer))]):e._e(),e._v(" "),t.answers?s("p",{staticClass:"success--text"},[e._v("参考答案："+e._s(t.answers))]):e._e()])})),e._v(" "),s("v-btn",{attrs:{color:"info"},on:{click:e.redo}},[e._v("重做")])],1)],1):s("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[s("v-stepper-header",[e._l(e.questions,function(t){return[s("v-stepper-step",{key:t.id+"-step",attrs:{step:t.id,complete:e.e1>t.id,editable:""}}),e._v(" "),t.id!==e.questions.length?s("v-divider",{key:t.id}):e._e()]})],2),e._v(" "),s("v-stepper-items",e._l(e.questions,function(t){return s("v-stepper-content",{key:t.id+"-content",attrs:{step:t.id}},[s("v-card",{staticClass:"mb-5",attrs:{color:"grey lighten-4"}},[s("v-card-title",[s("v-subheader",[e._v("\n              "+e._s(e.questionTypes[t.type])+"\n            ")])],1),e._v(" "),s("v-card-text",[s("p",{staticClass:"subheading primary--text"},[e._v(e._s(t.content))]),e._v(" "),"judgment"!=t.type?s("ul",e._l(t.options,function(t,n){return s("li",{key:n},[e._v("\n                "+e._s(t)+"\n              ")])})):e._e()]),e._v(" "),"judgment"==t.type?s("v-card-actions",[s("v-radio-group",{model:{value:t.userAnswer,callback:function(s){e.$set(t,"userAnswer",s)},expression:"question.userAnswer"}},e._l(t.options,function(e,t){return s("v-radio",{key:t,attrs:{label:e,value:e}})}))],1):e._e(),e._v(" "),"fill"==t.type?s("v-card-actions",[s("v-text-field",{attrs:{label:"请输入答案"},model:{value:t.userAnswer,callback:function(s){e.$set(t,"userAnswer",s)},expression:"question.userAnswer"}})],1):e._e(),e._v(" "),"single"==t.type?s("v-card-actions",[s("v-radio-group",{model:{value:t.userAnswer,callback:function(s){e.$set(t,"userAnswer",s)},expression:"question.userAnswer"}},e._l(t.options,function(t,n){return s("v-radio",{key:n,attrs:{label:""+e.answerTypes[n],value:t}})}))],1):e._e(),e._v(" "),"multiple"==t.type?s("v-card-actions",e._l(t.options,function(n,i){return s("v-checkbox",{key:i,attrs:{label:""+e.answerTypes[i],value:n},model:{value:t.userAnswer,callback:function(s){e.$set(t,"userAnswer",s)},expression:"question.userAnswer"}})})):e._e()],1),e._v(" "),s("v-btn",{attrs:{color:"primary",disabled:1==t.id},on:{click:function(s){e.prevStep(t.id)}}},[e._v("上一题")]),e._v(" "),s("v-btn",{attrs:{color:"primary",disabled:t.id==e.questions.length},on:{click:function(s){e.nextStep(t.id)}}},[e._v("下一题")]),e._v(" "),s("v-btn",{attrs:{color:"info",disabled:!e.isFinished},on:{click:e.submit}},[e._v("交卷")])],1)}))],1)],1)},[],!1,null,null,null);r.options.__file="question.vue";t.a=r.exports},404:function(e,t,s){"use strict";s.r(t);var n={layout:"testing",head:{title:"刘帅"},components:{question:s(139).a},data:function(){return{questions:[{id:1,type:"multiple",content:"店铺列表里面的有哪些类型的店铺？",options:["A. 原厂","B. 代理","C. 经销","D. 寄售"],answers:"A,B,C,D",userAnswer:[]},{id:2,type:"multiple",content:"公司介绍里面的联系我们有哪些项？",options:["A. 电话","B. 传真","C. 手机","D. 邮箱","E. 微信","F. QQ"],answers:"A,B,C,E,F",userAnswer:[]},{id:3,type:"judgment",content:"产品详情页点击联系买家只能看到联系电话",options:["✔","✖"],answer:"✖",userAnswer:null},{id:4,type:"fill",content:"品牌页的品牌里面有哪些内容？",answer:"主营产品、应用领域、品牌介绍、官网地址",userAnswer:null},{id:5,type:"judgment",content:"需要登录才可查看品牌的产品页的规格书",options:["✔","✖"],answer:"✔",userAnswer:null}]}}},i=s(11),r=Object(i.a)(n,function(){var e=this.$createElement;return(this._self._c||e)("question",{attrs:{questions:this.questions}})},[],!1,null,null,null);r.options.__file="4.vue";t.default=r.exports}}]);