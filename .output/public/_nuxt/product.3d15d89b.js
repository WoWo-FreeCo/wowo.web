import{b as p,c as U,o as z,q as J,_ as m,aa as t,ad as q,y as s,ae as d,$ as g,a0 as C,C as u,J as Z,G as K,i as Q,F as B,V as L,ab as W,a7 as X,aj as Y,f as tt,Z as v,a3 as at,ak as st,al as et,an as ot,ao as nt,a8 as ct,a9 as it,am as lt}from"./swiper-vue.d582d122.js";import{a as rt,F as dt,E as ut,q as _t,u as pt,R as vt,B as ht}from"./entry.c9000b64.js";const c=h=>(ct("data-v-a6084b08"),h=h(),it(),h),ft={class:"full_height mt185ptb30"},mt={class:"container"},bt={class:"row product_flex"},gt={class:"col-md-6 col-sm-12 single-product-slider"},Ct={class:"product_frame"},wt=c(()=>t("span",{class:"pagingInfo"},null,-1)),yt={class:"hot_sale"},kt={class:"main_product"},xt=["src"],St={class:"col-md-6 col-sm-12 single-product-details"},It=c(()=>t("ol",{class:"breadcrumb"},[t("li",null,[t("a",{href:"/"},"Home")]),t("li",null,[t("a",{href:"/shop"},"\u7522\u54C1\u4ECB\u7D39")])],-1)),Pt={class:"prod-name",title:"\u7522\u54C1\u540D\u7A31"},Mt={id:"productForm",action:"javascript:;"},Tt={class:"product-price mt-0"},$t=c(()=>t("span",null,"\u5E02\u5834\u50F9",-1)),Nt=c(()=>t("span",{class:"m_icon"},"$",-1)),Vt=c(()=>t("span",null,"\u6703\u54E1\u50F9",-1)),Ft=c(()=>t("span",{class:"m_icon"},"$",-1)),qt={class:"vip_price"},Bt=c(()=>t("span",null,"VIP\u50F9",-1)),Lt=c(()=>t("span",{class:"m_icon"},"$",-1)),Rt={class:"vip_price"},Dt=c(()=>t("span",null,"SVIP\u50F9",-1)),Et=c(()=>t("span",{class:"m_icon"},"$",-1)),At={class:"howup_vip"},Ht=c(()=>t("i",{class:"fa-regular fa-circle-up"},null,-1)),jt={class:"mt-20"},Ot=c(()=>t("i",{class:"fa-solid fa-cart-shopping"},null,-1)),Gt=c(()=>t("i",{class:"fa-solid fa-dollar-sign"},null,-1)),Ut={class:"product_tab mt-20"},zt={class:"nav nav-tabs"},Jt=["onClick"],Zt={"data-toggle":"tab",href:"javascript:;","aria-expanded":"true"},Kt=X('<div class="tab-content" data-v-a6084b08><div id="details" class="tab-pane fade active in" data-v-a6084b08><div class="html-container" data-v-a6084b08></div></div><div id="tab2" class="tab-pane fade" data-v-a6084b08> 2 </div><div id="tab3" class="tab-pane fade" data-v-a6084b08> 3 </div><div id="tab4" class="tab-pane fade" data-v-a6084b08> 4 </div></div>',1),Qt={__name:"product",setup(h){const i=dt(),R=ut(),w=_t(),D=pt(),E=p([]),o=p({}),y=p(!0),f=p(1),k=p(0),x=U(()=>{var e;return(e=i.favMerch)==null?void 0:e.find(a=>a.id===o.value.id)});z(async()=>{await J(),await A(),I()});async function A(){var e;try{const a=await $fetch(`${D.public.apiBase}/${vt((e=R.query)==null?void 0:e.id)}`);E.value=a.data;const n=a.data;if(!n)return H();o.value=n}catch(a){console.log(a)}y.value=!1}function H(){w.push({path:"/"})}function S(e){const a=i.merch.find(b=>b.id===e.id),n=f.value;a?a.amount=n:i.merch.push({...e,amount:n});const _=i.merch;i.updateMerch(_)}function j(){i.favMerch.find(n=>n.id===o.value.id)?i.favMerch=i.favMerch.filter(n=>n.id!==o.value.id):i.favMerch.push(o.value);const a=i.favMerch;i.updateFavMerch(a)}function O(e){S(e);const a=(e==null?void 0:e.attribute)==="COLD_CHAIN"?{type:"cold-chain"}:{};w.push({path:"/cart",query:{...a}})}function I(e=0){var n,_;const a=document.querySelector(".html-container");a.innerHTML=(_=(n=o.value)==null?void 0:n.markdownInfos[e])==null?void 0:_.text,k.value=e}return(e,a)=>{var P,M,T,$,N,V,F;const n=lt,_=Y,b=ht,G=tt("n-input-number");return v(),m("div",null,[t("section",ft,[t("div",mt,[t("div",bt,[t("div",gt,[t("div",Ct,[wt,t("button",{class:"add_like",onClick:j},[t("i",{class:q(["far fa-heart",{"fa-solid":s(x),"fa-heart":s(x)}])},null,2)]),t("div",yt,[t("span",null,d((P=s(o))==null?void 0:P.brief),1)]),t("div",kt,[g(_,{class:"swiper-root",modules:[s(st),s(et),s(ot),s(nt)],"slides-per-view":1,loop:!0,"initial-slide":1,effect:"creative",autoplay:{delay:4e3,disableOnInteraction:!0},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:C(()=>{var l;return[(v(!0),m(B,null,L((l=s(o))==null?void 0:l.images,r=>(v(),at(n,{key:r==null?void 0:r.img},{default:C(()=>[t("img",{src:r.img,alt:""},null,8,xt)]),_:2},1024))),128))]}),_:1},8,["modules"])])])]),t("div",St,[It,t("h2",Pt,d((M=s(o))==null?void 0:M.name),1),t("form",Mt,[t("ul",Tt,[t("li",null,[$t,Nt,u(d(((T=s(o))==null?void 0:T.price)||0),1)]),t("li",null,[Vt,Ft,u(d((($=s(o))==null?void 0:$.memberPrice)||0),1)]),t("li",qt,[Bt,Lt,u(d(((N=s(o))==null?void 0:N.vipPrice)||0),1)]),t("li",Rt,[Dt,Et,u(d(((V=s(o))==null?void 0:V.svipPrice)||0),1)])]),t("span",At,[Ht,g(b,{to:"/profile"},{default:C(()=>[u("\u6211\u8981\u5347\u7B49")]),_:1})]),Z(g(G,{value:s(f),"onUpdate:value":a[0]||(a[0]=l=>Q(f)?f.value=l:null),min:1,style:{width:"150px","margin-top":"24px"}},null,8,["value"]),[[K,!s(y)]]),t("div",jt,[t("button",{class:"btn btn-main btn-bag",onClick:a[1]||(a[1]=l=>S(s(o)))},[Ot,u("\u52A0\u5165\u8CFC\u7269\u8ECA ")]),t("button",{type:"submit",class:"go_cart btn btn-main btn-check",onClick:a[2]||(a[2]=l=>O(s(o)))},[Gt,u(" \u7ACB\u5373\u7D50\u5E33 ")])])])])]),t("div",Ut,[t("ul",zt,[(v(!0),m(B,null,L((F=s(o))==null?void 0:F.markdownInfos,(l,r)=>(v(),m("li",{key:l.title,class:q({active:s(k)===r}),onClick:Wt=>I(r)},[t("a",Zt,d(l.title),1)],10,Jt))),128))]),Kt]),W("",!0)])])])}}},ta=rt(Qt,[["__scopeId","data-v-a6084b08"]]);export{ta as default};