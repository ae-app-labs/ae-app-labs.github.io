import{R as n}from"./control-e7f5239e.js";function c(e,o){return new n(e,o)}new TextEncoder;const a=async({fetch:e,params:o})=>{const t=await e(`/privacy-policy/${o.slug}.json`),r=await t.json();if(t.ok)return{policy:r};throw c(301,"/privacy-policy")},s=Object.freeze(Object.defineProperty({__proto__:null,load:a},Symbol.toStringTag,{value:"Module"}));export{s as _,a as l};
