import{a as L,j as P,e as V,u as N,k as B}from"./entry.713d8cd5.js";import{u as O}from"./authStore.8f7a6b45.js";import{b as q,c as d,o as F,_ as h,aa as t,C as c,ae as s,y as r,F as M,V as W,$ as p,a0 as m,Z as f,J as j,G,a8 as U,a9 as z}from"./swiper-vue.ba6f8b0a.js";import{s as J}from"./requestURL.06cc9186.js";import{P as K}from"./common.b877c4b5.js";const X=""+new URL("1.3d691caf.jpg",import.meta.url).href;const u=_=>(U("data-v-1d38767a"),_=_(),z(),_),Y={class:"full_height mt185ptb30"},Z={class:"container"},H={class:"order_div"},Q={class:"order_tl"},tt=u(()=>t("a",{href:"#","data-toggle":"modal","data-target":"#back",class:"back_span"},"\u6211\u8981\u9000\u8CA8",-1)),et=u(()=>t("li",null,[c("\u53EF\u6536\u8CA8\u65E5\uFF1A"),t("span",null,s(""))],-1)),st=u(()=>t("li",null,[c("\u767C\u7968\u985E\u578B\uFF1A"),t("span",null,s(""))],-1)),at=u(()=>t("li",null,[c("\u767C\u7968\u62AC\u982D\uFF1A"),t("span",null,s(""))],-1)),nt=u(()=>t("li",null,[c("\u767C\u7968\u7D71\u7DE8\uFF1A"),t("span",null,s(""))],-1)),lt=u(()=>t("div",{class:"order_tl"}," \u8CFC\u7269\u6E05\u55AE ",-1)),ot={class:"cart_list"},ct={class:"cart_img"},rt=u(()=>t("img",{src:X},null,-1)),ut={class:"cart_tl"},it=u(()=>t("div",{class:"product-quantity"}," X1 ",-1)),dt={class:"cart-price text-right"},_t={class:"cart_check"},ht=u(()=>t("li",null," \u7D05\u5229\u6263\u9EDE\uFF1A"+s(0),-1)),pt={class:"border_top"},mt={class:"text-center mb-20 mt-20"},ft=u(()=>t("button",{type:"button",class:"btn btn-main btn-default","data-toggle":"modal","data-target":"#cancel"}," \u53D6\u6D88\u8A02\u55AE ",-1)),gt=u(()=>t("button",{type:"button",class:"btn btn-main btn-check"}," \u7ACB\u5373\u4ED8\u6B3E ",-1)),bt={__name:"detail",setup(_){const w=O(),T=P(),k=V(),x=N(),l=q({});d(()=>{var e;switch((e=l.value)==null?void 0:e.attribute){case K.ColdChain:return"\u4E00\u822C\u5546\u54C1";default:return"\u51B7\u93C8\u5546\u54C1"}});const C=d(()=>{var e;switch((e=l.value)==null?void 0:e.orderStatus){case"WAIT_PAYMENT":return"\u5F85\u4ED8\u6B3E";case"WAIT_DELIVER":return"\u904B\u9001\u4E2D";case"WAIT_RECEIVE":return"\u5F85\u53D6\u8CA8";case"COMPLETED":return"\u5DF2\u5B8C\u6210";case"CANCELLED":return"\u5DF2\u53D6\u6D88";case"REVOKED":return"\u9000\u8CA8";default:return l.value.orderStatus}}),D=d(()=>{var a,n;const e=(n=(a=l.value)==null?void 0:a.items)==null?void 0:n.find(i=>i.productId===null);return(e==null?void 0:e.price)===0?"\u514D\u904B":e?e.price:"\u514D\u904B"}),R=d(()=>{var e,a;return(a=(e=l.value)==null?void 0:e.items)==null?void 0:a.reduce((n,i)=>n+i.price,0)}),g=d(()=>{var e,a;return(a=(e=l.value)==null?void 0:e.items)==null?void 0:a.filter(n=>n.productId!==null)}),A=d(()=>{var e;return(e=g.value)==null?void 0:e.reduce((a,n)=>a+n.price,0)});F(async()=>{if(!w.status.loggedIn)return k.push({path:"/login",query:{redirect:"/order"}});await $()});async function $(){var e;try{const a=(e=T.query)==null?void 0:e.id,n=await $fetch(`${x.public.apiBase}/${J(a)}`,{headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}});l.value=n.data,console.log(n)}catch(a){console.log(a)}}return(e,a)=>{var i,b,v,y,E,I,S;const n=B;return f(),h("div",null,[t("section",Y,[t("div",Z,[t("div",H,[t("div",Q,[c(" \u8A02\u55AE\u7DE8\u865F\uFF1A"),t("span",null,s((i=r(l))==null?void 0:i.id),1),tt]),t("ul",null,[t("li",null,[c("\u8A02\u55AE\u72C0\u614B\uFF1A"),t("span",null,s(r(C)),1)]),t("li",null,[c("\u8A02\u55AE\u65E5\u671F\uFF1A"),t("span",null,s((b=r(l))==null?void 0:b.createdAt),1)]),t("li",null,[c("\u4ED8\u6B3E\u65B9\u5F0F\uFF1A"),t("span",null,s((v=r(l))==null?void 0:v.paymentType),1)]),t("li",null,[c("\u5BC4\u9001\u65B9\u5F0F\uFF1A"),t("span",null,s((y=r(l))==null?void 0:y.createdAt),1)]),t("li",null,[c("\u4F4F \u5740\uFF1A"),t("span",null,s((I=(E=r(l))==null?void 0:E.consignee)==null?void 0:I.addressDetailOne),1)]),et,st,at,nt])]),lt,t("table",ot,[t("tbody",null,[(f(!0),h(M,null,W(r(l).items,o=>j((f(),h("tr",{key:o.name},[t("td",ct,[p(n,{to:`/product?id=${o==null?void 0:o.productId}`,target:"new"},{default:m(()=>[rt]),_:2},1032,["to"])]),t("td",ut,[p(n,{to:`/product?id=${o==null?void 0:o.productId}`,target:"new"},{default:m(()=>[t("h5",null,s(o.name),1)]),_:2},1032,["to"]),it]),t("td",dt,[t("span",null,"\u50F9\u9322 $"+s(o==null?void 0:o.price),1)])])),[[G,o.productId!==null]])),128))])]),t("ul",_t,[t("li",null," \u5546\u54C1\u91D1\u984D\u5C0F\u8A08 (\u5171"+s((S=r(g))==null?void 0:S.length)+"\u9805\u5546\u54C1)\uFF1A$"+s(r(A)),1),t("li",null," \u904B\u8CBB\uFF1A"+s(r(D)),1),ht,t("li",pt,[c(" \u8A02\u55AE\u7E3D\u91D1\u984D\uFF1A"),t("span",null,"$"+s(r(R)),1)])]),t("div",mt,[p(n,{to:"/order",type:"button",class:"btn btn-main btn-default"},{default:m(()=>[c(" \u56DE\u4E0A\u4E00\u9801 ")]),_:1}),ft,gt])])])])}}},wt=L(bt,[["__scopeId","data-v-1d38767a"]]);export{wt as default};