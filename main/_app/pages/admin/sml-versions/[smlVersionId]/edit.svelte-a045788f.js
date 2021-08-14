import{S as s,i as r,s as n,W as a,X as o,e as t,t as e,k as i,j as c,c as m,a as u,g as l,d,n as f,m as p,b as $,f as g,a1 as h,o as V,u as j,w as v,x as k,Y as S,v as b,$ as x,Z as E,_ as L,a0 as I,r as y,h as M,a7 as w}from"../../../../chunks/vendor-83c23bd8.js";import{p as O}from"../../../../chunks/routing-405c8d47.js";import{p as q,q as P}from"../../../../chunks/graphql-71bf8d51.js";import{T}from"../../../../chunks/Toast-11f90e22.js";import{g as D}from"../../../../chunks/navigation-2ffed81e.js";import{S as N}from"../../../../chunks/SMLVersionForm-f238c071.js";import"../../../../chunks/singletons-12a22614.js";import"../../../../chunks/forms-8d025218.js";import"../../../../chunks/markdown-ac91d65c.js";function A(s){let r,n;return r=new N({props:{onSubmit:s[5],initialValues:s[3],submitText:"Save"}}),{c(){c(r.$$.fragment)},l(s){p(r.$$.fragment,s)},m(s,a){V(r,s,a),n=!0},p(s,n){const a={};8&n&&(a.initialValues=s[3]),r.$set(a)},i(s){n||(k(r.$$.fragment,s),n=!0)},o(s){j(r.$$.fragment,s),n=!1},d(s){b(r,s)}}}function F(s){let r,n,a,o=s[1].error.message+"";return{c(){r=t("p"),n=e("Oh no... "),a=e(o)},l(s){r=m(s,"P",{});var t=u(r);n=l(t,"Oh no... "),a=l(t,o),t.forEach(d)},m(s,o){g(s,r,o),h(r,n),h(r,a)},p(s,r){2&r&&o!==(o=s[1].error.message+"")&&M(a,o)},i:w,o:w,d(s){s&&d(r)}}}function H(s){let r,n;return{c(){r=t("p"),n=e("Loading...")},l(s){r=m(s,"P",{});var a=u(r);n=l(a,"Loading..."),a.forEach(d)},m(s,a){g(s,r,a),h(r,n)},p:w,i:w,o:w,d(s){s&&d(r)}}}function W(s){let r,n;return{c(){r=t("span"),n=e(s[2])},l(a){r=m(a,"SPAN",{});var o=u(r);n=l(o,s[2]),o.forEach(d)},m(s,a){g(s,r,a),h(r,n)},p(s,r){4&r&&M(n,s[2])},d(s){s&&d(r)}}}function X(s){let r,n,x,E,L,I,M,w,O;const q=[H,F,A],P=[];function D(s,r){return s[1].fetching?0:s[1].error?1:2}function N(r){s[7](r)}E=D(s),L=P[E]=q[E](s);let X={$$slots:{default:[W]},$$scope:{ctx:s}};return void 0!==s[0]&&(X.running=s[0]),M=new T({props:X}),a.push((()=>o(M,"running",N))),{c(){r=t("h1"),n=e("Edit SMLVersion"),x=i(),L.c(),I=i(),c(M.$$.fragment),this.h()},l(s){r=m(s,"H1",{class:!0});var a=u(r);n=l(a,"Edit SMLVersion"),a.forEach(d),x=f(s),L.l(s),I=f(s),p(M.$$.fragment,s),this.h()},h(){$(r,"class","text-4xl my-4 font-bold")},m(s,a){g(s,r,a),h(r,n),g(s,x,a),P[E].m(s,a),g(s,I,a),V(M,s,a),O=!0},p(s,[r]){let n=E;E=D(s),E===n?P[E].p(s,r):(y(),j(P[n],1,1,(()=>{P[n]=null})),v(),L=P[E],L?L.p(s,r):(L=P[E]=q[E](s),L.c()),k(L,1),L.m(I.parentNode,I));const a={};516&r&&(a.$$scope={dirty:r,ctx:s}),!w&&1&r&&(w=!0,a.running=s[0],S((()=>w=!1))),M.$set(a)},i(s){O||(k(L),k(M.$$.fragment,s),O=!0)},o(s){j(L),j(M.$$.fragment,s),O=!1},d(s){s&&d(r),s&&d(x),P[E].d(s),s&&d(I),b(M,s)}}}const Y=O();function Z(s,r,n){let a,o,{smlVersionId:t}=r,e="",i=!1;const c=x(P,{smlVersionID:t});E(s,c,(s=>n(1,o=s)));const m=L({query:q});return I(c),s.$$set=s=>{"smlVersionId"in s&&n(6,t=s.smlVersionId)},s.$$.update=()=>{1&s.$$.dirty&&(i||n(2,e="")),2&s.$$.dirty&&n(3,a=o.data?Object.assign(Object.assign({},o.data.getSMLVersion),{logo:void 0}):void 0)},[i,o,e,a,c,s=>{m({smlVersionID:t,smlVersion:s}).then((s=>{s.error?(console.error(s.error.message),n(2,e="Error editing sMLVersion: "+s.error.message),n(0,i=!0)):D("/admin/sml-versions")}))},t,function(s){i=s,n(0,i)}]}class _ extends s{constructor(s){super(),r(this,s,Z,X,n,{smlVersionId:6})}}export{_ as default,Y as load};
