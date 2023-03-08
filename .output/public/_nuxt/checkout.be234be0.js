import{_ as Pe}from"./client-only.46688fa6.js";import{a as Ce,E as xe,q as Ue,b as Ve,u as Ie,F as Se,H as qe,I as we,B as Ne}from"./entry.b2c13a7d.js";import{b as m,c as A,o as $e,q as De,P as Oe,_ as q,aa as e,F as Me,V as Re,y as o,J as r,ah as g,C as c,G as j,ae as b,$ as B,i as P,af as v,a0 as K,ai as Ae,ab as w,aj as pe,f as E,Z as T,a3 as Y,a8 as Be,a9 as Ee}from"./swiper-vue.6d0a2b42.js";import{u as Le}from"./authStore.8141f46b.js";import{P as D,a as L,D as _,U as z}from"./common.cb49f5bd.js";const h=O=>(Be("data-v-2351140d"),O=O(),Ee(),O),ze={class:"full_height mt185ptb30"},He={id:"checkout_form",action:"javascript:;",class:"cart_container"},Fe={class:"cart_list"},Ge={class:"cart_img"},Ze=["src"],je={class:"cart_tl"},Ke={class:"product-quantity"},Ye={class:"cart_price text-right"},Je={class:"cart_info"},Qe=h(()=>e("h5",null,"\u5BC4\u9001\u65B9\u5F0F",-1)),We={class:"checkout-form"},Xe={class:"radio form-check"},eo=["value"],oo={class:"radio form-check"},to=["value"],no={class:"cart_info"},so=h(()=>e("h5",null,"\u4ED8\u6B3E\u65B9\u5F0F",-1)),ao={class:"checkout-form"},ro={class:"radio form-check"},lo=["value"],io={class:"radio form-check"},co=["value"],uo={class:"radio form-check"},po=["value"],mo={class:"cart_info"},vo={class:"checkout-form"},_o={id:"ship_home_form",class:"cart_info"},ho=h(()=>e("h5",null,"\u6536\u4EF6\u4EBA\u8CC7\u8A0A",-1)),yo={class:"ship_info"},fo={class:"cart_info checkout-form"},go=h(()=>e("h5",null,"\u8D85\u5546\u53D6\u8CA8\u8CC7\u8A0A",-1)),bo={class:"emap"},ko=["onClick"],To={class:"store-name"},Po={class:"store-address"},Co={class:"cart_info"},xo=h(()=>e("h5",null,"\u8ACB\u9078\u64C7\u767C\u7968\u9078\u9805",-1)),Uo={class:"checkout-form"},Vo={class:"radio form-check"},Io={class:"radio form-check"},So={key:0,class:"cart_info checkout-form"},qo=h(()=>e("h5",null,"\u767C\u7968\u8CC7\u8A0A",-1)),wo={class:"ship_info inv-info"},No={class:"ship_info"},$o={class:"cart_info checkout-form"},Do=h(()=>e("h5",null,"\u8F09\u5177\u8CC7\u8A0A",-1)),Oo={class:"ship_info inv-info"},Mo={class:"checkbox pt10 pb10"},Ro={key:0,class:"ship_info"},Ao={class:"radio form-check"},Bo=["value"],Eo={class:"radio form-check"},Lo=["value"],zo={class:"radio form-check"},Ho=["value"],Fo={class:"cart_info checkout-form"},Go=h(()=>e("h5",null,"\u8A02\u55AE\u5099\u8A3B",-1)),Zo={class:"cart_info"},jo=h(()=>e("h5",null,"\u4ED8\u6B3E\u660E\u7D30",-1)),Ko={class:"cart_check"},Yo={class:"border_top"},Jo={class:"cart_info checkout-form ptb10"},Qo={class:"checkbox"},Wo=h(()=>e("a",{href:"/terms",target:"new"},"\u6703\u54E1\u4F7F\u7528\u689D\u6B3E",-1)),Xo=h(()=>e("a",{href:"/privacy",target:"new"},"\u96B1\u79C1\u6B0A\u653F\u7B56",-1)),et=h(()=>e("div",{class:"text-center mb-20 mt-20"},[e("span",{id:"errormsg"})],-1)),ot={class:"text-center mb-20 mt-20"},tt={__name:"checkout",setup(O){var te,ne,se,ae,re,le,ie,ce;const me=xe(),ve=Ue(),k=Ve(),M=Ie(),l=Le(),x=Se(),U=m(0),_e=m(!1),V=m(!1),N=m(),C=m(),I=m(),R=m(!1),f=m(!1),S=m(D.General),H=A({get:()=>$.value.reduce((a,t)=>a+X(t)*t.amount,0),set:a=>{H.value=a}}),J=A(()=>{var a;return((a=l==null?void 0:l.user)==null?void 0:a.rewardCredit)||0}),$=A(()=>{switch(S.value){case D.ColdChain:return x==null?void 0:x.merch.filter(a=>a.attribute==="COLD_CHAIN");default:return x==null?void 0:x.merch.filter(a=>a.attribute==="GENERAL")}}),Q=m({}),d=m({name:"",id:"",outside:0,ship:0,address:""}),W=A(()=>{var t;return(t=Q.value)==null?void 0:t.deliveryFee});let F=null;$e(async()=>{if(ye(),await De(),$.value<=0)return ve.push({path:"/"});await G(),F=setInterval(()=>{he()},1e3)}),Oe(()=>{clearInterval(F),F=null});async function G(){try{const a=ee(!0);delete a.requiredDeliveryTimeslots,console.log("123,, ",a);const t=await $fetch(`${M.public.apiBase}/${qe}`,{method:"POST",body:a,headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}});console.log("pre-settlement, ",t),Q.value=t.data}catch(a){console.log(a)}}function he(){d.value.name=localStorage.getItem("storename"),d.value.id=localStorage.getItem("storeid"),d.value.address=localStorage.getItem("storeaddress"),d.value.ship=localStorage.getItem("ship"),d.value.outside=localStorage.getItem("outside")}function ye(){switch(me.query.type){case"cold-chain":S.value=D.ColdChain;break;default:S.value=D.General;break}}const X=a=>{var t,u;return((t=l==null?void 0:l.user)==null?void 0:t.memberLevel)==="SVIP"?a==null?void 0:a.svipPrice:((u=l==null?void 0:l.user)==null?void 0:u.memberLevel)==="VIP"?a==null?void 0:a.vipPrice:l.status.loggedIn?a==null?void 0:a.memberPrice:a==null?void 0:a.price},n=m({attribute:S.value,choosePayment:L.CreditOneTime,consignee:{deliveryType:_.Home,city:"",email:(te=l.user)==null?void 0:te.email,idNo:"",idType:"1",cellphone:(ne=l.user)==null?void 0:ne.cellphone,name:(se=l.user)==null?void 0:se.nickname,remark:"",senderRemark:"",stationCode:"",stationName:"",addressDetailOne:(ae=l.user)==null?void 0:ae.addressOne,province:"",district:"",town:"",zipCode:""},invoiceParams:{customerName:(re=l.user)==null?void 0:re.nickname,customerEmail:(le=l.user)==null?void 0:le.email,customerPhone:(ie=l.user)==null?void 0:ie.cellphone,customerAddr:(ce=l.user)==null?void 0:ce.addressOne,customerIdentifier:"",carruerType:z.Member,carruerNum:"",donation:"0",loveCode:""},products:[],bonusPointRedemption:0,requiredDeliveryTimeslots:[{date:"2023-03-02T00:00:00Z",slot:"14:00-18:00"}]});function ee(a=!1){var p,i;const t=n.value.consignee.deliveryType===_.Home&&!a?{date:new Date(N.value).toISOString(),slot:`${oe(C.value)}-${oe(I.value)}`}:{};return{...n.value,attribute:S.value,consignee:{...n.value.consignee,stationCode:n.value.consignee.deliveryType===_.Store?(p=d.value)==null?void 0:p.id:"",stationName:n.value.consignee.deliveryType===_.Store?(i=d.value)==null?void 0:i.name:""},invoiceParams:{...n.value.invoiceParams,carruerType:V.value?n.value.invoiceParams.carruerNum:"",carruerNum:n.value.invoiceParams.carruerType>=2?n.value.invoiceParams.carruerNum:"",donation:f.value?1:0,loveCode:f.value?n.value.invoiceParams.loveCode:"",customerIdentifier:_e.value?n.value.invoiceParams.customerIdentifier:"00000000",customerPhone:n.value.consignee.cellphone,customerName:n.value.consignee.name,customerAddr:n.value.consignee.addressDetailOne},bonusPointRedemption:U.value,products:$.value.map(y=>({id:y.id,quantity:y.amount})),requiredDeliveryTimeslots:[t]}}function oe(a){const t=new Date(a),u=t.getHours(),p=t.getMinutes();return`${u.toString().padStart(2,"0")}:${p.toString().padStart(2,"0")}`}async function fe(){if(!ge())return;const t=ee();console.log(t,C.value,I.value);try{const u=`${M.public.baseUrl}/order?payment=successful`,p=await $fetch(`${M.public.apiBase}/${we}?order_result_url=${u}`,{method:"POST",body:t,headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}});k.loading("\u5373\u5C07\u5C0E\u5411\u4ED8\u6B3E\u9801\u9762\uFF0C\u8ACB\u7A0D\u5019...");const i=document.createElement("credit-div");i.innerHTML=p,i.id="credit-payment",document.body.appendChild(i),document.getElementById("_form_aiochk").submit(),console.log(p)}catch(u){k.error(u.data)}}function ge(){var a,t,u,p;if(!n.value.consignee.name||!n.value.consignee.cellphone||!n.value.consignee.addressDetailOne||!n.value.consignee.province||!n.value.consignee.district||!n.value.consignee.city||!n.value.consignee.zipCode)return k.error("\u8ACB\u78BA\u5BE6\u586B\u5BEB\u6536\u4EF6\u4EBA\u8CC7\u8A0A"),!1;if(n.value.consignee.deliveryType===_.Store&&(!d.value.id||!d.value.name))return k.error("\u8ACB\u9078\u64C7\u6B32\u53D6\u8CA8\u7684\u5E97\u5BB6"),!1;if(n.value.consignee.deliveryType===_.Home&&(!N.value||!C.value||!I.value))return k.error("\u8ACB\u9078\u64C7\u53EF\u53D6\u8CA8\u7684\u6642\u9593\u5340\u6BB5"),!1;if((t=(a=n.value)==null?void 0:a.consignee)!=null&&t.cellphone){const i=(p=(u=n.value)==null?void 0:u.consignee)==null?void 0:p.cellphone;if(!/^[0-9]{10}$/g.test(i)){k.error("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u624B\u6A5F\u683C\u5F0F ex.0912345678");return}}if(f.value){const i=/^\d{3,7}$/,y=n.value.invoiceParams.loveCode;if(!i.test(y)){k.error("\u611B\u5FC3\u78BC\u8ACB\u8F38\u51653-7\u78BC\u7684\u6578\u5B57\u7D44\u5408");return}}if(V.value){let i,y;n.value.invoiceParams.carruerType===2&&(i=/^[a-zA-Z]{2}[0-9]{14}$/,y="16\u78BC\u7684\u82F1\u6578\u7D44\u5408"),n.value.invoiceParams.carruerType===3&&(i=/^\/{1}[0-9A-Z]{7}$/,y="8\u78BC\u7684\u82F1\u6578\u7D44\u5408");const Z=n.value.invoiceParams.carruerNum;if(n.value.invoiceParams.carruerType>=2&&!i.test(Z)){k.error(`\u8ACB\u8F38\u5165\u7B26\u5408\u683C\u5F0F\u7684\u8F09\u5177\u8CC7\u6599(${y})`);return}}return R.value?!0:(k.error("\u8ACB\u8A73\u95B1\u76F8\u95DC\u8CFC\u8CB7\u689D\u6B3E\u4E26\u52FE\u9078\u78BA\u8A8D"),!1)}function be(){const a=`${M.public.baseUrl}`;window.open(`https://emap.presco.com.tw/c2cemap.ashx?eshopid=870&&servicetype=1&url=${a}/cvs_callback`)}function ke(a){return a<Date.now()}return(a,t)=>{const u=E("n-input-number"),p=E("n-date-picker"),i=E("n-time-picker"),y=E("n-space"),Z=Pe,Te=Ne;return T(),q("div",ze,[e("form",He,[e("table",Fe,[e("tbody",null,[(T(!0),q(Me,null,Re(o($),s=>{var ue,de;return T(),q("tr",{key:s.id,class:"prod-tr"},[e("td",Ge,[e("img",{src:s==null?void 0:s.coverImg},null,8,Ze)]),e("td",je,[e("h5",null,b(s==null?void 0:s.name),1),e("div",Ke," x"+b(s==null?void 0:s.amount),1)]),e("td",Ye,[r(e("span",null,"\u5E02\u50F9 $"+b(s==null?void 0:s.price),513),[[j,((ue=o(l).user)==null?void 0:ue.memberLevel)&&((de=o(l).user)==null?void 0:de.memberLevel)!=="NORMAL"]]),c(" \u50F9\u9322 $"+b(X(s)),1)])])}),128))])]),e("div",Je,[Qe,e("div",We,[e("label",Xe,[r(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>o(n).consignee.deliveryType=s),type:"radio",name:"shipping",value:o(_).Home,onClick:G},null,8,eo),[[g,o(n).consignee.deliveryType]]),c(" \u5B85\u914D\u5230\u5E9C ")]),r(e("label",oo,[r(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>o(n).consignee.deliveryType=s),type:"radio",name:"shipping",value:o(_).Store,onClick:G},null,8,to),[[g,o(n).consignee.deliveryType]]),c(" \u8D85\u5546\u53D6\u8CA8 ")],512),[[j,o(S)===o(D).General]])])]),e("div",no,[so,e("div",ao,[e("label",ro,[r(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>o(n).choosePayment=s),type:"radio",name:"payment",value:o(L).CreditOneTime},null,8,lo),[[g,o(n).choosePayment]]),c(" \u4FE1\u7528\u5361 ")]),e("label",io,[r(e("input",{"onUpdate:modelValue":t[3]||(t[3]=s=>o(n).choosePayment=s),type:"radio",name:"payment",value:o(L).BarCode},null,8,co),[[g,o(n).choosePayment]]),c(" \u8D85\u5546\u689D\u78BC\u4ED8\u6B3E ")]),e("label",uo,[r(e("input",{"onUpdate:modelValue":t[4]||(t[4]=s=>o(n).choosePayment=s),type:"radio",value:o(L).Cvs,name:"payment"},null,8,po),[[g,o(n).choosePayment]]),c(" \u8D85\u5546\u4EE3\u78BC\u4ED8\u6B3E ")])])]),e("div",mo,[e("h5",null,"\u7D05\u5229\u6263\u9EDE (\u76EE\u524D\u53EF\u7528\u7D05\u5229\uFF1A"+b(o(J))+" \u9EDE)",1),e("div",vo,[B(u,{value:o(U),"onUpdate:value":t[5]||(t[5]=s=>P(U)?U.value=s:null),min:"0",max:o(J),style:{width:"150px",margin:"4px 0 4px 15px"}},null,8,["value","max"])])]),e("div",_o,[ho,e("div",yo,[r(e("input",{id:"ship_name-2","onUpdate:modelValue":t[6]||(t[6]=s=>o(n).consignee.name=s),type:"text",placeholder:"\u59D3\u540D*",class:"form-control",name:"ship_name-2",required:""},null,512),[[v,o(n).consignee.name]]),r(e("input",{id:"ship_phone-2","onUpdate:modelValue":t[7]||(t[7]=s=>o(n).consignee.cellphone=s),type:"text",placeholder:"\u624B\u6A5F*",class:"form-control",name:"ship_phone-2",required:""},null,512),[[v,o(n).consignee.cellphone]]),r(e("input",{id:"ship-province","onUpdate:modelValue":t[8]||(t[8]=s=>o(n).consignee.province=s),type:"text",placeholder:"\u7701*",class:"form-control",name:"ship-province",required:""},null,512),[[v,o(n).consignee.province]]),r(e("input",{id:"ship-district","onUpdate:modelValue":t[9]||(t[9]=s=>o(n).consignee.district=s),type:"text",placeholder:"\u884C\u653F\u5340*",class:"form-control",name:"ship-district",required:""},null,512),[[v,o(n).consignee.district]]),r(e("input",{id:"ship-city","onUpdate:modelValue":t[10]||(t[10]=s=>o(n).consignee.city=s),type:"text",placeholder:"\u57CE\u5E02*",class:"form-control",name:"ship-city",required:""},null,512),[[v,o(n).consignee.city]]),r(e("input",{id:"ship-zipCode","onUpdate:modelValue":t[11]||(t[11]=s=>o(n).consignee.zipCode=s),type:"text",placeholder:"\u90F5\u905E\u5340\u865F*",class:"form-control",name:"ship-zipCode",required:""},null,512),[[v,o(n).consignee.zipCode]]),r(e("input",{id:"ship-address-home","onUpdate:modelValue":t[12]||(t[12]=s=>o(n).consignee.addressDetailOne=s),type:"text",placeholder:"\u6536\u4EF6\u5730\u5740*",class:"form-control",name:"ship-address-home",required:""},null,512),[[v,o(n).consignee.addressDetailOne]]),B(Z,null,{default:K(()=>[o(n).consignee.deliveryType!==o(_).Store?(T(),Y(p,{key:0,value:o(N),"onUpdate:value":t[13]||(t[13]=s=>P(N)?N.value=s:null),type:"date",placeholder:"\u8ACB\u9078\u64C7\u53EF\u6536\u8CA8\u65E5\u671F","is-date-disabled":ke,required:""},null,8,["value"])):w("",!0),B(y,null,{default:K(()=>[o(n).consignee.deliveryType!==o(_).Store?(T(),Y(i,{key:0,value:o(C),"onUpdate:value":t[14]||(t[14]=s=>P(C)?C.value=s:null),format:"h:mm a",placeholder:"\u6536\u8CA8\u6642\u9593\u9EDE-\u958B\u59CB",required:""},null,8,["value"])):w("",!0),o(n).consignee.deliveryType!==o(_).Store?(T(),Y(i,{key:1,value:o(I),"onUpdate:value":t[15]||(t[15]=s=>P(I)?I.value=s:null),format:"h:mm a",disabled:!o(C),placeholder:"\u6536\u8CA8\u6642\u9593-\u7D50\u675F",required:""},null,8,["value","disabled"])):w("",!0)]),_:1})]),_:1})])]),r(e("div",fo,[go,e("div",bo,[e("div",{onClick:Ae(be,["prevent"])}," \u9078\u64C7\u5E97\u8216 ",8,ko)]),e("div",To,[r(e("input",{id:"store-name","onUpdate:modelValue":t[16]||(t[16]=s=>o(d).name=s),type:"text",required:"",class:"form-control bold",disabled:""},null,512),[[v,o(d).name]])]),e("div",Po,[r(e("input",{id:"store-address","onUpdate:modelValue":t[17]||(t[17]=s=>o(d).address=s),type:"text",required:"",class:"form-control bold",disabled:""},null,512),[[v,o(d).address]])])],512),[[j,o(n).consignee.deliveryType===o(_).Store]]),e("div",Co,[xo,e("div",Uo,[e("label",Vo,[r(e("input",{"onUpdate:modelValue":t[18]||(t[18]=s=>P(f)?f.value=s:null),type:"radio",name:"donation",value:!1},null,512),[[g,o(f)]]),c(" \u958B\u7ACB\u767C\u7968 ")]),e("label",Io,[r(e("input",{"onUpdate:modelValue":t[19]||(t[19]=s=>P(f)?f.value=s:null),type:"radio",name:"donation",value:!0},null,512),[[g,o(f)]]),c(" \u6350\u8D08\u767C\u7968 ")])])]),o(f)?(T(),q("div",So,[qo,e("div",wo,[e("div",No,[r(e("input",{id:"inv_ship_lovecode","onUpdate:modelValue":t[20]||(t[20]=s=>o(n).invoiceParams.loveCode=s),type:"text",placeholder:"\u8ACB\u8F38\u5165\u6350\u8D08\u611B\u5FC3\u78BC*",class:"form-control",name:"",required:""},null,512),[[v,o(n).invoiceParams.loveCode]])])])])):w("",!0),e("div",$o,[Do,e("div",Oo,[e("label",Mo,[r(e("input",{id:"change-image","onUpdate:modelValue":t[21]||(t[21]=s=>P(V)?V.value=s:null),type:"checkbox"},null,512),[[pe,o(V)]]),c(" \u4F7F\u7528\u8F09\u5177 ")]),o(V)?(T(),q("div",Ro,[e("label",Ao,[r(e("input",{"onUpdate:modelValue":t[22]||(t[22]=s=>o(n).invoiceParams.carruerType=s),type:"radio",name:"uic-member",value:o(z).Member},null,8,Bo),[[g,o(n).invoiceParams.carruerType]]),c(" \u6703\u54E1\u8F09\u5177 ")]),e("label",Eo,[r(e("input",{"onUpdate:modelValue":t[23]||(t[23]=s=>o(n).invoiceParams.carruerType=s),type:"radio",name:"uic-npc",value:o(z).NPC},null,8,Lo),[[g,o(n).invoiceParams.carruerType]]),c(" \u81EA\u7136\u4EBA\u6191\u8B49 ")]),e("label",zo,[r(e("input",{"onUpdate:modelValue":t[24]||(t[24]=s=>o(n).invoiceParams.carruerType=s),type:"radio",name:"uic-mobile",value:o(z).Mobile},null,8,Ho),[[g,o(n).invoiceParams.carruerType]]),c(" \u624B\u6A5F\u689D\u78BC ")]),o(n).invoiceParams.carruerType>=2?r((T(),q("input",{key:0,id:"inv-carruerNum","onUpdate:modelValue":t[25]||(t[25]=s=>o(n).invoiceParams.carruerNum=s),type:"text",placeholder:"\u8ACB\u8F38\u5165\u5C0D\u61C9\u7684\u8F09\u5177\u7DE8\u865F",class:"form-control",required:"",name:""},null,512)),[[v,o(n).invoiceParams.carruerNum]]):w("",!0)])):w("",!0)])]),e("div",Fo,[Go,r(e("textarea",{id:"","onUpdate:modelValue":t[26]||(t[26]=s=>o(n).consignee.remark=s),rows:"6",placeholder:"\u8ACB\u8F38\u5165\u8A02\u55AE\u5099\u8A3B\u5167\u5BB9",class:"form-control",name:""},null,512),[[v,o(n).consignee.remark]])]),e("div",Zo,[jo,e("ul",Ko,[e("li",null," \u5546\u54C1\u91D1\u984D\u5C0F\u8A08 (\u5171"+b(o($).length)+"\u9805\u5546\u54C1)\uFF1A$"+b(o(H)),1),e("li",null," \u904B\u8CBB\uFF1A"+b(o(W)),1),e("li",null," \u7D05\u5229\u6263\u9EDE\uFF1A"+b(o(U)),1),e("li",Yo,[c(" \u8A02\u55AE\u7E3D\u91D1\u984D\uFF1A"),e("span",null,"$"+b(o(H)-o(U)+o(W)),1)])])]),e("div",Jo,[e("label",Qo,[r(e("input",{id:"check_service","onUpdate:modelValue":t[27]||(t[27]=s=>P(R)?R.value=s:null),type:"checkbox",required:""},null,512),[[pe,o(R)]]),c(" \u6211\u5DF2\u7D93\u95B1\u8B80\u4E26\u540C\u610F\u4EE5\u4E0A\u8CFC\u8CB7\u9808\u77E5\u3001 "),Wo,c("\u8207"),Xo,c("\uFF0C\u6B64\u6B04\u4F4D\u52FE\u9078\u624D\u53EF\u9001\u51FA\u3002 ")])]),et,e("div",ot,[B(Te,{type:"button",class:"btn btn-main btn-default",to:"/cart"},{default:K(()=>[c(" \u4E0A\u4E00\u9801 ")]),_:1}),e("input",{id:"",type:"submit",class:"btn btn-main btn-check check_service_btn submit_home",value:"\u78BA\u8A8D\u9001\u51FA",onClick:fe})])])])}}},it=Ce(tt,[["__scopeId","data-v-2351140d"]]);export{it as default};
