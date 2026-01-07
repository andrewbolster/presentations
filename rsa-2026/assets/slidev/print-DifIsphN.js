import{d as _,M as u,I as h,f as n,g as t,t as s,B as r,F as f,N as g,o as l,i as v,e as x,A as b}from"../modules/vue-CZtuCL3n.js";import{g as N,e as y,c as m}from"../index-DaFJ1F3f.js";import{_ as k}from"./NoteDisplay.vue_vue_type_style_index_0_lang-Crm7sI3D.js";import"../modules/shiki-CdnwA0eM.js";const w={id:"page-root"},B={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},H={class:"text-lg"},M={class:"font-bold flex gap-2"},S={class:"opacity-50"},A={key:0,class:"border-main mb-8"},z=_({__name:"print",setup(C){const{slides:d,total:p}=N();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${m.title}`});const i=h(()=>d.value.map(o=>{var a;return(a=o.meta)==null?void 0:a.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,a)=>(l(),n("div",w,[t("div",B,[t("div",L,[t("h1",T,s(r(m).title),1),t("div",V,s(new Date().toLocaleString()),1)]),(l(!0),n(f,null,g(i.value,(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",M,[t("div",S,s(e==null?void 0:e.no)+"/"+s(r(p)),1),b(" "+s(e==null?void 0:e.title)+" ",1),a[0]||(a[0]=t("div",{class:"flex-auto"},null,-1))])]),x(k,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(l(),n("hr",A)):v("v-if",!0)]))),128))])]))}});export{z as default};
