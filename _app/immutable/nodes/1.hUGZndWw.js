import{s as w,b as y,e as v,h as A,d as h,f as C,c as x,g as E,i as T,j as _,l as $,k as b,q as I,t as S,m as j,o as H,n as L}from"../chunks/scheduler.zSCSNv7F.js";import{S as z,i as D,c as M,a as N,m as V,t as B,b as F,d as G}from"../chunks/index.Dk43XADV.js";import{b as J}from"../chunks/paths.rEJaruLh.js";import{s as K}from"../chunks/entry.BLY1qwgx.js";import{L as O}from"../chunks/LookingTube.8TdSqDJw.js";const P=()=>{const a=K;return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},updated:a.updated}},Q={subscribe(a){return P().page.subscribe(a)}};function R(a){var k,p;let t,i,e=a[0].status+"",c,f,n,m=((p=(k=a[0])==null?void 0:k.error)==null?void 0:p.message)+"",u;return{c(){t=v("h1"),i=S("error "),c=S(e),f=y(),n=v("h2"),u=S(m),this.h()},l(o){t=x(o,"H1",{class:!0});var l=E(t);i=j(l,"error "),c=j(l,e),l.forEach(h),f=C(o),n=x(o,"H2",{class:!0});var r=E(n);u=j(r,m),r.forEach(h),this.h()},h(){_(t,"class","text-center font-serif text-4xl"),_(n,"class","text-center font-serif text-lg")},m(o,l){$(o,t,l),b(t,i),b(t,c),$(o,f,l),$(o,n,l),b(n,u)},p(o,l){var r,s;l&1&&e!==(e=o[0].status+"")&&H(c,e),l&1&&m!==(m=((s=(r=o[0])==null?void 0:r.error)==null?void 0:s.message)+"")&&H(u,m)},d(o){o&&(h(t),h(f),h(n))}}}function U(a){let t,i="page not found";return{c(){t=v("h1"),t.textContent=i,this.h()},l(e){t=x(e,"H1",{class:!0,"data-svelte-h":!0}),T(t)!=="svelte-fdqjvz"&&(t.textContent=i),this.h()},h(){_(t,"class","text-center font-serif text-4xl")},m(e,c){$(e,t,c)},p:L,d(e){e&&h(t)}}}function W(a){let t,i,e,c,f,n,m,u,k="go home",p;document.title=t="The Spyglass | "+(a[0].status===404?"page not found":"error");function o(s,d){return s[0].status===404?U:R}let l=o(a),r=l(a);return n=new O({props:{class:"mx-auto my-4 h-8"}}),{c(){i=y(),e=v("main"),r.c(),c=y(),f=v("div"),M(n.$$.fragment),m=y(),u=v("a"),u.textContent=k,this.h()},l(s){A("svelte-qkei0o",document.head).forEach(h),i=C(s),e=x(s,"MAIN",{class:!0});var g=E(e);r.l(g),c=C(g),f=x(g,"DIV",{class:!0});var q=E(f);N(n.$$.fragment,q),q.forEach(h),m=C(g),u=x(g,"A",{href:!0,class:!0,"data-svelte-h":!0}),T(u)!=="svelte-172hn3j"&&(u.textContent=k),g.forEach(h),this.h()},h(){_(f,"class","hover:boop"),_(u,"href",J+"/"),_(u,"class","block text-center font-serif hover:font-bold hover:underline"),_(e,"class","flex h-screen w-screen flex-col items-center justify-center")},m(s,d){$(s,i,d),$(s,e,d),r.m(e,null),b(e,c),b(e,f),V(n,f,null),b(e,m),b(e,u),p=!0},p(s,[d]){(!p||d&1)&&t!==(t="The Spyglass | "+(s[0].status===404?"page not found":"error"))&&(document.title=t),l===(l=o(s))&&r?r.p(s,d):(r.d(1),r=l(s),r&&(r.c(),r.m(e,c)))},i(s){p||(B(n.$$.fragment,s),p=!0)},o(s){F(n.$$.fragment,s),p=!1},d(s){s&&(h(i),h(e)),r.d(),G(n)}}}function X(a,t,i){let e;return I(a,Q,c=>i(0,e=c)),[e]}let re=class extends z{constructor(t){super(),D(this,t,X,W,w,{})}};export{re as component};