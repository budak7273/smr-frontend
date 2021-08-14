import{S as n,i as s,s as r,W as t,X as o,e,t as a,k as i,j as c,c as u,a as d,g as m,d as f,n as p,m as h,b as l,f as $,a1 as g,o as v,u as j,w as k,x as b,Y as x,v as I,$ as w,Z as y,_ as E,a0 as V,r as O,h as P,a7 as S}from"../../../../../chunks/vendor-83c23bd8.js";import{p as T}from"../../../../../chunks/routing-405c8d47.js";import{I as _,H as q}from"../../../../../chunks/graphql-71bf8d51.js";import{T as H}from"../../../../../chunks/Toast-11f90e22.js";import{g as L}from"../../../../../chunks/navigation-2ffed81e.js";import{V as N}from"../../../../../chunks/VersionForm-81182729.js";import"../../../../../chunks/singletons-12a22614.js";import"../../../../../chunks/uplugin-3ba5ee19.js";import"../../../../../chunks/sha256-88abbcfe.js";import"../../../../../chunks/user-bb53616c.js";import"../../../../../chunks/forms-8d025218.js";import"../../../../../chunks/markdown-ac91d65c.js";function A(n){let s,r;return s=new N({props:{onSubmit:n[5],initialValues:n[3],editing:!0,submitText:"Save"}}),{c(){c(s.$$.fragment)},l(n){h(s.$$.fragment,n)},m(n,t){v(s,n,t),r=!0},p(n,r){const t={};8&r&&(t.initialValues=n[3]),s.$set(t)},i(n){r||(b(s.$$.fragment,n),r=!0)},o(n){j(s.$$.fragment,n),r=!1},d(n){I(s,n)}}}function F(n){let s,r,t,o=n[1].error.message+"";return{c(){s=e("p"),r=a("Oh no... "),t=a(o)},l(n){s=u(n,"P",{});var e=d(s);r=m(e,"Oh no... "),t=m(e,o),e.forEach(f)},m(n,o){$(n,s,o),g(s,r),g(s,t)},p(n,s){2&s&&o!==(o=n[1].error.message+"")&&P(t,o)},i:S,o:S,d(n){n&&f(s)}}}function W(n){let s,r;return{c(){s=e("p"),r=a("Loading...")},l(n){s=u(n,"P",{});var t=d(s);r=m(t,"Loading..."),t.forEach(f)},m(n,t){$(n,s,t),g(s,r)},p:S,i:S,o:S,d(n){n&&f(s)}}}function X(n){let s,r;return{c(){s=e("span"),r=a(n[2])},l(t){s=u(t,"SPAN",{});var o=d(s);r=m(o,n[2]),o.forEach(f)},m(n,t){$(n,s,t),g(s,r)},p(n,s){4&s&&P(r,n[2])},d(n){n&&f(s)}}}function Y(n){let s,r,w,y,E,V,P,S,T;const _=[W,F,A],q=[];function L(n,s){return n[1].fetching?0:n[1].error?1:2}function N(s){n[8](s)}y=L(n),E=q[y]=_[y](n);let Y={$$slots:{default:[X]},$$scope:{ctx:n}};return void 0!==n[0]&&(Y.running=n[0]),P=new H({props:Y}),t.push((()=>o(P,"running",N))),{c(){s=e("h1"),r=a("Edit Version"),w=i(),E.c(),V=i(),c(P.$$.fragment),this.h()},l(n){s=u(n,"H1",{class:!0});var t=d(s);r=m(t,"Edit Version"),t.forEach(f),w=p(n),E.l(n),V=p(n),h(P.$$.fragment,n),this.h()},h(){l(s,"class","text-4xl my-4 font-bold")},m(n,t){$(n,s,t),g(s,r),$(n,w,t),q[y].m(n,t),$(n,V,t),v(P,n,t),T=!0},p(n,[s]){let r=y;y=L(n),y===r?q[y].p(n,s):(O(),j(q[r],1,1,(()=>{q[r]=null})),k(),E=q[y],E?E.p(n,s):(E=q[y]=_[y](n),E.c()),b(E,1),E.m(V.parentNode,V));const t={};2052&s&&(t.$$scope={dirty:s,ctx:n}),!S&&1&s&&(S=!0,t.running=n[0],x((()=>S=!1))),P.$set(t)},i(n){T||(b(E),b(P.$$.fragment,n),T=!0)},o(n){j(E),j(P.$$.fragment,n),T=!1},d(n){n&&f(s),n&&f(w),q[y].d(n),n&&f(V),I(P,n)}}}const Z=T();function z(n,s,r){let t,o;var e=this&&this.__awaiter||function(n,s,r,t){return new(r||(r=Promise))((function(o,e){function a(n){try{c(t.next(n))}catch(s){e(s)}}function i(n){try{c(t.throw(n))}catch(s){e(s)}}function c(n){var s;n.done?o(n.value):(s=n.value,s instanceof r?s:new r((function(n){n(s)}))).then(a,i)}c((t=t.apply(n,s||[])).next())}))};let{modId:a}=s,{versionId:i}=s,c="",u=!1;const d=w(q,{version:i});y(n,d,(n=>r(1,o=n)));const m=E({query:_});return V(d),n.$$set=n=>{"modId"in n&&r(6,a=n.modId),"versionId"in n&&r(7,i=n.versionId)},n.$$.update=()=>{1&n.$$.dirty&&(u||r(2,c="")),2&n.$$.dirty&&r(3,t=o.data?Object.assign(Object.assign({},o.data.getVersion),{logo:void 0}):void 0)},[u,o,c,t,d,n=>e(void 0,void 0,void 0,(function*(){return m({versionId:i,version:n}).then((n=>{if(!n.error)return L("/mod/"+a+"/version/"+i);console.error(n.error.message),r(2,c="Error editing version: "+n.error.message),r(0,u=!0)}))})),a,i,function(n){u=n,r(0,u)}]}class B extends n{constructor(n){super(),s(this,n,z,Y,r,{modId:6,versionId:7})}}export{B as default,Z as load};
