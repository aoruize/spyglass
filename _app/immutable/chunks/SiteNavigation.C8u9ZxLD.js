import{_ as ut,$ as dt,U as q,Q as ht,s as X,a as O,l as I,n as ne,d as b,x as Ve,a0 as pt,a1 as G,a2 as ve,e as P,c as M,g as F,a3 as xe,r as gt,a4 as mt,u as bt,a5 as yt,a6 as Se,a7 as _t,a8 as kt,B as Qe,C as Ue,D as Ge,E as Ke,j as S,G as $,L as wt,q as vt,b as xt,f as St,k as Ie,i as It}from"./scheduler.zSCSNv7F.js";import{g as Ct,b as j,e as Tt,t as E,S as J,i as W,c as fe,a as ue,m as de,d as he}from"./index.Dk43XADV.js";import{b as jt}from"./paths.Bh1lM6GB.js";import{i as Xe}from"./themeStore.CtPg1MUn.js";function Ce(e,t){const o=t.token={};function r(n,s,i,c){if(t.token!==o)return;t.resolved=c;let l=t.ctx;i!==void 0&&(l=l.slice(),l[i]=c);const a=n&&(t.current=n)(l);let f=!1;t.block&&(t.blocks?t.blocks.forEach((u,h)=>{h!==s&&u&&(Ct(),j(u,1,1,()=>{t.blocks[h]===u&&(t.blocks[h]=null)}),Tt())}):t.block.d(1),a.c(),E(a,1),a.m(t.mount(),t.anchor),f=!0),t.block=a,t.blocks&&(t.blocks[s]=a),f&&ht()}if(ut(e)){const n=dt();if(e.then(s=>{q(n),r(t.then,1,t.value,s),q(null)},s=>{if(q(n),r(t.catch,2,t.error,s),q(null),!t.hasCatch)throw s}),t.current!==t.pending)return r(t.pending,0),!0}else{if(t.current!==t.then)return r(t.then,1,t.value,e),!0;t.resolved=e}}function Et(e,t,o){const r=t.slice(),{resolved:n}=e;e.current===e.then&&(r[e.value]=n),e.current===e.catch&&(r[e.error]=n),e.block.p(r,o)}function Je(e,t){const o={},r={},n={$$scope:1};let s=e.length;for(;s--;){const i=e[s],c=t[s];if(c){for(const l in i)l in c||(r[l]=1);for(const l in c)n[l]||(o[l]=c[l],n[l]=1);e[s]=c}else for(const l in i)n[l]=1}for(const i in r)i in o||(o[i]=void 0);return o}const D=/^[a-z0-9]+(-[a-z0-9]+)*$/,z=(e,t,o,r="")=>{const n=e.split(":");if(e.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;r=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const c=n.pop(),l=n.pop(),a={provider:n.length>0?n[0]:r,prefix:l,name:c};return t&&!Q(a)?null:a}const s=n[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!Q(c)?null:c}if(o&&r===""){const c={provider:r,prefix:"",name:s};return t&&!Q(c,o)?null:c}return null},Q=(e,t)=>e?!!((e.provider===""||e.provider.match(D))&&(t&&e.prefix===""||e.prefix.match(D))&&e.name.match(D)):!1,We=Object.freeze({left:0,top:0,width:16,height:16}),K=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),B=Object.freeze({...We,...K}),oe=Object.freeze({...B,body:"",hidden:!1});function Ot(e,t){const o={};!e.hFlip!=!t.hFlip&&(o.hFlip=!0),!e.vFlip!=!t.vFlip&&(o.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(o.rotate=r),o}function Te(e,t){const o=Ot(e,t);for(const r in oe)r in K?r in e&&!(r in o)&&(o[r]=K[r]):r in t?o[r]=t[r]:r in e&&(o[r]=e[r]);return o}function Pt(e,t){const o=e.icons,r=e.aliases||Object.create(null),n=Object.create(null);function s(i){if(o[i])return n[i]=[];if(!(i in n)){n[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(n[i]=[c].concat(l))}return n[i]}return Object.keys(o).concat(Object.keys(r)).forEach(s),n}function Mt(e,t,o){const r=e.icons,n=e.aliases||Object.create(null);let s={};function i(c){s=Te(r[c]||n[c],s)}return i(t),o.forEach(i),Te(e,s)}function Ye(e,t){const o=[];if(typeof e!="object"||typeof e.icons!="object")return o;e.not_found instanceof Array&&e.not_found.forEach(n=>{t(n,null),o.push(n)});const r=Pt(e);for(const n in r){const s=r[n];s&&(t(n,Mt(e,n,s)),o.push(n))}return o}const Ft={provider:"",aliases:{},not_found:{},...We};function ee(e,t){for(const o in t)if(o in e&&typeof e[o]!=typeof t[o])return!1;return!0}function Ze(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!ee(e,Ft))return null;const o=t.icons;for(const n in o){const s=o[n];if(!n.match(D)||typeof s.body!="string"||!ee(s,oe))return null}const r=t.aliases||Object.create(null);for(const n in r){const s=r[n],i=s.parent;if(!n.match(D)||typeof i!="string"||!o[i]&&!r[i]||!ee(s,oe))return null}return t}const je=Object.create(null);function Lt(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function T(e,t){const o=je[e]||(je[e]=Object.create(null));return o[t]||(o[t]=Lt(e,t))}function pe(e,t){return Ze(t)?Ye(t,(o,r)=>{r?e.icons[o]=r:e.missing.add(o)}):[]}function At(e,t,o){try{if(typeof o.body=="string")return e.icons[t]={...o},!0}catch{}return!1}let N=!1;function $e(e){return typeof e=="boolean"&&(N=e),N}function ge(e){const t=typeof e=="string"?z(e,!0,N):e;if(t){const o=T(t.provider,t.prefix),r=t.name;return o.icons[r]||(o.missing.has(r)?null:void 0)}}function Dt(e,t){const o=z(e,!0,N);if(!o)return!1;const r=T(o.provider,o.prefix);return At(r,o.name,t)}function Nt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),N&&!t&&!e.prefix){let n=!1;return Ze(e)&&(e.prefix="",Ye(e,(s,i)=>{i&&Dt(s,i)&&(n=!0)})),n}const o=e.prefix;if(!Q({provider:t,prefix:o,name:"a"}))return!1;const r=T(t,o);return!!pe(r,e)}function Ht(e){return!!ge(e)}const et=Object.freeze({width:null,height:null}),tt=Object.freeze({...et,...K}),zt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Bt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Ee(e,t,o){if(t===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*t*o)/o;if(typeof e!="string")return e;const r=e.split(zt);if(r===null||!r.length)return e;const n=[];let s=r.shift(),i=Bt.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?n.push(s):n.push(Math.ceil(c*t*o)/o)}else n.push(s);if(s=r.shift(),s===void 0)return n.join("");i=!i}}function Rt(e,t="defs"){let o="";const r=e.indexOf("<"+t);for(;r>=0;){const n=e.indexOf(">",r),s=e.indexOf("</"+t);if(n===-1||s===-1)break;const i=e.indexOf(">",s);if(i===-1)break;o+=e.slice(n+1,s).trim(),e=e.slice(0,r).trim()+e.slice(i+1)}return{defs:o,content:e}}function qt(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Vt(e,t,o){const r=Rt(e);return qt(r.defs,t+r.content+o)}const Qt=e=>e==="unset"||e==="undefined"||e==="none";function Ut(e,t){const o={...B,...e},r={...tt,...t},n={left:o.left,top:o.top,width:o.width,height:o.height};let s=o.body;[o,r].forEach(x=>{const m=[],g=x.hFlip,d=x.vFlip;let v=x.rotate;g?d?v+=2:(m.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),m.push("scale(-1 1)"),n.top=n.left=0):d&&(m.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),m.push("scale(1 -1)"),n.top=n.left=0);let k;switch(v<0&&(v-=Math.floor(v/4)*4),v=v%4,v){case 1:k=n.height/2+n.top,m.unshift("rotate(90 "+k.toString()+" "+k.toString()+")");break;case 2:m.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:k=n.width/2+n.left,m.unshift("rotate(-90 "+k.toString()+" "+k.toString()+")");break}v%2===1&&(n.left!==n.top&&(k=n.left,n.left=n.top,n.top=k),n.width!==n.height&&(k=n.width,n.width=n.height,n.height=k)),m.length&&(s=Vt(s,'<g transform="'+m.join(" ")+'">',"</g>"))});const i=r.width,c=r.height,l=n.width,a=n.height;let f,u;i===null?(u=c===null?"1em":c==="auto"?a:c,f=Ee(u,l/a)):(f=i==="auto"?l:i,u=c===null?Ee(f,a/l):c==="auto"?a:c);const h={},y=(x,m)=>{Qt(m)||(h[x]=m.toString())};y("width",f),y("height",u);const _=[n.left,n.top,l,a];return h.viewBox=_.join(" "),{attributes:h,viewBox:_,body:s}}const Gt=/\sid="(\S+)"/g,Kt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Xt=0;function Jt(e,t=Kt){const o=[];let r;for(;r=Gt.exec(e);)o.push(r[1]);if(!o.length)return e;const n="suffix"+(Math.random()*16777216|Date.now()).toString(16);return o.forEach(s=>{const i=typeof t=="function"?t(s):t+(Xt++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+n+"$3")}),e=e.replace(new RegExp(n,"g"),""),e}const re=Object.create(null);function Wt(e,t){re[e]=t}function se(e){return re[e]||re[""]}function me(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const be=Object.create(null),A=["https://api.simplesvg.com","https://api.unisvg.com"],U=[];for(;A.length>0;)A.length===1||Math.random()>.5?U.push(A.shift()):U.push(A.pop());be[""]=me({resources:["https://api.iconify.design"].concat(U)});function Yt(e,t){const o=me(t);return o===null?!1:(be[e]=o,!0)}function ye(e){return be[e]}const Zt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Oe=Zt();function $t(e,t){const o=ye(e);if(!o)return 0;let r;if(!o.maxURL)r=0;else{let n=0;o.resources.forEach(i=>{n=Math.max(n,i.length)});const s=t+".json?icons=";r=o.maxURL-n-o.path.length-s.length}return r}function en(e){return e===404}const tn=(e,t,o)=>{const r=[],n=$t(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return o.forEach((l,a)=>{c+=l.length+1,c>=n&&a>0&&(r.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function nn(e){if(typeof e=="string"){const t=ye(e);if(t)return t.path}return"/"}const on=(e,t,o)=>{if(!Oe){o("abort",424);return}let r=nn(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:o("abort",400);return}let n=503;Oe(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{o(en(i)?"abort":"next",i)});return}return n=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?o("abort",s):o("next",n)});return}setTimeout(()=>{o("success",s)})}).catch(()=>{o("next",n)})},rn={prepare:tn,send:on};function sn(e){const t={loaded:[],missing:[],pending:[]},o=Object.create(null);e.sort((n,s)=>n.provider!==s.provider?n.provider.localeCompare(s.provider):n.prefix!==s.prefix?n.prefix.localeCompare(s.prefix):n.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(n=>{if(r.name===n.name&&r.prefix===n.prefix&&r.provider===n.provider)return;r=n;const s=n.provider,i=n.prefix,c=n.name,l=o[s]||(o[s]=Object.create(null)),a=l[i]||(l[i]=T(s,i));let f;c in a.icons?f=t.loaded:i===""||a.missing.has(c)?f=t.missing:f=t.pending;const u={provider:s,prefix:i,name:c};f.push(u)}),t}function nt(e,t){e.forEach(o=>{const r=o.loaderCallbacks;r&&(o.loaderCallbacks=r.filter(n=>n.id!==t))})}function cn(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let o=!1;const r=e.provider,n=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==n)return!0;const a=l.name;if(e.icons[a])i.loaded.push({provider:r,prefix:n,name:a});else if(e.missing.has(a))i.missing.push({provider:r,prefix:n,name:a});else return o=!0,!0;return!1}),i.pending.length!==c&&(o||nt([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let ln=0;function an(e,t,o){const r=ln++,n=nt.bind(null,o,r);if(!t.pending.length)return n;const s={id:r,icons:t,callback:e,abort:n};return o.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),n}function fn(e,t=!0,o=!1){const r=[];return e.forEach(n=>{const s=typeof n=="string"?z(n,t,o):n;s&&r.push(s)}),r}var un={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function dn(e,t,o,r){const n=e.resources.length,s=e.random?Math.floor(Math.random()*n):e.index;let i;if(e.random){let p=e.resources.slice(0);for(i=[];p.length>1;){const w=Math.floor(Math.random()*p.length);i.push(p[w]),p=p.slice(0,w).concat(p.slice(w+1))}i=i.concat(p)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let l="pending",a=0,f,u=null,h=[],y=[];typeof r=="function"&&y.push(r);function _(){u&&(clearTimeout(u),u=null)}function x(){l==="pending"&&(l="aborted"),_(),h.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),h=[]}function m(p,w){w&&(y=[]),typeof p=="function"&&y.push(p)}function g(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:h.length,subscribe:m,abort:x}}function d(){l="failed",y.forEach(p=>{p(void 0,f)})}function v(){h.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),h=[]}function k(p,w,L){const R=w!=="success";switch(h=h.filter(C=>C!==p),l){case"pending":break;case"failed":if(R||!e.dataAfterTimeout)return;break;default:return}if(w==="abort"){f=L,d();return}if(R){f=L,h.length||(i.length?Z():d());return}if(_(),v(),!e.random){const C=e.resources.indexOf(p.resource);C!==-1&&C!==e.index&&(e.index=C)}l="completed",y.forEach(C=>{C(L)})}function Z(){if(l!=="pending")return;_();const p=i.shift();if(p===void 0){if(h.length){u=setTimeout(()=>{_(),l==="pending"&&(v(),d())},e.timeout);return}d();return}const w={status:"pending",resource:p,callback:(L,R)=>{k(w,L,R)}};h.push(w),a++,u=setTimeout(Z,e.rotate),o(p,t,w.callback)}return setTimeout(Z),g}function ot(e){const t={...un,...e};let o=[];function r(){o=o.filter(c=>c().status==="pending")}function n(c,l,a){const f=dn(t,c,l,(u,h)=>{r(),a&&a(u,h)});return o.push(f),f}function s(c){return o.find(l=>c(l))||null}return{query:n,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function Pe(){}const te=Object.create(null);function hn(e){if(!te[e]){const t=ye(e);if(!t)return;const o=ot(t),r={config:t,redundancy:o};te[e]=r}return te[e]}function pn(e,t,o){let r,n;if(typeof e=="string"){const s=se(e);if(!s)return o(void 0,424),Pe;n=s.send;const i=hn(e);i&&(r=i.redundancy)}else{const s=me(e);if(s){r=ot(s);const i=e.resources?e.resources[0]:"",c=se(i);c&&(n=c.send)}}return!r||!n?(o(void 0,424),Pe):r.query(t,n,o)().abort}const Me="iconify2",H="iconify",rt=H+"-count",Fe=H+"-version",st=36e5,gn=168,mn=50;function ie(e,t){try{return e.getItem(t)}catch{}}function _e(e,t,o){try{return e.setItem(t,o),!0}catch{}}function Le(e,t){try{e.removeItem(t)}catch{}}function ce(e,t){return _e(e,rt,t.toString())}function le(e){return parseInt(ie(e,rt))||0}const Y={local:!0,session:!0},it={local:new Set,session:new Set};let ke=!1;function bn(e){ke=e}let V=typeof window>"u"?{}:window;function ct(e){const t=e+"Storage";try{if(V&&V[t]&&typeof V[t].length=="number")return V[t]}catch{}Y[e]=!1}function lt(e,t){const o=ct(e);if(!o)return;const r=ie(o,Fe);if(r!==Me){if(r){const c=le(o);for(let l=0;l<c;l++)Le(o,H+l.toString())}_e(o,Fe,Me),ce(o,0);return}const n=Math.floor(Date.now()/st)-gn,s=c=>{const l=H+c.toString(),a=ie(o,l);if(typeof a=="string"){try{const f=JSON.parse(a);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>n&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,c))return!0}catch{}Le(o,l)}};let i=le(o);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,ce(o,i)):it[e].add(c))}function at(){if(!ke){bn(!0);for(const e in Y)lt(e,t=>{const o=t.data,r=t.provider,n=o.prefix,s=T(r,n);if(!pe(s,o).length)return!1;const i=o.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function yn(e,t){const o=e.lastModifiedCached;if(o&&o>=t)return o===t;if(e.lastModifiedCached=t,o)for(const r in Y)lt(r,n=>{const s=n.data;return n.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function _n(e,t){ke||at();function o(r){let n;if(!Y[r]||!(n=ct(r)))return;const s=it[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=le(n),i>=mn||!ce(n,i+1))return;const c={cached:Math.floor(Date.now()/st),provider:e.provider,data:t};return _e(n,H+i.toString(),JSON.stringify(c))}t.lastModified&&!yn(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),o("local")||o("session"))}function Ae(){}function kn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,cn(e)}))}function wn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:o,prefix:r}=e,n=e.iconsToLoad;delete e.iconsToLoad;let s;if(!n||!(s=se(o)))return;s.prepare(o,r,n).forEach(c=>{pn(o,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{e.missing.add(a)});else try{const a=pe(e,l);if(!a.length)return;const f=e.pendingIcons;f&&a.forEach(u=>{f.delete(u)}),_n(e,l)}catch(a){console.error(a)}kn(e)})})}))}const we=(e,t)=>{const o=fn(e,!0,$e()),r=sn(o);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,Ae)}),()=>{l=!1}}const n=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:a,prefix:f}=l;if(f===c&&a===i)return;i=a,c=f,s.push(T(a,f));const u=n[a]||(n[a]=Object.create(null));u[f]||(u[f]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:f,name:u}=l,h=T(a,f),y=h.pendingIcons||(h.pendingIcons=new Set);y.has(u)||(y.add(u),n[a][f].push(u))}),s.forEach(l=>{const{provider:a,prefix:f}=l;n[a][f].length&&wn(l,n[a][f])}),t?an(t,r,s):Ae},vn=e=>new Promise((t,o)=>{const r=typeof e=="string"?z(e,!0):e;if(!r){o(e);return}we([r||e],n=>{if(n.length&&r){const s=ge(r);if(s){t({...B,...s});return}}o(e)})});function xn(e,t){const o={...e};for(const r in t){const n=t[r],s=typeof n;r in et?(n===null||n&&(s==="string"||s==="number"))&&(o[r]=n):s===typeof o[r]&&(o[r]=r==="rotate"?n%4:n)}return o}const Sn=/[\s,]+/;function In(e,t){t.split(Sn).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Cn(e,t=0){const o=e.replace(/^-?[0-9.]*/,"");function r(n){for(;n<0;)n+=4;return n%4}if(o===""){const n=parseInt(e);return isNaN(n)?0:r(n)}else if(o!==e){let n=0;switch(o){case"%":n=25;break;case"deg":n=90}if(n){let s=parseFloat(e.slice(0,e.length-o.length));return isNaN(s)?0:(s=s/n,s%1===0?r(s):0)}}return t}function Tn(e,t){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)o+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function jn(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function En(e){return"data:image/svg+xml,"+jn(e)}function On(e){return'url("'+En(e)+'")'}const De={...tt,inline:!1},Pn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Mn={display:"inline-block"},ae={"background-color":"currentColor"},ft={"background-color":"transparent"},Ne={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},He={"-webkit-mask":ae,mask:ae,background:ft};for(const e in He){const t=He[e];for(const o in Ne)t[e+"-"+o]=Ne[o]}function Fn(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function Ln(e,t){const o=xn(De,t),r=t.mode||"svg",n=r==="svg"?{...Pn}:{};e.body.indexOf("xlink:")===-1&&delete n["xmlns:xlink"];let s=typeof t.style=="string"?t.style:"";for(let g in t){const d=t[g];if(d!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":o[g]=d===!0||d==="true"||d===1;break;case"flip":typeof d=="string"&&In(o,d);break;case"color":s=s+(s.length>0&&s.trim().slice(-1)!==";"?";":"")+"color: "+d+"; ";break;case"rotate":typeof d=="string"?o[g]=Cn(d):typeof d=="number"&&(o[g]=d);break;case"ariaHidden":case"aria-hidden":d!==!0&&d!=="true"&&delete n["aria-hidden"];break;default:if(g.slice(0,3)==="on:")break;De[g]===void 0&&(n[g]=d)}}const i=Ut(e,o),c=i.attributes;if(o.inline&&(s="vertical-align: -0.125em; "+s),r==="svg"){Object.assign(n,c),s!==""&&(n.style=s);let g=0,d=t.id;return typeof d=="string"&&(d=d.replace(/-/g,"_")),{svg:!0,attributes:n,body:Jt(i.body,d?()=>d+"ID"+g++:"iconifySvelte")}}const{body:l,width:a,height:f}=e,u=r==="mask"||(r==="bg"?!1:l.indexOf("currentColor")!==-1),h=Tn(l,{...c,width:a+"",height:f+""}),_={"--svg":On(h)},x=g=>{const d=c[g];d&&(_[g]=Fn(d))};x("width"),x("height"),Object.assign(_,Mn,u?ae:ft);let m="";for(const g in _)m+=g+": "+_[g]+";";return n.style=m+s,{svg:!1,attributes:n}}$e(!0);Wt("",rn);if(typeof document<"u"&&typeof window<"u"){at();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Nt(r))&&console.error(o)}catch{console.error(o)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let o in t){const r="IconifyProviders["+o+"] is invalid.";try{const n=t[o];if(typeof n!="object"||!n||n.resources===void 0)continue;Yt(o,n)||console.error(r)}catch{console.error(r)}}}}function An(e,t,o,r,n){function s(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",s(),{data:{...B,...e}};let i;if(typeof e!="string"||(i=z(e,!1,!0))===null)return s(),null;const c=ge(i);if(!c)return o&&(!t.loading||t.loading.name!==e)&&(s(),t.name="",t.loading={name:e,abort:we([i],r)}),null;s(),t.name!==e&&(t.name=e,n&&!t.destroyed&&n(e));const l=["iconify"];return i.prefix!==""&&l.push("iconify--"+i.prefix),i.provider!==""&&l.push("iconify--"+i.provider),{data:c,classes:l}}function Dn(e,t){return e?Ln({...B,...e},t):null}function ze(e){let t;function o(s,i){return s[0].svg?Hn:Nn}let r=o(e),n=r(e);return{c(){n.c(),t=O()},l(s){n.l(s),t=O()},m(s,i){n.m(s,i),I(s,t,i)},p(s,i){r===(r=o(s))&&n?n.p(s,i):(n.d(1),n=r(s),n&&(n.c(),n.m(t.parentNode,t)))},d(s){s&&b(t),n.d(s)}}}function Nn(e){let t,o=[e[0].attributes],r={};for(let n=0;n<o.length;n+=1)r=G(r,o[n]);return{c(){t=P("span"),this.h()},l(n){t=M(n,"SPAN",{}),F(t).forEach(b),this.h()},h(){xe(t,r)},m(n,s){I(n,t,s)},p(n,s){xe(t,r=Je(o,[s&1&&n[0].attributes]))},d(n){n&&b(t)}}}function Hn(e){let t,o,r=e[0].body+"",n=[e[0].attributes],s={};for(let i=0;i<n.length;i+=1)s=G(s,n[i]);return{c(){t=gt("svg"),o=new mt(!0),this.h()},l(i){t=bt(i,"svg",{});var c=F(t);o=yt(c,!0),c.forEach(b),this.h()},h(){o.a=null,Se(t,s)},m(i,c){I(i,t,c),o.m(r,t)},p(i,c){c&1&&r!==(r=i[0].body+"")&&o.p(r),Se(t,s=Je(n,[c&1&&i[0].attributes]))},d(i){i&&b(t)}}}function zn(e){let t,o=e[0]&&ze(e);return{c(){o&&o.c(),t=O()},l(r){o&&o.l(r),t=O()},m(r,n){o&&o.m(r,n),I(r,t,n)},p(r,[n]){r[0]?o?o.p(r,n):(o=ze(r),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},i:ne,o:ne,d(r){r&&b(t),o&&o.d(r)}}}function Bn(e,t,o){const r={name:"",loading:null,destroyed:!1};let n=!1,s=0,i;const c=a=>{typeof t.onLoad=="function"&&t.onLoad(a),_t()("load",{icon:a})};function l(){o(3,s++,s)}return Ve(()=>{o(2,n=!0)}),pt(()=>{o(1,r.destroyed=!0,r),r.loading&&(r.loading.abort(),o(1,r.loading=null,r))}),e.$$set=a=>{o(6,t=G(G({},t),ve(a)))},e.$$.update=()=>{{const a=An(t.icon,r,n,l,c);o(0,i=a?Dn(a.data,t):null),i&&a.classes&&o(0,i.attributes.class=(typeof t.class=="string"?t.class+" ":"")+a.classes.join(" "),i)}},t=ve(t),[i,r,n,s]}class Rn extends J{constructor(t){super(),W(this,t,Bn,zn,X,{})}}const qn=e=>({}),Be=e=>({}),Vn=e=>({}),Re=e=>({});function Qn(e){let t;const o=e[6].fallback,r=Qe(o,e,e[5],Be);return{c(){r&&r.c()},l(n){r&&r.l(n)},m(n,s){r&&r.m(n,s),t=!0},p(n,s){r&&r.p&&(!t||s&32)&&Ue(r,o,n,n[5],t?Ke(o,n[5],s,qn):Ge(n[5]),Be)},i(n){t||(E(r,n),t=!0)},o(n){j(r,n),t=!1},d(n){r&&r.d(n)}}}function Un(e){let t,o;return t=new Rn({props:{icon:e[0],class:e[1]}}),t.$on("mouseover",e[7]),{c(){fe(t.$$.fragment)},l(r){ue(t.$$.fragment,r)},m(r,n){de(t,r,n),o=!0},p(r,n){const s={};n&1&&(s.icon=r[0]),n&2&&(s.class=r[1]),t.$set(s)},i(r){o||(E(t.$$.fragment,r),o=!0)},o(r){j(t.$$.fragment,r),o=!1},d(r){he(t,r)}}}function Gn(e){let t;const o=e[6].fallback,r=Qe(o,e,e[5],Re);return{c(){r&&r.c()},l(n){r&&r.l(n)},m(n,s){r&&r.m(n,s),t=!0},p(n,s){r&&r.p&&(!t||s&32)&&Ue(r,o,n,n[5],t?Ke(o,n[5],s,Vn):Ge(n[5]),Re)},i(n){t||(E(r,n),t=!0)},o(n){j(r,n),t=!1},d(n){r&&r.d(n)}}}function Kn(e){let t,o,r,n={ctx:e,current:null,token:null,hasCatch:!0,pending:Gn,then:Un,catch:Qn,blocks:[,,,]};return Ce(o=e[2],n),{c(){t=O(),n.block.c()},l(s){t=O(),n.block.l(s)},m(s,i){I(s,t,i),n.block.m(s,n.anchor=i),n.mount=()=>t.parentNode,n.anchor=t,r=!0},p(s,[i]){e=s,n.ctx=e,i&4&&o!==(o=e[2])&&Ce(o,n)||Et(n,e,i)},i(s){r||(E(n.block),r=!0)},o(s){for(let i=0;i<3;i+=1){const c=n.blocks[i];j(c)}r=!1},d(s){s&&b(t),n.block.d(s),n.token=null,n=null}}}function Xn(e,t,o){let{$$slots:r={},$$scope:n}=t,{icon:s}=t,{loaded:i=!1}=t,{preload:c=[]}=t,{class:l=""}=t,a;Ve(()=>{o(3,i=Ht(s)),we(c),i||o(2,a=vn(s))});function f(u){kt.call(this,e,u)}return e.$$set=u=>{"icon"in u&&o(0,s=u.icon),"loaded"in u&&o(3,i=u.loaded),"preload"in u&&o(4,c=u.preload),"class"in u&&o(1,l=u.class),"$$scope"in u&&o(5,n=u.$$scope)},[s,l,a,i,c,n,r,f]}class Jn extends J{constructor(t){super(),W(this,t,Xn,Kn,X,{icon:0,loaded:3,preload:4,class:1})}}function Wn(e){let t;return{c(){t=P("div"),this.h()},l(o){t=M(o,"DIV",{slot:!0,class:!0}),F(t).forEach(b),this.h()},h(){S(t,"slot","fallback"),S(t,"class","h-full w-full rounded-full border-2 border-neutral-800 hover:bg-neutral-800 dark:border-neutral-200 dark:hover:bg-neutral-200")},m(o,r){I(o,t,r)},p:ne,d(o){o&&b(t)}}}function Yn(e){let t,o,r,n,s;return o=new Jn({props:{icon:(e[1]?"ph:sun":"ph:moon")+(e[0]?"-fill":""),preload:["ph:sun-fill","ph:moon-fill"],class:"h-full w-full",$$slots:{fallback:[Wn]},$$scope:{ctx:e}}}),{c(){t=P("button"),fe(o.$$.fragment),this.h()},l(i){t=M(i,"BUTTON",{class:!0,"aria-label":!0});var c=F(t);ue(o.$$.fragment,c),c.forEach(b),this.h()},h(){S(t,"class","aspect-square w-9 rounded-full p-1"),S(t,"aria-label","Toggle Dark Mode")},m(i,c){I(i,t,c),de(o,t,null),r=!0,n||(s=[$(t,"click",Xe.toggle),$(t,"mouseenter",e[2]),$(t,"mouseleave",e[3])],n=!0)},p(i,[c]){const l={};c&3&&(l.icon=(i[1]?"ph:sun":"ph:moon")+(i[0]?"-fill":"")),c&16&&(l.$$scope={dirty:c,ctx:i}),o.$set(l)},i(i){r||(E(o.$$.fragment,i),r=!0)},o(i){j(o.$$.fragment,i),r=!1},d(i){i&&b(t),he(o),n=!1,wt(s)}}}function Zn(e,t,o){let r;vt(e,Xe,c=>o(1,r=c));let n=!1;return[n,r,()=>o(0,n=!0),()=>o(0,n=!1)]}class $n extends J{constructor(t){super(),W(this,t,Zn,Yn,X,{})}}function qe(e){let t,o="home";return{c(){t=P("a"),t.textContent=o,this.h()},l(r){t=M(r,"A",{class:!0,href:!0,"data-svelte-h":!0}),It(t)!=="svelte-9qrpzs"&&(t.textContent=o),this.h()},h(){S(t,"class","pointer-events-auto relative font-serif text-lg hover:font-bold"),S(t,"href",jt+"/")},m(r,n){I(r,t,n)},d(r){r&&b(t)}}}function eo(e){let t,o,r,n,s,i;r=new $n({});let c=e[0]&&qe();return{c(){t=P("nav"),o=P("span"),fe(r.$$.fragment),n=xt(),c&&c.c(),this.h()},l(l){t=M(l,"NAV",{class:!0});var a=F(t);o=M(a,"SPAN",{class:!0});var f=F(o);ue(r.$$.fragment,f),f.forEach(b),n=St(a),c&&c.l(a),a.forEach(b),this.h()},h(){S(o,"class","pointer-events-auto relative"),S(t,"class",s="top pointer-events-none fixed z-50 flex w-full items-center justify-between px-6 py-4 xl:p-10 "+(e[1]?"overlay":"")+" svelte-n4d3op")},m(l,a){I(l,t,a),Ie(t,o),de(r,o,null),Ie(t,n),c&&c.m(t,null),i=!0},p(l,[a]){l[0]?c||(c=qe(),c.c(),c.m(t,null)):c&&(c.d(1),c=null),(!i||a&2&&s!==(s="top pointer-events-none fixed z-50 flex w-full items-center justify-between px-6 py-4 xl:p-10 "+(l[1]?"overlay":"")+" svelte-n4d3op"))&&S(t,"class",s)},i(l){i||(E(r.$$.fragment,l),i=!0)},o(l){j(r.$$.fragment,l),i=!1},d(l){l&&b(t),he(r),c&&c.d()}}}function to(e,t,o){let{showHome:r=!1}=t,{overlayXl:n=!1}=t;return e.$$set=s=>{"showHome"in s&&o(0,r=s.showHome),"overlayXl"in s&&o(1,n=s.overlayXl)},[r,n]}class io extends J{constructor(t){super(),W(this,t,to,eo,X,{showHome:0,overlayXl:1})}}export{Jn as F,io as S};
