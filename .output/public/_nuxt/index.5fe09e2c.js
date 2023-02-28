import{_ as K,a as Q}from"./ProfileSidebar.5140fc5b.js";import{a as X,e as ee,u as q,k as te}from"./entry.27c155a0.js";import{u as se}from"./authStore.163d7370.js";import{c as D,b as u,o as oe,_ as $,$ as y,aa as e,J as c,af as p,y as t,C as n,ae as v,ab as B,G as b,i as E,ad as I,a0 as x,Z as O,a8 as ae,a9 as le}from"./swiper-vue.ba6f8b0a.js";import{n as ne,u as S}from"./requestURL.06cc9186.js";import"./pageStatusStore.63a4484b.js";const l=T=>(ae("data-v-845e3871"),T=T(),le(),T),ie={class:"full_height mt185ptb30 pt0"},de={class:"row"},ce={class:"col-sm-9 pl20pr30"},re={class:"contact-form"},ue={id:"",action:"javascript:;"},pe=l(()=>e("h4",{class:"mb-20"}," \u6703\u54E1\u57FA\u672C\u8CC7\u8A0A ",-1)),_e={class:"form-group"},he=l(()=>e("label",null,"\u59D3\u540D*",-1)),me={class:"form-group"},be=l(()=>e("label",null,"\u5BC6\u78BC*",-1)),fe={class:"form-group"},ve=l(()=>e("label",null,"\u624B\u6A5F*",-1)),Ie={class:"form-group"},ke=l(()=>e("label",null,"\u5E02\u8A71*",-1)),ge={class:"form-group"},Ve=l(()=>e("label",null,"\u9001\u8CA8\u5730\u5740*",-1)),Pe={class:"form-group"},ye=l(()=>e("label",null,"\u9001\u8CA8\u5730\u57402",-1)),Se={class:"form-group"},Te=l(()=>e("label",null,"\u9001\u8CA8\u5730\u57403",-1)),we=l(()=>e("button",{type:"reset",class:"btn btn-main btn-default"}," \u53D6\u6D88\u91CD\u586B ",-1)),Ae={id:"member_vip_root",class:"bg_left2"},$e={id:"member_vip",class:"level_frame"},Be={class:"level_tl"},Oe=l(()=>e("span",null,"\u76EE\u524D\u7D1A\u5225\uFF1A",-1)),xe=l(()=>e("a",{href:"#","data-toggle":"modal","data-target":"#vipdesc"},[e("i",{class:"fa-solid fa-circle-question"}),n(),e("u",null,"\u67E5\u770B\u5347\u7B49\u65B9\u5F0F")],-1)),Ce={class:"row level_content"},Le={key:0},Ue=l(()=>e("h4",null,[n("\u6211\u8981\u89E3\u9396\u6210\u70BA"),e("span",null,"VIP"),n("\uFF1A"),e("span",{class:"level_tips"},"\u300EA.\u7D81\u5B9AVIP\u63A8\u85A6\u4EBA\u300F+\u300EB.\u6309\u8B9AWO\u7C89\u7D72\u5718\u6216C.\u8A02\u95B1WO\u983B\u9053\u300F\uFF0C\u5373\u53EF\u6210\u70BAVIP!")],-1)),Re=[Ue],Ne={key:1},Ge=l(()=>e("h4",null,[n("\u6211\u8981\u89E3\u9396\u6210\u70BA"),e("span",null,"SVIP"),n("\uFF1A"),e("span",{class:"level_tips"},"\u300ED.\u7D81\u5B9ASVIP\u6FC0\u6D3B\u78BC\u300F\u6216\u300EB.\u6309\u8B9AWO\u7C89\u7D72\u5718+C.\u8A02\u95B1WO\u983B\u9053\u300F\uFF0C\u5373\u53EF\u6210\u70BASVIP!")],-1)),ze=[Ge],We={key:2,class:"col-sm-6 border-right"},qe=l(()=>e("h5",null,[n("A.VIP\u63A8\u85A6\u4EBA"),e("span",{class:"level_tips"},"(\u7D81\u5B9A\u63A8\u85A6\u4EBA\u5E33\u865F\u5F8C\u5C07\u7121\u6CD5\u89E3\u9396\uFF01)")],-1)),De={id:"vip_rec",action:"javascript:;",class:"form-group"},Ee=["disabled"],Fe={class:"fa-solid fa-circle-check"},Me=l(()=>e("h5",null,[n("A.SVIP\u6FC0\u6D3B\u78BC"),e("span",{class:"level_tips"},"(\u7D81\u5B9A\u63A8\u85A6\u4EBA\u5E33\u865F\u5F8C\u5C07\u7121\u6CD5\u89E3\u9396\uFF01)")],-1)),je={id:"svip_rec",action:"javascript:;",class:"form-group"},Ye=["disabled"],Je=["disabled"],Ze={class:"fa-solid fa-circle-check"},He={class:"col-sm-6"},Ke=l(()=>e("h5",null,[n("B.FB\u7C89\u7D72\u7D81\u5B9A"),e("span",{class:"level_tips"},"(\u6309\u8B9AWO\u7C89\u7D72\u5718)")],-1)),Qe=["disabled"],Xe={class:"fa-solid fa-circle-check"},et={class:"mt-10"},tt=l(()=>e("h5",null,[n("C.Youtube\u983B\u9053\u7D81\u5B9A"),e("span",{class:"level_tips"},"(\u8A02\u95B1WO\u983B\u9053)")],-1)),st=["disabled"],ot={class:"fa-solid fa-circle-check"},at={class:"mt-10"},lt=l(()=>e("h5",null,[n("D.IG\u8FFD\u8E64\u7D81\u5B9A"),e("span",{class:"level_tips"},"(\u8A02\u95B1WO IG)")],-1)),nt=["disabled"],it={class:"fa-solid fa-circle-check"},dt={__name:"index",setup(T){var L,U,R,N,G,z,W;const i=se(),F=ee(),k=q(),M=q(),a=D(()=>i==null?void 0:i.user),m=u(!1),_=u(!1),f=u(!1),j=u("https://www.instagram.com/lovin.520/"),Y=u("https://youtu.be/9RITDp0BBUw"),J=u("https://www.facebook.com/LOVIN2022"),g=u(""),w=u(""),Z=D(()=>{var r;switch((r=a.value)==null?void 0:r.memberLevel){case"VIP":return"VIP";case"SVIP":return"SVIP";default:return"\u666E\u901A\u6703\u54E1"}}),d=u({nickname:(L=i.user)==null?void 0:L.nickname,password:(U=i.user)==null?void 0:U.password,telephone:(R=i.user)==null?void 0:R.telephone,cellphone:(N=i.user)==null?void 0:N.cellphone,addressOne:(G=i.user)==null?void 0:G.addressOne,addressTwo:(z=i.user)==null?void 0:z.addressTwo,addressThree:(W=i.user)==null?void 0:W.addressThree});oe(()=>{i.status.loggedIn||F.push({path:"/login"}),C(),console.log("!! - ",a.value)});async function C(){var r,s,A;try{const P=localStorage.getItem("accessToken"),h=await $fetch(`${M.public.apiBase}/${ne}`,{method:"GET",headers:{Authorization:"Bearer "+P}});i.loginSuccess(P),i.updateUser(h.data),m.value=(r=h.data)==null?void 0:r.FacebookGroupActivated,_.value=(s=h.data)==null?void 0:s.YouTubeChannelActivated,f.value=(A=h.data)==null?void 0:A.IGFollowActivated}catch{i.logout()}console.log("updated permission")}async function V(r){if(r==="fb")try{await $fetch(`${k.public.apiBase}/${S}`,{method:"POST",body:{kind:"B"},headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}}),m.value=!0}catch{alert("\u7D81\u5B9A\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u4E00\u6B21")}else if(r==="yt")try{await $fetch(`${k.public.apiBase}/${S}`,{method:"POST",body:{kind:"C"},headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}}),_.value=!0}catch{alert("\u7D81\u5B9A\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u4E00\u6B21")}else if(r==="ig")try{await $fetch(`${k.public.apiBase}/${S}`,{method:"POST",body:{kind:"D"},headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}}),_.value=!0}catch{alert("\u7D81\u5B9A\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u4E00\u6B21")}else if(r==="vip")try{console.log(g.value),await $fetch(`${k.public.apiBase}/${S}`,{method:"POST",body:{kind:"A",code:g.value},headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}}),i.user.VIPActivated=!0,alert("VIP\u63A8\u85A6\u78BC\u5DF2\u6FC0\u6D3B\uFF01\uFF01")}catch{alert("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u63A8\u85A6\u5E33\u865F")}else if(r==="svip")try{await $fetch(`${k.public.apiBase}/${S}`,{method:"POST",body:{kind:"E",code:w.value},headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}})}catch{alert("\u7D81\u5B9A\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u4E00\u6B21")}C()}function H(){alert("\u66F4\u65B0\u529F\u80FD\u5C1A\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u7B49")}return(r,s)=>{const A=K,P=Q,h=te;return O(),$("div",ie,[y(A),e("div",de,[y(P),e("div",ce,[e("div",re,[e("form",ue,[pe,e("div",_e,[he,c(e("input",{id:"auth-realname","onUpdate:modelValue":s[0]||(s[0]=o=>t(d).nickname=o),type:"text",placeholder:"\u59D3\u540D*",class:"form-control",name:"",required:""},null,512),[[p,t(d).nickname]])]),e("div",me,[be,c(e("input",{id:"auth-password","onUpdate:modelValue":s[1]||(s[1]=o=>t(d).password=o),type:"password",placeholder:"\u5BC6\u78BC*",class:"form-control",name:"",required:"",autocomplete:""},null,512),[[p,t(d).password]])]),e("div",fe,[ve,c(e("input",{id:"auth-mobile","onUpdate:modelValue":s[2]||(s[2]=o=>t(d).cellphone=o),type:"text",placeholder:"\u624B\u6A5F*",class:"form-control",name:"",required:""},null,512),[[p,t(d).cellphone]])]),e("div",Ie,[ke,c(e("input",{id:"auth-tele","onUpdate:modelValue":s[3]||(s[3]=o=>t(d).telephone=o),type:"text",placeholder:"\u5E02\u8A71*",class:"form-control",name:"",required:""},null,512),[[p,t(d).telephone]])]),e("div",ge,[Ve,c(e("input",{id:"auth-address1","onUpdate:modelValue":s[4]||(s[4]=o=>t(d).addressOne=o),type:"text",placeholder:"\u9001\u8CA8\u5730\u5740*",class:"form-control",name:"",required:""},null,512),[[p,t(d).addressOne]])]),e("div",Pe,[ye,c(e("input",{id:"auth-address2","onUpdate:modelValue":s[5]||(s[5]=o=>t(d).addressTwo=o),type:"text",placeholder:"\u9001\u8CA8\u5730\u57402",class:"form-control",name:""},null,512),[[p,t(d).addressTwo]])]),e("div",Se,[Te,c(e("input",{id:"auth-address3","onUpdate:modelValue":s[6]||(s[6]=o=>t(d).addressThree=o),type:"text",placeholder:"\u9001\u8CA8\u5730\u57403",class:"form-control",name:""},null,512),[[p,t(d).addressThree]])]),e("div",{class:"text-center"},[we,e("input",{id:"edit-confirm",type:"submit",class:"btn btn-main btn-bag",value:"\u78BA\u8A8D\u9001\u51FA",onClick:H})])])])])]),e("div",Ae,[e("div",$e,[e("h3",Be,[Oe,n(v(t(Z))+" ",1),xe]),e("div",Ce,[t(a).memberLevel==="NORMAL"?(O(),$("div",Le,Re)):B("",!0),t(a).memberLevel==="VIP"?(O(),$("div",Ne,ze)):B("",!0),t(a).memberLevel==="NORMAL"?(O(),$("div",We,[qe,e("form",De,[c(e("input",{"onUpdate:modelValue":s[7]||(s[7]=o=>E(g)?g.value=o:null),type:"text",placeholder:"\u8ACB\u8F38\u5165VIP\u63A8\u85A6\u5E33\u865F (\u6703\u54E1\u5E33\u865F)",class:"form-control"},null,512),[[b,!t(a).VIPActivated],[p,t(g)]]),e("button",{type:"button",class:I(["btn btn-block",{"btn-check":!t(a).VIPActivated,"btn-default":t(a).VIPActivated}]),disabled:t(a).VIPActivated,onClick:s[8]||(s[8]=o=>V("vip"))},[c(e("i",Fe,null,512),[[b,t(a).VIPActivated]]),n(" "+v(t(a).VIPActivated?"\u5DF2\u7D81\u5B9A":"\u524D\u5F80\u7D81\u5B9A"),1)],10,Ee)])])):B("",!0),e("div",{class:I([{"display-none":t(a).memberLevel==="NORMAL"},"col-sm-6 border-right svip-code"])},[Me,e("form",je,[c(e("input",{"onUpdate:modelValue":s[9]||(s[9]=o=>E(w)?w.value=o:null),type:"text",placeholder:"\u8ACB\u8F38\u5165SVIP\u6FC0\u6D3B\u78BC",class:"form-control",disabled:t(a).memberLevel==="SVIP"},null,8,Ye),[[b,!t(a).SVIPActivated],[p,t(w)]]),e("button",{type:"button",class:I(["btn btn-block",{"btn-check":!t(a).SVIPActivated,"btn-default":t(a).SVIPActivated}]),disabled:t(a).SVIPActivated||t(a).memberLevel==="SVIP",onClick:s[10]||(s[10]=o=>V("svip"))},[c(e("i",Ze,null,512),[[b,t(a).SVIPActivated]]),n(" "+v(t(a).SVIPActivated?"\u5DF2\u7D81\u5B9A":"\u524D\u5F80\u7D81\u5B9A"),1)],10,Je)])],2),e("div",He,[e("form",null,[Ke,y(h,{target:"_blank",to:t(J),onClick:s[11]||(s[11]=o=>V("fb"))},{default:x(()=>[e("button",{type:"button",class:I(["btn btn-block",{"btn-check":!t(m),"btn-default":t(m)}]),disabled:t(m)},[c(e("i",Xe,null,512),[[b,t(m)]]),n(" "+v(t(m)?"\u5DF2\u7D81\u5B9A":"\u524D\u5F80\u7D81\u5B9A"),1)],10,Qe)]),_:1},8,["to"])]),e("form",et,[tt,y(h,{target:"_blank",to:t(Y),onClick:s[12]||(s[12]=o=>V("yt"))},{default:x(()=>[e("button",{type:"button",class:I(["btn btn-block",{"btn-check":!t(_),"btn-default":t(_)}]),disabled:t(_)},[c(e("i",ot,null,512),[[b,t(_)]]),n(" "+v(t(_)?"\u5DF2\u7D81\u5B9A":"\u524D\u5F80\u7D81\u5B9A"),1)],10,st)]),_:1},8,["to"])]),e("form",at,[lt,y(h,{target:"_blank",to:t(j),onClick:s[13]||(s[13]=o=>V("ig"))},{default:x(()=>[e("button",{type:"button",class:I(["btn btn-block",{"btn-check":!t(f),"btn-default":t(f)}]),disabled:t(f)},[c(e("i",it,null,512),[[b,t(f)]]),n(" "+v(t(f)?"\u5DF2\u7D81\u5B9A":"\u524D\u5F80\u7D81\u5B9A"),1)],10,nt)]),_:1},8,["to"])])])])]),B("",!0)])])}}},mt=X(dt,[["__scopeId","data-v-845e3871"]]);export{mt as default};