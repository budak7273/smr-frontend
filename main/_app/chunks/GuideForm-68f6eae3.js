import{aC as a,aD as s,S as e,i as t,s as r,aE as i,aw as o,e as n,t as l,k as c,j as d,c as m,a as u,g as h,d as p,n as f,m as $,b as g,f as v,a1 as x,o as b,aF as E,ax as w,x as S,u as y,v as V,aG as D,Z as I,h as k,aH as T,aI as N,a7 as A}from"./vendor-83c23bd8.js";import{t as P}from"./forms-8d025218.js";import{m as L}from"./markdown-ac91d65c.js";const G=a({name:s().min(3).max(32),short_description:s().min(16).max(128),guide:s()});function _(a){let s,e,t=(a[8]||"")+"";return{c(){s=n("span"),e=l(t),this.h()},l(a){s=m(a,"SPAN",{class:!0});var r=u(s);e=h(r,t),r.forEach(p),this.h()},h(){g(s,"class","validation-message")},m(a,t){v(a,s,t),x(s,e)},p(a,s){256&s&&t!==(t=(a[8]||"")+"")&&k(e,t)},d(a){a&&p(s)}}}function j(a){let s,e,t=(a[8]||"")+"";return{c(){s=n("span"),e=l(t),this.h()},l(a){s=m(a,"SPAN",{class:!0});var r=u(s);e=h(r,t),r.forEach(p),this.h()},h(){g(s,"class","validation-message")},m(a,t){v(a,s,t),x(s,e)},p(a,s){256&s&&t!==(t=(a[8]||"")+"")&&k(e,t)},d(a){a&&p(s)}}}function B(a){let s,e,t=(a[8]||"")+"";return{c(){s=n("span"),e=l(t),this.h()},l(a){s=m(a,"SPAN",{class:!0});var r=u(s);e=h(r,t),r.forEach(p),this.h()},h(){g(s,"class","validation-message")},m(a,t){v(a,s,t),x(s,e)},p(a,s){256&s&&t!==(t=(a[8]||"")+"")&&k(e,t)},d(a){a&&p(s)}}}function C(a){return{c:A,l:A,m:A,p:A,d:A}}function H(a){let s,e=a[7]+"";return{c(){s=n("div"),this.h()},l(a){s=m(a,"DIV",{class:!0}),u(s).forEach(p),this.h()},h(){g(s,"class","markdown-content right svelte-1ks9yo5")},m(a,t){v(a,s,t),s.innerHTML=e},p(a,t){2&t&&e!==(e=a[7]+"")&&(s.innerHTML=e)},d(a){a&&p(s)}}}function M(a){return{c:A,l:A,m:A,p:A,d:A}}function U(a){let s,e,t,r,D,I,k,T,N,A,P,G,U,F,R,O,X,Z,q,z,J,K,Q,W,Y,aa,sa,ea,ta,ra,ia,oa,na,la,ca,da,ma,ua;N=new i({props:{for:"name",$$slots:{default:[_,({messages:a})=>({8:a}),({messages:a})=>a?256:0]},$$scope:{ctx:a}}}),X=new i({props:{for:"short_description",$$slots:{default:[j,({messages:a})=>({8:a}),({messages:a})=>a?256:0]},$$scope:{ctx:a}}}),aa=new i({props:{for:"guide",$$slots:{default:[B,({messages:a})=>({8:a}),({messages:a})=>a?256:0]},$$scope:{ctx:a}}});let ha={ctx:a,current:null,token:null,hasCatch:!1,pending:M,then:H,catch:C,value:7};return o(oa=L(a[1]),ha),{c(){s=n("form"),e=n("div"),t=n("div"),r=n("label"),D=l("Name:"),I=c(),k=n("input"),T=c(),d(N.$$.fragment),A=c(),P=n("div"),G=n("label"),U=l("Short Description:"),F=c(),R=n("input"),O=c(),d(X.$$.fragment),Z=c(),q=n("div"),z=n("div"),J=n("label"),K=l("Guide:"),Q=c(),W=n("textarea"),Y=c(),d(aa.$$.fragment),sa=c(),ea=n("div"),ta=n("span"),ra=l("Preview:"),ia=c(),ha.block.c(),na=c(),la=n("div"),ca=n("input"),this.h()},l(a){s=m(a,"FORM",{});var i=u(s);e=m(i,"DIV",{class:!0});var o=u(e);t=m(o,"DIV",{class:!0});var n=u(t);r=m(n,"LABEL",{for:!0});var l=u(r);D=h(l,"Name:"),l.forEach(p),I=f(n),k=m(n,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),T=f(n),$(N.$$.fragment,n),n.forEach(p),A=f(o),P=m(o,"DIV",{class:!0});var c=u(P);G=m(c,"LABEL",{for:!0});var d=u(G);U=h(d,"Short Description:"),d.forEach(p),F=f(c),R=m(c,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),O=f(c),$(X.$$.fragment,c),c.forEach(p),Z=f(o),q=m(o,"DIV",{class:!0});var g=u(q);z=m(g,"DIV",{class:!0});var v=u(z);J=m(v,"LABEL",{for:!0});var x=u(J);K=h(x,"Guide:"),x.forEach(p),Q=f(v),W=m(v,"TEXTAREA",{class:!0,id:!0,name:!0,placeholder:!0,rows:!0}),u(W).forEach(p),Y=f(v),$(aa.$$.fragment,v),v.forEach(p),sa=f(g),ea=m(g,"DIV",{class:!0});var b=u(ea);ta=m(b,"SPAN",{});var E=u(ta);ra=h(E,"Preview:"),E.forEach(p),ia=f(b),ha.block.l(b),b.forEach(p),g.forEach(p),na=f(o),la=m(o,"DIV",{});var w=u(la);ca=m(w,"INPUT",{type:!0,class:!0}),w.forEach(p),o.forEach(p),i.forEach(p),this.h()},h(){g(r,"for","name"),g(k,"id","name"),g(k,"class","base-input"),g(k,"name","name"),g(k,"type","text"),g(k,"placeholder","Name"),g(t,"class","grid grid-flow-row gap-2"),g(G,"for","short_description"),g(R,"id","short_description"),g(R,"class","base-input"),g(R,"name","short_description"),g(R,"type","text"),g(R,"placeholder","Short Description"),g(P,"class","grid grid-flow-row gap-2"),g(J,"for","guide"),g(W,"class","base-input"),g(W,"id","guide"),g(W,"name","guide"),g(W,"placeholder","Guide"),g(W,"rows","10"),g(z,"class","grid grid-flow-row gap-2 auto-rows-max"),g(ea,"class","grid grid-flow-row gap-2 auto-rows-max"),g(q,"class","grid gap-6 split svelte-1ks9yo5"),g(ca,"type","submit"),ca.value=a[0],g(ca,"class","px-4 py-2 rounded text-base bg-blue-500 cursor-pointer"),g(e,"class","grid grid-flow-row gap-6")},m(i,o){v(i,s,o),x(s,e),x(e,t),x(t,r),x(r,D),x(t,I),x(t,k),x(t,T),b(N,t,null),x(e,A),x(e,P),x(P,G),x(G,U),x(P,F),x(P,R),x(P,O),b(X,P,null),x(e,Z),x(e,q),x(q,z),x(z,J),x(J,K),x(z,Q),x(z,W),x(z,Y),b(aa,z,null),x(q,sa),x(q,ea),x(ea,ta),x(ta,ra),x(ea,ia),ha.block.m(ea,ha.anchor=null),ha.mount=()=>ea,ha.anchor=null,x(e,na),x(e,la),x(la,ca),da=!0,ma||(ua=E(a[2].call(null,s)),ma=!0)},p(s,[e]){a=s;const t={};768&e&&(t.$$scope={dirty:e,ctx:a}),N.$set(t);const r={};768&e&&(r.$$scope={dirty:e,ctx:a}),X.$set(r);const i={};768&e&&(i.$$scope={dirty:e,ctx:a}),aa.$set(i),ha.ctx=a,2&e&&oa!==(oa=L(a[1]))&&o(oa,ha)||w(ha,a,e),(!da||1&e)&&(ca.value=a[0])},i(a){da||(S(N.$$.fragment,a),S(X.$$.fragment,a),S(aa.$$.fragment,a),da=!0)},o(a){y(N.$$.fragment,a),y(X.$$.fragment,a),y(aa.$$.fragment,a),da=!1},d(a){a&&p(s),V(N),V(X),V(aa),ha.block.d(),ha.token=null,ha=null,ma=!1,ua()}}}function F(a,s,e){let t,r,{onSubmit:i}=s,{initialValues:o}=s,{submitText:n="Create"}=s;const{form:l,data:c}=D({initialValues:o,extend:[T,N],validateSchema:G,onSubmit:a=>i(P(a,G))});return I(a,c,(a=>e(6,r=a))),a.$$set=a=>{"onSubmit"in a&&e(4,i=a.onSubmit),"initialValues"in a&&e(5,o=a.initialValues),"submitText"in a&&e(0,n=a.submitText)},a.$$.update=()=>{64&a.$$.dirty&&e(1,t=r.guide||"")},[n,t,l,c,i,o,r]}class R extends e{constructor(a){super(),t(this,a,F,U,r,{onSubmit:4,initialValues:5,submitText:0})}}export{R as G};
