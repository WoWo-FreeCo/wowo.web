import{j as T,e as k,u as x,k as $}from"./entry.27c155a0.js";import{_ as B}from"./client-only.448648bc.js";import{b as S,o as q,a3 as C,a0 as u,Z as E,aa as t,J as m,af as f,y as c,$ as h,C as i}from"./swiper-vue.ba6f8b0a.js";import{u as L}from"./authStore.163d7370.js";import{n as g,r as R}from"./requestURL.06cc9186.js";const N={class:"full_height mt185ptb30"},U={class:"container"},V=t("h3",{class:"login_tl"},[i(" \u6703\u54E1\u767B\u5165"),t("br"),i("Login ")],-1),G={class:"contact-form"},P={id:"",method:"post",action:"javascript:;"},A={class:"form-group"},I={class:"form-group"},O={class:"text-center mt-30"},j=t("i",{class:"fa-regular fa-circle-question"},null,-1),z={class:"other_function"},K={__name:"login",setup(F){const d=T(),p=k(),a=L(),r=x(),n=S({email:"",password:""});q(async()=>{const e=localStorage.getItem("accessToken");if(e){try{const o=await $fetch(`${r.public.apiBase}/${g}`,{method:"GET",headers:{Authorization:"Bearer "+e}});a.loginSuccess(e),a.updateUser(o.data)}catch{a.logout()}_()}});async function b(){try{const e=await $fetch(`${r.public.apiBase}/${R}`,{method:"POST",body:n.value});console.log(e),y(e.data)}catch(e){e.statusCode&&alert("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u5E33\u865F\u53CA\u5BC6\u78BC")}}async function y(e){const{accessToken:o}=e;a.loginSuccess(o);const s=await $fetch(`${r.public.apiBase}/${g}`,{method:"GET",headers:{Authorization:"Bearer "+o}});a.updateUser(s.data),_()}function _(){var o;const e=(o=d.query)==null?void 0:o.redirect;if(e){const s={...d.query};delete s.redirect,p.push({path:e,query:s})}else p.push({path:"/profile"})}function v(){window.scrollTo({top:0,behavior:"smooth"})}return(e,o)=>{const s=$,w=B;return E(),C(w,null,{default:u(()=>[t("section",N,[t("div",U,[V,t("div",G,[t("form",P,[t("div",A,[m(t("input",{id:"input-field-email","onUpdate:modelValue":o[0]||(o[0]=l=>c(n).email=l),type:"email",placeholder:"Email*",class:"form-control",name:"",required:""},null,512),[[f,c(n).email]])]),t("div",I,[m(t("input",{id:"input-field-password","onUpdate:modelValue":o[1]||(o[1]=l=>c(n).password=l),autocomplete:"",type:"password",placeholder:"\u5BC6\u78BC*",class:"form-control",name:"",required:""},null,512),[[f,c(n).password]])]),t("div",{class:"text-center"},[t("input",{id:"input-field-submit",type:"submit",class:"btn btn-main btn-bag",value:"\u6211\u8981\u767B\u5165",onClick:b})])]),t("div",O,[j,h(s,{to:"/forget"},{default:u(()=>[i(" \u5FD8\u8A18\u5BC6\u78BC? ")]),_:1})]),t("div",z,[i(" \u6C92\u6709\u5E33\u865F? "),t("div",{onClick:v},[h(s,{class:"btn btn-block btn-bag",to:"/register"},{default:u(()=>[i(" \u6703\u54E1\u8A3B\u518A ")]),_:1})])])])])])]),_:1})}}};export{K as default};