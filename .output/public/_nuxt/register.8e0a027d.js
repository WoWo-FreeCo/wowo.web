import{a as v,m as b,f as g,u as y,e as w,J as x,k as V}from"./entry.0cbc246d.js";import{b as k,o as C,_ as U,aa as e,J as a,ah as d,y as s,C as u,$ as q,a0 as R,Z as E,a8 as z,a9 as I}from"./swiper-vue.2e988726.js";const r=c=>(z("data-v-60ecdfa3"),c=c(),I(),c),S={class:"full_height mt185ptb30"},A={class:"container"},O=r(()=>e("h3",{class:"login_tl"},[u(" \u6703\u54E1\u8A3B\u518A"),e("br"),u("Register ")],-1)),B={class:"contact-form"},N={id:"",action:"javascript:;",role:"form"},T={class:"form-group"},$=r(()=>e("label",null,"\u63A8\u85A6\u5E33\u865F",-1)),M={class:"form-group"},J=r(()=>e("label",null,"\u59D3\u540D*",-1)),L={class:"form-group"},j=r(()=>e("label",null,"Email*",-1)),D=r(()=>e("span",{class:"level_tips"},"\u6B64\u4FE1\u7BB1\u70BA\u767B\u5165\u5E33\u865F,\u53CA\u901A\u77E5\u9A57\u8A3C\u4F7F\u7528,\u8ACB\u78BA\u5BE6\u586B\u5BEB",-1)),F={class:"form-group"},G=r(()=>e("label",null,"\u5BC6\u78BC*",-1)),P={class:"form-group"},Z=r(()=>e("label",null,"\u624B\u6A5F*",-1)),H={class:"form-group"},K=r(()=>e("label",null,"\u7E23\u5E02*",-1)),Q={class:"form-group"},W=r(()=>e("label",null,"\u57CE\u5E02*",-1)),X={class:"form-group"},Y=r(()=>e("label",null,"\u90F5\u905E\u5340\u865F*",-1)),ee={class:"form-group"},oe=r(()=>e("label",null,"\u9001\u8CA8\u5730\u5740*",-1)),te={class:"other_function"},se={__name:"register",setup(c){const p=b(),m=g(),_=y(),n=w(),o=k({recommendedAccount:"",email:"",password:"",nickname:"",cellphone:"",telephone:"",addressOne:"",district:"",city:"",zipCode:""});C(()=>{var t;const i=(t=p.query)==null?void 0:t.recommend;i&&(o.value.recommendedAccount=i),console.log(o.value)});async function f(){var i;if(!o.value.nickname){n.error("\u8ACB\u8F38\u5165\u59D3\u540D");return}if(!o.value.password){n.error("\u8ACB\u8F38\u5165\u5BC6\u78BC");return}if(!o.value.email){n.error("\u8ACB\u8F38\u5165Email");return}if(!o.value.cellphone){n.error("\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC");return}if(!o.value.district){n.error("\u8ACB\u8F38\u5165\u7E23\u5E02\u540D\u7A31");return}if(!o.value.city){n.error("\u8ACB\u8F38\u5165\u57CE\u5E02\u540D\u7A31");return}if(!o.value.zipCode){n.error("\u8ACB\u8F38\u5165\u90F5\u905E\u5340\u865F");return}if(!o.value.addressOne){n.error("\u8ACB\u8F38\u5165\u5730\u5740");return}try{await $fetch(`${_.public.apiBase}/${x}`,{method:"POST",body:o.value}),n.success("\u606D\u559C\u8A3B\u518A\u6210\u529F\uFF0C\u5373\u5C07\u8DF3\u8F49\u767B\u5165\u9801",{duration:1e3,onAfterLeave:()=>{m.push({path:"/login"})}})}catch(t){n.error(((i=t.data)==null?void 0:i.message)||"\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u8CC7\u8A0A\u8207\u5FC5\u586B\u6B04\u4F4D")}}return(i,t)=>{const h=V;return E(),U("div",null,[e("section",S,[e("div",A,[O,e("div",B,[e("form",N,[e("div",T,[$,a(e("input",{id:"wb-recommended-account","onUpdate:modelValue":t[0]||(t[0]=l=>s(o).recommendedAccount=l),type:"text",placeholder:"\u8ACB\u8F38\u5165\u63A8\u85A6\u5E33\u865F",class:"form-control",name:"wb-recommended-account"},null,512),[[d,s(o).recommendedAccount]])]),e("div",M,[J,a(e("input",{id:"wb-nickname","onUpdate:modelValue":t[1]||(t[1]=l=>s(o).nickname=l),type:"text",placeholder:"\u8ACB\u8F38\u5165\u771F\u5BE6\u59D3\u540D",class:"form-control",name:"",required:""},null,512),[[d,s(o).nickname]])]),e("div",L,[j,a(e("input",{id:"wb-email","onUpdate:modelValue":t[2]||(t[2]=l=>s(o).email=l),type:"email",placeholder:"\u8ACB\u8F38\u5165 Email",class:"form-control",name:"",required:""},null,512),[[d,s(o).email]]),D]),e("div",F,[G,a(e("input",{id:"wb-password","onUpdate:modelValue":t[3]||(t[3]=l=>s(o).password=l),type:"password",placeholder:"\u8ACB\u8F38\u5165\u5BC6\u78BC",class:"form-control",name:"",required:"",autocomplete:""},null,512),[[d,s(o).password]])]),e("div",P,[Z,a(e("input",{id:"wb-cellphone","onUpdate:modelValue":t[4]||(t[4]=l=>s(o).cellphone=l),type:"text",placeholder:"\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC",class:"form-control",name:"",required:""},null,512),[[d,s(o).cellphone]])]),e("div",H,[K,a(e("input",{id:"auth-address-district","onUpdate:modelValue":t[5]||(t[5]=l=>s(o).district=l),type:"text",placeholder:"\u8ACB\u8F38\u5165\u6240\u5728\u7684\u7E23\u5E02",class:"form-control",name:"form-control-district",required:""},null,512),[[d,s(o).district]])]),e("div",Q,[W,a(e("input",{id:"auth-address-city","onUpdate:modelValue":t[6]||(t[6]=l=>s(o).city=l),type:"text",placeholder:"\u8ACB\u8F38\u5165\u6240\u5728\u7684\u57CE\u5E02",class:"form-control",name:"form-control-city",required:""},null,512),[[d,s(o).city]])]),e("div",X,[Y,a(e("input",{id:"auth-address-zipCode","onUpdate:modelValue":t[7]||(t[7]=l=>s(o).zipCode=l),type:"text",placeholder:"\u8ACB\u8F38\u5165\u4F4F\u5740\u7684\u90F5\u905E\u5340\u865F",class:"form-control",name:"form-control-zipCode",required:""},null,512),[[d,s(o).zipCode]])]),e("div",ee,[oe,a(e("input",{id:"wb-address1","onUpdate:modelValue":t[8]||(t[8]=l=>s(o).addressOne=l),type:"text",placeholder:"\u8ACB\u8F38\u5165\u9001\u8CA8\u5730\u5740",class:"form-control",name:"",required:""},null,512),[[d,s(o).addressOne]])]),e("div",{class:"text-center"},[e("input",{id:"wb-reg-confirm",type:"submit",class:"btn btn-main btn-bag",value:"\u78BA\u8A8D\u9001\u51FA",onClick:f})])]),e("div",te,[u(" \u5DF2\u6709\u5E33\u865F? "),q(h,{class:"btn btn-block btn-bag",to:"/login"},{default:R(()=>[u(" \u6703\u54E1\u767B\u5165 ")]),_:1})])])])])])}}},ne=v(se,[["__scopeId","data-v-60ecdfa3"]]);export{ne as default};