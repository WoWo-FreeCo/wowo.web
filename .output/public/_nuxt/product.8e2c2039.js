import{b as p,c as Q,o as W,q as X,_ as m,aa as t,ad as D,y as s,J as H,G as R,ae as r,$ as g,a0 as C,C as u,i as Y,F as A,V as E,ab as tt,a7 as at,ak as st,f as et,Z as v,a3 as ot,al as nt,am as it,ap as ct,aq as lt,a8 as rt,a9 as dt,an as ut}from"./swiper-vue.6d0a2b42.js";import{a as _t,H as pt,F as vt,r as ht,u as ft,S as mt,C as bt}from"./entry.c4b0373b.js";const i=h=>(rt("data-v-1365a4b6"),h=h(),dt(),h),gt={class:"full_height mt185ptb30"},Ct={class:"container"},wt={class:"row product_flex"},yt={class:"col-md-6 col-sm-12 single-product-slider"},kt={class:"product_frame"},xt={class:"hot_sale"},St={class:"main_product"},It=["src"],Pt={class:"col-md-6 col-sm-12 single-product-details"},Mt=i(()=>t("ol",{class:"breadcrumb"},[t("li",null,[t("a",{href:"/"},"Home")]),t("li",null,[t("a",{href:"/shop"},"\u7522\u54C1\u4ECB\u7D39")])],-1)),Tt={class:"prod-name",title:"\u7522\u54C1\u540D\u7A31"},$t={id:"productForm",action:"javascript:;"},Nt={class:"product-price mt-0"},Vt=i(()=>t("span",null,"\u5E02\u50F9",-1)),qt=i(()=>t("span",{class:"m_icon"},"$",-1)),Ft=i(()=>t("span",null,"\u6703\u54E1",-1)),Lt=i(()=>t("span",{class:"m_icon"},"$",-1)),Bt={class:"vip_price"},Dt=i(()=>t("span",null,"VIP",-1)),Ht=i(()=>t("span",{class:"m_icon"},"$",-1)),Rt={class:"vip_price"},At=i(()=>t("span",null,"SVIP",-1)),Et=i(()=>t("span",{class:"m_icon"},"$",-1)),Ot={class:"howup_vip"},jt=i(()=>t("i",{class:"fa-regular fa-circle-up"},null,-1)),Gt={class:"nums"},Ut={class:"mt-20"},zt=i(()=>t("i",{class:"fa-solid fa-cart-shopping"},null,-1)),Jt=i(()=>t("i",{class:"fa-solid fa-dollar-sign"},null,-1)),Zt={class:"product_tab mt-20"},Kt={class:"nav nav-tabs"},Qt=["onClick"],Wt={"data-toggle":"tab",href:"javascript:;","aria-expanded":"true"},Xt=at('<div class="tab-content" data-v-1365a4b6><div id="details" class="tab-pane fade active in" data-v-1365a4b6><div class="html-container" data-v-1365a4b6></div></div><div id="tab2" class="tab-pane fade" data-v-1365a4b6> 2 </div><div id="tab3" class="tab-pane fade" data-v-1365a4b6> 3 </div><div id="tab4" class="tab-pane fade" data-v-1365a4b6> 4 </div></div>',1),Yt={__name:"product",setup(h){const c=pt(),O=vt(),w=ht(),j=ft(),G=p([]),e=p({}),y=p(!0),f=p(1),k=p(0),x=Q(()=>{var o;return(o=c.favMerch)==null?void 0:o.find(a=>a.id===e.value.id)});W(async()=>{await X(),await U(),I()});async function U(){var o;try{const a=await $fetch(`${j.public.apiBase}/${mt((o=O.query)==null?void 0:o.id)}`);G.value=a.data;const n=a.data;if(!n)return z();e.value=n}catch(a){console.log(a)}y.value=!1}function z(){w.push({path:"/"})}function S(o){const a=c.merch.find(b=>b.id===o.id),n=f.value;a?a.amount=n:c.merch.push({...o,amount:n});const _=c.merch;c.updateMerch(_)}function J(){c.favMerch.find(n=>n.id===e.value.id)?c.favMerch=c.favMerch.filter(n=>n.id!==e.value.id):c.favMerch.push(e.value);const a=c.favMerch;c.updateFavMerch(a)}function Z(o){S(o);const a=(o==null?void 0:o.attribute)==="COLD_CHAIN"?{type:"cold-chain"}:{};w.push({path:"/cart",query:{...a}})}function I(o=0){var n,_;const a=document.querySelector(".html-container");a.innerHTML=(_=(n=e.value)==null?void 0:n.markdownInfos[o])==null?void 0:_.text,k.value=o}return(o,a)=>{var P,M,T,$,N,V,q,F,L,B;const n=ut,_=st,b=bt,K=et("n-input-number");return v(),m("div",null,[t("section",gt,[t("div",Ct,[t("div",wt,[t("div",yt,[t("div",kt,[t("button",{class:"add_like",onClick:J},[t("i",{class:D(["far fa-heart",{"fa-solid":s(x),"fa-heart":s(x)}])},null,2)]),H(t("div",xt,[t("span",null,r((P=s(e))==null?void 0:P.brief),1)],512),[[R,(M=s(e))==null?void 0:M.brief]]),t("div",St,[g(_,{class:"swiper-root swiper-prod",modules:[s(nt),s(it),s(ct),s(lt)],"slides-per-view":1,loop:!0,"initial-slide":1,effect:"creative",autoplay:{delay:4e3,disableOnInteraction:!0},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:C(()=>{var l;return[(v(!0),m(A,null,E((l=s(e))==null?void 0:l.images,d=>(v(),ot(n,{key:d==null?void 0:d.img,class:"swiper-prod-slide"},{default:C(()=>[t("img",{src:d.img,alt:""},null,8,It)]),_:2},1024))),128))]}),_:1},8,["modules"])])])]),t("div",Pt,[Mt,t("h2",Tt,r((T=s(e))==null?void 0:T.name),1),t("form",$t,[t("ul",Nt,[t("li",null,[Vt,qt,u(r((($=s(e))==null?void 0:$.price)||0),1)]),t("li",null,[Ft,Lt,u(r(((N=s(e))==null?void 0:N.memberPrice)||0),1)]),t("li",Bt,[Dt,Ht,u(r(((V=s(e))==null?void 0:V.vipPrice)||0),1)]),t("li",Rt,[At,Et,u(r(((q=s(e))==null?void 0:q.svipPrice)||0),1)])]),t("span",Ot,[jt,g(b,{to:"/profile"},{default:C(()=>[u("\u6211\u8981\u5347\u7B49")]),_:1})]),t("div",Gt,[H(g(K,{value:s(f),"onUpdate:value":a[0]||(a[0]=l=>Y(f)?f.value=l:null),min:1,style:{width:"150px"}},null,8,["value"]),[[R,!s(y)]]),t("span",null,"\u5EAB\u5B58\uFF1A"+r(((L=(F=s(e))==null?void 0:F.inventory)==null?void 0:L.quantity)||0),1)]),t("div",Ut,[t("button",{class:"btn btn-main btn-bag",onClick:a[1]||(a[1]=l=>S(s(e)))},[zt,u("\u52A0\u5165\u8CFC\u7269\u8ECA ")]),t("button",{type:"submit",class:"go_cart btn btn-main btn-check",onClick:a[2]||(a[2]=l=>Z(s(e)))},[Jt,u(" \u7ACB\u5373\u7D50\u5E33 ")])])])])]),t("div",Zt,[t("ul",Kt,[(v(!0),m(A,null,E((B=s(e))==null?void 0:B.markdownInfos,(l,d)=>(v(),m("li",{key:l.title,class:D({active:s(k)===d}),onClick:ta=>I(d)},[t("a",Wt,r(l.title),1)],10,Qt))),128))]),Xt]),tt("",!0)])])])}}},ea=_t(Yt,[["__scopeId","data-v-1365a4b6"]]);export{ea as default};