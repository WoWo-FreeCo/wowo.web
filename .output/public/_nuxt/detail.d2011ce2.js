import{a as B,j as N,e as V,u as M,b as F,k as W}from"./entry.96dc2463.js";import{u as j}from"./authStore.126ed91f.js";import{b as z,c as d,o as G,_ as h,aa as t,C as r,ae as n,y as c,F as U,V as J,$ as p,a0 as m,J as $,G as D,Z as f,a8 as K,a9 as X}from"./swiper-vue.d582d122.js";import{u as Y,v as Z}from"./requestURL.6ae00f75.js";import{P as H}from"./common.0260327a.js";const Q=""+new URL("1.3d691caf.jpg",import.meta.url).href;const u=_=>(K("data-v-3d8b4f95"),_=_(),X(),_),tt={class:"full_height mt185ptb30"},et={class:"container"},st={class:"order_div"},at={class:"order_tl"},nt=u(()=>t("a",{href:"#","data-toggle":"modal","data-target":"#back",class:"back_span"},"\u6211\u8981\u9000\u8CA8",-1)),lt=u(()=>t("li",null,[r("\u53EF\u6536\u8CA8\u65E5\uFF1A"),t("span",null,n(""))],-1)),ot=u(()=>t("li",null,[r("\u767C\u7968\u985E\u578B\uFF1A"),t("span",null,n(""))],-1)),ct=u(()=>t("li",null,[r("\u767C\u7968\u62AC\u982D\uFF1A"),t("span",null,n(""))],-1)),rt=u(()=>t("li",null,[r("\u767C\u7968\u7D71\u7DE8\uFF1A"),t("span",null,n(""))],-1)),ut=u(()=>t("div",{class:"order_tl"}," \u8CFC\u7269\u6E05\u55AE ",-1)),it={class:"cart_list"},dt={class:"cart_img"},_t=u(()=>t("img",{src:Q},null,-1)),ht={class:"cart_tl"},pt={class:"product-quantity"},mt={class:"cart-price text-right"},ft={class:"cart_check"},gt=u(()=>t("li",null," \u7D05\u5229\u6263\u9EDE\uFF1A"+n(0),-1)),bt={class:"border_top"},yt={class:"text-center mb-20 mt-20"},vt=u(()=>t("button",{type:"button",class:"btn btn-main btn-check"}," \u7ACB\u5373\u4ED8\u6B3E ",-1)),Et={__name:"detail",setup(_){const x=j(),g=N(),A=V(),b=M(),y=F(),o=z({});d(()=>{var e;switch((e=o.value)==null?void 0:e.attribute){case H.ColdChain:return"\u4E00\u822C\u5546\u54C1";default:return"\u51B7\u93C8\u5546\u54C1"}});const v=d(()=>{var e;switch((e=o.value)==null?void 0:e.orderStatus){case"WAIT_PAYMENT":return"\u5F85\u4ED8\u6B3E";case"WAIT_DELIVER":return"\u904B\u9001\u4E2D";case"WAIT_RECEIVE":return"\u5F85\u53D6\u8CA8";case"COMPLETED":return"\u5DF2\u5B8C\u6210";case"CANCELLED":return"\u5DF2\u53D6\u6D88";case"REVOKED":return"\u9000\u8CA8";default:return o.value.orderStatus}}),P=d(()=>{var s,a;const e=(a=(s=o.value)==null?void 0:s.items)==null?void 0:a.find(i=>i.productId===null);return(e==null?void 0:e.price)===0?"\u514D\u904B":e?e.price:"\u514D\u904B"}),L=d(()=>{var e,s;return(s=(e=o.value)==null?void 0:e.items)==null?void 0:s.reduce((a,i)=>a+i.price*i.quantity,0)}),E=d(()=>{var e,s;return(s=(e=o.value)==null?void 0:e.items)==null?void 0:s.filter(a=>a.productId!==null)}),O=d(()=>{var e;return(e=E.value)==null?void 0:e.reduce((s,a)=>s+a.price*a.quantity,0)});G(async()=>{if(!x.status.loggedIn)return A.push({path:"/login",query:{redirect:"/order"}});await I()});async function I(){var e;try{const s=(e=g.query)==null?void 0:e.id,a=await $fetch(`${b.public.apiBase}/${Y(s)}`,{headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}});o.value=a.data,console.log(a)}catch(s){console.log(s)}}async function q(){var e;try{const s=(e=g.query)==null?void 0:e.id,a=await $fetch(`${b.public.apiBase}/${Z(s)}`,{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}});console.log(a),y.success("\u5DF2\u53D6\u6D88\u8A02\u55AE")}catch(s){y.error(s.data)}I()}return(e,s)=>{var i,S,T,C,k,w,R;const a=W;return f(),h("div",null,[t("section",tt,[t("div",et,[t("div",st,[t("div",at,[r(" \u8A02\u55AE\u7DE8\u865F\uFF1A"),t("span",null,n((i=c(o))==null?void 0:i.id),1),nt]),t("ul",null,[t("li",null,[r("\u8A02\u55AE\u72C0\u614B\uFF1A"),t("span",null,n(c(v)),1)]),t("li",null,[r("\u8A02\u55AE\u65E5\u671F\uFF1A"),t("span",null,n((S=c(o))==null?void 0:S.createdAt),1)]),t("li",null,[r("\u4ED8\u6B3E\u65B9\u5F0F\uFF1A"),t("span",null,n((T=c(o))==null?void 0:T.paymentType),1)]),t("li",null,[r("\u5BC4\u9001\u65B9\u5F0F\uFF1A"),t("span",null,n((C=c(o))==null?void 0:C.createdAt),1)]),t("li",null,[r("\u4F4F \u5740\uFF1A"),t("span",null,n((w=(k=c(o))==null?void 0:k.consignee)==null?void 0:w.addressDetailOne),1)]),lt,ot,ct,rt])]),ut,t("table",it,[t("tbody",null,[(f(!0),h(U,null,J(c(o).items,l=>$((f(),h("tr",{key:l.name},[t("td",dt,[p(a,{to:`/product?id=${l==null?void 0:l.productId}`,target:"new"},{default:m(()=>[_t]),_:2},1032,["to"])]),t("td",ht,[p(a,{to:`/product?id=${l==null?void 0:l.productId}`,target:"new"},{default:m(()=>[t("h5",null,n(l.name),1)]),_:2},1032,["to"]),t("div",pt," X "+n(l.quantity),1)]),t("td",mt,[t("span",null,"$"+n((l==null?void 0:l.price)*(l==null?void 0:l.quantity)),1)])])),[[D,l.productId!==null]])),128))])]),t("ul",ft,[t("li",null," \u5546\u54C1\u91D1\u984D\u5C0F\u8A08 (\u5171"+n((R=c(E))==null?void 0:R.length)+"\u9805\u5546\u54C1)\uFF1A$"+n(c(O)),1),t("li",null," \u904B\u8CBB\uFF1A"+n(c(P)),1),gt,t("li",bt,[r(" \u8A02\u55AE\u7E3D\u91D1\u984D\uFF1A"),t("span",null,"$"+n(c(L)),1)])]),t("div",yt,[p(a,{to:"/order",type:"button",class:"btn btn-main btn-default"},{default:m(()=>[r(" \u56DE\u4E0A\u4E00\u9801 ")]),_:1}),$(t("button",{type:"button",class:"btn btn-main btn-default","data-toggle":"modal",onClick:q}," \u53D6\u6D88\u8A02\u55AE ",512),[[D,c(v)!=="\u5DF2\u53D6\u6D88"]]),vt])])])])}}},wt=B(Et,[["__scopeId","data-v-3d8b4f95"]]);export{wt as default};
