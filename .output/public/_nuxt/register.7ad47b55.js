import{a as f,j as h,e as v,u as g,k as w}from"./entry.96dc2463.js";import{b as y,o as x,_ as V,aa as e,J as a,af as d,y as s,C as c,$ as U,a0 as k,Z as T,a8 as q,a9 as R}from"./swiper-vue.d582d122.js";import{z as E}from"./requestURL.6ae00f75.js";const n=r=>(q("data-v-a77ba828"),r=r(),R(),r),I={class:"full_height mt185ptb30"},S={class:"container"},A=n(()=>e("h3",{class:"login_tl"},[c(" \u6703\u54E1\u8A3B\u518A"),e("br"),c("Register ")],-1)),B={class:"contact-form"},C={id:"",action:"javascript:;",role:"form"},N={class:"form-group"},O=n(()=>e("label",null,"\u63A8\u85A6\u5E33\u865F",-1)),$={class:"form-group"},j=n(()=>e("label",null,"\u59D3\u540D*",-1)),M={class:"form-group"},z=n(()=>e("label",null,"\u66B1\u7A31*",-1)),D={class:"form-group"},F=n(()=>e("label",null,"Email*",-1)),G=n(()=>e("span",{class:"level_tips"},"\u6B64\u4FE1\u7BB1\u70BA\u767B\u5165\u5E33\u865F,\u53CA\u901A\u77E5\u9A57\u8A3C\u4F7F\u7528,\u8ACB\u78BA\u5BE6\u586B\u5BEB",-1)),J={class:"form-group"},L=n(()=>e("label",null,"\u5BC6\u78BC*",-1)),P={class:"form-group"},Z=n(()=>e("label",null,"\u624B\u6A5F*",-1)),H={class:"form-group"},K=n(()=>e("label",null,"\u5E02\u8A71*",-1)),Q={class:"form-group"},W=n(()=>e("label",null,"\u9001\u8CA8\u5730\u5740*",-1)),X={class:"form-group"},Y=n(()=>e("label",null,"\u9001\u8CA8\u5730\u57402",-1)),ee={class:"form-group"},oe=n(()=>e("label",null,"\u9001\u8CA8\u5730\u57403",-1)),te=n(()=>e("button",{type:"reset",class:"btn btn-main btn-default"}," \u53D6\u6D88\u91CD\u586B ",-1)),se={class:"other_function"},le={__name:"register",setup(r){const u=h(),p=v(),m=g(),o=y({recommendedAccount:"",realname:"",email:"",password:"",nickname:"",cellphone:"",telephone:"",addressOne:"",addressTwo:"",addressThree:""});x(()=>{var t;const i=(t=u.query)==null?void 0:t.recommend;i&&(o.value.recommendedAccount=i),console.log(o.value)});async function _(){try{await $fetch(`${m.public.apiBase}/${E}`,{method:"POST",body:o.value}),p.push({path:"/login"}),alert("\u606D\u559C\u4F60\u8A3B\u518A\u6210\u529F\uFF0C\u5373\u5C07\u8DF3\u8F49\u767B\u5165\u9801")}catch{}}return(i,t)=>{const b=w;return T(),V("div",null,[e("section",I,[e("div",S,[A,e("div",B,[e("form",C,[e("div",N,[O,a(e("input",{id:"wb-recommended-account","onUpdate:modelValue":t[0]||(t[0]=l=>s(o).recommendedAccount=l),type:"text",placeholder:"\u8ACB\u8F38\u5165\u63A8\u85A6\u5E33\u865F",class:"form-control",name:"wb-recommended-account"},null,512),[[d,s(o).recommendedAccount]])]),e("div",$,[j,a(e("input",{id:"wb-realname","onUpdate:modelValue":t[1]||(t[1]=l=>s(o).realname=l),type:"text",placeholder:"\u8ACB\u8F38\u5165\u771F\u5BE6\u59D3\u540D",class:"form-control",name:"",required:""},null,512),[[d,s(o).realname]])]),e("div",M,[z,a(e("input",{id:"wb-nickname","onUpdate:modelValue":t[2]||(t[2]=l=>s(o).nickname=l),type:"text",placeholder:"\u8ACB\u8F38\u5165\u7528\u6236\u66B1\u7A31",class:"form-control",name:"",required:""},null,512),[[d,s(o).nickname]])]),e("div",D,[F,a(e("input",{id:"wb-email","onUpdate:modelValue":t[3]||(t[3]=l=>s(o).email=l),type:"email",placeholder:"\u8ACB\u8F38\u5165 Email",class:"form-control",name:"",required:""},null,512),[[d,s(o).email]]),G]),e("div",J,[L,a(e("input",{id:"wb-password","onUpdate:modelValue":t[4]||(t[4]=l=>s(o).password=l),type:"password",placeholder:"\u8ACB\u8F38\u5165\u5BC6\u78BC",class:"form-control",name:"",required:"",autocomplete:""},null,512),[[d,s(o).password]])]),e("div",P,[Z,a(e("input",{id:"wb-cellphone","onUpdate:modelValue":t[5]||(t[5]=l=>s(o).cellphone=l),type:"text",placeholder:"\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC",class:"form-control",name:"",required:""},null,512),[[d,s(o).cellphone]])]),e("div",H,[K,a(e("input",{id:"wb-telephone","onUpdate:modelValue":t[6]||(t[6]=l=>s(o).telephone=l),type:"text",placeholder:"\u8ACB\u8F38\u5165\u96FB\u8A71\u865F\u78BC",class:"form-control",name:"",required:""},null,512),[[d,s(o).telephone]])]),e("div",Q,[W,a(e("input",{id:"wb-address1","onUpdate:modelValue":t[7]||(t[7]=l=>s(o).addressOne=l),type:"text",placeholder:"\u8ACB\u8F38\u5165\u9001\u8CA8\u5730\u5740",class:"form-control",name:"",required:""},null,512),[[d,s(o).addressOne]])]),e("div",X,[Y,a(e("input",{id:"wb-address2","onUpdate:modelValue":t[8]||(t[8]=l=>s(o).addressTwo=l),type:"text",placeholder:"\u9001\u8CA8\u5730\u57402",class:"form-control",name:""},null,512),[[d,s(o).addressTwo]])]),e("div",ee,[oe,a(e("input",{id:"wb-address3","onUpdate:modelValue":t[9]||(t[9]=l=>s(o).addressThree=l),type:"text",placeholder:"\u9001\u8CA8\u5730\u57403",class:"form-control",name:""},null,512),[[d,s(o).addressThree]])]),e("div",{class:"text-center"},[te,e("input",{id:"wb-reg-confirm",type:"submit",class:"btn btn-main btn-bag",value:"\u78BA\u8A8D\u9001\u51FA",onClick:_})])]),e("div",se,[c(" \u5DF2\u6709\u5E33\u865F? "),U(b,{class:"btn btn-block btn-bag",to:"/login"},{default:k(()=>[c(" \u6703\u54E1\u767B\u5165 ")]),_:1})])])])])])}}},re=f(le,[["__scopeId","data-v-a77ba828"]]);export{re as default};
