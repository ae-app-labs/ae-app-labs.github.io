import{S as s,i as t,s as a,a as e,y as o,e as i,t as c,G as r,f as l,g as n,z as p,c as h,b as f,d,h as u,j as m,A as v,k as y,o as $,v as E,q as g,B as P,J as b}from"./client.98ed5b6c.js";import{C as w}from"./CommonHero.819fbba3.js";function j(s){let t,a,j,I,x,C,D,T,V,S,U,k,q,z,A,B,G,H=s[0].title+"",J=s[0].html+"",N=s[0].lastUpdated+"";return document.title=t=s[0].title,j=new w({props:{title:"Privacy Policy",subtitle:""}}),{c(){a=e(),o(j.$$.fragment),I=e(),x=i("section"),C=i("div"),D=i("div"),T=c(H),V=c(" Privacy Policy"),S=e(),k=e(),q=i("div"),z=i("pre"),A=c("The privacy policy for this app was last updated on "),B=c(N),this.h()},l(s){r('[data-svelte="svelte-1uty71u"]',document.head).forEach(l),a=n(s),p(j.$$.fragment,s),I=n(s),x=h(s,"SECTION",{class:!0});var t=f(x);C=h(t,"DIV",{class:!0});var e=f(C);D=h(e,"DIV",{class:!0});var o=f(D);T=d(o,H),V=d(o," Privacy Policy"),o.forEach(l),S=n(e),k=n(e),q=h(e,"DIV",{class:!0});var i=f(q);z=h(i,"PRE",{});var c=f(z);A=d(c,"The privacy policy for this app was last updated on "),B=d(c,N),c.forEach(l),i.forEach(l),e.forEach(l),t.forEach(l),this.h()},h(){u(D,"class","subtitle section-title"),U=new b(k),u(q,"class","mt-2"),u(C,"class","container"),u(x,"class","section")},m(s,t){m(s,a,t),v(j,s,t),m(s,I,t),m(s,x,t),y(x,C),y(C,D),y(D,T),y(D,V),y(C,S),U.m(J,C),y(C,k),y(C,q),y(q,z),y(z,A),y(z,B),G=!0},p(s,[a]){(!G||1&a)&&t!==(t=s[0].title)&&(document.title=t),(!G||1&a)&&H!==(H=s[0].title+"")&&$(T,H),(!G||1&a)&&J!==(J=s[0].html+"")&&U.p(J),(!G||1&a)&&N!==(N=s[0].lastUpdated+"")&&$(B,N)},i(s){G||(E(j.$$.fragment,s),G=!0)},o(s){g(j.$$.fragment,s),G=!1},d(s){s&&l(a),P(j,s),s&&l(I),s&&l(x)}}}async function I({params:s}){const t=await this.fetch(`privacy-policy/${s.slug}.json`),a=await t.json();if(200===t.status)return{post:a};this.error(t.status,a.message)}function x(s,t,a){let{post:e}=t;return s.$$set=s=>{"post"in s&&a(0,e=s.post)},[e]}export default class extends s{constructor(s){super(),t(this,s,x,j,a,{post:0})}}export{I as preload};
