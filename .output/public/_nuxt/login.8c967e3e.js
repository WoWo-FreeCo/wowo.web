import{j as w,e as x,u as $,k}from"./entry.9b1a5665.js";import{_ as T}from"./client-only.535fc844.js";import{b as B,o as S,_ as E,$ as u,Z as L,a8 as t,J as _,af as m,y as c,a0 as f,C as n}from"./swiper-vue.db7c70f4.js";import{u as R}from"./authStore.bc63e496.js";import{n as h,o as C}from"./requestURL.5272b7f6.js";const N={class:"full_height mt185ptb30"},U={class:"container"},V=t("h3",{class:"login_tl"},[n(" \u6703\u54E1\u767B\u5165"),t("br"),n("Login ")],-1),q={class:"contact-form"},G={id:"",method:"post",action:"javascript:;"},P={class:"form-group"},A={class:"form-group"},I={class:"text-center mt-30"},O=t("i",{class:"fa-regular fa-circle-question"},null,-1),j={class:"other_function"},H={__name:"login",setup(z){const g=w(),d=x(),s=R(),r=$(),a=B({email:"",password:""});S(async()=>{const e=localStorage.getItem("accessToken");if(e){try{const o=await $fetch(`${r.public.apiBase}/${h}`,{method:"GET",headers:{Authorization:"Bearer "+e}});s.loginSuccess(e),s.updateUser(o.data)}catch{s.logout()}p()}});async function b(){try{const e=await $fetch(`${r.public.apiBase}/${C}`,{method:"POST",body:a.value});console.log(e),y(e.data)}catch(e){e.statusCode&&alert("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u5E33\u865F\u53CA\u5BC6\u78BC")}}async function y(e){const{accessToken:o}=e;s.loginSuccess(o);const i=await $fetch(`${r.public.apiBase}/${h}`,{method:"GET",headers:{Authorization:"Bearer "+o}});s.updateUser(i.data),p()}function p(){var o;const e=(o=g.query)==null?void 0:o.redirect;e?d.push({path:e}):d.push({path:"/profile"})}return(e,o)=>{const i=k,v=T;return L(),E(v,null,{default:u(()=>[t("section",N,[t("div",U,[V,t("div",q,[t("form",G,[t("div",P,[_(t("input",{id:"input-field-email","onUpdate:modelValue":o[0]||(o[0]=l=>c(a).email=l),type:"email",placeholder:"Email*",class:"form-control",name:"",required:""},null,512),[[m,c(a).email]])]),t("div",A,[_(t("input",{id:"input-field-password","onUpdate:modelValue":o[1]||(o[1]=l=>c(a).password=l),autocomplete:"",type:"password",placeholder:"\u5BC6\u78BC*",class:"form-control",name:"",required:""},null,512),[[m,c(a).password]])]),t("div",{class:"text-center"},[t("input",{id:"input-field-submit",type:"submit",class:"btn btn-main btn-bag",value:"\u6211\u8981\u767B\u5165",onClick:b})])]),t("div",I,[O,f(i,{to:"/forget"},{default:u(()=>[n(" \u5FD8\u8A18\u5BC6\u78BC? ")]),_:1})]),t("div",j,[n(" \u6C92\u6709\u5E33\u865F? "),f(i,{class:"btn btn-block btn-bag",to:"/register"},{default:u(()=>[n(" \u6703\u54E1\u8A3B\u518A ")]),_:1})])])])])]),_:1})}}};export{H as default};
