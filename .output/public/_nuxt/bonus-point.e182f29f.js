import{a as M,b as w,e as D,u as P}from"./entry.713d8cd5.js";import{u as A}from"./authStore.8f7a6b45.js";import{u as L}from"./pageStatusStore.d6684b44.js";import{l as R,m as U,n as z,o as G}from"./requestURL.06cc9186.js";import{b as N,c as v,o as V,_,aa as o,C as p,ae as u,y as i,F,V as O,Z as d,ad as x,a8 as Y,a9 as q}from"./swiper-vue.ba6f8b0a.js";const h=c=>(Y("data-v-a3abfbd5"),c=c(),q(),c),H={class:"full_height mt185ptb30 bg_left2"},Q={class:"container signpoint_content"},j={class:"text-center mypoint"},K={href:"mypoint.html",target:"new"},Z=h(()=>o("i",{class:"fas fa-parking"},null,-1)),J={class:"text-center"},W={id:"signpoint"},X=h(()=>o("div",{class:"mb-20"},null,-1)),y={class:"signpoint_li"},ee=["onClick"],se={href:"javascript:;"},te={class:"sign_day"},oe=h(()=>o("div",{class:"mt-20"},null,-1)),ae={__name:"bonus-point",setup(c){const f=w(),k=D(),n=A(),C=L(),r=P(),l=N([]),m=v(()=>l.value.reduce((e,t)=>e+(t!=null&&t.accepted?1:0),0)),g=v(()=>m.value),E=e=>e!=null&&e.accepted?e!=null&&e.isMission?"\u4EFB\u52D9\u5DF2\u89E3\u9396":"\u5DF2\u7C3D\u5230":e!=null&&e.isMission?"\u4EFB\u52D9\u89E3\u9396":"\u7C3D\u5230";V(()=>{n.status.loggedIn||k.push({path:"/login",query:{redirect:"/bonus-point"}}),S()});async function S(){try{const e=await $fetch(`${r.public.apiBase}/${R}`),t=await $fetch(`${r.public.apiBase}/${U}`,{headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}}),a=e.data.map(s=>{const b=t.data.find(B=>B.index===s.index);return{...s,accepted:!!b}});l.value=a,console.log(l.value)}catch(e){console.log(e)}$()}async function $(){try{const e=localStorage.getItem("accessToken"),t=await $fetch(`${r.public.apiBase}/${z}`,{method:"GET",headers:{Authorization:"Bearer "+e}});n.loginSuccess(e),n.updateUser(t.data)}catch{n.logout()}}async function I(e){e.accepted||(e.isMission&&(C.toggleVideoDialog(!0),await new Promise(t=>{setTimeout(()=>t(),5e3)})),T(e))}async function T(e){var t,a;try{await $fetch(`${r.public.apiBase}/${G(e.index)}`,{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}}),f.success(`\u7C3D\u5230\u6210\u529F \u7D05\u5229 +${e.credit}`,{duration:2e3})}catch(s){f.error(((a=(t=s==null?void 0:s.data)==null?void 0:t.data)==null?void 0:a.message)||"\u7C3D\u5230\u5931\u6557")}S()}return(e,t)=>{var a;return d(),_("section",H,[o("div",Q,[o("h4",j,[o("a",K,[p(" \u6211\u7684\u7D05\u5229 "),Z,p(" "+u((a=i(n).user)==null?void 0:a.rewardCredit),1)])]),o("div",J,[p(" \u5DF2\u7D2F\u8A08\u7C3D\u5230\uFF1A"+u(i(m))+"\u6B21 ",1),o("div",W,[X,o("ul",y,[(d(!0),_(F,null,O(i(l),s=>(d(),_("li",{key:s.index,class:x(["day-slot",{sign:s.accepted,"no-cursor":s.accepted||s.index!==i(g),inactive:s.index>i(g),mission:s.isMission,"mission-accepted":s.accepted&&s.isMission}]),onClick:b=>I(s)},[o("span",null,"+"+u(s.credit),1),o("a",se,[o("i",{class:x(["fa-solid",{"fa-p":!s.isMission,"fa-lock":s.isMission,"fa-unlock":s.accepted&&s.isMission}])},null,2)]),o("span",te,u(E(s)),1)],10,ee))),128))]),oe])])])])}}},ue=M(ae,[["__scopeId","data-v-a3abfbd5"]]);export{ue as default};
