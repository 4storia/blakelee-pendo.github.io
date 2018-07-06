webpackJsonp([7],{HuGg:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return a});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("RwvListErrors",{attrs:{errors:t.errors}}),t._v(" "),r("form",{on:{submit:function(e){e.preventDefault(),t.onPublish(t.article.slug,t.article)}}},[r("fieldset",{attrs:{disabled:t.inProgress}},[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title"},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?"},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)"},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.tagInput,expression:"tagInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags"},domProps:{value:t.tagInput},on:{keypress:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault(),t.addTag(t.tagInput)},input:function(e){e.target.composing||(t.tagInput=e.target.value)}}}),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.article.tagList,function(e,n){return r("span",{key:e+n,staticClass:"tag-default tag-pill"},[r("i",{staticClass:"ion-close-round",on:{click:function(r){t.removeTag(e)}}}),t._v("\n              "+t._s(e)+"\n            ")])}))])]),t._v(" "),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{disabled:t.inProgress,type:"submit"}},[t._v("\n            Publish Article\n          ")])])],1)])])])},a=[]},ORke:function(t,e,r){"use strict";function n(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(a,s){try{var i=e[a](s),o=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(o).then(function(t){n("next",t)},function(t){n("throw",t)});t(o)}return n("next")})}}var a=r("NYxO"),s=r("IcnI"),i=r("akYR"),o=r("lHQJ"),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.a={name:"RwvArticleEdit",components:{RwvListErrors:i.a},props:{previousArticle:{type:Object,required:!1}},beforeRouteUpdate:function(){function t(t,r,n){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(e,r,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.dispatch(o.p);case 2:return t.abrupt("return",n());case 3:case"end":return t.stop()}},t,this)}));return t}(),beforeRouteEnter:function(){function t(t,r,n){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(e,r,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.dispatch(o.p);case 2:if(void 0===e.params.slug){t.next=5;break}return t.next=5,s.a.dispatch(o.e,e.params.slug,e.params.previousArticle);case 5:return t.abrupt("return",n());case 6:case"end":return t.stop()}},t,this)}));return t}(),beforeRouteLeave:function(){function t(t,r,n){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(e,r,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.dispatch(o.p);case 2:n();case 3:case"end":return t.stop()}},t,this)}));return t}(),data:function(){return{tagInput:null,inProgress:!1,errors:{}}},computed:u({},r.i(a.a)(["article"])),methods:{onPublish:function(t,e){var r=this,n=t?o.m:o.k;this.inProgress=!0,this.$store.dispatch(n).then(function(t){var e=t.data;r.inProgress=!1,r.$router.push({name:"article",params:{slug:e.article.slug}})}).catch(function(t){var e=t.response;r.inProgress=!1,r.errors=e.data.errors})},removeTag:function(t){this.$store.dispatch(o.o,t)},addTag:function(t){this.$store.dispatch(o.n,t),this.tagInput=null}}}},Yvkj:function(t,e,r){"use strict";e.a={name:"RwvListErorrs",props:{errors:{type:Object,required:!0}}}},akYR:function(t,e,r){"use strict";var n=r("Yvkj"),a=r("gaBa"),s=r("XyMi"),i=r.i(s.a)(n.a,a.a,a.b,!1,null,null,null);e.a=i.exports},gaBa:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return a});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"error-messages"},t._l(t.errors,function(e,n){return r("li",{key:"key"},[t._v("\n    "+t._s(n)+"\n    "),t._l(e,function(e){return r("span",[t._v(t._s(e))])})],2)}))},a=[]},tFGQ:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("ORke"),a=r("HuGg"),s=r("XyMi"),i=r.i(s.a)(n.a,a.a,a.b,!1,null,null,null);e.default=i.exports}});
//# sourceMappingURL=7.3835bb3b0a86c1fa3393.js.map