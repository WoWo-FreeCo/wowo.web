import{_ as o}from"./entry.bfd5dcdb.js";import{a1 as c,Z as g,a3 as E,a5 as k,a6 as P,y as s}from"./swiper-vue.6d0a2b42.js";const v={__name:"nuxt-error-page",props:{error:Object},setup(u){var n;const{error:t}=u;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),a=r===404,i=(n=t.statusMessage)!=null?n:a?"Page Not Found":"Internal Server Error",p=t.message||t.toString(),_=void 0,l=c(()=>o(()=>import("./error-404.ba766aeb.js"),["./error-404.ba766aeb.js","./entry.bfd5dcdb.js","./swiper-vue.6d0a2b42.js","./swiper-vue.c8055770.css","./entry.419a2faa.css","./composables.515d904e.js","./error-404.23f2309d.css"],import.meta.url).then(e=>e.default||e)),m=c(()=>o(()=>import("./error-500.8989b26f.js"),["./error-500.8989b26f.js","./composables.515d904e.js","./entry.bfd5dcdb.js","./swiper-vue.6d0a2b42.js","./swiper-vue.c8055770.css","./entry.419a2faa.css","./error-500.aa16ed4d.css"],import.meta.url).then(e=>e.default||e)),d=a?l:m;return(e,f)=>(g(),E(s(d),k(P({statusCode:s(r),statusMessage:s(i),description:s(p),stack:s(_)})),null,16))}},C=v;export{C as default};