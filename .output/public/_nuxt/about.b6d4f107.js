import{a as n,u as s}from"./entry.27c155a0.js";import{G as i}from"./requestURL.06cc9186.js";import{o as r,q as _,_ as l,Z as d,a7 as f}from"./swiper-vue.ba6f8b0a.js";const u=f('<section class="page-header" data-v-3e5e00fc><div class="container" data-v-3e5e00fc><h1 data-v-3e5e00fc>\u95DC\u65BC\u6211\u5011</h1><ol class="breadcrumb" data-v-3e5e00fc><li data-v-3e5e00fc><a href="/" data-v-3e5e00fc>Home</a></li><li class="active" data-v-3e5e00fc> \u95DC\u65BC\u6211\u5011 </li></ol></div></section><section class="section full_height html-container-root" data-v-3e5e00fc><div class="html-container" data-v-3e5e00fc></div></section>',2),m=[u],v={__name:"about",setup(h){const a=s();r(async()=>{await _(),c()});function c(){o()}async function o(){try{const e=await $fetch(`${a.public.apiBase}/${i}/1`),t=document.querySelector(".html-container");t.innerHTML=e}catch{}}return(e,t)=>(d(),l("div",null,m))}},y=n(v,[["__scopeId","data-v-3e5e00fc"]]);export{y as default};