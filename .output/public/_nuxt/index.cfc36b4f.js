import{_ as T,a as E}from"./ProfileSidebar.0c524421.js";import{a as G,b as I,q as M,E as N,u as V,Q as q,M as A,B as Y}from"./entry.e316c138.js";import{u as z}from"./authStore.2c92d5fa.js";import{b as p,c as F,o as L,_ as f,aa as e,$ as m,ad as k,y as o,J as R,an as U,i as j,F as J,V as Q,G as Z,Z as C,ae as u,a0 as H,C as K,a8 as X,a9 as tt,a7 as et}from"./swiper-vue.cf16a99e.js";import{d as at}from"./dayjs.min.969d02b7.js";import{P as i,O as a}from"./common.cb49f5bd.js";import"./pageStatusStore.263ab1a6.js";const $=d=>(X("data-v-867e94ed"),d=d(),tt(),d),st={class:"full_height mt185ptb30 pt0"},nt={class:"row"},lt={class:"col-sm-9 pl20pr30"},ot={class:"list-inline dashboard-menu"},it={class:"select r0t0"},ct=$(()=>e("option",{value:"-1"}," \u8A02\u55AE\u72C0\u614B ",-1)),ut=["value"],dt=["value"],rt=["value"],_t=["value"],ht=["value"],vt=["value"],pt={class:"member_table order_table"},ft=$(()=>e("thead",null,[e("tr",null,[e("th",null," \u8A02\u55AE\u7DE8\u865F "),e("th",null," \u8A02\u55AE\u65E5\u671F "),e("th",null," \u4ED8\u6B3E\u65B9\u5F0F "),e("th",null," \u8A02\u55AE\u91D1\u984D "),e("th",null," \u8A02\u55AE\u72C0\u614B "),e("th")])],-1)),mt={"data-th":"\u8A02\u55AE\u7DE8\u865F"},Ct={"data-th":"\u8A02\u55AE\u65E5\u671F"},St={"data-th":"\u8A02\u55AE\u985E\u578B"},bt={"data-th":"\u8A02\u55AE\u91D1\u984D"},yt={"data-th":"\u8A02\u55AE\u72C0\u614B"},gt=["onClick"],kt={class:"text-center"},Rt=et('<ul class="pagination post-pagination" data-v-867e94ed><li data-v-867e94ed><a href="#!" data-v-867e94ed>\u4E0A\u4E00\u9801</a></li><li class="active" data-v-867e94ed><a href="#!" data-v-867e94ed>1</a></li><li data-v-867e94ed><a href="#!" data-v-867e94ed>2</a></li><li data-v-867e94ed><a href="#!" data-v-867e94ed>3</a></li><li data-v-867e94ed><a href="#!" data-v-867e94ed>4</a></li><li data-v-867e94ed><a href="#!" data-v-867e94ed>5</a></li><li data-v-867e94ed><a href="#!" data-v-867e94ed>\u4E0B\u4E00\u9801</a></li></ul>',1),$t=[Rt],xt={__name:"index",setup(d){const x=z(),h=I(),S=M(),b=N(),y=V(),v=p([]),r=p(-1),c=p(i.General),D=F(()=>{var l,_;let t=[];switch(c.value){case i.ColdChain:t=[...(l=v.value)==null?void 0:l.filter(n=>n.attribute===i.ColdChain)];break;default:t=[...(_=v.value)==null?void 0:_.filter(n=>n.attribute===i.General)];break}switch(r.value){case a.WaitPayment:return t==null?void 0:t.filter(n=>n.orderStatus===a.WaitPayment);case a.WaitDeliver:return t==null?void 0:t.filter(n=>n.orderStatus===a.WaitDeliver);case a.WaitReceive:return t==null?void 0:t.filter(n=>n.orderStatus===a.WaitReceive);case a.Completed:return t==null?void 0:t.filter(n=>n.orderStatus===a.Completed);case a.Cancelled:return t==null?void 0:t.filter(n=>n.orderStatus===a.Cancelled);case a.Revoked:return t==null?void 0:t.filter(n=>n.orderStatus===a.Revoked);default:return t}}),W=t=>{switch(t==null?void 0:t.orderStatus){case a.WaitPayment:return"\u5F85\u4ED8\u6B3E";case a.WaitDeliver:return"\u5F85\u51FA\u8CA8";case a.WaitReceive:return"\u5DF2\u51FA\u8CA8";case a.Completed:return"\u5DF2\u5B8C\u6210";case a.Cancelled:return"\u5DF2\u53D6\u6D88";case a.Revoked:return"\u5DF2\u9000\u8CA8";default:return curOrder.value.orderStatus}};function w(t){return at(t).format("YYYY/MM/DD A hh:mm")}const P=t=>(t==null?void 0:t.attribute)===i.General?"\u4E00\u822C\u5546\u54C1":(t==null?void 0:t.attribute)===i.ColdChain?"\u51B7\u93C8\u5546\u54C1":t.attribute;L(async()=>{var t;if(!x.status.loggedIn)return S.push({path:"/login",query:{...b.query,redirect:"/order"}});((t=b.query)==null?void 0:t.payment)==="successful"&&(h.success("\u5DF2\u6210\u529F\u4ED8\u6B3E\uFF01"),S.replace({query:null})),await g()});async function g(){try{const t=await $fetch(`${y.public.apiBase}/${q}?take=200`,{headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}});console.log(t),v.value=t.data}catch(t){console.log(t)}}async function O(t){try{const l=t==null?void 0:t.id;await $fetch(`${y.public.apiBase}/${A(l)}`,{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}}),h.success("\u5DF2\u53D6\u6D88\u8A02\u55AE")}catch(l){h.error(l.data)}g()}return(t,l)=>{const _=T,n=E,B=Y;return C(),f("div",null,[e("section",st,[m(_),e("div",nt,[m(n),e("div",lt,[e("ul",ot,[e("li",null,[e("a",{class:k(["pointer",{active:o(c)===o(i).General}]),onClick:l[0]||(l[0]=s=>c.value=o(i).General)}," \u4E00\u822C\u5546\u54C1 ",2)]),e("li",null,[e("a",{class:k(["pointer",{active:o(c)===o(i).ColdChain}]),onClick:l[1]||(l[1]=s=>c.value=o(i).ColdChain)}," \u51B7\u93C8\u5546\u54C1 ",2)])]),e("div",it,[R(e("select",{"onUpdate:modelValue":l[2]||(l[2]=s=>j(r)?r.value=s:null)},[ct,e("option",{value:o(a).WaitPayment}," \u5F85\u4ED8\u6B3E ",8,ut),e("option",{value:o(a).WaitDeliver}," \u904B\u9001\u4E2D ",8,dt),e("option",{value:o(a).WaitReceive}," \u5F85\u53D6\u8CA8 ",8,rt),e("option",{value:o(a).Completed}," \u5DF2\u5B8C\u6210 ",8,_t),e("option",{value:o(a).Cancelled}," \u5DF2\u53D6\u6D88 ",8,ht),e("option",{value:o(a).Revoked}," \u9000\u8CA8 ",8,vt)],512),[[U,o(r)]])]),e("table",pt,[ft,e("tbody",null,[(C(!0),f(J,null,Q(o(D),s=>(C(),f("tr",{key:s.id},[e("td",mt,u(s==null?void 0:s.id),1),e("td",Ct,u(w(s==null?void 0:s.createdAt)),1),e("td",St,u(P(s)),1),e("td",bt,u(s==null?void 0:s.price),1),e("td",yt,u(W(s)),1),e("td",null,[m(B,{to:`/order/detail?id=${s.id}`,class:"btn btn-orderdetial"},{default:H(()=>[K(" \u67E5\u770B\u660E\u7D30 ")]),_:2},1032,["to"]),e("button",{type:"button",class:"btn btn-orderdetial cancel-btn",onClick:Dt=>O(s)}," \u53D6\u6D88\u8A02\u55AE ",8,gt)])]))),128))])]),R(e("div",kt,$t,512),[[Z,!1]])])])])])}}},Gt=G(xt,[["__scopeId","data-v-867e94ed"]]);export{Gt as default};
