import{w as u}from"./index-4f95871a.js";const b="";let h=b;function m(e){h=e}let _="";function w(e){_=e}const A="sveltekit:snapshot",R="sveltekit:scroll",I="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function S(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function y(){return{x:pageXOffset,y:pageYOffset}}function l(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function g(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function T(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=g(e)}}function x(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!n||!!a||E(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:s,target:a}}function O(e){let t=null,n=null,a=null,s=null,o=e;for(;o&&o!==document.documentElement;)n===null&&(n=l(o,"preload-code")),a===null&&(a=l(o,"preload-data")),t===null&&(t=l(o,"noscroll")),s===null&&(s=l(o,"reload")),o=g(o);return{preload_code:d[n??"off"],preload_data:d[a??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:s==="off"?!1:s===""?!0:null}}function p(e){const t=u(e);let n=!0;function a(){n=!0,t.update(r=>r)}function s(r){n=!1,t.set(r)}function o(r){let i;return t.subscribe(c=>{(i===void 0||n&&c!==i)&&r(i=c)})}return{notify:a,set:s,subscribe:o}}function v(){const{set:e,subscribe:t}=u(!1);let n;async function a(){clearTimeout(n);const s=await fetch(`${h}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const r=(await s.json()).version!==_;return r&&(e(!0),clearTimeout(n)),r}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:t,check:a}}function E(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function U(e){e.client}const L={url:p({}),page:p({}),navigating:u(null),updated:v()};export{I,f as P,R as S,A as a,x as b,O as c,y as d,b as e,T as f,S as g,U as h,E as i,m as j,w as k,L as s};
