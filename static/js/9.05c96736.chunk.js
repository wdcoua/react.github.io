(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[9],{237:function(e,t,n){e.exports=n.p+"static/media/user.d961d73a.png"},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(62);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(a=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(c){r=!0,l=c}finally{try{a||null==o.return||o.return()}finally{if(r)throw l}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},314:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(12),u=n(18),o=n(27),c=n(239),i=Object(l.b)()((function(e){var t=e.status,n=e.setStatus,l=Object(a.useState)(!1),u=Object(c.a)(l,2),o=u[0],i=u[1],s=Object(a.useState)(t),f=Object(c.a)(s,2),m=f[0],p=f[1];Object(a.useEffect)((function(){p(t)}),[t]);var b=function(){!1===o?i(!0):(i(!1),n(m),p(t))};return r.a.createElement("div",null,o?r.a.createElement("div",null,r.a.createElement("input",{value:m,onChange:function(e){p(e.currentTarget.value)},autoFocus:!0,onBlur:b})):r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:b},""===m||null===m?"[click to change]":m)))})),s=function(e){return r.a.createElement("input",{onChange:function(t){console.log(t.target.files[0]),t.target.files.length&&e.updateProfilePhoto(t.target.files[0])},type:"file"})},f=Object(l.b)(null,{updateProfilePhoto:o.i})((function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:e.photo,alt:""}),r.a.createElement(s,{updateProfilePhoto:e.updateProfilePhoto}))})),m=n(237),p=n.n(m),b=n(38);t.default=Object(u.d)(Object(l.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.userID}}),{getProfile:o.b,getStatus:o.c,setStatus:o.e,updateProfile:o.h}))((function(e){var t=e.profile,n=e.getProfile,l=e.getStatus,u=e.status,o=e.setStatus,c=e.userId;return Object(a.useEffect)((function(){n(c),l(c)}),[u]),t?r.a.createElement("div",null,r.a.createElement(f,{photo:t.photos.large?t.photos.large:p.a}),r.a.createElement("div",null,r.a.createElement("b",null,t.fullName)),r.a.createElement(i,{status:u,setStatus:o}),r.a.createElement("div",null,'"',t.aboutMe,'"'),r.a.createElement("br",null),"\u041c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b: ",r.a.createElement("br",null),r.a.createElement("div",null,t.contacts.facebook),r.a.createElement("div",null,t.contacts.github),r.a.createElement("div",null,t.contacts.instagram),r.a.createElement("div",null,t.contacts.vk)):r.a.createElement(b.a,null)}))}}]);
//# sourceMappingURL=9.05c96736.chunk.js.map