import{d as M,w as T}from"./index.cb808db3.js";import{s as W,m as U,L as Y,U as C,n as y,o as P,p as j,e as A,a as F,P as K,c as N,b as V,d as G,R as J,f as D,q as H,i as Q,j as X,v as Z,w as x,x as ee,V as te}from"./scheduler.2943ef39.js";import{S as ae,i as ne,t as R,b as $}from"./index.c70d9825.js";import{g as se}from"./spread.8a54911c.js";const I={orientation:"horizontal",decorative:!1},_e=(a=I)=>{const t={...I,...a},n=T({...t});return{root:M(n,({orientation:i,decorative:d})=>({role:d?"none":"separator","aria-orientation":i==="vertical"?i:void 0,"aria-hidden":d,"data-orientation":i})),options:n}};function ie(a){let t,n,s,i;const d=a[7].default,r=j(d,a,a[6],null);let u=[{"data-br":a[3]},{"data-brr":a[1]},{style:"display: inline-block; vertical-align: top; text-decoration: inherit;"},a[5]],c={};for(let e=0;e<u.length;e+=1)c=y(c,u[e]);return{c(){t=A(a[0]),r&&r.c(),n=F(),s=new K(!1),this.h()},l(e){t=N(e,(a[0]||"null").toUpperCase(),{"data-br":!0,"data-brr":!0,style:!0});var l=V(t);r&&r.l(l),n=G(l),s=J(l,!1),l.forEach(D),this.h()},h(){s.a=null,H(a[0])(t,c)},m(e,l){Q(e,t,l),r&&r.m(t,null),X(t,n),s.m(a[4],t),a[8](t),i=!0},p(e,l){r&&r.p&&(!i||l&64)&&Z(r,d,e,e[6],i?ee(d,e[6],l,null):x(e[6]),null),H(e[0])(t,c=se(u,[{"data-br":e[3]},{"data-brr":e[1]},{style:"display: inline-block; vertical-align: top; text-decoration: inherit;"},l&32&&e[5]]))},i(e){i||(R(r,e),i=!0)},o(e){$(r,e),i=!1},d(e){e&&D(t),r&&r.d(e),a[8](null)}}}function re(a){let t,n=a[0]&&ie(a);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,i){n&&n.m(s,i),t=!0},p(s,[i]){s[0]&&n.p(s,i)},i(s){t||(R(n,s),t=!0)},o(s){$(n,s),t=!1},d(s){n&&n.d(s)}}}const b="__wrap_balancer";function le(a,t,n){const s=["as","ratio"];let i=U(t,s),{$$slots:d={},$$scope:r}=t;const u="span",c=1;let e,l,m;const w=crypto.randomUUID();Y(()=>{if(!e)return;const o=e.parentElement;o&&(m=new ResizeObserver(()=>{e&&window[b](0,c,e)}),m.observe(o))}),C(()=>{m&&l&&m.unobserve(l)});const S=(o,E,_)=>{_=_||document.querySelector(`[data-br="${o}"]`);const g=_.parentElement,O=L=>_.style.maxWidth=L+"px";_.style.maxWidth="";const f=g.clientWidth,B=g.clientHeight;let v=f/2,p=f,h;if(f){for(;v+1<p;)h=~~((v+p)/2),O(h),g.clientHeight===B?p=h:v=h;O(p*E+f*(1-E))}},k=S.toString(),q=`<script> window.${b}=${k};window.${b}("${w}",${c}) <\/script>`;function z(o){te[o?"unshift":"push"](()=>{e=o,n(2,e)})}return a.$$set=o=>{t=y(y({},t),P(o)),n(5,i=U(t,s)),"$$scope"in o&&n(6,r=o.$$scope)},a.$$.update=()=>{a.$$.dirty&4&&e&&(window[b]=S)(0,c,e)},[u,c,e,w,q,i,r,d,z]}class me extends ae{constructor(t){super(),ne(this,t,le,re,W,{as:0,ratio:1})}get as(){return this.$$.ctx[0]}get ratio(){return this.$$.ctx[1]}}export{me as B,_e as c};
