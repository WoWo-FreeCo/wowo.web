import{a as M,b as w,q as D,u as P,x as A,y as L,z as N,B as U,C as z}from"./entry.c9000b64.js";import{u as R}from"./authStore.1f47292a.js";import{u as V}from"./pageStatusStore.b89fbd41.js";import{b as G,c as b,o as q,_,aa as o,$ as F,a0 as O,C as p,ae as u,y as i,F as Y,V as H,Z as d,ad as k,a8 as Q,a9 as j}from"./swiper-vue.d582d122.js";const h=c=>(Q("data-v-0a6d38b0"),c=c(),j(),c),K={class:"full_height mt185ptb30 bg_left2"},Z={class:"container signpoint_content"},J={class:"text-center mypoint"},W=h(()=>o("i",{class:"fas fa-parking"},null,-1)),X={class:"text-center"},y={id:"signpoint"},ee=h(()=>o("div",{class:"mb-20"},null,-1)),se={class:"signpoint_li"},te=["onClick"],oe={href:"javascript:;"},ae={class:"sign_day"},ne=h(()=>o("div",{class:"mt-20"},null,-1)),ie={__name:"bonus-point",setup(c){const f=w(),C=D(),n=R(),v=V(),r=P(),l=G([]),g=b(()=>l.value.reduce((e,t)=>e+(t!=null&&t.accepted?1:0),0)),m=b(()=>g.value),E=e=>e!=null&&e.accepted?e!=null&&e.isMission?"\u4EFB\u52D9\u5DF2\u89E3\u9396":"\u5DF2\u7C3D\u5230":e!=null&&e.isMission?"\u4EFB\u52D9\u89E3\u9396":"\u7C3D\u5230";q(()=>{n.status.loggedIn||C.push({path:"/login",query:{redirect:"/bonus-point"}}),S()});async function S(){try{const e=await $fetch(`${r.public.apiBase}/${A}`),t=await $fetch(`${r.public.apiBase}/${L}`,{headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}}),a=e.data.map(s=>{const x=t.data.find(B=>B.index===s.index);return{...s,accepted:!!x}});l.value=a,console.log(l.value)}catch(e){console.log(e)}$()}async function $(){try{const e=localStorage.getItem("accessToken"),t=await $fetch(`${r.public.apiBase}/${N}`,{method:"GET",headers:{Authorization:"Bearer "+e}});n.loginSuccess(e),n.updateUser(t.data)}catch{n.logout()}}async function I(e){e.accepted||(e.isMission&&(v.toggleVideoDialog(!0),await new Promise(t=>{setTimeout(()=>t(),5e3)})),T(e))}async function T(e){var t,a;try{await $fetch(`${r.public.apiBase}/${z(e.index)}`,{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}}),f.success(`\u7C3D\u5230\u6210\u529F \u7D05\u5229 +${e.credit}`,{duration:2e3})}catch(s){f.error(((a=(t=s==null?void 0:s.data)==null?void 0:t.data)==null?void 0:a.message)==="User already checked in today."?"\u4ECA\u65E5\u5DF2\u7C3D\u5230":"\u7C3D\u5230\u5931\u6557")}S()}return(e,t)=>{const a=U;return d(),_("section",K,[o("div",Z,[o("h4",J,[F(a,{to:"/bonus-point"},{default:O(()=>{var s;return[p(" \u6211\u7684\u7D05\u5229 "),W,p(" "+u((s=i(n).user)==null?void 0:s.rewardCredit),1)]}),_:1})]),o("div",X,[p(" \u5DF2\u7D2F\u8A08\u7C3D\u5230\uFF1A"+u(i(g))+"\u6B21 ",1),o("div",y,[ee,o("ul",se,[(d(!0),_(Y,null,H(i(l),s=>(d(),_("li",{key:s.index,class:k(["day-slot",{sign:s.accepted,"no-cursor":s.accepted||s.index!==i(m),inactive:s.index>i(m),mission:s.isMission,"mission-accepted":s.accepted&&s.isMission}]),onClick:x=>I(s)},[o("span",null,"+"+u(s.credit),1),o("a",oe,[o("i",{class:k(["fa-solid",{"fa-p":!s.isMission,"fa-lock":s.isMission,"fa-unlock":s.accepted&&s.isMission}])},null,2)]),o("span",ae,u(E(s)),1)],10,te))),128))]),ne])])])])}}},_e=M(ie,[["__scopeId","data-v-0a6d38b0"]]);export{_e as default};
