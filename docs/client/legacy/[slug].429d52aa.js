import{P as t,_ as a,a as s,b as n,c as r,i as e,d as c,S as i,s as o,Q as u,f as l,D as f,e as p,t as v,L as h,k as d,l as m,E as y,g as E,h as P,j as $,m as w,R as D,n as g,F as x,o as I,v as R,w as V,A as b,y as j,G as k}from"./client.5955a400.js";function S(t,a,s,n,r,e,c){try{var i=t[e](c),o=i.value}catch(t){return void s(t)}i.done?a(o):Promise.resolve(o).then(n,r)}function T(t){return function(){var a=this,s=arguments;return new Promise((function(n,r){var e=t.apply(a,s);function c(t){S(e,n,r,c,i,"next",t)}function i(t){S(e,n,r,c,i,"throw",t)}c(void 0)}))}}function U(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=s(t);if(a){var c=s(this).constructor;r=Reflect.construct(e,arguments,c)}else r=e.apply(this,arguments);return n(this,r)}}function A(t){var a,s,n,r,e,c,i,o,S,T,U,A,C,F,G,L,N,O,Q,_,q=t[0].title+"",z=t[0].html+"",B=t[0].lastUpdated+"";return document.title=a=t[0].title,n=new u({props:{title:"Privacy Policy",subtitle:""}}),{c:function(){s=l(),f(n.$$.fragment),r=l(),e=p("section"),c=p("div"),i=p("div"),o=p("div"),S=p("div"),T=v(q),U=v(" Privacy Policy"),A=l(),C=p("div"),G=l(),L=p("div"),N=p("pre"),O=v("The privacy policy for this app was last updated on "),Q=v(B),this.h()},l:function(t){h('[data-svelte="svelte-1uty71u"]',document.head).forEach(d),s=m(t),y(n.$$.fragment,t),r=m(t),e=E(t,"SECTION",{class:!0});var a=P(e);c=E(a,"DIV",{class:!0});var u=P(c);i=E(u,"DIV",{class:!0});var l=P(i);o=E(l,"DIV",{class:!0});var f=P(o);S=E(f,"DIV",{class:!0});var p=P(S);T=$(p,q),U=$(p," Privacy Policy"),p.forEach(d),f.forEach(d),A=m(l),C=E(l,"DIV",{class:!0});var v=P(C);G=m(v),L=E(v,"DIV",{class:!0});var w=P(L);N=E(w,"PRE",{});var D=P(N);O=$(D,"The privacy policy for this app was last updated on "),Q=$(D,B),D.forEach(d),w.forEach(d),v.forEach(d),l.forEach(d),u.forEach(d),a.forEach(d),this.h()},h:function(){w(S,"class","subtitle section-title"),w(o,"class","column is-3"),F=new D(G),w(L,"class","mt-2"),w(C,"class","column is-8"),w(i,"class","columns"),w(c,"class","container"),w(e,"class","section")},m:function(t,a){g(t,s,a),x(n,t,a),g(t,r,a),g(t,e,a),I(e,c),I(c,i),I(i,o),I(o,S),I(S,T),I(S,U),I(i,A),I(i,C),F.m(z,C),I(C,G),I(C,L),I(L,N),I(N,O),I(N,Q),_=!0},p:function(t,s){var n=R(s,1)[0];(!_||1&n)&&a!==(a=t[0].title)&&(document.title=a),(!_||1&n)&&q!==(q=t[0].title+"")&&V(T,q),(!_||1&n)&&z!==(z=t[0].html+"")&&F.p(z),(!_||1&n)&&B!==(B=t[0].lastUpdated+"")&&V(Q,B)},i:function(t){_||(b(n.$$.fragment,t),_=!0)},o:function(t){j(n.$$.fragment,t),_=!1},d:function(t){t&&d(s),k(n,t),t&&d(r),t&&d(e)}}}function C(t){return F.apply(this,arguments)}function F(){return(F=T(t.mark((function a(s){var n,r,e;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.params,t.next=3,this.fetch("privacy-policy/".concat(n.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(e=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{post:e});case 11:this.error(r.status,e.message);case 12:case"end":return t.stop()}}),a,this)})))).apply(this,arguments)}function G(t,a,s){var n=a.post;return t.$$set=function(t){"post"in t&&s(0,n=t.post)},[n]}var L=function(t){a(n,i);var s=U(n);function n(t){var a;return r(this,n),a=s.call(this),e(c(a),t,G,A,o,{post:0}),a}return n}();export default L;export{C as preload};
