import{a as Y,e as Z,u as K,g as Q,h as W,w as X,x as m,y as aa,k as sa}from"./entry.355d3b90.js";import{b as v,w as ea,o as ta,q as na,_ as u,y as o,a3 as R,a0 as _,ab as oa,aa as e,F as x,V as M,J as B,G as P,$ as k,aj as ca,Z as r,ak as ra,al as la,ae as i,ac as l,C as p,am as da,a8 as ua,a9 as _a}from"./swiper-vue.2e988726.js";const d=b=>(ua("data-v-e1a813af"),b=b(),_a(),b),ia=d(()=>e("div",{class:"skeleton"},null,-1)),pa=["src"],fa={class:"text-center full_height"},ha={class:"sub_menubar"},va={class:"container tabCommon"},ba={class:"nav nav-tabs bbottom_none labels-flex"},Ca=["onClick"],ka={href:"javascript:;","data-toggle":"tab"},ya={class:"container tabCommon"},$a={class:"tab-content text-left"},wa={id:"cate_1",class:"tab-pane fade active in"},Ia={class:"index_pslide"},Sa=["onClick"],ga={class:"product_img card"},xa=d(()=>e("div",{class:"skeleton"},null,-1)),Ma=["src"],Ba=d(()=>e("span",null,"\u5E02\u50F9",-1)),Pa=d(()=>e("span",null,"\u6703\u54E1",-1)),Ta=d(()=>e("span",null,"VIP",-1)),La=d(()=>e("span",null,"SVIP",-1)),Va=["onClick"],Ea=d(()=>e("button",null,[e("i",{class:"fa-solid fa-cart-shopping"})],-1)),Na=[Ea],Aa={class:"not-found"},Oa={__name:"index",setup(b){const T=Z(),y=K(),$={id:-1,name:"\u6240\u6709\u7522\u54C1"},w=v($.id),L=v([]),I=v([]),S=v([]),C=Q(),c=W(),q=Array.from({length:30},()=>({type:"fake"})),f=v(q);ea(w,s=>{if(s===$.id){f.value=I.value;return}f.value=I.value.filter(t=>t.categoryId===s)}),ta(async()=>{await na(),D()});function D(){F(),G(),j()}async function F(){try{const s=await $fetch(`${y.public.apiBase}/${X}`),{data:t}=s;S.value=t}catch{}}async function G(){try{const s=await $fetch(`${y.public.apiBase}/${m}`),{data:t}=s;L.value=[$,...t]}catch{}}async function j(){try{const s=await $fetch(`${y.public.apiBase}/${aa}?take=30`),{data:t}=s;I.value=t,f.value=t}catch{}}function V(s){var t;return(t=c.favMerch)==null?void 0:t.find(n=>n.id===(s==null?void 0:s.id))}function H(s){c.favMerch.find(h=>h.id===(s==null?void 0:s.id))?c.favMerch=c.favMerch.filter(h=>h.id!==(s==null?void 0:s.id)):c.favMerch.push(s);const n=c.favMerch;c.updateFavMerch(n)}async function U(s){try{const t=c.merch.find(n=>n.id===s.id);if(t){const n=(t==null?void 0:t.quantity)+1;await c.updateCartItem({type:s==null?void 0:s.attribute,cartItemId:t==null?void 0:t.cartItemId,productId:t==null?void 0:t.id,quantity:n}),T.success(`\u6B64\u5546\u54C1\u5DF2\u5B58\u5728\u8CFC\u7269\u8ECA\uFF0C\u76EE\u524D\u7E3D\u6578\uFF1A${n}`)}else await c.postCartItem({type:s==null?void 0:s.attribute,productId:s==null?void 0:s.id,quantity:1}),T.success("\u5546\u54C1\u5DF2\u52A0\u5165\u8CFC\u7269\u8ECA");await c.fetchCart()}catch(t){console.log(t)}}return(s,t)=>{const n=sa,h=da,z=ca;return r(),u("div",null,[o(S)?(r(),R(z,{key:0,class:"swiper-root",modules:[o(ra),o(la)],"slides-per-view":1,loop:!0,effect:"creative",autoplay:{delay:4e3,disableOnInteraction:!0},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:_(()=>[ia,(r(!0),u(x,null,M(o(S),a=>(r(),R(h,{key:a.id},{default:_(()=>[k(n,{to:`${a.href}`},{default:_(()=>[e("img",{src:a.img,alt:""},null,8,pa)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1},8,["modules"])):oa("",!0),e("section",fa,[e("div",ha,[e("div",va,[e("ul",ba,[(r(!0),u(x,null,M(o(L),a=>(r(),u("li",{key:a.id,class:i({active:o(w)===(a==null?void 0:a.id)}),onClick:g=>w.value=a==null?void 0:a.id},[e("a",ka,l(a.name),1)],10,Ca))),128))])])]),e("div",ya,[e("div",$a,[e("div",wa,[e("div",Ia,[(r(!0),u(x,null,M(o(f),a=>{var g,E,N,A,O;return B((r(),u("div",{key:a==null?void 0:a.id,class:"product_frame"},[e("button",{class:"add_like",onClick:J=>H(a)},[e("i",{class:i(["far fa-heart",{"fa-solid":V(a),"fa-heart":V(a)}])},null,2)],8,Sa),B(e("div",{class:"hot_sale2"},l(a.brief),513),[[P,a==null?void 0:a.brief]]),e("div",ga,[xa,k(n,{to:`/product?id=${a==null?void 0:a.id}`},{default:_(()=>[e("img",{src:a==null?void 0:a.coverImg,alt:""},null,8,Ma)]),_:2},1032,["to"])]),e("h3",null,[k(n,{to:`/product?id=${a==null?void 0:a.id}`},{default:_(()=>[p(l(a.name),1)]),_:2},1032,["to"])]),e("ul",null,[e("li",{class:i({vip_price:!((g=o(C).user)!=null&&g.memberLevel)})},[p(" $"+l(a==null?void 0:a.price)+" ",1),Ba],2),e("li",{class:i({vip_price:((E=o(C).user)==null?void 0:E.memberLevel)==="NORMAL"})},[p(" $"+l(a==null?void 0:a.memberPrice)+" ",1),Pa],2),e("li",{class:i({vip_price:((N=o(C).user)==null?void 0:N.memberLevel)==="VIP"})},[p(" $"+l(a==null?void 0:a.vipPrice)+" ",1),Ta],2),e("li",{class:i({vip_price:((A=o(C).user)==null?void 0:A.memberLevel)==="SVIP"})},[p(" $"+l(a==null?void 0:a.svipPrice)+" ",1),La],2),e("li",{onClick:J=>U(a)},Na,8,Va)])])),[[P,((O=a==null?void 0:a.inventory)==null?void 0:O.quantity)>=1||(a==null?void 0:a.type)==="fake"]])}),128)),B(e("span",Aa,"\u76EE\u524D\u6C92\u6709\u8A72\u985E\u5225\u7684\u7522\u54C1",512),[[P,!o(f).length]])])])]),k(n,{to:"/shop?category=-1",class:"btn btn-main btn-large btn-more mt-20 more-prod"},{default:_(()=>[p(" \u66F4\u591A\u5546\u54C1 ")]),_:1})])])])}}},Da=Y(Oa,[["__scopeId","data-v-e1a813af"]]);export{Da as default};
