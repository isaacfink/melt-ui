import{b as f,a as N}from"./callbacks.6723c42c.js";import{i as y,a as p}from"./index.a1398546.js";import{w as h}from"./index.cb808db3.js";import{D as m}from"./scheduler.2943ef39.js";function z(t,e,n=!0){return e===t.length-1?n?t[0]:t[e]:t[e+1]}function K(t,e,n=!0){return e===0?n?t[t.length-1]:t[e]:t[e-1]}function L(t){return t[t.length-1]}function J(t,e){return t.map((n,s)=>t[(e+s)%t.length])}function H(t,...e){const n={};for(const s of Object.keys(t))e.includes(s)||(n[s]=t[s]);return n}const u={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",HOME:"Home",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control"},x=(t="ltr",e="horizontal")=>({horizontal:t==="rtl"?u.ARROW_LEFT:u.ARROW_RIGHT,vertical:u.ARROW_DOWN})[e??"horizontal"],F=(t="ltr",e="horizontal")=>({horizontal:t==="rtl"?u.ARROW_RIGHT:u.ARROW_LEFT,vertical:u.ARROW_UP})[e??"horizontal"],I=(t="ltr",e="horizontal")=>({nextKey:x(t,e),prevKey:F(t,e)});function G(t){return window.getComputedStyle(t).getPropertyValue("direction")}const U={orientation:"horizontal",activateOnFocus:!0,loop:!0,autoSet:!0};function Q(t){const e={...U,...t},n=h(H(e,"value")),s=h(e.value);let d=e.value;s.subscribe(r=>{var i;(i=e.onChange)==null||i.call(e,r)});const D=f("tabs-root",{stores:n,returned:r=>({"data-orientation":r.orientation})}),_=f("list",{stores:n,returned:r=>({role:"tablist","aria-orientation":r.orientation,"data-orientation":r.orientation})}),k=r=>typeof r=="string"?{value:r}:r,w=f("trigger",{stores:[s,n],returned:([r,i])=>o=>{const{value:a,disabled:l}=k(o);return!r&&!d&&i.autoSet&&(d=a,s.set(a)),{role:"tab","data-state":y?r===a?"active":"inactive":d===a?"active":"inactive",tabindex:r===a?0:-1,"data-value":a,"data-orientation":i.orientation,"data-disabled":l?!0:void 0,disabled:l}},action:r=>({destroy:N(p(r,"focus",()=>{const o=m(n),a=r.dataset.disabled==="true",l=r.dataset.value;o.activateOnFocus&&!a&&l!==void 0&&s.set(l)}),p(r,"click",o=>{if(r.dataset.disabled==="true")return;const l=o.currentTarget;l&&"focus"in l&&l.focus()}),p(r,"keydown",o=>{var R,E,O,T;const a=r.dataset.value,g=o.currentTarget.closest("[data-melt-tabs-root]");if(!g||!a)return;const b=m(n),c=Array.from(g.querySelectorAll('[role="tab"]')).filter(v=>!v.hasAttribute("data-disabled")),A=Array.from(c??[]).findIndex(v=>v===o.target),W=G(g),{nextKey:C,prevKey:S}=I(W,b.orientation);o.key===C?(o.preventDefault(),(R=z(c,A,b.loop))==null||R.focus()):o.key===S?(o.preventDefault(),(E=K(c,A,b.loop))==null||E.focus()):o.key===u.ENTER||o.key===u.SPACE?(o.preventDefault(),s.set(a)):o.key===u.HOME?(o.preventDefault(),(O=c[0])==null||O.focus()):o.key===u.END&&(o.preventDefault(),(T=L(c))==null||T.focus())}))})}),P=f("content",{stores:s,returned:r=>i=>({role:"tabpanel","aria-labelledby":i,hidden:y?r===i?void 0:!0:d===i?void 0:!0,tabindex:0})});return{value:s,root:D,list:_,trigger:w,content:P,options:n}}export{I as a,Q as c,G as g,u as k,H as o,J as w};
