import{_ as x,a as N}from"./ProfileSidebar.081b1774.js";import{a as P,g as q,h as M,f as B,m as R,e as A,k as D}from"./entry.355d3b90.js";import{c as F,b as T,o as z,_ as u,aa as s,$ as p,y as e,ac as c,C as n,a0 as g,F as E,V as G,ab as J,Z as i,J as O,G as U,ae as f,a8 as Z,a9 as j}from"./swiper-vue.2e988726.js";import"./pageStatusStore.9a177b98.js";const r=h=>(Z("data-v-6b097532"),h=h(),j(),h),H={class:"full_height mt185ptb30 pt0"},K={class:"row"},Q={class:"col-sm-9 pl20pr30"},W=r(()=>s("h3",{class:"h3_tl border_bottom"}," \u6309\u8B9A\u597D\u7269 ",-1)),X={key:0,class:"total_love"},Y={key:1,class:"empty-hint"},ss=r(()=>s("br",null,null,-1)),os={class:"row"},ts={class:"flex-row col-lg-4 col-md-6 col-sm-12"},as={class:"hot_sale2"},es={class:"product_img"},cs=["src"],ns=r(()=>s("span",null,"\u5E02\u50F9",-1)),rs=r(()=>s("span",null,"\u6703\u54E1",-1)),ls=r(()=>s("span",null,"VIP",-1)),_s=r(()=>s("span",null,"SVIP",-1)),ds=["onClick"],us=r(()=>s("i",{class:"fa-solid fa-cart-shopping"},null,-1)),ps=[us],is={__name:"favorite",setup(h){const _=q(),d=M(),$=B(),k=R(),I=A(),v=F(()=>d.favMerch),V=T(1);z(()=>{_.status.loggedIn||$.push({path:"/login",query:{...k.query,redirect:"/favorite"}}),V.value=parseInt(v.value.length/6)+1});async function m(a){try{const t=d.merch.find(l=>l.id===a.id);if(t){const l=(t==null?void 0:t.quantity)+1;await d.updateCartItem({type:a==null?void 0:a.attribute,cartItemId:t==null?void 0:t.cartItemId,productId:t==null?void 0:t.id,quantity:l}),I.success(`\u6B64\u5546\u54C1\u5DF2\u5B58\u5728\u8CFC\u7269\u8ECA\uFF0C\u76EE\u524D\u7E3D\u6578\uFF1A${l}`)}else await d.postCartItem({type:a==null?void 0:a.attribute,productId:a==null?void 0:a.id,quantity:1}),I.success("\u5546\u54C1\u5DF2\u52A0\u5165\u8CFC\u7269\u8ECA");await d.fetchCart()}catch(t){console.log(t)}}return(a,t)=>{const l=x,L=N,b=D;return i(),u("div",null,[s("section",H,[p(l),s("div",K,[p(L),s("div",Q,[W,e(v).length?(i(),u("div",X," \u5171 "+c(e(v).length)+" \u9805\u5546\u54C1 ",1)):(i(),u("div",Y,[n(" \u76EE\u524D\u9084\u6C92\u6709\u6700\u611B\u5546\u54C1\u54E6 "),ss,p(b,{to:"/shop?category=-1",class:"btn btn-main btn-large btn-more mt-20 more-prod"},{default:g(()=>[n(" \u4F86\u53BB\u901B\u901B ")]),_:1})])),s("div",os,[s("div",ts,[(i(!0),u(E,null,G(e(v),o=>{var y,S,C,w;return i(),u("div",{key:o.id,class:"product_frame"},[O(s("div",as,[s("span",null,c(o.brief),1)],512),[[U,o.brief]]),s("div",es,[p(b,{to:`/product?id=${o.id}`},{default:g(()=>[s("img",{src:o==null?void 0:o.coverImg,alt:""},null,8,cs)]),_:2},1032,["to"])]),s("h3",null,[p(b,{to:`/product?id=${o.id}`},{default:g(()=>[n(c(o.name),1)]),_:2},1032,["to"])]),s("ul",null,[s("li",{class:f({vip_price:!((y=e(_).user)!=null&&y.memberLevel)})},[n(" $"+c(o==null?void 0:o.price)+" ",1),ns],2),s("li",{class:f({vip_price:((S=e(_).user)==null?void 0:S.memberLevel)==="NORMAL"})},[n(" $"+c(o==null?void 0:o.memberPrice)+" ",1),rs],2),s("li",{class:f({vip_price:((C=e(_).user)==null?void 0:C.memberLevel)==="VIP"})},[n(" $"+c(o==null?void 0:o.vipPrice)+" ",1),ls],2),s("li",{class:f({vip_price:((w=e(_).user)==null?void 0:w.memberLevel)==="SVIP"})},[n(" $"+c(o==null?void 0:o.svipPrice)+" ",1),_s],2),s("li",null,[s("button",{onClick:hs=>m(o)},ps,8,ds)])])])}),128))])]),J("",!0)])])])])}}},Is=P(is,[["__scopeId","data-v-6b097532"]]);export{Is as default};
