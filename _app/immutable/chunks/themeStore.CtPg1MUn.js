import{w as n}from"./paths.Bh1lM6GB.js";function c(o,t){return localStorage.getItem(o)??t}function s(o,t){localStorage.setItem(o,t)}function i(){const{subscribe:o,set:t,update:r}=n(c("theme",!1)==="true");return{subscribe:o,toggle:()=>{r(e=>(t(!e),s("theme",String(!e)),!e))},set:e=>{t(e),s("theme",String(e))}}}const a=i();a.subscribe(console.log);export{a as i};
