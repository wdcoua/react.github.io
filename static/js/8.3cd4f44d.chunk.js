(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[8],{230:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a=function(e){if(!(e&&e.length>0))return"required field"},r=function(e){return function(t){if(!(t.length<=e))return"max length ".concat(e," symbols")}},c=function(e){return function(t){if(!(t.length>=e))return"min length ".concat(e," symbols")}}},231:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return b})),n.d(t,"e",(function(){return f}));var a=n(2),r=n(238),c=n(0),l=n.n(c),o=n(232),u=n.n(o),i=n(112),m=(n(230),function(e){var t=e.input,n=e.meta,c=n.touched,o=n.error,i=e.elType,m=Object(r.a)(e,["input","meta","elType"]),s=c&&o;return l.a.createElement("div",{className:u.a.formControls+" "+(s&&u.a.error)},l.a.createElement("div",null,l.a.createElement(i,Object(a.a)(Object(a.a)({},t),m))),s&&l.a.createElement("span",null," ",o))}),s=function(e){return l.a.createElement(m,Object.assign({},e,{elType:"textarea"}))},p=function(e){return l.a.createElement(m,Object.assign({},e,{elType:"input"}))},h=function(e){return l.a.createElement(m,Object.assign({},e,{elType:"input",type:"hidden"}))},b=function(e){return l.a.createElement(m,Object.assign({},e,{elType:"input",type:"file"}))},f=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return l.a.createElement("div",null,l.a.createElement(i.a,Object.assign({placeholder:e,component:t,name:n,validate:a},r))," ",c)}},232:function(e,t,n){e.exports={formControls:"FormsControls_formControls__MCv0m",error:"FormsControls_error__9lcue"}},236:function(e,t,n){e.exports={captchaDiv:"Login_captchaDiv__36ONs",noCaptcha:"Login_noCaptcha__nLUEK",error:"Login_error__17Wu6",noError:"Login_noError__3IZw_"}},303:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(113),l=n(13),o=n(19),u=n(7),i=n(17),m=n(231),s=n(230),p=n(236),h=n.n(p),b=function(e){var t=function(t){var n=t.email,a=t.pass,c=t.rememberMe,l=t.captcha;if(!1!==e.auth.isAuth)return r.a.createElement(u.a,{to:"/index"});e.login(n,a,c,l)};return r.a.createElement("div",null,r.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u044f"),r.a.createElement(E,Object.assign({onSubmit:t},e)),r.a.createElement("br",null),r.a.createElement(g,Object.assign({onSubmit:t},e)))},f=Object(s.a)(50),d=Object(s.b)(2),E=Object(c.a)({form:"auth"})((function(e){var t=e.auth,n=e.handleSubmit,a=e.error;return!1===t.isAuth?r.a.createElement("form",{onSubmit:n},r.a.createElement("div",{className:(a?"":h.a.noError)+" "+h.a.error},a),Object(m.e)("email",m.c,"email",[s.c,f,d]),Object(m.e)("pass",m.c,"pass",[s.c,f,d],{type:"password"}),r.a.createElement("div",{className:h.a.captchaDiv+" "+(t.capthaImg?"":h.a.noCaptcha)},r.a.createElement("div",null,r.a.createElement("img",{alt:"captcha",src:t.capthaImg?t.capthaImg:""})),Object(m.e)("cAp7cH4",m.c,"captcha",t.capthaImg?[s.c,f,d]:[])),Object(m.e)(null,m.c,"rememberMe",[],{type:"checkbox",checked:"checked"},"Remember me"),r.a.createElement("div",null,r.a.createElement("button",null,"Log in"))):r.a.createElement(u.a,{to:"/index"})})),g=Object(c.a)({form:"auth2"})((function(e){var t=e.auth,n=e.handleSubmit,a=e.error;return!1===t.isAuth?r.a.createElement("form",{onSubmit:n},r.a.createElement("div",{className:(a?"":h.a.noError)+" "+h.a.error},a),Object(m.e)(null,m.b,"email",[],{value:"free@samuraijs.com"}),Object(m.e)(null,m.b,"pass",[],{value:"free"}),r.a.createElement("div",{className:h.a.captchaDiv+" "+(t.capthaImg?"":h.a.noCaptcha)},r.a.createElement("div",null,r.a.createElement("img",{alt:"captcha",src:t.capthaImg?t.capthaImg:""})),Object(m.e)("cAp7cH4",m.c,"captcha",t.capthaImg?[s.c,f,d]:[])),Object(m.e)(null,m.b,"rememberMe",[],{value:!0}),r.a.createElement("div",null,r.a.createElement("button",null,"Log in for test"))):r.a.createElement(u.a,{to:"/index"})}));t.default=Object(i.d)(Object(l.b)((function(e){return{auth:e.auth}}),{login:o.d,checkAuthorization:o.a}))((function(e){return r.a.createElement(b,e)}))}}]);
//# sourceMappingURL=8.3cd4f44d.chunk.js.map