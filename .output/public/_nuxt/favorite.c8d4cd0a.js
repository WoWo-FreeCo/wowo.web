import{_ as k,a as w}from"./ProfileSidebar.ac088ac1.js";import{a as L,q as N,J as M,r as q,H as B,C as R}from"./entry.e0dd610b.js";import{c as A,b as D,o as F,_ as l,aa as s,$ as _,y as e,ae as t,C as a,a0 as g,F as J,V as T,ab as z,Z as d,J as E,G,ad as p,a8 as H,a9 as O}from"./swiper-vue.6d0a2b42.js";import"./pageStatusStore.109f1dfe.js";const c=i=>(H("data-v-c597e354"),i=i(),O(),i),U={class:"full_height mt185ptb30 pt0"},Z={class:"row"},j={class:"col-sm-9 pl20pr30"},K=c(()=>s("h3",{class:"h3_tl border_bottom"}," \u6309\u8B9A\u597D\u7269 ",-1)),Q={key:0,class:"total_love"},W={key:1,class:"empty-hint"},X=c(()=>s("br",null,null,-1)),Y={class:"row"},ss={class:"flex-row col-lg-4 col-md-6 col-sm-12"},os={class:"hot_sale2"},es={class:"product_img"},ts=["src"],as=c(()=>s("span",null,"\u5E02\u50F9",-1)),cs=c(()=>s("span",null,"\u6703\u54E1",-1)),ns=c(()=>s("span",null,"VIP",-1)),rs=c(()=>s("span",null,"SVIP",-1)),ls=["onClick"],_s=c(()=>s("i",{class:"fa-solid fa-cart-shopping"},null,-1)),ds=[_s],is={__name:"favorite",setup(i){const n=N(),r=M(),I=q(),$=B(),u=A(()=>r.favMerch),C=D(1);F(()=>{n.status.loggedIn||I.push({path:"/login",query:{...$.query,redirect:"/favorite"}}),C.value=parseInt(u.value.length/6)+1});function V(h){const v=r.merch.find(m=>m.id===h.id);v?v.amount++:r.merch.push({...h,amount:1});const f=r.merch;r.updateMerch(f)}return(h,v)=>{const f=k,m=w,b=R;return d(),l("div",null,[s("section",U,[_(f),s("div",Z,[_(m),s("div",j,[K,e(u).length?(d(),l("div",Q," \u5171 "+t(e(u).length)+" \u9805\u5546\u54C1 ",1)):(d(),l("div",W,[a(" \u76EE\u524D\u9084\u6C92\u6709\u6700\u611B\u5546\u54C1\u54E6 "),X,_(b,{to:"/shop?category=-1",class:"btn btn-main btn-large btn-more mt-20 more-prod"},{default:g(()=>[a(" \u4F86\u53BB\u901B\u901B ")]),_:1})])),s("div",Y,[s("div",ss,[(d(!0),l(J,null,T(e(u),o=>{var P,S,x,y;return d(),l("div",{key:o.id,class:"product_frame"},[E(s("div",os,[s("span",null,t(o.brief),1)],512),[[G,o.brief]]),s("div",es,[_(b,{to:`/product?id=${o.id}`},{default:g(()=>[s("img",{src:o==null?void 0:o.coverImg,alt:""},null,8,ts)]),_:2},1032,["to"])]),s("h3",null,[_(b,{to:`/product?id=${o.id}`},{default:g(()=>[a(t(o.name),1)]),_:2},1032,["to"])]),s("ul",null,[s("li",{class:p({vip_price:!((P=e(n).user)!=null&&P.memberLevel)})},[a(" $"+t(o==null?void 0:o.price)+" ",1),as],2),s("li",{class:p({vip_price:((S=e(n).user)==null?void 0:S.memberLevel)==="NORMAL"})},[a(" $"+t(o==null?void 0:o.memberPrice)+" ",1),cs],2),s("li",{class:p({vip_price:((x=e(n).user)==null?void 0:x.memberLevel)==="VIP"})},[a(" $"+t(o==null?void 0:o.vipPrice)+" ",1),ns],2),s("li",{class:p({vip_price:((y=e(n).user)==null?void 0:y.memberLevel)==="SVIP"})},[a(" $"+t(o==null?void 0:o.svipPrice)+" ",1),rs],2),s("li",null,[s("button",{onClick:us=>V(o)},ds,8,ls)])])])}),128))])]),z("",!0)])])])])}}},ms=L(is,[["__scopeId","data-v-c597e354"]]);export{ms as default};
