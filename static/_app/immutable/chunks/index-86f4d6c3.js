function k(){}const ct=t=>t;function ot(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function I(){return Object.create(null)}function x(t){t.forEach(J)}function K(t){return typeof t=="function"}function qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Tt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function lt(t){return Object.keys(t).length===0}function ut(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zt(t,e,n){t.$$.on_destroy.push(ut(e,n))}function Bt(t,e,n,r){if(t){const s=Q(t,e,n,r);return t[0](s)}}function Q(t,e,n,r){return t[1]&&r?ot(n.ctx.slice(),t[1](r(e))):n.ctx}function Lt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],i=Math.max(e.dirty.length,s.length);for(let o=0;o<i;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Ft(t,e,n,r,s,l){if(s){const i=Q(e,n,r,l);t.p(i,s)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function It(t,e,n){return t.set(n),e}const U=typeof window!="undefined";let at=U?()=>window.performance.now():()=>Date.now(),F=U?t=>requestAnimationFrame(t):k;const b=new Set;function V(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&F(V)}function ft(t){let e;return b.size===0&&F(V),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let O=!1;function _t(){O=!0}function dt(){O=!1}function ht(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:ht(1,s,a=>e[n[a]].claim_order,u))-1;r[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const l=[],i=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=r[c-1]){for(l.push(e[c-1]);o>=c;o--)i.push(e[o]);o--}for(;o>=0;o--)i.push(e[o]);l.reverse(),i.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<i.length;c++){for(;u<l.length&&i[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(i[c],_)}}function pt(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=Y("style");return gt(X(t),e),e.sheet}function gt(t,e){pt(t.head||t,e)}function bt(t,e){if(O){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Wt(t,e,n){O&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function xt(t){t.parentNode.removeChild(t)}function Gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function $t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function Jt(){return H(" ")}function Kt(){return H("")}function Qt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Vt(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function wt(t){return Array.from(t.childNodes)}function vt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,r,s=!1){vt(t);const l=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const o=t[i];if(e(o)){const c=n(o);return c===void 0?t.splice(i,1):t[i]=c,s||(t.claim_info.last_index=i),o}}for(let i=t.claim_info.last_index-1;i>=0;i--){const o=t[i];if(e(o)){const c=n(o);return c===void 0?t.splice(i,1):t[i]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,o}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function tt(t,e,n,r){return Z(t,s=>s.nodeName===e,s=>{const l=[];for(let i=0;i<s.attributes.length;i++){const o=s.attributes[i];n[o.name]||l.push(o.name)}l.forEach(i=>s.removeAttribute(i))},()=>r(e))}function Xt(t,e,n){return tt(t,e,n,Y)}function Yt(t,e,n){return tt(t,e,n,$t)}function Et(t,e){return Z(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>H(e),!0)}function Zt(t){return Et(t," ")}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function et(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}const D=new Map;let P=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Nt(t,e){const n={stylesheet:yt(e),rules:{}};return D.set(t,n),n}function W(t,e,n,r,s,l,i,o=0){const c=16.666/r;let u=`{
`;for(let p=0;p<=1;p+=c){const g=e+(n-e)*l(p);u+=p*100+`%{${i(g,1-g)}}
`}const _=u+`100% {${i(n,1-n)}}
}`,f=`__svelte_${kt(_)}_${o}`,a=X(t),{stylesheet:d,rules:h}=D.get(a)||Nt(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${r}ms linear ${s}ms 1 both`,P+=1,f}function At(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),P-=s,P||St())}function St(){F(()=>{P||(D.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),D.clear())})}let E;function v(t){E=t}function N(){if(!E)throw new Error("Function called outside component initialization");return E}function ne(t){N().$$.on_mount.push(t)}function ie(t){N().$$.after_update.push(t)}function re(t){N().$$.on_destroy.push(t)}function se(){const t=N();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=et(e,n,{cancelable:r});return s.slice().forEach(i=>{i.call(t,l)}),!l.defaultPrevented}return!0}}function ce(t,e){return N().$$.context.set(t,e),e}const w=[],G=[],C=[],B=[],nt=Promise.resolve();let L=!1;function it(){L||(L=!0,nt.then(rt))}function oe(){return it(),nt}function R(t){C.push(t)}function le(t){B.push(t)}const T=new Set;let j=0;function rt(){const t=E;do{for(;j<w.length;){const e=w[j];j++,v(e),jt(e.$$)}for(v(null),w.length=0,j=0;G.length;)G.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];T.has(n)||(T.add(n),n())}C.length=0}while(w.length);for(;B.length;)B.pop()();L=!1,T.clear(),v(t)}function jt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}let $;function Ct(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function z(t,e,n){t.dispatchEvent(et(`${e?"intro":"outro"}${n}`))}const M=new Set;let m;function ue(){m={r:0,c:[],p:m}}function ae(){m.r||x(m.c),m=m.p}function Mt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function fe(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),m.c.push(()=>{M.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const Dt={duration:0};function _e(t,e,n,r){let s=e(t,n),l=r?0:1,i=null,o=null,c=null;function u(){c&&At(t,c)}function _(a,d){const h=a.b-l;return d*=Math.abs(h),{a:l,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=ct,tick:p=k,css:g}=s||Dt,q={start:at()+d,b:a};a||(q.group=m,m.r+=1),i||o?o=q:(g&&(u(),c=W(t,l,a,h,d,y,g)),a&&p(0,1),i=_(q,h),R(()=>z(t,a,"start")),ft(A=>{if(o&&A>o.start&&(i=_(o,h),o=null,z(t,i.b,"start"),g&&(u(),c=W(t,l,i.b,i.duration,0,y,s.css))),i){if(A>=i.end)p(l=i.b,1-l),z(t,i.b,"end"),o||(i.b?u():--i.group.r||x(i.group.c)),i=null;else if(A>=i.start){const st=A-i.start;l=i.a+i.d*y(st/i.duration),p(l,1-l)}}return!!(i||o)}))}return{run(a){K(s)?Ct().then(()=>{s=s(),f(a)}):f(a)},end(){u(),i=o=null}}}function de(t,e){const n={},r={},s={$$scope:1};let l=t.length;for(;l--;){const i=t[l],o=e[l];if(o){for(const c in i)c in o||(r[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in i)s[c]=1}for(const i in r)i in n||(n[i]=void 0);return n}function he(t){return typeof t=="object"&&t!==null?t:{}}function me(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function pe(t){t&&t.c()}function ye(t,e){t&&t.l(e)}function Pt(t,e,n,r){const{fragment:s,on_mount:l,on_destroy:i,after_update:o}=t.$$;s&&s.m(e,n),r||R(()=>{const c=l.map(J).filter(K);i?i.push(...c):x(c),t.$$.on_mount=[]}),o.forEach(R)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(w.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ge(t,e,n,r,s,l,i,o=[-1]){const c=E;v(t);const u=t.$$={fragment:null,ctx:null,props:l,update:k,not_equal:s,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:I(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};i&&i(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&s(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Ot(t,f)),a}):[],u.update(),_=!0,x(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){_t();const f=wt(e.target);u.fragment&&u.fragment.l(f),f.forEach(xt)}else u.fragment&&u.fragment.c();e.intro&&Mt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),dt(),rt()}v(c)}class be{$destroy(){Rt(this,1),this.$destroy=k}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Vt as $,he as A,Rt as B,ot as C,oe as D,k as E,Bt as F,Ft as G,Ht as H,Lt as I,bt as J,Qt as K,Gt as L,se as M,$t as N,Yt as O,ct as P,R as Q,_e as R,be as S,Tt as T,x as U,re as V,G as W,le as X,zt as Y,It as Z,me as _,wt as a,Ut as b,Xt as c,xt as d,Y as e,ee as f,Wt as g,Et as h,ge as i,te as j,Jt as k,Kt as l,Zt as m,ue as n,fe as o,ae as p,Mt as q,ce as r,qt as s,H as t,ie as u,ne as v,pe as w,ye as x,Pt as y,de as z};