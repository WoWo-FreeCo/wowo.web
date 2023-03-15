import{a as j,m as B,f as z,g as E,h as J,e as O,o as r,k as Z}from"./entry.0cbc246d.js";import{b as H,w as K,c as v,o as Q,_ as y,aa as e,$ as i,a0 as p,ae as T,y as a,J as f,G as g,ac as u,F as W,V as X,C as _,ab as Y,f as S,Z as C,a8 as tt,a9 as et}from"./swiper-vue.2e988726.js";const x=b=>(tt("data-v-0f70e6c9"),b=b(),et(),b),st={class:"full_height mt-30 mt185ptb30"},at={class:"cart_container mb-50"},nt={class:"list-inline dashboard-menu text-center"},ct={class:"text-center",style:{margin:"72px 0"}},ot=x(()=>e("i",{class:"fa-solid fa-cart-shopping"},null,-1)),rt=x(()=>e("h2",{class:"text-center"}," \u8CFC\u7269\u8ECA\u6C92\u6709\u6771\u897F ",-1)),lt={key:0,method:"post",action:"javascript:;"},ut={class:"cart_list"},dt={class:"cart_img"},_t=["href"],ht=["src"],it={class:"cart_tl"},pt=["href"],ft=x(()=>e("span",null,"\u6EFF\u984D\u514D\u904B",-1)),gt={class:"cart_price text-right"},bt={class:"cart_price cart_trash text-right"},vt=["onClick"],yt=x(()=>e("i",{class:"fa-solid fa-trash-can"},null,-1)),Ct=[yt],xt={class:"cart_check"},It={class:"text-right mb-20 mt-20"},kt=["disabled"],wt={class:"alert alert-warning alert-common",role:"alert"},qt={__name:"cart",setup(b){const I=B(),k=z(),m=B(),c=E(),n=J(),A=O(),h=H(r.General);K(I,t=>{M()});const l=v(()=>{switch(h.value){case r.ColdChain:return n==null?void 0:n.merch.filter(t=>t.attribute===r.ColdChain);default:return n==null?void 0:n.merch.filter(t=>t.attribute===r.General)}}),w=v(()=>n==null?void 0:n.merch.filter(t=>t.attribute===r.ColdChain)),q=v(()=>n==null?void 0:n.merch.filter(t=>t.attribute===r.General)),P=v({get:()=>l.value.reduce((t,o)=>t+L(o)*(o==null?void 0:o.quantity),0),set:t=>{P.value=t}});Q(()=>{M()});const L=t=>{var o,d;return((o=c==null?void 0:c.user)==null?void 0:o.memberLevel)==="SVIP"?t==null?void 0:t.svipPrice:((d=c==null?void 0:c.user)==null?void 0:d.memberLevel)==="VIP"?t==null?void 0:t.vipPrice:c.status.loggedIn?t==null?void 0:t.memberPrice:t==null?void 0:t.price};function M(){switch(I.query.type){case"cold-chain":h.value=r.ColdChain;break;default:h.value=r.General;break}}async function R(t){try{console.log(t),await n.deleteCartItem({type:t==null?void 0:t.attribute,productId:t==null?void 0:t.cartItemId}),await n.fetchCart()}catch(o){console.log(o)}}function D(){if(!F()){A.error("\u8ACB\u78BA\u8A8D\u7522\u54C1\u6578\u91CF\uFF01");return}if(!c.status.loggedIn)return k.push({path:"/login",query:{...m.query,redirect:"/cart"}});k.push({path:"/checkout",query:{...I.query}})}function F(){for(const t of l.value)if(!(t!=null&&t.quantity))return!1;return!0}return(t,o)=>{const d=Z,U=S("n-input-number");return C(),y("div",st,[e("div",at,[e("ul",nt,[e("li",null,[i(d,{to:"/cart",class:T(["type-name",{active:a(h)===a(r).General}])},{default:p(()=>[_(" \u4E00\u822C\u7269\u6D41\u5546\u54C1 "),f(e("span",{class:"cart-amount"},u(a(q).length),513),[[g,a(q).length]])]),_:1},8,["class"])]),e("li",null,[i(d,{to:"/cart?type=cold-chain",class:T(["type-name",{active:a(h)===a(r).ColdChain}])},{default:p(()=>[_(" \u7279\u6B8A\u7269\u6D41\u5546\u54C1 "),f(e("span",{class:"cart-amount"},u(a(w).length),513),[[g,a(w).length]])]),_:1},8,["class"])])]),f(e("div",ct,[ot,rt,i(d,{to:"/shop"},{default:p(()=>[_(" \u8D95\u7DCA\u53BB\u6DFB\u52A0 ")]),_:1})],512),[[g,!a(l).length]]),a(l).length?(C(),y("form",lt,[e("div",null,"\u5171"+u(a(l).length)+"\u9805\u5546\u54C1",1),e("table",ut,[e("tbody",null,[(C(!0),y(W,null,X(a(l),s=>{var V,$,G;return C(),y("tr",{key:s==null?void 0:s.cartItemId,class:"prod-tr"},[e("td",dt,[e("a",{href:`/product?id=${s.id}`},[e("img",{src:s==null?void 0:s.coverImg},null,8,ht)],8,_t)]),e("td",it,[e("a",{href:`/product?id=${s.id}`},[e("h5",null,u(s==null?void 0:s.name),1)],8,pt),i(U,{value:s.quantity,"onUpdate:value":N=>s.quantity=N,min:1,max:(V=s==null?void 0:s.inventory)==null?void 0:V.quantity,style:{width:"150px"},placeholder:"\u8ACB\u8F38\u5165\u6578\u91CF"},{default:p(()=>[ft]),_:2},1032,["value","onUpdate:value","max"])]),e("td",gt,[f(e("span",null," \u5E02\u50F9 $"+u(s==null?void 0:s.price),513),[[g,(($=a(c).user)==null?void 0:$.memberLevel)&&((G=a(c).user)==null?void 0:G.memberLevel)!=="NORMAL"]]),_(" \u50F9\u9322 $"+u(L(s)),1)]),e("td",bt,[e("button",{type:"button",class:"del_btn",onClick:N=>R(s)},Ct,8,vt)])])}),128))])]),e("ul",xt,[e("li",null,[_(" \u5546\u54C1\u91D1\u984D\u5C0F\u8A08 (\u5171"+u(a(l).length)+"\u9805\u5546\u54C1)\uFF1A",1),e("span",null,"$"+u(a(P)),1)])]),e("div",It,[i(d,{type:"button",class:"btn btn-main btn-bag",to:"/shop"},{default:p(()=>[_(" \u7E7C\u7E8C\u8CFC\u7269 ")]),_:1}),e("button",{type:"submit",class:"btn btn-main btn-check",disabled:a(l).length<=0,onClick:D}," \u4E0B\u4E00\u6B65 ",8,kt)])])):Y("",!0),f(e("div",wt," \u8CBC\u5FC3\u63D0\u9192: \u4E00\u822C\u7269\u6D41\u5546\u54C1,\u7121\u6CD5\u8207\u7279\u6B8A\u7269\u6D41\u5546\u54C1\u540C\u6642\u51FA\u8CA8, \u656C\u8ACB\u5206\u958B\u7D50\u5E33,\u8B1D\u8B1D\u60A8 ",512),[[g,a(l).length]])])])}}},Mt=j(qt,[["__scopeId","data-v-0f70e6c9"]]);export{Mt as default};