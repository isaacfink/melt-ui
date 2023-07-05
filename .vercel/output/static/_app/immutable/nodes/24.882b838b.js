import{T as de}from"../chunks/tailwind.config.ebd62547.js";import{s as pe,n as V,e as B,a as k,c as G,b as Q,f as $,d as I,J as N,h as ge,i as u,j as ee,A as ie,M as he,N as K,u as be,t as x,k as T}from"../chunks/scheduler.2943ef39.js";import{e as ce}from"../chunks/each.83bf9e7b.js";import{g as X,a as we}from"../chunks/spread.8a54911c.js";import{S as ue,i as me,c as d,a as g,m as h,t as b,b as w,d as v}from"../chunks/index.c70d9825.js";import"../chunks/index.a1398546.js";import{c as ve}from"../chunks/create.64add3dd.js";import{D as A}from"../chunks/index.5e8f8c6b.js";const Ae=`<script lang="ts">
	import { createSlider } from '@melt-ui/svelte';

	const { slider, range, thumb, value } = createSlider({
		value: [30],
		max: 100,
	});
<\/script>

<span {...$slider} class="relative flex h-[20px] w-[200px] items-center">
	<span class="block h-[3px] w-full bg-black/40">
		<span {...$range} class="h-[3px] bg-white" />
	</span>

	{#each { length: $value.length } as _}
		<span
			{...$thumb()}
			use:thumb.action
			class="block h-5 w-5 rounded-full bg-white focus:ring-4 focus:ring-black/40"
		/>
	{/each}
</span>
`;function fe(o,s,t){const n=o.slice();return n[8]=s[t],n}function $e(o){let s,t,n,i=[o[3](),{class:"block h-5 w-5 rounded-full bg-white focus:ring-4 focus:ring-black/40"}],r={};for(let c=0;c<i.length;c+=1)r=V(r,i[c]);return{c(){s=B("span"),this.h()},l(c){s=G(c,"SPAN",{class:!0}),Q(s).forEach($),this.h()},h(){N(s,r)},m(c,m){u(c,s,m),t||(n=be(o[6].action(s)),t=!0)},p(c,m){N(s,r=X(i,[m&8&&c[3](),{class:"block h-5 w-5 rounded-full bg-white focus:ring-4 focus:ring-black/40"}]))},d(c){c&&$(s),t=!1,n()}}}function Se(o){let s,t,n,i,r=[o[1],{class:"h-[3px] bg-white"}],c={};for(let a=0;a<r.length;a+=1)c=V(c,r[a]);let m=ce({length:o[2].length}),p=[];for(let a=0;a<m.length;a+=1)p[a]=$e(fe(o,m,a));let S=[o[0],{class:"relative flex h-[20px] w-[200px] items-center"}],y={};for(let a=0;a<S.length;a+=1)y=V(y,S[a]);return{c(){s=B("span"),t=B("span"),n=B("span"),i=k();for(let a=0;a<p.length;a+=1)p[a].c();this.h()},l(a){s=G(a,"SPAN",{class:!0});var _=Q(s);t=G(_,"SPAN",{class:!0});var f=Q(t);n=G(f,"SPAN",{class:!0}),Q(n).forEach($),f.forEach($),i=I(_);for(let P=0;P<p.length;P+=1)p[P].l(_);_.forEach($),this.h()},h(){N(n,c),ge(t,"class","block h-[3px] w-full bg-black/40"),N(s,y)},m(a,_){u(a,s,_),ee(s,t),ee(t,n),ee(s,i);for(let f=0;f<p.length;f+=1)p[f]&&p[f].m(s,null)},p(a,[_]){if(N(n,c=X(r,[_&2&&a[1],{class:"h-[3px] bg-white"}])),_&12){m=ce({length:a[2].length});let f;for(f=0;f<m.length;f+=1){const P=fe(a,m,f);p[f]?p[f].p(P,_):(p[f]=$e(P),p[f].c(),p[f].m(s,null))}for(;f<p.length;f+=1)p[f].d(1);p.length=m.length}N(s,y=X(S,[_&1&&a[0],{class:"relative flex h-[20px] w-[200px] items-center"}]))},i:ie,o:ie,d(a){a&&$(s),he(p,a)}}}function ke(o,s,t){let n,i,r,c;const{slider:m,range:p,thumb:S,value:y}=ve({value:[30],max:100});return K(o,m,a=>t(0,n=a)),K(o,p,a=>t(1,i=a)),K(o,S,a=>t(3,c=a)),K(o,y,a=>t(2,r=a)),[n,i,r,c,m,p,S,y]}class Ie extends ue{constructor(s){super(),me(this,s,ke,Se,pe,{})}}const ye={"index.svelte":Ae,"tailwind.config.ts":de},Pe=null,xe={component:Ie,code:{Tailwind:ye,CSS:Pe}};async function Te(){return{preview:xe}}const Ze=Object.freeze(Object.defineProperty({__proto__:null,load:Te},Symbol.toStringTag,{value:"Module"})),Ce={title:"CreateSliderArgs",description:"The configuration object passed to the `createSlider` builder function.",args:[{label:"value",type:"number[]",default:"[]"},{label:"min",type:"number",default:0},{label:"max",type:"number",default:100},{label:"step",type:"number",default:1},{label:"orientation",type:"'horizontal' | 'vertical'",default:"'horizontal'"},{label:"disabled",type:"boolean",default:!1}]},ze={title:"Keyboard Interactions",description:"",keyboardInteractions:[{key:"ArrowRight",description:"Increments/decrements by the `step` value depending on `orientation`."},{key:"ArrowLeft",description:"Increments/decrements by the `step` value depending on `orientation`."},{key:"ArrowUp",description:"Increases the value by the `step` amount."},{key:"ArrowDown",description:"Decreases the value by the `step` amount."},{key:"Home",description:"Sets the value to its minimum"},{key:"End",description:"Sets the value to its maximum"}]},Re={title:"Slider",description:"The slider component.",dataAttributes:[{label:"data-orientation",value:['"horizontal"','"vertical"']}]},je={title:"Thumb",description:"The slider thumb component.",dataAttributes:[{label:"data-melt-part",value:"`thumb`"}]},L={builder:Ce,keyboard:ze,slider:Re,thumb:je};function De(o){let s;return{c(){s=x("Slider")},l(t){s=T(t,"Slider")},m(t,n){u(t,s,n)},d(t){t&&$(s)}}}function Ee(o){let s;return{c(){s=x("An input where the user selects a value from within a given range")},l(t){s=T(t,"An input where the user selects a value from within a given range")},m(t,n){u(t,s,n)},d(t){t&&$(s)}}}function He(o){let s;return{c(){s=x("Usage")},l(t){s=T(t,"Usage")},m(t,n){u(t,s,n)},d(t){t&&$(s)}}}function Ne(o){let s;return{c(){s=x("createSlider")},l(t){s=T(t,"createSlider")},m(t,n){u(t,s,n)},d(t){t&&$(s)}}}function Fe(o){let s,t,n,i;return t=new A.Code({props:{$$slots:{default:[Ne]},$$scope:{ctx:o}}}),{c(){s=x("To create a slider, use the "),d(t.$$.fragment),n=x(` builder function. Follow the anatomy
	or the example above to create your slider.`)},l(r){s=T(r,"To create a slider, use the "),g(t.$$.fragment,r),n=T(r,` builder function. Follow the anatomy
	or the example above to create your slider.`)},m(r,c){u(r,s,c),h(t,r,c),u(r,n,c),i=!0},p(r,c){const m={};c&4&&(m.$$scope={dirty:c,ctx:r}),t.$set(m)},i(r){i||(b(t.$$.fragment,r),i=!0)},o(r){w(t.$$.fragment,r),i=!1},d(r){r&&($(s),$(n)),v(t,r)}}}function Ue(o){let s;return{c(){s=x("API Reference")},l(t){s=T(t,"API Reference")},m(t,n){u(t,s,n)},d(t){t&&$(s)}}}function We(o){let s;return{c(){s=x("Accessibility")},l(t){s=T(t,"Accessibility")},m(t,n){u(t,s,n)},d(t){t&&$(s)}}}function Me(o){let s;return{c(){s=x("Slider WAI-ARIA design pattern")},l(t){s=T(t,"Slider WAI-ARIA design pattern")},m(t,n){u(t,s,n)},d(t){t&&$(s)}}}function Oe(o){let s,t,n;return t=new A.A({props:{href:"https://www.w3.org/WAI/ARIA/apg/patterns/slider/",$$slots:{default:[Me]},$$scope:{ctx:o}}}),{c(){s=x(`Adheres to the
	`),d(t.$$.fragment)},l(i){s=T(i,`Adheres to the
	`),g(t.$$.fragment,i)},m(i,r){u(i,s,r),h(t,i,r),n=!0},p(i,r){const c={};r&4&&(c.$$scope={dirty:r,ctx:i}),t.$set(c)},i(i){n||(b(t.$$.fragment,i),n=!0)},o(i){w(t.$$.fragment,i),n=!1},d(i){i&&$(s),v(t,i)}}}function qe(o){let s,t,n,i,r,c,m,p,S,y,a,_,f,P,C,F,j,U,D,W,E,M,z,O,R,q,H,J;s=new A.H1({props:{$$slots:{default:[De]},$$scope:{ctx:o}}}),n=new A.Description({props:{$$slots:{default:[Ee]},$$scope:{ctx:o}}});const Y=[o[0].preview];let Z={};for(let e=0;e<Y.length;e+=1)Z=V(Z,Y[e]);return r=new A.Preview({props:Z}),m=new A.Construction({}),S=new A.Features({props:{features:o[1]}}),a=new A.H2({props:{$$slots:{default:[He]},$$scope:{ctx:o}}}),f=new A.P({props:{$$slots:{default:[Fe]},$$scope:{ctx:o}}}),C=new A.H2({props:{$$slots:{default:[Ue]},$$scope:{ctx:o}}}),j=new A.API({props:{schema:L.builder}}),D=new A.API({props:{schema:L.slider}}),E=new A.API({props:{schema:L.thumb}}),z=new A.H2({props:{$$slots:{default:[We]},$$scope:{ctx:o}}}),R=new A.P({props:{$$slots:{default:[Oe]},$$scope:{ctx:o}}}),H=new A.API({props:{schema:L.keyboard}}),{c(){d(s.$$.fragment),t=k(),d(n.$$.fragment),i=k(),d(r.$$.fragment),c=k(),d(m.$$.fragment),p=k(),d(S.$$.fragment),y=k(),d(a.$$.fragment),_=k(),d(f.$$.fragment),P=k(),d(C.$$.fragment),F=k(),d(j.$$.fragment),U=k(),d(D.$$.fragment),W=k(),d(E.$$.fragment),M=k(),d(z.$$.fragment),O=k(),d(R.$$.fragment),q=k(),d(H.$$.fragment)},l(e){g(s.$$.fragment,e),t=I(e),g(n.$$.fragment,e),i=I(e),g(r.$$.fragment,e),c=I(e),g(m.$$.fragment,e),p=I(e),g(S.$$.fragment,e),y=I(e),g(a.$$.fragment,e),_=I(e),g(f.$$.fragment,e),P=I(e),g(C.$$.fragment,e),F=I(e),g(j.$$.fragment,e),U=I(e),g(D.$$.fragment,e),W=I(e),g(E.$$.fragment,e),M=I(e),g(z.$$.fragment,e),O=I(e),g(R.$$.fragment,e),q=I(e),g(H.$$.fragment,e)},m(e,l){h(s,e,l),u(e,t,l),h(n,e,l),u(e,i,l),h(r,e,l),u(e,c,l),h(m,e,l),u(e,p,l),h(S,e,l),u(e,y,l),h(a,e,l),u(e,_,l),h(f,e,l),u(e,P,l),h(C,e,l),u(e,F,l),h(j,e,l),u(e,U,l),h(D,e,l),u(e,W,l),h(E,e,l),u(e,M,l),h(z,e,l),u(e,O,l),h(R,e,l),u(e,q,l),h(H,e,l),J=!0},p(e,[l]){const te={};l&4&&(te.$$scope={dirty:l,ctx:e}),s.$set(te);const se={};l&4&&(se.$$scope={dirty:l,ctx:e}),n.$set(se);const _e=l&1?X(Y,[we(e[0].preview)]):{};r.$set(_e);const ne={};l&4&&(ne.$$scope={dirty:l,ctx:e}),a.$set(ne);const re={};l&4&&(re.$$scope={dirty:l,ctx:e}),f.$set(re);const ae={};l&4&&(ae.$$scope={dirty:l,ctx:e}),C.$set(ae);const le={};l&4&&(le.$$scope={dirty:l,ctx:e}),z.$set(le);const oe={};l&4&&(oe.$$scope={dirty:l,ctx:e}),R.$set(oe)},i(e){J||(b(s.$$.fragment,e),b(n.$$.fragment,e),b(r.$$.fragment,e),b(m.$$.fragment,e),b(S.$$.fragment,e),b(a.$$.fragment,e),b(f.$$.fragment,e),b(C.$$.fragment,e),b(j.$$.fragment,e),b(D.$$.fragment,e),b(E.$$.fragment,e),b(z.$$.fragment,e),b(R.$$.fragment,e),b(H.$$.fragment,e),J=!0)},o(e){w(s.$$.fragment,e),w(n.$$.fragment,e),w(r.$$.fragment,e),w(m.$$.fragment,e),w(S.$$.fragment,e),w(a.$$.fragment,e),w(f.$$.fragment,e),w(C.$$.fragment,e),w(j.$$.fragment,e),w(D.$$.fragment,e),w(E.$$.fragment,e),w(z.$$.fragment,e),w(R.$$.fragment,e),w(H.$$.fragment,e),J=!1},d(e){e&&($(t),$(i),$(c),$(p),$(y),$(_),$(P),$(F),$(U),$(W),$(M),$(O),$(q)),v(s,e),v(n,e),v(r,e),v(m,e),v(S,e),v(a,e),v(f,e),v(C,e),v(j,e),v(D,e),v(E,e),v(z,e),v(R,e),v(H,e)}}}function Je(o,s,t){let{data:n}=s;const i=["Supports multiple thumbs","Can be controlled or uncontrolled","Supports a minimum value between thumbs","Supports both touch and click","Supports a custom step size","Can be vertical or horizontal"];return o.$$set=r=>{"data"in r&&t(0,n=r.data)},[n,i]}class et extends ue{constructor(s){super(),me(this,s,Je,qe,pe,{data:0})}}export{et as component,Ze as universal};
