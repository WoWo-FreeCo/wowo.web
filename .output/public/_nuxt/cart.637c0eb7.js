import{a as A,j as R,e as j,k as D}from"./entry.9c028c87.js";import{b as F,w as U,c as v,o as z,_ as m,aa as t,$ as h,a0 as p,ad as M,y as s,J as b,G as f,ae as u,F as E,V as J,C as d,ab as O,f as Z,Z as y,a8 as H,a9 as K}from"./swiper-vue.d582d122.js";import{u as Q}from"./authStore.9b58794b.js";import{u as W}from"./cartStore.459aa100.js";import{P as o}from"./common.0260327a.js";const C=g=>(H("data-v-20c9476b"),g=g(),K(),g),X={class:"full_height mt-30 mt185ptb30"},Y={class:"cart_container mb-50"},S={class:"list-inline dashboard-menu text-center"},tt={class:"text-center",style:{margin:"72px 0"}},et=C(()=>t("i",{class:"fa-solid fa-cart-shopping"},null,-1)),st=C(()=>t("h2",{class:"text-center"}," \u8CFC\u7269\u8ECA\u6C92\u6709\u6771\u897F ",-1)),at={key:0,method:"post",action:"javascript:;"},nt={class:"cart_list"},ct={class:"cart_img"},ot={href:"/product",target:"new"},rt=["src"],lt={class:"cart_tl"},ut={href:"/product",target:"new"},_t=C(()=>t("span",null,"\u6EFF\u984D\u514D\u904B",-1)),dt={class:"cart_price text-right"},it={class:"cart_price text-right"},ht=["onClick"],pt=C(()=>t("i",{class:"fa-solid fa-trash-can"},null,-1)),bt=[pt],ft={class:"cart_check"},gt={class:"text-right mb-20 mt-20"},vt=["disabled"],mt={class:"alert alert-warning alert-common",role:"alert"},yt={__name:"cart",setup(g){const x=R(),$=j(),c=Q(),a=W(),i=F(o.General);U(x,e=>{L()});const r=v(()=>{switch(i.value){case o.ColdChain:return a==null?void 0:a.merch.filter(e=>e.attribute===o.ColdChain);default:return a==null?void 0:a.merch.filter(e=>e.attribute===o.General)}}),k=v(()=>a==null?void 0:a.merch.filter(e=>e.attribute===o.ColdChain)),w=v(()=>a==null?void 0:a.merch.filter(e=>e.attribute===o.General)),I=v({get:()=>r.value.reduce((e,l)=>e+P(l)*l.amount,0),set:e=>{I.value=e}});z(()=>{console.log(c.user),L()});const P=e=>{var l,_;return((l=c==null?void 0:c.user)==null?void 0:l.memberLevel)==="SVIP"?e==null?void 0:e.svipPrice:((_=c==null?void 0:c.user)==null?void 0:_.memberLevel)==="VIP"?e==null?void 0:e.vipPrice:c.status.loggedIn?e==null?void 0:e.memberPrice:e==null?void 0:e.price};function L(){switch(x.query.type){case"cold-chain":i.value=o.ColdChain;break;default:i.value=o.General;break}}function B(e){a.merch=a.merch.filter(l=>l.id!==e.id)}function T(){$.push({path:"/checkout",query:{...x.query}})}return(e,l)=>{const _=D,q=Z("n-input-number");return y(),m("div",X,[t("div",Y,[t("ul",S,[t("li",null,[h(_,{to:"/cart",class:M(["type-name",{active:s(i)===s(o).General}])},{default:p(()=>[d(" \u4E00\u822C\u5546\u54C1 "),b(t("span",{class:"cart-amount"},u(s(w).length),513),[[f,s(w).length]])]),_:1},8,["class"])]),t("li",null,[h(_,{to:"/cart?type=cold-chain",class:M(["type-name",{active:s(i)===s(o).ColdChain}])},{default:p(()=>[d(" \u51B7\u934A\u5546\u54C1 "),b(t("span",{class:"cart-amount"},u(s(k).length),513),[[f,s(k).length]])]),_:1},8,["class"])])]),b(t("div",tt,[et,st,h(_,{to:"/shop"},{default:p(()=>[d(" \u8D95\u7DCA\u53BB\u6DFB\u52A0 ")]),_:1})],512),[[f,!s(r).length]]),s(r).length?(y(),m("form",at,[t("div",null,"\u5171"+u(s(r).length)+"\u9805\u5546\u54C1",1),t("table",nt,[t("tbody",null,[(y(!0),m(E,null,J(s(r),n=>{var V,G;return y(),m("tr",{key:n.id,class:"prod-tr"},[t("td",ct,[t("a",ot,[t("img",{src:n==null?void 0:n.coverImg},null,8,rt)])]),t("td",lt,[t("a",ut,[t("h5",null,u(n==null?void 0:n.name),1)]),h(q,{value:n.amount,"onUpdate:value":N=>n.amount=N,min:1,style:{width:"150px"}},{default:p(()=>[_t]),_:2},1032,["value","onUpdate:value"])]),t("td",dt,[b(t("span",null," \u5E02\u50F9 $"+u(n==null?void 0:n.price),513),[[f,((V=s(c).user)==null?void 0:V.memberLevel)&&((G=s(c).user)==null?void 0:G.memberLevel)!=="NORMAL"]]),d(" \u50F9\u9322 $"+u(P(n)),1)]),t("td",it,[t("button",{type:"button",class:"del_btn",onClick:N=>B(n)},bt,8,ht)])])}),128))])]),t("ul",ft,[t("li",null,[d(" \u5546\u54C1\u91D1\u984D\u5C0F\u8A08 (\u5171"+u(s(r).length)+"\u9805\u5546\u54C1)\uFF1A",1),t("span",null,"$"+u(s(I)),1)])]),t("div",gt,[h(_,{type:"button",class:"btn btn-main btn-bag",to:"/shop"},{default:p(()=>[d(" \u7E7C\u7E8C\u8CFC\u7269 ")]),_:1}),t("button",{type:"submit",class:"btn btn-main btn-check",disabled:s(r).length<=0,onClick:T}," \u4E0B\u4E00\u6B65 ",8,vt)])])):O("",!0),b(t("div",mt," \u8CBC\u5FC3\u63D0\u9192: \u4E00\u822C\u5E38\u6EAB\u5546\u54C1,\u7121\u6CD5\u8207\u51B7\u934A\u5546\u54C1\u540C\u6642\u51FA\u8CA8, \u656C\u8ACB\u5206\u958B\u7D50\u5E33,\u8B1D\u8B1D\u60A8 ",512),[[f,s(r).length]])])])}}},Pt=A(yt,[["__scopeId","data-v-20c9476b"]]);export{Pt as default};