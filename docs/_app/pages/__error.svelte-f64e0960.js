import{S,i as V,s as x,e as m,k as I,t as g,c as p,a as v,m as P,h as y,d as f,b as _,g as w,H as n,E as O,j as T}from"../chunks/index-b56f1b28.js";function z(d){let e,t=d[1].message+"",i,l,s;return{c(){e=m("p"),i=g(t),l=I(),s=g(d[0]),this.h()},l(a){e=p(a,"P",{class:!0});var o=v(e);i=y(o,t),l=P(o),s=y(o,d[0]),o.forEach(f),this.h()},h(){_(e,"class","is-size-1")},m(a,o){w(a,e,o),n(e,i),n(e,l),n(e,s)},p(a,o){o&2&&t!==(t=a[1].message+"")&&T(i,t),o&1&&T(s,a[0])},d(a){a&&f(e)}}}function C(d){let e,t,i,l,s,a=d[1].message+"",o,k,r,c;return{c(){e=m("div"),t=m("p"),i=g("Oops! That is a 404."),l=I(),s=m("p"),o=g(a),k=I(),r=m("p"),c=g("It looks like the page you are looking for does not exist. Please use the links below."),this.h()},l(h){e=p(h,"DIV",{class:!0});var u=v(e);t=p(u,"P",{class:!0});var E=v(t);i=y(E,"Oops! That is a 404."),E.forEach(f),l=P(u),s=p(u,"P",{});var b=v(s);o=y(b,a),b.forEach(f),k=P(u),r=p(u,"P",{class:!0});var D=v(r);c=y(D,"It looks like the page you are looking for does not exist. Please use the links below."),D.forEach(f),u.forEach(f),this.h()},h(){_(t,"class","is-size-1 is-family-secondary my-4"),_(r,"class","my-2"),_(e,"class","has-text-centered")},m(h,u){w(h,e,u),n(e,t),n(t,i),n(e,l),n(e,s),n(s,o),n(e,k),n(e,r),n(r,c)},p(h,u){u&2&&a!==(a=h[1].message+"")&&T(o,a)},d(h){h&&f(e)}}}function j(d){let e,t,i,l,s,a;function o(c,h){return c[0]==404?C:z}let k=o(d),r=k(d);return{c(){e=m("section"),t=m("div"),r.c(),i=I(),l=m("div"),s=m("a"),a=g("Take me home"),this.h()},l(c){e=p(c,"SECTION",{class:!0});var h=v(e);t=p(h,"DIV",{class:!0});var u=v(t);r.l(u),i=P(u),l=p(u,"DIV",{class:!0});var E=v(l);s=p(E,"A",{href:!0,class:!0});var b=v(s);a=y(b,"Take me home"),b.forEach(f),E.forEach(f),u.forEach(f),h.forEach(f),this.h()},h(){_(s,"href","/"),_(s,"class","button is-warning is-rounded"),_(l,"class","py-4 has-text-centered"),_(t,"class","container"),_(e,"class","section")},m(c,h){w(c,e,h),n(e,t),r.m(t,null),n(t,i),n(t,l),n(l,s),n(s,a)},p(c,[h]){k===(k=o(c))&&r?r.p(c,h):(r.d(1),r=k(c),r&&(r.c(),r.m(t,i)))},i:O,o:O,d(c){c&&f(e),r.d()}}}function H({error:d,status:e}){return{props:{error:d,status:e}}}function q(d,e,t){let{status:i}=e,{error:l}=e;return d.$$set=s=>{"status"in s&&t(0,i=s.status),"error"in s&&t(1,l=s.error)},[i,l]}class N extends S{constructor(e){super(),V(this,e,q,j,x,{status:0,error:1})}}export{N as default,H as load};