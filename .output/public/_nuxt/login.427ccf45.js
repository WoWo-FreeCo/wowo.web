import{_ as g}from"./client-only.73480984.js";import{e as b,u as y}from"./entry.96dc2463.js";import{b as v,o as w,a3 as T,a0 as $,Z as B,aa as e,J as u,af as d,y as n,C as p}from"./swiper-vue.d582d122.js";import{u as x}from"./authStore.126ed91f.js";import{m,A as k}from"./requestURL.6ae00f75.js";const A={class:"full_height mt185ptb30"},S={class:"container"},C=e("h3",{class:"login_tl"},[p(" \u7BA1\u7406\u8005\u767B\u5165"),e("br"),p("Login ")],-1),E={class:"contact-form"},I={id:"",method:"post",action:"javascript:;"},L={class:"form-group"},N={class:"form-group"},O={__name:"login",setup(G){const _=b(),s=x(),i=y(),a=v({email:"",password:""});w(async()=>{const t=localStorage.getItem("accessToken");if(t){try{const o=await $fetch(`${i.public.apiBase}/${m}`,{method:"GET",headers:{Authorization:"Bearer "+t}});s.loginSuccess(t),s.updateUser(o.data)}catch{s.logout()}l()}});async function f(){try{const t=await $fetch(`${i.public.apiBase}/${k}`,{method:"POST",body:a.value});h(t.data),console.log(t)}catch(t){console.log(t),t.statusCode&&alert("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u7BA1\u7406\u5E33\u865F\u53CA\u5BC6\u78BC")}}async function h(t){const{accessToken:o}=t;s.loginSuccess(o);const c=await $fetch(`${i.public.apiBase}/${m}`,{method:"GET",headers:{Authorization:"Bearer "+o}});s.updateUser(c.data),l()}function l(){_.push("/admin")}return(t,o)=>{const c=g;return B(),T(c,null,{default:$(()=>[e("section",A,[e("div",S,[C,e("div",E,[e("form",I,[e("div",L,[u(e("input",{id:"input-field-email","onUpdate:modelValue":o[0]||(o[0]=r=>n(a).email=r),type:"email",placeholder:"Email*",class:"form-control",name:"",required:""},null,512),[[d,n(a).email]])]),e("div",N,[u(e("input",{id:"input-field-password","onUpdate:modelValue":o[1]||(o[1]=r=>n(a).password=r),autocomplete:"",type:"password",placeholder:"\u5BC6\u78BC*",class:"form-control",name:"",required:""},null,512),[[d,n(a).password]])]),e("div",{class:"text-center"},[e("input",{id:"input-field-submit",type:"submit",class:"btn btn-main btn-bag",value:"\u7BA1\u7406\u8005\u767B\u5165",onClick:f})])])])])])]),_:1})}}};export{O as default};
