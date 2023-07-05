import{T as De}from"../chunks/tailwind.config.ebd62547.js";import{s as He,n as pe,e as N,a as C,c as O,b as $e,g as de,d as S,f as c,h as G,J as ae,i,j as V,u as Ee,A as le,N as ie,t as v,k}from"../chunks/scheduler.2943ef39.js";import{g as me,a as Le}from"../chunks/spread.8a54911c.js";import{S as Re,i as je,c as p,a as m,m as d,t as _,b as g,d as h}from"../chunks/index.c70d9825.js";import"../chunks/index.a1398546.js";import{b as Ue}from"../chunks/check-circle.1739929e.js";import{D as w}from"../chunks/index.5e8f8c6b.js";const We=`<script lang="ts">
	import { createSwitch } from '@melt-ui/svelte';

	const { root, input, isChecked } = createSwitch();
<\/script>

<form>
	<div class="flex items-center">
		<label class="pr-4 leading-none text-white" for="airplane-mode"> Airplane mode </label>
		<button
			{...$root}
			use:root.action
			class="relative h-6 w-11 cursor-default rounded-full bg-magnum-800 transition-colors data-[state=checked]:bg-magnum-950"
			id="airplane-mode"
		>
			<span
				class="block h-5 w-5 translate-x-0.5 rounded-full bg-white transition-transform will-change-transform
                {$isChecked && 'translate-x-[22px]'}"
			/>
			<input {...$input} />
		</button>
	</div>
</form>
`;function Me(l){let s,t,n,$="Airplane mode",o,f,r,u,A,T,x,Y,H=[l[2]],j={};for(let b=0;b<H.length;b+=1)j=pe(j,H[b]);let R=[l[0],{class:"relative h-6 w-11 cursor-default rounded-full bg-magnum-800 transition-colors data-[state=checked]:bg-magnum-950"},{id:"airplane-mode"}],B={};for(let b=0;b<R.length;b+=1)B=pe(B,R[b]);return{c(){s=N("form"),t=N("div"),n=N("label"),n.textContent=$,o=C(),f=N("button"),r=N("span"),A=C(),T=N("input"),this.h()},l(b){s=O(b,"FORM",{});var I=$e(s);t=O(I,"DIV",{class:!0});var P=$e(t);n=O(P,"LABEL",{class:!0,for:!0,["data-svelte-h"]:!0}),de(n)!=="svelte-14gdl3l"&&(n.textContent=$),o=S(P),f=O(P,"BUTTON",{class:!0,id:!0});var D=$e(f);r=O(D,"SPAN",{class:!0}),$e(r).forEach(c),A=S(D),T=O(D,"INPUT",{}),D.forEach(c),P.forEach(c),I.forEach(c),this.h()},h(){G(n,"class","pr-4 leading-none text-white"),G(n,"for","airplane-mode"),G(r,"class",u="block h-5 w-5 translate-x-0.5 rounded-full bg-white transition-transform will-change-transform "+(l[1]&&"translate-x-[22px]")),ae(T,j),ae(f,B),G(t,"class","flex items-center")},m(b,I){i(b,s,I),V(s,t),V(t,n),V(t,o),V(t,f),V(f,r),V(f,A),V(f,T),T.autofocus&&T.focus(),f.autofocus&&f.focus(),x||(Y=Ee(l[3].action(f)),x=!0)},p(b,[I]){I&2&&u!==(u="block h-5 w-5 translate-x-0.5 rounded-full bg-white transition-transform will-change-transform "+(b[1]&&"translate-x-[22px]"))&&G(r,"class",u),ae(T,j=me(H,[I&4&&b[2]])),ae(f,B=me(R,[I&1&&b[0],{class:"relative h-6 w-11 cursor-default rounded-full bg-magnum-800 transition-colors data-[state=checked]:bg-magnum-950"},{id:"airplane-mode"}]))},i:le,o:le,d(b){b&&c(s),x=!1,Y()}}}function Ne(l,s,t){let n,$,o;const{root:f,input:r,isChecked:u}=Ue();return ie(l,f,A=>t(0,n=A)),ie(l,r,A=>t(2,o=A)),ie(l,u,A=>t(1,$=A)),[n,$,o,f,r,u]}class Oe extends Re{constructor(s){super(),je(this,s,Ne,Me,He,{})}}const Ye={"index.svelte":We,"tailwind.config.ts":De},Fe=null,qe={component:Oe,code:{Tailwind:Ye,CSS:Fe}};async function ze(){return{preview:qe}}const It=Object.freeze(Object.defineProperty({__proto__:null,load:ze},Symbol.toStringTag,{value:"Module"})),Je=`<script lang="ts">
	import { createSwitch } from '@melt-ui/svelte';

	const { root, input, checked, isChecked, options } = createSwitch({
		disabled: true,
	});
	// or
	options.update((prev) => ({ ...prev, disabled: true }));
<\/script>
`,Ke=`<script lang="ts">
	import { createSwitch } from '@melt-ui/svelte';

	export let checked = true;
	export let disabled = false;

	const { checked: checkedStore, options } = createSwitch({
		disabled,
		checked,
	});

	$: checkedStore.set(checked);
	checkedStore.subscribe((v) => (checked = v));
	$: options.update((o) => ({ ...o, disabled }));
<\/script>
`,xe={disable:Je,controlled:Ke},Ve={title:"CreateSwitchArgs",description:"The configuration object passed to the `createSwitch` builder function.",args:[{label:"checked",type:"boolean",default:"false"},{label:"disabled",type:"boolean",default:"false"},{label:"required",type:"boolean",default:"false"},{label:"name",type:"string"},{label:"value",type:"string"}]},Ge={title:"Root",description:"The switch component.",dataAttributes:[{label:"data-disabled",value:"Present if the switch is disabled."},{label:"data-state",value:['"checked"','"unchecked"']}]},Qe={title:"Keyboard Interactions",description:"",keyboardInteractions:[{key:"Space",description:"When the switch has focus, toggles the switch."},{key:"Enter",description:"When the switch has focus, toggles the switch."}]},ue={builder:Ve,keyboard:Qe,root:Ge};function Xe(l){let s;return{c(){s=v("Switch")},l(t){s=k(t,"Switch")},m(t,n){i(t,s,n)},d(t){t&&c(s)}}}function Ze(l){let s;return{c(){s=v("A control that allows the user to toggle between checked and not checked.")},l(t){s=k(t,"A control that allows the user to toggle between checked and not checked.")},m(t,n){i(t,s,n)},d(t){t&&c(s)}}}function ye(l){let s;return{c(){s=v("Anatomy")},l(t){s=k(t,"Anatomy")},m(t,n){i(t,s,n)},d(t){t&&c(s)}}}function et(l){let s,t="Root:",n;return{c(){s=N("b"),s.textContent=t,n=v(" The root container for the accordion")},l($){s=O($,"B",{["data-svelte-h"]:!0}),de(s)!=="svelte-ss75j2"&&(s.textContent=t),n=k($," The root container for the accordion")},m($,o){i($,s,o),i($,n,o)},p:le,d($){$&&(c(s),c(n))}}}function tt(l){let s,t="Input:",n;return{c(){s=N("b"),s.textContent=t,n=v(" The native HTML input that is visually hidden")},l($){s=O($,"B",{["data-svelte-h"]:!0}),de(s)!=="svelte-1elel2u"&&(s.textContent=t),n=k($," The native HTML input that is visually hidden")},m($,o){i($,s,o),i($,n,o)},p:le,d($){$&&(c(s),c(n))}}}function st(l){let s,t,n,$;return s=new w.Li({props:{$$slots:{default:[et]},$$scope:{ctx:l}}}),n=new w.Li({props:{$$slots:{default:[tt]},$$scope:{ctx:l}}}),{c(){p(s.$$.fragment),t=C(),p(n.$$.fragment)},l(o){m(s.$$.fragment,o),t=S(o),m(n.$$.fragment,o)},m(o,f){d(s,o,f),i(o,t,f),d(n,o,f),$=!0},p(o,f){const r={};f&4&&(r.$$scope={dirty:f,ctx:o}),s.$set(r);const u={};f&4&&(u.$$scope={dirty:f,ctx:o}),n.$set(u)},i(o){$||(_(s.$$.fragment,o),_(n.$$.fragment,o),$=!0)},o(o){g(s.$$.fragment,o),g(n.$$.fragment,o),$=!1},d(o){o&&c(t),h(s,o),h(n,o)}}}function nt(l){let s;return{c(){s=v("Usage")},l(t){s=k(t,"Usage")},m(t,n){i(t,s,n)},d(t){t&&c(s)}}}function ot(l){let s;return{c(){s=v("createSwitch")},l(t){s=k(t,"createSwitch")},m(t,n){i(t,s,n)},d(t){t&&c(s)}}}function rt(l){let s,t,n,$;return t=new w.Code({props:{$$slots:{default:[ot]},$$scope:{ctx:l}}}),{c(){s=v("To create a switch, use the "),p(t.$$.fragment),n=v(` builder function. You can then reference
	the anatomy or example above to create your switch.`)},l(o){s=k(o,"To create a switch, use the "),m(t.$$.fragment,o),n=k(o,` builder function. You can then reference
	the anatomy or example above to create your switch.`)},m(o,f){i(o,s,f),d(t,o,f),i(o,n,f),$=!0},p(o,f){const r={};f&4&&(r.$$scope={dirty:f,ctx:o}),t.$set(r)},i(o){$||(_(t.$$.fragment,o),$=!0)},o(o){g(t.$$.fragment,o),$=!1},d(o){o&&(c(s),c(n)),h(t,o)}}}function $t(l){let s;return{c(){s=v("Disabling the switch")},l(t){s=k(t,"Disabling the switch")},m(t,n){i(t,s,n)},d(t){t&&c(s)}}}function at(l){let s;return{c(){s=v("disabled")},l(t){s=k(t,"disabled")},m(t,n){i(t,s,n)},d(t){t&&c(s)}}}function lt(l){let s;return{c(){s=v("true")},l(t){s=k(t,"true")},m(t,n){i(t,s,n)},d(t){t&&c(s)}}}function ct(l){let s,t,n,$,o,f;return t=new w.Code({props:{$$slots:{default:[at]},$$scope:{ctx:l}}}),$=new w.Code({props:{$$slots:{default:[lt]},$$scope:{ctx:l}}}),{c(){s=v("To disable the switch, set the "),p(t.$$.fragment),n=v(" argument as "),p($.$$.fragment),o=v(".")},l(r){s=k(r,"To disable the switch, set the "),m(t.$$.fragment,r),n=k(r," argument as "),m($.$$.fragment,r),o=k(r,".")},m(r,u){i(r,s,u),d(t,r,u),i(r,n,u),d($,r,u),i(r,o,u),f=!0},p(r,u){const A={};u&4&&(A.$$scope={dirty:u,ctx:r}),t.$set(A);const T={};u&4&&(T.$$scope={dirty:u,ctx:r}),$.$set(T)},i(r){f||(_(t.$$.fragment,r),_($.$$.fragment,r),f=!0)},o(r){g(t.$$.fragment,r),g($.$$.fragment,r),f=!1},d(r){r&&(c(s),c(n),c(o)),h(t,r),h($,r)}}}function ft(l){let s;return{c(){s=v("Controlled access")},l(t){s=k(t,"Controlled access")},m(t,n){i(t,s,n)},d(t){t&&c(s)}}}function it(l){let s;return{c(){s=v("checked")},l(t){s=k(t,"checked")},m(t,n){i(t,s,n)},d(t){t&&c(s)}}}function ut(l){let s;return{c(){s=v("options")},l(t){s=k(t,"options")},m(t,n){i(t,s,n)},d(t){t&&c(s)}}}function pt(l){let s,t,n,$,o,f;return t=new w.Code({props:{$$slots:{default:[it]},$$scope:{ctx:l}}}),$=new w.Code({props:{$$slots:{default:[ut]},$$scope:{ctx:l}}}),{c(){s=v("To programatically control the switch, you can directly set the "),p(t.$$.fragment),n=v(` store.
	You can also update the `),p($.$$.fragment),o=v(" store with new arguments.")},l(r){s=k(r,"To programatically control the switch, you can directly set the "),m(t.$$.fragment,r),n=k(r,` store.
	You can also update the `),m($.$$.fragment,r),o=k(r," store with new arguments.")},m(r,u){i(r,s,u),d(t,r,u),i(r,n,u),d($,r,u),i(r,o,u),f=!0},p(r,u){const A={};u&4&&(A.$$scope={dirty:u,ctx:r}),t.$set(A);const T={};u&4&&(T.$$scope={dirty:u,ctx:r}),$.$set(T)},i(r){f||(_(t.$$.fragment,r),_($.$$.fragment,r),f=!0)},o(r){g(t.$$.fragment,r),g($.$$.fragment,r),f=!1},d(r){r&&(c(s),c(n),c(o)),h(t,r),h($,r)}}}function mt(l){let s;return{c(){s=v("API Reference")},l(t){s=k(t,"API Reference")},m(t,n){i(t,s,n)},d(t){t&&c(s)}}}function dt(l){let s;return{c(){s=v("Accessibility")},l(t){s=k(t,"Accessibility")},m(t,n){i(t,s,n)},d(t){t&&c(s)}}}function _t(l){let s;return{c(){s=v("Switch WAI-ARIA design pattern")},l(t){s=k(t,"Switch WAI-ARIA design pattern")},m(t,n){i(t,s,n)},d(t){t&&c(s)}}}function gt(l){let s,t,n;return t=new w.A({props:{href:"https://www.w3.org/WAI/ARIA/apg/patterns/switch/",$$slots:{default:[_t]},$$scope:{ctx:l}}}),{c(){s=v(`Adheres to the
	`),p(t.$$.fragment)},l($){s=k($,`Adheres to the
	`),m(t.$$.fragment,$)},m($,o){i($,s,o),d(t,$,o),n=!0},p($,o){const f={};o&4&&(f.$$scope={dirty:o,ctx:$}),t.$set(f)},i($){n||(_(t.$$.fragment,$),n=!0)},o($){g(t.$$.fragment,$),n=!1},d($){$&&c(s),h(t,$)}}}function ht(l){let s,t,n,$,o,f,r,u,A,T,x,Y,H,j,R,B,b,I,P,D,F,Q,E,X,L,Z,q,y,U,ee,z,te,J,se,W,ne,M,oe,K,re;s=new w.H1({props:{$$slots:{default:[Xe]},$$scope:{ctx:l}}}),n=new w.Description({props:{$$slots:{default:[Ze]},$$scope:{ctx:l}}});const ce=[l[0].preview];let fe={};for(let e=0;e<ce.length;e+=1)fe=pe(fe,ce[e]);return o=new w.Preview({props:fe}),r=new w.Features({props:{features:l[1]}}),A=new w.H2({props:{$$slots:{default:[ye]},$$scope:{ctx:l}}}),x=new w.Ul({props:{$$slots:{default:[st]},$$scope:{ctx:l}}}),H=new w.H2({props:{$$slots:{default:[nt]},$$scope:{ctx:l}}}),R=new w.P({props:{$$slots:{default:[rt]},$$scope:{ctx:l}}}),b=new w.H3({props:{$$slots:{default:[$t]},$$scope:{ctx:l}}}),P=new w.P({props:{$$slots:{default:[ct]},$$scope:{ctx:l}}}),F=new w.CodeBlock({props:{code:xe.disable}}),E=new w.H3({props:{$$slots:{default:[ft]},$$scope:{ctx:l}}}),L=new w.P({props:{$$slots:{default:[pt]},$$scope:{ctx:l}}}),q=new w.CodeBlock({props:{code:xe.controlled}}),U=new w.H2({props:{$$slots:{default:[mt]},$$scope:{ctx:l}}}),z=new w.API({props:{schema:ue.builder}}),J=new w.API({props:{schema:ue.root}}),W=new w.H2({props:{$$slots:{default:[dt]},$$scope:{ctx:l}}}),M=new w.P({props:{$$slots:{default:[gt]},$$scope:{ctx:l}}}),K=new w.API({props:{schema:ue.keyboard}}),{c(){p(s.$$.fragment),t=C(),p(n.$$.fragment),$=C(),p(o.$$.fragment),f=C(),p(r.$$.fragment),u=C(),p(A.$$.fragment),T=C(),p(x.$$.fragment),Y=C(),p(H.$$.fragment),j=C(),p(R.$$.fragment),B=C(),p(b.$$.fragment),I=C(),p(P.$$.fragment),D=C(),p(F.$$.fragment),Q=C(),p(E.$$.fragment),X=C(),p(L.$$.fragment),Z=C(),p(q.$$.fragment),y=C(),p(U.$$.fragment),ee=C(),p(z.$$.fragment),te=C(),p(J.$$.fragment),se=C(),p(W.$$.fragment),ne=C(),p(M.$$.fragment),oe=C(),p(K.$$.fragment)},l(e){m(s.$$.fragment,e),t=S(e),m(n.$$.fragment,e),$=S(e),m(o.$$.fragment,e),f=S(e),m(r.$$.fragment,e),u=S(e),m(A.$$.fragment,e),T=S(e),m(x.$$.fragment,e),Y=S(e),m(H.$$.fragment,e),j=S(e),m(R.$$.fragment,e),B=S(e),m(b.$$.fragment,e),I=S(e),m(P.$$.fragment,e),D=S(e),m(F.$$.fragment,e),Q=S(e),m(E.$$.fragment,e),X=S(e),m(L.$$.fragment,e),Z=S(e),m(q.$$.fragment,e),y=S(e),m(U.$$.fragment,e),ee=S(e),m(z.$$.fragment,e),te=S(e),m(J.$$.fragment,e),se=S(e),m(W.$$.fragment,e),ne=S(e),m(M.$$.fragment,e),oe=S(e),m(K.$$.fragment,e)},m(e,a){d(s,e,a),i(e,t,a),d(n,e,a),i(e,$,a),d(o,e,a),i(e,f,a),d(r,e,a),i(e,u,a),d(A,e,a),i(e,T,a),d(x,e,a),i(e,Y,a),d(H,e,a),i(e,j,a),d(R,e,a),i(e,B,a),d(b,e,a),i(e,I,a),d(P,e,a),i(e,D,a),d(F,e,a),i(e,Q,a),d(E,e,a),i(e,X,a),d(L,e,a),i(e,Z,a),d(q,e,a),i(e,y,a),d(U,e,a),i(e,ee,a),d(z,e,a),i(e,te,a),d(J,e,a),i(e,se,a),d(W,e,a),i(e,ne,a),d(M,e,a),i(e,oe,a),d(K,e,a),re=!0},p(e,[a]){const _e={};a&4&&(_e.$$scope={dirty:a,ctx:e}),s.$set(_e);const ge={};a&4&&(ge.$$scope={dirty:a,ctx:e}),n.$set(ge);const Be=a&1?me(ce,[Le(e[0].preview)]):{};o.$set(Be);const he={};a&4&&(he.$$scope={dirty:a,ctx:e}),A.$set(he);const we={};a&4&&(we.$$scope={dirty:a,ctx:e}),x.$set(we);const be={};a&4&&(be.$$scope={dirty:a,ctx:e}),H.$set(be);const ve={};a&4&&(ve.$$scope={dirty:a,ctx:e}),R.$set(ve);const ke={};a&4&&(ke.$$scope={dirty:a,ctx:e}),b.$set(ke);const Ae={};a&4&&(Ae.$$scope={dirty:a,ctx:e}),P.$set(Ae);const Ce={};a&4&&(Ce.$$scope={dirty:a,ctx:e}),E.$set(Ce);const Se={};a&4&&(Se.$$scope={dirty:a,ctx:e}),L.$set(Se);const Te={};a&4&&(Te.$$scope={dirty:a,ctx:e}),U.$set(Te);const Ie={};a&4&&(Ie.$$scope={dirty:a,ctx:e}),W.$set(Ie);const Pe={};a&4&&(Pe.$$scope={dirty:a,ctx:e}),M.$set(Pe)},i(e){re||(_(s.$$.fragment,e),_(n.$$.fragment,e),_(o.$$.fragment,e),_(r.$$.fragment,e),_(A.$$.fragment,e),_(x.$$.fragment,e),_(H.$$.fragment,e),_(R.$$.fragment,e),_(b.$$.fragment,e),_(P.$$.fragment,e),_(F.$$.fragment,e),_(E.$$.fragment,e),_(L.$$.fragment,e),_(q.$$.fragment,e),_(U.$$.fragment,e),_(z.$$.fragment,e),_(J.$$.fragment,e),_(W.$$.fragment,e),_(M.$$.fragment,e),_(K.$$.fragment,e),re=!0)},o(e){g(s.$$.fragment,e),g(n.$$.fragment,e),g(o.$$.fragment,e),g(r.$$.fragment,e),g(A.$$.fragment,e),g(x.$$.fragment,e),g(H.$$.fragment,e),g(R.$$.fragment,e),g(b.$$.fragment,e),g(P.$$.fragment,e),g(F.$$.fragment,e),g(E.$$.fragment,e),g(L.$$.fragment,e),g(q.$$.fragment,e),g(U.$$.fragment,e),g(z.$$.fragment,e),g(J.$$.fragment,e),g(W.$$.fragment,e),g(M.$$.fragment,e),g(K.$$.fragment,e),re=!1},d(e){e&&(c(t),c($),c(f),c(u),c(T),c(Y),c(j),c(B),c(I),c(D),c(Q),c(X),c(Z),c(y),c(ee),c(te),c(se),c(ne),c(oe)),h(s,e),h(n,e),h(o,e),h(r,e),h(A,e),h(x,e),h(H,e),h(R,e),h(b,e),h(P,e),h(F,e),h(E,e),h(L,e),h(q,e),h(U,e),h(z,e),h(J,e),h(W,e),h(M,e),h(K,e)}}}function wt(l,s,t){let{data:n}=s;const $=["Full keyboard navigation","Can be controlled or uncontrolled"];return l.$$set=o=>{"data"in o&&t(0,n=o.data)},[n,$]}class Pt extends Re{constructor(s){super(),je(this,s,wt,ht,He,{data:0})}}export{Pt as component,It as universal};
