import{a as H,u as q,H as U,k as j,c as z,f as J,C as Y}from"./entry.981b651e.js";import{b as h,w as Z,o as K,q as Q,_ as u,y as c,a3 as T,a0 as _,ab as W,aa as s,F as y,V as S,J as P,G as B,$ as b,ak as X,Z as l,al as m,am as aa,ad as E,ae as d,C as f,an as sa,a8 as oa,a9 as ea}from"./swiper-vue.6d0a2b42.js";import{u as na}from"./cookie.114e5c15.js";const p=v=>(oa("data-v-01ce340b"),v=v(),ea(),v),ta=["src"],ca={class:"text-center full_height"},la={class:"sub_menubar"},ra={class:"container tabCommon"},da={class:"nav nav-tabs bbottom_none labels-flex"},ia=["onClick"],ua={href:"javascript:;","data-toggle":"tab"},_a={class:"container tabCommon"},fa={class:"tab-content text-left"},ha={id:"cate_1",class:"tab-pane fade active in"},pa={class:"index_pslide"},va=["onClick"],ba={class:"product_img"},Ca=["src"],ka=p(()=>s("span",null,"\u5E02\u50F9",-1)),xa=p(()=>s("span",null,"\u6703\u54E1",-1)),$a=p(()=>s("span",null,"VIP",-1)),wa=p(()=>s("span",null,"SVIP",-1)),ga=["onClick"],ya=p(()=>s("button",null,[s("i",{class:"fa-solid fa-cart-shopping"})],-1)),Sa=[ya],Pa={class:"not-found"},Ba={__name:"index",setup(v){const C=q(),N=na("emap_711",{maxAge:60*60*24}),k={id:-1,name:"\u6240\u6709\u7522\u54C1"},x=h(k.id),I=h([]),$=h([]),w=h([]),n=U();let i=h([]);Z(x,o=>{if(o===k.id){i=$.value;return}i=$.value.filter(e=>e.categoryId===o)}),K(async()=>{await Q(),V(),console.log(N.value)});function V(){A(),D(),F()}async function A(){try{const o=await $fetch(`${C.public.apiBase}/${j}`),{data:e}=o;w.value=e,console.log(e)}catch{}}async function D(){try{const o=await $fetch(`${C.public.apiBase}/${z}`),{data:e}=o;I.value=[k,...e]}catch{}}async function F(){try{const o=await $fetch(`${C.public.apiBase}/${J}?take=30`),{data:e}=o;$.value=e,i.value=e,console.log(i.value,e)}catch{}}function M(o){var e;return(e=n.favMerch)==null?void 0:e.find(t=>t.id===(o==null?void 0:o.id))}function G(o){n.favMerch.find(r=>r.id===(o==null?void 0:o.id))?n.favMerch=n.favMerch.filter(r=>r.id!==(o==null?void 0:o.id)):n.favMerch.push(o);const t=n.favMerch;n.updateFavMerch(t)}function O(o){const e=n.merch.find(r=>r.id===o.id);e?e.amount++:n.merch.push({...o,amount:1});const t=n.merch;n.updateMerch(t)}return(o,e)=>{const t=Y,r=sa,R=X;return l(),u("div",null,[c(w)?(l(),T(R,{key:0,class:"swiper-root",modules:[c(m),c(aa)],"slides-per-view":1,loop:!0,effect:"creative",autoplay:{delay:4e3,disableOnInteraction:!0},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:_(()=>[(l(!0),u(y,null,S(c(w),a=>(l(),T(r,{key:a.id},{default:_(()=>[b(t,{to:`${a.href}`},{default:_(()=>[s("img",{src:a.img,alt:""},null,8,ta)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1},8,["modules"])):W("",!0),s("section",ca,[s("div",la,[s("div",ra,[s("ul",da,[(l(!0),u(y,null,S(c(I),a=>(l(),u("li",{key:a.id,class:E({active:c(x)===(a==null?void 0:a.id)}),onClick:g=>x.value=a==null?void 0:a.id},[s("a",ua,d(a.name),1)],10,ia))),128))])])]),s("div",_a,[s("div",fa,[s("div",ha,[s("div",pa,[(l(!0),u(y,null,S(c(i),a=>{var g;return P((l(),u("div",{key:a.key,class:"product_frame"},[s("button",{class:"add_like",onClick:L=>G(a)},[s("i",{class:E(["far fa-heart",{"fa-solid":M(a),"fa-heart":M(a)}])},null,2)],8,va),P(s("div",{class:"hot_sale2"},d(a.brief),513),[[B,a==null?void 0:a.brief]]),s("div",ba,[b(t,{to:`/product?id=${a==null?void 0:a.id}`},{default:_(()=>[s("img",{src:a==null?void 0:a.coverImg,alt:""},null,8,Ca)]),_:2},1032,["to"])]),s("h3",null,[b(t,{to:`/product?id=${a==null?void 0:a.id}`},{default:_(()=>[f(d(a.name),1)]),_:2},1032,["to"])]),s("ul",null,[s("li",null,[f(" $"+d(a==null?void 0:a.price)+" ",1),ka]),s("li",null,[f(" $"+d(a==null?void 0:a.memberPrice)+" ",1),xa]),s("li",null,[f(" $"+d(a==null?void 0:a.vipPrice)+" ",1),$a]),s("li",null,[f(" $"+d(a==null?void 0:a.svipPrice)+" ",1),wa]),s("li",{onClick:L=>O(a)},Sa,8,ga)])])),[[B,((g=a==null?void 0:a.inventory)==null?void 0:g.quantity)>=1]])}),128)),P(s("span",Pa,"\u76EE\u524D\u6C92\u6709\u8A72\u985E\u5225\u7684\u7522\u54C1",512),[[B,!c(i).length]])])])]),b(t,{to:"/shop?category=-1",class:"btn btn-main btn-large btn-more mt-20 more-prod"},{default:_(()=>[f(" \u66F4\u591A\u5546\u54C1 ")]),_:1})])])])}}},Ea=H(Ba,[["__scopeId","data-v-01ce340b"]]);export{Ea as default};