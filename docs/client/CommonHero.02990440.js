import{S as s,i as a,s as t,e as i,t as l,a as c,c as e,b as r,d as o,f as h,g as n,h as f,j as u,k as b,o as d,n as v}from"./client.570f0659.js";function E(s){let a,t,E,p,m,I,j,x;return{c(){a=i("section"),t=i("div"),E=i("div"),p=i("h1"),m=l(s[0]),I=c(),j=i("h2"),x=l(s[1]),this.h()},l(i){a=e(i,"SECTION",{class:!0});var l=r(a);t=e(l,"DIV",{class:!0});var c=r(t);E=e(c,"DIV",{class:!0});var f=r(E);p=e(f,"H1",{class:!0});var u=r(p);m=o(u,s[0]),u.forEach(h),I=n(f),j=e(f,"H2",{class:!0});var b=r(j);x=o(b,s[1]),b.forEach(h),f.forEach(h),c.forEach(h),l.forEach(h),this.h()},h(){f(p,"class","title"),f(j,"class","subtitle"),f(E,"class","container"),f(t,"class","hero-body"),f(a,"class","hero is-info is-bold")},m(s,i){u(s,a,i),b(a,t),b(t,E),b(E,p),b(p,m),b(E,I),b(E,j),b(j,x)},p(s,[a]){1&a&&d(m,s[0]),2&a&&d(x,s[1])},i:v,o:v,d(s){s&&h(a)}}}function p(s,a,t){let{title:i}=a,{subtitle:l}=a;return s.$$set=s=>{"title"in s&&t(0,i=s.title),"subtitle"in s&&t(1,l=s.subtitle)},[i,l]}class m extends s{constructor(s){super(),a(this,s,p,E,t,{title:0,subtitle:1})}}export{m as C};
