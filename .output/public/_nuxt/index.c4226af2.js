import{a as O,u as R,F as L,k as F,c as M,f as j,B as H}from"./entry.c9000b64.js";import{b as u,w as U,o as q,q as z,_ as d,y as o,a3 as B,a0 as i,ab as J,aa as a,F as g,V as S,J as P,G as m,$ as v,aj as Y,Z as n,ak as Z,al as K,ad as Q,ae as c,C as _,am as W,a8 as X,a9 as ss}from"./swiper-vue.d582d122.js";import{u as as}from"./cookie.a2deadd2.js";const p=h=>(X("data-v-da702541"),h=h(),ss(),h),ts=["src"],es={class:"text-center full_height"},os={class:"sub_menubar"},ns={class:"container tabCommon"},cs={class:"nav nav-tabs bbottom_none labels-flex"},ls=["onClick"],rs={href:"javascript:;","data-toggle":"tab"},ds={class:"container tabCommon"},is={class:"tab-content text-left"},_s={id:"cate_1",class:"tab-pane fade active in"},us={class:"index_pslide"},ps={class:"product_img"},hs=["src"],fs=p(()=>a("span",null,"\u5E02\u5834\u50F9",-1)),vs=p(()=>a("span",null,"\u6703\u54E1\u50F9",-1)),bs=p(()=>a("span",null,"VIP\u50F9",-1)),Cs=p(()=>a("span",null,"SVIP\u50F9",-1)),ks=["onClick"],xs=p(()=>a("button",null,[a("i",{class:"fa-solid fa-cart-shopping"})],-1)),$s=[xs],ws={class:"not-found"},gs={__name:"index",setup(h){const b=R(),I=as("emap_711",{maxAge:60*60*24}),C={id:-1,name:"\u6240\u6709\u7522\u54C1"},k=u(C.id),y=u([]),x=u([]),$=u([]),f=L();let l=u([]);U(k,t=>{if(t===C.id){l=x.value;return}l=x.value.filter(e=>e.categoryId===t)}),q(async()=>{await z(),T(),console.log(I.value)});function T(){E(),N(),V()}async function E(){try{const t=await $fetch(`${b.public.apiBase}/${F}`),{data:e}=t;$.value=e,console.log(e)}catch{}}async function N(){try{const t=await $fetch(`${b.public.apiBase}/${M}`),{data:e}=t;y.value=[C,...e]}catch{}}async function V(){try{const t=await $fetch(`${b.public.apiBase}/${j}?take=30`),{data:e}=t;x.value=e,l.value=e,console.log(l.value,e)}catch{}}function A(t){const e=f.merch.find(w=>w.id===t.id);e?e.amount++:f.merch.push({...t,amount:1});const r=f.merch;f.updateMerch(r)}return(t,e)=>{const r=H,w=W,D=Y;return n(),d("div",null,[o($)?(n(),B(D,{key:0,class:"swiper-root",modules:[o(Z),o(K)],"slides-per-view":1,loop:!0,effect:"creative",autoplay:{delay:4e3,disableOnInteraction:!0},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:i(()=>[(n(!0),d(g,null,S(o($),s=>(n(),B(w,{key:s.id},{default:i(()=>[v(r,{to:`${s.href}`},{default:i(()=>[a("img",{src:s.img,alt:""},null,8,ts)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1},8,["modules"])):J("",!0),a("section",es,[a("div",os,[a("div",ns,[a("ul",cs,[(n(!0),d(g,null,S(o(y),s=>(n(),d("li",{key:s.id,class:Q({active:o(k)===(s==null?void 0:s.id)}),onClick:G=>k.value=s==null?void 0:s.id},[a("a",rs,c(s.name),1)],10,ls))),128))])])]),a("div",ds,[a("div",is,[a("div",_s,[a("div",us,[(n(!0),d(g,null,S(o(l),s=>(n(),d("div",{key:s.key,class:"product_frame"},[P(a("div",{class:"hot_sale2"},c(s.brief),513),[[m,s==null?void 0:s.brief]]),a("div",ps,[v(r,{to:`/product?id=${s==null?void 0:s.id}`},{default:i(()=>[a("img",{src:s==null?void 0:s.coverImg,alt:""},null,8,hs)]),_:2},1032,["to"])]),a("h3",null,[v(r,{to:`/product?id=${s==null?void 0:s.id}`},{default:i(()=>[_(c(s.name),1)]),_:2},1032,["to"])]),a("ul",null,[a("li",null,[_(" $"+c(s==null?void 0:s.price)+" ",1),fs]),a("li",null,[_(" $"+c(s==null?void 0:s.memberPrice)+" ",1),vs]),a("li",null,[_(" $"+c(s==null?void 0:s.vipPrice)+" ",1),bs]),a("li",null,[_(" $"+c(s==null?void 0:s.svipPrice)+" ",1),Cs]),a("li",{onClick:G=>A(s)},$s,8,ks)])]))),128)),P(a("span",ws,"\u76EE\u524D\u6C92\u6709\u8A72\u985E\u5225\u7684\u7522\u54C1",512),[[m,!o(l).length]])])])]),v(r,{to:"/shop?category=-1",class:"btn btn-main btn-large btn-more mt-20 more-prod"},{default:i(()=>[_(" \u66F4\u591A\u5546\u54C1 ")]),_:1})])])])}}},Ps=O(gs,[["__scopeId","data-v-da702541"]]);export{Ps as default};