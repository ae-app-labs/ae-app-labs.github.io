import{s as w,n as T,c as z}from"../chunks/scheduler.txEd6eIF.js";import{S as D,i as S,e as f,s as k,c as m,a as g,b,g as y,d as _,f as v,h as I,j as u,t as x,k as C,l as E}from"../chunks/index.FEyAgVWd.js";import{p as V}from"../chunks/stores.QZroOnTK.js";function $(p){let e,t=p[0].error.message+"",n,l,o=p[0].status+"",i;return{c(){e=f("p"),n=x(t),l=k(),i=x(o),this.h()},l(r){e=m(r,"P",{class:!0});var s=g(e);n=C(s,t),l=b(s),i=C(s,o),s.forEach(_),this.h()},h(){v(e,"class","is-size-1")},m(r,s){I(r,e,s),u(e,n),u(e,l),u(e,i)},p(r,s){s&1&&t!==(t=r[0].error.message+"")&&E(n,t),s&1&&o!==(o=r[0].status+"")&&E(i,o)},d(r){r&&_(e)}}}function H(p){let e,t,n="Oops! That is a 404.",l,o,i=p[0].error.message+"",r,s,a,d="It looks like the page you are looking for does not exist. Please use the links below.";return{c(){e=f("div"),t=f("p"),t.textContent=n,l=k(),o=f("p"),r=x(i),s=k(),a=f("p"),a.textContent=d,this.h()},l(c){e=m(c,"DIV",{class:!0});var h=g(e);t=m(h,"P",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-1m38z2m"&&(t.textContent=n),l=b(h),o=m(h,"P",{});var P=g(o);r=C(P,i),P.forEach(_),s=b(h),a=m(h,"P",{class:!0,"data-svelte-h":!0}),y(a)!=="svelte-eukrwi"&&(a.textContent=d),h.forEach(_),this.h()},h(){v(t,"class","is-size-1 is-family-secondary my-4"),v(a,"class","my-2"),v(e,"class","has-text-centered")},m(c,h){I(c,e,h),u(e,t),u(e,l),u(e,o),u(o,r),u(e,s),u(e,a)},p(c,h){h&1&&i!==(i=c[0].error.message+"")&&E(r,i)},d(c){c&&_(e)}}}function L(p){let e,t,n,l,o='<a href="/" class="button is-warning is-rounded">Take me home</a>';function i(a,d){return a[0].status==404?H:$}let r=i(p),s=r(p);return{c(){e=f("section"),t=f("div"),s.c(),n=k(),l=f("div"),l.innerHTML=o,this.h()},l(a){e=m(a,"SECTION",{class:!0});var d=g(e);t=m(d,"DIV",{class:!0});var c=g(t);s.l(c),n=b(c),l=m(c,"DIV",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-1fovwa6"&&(l.innerHTML=o),c.forEach(_),d.forEach(_),this.h()},h(){v(l,"class","py-4 has-text-centered"),v(t,"class","container"),v(e,"class","section")},m(a,d){I(a,e,d),u(e,t),s.m(t,null),u(t,n),u(t,l)},p(a,[d]){r===(r=i(a))&&s?s.p(a,d):(s.d(1),s=r(a),s&&(s.c(),s.m(t,n)))},i:T,o:T,d(a){a&&_(e),s.d()}}}function M(p,e,t){let n;return z(p,V,l=>t(0,n=l)),[n]}class N extends D{constructor(e){super(),S(this,e,M,L,w,{})}}export{N as component};
