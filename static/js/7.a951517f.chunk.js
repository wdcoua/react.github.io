(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{222:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c}));const n=e=>{if(!(e&&e.length>0))return"required field"},r=e=>t=>{if(!(t.length<=e))return"max length ".concat(e," symbols")},c=e=>t=>{if(!(t.length>=e))return"min length ".concat(e," symbols")}},223:function(e,t,a){"use strict";a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return h}));var n=a(0),r=a.n(n),c=a(224),l=a.n(c),o=a(105);a(222);const i=e=>{let{input:t,meta:{touched:a,error:n},elType:c,...o}=e,i=a&&n;return r.a.createElement("div",{className:l.a.formControls+" "+(i&&l.a.error)},r.a.createElement("div",null,r.a.createElement(c,{...t,...o})),i&&r.a.createElement("span",null," ",n))},m=e=>r.a.createElement(i,Object.assign({},e,{elType:"textarea"})),u=e=>r.a.createElement(i,Object.assign({},e,{elType:"input"})),s=e=>r.a.createElement(i,Object.assign({},e,{elType:"input",type:"hidden"})),h=function(e,t,a,n){let c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return r.a.createElement("div",null,r.a.createElement(o.a,Object.assign({placeholder:e,component:t,name:a,validate:n},c))," ",l)}},224:function(e,t,a){e.exports={formControls:"FormsControls_formControls__MCv0m",error:"FormsControls_error__9lcue"}},297:function(e,t,a){e.exports={captchaDiv:"Login_captchaDiv__36ONs",noCaptcha:"Login_noCaptcha__nLUEK",error:"Login_error__17Wu6",noError:"Login_noError__3IZw_"}},301:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(106),l=a(10),o=a(16),i=a(5),m=a(20),u=a(223),s=a(222),h=a(297),b=a.n(h);const p=e=>r.a.createElement("div",null,r.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u044f"),r.a.createElement(g,Object.assign({onSubmit:t=>{let{email:a,pass:n,rememberMe:c}=t;if(!1!==e.auth.isAuth)return r.a.createElement(i.a,{to:"/index"});e.login(a,n,c)}},e)),r.a.createElement("br",null),r.a.createElement(f,Object.assign({onSubmit:t=>{let{email2:a,pass2:n,rememberMe2:c}=t;if(!1!==e.auth.isAuth)return r.a.createElement(i.a,{to:"/index"});e.login(a,n,c)}},e))),d=Object(s.a)(50),E=Object(s.b)(2),g=Object(c.a)({form:"auth"})(e=>{let{auth:t,handleSubmit:a,error:n,setCaptchaAnswer:c}=e;const l=e=>{"captcha"===e.target.name&&c(e.target.value)};return!1===t.isAuth?r.a.createElement("form",{onSubmit:a,onChange:l},r.a.createElement("div",{className:(n?"":b.a.noError)+" "+b.a.error},n),Object(u.d)("email",u.b,"email",[s.c,d,E],{value:"test"}),Object(u.d)("pass",u.b,"pass",[s.c,d,E],{type:"password"}),r.a.createElement("div",{className:b.a.captchaDiv+" "+(t.capthaImg?"":b.a.noCaptcha)},r.a.createElement("div",null,r.a.createElement("img",{alt:"captcha",src:t.capthaImg?t.capthaImg:""})),Object(u.d)("enter captcha",u.b,"captcha",t.capthaImg?[s.c,d,E]:[])),Object(u.d)(null,u.b,"rememberMe",[],{type:"checkbox",checked:"checked"},"Remember me"),r.a.createElement("div",null,r.a.createElement("button",null,"Log in"))):r.a.createElement(i.a,{to:"/index"})}),f=Object(c.a)({form:"auth2"})(e=>{let{auth:t,handleSubmit:a,error:n}=e;return!1===t.isAuth?r.a.createElement("form",{onSubmit:a},r.a.createElement("div",{className:(n?"":b.a.noError)+" "+b.a.error},n),Object(u.d)(null,u.a,"email2",[]),Object(u.d)(null,u.a,"pass2",[]),Object(u.d)(null,u.a,"rememberMe2",[]),r.a.createElement("div",null,r.a.createElement("button",null,"Log in for test"))):r.a.createElement(i.a,{to:"/index"})});t.default=Object(m.d)(Object(l.b)(e=>{let{auth:t}=e;return{auth:t,initialValues:{email2:"wovo4ka2010@gmail.com",pass2:"3AtGqkmDkKfmX6J",rememberMe2:!0}}},{login:o.d,checkAuthorization:o.a,setCaptchaAnswer:o.e}))(e=>r.a.createElement(p,e))}}]);
//# sourceMappingURL=7.a951517f.chunk.js.map