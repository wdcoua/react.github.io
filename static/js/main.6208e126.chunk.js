(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{141:function(e,t,n){e.exports=n(231)},143:function(e,t,n){},17:function(e,t,n){"use strict";n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return b})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return O}));var r=n(3),a=n.n(r),u=n(5),c=n(2),o=n(6),i=n(31),s=n(25),l="samurai_project/auth/SET_USER_DATA",f="samurai_project/auth/SET_USER_IMG",p="samurai_project/auth/SET_CAPTCHA_IMG",d="samurai_project/auth/SET_CAPTCHA_ANS",h={userID:null,email:null,login:null,userImg:null,isAuth:!1,capthaImg:null,captchaAnswer:null,loginError:null};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(c.a)(Object(c.a)({},e),t.payload);case f:return Object(c.a)(Object(c.a)({},e),{},{userImg:t.img});case p:return Object(c.a)(Object(c.a)({},e),{},{capthaImg:t.img});case d:return Object(c.a)(Object(c.a)({},e),{},{captchaAnswer:t.ans});default:return e}};var m=function(e,t,n,r,a,u,c){return{type:l,payload:{userID:e,email:t,login:n,isAuth:r,capthaImg:a,captchaAnswer:u,loginError:c}}},b=function(e){return{type:f,img:e}},g=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n,r,u,c,i,l,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.authMe();case 2:if(0!==(n=e.sent).resultCode){e.next=14;break}return r=n.data,u=r.id,c=r.login,i=r.email,t(m(u,i,c,!0,null,null,null)),e.next=8,o.a.getProfile(u);case 8:return l=e.sent,t(Object(s.f)(l.data)),e.next=12,o.a.getStatus(u);case 12:f=e.sent,t(Object(s.g)(f));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logOut();case 2:console.warn("logout2"),t(m(null,null,null,!1,null,null,null));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(e,t,n,r){return function(){var c=Object(u.a)(a.a.mark((function u(c){var s,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.auth(e,t,n,r);case 2:if(s=a.sent,console.log(s),0!==s.resultCode){a.next=9;break}console.log("login +"),c(g()),a.next=15;break;case 9:if(c(Object(i.a)("auth",{_error:s.messages.join("<br/>")})),10!==s.resultCode){a.next=15;break}return a.next=13,o.a.getCaptcha();case 13:l=a.sent,c((u=l.url,{type:p,img:u}));case 15:case"end":return a.stop()}var u}),u)})));return function(e){return c.apply(this,arguments)}}()}},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"j",(function(){return O})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return _})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return x})),n.d(t,"g",(function(){return w})),n.d(t,"d",(function(){return P})),n.d(t,"c",(function(){return y}));var r=n(3),a=n.n(r),u=n(5),c=n(15),o=n(2),i=n(6),s=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),r):e}))},l="samurai_project/users/SET_USERS",f="samurai_project/users/SET_INITIAL",p="samurai_project/users/SET_PAGE_WITH_ME",d="samurai_project/users/SET_TOTAL_USERS",h="samurai_project/users/SET_CURRENT_PAGE",m="samurai_project/users/CHANGE_FETCHING_STATUS",b="samurai_project/users/FOLLOWING_IN_PROGRESS",g={usersList:[],usersPerPage:20,totalUsers:0,currentPage:30,isFetching:!0,followingIsInProgress:[],fake:0,initial:1,pageWithMe:0,myId:11583},j=(t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FAKE":return Object(o.a)(Object(o.a)({},e),{},{fake:e.fake+1});case"samurai_project/users/CHANGE_USER_FOLLOW_STATUS":return Object(o.a)(Object(o.a)({},e),{},{usersList:s(e.usersList,t.user_id,"id",{followed:1===t.followStatus})});case l:return Object(o.a)(Object(o.a)({},e),{},{usersList:Object(c.a)(t.users)});case p:return Object(o.a)(Object(o.a)({},e),{},{pageWithMe:t.pageWithMe});case f:return Object(o.a)(Object(o.a)({},e),{},{initial:t.initial});case d:return Object(o.a)(Object(o.a)({},e),{},{totalUsers:t.total});case h:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case m:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case b:return Object(o.a)(Object(o.a)({},e),{},{followingIsInProgress:t.followingIsInProgress?[].concat(Object(c.a)(e.followingIsInProgress),[t.userId]):e.followingIsInProgress.filter((function(e){return e!==t.userId}))});default:return e}},function(e,t){return{type:"samurai_project/users/CHANGE_USER_FOLLOW_STATUS",user_id:e,followStatus:t}}),O=function(e){return{type:l,users:e}},v=function(e){return{type:p,pageWithMe:e}},_=function(e){return{type:d,total:e}},E=function(e){return{type:h,currentPage:e}},x=function(e){return{type:m,isFetching:e}},w=function(e,t){return{type:b,followingIsInProgress:e,userId:t}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){var n=Object(u.a)(a.a.mark((function n(r){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),0===t?t=1:r(E(t)),n.next=4,i.a.getUsers(e,t);case 4:u=n.sent,r(x(!1)),r(O(u.items)),r(_(u.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(e,t){return function(){var n=Object(u.a)(a.a.mark((function n(r){var u,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r(w(!0,e)),!t){n.next=8;break}return n.next=4,i.a.follow(e);case 4:0===(u=n.sent).resultCode&&(r(j(e,1)),r(w(!1,e)),console.log(u)),n.next=14;break;case 8:return n.next=10,i.a.unfollow(e);case 10:c=n.sent,r(j(e,0)),r(w(!1,e)),console.log(c);case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},225:function(e,t,n){},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),u=(n(13),n(35)),c=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(u.a,null)},a.a.createElement(e,t))}}},231:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);n(143),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(18),c=n(45),o=n(78),i=n(26),s=n(21),l=n(25),f=n(17),p=n(84),d=n(83),h=n(36),m=Object(u.c)({gb:c.b,chat:o.b,examples:i.a,users:s.b,profilePage:l.a,auth:f.b,form:d.a,app:h.a}),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,g=Object(u.e)(m,b(Object(u.a)(p.a)));window.__store__=g;var j=g,O=n(46),v=n.n(O),_=(n(225),n(57)),E=n.n(_),x=n(16),w=function(e){var t=e.href,n=e.text;return a.a.createElement("div",{className:E.a.menu},a.a.createElement(x.b,{to:t,activeClassName:E.a.active},n))},P=function(){return a.a.createElement("nav",null,a.a.createElement(w,{text:"Main",href:"/index"}),a.a.createElement(w,{text:"Examples",href:"/examples"}),a.a.createElement(w,{text:"Guest Book",href:"/gb"}),a.a.createElement(w,{text:"Chat",href:"/chat"}),a.a.createElement(w,{text:"Users",href:"/users"}),a.a.createElement(w,{text:"Profile",href:"/profile"}),a.a.createElement(w,{text:"...",href:"/out/14"}))},y=n(87),T=n.n(y),S=n(7),A=n(13),I=n(89),k=n.n(I),C=function(e){return a.a.createElement("div",null,a.a.createElement("h1",null,"\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u0438 \u043c\u043e\u0457\u0445 \u0440\u043e\u0431\u0456\u0442"),e.examples.map((function(e){return a.a.createElement("div",{key:e.id,className:k.a.example},a.a.createElement("a",{href:e.link,title:e.descr},e.title))})))},L=Object(A.b)((function(e){return{examples:e.examples}}),{getExamples:i.b})((function(e){var t=e.getExamples,n=e.examples;return Object(r.useEffect)((function(){t()}),[]),a.a.createElement(C,{examples:n.examplesList})})),U=n(35),N=n(23),D=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,308))})),M=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,309))})),G=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,306))})),R=Object(r.lazy)((function(){return Promise.all([n.e(8),n.e(7)]).then(n.bind(null,311))})),z=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,310))})),H=Object(r.lazy)((function(){return n.e(10).then(n.bind(null,307))})),W=function(){return a.a.createElement("div",{className:T.a.main},a.a.createElement(S.b,{path:"/examples",render:function(){return a.a.createElement(L,null)}}),a.a.createElement(S.b,{path:"/index",render:function(){return a.a.createElement(L,null)}}),a.a.createElement(S.b,{path:"/gb",render:Object(N.a)(M)}),a.a.createElement(S.b,{path:"/chat",render:Object(N.a)(D)}),a.a.createElement(S.b,{path:"/users",render:Object(N.a)(H)}),a.a.createElement(S.b,{path:"/profile/:userID?",render:Object(N.a)(z)}),a.a.createElement(S.b,{path:"/myprofile",render:Object(N.a)(R)}),a.a.createElement(S.b,{path:"/login",render:Object(N.a)(G)}),a.a.createElement(S.b,{path:"/reg",render:Object(N.a)(G)}))},F=n(91),B=n.n(F),X=function(){return a.a.createElement("footer",null,a.a.createElement("div",{className:B.a.copy},"\xa9 wd",a.a.createElement("br",null),"- 2020 -"))},J=n(47),K=n.n(J),Y=n(92),V=n.n(Y),$=function(e){var t=e.logOut,n=e.auth;return a.a.createElement("header",null,a.a.createElement("img",{src:"https://wd.co.ua/pic/wd_logo_sh_transparent.png",className:K.a.logo,alt:"alt"}),a.a.createElement("div",{className:K.a.auth},n.isAuth?a.a.createElement("div",null,a.a.createElement(x.b,{to:"/myprofile"},n.login),a.a.createElement("img",{src:V.a,alt:"logout",title:"\u0432\u0438\u0439\u0442\u0438",className:K.a.logout,onClick:t})):a.a.createElement("div",null,a.a.createElement(x.b,{to:"/reg"},a.a.createElement("button",{id:"reg"},"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"))," ",a.a.createElement(x.b,{to:"/login"},a.a.createElement("button",{id:"enter"},"\u0412\u0445\u0456\u0434")))))},Z=Object(A.b)((function(e){return{auth:e.auth}}),{setUserAuthData:f.e,setUserAuthImg:f.f,checkAuthorization:f.a,logOut:f.c})((function(e){return a.a.createElement($,e)})),q=Object(u.d)(S.f,Object(A.b)((function(e){return{initialized:e.app.initialized,initial:e.users.initial,pageWithMe:e.users.pageWithMe,myId:e.users.myId,total:e.users.totalUsers,usersPerPage:e.users.usersPerPage,currentPage:e.users.currentPage,userid:e.auth.userID}}),{initializeApp:h.b,getUsers:s.d,setPageWithMe:s.h}))((function(e){var t=e.initializeApp,n=e.initialized,u=e.total,c=e.usersPerPage,o=e.getUsers,i=(e.setPageWithMe,e.userid);return Object(r.useEffect)((function(){if(0!==u){var e=1;11583===i?e=Math.ceil((u-6590)/c):1079===i&&(e=Math.ceil((u-76)/c)),o(c,e)}else t()}),[u]),n?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(Z,null),a.a.createElement(P,null),a.a.createElement(W,null),a.a.createElement(X,null)):a.a.createElement(U.a,null)})),Q=function(){return a.a.createElement(x.a,null,a.a.createElement(A.a,{store:j},a.a.createElement(q,null)))};v.a.render(a.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,n){"use strict";n.d(t,"f",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"g",(function(){return b})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return j})),n.d(t,"i",(function(){return O})),n.d(t,"e",(function(){return v})),n.d(t,"h",(function(){return _}));var r=n(3),a=n.n(r),u=n(5),c=n(2),o=n(6),i=n(31),s=(n(17),n(26),n(36),"samurai_project/profile/SET_USER_PROFILE"),l="samurai_project/profile/SET_USER_STATUS",f="samurai_project/auth/UPD_USER_PHOTOS",p="samurai_project/auth/SET_PROFILE_UPDATED",d={profile:null,status:"",profileUpdatedToggle:!1};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case l:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case f:return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photos})});case p:return Object(c.a)(Object(c.a)({},e),{},{profileUpdatedToggle:t.status});default:return e}};var h=function(e){return{type:s,profile:e}},m=function(e){return{type:p,status:e}},b=function(e){return{type:l,status:e}},g=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getProfile(e||11583);case 2:r=t.sent,n(h(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getStatus(e||11583);case 2:r=t.sent,n(b(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.warn(e),t.next=3,o.a.updateProfilePhoto(e);case 3:r=t.sent,console.warn(r),n((a=r.data.photos,{type:f,photos:a}));case 6:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("setStatus - "+e),t.next=3,o.a.setStatus(e);case 3:t.sent,n(b(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n,r){var u,c,s,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=r().auth.userID,t.next=3,o.a.updateProfile(e);case 3:c=t.sent,console.log(c),0===c.resultCode?(console.log("updateProfile +"),n(g(u)),n(m(!0))):(s=function(e){return e.charAt(0).toLowerCase()+e.slice(1)},l=function(e){var t={};return e.map((function(e){var n=e.match(/(.*)\((.*)\)/i);if(null!==n&&n[0].length>0){var r=n[2].match(/\-\>(.*)/);if(null!==r&&r[1].length>0){var a=s(r[1]);t[a]=n[1]}else{var u=s(n[2]);t[u]=n[1]}}})),t}(c.messages),n(Object(i.a)("profileEdit",l)));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return d}));var r=n(3),a=n.n(r),u=n(5),c=n(15),o=n(2),i=n(6),s={examplesList:[]},l="samurai_project/examples/SET_EXAMPLES",f="samurai_project/examples/DEL_EXAMPLE",p="samurai_project/examples/ADD_EXAMPLE";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{examplesList:Object(c.a)(t.examples)});case f:return Object(o.a)(Object(o.a)({},e),{},{examplesList:e.examplesList.filter((function(e){return e.id!==t.id}))});case p:return Object(o.a)(Object(o.a)({},e),{},{examplesList:[].concat(Object(c.a)(e.examplesList),[t.example])});default:return e}};var d=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getExamples();case 2:n=e.sent,t((r=n.items,{type:l,examples:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()}},30:function(e,t,n){e.exports=n.p+"static/media/kotigoroshko.70d84a67.jpg"},35:function(e,t,n){"use strict";var r=n(0),a=n.n(r),u=n(13),c=n(90),o=n.n(c);t.a=Object(u.b)()((function(){return a.a.createElement("div",null,a.a.createElement("img",{src:o.a,alt:"loading...",style:{width:"150px"}}))}))},36:function(e,t,n){"use strict";n.d(t,"b",(function(){return h}));var r=n(3),a=n.n(r),u=n(5),c=n(2),o=n(17),i=n(45),s=n(21),l=n(26),f=(n(6),n(25)),p="samurai_project/app/SET_INITIALIZED",d={initialized:!1};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(c.a)(Object(c.a)({},e),{},{initialized:!0});default:return e}};var h=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n,r,u,c,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(Object(o.a)()),r=t(Object(i.c)()),u=t(Object(s.d)()),c=t(Object(l.b)()),d=t(Object(f.b)()),e.next=7,Promise.all([n,r,u,c,d]).then((function(){t({type:p})}));case 7:e.sent;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return b}));var r=n(3),a=n.n(r),u=n(5),c=n(15),o=n(2),i=n(6),s="samurai_project/gb/NEW_GB_POST_CHANGE",l="samurai_project/gb/ADD_GB_POST",f="samurai_project/gb/SET_GB_POSTS",p="samurai_project/gb/DEL_GB_POST",d={gbPosts:[],newPostText:"hi how are u?))"};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n=new Date,r=parseInt(n.getTime()/1e3),a={answer:"",answer_time:"0",email:"ddddd@mail.com",id:e.gbPosts.length+1,ip:"",login:"\u041c\u0430\u0440\u0456\u0447\u043a\u0430",status:"1",text:t.text,time:r,ua:""};return Object(o.a)(Object(o.a)({},e),{},{gbPosts:[].concat(Object(c.a)(e.gbPosts),[a]),newPostText:""});case s:return Object(o.a)(Object(o.a)({},e),{},{newPostText:t.changedText});case f:return Object(o.a)(Object(o.a)({},e),{},{gbPosts:Object(c.a)(t.posts)});case p:return Object(o.a)(Object(o.a)({},e),{},{gbPosts:e.gbPosts.filter((function(e){return e.id!==t.post_id}))});default:return e}};var h=function(e){return{type:l,text:e}},m=function(e){return{type:s,changedText:e}},b=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getGbPosts();case 2:n=e.sent,t((r=n.items,{type:f,posts:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()}},47:function(e,t,n){e.exports={logo:"Header_logo__3_SJs",auth:"Header_auth__22ubL",logout:"Header_logout__1UGPC"}},55:function(e,t,n){e.exports=n.p+"static/media/zloy_admin.565b4950.png"},57:function(e,t,n){e.exports={menu:"Menu_menu__rbGTo",active:"Menu_active__1zJuV"}},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(3),a=n.n(r),u=n(5),c=n(54),o=(n(21),c.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c5115442-0621-432c-8b99-a8efe085eda6"}})),i=c.create({withCredentials:!0,baseURL:"https://wd.co.ua/api.php",headers:{"API-KEY":"ada3692f-cdc4-4c82-9079-5847319d88fc"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return o.get("users/?count="+e+"&page="+t).then((function(e){return e.data}))},follow:function(e){return o.post("follow/"+e).then((function(e){return e.data}))},unfollow:function(e){return o.delete("follow/"+e).then((function(e){return e.data}))},authMe:function(){return Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("auth/me");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},getProfile:function(e){return o.get("profile/"+e).then((function(e){return e}))},getStatus:function(e){return o.get("profile/status/"+e).then((function(e){return e.data}))},setStatus:function(e){return o.put("profile/status/",{status:e}).then((function(e){return e.data}))},updateProfile:function(e){return o.put("profile",e).then((function(e){return e.data}))},updateProfilePhoto:function(e){return Object(u.a)(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("image",e),t.next=4,o.put("profile/photo",n,{headers:{"Content-Type":"multipart/form-data"}});case 4:return r=t.sent,t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})))()},auth:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return console.log(e,t,n,r),o.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logOut:function(){return console.log("logout1"),o.delete("auth/login").then((function(e){return console.log("logout"),e.data}))},getCaptcha:function(){return o.get("security/get-captcha-url").then((function(e){return e.data}))},getExamples:function(){return i.get("?action=get_examples").then((function(e){return e.data}))},getGbPosts:function(){return i.get("?action=get_gb_posts").then((function(e){return e.data}))}}},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return h}));var r=n(15),a=n(2),u=n(30),c=n.n(u),o=n(55),i=n.n(o),s="samurai_project/chat/ADD_CHAT_POST",l="samurai_project/chat/DEL_CHAT_POST",f="samurai_project/chat/NEW_CHAT_POST_CHANGE",p={chatPosts:[{id:1,author:"\u041a\u043e\u0442\u0438\u0433\u043e\u0440\u043e\u0448\u043a\u043e",authorAva:c.a,text:"\u041f\u0440\u0438\u0432\u0456\u0442, \u0442\u0438 \u0442\u0443\u0442?",date:"15:25 17-08-2020"},{id:2,author:"Admin",authorAva:i.a,text:"\u041f\u0440\u0438\u0432\u0456\u0442, \u0442\u0430\u043a",date:"15:26 17-08-2020"},{id:3,author:"\u041a\u043e\u0442\u0438\u0433\u043e\u0440\u043e\u0448\u043a\u043e",authorAva:c.a,text:"\u0430 \u0442\u0438 \u043c\u043e\u0436\u0435\u0448 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u043c\u0435\u043d\u0456 \u0441\u0430\u0439\u0442 \u0432\u0456\u0437\u0438\u0442\u043a\u0443?",date:"15:27 17-08-2020"},{id:4,author:"\u041a\u043e\u0442\u0438\u0433\u043e\u0440\u043e\u0448\u043a\u043e",authorAva:c.a,text:"\u0456 \u0444\u043e\u0440\u0443\u043c... \u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0442\u043e \u0431\u0443\u0434\u0435 \u043a\u043e\u0448\u0442\u0443\u0432\u0430\u0442\u0438?",date:"15:28 17-08-2020"},{id:5,author:"Admin",authorAva:i.a,text:"$17 000",date:"15:29 17-08-2020"},{id:6,author:"\u041a\u043e\u0442\u0438\u0433\u043e\u0440\u043e\u0448\u043a\u043e",authorAva:c.a,text:"\u041d\u043e\u0440\u043c, \u0434\u0430\u0432\u0430\u0439 \u0440\u0435\u043a\u0432\u0456\u0437\u0438\u0442\u0438, \u0441\u043a\u0438\u043d\u0443 \u0430\u0432\u0430\u043d\u0441 ;)",date:"15:33 17-08-2020"}],newChatPostText:"this is Sparta!"};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:e.chatPosts.length+1,author:"\u041a\u043e\u0442\u0438\u0433\u043e\u0440\u043e\u0448\u043a\u043e",authorAva:c.a,text:t.text,date:"15:25 17-09-2020"};return Object(a.a)(Object(a.a)({},e),{},{chatPosts:[].concat(Object(r.a)(e.chatPosts),[n]),newChatPostText:""});case f:return Object(a.a)(Object(a.a)({},e),{},{newChatPostText:t.changedText});case l:return Object(a.a)(Object(a.a)({},e),{},{chatPosts:e.chatPosts.filter((function(e){return e.id!==t.id}))});default:return e}};var d=function(e){return{type:s,text:e}},h=function(e){return{type:f,changedText:e}}},87:function(e,t,n){e.exports={main:"Main_main__3de2d"}},89:function(e,t,n){e.exports={example:"Example_example__3UoYE"}},90:function(e,t,n){e.exports=n.p+"static/media/rings.5fe3cf7c.svg"},91:function(e,t,n){e.exports={copy:"Footer_copy__33kv9"}},92:function(e,t,n){e.exports=n.p+"static/media/logout.264a22fb.png"}},[[141,2,3]]]);
//# sourceMappingURL=main.6208e126.chunk.js.map