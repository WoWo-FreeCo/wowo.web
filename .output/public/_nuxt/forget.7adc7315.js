import{_ as b}from"./client-only.448648bc.js";import{j as y,e as w,u as v}from"./entry.713d8cd5.js";import{b as T,o as $,a3 as B,a0 as x,Z as S,aa as o,J as d,af as p,y as r,C as m}from"./swiper-vue.ba6f8b0a.js";import{u as k}from"./authStore.8f7a6b45.js";import{n as f,r as E}from"./requestURL.06cc9186.js";const R={class:"full_height mt185ptb30"},C={class:"container"},U=o("h3",{class:"login_tl"},[m(" \u5FD8\u8A18\u5BC6\u78BC"),o("br"),m("Forget password ")],-1),G={class:"contact-form"},L={id:"",method:"post",action:"javascript:;"},P={class:"form-group"},V={class:"form-group"},j={__name:"forget",setup(q){const h=y(),l=w(),s=k(),n=v(),a=T({email:"",password:""});$(async()=>{const t=localStorage.getItem("accessToken");if(t){try{const e=await $fetch(`${n.public.apiBase}/${f}`,{method:"GET",headers:{Authorization:"Bearer "+t}});s.loginSuccess(t),s.updateUser(e.data)}catch{s.logout()}u()}});async function _(){try{const t=await $fetch(`${n.public.apiBase}/${E}`,{method:"POST",body:a.value});console.log(t),g(t.data)}catch(t){t.statusCode&&alert("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u5E33\u865F\u53CA\u5BC6\u78BC")}}async function g(t){const{accessToken:e}=t;s.loginSuccess(e);const i=await $fetch(`${n.public.apiBase}/${f}`,{method:"GET",headers:{Authorization:"Bearer "+e}});s.updateUser(i.data),u()}function u(){var e;const t=(e=h.query)==null?void 0:e.redirect;t?l.push({path:t}):l.push({path:"/profile"})}return(t,e)=>{const i=b;return S(),B(i,null,{default:x(()=>[o("section",R,[o("div",C,[U,o("div",G,[o("form",L,[o("div",P,[d(o("input",{id:"input-field-email","onUpdate:modelValue":e[0]||(e[0]=c=>r(a).email=c),type:"email",placeholder:"Email*",class:"form-control",name:"",required:""},null,512),[[p,r(a).email]])]),o("div",V,[d(o("input",{id:"input-field-password","onUpdate:modelValue":e[1]||(e[1]=c=>r(a).password=c),autocomplete:"",type:"password",placeholder:"\u5BC6\u78BC*",class:"form-control",name:"",required:""},null,512),[[p,r(a).password]])]),o("div",{class:"text-center"},[o("input",{id:"input-field-submit",type:"submit",class:"btn btn-main btn-bag",value:"\u9001\u51FA",onClick:_})])])])])])]),_:1})}}};export{j as default};
