import{S as s,i as t,s as a,I as e,a as i,y as c,e as o,t as r,G as l,f as n,g as p,z as h,c as u,b as d,d as f,h as v,j as m,A as y,k as $,o as E,v as g,q as P,B as w,K as I}from"./client.8254ca27.js";function j(s){let t,a,j,b,x,D,T,V,S,U,k,q,z,A,B,C,G,K=s[0].title+"",N=s[0].html+"",O=s[0].lastUpdated+"";return document.title=t=s[0].title,j=new e({props:{title:"Privacy Policy",subtitle:""}}),{c(){a=i(),c(j.$$.fragment),b=i(),x=o("section"),D=o("div"),T=o("div"),V=r(K),S=r(" Privacy Policy"),U=i(),q=i(),z=o("div"),A=o("pre"),B=r("The privacy policy for this app was last updated on "),C=r(O),this.h()},l(s){l('[data-svelte="svelte-1uty71u"]',document.head).forEach(n),a=p(s),h(j.$$.fragment,s),b=p(s),x=u(s,"SECTION",{class:!0});var t=d(x);D=u(t,"DIV",{class:!0});var e=d(D);T=u(e,"DIV",{class:!0});var i=d(T);V=f(i,K),S=f(i," Privacy Policy"),i.forEach(n),U=p(e),q=p(e),z=u(e,"DIV",{class:!0});var c=d(z);A=u(c,"PRE",{});var o=d(A);B=f(o,"The privacy policy for this app was last updated on "),C=f(o,O),o.forEach(n),c.forEach(n),e.forEach(n),t.forEach(n),this.h()},h(){v(T,"class","subtitle section-title"),k=new I(q),v(z,"class","mt-2"),v(D,"class","container"),v(x,"class","section")},m(s,t){m(s,a,t),y(j,s,t),m(s,b,t),m(s,x,t),$(x,D),$(D,T),$(T,V),$(T,S),$(D,U),k.m(N,D),$(D,q),$(D,z),$(z,A),$(A,B),$(A,C),G=!0},p(s,[a]){(!G||1&a)&&t!==(t=s[0].title)&&(document.title=t),(!G||1&a)&&K!==(K=s[0].title+"")&&E(V,K),(!G||1&a)&&N!==(N=s[0].html+"")&&k.p(N),(!G||1&a)&&O!==(O=s[0].lastUpdated+"")&&E(C,O)},i(s){G||(g(j.$$.fragment,s),G=!0)},o(s){P(j.$$.fragment,s),G=!1},d(s){s&&n(a),w(j,s),s&&n(b),s&&n(x)}}}async function b({params:s}){const t=await this.fetch(`privacy-policy/${s.slug}.json`),a=await t.json();if(200===t.status)return{post:a};this.error(t.status,a.message)}function x(s,t,a){let{post:e}=t;return s.$$set=s=>{"post"in s&&a(0,e=s.post)},[e]}export default class extends s{constructor(s){super(),t(this,s,x,j,a,{post:0})}}export{b as preload};
