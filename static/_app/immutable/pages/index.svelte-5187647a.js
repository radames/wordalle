var Tr=Object.defineProperty;var Wt=Object.getOwnPropertySymbols;var Ar=Object.prototype.hasOwnProperty,Ir=Object.prototype.propertyIsEnumerable;var qt=(n,e,t)=>e in n?Tr(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Xt=(n,e)=>{for(var t in e||(e={}))Ar.call(e,t)&&qt(n,t,e[t]);if(Wt)for(var t of Wt(e))Ir.call(e,t)&&qt(n,t,e[t]);return n};import{S as ct,i as ut,s as ft,e as v,k as M,c as w,a as y,m as F,d as f,b as u,g as ce,J as i,K as Be,L as Te,E as qe,M as Pt,t as J,h as Z,N as st,O as at,P as jr,w as Xe,x as ht,y as Ge,n as Je,o as _e,B as Ze,p as Ke,q as he,Q as St,R as Ve,T as ze,l as lt,j as Qe,U as br,v as yr,V as Er,W as kt,f as We,X as Dr,Y as Gt,Z as Lr,_ as Rr}from"../chunks/index-86f4d6c3.js";import{_ as De,w as kr,b as Jt}from"../chunks/preload-helper-2ab26066.js";var ye=(n=>(n.INITIAL="",n.CORRECT="correct",n.PRESENT="present",n.ABSENT="absent",n))(ye||{}),ve=(n=>(n[n.LOADING=0]="LOADING",n[n.PLAYING=1]="PLAYING",n[n.SUCESS=2]="SUCESS",n[n.FAIL=3]="FAIL",n[n.COMPLETED=4]="COMPLETED",n))(ve||{});function Cr(n,e){const t=[...n],r=t[e];for(const s of[...r].reverse())if(s.letter){s.letter="";break}return t}function Nr(n,e,t){const r=[...n],s=r[e];for(const a of s)if(a.correct===" "&&(a.letter=" "),!a.letter){a.letter=t;break}return r}const Zt={[ye.CORRECT]:"#00b81a",[ye.PRESENT]:"#ffc80a",[ye.ABSENT]:"#d9d9d9",[ye.INITIAL]:"#5d5d5d"},ot={2:"two",5:"five",10:"ten",15:"fifteen",20:"twenty",35:"thirtyfive",50:"fifty"},Or=["\u{1F917} Hugging \u{1F917}","\u{1F9DE} Genius \u{1F9DE}","\u{1F929} Magnificent \u{1F929}","\u{1F632} Impressive \u{1F632}","\u{1F9DA} Splendid \u{1F9DA}","\u2733 Great \u2733","\u{1F361} Phew \u{1F361}"];function Kt(n,e,t){const r=n.slice();return r[4]=e[t],r[6]=t,r}function Qt(n,e,t){const r=n.slice();return r[7]=e[t],r}function Ur(n){let e;return{c(){e=v("div"),this.h()},l(t){e=w(t,"DIV",{class:!0}),y(e).forEach(f),this.h()},h(){u(e,"class","spacer svelte-2ngxdh")},m(t,r){ce(t,e,r)},d(t){t&&f(e)}}}function Br(n){let e,t=n[7]+"",r;return{c(){e=v("span"),r=J(t)},l(s){e=w(s,"SPAN",{});var a=y(e);r=Z(a,t),a.forEach(f)},m(s,a){ce(s,e,a),i(e,r)},p:qe,d(s){s&&f(e)}}}function Vr(n){let e,t;return{c(){e=st("svg"),t=st("path"),this.h()},l(r){e=at(r,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0});var s=y(e);t=at(s,"path",{fill:!0,d:!0}),y(t).forEach(f),s.forEach(f),this.h()},h(){u(t,"fill","currentColor"),u(t,"d","M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"height","24"),u(e,"viewBox","0 0 24 24"),u(e,"width","24")},m(r,s){ce(r,e,s),i(e,t)},p:qe,d(r){r&&f(e)}}}function $t(n){let e,t,r,s;function a(_,S){return _[7]==="Backspace"?Vr:Br}let o=a(n)(n);function c(){return n[3](n[7])}return{c(){e=v("button"),o.c(),this.h()},l(_){e=w(_,"BUTTON",{class:!0});var S=y(e);o.l(S),S.forEach(f),this.h()},h(){u(e,"class",t=(n[0][n[7]]===void 0?"":n[0][n[7]])+" "+(n[7].length>1&&"big")+" svelte-2ngxdh")},m(_,S){ce(_,e,S),o.m(e,null),r||(s=Be(e,"click",c),r=!0)},p(_,S){n=_,o.p(n,S),S&1&&t!==(t=(n[0][n[7]]===void 0?"":n[0][n[7]])+" "+(n[7].length>1&&"big")+" svelte-2ngxdh")&&u(e,"class",t)},d(_){_&&f(e),o.d(),r=!1,s()}}}function zr(n){let e;return{c(){e=v("div"),this.h()},l(t){e=w(t,"DIV",{class:!0}),y(e).forEach(f),this.h()},h(){u(e,"class","spacer svelte-2ngxdh")},m(t,r){ce(t,e,r)},d(t){t&&f(e)}}}function er(n){let e,t,r,s,a=n[6]===1&&Ur(),l=n[4],o=[];for(let _=0;_<l.length;_+=1)o[_]=$t(Qt(n,l,_));let c=n[6]===1&&zr();return{c(){e=v("div"),a&&a.c(),t=M();for(let _=0;_<o.length;_+=1)o[_].c();r=M(),c&&c.c(),s=M(),this.h()},l(_){e=w(_,"DIV",{class:!0});var S=y(e);a&&a.l(S),t=F(S);for(let j=0;j<o.length;j+=1)o[j].l(S);r=F(S),c&&c.l(S),s=F(S),S.forEach(f),this.h()},h(){u(e,"class","row svelte-2ngxdh")},m(_,S){ce(_,e,S),a&&a.m(e,null),i(e,t);for(let j=0;j<o.length;j+=1)o[j].m(e,null);i(e,r),c&&c.m(e,null),i(e,s)},p(_,S){if(S&7){l=_[4];let j;for(j=0;j<l.length;j+=1){const Y=Qt(_,l,j);o[j]?o[j].p(Y,S):(o[j]=$t(Y),o[j].c(),o[j].m(e,r))}for(;j<o.length;j+=1)o[j].d(1);o.length=l.length}},d(_){_&&f(e),a&&a.d(),Te(o,_),c&&c.d()}}}function Mr(n){let e,t=n[2],r=[];for(let s=0;s<t.length;s+=1)r[s]=er(Kt(n,t,s));return{c(){e=v("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=w(s,"DIV",{class:!0});var a=y(e);for(let l=0;l<r.length;l+=1)r[l].l(a);a.forEach(f),this.h()},h(){u(e,"class","my-3 mx-auto select-none max-w-md")},m(s,a){ce(s,e,a);for(let l=0;l<r.length;l+=1)r[l].m(e,null)},p(s,[a]){if(a&7){t=s[2];let l;for(l=0;l<t.length;l+=1){const o=Kt(s,t,l);r[l]?r[l].p(o,a):(r[l]=er(o),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=t.length}},i:qe,o:qe,d(s){s&&f(e),Te(r,s)}}}function Fr(n,e,t){let{letterStates:r}=e;const s=Pt(),a=["qwertyuiop".split(""),[..."asdfghjkl".split("")],["Enter",..."zxcvbnm".split(""),"Backspace"]],l=o=>s("keyup",o);return n.$$set=o=>{"letterStates"in o&&t(0,r=o.letterStates)},[r,s,a,l]}class Hr extends ct{constructor(e){super(),ut(this,e,Fr,Mr,ft,{letterStates:0})}}function Yr(n){const e=n-1;return e*e*e+1}function it(n,{delay:e=0,duration:t=400,easing:r=jr}={}){const s=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:a=>`opacity: ${a*s}`}}function tr(n,{delay:e=0,duration:t=400,easing:r=Yr,start:s=0,opacity:a=0}={}){const l=getComputedStyle(n),o=+l.opacity,c=l.transform==="none"?"":l.transform,_=1-s,S=o*(1-a);return{delay:e,duration:t,easing:r,css:(j,Y)=>`
			transform: ${c} scale(${1-_*Y});
			opacity: ${o-S*Y}
		`}}var xr={exports:{}};(function(n){(function(e){var t=K(),r=ue(),s=D(),a=$(),l={imagePlaceholder:void 0,cacheBust:!1},o={toSvg:c,toPng:S,toJpeg:j,toBlob:Y,toPixelData:_,impl:{fontFaces:s,images:a,util:t,inliner:r,options:{}}};n.exports=o;function c(h,p){return p=p||{},H(p),Promise.resolve(h).then(function(E){return z(E,p.filter,!0)}).then(q).then(oe).then(T).then(function(E){return Q(E,p.width||t.width(h),p.height||t.height(h))});function T(E){return p.bgcolor&&(E.style.backgroundColor=p.bgcolor),p.width&&(E.style.width=p.width+"px"),p.height&&(E.style.height=p.height+"px"),p.style&&Object.keys(p.style).forEach(function(P){E.style[P]=p.style[P]}),E}}function _(h,p){return U(h,p||{}).then(function(T){return T.getContext("2d").getImageData(0,0,t.width(h),t.height(h)).data})}function S(h,p){return U(h,p||{}).then(function(T){return T.toDataURL()})}function j(h,p){return p=p||{},U(h,p).then(function(T){return T.toDataURL("image/jpeg",p.quality||1)})}function Y(h,p){return U(h,p||{}).then(t.canvasToBlob)}function H(h){typeof h.imagePlaceholder=="undefined"?o.impl.options.imagePlaceholder=l.imagePlaceholder:o.impl.options.imagePlaceholder=h.imagePlaceholder,typeof h.cacheBust=="undefined"?o.impl.options.cacheBust=l.cacheBust:o.impl.options.cacheBust=h.cacheBust}function U(h,p){return c(h,p).then(t.makeImage).then(t.delay(100)).then(function(E){var P=T(h);return P.getContext("2d").drawImage(E,0,0),P});function T(E){var P=document.createElement("canvas");if(P.width=p.width||t.width(E),P.height=p.height||t.height(E),p.bgcolor){var A=P.getContext("2d");A.fillStyle=p.bgcolor,A.fillRect(0,0,P.width,P.height)}return P}}function z(h,p,T){if(!T&&p&&!p(h))return Promise.resolve();return Promise.resolve(h).then(E).then(function(k){return P(h,k,p)}).then(function(k){return A(h,k)});function E(k){return k instanceof HTMLCanvasElement?t.makeImage(k.toDataURL()):k.cloneNode(!1)}function P(k,L,ee){var d=k.childNodes;if(d.length===0)return Promise.resolve(L);return C(L,t.asArray(d),ee).then(function(){return L});function C(I,B,b){var g=Promise.resolve();return B.forEach(function(V){g=g.then(function(){return z(V,b)}).then(function(x){x&&I.appendChild(x)})}),g}}function A(k,L){if(!(L instanceof Element))return L;return Promise.resolve().then(ee).then(d).then(C).then(I).then(function(){return L});function ee(){B(window.getComputedStyle(k),L.style);function B(b,g){b.cssText?g.cssText=b.cssText:V(b,g);function V(x,te){t.asArray(x).forEach(function(m){te.setProperty(m,x.getPropertyValue(m),x.getPropertyPriority(m))})}}}function d(){[":before",":after"].forEach(function(b){B(b)});function B(b){var g=window.getComputedStyle(k,b),V=g.getPropertyValue("content");if(V===""||V==="none")return;var x=t.uid();L.className=L.className+" "+x;var te=document.createElement("style");te.appendChild(m(x,b,g)),L.appendChild(te);function m(N,W,O){var ne="."+N+":"+W,ie=O.cssText?we(O):be(O);return document.createTextNode(ne+"{"+ie+"}");function we(de){var re=de.getPropertyValue("content");return de.cssText+" content: "+re+";"}function be(de){return t.asArray(de).map(re).join("; ")+";";function re(fe){return fe+": "+de.getPropertyValue(fe)+(de.getPropertyPriority(fe)?" !important":"")}}}}}function C(){k instanceof HTMLTextAreaElement&&(L.innerHTML=k.value),k instanceof HTMLInputElement&&L.setAttribute("value",k.value)}function I(){L instanceof SVGElement&&(L.setAttribute("xmlns","http://www.w3.org/2000/svg"),L instanceof SVGRectElement&&["width","height"].forEach(function(B){var b=L.getAttribute(B);!b||L.style.setProperty(B,b)}))}}}function q(h){return s.resolveAll().then(function(p){var T=document.createElement("style");return h.appendChild(T),T.appendChild(document.createTextNode(p)),h})}function oe(h){return a.inlineAll(h).then(function(){return h})}function Q(h,p,T){return Promise.resolve(h).then(function(E){return E.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(E)}).then(t.escapeXhtml).then(function(E){return'<foreignObject x="0" y="0" width="100%" height="100%">'+E+"</foreignObject>"}).then(function(E){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+p+'" height="'+T+'">'+E+"</svg>"}).then(function(E){return"data:image/svg+xml;charset=utf-8,"+E})}function K(){return{escape:I,parseExtension:p,mimeType:T,dataAsUrl:C,isDataUrl:E,canvasToBlob:A,resolveUrl:k,getAndEncode:d,uid:L(),delay:B,asArray:b,escapeXhtml:g,makeImage:ee,width:V,height:x};function h(){var m="application/font-woff",N="image/jpeg";return{woff:m,woff2:m,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:N,jpeg:N,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function p(m){var N=/\.([^\.\/]*?)$/g.exec(m);return N?N[1]:""}function T(m){var N=p(m).toLowerCase();return h()[N]||""}function E(m){return m.search(/^(data:)/)!==-1}function P(m){return new Promise(function(N){for(var W=window.atob(m.toDataURL().split(",")[1]),O=W.length,ne=new Uint8Array(O),ie=0;ie<O;ie++)ne[ie]=W.charCodeAt(ie);N(new Blob([ne],{type:"image/png"}))})}function A(m){return m.toBlob?new Promise(function(N){m.toBlob(N)}):P(m)}function k(m,N){var W=document.implementation.createHTMLDocument(),O=W.createElement("base");W.head.appendChild(O);var ne=W.createElement("a");return W.body.appendChild(ne),O.href=N,ne.href=m,ne.href}function L(){var m=0;return function(){return"u"+N()+m++;function N(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function ee(m){return new Promise(function(N,W){var O=new Image;O.onload=function(){N(O)},O.onerror=W,O.src=m})}function d(m){var N=3e4;return o.impl.options.cacheBust&&(m+=(/\?/.test(m)?"&":"?")+new Date().getTime()),new Promise(function(W){var O=new XMLHttpRequest;O.onreadystatechange=we,O.ontimeout=be,O.responseType="blob",O.timeout=N,O.open("GET",m,!0),O.send();var ne;if(o.impl.options.imagePlaceholder){var ie=o.impl.options.imagePlaceholder.split(/,/);ie&&ie[1]&&(ne=ie[1])}function we(){if(O.readyState===4){if(O.status!==200){ne?W(ne):de("cannot fetch resource: "+m+", status: "+O.status);return}var re=new FileReader;re.onloadend=function(){var fe=re.result.split(/,/)[1];W(fe)},re.readAsDataURL(O.response)}}function be(){ne?W(ne):de("timeout of "+N+"ms occured while fetching resource: "+m)}function de(re){console.error(re),W("")}})}function C(m,N){return"data:"+N+";base64,"+m}function I(m){return m.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function B(m){return function(N){return new Promise(function(W){setTimeout(function(){W(N)},m)})}}function b(m){for(var N=[],W=m.length,O=0;O<W;O++)N.push(m[O]);return N}function g(m){return m.replace(/#/g,"%23").replace(/\n/g,"%0A")}function V(m){var N=te(m,"border-left-width"),W=te(m,"border-right-width");return m.scrollWidth+N+W}function x(m){var N=te(m,"border-top-width"),W=te(m,"border-bottom-width");return m.scrollHeight+N+W}function te(m,N){var W=window.getComputedStyle(m).getPropertyValue(N);return parseFloat(W.replace("px",""))}}function ue(){var h=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:P,shouldProcess:p,impl:{readUrls:T,inline:E}};function p(A){return A.search(h)!==-1}function T(A){for(var k=[],L;(L=h.exec(A))!==null;)k.push(L[1]);return k.filter(function(ee){return!t.isDataUrl(ee)})}function E(A,k,L,ee){return Promise.resolve(k).then(function(C){return L?t.resolveUrl(C,L):C}).then(ee||t.getAndEncode).then(function(C){return t.dataAsUrl(C,t.mimeType(k))}).then(function(C){return A.replace(d(k),"$1"+C+"$3")});function d(C){return new RegExp(`(url\\(['"]?)(`+t.escape(C)+`)(['"]?\\))`,"g")}}function P(A,k,L){if(ee())return Promise.resolve(A);return Promise.resolve(A).then(T).then(function(d){var C=Promise.resolve(A);return d.forEach(function(I){C=C.then(function(B){return E(B,I,k,L)})}),C});function ee(){return!p(A)}}}function D(){return{resolveAll:h,impl:{readAll:p}};function h(){return p().then(function(T){return Promise.all(T.map(function(E){return E.resolve()}))}).then(function(T){return T.join(`
`)})}function p(){return Promise.resolve(t.asArray(document.styleSheets)).then(E).then(T).then(function(A){return A.map(P)});function T(A){return A.filter(function(k){return k.type===CSSRule.FONT_FACE_RULE}).filter(function(k){return r.shouldProcess(k.style.getPropertyValue("src"))})}function E(A){var k=[];return A.forEach(function(L){try{t.asArray(L.cssRules||[]).forEach(k.push.bind(k))}catch(ee){console.log("Error while reading CSS rules from "+L.href,ee.toString())}}),k}function P(A){return{resolve:function(){var L=(A.parentStyleSheet||{}).href;return r.inlineAll(A.cssText,L)},src:function(){return A.style.getPropertyValue("src")}}}}}function $(){return{inlineAll:p,impl:{newImage:h}};function h(T){return{inline:E};function E(P){return t.isDataUrl(T.src)?Promise.resolve():Promise.resolve(T.src).then(P||t.getAndEncode).then(function(A){return t.dataAsUrl(A,t.mimeType(T.src))}).then(function(A){return new Promise(function(k,L){T.onload=k,T.onerror=L,T.src=A})})}}function p(T){if(!(T instanceof Element))return Promise.resolve(T);return E(T).then(function(){return T instanceof HTMLImageElement?h(T).inline():Promise.all(t.asArray(T.childNodes).map(function(P){return p(P)}))});function E(P){var A=P.style.getPropertyValue("background");return A?r.inlineAll(A).then(function(k){P.style.setProperty("background",k,P.style.getPropertyPriority("background"))}).then(function(){return P}):Promise.resolve(P)}}}})()})(xr);var Wr=xr.exports;function qr(n){switch(n){case"./badges/fifteen.svelte":return De(()=>import("../chunks/fifteen-9add13bd.js"),["chunks/fifteen-9add13bd.js","chunks/index-86f4d6c3.js"]);case"./badges/fifty.svelte":return De(()=>import("../chunks/fifty-f65036e1.js"),["chunks/fifty-f65036e1.js","chunks/index-86f4d6c3.js"]);case"./badges/five.svelte":return De(()=>import("../chunks/five-ba00de65.js"),["chunks/five-ba00de65.js","chunks/index-86f4d6c3.js"]);case"./badges/ten.svelte":return De(()=>import("../chunks/ten-042882a1.js"),["chunks/ten-042882a1.js","chunks/index-86f4d6c3.js"]);case"./badges/thirtyfive.svelte":return De(()=>import("../chunks/thirtyfive-e8960031.js"),["chunks/thirtyfive-e8960031.js","chunks/index-86f4d6c3.js"]);case"./badges/twenty.svelte":return De(()=>import("../chunks/twenty-39a31000.js"),["chunks/twenty-39a31000.js","chunks/index-86f4d6c3.js"]);case"./badges/two.svelte":return De(()=>import("../chunks/two-86591465.js"),["chunks/two-86591465.js","chunks/index-86f4d6c3.js"]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+n)))})}}function rr(n,e,t){const r=n.slice();return r[18]=e[t],r[20]=t,r}function nr(n,e,t){const r=n.slice();return r[21]=e[t],r[23]=t,r}function sr(n,e,t){const r=n.slice();return r[24]=e[t],r}function ar(n){let e,t,r,s;var a=n[6];function l(o){return{props:{classNames:"w-full max-w-[180px]"}}}return a&&(t=new a(l())),{c(){e=v("div"),t&&Xe(t.$$.fragment),this.h()},l(o){e=w(o,"DIV",{class:!0});var c=y(e);t&&ht(t.$$.fragment,c),c.forEach(f),this.h()},h(){u(e,"class","absolute left-0 right-0 top-0 bottom-0 flex place-content-center place-items-center")},m(o,c){ce(o,e,c),t&&Ge(t,e,null),s=!0},p(o,c){if(a!==(a=o[6])){if(t){Je();const _=t;_e(_.$$.fragment,1,0,()=>{Ze(_,1)}),Ke()}a?(t=new a(l()),Xe(t.$$.fragment),he(t.$$.fragment,1),Ge(t,e,null)):t=null}},i(o){s||(t&&he(t.$$.fragment,o),St(()=>{r||(r=Ve(e,tr,{duration:500},!0)),r.run(1)}),s=!0)},o(o){t&&_e(t.$$.fragment,o),r||(r=Ve(e,tr,{duration:500},!1)),r.run(0),s=!1},d(o){o&&f(e),t&&Ze(t),o&&r&&r.end()}}}function lr(n){let e,t,r,s;return{c(){e=v("div"),t=v("img"),s=M(),this.h()},l(a){e=w(a,"DIV",{});var l=y(e);t=w(l,"IMG",{src:!0,alt:!0,class:!0}),s=F(l),l.forEach(f),this.h()},h(){ze(t.src,r=n[9]+n[24])||u(t,"src",r),u(t,"alt",""),u(t,"class","aspect-square w-full h-full")},m(a,l){ce(a,e,l),i(e,t),i(e,s)},p(a,l){l&2&&!ze(t.src,r=a[9]+a[24])&&u(t,"src",r)},d(a){a&&f(e)}}}function or(n){let e,t;return{c(){e=st("rect"),this.h()},l(r){e=at(r,"rect",{fill:!0,x:!0,y:!0,width:!0,height:!0,rx:!0}),y(e).forEach(f),this.h()},h(){u(e,"fill",t=Zt[n[21].state]),u(e,"x",n[23]*(xe+ke)),u(e,"y",n[20]*(xe+ke)),u(e,"width",xe),u(e,"height",xe),u(e,"rx",n[11])},m(r,s){ce(r,e,s)},p(r,s){s&1&&t!==(t=Zt[r[21].state])&&u(e,"fill",t)},d(r){r&&f(e)}}}function ir(n){let e,t=n[18],r=[];for(let s=0;s<t.length;s+=1)r[s]=or(nr(n,t,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=lt()},l(s){for(let a=0;a<r.length;a+=1)r[a].l(s);e=lt()},m(s,a){for(let l=0;l<r.length;l+=1)r[l].m(s,a);ce(s,e,a)},p(s,a){if(a&2049){t=s[18];let l;for(l=0;l<t.length;l+=1){const o=nr(s,t,l);r[l]?r[l].p(o,a):(r[l]=or(o),r[l].c(),r[l].m(e.parentNode,e))}for(;l<r.length;l+=1)r[l].d(1);r.length=t.length}},d(s){Te(r,s),s&&f(e)}}}function Xr(n){let e,t,r,s,a,l,o,c,_,S,j,Y,H,U,z,q,oe,Q,K,ue,D,$,h=n[5]?"SAVING..":"SAVE SCREENSHOT",p,T,E,P,A,k,L,ee,d=n[2]in ot&&ar(n),C=n[1],I=[];for(let g=0;g<C.length;g+=1)I[g]=lr(sr(n,C,g));let B=n[0],b=[];for(let g=0;g<B.length;g+=1)b[g]=ir(rr(n,B,g));return{c(){e=v("div"),t=v("div"),r=v("div"),s=v("div"),a=v("header"),l=v("h1"),o=J("WORDALLE \u{1F951}"),c=M(),_=v("span"),S=J("hf.co/wordalle"),j=M(),Y=v("h2"),H=J(n[8]),U=M(),z=v("div"),d&&d.c(),q=M();for(let g=0;g<I.length;g+=1)I[g].c();oe=M(),Q=st("svg");for(let g=0;g<b.length;g+=1)b[g].c();ue=M(),D=v("div"),$=v("button"),p=J(h),T=M(),E=v("button"),P=J("NEXT"),this.h()},l(g){e=w(g,"DIV",{class:!0});var V=y(e);t=w(V,"DIV",{class:!0});var x=y(t);r=w(x,"DIV",{class:!0});var te=y(r);s=w(te,"DIV",{class:!0});var m=y(s);a=w(m,"HEADER",{class:!0});var N=y(a);l=w(N,"H1",{class:!0});var W=y(l);o=Z(W,"WORDALLE \u{1F951}"),W.forEach(f),c=F(N),_=w(N,"SPAN",{class:!0});var O=y(_);S=Z(O,"hf.co/wordalle"),O.forEach(f),N.forEach(f),j=F(m),Y=w(m,"H2",{class:!0});var ne=y(Y);H=Z(ne,n[8]),ne.forEach(f),U=F(m),z=w(m,"DIV",{class:!0});var ie=y(z);d&&d.l(ie),q=F(ie);for(let fe=0;fe<I.length;fe+=1)I[fe].l(ie);ie.forEach(f),oe=F(m),Q=at(m,"svg",{class:!0,viewBox:!0,xmlns:!0});var we=y(Q);for(let fe=0;fe<b.length;fe+=1)b[fe].l(we);we.forEach(f),m.forEach(f),te.forEach(f),ue=F(x),D=w(x,"DIV",{class:!0});var be=y(D);$=w(be,"BUTTON",{class:!0});var de=y($);p=Z(de,h),de.forEach(f),T=F(be),E=w(be,"BUTTON",{class:!0});var re=y(E);P=Z(re,"NEXT"),re.forEach(f),be.forEach(f),x.forEach(f),V.forEach(f),this.h()},h(){u(l,"class","text-xs font-bold uppercase whitespace-nowrap"),u(_,"class","font-light"),u(a,"class","p-3 flex justify-between items-center"),u(Y,"class","text-center uppercase tracking-widest font-extrabold"),u(z,"class","grid grid-cols-3 gap-2 p-3 relative"),u(Q,"class","w-full p-3 mx-auto max-h-[30vh]"),u(Q,"viewBox",K="0 0 "+(n[0][0].length*(ke+xe)-ke)+" "+(n[0].length*(ke+xe)-ke)),u(Q,"xmlns","http://www.w3.org/2000/svg"),u(s,"class","p-3"),u(r,"class","border-0"),$.disabled=n[5],u($,"class","min-w-[15ch] flex-1 mr-1 svelte-oufr2e"),u(E,"class","flex-1 ml-1 svelte-oufr2e"),u(D,"class","p-3 px-6 flex text-base"),u(t,"class","message svelte-oufr2e"),u(e,"class","modal relative z-50 svelte-oufr2e")},m(g,V){ce(g,e,V),i(e,t),i(t,r),i(r,s),i(s,a),i(a,l),i(l,o),i(a,c),i(a,_),i(_,S),i(s,j),i(s,Y),i(Y,H),i(s,U),i(s,z),d&&d.m(z,null),i(z,q);for(let x=0;x<I.length;x+=1)I[x].m(z,null);i(s,oe),i(s,Q);for(let x=0;x<b.length;x+=1)b[x].m(Q,null);n[13](s),i(t,ue),i(t,D),i(D,$),i($,p),i(D,T),i(D,E),i(E,P),n[16](e),k=!0,L||(ee=[Be($,"click",n[14]),Be(E,"click",n[15])],L=!0)},p(g,[V]){if(g[2]in ot?d?(d.p(g,V),V&4&&he(d,1)):(d=ar(g),d.c(),he(d,1),d.m(z,q)):d&&(Je(),_e(d,1,1,()=>{d=null}),Ke()),V&514){C=g[1];let x;for(x=0;x<C.length;x+=1){const te=sr(g,C,x);I[x]?I[x].p(te,V):(I[x]=lr(te),I[x].c(),I[x].m(z,null))}for(;x<I.length;x+=1)I[x].d(1);I.length=C.length}if(V&2049){B=g[0];let x;for(x=0;x<B.length;x+=1){const te=rr(g,B,x);b[x]?b[x].p(te,V):(b[x]=ir(te),b[x].c(),b[x].m(Q,null))}for(;x<b.length;x+=1)b[x].d(1);b.length=B.length}(!k||V&1&&K!==(K="0 0 "+(g[0][0].length*(ke+xe)-ke)+" "+(g[0].length*(ke+xe)-ke)))&&u(Q,"viewBox",K),(!k||V&32)&&h!==(h=g[5]?"SAVING..":"SAVE SCREENSHOT")&&Qe(p,h),(!k||V&32)&&($.disabled=g[5])},i(g){k||(he(d),St(()=>{A||(A=Ve(e,it,{},!0)),A.run(1)}),k=!0)},o(g){_e(d),A||(A=Ve(e,it,{},!1)),A.run(0),k=!1},d(g){g&&f(e),d&&d.d(),Te(I,g),Te(b,g),n[13](null),n[16](null),g&&A&&A.end(),L=!1,br(ee)}}}const xe=10,ke=1;function Gr(n,e,t){const r=Pt();let{board:s}=e,{currentRowIndex:a}=e,{imagePaths:l}=e,{totalStreaks:o}=e;const c=Or[a],_="";let S,j,Y=!1;async function H(D){t(5,Y=!0);try{const $=await Wr.toBlob(D,{bgcolor:"#000"}),h=document.createElement("a");h.download=`sucess-${Date.now()}.png`,h.target="_self",h.onclick=async p=>{if(t(5,Y=!0),h.href){URL.revokeObjectURL(h.href),t(5,Y=!1);return}h.href=URL.createObjectURL($),t(5,Y=!1)},h.click(),console.log("Downloding image.")}catch($){console.log($.name,$.message)}}const U=D=>{D.key==="Escape"||D.key==="Enter"?r("restart"):D.key===" "&&H(j)};let z;yr(async()=>{if(o in ot){const D=ot[o];t(6,z=(await qr(`./badges/${D}.svelte`)).default)}setTimeout(()=>{window.addEventListener("keyup",U,!0)},1e3)}),Er(()=>{window.removeEventListener("keyup",U,!0)});const q=xe/10;function oe(D){kt[D?"unshift":"push"](()=>{j=D,t(4,j)})}const Q=()=>H(j),K=()=>r("restart");function ue(D){kt[D?"unshift":"push"](()=>{S=D,t(3,S)})}return n.$$set=D=>{"board"in D&&t(0,s=D.board),"currentRowIndex"in D&&t(12,a=D.currentRowIndex),"imagePaths"in D&&t(1,l=D.imagePaths),"totalStreaks"in D&&t(2,o=D.totalStreaks)},[s,l,o,S,j,Y,z,r,c,_,H,q,a,oe,Q,K,ue]}class Jr extends ct{constructor(e){super(),ut(this,e,Gr,Xr,ft,{board:0,currentRowIndex:12,imagePaths:1,totalStreaks:2})}}function cr(n){let e,t,r,s,a;return{c(){e=v("div"),t=v("button"),r=J("Try Again"),this.h()},l(l){e=w(l,"DIV",{class:!0});var o=y(e);t=w(o,"BUTTON",{class:!0});var c=y(t);r=Z(c,"Try Again"),c.forEach(f),o.forEach(f),this.h()},h(){u(t,"class","hover:no-underline underline underline-offset-2 hover:scale-105 transition-all duration-200 ease-in-out"),u(e,"class","font-light flex-1 text-xs sm:text-base text-center")},m(l,o){ce(l,e,o),i(e,t),i(t,r),s||(a=Be(t,"click",n[3]),s=!0)},p:qe,d(l){l&&f(e),s=!1,a()}}}function Zr(n){let e,t,r,s,a,l=n[0]===ve.FAIL&&cr(n);return{c(){e=v("div"),t=J(n[1]),r=M(),l&&l.c(),this.h()},l(o){e=w(o,"DIV",{class:!0});var c=y(e);t=Z(c,n[1]),r=F(c),l&&l.l(c),c.forEach(f),this.h()},h(){u(e,"class","message svelte-1sv0qpd")},m(o,c){ce(o,e,c),i(e,t),i(e,r),l&&l.m(e,null),a=!0},p(o,[c]){(!a||c&2)&&Qe(t,o[1]),o[0]===ve.FAIL?l?l.p(o,c):(l=cr(o),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i(o){a||(St(()=>{s||(s=Ve(e,it,{},!0)),s.run(1)}),a=!0)},o(o){s||(s=Ve(e,it,{},!1)),s.run(0),a=!1},d(o){o&&f(e),l&&l.d(),o&&s&&s.end()}}}function Kr(n,e,t){const r=Pt();let{gameState:s}=e,{message:a=null}=e;const l=()=>r("restart");return n.$$set=o=>{"gameState"in o&&t(0,s=o.gameState),"message"in o&&t(1,a=o.message)},[s,a,r,l]}class Qr extends ct{constructor(e){super(),ut(this,e,Kr,Zr,ft,{gameState:0,message:1})}}let $r=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((e,t)=>(t&=63,t<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");const en=$r(),tn=[],Pr=kr(JSON.parse(localStorage.user||JSON.stringify(en)));Pr.subscribe(n=>localStorage.user=JSON.stringify(n));const xt=kr(JSON.parse(localStorage.completedPrompts||JSON.stringify(tn)));xt.subscribe(n=>localStorage.completedPrompts=JSON.stringify(n));function ur(n,e,t){const r=n.slice();return r[29]=e[t],r[31]=t,r}function fr(n,e,t){const r=n.slice();return r[32]=e[t],r[31]=t,r}function hr(n,e,t){const r=n.slice();return r[34]=e[t],r}function dr(n){let e,t,r,s,a,l,o,c,_,S,j,Y,H,U,z,q,oe,Q,K,ue,D,$,h,p,T,E,P,A,k,L,ee,d,C,I,B,b,g,V,x,te,m,N,W,O,ne,ie,we,be,de,re,fe,Le,Tt,dt,Re,At,mt,Ee,Ce,Me,pt,gt,Fe,vt,wt,Pe,Ae,_t,Ie,bt,$e,He,yt,It,ae=n[7]&&mr(n),le=n[9]===ve.SUCESS&&pr(n),Ne=n[2],me=[];for(let R=0;R<Ne.length;R+=1)me[R]=gr(hr(n,Ne,R));let Oe=n[5],pe=[];for(let R=0;R<Oe.length;R+=1)pe[R]=wr(ur(n,Oe,R));function Sr(R){n[14](R)}let jt={};return n[4]!==void 0&&(jt.letterStates=n[4]),h=new Hr({props:jt}),kt.push(()=>Rr(h,"letterStates",Sr)),h.$on("keyup",n[15]),{c(){e=v("div"),ae&&ae.c(),t=M(),le&&le.c(),r=M(),s=v("header"),a=v("span"),l=J("Guess the prompt!"),o=M(),c=v("span"),_=M(),S=v("h1"),j=J("\u{1F951} WORDALLE \u{1F951}"),Y=M(),H=v("span"),U=M(),z=v("span"),q=v("button"),oe=J("Skip to next"),Q=M(),K=v("div");for(let R=0;R<me.length;R+=1)me[R].c();ue=M(),D=v("div");for(let R=0;R<pe.length;R+=1)pe[R].c();$=M(),Xe(h.$$.fragment),T=M(),E=v("footer"),P=v("details"),A=v("summary"),k=v("span"),L=J("About"),ee=M(),d=v("p"),C=J("Welcome to Wordalle! The game that marries "),I=v("a"),B=J("DALLE mini"),b=J(" & Wordle!\u201D"),g=M(),V=v("h2"),x=J("Instructions"),te=M(),m=v("p"),N=J(`You are given a board with a grid of letters. You must guess the prompt used to generate
					the images.`),W=M(),O=v("p"),ne=J(`Your guess must contain the same number of letters as tiles. After you guess, the tiles
					will be revealed.`),ie=M(),we=v("h2"),be=J("Example"),de=M(),re=v("p"),fe=J(`The green tiles are correct letter placements. The yellow tiles are correct letters but in
					wrong position and the gray tiles are letters not present in the prompt.
					`),Le=v("img"),dt=M(),Re=v("img"),mt=M(),Ee=v("details"),Ce=v("summary"),Me=v("span"),pt=J("Disclaimer"),gt=M(),Fe=v("p"),vt=J(`This demo collects the guesses to help with a research project. The demo stores no
					personal data, such as your IP address, email, or account, only your guesses.`),wt=M(),Pe=v("label"),Ae=v("input"),_t=M(),Ie=v("span"),bt=J("Please uncheck to disable sharing "),$e=J(n[0]),this.h()},l(R){e=w(R,"DIV",{class:!0});var X=y(e);ae&&ae.l(X),t=F(X),le&&le.l(X),r=F(X),s=w(X,"HEADER",{class:!0});var se=y(s);a=w(se,"SPAN",{class:!0});var G=y(a);l=Z(G,"Guess the prompt!"),G.forEach(f),o=F(se),c=w(se,"SPAN",{class:!0}),y(c).forEach(f),_=F(se),S=w(se,"H1",{class:!0});var Se=y(S);j=Z(Se,"\u{1F951} WORDALLE \u{1F951}"),Se.forEach(f),Y=F(se),H=w(se,"SPAN",{class:!0}),y(H).forEach(f),U=F(se),z=w(se,"SPAN",{class:!0});var Dt=y(z);q=w(Dt,"BUTTON",{tabindex:!0,class:!0});var Lt=y(q);oe=Z(Lt,"Skip to next"),Lt.forEach(f),Dt.forEach(f),se.forEach(f),Q=F(X),K=w(X,"DIV",{class:!0});var Rt=y(K);for(let je=0;je<me.length;je+=1)me[je].l(Rt);Rt.forEach(f),ue=F(X),D=w(X,"DIV",{class:!0});var Ct=y(D);for(let je=0;je<pe.length;je+=1)pe[je].l(Ct);Ct.forEach(f),$=F(X),ht(h.$$.fragment,X),T=F(X),E=w(X,"FOOTER",{class:!0});var et=y(E);P=w(et,"DETAILS",{class:!0});var ge=y(P);A=w(ge,"SUMMARY",{class:!0});var Nt=y(A);k=w(Nt,"SPAN",{});var Ot=y(k);L=Z(Ot,"About"),Ot.forEach(f),Nt.forEach(f),ee=F(ge),d=w(ge,"P",{});var tt=y(d);C=Z(tt,"Welcome to Wordalle! The game that marries "),I=w(tt,"A",{href:!0,target:!0,rel:!0,class:!0});var Ut=y(I);B=Z(Ut,"DALLE mini"),Ut.forEach(f),b=Z(tt," & Wordle!\u201D"),tt.forEach(f),g=F(ge),V=w(ge,"H2",{class:!0});var Bt=y(V);x=Z(Bt,"Instructions"),Bt.forEach(f),te=F(ge),m=w(ge,"P",{});var Vt=y(m);N=Z(Vt,`You are given a board with a grid of letters. You must guess the prompt used to generate
					the images.`),Vt.forEach(f),W=F(ge),O=w(ge,"P",{});var zt=y(O);ne=Z(zt,`Your guess must contain the same number of letters as tiles. After you guess, the tiles
					will be revealed.`),zt.forEach(f),ie=F(ge),we=w(ge,"H2",{class:!0});var Mt=y(we);be=Z(Mt,"Example"),Mt.forEach(f),de=F(ge),re=w(ge,"P",{class:!0});var Ye=y(re);fe=Z(Ye,`The green tiles are correct letter placements. The yellow tiles are correct letters but in
					wrong position and the gray tiles are letters not present in the prompt.
					`),Le=w(Ye,"IMG",{alt:!0,src:!0}),dt=F(Ye),Re=w(Ye,"IMG",{alt:!0,src:!0}),Ye.forEach(f),ge.forEach(f),mt=F(et),Ee=w(et,"DETAILS",{class:!0});var Ue=y(Ee);Ce=w(Ue,"SUMMARY",{class:!0});var Ft=y(Ce);Me=w(Ft,"SPAN",{});var Ht=y(Me);pt=Z(Ht,"Disclaimer"),Ht.forEach(f),Ft.forEach(f),gt=F(Ue),Fe=w(Ue,"P",{});var Yt=y(Fe);vt=Z(Yt,`This demo collects the guesses to help with a research project. The demo stores no
					personal data, such as your IP address, email, or account, only your guesses.`),Yt.forEach(f),wt=F(Ue),Pe=w(Ue,"LABEL",{class:!0});var rt=y(Pe);Ae=w(rt,"INPUT",{type:!0}),_t=F(rt),Ie=w(rt,"SPAN",{class:!0});var Et=y(Ie);bt=Z(Et,"Please uncheck to disable sharing "),$e=Z(Et,n[0]),Et.forEach(f),rt.forEach(f),Ue.forEach(f),et.forEach(f),X.forEach(f),this.h()},h(){u(a,"class","font-light flex-1 text-xs sm:text-base"),u(c,"class","sm:block hidden mx-3 flex-1 border-[0.5px] border-opacity-50 border-gray-400"),u(S,"class","text-xl font-bold text-center whitespace-nowrap"),u(H,"class","sm:block hidden mx-3 flex-1 border-[0.5px] border-opacity-50 border-gray-400"),u(q,"tabindex","-1"),u(q,"class","hover:no-underline underline underline-offset-2 hover:scale-105 transition-all duration-200 ease-in-out"),u(z,"class","font-light flex-1 text-xs sm:text-base"),u(s,"class","flex justify-between items-center uppercase sm:px-2 text-center"),u(K,"class","grid grid-cols-3 gap-2 max-w-md mx-auto p-3"),u(D,"class","board svelte-1y5wh9j"),u(A,"class","cursor-pointer my-2"),u(I,"href","https://huggingface.co/spaces/dalle-mini/dalle-mini"),u(I,"target","_blank"),u(I,"rel","noopener noreferrer"),u(I,"class","underline hover:text-blue-500 hover:no-underline"),u(V,"class","font-bold my-2"),u(we,"class","font-bold my-2"),u(Le,"alt","wordalle example for dog eating pastas"),ze(Le.src,Tt=Jt+"/img1.jpg")||u(Le,"src",Tt),u(Re,"alt","wordalle example for cat eating noodle "),ze(Re.src,At=Jt+"/img2.jpg")||u(Re,"src",At),u(re,"class","pb-3"),u(P,"class","text-xs my-3"),u(Ce,"class","cursor-pointer my-2"),u(Ae,"type","checkbox"),u(Ie,"class","mx-1"),u(Pe,"class","py-3 flex"),u(Ee,"class","text-xs my-3"),u(E,"class","max-w-md mx-auto pt-3"),u(e,"class","max-w-screen-lg mx-auto px-1 relative z-0 mt-3")},m(R,X){ce(R,e,X),ae&&ae.m(e,null),i(e,t),le&&le.m(e,null),i(e,r),i(e,s),i(s,a),i(a,l),i(s,o),i(s,c),i(s,_),i(s,S),i(S,j),i(s,Y),i(s,H),i(s,U),i(s,z),i(z,q),i(q,oe),i(e,Q),i(e,K);for(let se=0;se<me.length;se+=1)me[se].m(K,null);i(e,ue),i(e,D);for(let se=0;se<pe.length;se+=1)pe[se].m(D,null);i(e,$),Ge(h,e,null),i(e,T),i(e,E),i(E,P),i(P,A),i(A,k),i(k,L),i(P,ee),i(P,d),i(d,C),i(d,I),i(I,B),i(d,b),i(P,g),i(P,V),i(V,x),i(P,te),i(P,m),i(m,N),i(P,W),i(P,O),i(O,ne),i(P,ie),i(P,we),i(we,be),i(P,de),i(P,re),i(re,fe),i(re,Le),i(re,dt),i(re,Re),i(E,mt),i(E,Ee),i(Ee,Ce),i(Ce,Me),i(Me,pt),i(Ee,gt),i(Ee,Fe),i(Fe,vt),i(Ee,wt),i(Ee,Pe),i(Pe,Ae),Ae.checked=n[0],i(Pe,_t),i(Pe,Ie),i(Ie,bt),i(Ie,$e),He=!0,yt||(It=[Be(q,"click",n[13]),Be(Ae,"change",n[16])],yt=!0)},p(R,X){if(R[7]?ae?(ae.p(R,X),X[0]&128&&he(ae,1)):(ae=mr(R),ae.c(),he(ae,1),ae.m(e,t)):ae&&(Je(),_e(ae,1,1,()=>{ae=null}),Ke()),R[9]===ve.SUCESS?le?(le.p(R,X),X[0]&512&&he(le,1)):(le=pr(R),le.c(),he(le,1),le.m(e,r)):le&&(Je(),_e(le,1,1,()=>{le=null}),Ke()),X[0]&1028){Ne=R[2];let G;for(G=0;G<Ne.length;G+=1){const Se=hr(R,Ne,G);me[G]?me[G].p(Se,X):(me[G]=gr(Se),me[G].c(),me[G].m(K,null))}for(;G<me.length;G+=1)me[G].d(1);me.length=Ne.length}if(X[0]&872){Oe=R[5];let G;for(G=0;G<Oe.length;G+=1){const Se=ur(R,Oe,G);pe[G]?pe[G].p(Se,X):(pe[G]=wr(Se),pe[G].c(),pe[G].m(D,null))}for(;G<pe.length;G+=1)pe[G].d(1);pe.length=Oe.length}const se={};!p&&X[0]&16&&(p=!0,se.letterStates=R[4],Dr(()=>p=!1)),h.$set(se),X[0]&1&&(Ae.checked=R[0]),(!He||X[0]&1)&&Qe($e,R[0])},i(R){He||(he(ae),he(le),he(h.$$.fragment,R),He=!0)},o(R){_e(ae),_e(le),_e(h.$$.fragment,R),He=!1},d(R){R&&f(e),ae&&ae.d(),le&&le.d(),Te(me,R),Te(pe,R),Ze(h),yt=!1,br(It)}}}function mr(n){let e,t;return e=new Qr({props:{message:n[7],gameState:n[9]}}),e.$on("restart",n[11]),{c(){Xe(e.$$.fragment)},l(r){ht(e.$$.fragment,r)},m(r,s){Ge(e,r,s),t=!0},p(r,s){const a={};s[0]&128&&(a.message=r[7]),s[0]&512&&(a.gameState=r[9]),e.$set(a)},i(r){t||(he(e.$$.fragment,r),t=!0)},o(r){_e(e.$$.fragment,r),t=!1},d(r){Ze(e,r)}}}function pr(n){let e,t;return e=new Jr({props:{board:n[5],currentRowIndex:n[6],imagePaths:n[2],totalStreaks:n[1].length}}),e.$on("restart",n[11]),{c(){Xe(e.$$.fragment)},l(r){ht(e.$$.fragment,r)},m(r,s){Ge(e,r,s),t=!0},p(r,s){const a={};s[0]&32&&(a.board=r[5]),s[0]&64&&(a.currentRowIndex=r[6]),s[0]&4&&(a.imagePaths=r[2]),s[0]&2&&(a.totalStreaks=r[1].length),e.$set(a)},i(r){t||(he(e.$$.fragment,r),t=!0)},o(r){_e(e.$$.fragment,r),t=!1},d(r){Ze(e,r)}}}function gr(n){let e,t,r,s;return{c(){e=v("div"),t=v("img"),s=M(),this.h()},l(a){e=w(a,"DIV",{});var l=y(e);t=w(l,"IMG",{src:!0,alt:!0,class:!0}),s=F(l),l.forEach(f),this.h()},h(){ze(t.src,r=n[10]+n[34])||u(t,"src",r),u(t,"alt",""),u(t,"class","aspect-square w-full h-full")},m(a,l){ce(a,e,l),i(e,t),i(e,s)},p(a,l){l[0]&4&&!ze(t.src,r=a[10]+a[34])&&u(t,"src",r)},d(a){a&&f(e)}}}function vr(n){let e,t,r,s=n[32].letter+"",a,l,o,c,_=n[32].letter+"",S,j,Y;return{c(){e=v("div"),t=v("div"),r=v("span"),a=J(s),o=M(),c=v("div"),S=J(_),this.h()},l(H){e=w(H,"DIV",{class:!0});var U=y(e);t=w(U,"DIV",{class:!0,style:!0});var z=y(t);r=w(z,"SPAN",{class:!0});var q=y(r);a=Z(q,s),q.forEach(f),z.forEach(f),o=F(U),c=w(U,"DIV",{class:!0,style:!0});var oe=y(c);S=Z(oe,_),oe.forEach(f),U.forEach(f),this.h()},h(){u(r,"class","letter svelte-1y5wh9j"),u(t,"class",l="front z-0 "+(n[32].correct===" "?"space":"")+" svelte-1y5wh9j"),We(t,"transition-delay",n[31]*n[3]+"ms"),u(c,"class",j="back z-0 "+n[32].state+" svelte-1y5wh9j"),We(c,"transition-delay",n[31]*n[3]+"ms"),We(c,"animation-delay",n[31]*100+"ms"),u(e,"class",Y="tile "+(n[32].letter&&"filled")+" "+(n[32].state&&"revealed")+" svelte-1y5wh9j")},m(H,U){ce(H,e,U),i(e,t),i(t,r),i(r,a),i(e,o),i(e,c),i(c,S)},p(H,U){U[0]&32&&s!==(s=H[32].letter+"")&&Qe(a,s),U[0]&32&&l!==(l="front z-0 "+(H[32].correct===" "?"space":"")+" svelte-1y5wh9j")&&u(t,"class",l),U[0]&8&&We(t,"transition-delay",H[31]*H[3]+"ms"),U[0]&32&&_!==(_=H[32].letter+"")&&Qe(S,_),U[0]&32&&j!==(j="back z-0 "+H[32].state+" svelte-1y5wh9j")&&u(c,"class",j),U[0]&8&&We(c,"transition-delay",H[31]*H[3]+"ms"),U[0]&32&&Y!==(Y="tile "+(H[32].letter&&"filled")+" "+(H[32].state&&"revealed")+" svelte-1y5wh9j")&&u(e,"class",Y)},d(H){H&&f(e)}}}function wr(n){let e,t,r,s=n[29],a=[];for(let l=0;l<s.length;l+=1)a[l]=vr(fr(n,s,l));return{c(){e=v("div");for(let l=0;l<a.length;l+=1)a[l].c();t=M(),this.h()},l(l){e=w(l,"DIV",{class:!0});var o=y(e);for(let c=0;c<a.length;c+=1)a[c].l(o);t=F(o),o.forEach(f),this.h()},h(){u(e,"class",r="row "+(n[8]===n[31]&&"shake")+" "+(n[9]==ve.SUCESS&&n[6]===n[31]&&"jump")+" svelte-1y5wh9j")},m(l,o){ce(l,e,o);for(let c=0;c<a.length;c+=1)a[c].m(e,null);i(e,t)},p(l,o){if(o[0]&40){s=l[29];let c;for(c=0;c<s.length;c+=1){const _=fr(l,s,c);a[c]?a[c].p(_,o):(a[c]=vr(_),a[c].c(),a[c].m(e,t))}for(;c<a.length;c+=1)a[c].d(1);a.length=s.length}o[0]&832&&r!==(r="row "+(l[8]===l[31]&&"shake")+" "+(l[9]==ve.SUCESS&&l[6]===l[31]&&"jump")+" svelte-1y5wh9j")&&u(e,"class",r)},d(l){l&&f(e),Te(a,l)}}}function rn(n){let e,t,r=n[5]!==void 0&&dr(n);return{c(){r&&r.c(),e=lt()},l(s){r&&r.l(s),e=lt()},m(s,a){r&&r.m(s,a),ce(s,e,a),t=!0},p(s,a){s[5]!==void 0?r?(r.p(s,a),a[0]&32&&he(r,1)):(r=dr(s),r.c(),he(r,1),r.m(e.parentNode,e)):r&&(Je(),_e(r,1,1,()=>{r=null}),Ke())},i(s){t||(he(r),t=!0)},o(s){_e(r),t=!1},d(s){r&&r.d(s),s&&f(e)}}}const nt=1e3;function _r(){document.body.style.setProperty("--vh",window.innerHeight+"px")}function nn(n,e,t){let r,s;Gt(n,xt,d=>t(22,r=d)),Gt(n,Pr,d=>t(23,s=d));const a="";let l=!0,o,c=[],_;yr(async()=>{_r(),o=await fetch(a+"data").then(d=>d.json()),t(1,c=r),c.length>=Object.keys(o).length&&t(9,K=ve.COMPLETED),console.log("Current User Data:",s),console.log("Completed Prompts:",r),D(),window.addEventListener("keyup",$,!0),window.addEventListener("resize",_r),window.focus(),document.body.addEventListener("click",()=>window.focus(),!1)}),Er(()=>{window.removeEventListener("keyup",$,!0)});let S,j,Y,H,U={},z,q=0,oe="",Q=-1,K=ve.LOADING,ue=!0;function D(){t(8,Q=-1),t(7,oe=""),t(6,q=0),t(4,U={}),ue=!0;const d=Object.keys(o);c.length>=d.length||K===ve.COMPLETED?(T("You've completed all prompts. Please come back later for more!",-1),t(9,K=ve.COMPLETED),ue=!1,t(1,c=[])):t(9,K=ve.PLAYING);const C=c.map(V=>V.idx),I=d.filter((V,x)=>!C.includes(x)),B=~~(Math.random()*I.length),b=I[B];_=d.indexOf(b),S=b.replace(/_/g," "),t(2,j=o[b].slice(0,6));const g=[...S].map(V=>Math.random()>.5?"*":V).join("");console.log("%cCLUE: ","color: red;font-weight:bold",g),Y=S.length,t(3,H=nt/Y),t(5,z=Array.from({length:7},()=>Array.from(S).map(V=>({letter:"",correct:V,state:ye.INITIAL})))),document.body.style.setProperty("--cols",`${Y}`)}const $=d=>{h(d.key)};function h(d){!ue||(/^[a-zA-Z]$/.test(d)?t(5,z=Nr(z,q,d.toLowerCase())):d==="Backspace"?t(5,z=Cr(z,q)):d==="Enter"&&p())}function p(){const d=[...z],C=d[q],I=Xt({},U);if(C.every(B=>B.letter)){C.map(b=>b.letter).join(""),l&&P(C);const B=S.split("");C.forEach((b,g)=>{B[g]===b.letter&&(b.state=I[b.letter]=ye.CORRECT,B[g]=null)}),C.forEach(b=>{!b.state&&B.includes(b.letter)&&(b.state=ye.PRESENT,B[B.indexOf(b.letter)]=null,I[b.letter]||(I[b.letter]=ye.PRESENT))}),C.forEach(b=>{b.state||(b.state=ye.ABSENT,I[b.letter]||(I[b.letter]=ye.ABSENT))}),ue=!1,C.every(b=>b.state===ye.CORRECT)?(t(1,c=[...c,{prompt:S,idx:_}]),Lr(xt,r=c,r),setTimeout(()=>{t(9,K=ve.SUCESS)},nt)):q<z.length-1?(t(6,q++,q),setTimeout(()=>{ue=!0},nt)):(t(9,K=ve.FAIL),setTimeout(()=>{T(S.toUpperCase(),-1)},nt))}else E(),T("Not enough letters");t(5,z=d),t(4,U=I)}function T(d,C=1e3){t(7,oe=d),C>0&&setTimeout(()=>{t(7,oe="")},C)}function E(){t(8,Q=q),setTimeout(()=>{t(8,Q=-1)},1e3)}async function P(d){const C=d.map(B=>B.letter).join(""),I=d.map(B=>B.correct).join("");fetch(a+"prompt",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({guess:C,correct:I})})}const A=d=>{D(),d.currentTarget.blur()};function k(d){U=d,t(4,U)}const L=({detail:d})=>h(d);function ee(){l=this.checked,t(0,l)}return[l,c,j,H,U,z,q,oe,Q,K,a,D,h,A,k,L,ee]}class on extends ct{constructor(e){super(),ut(this,e,nn,rn,ft,{},null,[-1,-1])}}export{on as default};