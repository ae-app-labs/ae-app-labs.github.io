import{R as c}from"./control-f5b05b5f.js";function n(o,e){return new c(o,e)}const a=async({fetch:o,params:e})=>{const t=await o(`/privacy-policy/${e.slug}.json`),r=await t.json();if(t.ok)return{policy:r};throw n(301,"/privacy-policy")},s=Object.freeze(Object.defineProperty({__proto__:null,load:a},Symbol.toStringTag,{value:"Module"}));export{s as _,a as l};