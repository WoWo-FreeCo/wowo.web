import{a as s,u as n}from"./entry.9b1a5665.js";import{G as i}from"./requestURL.5272b7f6.js";import{o as d,q as r,a6 as _,Z as l,a7 as f}from"./swiper-vue.db7c70f4.js";const u=f('<section class="page-header" data-v-1f5da24e><div class="container" data-v-1f5da24e><h1 data-v-1f5da24e>\u95DC\u65BC\u6211\u5011</h1><ol class="breadcrumb" data-v-1f5da24e><li data-v-1f5da24e><a href="/" data-v-1f5da24e>Home</a></li><li class="active" data-v-1f5da24e> \u95DC\u65BC\u6211\u5011 </li></ol></div></section><section class="section full_height" data-v-1f5da24e><div class="html-container" data-v-1f5da24e></div></section>',2),v=[u],m={__name:"about",setup(h){const t=n();d(async()=>{await r(),o()});function o(){c()}async function c(){try{const a=await $fetch(`${t.public.apiBase}/${i}/1`),e=document.querySelector(".html-container");e.innerHTML=a}catch{}}return(a,e)=>(l(),_("div",null,v))}},y=s(m,[["__scopeId","data-v-1f5da24e"]]);export{y as default};