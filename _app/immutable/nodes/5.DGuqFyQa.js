import{g as N,_ as O,a as P,b as z,c as D,d as H,e as X,f as B,h as F,i as G,j as J,k as K,l as Q,m as U,n as V,o as W,p as Y,q as Z,r as x,s as tt}from"../chunks/getMostRecentArticle.D2xEmV5L.js";import{s as et,e as f,a as T,b as E,h as nt,c as g,d as s,f as M,j as l,k as d,l as h,n as it}from"../chunks/scheduler.zSCSNv7F.js";import{S as at,i as _t,c as S,a as R,m as j,t as I,b as q,d as C}from"../chunks/index.Dk43XADV.js";import{A as lt}from"../chunks/ArticleList.BzofWrZ9.js";import{S as st}from"../chunks/SiteNavigation.C8u9ZxLD.js";function ot(r){let e,n,i;return{c(){e=f("meta"),n=E(),i=f("meta"),this.h()},l(a){e=g(a,"META",{property:!0,content:!0}),n=M(a),i=g(a,"META",{property:!0,content:!0}),this.h()},h(){l(e,"property","og:image"),l(e,"content",r[1].img.src),l(i,"property","thumbnail"),l(i,"content",r[1].img.src)},m(a,o){h(a,e,o),h(a,n,o),h(a,i,o)},p:it,d(a){a&&(s(e),s(n),s(i))}}}function rt(r){let e;return{c(){e=f("meta"),this.h()},l(n){e=g(n,"META",{property:!0,content:!0}),this.h()},h(){l(e,"property","og:url"),l(e,"content","https://rhhspyglass.com")},m(n,i){h(n,e,i)},d(n){n&&s(e)}}}function mt(r){let e,n,i,a,o,u,y,$,b,A,p,v;document.title=e=w;let m=r[1]&&ot(r),c=rt();return b=new st({props:{showHome:!0,overlayXl:!0}}),p=new lt({props:{articles:r[0].articles}}),{c(){n=f("meta"),i=f("meta"),a=f("meta"),o=f("meta"),m&&m.c(),u=T(),c&&c.c(),y=T(),$=E(),S(b.$$.fragment),A=E(),S(p.$$.fragment),this.h()},l(t){const _=nt("svelte-192zryt",document.head);n=g(_,"META",{name:!0,content:!0}),i=g(_,"META",{property:!0,content:!0}),a=g(_,"META",{property:!0,content:!0}),o=g(_,"META",{property:!0,content:!0}),m&&m.l(_),u=T(),c&&c.l(_),y=T(),_.forEach(s),$=M(t),R(b.$$.fragment,t),A=M(t),R(p.$$.fragment,t),this.h()},h(){l(n,"name","description"),l(n,"content",L),l(i,"property","og:title"),l(i,"content",w),l(a,"property","og:description"),l(a,"content",L),l(o,"property","og:type"),l(o,"content","website")},m(t,_){d(document.head,n),d(document.head,i),d(document.head,a),d(document.head,o),m&&m.m(document.head,null),d(document.head,u),c&&c.m(document.head,null),d(document.head,y),h(t,$,_),j(b,t,_),h(t,A,_),j(p,t,_),v=!0},p(t,[_]){(!v||_&0)&&e!==(e=w)&&(document.title=e),t[1]&&m.p(t,_);const k={};_&1&&(k.articles=t[0].articles),p.$set(k)},i(t){v||(I(b.$$.fragment,t),I(p.$$.fragment,t),v=!0)},o(t){q(b.$$.fragment,t),q(p.$$.fragment,t),v=!1},d(t){t&&(s($),s(A)),s(n),s(i),s(a),s(o),m&&m.d(t),s(u),c&&c.d(t),s(y),C(b,t),C(p,t)}}}const w="The Spyglass | past issues",L="Read our past issues.";function pt(r,e,n){let{data:i}=e;const a=Object.assign({"../../lib/thumbnails/fall_2018.pdf.1.png":O,"../../lib/thumbnails/fall_2019.pdf.1.png":P,"../../lib/thumbnails/fall_2020.pdf.1.png":z,"../../lib/thumbnails/fall_2022.pdf.1.png":D,"../../lib/thumbnails/fall_2023.pdf.1.png":H,"../../lib/thumbnails/spring_2020.pdf.1.png":X,"../../lib/thumbnails/spring_2021.pdf.1.png":B,"../../lib/thumbnails/spring_2023.pdf.1.png":F,"../../lib/thumbnails/spring_2024.pdf.1.png":G,"../../lib/thumbnails/summer_2018.pdf.1.png":J,"../../lib/thumbnails/summer_2019.pdf.1.png":K,"../../lib/thumbnails/summer_2020.pdf.1.png":Q,"../../lib/thumbnails/summer_2024.pdf.1.png":U,"../../lib/thumbnails/winter_2017.pdf.1.png":V,"../../lib/thumbnails/winter_2019.pdf.1.png":W,"../../lib/thumbnails/winter_2020.pdf.1.png":Y,"../../lib/thumbnails/winter_2021.pdf.1.png":Z,"../../lib/thumbnails/winter_2023.pdf.1.png":x,"../../lib/thumbnails/winter_2024.pdf.1.png":tt}),o=N(i.articles,a,"../../lib");return r.$$set=u=>{"data"in u&&n(0,i=u.data)},[i,o]}class dt extends at{constructor(e){super(),_t(this,e,pt,mt,et,{data:0})}}export{dt as component};
