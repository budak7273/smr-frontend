import{S as t,i as e,s,e as a,j as r,k as l,c as n,a as o,m as c,d as i,n as f,b as u,f as g,o as d,r as h,u as m,w as $,x as p,v,N as x,M as b,aj as j,O as k,C as w,ad as G,t as C,g as E,R as P,h as y,X as M,$ as D}from"../../chunks/vendor-ecacde99.js";import{h as I}from"../../chunks/graphql-7c12eb8b.js";import{G as V}from"../../chunks/GuideCard-92f7df9a.js";import{P as N}from"../../chunks/PageControls-75128409.js";import{F as O}from"../../chunks/FakeCard-f3cfd102.js";import{b as A}from"../../chunks/paths-6758d194.js";import"../../chunks/image-ea27d7b2.js";function B(t,e,s){const a=t.slice();return a[11]=e[s],a}function F(t,e,s){const a=t.slice();return a[8]=e[s],a}function R(t){let e,s,r,l=t[0].data.getGuides.guides,c=[];for(let a=0;a<l.length;a+=1)c[a]=H(B(t,l,a));const f=t=>m(c[t],1,1,(()=>{c[t]=null}));return{c(){e=a("div");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){e=n(t,"DIV",{class:!0});var s=o(e);for(let e=0;e<c.length;e+=1)c[e].l(s);s.forEach(i),this.h()},h(){u(e,"class",s="grid "+t[2]+" gap-4")},m(t,s){g(t,e,s);for(let a=0;a<c.length;a+=1)c[a].m(e,null);r=!0},p(t,a){if(1&a){let s;for(l=t[0].data.getGuides.guides,s=0;s<l.length;s+=1){const r=B(t,l,s);c[s]?(c[s].p(r,a),p(c[s],1)):(c[s]=H(r),c[s].c(),p(c[s],1),c[s].m(e,null))}for(h(),s=l.length;s<c.length;s+=1)f(s);$()}(!r||4&a&&s!==(s="grid "+t[2]+" gap-4"))&&u(e,"class",s)},i(t){if(!r){for(let t=0;t<l.length;t+=1)p(c[t]);r=!0}},o(t){c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)m(c[e]);r=!1},d(t){t&&i(e),G(c,t)}}}function S(t){let e,s,r,l=t[0].error.message+"";return{c(){e=a("p"),s=C("Oh no... "),r=C(l)},l(t){e=n(t,"P",{});var a=o(e);s=E(a,"Oh no... "),r=E(a,l),a.forEach(i)},m(t,a){g(t,e,a),P(e,s),P(e,r)},p(t,e){1&e&&l!==(l=t[0].error.message+"")&&y(r,l)},i:M,o:M,d(t){t&&i(e)}}}function q(t){let e,s,r,l=Array(J),c=[];for(let a=0;a<l.length;a+=1)c[a]=X(F(t,l,a));return{c(){e=a("div");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){e=n(t,"DIV",{class:!0});var s=o(e);for(let e=0;e<c.length;e+=1)c[e].l(s);s.forEach(i),this.h()},h(){u(e,"class",s="grid "+t[2]+" gap-4")},m(t,s){g(t,e,s);for(let a=0;a<c.length;a+=1)c[a].m(e,null);r=!0},p(t,a){(!r||4&a&&s!==(s="grid "+t[2]+" gap-4"))&&u(e,"class",s)},i(t){if(!r){for(let t=0;t<l.length;t+=1)p(c[t]);r=!0}},o(t){c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)m(c[e]);r=!1},d(t){t&&i(e),G(c,t)}}}function H(t){let e,s;return e=new V({props:{guide:t[11],logo:t[11].user.avatar}}),{c(){r(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,a){d(e,t,a),s=!0},p(t,s){const a={};1&s&&(a.guide=t[11]),1&s&&(a.logo=t[11].user.avatar),e.$set(a)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function X(t){let e,s;return e=new O({}),{c(){r(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,a){d(e,t,a),s=!0},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function z(t){let e,s,x,b,j,k,w,G,C;s=new N({props:{totalPages:Math.ceil(t[1]/J),currentPage:t[4]}});const E=[q,S,R],P=[];function y(t,e){return t[0].fetching?0:t[0].error?1:2}return b=y(t),j=P[b]=E[b](t),G=new N({props:{totalPages:Math.ceil(t[1]/J),currentPage:t[4]}}),{c(){e=a("div"),r(s.$$.fragment),x=l(),j.c(),k=l(),w=a("div"),r(G.$$.fragment),this.h()},l(t){e=n(t,"DIV",{class:!0});var a=o(e);c(s.$$.fragment,a),a.forEach(i),x=f(t),j.l(t),k=f(t),w=n(t,"DIV",{class:!0});var r=o(w);c(G.$$.fragment,r),r.forEach(i),this.h()},h(){u(e,"class","mb-5 ml-auto flex justify-end"),u(w,"class","mt-5 ml-auto flex justify-end")},m(t,a){g(t,e,a),d(s,e,null),g(t,x,a),P[b].m(t,a),g(t,k,a),g(t,w,a),d(G,w,null),C=!0},p(t,[e]){const a={};2&e&&(a.totalPages=Math.ceil(t[1]/J)),s.$set(a);let r=b;b=y(t),b===r?P[b].p(t,e):(h(),m(P[r],1,1,(()=>{P[r]=null})),$(),j=P[b],j?j.p(t,e):(j=P[b]=E[b](t),j.c()),p(j,1),j.m(k.parentNode,k));const l={};2&e&&(l.totalPages=Math.ceil(t[1]/J)),G.$set(l)},i(t){C||(p(s.$$.fragment,t),p(j),p(G.$$.fragment,t),C=!0)},o(t){m(s.$$.fragment,t),m(j),m(G.$$.fragment,t),C=!1},d(t){t&&i(e),v(s),t&&i(x),P[b].d(t),t&&i(k),t&&i(w),v(G)}}}const J=40;function K(t,e,s){let a,r;var l,n;let{colCount:o=4}=e;const c=x(I,{offset:0,limit:J});b(t,c,(t=>s(0,r=t)));const i=w(1);let f;return i.subscribe((t=>{j(c,r.variables.offset=(t-1)*J,r),r.reexecute()})),k(c),t.$$set=t=>{"colCount"in t&&s(5,o=t.colCount)},t.$$.update=()=>{193&t.$$.dirty&&s(1,f=(null===s(7,n=null===s(6,l=null==r?void 0:r.data)||void 0===l?void 0:l.getGuides)||void 0===n?void 0:n.count)||0),32&t.$$.dirty&&s(2,a=4==o?"2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1":"2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-1")},[r,f,a,c,i,o,l,n]}class L extends t{constructor(t){super(),e(this,t,K,z,s,{colCount:5})}}function Q(t){let e,s,h,$,x,b,j,k,w,G;return w=new L({props:{colCount:5}}),{c(){e=l(),s=a("div"),h=a("h1"),$=C("Guides"),x=l(),b=a("a"),j=C("New Guide"),k=l(),r(w.$$.fragment),this.h()},l(t){D('[data-svelte="svelte-1o09skp"]',document.head).forEach(i),e=f(t),s=n(t,"DIV",{class:!0});var a=o(s);h=n(a,"H1",{class:!0});var r=o(h);$=E(r,"Guides"),r.forEach(i),x=f(a),b=n(a,"A",{href:!0,class:!0});var l=o(b);j=E(l,"New Guide"),l.forEach(i),a.forEach(i),k=f(t),c(w.$$.fragment,t),this.h()},h(){document.title="Guides - SMR",u(h,"class","text-4xl my-4 font-bold"),u(b,"href",A+"/new-guide"),u(b,"class","rounded text-base bg-blue-500 py-2 px-4 h-fit"),u(s,"class","flex justify-between items-center")},m(t,a){g(t,e,a),g(t,s,a),P(s,h),P(h,$),P(s,x),P(s,b),P(b,j),g(t,k,a),d(w,t,a),G=!0},p:M,i(t){G||(p(w.$$.fragment,t),G=!0)},o(t){m(w.$$.fragment,t),G=!1},d(t){t&&i(e),t&&i(s),t&&i(k),v(w,t)}}}class T extends t{constructor(t){super(),e(this,t,null,Q,s,{})}}export{T as default};
//# sourceMappingURL=index.svelte-156039ec.js.map
