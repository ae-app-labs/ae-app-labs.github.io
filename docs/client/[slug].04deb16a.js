import{S as s,i as a,s as t,I as c,a as i,y as e,e as o,t as r,E as l,f as n,g as p,z as h,c as v,b as f,d,h as u,j as m,A as y,k as E,o as P,v as $,q as g,B as I,J as w}from"./client.f61ca380.js";function D(s){let a,t,D,V,b,j,x,T,q,S,U,k,z,A,B,C,J,N,O,R,F=s[0].title+"",G=s[0].html+"",H=s[0].lastUpdated+"";return document.title=a="Privacy Policy - "+s[0].title,D=new c({props:{title:"Privacy Policy",subtitle:""}}),{c(){t=i(),e(D.$$.fragment),V=i(),b=o("section"),j=o("div"),x=o("div"),T=o("div"),q=o("div"),S=r(F),U=r(" Privacy Policy"),k=i(),z=o("div"),B=i(),C=o("div"),J=o("pre"),N=r("The privacy policy for this app was last updated on "),O=r(H),this.h()},l(s){l('[data-svelte="svelte-1gnrqmb"]',document.head).forEach(n),t=p(s),h(D.$$.fragment,s),V=p(s),b=v(s,"SECTION",{class:!0});var a=f(b);j=v(a,"DIV",{class:!0});var c=f(j);x=v(c,"DIV",{class:!0});var i=f(x);T=v(i,"DIV",{class:!0});var e=f(T);q=v(e,"DIV",{class:!0});var o=f(q);S=d(o,F),U=d(o," Privacy Policy"),o.forEach(n),e.forEach(n),k=p(i),z=v(i,"DIV",{class:!0});var r=f(z);B=p(r),C=v(r,"DIV",{class:!0});var u=f(C);J=v(u,"PRE",{});var m=f(J);N=d(m,"The privacy policy for this app was last updated on "),O=d(m,H),m.forEach(n),u.forEach(n),r.forEach(n),i.forEach(n),c.forEach(n),a.forEach(n),this.h()},h(){u(q,"class","subtitle section-title"),u(T,"class","column is-3"),A=new w(B),u(C,"class","mt-2"),u(z,"class","column is-8"),u(x,"class","columns"),u(j,"class","container"),u(b,"class","section")},m(s,a){m(s,t,a),y(D,s,a),m(s,V,a),m(s,b,a),E(b,j),E(j,x),E(x,T),E(T,q),E(q,S),E(q,U),E(x,k),E(x,z),A.m(G,z),E(z,B),E(z,C),E(C,J),E(J,N),E(J,O),R=!0},p(s,[t]){(!R||1&t)&&a!==(a="Privacy Policy - "+s[0].title)&&(document.title=a),(!R||1&t)&&F!==(F=s[0].title+"")&&P(S,F),(!R||1&t)&&G!==(G=s[0].html+"")&&A.p(G),(!R||1&t)&&H!==(H=s[0].lastUpdated+"")&&P(O,H)},i(s){R||($(D.$$.fragment,s),R=!0)},o(s){g(D.$$.fragment,s),R=!1},d(s){s&&n(t),I(D,s),s&&n(V),s&&n(b)}}}async function V({params:s}){const a=await this.fetch(`privacy-policy/${s.slug}.json`),t=await a.json();if(200===a.status)return{post:t};this.error(a.status,t.message)}function b(s,a,t){let{post:c}=a;return s.$$set=s=>{"post"in s&&t(0,c=s.post)},[c]}export default class extends s{constructor(s){super(),a(this,s,b,D,t,{post:0})}}export{V as preload};
