import{_ as fe}from"./client-only.46688fa6.js";import{a as ye,F as ge,r as be,b as ke,u as Pe,q as Ce,H as Te,I as xe,J as Ue,C as Ve}from"./entry.981b651e.js";import{b as h,c as D,o as Ie,q as Ne,P as we,_ as V,aa as e,F as $e,V as Se,y as o,J as r,ah as f,C as i,G as z,ai as qe,af as m,ae as y,$ as F,i as I,a0 as ae,ab as M,aj as re,f as le,Z as P,a3 as Oe,a8 as De,a9 as Me}from"./swiper-vue.6d0a2b42.js";import{P as w,a as R,D as b,U as A}from"./common.cb49f5bd.js";const p=$=>(De("data-v-1882832e"),$=$(),Me(),$),Re={class:"full_height mt185ptb30"},Ae={id:"checkout_form",action:"javascript:;",class:"cart_container"},Le={class:"cart_list"},Be={class:"cart_img"},Ee=["src"],ze={class:"cart_tl"},Fe={class:"product-quantity"},He={class:"cart_price text-right"},Ge={class:"cart_info"},Ze=p(()=>e("h5",null,"\u5BC4\u9001\u65B9\u5F0F",-1)),je={class:"checkout-form"},Je={class:"radio form-check"},Ke=["value"],Ye={class:"radio form-check"},Qe=["value"],We={class:"cart_info checkout-form"},Xe=p(()=>e("h5",null,"\u8D85\u5546\u53D6\u8CA8\u8CC7\u8A0A",-1)),eo={class:"emap"},oo=["onClick"],to={class:"store-name"},so={class:"store-address"},no={class:"cart_info"},ao=p(()=>e("h5",null,"\u4ED8\u6B3E\u65B9\u5F0F",-1)),ro={class:"checkout-form"},lo={class:"radio form-check"},io=["value"],co={class:"radio form-check"},uo=["value"],po={class:"radio form-check"},mo=["value"],vo={class:"cart_info"},_o={class:"checkout-form"},ho={id:"ship_home_form",class:"cart_info"},fo=p(()=>e("h5",null,"\u6536\u4EF6\u4EBA\u8CC7\u8A0A",-1)),yo={class:"ship_info"},go={class:"cart_info"},bo=p(()=>e("h5",null,"\u8ACB\u9078\u64C7\u767C\u7968\u9078\u9805",-1)),ko={class:"checkout-form"},Po={class:"radio form-check"},Co={class:"radio form-check"},To={key:0,class:"cart_info checkout-form"},xo=p(()=>e("h5",null,"\u767C\u7968\u8CC7\u8A0A",-1)),Uo={class:"ship_info inv-info"},Vo={class:"ship_info"},Io={class:"cart_info checkout-form"},No=p(()=>e("h5",null,"\u8F09\u5177\u8CC7\u8A0A",-1)),wo={class:"ship_info inv-info"},$o={class:"checkbox pt10 pb10"},So={key:0,class:"ship_info"},qo={class:"radio form-check"},Oo=["value"],Do={class:"radio form-check"},Mo=["value"],Ro={class:"radio form-check"},Ao=["value"],Lo={class:"cart_info checkout-form"},Bo=p(()=>e("h5",null,"\u8A02\u55AE\u5099\u8A3B",-1)),Eo={class:"cart_info"},zo=p(()=>e("h5",null,"\u4ED8\u6B3E\u660E\u7D30",-1)),Fo={class:"cart_check"},Ho={class:"border_top"},Go={class:"cart_info checkout-form ptb10"},Zo={class:"checkbox"},jo=p(()=>e("a",{href:"/terms",target:"new"},"\u6703\u54E1\u4F7F\u7528\u689D\u6B3E",-1)),Jo=p(()=>e("a",{href:"/privacy",target:"new"},"\u96B1\u79C1\u6B0A\u653F\u7B56",-1)),Ko=p(()=>e("div",{class:"text-center mb-20 mt-20"},[e("span",{id:"errormsg"})],-1)),Yo={class:"text-center mb-20 mt-20"},Qo={__name:"checkout",setup($){var K,Y,Q,W,X,ee,oe,te;const ie=ge(),ce=be(),g=ke(),S=Pe(),l=Ce(),C=Te(),T=h(0),de=h(!1),x=h(!1),q=h(),O=h(!1),v=h(!1),U=h(w.General),L=D({get:()=>N.value.reduce((a,t)=>a+j(t)*t.amount,0),set:a=>{L.value=a}}),H=D(()=>{var a;return((a=l==null?void 0:l.user)==null?void 0:a.rewardCredit)||0}),N=D(()=>{switch(U.value){case w.ColdChain:return C==null?void 0:C.merch.filter(a=>a.attribute==="COLD_CHAIN");default:return C==null?void 0:C.merch.filter(a=>a.attribute==="GENERAL")}}),G=h({}),d=h({name:"",id:"",outside:0,ship:0,address:""}),Z=D(()=>{var t;return(t=G.value)==null?void 0:t.deliveryFee});let B=null;Ie(async()=>{if(pe(),await Ne(),N.value<=0)return ce.push({path:"/"});await E(),B=setInterval(()=>{ue()},1e3)}),we(()=>{clearInterval(B),B=null});async function E(){try{const a=J();delete a.requiredDeliveryTimeslots,console.log("123,, ",a);const t=await $fetch(`${S.public.apiBase}/${xe}`,{method:"POST",body:a,headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}});console.log("pre-settlement, ",t),G.value=t.data}catch(a){console.log(a)}}function ue(){d.value.name=localStorage.getItem("storename"),d.value.id=localStorage.getItem("storeid"),d.value.address=localStorage.getItem("storeaddress"),d.value.ship=localStorage.getItem("ship"),d.value.outside=localStorage.getItem("outside")}function pe(){switch(ie.query.type){case"cold-chain":U.value=w.ColdChain;break;default:U.value=w.General;break}}const j=a=>{var t,c;return((t=l==null?void 0:l.user)==null?void 0:t.memberLevel)==="SVIP"?a==null?void 0:a.svipPrice:((c=l==null?void 0:l.user)==null?void 0:c.memberLevel)==="VIP"?a==null?void 0:a.vipPrice:l.status.loggedIn?a==null?void 0:a.memberPrice:a==null?void 0:a.price},s=h({attribute:U.value,choosePayment:R.CreditOneTime,consignee:{deliveryType:b.Home,city:"",email:(K=l.user)==null?void 0:K.email,idNo:"",idType:"1",cellphone:(Y=l.user)==null?void 0:Y.cellphone,name:(Q=l.user)==null?void 0:Q.nickname,remark:"",senderRemark:"",stationCode:"",stationName:"",addressDetailOne:(W=l.user)==null?void 0:W.addressOne,province:"\u53F0\u7063",district:"",town:"",zipCode:""},invoiceParams:{customerName:(X=l.user)==null?void 0:X.nickname,customerEmail:(ee=l.user)==null?void 0:ee.email,customerPhone:(oe=l.user)==null?void 0:oe.cellphone,customerAddr:(te=l.user)==null?void 0:te.addressOne,customerIdentifier:"",carruerType:A.Member,carruerNum:"",donation:"0",loveCode:""},products:[],bonusPointRedemption:0});function J(){var t,c;return{...s.value,attribute:U.value,consignee:{...s.value.consignee,stationCode:s.value.consignee.deliveryType===b.Store?(t=d.value)==null?void 0:t.id:"",stationName:s.value.consignee.deliveryType===b.Store?(c=d.value)==null?void 0:c.name:""},invoiceParams:{...s.value.invoiceParams,carruerType:x.value?s.value.invoiceParams.carruerNum:"",carruerNum:s.value.invoiceParams.carruerType>=2?s.value.invoiceParams.carruerNum:"",donation:v.value?1:0,loveCode:v.value?s.value.invoiceParams.loveCode:"",customerIdentifier:de.value?s.value.invoiceParams.customerIdentifier:"00000000",customerPhone:s.value.consignee.cellphone,customerName:s.value.consignee.name,customerAddr:s.value.consignee.addressDetailOne},bonusPointRedemption:T.value,products:N.value.map(_=>({id:_.id,quantity:_.amount}))}}async function me(){if(!ve())return;const t=J();console.log(t);try{const c=`${S.public.baseUrl}/order?payment=successful`,_=await $fetch(`${S.public.apiBase}/${Ue}?order_result_url=${c}`,{method:"POST",body:t,headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}});g.loading("\u5373\u5C07\u5C0E\u5411\u4ED8\u6B3E\u9801\u9762\uFF0C\u8ACB\u7A0D\u5019...");const u=document.createElement("credit-div");u.innerHTML=_,u.id="credit-payment",document.body.appendChild(u),document.getElementById("_form_aiochk").submit(),console.log(_)}catch(c){g.error(c.data)}}function ve(){var a,t,c,_;if(!s.value.consignee.name||!s.value.consignee.cellphone||!s.value.consignee.addressDetailOne||!s.value.consignee.province||!s.value.consignee.district||!s.value.consignee.city||!s.value.consignee.zipCode)return g.error("\u8ACB\u78BA\u5BE6\u586B\u5BEB\u6536\u4EF6\u4EBA\u8CC7\u8A0A"),!1;if(s.value.consignee.deliveryType===b.Store&&(!d.value.id||!d.value.name))return g.error("\u8ACB\u9078\u64C7\u6B32\u53D6\u8CA8\u7684\u5E97\u5BB6"),!1;if(s.value.consignee.deliveryType===b.Home&&!q.value)return g.error("\u8ACB\u9078\u64C7\u53EF\u53D6\u8CA8\u7684\u65E5\u671F"),!1;if((t=(a=s.value)==null?void 0:a.consignee)!=null&&t.cellphone){const u=(_=(c=s.value)==null?void 0:c.consignee)==null?void 0:_.cellphone;if(!/^[0-9]{10}$/g.test(u)){g.error("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u624B\u6A5F\u683C\u5F0F ex.0912345678");return}}if(v.value){const u=/^\d{3,7}$/,k=s.value.invoiceParams.loveCode;if(!u.test(k)){g.error("\u611B\u5FC3\u78BC\u8ACB\u8F38\u51653-7\u78BC\u7684\u6578\u5B57\u7D44\u5408");return}}if(x.value){let u,k;s.value.invoiceParams.carruerType===2&&(u=/^[a-zA-Z]{2}[0-9]{14}$/,k="16\u78BC\u7684\u82F1\u6578\u7D44\u5408"),s.value.invoiceParams.carruerType===3&&(u=/^\/{1}[0-9A-Z]{7}$/,k="8\u78BC\u7684\u82F1\u6578\u7D44\u5408");const n=s.value.invoiceParams.carruerNum;if(s.value.invoiceParams.carruerType>=2&&!u.test(n)){g.error(`\u8ACB\u8F38\u5165\u7B26\u5408\u683C\u5F0F\u7684\u8F09\u5177\u8CC7\u6599(${k})`);return}}return O.value?!0:(g.error("\u8ACB\u8A73\u95B1\u76F8\u95DC\u8CFC\u8CB7\u689D\u6B3E\u4E26\u52FE\u9078\u78BA\u8A8D"),!1)}function _e(){const a=`${S.public.baseUrl}`;window.open(`https://emap.presco.com.tw/c2cemap.ashx?eshopid=870&&servicetype=1&url=${a}/cvs_callback`)}function he(a){return a<Date.now()}return(a,t)=>{const c=le("n-input-number"),_=le("n-date-picker"),u=fe,k=Ve;return P(),V("div",Re,[e("form",Ae,[e("table",Le,[e("tbody",null,[(P(!0),V($e,null,Se(o(N),n=>{var se,ne;return P(),V("tr",{key:n.id,class:"prod-tr"},[e("td",Be,[e("img",{src:n==null?void 0:n.coverImg},null,8,Ee)]),e("td",ze,[e("h5",null,y(n==null?void 0:n.name),1),e("div",Fe," x"+y(n==null?void 0:n.amount),1)]),e("td",He,[r(e("span",null,"\u5E02\u50F9 $"+y(n==null?void 0:n.price),513),[[z,((se=o(l).user)==null?void 0:se.memberLevel)&&((ne=o(l).user)==null?void 0:ne.memberLevel)!=="NORMAL"]]),i(" \u50F9\u9322 $"+y(j(n)),1)])])}),128))])]),e("div",Ge,[Ze,e("div",je,[e("label",Je,[r(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>o(s).consignee.deliveryType=n),type:"radio",name:"shipping",value:o(b).Home,onClick:E},null,8,Ke),[[f,o(s).consignee.deliveryType]]),i(" \u5B85\u914D\u5230\u5E9C ")]),r(e("label",Ye,[r(e("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>o(s).consignee.deliveryType=n),type:"radio",name:"shipping",value:o(b).Store,onClick:E},null,8,Qe),[[f,o(s).consignee.deliveryType]]),i(" \u8D85\u5546\u53D6\u8CA8 ")],512),[[z,o(U)===o(w).General]])])]),r(e("div",We,[Xe,e("div",eo,[e("div",{onClick:qe(_e,["prevent"])}," \u9078\u64C7\u5E97\u8216 ",8,oo)]),e("div",to,[r(e("input",{id:"store-name","onUpdate:modelValue":t[2]||(t[2]=n=>o(d).name=n),type:"text",required:"",class:"form-control bold",disabled:""},null,512),[[m,o(d).name]])]),e("div",so,[r(e("input",{id:"store-address","onUpdate:modelValue":t[3]||(t[3]=n=>o(d).address=n),type:"text",required:"",class:"form-control bold",disabled:""},null,512),[[m,o(d).address]])])],512),[[z,o(s).consignee.deliveryType===o(b).Store]]),e("div",no,[ao,e("div",ro,[e("label",lo,[r(e("input",{"onUpdate:modelValue":t[4]||(t[4]=n=>o(s).choosePayment=n),type:"radio",name:"payment",value:o(R).CreditOneTime},null,8,io),[[f,o(s).choosePayment]]),i(" \u4FE1\u7528\u5361 ")]),e("label",co,[r(e("input",{"onUpdate:modelValue":t[5]||(t[5]=n=>o(s).choosePayment=n),type:"radio",name:"payment",value:o(R).BarCode},null,8,uo),[[f,o(s).choosePayment]]),i(" \u8D85\u5546\u689D\u78BC\u4ED8\u6B3E ")]),e("label",po,[r(e("input",{"onUpdate:modelValue":t[6]||(t[6]=n=>o(s).choosePayment=n),type:"radio",value:o(R).Cvs,name:"payment"},null,8,mo),[[f,o(s).choosePayment]]),i(" \u8D85\u5546\u4EE3\u78BC\u4ED8\u6B3E ")])])]),e("div",vo,[e("h5",null,"\u7D05\u5229\u6263\u9EDE (\u76EE\u524D\u53EF\u7528\u7D05\u5229\uFF1A"+y(o(H))+" \u9EDE)",1),e("div",_o,[F(c,{value:o(T),"onUpdate:value":t[7]||(t[7]=n=>I(T)?T.value=n:null),min:"0",max:o(H),style:{width:"150px",margin:"4px 0 4px 15px"}},null,8,["value","max"])])]),e("div",ho,[fo,e("div",yo,[r(e("input",{id:"ship_name-2","onUpdate:modelValue":t[8]||(t[8]=n=>o(s).consignee.name=n),type:"text",placeholder:"\u59D3\u540D*",class:"form-control",name:"ship_name-2",required:""},null,512),[[m,o(s).consignee.name]]),r(e("input",{id:"ship_phone-2","onUpdate:modelValue":t[9]||(t[9]=n=>o(s).consignee.cellphone=n),type:"text",placeholder:"\u624B\u6A5F*",class:"form-control",name:"ship_phone-2",required:""},null,512),[[m,o(s).consignee.cellphone]]),r(e("input",{id:"ship-district","onUpdate:modelValue":t[10]||(t[10]=n=>o(s).consignee.district=n),type:"text",placeholder:"\u884C\u653F\u5340*",class:"form-control",name:"ship-district",required:""},null,512),[[m,o(s).consignee.district]]),r(e("input",{id:"ship-city","onUpdate:modelValue":t[11]||(t[11]=n=>o(s).consignee.city=n),type:"text",placeholder:"\u57CE\u5E02*",class:"form-control",name:"ship-city",required:""},null,512),[[m,o(s).consignee.city]]),r(e("input",{id:"ship-zipCode","onUpdate:modelValue":t[12]||(t[12]=n=>o(s).consignee.zipCode=n),type:"text",placeholder:"\u90F5\u905E\u5340\u865F*",class:"form-control",name:"ship-zipCode",required:""},null,512),[[m,o(s).consignee.zipCode]]),r(e("input",{id:"ship-address-home","onUpdate:modelValue":t[13]||(t[13]=n=>o(s).consignee.addressDetailOne=n),type:"text",placeholder:"\u6536\u4EF6\u5730\u5740*",class:"form-control",name:"ship-address-home",required:""},null,512),[[m,o(s).consignee.addressDetailOne]]),F(u,null,{default:ae(()=>[o(s).consignee.deliveryType!==o(b).Store?(P(),Oe(_,{key:0,value:o(q),"onUpdate:value":t[14]||(t[14]=n=>I(q)?q.value=n:null),type:"date",placeholder:"\u8ACB\u9078\u64C7\u53EF\u6536\u8CA8\u65E5\u671F","is-date-disabled":he,required:""},null,8,["value"])):M("",!0)]),_:1})])]),e("div",go,[bo,e("div",ko,[e("label",Po,[r(e("input",{"onUpdate:modelValue":t[15]||(t[15]=n=>I(v)?v.value=n:null),type:"radio",name:"donation",value:!1},null,512),[[f,o(v)]]),i(" \u958B\u7ACB\u767C\u7968 ")]),e("label",Co,[r(e("input",{"onUpdate:modelValue":t[16]||(t[16]=n=>I(v)?v.value=n:null),type:"radio",name:"donation",value:!0},null,512),[[f,o(v)]]),i(" \u6350\u8D08\u767C\u7968 ")])])]),o(v)?(P(),V("div",To,[xo,e("div",Uo,[e("div",Vo,[r(e("input",{id:"inv_ship_lovecode","onUpdate:modelValue":t[17]||(t[17]=n=>o(s).invoiceParams.loveCode=n),type:"text",placeholder:"\u8ACB\u8F38\u5165\u6350\u8D08\u611B\u5FC3\u78BC*",class:"form-control",name:"",required:""},null,512),[[m,o(s).invoiceParams.loveCode]])])])])):M("",!0),e("div",Io,[No,e("div",wo,[e("label",$o,[r(e("input",{id:"change-image","onUpdate:modelValue":t[18]||(t[18]=n=>I(x)?x.value=n:null),type:"checkbox"},null,512),[[re,o(x)]]),i(" \u4F7F\u7528\u8F09\u5177 ")]),o(x)?(P(),V("div",So,[e("label",qo,[r(e("input",{"onUpdate:modelValue":t[19]||(t[19]=n=>o(s).invoiceParams.carruerType=n),type:"radio",name:"uic-member",value:o(A).Member},null,8,Oo),[[f,o(s).invoiceParams.carruerType]]),i(" \u6703\u54E1\u8F09\u5177 ")]),e("label",Do,[r(e("input",{"onUpdate:modelValue":t[20]||(t[20]=n=>o(s).invoiceParams.carruerType=n),type:"radio",name:"uic-npc",value:o(A).NPC},null,8,Mo),[[f,o(s).invoiceParams.carruerType]]),i(" \u81EA\u7136\u4EBA\u6191\u8B49 ")]),e("label",Ro,[r(e("input",{"onUpdate:modelValue":t[21]||(t[21]=n=>o(s).invoiceParams.carruerType=n),type:"radio",name:"uic-mobile",value:o(A).Mobile},null,8,Ao),[[f,o(s).invoiceParams.carruerType]]),i(" \u624B\u6A5F\u689D\u78BC ")]),o(s).invoiceParams.carruerType>=2?r((P(),V("input",{key:0,id:"inv-carruerNum","onUpdate:modelValue":t[22]||(t[22]=n=>o(s).invoiceParams.carruerNum=n),type:"text",placeholder:"\u8ACB\u8F38\u5165\u5C0D\u61C9\u7684\u8F09\u5177\u7DE8\u865F",class:"form-control",required:"",name:""},null,512)),[[m,o(s).invoiceParams.carruerNum]]):M("",!0)])):M("",!0)])]),e("div",Lo,[Bo,r(e("textarea",{id:"","onUpdate:modelValue":t[23]||(t[23]=n=>o(s).consignee.remark=n),rows:"6",placeholder:"\u8ACB\u8F38\u5165\u8A02\u55AE\u5099\u8A3B\u5167\u5BB9",class:"form-control",name:""},null,512),[[m,o(s).consignee.remark]])]),e("div",Eo,[zo,e("ul",Fo,[e("li",null," \u5546\u54C1\u91D1\u984D\u5C0F\u8A08 (\u5171"+y(o(N).length)+"\u9805\u5546\u54C1)\uFF1A$"+y(o(L)),1),e("li",null," \u904B\u8CBB\uFF1A"+y(o(Z)),1),e("li",null," \u7D05\u5229\u6263\u9EDE\uFF1A"+y(o(T)),1),e("li",Ho,[i(" \u8A02\u55AE\u7E3D\u91D1\u984D\uFF1A"),e("span",null,"$"+y(o(L)-o(T)+o(Z)),1)])])]),e("div",Go,[e("label",Zo,[r(e("input",{id:"check_service","onUpdate:modelValue":t[24]||(t[24]=n=>I(O)?O.value=n:null),type:"checkbox",required:""},null,512),[[re,o(O)]]),i(" \u6211\u5DF2\u7D93\u95B1\u8B80\u4E26\u540C\u610F\u4EE5\u4E0A\u8CFC\u8CB7\u9808\u77E5\u3001 "),jo,i("\u8207"),Jo])]),Ko,e("div",Yo,[F(k,{type:"button",class:"btn btn-main btn-default",to:"/cart"},{default:ae(()=>[i(" \u4E0A\u4E00\u9801 ")]),_:1}),e("input",{id:"",type:"submit",class:"btn btn-main btn-check check_service_btn submit_home",value:"\u78BA\u8A8D\u9001\u51FA",onClick:me})])])])}}},tt=ye(Qo,[["__scopeId","data-v-1882832e"]]);export{tt as default};
