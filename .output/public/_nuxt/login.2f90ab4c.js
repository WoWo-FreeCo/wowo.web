import{_ as g}from"./client-only.46688fa6.js";import{q as b,u as y,t as u,A as T}from"./entry.b2c13a7d.js";import{b as v,o as w,a3 as k,a0 as $,Z as B,aa as t,J as d,af as p,y as r,C as m}from"./swiper-vue.6d0a2b42.js";import{u as x}from"./authStore.8141f46b.js";const S={class:"full_height mt185ptb30"},A={class:"container"},I=t("h3",{class:"login_tl"},[m(" \u7BA1\u7406\u8005\u767B\u5165"),t("br"),m("Login ")],-1),C={class:"contact-form"},E={id:"",method:"post",action:"javascript:;"},L={class:"form-group"},N={class:"form-group"},q={__name:"login",setup(G){const f=b(),a=x(),c=y(),n=v({email:"",password:""});w(async()=>{const e=localStorage.getItem("accessToken"),o=localStorage.getItem("refreshToken");if(e){try{const s=await $fetch(`${c.public.apiBase}/${u}`,{method:"GET",headers:{Authorization:"Bearer "+e}});a.loginSuccess(e,o),a.updateUser(s.data)}catch{a.logout()}l()}});async function _(){try{const e=await $fetch(`${c.public.apiBase}/${T}`,{method:"POST",body:n.value});h(e.data),console.log(e)}catch(e){console.log(e),e.statusCode&&alert("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u7BA1\u7406\u5E33\u865F\u53CA\u5BC6\u78BC")}}async function h(e){const{accessToken:o,refreshToken:s}=e;a.loginSuccess(o,s);const i=await $fetch(`${c.public.apiBase}/${u}`,{method:"GET",headers:{Authorization:"Bearer "+o}});a.updateUser(i.data),l()}function l(){f.push("/admin")}return(e,o)=>{const s=g;return B(),k(s,null,{default:$(()=>[t("section",S,[t("div",A,[I,t("div",C,[t("form",E,[t("div",L,[d(t("input",{id:"input-field-email","onUpdate:modelValue":o[0]||(o[0]=i=>r(n).email=i),type:"email",placeholder:"Email*",class:"form-control",name:"",required:""},null,512),[[p,r(n).email]])]),t("div",N,[d(t("input",{id:"input-field-password","onUpdate:modelValue":o[1]||(o[1]=i=>r(n).password=i),autocomplete:"",type:"password",placeholder:"\u5BC6\u78BC*",class:"form-control",name:"",required:""},null,512),[[p,r(n).password]])]),t("div",{class:"text-center"},[t("input",{id:"input-field-submit",type:"submit",class:"btn btn-main btn-bag",value:"\u7BA1\u7406\u8005\u767B\u5165",onClick:_})])])])])])]),_:1})}}};export{q as default};
