import{P as t,_ as n,a,b as r,c as s,i as e,d as c,S as o,s as i,f as u,D as f,e as l,t as p,J as h,k as v,l as d,E as m,g as y,h as P,j as $,m as w,Q as E,n as g,F as x,o as b,v as D,w as R,A as j,y as I,G as k}from"./client.bc8555b8.js";import{C}from"./CommonHero.efc6d494.js";function S(t,n,a,r,s,e,c){try{var o=t[e](c),i=o.value}catch(t){return void a(t)}o.done?n(i):Promise.resolve(i).then(r,s)}function T(t){return function(){var n=this,a=arguments;return new Promise((function(r,s){var e=t.apply(n,a);function c(t){S(e,r,s,c,o,"next",t)}function o(t){S(e,r,s,c,o,"throw",t)}c(void 0)}))}}function V(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,e=a(t);if(n){var c=a(this).constructor;s=Reflect.construct(e,arguments,c)}else s=e.apply(this,arguments);return r(this,s)}}function U(t){var n,a,r,s,e,c,o,i,S,T,V,U,A,F,G,H,J,N=t[0].title+"",O=t[0].html+"",Q=t[0].lastUpdated+"";return document.title=n=t[0].title,r=new C({props:{title:"Privacy Policy",subtitle:""}}),{c:function(){a=u(),f(r.$$.fragment),s=u(),e=l("section"),c=l("div"),o=l("div"),i=p(N),S=p(" Privacy Policy"),T=u(),U=u(),A=l("div"),F=l("pre"),G=p("The privacy policy for this app was last updated on "),H=p(Q),this.h()},l:function(t){h('[data-svelte="svelte-1uty71u"]',document.head).forEach(v),a=d(t),m(r.$$.fragment,t),s=d(t),e=y(t,"SECTION",{class:!0});var n=P(e);c=y(n,"DIV",{class:!0});var u=P(c);o=y(u,"DIV",{class:!0});var f=P(o);i=$(f,N),S=$(f," Privacy Policy"),f.forEach(v),T=d(u),U=d(u),A=y(u,"DIV",{class:!0});var l=P(A);F=y(l,"PRE",{});var p=P(F);G=$(p,"The privacy policy for this app was last updated on "),H=$(p,Q),p.forEach(v),l.forEach(v),u.forEach(v),n.forEach(v),this.h()},h:function(){w(o,"class","subtitle section-title"),V=new E(U),w(A,"class","mt-2"),w(c,"class","container"),w(e,"class","section")},m:function(t,n){g(t,a,n),x(r,t,n),g(t,s,n),g(t,e,n),b(e,c),b(c,o),b(o,i),b(o,S),b(c,T),V.m(O,c),b(c,U),b(c,A),b(A,F),b(F,G),b(F,H),J=!0},p:function(t,a){var r=D(a,1)[0];(!J||1&r)&&n!==(n=t[0].title)&&(document.title=n),(!J||1&r)&&N!==(N=t[0].title+"")&&R(i,N),(!J||1&r)&&O!==(O=t[0].html+"")&&V.p(O),(!J||1&r)&&Q!==(Q=t[0].lastUpdated+"")&&R(H,Q)},i:function(t){J||(j(r.$$.fragment,t),J=!0)},o:function(t){I(r.$$.fragment,t),J=!1},d:function(t){t&&v(a),k(r,t),t&&v(s),t&&v(e)}}}function A(t){return F.apply(this,arguments)}function F(){return(F=T(t.mark((function n(a){var r,s,e;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.params,t.next=3,this.fetch("privacy-policy/".concat(r.slug,".json"));case 3:return s=t.sent,t.next=6,s.json();case 6:if(e=t.sent,200!==s.status){t.next=11;break}return t.abrupt("return",{post:e});case 11:this.error(s.status,e.message);case 12:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}function G(t,n,a){var r=n.post;return t.$$set=function(t){"post"in t&&a(0,r=t.post)},[r]}var H=function(t){n(r,o);var a=V(r);function r(t){var n;return s(this,r),n=a.call(this),e(c(n),t,G,U,i,{post:0}),n}return r}();export default H;export{A as preload};
