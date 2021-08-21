var e=Object.defineProperty,n=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,o=(n,a,i)=>a in n?e(n,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[a]=i,s=(e,n)=>{for(var a in n||(n={}))t.call(n,a)&&o(e,a,n[a]);if(i)for(var a of i(n))d.call(n,a)&&o(e,a,n[a]);return e},y=(e,i)=>n(e,a(i));import{D as r,E as p,F as m,G as L,H as N,I as A,S as k,i as f,s as T,J as O,K as g,j as c,k as _,m as l,n as C,o as S,f as U,L as u,x as R,u as h,v as B,d as E,M as v,N as J,O as V,P as I,Q as M,e as $,t as b,c as G,a as w,g as x,b as P,R as j,r as D,w as q,h as z,T as K,_ as F,U as Y,V as Q,W as H,X as W,Y as X,Z,$ as ee,a0 as ne,a1 as ae,a2 as ie,a3 as te}from"../chunks/vendor-ecacde99.js";import{l as de,p as oe,g as se}from"../chunks/stores-0d6f4ea5.js";import{A as ye}from"../chunks/api-82c76902.js";import{u as re,a as pe}from"../chunks/user-bb5babe5.js";import{b as me}from"../chunks/paths-6758d194.js";import{D as Le}from"../chunks/Dialog-da2d79a0.js";import{G as Ne,O as Ae,a as ke,b as fe,c as Te}from"../chunks/graphql-7c12eb8b.js";import{g as Oe}from"../chunks/navigation-51f4a605.js";import{T as ge}from"../chunks/Toast-1c3d573d.js";import"../chunks/singletons-12a22614.js";var ce={__schema:{queryType:{name:"Query"},mutationType:{name:"Mutation"},subscriptionType:null,types:[{kind:"OBJECT",name:"BootstrapVersion",fields:[{name:"id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"satisfactory_version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"stability",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"link",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"changelog",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"date",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"updated_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"created_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"CreateVersionResponse",fields:[{name:"auto_approved",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"version",type:{kind:"OBJECT",name:"Version"},args:[]}],interfaces:[]},{kind:"OBJECT",name:"GetBootstrapVersions",fields:[{name:"bootstrap_versions",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"BootstrapVersion"}}}},args:[]},{name:"count",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"GetGuides",fields:[{name:"guides",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Guide"}}}},args:[]},{name:"count",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"GetMods",fields:[{name:"mods",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Mod"}}}},args:[]},{name:"count",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"GetMyMods",fields:[{name:"mods",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Mod"}}}},args:[]},{name:"count",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"GetMyVersions",fields:[{name:"versions",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Version"}}}},args:[]},{name:"count",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"GetSMLVersions",fields:[{name:"sml_versions",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"SMLVersion"}}}},args:[]},{name:"count",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"GetVersions",fields:[{name:"versions",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Version"}}}},args:[]},{name:"count",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"Group",fields:[{name:"id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"name",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"Guide",fields:[{name:"id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"name",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"short_description",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"guide",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"views",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"user_id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"updated_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"created_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"user",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"User"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"LatestVersions",fields:[{name:"alpha",type:{kind:"OBJECT",name:"Version"},args:[]},{name:"beta",type:{kind:"OBJECT",name:"Version"},args:[]},{name:"release",type:{kind:"OBJECT",name:"Version"},args:[]}],interfaces:[]},{kind:"OBJECT",name:"Mod",fields:[{name:"id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"name",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"short_description",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"full_description",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"logo",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"source_url",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"creator_id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"approved",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"views",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"downloads",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"hotness",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"popularity",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"updated_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"created_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"last_version_date",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"mod_reference",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"hidden",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"authors",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"UserMod"}}}},args:[]},{name:"version",type:{kind:"OBJECT",name:"Version"},args:[{name:"version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"versions",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Version"}}}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"latestVersions",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"LatestVersions"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"Mutation",fields:[{name:"discourseSSO",type:{kind:"SCALAR",name:"Any"},args:[{name:"sso",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"sig",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"createBootstrapVersion",type:{kind:"OBJECT",name:"BootstrapVersion"},args:[{name:"bootstrapVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"updateBootstrapVersion",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"BootstrapVersion"}},args:[{name:"bootstrapVersionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"bootstrapVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"deleteBootstrapVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"bootstrapVersionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"createGuide",type:{kind:"OBJECT",name:"Guide"},args:[{name:"guide",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"updateGuide",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Guide"}},args:[{name:"guideId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"guide",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"deleteGuide",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"guideId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"createMod",type:{kind:"OBJECT",name:"Mod"},args:[{name:"mod",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"updateMod",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Mod"}},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"mod",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"deleteMod",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"approveMod",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"denyMod",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"createSMLVersion",type:{kind:"OBJECT",name:"SMLVersion"},args:[{name:"smlVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"updateSMLVersion",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"SMLVersion"}},args:[{name:"smlVersionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"smlVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"deleteSMLVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"smlVersionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"updateUser",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"User"}},args:[{name:"userId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"input",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"logout",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"oAuthGithub",type:{kind:"OBJECT",name:"UserSession"},args:[{name:"code",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"state",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"oAuthGoogle",type:{kind:"OBJECT",name:"UserSession"},args:[{name:"code",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"state",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"oAuthFacebook",type:{kind:"OBJECT",name:"UserSession"},args:[{name:"code",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"state",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"createVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"uploadVersionPart",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"versionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"part",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"file",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"finalizeCreateVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"versionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"updateVersion",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Version"}},args:[{name:"versionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"deleteVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"versionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"approveVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"versionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"denyVersion",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[{name:"versionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]}],interfaces:[]},{kind:"OBJECT",name:"OAuthOptions",fields:[{name:"github",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"google",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"facebook",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"Query",fields:[{name:"getOAuthOptions",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"OAuthOptions"}},args:[{name:"callback_url",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getBootstrapVersion",type:{kind:"OBJECT",name:"BootstrapVersion"},args:[{name:"bootstrapVersionID",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getBootstrapVersions",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetBootstrapVersions"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getGuide",type:{kind:"OBJECT",name:"Guide"},args:[{name:"guideId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getGuides",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetGuides"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getMod",type:{kind:"OBJECT",name:"Mod"},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getModByReference",type:{kind:"OBJECT",name:"Mod"},args:[{name:"modReference",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getMods",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetMods"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getUnapprovedMods",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetMods"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getMyMods",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetMyMods"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getMyUnapprovedMods",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetMyMods"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getSMLVersion",type:{kind:"OBJECT",name:"SMLVersion"},args:[{name:"smlVersionID",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getSMLVersions",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetSMLVersions"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getMe",type:{kind:"OBJECT",name:"User"},args:[]},{name:"getUser",type:{kind:"OBJECT",name:"User"},args:[{name:"userId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getUsers",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"OBJECT",name:"User"}}},args:[{name:"userIds",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}}}]},{name:"getVersion",type:{kind:"OBJECT",name:"Version"},args:[{name:"versionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getVersions",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetVersions"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getUnapprovedVersions",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetVersions"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"checkVersionUploadState",type:{kind:"OBJECT",name:"CreateVersionResponse"},args:[{name:"modId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}},{name:"versionId",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}]},{name:"getMyVersions",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetMyVersions"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]},{name:"getMyUnapprovedVersions",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"GetMyVersions"}},args:[{name:"filter",type:{kind:"SCALAR",name:"Any"}}]}],interfaces:[]},{kind:"OBJECT",name:"SMLVersion",fields:[{name:"id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"satisfactory_version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"stability",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"link",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"changelog",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"date",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"bootstrap_version",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"updated_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"created_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"User",fields:[{name:"id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"email",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"username",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"avatar",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"created_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"github_id",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"google_id",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"facebook_id",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"roles",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"UserRoles"}},args:[]},{name:"groups",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Group"}}}},args:[]},{name:"mods",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"UserMod"}}}},args:[]},{name:"guides",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Guide"}}}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"UserMod",fields:[{name:"user_id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"mod_id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"role",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"user",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"User"}},args:[]},{name:"mod",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Mod"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"UserRoles",fields:[{name:"approveMods",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"approveVersions",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"deleteContent",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"editContent",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"editUsers",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"editSMLVersions",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"editBootstrapVersions",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"UserSession",fields:[{name:"token",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"Version",fields:[{name:"id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"mod_id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"sml_version",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"changelog",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"downloads",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"stability",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"approved",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"updated_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"created_at",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"link",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"metadata",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"size",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"hash",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"mod",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"Mod"}},args:[]},{name:"dependencies",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"VersionDependency"}}}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"VersionDependency",fields:[{name:"version_id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"mod_id",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"condition",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"optional",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"mod",type:{kind:"OBJECT",name:"Mod"},args:[]},{name:"version",type:{kind:"OBJECT",name:"Version"},args:[]}],interfaces:[]},{kind:"OBJECT",name:"__Schema",fields:[{name:"description",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"types",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__Type"}}}},args:[]},{name:"queryType",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__Type"}},args:[]},{name:"mutationType",type:{kind:"OBJECT",name:"__Type"},args:[]},{name:"subscriptionType",type:{kind:"OBJECT",name:"__Type"},args:[]},{name:"directives",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__Directive"}}}},args:[]}],interfaces:[]},{kind:"OBJECT",name:"__Type",fields:[{name:"kind",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"name",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"description",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"specifiedByUrl",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"fields",type:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__Field"}}},args:[{name:"includeDeprecated",type:{kind:"SCALAR",name:"Any"}}]},{name:"interfaces",type:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__Type"}}},args:[]},{name:"possibleTypes",type:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__Type"}}},args:[]},{name:"enumValues",type:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__EnumValue"}}},args:[{name:"includeDeprecated",type:{kind:"SCALAR",name:"Any"}}]},{name:"inputFields",type:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__InputValue"}}},args:[{name:"includeDeprecated",type:{kind:"SCALAR",name:"Any"}}]},{name:"ofType",type:{kind:"OBJECT",name:"__Type"},args:[]}],interfaces:[]},{kind:"OBJECT",name:"__Field",fields:[{name:"name",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"description",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"args",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__InputValue"}}}},args:[{name:"includeDeprecated",type:{kind:"SCALAR",name:"Any"}}]},{name:"type",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__Type"}},args:[]},{name:"isDeprecated",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"deprecationReason",type:{kind:"SCALAR",name:"Any"},args:[]}],interfaces:[]},{kind:"OBJECT",name:"__InputValue",fields:[{name:"name",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"description",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"type",type:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__Type"}},args:[]},{name:"defaultValue",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"isDeprecated",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"deprecationReason",type:{kind:"SCALAR",name:"Any"},args:[]}],interfaces:[]},{kind:"OBJECT",name:"__EnumValue",fields:[{name:"name",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"description",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"isDeprecated",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"deprecationReason",type:{kind:"SCALAR",name:"Any"},args:[]}],interfaces:[]},{kind:"OBJECT",name:"__Directive",fields:[{name:"name",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"description",type:{kind:"SCALAR",name:"Any"},args:[]},{name:"isRepeatable",type:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}},args:[]},{name:"locations",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"SCALAR",name:"Any"}}}},args:[]},{name:"args",type:{kind:"NON_NULL",ofType:{kind:"LIST",ofType:{kind:"NON_NULL",ofType:{kind:"OBJECT",name:"__InputValue"}}}},args:[]}],interfaces:[]},{kind:"SCALAR",name:"Any"}],directives:[]}};function _e(e){let n,a,i,t,d,o,s,y,r,p,m,L,N,A,k,f,T,O,g,u;return a=new K({props:{icon:F,inline:!0,class:"inline-block mr-2"}}),y=new K({props:{icon:Y,inline:!0,class:"inline-block mr-2"}}),A=new K({props:{icon:Q,inline:!0,class:"inline-block mr-2"}}),{c(){n=$("button"),c(a.$$.fragment),i=_(),t=$("span"),d=b("Sign in with Github"),o=_(),s=$("button"),c(y.$$.fragment),r=_(),p=$("span"),m=b("Sign in with Google"),L=_(),N=$("button"),c(A.$$.fragment),k=_(),f=$("span"),T=b("Sign in with Facebook"),this.h()},l(e){n=G(e,"BUTTON",{class:!0});var O=w(n);l(a.$$.fragment,O),i=C(O),t=G(O,"SPAN",{});var g=w(t);d=x(g,"Sign in with Github"),g.forEach(E),O.forEach(E),o=C(e),s=G(e,"BUTTON",{class:!0});var c=w(s);l(y.$$.fragment,c),r=C(c),p=G(c,"SPAN",{});var _=w(p);m=x(_,"Sign in with Google"),_.forEach(E),c.forEach(E),L=C(e),N=G(e,"BUTTON",{class:!0});var S=w(N);l(A.$$.fragment,S),k=C(S),f=G(S,"SPAN",{});var U=w(f);T=x(U,"Sign in with Facebook"),U.forEach(E),S.forEach(E),this.h()},h(){P(n,"class","login-button svelte-1yaaurg"),P(s,"class","login-button svelte-1yaaurg"),P(N,"class","login-button svelte-1yaaurg")},m(c,_){U(c,n,_),S(a,n,null),j(n,i),j(n,t),j(t,d),U(c,o,_),U(c,s,_),S(y,s,null),j(s,r),j(s,p),j(p,m),U(c,L,_),U(c,N,_),S(A,N,null),j(N,k),j(N,f),j(f,T),O=!0,g||(u=[H(n,"click",e[6]),H(s,"click",e[7]),H(N,"click",e[8])],g=!0)},p:W,i(e){O||(R(a.$$.fragment,e),R(y.$$.fragment,e),R(A.$$.fragment,e),O=!0)},o(e){h(a.$$.fragment,e),h(y.$$.fragment,e),h(A.$$.fragment,e),O=!1},d(e){e&&E(n),B(a),e&&E(o),e&&E(s),B(y),e&&E(L),e&&E(N),B(A),g=!1,X(u)}}}function le(e){let n,a,i,t=e[4].error.message+"";return{c(){n=$("p"),a=b("Oh no... "),i=b(t)},l(e){n=G(e,"P",{});var d=w(n);a=x(d,"Oh no... "),i=x(d,t),d.forEach(E)},m(e,t){U(e,n,t),j(n,a),j(n,i)},p(e,n){16&n&&t!==(t=e[4].error.message+"")&&z(i,t)},i:W,o:W,d(e){e&&E(n)}}}function Ce(e){let n,a;return{c(){n=$("p"),a=b("Loading...")},l(e){n=G(e,"P",{});var i=w(n);a=x(i,"Loading..."),i.forEach(E)},m(e,i){U(e,n,i),j(n,a)},p:W,i:W,o:W,d(e){e&&E(n)}}}function Se(e){let n,a,i,t,d,o,s;const y=[Ce,le,_e],r=[];function p(e,n){return e[4].fetching?0:e[4].error?1:2}return d=p(e),o=r[d]=y[d](e),{c(){n=$("div"),a=$("h3"),i=b("Login / Sign Up"),t=_(),o.c(),this.h()},l(e){n=G(e,"DIV",{class:!0});var d=w(n);a=G(d,"H3",{class:!0});var s=w(a);i=x(s,"Login / Sign Up"),s.forEach(E),t=C(d),o.l(d),d.forEach(E),this.h()},h(){P(a,"class","text-2xl font-bold"),P(n,"class","grid grid-flow-row gap-4")},m(e,o){U(e,n,o),j(n,a),j(a,i),j(n,t),r[d].m(n,null),s=!0},p(e,a){let i=d;d=p(e),d===i?r[d].p(e,a):(D(),h(r[i],1,1,(()=>{r[i]=null})),q(),o=r[d],o?o.p(e,a):(o=r[d]=y[d](e),o.c()),R(o,1),o.m(n,null))},i(e){s||(R(o),s=!0)},o(e){h(o),s=!1},d(e){e&&E(n),r[d].d()}}}function Ue(e){let n,a;return{c(){n=$("span"),a=b(e[2])},l(i){n=G(i,"SPAN",{});var t=w(n);a=x(t,e[2]),t.forEach(E)},m(e,i){U(e,n,i),j(n,a)},p(e,n){4&n&&z(a,e[2])},d(e){e&&E(n)}}}function ue(e){let n,a,i,t,d,o;function s(n){e[9](n)}let y={$$slots:{default:[Se]},$$scope:{ctx:e}};function r(n){e[10](n)}void 0!==e[1]&&(y.open=e[1]),n=new Le({props:y}),O.push((()=>g(n,"open",s)));let p={$$slots:{default:[Ue]},$$scope:{ctx:e}};return void 0!==e[3]&&(p.running=e[3]),t=new ge({props:p}),O.push((()=>g(t,"running",r))),{c(){c(n.$$.fragment),i=_(),c(t.$$.fragment)},l(e){l(n.$$.fragment,e),i=C(e),l(t.$$.fragment,e)},m(e,a){S(n,e,a),U(e,i,a),S(t,e,a),o=!0},p(e,[i]){const o={};8208&i&&(o.$$scope={dirty:i,ctx:e}),!a&&2&i&&(a=!0,o.open=e[1],u((()=>a=!1))),n.$set(o);const s={};8196&i&&(s.$$scope={dirty:i,ctx:e}),!d&&8&i&&(d=!0,s.running=e[3],u((()=>d=!1))),t.$set(s)},i(e){o||(R(n.$$.fragment,e),R(t.$$.fragment,e),o=!0)},o(e){h(n.$$.fragment,e),h(t.$$.fragment,e),o=!1},d(e){B(n,e),e&&E(i),B(t,e)}}}function Re(e,n,a){let i,t,d;v(e,de,(e=>a(1,i=e))),v(e,oe,(e=>a(11,t=e)));{const e=J(Ne,void 0,{pause:!0});V(e);let n=!0;re.subscribe((a=>{if(a){const e=new Date((new Date).getTime()+2592e6);I.set("token",a,{domain:window.location.hostname,expires:e})}else n||I.remove("token");if(n=!1,a){e.reexecute({requestPolicy:"network-only"});const n=e.subscribe((e=>{e.fetching||(e.error?(console.error(e.error.message),n()):e.data&&(pe.set(e.data.getMe),n()))}))}else pe.set(null)}))}const o={github:M({query:Ae}),google:M({query:ke}),facebook:M({query:fe})};let s="",y=!1;{const e=localStorage.getItem("sign.in.method");localStorage.removeItem("sign.in.method");let n=Object.fromEntries(t.query.entries());0===Object.keys(n).length&&(n=Object.fromEntries(new URLSearchParams(window.location.search)));const i=n.code,d=n.state;e&&i&&d&&o[e]({code:i,state:d}).then((e=>{e.error?(console.error(e.error.message),a(2,s="Error logging in: "+e.error.message),a(3,y=!0)):re.set(e.data.session.token)}))}const r=J(Te,{callback_url:""},{requestPolicy:"network-only"});v(e,r,(e=>a(4,d=e)));const p=(e,n)=>{localStorage.setItem("sign.in.method",e),Oe(n)};return e.$$.update=()=>{3&e.$$.dirty&&i&&(a(0,r.variables.callback_url=encodeURIComponent(window.location.origin+window.location.pathname),r),V(r))},[r,i,s,y,d,p,()=>p("github",d.data.getOAuthOptions.github),()=>p("google",d.data.getOAuthOptions.google),()=>p("facebook",d.data.getOAuthOptions.facebook),function(e){i=e,de.set(i)},function(e){y=e,a(3,y)}]}class he extends k{constructor(e){super(),f(this,e,Re,ue,T,{})}}function Be(e){let n,a,i,t,d,o,s,y,r,p,m,L,N,A,k,f;const T=e[1].default,O=Z(T,e,e[0],null);return k=new he({}),{c(){n=$("link"),a=$("link"),i=$("link"),t=$("link"),d=$("link"),o=$("link"),s=$("link"),y=$("meta"),r=$("meta"),p=$("meta"),m=$("link"),L=_(),N=$("main"),O&&O.c(),A=_(),c(k.$$.fragment),this.h()},l(e){const f=ee('[data-svelte="svelte-1ir36j2"]',document.head);n=G(f,"LINK",{rel:!0,type:!0,href:!0}),a=G(f,"LINK",{rel:!0,sizes:!0,href:!0}),i=G(f,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),t=G(f,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),d=G(f,"LINK",{rel:!0,href:!0}),o=G(f,"LINK",{rel:!0,href:!0,color:!0}),s=G(f,"LINK",{rel:!0,href:!0}),y=G(f,"META",{name:!0,content:!0}),r=G(f,"META",{name:!0,content:!0}),p=G(f,"META",{name:!0,content:!0}),m=G(f,"LINK",{rel:!0,href:!0,as:!0,type:!0}),f.forEach(E),L=C(e),N=G(e,"MAIN",{});var T=w(N);O&&O.l(T),A=C(T),l(k.$$.fragment,T),T.forEach(E),this.h()},h(){P(n,"rel","icon"),P(n,"type","image/x-icon"),P(n,"href",me+"/assets/favicon.ico"),P(a,"rel","apple-touch-icon"),P(a,"sizes","180x180"),P(a,"href",me+"/assets/apple-touch-icon.png?v=69P26YMB35"),P(i,"rel","icon"),P(i,"type","image/png"),P(i,"sizes","32x32"),P(i,"href",me+"/assets/favicon-32x32.png?v=69P26YMB35"),P(t,"rel","icon"),P(t,"type","image/png"),P(t,"sizes","16x16"),P(t,"href",me+"/assets/favicon-16x16.png?v=69P26YMB35"),P(d,"rel","manifest"),P(d,"href",me+"/manifest.json?v=69P26YMB35"),P(o,"rel","mask-icon"),P(o,"href",me+"/assets/safari-pinned-tab.svg?v=69P26YMB35"),P(o,"color","#da8517"),P(s,"rel","shortcut icon"),P(s,"href",me+"/assets/favicon.ico?v=69P26YMB35"),P(y,"name","msapplication-TileColor"),P(y,"content","#da8517"),P(r,"name","msapplication-config"),P(r,"content",me+"/static/assets/browserconfig.xml?v=69P26YMB35"),P(p,"name","theme-color"),P(p,"content","#da8517"),P(m,"rel","preload"),P(m,"href",me+"/assets/fonts/flow-rounded.woff"),P(m,"as","font"),P(m,"type","font/woff")},m(e,T){j(document.head,n),j(document.head,a),j(document.head,i),j(document.head,t),j(document.head,d),j(document.head,o),j(document.head,s),j(document.head,y),j(document.head,r),j(document.head,p),j(document.head,m),U(e,L,T),U(e,N,T),O&&O.m(N,null),j(N,A),S(k,N,null),f=!0},p(e,[n]){O&&O.p&&(!f||1&n)&&ne(O,T,e,e[0],f?ie(T,e[0],n,null):ae(e[0]),null)},i(e){f||(R(O,e),R(k.$$.fragment,e),f=!0)},o(e){h(O,e),h(k.$$.fragment,e),f=!1},d(e){E(n),E(a),E(i),E(t),E(d),E(o),E(s),E(y),E(r),E(p),E(m),e&&E(L),e&&E(N),O&&O.d(e),B(k)}}}var Ee=function(e,n,a,i){return new(a||(a=Promise))((function(t,d){function o(e){try{y(i.next(e))}catch(n){d(n)}}function s(e){try{y(i.throw(e))}catch(n){d(n)}}function y(e){var n;e.done?t(e.value):(n=e.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,s)}y((i=i.apply(e,n||[])).next())}))};let ve;const Je=({fetch:e})=>Ee(void 0,void 0,void 0,(function*(){return ve=(e=>r({url:ye,fetch:e,exchanges:[p({schema:ce,keys:{GetMods:()=>null,LatestVersions:()=>null,UserMod:()=>null,GetGuides:()=>null,OAuthOptions:()=>null,UserRoles:()=>null},updates:{Mutation:{deleteGuide(e,n,a){a.invalidate({__typename:"Guide",id:n.guideId})},deleteMod(e,n,a){a.invalidate({__typename:"Mod",id:n.modId})},approveMod(e,n,a){a.invalidate({__typename:"Mod",id:n.modId})},denyMod(e,n,a){a.invalidate({__typename:"Mod",id:n.modId})},approveVersion(e,n,a){a.invalidate({__typename:"Version",id:n.versionId})},denyVersion(e,n,a){a.invalidate({__typename:"Version",id:n.versionId})},deleteSMLVersion(e,n,a){a.invalidate({__typename:"SMLVersion",id:n.smlVersionId})},deleteVersion(e,n,a){a.invalidate({__typename:"Version",id:n.versionId})},updateVersion(e,n,a){a.invalidate({__typename:"Version",id:n.versionId})}}}}),m({addAuthToOperation(e){if(!e.authState||!e.authState.token)return e.operation;const n="function"==typeof e.operation.context.fetchOptions?e.operation.context.fetchOptions():e.operation.context.fetchOptions||{};return y(s({},e.operation),{context:y(s({},e.operation.context),{fetchOptions:y(s({},n),{headers:y(s({},n.headers),{Authorization:e.authState.token})})})})},getAuth:async()=>({token:A(re)}),didAuthError:({error:e})=>e.message.indexOf("user not logged in")>=0}),L({preferGetForPersistedQueries:!0}),N]}))(e),se.set(ve),{}}));function Ve(e,n,a){let{$$slots:i={},$$scope:t}=n;return te(ve),e.$$set=e=>{"$$scope"in e&&a(0,t=e.$$scope)},[t,i]}class Ie extends k{constructor(e){super(),f(this,e,Ve,Be,T,{})}}export{Ie as default,Je as load};
//# sourceMappingURL=__layout.svelte-66f87012.js.map
