import{s as c,B as u,e as m,c as d,g as f,d as i,j as _,l as h,C as p,D as g,E as v,x as w}from"../chunks/scheduler.zSCSNv7F.js";import{S as $,i as b,t as y,b as k}from"../chunks/index.Dk43XADV.js";import{i as l}from"../chunks/themeStore.tpglWN8M.js";import{o as M}from"../chunks/entry.DMpO5m1O.js";const S=!0,I=Object.freeze(Object.defineProperty({__proto__:null,prerender:S},Symbol.toStringTag,{value:"Module"}));function j(n){let s,a;const r=n[1].default,t=u(r,n,n[0],null);return{c(){s=m("div"),t&&t.c(),this.h()},l(e){s=d(e,"DIV",{class:!0});var o=f(s);t&&t.l(o),o.forEach(i),this.h()},h(){_(s,"class","light-theme show dark:dark-theme motion-reduce:transition-none transition-colors duration-300 svelte-lj1388")},m(e,o){h(e,s,o),t&&t.m(s,null),a=!0},p(e,[o]){t&&t.p&&(!a||o&1)&&p(t,r,e,e[0],a?v(r,e[0],o,null):g(e[0]),null)},i(e){a||(y(t,e),a=!0)},o(e){k(t,e),a=!1},d(e){e&&i(s),t&&t.d(e)}}}function D(n,s,a){let{$$slots:r={},$$scope:t}=s;return w(()=>{"matchMedia"in window&&window.matchMedia("(prefers-color-scheme: dark)").matches&&localStorage.getItem("theme")===null&&l.set(!0),l.subscribe(e=>{document.documentElement.classList[e?"add":"remove"]("dark")})}),M(e=>{if(document.startViewTransition)return new Promise(o=>{document.startViewTransition(async()=>{o(),await e.complete})})}),n.$$set=e=>{"$$scope"in e&&a(0,t=e.$$scope)},[t,r]}class L extends ${constructor(s){super(),b(this,s,D,j,c,{})}}export{L as component,I as universal};
