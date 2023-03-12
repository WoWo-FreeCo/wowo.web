import{a as D,H as M,r as F,q as J,J as U,C as j}from"./entry.e0dd610b.js";import{b as z,w as E,c as v,o as H,_ as y,aa as t,$ as i,a0 as p,ad as N,y as s,J as f,G as b,ae as d,F as O,V as Z,C as _,ab as K,f as Q,Z as m,a8 as W,a9 as X}from"./swiper-vue.6d0a2b42.js";import{P as o}from"./common.2876555a.js";const C=g=>(W("data-v-529ed949"),g=g(),X(),g),Y={class:"full_height mt-30 mt185ptb30"},S={class:"cart_container mb-50"},tt={class:"list-inline dashboard-menu text-center"},et={class:"text-center",style:{margin:"72px 0"}},st=C(()=>t("i",{class:"fa-solid fa-cart-shopping"},null,-1)),at=C(()=>t("h2",{class:"text-center"}," \u8CFC\u7269\u8ECA\u6C92\u6709\u6771\u897F ",-1)),nt={key:0,method:"post",action:"javascript:;"},ct={class:"cart_list"},ot={class:"cart_img"},rt=["href"],lt=["src"],ut={class:"cart_tl"},dt=["href"],_t=C(()=>t("span",null,"\u6EFF\u984D\u514D\u904B",-1)),ht={class:"cart_price text-right"},it={class:"cart_price cart_trash text-right"},pt=["onClick"],ft=C(()=>t("i",{class:"fa-solid fa-trash-can"},null,-1)),bt=[ft],gt={class:"cart_check"},vt={class:"text-right mb-20 mt-20"},yt=["disabled"],mt={class:"alert alert-warning alert-common",role:"alert"},Ct={__name:"cart",setup(g){const x=M(),k=F(),B=M(),c=J(),n=U(),h=z(o.General);E(x,e=>{V()});const l=v(()=>{switch(h.value){case o.ColdChain:return n==null?void 0:n.merch.filter(e=>e.attribute===o.ColdChain);default:return n==null?void 0:n.merch.filter(e=>e.attribute===o.General)}}),w=v(()=>n==null?void 0:n.merch.filter(e=>e.attribute===o.ColdChain)),I=v(()=>n==null?void 0:n.merch.filter(e=>e.attribute===o.General)),P=v({get:()=>l.value.reduce((e,u)=>e+L(u)*u.amount,0),set:e=>{P.value=e}});H(()=>{V()});const L=e=>{var u,r;return((u=c==null?void 0:c.user)==null?void 0:u.memberLevel)==="SVIP"?e==null?void 0:e.svipPrice:((r=c==null?void 0:c.user)==null?void 0:r.memberLevel)==="VIP"?e==null?void 0:e.vipPrice:c.status.loggedIn?e==null?void 0:e.memberPrice:e==null?void 0:e.price};function V(){switch(x.query.type){case"cold-chain":h.value=o.ColdChain;break;default:h.value=o.General;break}}function T(e){const u=n.merch.filter(r=>r.id!==e.id);n.updateMerch(u)}function A(){if(!c.status.loggedIn)return k.push({path:"/login",query:{...B.query,redirect:"/cart"}});k.push({path:"/checkout",query:{...x.query}})}return(e,u)=>{const r=j,R=Q("n-input-number");return m(),y("div",Y,[t("div",S,[t("ul",tt,[t("li",null,[i(r,{to:"/cart",class:N(["type-name",{active:s(h)===s(o).General}])},{default:p(()=>[_(" \u4E00\u822C\u7269\u6D41\u5546\u54C1 "),f(t("span",{class:"cart-amount"},d(s(I).length),513),[[b,s(I).length]])]),_:1},8,["class"])]),t("li",null,[i(r,{to:"/cart?type=cold-chain",class:N(["type-name",{active:s(h)===s(o).ColdChain}])},{default:p(()=>[_(" \u7279\u6B8A\u7269\u6D41\u5546\u54C1 "),f(t("span",{class:"cart-amount"},d(s(w).length),513),[[b,s(w).length]])]),_:1},8,["class"])])]),f(t("div",et,[st,at,i(r,{to:"/shop"},{default:p(()=>[_(" \u8D95\u7DCA\u53BB\u6DFB\u52A0 ")]),_:1})],512),[[b,!s(l).length]]),s(l).length?(m(),y("form",nt,[t("div",null,"\u5171"+d(s(l).length)+"\u9805\u5546\u54C1",1),t("table",ct,[t("tbody",null,[(m(!0),y(O,null,Z(s(l),a=>{var $,q;return m(),y("tr",{key:a.id,class:"prod-tr"},[t("td",ot,[t("a",{href:`/product?id=${a.id}`},[t("img",{src:a==null?void 0:a.coverImg},null,8,lt)],8,rt)]),t("td",ut,[t("a",{href:`/product?id=${a.id}`},[t("h5",null,d(a==null?void 0:a.name),1)],8,dt),i(R,{value:a.amount,"onUpdate:value":G=>a.amount=G,min:1,style:{width:"150px"},placeholder:"\u8ACB\u8F38\u5165\u6578\u91CF"},{default:p(()=>[_t]),_:2},1032,["value","onUpdate:value"])]),t("td",ht,[f(t("span",null," \u5E02\u50F9 $"+d(a==null?void 0:a.price),513),[[b,(($=s(c).user)==null?void 0:$.memberLevel)&&((q=s(c).user)==null?void 0:q.memberLevel)!=="NORMAL"]]),_(" \u50F9\u9322 $"+d(L(a)),1)]),t("td",it,[t("button",{type:"button",class:"del_btn",onClick:G=>T(a)},bt,8,pt)])])}),128))])]),t("ul",gt,[t("li",null,[_(" \u5546\u54C1\u91D1\u984D\u5C0F\u8A08 (\u5171"+d(s(l).length)+"\u9805\u5546\u54C1)\uFF1A",1),t("span",null,"$"+d(s(P)),1)])]),t("div",vt,[i(r,{type:"button",class:"btn btn-main btn-bag",to:"/shop"},{default:p(()=>[_(" \u7E7C\u7E8C\u8CFC\u7269 ")]),_:1}),t("button",{type:"submit",class:"btn btn-main btn-check",disabled:s(l).length<=0,onClick:A}," \u4E0B\u4E00\u6B65 ",8,yt)])])):K("",!0),f(t("div",mt," \u8CBC\u5FC3\u63D0\u9192: \u4E00\u822C\u5E38\u6EAB\u5546\u54C1,\u7121\u6CD5\u8207\u51B7\u934A\u5546\u54C1\u540C\u6642\u51FA\u8CA8, \u656C\u8ACB\u5206\u958B\u7D50\u5E33,\u8B1D\u8B1D\u60A8 ",512),[[b,s(l).length]])])])}}},It=D(Ct,[["__scopeId","data-v-529ed949"]]);export{It as default};
