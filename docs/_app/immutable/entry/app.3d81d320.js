import{S as C,i as q,s as U,a as j,e as d,c as z,b as E,d as h,f as P,g,h as w,j as W,o as F,k as G,l as H,m as J,n as D,p,q as K,r as M,u as Q,v as A,t as X,w as I,x as b,y as k,z as O,A as R,B as L}from"../chunks/index.72ad267a.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},T={},m=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(c=>{if(c=Z(c,i),c in T)return;T[c]=!0;const t=c.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(!!i)for(let l=r.length-1;l>=0;l--){const u=r[l];if(u.href===c&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${s}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":Y,t||(o.as="script",o.crossOrigin=""),o.href=c,document.head.appendChild(o),t)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},re={};function $(a){let e,n,i;var r=a[1][0];function c(t){return{props:{data:t[3],form:t[2]}}}return r&&(e=b(r,c(a)),a[12](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){const f={};if(s&8&&(f.data=t[3]),s&4&&(f.form=t[2]),s&2&&r!==(r=t[1][0])){if(e){A();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}r?(e=b(r,c(t)),t[12](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(f)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[12](null),t&&w(n),e&&L(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function c(t){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=b(r,c(a)),a[11](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){const f={};if(s&8&&(f.data=t[3]),s&8215&&(f.$$scope={dirty:s,ctx:t}),s&2&&r!==(r=t[1][0])){if(e){A();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}r?(e=b(r,c(t)),t[11](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(f)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[11](null),t&&w(n),e&&L(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function c(t){return{props:{data:t[4],form:t[2]}}}return r&&(e=b(r,c(a)),a[10](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){const f={};if(s&16&&(f.data=t[4]),s&4&&(f.form=t[2]),s&2&&r!==(r=t[1][1])){if(e){A();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}r?(e=b(r,c(t)),t[10](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(f)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[10](null),t&&w(n),e&&L(e,t)}}}function V(a){let e,n=a[6]&&y(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(e);n&&n.l(r),r.forEach(w),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,r){E(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=y(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function y(a){let e;return{c(){e=K(a[7])},l(n){e=M(n,a[7])},m(n,i){E(n,e,i)},p(n,i){i&128&&Q(e,n[7])},d(n){n&&w(e)}}}function te(a){let e,n,i,r,c;const t=[x,$],s=[];function f(l,u){return l[1][1]?0:1}e=f(a),n=s[e]=t[e](a);let o=a[5]&&V(a);return{c(){n.c(),i=j(),o&&o.c(),r=d()},l(l){n.l(l),i=z(l),o&&o.l(l),r=d()},m(l,u){s[e].m(l,u),E(l,i,u),o&&o.m(l,u),E(l,r,u),c=!0},p(l,[u]){let v=e;e=f(l),e===v?s[e].p(l,u):(A(),h(s[v],1,1,()=>{s[v]=null}),P(),n=s[e],n?n.p(l,u):(n=s[e]=t[e](l),n.c()),g(n,1),n.m(i.parentNode,i)),l[5]?o?o.p(l,u):(o=V(l),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},i(l){c||(g(n),c=!0)},o(l){h(n),c=!1},d(l){s[e].d(l),l&&w(i),o&&o.d(l),l&&w(r)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:c}=e,{components:t=[]}=e,{form:s}=e,{data_0:f=null}=e,{data_1:o=null}=e;W(i.page.notify);let l=!1,u=!1,v=null;F(()=>{const _=i.page.subscribe(()=>{l&&(n(6,u=!0),X().then(()=>{n(7,v=document.title||"untitled page")}))});return n(5,l=!0),_});function N(_){I[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function S(_){I[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function B(_){I[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return a.$$set=_=>{"stores"in _&&n(8,i=_.stores),"page"in _&&n(9,r=_.page),"constructors"in _&&n(1,c=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,s=_.form),"data_0"in _&&n(3,f=_.data_0),"data_1"in _&&n(4,o=_.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,c,s,f,o,l,u,v,i,r,N,S,B]}class se extends C{constructor(e){super(),q(this,e,ne,te,U,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const oe=[()=>m(()=>import("../nodes/0.1ac7eb23.js"),["..\\nodes\\0.1ac7eb23.js","..\\chunks\\index.72ad267a.js","..\\chunks\\stores.aa54c261.js","..\\chunks\\singletons.0e5712ab.js","..\\chunks\\index.4b007bfd.js"],import.meta.url),()=>m(()=>import("../nodes/1.8df26d5f.js"),["..\\nodes\\1.8df26d5f.js","..\\chunks\\index.72ad267a.js","..\\chunks\\stores.aa54c261.js","..\\chunks\\singletons.0e5712ab.js","..\\chunks\\index.4b007bfd.js"],import.meta.url),()=>m(()=>import("../nodes/2.33df10bb.js"),["..\\nodes\\2.33df10bb.js","..\\chunks\\index.72ad267a.js","..\\chunks\\ContactForm.02e2a8ae.js","..\\chunks\\store.3b2ff871.js","..\\chunks\\index.4b007bfd.js","..\\chunks\\RecentWork.d665d1eb.js","..\\chunks\\index.6070ffc0.js"],import.meta.url),()=>m(()=>import("../nodes/3.8646b88a.js"),["..\\nodes\\3.8646b88a.js","..\\chunks\\index.72ad267a.js","..\\chunks\\ContactForm.02e2a8ae.js","..\\chunks\\RecentWork.d665d1eb.js","..\\chunks\\index.6070ffc0.js"],import.meta.url),()=>m(()=>import("../nodes/4.1e112659.js"),["..\\nodes\\4.1e112659.js","..\\chunks\\index.72ad267a.js","..\\chunks\\store.3b2ff871.js","..\\chunks\\index.4b007bfd.js","..\\chunks\\index.6070ffc0.js"],import.meta.url),()=>m(()=>import("../nodes/5.a38f030a.js"),["..\\nodes\\5.a38f030a.js","..\\chunks\\index.72ad267a.js","..\\chunks\\index.6070ffc0.js","..\\chunks\\stores.aa54c261.js","..\\chunks\\singletons.0e5712ab.js","..\\chunks\\index.4b007bfd.js"],import.meta.url),()=>m(()=>import("../nodes/6.fb0d18ea.js"),["..\\nodes\\6.fb0d18ea.js","..\\chunks\\index.72ad267a.js","..\\chunks\\index.6070ffc0.js","..\\chunks\\stores.aa54c261.js","..\\chunks\\singletons.0e5712ab.js","..\\chunks\\index.4b007bfd.js","..\\assets\\6.07fdb724.css"],import.meta.url),()=>m(()=>import("../nodes/7.eef0aeda.js"),["..\\nodes\\7.eef0aeda.js","..\\chunks\\index.72ad267a.js","..\\chunks\\index.6070ffc0.js","..\\chunks\\stores.aa54c261.js","..\\chunks\\singletons.0e5712ab.js","..\\chunks\\index.4b007bfd.js"],import.meta.url),()=>m(()=>import("../nodes/8.7b9efd8d.js"),["..\\nodes\\8.7b9efd8d.js","..\\chunks\\index.72ad267a.js","..\\chunks\\index.6070ffc0.js","..\\chunks\\stores.aa54c261.js","..\\chunks\\singletons.0e5712ab.js","..\\chunks\\index.4b007bfd.js","..\\assets\\8.27552b80.css"],import.meta.url),()=>m(()=>import("../nodes/9.1f6a9d32.js"),["..\\nodes\\9.1f6a9d32.js","..\\chunks\\index.72ad267a.js","..\\chunks\\ContactForm.02e2a8ae.js","..\\chunks\\store.3b2ff871.js","..\\chunks\\index.4b007bfd.js","..\\assets\\9.6bd50001.css"],import.meta.url),()=>m(()=>import("../nodes/10.d940913b.js"),["..\\nodes\\10.d940913b.js","..\\chunks\\control.f5b05b5f.js","..\\chunks\\index.72ad267a.js","..\\chunks\\ContactForm.02e2a8ae.js","..\\assets\\9.6bd50001.css"],import.meta.url),()=>m(()=>import("../nodes/11.105fc475.js"),["..\\nodes\\11.105fc475.js","..\\chunks\\index.72ad267a.js","..\\chunks\\store.3b2ff871.js","..\\chunks\\index.4b007bfd.js","..\\chunks\\index.6070ffc0.js"],import.meta.url),()=>m(()=>import("../nodes/12.ff860ee7.js"),["..\\nodes\\12.ff860ee7.js","..\\chunks\\index.72ad267a.js","..\\chunks\\store.3b2ff871.js","..\\chunks\\index.4b007bfd.js","..\\chunks\\index.6070ffc0.js"],import.meta.url)],ae=[],le={"/":[2],"/about":[3],"/case-studies":[4],"/case-studies/ae-branding":[5],"/case-studies/random-contact":[6],"/case-studies/silverback-gaming":[7],"/case-studies/tlf":[8],"/privacy-policy":[9],"/privacy-policy/[slug]":[10],"/projects":[11],"/tutorials":[12]},ce={handleError:({error:a})=>{console.error(a)}};export{le as dictionary,ce as hooks,re as matchers,oe as nodes,se as root,ae as server_loads};
