(function(n,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(n=typeof globalThis<"u"?globalThis:n||self,t(n["vue-form-schema"]={},n.Vue))})(this,function(n,t){"use strict";const c=t.reactive({components:{}}),f=()=>({setConfig:({components:o})=>c.components={...c.components,...o},config:c}),g=()=>{const{config:d}=f(),o=({schema:e,data:s,onUpdate:r})=>{var p;const i=d.components[e.component];console.log("component schema",i);const h=()=>{const u=e.config;if(u&&s){const m=u.key,v=S=>{if(r)return r(m,S)};return{...e.props,modelValue:s[m],"onUpdate:modelValue":v}}return e.props};return t.h(i??"div",h()||{},e.slots?e.slots:(p=e.children)==null?void 0:p.map(u=>o({schema:u,data:s,onUpdate:r})))};return{setSchema:({schema:e,data:s,onUpdate:r})=>Array.isArray(e)?t.h("div",{},e.map(i=>o({schema:i,data:s,onUpdate:r}))):o({schema:e,data:s,onUpdate:r})}},y={install(d,o){const{setConfig:l}=f();o&&l(o)}};n.default=y,n.useConfig=f,n.useRender=g,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
