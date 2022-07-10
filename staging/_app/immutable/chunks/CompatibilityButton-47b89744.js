import{S as W,i as V,s as F,d as y,v as L,e as N,h as T,j as A,k as u,ac as q,bk as E,n as D,p as b,g as j,x as _,af as x,ag as C,ad as K,ah as M,a7 as v,f as O,a8 as P,l as R,a9 as B,u as w,t as k,ab as S,q as st,r as at,aF as rt,aL as lt,aK as ft,aM as pt,y as gt,ae as ht,ai as wt}from"./vendor-71586dff.js";import{C as h}from"./graphql-587ea9ba.js";const kt="src/lib/components/mods/compatibility/OutdatedBanner.svelte";function mt(s){let t;const o={c:function(){t=N("div"),this.h()},l:function(a){t=T(a,"DIV",{class:!0}),A(t).forEach(u),this.h()},h:function(){q(t,"class","mod-outdated-stripe"),E(t,"mod-damaged",s[1]===h.Damaged),E(t,"mod-broken",s[1]===h.Broken),E(t,"mod-logo-outdated",s[0]),D(t,kt,26,2,733)},m:function(a,n){b(a,t,n)},p:function(a,n){n&2&&E(t,"mod-damaged",a[1]===h.Damaged),n&2&&E(t,"mod-broken",a[1]===h.Broken),n&1&&E(t,"mod-logo-outdated",a[0])},d:function(a){a&&u(t)}};return y("SvelteRegisterBlock",{block:o,id:mt.name,type:"if",source:"(26:0) {#if !works}",ctx:s}),o}function z(s){let t,o=!s[2]&&mt(s);const e={c:function(){o&&o.c(),t=j()},l:function(n){o&&o.l(n),t=j()},m:function(n,i){o&&o.m(n,i),b(n,t,i)},p:function(n,[i]){n[2]||o.p(n,i)},i:_,o:_,d:function(n){o&&o.d(n),n&&u(t)}};return y("SvelteRegisterBlock",{block:e,id:z.name,type:"component",source:"",ctx:s}),e}function Et(s,t,o){let{$$slots:e={},$$scope:a}=t;L("OutdatedBanner",e,[]);let{compatibility:n}=t,{logo:i=!1}=t;function c(m){const $=m.EA.state;return $==h.Broken?$:$==h.Works||m.EXP.state!=h.Works?m.EXP.state:$}let l=h.Works;n&&(l=c(n));const f=l===h.Works,r=["compatibility","logo"];return Object.keys(t).forEach(m=>{!~r.indexOf(m)&&m.slice(0,2)!=="$$"&&m!=="slot"&&console.warn(`<OutdatedBanner> was created with unknown prop '${m}'`)}),s.$$set=m=>{"compatibility"in m&&o(3,n=m.compatibility),"logo"in m&&o(0,i=m.logo)},s.$capture_state=()=>({CompatibilityState:h,compatibility:n,logo:i,Worst:c,worst:l,works:f}),s.$inject_state=m=>{"compatibility"in m&&o(3,n=m.compatibility),"logo"in m&&o(0,i=m.logo),"worst"in m&&o(1,l=m.worst)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),[i,l,f,n]}class Xt extends W{constructor(t){super(t),V(this,t,Et,z,F,{compatibility:3,logo:0}),y("SvelteRegisterComponent",{component:this,tagName:"OutdatedBanner",options:t,id:z.name});const{ctx:o}=this.$$,e=t.props||{};o[3]===void 0&&!("compatibility"in e)&&console.warn("<OutdatedBanner> was created without expected prop 'compatibility'")}get compatibility(){throw new Error("<OutdatedBanner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<OutdatedBanner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get logo(){throw new Error("<OutdatedBanner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set logo(t){throw new Error("<OutdatedBanner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const xt="src/lib/components/mods/compatibility/CompatibilityStateText.svelte";function G(s){let t,o,e;const a={c:function(){t=N("p"),o=x(s[0]),this.h()},l:function(i){t=T(i,"P",{class:!0});var c=A(t);o=C(c,s[0]),c.forEach(u),this.h()},h:function(){q(t,"class",e=s[1](s[0])+" mod-state"),D(t,xt,4,0,119)},m:function(i,c){b(i,t,c),K(t,o)},p:function(i,[c]){c&1&&M(o,i[0]),c&1&&e!==(e=i[1](i[0])+" mod-state")&&q(t,"class",e)},i:_,o:_,d:function(i){i&&u(t)}};return y("SvelteRegisterBlock",{block:a,id:G.name,type:"component",source:"",ctx:s}),a}function Ct(s,t,o){let{$$slots:e={},$$scope:a}=t;L("CompatibilityStateText",e,[]);let{state:n}=t;const i=l=>`mod-state-${l.toString().toLowerCase()}`,c=["state"];return Object.keys(t).forEach(l=>{!~c.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<CompatibilityStateText> was created with unknown prop '${l}'`)}),s.$$set=l=>{"state"in l&&o(0,n=l.state)},s.$capture_state=()=>({state:n,classForState:i}),s.$inject_state=l=>{"state"in l&&o(0,n=l.state)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),[n,i]}class H extends W{constructor(t){super(t),V(this,t,Ct,G,F,{state:0}),y("SvelteRegisterComponent",{component:this,tagName:"CompatibilityStateText",options:t,id:G.name});const{ctx:o}=this.$$,e=t.props||{};o[0]===void 0&&!("state"in e)&&console.warn("<CompatibilityStateText> was created without expected prop 'state'")}get state(){throw new Error("<CompatibilityStateText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set state(t){throw new Error("<CompatibilityStateText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const ct="src/lib/components/mods/compatibility/CompatibilityInfo.svelte";function J(s){let t,o,e,a,n,i,c,l,f,r,m;e=new H({props:{state:s[0].EA.state},$$inline:!0});let $=s[0].EA.note&&Q(s);l=new H({props:{state:s[0].EXP.state},$$inline:!0});let d=s[0].EXP.note&&U(s);const nt={c:function(){t=N("div"),o=x("Early Access: "),v(e.$$.fragment),a=O(),$&&$.c(),n=O(),i=N("div"),c=x("Experimental: "),v(l.$$.fragment),f=O(),d&&d.c(),r=j(),this.h()},l:function(p){t=T(p,"DIV",{});var g=A(t);o=C(g,"Early Access: "),P(e.$$.fragment,g),g.forEach(u),a=R(p),$&&$.l(p),n=R(p),i=T(p,"DIV",{});var X=A(i);c=C(X,"Experimental: "),P(l.$$.fragment,X),X.forEach(u),f=R(p),d&&d.l(p),r=j(),this.h()},h:function(){D(t,ct,5,2,180),D(i,ct,9,2,337)},m:function(p,g){b(p,t,g),K(t,o),B(e,t,null),b(p,a,g),$&&$.m(p,g),b(p,n,g),b(p,i,g),K(i,c),B(l,i,null),b(p,f,g),d&&d.m(p,g),b(p,r,g),m=!0},p:function(p,g){const X={};g&1&&(X.state=p[0].EA.state),e.$set(X),p[0].EA.note?$?$.p(p,g):($=Q(p),$.c(),$.m(n.parentNode,n)):$&&($.d(1),$=null);const ot={};g&1&&(ot.state=p[0].EXP.state),l.$set(ot),p[0].EXP.note?d?d.p(p,g):(d=U(p),d.c(),d.m(r.parentNode,r)):d&&(d.d(1),d=null)},i:function(p){m||(w(e.$$.fragment,p),w(l.$$.fragment,p),m=!0)},o:function(p){k(e.$$.fragment,p),k(l.$$.fragment,p),m=!1},d:function(p){p&&u(t),S(e),p&&u(a),$&&$.d(p),p&&u(n),p&&u(i),S(l),p&&u(f),d&&d.d(p),p&&u(r)}};return y("SvelteRegisterBlock",{block:nt,id:J.name,type:"if",source:"(5:0) {#if compatibility}",ctx:s}),nt}function Q(s){let t,o=s[0].EA.note+"",e;const a={c:function(){t=x("Note: "),e=x(o)},l:function(i){t=C(i,"Note: "),e=C(i,o)},m:function(i,c){b(i,t,c),b(i,e,c)},p:function(i,c){c&1&&o!==(o=i[0].EA.note+"")&&M(e,o)},d:function(i){i&&u(t),i&&u(e)}};return y("SvelteRegisterBlock",{block:a,id:Q.name,type:"if",source:"(7:2) {#if compatibility.EA.note}",ctx:s}),a}function U(s){let t,o=s[0].EXP.note+"",e;const a={c:function(){t=x("Note: "),e=x(o)},l:function(i){t=C(i,"Note: "),e=C(i,o)},m:function(i,c){b(i,t,c),b(i,e,c)},p:function(i,c){c&1&&o!==(o=i[0].EXP.note+"")&&M(e,o)},d:function(i){i&&u(t),i&&u(e)}};return y("SvelteRegisterBlock",{block:a,id:U.name,type:"if",source:"(11:2) {#if compatibility.EXP.note}",ctx:s}),a}function Y(s){let t,o,e=s[0]&&J(s);const a={c:function(){e&&e.c(),t=j()},l:function(i){e&&e.l(i),t=j()},m:function(i,c){e&&e.m(i,c),b(i,t,c),o=!0},p:function(i,[c]){i[0]?e?(e.p(i,c),c&1&&w(e,1)):(e=J(i),e.c(),w(e,1),e.m(t.parentNode,t)):e&&(st(),k(e,1,1,()=>{e=null}),at())},i:function(i){o||(w(e),o=!0)},o:function(i){k(e),o=!1},d:function(i){e&&e.d(i),i&&u(t)}};return y("SvelteRegisterBlock",{block:a,id:Y.name,type:"component",source:"",ctx:s}),a}function vt(s,t,o){let{$$slots:e={},$$scope:a}=t;L("CompatibilityInfo",e,[]);let{compatibility:n}=t;const i=["compatibility"];return Object.keys(t).forEach(c=>{!~i.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<CompatibilityInfo> was created with unknown prop '${c}'`)}),s.$$set=c=>{"compatibility"in c&&o(0,n=c.compatibility)},s.$capture_state=()=>({CompatibilityStateText:H,compatibility:n}),s.$inject_state=c=>{"compatibility"in c&&o(0,n=c.compatibility)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),[n]}class ut extends W{constructor(t){super(t),V(this,t,vt,Y,F,{compatibility:0}),y("SvelteRegisterComponent",{component:this,tagName:"CompatibilityInfo",options:t,id:Y.name});const{ctx:o}=this.$$,e=t.props||{};o[0]===void 0&&!("compatibility"in e)&&console.warn("<CompatibilityInfo> was created without expected prop 'compatibility'")}get compatibility(){throw new Error("<CompatibilityInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Pt="src/lib/components/mods/compatibility/CompatibilityIcon.svelte";function Z(s){let t,o;const e={c:function(){t=N("p"),o=x(s[1]),this.h()},l:function(n){t=T(n,"P",{class:!0});var i=A(t);o=C(i,s[1]),i.forEach(u),this.h()},h:function(){q(t,"class","material-icons"),E(t,"mod-state-works",s[0].state===h.Works),E(t,"mod-state-damaged",s[0].state===h.Damaged),E(t,"mod-state-broken",s[0].state===h.Broken),D(t,Pt,9,0,196)},m:function(n,i){b(n,t,i),K(t,o)},p:function(n,[i]){i&2&&M(o,n[1]),i&1&&E(t,"mod-state-works",n[0].state===h.Works),i&1&&E(t,"mod-state-damaged",n[0].state===h.Damaged),i&1&&E(t,"mod-state-broken",n[0].state===h.Broken)},i:_,o:_,d:function(n){n&&u(t)}};return y("SvelteRegisterBlock",{block:e,id:Z.name,type:"component",source:"",ctx:s}),e}function Bt(s,t,o){let{$$slots:e={},$$scope:a}=t;L("CompatibilityIcon",e,[]);let{compatibility:n}=t,{EXP:i=!1}=t,c="public";i&&(c="science");const l=["compatibility","EXP"];return Object.keys(t).forEach(f=>{!~l.indexOf(f)&&f.slice(0,2)!=="$$"&&f!=="slot"&&console.warn(`<CompatibilityIcon> was created with unknown prop '${f}'`)}),s.$$set=f=>{"compatibility"in f&&o(0,n=f.compatibility),"EXP"in f&&o(2,i=f.EXP)},s.$capture_state=()=>({CompatibilityState:h,compatibility:n,EXP:i,iconText:c}),s.$inject_state=f=>{"compatibility"in f&&o(0,n=f.compatibility),"EXP"in f&&o(2,i=f.EXP),"iconText"in f&&o(1,c=f.iconText)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),[n,c,i]}class tt extends W{constructor(t){super(t),V(this,t,Bt,Z,F,{compatibility:0,EXP:2}),y("SvelteRegisterComponent",{component:this,tagName:"CompatibilityIcon",options:t,id:Z.name});const{ctx:o}=this.$$,e=t.props||{};o[0]===void 0&&!("compatibility"in e)&&console.warn("<CompatibilityIcon> was created without expected prop 'compatibility'")}get compatibility(){throw new Error("<CompatibilityIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get EXP(){throw new Error("<CompatibilityIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set EXP(t){throw new Error("<CompatibilityIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function et(s){let t,o,e,a,n;t=new pt({props:{title:"Compatibility information",$$slots:{default:[$t]},$$scope:{ctx:s}},$$inline:!0}),t.$on("click",s[2]);function i(f){s[3](f)}let c={$$slots:{default:[yt]},$$scope:{ctx:s}};s[1]!==void 0&&(c.open=s[1]),e=new rt({props:c,$$inline:!0}),gt.push(()=>ht(e,"open",i));const l={c:function(){v(t.$$.fragment),o=O(),v(e.$$.fragment)},l:function(r){P(t.$$.fragment,r),o=R(r),P(e.$$.fragment,r)},m:function(r,m){B(t,r,m),b(r,o,m),B(e,r,m),n=!0},p:function(r,m){const $={};m&17&&($.$$scope={dirty:m,ctx:r}),t.$set($);const d={};m&17&&(d.$$scope={dirty:m,ctx:r}),!a&&m&2&&(a=!0,d.open=r[1],wt(()=>a=!1)),e.$set(d)},i:function(r){n||(w(t.$$.fragment,r),w(e.$$.fragment,r),n=!0)},o:function(r){k(t.$$.fragment,r),k(e.$$.fragment,r),n=!1},d:function(r){S(t,r),r&&u(o),S(e,r)}};return y("SvelteRegisterBlock",{block:l,id:et.name,type:"if",source:"(9:0) {#if compatibility}",ctx:s}),l}function $t(s){let t,o,e,a;t=new tt({props:{compatibility:s[0].EA},$$inline:!0}),e=new tt({props:{compatibility:s[0].EXP,EXP:!0},$$inline:!0});const n={c:function(){v(t.$$.fragment),o=O(),v(e.$$.fragment)},l:function(c){P(t.$$.fragment,c),o=R(c),P(e.$$.fragment,c)},m:function(c,l){B(t,c,l),b(c,o,l),B(e,c,l),a=!0},p:function(c,l){const f={};l&1&&(f.compatibility=c[0].EA),t.$set(f);const r={};l&1&&(r.compatibility=c[0].EXP),e.$set(r)},i:function(c){a||(w(t.$$.fragment,c),w(e.$$.fragment,c),a=!0)},o:function(c){k(t.$$.fragment,c),k(e.$$.fragment,c),a=!1},d:function(c){S(t,c),c&&u(o),S(e,c)}};return y("SvelteRegisterBlock",{block:n,id:$t.name,type:"slot",source:'(10:2) <Button     title=\\"Compatibility information\\"     on:click={() => {       open = true;     }}>',ctx:s}),n}function dt(s){let t;const o={c:function(){t=x("Compatibility Information")},l:function(a){t=C(a,"Compatibility Information")},m:function(a,n){b(a,t,n)},d:function(a){a&&u(t)}};return y("SvelteRegisterBlock",{block:o,id:dt.name,type:"slot",source:"(20:4) <Title>",ctx:s}),o}function bt(s){let t,o;t=new ut({props:{compatibility:s[0]},$$inline:!0});const e={c:function(){v(t.$$.fragment)},l:function(n){P(t.$$.fragment,n)},m:function(n,i){B(t,n,i),o=!0},p:function(n,i){const c={};i&1&&(c.compatibility=n[0]),t.$set(c)},i:function(n){o||(w(t.$$.fragment,n),o=!0)},o:function(n){k(t.$$.fragment,n),o=!1},d:function(n){S(t,n)}};return y("SvelteRegisterBlock",{block:e,id:bt.name,type:"slot",source:"(21:4) <Content>",ctx:s}),e}function yt(s){let t,o,e,a;t=new ft({props:{$$slots:{default:[dt]},$$scope:{ctx:s}},$$inline:!0}),e=new lt({props:{$$slots:{default:[bt]},$$scope:{ctx:s}},$$inline:!0});const n={c:function(){v(t.$$.fragment),o=O(),v(e.$$.fragment)},l:function(c){P(t.$$.fragment,c),o=R(c),P(e.$$.fragment,c)},m:function(c,l){B(t,c,l),b(c,o,l),B(e,c,l),a=!0},p:function(c,l){const f={};l&16&&(f.$$scope={dirty:l,ctx:c}),t.$set(f);const r={};l&17&&(r.$$scope={dirty:l,ctx:c}),e.$set(r)},i:function(c){a||(w(t.$$.fragment,c),w(e.$$.fragment,c),a=!0)},o:function(c){k(t.$$.fragment,c),k(e.$$.fragment,c),a=!1},d:function(c){S(t,c),c&&u(o),S(e,c)}};return y("SvelteRegisterBlock",{block:n,id:yt.name,type:"slot",source:"(19:2) <Dialog bind:open>",ctx:s}),n}function it(s){let t,o,e=s[0]&&et(s);const a={c:function(){e&&e.c(),t=j()},l:function(i){e&&e.l(i),t=j()},m:function(i,c){e&&e.m(i,c),b(i,t,c),o=!0},p:function(i,[c]){i[0]?e?(e.p(i,c),c&1&&w(e,1)):(e=et(i),e.c(),w(e,1),e.m(t.parentNode,t)):e&&(st(),k(e,1,1,()=>{e=null}),at())},i:function(i){o||(w(e),o=!0)},o:function(i){k(e),o=!1},d:function(i){e&&e.d(i),i&&u(t)}};return y("SvelteRegisterBlock",{block:a,id:it.name,type:"component",source:"",ctx:s}),a}function St(s,t,o){let{$$slots:e={},$$scope:a}=t;L("CompatibilityButton",e,[]);let n=!1,{compatibility:i}=t;const c=["compatibility"];Object.keys(t).forEach(r=>{!~c.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<CompatibilityButton> was created with unknown prop '${r}'`)});const l=()=>{o(1,n=!0)};function f(r){n=r,o(1,n)}return s.$$set=r=>{"compatibility"in r&&o(0,i=r.compatibility)},s.$capture_state=()=>({Dialog:rt,Content:lt,Title:ft,CompatibilityInfo:ut,Button:pt,CompatibilityIcon:tt,open:n,compatibility:i}),s.$inject_state=r=>{"open"in r&&o(1,n=r.open),"compatibility"in r&&o(0,i=r.compatibility)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),[i,n,l,f]}class Ot extends W{constructor(t){super(t),V(this,t,St,it,F,{compatibility:0}),y("SvelteRegisterComponent",{component:this,tagName:"CompatibilityButton",options:t,id:it.name});const{ctx:o}=this.$$,e=t.props||{};o[0]===void 0&&!("compatibility"in e)&&console.warn("<CompatibilityButton> was created without expected prop 'compatibility'")}get compatibility(){throw new Error("<CompatibilityButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ot as C,Xt as O};
//# sourceMappingURL=CompatibilityButton-47b89744.js.map
