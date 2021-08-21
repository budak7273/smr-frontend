import{ar as a,as as s,ay as e,az as r,aA as t,S as o,i as l,s as n,at as c,al as i,e as d,t as p,k as f,j as m,c as u,a as $,g as h,d as g,n as v,m as x,b as E,f as w,R as b,o as y,au as _,am as L,x as S,u as A,v as D,av as I,aw as N,ax as V,M as P,h as T,X as k}from"./vendor-ecacde99.js";import{t as R}from"./forms-8d025218.js";import{m as U}from"./markdown-58cc1c31.js";const M=a({name:s().min(3).max(32),mod_reference:s().min(3).max(32).regex(/^([a-zA-Z][a-zA-Z0-9_]*)$/).refine((async()=>!0)),short_description:s().min(16).max(128),full_description:e(s()),logo:e(r().refine((a=>"name"in a&&"size"in a&&"type"in a))),source_url:s().url().optional().or(t(""))});function B(a){let s,e,r=(a[8]||"")+"";return{c(){s=d("span"),e=p(r),this.h()},l(a){s=u(a,"SPAN",{class:!0});var t=$(s);e=h(t,r),t.forEach(g),this.h()},h(){E(s,"class","validation-message")},m(a,r){w(a,s,r),b(s,e)},p(a,s){256&s&&r!==(r=(a[8]||"")+"")&&T(e,r)},d(a){a&&g(s)}}}function j(a){let s,e,r=(a[8]||"")+"";return{c(){s=d("span"),e=p(r),this.h()},l(a){s=u(a,"SPAN",{class:!0});var t=$(s);e=h(t,r),t.forEach(g),this.h()},h(){E(s,"class","validation-message")},m(a,r){w(a,s,r),b(s,e)},p(a,s){256&s&&r!==(r=(a[8]||"")+"")&&T(e,r)},d(a){a&&g(s)}}}function z(a){let s,e,r=(a[8]||"")+"";return{c(){s=d("span"),e=p(r),this.h()},l(a){s=u(a,"SPAN",{class:!0});var t=$(s);e=h(t,r),t.forEach(g),this.h()},h(){E(s,"class","validation-message")},m(a,r){w(a,s,r),b(s,e)},p(a,s){256&s&&r!==(r=(a[8]||"")+"")&&T(e,r)},d(a){a&&g(s)}}}function F(a){let s,e,r=(a[8]||"")+"";return{c(){s=d("span"),e=p(r),this.h()},l(a){s=u(a,"SPAN",{class:!0});var t=$(s);e=h(t,r),t.forEach(g),this.h()},h(){E(s,"class","validation-message")},m(a,r){w(a,s,r),b(s,e)},p(a,s){256&s&&r!==(r=(a[8]||"")+"")&&T(e,r)},d(a){a&&g(s)}}}function O(a){return{c:k,l:k,m:k,p:k,d:k}}function C(a){let s,e=a[9]+"";return{c(){s=d("div"),this.h()},l(a){s=u(a,"DIV",{class:!0}),$(s).forEach(g),this.h()},h(){E(s,"class","markdown-content right svelte-1ks9yo5")},m(a,r){w(a,s,r),s.innerHTML=e},p(a,r){4&r&&e!==(e=a[9]+"")&&(s.innerHTML=e)},d(a){a&&g(s)}}}function H(a){return{c:k,l:k,m:k,p:k,d:k}}function X(a){let s,e,r=(a[8]||"")+"";return{c(){s=d("span"),e=p(r),this.h()},l(a){s=u(a,"SPAN",{class:!0});var t=$(s);e=h(t,r),t.forEach(g),this.h()},h(){E(s,"class","validation-message")},m(a,r){w(a,s,r),b(s,e)},p(a,s){256&s&&r!==(r=(a[8]||"")+"")&&T(e,r)},d(a){a&&g(s)}}}function Z(a){let s,e,r=(a[8]||"")+"";return{c(){s=d("span"),e=p(r),this.h()},l(a){s=u(a,"SPAN",{class:!0});var t=$(s);e=h(t,r),t.forEach(g),this.h()},h(){E(s,"class","validation-message")},m(a,r){w(a,s,r),b(s,e)},p(a,s){256&s&&r!==(r=(a[8]||"")+"")&&T(e,r)},d(a){a&&g(s)}}}function q(a){let s,e,r,t,o,l,n,I,N,V,P,T,k,R,M,q,G,J,K,Q,W,Y,aa,sa,ea,ra,ta,oa,la,na,ca,ia,da,pa,fa,ma,ua,$a,ha,ga,va,xa,Ea,wa,ba,ya,_a,La,Sa,Aa,Da,Ia,Na,Va,Pa,Ta,ka,Ra,Ua,Ma,Ba,ja;N=new c({props:{for:"name",$$slots:{default:[B,({messages:a})=>({8:a}),({messages:a})=>a?256:0]},$$scope:{ctx:a}}}),G=new c({props:{for:"mod_reference",$$slots:{default:[j,({messages:a})=>({8:a}),({messages:a})=>a?256:0]},$$scope:{ctx:a}}}),ea=new c({props:{for:"short_description",$$slots:{default:[z,({messages:a})=>({8:a}),({messages:a})=>a?256:0]},$$scope:{ctx:a}}}),pa=new c({props:{for:"full_description",$$slots:{default:[F,({messages:a})=>({8:a}),({messages:a})=>a?256:0]},$$scope:{ctx:a}}});let za={ctx:a,current:null,token:null,hasCatch:!1,pending:H,then:C,catch:O,value:9};return i(ga=U(a[2]),za),La=new c({props:{for:"logo",$$slots:{default:[X,({messages:a})=>({8:a}),({messages:a})=>a?256:0]},$$scope:{ctx:a}}}),Ta=new c({props:{for:"source_url",$$slots:{default:[Z,({messages:a})=>({8:a}),({messages:a})=>a?256:0]},$$scope:{ctx:a}}}),{c(){s=d("form"),e=d("div"),r=d("div"),t=d("label"),o=p("Name:"),l=f(),n=d("input"),I=f(),m(N.$$.fragment),V=f(),P=d("div"),T=d("label"),k=p("Mod Reference:"),R=f(),M=d("input"),q=f(),m(G.$$.fragment),J=f(),K=d("div"),Q=d("label"),W=p("Short Description:"),Y=f(),aa=d("input"),sa=f(),m(ea.$$.fragment),ra=f(),ta=d("div"),oa=d("div"),la=d("label"),na=p("Full Description:"),ca=f(),ia=d("textarea"),da=f(),m(pa.$$.fragment),fa=f(),ma=d("div"),ua=d("span"),$a=p("Preview:"),ha=f(),za.block.c(),va=f(),xa=d("div"),Ea=d("label"),wa=p("Logo:"),ba=f(),ya=d("input"),_a=f(),m(La.$$.fragment),Sa=f(),Aa=d("div"),Da=d("label"),Ia=p("Source URL:"),Na=f(),Va=d("input"),Pa=f(),m(Ta.$$.fragment),ka=f(),Ra=d("div"),Ua=d("input"),this.h()},l(a){s=u(a,"FORM",{});var c=$(s);e=u(c,"DIV",{class:!0});var i=$(e);r=u(i,"DIV",{class:!0});var d=$(r);t=u(d,"LABEL",{for:!0});var p=$(t);o=h(p,"Name:"),p.forEach(g),l=v(d),n=u(d,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),I=v(d),x(N.$$.fragment,d),d.forEach(g),V=v(i),P=u(i,"DIV",{class:!0});var f=$(P);T=u(f,"LABEL",{for:!0});var m=$(T);k=h(m,"Mod Reference:"),m.forEach(g),R=v(f),M=u(f,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),q=v(f),x(G.$$.fragment,f),f.forEach(g),J=v(i),K=u(i,"DIV",{class:!0});var E=$(K);Q=u(E,"LABEL",{for:!0});var w=$(Q);W=h(w,"Short Description:"),w.forEach(g),Y=v(E),aa=u(E,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),sa=v(E),x(ea.$$.fragment,E),E.forEach(g),ra=v(i),ta=u(i,"DIV",{class:!0});var b=$(ta);oa=u(b,"DIV",{class:!0});var y=$(oa);la=u(y,"LABEL",{for:!0});var _=$(la);na=h(_,"Full Description:"),_.forEach(g),ca=v(y),ia=u(y,"TEXTAREA",{class:!0,id:!0,name:!0,placeholder:!0,rows:!0}),$(ia).forEach(g),da=v(y),x(pa.$$.fragment,y),y.forEach(g),fa=v(b),ma=u(b,"DIV",{class:!0});var L=$(ma);ua=u(L,"SPAN",{});var S=$(ua);$a=h(S,"Preview:"),S.forEach(g),ha=v(L),za.block.l(L),L.forEach(g),b.forEach(g),va=v(i),xa=u(i,"DIV",{class:!0});var A=$(xa);Ea=u(A,"LABEL",{for:!0});var D=$(Ea);wa=h(D,"Logo:"),D.forEach(g),ba=v(A),ya=u(A,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),_a=v(A),x(La.$$.fragment,A),A.forEach(g),Sa=v(i),Aa=u(i,"DIV",{class:!0});var U=$(Aa);Da=u(U,"LABEL",{for:!0});var B=$(Da);Ia=h(B,"Source URL:"),B.forEach(g),Na=v(U),Va=u(U,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Pa=v(U),x(Ta.$$.fragment,U),U.forEach(g),ka=v(i),Ra=u(i,"DIV",{});var j=$(Ra);Ua=u(j,"INPUT",{type:!0,class:!0}),j.forEach(g),i.forEach(g),c.forEach(g),this.h()},h(){E(t,"for","name"),E(n,"id","name"),E(n,"class","base-input"),E(n,"name","name"),E(n,"type","text"),E(n,"placeholder","Name"),E(r,"class","grid grid-flow-row gap-2"),E(T,"for","mod_reference"),E(M,"id","mod_reference"),E(M,"class","base-input"),E(M,"name","mod_reference"),E(M,"type","text"),E(M,"placeholder","Mod Reference"),M.readOnly=a[1],E(P,"class","grid grid-flow-row gap-2"),E(Q,"for","short_description"),E(aa,"id","short_description"),E(aa,"class","base-input"),E(aa,"name","short_description"),E(aa,"type","text"),E(aa,"placeholder","Short Description"),E(K,"class","grid grid-flow-row gap-2"),E(la,"for","full_description"),E(ia,"class","base-input"),E(ia,"id","full_description"),E(ia,"name","full_description"),E(ia,"placeholder","Full Description"),E(ia,"rows","10"),E(oa,"class","grid grid-flow-row gap-2 auto-rows-max"),E(ma,"class","grid grid-flow-row gap-2 auto-rows-max"),E(ta,"class","grid gap-6 split svelte-1ks9yo5"),E(Ea,"for","logo"),E(ya,"id","logo"),E(ya,"class","base-input"),E(ya,"name","logo"),E(ya,"type","file"),E(ya,"accept","image/png,image/jpeg,image/gif"),E(ya,"placeholder","Logo"),E(xa,"class","grid grid-flow-row gap-2"),E(Da,"for","source_url"),E(Va,"id","source_url"),E(Va,"class","base-input"),E(Va,"name","source_url"),E(Va,"type","text"),E(Va,"placeholder","Source URL"),E(Aa,"class","grid grid-flow-row gap-2"),E(Ua,"type","submit"),Ua.value=a[0],E(Ua,"class","px-4 py-2 rounded text-base bg-blue-500 cursor-pointer"),E(e,"class","grid grid-flow-row gap-6")},m(c,i){w(c,s,i),b(s,e),b(e,r),b(r,t),b(t,o),b(r,l),b(r,n),b(r,I),y(N,r,null),b(e,V),b(e,P),b(P,T),b(T,k),b(P,R),b(P,M),b(P,q),y(G,P,null),b(e,J),b(e,K),b(K,Q),b(Q,W),b(K,Y),b(K,aa),b(K,sa),y(ea,K,null),b(e,ra),b(e,ta),b(ta,oa),b(oa,la),b(la,na),b(oa,ca),b(oa,ia),b(oa,da),y(pa,oa,null),b(ta,fa),b(ta,ma),b(ma,ua),b(ua,$a),b(ma,ha),za.block.m(ma,za.anchor=null),za.mount=()=>ma,za.anchor=null,b(e,va),b(e,xa),b(xa,Ea),b(Ea,wa),b(xa,ba),b(xa,ya),b(xa,_a),y(La,xa,null),b(e,Sa),b(e,Aa),b(Aa,Da),b(Da,Ia),b(Aa,Na),b(Aa,Va),b(Aa,Pa),y(Ta,Aa,null),b(e,ka),b(e,Ra),b(Ra,Ua),Ma=!0,Ba||(ja=_(a[3].call(null,s)),Ba=!0)},p(s,[e]){a=s;const r={};1280&e&&(r.$$scope={dirty:e,ctx:a}),N.$set(r),(!Ma||2&e)&&(M.readOnly=a[1]);const t={};1280&e&&(t.$$scope={dirty:e,ctx:a}),G.$set(t);const o={};1280&e&&(o.$$scope={dirty:e,ctx:a}),ea.$set(o);const l={};1280&e&&(l.$$scope={dirty:e,ctx:a}),pa.$set(l),za.ctx=a,4&e&&ga!==(ga=U(a[2]))&&i(ga,za)||L(za,a,e);const n={};1280&e&&(n.$$scope={dirty:e,ctx:a}),La.$set(n);const c={};1280&e&&(c.$$scope={dirty:e,ctx:a}),Ta.$set(c),(!Ma||1&e)&&(Ua.value=a[0])},i(a){Ma||(S(N.$$.fragment,a),S(G.$$.fragment,a),S(ea.$$.fragment,a),S(pa.$$.fragment,a),S(La.$$.fragment,a),S(Ta.$$.fragment,a),Ma=!0)},o(a){A(N.$$.fragment,a),A(G.$$.fragment,a),A(ea.$$.fragment,a),A(pa.$$.fragment,a),A(La.$$.fragment,a),A(Ta.$$.fragment,a),Ma=!1},d(a){a&&g(s),D(N),D(G),D(ea),D(pa),za.block.d(),za.token=null,za=null,D(La),D(Ta),Ba=!1,ja()}}}function G(a,s,e){let r,t,{onSubmit:o}=s,{initialValues:l}=s,{submitText:n="Create"}=s,{editing:c=!1}=s;const{form:i,data:d}=I({initialValues:l,extend:[N,V],validateSchema:M,onSubmit:a=>o(R(a,M))});return P(a,d,(a=>e(7,t=a))),a.$$set=a=>{"onSubmit"in a&&e(5,o=a.onSubmit),"initialValues"in a&&e(6,l=a.initialValues),"submitText"in a&&e(0,n=a.submitText),"editing"in a&&e(1,c=a.editing)},a.$$.update=()=>{128&a.$$.dirty&&e(2,r=t.full_description||"")},[n,c,r,i,d,o,l,t]}class J extends o{constructor(a){super(),l(this,a,G,q,n,{onSubmit:5,initialValues:6,submitText:0,editing:1})}}export{J as M};
//# sourceMappingURL=ModForm-c042bab6.js.map
