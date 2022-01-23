import{S as de,i as _e,s as pe,ba as Ve,a6 as S,a7 as M,a8 as j,t as g,q as v,aa as T,bb as ve,e as k,W as D,d as I,f as V,g as A,X as E,h as m,j as N,k as L,l as h,m as d,Y as K,V as X,B as fe,C as ie,aM as Re,b1 as Ce,$ as G,aY as Je,bg as je,bh as Ke,aC as Qe,J as Oe,aD as gt,aH as ue,b0 as ht,bi as Xe,bj as Ze,aT as vt,_ as bt,aB as wt,R as kt,az as Vt,aj as ye,T as xe,ai as et,aA as Dt,aF as Et,aG as It}from"../../../chunks/vendor-3e0baac1.js";import{l as Nt}from"../../../chunks/gql-d692ac0a.js";import{u as St,v as Mt,w as jt}from"../../../chunks/graphql-b763070c.js";import{p as Tt}from"../../../chunks/routing-689f9c1f.js";import{a as be,p as we,b as tt}from"../../../chunks/formatting-24701f16.js";import{b as Te}from"../../../chunks/api-82c76902.js";import{a as At}from"../../../chunks/user-12e23a01.js";import{b as me,a as Ae}from"../../../chunks/paths-396f020f.js";import{m as st}from"../../../chunks/mod-0e15fd66.js";import{m as Be}from"../../../chunks/markdown-e391b8a1.js";import{D as Lt,H as Rt,B as Ct,R as He,C as te}from"../../../chunks/forms-7ab15406.js";import{i as Ot}from"../../../chunks/launcher-27ae647a.js";import{g as Pe}from"../../../chunks/navigation-d7362a67.js";import{T as Bt}from"../../../chunks/Toast-a8ec85f8.js";import{M as Ht}from"../../../chunks/MetaDescriptors-f7ef5770.js";import"../../../chunks/global-d4d94a15.js";import"../../../chunks/extras-7497b851.js";import"../../../chunks/singletons-d19c42e4.js";import"../../../chunks/stores-7dc89ead.js";function Pt(r){let e,s,t,l,n,a,o,f,i,u=r[0].source_url+"",$,_,c,p,b,R,P,U,F=be(r[0].created_at)+"",Y,Q,O,H,J,C,ne,x=we(r[0].views)+"",q,ce,se,oe,z,ke,ge,w=we(r[0].downloads)+"",B,re,ae,Z,ee,y,he,$e=r[0].mod_reference+"",De,Le;return{c(){e=k("div"),s=k("h3"),t=D("Info"),l=I(),n=k("span"),a=k("strong"),o=D("Source:"),f=I(),i=k("a"),$=D(u),c=k("br"),p=I(),b=k("span"),R=k("strong"),P=D("Created:"),U=I(),Y=D(F),Q=k("br"),O=I(),H=k("span"),J=k("strong"),C=D("Views:"),ne=I(),q=D(x),ce=k("br"),se=I(),oe=k("span"),z=k("strong"),ke=D("Downloads:"),ge=I(),B=D(w),re=k("br"),ae=I(),Z=k("span"),ee=k("strong"),y=D("Reference:"),he=I(),De=D($e),Le=k("br"),this.h()},l(le){e=V(le,"DIV",{class:!0});var W=A(e);s=V(W,"H3",{class:!0});var Ue=A(s);t=E(Ue,"Info"),Ue.forEach(m),l=N(W),n=V(W,"SPAN",{});var Ee=A(n);a=V(Ee,"STRONG",{});var Ge=A(a);o=E(Ge,"Source:"),Ge.forEach(m),f=N(Ee),i=V(Ee,"A",{class:!0,href:!0});var qe=A(i);$=E(qe,u),qe.forEach(m),Ee.forEach(m),c=V(W,"BR",{}),p=N(W),b=V(W,"SPAN",{});var Ie=A(b);R=V(Ie,"STRONG",{});var ze=A(R);P=E(ze,"Created:"),ze.forEach(m),U=N(Ie),Y=E(Ie,F),Ie.forEach(m),Q=V(W,"BR",{}),O=N(W),H=V(W,"SPAN",{});var Ne=A(H);J=V(Ne,"STRONG",{});var We=A(J);C=E(We,"Views:"),We.forEach(m),ne=N(Ne),q=E(Ne,x),Ne.forEach(m),ce=V(W,"BR",{}),se=N(W),oe=V(W,"SPAN",{});var Se=A(oe);z=V(Se,"STRONG",{});var Fe=A(z);ke=E(Fe,"Downloads:"),Fe.forEach(m),ge=N(Se),B=E(Se,w),Se.forEach(m),re=V(W,"BR",{}),ae=N(W),Z=V(W,"SPAN",{});var Me=A(Z);ee=V(Me,"STRONG",{});var Ye=A(ee);y=E(Ye,"Reference:"),Ye.forEach(m),he=N(Me),De=E(Me,$e),Me.forEach(m),Le=V(W,"BR",{}),W.forEach(m),this.h()},h(){L(s,"class","text-2xl my-4 font-bold"),L(i,"class","underline text-yellow-500"),L(i,"href",_=r[0].source_url),L(e,"class","text-lg break-words")},m(le,W){h(le,e,W),d(e,s),d(s,t),d(e,l),d(e,n),d(n,a),d(a,o),d(n,f),d(n,i),d(i,$),d(e,c),d(e,p),d(e,b),d(b,R),d(R,P),d(b,U),d(b,Y),d(e,Q),d(e,O),d(e,H),d(H,J),d(J,C),d(H,ne),d(H,q),d(e,ce),d(e,se),d(e,oe),d(oe,z),d(z,ke),d(oe,ge),d(oe,B),d(e,re),d(e,ae),d(e,Z),d(Z,ee),d(ee,y),d(Z,he),d(Z,De),d(e,Le)},p(le,W){W&1&&u!==(u=le[0].source_url+"")&&K($,u),W&1&&_!==(_=le[0].source_url)&&L(i,"href",_),W&1&&F!==(F=be(le[0].created_at)+"")&&K(Y,F),W&1&&x!==(x=we(le[0].views)+"")&&K(q,x),W&1&&w!==(w=we(le[0].downloads)+"")&&K(B,w),W&1&&$e!==($e=le[0].mod_reference+"")&&K(De,$e)},d(le){le&&m(e)}}}function Ut(r){let e,s;return e=new ve({props:{$$slots:{default:[Pt]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p(t,l){const n={};l&3&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Gt(r){let e,s;return e=new Ve({props:{$$slots:{default:[Ut]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p(t,[l]){const n={};l&3&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function qt(r,e,s){let{mod:t}=e;return r.$$set=l=>{"mod"in l&&s(0,t=l.mod)},[t]}class zt extends de{constructor(e){super();_e(this,e,qt,Gt,pe,{mod:0})}}function lt(r,e,s){const t=r.slice();return t[3]=e[s],t}function nt(r){let e,s,t,l,n,a,o,f=r[0][r[3]].version+"",i,u,$,_,c=be(r[0][r[3]].created_at)+"",p,b,R,P,U,F,Y,Q;return t=new Ce({props:{class:"material-icons",$$slots:{default:[Wt]},$$scope:{ctx:r}}}),U=new Ce({props:{class:"material-icons",$$slots:{default:[Ft]},$$scope:{ctx:r}}}),{c(){e=k("div"),s=k("div"),S(t.$$.fragment),l=I(),n=k("div"),a=k("a"),o=D("Version "),i=D(f),$=I(),_=k("div"),p=D(c),b=I(),R=k("div"),P=k("a"),S(U.$$.fragment),Y=I(),this.h()},l(O){e=V(O,"DIV",{class:!0});var H=A(e);s=V(H,"DIV",{class:!0});var J=A(s);M(t.$$.fragment,J),J.forEach(m),l=N(H),n=V(H,"DIV",{class:!0});var C=A(n);a=V(C,"A",{href:!0,class:!0});var ne=A(a);o=E(ne,"Version "),i=E(ne,f),ne.forEach(m),$=N(C),_=V(C,"DIV",{});var x=A(_);p=E(x,c),x.forEach(m),C.forEach(m),b=N(H),R=V(H,"DIV",{class:!0});var q=A(R);P=V(q,"A",{href:!0,class:!0});var ce=A(P);M(U.$$.fragment,ce),ce.forEach(m),q.forEach(m),Y=N(H),H.forEach(m),this.h()},h(){L(s,"class","text-4xl w-14 h-14 p-2.5"),L(a,"href",u=""+(me+"/mod/"+r[1]+"/version/"+r[0][r[3]].id+"/")),L(a,"class","text-yellow-500 underline"),L(n,"class","grid grid-flow-row"),L(P,"href",F=Te+"/mod/"+r[1]+"/versions/"+r[0][r[3]].id+"/download"),L(P,"class","text-yellow-500 underline"),L(R,"class","text-3xl w-14 h-14 p-2.5"),L(e,"class","version svelte-m0mv1c")},m(O,H){h(O,e,H),d(e,s),j(t,s,null),d(e,l),d(e,n),d(n,a),d(a,o),d(a,i),d(n,$),d(n,_),d(_,p),d(e,b),d(e,R),d(R,P),j(U,P,null),d(e,Y),Q=!0},p(O,H){const J={};H&64&&(J.$$scope={dirty:H,ctx:O}),t.$set(J),(!Q||H&1)&&f!==(f=O[0][O[3]].version+"")&&K(i,f),(!Q||H&3&&u!==(u=""+(me+"/mod/"+O[1]+"/version/"+O[0][O[3]].id+"/")))&&L(a,"href",u),(!Q||H&1)&&c!==(c=be(O[0][O[3]].created_at)+"")&&K(p,c);const C={};H&64&&(C.$$scope={dirty:H,ctx:O}),U.$set(C),(!Q||H&3&&F!==(F=Te+"/mod/"+O[1]+"/versions/"+O[0][O[3]].id+"/download"))&&L(P,"href",F)},i(O){Q||(g(t.$$.fragment,O),g(U.$$.fragment,O),Q=!0)},o(O){v(t.$$.fragment,O),v(U.$$.fragment,O),Q=!1},d(O){O&&m(e),T(t),T(U)}}}function Wt(r){let e=r[2][r[3]]+"",s;return{c(){s=D(e)},l(t){s=E(t,e)},m(t,l){h(t,s,l)},p:G,d(t){t&&m(s)}}}function Ft(r){let e;return{c(){e=D("download")},l(s){e=E(s,"download")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function rt(r){let e,s,t=r[0][r[3]]&&nt(r);return{c(){t&&t.c(),e=X()},l(l){t&&t.l(l),e=X()},m(l,n){t&&t.m(l,n),h(l,e,n),s=!0},p(l,n){l[0][l[3]]?t?(t.p(l,n),n&1&&g(t,1)):(t=nt(l),t.c(),g(t,1),t.m(e.parentNode,e)):t&&(fe(),v(t,1,1,()=>{t=null}),ie())},i(l){s||(g(t),s=!0)},o(l){v(t),s=!1},d(l){t&&t.d(l),l&&m(e)}}}function Yt(r){let e,s,t,l,n,a=Object.keys(r[2]),o=[];for(let i=0;i<a.length;i+=1)o[i]=rt(lt(r,a,i));const f=i=>v(o[i],1,1,()=>{o[i]=null});return{c(){e=k("div"),s=k("h3"),t=D("Latest Versions"),l=I();for(let i=0;i<o.length;i+=1)o[i].c();this.h()},l(i){e=V(i,"DIV",{class:!0});var u=A(e);s=V(u,"H3",{class:!0});var $=A(s);t=E($,"Latest Versions"),$.forEach(m),l=N(u);for(let _=0;_<o.length;_+=1)o[_].l(u);u.forEach(m),this.h()},h(){L(s,"class","text-2xl my-4 font-bold"),L(e,"class","grid grid-flow-row gap-y-2")},m(i,u){h(i,e,u),d(e,s),d(s,t),d(e,l);for(let $=0;$<o.length;$+=1)o[$].m(e,null);n=!0},p(i,u){if(u&7){a=Object.keys(i[2]);let $;for($=0;$<a.length;$+=1){const _=lt(i,a,$);o[$]?(o[$].p(_,u),g(o[$],1)):(o[$]=rt(_),o[$].c(),g(o[$],1),o[$].m(e,null))}for(fe(),$=a.length;$<o.length;$+=1)f($);ie()}},i(i){if(!n){for(let u=0;u<a.length;u+=1)g(o[u]);n=!0}},o(i){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)v(o[u]);n=!1},d(i){i&&m(e),Re(o,i)}}}function Jt(r){let e,s;return e=new ve({props:{$$slots:{default:[Yt]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p(t,l){const n={};l&67&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Kt(r){let e,s;return e=new Ve({props:{$$slots:{default:[Jt]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p(t,[l]){const n={};l&67&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Qt(r,e,s){const t={release:"new_releases",beta:"warning",alpha:"report"};let{latestVersions:l}=e,{modId:n}=e;return r.$$set=a=>{"latestVersions"in a&&s(0,l=a.latestVersions),"modId"in a&&s(1,n=a.modId)},[l,n,t]}class Xt extends de{constructor(e){super();_e(this,e,Qt,Kt,pe,{latestVersions:0,modId:1})}}function ot(r,e,s){const t=r.slice();return t[1]=e[s],t}function at(r){let e,s,t,l,n,a,o=r[1].user.username+"",f,i,u,$,_=r[1].role.charAt(0).toUpperCase()+r[1].role.slice(1).toLowerCase()+"",c,p;return{c(){e=k("div"),s=k("div"),l=I(),n=k("div"),a=k("a"),f=D(o),u=I(),$=k("div"),c=D(_),p=I(),this.h()},l(b){e=V(b,"DIV",{class:!0});var R=A(e);s=V(R,"DIV",{class:!0,style:!0}),A(s).forEach(m),l=N(R),n=V(R,"DIV",{class:!0});var P=A(n);a=V(P,"A",{href:!0,class:!0});var U=A(a);f=E(U,o),U.forEach(m),u=N(P),$=V(P,"DIV",{});var F=A($);c=E(F,_),F.forEach(m),P.forEach(m),p=N(R),R.forEach(m),this.h()},h(){L(s,"class","rounded-full bg-cover w-14 h-14"),L(s,"style",t=`background-image: url("${r[1].user.avatar||Ae+"/images/no_image.webp"}")`),L(a,"href",i=""+(me+"/user/"+r[1].user.id+"/")),L(a,"class","text-yellow-500 underline"),L(n,"class","grid grid-flow-row"),L(e,"class","grid grid-flow-col auto-cols-max gap-x-4")},m(b,R){h(b,e,R),d(e,s),d(e,l),d(e,n),d(n,a),d(a,f),d(n,u),d(n,$),d($,c),d(e,p)},p(b,R){R&1&&t!==(t=`background-image: url("${b[1].user.avatar||Ae+"/images/no_image.webp"}")`)&&L(s,"style",t),R&1&&o!==(o=b[1].user.username+"")&&K(f,o),R&1&&i!==(i=""+(me+"/user/"+b[1].user.id+"/"))&&L(a,"href",i),R&1&&_!==(_=b[1].role.charAt(0).toUpperCase()+b[1].role.slice(1).toLowerCase()+"")&&K(c,_)},d(b){b&&m(e)}}}function Zt(r){let e,s,t,l,n,a=r[0],o=[];for(let f=0;f<a.length;f+=1)o[f]=at(ot(r,a,f));return{c(){e=k("div"),s=k("h3"),t=D("Authors"),l=I(),n=k("div");for(let f=0;f<o.length;f+=1)o[f].c();this.h()},l(f){e=V(f,"DIV",{class:!0});var i=A(e);s=V(i,"H3",{class:!0});var u=A(s);t=E(u,"Authors"),u.forEach(m),l=N(i),n=V(i,"DIV",{class:!0});var $=A(n);for(let _=0;_<o.length;_+=1)o[_].l($);$.forEach(m),i.forEach(m),this.h()},h(){L(s,"class","text-2xl my-4 font-bold"),L(n,"class","grid auto-rows-min text-lg gap-y-4"),L(e,"class","grid grid-flow-row gap-y-2")},m(f,i){h(f,e,i),d(e,s),d(s,t),d(e,l),d(e,n);for(let u=0;u<o.length;u+=1)o[u].m(n,null)},p(f,i){if(i&1){a=f[0];let u;for(u=0;u<a.length;u+=1){const $=ot(f,a,u);o[u]?o[u].p($,i):(o[u]=at($),o[u].c(),o[u].m(n,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=a.length}},d(f){f&&m(e),Re(o,f)}}}function yt(r){let e,s;return e=new ve({props:{$$slots:{default:[Zt]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p(t,l){const n={};l&17&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function xt(r){let e,s;return e=new Ve({props:{$$slots:{default:[yt]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p(t,[l]){const n={};l&17&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function es(r,e,s){let{authors:t}=e;return r.$$set=l=>{"authors"in l&&s(0,t=l.authors)},[t]}class ts extends de{constructor(e){super();_e(this,e,es,xt,pe,{authors:0})}}function ss(r){let e,s,t,l,n;return{c(){e=k("div"),s=k("div"),t=I(),l=k("div"),n=D("OUTDATED"),this.h()},l(a){e=V(a,"DIV",{class:!0});var o=A(e);s=V(o,"DIV",{class:!0}),A(s).forEach(m),t=N(o),l=V(o,"DIV",{class:!0});var f=A(l);n=E(f,"OUTDATED"),f.forEach(m),o.forEach(m),this.h()},h(){L(s,"class","mod-inset"),L(l,"class","mod-stripe"),L(e,"class","mod-outdated")},m(a,o){h(a,e,o),d(e,s),d(e,t),d(e,l),d(l,n)},d(a){a&&m(e)}}}function ls(r){let e,s,t,l,n;return{c(){e=k("div"),s=k("div"),t=I(),l=k("div"),n=D("USE AT YOUR OWN RISK"),this.h()},l(a){e=V(a,"DIV",{class:!0});var o=A(e);s=V(o,"DIV",{class:!0}),A(s).forEach(m),t=N(o),l=V(o,"DIV",{class:!0});var f=A(l);n=E(f,"USE AT YOUR OWN RISK"),f.forEach(m),o.forEach(m),this.h()},h(){L(s,"class","mod-inset"),L(l,"class","mod-stripe"),L(e,"class","mod-own-risk")},m(a,o){h(a,e,o),d(e,s),d(e,t),d(e,l),d(l,n)},d(a){a&&m(e)}}}function ns(r){let e,s,t,l,n,a,o;function f($,_){if(_&2&&(s=null),_&2&&(t=null),s==null&&(s=st($[1])==="own-risk"),s)return ls;if(t==null&&(t=st($[1])==="outdated"),t)return ss}let i=f(r,-1),u=i&&i(r);return{c(){e=k("div"),u&&u.c(),l=I(),n=k("img"),this.h()},l($){e=V($,"DIV",{class:!0});var _=A(e);u&&u.l(_),l=N(_),n=V(_,"IMG",{class:!0,src:!0,alt:!0}),_.forEach(m),this.h()},h(){L(n,"class","rounded-lg sm:max-w-lg max-w-full w-full"),Je(n.src,a=r[2])||L(n,"src",a),L(n,"alt",o="Logo for "+r[0]),L(e,"class","relative overflow-hidden")},m($,_){h($,e,_),u&&u.m(e,null),d(e,l),d(e,n)},p($,[_]){i!==(i=f($,_))&&(u&&u.d(1),u=i&&i($),u&&(u.c(),u.m(e,l))),_&4&&!Je(n.src,a=$[2])&&L(n,"src",a),_&1&&o!==(o="Logo for "+$[0])&&L(n,"alt",o)},i:G,o:G,d($){$&&m(e),u&&u.d()}}}function rs(r,e,s){let t,{modLogo:l}=e,{modName:n}=e,{latestVersions:a}=e;return r.$$set=o=>{"modLogo"in o&&s(3,l=o.modLogo),"modName"in o&&s(0,n=o.modName),"latestVersions"in o&&s(1,a=o.latestVersions)},r.$$.update=()=>{r.$$.dirty&8&&s(2,t=l||Ae+"/images/no_image.webp")},[n,a,t,l]}class os extends de{constructor(e){super();_e(this,e,rs,ns,pe,{modLogo:3,modName:0,latestVersions:1})}}function as(r){return{c:G,l:G,m:G,p:G,d:G}}function fs(r){let e,s=r[2]+"";return{c(){e=k("p")},l(t){e=V(t,"P",{});var l=A(e);l.forEach(m)},m(t,l){h(t,e,l),e.innerHTML=s},p(t,l){l&1&&s!==(s=t[2]+"")&&(e.innerHTML=s)},d(t){t&&m(e)}}}function is(r){return{c:G,l:G,m:G,p:G,d:G}}function cs(r){let e,s,t={ctx:r,current:null,token:null,hasCatch:!1,pending:is,then:fs,catch:as,value:2};return je(s=r[0],t),{c(){e=k("div"),t.block.c(),this.h()},l(l){e=V(l,"DIV",{class:!0});var n=A(e);t.block.l(n),n.forEach(m),this.h()},h(){L(e,"class","markdown-content break-words")},m(l,n){h(l,e,n),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=null},p(l,n){r=l,t.ctx=r,n&1&&s!==(s=r[0])&&je(s,t)||Ke(t,r,n)},d(l){l&&m(e),t.block.d(),t.token=null,t=null}}}function $s(r){let e,s;return e=new ve({props:{$$slots:{default:[cs]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p(t,l){const n={};l&9&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function us(r){let e,s;return e=new Ve({props:{class:"h-fit",$$slots:{default:[$s]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p(t,[l]){const n={};l&9&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function ms(r,e,s){let t,{mod:l}=e;return r.$$set=n=>{"mod"in n&&s(1,l=n.mod)},r.$$.update=()=>{r.$$.dirty&2&&s(0,t=l.full_description?Be(l.full_description):l.short_description)},[t,l]}class ds extends de{constructor(e){super();_e(this,e,ms,us,pe,{mod:1})}}function ft(r,e,s){const t=r.slice();return t[7]=e[s],t}function _s(r){let e,s;return e=new Lt({props:{class:"max-w-full",$$slots:{default:[zs]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p(t,l){const n={};l&2055&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function ps(r){let e,s;return e=new ve({props:{$$slots:{default:[Ws]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p(t,l){const n={};l&2052&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function gs(r){let e,s;return e=new ve({props:{$$slots:{default:[Fs]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p(t,l){const n={};l&2048&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function hs(r){let e;return{c(){e=D("Version")},l(s){e=E(s,"Version")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function vs(r){let e;return{c(){e=D("Stability")},l(s){e=E(s,"Stability")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function bs(r){let e;return{c(){e=D("SML Version")},l(s){e=E(s,"SML Version")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function ws(r){let e;return{c(){e=D("Downloads")},l(s){e=E(s,"Downloads")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function ks(r){let e;return{c(){e=D("Upload Date")},l(s){e=E(s,"Upload Date")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function Vs(r){let e,s,t,l,n,a,o,f,i,u,$,_;return e=new te({props:{$$slots:{default:[hs]},$$scope:{ctx:r}}}),t=new te({props:{$$slots:{default:[vs]},$$scope:{ctx:r}}}),n=new te({props:{$$slots:{default:[bs]},$$scope:{ctx:r}}}),o=new te({props:{$$slots:{default:[ws]},$$scope:{ctx:r}}}),i=new te({props:{$$slots:{default:[ks]},$$scope:{ctx:r}}}),$=new te({}),{c(){S(e.$$.fragment),s=I(),S(t.$$.fragment),l=I(),S(n.$$.fragment),a=I(),S(o.$$.fragment),f=I(),S(i.$$.fragment),u=I(),S($.$$.fragment)},l(c){M(e.$$.fragment,c),s=N(c),M(t.$$.fragment,c),l=N(c),M(n.$$.fragment,c),a=N(c),M(o.$$.fragment,c),f=N(c),M(i.$$.fragment,c),u=N(c),M($.$$.fragment,c)},m(c,p){j(e,c,p),h(c,s,p),j(t,c,p),h(c,l,p),j(n,c,p),h(c,a,p),j(o,c,p),h(c,f,p),j(i,c,p),h(c,u,p),j($,c,p),_=!0},p(c,p){const b={};p&2048&&(b.$$scope={dirty:p,ctx:c}),e.$set(b);const R={};p&2048&&(R.$$scope={dirty:p,ctx:c}),t.$set(R);const P={};p&2048&&(P.$$scope={dirty:p,ctx:c}),n.$set(P);const U={};p&2048&&(U.$$scope={dirty:p,ctx:c}),o.$set(U);const F={};p&2048&&(F.$$scope={dirty:p,ctx:c}),i.$set(F)},i(c){_||(g(e.$$.fragment,c),g(t.$$.fragment,c),g(n.$$.fragment,c),g(o.$$.fragment,c),g(i.$$.fragment,c),g($.$$.fragment,c),_=!0)},o(c){v(e.$$.fragment,c),v(t.$$.fragment,c),v(n.$$.fragment,c),v(o.$$.fragment,c),v(i.$$.fragment,c),v($.$$.fragment,c),_=!1},d(c){T(e,c),c&&m(s),T(t,c),c&&m(l),T(n,c),c&&m(a),T(o,c),c&&m(f),T(i,c),c&&m(u),T($,c)}}}function Ds(r){let e,s;return e=new He({props:{$$slots:{default:[Vs]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p(t,l){const n={};l&2048&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Es(r){let e=r[7].version+"",s;return{c(){s=D(e)},l(t){s=E(t,e)},m(t,l){h(t,s,l)},p(t,l){l&4&&e!==(e=t[7].version+"")&&K(s,e)},d(t){t&&m(s)}}}function Is(r){let e=r[7].stability+"",s;return{c(){s=D(e)},l(t){s=E(t,e)},m(t,l){h(t,s,l)},p(t,l){l&4&&e!==(e=t[7].stability+"")&&K(s,e)},d(t){t&&m(s)}}}function Ns(r){let e=r[7].sml_version+"",s;return{c(){s=D(e)},l(t){s=E(t,e)},m(t,l){h(t,s,l)},p(t,l){l&4&&e!==(e=t[7].sml_version+"")&&K(s,e)},d(t){t&&m(s)}}}function Ss(r){let e=we(r[7].downloads)+"",s;return{c(){s=D(e)},l(t){s=E(t,e)},m(t,l){h(t,s,l)},p(t,l){l&4&&e!==(e=we(t[7].downloads)+"")&&K(s,e)},d(t){t&&m(s)}}}function Ms(r){let e=be(r[7].created_at)+"",s;return{c(){s=D(e)},l(t){s=E(t,e)},m(t,l){h(t,s,l)},p(t,l){l&4&&e!==(e=be(t[7].created_at)+"")&&K(s,e)},d(t){t&&m(s)}}}function js(r){let e;return{c(){e=D("View")},l(s){e=E(s,"View")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function Ts(r){let e;return{c(){e=D("Download")},l(s){e=E(s,"Download")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function As(r){let e;return{c(){e=D("Install")},l(s){e=E(s,"Install")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function Ls(r){let e;return{c(){e=D("download")},l(s){e=E(s,"download")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function Rs(r){let e,s,t,l;return e=new ht({props:{$$slots:{default:[As]},$$scope:{ctx:r}}}),t=new Ce({props:{class:"material-icons",$$slots:{default:[Ls]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment),s=I(),S(t.$$.fragment)},l(n){M(e.$$.fragment,n),s=N(n),M(t.$$.fragment,n)},m(n,a){j(e,n,a),h(n,s,a),j(t,n,a),l=!0},p(n,a){const o={};a&2048&&(o.$$scope={dirty:a,ctx:n}),e.$set(o);const f={};a&2048&&(f.$$scope={dirty:a,ctx:n}),t.$set(f)},i(n){l||(g(e.$$.fragment,n),g(t.$$.fragment,n),l=!0)},o(n){v(e.$$.fragment,n),v(t.$$.fragment,n),l=!1},d(n){T(e,n),n&&m(s),T(t,n)}}}function Cs(r){let e,s,t,l,n,a,o;return s=new ue({props:{variant:"outlined",href:me+"/mod/"+r[0]+"/version/"+r[7].id,$$slots:{default:[js]},$$scope:{ctx:r}}}),l=new ue({props:{variant:"outlined",href:Te+"/mod/"+r[0]+"/versions/"+r[7].id+"/download",$$slots:{default:[Ts]},$$scope:{ctx:r}}}),a=new ue({props:{variant:"outlined",$$slots:{default:[Rs]},$$scope:{ctx:r}}}),a.$on("click",r[5]),{c(){e=k("div"),S(s.$$.fragment),t=I(),S(l.$$.fragment),n=I(),S(a.$$.fragment),this.h()},l(f){e=V(f,"DIV",{class:!0});var i=A(e);M(s.$$.fragment,i),t=N(i),M(l.$$.fragment,i),n=N(i),M(a.$$.fragment,i),i.forEach(m),this.h()},h(){L(e,"class","grid grid-flow-col gap-4")},m(f,i){h(f,e,i),j(s,e,null),d(e,t),j(l,e,null),d(e,n),j(a,e,null),o=!0},p(f,i){const u={};i&5&&(u.href=me+"/mod/"+f[0]+"/version/"+f[7].id),i&2048&&(u.$$scope={dirty:i,ctx:f}),s.$set(u);const $={};i&5&&($.href=Te+"/mod/"+f[0]+"/versions/"+f[7].id+"/download"),i&2048&&($.$$scope={dirty:i,ctx:f}),l.$set($);const _={};i&2048&&(_.$$scope={dirty:i,ctx:f}),a.$set(_)},i(f){o||(g(s.$$.fragment,f),g(l.$$.fragment,f),g(a.$$.fragment,f),o=!0)},o(f){v(s.$$.fragment,f),v(l.$$.fragment,f),v(a.$$.fragment,f),o=!1},d(f){f&&m(e),T(s),T(l),T(a)}}}function Os(r){let e,s,t,l,n,a,o,f,i,u,$,_;return e=new te({props:{$$slots:{default:[Es]},$$scope:{ctx:r}}}),t=new te({props:{$$slots:{default:[Is]},$$scope:{ctx:r}}}),n=new te({props:{$$slots:{default:[Ns]},$$scope:{ctx:r}}}),o=new te({props:{$$slots:{default:[Ss]},$$scope:{ctx:r}}}),i=new te({props:{$$slots:{default:[Ms]},$$scope:{ctx:r}}}),$=new te({props:{$$slots:{default:[Cs]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment),s=I(),S(t.$$.fragment),l=I(),S(n.$$.fragment),a=I(),S(o.$$.fragment),f=I(),S(i.$$.fragment),u=I(),S($.$$.fragment)},l(c){M(e.$$.fragment,c),s=N(c),M(t.$$.fragment,c),l=N(c),M(n.$$.fragment,c),a=N(c),M(o.$$.fragment,c),f=N(c),M(i.$$.fragment,c),u=N(c),M($.$$.fragment,c)},m(c,p){j(e,c,p),h(c,s,p),j(t,c,p),h(c,l,p),j(n,c,p),h(c,a,p),j(o,c,p),h(c,f,p),j(i,c,p),h(c,u,p),j($,c,p),_=!0},p(c,p){const b={};p&2052&&(b.$$scope={dirty:p,ctx:c}),e.$set(b);const R={};p&2052&&(R.$$scope={dirty:p,ctx:c}),t.$set(R);const P={};p&2052&&(P.$$scope={dirty:p,ctx:c}),n.$set(P);const U={};p&2052&&(U.$$scope={dirty:p,ctx:c}),o.$set(U);const F={};p&2052&&(F.$$scope={dirty:p,ctx:c}),i.$set(F);const Y={};p&2053&&(Y.$$scope={dirty:p,ctx:c}),$.$set(Y)},i(c){_||(g(e.$$.fragment,c),g(t.$$.fragment,c),g(n.$$.fragment,c),g(o.$$.fragment,c),g(i.$$.fragment,c),g($.$$.fragment,c),_=!0)},o(c){v(e.$$.fragment,c),v(t.$$.fragment,c),v(n.$$.fragment,c),v(o.$$.fragment,c),v(i.$$.fragment,c),v($.$$.fragment,c),_=!1},d(c){T(e,c),c&&m(s),T(t,c),c&&m(l),T(n,c),c&&m(a),T(o,c),c&&m(f),T(i,c),c&&m(u),T($,c)}}}function it(r){let e,s;return e=new He({props:{$$slots:{default:[Gs]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p(t,l){const n={};l&2052&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Bs(r){return{c:G,l:G,m:G,p:G,d:G}}function Hs(r){let e,s=r[10]+"",t;return{c(){e=new Xe,t=X(),this.h()},l(l){e=Ze(l),t=X(),this.h()},h(){e.a=t},m(l,n){e.m(s,l,n),h(l,t,n)},p(l,n){n&4&&s!==(s=l[10]+"")&&e.p(s)},d(l){l&&m(t),l&&e.d()}}}function Ps(r){return{c:G,l:G,m:G,p:G,d:G}}function Us(r){let e,s,t=tt(r[7].size)+"",l,n,a,o,f=r[7].hash+"",i,u,$,_,c={ctx:r,current:null,token:null,hasCatch:!1,pending:Ps,then:Hs,catch:Bs,value:10};return je(_=Be(r[7].changelog),c),{c(){e=k("div"),s=D("Size: "),l=D(t),n=I(),a=k("div"),o=D("Hash: "),i=D(f),u=I(),$=k("div"),c.block.c(),this.h()},l(p){e=V(p,"DIV",{class:!0});var b=A(e);s=E(b,"Size: "),l=E(b,t),b.forEach(m),n=N(p),a=V(p,"DIV",{class:!0});var R=A(a);o=E(R,"Hash: "),i=E(R,f),R.forEach(m),u=N(p),$=V(p,"DIV",{class:!0});var P=A($);c.block.l(P),P.forEach(m),this.h()},h(){L(e,"class","col-span-3 p-2"),L(a,"class","col-span-3 p-2"),L($,"class","col-span-6 p-2 markdown-content")},m(p,b){h(p,e,b),d(e,s),d(e,l),h(p,n,b),h(p,a,b),d(a,o),d(a,i),h(p,u,b),h(p,$,b),c.block.m($,c.anchor=null),c.mount=()=>$,c.anchor=null},p(p,b){r=p,b&4&&t!==(t=tt(r[7].size)+"")&&K(l,t),b&4&&f!==(f=r[7].hash+"")&&K(i,f),c.ctx=r,b&4&&_!==(_=Be(r[7].changelog))&&je(_,c)||Ke(c,r,b)},d(p){p&&m(e),p&&m(n),p&&m(a),p&&m(u),p&&m($),c.block.d(),c.token=null,c=null}}}function Gs(r){let e,s,t;return e=new te({props:{colspan:6,$$slots:{default:[Us]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment),s=I()},l(l){M(e.$$.fragment,l),s=N(l)},m(l,n){j(e,l,n),h(l,s,n),t=!0},p(l,n){const a={};n&2052&&(a.$$scope={dirty:n,ctx:l}),e.$set(a)},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){T(e,l),l&&m(s)}}}function ct(r){let e,s,t=r[1].has(r[7].id),l,n;function a(){return r[6](r[7])}e=new He({props:{$$slots:{default:[Os]},$$scope:{ctx:r}}}),e.$on("click",a);let o=t&&it(r);return{c(){S(e.$$.fragment),s=I(),o&&o.c(),l=X()},l(f){M(e.$$.fragment,f),s=N(f),o&&o.l(f),l=X()},m(f,i){j(e,f,i),h(f,s,i),o&&o.m(f,i),h(f,l,i),n=!0},p(f,i){r=f;const u={};i&2053&&(u.$$scope={dirty:i,ctx:r}),e.$set(u),i&6&&(t=r[1].has(r[7].id)),t?o?(o.p(r,i),i&6&&g(o,1)):(o=it(r),o.c(),g(o,1),o.m(l.parentNode,l)):o&&(fe(),v(o,1,1,()=>{o=null}),ie())},i(f){n||(g(e.$$.fragment,f),g(o),n=!0)},o(f){v(e.$$.fragment,f),v(o),n=!1},d(f){T(e,f),f&&m(s),o&&o.d(f),f&&m(l)}}}function qs(r){let e,s,t=r[2].data.getMod.versions,l=[];for(let a=0;a<t.length;a+=1)l[a]=ct(ft(r,t,a));const n=a=>v(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=X()},l(a){for(let o=0;o<l.length;o+=1)l[o].l(a);e=X()},m(a,o){for(let f=0;f<l.length;f+=1)l[f].m(a,o);h(a,e,o),s=!0},p(a,o){if(o&23){t=a[2].data.getMod.versions;let f;for(f=0;f<t.length;f+=1){const i=ft(a,t,f);l[f]?(l[f].p(i,o),g(l[f],1)):(l[f]=ct(i),l[f].c(),g(l[f],1),l[f].m(e.parentNode,e))}for(fe(),f=t.length;f<l.length;f+=1)n(f);ie()}},i(a){if(!s){for(let o=0;o<t.length;o+=1)g(l[o]);s=!0}},o(a){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)v(l[o]);s=!1},d(a){Re(l,a),a&&m(e)}}}function zs(r){let e,s,t,l;return e=new Rt({props:{$$slots:{default:[Ds]},$$scope:{ctx:r}}}),t=new Ct({props:{$$slots:{default:[qs]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment),s=I(),S(t.$$.fragment)},l(n){M(e.$$.fragment,n),s=N(n),M(t.$$.fragment,n)},m(n,a){j(e,n,a),h(n,s,a),j(t,n,a),l=!0},p(n,a){const o={};a&2048&&(o.$$scope={dirty:a,ctx:n}),e.$set(o);const f={};a&2055&&(f.$$scope={dirty:a,ctx:n}),t.$set(f)},i(n){l||(g(e.$$.fragment,n),g(t.$$.fragment,n),l=!0)},o(n){v(e.$$.fragment,n),v(t.$$.fragment,n),l=!1},d(n){T(e,n),n&&m(s),T(t,n)}}}function Ws(r){let e,s=r[2].error.message+"",t;return{c(){e=D("Oh no... "),t=D(s)},l(l){e=E(l,"Oh no... "),t=E(l,s)},m(l,n){h(l,e,n),h(l,t,n)},p(l,n){n&4&&s!==(s=l[2].error.message+"")&&K(t,s)},d(l){l&&m(e),l&&m(t)}}}function Fs(r){let e;return{c(){e=D("Loading...")},l(s){e=E(s,"Loading...")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function Ys(r){let e,s,t,l;const n=[gs,ps,_s],a=[];function o(f,i){return f[2].fetching?0:f[2].error?1:2}return e=o(r),s=a[e]=n[e](r),{c(){s.c(),t=X()},l(f){s.l(f),t=X()},m(f,i){a[e].m(f,i),h(f,t,i),l=!0},p(f,i){let u=e;e=o(f),e===u?a[e].p(f,i):(fe(),v(a[u],1,1,()=>{a[u]=null}),ie(),s=a[e],s?s.p(f,i):(s=a[e]=n[e](f),s.c()),g(s,1),s.m(t.parentNode,t))},i(f){l||(g(s),l=!0)},o(f){v(s),l=!1},d(f){a[e].d(f),f&&m(t)}}}function Js(r){let e,s;return e=new Ve({props:{class:"h-fit",$$slots:{default:[Ys]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p(t,[l]){const n={};l&2055&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Ks(r,e,s){let t,{modId:l}=e,n=new Set;const a=Qe(St,{mod:l,limit:100,offset:0});Oe(r,a,u=>s(2,t=u)),gt(a);const o=u=>{n.has(u)?n.delete(u):n.add(u),s(1,n)},f=()=>Ot(t.data.getMod.mod_reference),i=u=>o(u.id);return r.$$set=u=>{"modId"in u&&s(0,l=u.modId)},[l,n,t,a,o,f,i]}class Qs extends de{constructor(e){super();_e(this,e,Ks,Js,pe,{modId:0})}}function $t(r){return`<script type="application/ld+json">${JSON.stringify(r)}<\/script>`}const ut=r=>({"@context":"https://schema.org","@type":"CreativeWork",image:r.logo||Ae+"/images/no_image.webp",name:r.name,description:r.short_description});function mt(r){let e,s,t,l=$t(ut(r[2].data.mod))+"",n,a;return e=new Ht({props:{description:r[2].data.mod.short_description,title:r[2].data.mod.name,image:r[2].data.mod.logo}}),{c(){S(e.$$.fragment),s=I(),t=new Xe,n=X(),this.h()},l(o){M(e.$$.fragment,o),s=N(o),t=Ze(o),n=X(),this.h()},h(){t.a=n},m(o,f){j(e,o,f),h(o,s,f),t.m(l,o,f),h(o,n,f),a=!0},p(o,f){const i={};f&4&&(i.description=o[2].data.mod.short_description),f&4&&(i.title=o[2].data.mod.name),f&4&&(i.image=o[2].data.mod.logo),e.$set(i),(!a||f&4)&&l!==(l=$t(ut(o[2].data.mod))+"")&&t.p(l)},i(o){a||(g(e.$$.fragment,o),a=!0)},o(o){v(e.$$.fragment,o),a=!1},d(o){T(e,o),o&&m(s),o&&m(n),o&&t.d()}}}function Xs(r){let e;return{c(){e=D("404")},l(s){e=E(s,"404")},m(s,t){h(s,e,t)},p:G,i:G,o:G,d(s){s&&m(e)}}}function Zs(r){let e,s,t,l=r[2].data.mod.name+"",n,a,o,f,i,u,$,_,c,p,b,R,P,U,F,Y,Q,O,H,J,C,ne,x,q=r[6]&&dt(r);i=new ue({props:{variant:"outlined",$$slots:{default:[rl]},$$scope:{ctx:r}}}),i.$on("click",r[14]);const ce=[al,ol],se=[];function oe(w,B){return w[3]?1:0}_=oe(r),c=se[_]=ce[_](r),R=new os({props:{modLogo:r[2].data.mod.logo,modName:r[2].data.mod.name,latestVersions:r[2].data.mod.latestVersions}}),U=new zt({props:{mod:r[2].data.mod}}),Y=new Xt({props:{modId:r[2].data.mod.id,latestVersions:r[2].data.mod.latestVersions}}),O=new ts({props:{authors:r[2].data.mod.authors}});let z=r[6]&&_t(r);function ke(w){r[18](w)}let ge={$$slots:{default:[ml]},$$scope:{ctx:r}};return r[5]!==void 0&&(ge.running=r[5]),C=new Bt({props:ge}),xe.push(()=>et(C,"running",ke)),{c(){e=k("div"),s=k("div"),t=k("h1"),n=D(l),a=I(),o=k("div"),q&&q.c(),f=I(),S(i.$$.fragment),u=I(),$=k("div"),c.c(),p=I(),b=k("div"),S(R.$$.fragment),P=I(),S(U.$$.fragment),F=I(),S(Y.$$.fragment),Q=I(),S(O.$$.fragment),H=I(),z&&z.c(),J=I(),S(C.$$.fragment),this.h()},l(w){e=V(w,"DIV",{class:!0});var B=A(e);s=V(B,"DIV",{class:!0});var re=A(s);t=V(re,"H1",{class:!0});var ae=A(t);n=E(ae,l),ae.forEach(m),a=N(re),o=V(re,"DIV",{});var Z=A(o);q&&q.l(Z),f=N(Z),M(i.$$.fragment,Z),Z.forEach(m),re.forEach(m),u=N(B),$=V(B,"DIV",{class:!0});var ee=A($);c.l(ee),p=N(ee),b=V(ee,"DIV",{class:!0});var y=A(b);M(R.$$.fragment,y),P=N(y),M(U.$$.fragment,y),F=N(y),M(Y.$$.fragment,y),Q=N(y),M(O.$$.fragment,y),y.forEach(m),ee.forEach(m),B.forEach(m),H=N(w),z&&z.l(w),J=N(w),M(C.$$.fragment,w),this.h()},h(){L(t,"class","text-4xl font-bold"),L(s,"class","flex flex-wrap h-auto justify-between items-center"),L(b,"class","grid grid-cols-1 auto-rows-min gap-8"),L($,"class","grid grid-auto-max auto-cols-fr gap-4"),L(e,"class","grid gap-6 xlx:grid-flow-row")},m(w,B){h(w,e,B),d(e,s),d(s,t),d(t,n),d(s,a),d(s,o),q&&q.m(o,null),d(o,f),j(i,o,null),d(e,u),d(e,$),se[_].m($,null),d($,p),d($,b),j(R,b,null),d(b,P),j(U,b,null),d(b,F),j(Y,b,null),d(b,Q),j(O,b,null),h(w,H,B),z&&z.m(w,B),h(w,J,B),j(C,w,B),x=!0},p(w,B){(!x||B&4)&&l!==(l=w[2].data.mod.name+"")&&K(n,l),w[6]?q?(q.p(w,B),B&64&&g(q,1)):(q=dt(w),q.c(),g(q,1),q.m(o,f)):q&&(fe(),v(q,1,1,()=>{q=null}),ie());const re={};B&1048584&&(re.$$scope={dirty:B,ctx:w}),i.$set(re);let ae=_;_=oe(w),_===ae?se[_].p(w,B):(fe(),v(se[ae],1,1,()=>{se[ae]=null}),ie(),c=se[_],c?c.p(w,B):(c=se[_]=ce[_](w),c.c()),g(c,1),c.m($,p));const Z={};B&4&&(Z.modLogo=w[2].data.mod.logo),B&4&&(Z.modName=w[2].data.mod.name),B&4&&(Z.latestVersions=w[2].data.mod.latestVersions),R.$set(Z);const ee={};B&4&&(ee.mod=w[2].data.mod),U.$set(ee);const y={};B&4&&(y.modId=w[2].data.mod.id),B&4&&(y.latestVersions=w[2].data.mod.latestVersions),Y.$set(y);const he={};B&4&&(he.authors=w[2].data.mod.authors),O.$set(he),w[6]?z?(z.p(w,B),B&64&&g(z,1)):(z=_t(w),z.c(),g(z,1),z.m(J.parentNode,J)):z&&(fe(),v(z,1,1,()=>{z=null}),ie());const $e={};B&1048592&&($e.$$scope={dirty:B,ctx:w}),!ne&&B&32&&(ne=!0,$e.running=w[5],ye(()=>ne=!1)),C.$set($e)},i(w){x||(g(q),g(i.$$.fragment,w),g(c),g(R.$$.fragment,w),g(U.$$.fragment,w),g(Y.$$.fragment,w),g(O.$$.fragment,w),g(z),g(C.$$.fragment,w),x=!0)},o(w){v(q),v(i.$$.fragment,w),v(c),v(R.$$.fragment,w),v(U.$$.fragment,w),v(Y.$$.fragment,w),v(O.$$.fragment,w),v(z),v(C.$$.fragment,w),x=!1},d(w){w&&m(e),q&&q.d(),T(i),se[_].d(),T(R),T(U),T(Y),T(O),w&&m(H),z&&z.d(w),w&&m(J),T(C,w)}}}function ys(r){let e,s,t=r[2].error.message+"",l;return{c(){e=k("p"),s=D("Oh no... "),l=D(t)},l(n){e=V(n,"P",{});var a=A(e);s=E(a,"Oh no... "),l=E(a,t),a.forEach(m)},m(n,a){h(n,e,a),d(e,s),d(e,l)},p(n,a){a&4&&t!==(t=n[2].error.message+"")&&K(l,t)},i:G,o:G,d(n){n&&m(e)}}}function xs(r){let e,s;return{c(){e=k("p"),s=D("Loading...")},l(t){e=V(t,"P",{});var l=A(e);s=E(l,"Loading..."),l.forEach(m)},m(t,l){h(t,e,l),d(e,s)},p:G,i:G,o:G,d(t){t&&m(e)}}}function dt(r){let e,s,t,l,n,a;return e=new ue({props:{variant:"outlined",$$slots:{default:[el]},$$scope:{ctx:r}}}),e.$on("click",r[11]),t=new ue({props:{variant:"outlined",$$slots:{default:[tl]},$$scope:{ctx:r}}}),t.$on("click",r[12]),n=new ue({props:{variant:"outlined",$$slots:{default:[sl]},$$scope:{ctx:r}}}),n.$on("click",r[13]),{c(){S(e.$$.fragment),s=I(),S(t.$$.fragment),l=I(),S(n.$$.fragment)},l(o){M(e.$$.fragment,o),s=N(o),M(t.$$.fragment,o),l=N(o),M(n.$$.fragment,o)},m(o,f){j(e,o,f),h(o,s,f),j(t,o,f),h(o,l,f),j(n,o,f),a=!0},p(o,f){const i={};f&1048576&&(i.$$scope={dirty:f,ctx:o}),e.$set(i);const u={};f&1048576&&(u.$$scope={dirty:f,ctx:o}),t.$set(u);const $={};f&1048576&&($.$$scope={dirty:f,ctx:o}),n.$set($)},i(o){a||(g(e.$$.fragment,o),g(t.$$.fragment,o),g(n.$$.fragment,o),a=!0)},o(o){v(e.$$.fragment,o),v(t.$$.fragment,o),v(n.$$.fragment,o),a=!1},d(o){T(e,o),o&&m(s),T(t,o),o&&m(l),T(n,o)}}}function el(r){let e;return{c(){e=D("Edit")},l(s){e=E(s,"Edit")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function tl(r){let e;return{c(){e=D("Delete")},l(s){e=E(s,"Delete")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function sl(r){let e;return{c(){e=D("New Version")},l(s){e=E(s,"New Version")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function ll(r){let e;return{c(){e=D("Description")},l(s){e=E(s,"Description")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function nl(r){let e;return{c(){e=D("Versions")},l(s){e=E(s,"Versions")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function rl(r){let e;function s(n,a){return n[3]?ll:nl}let t=s(r),l=t(r);return{c(){l.c(),e=X()},l(n){l.l(n),e=X()},m(n,a){l.m(n,a),h(n,e,a)},p(n,a){t!==(t=s(n))&&(l.d(1),l=t(n),l&&(l.c(),l.m(e.parentNode,e)))},d(n){l.d(n),n&&m(e)}}}function ol(r){let e,s;return e=new Qs({props:{modId:r[2].data.mod.id}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p(t,l){const n={};l&4&&(n.modId=t[2].data.mod.id),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function al(r){let e,s;return e=new ds({props:{mod:r[2].data.mod}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){j(e,t,l),s=!0},p(t,l){const n={};l&4&&(n.mod=t[2].data.mod),e.$set(n)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function _t(r){let e,s,t;function l(a){r[17](a)}let n={$$slots:{default:[ul]},$$scope:{ctx:r}};return r[7]!==void 0&&(n.open=r[7]),e=new Dt({props:n}),xe.push(()=>et(e,"open",l)),{c(){S(e.$$.fragment)},l(a){M(e.$$.fragment,a)},m(a,o){j(e,a,o),t=!0},p(a,o){const f={};o&1048576&&(f.$$scope={dirty:o,ctx:a}),!s&&o&128&&(s=!0,f.open=a[7],ye(()=>s=!1)),e.$set(f)},i(a){t||(g(e.$$.fragment,a),t=!0)},o(a){v(e.$$.fragment,a),t=!1},d(a){T(e,a)}}}function fl(r){let e;return{c(){e=D("Delete Mod?")},l(s){e=E(s,"Delete Mod?")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function il(r){let e;return{c(){e=D("Cancel")},l(s){e=E(s,"Cancel")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function cl(r){let e;return{c(){e=D("Delete")},l(s){e=E(s,"Delete")},m(s,t){h(s,e,t)},d(s){s&&m(e)}}}function $l(r){let e,s,t,l,n,a,o,f;return n=new ue({props:{variant:"outlined",$$slots:{default:[il]},$$scope:{ctx:r}}}),n.$on("click",r[15]),o=new ue({props:{variant:"outlined",$$slots:{default:[cl]},$$scope:{ctx:r}}}),o.$on("click",r[16]),{c(){e=k("div"),s=k("span"),t=D("Are you sure you wish to delete this mod"),l=I(),S(n.$$.fragment),a=I(),S(o.$$.fragment),this.h()},l(i){e=V(i,"DIV",{class:!0});var u=A(e);s=V(u,"SPAN",{});var $=A(s);t=E($,"Are you sure you wish to delete this mod"),$.forEach(m),l=N(u),M(n.$$.fragment,u),a=N(u),M(o.$$.fragment,u),u.forEach(m),this.h()},h(){L(e,"class","grid grid-flow-row gap-4")},m(i,u){h(i,e,u),d(e,s),d(s,t),d(e,l),j(n,e,null),d(e,a),j(o,e,null),f=!0},p(i,u){const $={};u&1048576&&($.$$scope={dirty:u,ctx:i}),n.$set($);const _={};u&1048576&&(_.$$scope={dirty:u,ctx:i}),o.$set(_)},i(i){f||(g(n.$$.fragment,i),g(o.$$.fragment,i),f=!0)},o(i){v(n.$$.fragment,i),v(o.$$.fragment,i),f=!1},d(i){i&&m(e),T(n),T(o)}}}function ul(r){let e,s,t,l;return e=new Et({props:{$$slots:{default:[fl]},$$scope:{ctx:r}}}),t=new It({props:{$$slots:{default:[$l]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment),s=I(),S(t.$$.fragment)},l(n){M(e.$$.fragment,n),s=N(n),M(t.$$.fragment,n)},m(n,a){j(e,n,a),h(n,s,a),j(t,n,a),l=!0},p(n,a){const o={};a&1048576&&(o.$$scope={dirty:a,ctx:n}),e.$set(o);const f={};a&1048576&&(f.$$scope={dirty:a,ctx:n}),t.$set(f)},i(n){l||(g(e.$$.fragment,n),g(t.$$.fragment,n),l=!0)},o(n){v(e.$$.fragment,n),v(t.$$.fragment,n),l=!1},d(n){T(e,n),n&&m(s),T(t,n)}}}function ml(r){let e,s;return{c(){e=k("span"),s=D(r[4])},l(t){e=V(t,"SPAN",{});var l=A(e);s=E(l,r[4]),l.forEach(m)},m(t,l){h(t,e,l),d(e,s)},p(t,l){l&16&&K(s,t[4])},d(t){t&&m(e)}}}function dl(r){let e,s,t,l,n,a,o=!r[2].fetching&&!r[2].error&&r[2].data.mod&&mt(r);const f=[xs,ys,Zs,Xs],i=[];function u($,_){return $[2].fetching?0:$[2].error?1:$[2].data.mod?2:3}return t=u(r),l=i[t]=f[t](r),{c(){o&&o.c(),e=X(),s=I(),l.c(),n=X()},l($){const _=vt('[data-svelte="svelte-hkcnyi"]',document.head);o&&o.l(_),e=X(),_.forEach(m),s=N($),l.l($),n=X()},m($,_){o&&o.m(document.head,null),d(document.head,e),h($,s,_),i[t].m($,_),h($,n,_),a=!0},p($,[_]){!$[2].fetching&&!$[2].error&&$[2].data.mod?o?(o.p($,_),_&4&&g(o,1)):(o=mt($),o.c(),g(o,1),o.m(e.parentNode,e)):o&&(fe(),v(o,1,1,()=>{o=null}),ie());let c=t;t=u($),t===c?i[t].p($,_):(fe(),v(i[c],1,1,()=>{i[c]=null}),ie(),l=i[t],l?l.p($,_):(l=i[t]=f[t]($),l.c()),g(l,1),l.m(n.parentNode,n))},i($){a||(g(o),g(l),a=!0)},o($){v(o),v(l),a=!1},d($){o&&o.d($),m(e),$&&m(s),i[t].d($),$&&m(n)}}}const pt=Qe(Mt,{mod:void 0}),Cl=Tt(async r=>(pt.variables.mod=r.params.modId,Nt({mod:pt})(r)));function _l(r,e,s){let t,l,n,a=G,o=()=>(a(),a=bt(u,C=>s(2,n=C)),u),f;Oe(r,At,C=>s(10,l=C)),r.$$.on_destroy.push(()=>a());let{modId:i}=e,{mod:u}=e;o();let $=!1,_="",c=!1;const p=wt({query:jt}),b=kt(!1);Oe(r,b,C=>s(7,f=C));const R=()=>{p({modId:Vt(u).data.mod.id}).then(C=>{C.error?(console.error(C.error.message),s(4,_="Error deleting mod: "+C.error.message),s(5,c=!0)):Pe(me+"/mods")})},P=()=>Pe(me+"/mod/"+i+"/edit"),U=()=>b.set(!0),F=()=>Pe(me+"/mod/"+i+"/new-version"),Y=()=>s(3,$=!$),Q=()=>b.set(!1),O=()=>R();function H(C){f=C,b.set(f)}function J(C){c=C,s(5,c)}return r.$$set=C=>{"modId"in C&&s(0,i=C.modId),"mod"in C&&o(s(1,u=C.mod))},r.$$.update=()=>{r.$$.dirty&1028&&s(6,t=l?.roles?.deleteContent||n?.data?.mod?.authors?.findIndex(C=>C.user_id==l?.id)>=0)},[i,u,n,$,_,c,t,f,b,R,l,P,U,F,Y,Q,O,H,J]}class Ol extends de{constructor(e){super();_e(this,e,_l,dl,pe,{modId:0,mod:1})}}export{Ol as default,Cl as load};
//# sourceMappingURL=index.svelte-59555007.js.map
