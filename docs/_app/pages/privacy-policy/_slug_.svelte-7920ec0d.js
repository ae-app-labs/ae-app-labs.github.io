import{S as M,i as Q,s as R,k as H,e as u,t as S,$ as W,w as X,F as Y,d as e,m as U,c as p,a as m,h as b,a0 as Z,x,b as _,g as k,H as s,y as tt,j as L,q as et,o as at,B as st}from"../../chunks/index-bb94fcca.js";import{C as lt}from"../../chunks/ContactForm-5c9e5200.js";function it(l){let o,c,a,r,i,g,f,w=l[0].title+"",P,B,F,d,D,$=l[0].html+"",V,y,z,I=l[0].lastUpdated+"",q,C,h,E,v;return document.title=o="Privacy Policy - "+l[0].title,E=new lt({}),{c(){c=H(),a=u("section"),r=u("div"),i=u("div"),g=u("div"),f=u("div"),P=S(w),B=S(" Privacy Policy"),F=H(),d=u("div"),D=new W(!1),V=H(),y=u("div"),z=S("The privacy policy for this app was last updated on "),q=S(I),C=H(),h=u("div"),X(E.$$.fragment),this.h()},l(t){Y('[data-svelte="svelte-1gnrqmb"]',document.head).forEach(e),c=U(t),a=p(t,"SECTION",{class:!0});var A=m(a);r=p(A,"DIV",{class:!0});var G=m(r);i=p(G,"DIV",{class:!0});var T=m(i);g=p(T,"DIV",{class:!0});var J=m(g);f=p(J,"DIV",{class:!0});var N=m(f);P=b(N,w),B=b(N," Privacy Policy"),N.forEach(e),J.forEach(e),F=U(T),d=p(T,"DIV",{class:!0});var j=m(d);D=Z(j,!1),V=U(j),y=p(j,"DIV",{class:!0});var O=m(y);z=b(O,"The privacy policy for this app was last updated on "),q=b(O,I),O.forEach(e),j.forEach(e),T.forEach(e),G.forEach(e),A.forEach(e),C=U(t),h=p(t,"DIV",{class:!0});var K=m(h);x(E.$$.fragment,K),K.forEach(e),this.h()},h(){_(f,"class","is-size-3 is-family-secondary section-title"),_(g,"class","column is-3"),D.a=V,_(y,"class","mt-2"),_(d,"class","column is-8"),_(i,"class","columns"),_(r,"class","container"),_(a,"class","section"),_(h,"class","wrapper svelte-g95o0e")},m(t,n){k(t,c,n),k(t,a,n),s(a,r),s(r,i),s(i,g),s(g,f),s(f,P),s(f,B),s(i,F),s(i,d),D.m($,d),s(d,V),s(d,y),s(y,z),s(y,q),k(t,C,n),k(t,h,n),tt(E,h,null),v=!0},p(t,[n]){(!v||n&1)&&o!==(o="Privacy Policy - "+t[0].title)&&(document.title=o),(!v||n&1)&&w!==(w=t[0].title+"")&&L(P,w),(!v||n&1)&&$!==($=t[0].html+"")&&D.p($),(!v||n&1)&&I!==(I=t[0].lastUpdated+"")&&L(q,I)},i(t){v||(et(E.$$.fragment,t),v=!0)},o(t){at(E.$$.fragment,t),v=!1},d(t){t&&e(c),t&&e(a),t&&e(C),t&&e(h),st(E)}}}async function nt({fetch:l,params:o}){const c=await l(`/privacy-policy/${o.slug}.json`),a=await c.json();return c.ok?{props:{policy:a}}:{status:301,redirect:"/privacy-policy"}}function ot(l,o,c){let a,{policy:r}=o;return l.$$set=i=>{"policy"in i&&c(1,r=i.policy)},l.$$.update=()=>{l.$$.dirty&2&&c(0,a=r.post)},[a,r]}class dt extends M{constructor(o){super(),Q(this,o,ot,it,R,{policy:1})}}export{dt as default,nt as load};
