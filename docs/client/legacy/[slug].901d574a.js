import{O as t,_ as a,a as s,b as n,c as r,i as c,d as e,S as i,s as o,P as u,f as l,D as f,e as p,t as v,J as h,k as d,l as y,E as m,g as P,h as E,j as $,m as g,Q as w,n as D,F as x,o as I,v as b,w as R,A as V,y as j,G as k}from"./client.57d21176.js";function S(t,a,s,n,r,c,e){try{var i=t[c](e),o=i.value}catch(t){return void s(t)}i.done?a(o):Promise.resolve(o).then(n,r)}function T(t){return function(){var a=this,s=arguments;return new Promise((function(n,r){var c=t.apply(a,s);function e(t){S(c,n,r,e,i,"next",t)}function i(t){S(c,n,r,e,i,"throw",t)}e(void 0)}))}}function O(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,c=s(t);if(a){var e=s(this).constructor;r=Reflect.construct(c,arguments,e)}else r=c.apply(this,arguments);return n(this,r)}}function U(t){var a,s,n,r,c,e,i,o,S,T,O,U,q,A,C,F,G,J,N,Q,_=t[0].title+"",z=t[0].html+"",B=t[0].lastUpdated+"";return document.title=a="Privacy Policy - "+t[0].title,n=new u({props:{title:"Privacy Policy",subtitle:""}}),{c:function(){s=l(),f(n.$$.fragment),r=l(),c=p("section"),e=p("div"),i=p("div"),o=p("div"),S=p("div"),T=v(_),O=v(" Privacy Policy"),U=l(),q=p("div"),C=l(),F=p("div"),G=p("pre"),J=v("The privacy policy for this app was last updated on "),N=v(B),this.h()},l:function(t){h('[data-svelte="svelte-1gnrqmb"]',document.head).forEach(d),s=y(t),m(n.$$.fragment,t),r=y(t),c=P(t,"SECTION",{class:!0});var a=E(c);e=P(a,"DIV",{class:!0});var u=E(e);i=P(u,"DIV",{class:!0});var l=E(i);o=P(l,"DIV",{class:!0});var f=E(o);S=P(f,"DIV",{class:!0});var p=E(S);T=$(p,_),O=$(p," Privacy Policy"),p.forEach(d),f.forEach(d),U=y(l),q=P(l,"DIV",{class:!0});var v=E(q);C=y(v),F=P(v,"DIV",{class:!0});var g=E(F);G=P(g,"PRE",{});var w=E(G);J=$(w,"The privacy policy for this app was last updated on "),N=$(w,B),w.forEach(d),g.forEach(d),v.forEach(d),l.forEach(d),u.forEach(d),a.forEach(d),this.h()},h:function(){g(S,"class","subtitle section-title"),g(o,"class","column is-3"),A=new w(C),g(F,"class","mt-2"),g(q,"class","column is-8"),g(i,"class","columns"),g(e,"class","container"),g(c,"class","section")},m:function(t,a){D(t,s,a),x(n,t,a),D(t,r,a),D(t,c,a),I(c,e),I(e,i),I(i,o),I(o,S),I(S,T),I(S,O),I(i,U),I(i,q),A.m(z,q),I(q,C),I(q,F),I(F,G),I(G,J),I(G,N),Q=!0},p:function(t,s){var n=b(s,1)[0];(!Q||1&n)&&a!==(a="Privacy Policy - "+t[0].title)&&(document.title=a),(!Q||1&n)&&_!==(_=t[0].title+"")&&R(T,_),(!Q||1&n)&&z!==(z=t[0].html+"")&&A.p(z),(!Q||1&n)&&B!==(B=t[0].lastUpdated+"")&&R(N,B)},i:function(t){Q||(V(n.$$.fragment,t),Q=!0)},o:function(t){j(n.$$.fragment,t),Q=!1},d:function(t){t&&d(s),k(n,t),t&&d(r),t&&d(c)}}}function q(t){return A.apply(this,arguments)}function A(){return(A=T(t.mark((function a(s){var n,r,c;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.params,t.next=3,this.fetch("privacy-policy/".concat(n.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(c=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{post:c});case 11:this.error(r.status,c.message);case 12:case"end":return t.stop()}}),a,this)})))).apply(this,arguments)}function C(t,a,s){var n=a.post;return t.$$set=function(t){"post"in t&&s(0,n=t.post)},[n]}var F=function(t){a(n,i);var s=O(n);function n(t){var a;return r(this,n),a=s.call(this),c(e(a),t,C,U,o,{post:0}),a}return n}();export default F;export{q as preload};
