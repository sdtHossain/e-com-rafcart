(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ga(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Uf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ff=ga(Uf);function ll(e){return!!e||e===""}function va(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Ae(r)?zf(r):va(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(Ae(e))return e;if(pe(e))return e}}const jf=/;(?![^(]*\))/g,Bf=/:(.+)/;function zf(e){const t={};return e.split(jf).forEach(n=>{if(n){const r=n.split(Bf);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ht(e){let t="";if(Ae(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=Ht(e[n]);r&&(t+=r+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Hf(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Ur(e[r],t[r]);return n}function Ur(e,t){if(e===t)return!0;let n=vo(e),r=vo(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=br(e),r=br(t),n||r)return e===t;if(n=z(e),r=z(t),n||r)return n&&r?Hf(e,t):!1;if(n=pe(e),r=pe(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const a in e){const o=e.hasOwnProperty(a),c=t.hasOwnProperty(a);if(o&&!c||!o&&c||!Ur(e[a],t[a]))return!1}}return String(e)===String(t)}function ba(e,t){return e.findIndex(n=>Ur(n,t))}const Ve=e=>Ae(e)?e:e==null?"":z(e)||pe(e)&&(e.toString===dl||!Y(e.toString))?JSON.stringify(e,ul,2):String(e),ul=(e,t)=>t&&t.__v_isRef?ul(e,t.value):Cn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Kn(t)?{[`Set(${t.size})`]:[...t.values()]}:pe(t)&&!z(t)&&!hl(t)?String(t):t,ue={},Tn=[],et=()=>{},Wf=()=>!1,Vf=/^on[^a-z]/,Vi=e=>Vf.test(e),ya=e=>e.startsWith("onUpdate:"),Me=Object.assign,_a=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Kf=Object.prototype.hasOwnProperty,Z=(e,t)=>Kf.call(e,t),z=Array.isArray,Cn=e=>Fr(e)==="[object Map]",Kn=e=>Fr(e)==="[object Set]",vo=e=>Fr(e)==="[object Date]",Y=e=>typeof e=="function",Ae=e=>typeof e=="string",br=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",fl=e=>pe(e)&&Y(e.then)&&Y(e.catch),dl=Object.prototype.toString,Fr=e=>dl.call(e),qf=e=>Fr(e).slice(8,-1),hl=e=>Fr(e)==="[object Object]",wa=e=>Ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,mi=ga(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ki=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Yf=/-(\w)/g,ht=Ki(e=>e.replace(Yf,(t,n)=>n?n.toUpperCase():"")),Gf=/\B([A-Z])/g,qn=Ki(e=>e.replace(Gf,"-$1").toLowerCase()),qi=Ki(e=>e.charAt(0).toUpperCase()+e.slice(1)),ms=Ki(e=>e?`on${qi(e)}`:""),yr=(e,t)=>!Object.is(e,t),pi=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Si=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ai=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let bo;const Jf=()=>bo||(bo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let at;class ml{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&at&&(this.parent=at,this.index=(at.scopes||(at.scopes=[])).push(this)-1)}run(t){if(this.active){const n=at;try{return at=this,t()}finally{at=n}}}on(){at=this}off(){at=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function pl(e){return new ml(e)}function Xf(e,t=at){t&&t.active&&t.effects.push(e)}const Ia=e=>{const t=new Set(e);return t.w=0,t.n=0,t},gl=e=>(e.w&qt)>0,vl=e=>(e.n&qt)>0,Qf=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qt},Zf=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];gl(i)&&!vl(i)?i.delete(e):t[n++]=i,i.w&=~qt,i.n&=~qt}t.length=n}},Ps=new WeakMap;let sr=0,qt=1;const Rs=30;let Ge;const ln=Symbol(""),Ns=Symbol("");class xa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Xf(this,r)}run(){if(!this.active)return this.fn();let t=Ge,n=Wt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ge,Ge=this,Wt=!0,qt=1<<++sr,sr<=Rs?Qf(this):yo(this),this.fn()}finally{sr<=Rs&&Zf(this),qt=1<<--sr,Ge=this.parent,Wt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ge===this?this.deferStop=!0:this.active&&(yo(this),this.onStop&&this.onStop(),this.active=!1)}}function yo(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Wt=!0;const bl=[];function Yn(){bl.push(Wt),Wt=!1}function Gn(){const e=bl.pop();Wt=e===void 0?!0:e}function Be(e,t,n){if(Wt&&Ge){let r=Ps.get(e);r||Ps.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Ia()),yl(i)}}function yl(e,t){let n=!1;sr<=Rs?vl(e)||(e.n|=qt,n=!gl(e)):n=!e.has(Ge),n&&(e.add(Ge),Ge.deps.push(e))}function kt(e,t,n,r,i,s){const a=Ps.get(e);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(n==="length"&&z(e))a.forEach((c,l)=>{(l==="length"||l>=r)&&o.push(c)});else switch(n!==void 0&&o.push(a.get(n)),t){case"add":z(e)?wa(n)&&o.push(a.get("length")):(o.push(a.get(ln)),Cn(e)&&o.push(a.get(Ns)));break;case"delete":z(e)||(o.push(a.get(ln)),Cn(e)&&o.push(a.get(Ns)));break;case"set":Cn(e)&&o.push(a.get(ln));break}if(o.length===1)o[0]&&Ms(o[0]);else{const c=[];for(const l of o)l&&c.push(...l);Ms(Ia(c))}}function Ms(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&_o(r);for(const r of n)r.computed||_o(r)}function _o(e,t){(e!==Ge||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ed=ga("__proto__,__v_isRef,__isVue"),_l=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(br)),td=Ea(),nd=Ea(!1,!0),rd=Ea(!0),wo=id();function id(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ne(this);for(let s=0,a=this.length;s<a;s++)Be(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(ne)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Yn();const r=ne(this)[t].apply(this,n);return Gn(),r}}),e}function Ea(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?_d:kl:t?El:xl).get(r))return r;const a=z(r);if(!e&&a&&Z(wo,i))return Reflect.get(wo,i,s);const o=Reflect.get(r,i,s);return(br(i)?_l.has(i):ed(i))||(e||Be(r,"get",i),t)?o:_e(o)?a&&wa(i)?o:o.value:pe(o)?e?Sl(o):Jn(o):o}}const sd=wl(),ad=wl(!0);function wl(e=!1){return function(n,r,i,s){let a=n[r];if(Dn(a)&&_e(a)&&!_e(i))return!1;if(!e&&(!Ti(i)&&!Dn(i)&&(a=ne(a),i=ne(i)),!z(n)&&_e(a)&&!_e(i)))return a.value=i,!0;const o=z(n)&&wa(r)?Number(r)<n.length:Z(n,r),c=Reflect.set(n,r,i,s);return n===ne(s)&&(o?yr(i,a)&&kt(n,"set",r,i):kt(n,"add",r,i)),c}}function od(e,t){const n=Z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&kt(e,"delete",t,void 0),r}function cd(e,t){const n=Reflect.has(e,t);return(!br(t)||!_l.has(t))&&Be(e,"has",t),n}function ld(e){return Be(e,"iterate",z(e)?"length":ln),Reflect.ownKeys(e)}const Il={get:td,set:sd,deleteProperty:od,has:cd,ownKeys:ld},ud={get:rd,set(e,t){return!0},deleteProperty(e,t){return!0}},fd=Me({},Il,{get:nd,set:ad}),ka=e=>e,Yi=e=>Reflect.getPrototypeOf(e);function Zr(e,t,n=!1,r=!1){e=e.__v_raw;const i=ne(e),s=ne(t);n||(t!==s&&Be(i,"get",t),Be(i,"get",s));const{has:a}=Yi(i),o=r?ka:n?Ta:_r;if(a.call(i,t))return o(e.get(t));if(a.call(i,s))return o(e.get(s));e!==i&&e.get(t)}function ei(e,t=!1){const n=this.__v_raw,r=ne(n),i=ne(e);return t||(e!==i&&Be(r,"has",e),Be(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function ti(e,t=!1){return e=e.__v_raw,!t&&Be(ne(e),"iterate",ln),Reflect.get(e,"size",e)}function Io(e){e=ne(e);const t=ne(this);return Yi(t).has.call(t,e)||(t.add(e),kt(t,"add",e,e)),this}function xo(e,t){t=ne(t);const n=ne(this),{has:r,get:i}=Yi(n);let s=r.call(n,e);s||(e=ne(e),s=r.call(n,e));const a=i.call(n,e);return n.set(e,t),s?yr(t,a)&&kt(n,"set",e,t):kt(n,"add",e,t),this}function Eo(e){const t=ne(this),{has:n,get:r}=Yi(t);let i=n.call(t,e);i||(e=ne(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&kt(t,"delete",e,void 0),s}function ko(){const e=ne(this),t=e.size!==0,n=e.clear();return t&&kt(e,"clear",void 0,void 0),n}function ni(e,t){return function(r,i){const s=this,a=s.__v_raw,o=ne(a),c=t?ka:e?Ta:_r;return!e&&Be(o,"iterate",ln),a.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function ri(e,t,n){return function(...r){const i=this.__v_raw,s=ne(i),a=Cn(s),o=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,l=i[e](...r),u=n?ka:t?Ta:_r;return!t&&Be(s,"iterate",c?Ns:ln),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Nt(e){return function(...t){return e==="delete"?!1:this}}function dd(){const e={get(s){return Zr(this,s)},get size(){return ti(this)},has:ei,add:Io,set:xo,delete:Eo,clear:ko,forEach:ni(!1,!1)},t={get(s){return Zr(this,s,!1,!0)},get size(){return ti(this)},has:ei,add:Io,set:xo,delete:Eo,clear:ko,forEach:ni(!1,!0)},n={get(s){return Zr(this,s,!0)},get size(){return ti(this,!0)},has(s){return ei.call(this,s,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:ni(!0,!1)},r={get(s){return Zr(this,s,!0,!0)},get size(){return ti(this,!0)},has(s){return ei.call(this,s,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:ni(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=ri(s,!1,!1),n[s]=ri(s,!0,!1),t[s]=ri(s,!1,!0),r[s]=ri(s,!0,!0)}),[e,n,t,r]}const[hd,md,pd,gd]=dd();function Sa(e,t){const n=t?e?gd:pd:e?md:hd;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Z(n,i)&&i in r?n:r,i,s)}const vd={get:Sa(!1,!1)},bd={get:Sa(!1,!0)},yd={get:Sa(!0,!1)},xl=new WeakMap,El=new WeakMap,kl=new WeakMap,_d=new WeakMap;function wd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Id(e){return e.__v_skip||!Object.isExtensible(e)?0:wd(qf(e))}function Jn(e){return Dn(e)?e:Aa(e,!1,Il,vd,xl)}function xd(e){return Aa(e,!1,fd,bd,El)}function Sl(e){return Aa(e,!0,ud,yd,kl)}function Aa(e,t,n,r,i){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=Id(e);if(a===0)return e;const o=new Proxy(e,a===2?r:n);return i.set(e,o),o}function Et(e){return Dn(e)?Et(e.__v_raw):!!(e&&e.__v_isReactive)}function Dn(e){return!!(e&&e.__v_isReadonly)}function Ti(e){return!!(e&&e.__v_isShallow)}function Al(e){return Et(e)||Dn(e)}function ne(e){const t=e&&e.__v_raw;return t?ne(t):e}function $n(e){return Si(e,"__v_skip",!0),e}const _r=e=>pe(e)?Jn(e):e,Ta=e=>pe(e)?Sl(e):e;function Tl(e){Wt&&Ge&&(e=ne(e),yl(e.dep||(e.dep=Ia())))}function Cl(e,t){e=ne(e),e.dep&&Ms(e.dep)}function _e(e){return!!(e&&e.__v_isRef===!0)}function we(e){return Ol(e,!1)}function Ed(e){return Ol(e,!0)}function Ol(e,t){return _e(e)?e:new kd(e,t)}class kd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ne(t),this._value=n?t:_r(t)}get value(){return Tl(this),this._value}set value(t){const n=this.__v_isShallow||Ti(t)||Dn(t);t=n?t:ne(t),yr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:_r(t),Cl(this))}}function X(e){return _e(e)?e.value:e}const Sd={get:(e,t,n)=>X(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return _e(i)&&!_e(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Pl(e){return Et(e)?e:new Proxy(e,Sd)}function Ad(e){const t=z(e)?new Array(e.length):{};for(const n in e)t[n]=Rl(e,n);return t}class Td{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Rl(e,t,n){const r=e[t];return _e(r)?r:new Td(e,t,n)}var Nl;class Cd{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Nl]=!1,this._dirty=!0,this.effect=new xa(t,()=>{this._dirty||(this._dirty=!0,Cl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=ne(this);return Tl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Nl="__v_isReadonly";function Od(e,t,n=!1){let r,i;const s=Y(e);return s?(r=e,i=et):(r=e.get,i=e.set),new Cd(r,i,s||!i,n)}function Vt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Gi(s,t,n)}return i}function tt(e,t,n,r){if(Y(e)){const s=Vt(e,t,n,r);return s&&fl(s)&&s.catch(a=>{Gi(a,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(tt(e[s],t,n,r));return i}function Gi(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,a,o)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Vt(c,null,10,[e,a,o]);return}}Pd(e,n,i,r)}function Pd(e,t,n,r=!0){console.error(e)}let wr=!1,Ls=!1;const Ce=[];let ct=0;const On=[];let yt=null,nn=0;const Ml=Promise.resolve();let Ca=null;function Oa(e){const t=Ca||Ml;return e?t.then(this?e.bind(this):e):t}function Rd(e){let t=ct+1,n=Ce.length;for(;t<n;){const r=t+n>>>1;Ir(Ce[r])<e?t=r+1:n=r}return t}function Pa(e){(!Ce.length||!Ce.includes(e,wr&&e.allowRecurse?ct+1:ct))&&(e.id==null?Ce.push(e):Ce.splice(Rd(e.id),0,e),Ll())}function Ll(){!wr&&!Ls&&(Ls=!0,Ca=Ml.then($l))}function Nd(e){const t=Ce.indexOf(e);t>ct&&Ce.splice(t,1)}function Md(e){z(e)?On.push(...e):(!yt||!yt.includes(e,e.allowRecurse?nn+1:nn))&&On.push(e),Ll()}function So(e,t=wr?ct+1:0){for(;t<Ce.length;t++){const n=Ce[t];n&&n.pre&&(Ce.splice(t,1),t--,n())}}function Dl(e){if(On.length){const t=[...new Set(On)];if(On.length=0,yt){yt.push(...t);return}for(yt=t,yt.sort((n,r)=>Ir(n)-Ir(r)),nn=0;nn<yt.length;nn++)yt[nn]();yt=null,nn=0}}const Ir=e=>e.id==null?1/0:e.id,Ld=(e,t)=>{const n=Ir(e)-Ir(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function $l(e){Ls=!1,wr=!0,Ce.sort(Ld);const t=et;try{for(ct=0;ct<Ce.length;ct++){const n=Ce[ct];n&&n.active!==!1&&Vt(n,null,14)}}finally{ct=0,Ce.length=0,Dl(),wr=!1,Ca=null,(Ce.length||On.length)&&$l()}}function Dd(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ue;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=r[u]||ue;h&&(i=n.map(p=>p.trim())),f&&(i=n.map(Ai))}let o,c=r[o=ms(t)]||r[o=ms(ht(t))];!c&&s&&(c=r[o=ms(qn(t))]),c&&tt(c,e,6,i);const l=r[o+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,tt(l,e,6,i)}}function Ul(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!Y(e)){const c=l=>{const u=Ul(l,t,!0);u&&(o=!0,Me(a,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!o?(pe(e)&&r.set(e,null),null):(z(s)?s.forEach(c=>a[c]=null):Me(a,s),pe(e)&&r.set(e,a),a)}function Ji(e,t){return!e||!Vi(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,qn(t))||Z(e,t))}let Ke=null,Xi=null;function Ci(e){const t=Ke;return Ke=e,Xi=e&&e.type.__scopeId||null,t}function $d(e){Xi=e}function Ud(){Xi=null}function Ne(e,t=Ke,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Do(-1);const s=Ci(t),a=e(...i);return Ci(s),r._d&&Do(1),a};return r._n=!0,r._c=!0,r._d=!0,r}function ps(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:p,ctx:I,inheritAttrs:M}=e;let T,v;const y=Ci(e);try{if(n.shapeFlag&4){const R=i||r;T=ot(u.call(R,R,f,s,p,h,I)),v=c}else{const R=t;T=ot(R.length>1?R(s,{attrs:c,slots:o,emit:l}):R(s,null)),v=t.props?c:Fd(c)}}catch(R){lr.length=0,Gi(R,e,1),T=K(dn)}let E=T;if(v&&M!==!1){const R=Object.keys(v),{shapeFlag:B}=E;R.length&&B&7&&(a&&R.some(ya)&&(v=jd(v,a)),E=Fn(E,v))}return n.dirs&&(E=Fn(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),T=E,Ci(y),T}const Fd=e=>{let t;for(const n in e)(n==="class"||n==="style"||Vi(n))&&((t||(t={}))[n]=e[n]);return t},jd=(e,t)=>{const n={};for(const r in e)(!ya(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Bd(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:o,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ao(r,a,l):!!a;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==r[h]&&!Ji(l,h))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?Ao(r,a,l):!0:!!a;return!1}function Ao(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Ji(n,s))return!0}return!1}function zd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Hd=e=>e.__isSuspense;function Wd(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):Md(e)}function gi(e,t){if(Se){let n=Se.provides;const r=Se.parent&&Se.parent.provides;r===n&&(n=Se.provides=Object.create(r)),n[e]=t}}function ut(e,t,n=!1){const r=Se||Ke;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Y(t)?t.call(r.proxy):t}}const To={};function Pn(e,t,n){return Fl(e,t,n)}function Fl(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:a}=ue){const o=Se;let c,l=!1,u=!1;if(_e(e)?(c=()=>e.value,l=Ti(e)):Et(e)?(c=()=>e,r=!0):z(e)?(u=!0,l=e.some(v=>Et(v)||Ti(v)),c=()=>e.map(v=>{if(_e(v))return v.value;if(Et(v))return sn(v);if(Y(v))return Vt(v,o,2)})):Y(e)?t?c=()=>Vt(e,o,2):c=()=>{if(!(o&&o.isUnmounted))return f&&f(),tt(e,o,3,[h])}:c=et,t&&r){const v=c;c=()=>sn(v())}let f,h=v=>{f=T.onStop=()=>{Vt(v,o,4)}};if(kr)return h=et,t?n&&tt(t,o,3,[c(),u?[]:void 0,h]):c(),et;let p=u?[]:To;const I=()=>{if(!!T.active)if(t){const v=T.run();(r||l||(u?v.some((y,E)=>yr(y,p[E])):yr(v,p)))&&(f&&f(),tt(t,o,3,[v,p===To?void 0:p,h]),p=v)}else T.run()};I.allowRecurse=!!t;let M;i==="sync"?M=I:i==="post"?M=()=>$e(I,o&&o.suspense):(I.pre=!0,o&&(I.id=o.uid),M=()=>Pa(I));const T=new xa(c,M);return t?n?I():p=T.run():i==="post"?$e(T.run.bind(T),o&&o.suspense):T.run(),()=>{T.stop(),o&&o.scope&&_a(o.scope.effects,T)}}function Vd(e,t,n){const r=this.proxy,i=Ae(e)?e.includes(".")?jl(r,e):()=>r[e]:e.bind(r,r);let s;Y(t)?s=t:(s=t.handler,n=t);const a=Se;jn(this);const o=Fl(i,s.bind(r),n);return a?jn(a):un(),o}function jl(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function sn(e,t){if(!pe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),_e(e))sn(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)sn(e[n],t);else if(Kn(e)||Cn(e))e.forEach(n=>{sn(n,t)});else if(hl(e))for(const n in e)sn(e[n],t);return e}function jr(e){return Y(e)?{setup:e,name:e.name}:e}const vi=e=>!!e.type.__asyncLoader,Bl=e=>e.type.__isKeepAlive;function Kd(e,t){zl(e,"a",t)}function qd(e,t){zl(e,"da",t)}function zl(e,t,n=Se){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Qi(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Bl(i.parent.vnode)&&Yd(r,t,n,i),i=i.parent}}function Yd(e,t,n,r){const i=Qi(t,e,r,!0);Ra(()=>{_a(r[t],i)},n)}function Qi(e,t,n=Se,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;Yn(),jn(n);const o=tt(t,n,e,a);return un(),Gn(),o});return r?i.unshift(s):i.push(s),s}}const Ot=e=>(t,n=Se)=>(!kr||e==="sp")&&Qi(e,t,n),Gd=Ot("bm"),Jd=Ot("m"),Xd=Ot("bu"),Qd=Ot("u"),Zd=Ot("bum"),Ra=Ot("um"),eh=Ot("sp"),th=Ot("rtg"),nh=Ot("rtc");function rh(e,t=Se){Qi("ec",e,t)}function ih(e,t){const n=Ke;if(n===null)return e;const r=es(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[a,o,c,l=ue]=t[s];Y(a)&&(a={mounted:a,updated:a}),a.deep&&sn(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:c,modifiers:l})}return e}function Qt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let c=o.dir[r];c&&(Yn(),tt(c,n,8,[e.el,o,e,t]),Gn())}}const Hl="components";function xr(e,t){return ah(Hl,e,!0,t)||e}const sh=Symbol();function ah(e,t,n=!0,r=!1){const i=Ke||Se;if(i){const s=i.type;if(e===Hl){const o=Lh(s,!1);if(o&&(o===t||o===ht(t)||o===qi(ht(t))))return s}const a=Co(i[e]||s[e],t)||Co(i.appContext[e],t);return!a&&r?s:a}}function Co(e,t){return e&&(e[t]||e[ht(t)]||e[qi(ht(t))])}function Un(e,t,n,r){let i;const s=n&&n[r];if(z(e)||Ae(e)){i=new Array(e.length);for(let a=0,o=e.length;a<o;a++)i[a]=t(e[a],a,void 0,s&&s[a])}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s&&s[a])}else if(pe(e))if(e[Symbol.iterator])i=Array.from(e,(a,o)=>t(a,o,void 0,s&&s[o]));else{const a=Object.keys(e);i=new Array(a.length);for(let o=0,c=a.length;o<c;o++){const l=a[o];i[o]=t(e[l],l,o,s&&s[o])}}else i=[];return n&&(n[r]=i),i}const Ds=e=>e?tu(e)?es(e)||e.proxy:Ds(e.parent):null,Oi=Me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ds(e.parent),$root:e=>Ds(e.root),$emit:e=>e.emit,$options:e=>Na(e),$forceUpdate:e=>e.f||(e.f=()=>Pa(e.update)),$nextTick:e=>e.n||(e.n=Oa.bind(e.proxy)),$watch:e=>Vd.bind(e)}),oh={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:c}=e;let l;if(t[0]!=="$"){const p=a[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(r!==ue&&Z(r,t))return a[t]=1,r[t];if(i!==ue&&Z(i,t))return a[t]=2,i[t];if((l=e.propsOptions[0])&&Z(l,t))return a[t]=3,s[t];if(n!==ue&&Z(n,t))return a[t]=4,n[t];$s&&(a[t]=0)}}const u=Oi[t];let f,h;if(u)return t==="$attrs"&&Be(e,"get",t),u(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(n!==ue&&Z(n,t))return a[t]=4,n[t];if(h=c.config.globalProperties,Z(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return i!==ue&&Z(i,t)?(i[t]=n,!0):r!==ue&&Z(r,t)?(r[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let o;return!!n[a]||e!==ue&&Z(e,a)||t!==ue&&Z(t,a)||(o=s[0])&&Z(o,a)||Z(r,a)||Z(Oi,a)||Z(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let $s=!0;function ch(e){const t=Na(e),n=e.proxy,r=e.ctx;$s=!1,t.beforeCreate&&Oo(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:I,activated:M,deactivated:T,beforeDestroy:v,beforeUnmount:y,destroyed:E,unmounted:R,render:B,renderTracked:Q,renderTriggered:H,errorCaptured:J,serverPrefetch:te,expose:ke,inheritAttrs:Pe,components:Ue,directives:Rt,filters:He}=t;if(l&&lh(l,r,null,e.appContext.config.unwrapInjectedRef),a)for(const fe in a){const oe=a[fe];Y(oe)&&(r[fe]=oe.bind(n))}if(i){const fe=i.call(n,n);pe(fe)&&(e.data=Jn(fe))}if($s=!0,s)for(const fe in s){const oe=s[fe],Fe=Y(oe)?oe.bind(n,n):Y(oe.get)?oe.get.bind(n,n):et,yn=!Y(oe)&&Y(oe.set)?oe.set.bind(n):et,gt=ie({get:Fe,set:yn});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>gt.value,set:rt=>gt.value=rt})}if(o)for(const fe in o)Wl(o[fe],r,n,fe);if(c){const fe=Y(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(oe=>{gi(oe,fe[oe])})}u&&Oo(u,e,"c");function xe(fe,oe){z(oe)?oe.forEach(Fe=>fe(Fe.bind(n))):oe&&fe(oe.bind(n))}if(xe(Gd,f),xe(Jd,h),xe(Xd,p),xe(Qd,I),xe(Kd,M),xe(qd,T),xe(rh,J),xe(nh,Q),xe(th,H),xe(Zd,y),xe(Ra,R),xe(eh,te),z(ke))if(ke.length){const fe=e.exposed||(e.exposed={});ke.forEach(oe=>{Object.defineProperty(fe,oe,{get:()=>n[oe],set:Fe=>n[oe]=Fe})})}else e.exposed||(e.exposed={});B&&e.render===et&&(e.render=B),Pe!=null&&(e.inheritAttrs=Pe),Ue&&(e.components=Ue),Rt&&(e.directives=Rt)}function lh(e,t,n=et,r=!1){z(e)&&(e=Us(e));for(const i in e){const s=e[i];let a;pe(s)?"default"in s?a=ut(s.from||i,s.default,!0):a=ut(s.from||i):a=ut(s),_e(a)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[i]=a}}function Oo(e,t,n){tt(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Wl(e,t,n,r){const i=r.includes(".")?jl(n,r):()=>n[r];if(Ae(e)){const s=t[e];Y(s)&&Pn(i,s)}else if(Y(e))Pn(i,e.bind(n));else if(pe(e))if(z(e))e.forEach(s=>Wl(s,t,n,r));else{const s=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(s)&&Pn(i,s,e)}}function Na(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let c;return o?c=o:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(l=>Pi(c,l,a,!0)),Pi(c,t,a)),pe(t)&&s.set(t,c),c}function Pi(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Pi(e,s,n,!0),i&&i.forEach(a=>Pi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=uh[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const uh={data:Po,props:en,emits:en,methods:en,computed:en,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:en,directives:en,watch:dh,provide:Po,inject:fh};function Po(e,t){return t?e?function(){return Me(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function fh(e,t){return en(Us(e),Us(t))}function Us(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Re(e,t){return e?[...new Set([].concat(e,t))]:t}function en(e,t){return e?Me(Me(Object.create(null),e),t):t}function dh(e,t){if(!e)return t;if(!t)return e;const n=Me(Object.create(null),e);for(const r in t)n[r]=Re(e[r],t[r]);return n}function hh(e,t,n,r=!1){const i={},s={};Si(s,Zi,1),e.propsDefaults=Object.create(null),Vl(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:xd(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function mh(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=ne(i),[c]=e.propsOptions;let l=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ji(e.emitsOptions,h))continue;const p=t[h];if(c)if(Z(s,h))p!==s[h]&&(s[h]=p,l=!0);else{const I=ht(h);i[I]=Fs(c,o,I,p,e,!1)}else p!==s[h]&&(s[h]=p,l=!0)}}}else{Vl(e,t,i,s)&&(l=!0);let u;for(const f in o)(!t||!Z(t,f)&&((u=qn(f))===f||!Z(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Fs(c,o,f,void 0,e,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!Z(t,f)&&!0)&&(delete s[f],l=!0)}l&&kt(e,"set","$attrs")}function Vl(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let c in t){if(mi(c))continue;const l=t[c];let u;i&&Z(i,u=ht(c))?!s||!s.includes(u)?n[u]=l:(o||(o={}))[u]=l:Ji(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,a=!0)}if(s){const c=ne(n),l=o||ue;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Fs(i,c,f,l[f],e,!Z(l,f))}}return a}function Fs(e,t,n,r,i,s){const a=e[n];if(a!=null){const o=Z(a,"default");if(o&&r===void 0){const c=a.default;if(a.type!==Function&&Y(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(jn(i),r=l[n]=c.call(null,t),un())}else r=c}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===qn(n))&&(r=!0))}return r}function Kl(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},o=[];let c=!1;if(!Y(e)){const u=f=>{c=!0;const[h,p]=Kl(f,t,!0);Me(a,h),p&&o.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return pe(e)&&r.set(e,Tn),Tn;if(z(s))for(let u=0;u<s.length;u++){const f=ht(s[u]);Ro(f)&&(a[f]=ue)}else if(s)for(const u in s){const f=ht(u);if(Ro(f)){const h=s[u],p=a[f]=z(h)||Y(h)?{type:h}:h;if(p){const I=Lo(Boolean,p.type),M=Lo(String,p.type);p[0]=I>-1,p[1]=M<0||I<M,(I>-1||Z(p,"default"))&&o.push(f)}}}const l=[a,o];return pe(e)&&r.set(e,l),l}function Ro(e){return e[0]!=="$"}function No(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Mo(e,t){return No(e)===No(t)}function Lo(e,t){return z(t)?t.findIndex(n=>Mo(n,e)):Y(t)&&Mo(t,e)?0:-1}const ql=e=>e[0]==="_"||e==="$stable",Ma=e=>z(e)?e.map(ot):[ot(e)],ph=(e,t,n)=>{if(t._n)return t;const r=Ne((...i)=>Ma(t(...i)),n);return r._c=!1,r},Yl=(e,t,n)=>{const r=e._ctx;for(const i in e){if(ql(i))continue;const s=e[i];if(Y(s))t[i]=ph(i,s,r);else if(s!=null){const a=Ma(s);t[i]=()=>a}}},Gl=(e,t)=>{const n=Ma(t);e.slots.default=()=>n},gh=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ne(t),Si(t,"_",n)):Yl(t,e.slots={})}else e.slots={},t&&Gl(e,t);Si(e.slots,Zi,1)},vh=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=ue;if(r.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:(Me(i,t),!n&&o===1&&delete i._):(s=!t.$stable,Yl(t,i)),a=t}else t&&(Gl(e,t),a={default:1});if(s)for(const o in i)!ql(o)&&!(o in a)&&delete i[o]};function Jl(){return{app:null,config:{isNativeTag:Wf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bh=0;function yh(e,t){return function(r,i=null){Y(r)||(r=Object.assign({},r)),i!=null&&!pe(i)&&(i=null);const s=Jl(),a=new Set;let o=!1;const c=s.app={_uid:bh++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:$h,get config(){return s.config},set config(l){},use(l,...u){return a.has(l)||(l&&Y(l.install)?(a.add(l),l.install(c,...u)):Y(l)&&(a.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!o){const h=K(r,i);return h.appContext=s,u&&t?t(h,l):e(h,l,f),o=!0,c._container=l,l.__vue_app__=c,es(h.component)||h.component.proxy}},unmount(){o&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function js(e,t,n,r,i=!1){if(z(e)){e.forEach((h,p)=>js(h,t&&(z(t)?t[p]:t),n,r,i));return}if(vi(r)&&!i)return;const s=r.shapeFlag&4?es(r.component)||r.component.proxy:r.el,a=i?null:s,{i:o,r:c}=e,l=t&&t.r,u=o.refs===ue?o.refs={}:o.refs,f=o.setupState;if(l!=null&&l!==c&&(Ae(l)?(u[l]=null,Z(f,l)&&(f[l]=null)):_e(l)&&(l.value=null)),Y(c))Vt(c,o,12,[a,u]);else{const h=Ae(c),p=_e(c);if(h||p){const I=()=>{if(e.f){const M=h?u[c]:c.value;i?z(M)&&_a(M,s):z(M)?M.includes(s)||M.push(s):h?(u[c]=[s],Z(f,c)&&(f[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else h?(u[c]=a,Z(f,c)&&(f[c]=a)):p&&(c.value=a,e.k&&(u[e.k]=a))};a?(I.id=-1,$e(I,n)):I()}}}const $e=Wd;function _h(e){return wh(e)}function wh(e,t){const n=Jf();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=et,cloneNode:I,insertStaticContent:M}=e,T=(d,m,g,w=null,_=null,A=null,P=!1,S=null,C=!!m.dynamicChildren)=>{if(d===m)return;d&&!rr(d,m)&&(w=U(d),We(d,_,A,!0),d=null),m.patchFlag===-2&&(C=!1,m.dynamicChildren=null);const{type:x,ref:F,shapeFlag:L}=m;switch(x){case La:v(d,m,g,w);break;case dn:y(d,m,g,w);break;case bi:d==null&&E(m,g,w,P);break;case Te:Rt(d,m,g,w,_,A,P,S,C);break;default:L&1?Q(d,m,g,w,_,A,P,S,C):L&6?He(d,m,g,w,_,A,P,S,C):(L&64||L&128)&&x.process(d,m,g,w,_,A,P,S,C,de)}F!=null&&_&&js(F,d&&d.ref,A,m||d,!m)},v=(d,m,g,w)=>{if(d==null)r(m.el=o(m.children),g,w);else{const _=m.el=d.el;m.children!==d.children&&l(_,m.children)}},y=(d,m,g,w)=>{d==null?r(m.el=c(m.children||""),g,w):m.el=d.el},E=(d,m,g,w)=>{[d.el,d.anchor]=M(d.children,m,g,w,d.el,d.anchor)},R=({el:d,anchor:m},g,w)=>{let _;for(;d&&d!==m;)_=h(d),r(d,g,w),d=_;r(m,g,w)},B=({el:d,anchor:m})=>{let g;for(;d&&d!==m;)g=h(d),i(d),d=g;i(m)},Q=(d,m,g,w,_,A,P,S,C)=>{P=P||m.type==="svg",d==null?H(m,g,w,_,A,P,S,C):ke(d,m,_,A,P,S,C)},H=(d,m,g,w,_,A,P,S)=>{let C,x;const{type:F,props:L,shapeFlag:j,transition:V,patchFlag:ee,dirs:ce}=d;if(d.el&&I!==void 0&&ee===-1)C=d.el=I(d.el);else{if(C=d.el=a(d.type,A,L&&L.is,L),j&8?u(C,d.children):j&16&&te(d.children,C,null,w,_,A&&F!=="foreignObject",P,S),ce&&Qt(d,null,w,"created"),L){for(const ge in L)ge!=="value"&&!mi(ge)&&s(C,ge,null,L[ge],A,d.children,w,_,O);"value"in L&&s(C,"value",null,L.value),(x=L.onVnodeBeforeMount)&&st(x,w,d)}J(C,d,d.scopeId,P,w)}ce&&Qt(d,null,w,"beforeMount");const le=(!_||_&&!_.pendingBranch)&&V&&!V.persisted;le&&V.beforeEnter(C),r(C,m,g),((x=L&&L.onVnodeMounted)||le||ce)&&$e(()=>{x&&st(x,w,d),le&&V.enter(C),ce&&Qt(d,null,w,"mounted")},_)},J=(d,m,g,w,_)=>{if(g&&p(d,g),w)for(let A=0;A<w.length;A++)p(d,w[A]);if(_){let A=_.subTree;if(m===A){const P=_.vnode;J(d,P,P.scopeId,P.slotScopeIds,_.parent)}}},te=(d,m,g,w,_,A,P,S,C=0)=>{for(let x=C;x<d.length;x++){const F=d[x]=S?$t(d[x]):ot(d[x]);T(null,F,m,g,w,_,A,P,S)}},ke=(d,m,g,w,_,A,P)=>{const S=m.el=d.el;let{patchFlag:C,dynamicChildren:x,dirs:F}=m;C|=d.patchFlag&16;const L=d.props||ue,j=m.props||ue;let V;g&&Zt(g,!1),(V=j.onVnodeBeforeUpdate)&&st(V,g,m,d),F&&Qt(m,d,g,"beforeUpdate"),g&&Zt(g,!0);const ee=_&&m.type!=="foreignObject";if(x?Pe(d.dynamicChildren,x,S,g,w,ee,A):P||Fe(d,m,S,null,g,w,ee,A,!1),C>0){if(C&16)Ue(S,m,L,j,g,w,_);else if(C&2&&L.class!==j.class&&s(S,"class",null,j.class,_),C&4&&s(S,"style",L.style,j.style,_),C&8){const ce=m.dynamicProps;for(let le=0;le<ce.length;le++){const ge=ce[le],Ye=L[ge],_n=j[ge];(_n!==Ye||ge==="value")&&s(S,ge,Ye,_n,_,d.children,g,w,O)}}C&1&&d.children!==m.children&&u(S,m.children)}else!P&&x==null&&Ue(S,m,L,j,g,w,_);((V=j.onVnodeUpdated)||F)&&$e(()=>{V&&st(V,g,m,d),F&&Qt(m,d,g,"updated")},w)},Pe=(d,m,g,w,_,A,P)=>{for(let S=0;S<m.length;S++){const C=d[S],x=m[S],F=C.el&&(C.type===Te||!rr(C,x)||C.shapeFlag&70)?f(C.el):g;T(C,x,F,null,w,_,A,P,!0)}},Ue=(d,m,g,w,_,A,P)=>{if(g!==w){for(const S in w){if(mi(S))continue;const C=w[S],x=g[S];C!==x&&S!=="value"&&s(d,S,x,C,P,m.children,_,A,O)}if(g!==ue)for(const S in g)!mi(S)&&!(S in w)&&s(d,S,g[S],null,P,m.children,_,A,O);"value"in w&&s(d,"value",g.value,w.value)}},Rt=(d,m,g,w,_,A,P,S,C)=>{const x=m.el=d?d.el:o(""),F=m.anchor=d?d.anchor:o("");let{patchFlag:L,dynamicChildren:j,slotScopeIds:V}=m;V&&(S=S?S.concat(V):V),d==null?(r(x,g,w),r(F,g,w),te(m.children,g,F,_,A,P,S,C)):L>0&&L&64&&j&&d.dynamicChildren?(Pe(d.dynamicChildren,j,g,_,A,P,S),(m.key!=null||_&&m===_.subTree)&&Xl(d,m,!0)):Fe(d,m,g,F,_,A,P,S,C)},He=(d,m,g,w,_,A,P,S,C)=>{m.slotScopeIds=S,d==null?m.shapeFlag&512?_.ctx.activate(m,g,w,P,C):Ie(m,g,w,_,A,P,C):xe(d,m,C)},Ie=(d,m,g,w,_,A,P)=>{const S=d.component=Oh(d,w,_);if(Bl(d)&&(S.ctx.renderer=de),Ph(S),S.asyncDep){if(_&&_.registerDep(S,fe),!d.el){const C=S.subTree=K(dn);y(null,C,m,g)}return}fe(S,d,m,g,_,A,P)},xe=(d,m,g)=>{const w=m.component=d.component;if(Bd(d,m,g))if(w.asyncDep&&!w.asyncResolved){oe(w,m,g);return}else w.next=m,Nd(w.update),w.update();else m.el=d.el,w.vnode=m},fe=(d,m,g,w,_,A,P)=>{const S=()=>{if(d.isMounted){let{next:F,bu:L,u:j,parent:V,vnode:ee}=d,ce=F,le;Zt(d,!1),F?(F.el=ee.el,oe(d,F,P)):F=ee,L&&pi(L),(le=F.props&&F.props.onVnodeBeforeUpdate)&&st(le,V,F,ee),Zt(d,!0);const ge=ps(d),Ye=d.subTree;d.subTree=ge,T(Ye,ge,f(Ye.el),U(Ye),d,_,A),F.el=ge.el,ce===null&&zd(d,ge.el),j&&$e(j,_),(le=F.props&&F.props.onVnodeUpdated)&&$e(()=>st(le,V,F,ee),_)}else{let F;const{el:L,props:j}=m,{bm:V,m:ee,parent:ce}=d,le=vi(m);if(Zt(d,!1),V&&pi(V),!le&&(F=j&&j.onVnodeBeforeMount)&&st(F,ce,m),Zt(d,!0),L&&q){const ge=()=>{d.subTree=ps(d),q(L,d.subTree,d,_,null)};le?m.type.__asyncLoader().then(()=>!d.isUnmounted&&ge()):ge()}else{const ge=d.subTree=ps(d);T(null,ge,g,w,d,_,A),m.el=ge.el}if(ee&&$e(ee,_),!le&&(F=j&&j.onVnodeMounted)){const ge=m;$e(()=>st(F,ce,ge),_)}(m.shapeFlag&256||ce&&vi(ce.vnode)&&ce.vnode.shapeFlag&256)&&d.a&&$e(d.a,_),d.isMounted=!0,m=g=w=null}},C=d.effect=new xa(S,()=>Pa(x),d.scope),x=d.update=()=>C.run();x.id=d.uid,Zt(d,!0),x()},oe=(d,m,g)=>{m.component=d;const w=d.vnode.props;d.vnode=m,d.next=null,mh(d,m.props,w,g),vh(d,m.children,g),Yn(),So(),Gn()},Fe=(d,m,g,w,_,A,P,S,C=!1)=>{const x=d&&d.children,F=d?d.shapeFlag:0,L=m.children,{patchFlag:j,shapeFlag:V}=m;if(j>0){if(j&128){gt(x,L,g,w,_,A,P,S,C);return}else if(j&256){yn(x,L,g,w,_,A,P,S,C);return}}V&8?(F&16&&O(x,_,A),L!==x&&u(g,L)):F&16?V&16?gt(x,L,g,w,_,A,P,S,C):O(x,_,A,!0):(F&8&&u(g,""),V&16&&te(L,g,w,_,A,P,S,C))},yn=(d,m,g,w,_,A,P,S,C)=>{d=d||Tn,m=m||Tn;const x=d.length,F=m.length,L=Math.min(x,F);let j;for(j=0;j<L;j++){const V=m[j]=C?$t(m[j]):ot(m[j]);T(d[j],V,g,null,_,A,P,S,C)}x>F?O(d,_,A,!0,!1,L):te(m,g,w,_,A,P,S,C,L)},gt=(d,m,g,w,_,A,P,S,C)=>{let x=0;const F=m.length;let L=d.length-1,j=F-1;for(;x<=L&&x<=j;){const V=d[x],ee=m[x]=C?$t(m[x]):ot(m[x]);if(rr(V,ee))T(V,ee,g,null,_,A,P,S,C);else break;x++}for(;x<=L&&x<=j;){const V=d[L],ee=m[j]=C?$t(m[j]):ot(m[j]);if(rr(V,ee))T(V,ee,g,null,_,A,P,S,C);else break;L--,j--}if(x>L){if(x<=j){const V=j+1,ee=V<F?m[V].el:w;for(;x<=j;)T(null,m[x]=C?$t(m[x]):ot(m[x]),g,ee,_,A,P,S,C),x++}}else if(x>j)for(;x<=L;)We(d[x],_,A,!0),x++;else{const V=x,ee=x,ce=new Map;for(x=ee;x<=j;x++){const je=m[x]=C?$t(m[x]):ot(m[x]);je.key!=null&&ce.set(je.key,x)}let le,ge=0;const Ye=j-ee+1;let _n=!1,mo=0;const nr=new Array(Ye);for(x=0;x<Ye;x++)nr[x]=0;for(x=V;x<=L;x++){const je=d[x];if(ge>=Ye){We(je,_,A,!0);continue}let it;if(je.key!=null)it=ce.get(je.key);else for(le=ee;le<=j;le++)if(nr[le-ee]===0&&rr(je,m[le])){it=le;break}it===void 0?We(je,_,A,!0):(nr[it-ee]=x+1,it>=mo?mo=it:_n=!0,T(je,m[it],g,null,_,A,P,S,C),ge++)}const po=_n?Ih(nr):Tn;for(le=po.length-1,x=Ye-1;x>=0;x--){const je=ee+x,it=m[je],go=je+1<F?m[je+1].el:w;nr[x]===0?T(null,it,g,go,_,A,P,S,C):_n&&(le<0||x!==po[le]?rt(it,g,go,2):le--)}}},rt=(d,m,g,w,_=null)=>{const{el:A,type:P,transition:S,children:C,shapeFlag:x}=d;if(x&6){rt(d.component.subTree,m,g,w);return}if(x&128){d.suspense.move(m,g,w);return}if(x&64){P.move(d,m,g,de);return}if(P===Te){r(A,m,g);for(let L=0;L<C.length;L++)rt(C[L],m,g,w);r(d.anchor,m,g);return}if(P===bi){R(d,m,g);return}if(w!==2&&x&1&&S)if(w===0)S.beforeEnter(A),r(A,m,g),$e(()=>S.enter(A),_);else{const{leave:L,delayLeave:j,afterLeave:V}=S,ee=()=>r(A,m,g),ce=()=>{L(A,()=>{ee(),V&&V()})};j?j(A,ee,ce):ce()}else r(A,m,g)},We=(d,m,g,w=!1,_=!1)=>{const{type:A,props:P,ref:S,children:C,dynamicChildren:x,shapeFlag:F,patchFlag:L,dirs:j}=d;if(S!=null&&js(S,null,g,d,!0),F&256){m.ctx.deactivate(d);return}const V=F&1&&j,ee=!vi(d);let ce;if(ee&&(ce=P&&P.onVnodeBeforeUnmount)&&st(ce,m,d),F&6)$(d.component,g,w);else{if(F&128){d.suspense.unmount(g,w);return}V&&Qt(d,null,m,"beforeUnmount"),F&64?d.type.remove(d,m,g,_,de,w):x&&(A!==Te||L>0&&L&64)?O(x,m,g,!1,!0):(A===Te&&L&384||!_&&F&16)&&O(C,m,g),w&&tr(d)}(ee&&(ce=P&&P.onVnodeUnmounted)||V)&&$e(()=>{ce&&st(ce,m,d),V&&Qt(d,null,m,"unmounted")},g)},tr=d=>{const{type:m,el:g,anchor:w,transition:_}=d;if(m===Te){b(g,w);return}if(m===bi){B(d);return}const A=()=>{i(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:P,delayLeave:S}=_,C=()=>P(g,A);S?S(d.el,A,C):C()}else A()},b=(d,m)=>{let g;for(;d!==m;)g=h(d),i(d),d=g;i(m)},$=(d,m,g)=>{const{bum:w,scope:_,update:A,subTree:P,um:S}=d;w&&pi(w),_.stop(),A&&(A.active=!1,We(P,d,m,g)),S&&$e(S,m),$e(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},O=(d,m,g,w=!1,_=!1,A=0)=>{for(let P=A;P<d.length;P++)We(d[P],m,g,w,_)},U=d=>d.shapeFlag&6?U(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),se=(d,m,g)=>{d==null?m._vnode&&We(m._vnode,null,null,!0):T(m._vnode||null,d,m,null,null,null,g),So(),Dl(),m._vnode=d},de={p:T,um:We,m:rt,r:tr,mt:Ie,mc:te,pc:Fe,pbc:Pe,n:U,o:e};let G,q;return t&&([G,q]=t(de)),{render:se,hydrate:G,createApp:yh(se,G)}}function Zt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Xl(e,t,n=!1){const r=e.children,i=t.children;if(z(r)&&z(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=$t(i[s]),o.el=a.el),n||Xl(a,o))}}function Ih(e){const t=e.slice(),n=[0];let r,i,s,a,o;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<l?s=o+1:a=o;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}const xh=e=>e.__isTeleport,Te=Symbol(void 0),La=Symbol(void 0),dn=Symbol(void 0),bi=Symbol(void 0),lr=[];let Qe=null;function re(e=!1){lr.push(Qe=e?null:[])}function Eh(){lr.pop(),Qe=lr[lr.length-1]||null}let Er=1;function Do(e){Er+=e}function Ql(e){return e.dynamicChildren=Er>0?Qe||Tn:null,Eh(),Er>0&&Qe&&Qe.push(e),e}function me(e,t,n,r,i,s){return Ql(k(e,t,n,r,i,s,!0))}function ur(e,t,n,r,i){return Ql(K(e,t,n,r,i,!0))}function Bs(e){return e?e.__v_isVNode===!0:!1}function rr(e,t){return e.type===t.type&&e.key===t.key}const Zi="__vInternal",Zl=({key:e})=>e!=null?e:null,yi=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ae(e)||_e(e)||Y(e)?{i:Ke,r:e,k:t,f:!!n}:e:null;function k(e,t=null,n=null,r=0,i=null,s=e===Te?0:1,a=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zl(t),ref:t&&yi(t),scopeId:Xi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return o?($a(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Ae(n)?8:16),Er>0&&!a&&Qe&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Qe.push(c),c}const K=kh;function kh(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===sh)&&(e=dn),Bs(e)){const o=Fn(e,t,!0);return n&&$a(o,n),Er>0&&!s&&Qe&&(o.shapeFlag&6?Qe[Qe.indexOf(e)]=o:Qe.push(o)),o.patchFlag|=-2,o}if(Dh(e)&&(e=e.__vccOpts),t){t=Sh(t);let{class:o,style:c}=t;o&&!Ae(o)&&(t.class=Ht(o)),pe(c)&&(Al(c)&&!z(c)&&(c=Me({},c)),t.style=va(c))}const a=Ae(e)?1:Hd(e)?128:xh(e)?64:pe(e)?4:Y(e)?2:0;return k(e,t,n,r,i,a,s,!0)}function Sh(e){return e?Al(e)||Zi in e?Me({},e):e:null}function Fn(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,o=t?Ah(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Zl(o),ref:t&&t.ref?n&&i?z(i)?i.concat(yi(t)):[i,yi(t)]:yi(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Te?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Fn(e.ssContent),ssFallback:e.ssFallback&&Fn(e.ssFallback),el:e.el,anchor:e.anchor}}function Le(e=" ",t=0){return K(La,null,e,t)}function Da(e,t){const n=K(bi,null,e);return n.staticCount=t,n}function zs(e="",t=!1){return t?(re(),ur(dn,null,e)):K(dn,null,e)}function ot(e){return e==null||typeof e=="boolean"?K(dn):z(e)?K(Te,null,e.slice()):typeof e=="object"?$t(e):K(La,null,String(e))}function $t(e){return e.el===null||e.memo?e:Fn(e)}function $a(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),$a(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Zi in t)?t._ctx=Ke:i===3&&Ke&&(Ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:Ke},n=32):(t=String(t),r&64?(n=16,t=[Le(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ah(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Ht([t.class,r.class]));else if(i==="style")t.style=va([t.style,r.style]);else if(Vi(i)){const s=t[i],a=r[i];a&&s!==a&&!(z(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function st(e,t,n,r=null){tt(e,t,7,[n,r])}const Th=Jl();let Ch=0;function Oh(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Th,s={uid:Ch++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new ml(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kl(r,i),emitsOptions:Ul(r,i),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:r.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Dd.bind(null,s),e.ce&&e.ce(s),s}let Se=null;const eu=()=>Se||Ke,jn=e=>{Se=e,e.scope.on()},un=()=>{Se&&Se.scope.off(),Se=null};function tu(e){return e.vnode.shapeFlag&4}let kr=!1;function Ph(e,t=!1){kr=t;const{props:n,children:r}=e.vnode,i=tu(e);hh(e,n,i,t),gh(e,r);const s=i?Rh(e,t):void 0;return kr=!1,s}function Rh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=$n(new Proxy(e.ctx,oh));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Mh(e):null;jn(e),Yn();const s=Vt(r,e,0,[e.props,i]);if(Gn(),un(),fl(s)){if(s.then(un,un),t)return s.then(a=>{$o(e,a,t)}).catch(a=>{Gi(a,e,0)});e.asyncDep=s}else $o(e,s,t)}else nu(e,t)}function $o(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=Pl(t)),nu(e,n)}let Uo;function nu(e,t,n){const r=e.type;if(!e.render){if(!t&&Uo&&!r.render){const i=r.template||Na(e).template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:c}=r,l=Me(Me({isCustomElement:s,delimiters:o},a),c);r.render=Uo(i,l)}}e.render=r.render||et}jn(e),Yn(),ch(e),Gn(),un()}function Nh(e){return new Proxy(e.attrs,{get(t,n){return Be(e,"get","$attrs"),t[n]}})}function Mh(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Nh(e))},slots:e.slots,emit:e.emit,expose:t}}function es(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Pl($n(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Oi)return Oi[n](e)}}))}function Lh(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function Dh(e){return Y(e)&&"__vccOpts"in e}const ie=(e,t)=>Od(e,t,kr);function ts(e,t,n){const r=arguments.length;return r===2?pe(t)&&!z(t)?Bs(t)?K(e,null,[t]):K(e,t):K(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Bs(n)&&(n=[n]),K(e,t,n))}const $h="3.2.39",Uh="http://www.w3.org/2000/svg",rn=typeof document<"u"?document:null,Fo=rn&&rn.createElement("template"),Fh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?rn.createElementNS(Uh,e):rn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>rn.createTextNode(e),createComment:e=>rn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Fo.innerHTML=r?`<svg>${e}</svg>`:e;const o=Fo.content;if(r){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function jh(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Bh(e,t,n){const r=e.style,i=Ae(n);if(n&&!i){for(const s in n)Hs(r,s,n[s]);if(t&&!Ae(t))for(const s in t)n[s]==null&&Hs(r,s,"")}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const jo=/\s*!important$/;function Hs(e,t,n){if(z(n))n.forEach(r=>Hs(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=zh(e,t);jo.test(n)?e.setProperty(qn(r),n.replace(jo,""),"important"):e[r]=n}}const Bo=["Webkit","Moz","ms"],gs={};function zh(e,t){const n=gs[t];if(n)return n;let r=ht(t);if(r!=="filter"&&r in e)return gs[t]=r;r=qi(r);for(let i=0;i<Bo.length;i++){const s=Bo[i]+r;if(s in e)return gs[t]=s}return t}const zo="http://www.w3.org/1999/xlink";function Hh(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(zo,t.slice(6,t.length)):e.setAttributeNS(zo,t,n);else{const s=Ff(t);n==null||s&&!ll(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Wh(e,t,n,r,i,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,i,s),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let o=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=ll(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}const[ru,Vh]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Ws=0;const Kh=Promise.resolve(),qh=()=>{Ws=0},Yh=()=>Ws||(Kh.then(qh),Ws=ru());function Ft(e,t,n,r){e.addEventListener(t,n,r)}function Gh(e,t,n,r){e.removeEventListener(t,n,r)}function Jh(e,t,n,r,i=null){const s=e._vei||(e._vei={}),a=s[t];if(r&&a)a.value=r;else{const[o,c]=Xh(t);if(r){const l=s[t]=Qh(r,i);Ft(e,o,l,c)}else a&&(Gh(e,o,a,c),s[t]=void 0)}}const Ho=/(?:Once|Passive|Capture)$/;function Xh(e){let t;if(Ho.test(e)){t={};let r;for(;r=e.match(Ho);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):qn(e.slice(2)),t]}function Qh(e,t){const n=r=>{const i=r.timeStamp||ru();(Vh||i>=n.attached-1)&&tt(Zh(r,n.value),t,5,[r])};return n.value=e,n.attached=Yh(),n}function Zh(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Wo=/^on[a-z]/,em=(e,t,n,r,i=!1,s,a,o,c)=>{t==="class"?jh(e,r,i):t==="style"?Bh(e,n,r):Vi(t)?ya(t)||Jh(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):tm(e,t,r,i))?Wh(e,t,r,s,a,o,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Hh(e,t,r,i))};function tm(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Wo.test(t)&&Y(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Wo.test(t)&&Ae(n)?!1:t in e}const Bn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?n=>pi(t,n):t};function nm(e){e.target.composing=!0}function Vo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const rm={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Bn(i);const s=r||i.props&&i.props.type==="number";Ft(e,t?"change":"input",a=>{if(a.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=Ai(o)),e._assign(o)}),n&&Ft(e,"change",()=>{e.value=e.value.trim()}),t||(Ft(e,"compositionstart",nm),Ft(e,"compositionend",Vo),Ft(e,"change",Vo))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=Bn(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&Ai(e.value)===t))return;const a=t==null?"":t;e.value!==a&&(e.value=a)}},G1={deep:!0,created(e,t,n){e._assign=Bn(n),Ft(e,"change",()=>{const r=e._modelValue,i=Sr(e),s=e.checked,a=e._assign;if(z(r)){const o=ba(r,i),c=o!==-1;if(s&&!c)a(r.concat(i));else if(!s&&c){const l=[...r];l.splice(o,1),a(l)}}else if(Kn(r)){const o=new Set(r);s?o.add(i):o.delete(i),a(o)}else a(iu(e,s))})},mounted:Ko,beforeUpdate(e,t,n){e._assign=Bn(n),Ko(e,t,n)}};function Ko(e,{value:t,oldValue:n},r){e._modelValue=t,z(t)?e.checked=ba(t,r.props.value)>-1:Kn(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Ur(t,iu(e,!0)))}const J1={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const i=Kn(t);Ft(e,"change",()=>{const s=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>n?Ai(Sr(a)):Sr(a));e._assign(e.multiple?i?new Set(s):s:s[0])}),e._assign=Bn(r)},mounted(e,{value:t}){qo(e,t)},beforeUpdate(e,t,n){e._assign=Bn(n)},updated(e,{value:t}){qo(e,t)}};function qo(e,t){const n=e.multiple;if(!(n&&!z(t)&&!Kn(t))){for(let r=0,i=e.options.length;r<i;r++){const s=e.options[r],a=Sr(s);if(n)z(t)?s.selected=ba(t,a)>-1:s.selected=t.has(a);else if(Ur(Sr(s),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Sr(e){return"_value"in e?e._value:e.value}function iu(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const im=["ctrl","shift","alt","meta"],sm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>im.some(n=>e[`${n}Key`]&&!t.includes(n))},X1=(e,t)=>(n,...r)=>{for(let i=0;i<t.length;i++){const s=sm[t[i]];if(s&&s(n,t))return}return e(n,...r)},am=Me({patchProp:em},Fh);let Yo;function om(){return Yo||(Yo=_h(am))}const cm=(...e)=>{const t=om().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=lm(r);if(!i)return;const s=t._component;!Y(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function lm(e){return Ae(e)?document.querySelector(e):e}var um=!1;/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let su;const ns=e=>su=e,au=Symbol();function Vs(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var fr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(fr||(fr={}));function fm(){const e=pl(!0),t=e.run(()=>we({}));let n=[],r=[];const i=$n({install(s){ns(i),i._a=s,s.provide(au,i),s.config.globalProperties.$pinia=i,r.forEach(a=>n.push(a)),r=[]},use(s){return!this._a&&!um?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const ou=()=>{};function Go(e,t,n,r=ou){e.push(t);const i=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),r())};return!n&&eu()&&Ra(i),i}function wn(e,...t){e.slice().forEach(n=>{n(...t)})}function Ks(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],i=e[n];Vs(i)&&Vs(r)&&e.hasOwnProperty(n)&&!_e(r)&&!Et(r)?e[n]=Ks(i,r):e[n]=r}return e}const dm=Symbol();function hm(e){return!Vs(e)||!e.hasOwnProperty(dm)}const{assign:_t}=Object;function mm(e){return!!(_e(e)&&e.effect)}function pm(e,t,n,r){const{state:i,actions:s,getters:a}=t,o=n.state.value[e];let c;function l(){o||(n.state.value[e]=i?i():{});const u=Ad(n.state.value[e]);return _t(u,s,Object.keys(a||{}).reduce((f,h)=>(f[h]=$n(ie(()=>{ns(n);const p=n._s.get(e);return a[h].call(p,p)})),f),{}))}return c=cu(e,l,t,n,r,!0),c.$reset=function(){const f=i?i():{};this.$patch(h=>{_t(h,f)})},c}function cu(e,t,n={},r,i,s){let a;const o=_t({actions:{}},n),c={deep:!0};let l,u,f=$n([]),h=$n([]),p;const I=r.state.value[e];!s&&!I&&(r.state.value[e]={}),we({});let M;function T(H){let J;l=u=!1,typeof H=="function"?(H(r.state.value[e]),J={type:fr.patchFunction,storeId:e,events:p}):(Ks(r.state.value[e],H),J={type:fr.patchObject,payload:H,storeId:e,events:p});const te=M=Symbol();Oa().then(()=>{M===te&&(l=!0)}),u=!0,wn(f,J,r.state.value[e])}const v=ou;function y(){a.stop(),f=[],h=[],r._s.delete(e)}function E(H,J){return function(){ns(r);const te=Array.from(arguments),ke=[],Pe=[];function Ue(Ie){ke.push(Ie)}function Rt(Ie){Pe.push(Ie)}wn(h,{args:te,name:H,store:B,after:Ue,onError:Rt});let He;try{He=J.apply(this&&this.$id===e?this:B,te)}catch(Ie){throw wn(Pe,Ie),Ie}return He instanceof Promise?He.then(Ie=>(wn(ke,Ie),Ie)).catch(Ie=>(wn(Pe,Ie),Promise.reject(Ie))):(wn(ke,He),He)}}const R={_p:r,$id:e,$onAction:Go.bind(null,h),$patch:T,$reset:v,$subscribe(H,J={}){const te=Go(f,H,J.detached,()=>ke()),ke=a.run(()=>Pn(()=>r.state.value[e],Pe=>{(J.flush==="sync"?u:l)&&H({storeId:e,type:fr.direct,events:p},Pe)},_t({},c,J)));return te},$dispose:y},B=Jn(_t({},R));r._s.set(e,B);const Q=r._e.run(()=>(a=pl(),a.run(()=>t())));for(const H in Q){const J=Q[H];if(_e(J)&&!mm(J)||Et(J))s||(I&&hm(J)&&(_e(J)?J.value=I[H]:Ks(J,I[H])),r.state.value[e][H]=J);else if(typeof J=="function"){const te=E(H,J);Q[H]=te,o.actions[H]=J}}return _t(B,Q),_t(ne(B),Q),Object.defineProperty(B,"$state",{get:()=>r.state.value[e],set:H=>{T(J=>{_t(J,H)})}}),r._p.forEach(H=>{_t(B,a.run(()=>H({store:B,app:r._a,pinia:r,options:o})))}),I&&s&&n.hydrate&&n.hydrate(B.$state,I),l=!0,u=!0,B}function Ua(e,t,n){let r,i;const s=typeof t=="function";typeof e=="string"?(r=e,i=s?n:t):(i=e,r=e.id);function a(o,c){const l=eu();return o=o||l&&ut(au),o&&ns(o),o=su,o._s.has(r)||(s?cu(r,t,i,o):pm(r,i,o)),o._s.get(r)}return a.$id=r,a}function mt(e){{e=ne(e);const t={};for(const n in e){const r=e[n];(_e(r)||Et(r))&&(t[n]=Rl(e,n))}return t}}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const xn=typeof window<"u";function gm(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ae=Object.assign;function vs(e,t){const n={};for(const r in t){const i=t[r];n[r]=nt(i)?i.map(e):e(i)}return n}const dr=()=>{},nt=Array.isArray,vm=/\/$/,bm=e=>e.replace(vm,"");function bs(e,t,n="/"){let r,i={},s="",a="";const o=t.indexOf("#");let c=t.indexOf("?");return o<c&&o>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,o>-1?o:t.length),i=e(s)),o>-1&&(r=r||t.slice(0,o),a=t.slice(o,t.length)),r=Im(r!=null?r:t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:a}}function ym(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Jo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function _m(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&zn(t.matched[r],n.matched[i])&&lu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function zn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function lu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!wm(e[n],t[n]))return!1;return!0}function wm(e,t){return nt(e)?Xo(e,t):nt(t)?Xo(t,e):e===t}function Xo(e,t){return nt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Im(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i=n.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Ar;(function(e){e.pop="pop",e.push="push"})(Ar||(Ar={}));var hr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(hr||(hr={}));function xm(e){if(!e)if(xn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),bm(e)}const Em=/^[^#]+#/;function km(e,t){return e.replace(Em,"#")+t}function Sm(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const rs=()=>({left:window.pageXOffset,top:window.pageYOffset});function Am(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Sm(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Qo(e,t){return(history.state?history.state.position-t:-1)+e}const qs=new Map;function Tm(e,t){qs.set(e,t)}function Cm(e){const t=qs.get(e);return qs.delete(e),t}let Om=()=>location.protocol+"//"+location.host;function uu(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let o=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(o);return c[0]!=="/"&&(c="/"+c),Jo(c,"")}return Jo(n,e)+r+i}function Pm(e,t,n,r){let i=[],s=[],a=null;const o=({state:h})=>{const p=uu(e,location),I=n.value,M=t.value;let T=0;if(h){if(n.value=p,t.value=h,a&&a===I){a=null;return}T=M?h.position-M.position:0}else r(p);i.forEach(v=>{v(n.value,I,{delta:T,type:Ar.pop,direction:T?T>0?hr.forward:hr.back:hr.unknown})})};function c(){a=n.value}function l(h){i.push(h);const p=()=>{const I=i.indexOf(h);I>-1&&i.splice(I,1)};return s.push(p),p}function u(){const{history:h}=window;!h.state||h.replaceState(ae({},h.state,{scroll:rs()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function Zo(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?rs():null}}function Rm(e){const{history:t,location:n}=window,r={value:uu(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Om()+e+c;try{t[u?"replaceState":"pushState"](l,"",h),i.value=l}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function a(c,l){const u=ae({},t.state,Zo(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function o(c,l){const u=ae({},i.value,t.state,{forward:c,scroll:rs()});s(u.current,u,!0);const f=ae({},Zo(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:o,replace:a}}function Nm(e){e=xm(e);const t=Rm(e),n=Pm(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=ae({location:"",base:e,go:r,createHref:km.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Mm(e){return typeof e=="string"||e&&typeof e=="object"}function fu(e){return typeof e=="string"||typeof e=="symbol"}const Mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},du=Symbol("");var ec;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ec||(ec={}));function Hn(e,t){return ae(new Error,{type:e,[du]:!0},t)}function vt(e,t){return e instanceof Error&&du in e&&(t==null||!!(e.type&t))}const tc="[^/]+?",Lm={sensitive:!1,strict:!1,start:!0,end:!0},Dm=/[.+*?^${}()[\]/\\]/g;function $m(e,t){const n=ae({},Lm,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const h=l[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(i+="/"),i+=h.value.replace(Dm,"\\$&"),p+=40;else if(h.type===1){const{value:I,repeatable:M,optional:T,regexp:v}=h;s.push({name:I,repeatable:M,optional:T});const y=v||tc;if(y!==tc){p+=10;try{new RegExp(`(${y})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${I}" (${y}): `+R.message)}}let E=M?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(E=T&&l.length<2?`(?:/${E})`:"/"+E),T&&(E+="?"),i+=E,p+=20,T&&(p+=-8),M&&(p+=-20),y===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function o(l){const u=l.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",I=s[h-1];f[I.name]=p&&I.repeatable?p.split("/"):p}return f}function c(l){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:I,repeatable:M,optional:T}=p,v=I in l?l[I]:"";if(nt(v)&&!M)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const y=nt(v)?v.join("/"):v;if(!y)if(T)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);u+=y}}return u||"/"}return{re:a,score:r,keys:s,parse:o,stringify:c}}function Um(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Fm(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=Um(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(nc(r))return 1;if(nc(i))return-1}return i.length-r.length}function nc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const jm={type:0,value:""},Bm=/[a-zA-Z0-9_]/;function zm(e){if(!e)return[[]];if(e==="/")return[[jm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let o=0,c,l="",u="";function f(){!l||(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;o<e.length;){if(c=e[o++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),a()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:Bm.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),a(),i}function Hm(e,t,n){const r=$m(zm(e.path),n),i=ae(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Wm(e,t){const n=[],r=new Map;t=sc({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,f,h){const p=!h,I=Vm(u);I.aliasOf=h&&h.record;const M=sc(t,u),T=[I];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of E)T.push(ae({},I,{components:h?h.record.components:I.components,path:R,aliasOf:h?h.record:I}))}let v,y;for(const E of T){const{path:R}=E;if(f&&R[0]!=="/"){const B=f.record.path,Q=B[B.length-1]==="/"?"":"/";E.path=f.record.path+(R&&Q+R)}if(v=Hm(E,f,M),h?h.alias.push(v):(y=y||v,y!==v&&y.alias.push(v),p&&u.name&&!ic(v)&&a(u.name)),I.children){const B=I.children;for(let Q=0;Q<B.length;Q++)s(B[Q],v,h&&h.children[Q])}h=h||v,c(v)}return y?()=>{a(y)}:dr}function a(u){if(fu(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return n}function c(u){let f=0;for(;f<n.length&&Fm(u,n[f])>=0&&(u.record.path!==n[f].record.path||!hu(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!ic(u)&&r.set(u.record.name,u)}function l(u,f){let h,p={},I,M;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw Hn(1,{location:u});M=h.record.name,p=ae(rc(f.params,h.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&rc(u.params,h.keys.map(y=>y.name))),I=h.stringify(p)}else if("path"in u)I=u.path,h=n.find(y=>y.re.test(I)),h&&(p=h.parse(I),M=h.record.name);else{if(h=f.name?r.get(f.name):n.find(y=>y.re.test(f.path)),!h)throw Hn(1,{location:u,currentLocation:f});M=h.record.name,p=ae({},f.params,u.params),I=h.stringify(p)}const T=[];let v=h;for(;v;)T.unshift(v.record),v=v.parent;return{name:M,path:I,params:p,matched:T,meta:qm(T)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:a,getRoutes:o,getRecordMatcher:i}}function rc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Vm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Km(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Km(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function ic(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function qm(e){return e.reduce((t,n)=>ae(t,n.meta),{})}function sc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function hu(e,t){return t.children.some(n=>n===e||hu(e,n))}const mu=/#/g,Ym=/&/g,Gm=/\//g,Jm=/=/g,Xm=/\?/g,pu=/\+/g,Qm=/%5B/g,Zm=/%5D/g,gu=/%5E/g,ep=/%60/g,vu=/%7B/g,tp=/%7C/g,bu=/%7D/g,np=/%20/g;function Fa(e){return encodeURI(""+e).replace(tp,"|").replace(Qm,"[").replace(Zm,"]")}function rp(e){return Fa(e).replace(vu,"{").replace(bu,"}").replace(gu,"^")}function Ys(e){return Fa(e).replace(pu,"%2B").replace(np,"+").replace(mu,"%23").replace(Ym,"%26").replace(ep,"`").replace(vu,"{").replace(bu,"}").replace(gu,"^")}function ip(e){return Ys(e).replace(Jm,"%3D")}function sp(e){return Fa(e).replace(mu,"%23").replace(Xm,"%3F")}function ap(e){return e==null?"":sp(e).replace(Gm,"%2F")}function Ri(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function op(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(pu," "),a=s.indexOf("="),o=Ri(a<0?s:s.slice(0,a)),c=a<0?null:Ri(s.slice(a+1));if(o in t){let l=t[o];nt(l)||(l=t[o]=[l]),l.push(c)}else t[o]=c}return t}function ac(e){let t="";for(let n in e){const r=e[n];if(n=ip(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(r)?r.map(s=>s&&Ys(s)):[r&&Ys(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function cp(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=nt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const lp=Symbol(""),oc=Symbol(""),ja=Symbol(""),Ba=Symbol(""),Gs=Symbol("");function ir(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ut(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,o)=>{const c=f=>{f===!1?o(Hn(4,{from:n,to:t})):f instanceof Error?o(f):Mm(f)?o(Hn(2,{from:t,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),a())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>o(f))})}function ys(e,t,n,r){const i=[];for(const s of e)for(const a in s.components){let o=s.components[a];if(!(t!=="beforeRouteEnter"&&!s.instances[a]))if(up(o)){const l=(o.__vccOpts||o)[t];l&&i.push(Ut(l,n,r,s,a))}else{let c=o();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=gm(l)?l.default:l;s.components[a]=u;const h=(u.__vccOpts||u)[t];return h&&Ut(h,n,r,s,a)()}))}}return i}function up(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function cc(e){const t=ut(ja),n=ut(Ba),r=ie(()=>t.resolve(X(e.to))),i=ie(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(zn.bind(null,u));if(h>-1)return h;const p=lc(c[l-2]);return l>1&&lc(u)===p&&f[f.length-1].path!==p?f.findIndex(zn.bind(null,c[l-2])):h}),s=ie(()=>i.value>-1&&hp(n.params,r.value.params)),a=ie(()=>i.value>-1&&i.value===n.matched.length-1&&lu(n.params,r.value.params));function o(c={}){return dp(c)?t[X(e.replace)?"replace":"push"](X(e.to)).catch(dr):Promise.resolve()}return{route:r,href:ie(()=>r.value.href),isActive:s,isExactActive:a,navigate:o}}const fp=jr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cc,setup(e,{slots:t}){const n=Jn(cc(e)),{options:r}=ut(ja),i=ie(()=>({[uc(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[uc(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:ts("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),Je=fp;function dp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function hp(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!nt(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function lc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const uc=(e,t,n)=>e!=null?e:t!=null?t:n,mp=jr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ut(Gs),i=ie(()=>e.route||r.value),s=ut(oc,0),a=ie(()=>{let l=X(s);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),o=ie(()=>i.value.matched[a.value]);gi(oc,ie(()=>a.value+1)),gi(lp,o),gi(Gs,i);const c=we();return Pn(()=>[c.value,o.value,e.name],([l,u,f],[h,p,I])=>{u&&(u.instances[f]=l,p&&p!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!zn(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(M=>M(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,f=o.value,h=f&&f.components[u];if(!h)return fc(n.default,{Component:h,route:l});const p=f.props[u],I=p?p===!0?l.params:typeof p=="function"?p(l):p:null,T=ts(h,ae({},I,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return fc(n.default,{Component:T,route:l})||T}}});function fc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const yu=mp;function pp(e){const t=Wm(e.routes,e),n=e.parseQuery||op,r=e.stringifyQuery||ac,i=e.history,s=ir(),a=ir(),o=ir(),c=Ed(Mt);let l=Mt;xn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vs.bind(null,b=>""+b),f=vs.bind(null,ap),h=vs.bind(null,Ri);function p(b,$){let O,U;return fu(b)?(O=t.getRecordMatcher(b),U=$):U=b,t.addRoute(U,O)}function I(b){const $=t.getRecordMatcher(b);$&&t.removeRoute($)}function M(){return t.getRoutes().map(b=>b.record)}function T(b){return!!t.getRecordMatcher(b)}function v(b,$){if($=ae({},$||c.value),typeof b=="string"){const q=bs(n,b,$.path),d=t.resolve({path:q.path},$),m=i.createHref(q.fullPath);return ae(q,d,{params:h(d.params),hash:Ri(q.hash),redirectedFrom:void 0,href:m})}let O;if("path"in b)O=ae({},b,{path:bs(n,b.path,$.path).path});else{const q=ae({},b.params);for(const d in q)q[d]==null&&delete q[d];O=ae({},b,{params:f(b.params)}),$.params=f($.params)}const U=t.resolve(O,$),se=b.hash||"";U.params=u(h(U.params));const de=ym(r,ae({},b,{hash:rp(se),path:U.path})),G=i.createHref(de);return ae({fullPath:de,hash:se,query:r===ac?cp(b.query):b.query||{}},U,{redirectedFrom:void 0,href:G})}function y(b){return typeof b=="string"?bs(n,b,c.value.path):ae({},b)}function E(b,$){if(l!==b)return Hn(8,{from:$,to:b})}function R(b){return H(b)}function B(b){return R(ae(y(b),{replace:!0}))}function Q(b){const $=b.matched[b.matched.length-1];if($&&$.redirect){const{redirect:O}=$;let U=typeof O=="function"?O(b):O;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=y(U):{path:U},U.params={}),ae({query:b.query,hash:b.hash,params:"path"in U?{}:b.params},U)}}function H(b,$){const O=l=v(b),U=c.value,se=b.state,de=b.force,G=b.replace===!0,q=Q(O);if(q)return H(ae(y(q),{state:typeof q=="object"?ae({},se,q.state):se,force:de,replace:G}),$||O);const d=O;d.redirectedFrom=$;let m;return!de&&_m(r,U,O)&&(m=Hn(16,{to:d,from:U}),yn(U,U,!0,!1)),(m?Promise.resolve(m):te(d,U)).catch(g=>vt(g)?vt(g,2)?g:Fe(g):fe(g,d,U)).then(g=>{if(g){if(vt(g,2))return H(ae({replace:G},y(g.to),{state:typeof g.to=="object"?ae({},se,g.to.state):se,force:de}),$||d)}else g=Pe(d,U,!0,G,se);return ke(d,U,g),g})}function J(b,$){const O=E(b,$);return O?Promise.reject(O):Promise.resolve()}function te(b,$){let O;const[U,se,de]=gp(b,$);O=ys(U.reverse(),"beforeRouteLeave",b,$);for(const q of U)q.leaveGuards.forEach(d=>{O.push(Ut(d,b,$))});const G=J.bind(null,b,$);return O.push(G),In(O).then(()=>{O=[];for(const q of s.list())O.push(Ut(q,b,$));return O.push(G),In(O)}).then(()=>{O=ys(se,"beforeRouteUpdate",b,$);for(const q of se)q.updateGuards.forEach(d=>{O.push(Ut(d,b,$))});return O.push(G),In(O)}).then(()=>{O=[];for(const q of b.matched)if(q.beforeEnter&&!$.matched.includes(q))if(nt(q.beforeEnter))for(const d of q.beforeEnter)O.push(Ut(d,b,$));else O.push(Ut(q.beforeEnter,b,$));return O.push(G),In(O)}).then(()=>(b.matched.forEach(q=>q.enterCallbacks={}),O=ys(de,"beforeRouteEnter",b,$),O.push(G),In(O))).then(()=>{O=[];for(const q of a.list())O.push(Ut(q,b,$));return O.push(G),In(O)}).catch(q=>vt(q,8)?q:Promise.reject(q))}function ke(b,$,O){for(const U of o.list())U(b,$,O)}function Pe(b,$,O,U,se){const de=E(b,$);if(de)return de;const G=$===Mt,q=xn?history.state:{};O&&(U||G?i.replace(b.fullPath,ae({scroll:G&&q&&q.scroll},se)):i.push(b.fullPath,se)),c.value=b,yn(b,$,O,G),Fe()}let Ue;function Rt(){Ue||(Ue=i.listen((b,$,O)=>{if(!tr.listening)return;const U=v(b),se=Q(U);if(se){H(ae(se,{replace:!0}),U).catch(dr);return}l=U;const de=c.value;xn&&Tm(Qo(de.fullPath,O.delta),rs()),te(U,de).catch(G=>vt(G,12)?G:vt(G,2)?(H(G.to,U).then(q=>{vt(q,20)&&!O.delta&&O.type===Ar.pop&&i.go(-1,!1)}).catch(dr),Promise.reject()):(O.delta&&i.go(-O.delta,!1),fe(G,U,de))).then(G=>{G=G||Pe(U,de,!1),G&&(O.delta&&!vt(G,8)?i.go(-O.delta,!1):O.type===Ar.pop&&vt(G,20)&&i.go(-1,!1)),ke(U,de,G)}).catch(dr)}))}let He=ir(),Ie=ir(),xe;function fe(b,$,O){Fe(b);const U=Ie.list();return U.length?U.forEach(se=>se(b,$,O)):console.error(b),Promise.reject(b)}function oe(){return xe&&c.value!==Mt?Promise.resolve():new Promise((b,$)=>{He.add([b,$])})}function Fe(b){return xe||(xe=!b,Rt(),He.list().forEach(([$,O])=>b?O(b):$()),He.reset()),b}function yn(b,$,O,U){const{scrollBehavior:se}=e;if(!xn||!se)return Promise.resolve();const de=!O&&Cm(Qo(b.fullPath,0))||(U||!O)&&history.state&&history.state.scroll||null;return Oa().then(()=>se(b,$,de)).then(G=>G&&Am(G)).catch(G=>fe(G,b,$))}const gt=b=>i.go(b);let rt;const We=new Set,tr={currentRoute:c,listening:!0,addRoute:p,removeRoute:I,hasRoute:T,getRoutes:M,resolve:v,options:e,push:R,replace:B,go:gt,back:()=>gt(-1),forward:()=>gt(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:Ie.add,isReady:oe,install(b){const $=this;b.component("RouterLink",Je),b.component("RouterView",yu),b.config.globalProperties.$router=$,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>X(c)}),xn&&!rt&&c.value===Mt&&(rt=!0,R(i.location).catch(se=>{}));const O={};for(const se in Mt)O[se]=ie(()=>c.value[se]);b.provide(ja,$),b.provide(Ba,Jn(O)),b.provide(Gs,c);const U=b.unmount;We.add(b),b.unmount=function(){We.delete(b),We.size<1&&(l=Mt,Ue&&Ue(),Ue=null,c.value=Mt,rt=!1,xe=!1),U()}}};return tr}function In(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function gp(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(l=>zn(l,o))?r.push(o):n.push(o));const c=e.matched[a];c&&(t.matched.find(l=>zn(l,c))||i.push(c))}return[n,r,i]}function Q1(){return ut(Ba)}const Ni=Ua("cart",()=>{const e=we([]),t=we(0);we(1),we(0);const n=we(),r=ie(()=>[...new Set(e.value.map(o=>o.title))]);function i(){t.value=0,e.value.forEach(o=>t.value+=o.price*o.quantity)}return{cartItems:e,addProductToCart:(o,c=1)=>{r.value.includes(o.title)?c>1&&(n.value=e.value.find(l=>l.title==o.title),n.value.quantity+=c):(o.quantity=c,e.value.push(o)),i()},deleteCartItem:o=>{e.value=e.value.filter(c=>c.id!==o),i()},totalAmount:t,calculateTotal:i}}),vp="modulepreload",bp=function(e){return"/"+e},dc={},bt=function(t,n,r){return!n||n.length===0?t():Promise.all(n.map(i=>{if(i=bp(i),i in dc)return;dc[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${a}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":vp,s||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),s)return new Promise((c,l)=>{o.addEventListener("load",c),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},yp=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},wu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,f=(s&3)<<4|o>>4;let h=(o&15)<<2|l>>6,p=l&63;c||(p=64,a||(h=64)),r.push(n[u],n[f],n[h],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_u(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):yp(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||l==null||f==null)throw Error();const h=s<<2|o>>4;if(r.push(h),l!==64){const p=o<<4&240|l>>2;if(r.push(p),f!==64){const I=l<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},_p=function(e){const t=_u(e);return wu.encodeByteArray(t,!0)},Iu=function(e){return _p(e).replace(/\./g,"")},wp=function(e){try{return wu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function Ep(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function kp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sp(){const e=Oe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ap(){return typeof indexedDB=="object"}function Tp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="FirebaseError";class Xt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Cp,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?Op(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new Xt(i,o,r)}}function Op(e,t){return e.replace(Pp,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Pp=/\{\$([^}]+)}/g;function Rp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Mi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(hc(s)&&hc(a)){if(!Mi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ar(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function or(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Np(e,t){const n=new Mp(e,t);return n.subscribe.bind(n)}class Mp{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lp(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=_s),i.error===void 0&&(i.error=_s),i.complete===void 0&&(i.complete=_s);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lp(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function _s(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(e){return e&&e._delegate?e._delegate:e}class Wn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ip;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Up(t))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=tn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=tn){return this.instances.has(t)}getOptions(t=tn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$p(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=tn){return this.component?this.component.multipleInstances?t:tn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $p(e){return e===tn?void 0:e}function Up(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Dp(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(he||(he={}));const jp={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Bp=he.INFO,zp={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Hp=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=zp[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xu{constructor(t){this.name=t,this._logLevel=Bp,this._logHandler=Hp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in he))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...t),this._logHandler(this,he.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...t),this._logHandler(this,he.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,he.INFO,...t),this._logHandler(this,he.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,he.WARN,...t),this._logHandler(this,he.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...t),this._logHandler(this,he.ERROR,...t)}}const Wp=(e,t)=>t.some(n=>e instanceof n);let mc,pc;function Vp(){return mc||(mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kp(){return pc||(pc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eu=new WeakMap,Js=new WeakMap,ku=new WeakMap,ws=new WeakMap,za=new WeakMap;function qp(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Kt(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Eu.set(n,e)}).catch(()=>{}),za.set(t,e),t}function Yp(e){if(Js.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Js.set(e,t)}let Xs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Js.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ku.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Gp(e){Xs=e(Xs)}function Jp(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Is(this),t,...n);return ku.set(r,t.sort?t.sort():[t]),Kt(r)}:Kp().includes(e)?function(...t){return e.apply(Is(this),t),Kt(Eu.get(this))}:function(...t){return Kt(e.apply(Is(this),t))}}function Xp(e){return typeof e=="function"?Jp(e):(e instanceof IDBTransaction&&Yp(e),Wp(e,Vp())?new Proxy(e,Xs):e)}function Kt(e){if(e instanceof IDBRequest)return qp(e);if(ws.has(e))return ws.get(e);const t=Xp(e);return t!==e&&(ws.set(e,t),za.set(t,e)),t}const Is=e=>za.get(e);function Qp(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=Kt(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Kt(a.result),c.oldVersion,c.newVersion,Kt(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),o}const Zp=["get","getKey","getAll","getAllKeys","count"],eg=["put","add","delete","clear"],xs=new Map;function gc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(xs.get(t))return xs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=eg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Zp.includes(n)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return xs.set(t,s),s}Gp(e=>({...e,get:(t,n,r)=>gc(t,n)||e.get(t,n,r),has:(t,n)=>!!gc(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ng(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ng(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Qs="@firebase/app",vc="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new xu("@firebase/app"),rg="@firebase/app-compat",ig="@firebase/analytics-compat",sg="@firebase/analytics",ag="@firebase/app-check-compat",og="@firebase/app-check",cg="@firebase/auth",lg="@firebase/auth-compat",ug="@firebase/database",fg="@firebase/database-compat",dg="@firebase/functions",hg="@firebase/functions-compat",mg="@firebase/installations",pg="@firebase/installations-compat",gg="@firebase/messaging",vg="@firebase/messaging-compat",bg="@firebase/performance",yg="@firebase/performance-compat",_g="@firebase/remote-config",wg="@firebase/remote-config-compat",Ig="@firebase/storage",xg="@firebase/storage-compat",Eg="@firebase/firestore",kg="@firebase/firestore-compat",Sg="firebase",Ag="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="[DEFAULT]",Tg={[Qs]:"fire-core",[rg]:"fire-core-compat",[sg]:"fire-analytics",[ig]:"fire-analytics-compat",[og]:"fire-app-check",[ag]:"fire-app-check-compat",[cg]:"fire-auth",[lg]:"fire-auth-compat",[ug]:"fire-rtdb",[fg]:"fire-rtdb-compat",[dg]:"fire-fn",[hg]:"fire-fn-compat",[mg]:"fire-iid",[pg]:"fire-iid-compat",[gg]:"fire-fcm",[vg]:"fire-fcm-compat",[bg]:"fire-perf",[yg]:"fire-perf-compat",[_g]:"fire-rc",[wg]:"fire-rc-compat",[Ig]:"fire-gcs",[xg]:"fire-gcs-compat",[Eg]:"fire-fst",[kg]:"fire-fst-compat","fire-js":"fire-js",[Sg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=new Map,Zs=new Map;function Cg(e,t){try{e.container.addComponent(t)}catch(n){hn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Tr(e){const t=e.name;if(Zs.has(t))return hn.debug(`There were multiple attempts to register component ${t}.`),!1;Zs.set(t,e);for(const n of Li.values())Cg(n,e);return!0}function Au(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mn=new Br("app","Firebase",Og);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=Ag;function Rg(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Su,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw mn.create("bad-app-name",{appName:String(r)});const i=Li.get(r);if(i){if(Mi(e,i.options)&&Mi(n,i.config))return i;throw mn.create("duplicate-app",{appName:r})}const s=new Fp(r);for(const o of Zs.values())s.addComponent(o);const a=new Pg(e,n,s);return Li.set(r,a),a}function Ng(e=Su){const t=Li.get(e);if(!t)throw mn.create("no-app",{appName:e});return t}function Rn(e,t,n){var r;let i=(r=Tg[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${t}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),hn.warn(o.join(" "));return}Tr(new Wn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="firebase-heartbeat-database",Lg=1,Cr="firebase-heartbeat-store";let Es=null;function Tu(){return Es||(Es=Qp(Mg,Lg,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Cr)}}}).catch(e=>{throw mn.create("idb-open",{originalErrorMessage:e.message})})),Es}async function Dg(e){var t;try{return(await Tu()).transaction(Cr).objectStore(Cr).get(Cu(e))}catch(n){if(n instanceof Xt)hn.warn(n.message);else{const r=mn.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});hn.warn(r.message)}}}async function bc(e,t){var n;try{const i=(await Tu()).transaction(Cr,"readwrite");return await i.objectStore(Cr).put(t,Cu(e)),i.done}catch(r){if(r instanceof Xt)hn.warn(r.message);else{const i=mn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});hn.warn(i.message)}}}function Cu(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=1024,Ug=30*24*60*60*1e3;class Fg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Ug}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yc(),{heartbeatsToSend:n,unsentEntries:r}=jg(this._heartbeatsCache.heartbeats),i=Iu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function yc(){return new Date().toISOString().substring(0,10)}function jg(e,t=$g){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),_c(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_c(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ap()?Tp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Dg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function _c(e){return Iu(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(e){Tr(new Wn("platform-logger",t=>new tg(t),"PRIVATE")),Tr(new Wn("heartbeat",t=>new Fg(t),"PRIVATE")),Rn(Qs,vc,e),Rn(Qs,vc,"esm2017"),Rn("fire-js","")}zg("");var Hg="firebase",Wg="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn(Hg,Wg,"app");function Ha(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ou(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vg=Ou,Pu=new Br("auth","Firebase",Ou());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new xu("@firebase/auth");function _i(e,...t){wc.logLevel<=he.ERROR&&wc.error(`Auth (${is}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e,...t){throw Wa(e,...t)}function ft(e,...t){return Wa(e,...t)}function Ru(e,t,n){const r=Object.assign(Object.assign({},Vg()),{[t]:n});return new Br("auth","Firebase",r).create(t,{appName:e.name})}function Kg(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&qe(e,"argument-error"),Ru(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wa(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Pu.create(e,...t)}function W(e,t,...n){if(!e)throw Wa(t,...n)}function It(e){const t="INTERNAL ASSERTION FAILED: "+e;throw _i(t),new Error(t)}function St(e,t){e||It(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Map;function xt(e){St(e instanceof Function,"Expected a class definition");let t=Ic.get(e);return t?(St(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ic.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(e,t){const n=Au(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Mi(s,t!=null?t:{}))return i;qe(i,"already-initialized")}return n.initialize({options:t})}function Yg(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Gg(){return xc()==="http:"||xc()==="https:"}function xc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gg()||Ep()||"connection"in navigator)?navigator.onLine:!0}function Xg(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,n){this.shortDelay=t,this.longDelay=n,St(n>t,"Short delay should be less than long delay!"),this.isMobile=xp()||kp()}get(){return Jg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(e,t){St(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=new Hr(3e4,6e4);function Wr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Vr(e,t,n,r,i={}){return Mu(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=zr(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Nu.fetch()(Lu(e,e.config.apiHost,n,o),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function Mu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qg),t);try{const i=new ev(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ii(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ii(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw ii(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw ii(e,"user-disabled",a);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ru(e,u,l);qe(e,u)}}catch(i){if(i instanceof Xt)throw i;qe(e,"network-request-failed")}}async function Kr(e,t,n,r,i={}){const s=await Vr(e,t,n,r,i);return"mfaPendingCredential"in s&&qe(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Lu(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Va(e.config,i):`${e.config.apiScheme}://${i}`}class ev{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ft(this.auth,"network-request-failed")),Zg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ii(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ft(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(e,t){return Vr(e,"POST","/v1/accounts:delete",t)}async function nv(e,t){return Vr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function rv(e,t=!1){const n=Xn(e),r=await n.getIdToken(t),i=Ka(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:mr(ks(i.auth_time)),issuedAtTime:mr(ks(i.iat)),expirationTime:mr(ks(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ks(e){return Number(e)*1e3}function Ka(e){var t;const[n,r,i]=e.split(".");if(n===void 0||r===void 0||i===void 0)return _i("JWT malformed, contained fewer than 3 sections"),null;try{const s=wp(r);return s?JSON.parse(s):(_i("Failed to decode base64 JWT payload"),null)}catch(s){return _i("Caught error parsing JWT payload as JSON",(t=s)===null||t===void 0?void 0:t.toString()),null}}function iv(e){const t=Ka(e);return W(t,"internal-error"),W(typeof t.exp<"u","internal-error"),W(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Xt&&sv(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function sv({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mr(this.lastLoginAt),this.creationTime=mr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Or(e,nv(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?lv(s.providerUserInfo):[],o=cv(e.providerData,a),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Du(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function ov(e){const t=Xn(e);await Di(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function cv(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function lv(e){return e.map(t=>{var{providerId:n}=t,r=Ha(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(e,t){const n=await Mu(e,{},async()=>{const r=zr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=Lu(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Nu.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){W(t.idToken,"internal-error"),W(typeof t.idToken<"u","internal-error"),W(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):iv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return W(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uv(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Pr;return r&&(W(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Pr,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e,t){W(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class fn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Ha(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new av(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Du(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Or(this,this.stsTokenManager.getToken(this.auth,t));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return rv(this,t)}reload(){return ov(this)}_assign(t){this!==t&&(W(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new fn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Di(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Or(this,tv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,o,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(a=n.photoURL)!==null&&a!==void 0?a:void 0,M=(o=n.tenantId)!==null&&o!==void 0?o:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:R,isAnonymous:B,providerData:Q,stsTokenManager:H}=n;W(E&&H,t,"internal-error");const J=Pr.fromJSON(this.name,H);W(typeof E=="string",t,"internal-error"),Lt(f,t.name),Lt(h,t.name),W(typeof R=="boolean",t,"internal-error"),W(typeof B=="boolean",t,"internal-error"),Lt(p,t.name),Lt(I,t.name),Lt(M,t.name),Lt(T,t.name),Lt(v,t.name),Lt(y,t.name);const te=new fn({uid:E,auth:t,email:h,emailVerified:R,displayName:f,isAnonymous:B,photoURL:I,phoneNumber:p,tenantId:M,stsTokenManager:J,createdAt:v,lastLoginAt:y});return Q&&Array.isArray(Q)&&(te.providerData=Q.map(ke=>Object.assign({},ke))),T&&(te._redirectEventId=T),te}static async _fromIdTokenResponse(t,n,r=!1){const i=new Pr;i.updateFromServerResponse(n);const s=new fn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Di(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}$u.type="NONE";const Ec=$u;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(e,t,n){return`firebase:${e}:${t}:${n}`}class Nn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wi(this.userKey,i.apiKey,s),this.fullPersistenceKey=wi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?fn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Nn(xt(Ec),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||xt(Ec);const a=wi(r,t.config.apiKey,t.name);let o=null;for(const l of n)try{const u=await l._get(a);if(u){const f=fn._fromJSON(t,u);l!==s&&(o=f),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Nn(s,t,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new Nn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ju(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Uu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(zu(t))return"Blackberry";if(Hu(t))return"Webos";if(qa(t))return"Safari";if((t.includes("chrome/")||Fu(t))&&!t.includes("edge/"))return"Chrome";if(Bu(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Uu(e=Oe()){return/firefox\//i.test(e)}function qa(e=Oe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Fu(e=Oe()){return/crios\//i.test(e)}function ju(e=Oe()){return/iemobile/i.test(e)}function Bu(e=Oe()){return/android/i.test(e)}function zu(e=Oe()){return/blackberry/i.test(e)}function Hu(e=Oe()){return/webos/i.test(e)}function ss(e=Oe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function fv(e=Oe()){var t;return ss(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function dv(){return Sp()&&document.documentMode===10}function Wu(e=Oe()){return ss(e)||Bu(e)||Hu(e)||zu(e)||/windows phone/i.test(e)||ju(e)}function hv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(e,t=[]){let n;switch(e){case"Browser":n=kc(Oe());break;case"Worker":n=`${kc(Oe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,o)=>{try{const c=t(s);a(c)}catch(c){o(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const r=[];try{for(const i of this.queue)await i(t),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sc(this),this.idTokenSubscription=new Sc(this),this.beforeStateQueue=new mv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Nn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===o)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await Di(t)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Xg()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Xn(t):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&W(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Br("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&xt(t)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Nn.create(this,[xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return W(a,this,"internal-error"),a.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Vu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function qr(e){return Xn(e)}class Sc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Np(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(t){return It("not implemented")}_linkToIdToken(t,n){return It("not implemented")}_getReauthenticationResolver(t){return It("not implemented")}}async function gv(e,t){return Vr(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(e,t){return Kr(e,"POST","/v1/accounts:signInWithPassword",Wr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(e,t){return Kr(e,"POST","/v1/accounts:signInWithEmailLink",Wr(e,t))}async function yv(e,t){return Kr(e,"POST","/v1/accounts:signInWithEmailLink",Wr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Ya{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Rr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Rr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return vv(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bv(t,{email:this._email,oobCode:this._password});default:qe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return gv(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yv(t,{idToken:n,email:this._email,oobCode:this._password});default:qe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(e,t){return Kr(e,"POST","/v1/accounts:signInWithIdp",Wr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="http://localhost";class pn extends Ya{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new pn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Ha(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new pn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Mn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Mn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Mn(t,n)}buildRequest(){const t={requestUri:_v,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=zr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Iv(e){const t=ar(or(e)).link,n=t?ar(or(t)).deep_link_id:null,r=ar(or(e)).deep_link_id;return(r?ar(or(r)).link:null)||r||n||t||e}class Ga{constructor(t){var n,r,i,s,a,o;const c=ar(or(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=wv((i=c.mode)!==null&&i!==void 0?i:null);W(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=c.tenantId)!==null&&o!==void 0?o:null}static parseLink(t){const n=Iv(t);try{return new Ga(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.providerId=Qn.PROVIDER_ID}static credential(t,n){return Rr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Ga.parseLink(n);return W(r,"argument-error"),Rr._fromEmailAndCode(t,r.code,r.tenantId)}}Qn.PROVIDER_ID="password";Qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Ja{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Yr{constructor(){super("facebook.com")}static credential(t){return pn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jt.credential(t.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Yr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return pn._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return wt.credentialFromTaggedObject(t)}static credentialFromError(t){return wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Yr{constructor(){super("github.com")}static credential(t){return pn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bt.credential(t.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Yr{constructor(){super("twitter.com")}static credential(t,n){return pn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return zt.credentialFromTaggedObject(t)}static credentialFromError(t){return zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xv(e,t){return Kr(e,"POST","/v1/accounts:signUp",Wr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await fn._fromIdTokenResponse(t,r,i),a=Ac(r);return new gn({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Ac(r);return new gn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Ac(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends Xt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$i.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new $i(t,n,r,i)}}function Ku(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$i._fromErrorAndOperation(e,s,t,r):s})}async function Ev(e,t,n=!1){const r=await Or(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return gn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const a=await Or(e,Ku(i,s,t,e),n);W(a.idToken,i,"internal-error");const o=Ka(a.idToken);W(o,i,"internal-error");const{sub:c}=o;return W(e.uid===c,i,"user-mismatch"),gn._forOperation(e,s,a)}catch(a){throw((r=a)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&qe(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qu(e,t,n=!1){const r="signIn",i=await Ku(e,r,t),s=await gn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Sv(e,t){return qu(qr(e),t)}async function Av(e,t,n){const r=qr(e),i=await xv(r,{returnSecureToken:!0,email:t,password:n}),s=await gn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Tv(e,t,n){return Sv(Xn(e),Qn.credential(t,n))}function Cv(e){return Xn(e).signOut()}const Ui="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ui,"1"),this.storage.removeItem(Ui),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(){const e=Oe();return qa(e)||ss(e)}const Pv=1e3,Rv=10;class Gu extends Yu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ov()&&hv(),this.fallbackToPolling=Wu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);dv()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Rv):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Pv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Gu.type="LOCAL";const Nv=Gu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends Yu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Ju.type="SESSION";const Xu=Ju;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new as(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async l=>l(n.origin,s)),c=await Mv(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}as.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const l=Xa("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(h.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return window}function Dv(e){dt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function $v(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Uv(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Fv(){return Qu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="firebaseLocalStorageDb",jv=1,Fi="firebaseLocalStorage",ef="fbase_key";class Gr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function os(e,t){return e.transaction([Fi],t?"readwrite":"readonly").objectStore(Fi)}function Bv(){const e=indexedDB.deleteDatabase(Zu);return new Gr(e).toPromise()}function ta(){const e=indexedDB.open(Zu,jv);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Fi,{keyPath:ef})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Fi)?t(r):(r.close(),await Bv(),t(await ta()))})})}async function Tc(e,t,n){const r=os(e,!0).put({[ef]:t,value:n});return new Gr(r).toPromise()}async function zv(e,t){const n=os(e,!1).get(t),r=await new Gr(n).toPromise();return r===void 0?null:r.value}function Cc(e,t){const n=os(e,!0).delete(t);return new Gr(n).toPromise()}const Hv=800,Wv=3;class tf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ta(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Wv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=as._getInstance(Fv()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await $v(),!this.activeServiceWorker)return;this.sender=new Lv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Uv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ta();return await Tc(t,Ui,"1"),await Cc(t,Ui),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>zv(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=os(i,!1).getAll();return new Gr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tf.type="LOCAL";const Vv=tf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function qv(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ft("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Kv().appendChild(r)})}function Yv(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Hr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(e,t){return t?xt(t):(W(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends Ya{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Mn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Mn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Mn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Gv(e){return qu(e.auth,new Qa(e),e.bypassAuthState)}function Jv(e){const{auth:t,user:n}=e;return W(n,t,"internal-error"),kv(n,new Qa(e),e.bypassAuthState)}async function Xv(e){const{auth:t,user:n}=e;return W(n,t,"internal-error"),Ev(n,new Qa(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Gv;case"linkViaPopup":case"linkViaRedirect":return Xv;case"reauthViaPopup":case"reauthViaRedirect":return Jv;default:qe(this.auth,"internal-error")}}resolve(t){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=new Hr(2e3,1e4);async function Zv(e,t,n){const r=qr(e);Kg(e,t,Ja);const i=nf(r,n);return new an(r,"signInViaPopup",t,i).executeNotNull()}class an extends rf{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,an.currentPopupAction&&an.currentPopupAction.cancel(),an.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return W(t,this.auth,"internal-error"),t}async onExecution(){St(this.filter.length===1,"Popup operations only handle one event");const t=Xa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,an.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ft(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,Qv.get())};t()}}an.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="pendingRedirect",Ii=new Map;class tb extends rf{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ii.get(this.auth._key());if(!t){try{const r=await nb(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ii.set(this.auth._key(),t)}return this.bypassAuthState||Ii.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nb(e,t){const n=sb(t),r=ib(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rb(e,t){Ii.set(e._key(),t)}function ib(e){return xt(e._redirectPersistence)}function sb(e){return wi(eb,e.config.apiKey,e.name)}async function ab(e,t,n=!1){const r=qr(e),i=nf(r,t),a=await new tb(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=10*60*1e3;class cb{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!lb(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!sf(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ft(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ob&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oc(t))}saveEventToCache(t){this.cachedEventUids.add(Oc(t)),this.lastProcessedEventTime=Date.now()}}function Oc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function sf({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function lb(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sf(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(e,t={}){return Vr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,db=/^https?/;async function hb(e){if(e.config.emulator)return;const{authorizedDomains:t}=await ub(e);for(const n of t)try{if(mb(n))return}catch{}qe(e,"unauthorized-domain")}function mb(e){const t=ea(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!db.test(n))return!1;if(fb.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=new Hr(3e4,6e4);function Pc(){const e=dt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function gb(e){return new Promise((t,n)=>{var r,i,s;function a(){Pc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pc(),n(ft(e,"network-request-failed"))},timeout:pb.get()})}if(!((i=(r=dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=dt().gapi)===null||s===void 0)&&s.load)a();else{const o=Yv("iframefcb");return dt()[o]=()=>{gapi.load?a():n(ft(e,"network-request-failed"))},qv(`https://apis.google.com/js/api.js?onload=${o}`).catch(c=>n(c))}}).catch(t=>{throw xi=null,t})}let xi=null;function vb(e){return xi=xi||gb(e),xi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=new Hr(5e3,15e3),yb="__/auth/iframe",_b="emulator/auth/iframe",wb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ib=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xb(e){const t=e.config;W(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Va(t,_b):`https://${e.config.authDomain}/${yb}`,r={apiKey:t.apiKey,appName:e.name,v:is},i=Ib.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zr(r).slice(1)}`}async function Eb(e){const t=await vb(e),n=dt().gapi;return W(n,e,"internal-error"),t.open({where:document.body,url:xb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=ft(e,"network-request-failed"),o=dt().setTimeout(()=>{s(a)},bb.get());function c(){dt().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sb=500,Ab=600,Tb="_blank",Cb="http://localhost";class Rc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ob(e,t,n,r=Sb,i=Ab){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c=Object.assign(Object.assign({},kb),{width:r.toString(),height:i.toString(),top:s,left:a}),l=Oe().toLowerCase();n&&(o=Fu(l)?Tb:n),Uu(l)&&(t=t||Cb,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[p,I])=>`${h}${p}=${I},`,"");if(fv(l)&&o!=="_self")return Pb(t||"",o),new Rc(null);const f=window.open(t||"",o,u);W(f,e,"popup-blocked");try{f.focus()}catch{}return new Rc(f)}function Pb(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="__/auth/handler",Nb="emulator/auth/handler";function Nc(e,t,n,r,i,s){W(e.config.authDomain,e,"auth-domain-config-required"),W(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:is,eventId:i};if(t instanceof Ja){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Rp(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))a[c]=l}if(t instanceof Yr){const c=t.getScopes().filter(l=>l!=="");c.length>0&&(a.scopes=c.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const c of Object.keys(o))o[c]===void 0&&delete o[c];return`${Mb(e)}?${zr(o).slice(1)}`}function Mb({config:e}){return e.emulator?Va(e,Nb):`https://${e.authDomain}/${Rb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="webStorageSupport";class Lb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xu,this._completeRedirectFn=ab,this._overrideRedirectResult=rb}async _openPopup(t,n,r,i){var s;St((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=Nc(t,n,r,ea(),i);return Ob(t,a,Xa())}async _openRedirect(t,n,r,i){return await this._originValidation(t),Dv(Nc(t,n,r,ea(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(St(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Eb(t),r=new cb(t);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ss,{type:Ss},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ss];a!==void 0&&n(!!a),qe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hb(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wu()||qa()||ss()}}const Db=Lb;var Mc="@firebase/auth",Lc="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Fb(e){Tr(new Wn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:a}=r.options;return((o,c)=>{W(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),W(!(a!=null&&a.includes(":")),"argument-error",{appName:o.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vu(e)},u=new pv(o,c,l);return Yg(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Tr(new Wn("auth-internal",t=>{const n=qr(t.getProvider("auth").getImmediate());return(r=>new $b(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(Mc,Lc,Ub(e)),Rn(Mc,Lc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(e=Ng()){const t=Au(e,"auth");return t.isInitialized()?t.getImmediate():qg(e,{popupRedirectResolver:Db,persistence:[Vv,Nv,Xu]})}Fb("Browser");const jb={apiKey:"AIzaSyAa8ZlJj0V1z6ucONtcdKsvaOrsG0WJHMs",authDomain:"sdte-com.firebaseapp.com",projectId:"sdte-com",storageBucket:"sdte-com.appspot.com",messagingSenderId:"84284820055",appId:"1:84284820055:web:5c95ae8142998d9299f112"},Bb=Rg(jb),En=af(Bb),zb={class:"bg-cover bg-no-repeat bg-center py-36",style:{"background-image":"url('images/banner-bg.jpeg')"}},Hb={class:"container"},Wb=k("h1",{class:"text-3xl md:text-6xl text-white font-medium mb-4 capitalize"},[Le(" best collection for "),k("br"),Le(" home decoration ")],-1),Vb=k("p",{class:"text-white"},[Le(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam "),k("br"),Le(" accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores odio ")],-1),Kb={class:"mt-12"},qb=Le("Shop Now"),Yb={__name:"TheBanner",setup(e){return(t,n)=>(re(),me("div",zb,[k("div",Hb,[Wb,Vb,k("div",Kb,[K(X(Je),{to:"/shop",class:"bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary"},{default:Ne(()=>[qb]),_:1})])])]))}},cs=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Gb={},Jb={class:"container pt-16 pb-0 md:pb-16"},Xb=Da('<div class="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center"><div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5"><img src="/images/icons/delivery-van.svg" alt="Delivery" class="w-12 h-12 object-contain"><div><h4 class="font-medium capitalize text-lg">Free Shipping</h4><p class="text-gray-500 text-sm">Order over $200</p></div></div><div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5"><img src="/images/icons/money-back.svg" alt="Delivery" class="w-12 h-12 object-contain"><div><h4 class="font-medium capitalize text-lg">Money Rturns</h4><p class="text-gray-500 text-sm">30 days money returs</p></div></div><div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5"><img src="/images/icons/service-hours.svg" alt="Delivery" class="w-12 h-12 object-contain"><div><h4 class="font-medium capitalize text-lg">24/7 Support</h4><p class="text-gray-500 text-sm">Customer support</p></div></div></div>',1),Qb=[Xb];function Zb(e,t){return re(),me("div",Jb,Qb)}const ey=cs(Gb,[["render",Zb]]),pt=Ua("product",()=>{const e=we([]);we();const t=we([]),n=we([]),r=we(!0),i=we(2e3),s=we(0),a=we(i.value);async function o(){let R=await(await fetch("https://dummyjson.com/products?limit=100")).json();e.value=await R.products}function c(E){return e.value.find(R=>R.id===E)}function l(E,R=e.value.length){return e.value.filter(B=>B.category===E).slice(0,R)}function u(E){return e.value.filter(R=>R.category===E)}function f(E){return e.value.filter(R=>E.includes(R.category))}function h(E){return e.value.filter(R=>R.brand===E)}const p=ie(()=>[...new Set(e.value.map(E=>E.category))]),I=ie(()=>[...new Set(e.value.map(E=>E.brand))]),M=ie(()=>e.value.filter(E=>E.id>e.value.length-4)),T=ie(()=>e.value.filter(E=>E.id>20&&E.id<29)),v=ie(()=>E=>e.value.filter(R=>R.title.toLowerCase().includes(E.toLowerCase())));function y(E){return e.value.filter(R=>R.title.toLowerCase().includes(E.toLowerCase()))}return{products:e,getProductCategories:p,getProductBrands:I,getProductById:c,fetchProducts:o,getProductsByCategory:u,getProductsByCategories:f,getProductsByBrand:h,getNewArrival:M,getRecomendedProducts:T,getSearchProducts:v,getSearchProduct:y,relatedProducts:l,shopSidebarSelectedCategories:t,shopSidebarSelectedBrands:n,gridView:r,maxRangeAmount:i,minValue:s,maxValue:a}}),ty={class:"container py-16"},ny=k("h2",{class:"text-2xl font-medium text-gray-800 uppercase mb-6"}," shop by category ",-1),ry={class:"grid grid-cols-1 md:grid-cols-3 gap-3"},iy=["src"],sy={__name:"TheCategory",setup(e){const{products:t,getProductCategories:n}=mt(pt()),{fetchProducts:r}=pt();return r(),(i,s)=>{const a=xr("router-link");return re(),me("div",ty,[ny,k("div",ry,[(re(!0),me(Te,null,Un(X(n).slice(0,6),(o,c)=>(re(),me("div",{key:c,class:"relative rounded-sm overflow-hidden group max-h-72"},[k("img",{src:`/images/category/category-${c+1}.jpg`,alt:"{{category}}",class:"w-full h-full object-cover"},null,8,iy),K(a,{to:`/category/${o}`,class:"absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"},{default:Ne(()=>[Le(Ve(o.toUpperCase()),1)]),_:2},1032,["to"])]))),128))])])}}};const ay=e=>($d("data-v-b835443e"),e=e(),Ud(),e),oy=["src","alt"],cy={class:"absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"},ly=["onClick"],uy={class:"pt-4 pb-3 px-4 info-box flex flex-col"},fy={class:"uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition"},dy={class:"flex items-baseline mb-1 space-x-2 mt-auto"},hy={class:"text-xl text-primary font-semibold"},my=ay(()=>k("p",{class:"text-sm text-gray-400 line-through"},"$55.90",-1)),py={class:"flex items-center"},gy=Da('<div class="flex gap-1 text-sm text-yellow-400" data-v-b835443e><span data-v-b835443e><i class="fa-solid fa-star" data-v-b835443e></i></span><span data-v-b835443e><i class="fa-solid fa-star" data-v-b835443e></i></span><span data-v-b835443e><i class="fa-solid fa-star" data-v-b835443e></i></span><span data-v-b835443e><i class="fa-solid fa-star" data-v-b835443e></i></span><span data-v-b835443e><i class="fa-solid fa-star" data-v-b835443e></i></span></div>',1),vy={class:"text-xs text-gray-500 ml-3"},by=["onClick"],yy=["onClick"],_y={__name:"ProductCard",props:["products"],setup(e){const{gridView:t}=mt(pt()),{addProductToCart:n}=Ni();return(r,i)=>{const s=xr("font-awesome-icon"),a=xr("router-link");return re(!0),me(Te,null,Un(e.products,o=>(re(),me("div",{key:o.title,class:Ht(["bg-primary md:bg-white bg-opacity-10 md:bg-opacity-100 shadow rounded overflow-hidden group rafcart-product-group",X(t)?"grid-view":"list-view flex mb-4"])},[k("div",{class:Ht(["relative",X(t)?"img-wrap":"h-full w-[240px]"])},[k("img",{src:o.thumbnail,alt:o.title,class:"w-full h-full object-cover"},null,8,oy),k("div",cy,[K(a,{to:`/product/${o.id}`,class:"text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition",title:"view product"},{default:Ne(()=>[K(s,{icon:"fa-solid fa-magnifying-glass"})]),_:2},1032,["to"]),k("button",{onClick:c=>X(n)(o),class:"text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition",title:"add to wishlist"},[K(s,{icon:"fa-regular fa-heart"})],8,ly)])],2),k("div",{class:Ht(["relative bottom-content",X(t)?"":"flex items-center grow"])},[k("div",uy,[K(a,{to:`/product/${o.id}`},{default:Ne(()=>[k("h4",fy,Ve(o.title),1)]),_:2},1032,["to"]),k("div",dy,[k("p",hy,"$"+Ve(o.price),1),my]),k("div",py,[gy,k("div",vy,"("+Ve(o.stock)+")",1)])]),X(t)?(re(),me("button",{key:1,onClick:c=>X(n)(o),class:"absolute bottom-0 grid-view-button block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"}," Add to cart ",8,yy)):(re(),me("button",{key:0,onClick:c=>X(n)(o),class:"list-view-button block ml-auto mr-3 py-1 px-3 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition"}," Add to cart ",8,by))],2)],2))),128)}}},of=cs(_y,[["__scopeId","data-v-b835443e"]]),wy={class:"container pb-16"},Iy=k("h2",{class:"text-2xl font-medium text-gray-800 uppercase mb-6"}," top new arrival ",-1),xy={class:"grid grid-cols-1 md:grid-cols-4 gap-6"},Ey={__name:"NewArrival",setup(e){const{products:t,getNewArrival:n}=mt(pt()),{fetchProducts:r}=pt();return r(),(i,s)=>(re(),me("div",wy,[Iy,k("div",xy,[K(of,{products:X(n)},null,8,["products"])])]))}},ky={},Sy={class:"container pb-16"},Ay=k("a",{href:"#"},[k("img",{src:"/images/offer.jpg",alt:"ads",class:"w-full"})],-1),Ty=[Ay];function Cy(e,t){return re(),me("div",Sy,Ty)}const Oy=cs(ky,[["render",Cy]]),Py={class:"container pb-16"},Ry=k("h2",{class:"text-2xl font-medium text-gray-800 uppercase mb-6"}," recomended for you ",-1),Ny={class:"grid grid-cols-1 md:grid-cols-4 gap-6"},My={__name:"RecomendedProducts",setup(e){const{products:t,getRecomendedProducts:n}=mt(pt()),{fetchProducts:r}=pt();return r(),(i,s)=>(re(),me("div",Py,[Ry,k("div",Ny,[K(of,{products:X(n)},null,8,["products"])])]))}},Ly={__name:"HomeView",setup(e){return(t,n)=>(re(),me(Te,null,[K(Yb),K(ey),K(sy),K(Ey),K(Oy),K(My)],64))}},kn=pp({history:Nm("/"),routes:[{path:"/",name:"home",component:Ly},{path:"/shop",name:"Shop",component:()=>bt(()=>import("./ShopView.7982c895.js"),["assets/ShopView.7982c895.js","assets/ShopView.1e874c57.css","assets/TheBreadcrumb.b0b6f99f.js"])},{path:"/product/:id",name:"Product",component:()=>bt(()=>import("./ProductView.3ca6f213.js"),["assets/ProductView.3ca6f213.js","assets/ProductView.da12c2aa.css","assets/TheBreadcrumb.b0b6f99f.js"])},{path:"/category/:categoryname",name:"Category",component:()=>bt(()=>import("./CategoryView.9d158471.js"),["assets/CategoryView.9d158471.js","assets/TheBreadcrumb.b0b6f99f.js"])},{path:"/account",name:"Account",component:()=>bt(()=>import("./AccountView.25e96a0c.js"),["assets/AccountView.25e96a0c.js","assets/TheBreadcrumb.b0b6f99f.js","assets/AccountSidebar.1a46ee51.js"])},{path:"/checkout",name:"Checkout",component:()=>bt(()=>import("./CheckoutView.f5f78b48.js"),["assets/CheckoutView.f5f78b48.js","assets/TheBreadcrumb.b0b6f99f.js","assets/index.esm.f75161c6.js"]),meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:()=>bt(()=>import("./LoginView.6e0ab8f8.js"),["assets/LoginView.6e0ab8f8.js","assets/index.esm.f75161c6.js"])},{path:"/register",name:"Register",component:()=>bt(()=>import("./RegisterView.20d8f1c2.js"),["assets/RegisterView.20d8f1c2.js","assets/index.esm.f75161c6.js"])},{path:"/profile",name:"Profile",component:()=>bt(()=>import("./ProfileView.528b51e5.js"),["assets/ProfileView.528b51e5.js","assets/TheBreadcrumb.b0b6f99f.js","assets/AccountSidebar.1a46ee51.js"])},{path:"/wishlist",name:"Wishlist",component:()=>bt(()=>import("./WishlistView.21f28859.js"),["assets/WishlistView.21f28859.js","assets/TheBreadcrumb.b0b6f99f.js","assets/AccountSidebar.1a46ee51.js"])}]});kn.beforeEach((e,t,n)=>{e.name==="Account"&&!En.currentUser?n({name:"Login"}):n()});const na=Ua("user",()=>{const e=we();async function t(s){const{email:a,password:o}=s;try{await Av(En,a,o)}catch(c){switch(c.code){case"auth/email-already-in-use":alert("email already in use");break;case"auth/invalid-email":alert("Invalid email");break;case"auth/operation-not-allowed":alert("Operation not allowed");break;case"auth/weak-password":alert("Weak password");break;default:alert("Something went wrong")}return}e.value=En.currentUser,kn.push("/login")}async function n(s){const{email:a,password:o}=s;try{await Tv(En,a,o)}catch(c){switch(c.code){case"auth/user-not-found":alert("User not found");break;case"auth/wrong-password":alert("Password is incorrect");break;default:alert(c.message)}return}e.value=En.currentUser,kn.push("/account")}function r(){const s=new wt;Zv(af(),s).then(a=>{e.value=a.user,kn.push("/account")}).catch(a=>{console.log(a)})}async function i(){await Cv(En),e.value=null,kn.push("/login")}return{user:e,register:t,login:n,logout:i,signInWithGoogle:r}}),Dy={class:"w-full max-w-xl relative flex"},$y=k("span",{class:"absolute left-4 top-3 text-lg text-gray-400"},[k("i",{class:"fa-solid fa-magnifying-glass"})],-1),Uy=k("button",{class:"bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"}," Search ",-1),Fy={key:0,class:"absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed transition duration-300"},jy=k("img",{src:"/images/icons/sofa.svg",alt:"sofa",class:"w-5 h-5 object-contain"},null,-1),By={class:"ml-6 text-gray-600 text-sm"},zy={__name:"SearchBar",setup(e){mt(pt());const{fetchProducts:t,getSearchProduct:n}=pt();t();const r=we(),i=we();i.value=n(r.value);const s=()=>{i.value=n(r.value)};return(a,o)=>(re(),me("div",Dy,[$y,ih(k("input",{type:"text",name:"search",id:"search",ref:"input",class:"w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none","onUpdate:modelValue":o[0]||(o[0]=c=>r.value=c),onKeyup:s,placeholder:"search"},null,544),[[rm,r.value]]),Uy,r.value?(re(),me("div",Fy,[(re(!0),me(Te,null,Un(i.value,c=>(re(),ur(X(Je),{to:`/product/${c.id}`,key:c.id},{default:Ne(()=>[k("span",{class:"flex items-center px-6 py-3 hover:bg-gray-100 transition",onClick:o[1]||(o[1]=l=>r.value=null)},[jy,k("span",By,Ve(c.title),1)])]),_:2},1032,["to"]))),128))])):zs("",!0)]))}},Hy={class:"py-4 shadow-sm bg-white"},Wy={class:"container flex items-center justify-between"},Vy=k("img",{src:"/images/logo.png",alt:"Logo",class:"w-32"},null,-1),Ky={class:"flex items-center space-x-4"},qy={class:"text-2xl"},Yy=k("div",{class:"text-xs leading-3"},"Cart",-1),Gy={class:"absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs"},Jy={class:"text-2xl"},Xy=k("div",{class:"text-xs leading-3"},"Account",-1),Qy={__name:"TheHeader",setup(e){const{cartItems:t}=mt(Ni());return mt(na()),(n,r)=>{const i=xr("font-awesome-icon");return re(),me("header",Hy,[k("div",Wy,[K(X(Je),{to:"/"},{default:Ne(()=>[Vy]),_:1}),K(zy,{class:"hidden md:flex"}),k("div",Ky,[k("button",{onClick:r[0]||(r[0]=s=>n.$emit("sidebarOpen")),class:"text-center text-gray-700 hover:text-primary transition relative"},[k("div",qy,[K(i,{icon:"fa-solid fa-user-secret"})]),Yy,k("div",Gy,Ve(X(t).length),1)]),K(X(Je),{to:"/account",class:"text-center text-gray-700 hover:text-primary transition relative"},{default:Ne(()=>[k("div",Jy,[K(i,{icon:"fa-regular fa-user"})]),Xy]),_:1})])])])}}},Zy={key:0,class:"col-span-12 md:col-span-9 space-y-4"},e0={class:"w-full md:w-28 thumb"},t0=["src"],n0={class:"w-full md:w-1/3 title"},r0={class:"text-gray-800 text-xl font-medium uppercase"},i0=k("p",{class:"text-gray-500 text-sm"},[Le(" Availability: "),k("span",{class:"text-green-600"},"In Stock")],-1),s0={class:"w-full md:w-auto text-primary text-lg font-semibold unit-price flex justify-between"},a0=k("span",{class:"font-weight-bold inline-block md:hidden"},"Price",-1),o0={class:"w-full md:w-auto flex justify-between text-primary text-lg font-semibold quantity"},c0=k("span",{class:"cartsidebar-tag inline-block md:hidden"},"Qty: ",-1),l0=["onChange"],u0=["selected","value"],f0={class:"w-full md:w-auto flex justify-between text-primary text-lg font-semibold total-price"},d0=k("span",{class:"cartsidebar-tag inline-block md:hidden"},"Total: ",-1),h0=["onClick"],m0=k("i",{class:"fa-solid fa-trash"},null,-1),p0=[m0],g0={key:0},v0=Le("Checkout"),b0={__name:"WishlistItems",setup(e){const{cartItems:t,totalAmount:n}=mt(Ni()),{calculateTotal:r,deleteCartItem:i}=Ni(),s=(a,o)=>{o.quantity=a.target.value,r()};return(a,o)=>X(t)?(re(),me("div",Zy,[(re(!0),me(Te,null,Un(X(t),c=>(re(),me("div",{key:c.id,class:"bg-primary bg-opacity-10 md:bg-white md:bg-opacity-100 cart-product-wrapper flex flex-col md:flex-row items-center justify-between border gap-6 p-4 border-gray-200 rounded"},[k("div",e0,[k("img",{src:c.thumbnail,alt:"product 6",class:"w-full"},null,8,t0)]),k("div",n0,[k("h2",r0,Ve(c.title),1),i0]),k("div",s0,[a0,k("span",null,"$"+Ve(c.price),1)]),k("div",o0,[c0,k("select",{onChange:l=>s(l,c),class:"border-none shadow-none"},[(re(),me(Te,null,Un([1,2,3,4,5,6,7,8,9],l=>k("option",{key:l,selected:l==c.quantity,value:l},Ve(l),9,u0)),64))],40,l0)]),k("div",f0,[d0,Le(" $"+Ve(c.quantity*c.price),1)]),k("div",{onClick:l=>X(i)(c.id),class:"text-gray-600 cursor-pointer hover:text-primary"},p0,8,h0)]))),128)),X(t).length>0?(re(),me("div",g0,"Total: $"+Ve(X(n)),1)):zs("",!0),K(X(Je),{to:"/checkout",onClick:o[0]||(o[0]=c=>a.$emit("cancelModal")),class:"block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"},{default:Ne(()=>[v0]),_:1})])):zs("",!0)}},y0={class:"flex w-full items-center p-4 border-b"},_0=k("img",{src:"/images/logo.png",alt:"Logo",class:"h-auto w-32 mx-auto"},null,-1),w0={class:"container py-16"},I0={class:"mt-12"},x0=Le("View Cart"),E0={__name:"CartSidebar",props:{isOpen:{type:Boolean,required:!0}},setup(e){return(t,n)=>{const r=xr("router-link");return re(),me("aside",{class:Ht(["cartsidebar transform top-0 right-0 w-96 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30",e.isOpen?"translate-x-0":"translate-x-full"])},[k("span",y0,[_0,k("span",{onClick:n[0]||(n[0]=i=>t.$emit("cancelModal")),class:"text-3xl cursor-pointer"},"X")]),k("div",w0,[K(b0,{onCancelModal:n[1]||(n[1]=i=>t.$emit("cancelModal"))}),k("div",I0,[K(r,{to:"/wishlist",onClick:n[2]||(n[2]=i=>t.$emit("cancelModal")),class:"bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary"},{default:Ne(()=>[x0]),_:1})])])],2)}}},k0={class:"bg-gray-800 border-gray-200 dark:bg-gray-900"},S0={class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4"},A0={class:"px-8 py-4 bg-primary flex items-center cursor-pointer relative group"},T0=k("span",{class:"text-white"},[k("i",{class:"fa-solid fa-bars"})],-1),C0=k("span",{class:"capitalize ml-2 text-white"},"All Categories",-1),O0={class:"absolute z-10 w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible"},P0=k("img",{src:"/images/icons/delivery-van.svg",alt:"sofa",class:"w-5 h-5 object-contain"},null,-1),R0={class:"ml-6 text-gray-600 text-sm"},N0=k("span",{class:"sr-only"},"Open main menu",-1),M0=k("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},[k("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})],-1),L0=[N0,M0],D0={class:"font-medium flex flex-col p-0 md:mx-auto mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"},$0=Le("Home"),U0=Le("Shop"),F0={class:"md:ml-auto font-medium flex flex-col p-0 md:flex-row md:space-x-8 mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"},j0=Le("Login"),B0=Le("Logout"),z0={__name:"TheNavigation",setup(e){const{getProductCategories:t}=mt(pt());na();const{user:n}=mt(na()),r=we(!1);return(i,s)=>(re(),me("nav",k0,[k("div",S0,[k("div",A0,[T0,C0,k("div",O0,[(re(!0),me(Te,null,Un(X(t).slice(0,6),a=>(re(),ur(X(Je),{key:a.id,to:`/category/${a}`,class:"flex items-center px-6 py-3 hover:bg-gray-100 transition"},{default:Ne(()=>[P0,k("span",R0,Ve(a),1)]),_:2},1032,["to"]))),128))])]),k("button",{onClick:s[0]||(s[0]=a=>r.value=!r.value),"data-collapse-toggle":"navbar-default",type:"button",class:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-default","aria-expanded":"false"},L0),k("div",{class:Ht([r.value?"block":"hidden","w-full md:w-auto md:flex md:flex-grow"]),id:"navbar-default"},[k("ul",D0,[k("li",null,[K(X(Je),{to:"/",class:"text-gray-200 hover:text-primary transition"},{default:Ne(()=>[$0]),_:1})]),k("li",null,[K(X(Je),{to:"/shop",class:"text-gray-200 hover:text-primary transition"},{default:Ne(()=>[U0]),_:1})])]),k("ul",F0,[k("li",null,[X(n)?(re(),ur(X(Je),{key:1,to:"/login",class:"block py-2 md:pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white","aria-current":"page"},{default:Ne(()=>[B0]),_:1})):(re(),ur(X(Je),{key:0,to:"/login",class:"block py-2 md:pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white","aria-current":"page"},{default:Ne(()=>[j0]),_:1}))])])],2)])]))}},H0={},W0=Da('<footer class="bg-white pt-16 pb-12 border-t border-gray-100"><div class="container grid grid-cols-1 md:grid-cols-3"><div class="col-span-1 space-y-8 pr-4"><img src="/images/logo.png" alt="logo" class="w-24"><div class="mr-2"><p class="text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic? </p></div><div class="flex space-x-6"><a href="#" class="text-gray-400 hover:text-gray-500"><i class="fa-brands fa-facebook-square"></i></a><a href="#" class="text-gray-400 hover:text-gray-500"><i class="fa-brands fa-instagram-square"></i></a><a href="#" class="text-gray-400 hover:text-gray-500"><i class="fa-brands fa-twitter-square"></i></a><a href="#" class="text-gray-400 hover:text-gray-500"><i class="fa-brands fa-github-square"></i></a></div></div><div class="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider"> Solutions </h3><div class="mt-4 space-y-4"><a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Marketing</a><a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Analitycs</a><a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Commerce</a><a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Insights</a></div></div><div><h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider"> Support </h3><div class="mt-4 space-y-4"><a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Pricing</a><a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Documentation</a><a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Guides</a><a href="#" class="text-base text-gray-500 hover:text-gray-900 block">API Status</a></div></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider"> Solutions </h3><div class="mt-4 space-y-4"><a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Marketing</a><a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Analitycs</a><a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Commerce</a><a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Insights</a></div></div><div><h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider"> Support </h3><div class="mt-4 space-y-4"><a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Pricing</a><a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Documentation</a><a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Guides</a><a href="#" class="text-base text-gray-500 hover:text-gray-900 block">API Status</a></div></div></div></div></div></footer><div class="bg-gray-800 py-4"><div class="container flex flex-col md:flex-row items-center justify-between"><p class="text-white text-center md:text-left"> \xA9 TailCommerce - All Right Reserved | vue developed by Shahadat </p><img src="/images/methods.png" alt="methods" class="h-5"></div></div>',2);function V0(e,t){return W0}const K0=cs(H0,[["render",V0]]),q0={__name:"App",setup(e){const t=we(!1),n=()=>{t.value=!0},r=()=>{t.value=!1};return(i,s)=>(re(),me(Te,null,[K(Qy,{onSidebarOpen:n}),K(E0,{isOpen:t.value,onCancelModal:r},null,8,["isOpen"]),K(z0),K(X(yu)),K(K0)],64))}};function Dc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dc(Object(n),!0).forEach(function(r){Ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ji(e){return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ji(e)}function Y0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G0(e,t,n){return t&&$c(e.prototype,t),n&&$c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Za(e,t){return X0(e)||Z0(e,t)||cf(e,t)||t_()}function Jr(e){return J0(e)||Q0(e)||cf(e)||e_()}function J0(e){if(Array.isArray(e))return ra(e)}function X0(e){if(Array.isArray(e))return e}function Q0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Z0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,o;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(c){s=!0,o=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw o}}return r}}function cf(e,t){if(!!e){if(typeof e=="string")return ra(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ra(e,t)}}function ra(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function e_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Uc=function(){},eo={},lf={},uf=null,ff={mark:Uc,measure:Uc};try{typeof window<"u"&&(eo=window),typeof document<"u"&&(lf=document),typeof MutationObserver<"u"&&(uf=MutationObserver),typeof performance<"u"&&(ff=performance)}catch{}var n_=eo.navigator||{},Fc=n_.userAgent,jc=Fc===void 0?"":Fc,Yt=eo,be=lf,Bc=uf,si=ff;Yt.document;var Pt=!!be.documentElement&&!!be.head&&typeof be.addEventListener=="function"&&typeof be.createElement=="function",df=~jc.indexOf("MSIE")||~jc.indexOf("Trident/"),ai,oi,ci,li,ui,At="___FONT_AWESOME___",ia=16,hf="fa",mf="svg-inline--fa",vn="data-fa-i2svg",sa="data-fa-pseudo-element",r_="data-fa-pseudo-element-pending",to="data-prefix",no="data-icon",zc="fontawesome-i2svg",i_="async",s_=["HTML","HEAD","STYLE","SCRIPT"],pf=function(){try{return!0}catch{return!1}}(),ve="classic",ye="sharp",ro=[ve,ye];function Xr(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ve]}})}var Nr=Xr((ai={},Ee(ai,ve,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ee(ai,ye,{fa:"solid",fass:"solid","fa-solid":"solid"}),ai)),Mr=Xr((oi={},Ee(oi,ve,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ee(oi,ye,{solid:"fass"}),oi)),Lr=Xr((ci={},Ee(ci,ve,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ee(ci,ye,{fass:"fa-solid"}),ci)),a_=Xr((li={},Ee(li,ve,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ee(li,ye,{"fa-solid":"fass"}),li)),o_=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,gf="fa-layers-text",c_=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,l_=Xr((ui={},Ee(ui,ve,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ee(ui,ye,{900:"fass"}),ui)),vf=[1,2,3,4,5,6,7,8,9,10],u_=vf.concat([11,12,13,14,15,16,17,18,19,20]),f_=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],on={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Dr=new Set;Object.keys(Mr[ve]).map(Dr.add.bind(Dr));Object.keys(Mr[ye]).map(Dr.add.bind(Dr));var d_=[].concat(ro,Jr(Dr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",on.GROUP,on.SWAP_OPACITY,on.PRIMARY,on.SECONDARY]).concat(vf.map(function(e){return"".concat(e,"x")})).concat(u_.map(function(e){return"w-".concat(e)})),pr=Yt.FontAwesomeConfig||{};function h_(e){var t=be.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function m_(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(be&&typeof be.querySelector=="function"){var p_=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];p_.forEach(function(e){var t=Za(e,2),n=t[0],r=t[1],i=m_(h_(n));i!=null&&(pr[r]=i)})}var bf={styleDefault:"solid",familyDefault:"classic",cssPrefix:hf,replacementClass:mf,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pr.familyPrefix&&(pr.cssPrefix=pr.familyPrefix);var Vn=N(N({},bf),pr);Vn.autoReplaceSvg||(Vn.observeMutations=!1);var D={};Object.keys(bf).forEach(function(e){Object.defineProperty(D,e,{enumerable:!0,set:function(n){Vn[e]=n,gr.forEach(function(r){return r(D)})},get:function(){return Vn[e]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(t){Vn.cssPrefix=t,gr.forEach(function(n){return n(D)})},get:function(){return Vn.cssPrefix}});Yt.FontAwesomeConfig=D;var gr=[];function g_(e){return gr.push(e),function(){gr.splice(gr.indexOf(e),1)}}var Dt=ia,lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function v_(e){if(!(!e||!Pt)){var t=be.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=be.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return be.head.insertBefore(t,r),e}}var b_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $r(){for(var e=12,t="";e-- >0;)t+=b_[Math.random()*62|0];return t}function Zn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function io(e){return e.classList?Zn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function yf(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function y_(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(yf(e[n]),'" ')},"").trim()}function ls(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function so(e){return e.size!==lt.size||e.x!==lt.x||e.y!==lt.y||e.rotate!==lt.rotate||e.flipX||e.flipY}function __(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(a," ").concat(o)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function w_(e){var t=e.transform,n=e.width,r=n===void 0?ia:n,i=e.height,s=i===void 0?ia:i,a=e.startCentered,o=a===void 0?!1:a,c="";return o&&df?c+="translate(".concat(t.x/Dt-r/2,"em, ").concat(t.y/Dt-s/2,"em) "):o?c+="translate(calc(-50% + ".concat(t.x/Dt,"em), calc(-50% + ").concat(t.y/Dt,"em)) "):c+="translate(".concat(t.x/Dt,"em, ").concat(t.y/Dt,"em) "),c+="scale(".concat(t.size/Dt*(t.flipX?-1:1),", ").concat(t.size/Dt*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var I_=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function _f(){var e=hf,t=mf,n=D.cssPrefix,r=D.replacementClass,i=I_;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var Hc=!1;function As(){D.autoAddCss&&!Hc&&(v_(_f()),Hc=!0)}var x_={mixout:function(){return{dom:{css:_f,insertCss:As}}},hooks:function(){return{beforeDOMElementCreation:function(){As()},beforeI2svg:function(){As()}}}},Tt=Yt||{};Tt[At]||(Tt[At]={});Tt[At].styles||(Tt[At].styles={});Tt[At].hooks||(Tt[At].hooks={});Tt[At].shims||(Tt[At].shims=[]);var Ze=Tt[At],wf=[],E_=function e(){be.removeEventListener("DOMContentLoaded",e),Bi=1,wf.map(function(t){return t()})},Bi=!1;Pt&&(Bi=(be.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(be.readyState),Bi||be.addEventListener("DOMContentLoaded",E_));function k_(e){!Pt||(Bi?setTimeout(e,0):wf.push(e))}function Qr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?yf(e):"<".concat(t," ").concat(y_(r),">").concat(s.map(Qr).join(""),"</").concat(t,">")}function Wc(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var S_=function(t,n){return function(r,i,s,a){return t.call(n,r,i,s,a)}},Ts=function(t,n,r,i){var s=Object.keys(t),a=s.length,o=i!==void 0?S_(n,i):n,c,l,u;for(r===void 0?(c=1,u=t[s[0]]):(c=0,u=r);c<a;c++)l=s[c],u=o(u,t[l],l,t);return u};function A_(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function aa(e){var t=A_(e);return t.length===1?t[0].toString(16):null}function T_(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Vc(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function oa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Vc(t);typeof Ze.hooks.addPack=="function"&&!i?Ze.hooks.addPack(e,Vc(t)):Ze.styles[e]=N(N({},Ze.styles[e]||{}),s),e==="fas"&&oa("fa",t)}var fi,di,hi,Sn=Ze.styles,C_=Ze.shims,O_=(fi={},Ee(fi,ve,Object.values(Lr[ve])),Ee(fi,ye,Object.values(Lr[ye])),fi),ao=null,If={},xf={},Ef={},kf={},Sf={},P_=(di={},Ee(di,ve,Object.keys(Nr[ve])),Ee(di,ye,Object.keys(Nr[ye])),di);function R_(e){return~d_.indexOf(e)}function N_(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!R_(i)?i:null}var Af=function(){var t=function(s){return Ts(Sn,function(a,o,c){return a[c]=Ts(o,s,{}),a},{})};If=t(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var o=s[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=a})}return i}),xf=t(function(i,s,a){if(i[a]=a,s[2]){var o=s[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=a})}return i}),Sf=t(function(i,s,a){var o=s[2];return i[a]=a,o.forEach(function(c){i[c]=a}),i});var n="far"in Sn||D.autoFetchSvg,r=Ts(C_,function(i,s){var a=s[0],o=s[1],c=s[2];return o==="far"&&!n&&(o="fas"),typeof a=="string"&&(i.names[a]={prefix:o,iconName:c}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});Ef=r.names,kf=r.unicodes,ao=us(D.styleDefault,{family:D.familyDefault})};g_(function(e){ao=us(e.styleDefault,{family:D.familyDefault})});Af();function oo(e,t){return(If[e]||{})[t]}function M_(e,t){return(xf[e]||{})[t]}function cn(e,t){return(Sf[e]||{})[t]}function Tf(e){return Ef[e]||{prefix:null,iconName:null}}function L_(e){var t=kf[e],n=oo("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Gt(){return ao}var co=function(){return{prefix:null,iconName:null,rest:[]}};function us(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ve:n,i=Nr[r][e],s=Mr[r][e]||Mr[r][i],a=e in Ze.styles?e:null;return s||a||null}var Kc=(hi={},Ee(hi,ve,Object.keys(Lr[ve])),Ee(hi,ye,Object.keys(Lr[ye])),hi);function fs(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},Ee(t,ve,"".concat(D.cssPrefix,"-").concat(ve)),Ee(t,ye,"".concat(D.cssPrefix,"-").concat(ye)),t),a=null,o=ve;(e.includes(s[ve])||e.some(function(l){return Kc[ve].includes(l)}))&&(o=ve),(e.includes(s[ye])||e.some(function(l){return Kc[ye].includes(l)}))&&(o=ye);var c=e.reduce(function(l,u){var f=N_(D.cssPrefix,u);if(Sn[u]?(u=O_[o].includes(u)?a_[o][u]:u,a=u,l.prefix=u):P_[o].indexOf(u)>-1?(a=u,l.prefix=us(u,{family:o})):f?l.iconName=f:u!==D.replacementClass&&u!==s[ve]&&u!==s[ye]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var h=a==="fa"?Tf(l.iconName):{},p=cn(l.prefix,l.iconName);h.prefix&&(a=null),l.iconName=h.iconName||p||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!Sn.far&&Sn.fas&&!D.autoFetchSvg&&(l.prefix="fas")}return l},co());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===ye&&(Sn.fass||D.autoFetchSvg)&&(c.prefix="fass",c.iconName=cn(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||a==="fa")&&(c.prefix=Gt()||"fas"),c}var D_=function(){function e(){Y0(this,e),this.definitions={}}return G0(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){n.definitions[o]=N(N({},n.definitions[o]||{}),a[o]),oa(o,a[o]);var c=Lr[ve][o];c&&oa(c,a[o]),Af()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],o=a.prefix,c=a.iconName,l=a.icon,u=l[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[o][f]=l)}),n[o][c]=l}),n}}]),e}(),qc=[],An={},Ln={},$_=Object.keys(Ln);function U_(e,t){var n=t.mixoutsTo;return qc=e,An={},Object.keys(Ln).forEach(function(r){$_.indexOf(r)===-1&&delete Ln[r]}),qc.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),ji(i[a])==="object"&&Object.keys(i[a]).forEach(function(o){n[a]||(n[a]={}),n[a][o]=i[a][o]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){An[a]||(An[a]=[]),An[a].push(s[a])})}r.provides&&r.provides(Ln)}),n}function ca(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=An[e]||[];return s.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function bn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=An[e]||[];i.forEach(function(s){s.apply(null,n)})}function Ct(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ln[e]?Ln[e].apply(null,t):void 0}function la(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Gt();if(!!t)return t=cn(n,t)||t,Wc(Cf.definitions,n,t)||Wc(Ze.styles,n,t)}var Cf=new D_,F_=function(){D.autoReplaceSvg=!1,D.observeMutations=!1,bn("noAuto")},j_={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Pt?(bn("beforeI2svg",t),Ct("pseudoElements2svg",t),Ct("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,k_(function(){z_({autoReplaceSvgRoot:n}),bn("watch",t)})}},B_={icon:function(t){if(t===null)return null;if(ji(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:cn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=us(t[0]);return{prefix:r,iconName:cn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(D.cssPrefix,"-"))>-1||t.match(o_))){var i=fs(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Gt(),iconName:cn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Gt();return{prefix:s,iconName:cn(s,t)||t}}}},ze={noAuto:F_,config:D,dom:j_,parse:B_,library:Cf,findIconDefinition:la,toHtml:Qr},z_=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?be:n;(Object.keys(Ze.styles).length>0||D.autoFetchSvg)&&Pt&&D.autoReplaceSvg&&ze.dom.i2svg({node:r})};function ds(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Qr(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Pt){var r=be.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function H_(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,a=e.transform;if(so(a)&&n.found&&!r.found){var o=n.width,c=n.height,l={x:o/c/2,y:.5};i.style=ls(N(N({},s),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function W_(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,a=s===!0?"".concat(t,"-").concat(D.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},i),{},{id:a}),children:r}]}]}function lo(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,a=e.transform,o=e.symbol,c=e.title,l=e.maskId,u=e.titleId,f=e.extra,h=e.watchable,p=h===void 0?!1:h,I=r.found?r:n,M=I.width,T=I.height,v=i==="fak",y=[D.replacementClass,s?"".concat(D.cssPrefix,"-").concat(s):""].filter(function(te){return f.classes.indexOf(te)===-1}).filter(function(te){return te!==""||!!te}).concat(f.classes).join(" "),E={children:[],attributes:N(N({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:y,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(T)})},R=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(M/T*16*.0625,"em")}:{};p&&(E.attributes[vn]=""),c&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||$r())},children:[c]}),delete E.attributes.title);var B=N(N({},E),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:a,symbol:o,styles:N(N({},R),f.styles)}),Q=r.found&&n.found?Ct("generateAbstractMask",B)||{children:[],attributes:{}}:Ct("generateAbstractIcon",B)||{children:[],attributes:{}},H=Q.children,J=Q.attributes;return B.children=H,B.attributes=J,o?W_(B):H_(B)}function Yc(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,a=e.extra,o=e.watchable,c=o===void 0?!1:o,l=N(N(N({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});c&&(l[vn]="");var u=N({},a.styles);so(i)&&(u.transform=w_({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=ls(u);f.length>0&&(l.style=f);var h=[];return h.push({tag:"span",attributes:l,children:[t]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function V_(e){var t=e.content,n=e.title,r=e.extra,i=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=ls(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Cs=Ze.styles;function ua(e){var t=e[0],n=e[1],r=e.slice(4),i=Za(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(on.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(on.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(on.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:a}}var K_={found:!1,width:512,height:512};function q_(e,t){!pf&&!D.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function fa(e,t){var n=t;return t==="fa"&&D.styleDefault!==null&&(t=Gt()),new Promise(function(r,i){if(Ct("missingIconAbstract"),n==="fa"){var s=Tf(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Cs[t]&&Cs[t][e]){var a=Cs[t][e];return r(ua(a))}q_(e,t),r(N(N({},K_),{},{icon:D.showMissingIcons&&e?Ct("missingIconAbstract")||{}:{}}))})}var Gc=function(){},da=D.measurePerformance&&si&&si.mark&&si.measure?si:{mark:Gc,measure:Gc},cr='FA "6.2.0"',Y_=function(t){return da.mark("".concat(cr," ").concat(t," begins")),function(){return Of(t)}},Of=function(t){da.mark("".concat(cr," ").concat(t," ends")),da.measure("".concat(cr," ").concat(t),"".concat(cr," ").concat(t," begins"),"".concat(cr," ").concat(t," ends"))},uo={begin:Y_,end:Of},Ei=function(){};function Jc(e){var t=e.getAttribute?e.getAttribute(vn):null;return typeof t=="string"}function G_(e){var t=e.getAttribute?e.getAttribute(to):null,n=e.getAttribute?e.getAttribute(no):null;return t&&n}function J_(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(D.replacementClass)}function X_(){if(D.autoReplaceSvg===!0)return ki.replace;var e=ki[D.autoReplaceSvg];return e||ki.replace}function Q_(e){return be.createElementNS("http://www.w3.org/2000/svg",e)}function Z_(e){return be.createElement(e)}function Pf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Q_:Z_:n;if(typeof e=="string")return be.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var s=e.children||[];return s.forEach(function(a){i.appendChild(Pf(a,{ceFn:r}))}),i}function e1(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ki={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Pf(i),n)}),n.getAttribute(vn)===null&&D.keepOriginalSource){var r=be.createComment(e1(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~io(n).indexOf(D.replacementClass))return ki.replace(t);var i=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(o,c){return c===D.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(o){return Qr(o)}).join(`
`);n.setAttribute(vn,""),n.innerHTML=a}};function Xc(e){e()}function Rf(e,t){var n=typeof t=="function"?t:Ei;if(e.length===0)n();else{var r=Xc;D.mutateApproach===i_&&(r=Yt.requestAnimationFrame||Xc),r(function(){var i=X_(),s=uo.begin("mutate");e.map(i),s(),n()})}}var fo=!1;function Nf(){fo=!0}function ha(){fo=!1}var zi=null;function Qc(e){if(!!Bc&&!!D.observeMutations){var t=e.treeCallback,n=t===void 0?Ei:t,r=e.nodeCallback,i=r===void 0?Ei:r,s=e.pseudoElementsCallback,a=s===void 0?Ei:s,o=e.observeMutationsRoot,c=o===void 0?be:o;zi=new Bc(function(l){if(!fo){var u=Gt();Zn(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Jc(f.addedNodes[0])&&(D.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&D.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&Jc(f.target)&&~f_.indexOf(f.attributeName))if(f.attributeName==="class"&&G_(f.target)){var h=fs(io(f.target)),p=h.prefix,I=h.iconName;f.target.setAttribute(to,p||u),I&&f.target.setAttribute(no,I)}else J_(f.target)&&i(f.target)})}}),Pt&&zi.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function t1(){!zi||zi.disconnect()}function n1(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(r[a]=o.join(":").trim()),r},{})),n}function r1(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=fs(io(e));return i.prefix||(i.prefix=Gt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=M_(i.prefix,e.innerText)||oo(i.prefix,aa(e.innerText))),!i.iconName&&D.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function i1(e){var t=Zn(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return D.autoA11y&&(n?t["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||$r()):(t["aria-hidden"]="true",t.focusable="false")),t}function s1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Zc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=r1(e),r=n.iconName,i=n.prefix,s=n.rest,a=i1(e),o=ca("parseNodeAttributes",{},e),c=t.styleParser?n1(e):[];return N({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:a}},o)}var a1=Ze.styles;function Mf(e){var t=D.autoReplaceSvg==="nest"?Zc(e,{styleParser:!1}):Zc(e);return~t.extra.classes.indexOf(gf)?Ct("generateLayersText",e,t):Ct("generateSvgReplacementMutation",e,t)}var Jt=new Set;ro.map(function(e){Jt.add("fa-".concat(e))});Object.keys(Nr[ve]).map(Jt.add.bind(Jt));Object.keys(Nr[ye]).map(Jt.add.bind(Jt));Jt=Jr(Jt);function el(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Pt)return Promise.resolve();var n=be.documentElement.classList,r=function(f){return n.add("".concat(zc,"-").concat(f))},i=function(f){return n.remove("".concat(zc,"-").concat(f))},s=D.autoFetchSvg?Jt:ro.map(function(u){return"fa-".concat(u)}).concat(Object.keys(a1));s.includes("fa")||s.push("fa");var a=[".".concat(gf,":not([").concat(vn,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(vn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=Zn(e.querySelectorAll(a))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var c=uo.begin("onTree"),l=o.reduce(function(u,f){try{var h=Mf(f);h&&u.push(h)}catch(p){pf||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(h){Rf(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(h){c(),f(h)})})}function o1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mf(e).then(function(n){n&&Rf([n],t)})}function c1(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:la(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:la(i||{})),e(r,N(N({},n),{},{mask:i}))}}var l1=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?lt:r,s=n.symbol,a=s===void 0?!1:s,o=n.mask,c=o===void 0?null:o,l=n.maskId,u=l===void 0?null:l,f=n.title,h=f===void 0?null:f,p=n.titleId,I=p===void 0?null:p,M=n.classes,T=M===void 0?[]:M,v=n.attributes,y=v===void 0?{}:v,E=n.styles,R=E===void 0?{}:E;if(!!t){var B=t.prefix,Q=t.iconName,H=t.icon;return ds(N({type:"icon"},t),function(){return bn("beforeDOMElementCreation",{iconDefinition:t,params:n}),D.autoA11y&&(h?y["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(I||$r()):(y["aria-hidden"]="true",y.focusable="false")),lo({icons:{main:ua(H),mask:c?ua(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:Q,transform:N(N({},lt),i),symbol:a,title:h,maskId:u,titleId:I,extra:{attributes:y,styles:R,classes:T}})})}},u1={mixout:function(){return{icon:c1(l1)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=el,n.nodeCallback=o1,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?be:r,s=n.callback,a=s===void 0?function(){}:s;return el(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,o=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,h=r.extra;return new Promise(function(p,I){Promise.all([fa(i,o),u.iconName?fa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var T=Za(M,2),v=T[0],y=T[1];p([n,lo({icons:{main:v,mask:y},prefix:o,iconName:i,transform:c,symbol:l,maskId:f,title:s,titleId:a,extra:h,watchable:!0})])}).catch(I)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,o=n.styles,c=ls(o);c.length>0&&(i.style=c);var l;return so(a)&&(l=Ct("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},f1={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return ds({type:"layer"},function(){bn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(o){Array.isArray(o)?o.map(function(c){a=a.concat(c.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers")].concat(Jr(s)).join(" ")},children:a}]})}}}},d1={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,o=a===void 0?[]:a,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return ds({type:"counter",content:n},function(){return bn("beforeDOMElementCreation",{content:n,params:r}),V_({content:n.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat(D.cssPrefix,"-layers-counter")].concat(Jr(o))}})})}}}},h1={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?lt:i,a=r.title,o=a===void 0?null:a,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,h=r.styles,p=h===void 0?{}:h;return ds({type:"text",content:n},function(){return bn("beforeDOMElementCreation",{content:n,params:r}),Yc({content:n,transform:N(N({},lt),s),title:o,extra:{attributes:f,styles:p,classes:["".concat(D.cssPrefix,"-layers-text")].concat(Jr(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,o=null,c=null;if(df){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/l,c=u.height/l}return D.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,Yc({content:n.innerHTML,width:o,height:c,transform:s,title:i,extra:a,watchable:!0})])}}},m1=new RegExp('"',"ug"),tl=[1105920,1112319];function p1(e){var t=e.replace(m1,""),n=T_(t,0),r=n>=tl[0]&&n<=tl[1],i=t.length===2?t[0]===t[1]:!1;return{value:aa(i?t[0]:t),isSecondary:r||i}}function nl(e,t){var n="".concat(r_).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=Zn(e.children),a=s.filter(function(H){return H.getAttribute(sa)===t})[0],o=Yt.getComputedStyle(e,t),c=o.getPropertyValue("font-family").match(c_),l=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!c)return e.removeChild(a),r();if(c&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),h=~["Sharp"].indexOf(c[2])?ye:ve,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Mr[h][c[2].toLowerCase()]:l_[h][l],I=p1(f),M=I.value,T=I.isSecondary,v=c[0].startsWith("FontAwesome"),y=oo(p,M),E=y;if(v){var R=L_(M);R.iconName&&R.prefix&&(y=R.iconName,p=R.prefix)}if(y&&!T&&(!a||a.getAttribute(to)!==p||a.getAttribute(no)!==E)){e.setAttribute(n,E),a&&e.removeChild(a);var B=s1(),Q=B.extra;Q.attributes[sa]=t,fa(y,p).then(function(H){var J=lo(N(N({},B),{},{icons:{main:H,mask:co()},prefix:p,iconName:E,extra:Q,watchable:!0})),te=be.createElement("svg");t==="::before"?e.insertBefore(te,e.firstChild):e.appendChild(te),te.outerHTML=J.map(function(ke){return Qr(ke)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function g1(e){return Promise.all([nl(e,"::before"),nl(e,"::after")])}function v1(e){return e.parentNode!==document.head&&!~s_.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(sa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function rl(e){if(!!Pt)return new Promise(function(t,n){var r=Zn(e.querySelectorAll("*")).filter(v1).map(g1),i=uo.begin("searchPseudoElements");Nf(),Promise.all(r).then(function(){i(),ha(),t()}).catch(function(){i(),ha(),n()})})}var b1={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=rl,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?be:r;D.searchPseudoElements&&rl(i)}}},il=!1,y1={mixout:function(){return{dom:{unwatch:function(){Nf(),il=!0}}}},hooks:function(){return{bootstrap:function(){Qc(ca("mutationObserverCallbacks",{}))},noAuto:function(){t1()},watch:function(n){var r=n.observeMutationsRoot;il?ha():Qc(ca("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},sl=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return r.flipX=!0,r;if(a&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(a){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},_1={mixout:function(){return{parse:{transform:function(n){return sl(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=sl(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},h={transform:"translate(".concat(a/2*-1," -256)")},p={outer:o,inner:f,path:h};return{tag:"g",attributes:N({},p.outer),children:[{tag:"g",attributes:N({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),p.path)}]}]}}}},Os={x:0,y:0,width:"100%",height:"100%"};function al(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function w1(e){return e.tag==="g"?e.children:[e]}var I1={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?fs(i.split(" ").map(function(a){return a.trim()})):co();return s.prefix||(s.prefix=Gt()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,o=n.maskId,c=n.transform,l=s.width,u=s.icon,f=a.width,h=a.icon,p=__({transform:c,containerWidth:f,iconWidth:l}),I={tag:"rect",attributes:N(N({},Os),{},{fill:"white"})},M=u.children?{children:u.children.map(al)}:{},T={tag:"g",attributes:N({},p.inner),children:[al(N({tag:u.tag,attributes:N(N({},u.attributes),p.path)},M))]},v={tag:"g",attributes:N({},p.outer),children:[T]},y="mask-".concat(o||$r()),E="clip-".concat(o||$r()),R={tag:"mask",attributes:N(N({},Os),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,v]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:w1(h)},R]};return r.push(B,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(y,")")},Os)}),{children:r,attributes:i}}}},x1={provides:function(t){var n=!1;Yt.matchMedia&&(n=Yt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=N(N({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:N(N({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:N(N({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:N(N({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},E1={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},k1=[x_,u1,f1,d1,h1,b1,y1,_1,I1,x1,E1];U_(k1,{mixoutsTo:ze});ze.noAuto;var Lf=ze.config,er=ze.library;ze.dom;var Hi=ze.parse;ze.findIconDefinition;ze.toHtml;var S1=ze.icon;ze.layer;var A1=ze.text;ze.counter;function ol(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ol(Object(n),!0).forEach(function(r){De(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ol(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wi(e){return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wi(e)}function De(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function C1(e,t){if(e==null)return{};var n=T1(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function ma(e){return O1(e)||P1(e)||R1(e)||N1()}function O1(e){if(Array.isArray(e))return pa(e)}function P1(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function R1(e,t){if(!!e){if(typeof e=="string")return pa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pa(e,t)}}function pa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var M1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Df={exports:{}};(function(e){(function(t){var n=function(v,y,E){if(!l(y)||f(y)||h(y)||p(y)||c(y))return y;var R,B=0,Q=0;if(u(y))for(R=[],Q=y.length;B<Q;B++)R.push(n(v,y[B],E));else{R={};for(var H in y)Object.prototype.hasOwnProperty.call(y,H)&&(R[v(H,E)]=n(v,y[H],E))}return R},r=function(v,y){y=y||{};var E=y.separator||"_",R=y.split||/(?=[A-Z])/;return v.split(R).join(E)},i=function(v){return I(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(y,E){return E?E.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var y=i(v);return y.substr(0,1).toUpperCase()+y.substr(1)},a=function(v,y){return r(v,y).toLowerCase()},o=Object.prototype.toString,c=function(v){return typeof v=="function"},l=function(v){return v===Object(v)},u=function(v){return o.call(v)=="[object Array]"},f=function(v){return o.call(v)=="[object Date]"},h=function(v){return o.call(v)=="[object RegExp]"},p=function(v){return o.call(v)=="[object Boolean]"},I=function(v){return v=v-0,v===v},M=function(v,y){var E=y&&"process"in y?y.process:y;return typeof E!="function"?v:function(R,B){return E(R,v,B)}},T={camelize:i,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(v,y){return n(M(i,y),v)},decamelizeKeys:function(v,y){return n(M(a,y),v,y)},pascalizeKeys:function(v,y){return n(M(s,y),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(M1)})(Df);var L1=Df.exports,D1=["class","style"];function $1(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=L1.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function U1(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ho(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return ho(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,l){var u=e.attributes[l];switch(l){case"class":c.class=U1(u);break;case"style":c.style=$1(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,o=C1(n,D1);return ts(e.tag,Xe(Xe(Xe({},t),{},{class:i.class,style:Xe(Xe({},i.style),a)},i.attrs),o),r)}var $f=!1;try{$f=!0}catch{}function F1(){if(!$f&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function vr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?De({},e,t):{}}function j1(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},De(t,"fa-".concat(e.size),e.size!==null),De(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),De(t,"fa-pull-".concat(e.pull),e.pull!==null),De(t,"fa-swap-opacity",e.swapOpacity),De(t,"fa-bounce",e.bounce),De(t,"fa-shake",e.shake),De(t,"fa-beat",e.beat),De(t,"fa-fade",e.fade),De(t,"fa-beat-fade",e.beatFade),De(t,"fa-flash",e.flash),De(t,"fa-spin-pulse",e.spinPulse),De(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function cl(e){if(e&&Wi(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Hi.icon)return Hi.icon(e);if(e===null)return null;if(Wi(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var B1=jr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=ie(function(){return cl(t.icon)}),s=ie(function(){return vr("classes",j1(t))}),a=ie(function(){return vr("transform",typeof t.transform=="string"?Hi.transform(t.transform):t.transform)}),o=ie(function(){return vr("mask",cl(t.mask))}),c=ie(function(){return S1(i.value,Xe(Xe(Xe(Xe({},s.value),a.value),o.value),{},{symbol:t.symbol,title:t.title}))});Pn(c,function(u){if(!u)return F1("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var l=ie(function(){return c.value?ho(c.value.abstract[0],{},r):null});return function(){return l.value}}});jr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,i=Lf.familyPrefix,s=ie(function(){return["".concat(i,"-layers")].concat(ma(t.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return ts("div",{class:s.value},r.default?r.default():[])}}});jr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,i=Lf.familyPrefix,s=ie(function(){return vr("classes",[].concat(ma(t.counter?["".concat(i,"-layers-counter")]:[]),ma(t.position?["".concat(i,"-layers-").concat(t.position)]:[])))}),a=ie(function(){return vr("transform",typeof t.transform=="string"?Hi.transform(t.transform):t.transform)}),o=ie(function(){var l=A1(t.value.toString(),Xe(Xe({},a.value),s.value)),u=l.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=ie(function(){return ho(o.value,{},r)});return function(){return c.value}}});var z1={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]},H1={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},W1={prefix:"fas",iconName:"grip-vertical",icon:[320,512,[],"f58e","M40 352c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0zm192 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0zM40 320l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40zM232 192c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0zM40 160l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40L40 32C17.9 32 0 49.9 0 72l0 48c0 22.1 17.9 40 40 40zM232 32c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0z"]},V1={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"]},K1={prefix:"far",iconName:"user",icon:[448,512,[128100,62144],"f007","M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"]},q1={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]};er.add(H1);er.add(q1);er.add(V1);er.add(K1);er.add(z1);er.add(W1);const Y1=fm(),hs=cm(q0);hs.use(Y1);hs.use(kn);hs.component("font-awesome-icon",B1);hs.mount("#app");export{Jd as A,Zd as B,gi as C,Xd as D,ie as E,Te as F,Ne as G,ur as H,Q1 as I,Ni as J,Le as K,na as L,X1 as M,eu as N,Gd as O,of as P,Jn as Q,Et as R,Dn as S,ut as T,b0 as U,cs as _,k as a,X as b,me as c,rm as d,Ud as e,we as f,Pn as g,J1 as h,_e as i,Ht as j,K as k,zs as l,xr as m,va as n,re as o,$d as p,Da as q,Un as r,mt as s,Ve as t,pt as u,G1 as v,ih as w,ts as x,Qd as y,Oa as z};
