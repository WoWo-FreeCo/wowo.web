import{_ as K,a as Q}from"./ProfileSidebar.a1c7af16.js";import{a as X,q as ee,u as D,b as te,z as se,S as y,T as oe,B as ae}from"./entry.c9000b64.js";import{u as le}from"./authStore.1f47292a.js";import{c as F,b as u,o as ne,_ as B,$ as S,aa as e,J as r,af as h,y as t,C as n,ae as I,ab as w,G as b,i as W,ad as g,a0 as x,Z as O,a8 as ie,a9 as ce}from"./swiper-vue.d582d122.js";import"./pageStatusStore.b89fbd41.js";const l=T=>(ie("data-v-a09cb076"),T=T(),ce(),T),de={class:"full_height mt185ptb30 pt0"},re={class:"row"},ue={class:"col-sm-9 pl20pr30"},_e={class:"contact-form"},pe={id:"",action:"javascript:;"},he=l(()=>e("h4",{class:"mb-20"}," \u6703\u54E1\u57FA\u672C\u8CC7\u8A0A ",-1)),me={class:"form-group"},be=l(()=>e("label",null,"\u59D3\u540D*",-1)),ve={class:"form-group"},fe=l(()=>e("label",null,"\u624B\u6A5F*",-1)),Ie={class:"form-group"},ge=l(()=>e("label",null,"\u5E02\u8A71*",-1)),ke={class:"form-group"},Pe=l(()=>e("label",null,"\u9001\u8CA8\u5730\u5740*",-1)),Ve={class:"form-group"},ye=l(()=>e("label",null,"\u9001\u8CA8\u5730\u57402",-1)),Se={class:"form-group"},Te=l(()=>e("label",null,"\u9001\u8CA8\u5730\u57403",-1)),Ae=l(()=>e("button",{type:"reset",class:"btn btn-main btn-default"}," \u53D6\u6D88\u91CD\u586B ",-1)),$e={id:"member_vip_root",class:"bg_left2"},Be={id:"member_vip",class:"level_frame"},we={class:"level_tl"},Oe=l(()=>e("span",null,"\u76EE\u524D\u7D1A\u5225\uFF1A",-1)),xe=l(()=>e("a",{href:"#","data-toggle":"modal","data-target":"#vipdesc"},[e("i",{class:"fa-solid fa-circle-question"}),n(),e("u",null,"\u67E5\u770B\u5347\u7B49\u65B9\u5F0F")],-1)),Ce={class:"row level_content"},Ue={key:0},Le=l(()=>e("h4",null,[n("\u6211\u8981\u89E3\u9396\u6210\u70BA"),e("span",null,"VIP"),n("\uFF1A"),e("span",{class:"level_tips"},"\u300EA.\u7D81\u5B9AVIP\u63A8\u85A6\u4EBA\u300F+\u300EB.\u6309\u8B9AWO\u7C89\u7D72\u5718\u6216C.\u8A02\u95B1WO\u983B\u9053\u300F\uFF0C\u5373\u53EF\u6210\u70BAVIP!")],-1)),Re=[Le],Ne={key:1},ze=l(()=>e("h4",null,[n("\u6211\u8981\u89E3\u9396\u6210\u70BA"),e("span",null,"SVIP"),n("\uFF1A"),e("span",{class:"level_tips"},"\u300ED.\u7D81\u5B9ASVIP\u6FC0\u6D3B\u78BC\u300F\u6216\u300EB.\u6309\u8B9AWO\u7C89\u7D72\u5718+C.\u8A02\u95B1WO\u983B\u9053\u300F\uFF0C\u5373\u53EF\u6210\u70BASVIP!")],-1)),Ee=[ze],Ge={key:2,class:"col-sm-6 border-right"},De=l(()=>e("h5",null,[n("A.VIP\u63A8\u85A6\u4EBA"),e("span",{class:"level_tips"},"(\u7D81\u5B9A\u63A8\u85A6\u4EBA\u5E33\u865F\u5F8C\u5C07\u7121\u6CD5\u89E3\u9396\uFF01)")],-1)),Fe={id:"vip_rec",action:"javascript:;",class:"form-group"},We=["disabled"],qe={class:"fa-solid fa-circle-check"},Me=l(()=>e("h5",null,[n("A.SVIP\u6FC0\u6D3B\u78BC"),e("span",{class:"level_tips"},"(\u7D81\u5B9A\u63A8\u85A6\u4EBA\u5E33\u865F\u5F8C\u5C07\u7121\u6CD5\u89E3\u9396\uFF01)")],-1)),je={id:"svip_rec",action:"javascript:;",class:"form-group"},Ye=["disabled"],Je=["disabled"],Ze={class:"fa-solid fa-circle-check"},He={class:"col-sm-6"},Ke=l(()=>e("h5",null,[n("B.FB\u7C89\u7D72\u7D81\u5B9A"),e("span",{class:"level_tips"},"(\u6309\u8B9AWO\u7C89\u7D72\u5718)")],-1)),Qe=["disabled"],Xe={class:"fa-solid fa-circle-check"},et={class:"mt-10"},tt=l(()=>e("h5",null,[n("C.Youtube\u983B\u9053\u7D81\u5B9A"),e("span",{class:"level_tips"},"(\u8A02\u95B1WO\u983B\u9053)")],-1)),st=["disabled"],ot={class:"fa-solid fa-circle-check"},at={class:"mt-10"},lt=l(()=>e("h5",null,[n("D.IG\u8FFD\u8E64\u7D81\u5B9A"),e("span",{class:"level_tips"},"(\u8A02\u95B1WO IG)")],-1)),nt=["disabled"],it={class:"fa-solid fa-circle-check"},ct={__name:"index",setup(T){var L,R,N,z,E,G;const i=le(),q=ee(),v=D(),M=D(),C=te(),o=F(()=>i==null?void 0:i.user),m=u(!1),_=u(!1),f=u(!1),j=u("https://www.instagram.com/lovin.520/"),Y=u("https://youtu.be/9RITDp0BBUw"),J=u("https://www.facebook.com/LOVIN2022"),k=u(""),A=u(""),Z=F(()=>{var c;switch((c=o.value)==null?void 0:c.memberLevel){case"VIP":return"VIP";case"SVIP":return"SVIP";default:return"\u666E\u901A\u6703\u54E1"}}),d=u({nickname:(L=i.user)==null?void 0:L.nickname,telephone:(R=i.user)==null?void 0:R.telephone,cellphone:(N=i.user)==null?void 0:N.cellphone,addressOne:(z=i.user)==null?void 0:z.addressOne,addressTwo:(E=i.user)==null?void 0:E.addressTwo,addressThree:(G=i.user)==null?void 0:G.addressThree});ne(()=>{i.status.loggedIn||q.push({path:"/login"}),U(),console.log("!! - ",o.value)});async function U(){var c,s,$;try{const V=localStorage.getItem("accessToken"),p=await $fetch(`${M.public.apiBase}/${se}`,{method:"GET",headers:{Authorization:"Bearer "+V}});i.loginSuccess(V),i.updateUser(p.data),m.value=(c=p.data)==null?void 0:c.FacebookGroupActivated,_.value=(s=p.data)==null?void 0:s.YouTubeChannelActivated,f.value=($=p.data)==null?void 0:$.IGFollowActivated}catch{i.logout()}console.log("updated permission")}async function P(c){if(c==="fb")try{await $fetch(`${v.public.apiBase}/${y}`,{method:"POST",body:{kind:"B"},headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}}),m.value=!0}catch{alert("\u7D81\u5B9A\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u4E00\u6B21")}else if(c==="yt")try{await $fetch(`${v.public.apiBase}/${y}`,{method:"POST",body:{kind:"C"},headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}}),_.value=!0}catch{alert("\u7D81\u5B9A\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u4E00\u6B21")}else if(c==="ig")try{await $fetch(`${v.public.apiBase}/${y}`,{method:"POST",body:{kind:"D"},headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}}),_.value=!0}catch{alert("\u7D81\u5B9A\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u4E00\u6B21")}else if(c==="vip")try{console.log(k.value),await $fetch(`${v.public.apiBase}/${y}`,{method:"POST",body:{kind:"A",code:k.value},headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}}),i.user.VIPActivated=!0,alert("VIP\u63A8\u85A6\u78BC\u5DF2\u6FC0\u6D3B\uFF01\uFF01")}catch{alert("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u63A8\u85A6\u5E33\u865F")}else if(c==="svip")try{await $fetch(`${v.public.apiBase}/${y}`,{method:"POST",body:{kind:"E",code:A.value},headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}})}catch{alert("\u7D81\u5B9A\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u4E00\u6B21")}U()}async function H(){var c;try{await $fetch(`${v.public.apiBase}/${oe}`,{method:"PUT",body:{...d.value,email:(c=i.user)==null?void 0:c.email},headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}}),C.success("\u5E33\u6236\u8CC7\u6599\u5DF2\u66F4\u65B0")}catch(s){C.error(s.message)}}return(c,s)=>{const $=K,V=Q,p=ae;return O(),B("div",de,[S($),e("div",re,[S(V),e("div",ue,[e("div",_e,[e("form",pe,[he,e("div",me,[be,r(e("input",{id:"auth-realname","onUpdate:modelValue":s[0]||(s[0]=a=>t(d).nickname=a),type:"text",placeholder:"\u59D3\u540D*",class:"form-control",name:"",required:""},null,512),[[h,t(d).nickname]])]),e("div",ve,[fe,r(e("input",{id:"auth-mobile","onUpdate:modelValue":s[1]||(s[1]=a=>t(d).cellphone=a),type:"text",placeholder:"\u624B\u6A5F*",class:"form-control",name:"",required:""},null,512),[[h,t(d).cellphone]])]),e("div",Ie,[ge,r(e("input",{id:"auth-tele","onUpdate:modelValue":s[2]||(s[2]=a=>t(d).telephone=a),type:"text",placeholder:"\u5E02\u8A71*",class:"form-control",name:"",required:""},null,512),[[h,t(d).telephone]])]),e("div",ke,[Pe,r(e("input",{id:"auth-address1","onUpdate:modelValue":s[3]||(s[3]=a=>t(d).addressOne=a),type:"text",placeholder:"\u9001\u8CA8\u5730\u5740*",class:"form-control",name:"",required:""},null,512),[[h,t(d).addressOne]])]),e("div",Ve,[ye,r(e("input",{id:"auth-address2","onUpdate:modelValue":s[4]||(s[4]=a=>t(d).addressTwo=a),type:"text",placeholder:"\u9001\u8CA8\u5730\u57402",class:"form-control",name:""},null,512),[[h,t(d).addressTwo]])]),e("div",Se,[Te,r(e("input",{id:"auth-address3","onUpdate:modelValue":s[5]||(s[5]=a=>t(d).addressThree=a),type:"text",placeholder:"\u9001\u8CA8\u5730\u57403",class:"form-control",name:""},null,512),[[h,t(d).addressThree]])]),e("div",{class:"text-center"},[Ae,e("input",{id:"edit-confirm",type:"submit",class:"btn btn-main btn-bag",value:"\u78BA\u8A8D\u9001\u51FA",onClick:H})])])])])]),e("div",$e,[e("div",Be,[e("h3",we,[Oe,n(I(t(Z))+" ",1),xe]),e("div",Ce,[t(o).memberLevel==="NORMAL"?(O(),B("div",Ue,Re)):w("",!0),t(o).memberLevel==="VIP"?(O(),B("div",Ne,Ee)):w("",!0),t(o).memberLevel==="NORMAL"?(O(),B("div",Ge,[De,e("form",Fe,[r(e("input",{"onUpdate:modelValue":s[6]||(s[6]=a=>W(k)?k.value=a:null),type:"text",placeholder:"\u8ACB\u8F38\u5165VIP\u63A8\u85A6\u5E33\u865F (\u6703\u54E1\u5E33\u865F)",class:"form-control"},null,512),[[b,!t(o).VIPActivated],[h,t(k)]]),e("button",{type:"button",class:g(["btn btn-block",{"btn-check":!t(o).VIPActivated,"btn-default":t(o).VIPActivated}]),disabled:t(o).VIPActivated,onClick:s[7]||(s[7]=a=>P("vip"))},[r(e("i",qe,null,512),[[b,t(o).VIPActivated]]),n(" "+I(t(o).VIPActivated?"\u5DF2\u7D81\u5B9A":"\u524D\u5F80\u7D81\u5B9A"),1)],10,We)])])):w("",!0),e("div",{class:g([{"display-none":t(o).memberLevel==="NORMAL"},"col-sm-6 border-right svip-code"])},[Me,e("form",je,[r(e("input",{"onUpdate:modelValue":s[8]||(s[8]=a=>W(A)?A.value=a:null),type:"text",placeholder:"\u8ACB\u8F38\u5165SVIP\u6FC0\u6D3B\u78BC",class:"form-control",disabled:t(o).memberLevel==="SVIP"},null,8,Ye),[[b,!t(o).SVIPActivated],[h,t(A)]]),e("button",{type:"button",class:g(["btn btn-block",{"btn-check":!t(o).SVIPActivated,"btn-default":t(o).SVIPActivated}]),disabled:t(o).SVIPActivated||t(o).memberLevel==="SVIP",onClick:s[9]||(s[9]=a=>P("svip"))},[r(e("i",Ze,null,512),[[b,t(o).SVIPActivated]]),n(" "+I(t(o).SVIPActivated?"\u5DF2\u7D81\u5B9A":"\u524D\u5F80\u7D81\u5B9A"),1)],10,Je)])],2),e("div",He,[e("form",null,[Ke,S(p,{target:"_blank",to:t(J),onClick:s[10]||(s[10]=a=>P("fb"))},{default:x(()=>[e("button",{type:"button",class:g(["btn btn-block",{"btn-check":!t(m),"btn-default":t(m)}]),disabled:t(m)},[r(e("i",Xe,null,512),[[b,t(m)]]),n(" "+I(t(m)?"\u5DF2\u7D81\u5B9A":"\u524D\u5F80\u7D81\u5B9A"),1)],10,Qe)]),_:1},8,["to"])]),e("form",et,[tt,S(p,{target:"_blank",to:t(Y),onClick:s[11]||(s[11]=a=>P("yt"))},{default:x(()=>[e("button",{type:"button",class:g(["btn btn-block",{"btn-check":!t(_),"btn-default":t(_)}]),disabled:t(_)},[r(e("i",ot,null,512),[[b,t(_)]]),n(" "+I(t(_)?"\u5DF2\u7D81\u5B9A":"\u524D\u5F80\u7D81\u5B9A"),1)],10,st)]),_:1},8,["to"])]),e("form",at,[lt,S(p,{target:"_blank",to:t(j),onClick:s[12]||(s[12]=a=>P("ig"))},{default:x(()=>[e("button",{type:"button",class:g(["btn btn-block",{"btn-check":!t(f),"btn-default":t(f)}]),disabled:t(f)},[r(e("i",it,null,512),[[b,t(f)]]),n(" "+I(t(f)?"\u5DF2\u7D81\u5B9A":"\u524D\u5F80\u7D81\u5B9A"),1)],10,nt)]),_:1},8,["to"])])])])]),w("",!0)])])}}},ht=X(ct,[["__scopeId","data-v-a09cb076"]]);export{ht as default};
