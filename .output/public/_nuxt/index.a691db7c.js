import{a as D,u as B,h as E}from"./entry.8c805425.js";import{b as v,w as N,o as A,q as G,a6 as c,a0 as _,$ as u,v as l,a8 as t,F as x,V as C,H as k,D as P,a7 as O,ag as F,Z as r,ah as q,ai as z,af as H,ae as n,A as p,aa as M,ab as Y,aj as Z}from"./swiper-vue.08c57f7b.js";import{u as J}from"./cartStore.6784a142.js";import{c as K,G as Q}from"./requestURL.059e2fdd.js";const L=""+new URL("1.bcb2cf70.jpg",import.meta.url).href,W=""+new URL("wo_index_01.e0db537e.jpg",import.meta.url).href,X=""+new URL("wo_index_02.8961332b.jpg",import.meta.url).href,aa=""+new URL("wo_index_03.96437aed.jpg",import.meta.url).href,ta=""+new URL("wo_index_04.d21a22fa.jpg",import.meta.url).href;const d=f=>(M("data-v-130bb3df"),f=f(),Y(),f),sa=["src"],ea={class:"text-center full_height"},na={class:"sub_menubar"},oa={class:"container tabCommon"},ca={class:"nav nav-tabs bbottom_none labels-flex"},la=["onClick"],ra={href:"javascript:;","data-toggle":"tab"},da={class:"container tabCommon"},ia={class:"tab-content text-left"},_a={id:"cate_1",class:"tab-pane fade active in"},ua={class:"index_pslide"},pa={class:"product_img"},fa=["src"],ha=d(()=>t("span",null,"\u5E02\u5834\u50F9",-1)),ba=d(()=>t("span",null,"\u6703\u54E1\u50F9",-1)),va=d(()=>t("span",null,"VIP\u50F9",-1)),ga=d(()=>t("span",null,"SVIP\u50F9",-1)),wa=["onClick"],ma=d(()=>t("button",null,[t("i",{class:"fa-solid fa-cart-shopping"})],-1)),xa=[ma],Ca={class:"not-found"},$a=d(()=>t("a",{href:"/shop",class:"btn btn-main btn-large btn-more mt-50"},"\u66F4\u591A\u5546\u54C1",-1)),Sa=O('<div class="index_ad" data-v-130bb3df><a href="/bid" target="new" data-v-130bb3df><img src="'+L+'" alt="" data-v-130bb3df></a><a href="/bid" target="new" data-v-130bb3df><img src="'+L+'" alt="" data-v-130bb3df></a></div>',1),ka={__name:"index",setup(f){const $=B(),R=[{id:0,url:"/bonus-point",img:W},{id:1,url:"/",img:X},{id:2,url:"/",img:aa},{id:3,url:"/",img:ta}],g={id:-1,name:"\u6240\u6709\u7522\u54C1"},w=v(g.name),S=v([]),h=v([]),m=J();let o=v([]);N(w,s=>{if(s===g.name){o=h.value;return}o=h.value.filter(e=>e.category===s),console.log(h.value)}),A(async()=>{await G(),j()});function j(){I(),T()}async function I(){try{const s=await $fetch(`${$.public.apiBase}/${K}`),{data:e}=s;S.value=[g,...e]}catch{}}async function T(){try{const s=await $fetch(`${$.public.apiBase}/${Q}`),{data:e}=s;h.value=e,o.value=e,console.log(o.value,e)}catch{}}function y(s){const e=m.merch.find(i=>i.id===s.id);e?e.amount++:m.merch.push({...s,amount:1}),console.log(m.merch)}return(s,e)=>{const i=E,U=Z,V=F;return r(),c("div",null,[_(V,{class:"swiper-root",modules:[l(q),l(z)],"slides-per-view":1,loop:!0,effect:"creative",autoplay:{delay:4e3,disableOnInteraction:!0},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:u(()=>[(r(),c(x,null,C(R,a=>_(U,{key:a},{default:u(()=>[_(i,{to:`${a.url}`},{default:u(()=>[t("img",{src:a.img,alt:""},null,8,sa)]),_:2},1032,["to"])]),_:2},1024)),64))]),_:1},8,["modules"]),t("section",ea,[t("div",na,[t("div",oa,[t("ul",ca,[(r(!0),c(x,null,C(l(S),a=>(r(),c("li",{key:a.id,class:H({active:l(w)===(a==null?void 0:a.name)}),onClick:b=>w.value=a==null?void 0:a.name},[t("a",ra,n(a.name),1)],10,la))),128))])])]),t("div",da,[t("div",ia,[t("div",_a,[t("div",ua,[(r(!0),c(x,null,C(l(o),a=>(r(),c("div",{key:a.key,class:"product_frame"},[k(t("div",{class:"hot_sale2"},n(a.brief),513),[[P,a==null?void 0:a.brief]]),t("div",pa,[_(i,{to:`/product?id=${a==null?void 0:a.id}`,target:"_blank"},{default:u(()=>{var b;return[t("img",{src:((b=a==null?void 0:a.thumbnail)==null?void 0:b.url)||"/products/p"+(a.id-10)+".jpg",alt:""},null,8,fa)]}),_:2},1032,["to"])]),t("h3",null,[_(i,{to:`/product?id=${a==null?void 0:a.id}`,target:"_blank"},{default:u(()=>[p(n(a.name),1)]),_:2},1032,["to"])]),t("ul",null,[t("li",null,[p(" $"+n(a==null?void 0:a.price)+" ",1),ha]),t("li",null,[p(" $"+n(a==null?void 0:a.memberPrice)+" ",1),ba]),t("li",null,[p(" $"+n(a==null?void 0:a.vipPrice)+" ",1),va]),t("li",null,[p(" $"+n(a==null?void 0:a.svipPrice)+" ",1),ga]),t("li",{onClick:b=>y(a)},xa,8,wa)])]))),128)),k(t("span",Ca,"\u76EE\u524D\u6C92\u6709\u8A72\u985E\u5225\u7684\u7522\u54C1",512),[[P,!l(o).length]])])])]),$a])]),Sa])}}},Ia=D(ka,[["__scopeId","data-v-130bb3df"]]);export{Ia as default};
