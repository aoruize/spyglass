import{g as N,_ as O,a as P,b as z,c as D,d as H,e as B,f as F,h as G,i as J,j as K,k as Q,l as U,m as V,n as W,o as X,p as Y,q as Z,r as x,s as tt}from"../chunks/getMostRecentArticle.D2xEmV5L.js";import{s as et,e as f,a as T,b as E,h as it,c as g,d as s,f as M,j as l,k as d,l as h,n as nt}from"../chunks/scheduler.zSCSNv7F.js";import{S as at,i as _t,c as S,a as R,m as j,t as I,b as L,d as q}from"../chunks/index.Dk43XADV.js";import{A as lt}from"../chunks/ArticleList.Baew_bJW.js";import{S as st}from"../chunks/SiteNavigation.EtmL4-2M.js";function ot(r){let e,i,n;return{c(){e=f("meta"),i=E(),n=f("meta"),this.h()},l(a){e=g(a,"META",{property:!0,content:!0}),i=M(a),n=g(a,"META",{property:!0,content:!0}),this.h()},h(){l(e,"property","og:image"),l(e,"content",r[1].img.src),l(n,"property","thumbnail"),l(n,"content",r[1].img.src)},m(a,o){h(a,e,o),h(a,i,o),h(a,n,o)},p:nt,d(a){a&&(s(e),s(i),s(n))}}}function rt(r){let e;return{c(){e=f("meta"),this.h()},l(i){e=g(i,"META",{property:!0,content:!0}),this.h()},h(){l(e,"property","og:url"),l(e,"content","https://rhhspyglass.com")},m(i,n){h(i,e,n)},d(i){i&&s(e)}}}function mt(r){let e,i,n,a,o,u,y,$,b,A,p,v;document.title=e=w;let m=r[1]&&ot(r),c=rt();return b=new st({props:{showHome:!0,overlayLg:!0}}),p=new lt({props:{articles:r[0].articles}}),{c(){i=f("meta"),n=f("meta"),a=f("meta"),o=f("meta"),m&&m.c(),u=T(),c&&c.c(),y=T(),$=E(),S(b.$$.fragment),A=E(),S(p.$$.fragment),this.h()},l(t){const _=it("svelte-192zryt",document.head);i=g(_,"META",{name:!0,content:!0}),n=g(_,"META",{property:!0,content:!0}),a=g(_,"META",{property:!0,content:!0}),o=g(_,"META",{property:!0,content:!0}),m&&m.l(_),u=T(),c&&c.l(_),y=T(),_.forEach(s),$=M(t),R(b.$$.fragment,t),A=M(t),R(p.$$.fragment,t),this.h()},h(){l(i,"name","description"),l(i,"content",C),l(n,"property","og:title"),l(n,"content",w),l(a,"property","og:description"),l(a,"content",C),l(o,"property","og:type"),l(o,"content","website")},m(t,_){d(document.head,i),d(document.head,n),d(document.head,a),d(document.head,o),m&&m.m(document.head,null),d(document.head,u),c&&c.m(document.head,null),d(document.head,y),h(t,$,_),j(b,t,_),h(t,A,_),j(p,t,_),v=!0},p(t,[_]){(!v||_&0)&&e!==(e=w)&&(document.title=e),t[1]&&m.p(t,_);const k={};_&1&&(k.articles=t[0].articles),p.$set(k)},i(t){v||(I(b.$$.fragment,t),I(p.$$.fragment,t),v=!0)},o(t){L(b.$$.fragment,t),L(p.$$.fragment,t),v=!1},d(t){t&&(s($),s(A)),s(i),s(n),s(a),s(o),m&&m.d(t),s(u),c&&c.d(t),s(y),q(b,t),q(p,t)}}}const w="The Spyglass | issues",C="Read our issues from this year.";function pt(r,e,i){let{data:n}=e;const a=Object.assign({"../../lib/thumbnails/fall_2018.pdf.1.png":O,"../../lib/thumbnails/fall_2019.pdf.1.png":P,"../../lib/thumbnails/fall_2020.pdf.1.png":z,"../../lib/thumbnails/fall_2022.pdf.1.png":D,"../../lib/thumbnails/fall_2023.pdf.1.png":H,"../../lib/thumbnails/spring_2020.pdf.1.png":B,"../../lib/thumbnails/spring_2021.pdf.1.png":F,"../../lib/thumbnails/spring_2023.pdf.1.png":G,"../../lib/thumbnails/spring_2024.pdf.1.png":J,"../../lib/thumbnails/summer_2018.pdf.1.png":K,"../../lib/thumbnails/summer_2019.pdf.1.png":Q,"../../lib/thumbnails/summer_2020.pdf.1.png":U,"../../lib/thumbnails/summer_2024.pdf.1.png":V,"../../lib/thumbnails/winter_2017.pdf.1.png":W,"../../lib/thumbnails/winter_2019.pdf.1.png":X,"../../lib/thumbnails/winter_2020.pdf.1.png":Y,"../../lib/thumbnails/winter_2021.pdf.1.png":Z,"../../lib/thumbnails/winter_2023.pdf.1.png":x,"../../lib/thumbnails/winter_2024.pdf.1.png":tt}),o=N(n.articles,a,"../../lib");return r.$$set=u=>{"data"in u&&i(0,n=u.data)},[n,o]}class dt extends at{constructor(e){super(),_t(this,e,pt,mt,et,{data:0})}}export{dt as component};