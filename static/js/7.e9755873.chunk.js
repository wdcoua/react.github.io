(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{232:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a=function(e){if(!(e&&e.length>0))return"required field"},r=function(e){return function(t){if(!(t.length<=e))return"max length ".concat(e," symbols")}},c=function(e){return function(t){if(!(t.length>=e))return"min length ".concat(e," symbols")}}},233:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return d}));var a=n(2),r=n(240),c=n(0),o=n.n(c),l=n(234),u=n.n(l),i=n(106),s=(n(232),function(e){var t=e.input,n=e.meta,c=n.touched,l=n.error,i=e.elType,s=Object(r.a)(e,["input","meta","elType"]),f=c&&l;return o.a.createElement("div",{className:u.a.formControls+" "+(f&&u.a.error)},o.a.createElement("div",null,o.a.createElement(i,Object(a.a)(Object(a.a)({},t),s))),f&&o.a.createElement("span",null," ",l))}),f=function(e){return o.a.createElement(s,Object.assign({},e,{elType:"textarea"}))},m=function(e){return o.a.createElement(s,Object.assign({},e,{elType:"input"}))},p=function(e){return o.a.createElement(s,Object.assign({},e,{elType:"input",type:"hidden"}))},d=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,component:t,name:n,validate:a},r))," ",c)}},234:function(e,t,n){e.exports={formControls:"FormsControls_formControls__MCv0m",error:"FormsControls_error__9lcue"}},236:function(e,t,n){e.exports=n.p+"static/media/user.d961d73a.png"},239:function(e,t,n){e.exports={captchaDiv:"Login_captchaDiv__36ONs",noCaptcha:"Login_noCaptcha__nLUEK",error:"Login_error__17Wu6",noError:"Login_noError__3IZw_"}},249:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(13),o=(n(239),n(233),n(232),n(17),n(25)),l=function(e){return r.a.createElement("input",{onChange:function(t){console.log(t.target.files[0]),t.target.files.length&&e.updateProfilePhoto(t.target.files[0])},type:"file"})};t.a=Object(c.b)(null,{updateProfilePhoto:o.i})((function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:e.photo,alt:""}),r.a.createElement(l,{updateProfilePhoto:e.updateProfilePhoto}))}))},311:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n(18),l=n(25),u=n(242),i=Object(c.b)()((function(e){var t=e.status,n=e.setStatus,c=Object(a.useState)(!1),o=Object(u.a)(c,2),l=o[0],i=o[1],s=Object(a.useState)(t),f=Object(u.a)(s,2),m=f[0],p=f[1];Object(a.useEffect)((function(){n(t)}),[t]);var d=function(){!1===l?i(!0):(i(!1),n(m))};return r.a.createElement("div",null,l?r.a.createElement("div",null,r.a.createElement("input",{value:m,onChange:function(e){p(e.currentTarget.value)},autoFocus:!0,onBlur:d})):r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:d},""===m?"[click to change]":m)))})),s=n(249),f=n(236),m=n.n(f),p=n(35);t.default=Object(o.d)(Object(c.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getProfile:l.b,getStatus:l.c,setStatus:l.e,updateProfile:l.h}))((function(e){var t=e.profile,n=e.getProfile,c=e.getStatus,o=e.status,l=e.setStatus;return Object(a.useEffect)((function(){n(t.userId),c(t.userId)}),[o]),t&&o?r.a.createElement("div",null,r.a.createElement(s.a,{photo:t.photos.large?t.photos.large:m.a}),r.a.createElement("div",null,r.a.createElement("b",null,t.fullName)),r.a.createElement(i,{status:o,setStatus:l}),r.a.createElement("div",null,'"',t.aboutMe,'"'),r.a.createElement("br",null),"\u041c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b: ",r.a.createElement("br",null),r.a.createElement("div",null,t.contacts.facebook),r.a.createElement("div",null,t.contacts.github),r.a.createElement("div",null,t.contacts.instagram),r.a.createElement("div",null,t.contacts.vk)):r.a.createElement(p.a,null)}))}}]);
//# sourceMappingURL=7.e9755873.chunk.js.map