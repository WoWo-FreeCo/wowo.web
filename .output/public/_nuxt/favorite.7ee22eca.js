import{_ as C,a as V}from"./ProfileSidebar.7219cf25.js";import{a as k,q as w,H as L,r as N,F as q,C as B}from"./entry.6d10207d.js";import{c as F,b as M,o as R,_ as n,aa as s,$ as l,y as e,ae as t,C as a,a0 as h,F as A,V as D,ab as T,Z as _,J as z,G as E,ad as u,a8 as G,a9 as H}from"./swiper-vue.6d0a2b42.js";import"./pageStatusStore.9c6e4568.js";const c=d=>(G("data-v-538c5331"),d=d(),H(),d),J={class:"full_height mt185ptb30 pt0"},O={class:"row"},U={class:"col-sm-9 pl20pr30"},Z=c(()=>s("h3",{class:"h3_tl border_bottom"}," \u6309\u8B9A\u597D\u7269 ",-1)),j={key:0,class:"total_love"},K={key:1,class:"empty-hint"},Q=c(()=>s("br",null,null,-1)),W={class:"row"},X={class:"flex-row col-lg-4 col-md-6 col-sm-12"},Y={class:"hot_sale2"},ss={class:"product_img"},os=["src"],es=c(()=>s("span",null,"\u5E02\u50F9",-1)),ts=c(()=>s("span",null,"\u6703\u54E1",-1)),as=c(()=>s("span",null,"VIP",-1)),cs=c(()=>s("span",null,"SVIP",-1)),rs=["onClick"],ns=c(()=>s("i",{class:"fa-solid fa-cart-shopping"},null,-1)),ls=[ns],_s={__name:"favorite",setup(d){const r=w(),m=L(),S=N(),y=q(),i=F(()=>m.favMerch),I=M(1);return R(()=>{r.status.loggedIn||S.push({path:"/login",query:{...y.query,redirect:"/favorite"}}),I.value=parseInt(i.value.length/6)+1}),(P,ds)=>{const $=C,x=V,p=B;return _(),n("div",null,[s("section",J,[l($),s("div",O,[l(x),s("div",U,[Z,e(i).length?(_(),n("div",j," \u5171 "+t(e(i).length)+" \u9805\u5546\u54C1 ",1)):(_(),n("div",K,[a(" \u76EE\u524D\u9084\u6C92\u6709\u6700\u611B\u5546\u54C1\u54E6 "),Q,l(p,{to:"/shop?category=-1",class:"btn btn-main btn-large btn-more mt-20 more-prod"},{default:h(()=>[a(" \u4F86\u53BB\u901B\u901B ")]),_:1})])),s("div",W,[s("div",X,[(_(!0),n(A,null,D(e(i),o=>{var v,f,b,g;return _(),n("div",{key:o.id,class:"product_frame"},[z(s("div",Y,[s("span",null,t(o.brief),1)],512),[[E,o.brief]]),s("div",ss,[l(p,{to:`/product?id=${o.id}`},{default:h(()=>[s("img",{src:o==null?void 0:o.coverImg,alt:""},null,8,os)]),_:2},1032,["to"])]),s("h3",null,[l(p,{to:`/product?id=${o.id}`},{default:h(()=>[a(t(o.name),1)]),_:2},1032,["to"])]),s("ul",null,[s("li",{class:u({vip_price:!((v=e(r).user)!=null&&v.memberLevel)})},[a(" $"+t(o==null?void 0:o.price)+" ",1),es],2),s("li",{class:u({vip_price:((f=e(r).user)==null?void 0:f.memberLevel)==="NORMAL"})},[a(" $"+t(o==null?void 0:o.memberPrice)+" ",1),ts],2),s("li",{class:u({vip_price:((b=e(r).user)==null?void 0:b.memberLevel)==="VIP"})},[a(" $"+t(o==null?void 0:o.vipPrice)+" ",1),as],2),s("li",{class:u({vip_price:((g=e(r).user)==null?void 0:g.memberLevel)==="SVIP"})},[a(" $"+t(o==null?void 0:o.svipPrice)+" ",1),cs],2),s("li",null,[s("button",{onClick:is=>P.addToCart(o)},ls,8,rs)])])])}),128))])]),T("",!0)])])])])}}},fs=k(_s,[["__scopeId","data-v-538c5331"]]);export{fs as default};
