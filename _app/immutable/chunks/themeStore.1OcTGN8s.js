import{w as s}from"./paths.0NWdgdh8.js";function a(o,t){return localStorage.getItem(o)??t}function n(o,t){localStorage.setItem(o,t)}function c(){const{subscribe:o,set:t,update:r}=s(a("theme",!1)==="true");return{subscribe:o,toggle:()=>{r(e=>(t(!e),n("theme",String(!e)),!e))},set:e=>{t(e),n("theme",String(e))}}}const m=c();export{m as i};
