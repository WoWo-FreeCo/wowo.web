import{a as B,u as D,k as E}from"./entry.f5b3768b.js";import{b,w as G,o as N,q as O,a6 as r,a0 as n,$ as l,y as _,a8 as t,F as C,V as m,J as k,G as P,ag as A,Z as u,ah as F,ai as q,af as z,ad as c,C as p,aj as J,aa as M,ab as Y}from"./swiper-vue.9b7a244a.js";import{u as Z}from"./cartStore.7763a666.js";import{G as H,a as K}from"./requestURL.3a47c6b3.js";const I=""+new URL("1.bcb2cf70.jpg",import.meta.url).href,Q=""+new URL("wo_index_01.e0db537e.jpg",import.meta.url).href,W=""+new URL("wo_index_02.8961332b.jpg",import.meta.url).href,X=""+new URL("wo_index_03.96437aed.jpg",import.meta.url).href,ss=""+new URL("wo_index_04.d21a22fa.jpg",import.meta.url).href;const d=f=>(M("data-v-bad545b8"),f=f(),Y(),f),ts=["src"],os={class:"text-center full_height"},as={class:"sub_menubar"},es={class:"container tabCommon"},ns={class:"nav nav-tabs bbottom_none labels-flex"},ls=["onClick"],cs={href:"javascript:;","data-toggle":"tab"},ds={class:"container tabCommon"},is={class:"tab-content text-left"},rs={id:"cate_1",class:"tab-pane fade active in"},_s={class:"index_pslide"},us={class:"product_img"},ps=["src"],fs=d(()=>t("span",null,"\u5E02\u5834\u50F9",-1)),hs=d(()=>t("span",null,"\u6703\u54E1\u50F9",-1)),vs=d(()=>t("span",null,"VIP\u50F9",-1)),bs=d(()=>t("span",null,"SVIP\u50F9",-1)),gs=["onClick"],ws=d(()=>t("button",null,[t("i",{class:"fa-solid fa-cart-shopping"})],-1)),xs=[ws],Cs={class:"not-found"},ms={class:"index_ad"},$s=d(()=>t("img",{src:I,alt:""},null,-1)),Ss=d(()=>t("img",{src:I,alt:""},null,-1)),ks={__name:"index",setup(f){const $=D(),L=[{id:0,url:"/bonus-point",img:Q},{id:1,url:"/",img:W},{id:2,url:"/",img:X},{id:3,url:"/",img:ss}],g={id:-1,name:"\u6240\u6709\u7522\u54C1"},w=b(g.id),S=b([]),h=b([]),x=Z();let i=b([]);G(w,o=>{if(o===g.id){i=h.value;return}i=h.value.filter(a=>a.categoryId===o),console.log(h.value)}),N(async()=>{await O(),R()});function R(){j(),y()}async function j(){try{const o=await $fetch(`${$.public.apiBase}/${H}`),{data:a}=o;S.value=[g,...a]}catch{}}async function y(){try{const o=await $fetch(`${$.public.apiBase}/${K}`),{data:a}=o;h.value=a,i.value=a,console.log(i.value,a)}catch{}}function T(o){const a=x.merch.find(e=>e.id===o.id);a?a.amount++:x.merch.push({...o,amount:1}),console.log(x.merch)}return(o,a)=>{const e=E,U=J,V=A;return u(),r("div",null,[n(V,{class:"swiper-root",modules:[_(F),_(q)],"slides-per-view":1,loop:!0,effect:"creative",autoplay:{delay:4e3,disableOnInteraction:!0},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:l(()=>[(u(),r(C,null,m(L,s=>n(U,{key:s},{default:l(()=>[n(e,{to:`${s.url}`},{default:l(()=>[t("img",{src:s.img,alt:""},null,8,ts)]),_:2},1032,["to"])]),_:2},1024)),64))]),_:1},8,["modules"]),t("section",os,[t("div",as,[t("div",es,[t("ul",ns,[(u(!0),r(C,null,m(_(S),s=>(u(),r("li",{key:s.id,class:z({active:_(w)===(s==null?void 0:s.id)}),onClick:v=>w.value=s==null?void 0:s.id},[t("a",cs,c(s.name),1)],10,ls))),128))])])]),t("div",ds,[t("div",is,[t("div",rs,[t("div",_s,[(u(!0),r(C,null,m(_(i),s=>(u(),r("div",{key:s.key,class:"product_frame"},[k(t("div",{class:"hot_sale2"},c(s.brief),513),[[P,s==null?void 0:s.brief]]),t("div",us,[n(e,{to:`/product?id=${s==null?void 0:s.id}`},{default:l(()=>{var v;return[t("img",{src:((v=s==null?void 0:s.thumbnail)==null?void 0:v.url)||"/products/p"+(s.id-10)+".jpg",alt:""},null,8,ps)]}),_:2},1032,["to"])]),t("h3",null,[n(e,{to:`/product?id=${s==null?void 0:s.id}`},{default:l(()=>[p(c(s.name),1)]),_:2},1032,["to"])]),t("ul",null,[t("li",null,[p(" $"+c(s==null?void 0:s.price)+" ",1),fs]),t("li",null,[p(" $"+c(s==null?void 0:s.memberPrice)+" ",1),hs]),t("li",null,[p(" $"+c(s==null?void 0:s.vipPrice)+" ",1),vs]),t("li",null,[p(" $"+c(s==null?void 0:s.svipPrice)+" ",1),bs]),t("li",{onClick:v=>T(s)},xs,8,gs)])]))),128)),k(t("span",Cs,"\u76EE\u524D\u6C92\u6709\u8A72\u985E\u5225\u7684\u7522\u54C1",512),[[P,!_(i).length]])])])]),n(e,{to:"/shop",class:"btn btn-main btn-large btn-more mt-50"},{default:l(()=>[p(" \u66F4\u591A\u5546\u54C1 ")]),_:1})])]),t("div",ms,[n(e,{to:"/bid"},{default:l(()=>[$s]),_:1}),n(e,{to:"/bid"},{default:l(()=>[Ss]),_:1})])])}}},js=B(ks,[["__scopeId","data-v-bad545b8"]]);export{js as default};
