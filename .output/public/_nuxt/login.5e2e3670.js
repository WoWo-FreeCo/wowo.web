import{E as T,q as $,b as k,u as x,z as _,K as B,B as E}from"./entry.0d24aa84.js";import{_ as S}from"./client-only.2d3cf038.js";import{b as q,o as C,a3 as L,a0 as h,Z as R,aa as e,J as f,af as b,y as c,C as i,$ as N}from"./swiper-vue.cf16a99e.js";import{u as U}from"./authStore.b10d9d8e.js";const V={class:"full_height mt185ptb30"},G={class:"container"},P=e("h3",{class:"login_tl"},[i(" \u6703\u54E1\u767B\u5165"),e("br"),i("Login ")],-1),z={class:"contact-form"},A={id:"",method:"post",action:"javascript:;"},I={class:"form-group"},M={class:"form-group"},O={class:"other_function"},Z={__name:"login",setup(F){const d=T(),p=$(),r=k(),a=U(),l=x(),n=q({email:"",password:""});C(async()=>{const t=localStorage.getItem("accessToken");if(t){try{const o=await $fetch(`${l.public.apiBase}/${_}`,{method:"GET",headers:{Authorization:"Bearer "+t}});a.loginSuccess(t),a.updateUser(o.data),r.success("\u5DF2\u81EA\u52D5\u767B\u5165")}catch{a.logout(),r.error("\u767B\u5165\u5DF2\u903E\u671F\uFF0C\u8ACB\u91CD\u65B0\u767B\u5165");return}m()}});async function g(){try{const t=await $fetch(`${l.public.apiBase}/${B}`,{method:"POST",body:n.value});y(t.data),r.success("\u767B\u5165\u6210\u529F")}catch(t){t.statusCode&&r.error("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u5E33\u865F\u53CA\u5BC6\u78BC")}}async function y(t){const{accessToken:o}=t;a.loginSuccess(o);const s=await $fetch(`${l.public.apiBase}/${_}`,{method:"GET",headers:{Authorization:"Bearer "+o}});a.updateUser(s.data),m()}function m(){var o;const t=(o=d.query)==null?void 0:o.redirect;if(t){const s={...d.query};delete s.redirect,p.push({path:t,query:s})}else p.push({path:"/profile"})}function v(){window.scrollTo({top:0,behavior:"smooth"})}return(t,o)=>{const s=E,w=S;return R(),L(w,null,{default:h(()=>[e("section",V,[e("div",G,[P,e("div",z,[e("form",A,[e("div",I,[f(e("input",{id:"input-field-email","onUpdate:modelValue":o[0]||(o[0]=u=>c(n).email=u),type:"email",placeholder:"Email*",class:"form-control",name:"",required:""},null,512),[[b,c(n).email]])]),e("div",M,[f(e("input",{id:"input-field-password","onUpdate:modelValue":o[1]||(o[1]=u=>c(n).password=u),autocomplete:"",type:"password",placeholder:"\u5BC6\u78BC*",class:"form-control",name:"",required:""},null,512),[[b,c(n).password]])]),e("div",{class:"text-center"},[e("input",{id:"input-field-submit",type:"submit",class:"btn btn-main btn-bag",value:"\u6211\u8981\u767B\u5165",onClick:g})])]),e("div",O,[i(" \u6C92\u6709\u5E33\u865F? "),e("div",{onClick:v},[N(s,{class:"btn btn-block btn-bag",to:"/register"},{default:h(()=>[i(" \u6703\u54E1\u8A3B\u518A ")]),_:1})])])])])])]),_:1})}}};export{Z as default};