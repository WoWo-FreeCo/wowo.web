import{_ as fe}from"./client-only.46688fa6.js";import{a as ye,H as ge,r as be,b as ke,u as Pe,q as Ce,J as Te,K as xe,L as Ue,C as Ie}from"./entry.e0dd610b.js";import{b as k,c as R,o as Ve,q as Ne,P as we,_ as T,aa as e,F as De,V as $e,y as o,J as r,ah as h,C as d,G as H,ai as qe,af as m,ae as b,$ as F,i as x,a0 as re,ab as w,aj as ie,f as le,Z as P,a3 as Oe,a8 as Se,a9 as Me}from"./swiper-vue.6d0a2b42.js";import{I as v,P as $,a as L,D as C,U as A}from"./common.2876555a.js";const _=q=>(Se("data-v-993b139e"),q=q(),Me(),q),Re={class:"full_height mt185ptb30"},Le={id:"checkout_form",action:"javascript:;",class:"cart_container"},Ae={class:"cart_list"},Be={class:"cart_img"},Ee=["src"],ze={class:"cart_tl"},He={class:"product-quantity"},Fe={class:"cart_price text-right"},Ge={class:"cart_info"},Ke=_(()=>e("h5",null,"\u5BC4\u9001\u65B9\u5F0F",-1)),Ze={class:"checkout-form"},je={class:"radio form-check"},Je=["value"],Ye={class:"radio form-check"},Qe=["value"],We={class:"cart_info checkout-form"},Xe=_(()=>e("h5",null,"\u8D85\u5546\u53D6\u8CA8\u8CC7\u8A0A",-1)),eo={class:"emap"},oo=["onClick"],to={class:"store-name"},no={class:"store-address"},so={class:"cart_info"},ao=_(()=>e("h5",null,"\u4ED8\u6B3E\u65B9\u5F0F",-1)),ro={class:"checkout-form"},io={class:"radio form-check"},lo=["value"],co={class:"radio form-check"},uo=["value"],po={class:"radio form-check"},mo=["value"],vo={class:"cart_info"},_o={class:"checkout-form"},ho={id:"ship_home_form",class:"cart_info"},fo=_(()=>e("h5",null,"\u6536\u4EF6\u4EBA\u8CC7\u8A0A",-1)),yo={class:"ship_info"},go={class:"cart_info"},bo=_(()=>e("h5",null,"\u8ACB\u9078\u64C7\u767C\u7968\u9078\u9805",-1)),ko={class:"checkout-form"},Po={class:"radio form-check"},Co=["value"],To={class:"radio form-check"},xo=["value"],Uo={class:"radio form-check"},Io=["value"],Vo={key:0,class:"cart_info checkout-form"},No=_(()=>e("h5",null,"\u767C\u7968\u8CC7\u8A0A",-1)),wo={class:"ship_info inv-info"},Do={class:"ship_info"},$o={class:"cart_info checkout-form"},qo=_(()=>e("h5",null,"\u8F09\u5177\u8CC7\u8A0A",-1)),Oo={class:"ship_info inv-info"},So={class:"checkbox pt10 pb10"},Mo={key:0,class:"ship_info"},Ro={class:"radio form-check"},Lo=["value"],Ao={class:"radio form-check"},Bo=["value"],Eo={class:"radio form-check"},zo=["value"],Ho={class:"cart_info checkout-form"},Fo=_(()=>e("h5",null,"\u8A02\u55AE\u5099\u8A3B",-1)),Go={class:"cart_info"},Ko=_(()=>e("h5",null,"\u4ED8\u6B3E\u660E\u7D30",-1)),Zo={class:"cart_check"},jo={class:"border_top"},Jo={class:"cart_info checkout-form ptb10"},Yo={class:"checkbox"},Qo=_(()=>e("a",{href:"/terms",target:"new"},"\u6703\u54E1\u4F7F\u7528\u689D\u6B3E",-1)),Wo=_(()=>e("a",{href:"/privacy",target:"new"},"\u96B1\u79C1\u6B0A\u653F\u7B56",-1)),Xo=_(()=>e("div",{class:"text-center mb-20 mt-20"},[e("span",{id:"errormsg"})],-1)),et={class:"text-center mb-20 mt-20"},ot={__name:"checkout",setup(q){var Y,Q,W,X,ee,oe,te,ne;const ce=ge(),de=be(),f=ke(),O=Pe(),i=Ce(),U=Te(),I=k(0),V=k(!1),S=k(),M=k(!1),c=k(v.Normal),N=k($.General),B=R({get:()=>D.value.reduce((a,t)=>a+j(t)*t.amount,0),set:a=>{B.value=a}}),G=R(()=>{var a;return((a=i==null?void 0:i.user)==null?void 0:a.rewardCredit)||0}),D=R(()=>{switch(N.value){case $.ColdChain:return U==null?void 0:U.merch.filter(a=>a.attribute==="COLD_CHAIN");default:return U==null?void 0:U.merch.filter(a=>a.attribute==="GENERAL")}}),K=k({}),p=k({name:"",id:"",outside:0,ship:0,address:""}),Z=R(()=>{var t;return(t=K.value)==null?void 0:t.deliveryFee});let E=null;Ve(async()=>{if(pe(),await Ne(),D.value<=0)return de.push({path:"/"});await z(),E=setInterval(()=>{ue()},1e3)}),we(()=>{clearInterval(E),E=null});async function z(){try{const a=J();delete a.requiredDeliveryTimeslots,console.log("123,, ",a);const t=await $fetch(`${O.public.apiBase}/${xe}`,{method:"POST",body:a,headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}});console.log("pre-settlement, ",t),K.value=t.data}catch(a){console.log(a)}}function ue(){p.value.name=localStorage.getItem("storename"),p.value.id=localStorage.getItem("storeid"),p.value.address=localStorage.getItem("storeaddress"),p.value.ship=localStorage.getItem("ship"),p.value.outside=localStorage.getItem("outside")}function pe(){switch(ce.query.type){case"cold-chain":N.value=$.ColdChain;break;default:N.value=$.General;break}}const j=a=>{var t,u;return((t=i==null?void 0:i.user)==null?void 0:t.memberLevel)==="SVIP"?a==null?void 0:a.svipPrice:((u=i==null?void 0:i.user)==null?void 0:u.memberLevel)==="VIP"?a==null?void 0:a.vipPrice:i.status.loggedIn?a==null?void 0:a.memberPrice:a==null?void 0:a.price},s=k({attribute:N.value,choosePayment:L.CreditOneTime,consignee:{deliveryType:C.Home,city:"",email:(Y=i.user)==null?void 0:Y.email,idNo:"",idType:"1",cellphone:(Q=i.user)==null?void 0:Q.cellphone,name:(W=i.user)==null?void 0:W.nickname,remark:"",senderRemark:"",stationCode:"",stationName:"",addressDetailOne:(X=i.user)==null?void 0:X.addressOne,province:"\u53F0\u7063",district:"",town:"",zipCode:""},invoiceParams:{customerName:(ee=i.user)==null?void 0:ee.nickname,customerEmail:(oe=i.user)==null?void 0:oe.email,customerPhone:(te=i.user)==null?void 0:te.cellphone,customerAddr:(ne=i.user)==null?void 0:ne.addressOne,customerIdentifier:"",carruerType:A.Member,carruerNum:"",donation:"0",loveCode:""},products:[],bonusPointRedemption:0});function J(){var t,u,y;return{...s.value,attribute:N.value,consignee:{...s.value.consignee,stationCode:s.value.consignee.deliveryType===C.Store?(t=p.value)==null?void 0:t.id:"",stationName:s.value.consignee.deliveryType===C.Store?(u=p.value)==null?void 0:u.name:""},invoiceParams:{...s.value.invoiceParams,carruerType:V.value?s.value.invoiceParams.carruerNum:"",carruerNum:s.value.invoiceParams.carruerType>=2?s.value.invoiceParams.carruerNum:"",donation:c.value===v.Donation?1:0,loveCode:c.value===v.Donation?s.value.invoiceParams.loveCode:"",customerIdentifier:c.value===v.CustomerId?s.value.invoiceParams.customerIdentifier:"00000000",customerPhone:s.value.consignee.cellphone,customerName:s.value.consignee.name,customerAddr:s.value.consignee.addressDetailOne,customerEmail:(y=i==null?void 0:i.user)==null?void 0:y.email},bonusPointRedemption:I.value,products:D.value.map(l=>({id:l.id,quantity:l.amount}))}}async function me(){if(!ve())return;const t=J();console.log(t);try{const u=`${O.public.baseUrl}/order?payment=successful`,y=await $fetch(`${O.public.apiBase}/${Ue}?order_result_url=${u}`,{method:"POST",body:t,headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}});f.loading("\u5373\u5C07\u5C0E\u5411\u4ED8\u6B3E\u9801\u9762\uFF0C\u8ACB\u7A0D\u5019...");const l=document.createElement("credit-div");l.innerHTML=y,l.id="credit-payment",document.body.appendChild(l),document.getElementById("_form_aiochk").submit(),console.log(y)}catch(u){f.error(u.data)}}function ve(){var a,t,u,y;if(!s.value.consignee.name||!s.value.consignee.cellphone||!s.value.consignee.addressDetailOne||!s.value.consignee.province||!s.value.consignee.district||!s.value.consignee.city||!s.value.consignee.zipCode)return f.error("\u8ACB\u78BA\u5BE6\u586B\u5BEB\u6536\u4EF6\u4EBA\u8CC7\u8A0A"),!1;if(s.value.consignee.deliveryType===C.Store&&(!p.value.id||!p.value.name))return f.error("\u8ACB\u9078\u64C7\u6B32\u53D6\u8CA8\u7684\u5E97\u5BB6"),!1;if(s.value.consignee.deliveryType===C.Home&&!S.value)return f.error("\u8ACB\u9078\u64C7\u53EF\u53D6\u8CA8\u7684\u65E5\u671F"),!1;if((t=(a=s.value)==null?void 0:a.consignee)!=null&&t.cellphone){const l=(y=(u=s.value)==null?void 0:u.consignee)==null?void 0:y.cellphone;if(!/^[0-9]{10}$/g.test(l)){f.error("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u624B\u6A5F\u683C\u5F0F ex.0912345678");return}}if(c.value===v.CustomerId){const l=/^[0-9]{8}$/,g=s.value.invoiceParams.customerIdentifier;if(!l.test(g)){f.error("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u7D71\u4E00\u7DE8\u865F");return}}if(c.value===v.Donation){const l=/^\d{3,7}$/,g=s.value.invoiceParams.loveCode;if(!l.test(g)){f.error("\u611B\u5FC3\u78BC\u8ACB\u8F38\u51653-7\u78BC\u7684\u6578\u5B57\u7D44\u5408");return}}if(V.value){let l,g;s.value.invoiceParams.carruerType===2&&(l=/^[a-zA-Z]{2}[0-9]{14}$/,g="16\u78BC\u7684\u82F1\u6578\u7D44\u5408"),s.value.invoiceParams.carruerType===3&&(l=/^\/{1}[0-9A-Z]{7}$/,g="8\u78BC\u7684\u82F1\u6578\u7D44\u5408");const n=s.value.invoiceParams.carruerNum;if(s.value.invoiceParams.carruerType>=2&&!l.test(n)){f.error(`\u8ACB\u8F38\u5165\u7B26\u5408\u683C\u5F0F\u7684\u8F09\u5177\u8CC7\u6599(${g})`);return}}return M.value?!0:(f.error("\u8ACB\u8A73\u95B1\u76F8\u95DC\u8CFC\u8CB7\u689D\u6B3E\u4E26\u52FE\u9078\u78BA\u8A8D"),!1)}function _e(){const a=`${O.public.baseUrl}`;window.open(`https://emap.presco.com.tw/c2cemap.ashx?eshopid=870&&servicetype=1&url=${a}/cvs_callback`)}function he(a){return a<Date.now()}return(a,t)=>{const u=le("n-input-number"),y=le("n-date-picker"),l=fe,g=Ie;return P(),T("div",Re,[e("form",Le,[e("table",Ae,[e("tbody",null,[(P(!0),T(De,null,$e(o(D),n=>{var se,ae;return P(),T("tr",{key:n.id,class:"prod-tr"},[e("td",Be,[e("img",{src:n==null?void 0:n.coverImg},null,8,Ee)]),e("td",ze,[e("h5",null,b(n==null?void 0:n.name),1),e("div",He," x"+b(n==null?void 0:n.amount),1)]),e("td",Fe,[r(e("span",null,"\u5E02\u50F9 $"+b(n==null?void 0:n.price),513),[[H,((se=o(i).user)==null?void 0:se.memberLevel)&&((ae=o(i).user)==null?void 0:ae.memberLevel)!=="NORMAL"]]),d(" \u50F9\u9322 $"+b(j(n)),1)])])}),128))])]),e("div",Ge,[Ke,e("div",Ze,[e("label",je,[r(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>o(s).consignee.deliveryType=n),type:"radio",name:"shipping",value:o(C).Home,onClick:z},null,8,Je),[[h,o(s).consignee.deliveryType]]),d(" \u5B85\u914D\u5230\u5E9C ")]),r(e("label",Ye,[r(e("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>o(s).consignee.deliveryType=n),type:"radio",name:"shipping",value:o(C).Store,onClick:z},null,8,Qe),[[h,o(s).consignee.deliveryType]]),d(" \u8D85\u5546\u53D6\u8CA8 ")],512),[[H,o(N)===o($).General]])])]),r(e("div",We,[Xe,e("div",eo,[e("div",{onClick:qe(_e,["prevent"])}," \u9078\u64C7\u5E97\u8216 ",8,oo)]),e("div",to,[r(e("input",{id:"store-name","onUpdate:modelValue":t[2]||(t[2]=n=>o(p).name=n),type:"text",required:"",class:"form-control bold",disabled:""},null,512),[[m,o(p).name]])]),e("div",no,[r(e("input",{id:"store-address","onUpdate:modelValue":t[3]||(t[3]=n=>o(p).address=n),type:"text",required:"",class:"form-control bold",disabled:""},null,512),[[m,o(p).address]])])],512),[[H,o(s).consignee.deliveryType===o(C).Store]]),e("div",so,[ao,e("div",ro,[e("label",io,[r(e("input",{"onUpdate:modelValue":t[4]||(t[4]=n=>o(s).choosePayment=n),type:"radio",name:"payment",value:o(L).CreditOneTime},null,8,lo),[[h,o(s).choosePayment]]),d(" \u4FE1\u7528\u5361 ")]),e("label",co,[r(e("input",{"onUpdate:modelValue":t[5]||(t[5]=n=>o(s).choosePayment=n),type:"radio",name:"payment",value:o(L).BarCode},null,8,uo),[[h,o(s).choosePayment]]),d(" \u8D85\u5546\u689D\u78BC\u4ED8\u6B3E ")]),e("label",po,[r(e("input",{"onUpdate:modelValue":t[6]||(t[6]=n=>o(s).choosePayment=n),type:"radio",value:o(L).Cvs,name:"payment"},null,8,mo),[[h,o(s).choosePayment]]),d(" \u8D85\u5546\u4EE3\u78BC\u4ED8\u6B3E ")])])]),e("div",vo,[e("h5",null,"\u7D05\u5229\u6263\u9EDE (\u76EE\u524D\u53EF\u7528\u7D05\u5229\uFF1A"+b(o(G))+" \u9EDE)",1),e("div",_o,[F(u,{value:o(I),"onUpdate:value":t[7]||(t[7]=n=>x(I)?I.value=n:null),min:"0",max:o(G),style:{width:"150px",margin:"4px 0 4px 15px"},placeholder:"\u8ACB\u8F38\u5165\u7D05\u5229"},null,8,["value","max"])])]),e("div",ho,[fo,e("div",yo,[r(e("input",{id:"ship_name-2","onUpdate:modelValue":t[8]||(t[8]=n=>o(s).consignee.name=n),type:"text",placeholder:"\u59D3\u540D*",class:"form-control",name:"ship_name-2",required:""},null,512),[[m,o(s).consignee.name]]),r(e("input",{id:"ship_phone-2","onUpdate:modelValue":t[9]||(t[9]=n=>o(s).consignee.cellphone=n),type:"text",placeholder:"\u624B\u6A5F*",class:"form-control",name:"ship_phone-2",required:""},null,512),[[m,o(s).consignee.cellphone]]),r(e("input",{id:"ship-district","onUpdate:modelValue":t[10]||(t[10]=n=>o(s).consignee.district=n),type:"text",placeholder:"\u884C\u653F\u5340*",class:"form-control",name:"ship-district",required:""},null,512),[[m,o(s).consignee.district]]),r(e("input",{id:"ship-city","onUpdate:modelValue":t[11]||(t[11]=n=>o(s).consignee.city=n),type:"text",placeholder:"\u57CE\u5E02*",class:"form-control",name:"ship-city",required:""},null,512),[[m,o(s).consignee.city]]),r(e("input",{id:"ship-zipCode","onUpdate:modelValue":t[12]||(t[12]=n=>o(s).consignee.zipCode=n),type:"text",placeholder:"\u90F5\u905E\u5340\u865F*",class:"form-control",name:"ship-zipCode",required:""},null,512),[[m,o(s).consignee.zipCode]]),r(e("input",{id:"ship-address-home","onUpdate:modelValue":t[13]||(t[13]=n=>o(s).consignee.addressDetailOne=n),type:"text",placeholder:"\u6536\u4EF6\u5730\u5740*",class:"form-control",name:"ship-address-home",required:""},null,512),[[m,o(s).consignee.addressDetailOne]]),F(l,null,{default:re(()=>[o(s).consignee.deliveryType!==o(C).Store?(P(),Oe(y,{key:0,value:o(S),"onUpdate:value":t[14]||(t[14]=n=>x(S)?S.value=n:null),type:"date",placeholder:"\u8ACB\u9078\u64C7\u53EF\u6536\u8CA8\u65E5\u671F","is-date-disabled":he,required:"",actions:null},null,8,["value"])):w("",!0)]),_:1})])]),e("div",go,[bo,e("div",ko,[e("label",Po,[r(e("input",{"onUpdate:modelValue":t[15]||(t[15]=n=>x(c)?c.value=n:null),type:"radio",name:"donation",value:o(v).Normal},null,8,Co),[[h,o(c)]]),d(" \u958B\u7ACB\u4E00\u822C\u767C\u7968 ")]),e("label",To,[r(e("input",{"onUpdate:modelValue":t[16]||(t[16]=n=>x(c)?c.value=n:null),type:"radio",name:"donation",value:o(v).CustomerId},null,8,xo),[[h,o(c)]]),d(" \u958B\u7ACB\u7D71\u4E00\u7DE8\u865F ")]),e("label",Uo,[r(e("input",{"onUpdate:modelValue":t[17]||(t[17]=n=>x(c)?c.value=n:null),type:"radio",name:"donation",value:o(v).Donation},null,8,Io),[[h,o(c)]]),d(" \u6350\u8D08\u767C\u7968 ")])])]),o(c)!==o(v).Normal?(P(),T("div",Vo,[No,e("div",wo,[e("div",Do,[o(c)===o(v).Donation?r((P(),T("input",{key:0,id:"inv_ship_lovecode","onUpdate:modelValue":t[18]||(t[18]=n=>o(s).invoiceParams.loveCode=n),type:"text",placeholder:"\u8ACB\u8F38\u5165\u6350\u8D08\u611B\u5FC3\u78BC*",class:"form-control",name:"inv_ship_lovecode",required:""},null,512)),[[m,o(s).invoiceParams.loveCode]]):w("",!0),o(c)===o(v).CustomerId?r((P(),T("input",{key:1,id:"inv_ship_identification","onUpdate:modelValue":t[19]||(t[19]=n=>o(s).invoiceParams.customerIdentifier=n),type:"text",placeholder:"\u8ACB\u8F38\u5165\u7D71\u4E00\u7DE8\u865F*",class:"form-control",name:"inv_ship_identification"},null,512)),[[m,o(s).invoiceParams.customerIdentifier]]):w("",!0)])])])):w("",!0),e("div",$o,[qo,e("div",Oo,[e("label",So,[r(e("input",{id:"change-image","onUpdate:modelValue":t[20]||(t[20]=n=>x(V)?V.value=n:null),type:"checkbox"},null,512),[[ie,o(V)]]),d(" \u4F7F\u7528\u8F09\u5177 ")]),o(V)?(P(),T("div",Mo,[e("label",Ro,[r(e("input",{"onUpdate:modelValue":t[21]||(t[21]=n=>o(s).invoiceParams.carruerType=n),type:"radio",name:"uic-member",value:o(A).Member},null,8,Lo),[[h,o(s).invoiceParams.carruerType]]),d(" \u6703\u54E1\u8F09\u5177 ")]),e("label",Ao,[r(e("input",{"onUpdate:modelValue":t[22]||(t[22]=n=>o(s).invoiceParams.carruerType=n),type:"radio",name:"uic-npc",value:o(A).NPC},null,8,Bo),[[h,o(s).invoiceParams.carruerType]]),d(" \u81EA\u7136\u4EBA\u6191\u8B49 ")]),e("label",Eo,[r(e("input",{"onUpdate:modelValue":t[23]||(t[23]=n=>o(s).invoiceParams.carruerType=n),type:"radio",name:"uic-mobile",value:o(A).Mobile},null,8,zo),[[h,o(s).invoiceParams.carruerType]]),d(" \u624B\u6A5F\u689D\u78BC ")]),o(s).invoiceParams.carruerType>=2?r((P(),T("input",{key:0,id:"inv-carruerNum","onUpdate:modelValue":t[24]||(t[24]=n=>o(s).invoiceParams.carruerNum=n),type:"text",placeholder:"\u8ACB\u8F38\u5165\u5C0D\u61C9\u7684\u8F09\u5177\u7DE8\u865F",class:"form-control",required:"",name:""},null,512)),[[m,o(s).invoiceParams.carruerNum]]):w("",!0)])):w("",!0)])]),e("div",Ho,[Fo,r(e("textarea",{id:"","onUpdate:modelValue":t[25]||(t[25]=n=>o(s).consignee.remark=n),rows:"6",placeholder:"\u8ACB\u8F38\u5165\u8A02\u55AE\u5099\u8A3B\u5167\u5BB9",class:"form-control",name:""},null,512),[[m,o(s).consignee.remark]])]),e("div",Go,[Ko,e("ul",Zo,[e("li",null," \u5546\u54C1\u91D1\u984D\u5C0F\u8A08 (\u5171"+b(o(D).length)+"\u9805\u5546\u54C1)\uFF1A$"+b(o(B)),1),e("li",null," \u904B\u8CBB\uFF1A"+b(o(Z)),1),e("li",null," \u7D05\u5229\u6263\u9EDE\uFF1A"+b(o(I)),1),e("li",jo,[d(" \u8A02\u55AE\u7E3D\u91D1\u984D\uFF1A"),e("span",null,"$"+b(o(B)-o(I)+o(Z)),1)])])]),e("div",Jo,[e("label",Yo,[r(e("input",{id:"check_service","onUpdate:modelValue":t[26]||(t[26]=n=>x(M)?M.value=n:null),type:"checkbox",required:""},null,512),[[ie,o(M)]]),d(" \u6211\u5DF2\u7D93\u95B1\u8B80\u4E26\u540C\u610F\u4EE5\u4E0A\u8CFC\u8CB7\u9808\u77E5\u3001 "),Qo,d("\u8207"),Wo])]),Xo,e("div",et,[F(g,{type:"button",class:"btn btn-main btn-default",to:"/cart"},{default:re(()=>[d(" \u4E0A\u4E00\u9801 ")]),_:1}),e("input",{id:"",type:"submit",class:"btn btn-main btn-check check_service_btn submit_home",value:"\u78BA\u8A8D\u9001\u51FA",onClick:me})])])])}}},rt=ye(ot,[["__scopeId","data-v-993b139e"]]);export{rt as default};
