(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[9],{226:function(e,t,a){e.exports=a.p+"static/media/user.d961d73a.png"},305:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(10),u=a(20),c=a(23);var o=Object(r.b)()(e=>{let{status:t,setStatus:a}=e,[r,u]=Object(l.useState)(!1),[c,o]=Object(l.useState)(t);Object(l.useEffect)(()=>{o(t)},[t]);const s=()=>{!1===r?u(!0):(u(!1),a(c),o(t))};return n.a.createElement("div",null,r?n.a.createElement("div",null,n.a.createElement("input",{value:c,onChange:e=>{o(e.currentTarget.value)},autoFocus:!0,onBlur:s})):n.a.createElement("div",null,n.a.createElement("span",{onDoubleClick:s},""===c||null===c?"[click to change]":c)))});const s=e=>n.a.createElement("input",{onChange:t=>{console.log(t.target.files[0]),t.target.files.length&&e.updateProfilePhoto(t.target.files[0])},type:"file"});var i=Object(r.b)(null,{updateProfilePhoto:c.i})(e=>n.a.createElement("div",null,n.a.createElement("img",{src:e.photo,alt:""}),n.a.createElement(s,{updateProfilePhoto:e.updateProfilePhoto}))),p=a(226),m=a.n(p),f=a(33);t.default=Object(u.d)(Object(r.b)(e=>({profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.userID}),{getProfile:c.b,getStatus:c.c,setStatus:c.e,updateProfile:c.h}))(e=>{let{profile:t,getProfile:a,getStatus:r,status:u,setStatus:c,userId:s}=e;return Object(l.useEffect)(()=>{a(s),r(s)},[u]),t?n.a.createElement("div",null,n.a.createElement(i,{photo:t.photos.large?t.photos.large:m.a}),n.a.createElement("div",null,n.a.createElement("b",null,t.fullName)),n.a.createElement(o,{status:u,setStatus:c}),n.a.createElement("div",null,'"',t.aboutMe,'"'),n.a.createElement("br",null),"\u041c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b: ",n.a.createElement("br",null),n.a.createElement("div",null,t.contacts.facebook),n.a.createElement("div",null,t.contacts.github),n.a.createElement("div",null,t.contacts.instagram),n.a.createElement("div",null,t.contacts.vk)):n.a.createElement(f.a,null)})}}]);
//# sourceMappingURL=9.6d32a257.chunk.js.map