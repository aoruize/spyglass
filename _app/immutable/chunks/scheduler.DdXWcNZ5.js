var G=Object.defineProperty;var z=(t,e,n)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>z(t,typeof e!="symbol"?e+"":e,n);function F(){}const ut=t=>t;function I(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function ft(){return Object.create(null)}function W(t){t.forEach(U)}function _t(t){return typeof t=="function"}function ht(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function D(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function H(t){return t.split(",").map(e=>e.trim().split(" ").filter(Boolean))}function dt(t,e){const n=H(t.srcset),i=H(e||"");return i.length===n.length&&i.every(([s,r],l)=>r===n[l][1]&&(D(n[l][0],s)||D(s,n[l][0])))}function mt(t){return Object.keys(t).length===0}function J(t,...e){if(t==null){for(const i of e)i(void 0);return F}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function pt(t,e,n){t.$$.on_destroy.push(J(e,n))}function yt(t,e,n,i){if(t){const s=P(t,e,n,i);return t[0](s)}}function P(t,e,n,i){return t[1]&&i?I(n.ctx.slice(),t[1](i(e))):n.ctx}function gt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],l=Math.max(e.dirty.length,s.length);for(let o=0;o<l;o+=1)r[o]=e.dirty[o]|s[o];return r}return e.dirty|s}return e.dirty}function bt(t,e,n,i,s,r){if(s){const l=P(e,n,i,r);t.p(l,s)}}function xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Et(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function wt(t){return t??""}let y=!1;function Tt(){y=!0}function Nt(){y=!1}function K(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&c.push(u)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:K(1,s,R=>e[n[R]].claim_order,a))-1;i[c]=n[u]+1;const k=u+1;n[k]=c,s=Math.max(k,s)}const r=[],l=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(r.push(e[c-1]);o>=c;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);r.reverse(),l.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<l.length;c++){for(;a<r.length&&l[c].claim_order>=r[a].claim_order;)a++;const u=a<r.length?r[a]:null;t.insertBefore(l[c],u)}}function V(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=N("style");return e.textContent="/* empty */",Y(X(t),e),e.sheet}function Y(t,e){return V(t.head||t,e),e.sheet}function Z(t,e){if(y){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function tt(t,e,n){y&&!n?Z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function At(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function N(t){return document.createElement(t)}function j(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function kt(){return v(" ")}function Dt(){return v("")}function Ht(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Lt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function A(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const et=["width","height"];function Ct(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&et.indexOf(i)===-1?t[i]=e[i]:A(t,i,e[i])}function Mt(t,e){for(const n in e)A(t,n,e[n])}function Pt(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:A(t,e,n)}function jt(t){return t.dataset.svelteH}function St(t){return Array.from(t.childNodes)}function S(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,i,s=!1){S(t);const r=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const c=n(o);return c===void 0?t.splice(l,1):t[l]=c,s||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const c=n(o);return c===void 0?t.splice(l,1):t[l]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function q(t,e,n,i){return O(t,s=>s.nodeName===e,s=>{const r=[];for(let l=0;l<s.attributes.length;l++){const o=s.attributes[l];n[o.name]||r.push(o.name)}r.forEach(l=>s.removeAttribute(l))},()=>i(e))}function Ot(t,e,n){return q(t,e,n,N)}function qt(t,e,n){return q(t,e,n,j)}function nt(t,e){return O(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(e),!0)}function Bt(t){return nt(t," ")}function L(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Rt(t,e){const n=L(t,"HTML_TAG_START",0),i=L(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new b(e);S(t);const s=t.splice(n,i-n+1);w(s[0]),w(s[s.length-1]);const r=s.slice(1,s.length-1);if(r.length===0)return new b(e);for(const l of r)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(e,r)}function Gt(t,e){e=""+e,t.data!==e&&(t.data=e)}function zt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Ft(t,e,n){t.classList.toggle(e,!!n)}function it(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function It(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const r=s.textContent.trim();r===`HEAD_${t}_END`?(i-=1,n.push(s)):r===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class st{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=j(n.nodeName):this.e=N(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)$(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class b extends st{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)tt(this.t,this.n[i],n)}}function Ut(t,e){return new t(e)}let p;function x(t){p=t}function g(){if(!p)throw new Error("Function called outside component initialization");return p}function Wt(t){g().$$.on_mount.push(t)}function Jt(t){g().$$.after_update.push(t)}function Kt(t){g().$$.on_destroy.push(t)}function Qt(){const t=g();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=it(e,n,{cancelable:i});return s.slice().forEach(l=>{l.call(t,r)}),!r.defaultPrevented}return!0}}function Vt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],C=[];let h=[];const M=[],B=Promise.resolve();let T=!1;function lt(){T||(T=!0,B.then(ct))}function Xt(){return lt(),B}function rt(t){h.push(t)}const E=new Set;let _=0;function ct(){if(_!==0)return;const t=p;do{try{for(;_<d.length;){const e=d[_];_++,x(e),ot(e.$$)}}catch(e){throw d.length=0,_=0,e}for(x(null),d.length=0,_=0;C.length;)C.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];E.has(n)||(E.add(n),n())}h.length=0}while(d.length);for(;M.length;)M.pop()();T=!1,E.clear(),x(t)}function ot(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rt)}}function Yt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{Yt as $,Xt as A,yt as B,bt as C,xt as D,gt as E,Ft as F,Ht as G,rt as H,Lt as I,Kt as J,I as K,Et as L,Ct as M,b as N,Rt as O,Mt as P,Qt as Q,Vt as R,W as S,X as T,vt as U,_t as V,it as W,ut as X,ft as Y,ct as Z,mt as _,kt as a,p as a0,x as a1,U as a2,d as a3,lt as a4,Tt as a5,Nt as a6,D as a7,dt as a8,Pt as a9,wt as aa,Ot as b,Bt as c,St as d,N as e,w as f,jt as g,A as h,tt as i,Z as j,It as k,nt as l,Gt as m,F as n,At as o,pt as p,j as q,qt as r,ht as s,v as t,zt as u,Dt as v,Jt as w,Wt as x,C as y,Ut as z};
