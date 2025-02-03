var Qe=e=>{throw TypeError(e)};var Bt=(e,t,n)=>t.has(e)||Qe("Cannot "+n);var k=(e,t,n)=>(Bt(e,t,"read from private field"),n?n.call(e):t.get(e)),P=(e,t,n)=>t.has(e)?Qe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{aH as de,y as qt,aG as Gt,aj as et,ak as C,l as O,m as N,al as Mt}from"./ach0CUkZ.js";function Ht(e,t,n){if(e==null)return t(void 0),de;const r=qt(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}const V=[];function De(e,t=de){let n=null;const r=new Set;function a(o){if(Gt(e,o)&&(e=o,n)){const c=!V.length;for(const l of r)l[1](),V.push(l,e);if(c){for(let l=0;l<V.length;l+=2)V[l][0](V[l+1]);V.length=0}}}function s(o){a(o(e))}function i(o,c=de){const l=[o,c];return r.add(l),r.size===1&&(n=t(a,s)||de),o(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}function Mn(e){let t;return Ht(e,n=>t=n)(),t}new URL("sveltekit-internal://");function Kt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function Wt(e){return e.split("%25").map(decodeURI).join("%25")}function Yt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function Te({href:e}){return e.split("#")[0]}function zt(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}const Jt="/__data.json",Xt=".html__data.json";function Zt(e){return e.endsWith(".html")?e.replace(/\.html$/,Xt):e.replace(/\/$/,"")+Jt}function Qt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function en(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const tn=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&Y.delete(Fe(e)),tn(e,t));const Y=new Map;function nn(e,t){const n=Fe(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&Y.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=en(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function rn(e,t,n){if(Y.size>0){const r=Fe(e,n),a=Y.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);Y.delete(r)}}return window.fetch(t,n)}function Fe(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${Qt(...a)}"]`}return r}const an=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function on(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${cn(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return xe(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return xe(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const h=an.exec(c),[,u,y,d,m]=h;return t.push({name:d,matcher:m,optional:!!u,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return xe(c)}).join("")}).join("")}/?$`),params:t}}function sn(e){return!/^\([^)]+\)$/.test(e)}function cn(e){return e.slice(1).split("/").filter(sn)}function ln(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(h=>h).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const h=t[o+1],u=a[o+1];h&&!h.rest&&h.optional&&u&&c.chained&&(i=0),!h&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function xe(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function fn({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,l,h]])=>{const{pattern:u,params:y}=on(o),d={id:o,exec:m=>{const f=u.exec(m);if(f)return ln(f,y,r)},errors:[1,...h||[]].map(m=>e[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function gt(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function tt(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}var ft;const x=((ft=globalThis.__sveltekit_i90717)==null?void 0:ft.base)??"";var ut;const un=((ut=globalThis.__sveltekit_i90717)==null?void 0:ut.assets)??x,dn="1738551150897",mt="sveltekit:snapshot",yt="sveltekit:scroll",_t="sveltekit:states",hn="sveltekit:pageurl",q="sveltekit:history",X="sveltekit:navigation",he={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ue=location.origin;function wt(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function Ve(){return{x:pageXOffset,y:pageYOffset}}function B(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const nt={...he,"":he.hover};function bt(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function vt(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=bt(e)}}function Ne(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||ke(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ue&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function pe(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=B(o,"preload-code")),a===null&&(a=B(o,"preload-data")),t===null&&(t=B(o,"keepfocus")),n===null&&(n=B(o,"noscroll")),s===null&&(s=B(o,"reload")),i===null&&(i=B(o,"replacestate")),o=bt(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:nt[r??"off"],preload_data:nt[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function rt(e){const t=De(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const kt={v:()=>{}};function pn(){const{set:e,subscribe:t}=De(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${un}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==dn;return i&&(e(!0),kt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function ke(e,t,n){return e.origin!==ue||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function at(e){const t=mn(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const gn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function mn(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=gn.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const yn=-1,_n=-2,wn=-3,bn=-4,vn=-5,kn=-6;function An(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===yn)return;if(s===wn)return NaN;if(s===bn)return 1/0;if(s===vn)return-1/0;if(s===kn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t==null?void 0:t[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const h=new Set;r[s]=h;for(let d=1;d<o.length;d+=1)h.add(a(o[d]));break;case"Map":const u=new Map;r[s]=u;for(let d=1;d<o.length;d+=2)u.set(a(o[d]),a(o[d+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const y=Object.create(null);r[s]=y;for(let d=1;d<o.length;d+=2)y[o[d]]=a(o[d+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const d=globalThis[c],m=o[1],f=at(m),g=new d(f);r[s]=g;break}case"ArrayBuffer":{const d=o[1],m=at(d);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const h=o[l];h!==_n&&(c[l]=a(h))}}else{const c={};r[s]=c;for(const l in o){const h=o[l];c[l]=a(h)}}return r[s]}return a(0)}const At=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...At];const Sn=new Set([...At]);[...Sn];function En(e){return e.filter(t=>t!=null)}class Ae{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Be{constructor(t,n){this.status=t,this.location=n}}class qe extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const Rn="x-sveltekit-invalidated",In="x-sveltekit-trailing-slash";function ge(e){return e instanceof Ae||e instanceof qe?e.status:500}function Un(e){return e instanceof qe?e.text:"Internal Error"}let U,Z,Pe;const Ln=et.toString().includes("$$")||/function \w+\(\) \{\}/.test(et.toString());var te,ne,re,ae,oe,se,ie,ce,dt,le,ht,fe,pt;Ln?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Z={current:null},Pe={current:!1}):(U=new(dt=class{constructor(){P(this,te,C({}));P(this,ne,C(null));P(this,re,C(null));P(this,ae,C({}));P(this,oe,C({id:null}));P(this,se,C({}));P(this,ie,C(-1));P(this,ce,C(new URL("https://example.com")))}get data(){return O(k(this,te))}set data(t){N(k(this,te),t)}get form(){return O(k(this,ne))}set form(t){N(k(this,ne),t)}get error(){return O(k(this,re))}set error(t){N(k(this,re),t)}get params(){return O(k(this,ae))}set params(t){N(k(this,ae),t)}get route(){return O(k(this,oe))}set route(t){N(k(this,oe),t)}get state(){return O(k(this,se))}set state(t){N(k(this,se),t)}get status(){return O(k(this,ie))}set status(t){N(k(this,ie),t)}get url(){return O(k(this,ce))}set url(t){N(k(this,ce),t)}},te=new WeakMap,ne=new WeakMap,re=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakMap,ie=new WeakMap,ce=new WeakMap,dt),Z=new(ht=class{constructor(){P(this,le,C(null))}get current(){return O(k(this,le))}set current(t){N(k(this,le),t)}},le=new WeakMap,ht),Pe=new(pt=class{constructor(){P(this,fe,C(!1))}get current(){return O(k(this,fe))}set current(t){N(k(this,fe),t)}},fe=new WeakMap,pt),kt.v=()=>Pe.current=!0);function St(e){Object.assign(U,e)}const Tn=new Set(["icon","shortcut icon","apple-touch-icon"]),F=gt(yt)??{},Q=gt(mt)??{},$={url:rt({}),page:rt({}),navigating:De(null),updated:pn()};function Ge(e){F[e]=Ve()}function xn(e,t){let n=e+1;for(;F[n];)delete F[n],n+=1;for(n=t+1;Q[n];)delete Q[n],n+=1}function M(e){return location.href=e.href,new Promise(()=>{})}async function Et(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(x||"/");e&&await e.update()}}function ot(){}let Se,je,me,j,$e,A;const ye=[],_e=[];let L=null;const Rt=new Set,Pn=new Set,z=new Set;let w={branch:[],error:null,url:null},Me=!1,we=!1,st=!0,ee=!1,K=!1,It=!1,He=!1,Ke,I,T,H;const J=new Set;let Ce;async function Yn(e,t,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),A=e,await((s=(a=e.hooks).init)==null?void 0:s.call(a)),Se=fn(e),j=document.documentElement,$e=t,je=e.nodes[0],me=e.nodes[1],je(),me(),I=(i=history.state)==null?void 0:i[q],T=(o=history.state)==null?void 0:o[X],I||(I=T=Date.now(),history.replaceState({...history.state,[q]:I,[X]:T},""));const r=F[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Vn($e,n):Dn(A.hash?Vt(new URL(location.href)):location.href,{replaceState:!0}),Fn()}async function Cn(){if(await(Ce||(Ce=Promise.resolve())),!Ce)return;Ce=null;const e=Ie(w.url,!0);L=null;const t=H={},n=e&&await ze(e);if(!(!n||t!==H)){if(n.type==="redirect")return Ee(new URL(n.location,w.url).href,{},1,t);n.props.page&&Object.assign(U,n.props.page),w=n.state,Ut(),Ke.$set(n.props),St(n.props.page)}}function Ut(){ye.length=0,He=!1}function Lt(e){_e.some(t=>t==null?void 0:t.snapshot)&&(Q[e]=_e.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function Tt(e){var t;(t=Q[e])==null||t.forEach((n,r)=>{var a,s;(s=(a=_e[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function it(){Ge(I),tt(yt,F),Lt(T),tt(mt,Q)}async function Ee(e,t,n,r){return W({type:"goto",url:wt(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(He=!0),t.invalidate&&t.invalidate.forEach(jt)}})}async function On(e){if(e.id!==(L==null?void 0:L.id)){const t={};J.add(t),L={id:e.id,token:t,promise:ze({...e,preload:t}).then(n=>(J.delete(t),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Oe(e){const t=Pt(e);if(!t)return;const n=Se.find(r=>r.exec(Ct(t)));n&&await Promise.all([...n.layouts,n.leaf].map(r=>r==null?void 0:r[1]()))}function xt(e,t,n){var s;w=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,e.props.page),Ke=new A.root({target:t,props:{...e.props,stores:$,components:_e},hydrate:n,sync:!1}),Tt(T);const a={from:null,to:{params:w.params,route:{id:((s=w.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};z.forEach(i=>i(a)),we=!0}function be({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(x&&(e.pathname===x||e.pathname===x+"/"))o="always";else for(const d of n)(d==null?void 0:d.slash)!==void 0&&(o=d.slash);e.pathname=Kt(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:En(n).map(d=>d.node.component),page:Je(U)}};i!==void 0&&(c.props.form=i);let l={},h=!U,u=0;for(let d=0;d<Math.max(n.length,w.branch.length);d+=1){const m=n[d],f=w.branch[d];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(h=!0),m&&(l={...l,...m.data},h&&(c.props[`data_${u}`]=l),u+=1)}return(!w.url||e.href!==w.url.href||w.error!==a||i!==void 0&&i!==U.form||h)&&(c.props.page={error:a,params:t,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:h?l:U.data}),c}async function We({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){var h,u,y;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((h=l.universal)!=null&&h.load){let d=function(...f){for(const g of f){const{href:_}=new URL(g,n);c.dependencies.add(_)}};const m={route:new Proxy(a,{get:(f,g)=>(o&&(c.route=!0),f[g])}),params:new Proxy(r,{get:(f,g)=>(o&&c.params.add(g),f[g])}),data:(s==null?void 0:s.data)??null,url:zt(n,()=>{o&&(c.url=!0)},f=>{o&&c.search_params.add(f)},A.hash),async fetch(f,g){let _;f instanceof Request?(_=f.url,g={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...g}):_=f;const R=new URL(_,n);return o&&d(R.href),R.origin===n.origin&&(_=R.href.slice(n.origin.length)),we?rn(_,R.href,g):nn(_,g)},setHeaders:()=>{},depends:d,parent(){return o&&(c.parent=!0),t()},untrack(f){o=!1;try{return f()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:e,server:s,universal:(u=l.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(s==null?void 0:s.slash)}}function ct(e,t,n,r,a,s){if(He)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==w.params[i])return!0;for(const i of a.dependencies)if(ye.some(o=>o(new URL(i))))return!0;return!1}function Ye(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function Nn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function lt({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:Je(U),constructors:[]}}}async function ze({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===e)return J.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),l.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let h=null;const u=w.url?e!==ve(w.url):!1,y=w.route?a.id!==w.route.id:!1,d=Nn(w.url,n);let m=!1;const f=l.map((p,b)=>{var D;const S=w.branch[b],E=!!(p!=null&&p[0])&&((S==null?void 0:S.loader)!==p[1]||ct(m,y,u,d,(D=S.server)==null?void 0:D.uses,r));return E&&(m=!0),E});if(f.some(Boolean)){try{h=await $t(n,f)}catch(p){const b=await G(p,{url:n,params:r,route:{id:e}});return J.has(s)?lt({error:b,url:n,params:r,route:a}):Re({status:ge(p),error:b,url:n,route:a})}if(h.type==="redirect")return h}const g=h==null?void 0:h.nodes;let _=!1;const R=l.map(async(p,b)=>{var Ue;if(!p)return;const S=w.branch[b],E=g==null?void 0:g[b];if((!E||E.type==="skip")&&p[1]===(S==null?void 0:S.loader)&&!ct(_,y,u,d,(Ue=S.universal)==null?void 0:Ue.uses,r))return S;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return We({loader:p[1],url:n,params:r,route:a,parent:async()=>{var Ze;const Xe={};for(let Le=0;Le<b;Le+=1)Object.assign(Xe,(Ze=await R[Le])==null?void 0:Ze.data);return Xe},server_data_node:Ye(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?S==null?void 0:S.server:void 0)})});for(const p of R)p.catch(()=>{});const v=[];for(let p=0;p<l.length;p+=1)if(l[p])try{v.push(await R[p])}catch(b){if(b instanceof Be)return{type:"redirect",location:b.location};if(J.has(s))return lt({error:await G(b,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let S=ge(b),E;if(g!=null&&g.includes(b))S=b.status??S,E=b.error;else if(b instanceof Ae)E=b.body;else{if(await $.updated.check())return await Et(),await M(n);E=await G(b,{params:r,url:n,route:{id:a.id}})}const D=await jn(p,v,i);return D?be({url:n,params:r,branch:v.slice(0,D.idx).concat(D.node),status:S,error:E,route:a}):await Nt(n,{id:a.id},E,S)}else v.push(void 0);return be({url:n,params:r,branch:v,status:200,error:null,route:a,form:t?void 0:null})}async function jn(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function Re({status:e,error:t,url:n,route:r}){const a={};let s=null;if(A.server_loads[0]===0)try{const o=await $t(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==ue||n.pathname!==location.pathname||Me)&&await M(n)}try{const o=await We({loader:je,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ye(s)}),c={node:await me(),loader:me,universal:null,server:null,data:null};return be({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof Be)return Ee(new URL(o.location,location.href),{},0);throw o}}function Pt(e){let t;try{if(t=A.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const n=new URL(e);A.hash?n.hash=t:n.pathname=t,t=n}}catch{return}return t}function Ie(e,t){if(!e||ke(e,x,A.hash))return;const n=Pt(e);if(!n)return;const r=Ct(n);for(const a of Se){const s=a.exec(r);if(s)return{id:ve(e),invalidating:t,route:a,params:Yt(s),url:e}}}function Ct(e){return Wt(A.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(x.length))||"/"}function ve(e){return(A.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function Ot({url:e,type:t,intent:n,delta:r}){let a=!1;const s=Ft(w,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return ee||Rt.forEach(o=>o(i)),a?null:s}async function W({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=ot,block:h=ot}){const u=Ie(t,!1),y=Ot({url:t,type:e,delta:n==null?void 0:n.delta,intent:u});if(!y){h();return}const d=I,m=T;l(),ee=!0,we&&$.navigating.set(Z.current=y.navigation),H=c;let f=u&&await ze(u);if(!f){if(ke(t,x,A.hash))return await M(t);f=await Nt(t,{id:null},await G(new qe(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(u==null?void 0:u.url)||t,H!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(o>=20)f=await Re({status:500,error:await G(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Ee(new URL(f.location,t).href,{},o+1,c),!1;else f.props.page.status>=400&&await $.updated.check()&&(await Et(),await M(t));if(Ut(),Ge(d),Lt(m),f.props.page.url.pathname!==t.pathname&&(t.pathname=f.props.page.url.pathname),i=n?n.state:i,!n){const v=s?0:1,p={[q]:I+=v,[X]:T+=v,[_t]:i};(s?history.replaceState:history.pushState).call(history,p,"",t),s||xn(I,T)}if(L=null,f.props.page.state=i,we){w=f.state,f.props.page&&(f.props.page.url=t);const v=(await Promise.all(Array.from(Pn,p=>p(y.navigation)))).filter(p=>typeof p=="function");if(v.length>0){let p=function(){v.forEach(b=>{z.delete(b)})};v.push(p),v.forEach(b=>{z.add(b)})}Ke.$set(f.props),St(f.props.page),It=!0}else xt(f,$e,!1);const{activeElement:g}=document;await Mt();const _=n?n.scroll:a?Ve():null;if(st){const v=t.hash&&document.getElementById(decodeURIComponent(A.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));_?scrollTo(_.x,_.y):v?v.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==g&&document.activeElement!==document.body;!r&&!R&&Bn(),st=!0,f.props.page&&Object.assign(U,f.props.page),ee=!1,e==="popstate"&&Tt(T),y.fulfil(void 0),z.forEach(v=>v(y.navigation)),$.navigating.set(Z.current=null)}async function Nt(e,t,n,r){return e.origin===ue&&e.pathname===location.pathname&&!Me?await Re({status:r,error:n,url:e,route:t}):await M(e)}function $n(){let e;j.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function t(s){s.defaultPrevented||r(s.composedPath()[0],1)}j.addEventListener("mousedown",t),j.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(Oe(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(s,i){const o=vt(s,j);if(!o)return;const{url:c,external:l,download:h}=Ne(o,x,A.hash);if(l||h)return;const u=pe(o),y=c&&ve(w.url)===ve(c);if(!u.reload&&!y)if(i<=u.preload_data){const d=Ie(c,!1);d&&On(d)}else i<=u.preload_code&&Oe(c)}function a(){n.disconnect();for(const s of j.querySelectorAll("a")){const{url:i,external:o,download:c}=Ne(s,x,A.hash);if(o||c)continue;const l=pe(s);l.reload||(l.preload_code===he.viewport&&n.observe(s),l.preload_code===he.eager&&Oe(i))}}z.add(a),a()}function G(e,t){if(e instanceof Ae)return e.body;const n=ge(e),r=Un(e);return A.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Dn(e,t={}){return e=new URL(wt(e)),e.origin!==ue?Promise.reject(new Error("goto: invalid URL")):Ee(e,t,0)}function zn(e){return jt(e),Cn()}function jt(e){if(typeof e=="function")ye.push(e);else{const{href:t}=new URL(e,location.href);ye.push(n=>n.href===t)}}function Fn(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(it(),!ee){const a=Ft(w,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Rt.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&it()}),(t=navigator.connection)!=null&&t.saveData||$n(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=vt(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=Ne(r,x,A.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=pe(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[h,u]=(A.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=h===Te(location);if(s||c.reload&&(!y||!u)){Ot({url:a,type:"link"})?ee=!0:n.preventDefault();return}if(u!==void 0&&y){const[,d]=w.url.href.split("#");if(d===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(K=!0,Ge(I),e(a),!c.replace_state)return;K=!1}n.preventDefault(),await new Promise(d=>{requestAnimationFrame(()=>{setTimeout(d,0)}),setTimeout(d,100)}),W({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ke(o,x,!1))return;const c=n.target,l=pe(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const h=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&h.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(h).toString(),W({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){const a=n.state[q];if(H={},a===I)return;const s=F[a],i=n.state[_t]??{},o=new URL(n.state[hn]??location.href),c=n.state[X],l=w.url?Te(location)===Te(w.url):!1;if(c===T&&(It||l)){i!==U.state&&(U.state=i),e(o),F[I]=Ve(),s&&scrollTo(s.x,s.y),I=a;return}const u=a-I;await W({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{I=a,T=c},block:()=>{history.go(-u)},nav_token:H})}else if(!K){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{K?(K=!1,history.replaceState({...history.state,[q]:++I,[X]:T},"",location.href)):A.hash&&w.url.hash===location.hash&&W({type:"goto",url:Vt(w.url)})});for(const n of document.querySelectorAll("link"))Tn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(Z.current=null)});function e(n){w.url=U.url=n,$.page.set(Je(U)),$.page.notify()}}async function Vn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,data:i,form:o}){Me=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=Ie(c,!1)||{});let l,h=!0;try{const u=r.map(async(m,f)=>{const g=i[f];return g!=null&&g.uses&&(g.uses=Dt(g.uses)),We({loader:A.nodes[m],url:c,params:a,route:s,parent:async()=>{const _={};for(let R=0;R<f;R+=1)Object.assign(_,(await u[R]).data);return _},server_data_node:Ye(g)})}),y=await Promise.all(u),d=Se.find(({id:m})=>m===s.id);if(d){const m=d.layouts;for(let f=0;f<m.length;f++)m[f]||y.splice(f,0,void 0)}l=be({url:c,params:a,branch:y,status:t,error:n,form:o,route:d??null})}catch(u){if(u instanceof Be){await M(new URL(u.location,location.href));return}l=await Re({status:ge(u),error:await G(u,{url:c,params:a,route:s}),url:c,route:s}),e.textContent="",h=!1}l.props.page&&(l.props.page.state={}),xt(l,e,h)}async function $t(e,t){var s;const n=new URL(e);n.pathname=Zt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(In,"1"),n.searchParams.append(Rn,t.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new Ae(a.status,i)}return new Promise(async i=>{var y;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function h(d){return An(d,{...A.decoders,Promise:m=>new Promise((f,g)=>{o.set(m,{fulfil:f,reject:g})})})}let u="";for(;;){const{done:d,value:m}=await c.read();if(d&&!u)break;for(u+=!m&&u?`
`:l.decode(m,{stream:!0});;){const f=u.indexOf(`
`);if(f===-1)break;const g=JSON.parse(u.slice(0,f));if(u=u.slice(f+1),g.type==="redirect")return i(g);if(g.type==="data")(y=g.nodes)==null||y.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=Dt(_.uses),_.data=h(_.data))}),i(g);else if(g.type==="chunk"){const{id:_,data:R,error:v}=g,p=o.get(_);o.delete(_),v?p.reject(h(v)):p.fulfil(h(R))}}}})}function Dt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Bn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function Ft(e,t,n,r){var c,l;let a,s;const i=new Promise((h,u)=>{a=h,s=u});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((l=t==null?void 0:t.route)==null?void 0:l.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function Je(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function Vt(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{Ht as a,x as b,Yn as c,Mn as g,zn as i,U as p,$ as s};
