import{a as L,u as O,k as j}from"./entry.713d8cd5.js";import{b as h,w as A,o as U,q as F,_,y as n,a3 as y,a0 as c,ab as H,aa as t,F as k,V as S,J as P,G as B,$ as u,ai as M,Z as l,aj as q,ak as z,ad as J,ae as r,C as p,al as Y,a8 as Z,a9 as K}from"./swiper-vue.ba6f8b0a.js";import{u as Q}from"./cartStore.85040084.js";import{h as W,a as X,b as ss}from"./requestURL.06cc9186.js";const I=""+new URL("1.bcb2cf70.jpg",import.meta.url).href;const d=f=>(Z("data-v-5c7313cb"),f=f(),K(),f),ts=["src"],as={class:"text-center full_height"},os={class:"sub_menubar"},es={class:"container tabCommon"},ns={class:"nav nav-tabs bbottom_none labels-flex"},cs=["onClick"],ls={href:"javascript:;","data-toggle":"tab"},rs={class:"container tabCommon"},ds={class:"tab-content text-left"},is={id:"cate_1",class:"tab-pane fade active in"},_s={class:"index_pslide"},us={class:"product_img"},ps=["src"],hs=d(()=>t("span",null,"\u5E02\u5834\u50F9",-1)),fs=d(()=>t("span",null,"\u6703\u54E1\u50F9",-1)),vs=d(()=>t("span",null,"VIP\u50F9",-1)),bs=d(()=>t("span",null,"SVIP\u50F9",-1)),Cs=["onClick"],xs=d(()=>t("button",null,[t("i",{class:"fa-solid fa-cart-shopping"})],-1)),$s=[xs],gs={class:"not-found"},ws={class:"index_ad"},ks=d(()=>t("img",{src:I,alt:""},null,-1)),Ss=d(()=>t("img",{src:I,alt:""},null,-1)),ms={__name:"index",setup(f){const C=O(),x={id:-1,name:"\u6240\u6709\u7522\u54C1"},$=h(x.id),m=h([]),v=h([]),g=h([]),w=Q();let i=h([]);A($,a=>{if(a===x.id){i=v.value;return}i=v.value.filter(o=>o.categoryId===a),console.log(v.value)}),U(async()=>{await F(),T()});function T(){E(),N(),V()}async function E(){try{const a=await $fetch(`${C.public.apiBase}/${W}`),{data:o}=a;g.value=o,console.log(o)}catch{}}async function N(){try{const a=await $fetch(`${C.public.apiBase}/${X}`),{data:o}=a;m.value=[x,...o]}catch{}}async function V(){try{const a=await $fetch(`${C.public.apiBase}/${ss}`),{data:o}=a;v.value=o,i.value=o,console.log(i.value,o)}catch{}}function R(a){const o=w.merch.find(e=>e.id===a.id);o?o.amount++:w.merch.push({...a,amount:1}),console.log(w.merch)}return(a,o)=>{const e=j,D=Y,G=M;return l(),_("div",null,[n(g)?(l(),y(G,{key:0,class:"swiper-root",modules:[n(q),n(z)],"slides-per-view":1,loop:!0,effect:"creative",autoplay:{delay:4e3,disableOnInteraction:!0},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:c(()=>[(l(!0),_(k,null,S(n(g),s=>(l(),y(D,{key:s.id},{default:c(()=>[u(e,{to:`${s.href}`},{default:c(()=>[t("img",{src:s.img,alt:""},null,8,ts)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1},8,["modules"])):H("",!0),t("section",as,[t("div",os,[t("div",es,[t("ul",ns,[(l(!0),_(k,null,S(n(m),s=>(l(),_("li",{key:s.id,class:J({active:n($)===(s==null?void 0:s.id)}),onClick:b=>$.value=s==null?void 0:s.id},[t("a",ls,r(s.name),1)],10,cs))),128))])])]),t("div",rs,[t("div",ds,[t("div",is,[t("div",_s,[(l(!0),_(k,null,S(n(i),s=>(l(),_("div",{key:s.key,class:"product_frame"},[P(t("div",{class:"hot_sale2"},r(s.brief),513),[[B,s==null?void 0:s.brief]]),t("div",us,[u(e,{to:`/product?id=${s==null?void 0:s.id}`},{default:c(()=>{var b;return[t("img",{src:((b=s==null?void 0:s.thumbnail)==null?void 0:b.url)||"/products/p"+(s.id-10)+".jpg",alt:""},null,8,ps)]}),_:2},1032,["to"])]),t("h3",null,[u(e,{to:`/product?id=${s==null?void 0:s.id}`},{default:c(()=>[p(r(s.name),1)]),_:2},1032,["to"])]),t("ul",null,[t("li",null,[p(" $"+r(s==null?void 0:s.price)+" ",1),hs]),t("li",null,[p(" $"+r(s==null?void 0:s.memberPrice)+" ",1),fs]),t("li",null,[p(" $"+r(s==null?void 0:s.vipPrice)+" ",1),vs]),t("li",null,[p(" $"+r(s==null?void 0:s.svipPrice)+" ",1),bs]),t("li",{onClick:b=>R(s)},$s,8,Cs)])]))),128)),P(t("span",gs,"\u76EE\u524D\u6C92\u6709\u8A72\u985E\u5225\u7684\u7522\u54C1",512),[[B,!n(i).length]])])])]),u(e,{to:"/shop",class:"btn btn-main btn-large btn-more mt-50"},{default:c(()=>[p(" \u66F4\u591A\u5546\u54C1 ")]),_:1})])]),t("div",ws,[u(e,{to:"/bid"},{default:c(()=>[ks]),_:1}),u(e,{to:"/bid"},{default:c(()=>[Ss]),_:1})])])}}},Ts=L(ms,[["__scopeId","data-v-5c7313cb"]]);export{Ts as default};
