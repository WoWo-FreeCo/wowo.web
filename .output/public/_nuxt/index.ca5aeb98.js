import{_ as w,a as R}from"./ProfileSidebar.56ae1006.js";import{a as A,b as D,e as O,j as P,u as N,k as V}from"./entry.96dc2463.js";import{u as B}from"./authStore.126ed91f.js";import{b as C,c as G,o as L,_,aa as a,$ as h,ad as g,y as o,F as q,V as M,J as z,G as W,a7 as y,Z as p,ae as c,a0 as F,C as U,a8 as j,a9 as J}from"./swiper-vue.d582d122.js";import{w as K,v as Y}from"./requestURL.6ae00f75.js";import{P as n}from"./common.0260327a.js";import"./pageStatusStore.8dc5180a.js";const Z=d=>(j("data-v-a1bd6050"),d=d(),J(),d),H={class:"full_height mt185ptb30 pt0"},Q={class:"row"},X={class:"col-sm-9 pl20pr30"},tt={class:"list-inline dashboard-menu"},at=y('<div class="select r0t0" data-v-a1bd6050><select data-v-a1bd6050><option selected data-v-a1bd6050> \u8A02\u55AE\u72C0\u614B </option><option value="" data-v-a1bd6050> \u5F85\u4ED8\u6B3E </option><option value="" data-v-a1bd6050> \u5DF2\u4ED8\u6B3E </option><option value="" data-v-a1bd6050> \u5DF2\u51FA\u8CA8 </option><option value="" data-v-a1bd6050> \u5DF2\u53D6\u6D88 </option></select></div>',1),et={class:"member_table order_table"},st=Z(()=>a("thead",null,[a("tr",null,[a("th",null," \u8A02\u55AE\u7DE8\u865F "),a("th",null," \u8A02\u55AE\u65E5\u671F "),a("th",null," \u4ED8\u6B3E\u65B9\u5F0F "),a("th",null," \u8A02\u55AE\u91D1\u984D "),a("th",null," \u8A02\u55AE\u72C0\u614B "),a("th")])],-1)),nt={"data-th":"\u8A02\u55AE\u7DE8\u865F"},ot={"data-th":"\u8A02\u55AE\u65E5\u671F"},it={"data-th":"\u8A02\u55AE\u985E\u578B"},lt={"data-th":"\u8A02\u55AE\u91D1\u984D"},ct={"data-th":"\u8A02\u55AE\u72C0\u614B"},dt=["onClick"],ut={class:"text-center"},rt=y('<ul class="pagination post-pagination" data-v-a1bd6050><li data-v-a1bd6050><a href="#!" data-v-a1bd6050>\u4E0A\u4E00\u9801</a></li><li class="active" data-v-a1bd6050><a href="#!" data-v-a1bd6050>1</a></li><li data-v-a1bd6050><a href="#!" data-v-a1bd6050>2</a></li><li data-v-a1bd6050><a href="#!" data-v-a1bd6050>3</a></li><li data-v-a1bd6050><a href="#!" data-v-a1bd6050>4</a></li><li data-v-a1bd6050><a href="#!" data-v-a1bd6050>5</a></li><li data-v-a1bd6050><a href="#!" data-v-a1bd6050>\u4E0B\u4E00\u9801</a></li></ul>',1),_t=[rt],ht={__name:"index",setup(d){const E=B(),u=D(),v=O(),b=P(),f=N(),r=C([]),l=C(n.General),S=G(()=>{var t,s;switch(l.value){case n.ColdChain:return(t=r.value)==null?void 0:t.filter(i=>i.attribute===n.ColdChain);default:return(s=r.value)==null?void 0:s.filter(i=>i.attribute===n.General)}}),T=t=>{switch(t==null?void 0:t.orderStatus){case"WAIT_PAYMENT":return"\u5F85\u4ED8\u6B3E";case"WAIT_DELIVER":return"\u904B\u9001\u4E2D";case"WAIT_RECEIVE":return"\u5F85\u53D6\u8CA8";case"COMPLETED":return"\u5DF2\u5B8C\u6210";case"CANCELLED":return"\u5DF2\u53D6\u6D88";case"REVOKED":return"\u9000\u8CA8";default:return curOrder.value.orderStatus}},$=t=>(t==null?void 0:t.attribute)===n.General?"\u4E00\u822C\u5546\u54C1":(t==null?void 0:t.attribute)===n.ColdChain?"\u51B7\u93C8\u5546\u54C1":t.attribute;L(async()=>{var t;if(!E.status.loggedIn)return v.push({path:"/login",query:{...b.query,redirect:"/order"}});((t=b.query)==null?void 0:t.payment)==="successful"&&(u.success("\u5DF2\u6210\u529F\u4ED8\u6B3E\uFF01"),v.replace({query:null})),await m()});async function m(){try{const t=await $fetch(`${f.public.apiBase}/${K}?take=200`,{headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}});console.log(t),r.value=t.data}catch(t){console.log(t)}}async function k(t){try{const s=t==null?void 0:t.id,i=await $fetch(`${f.public.apiBase}/${Y(s)}`,{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}});u.success("\u5DF2\u53D6\u6D88\u8A02\u55AE")}catch(s){u.error(s.data)}m()}return(t,s)=>{const i=w,x=R,I=V;return p(),_("div",null,[a("section",H,[h(i),a("div",Q,[h(x),a("div",X,[a("ul",tt,[a("li",null,[a("a",{class:g(["pointer",{active:o(l)===o(n).General}]),onClick:s[0]||(s[0]=e=>l.value=o(n).General)}," \u4E00\u822C\u5546\u54C1 ",2)]),a("li",null,[a("a",{class:g(["pointer",{active:o(l)===o(n).ColdChain}]),onClick:s[1]||(s[1]=e=>l.value=o(n).ColdChain)}," \u51B7\u93C8\u5546\u54C1 ",2)])]),at,a("table",et,[st,a("tbody",null,[(p(!0),_(q,null,M(o(S),e=>(p(),_("tr",{key:e.id},[a("td",nt,c(e==null?void 0:e.id),1),a("td",ot,c(e==null?void 0:e.createdAt),1),a("td",it,c($(e)),1),a("td",lt,c(e==null?void 0:e.price),1),a("td",ct,c(T(e)),1),a("td",null,[h(I,{to:`/order/detail?id=${e.id}`,class:"btn btn-orderdetial"},{default:F(()=>[U(" \u67E5\u770B\u660E\u7D30 ")]),_:2},1032,["to"]),a("button",{type:"button",class:"btn btn-orderdetial",onClick:pt=>k(e)}," \u53D6\u6D88\u8A02\u55AE ",8,dt)])]))),128))])]),z(a("div",ut,_t,512),[[W,!1]])])])])])}}},Et=A(ht,[["__scopeId","data-v-a1bd6050"]]);export{Et as default};
