import{a as B,q as ot,J as mt,r as gt,C as bt,I as yt,Z as wt}from"./entry.e0dd610b.js";import{u as V}from"./pageStatusStore.109f1dfe.js";import{b as j,c as Q,o as W,Z as A,_ as F,aa as t,$ as k,a0 as D,J as O,ae as z,y as g,G as M,ab as Y,C as x,aj as Ct,i as xt,a8 as X,a9 as tt,d as St,ad as q,a7 as $t,K as At,a3 as K}from"./swiper-vue.6d0a2b42.js";const Et=""+new URL("logo.f02090fc.png",import.meta.url).href;const L=w=>(X("data-v-3255b1f5"),w=w(),tt(),w),kt={class:"top_nav"},Ft={class:"container2 relative p-0"},Tt={id:"logo",class:"logo"},Dt=L(()=>t("img",{src:Et,alt:""},null,-1)),Lt={class:"top-header"},Ot={id:"top_member",class:"top-menu"},It=L(()=>t("i",{class:"fa-regular fa-heart"},null,-1)),Mt={class:"top_cart"},Bt=L(()=>t("i",{class:"fa-solid fa-cart-shopping"},null,-1)),Nt={class:"top_bell"},Rt=L(()=>t("i",{class:"fa-regular fa-bell"},null,-1)),jt={key:0,class:"badge badge-green bell_bounce"},Vt={key:0},Pt=L(()=>t("i",{class:"fa-regular fa-user"},null,-1)),Ut={key:1,class:"dropdown dropdown-slide"},Ht=L(()=>t("a",{class:"dropdown-toggle","data-toggle":"dropdown","data-hover":"dropdown"},[t("i",{class:"fa-regular fa-user"})],-1)),zt={class:"dropdown-menu"},Yt={id:"menuToggle"},Wt=L(()=>t("span",null,null,-1)),Jt=L(()=>t("span",null,null,-1)),Gt=L(()=>t("span",null,null,-1)),Zt={id:"menu"},qt={__name:"Header",setup(w){const h=ot(),S=mt(),$=V(),C=gt(),r=j(5),a=Q(()=>h.status.loggedIn),e=j(!1);W(()=>{console.log(h.user)});function i(){h.logout(),h.updateUser({}),C.push({path:"/"})}function l(){e.value=j(!1)}return(d,v)=>{const p=bt;return A(),F("div",kt,[t("div",Ft,[t("div",Tt,[k(p,{to:"/"},{default:D(()=>[Dt]),_:1})]),t("section",Lt,[t("ul",Ot,[t("li",null,[k(p,{to:"/favorite"},{default:D(()=>{var b,_;return[It,O(t("span",{class:"badge badge-pink"},z((b=g(S))==null?void 0:b.favMerch.length),513),[[M,((_=g(S))==null?void 0:_.favMerch.length)>0]])]}),_:1})]),t("li",Mt,[k(p,{to:"/cart"},{default:D(()=>{var b,_;return[Bt,O(t("span",{class:"badge badge-pink"},z((b=g(S))==null?void 0:b.merch.length),513),[[M,((_=g(S))==null?void 0:_.merch.length)>0]])]}),_:1})]),O(t("li",Nt,[t("a",{href:"javascript:;",onClick:v[0]||(v[0]=b=>g($).toggleBellMessage(!0))},[Rt,g(r)?(A(),F("span",jt,z(g(r)),1)):Y("",!0)])],512),[[M,g(a)&&!1]]),g(a)?(A(),F("li",Ut,[Ht,t("ul",zt,[t("li",null,[k(p,{to:"/profile"},{default:D(()=>[x(" \u6703\u54E1\u8CC7\u6599 ")]),_:1})]),t("li",null,[t("a",{href:"javascript:;",onClick:i},"\u767B\u51FA")])])])):(A(),F("li",Vt,[k(p,{to:"/login"},{default:D(()=>[Pt]),_:1})]))])]),t("div",Yt,[O(t("input",{"onUpdate:modelValue":v[1]||(v[1]=b=>xt(e)?e.value=b:null),type:"checkbox"},null,512),[[Ct,g(e)]]),Wt,Jt,Gt,t("ul",Zt,[t("li",{onClick:l},[k(p,{to:"/aboutlovin"},{default:D(()=>[x(" \u95DC\u65BCLOVIN\u6A02\u604B ")]),_:1})]),t("li",{onClick:l},[k(p,{to:"/shop"},{default:D(()=>[x(" \u7522\u54C1\u4ECB\u7D39 ")]),_:1})]),t("li",{onClick:l},[k(p,{to:"/bonus-point"},{default:D(()=>[x(" \u6211\u8981\u8CFA\u7D05\u5229 ")]),_:1})]),O(t("li",{onClick:l},[k(p,{to:"/activity"},{default:D(()=>[x(" WO\u6D3B\u52D5 ")]),_:1})],512),[[M,!1]])])])])])}}},Kt=B(qt,[["__scopeId","data-v-3255b1f5"]]),N=w=>(X("data-v-cdecec6e"),w=w(),tt(),w),Qt={id:"bell-message-container",class:"bell-message-container animate__fadeIn animate__animated animation-duration-1",tabindex:"-1",role:"dialog","aria-labelledby":"bellCenterTitle"},Xt={class:"modal-dialog",role:"document"},te={class:"modal-content"},ee={class:"modal-body m-0 p-0"},ne={class:"nav nav-tabs message_tab"},oe=N(()=>t("a",{href:"javascript:;"},[x(" WO\u5FEB\u8A0A "),t("span",{class:"badge2"},"2")],-1)),ae=[oe],re=N(()=>t("a",{href:"javascript:;"},[x(" \u6211\u7684\u8FFD\u8E64 "),t("span",{class:"badge2"},"2")],-1)),se=[re],ie=N(()=>t("a",{href:"javascript:;"},[x(" \u7D05\u5229\u5FEB\u8A0A "),t("span",{class:"badge2"},"1")],-1)),ce=[ie],ue={class:"tab-content message_content"},le={id:"bell_1",class:"tab-panel"},de=N(()=>t("ul",null,[t("li",null,[x(" \u65B0\u589E\u4E00\u5247"),t("a",{href:"",target:"new"},"\u300C\u5718\u8CFC\u540D\u7A31\u300D"),x("\uFF0C\u5FEB\u4F86\u8FFD\u8E64\u5427\uFF01 ")]),t("li",null,[x(" \u606D\u559C\u60A8\u5F97\u6A19"),t("a",{href:"",target:"new"},"\u300C\u7AF6\u62CD\u540D\u7A31\u300D"),x("\uFF0C\u8ACB\u5728\u671F\u9650\u5167\u78BA\u8A8D\u60A8\u7684\u5BC4\u9001\u8CC7\u8A0A\uFF0C\u903E\u671F\u5C07\u8996\u70BA\u68C4\u9818\uFF01"),t("a",{href:"/b_checkout",target:"new"},[t("u",null,"\u9EDE\u6B64\u78BA\u8A8D")])])],-1)),fe=[de],_e={id:"bell_2",class:"tab-panel"},pe=N(()=>t("ul",null,[t("li",null,[t("a",{href:"",target:"new"},"\u300C\u5718\u8CFC\u540D\u7A31\u300D"),x("\u9032\u5EA6\u5DF2\u905490%\uFF01 ")]),t("li",null,[t("a",{href:"",target:"new"},"\u300C\u7AF6\u62CD\u540D\u7A31\u300D"),x("\u6709\u65B0\u7684\u51FA\u50F9\uFF0C\u524D\u5F80\u5BDF\u770B\uFF01 ")])],-1)),he=[pe],ve={id:"bell_3",class:"tab-panel"},me=N(()=>t("ul",null,[t("li",null," 2022/09/09\uFF0C\u7C3D\u5230\u6EFF30\u5929\uFF0C\u984D\u5916\u8D08\u900110\u9EDE\u7D05\u5229\u3002 ")],-1)),ge=[me],be=St({__name:"BellMessage",setup(w){const h=j(0),S=V();W(()=>{});function $(){S.toggleBellMessage(!1)}return(C,r)=>(A(),F("div",Qt,[t("div",Xt,[t("div",te,[t("div",ee,[t("ul",ne,[t("li",{class:q({active:g(h)===0}),onClick:r[0]||(r[0]=a=>h.value=0)},ae,2),t("li",{class:q({active:g(h)===1}),onClick:r[1]||(r[1]=a=>h.value=1)},se,2),t("li",{class:q({active:g(h)===2}),onClick:r[2]||(r[2]=a=>h.value=2)},ce,2)]),t("div",ue,[O(t("div",le,fe,512),[[M,g(h)===0]]),O(t("div",_e,he,512),[[M,g(h)===1]]),O(t("div",ve,ge,512),[[M,g(h)===2]])])]),t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-check2","data-dismiss":"modal",onClick:$}," \u95DC\u9589 ")])])])]))}});const ye=B(be,[["__scopeId","data-v-cdecec6e"]]);const we={id:"videoModal",class:"video-dialog-container animate__fadeIn animate__animated animation-duration-1",tabindex:"-1",role:"dialog","aria-labelledby":"videoModalLabel","aria-hidden":"true","data-backdrop":"static"},Ce={class:"modal-dialog",role:"document"},xe={class:"modal-content"},Se={class:"modal-body"},$e={class:"embed-responsive embed-responsive-16by9"},Ae=["src"],Ee={key:0,class:"modal-footer btn-close"},ke={key:1,class:"hint"},Fe={__name:"VideoDialogue",setup(w){const h=j(5),S=V();let $=null;const C=Q(()=>S.dailyVideoURL);W(()=>{$=setInterval(()=>{h.value<=0&&(clearInterval($),$=null),h.value-=1},1e3)});function r(){S.toggleVideoDialog(!1)}function a(e){const i=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;if(!i.test(e))return"";const d=e.match(i);let v=d&&d[2].length===11?d[2]:null;return!v&&e.includes("shorts")&&(v=/(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm.exec(e)[3]),`https://www.youtube.com/embed/${v}`}return(e,i)=>(A(),F("div",we,[t("div",Ce,[t("div",xe,[t("div",Se,[t("div",$e,[t("iframe",{id:"yt-iframe",width:"560",height:"315",src:a(g(C)),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;",allowfullscreen:""},null,8,Ae)])]),g(h)<=0?(A(),F("div",Ee,[t("button",{type:"button",class:"btn btn-default",onClick:r}," \u95DC\u9589 ")])):(A(),F("div",ke," \u8ACB\u7B49\u5F85 "+z(g(h))+" \u79D2... ",1))])])]))}},Te=B(Fe,[["__scopeId","data-v-58113b18"]]),De=""+new URL("share_ad.31ea5396.jpg",import.meta.url).href;var at={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(w,h){(function($,C){w.exports=C()})(yt,function(){return function(){var S={686:function(r,a,e){e.d(a,{default:function(){return vt}});var i=e(279),l=e.n(i),d=e(370),v=e.n(d),p=e(817),b=e.n(p);function _(u){try{return document.execCommand(u)}catch{return!1}}var y=function(o){var n=b()(o);return _("cut"),n},m=y;function T(u){var o=document.documentElement.getAttribute("dir")==="rtl",n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[o?"right":"left"]="-9999px";var s=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(s,"px"),n.setAttribute("readonly",""),n.value=u,n}var et=function(o,n){var s=T(o);n.container.appendChild(s);var c=b()(s);return _("copy"),s.remove(),c},rt=function(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},s="";return typeof o=="string"?s=et(o,n):o instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(o==null?void 0:o.type)?s=et(o.value,n):(s=b()(o),_("copy")),s},J=rt;function P(u){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?P=function(n){return typeof n}:P=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},P(u)}var st=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=o.action,s=n===void 0?"copy":n,c=o.container,f=o.target,E=o.text;if(s!=="copy"&&s!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(f!==void 0)if(f&&P(f)==="object"&&f.nodeType===1){if(s==="copy"&&f.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(s==="cut"&&(f.hasAttribute("readonly")||f.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(E)return J(E,{container:c});if(f)return s==="cut"?m(f):J(f,{container:c})},it=st;function R(u){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?R=function(n){return typeof n}:R=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},R(u)}function ct(u,o){if(!(u instanceof o))throw new TypeError("Cannot call a class as a function")}function nt(u,o){for(var n=0;n<o.length;n++){var s=o[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(u,s.key,s)}}function ut(u,o,n){return o&&nt(u.prototype,o),n&&nt(u,n),u}function lt(u,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");u.prototype=Object.create(o&&o.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),o&&G(u,o)}function G(u,o){return G=Object.setPrototypeOf||function(s,c){return s.__proto__=c,s},G(u,o)}function dt(u){var o=pt();return function(){var s=U(u),c;if(o){var f=U(this).constructor;c=Reflect.construct(s,arguments,f)}else c=s.apply(this,arguments);return ft(this,c)}}function ft(u,o){return o&&(R(o)==="object"||typeof o=="function")?o:_t(u)}function _t(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}function pt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function U(u){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},U(u)}function Z(u,o){var n="data-clipboard-".concat(u);if(!!o.hasAttribute(n))return o.getAttribute(n)}var ht=function(u){lt(n,u);var o=dt(n);function n(s,c){var f;return ct(this,n),f=o.call(this),f.resolveOptions(c),f.listenClick(s),f}return ut(n,[{key:"resolveOptions",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof c.action=="function"?c.action:this.defaultAction,this.target=typeof c.target=="function"?c.target:this.defaultTarget,this.text=typeof c.text=="function"?c.text:this.defaultText,this.container=R(c.container)==="object"?c.container:document.body}},{key:"listenClick",value:function(c){var f=this;this.listener=v()(c,"click",function(E){return f.onClick(E)})}},{key:"onClick",value:function(c){var f=c.delegateTarget||c.currentTarget,E=this.action(f)||"copy",H=it({action:E,container:this.container,target:this.target(f),text:this.text(f)});this.emit(H?"success":"error",{action:E,text:H,trigger:f,clearSelection:function(){f&&f.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(c){return Z("action",c)}},{key:"defaultTarget",value:function(c){var f=Z("target",c);if(f)return document.querySelector(f)}},{key:"defaultText",value:function(c){return Z("text",c)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(c){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return J(c,f)}},{key:"cut",value:function(c){return m(c)}},{key:"isSupported",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],f=typeof c=="string"?[c]:c,E=!!document.queryCommandSupported;return f.forEach(function(H){E=E&&!!document.queryCommandSupported(H)}),E}}]),n}(l()),vt=ht},828:function(r){var a=9;if(typeof Element<"u"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function i(l,d){for(;l&&l.nodeType!==a;){if(typeof l.matches=="function"&&l.matches(d))return l;l=l.parentNode}}r.exports=i},438:function(r,a,e){var i=e(828);function l(p,b,_,y,m){var T=v.apply(this,arguments);return p.addEventListener(_,T,m),{destroy:function(){p.removeEventListener(_,T,m)}}}function d(p,b,_,y,m){return typeof p.addEventListener=="function"?l.apply(null,arguments):typeof _=="function"?l.bind(null,document).apply(null,arguments):(typeof p=="string"&&(p=document.querySelectorAll(p)),Array.prototype.map.call(p,function(T){return l(T,b,_,y,m)}))}function v(p,b,_,y){return function(m){m.delegateTarget=i(m.target,b),m.delegateTarget&&y.call(p,m)}}r.exports=d},879:function(r,a){a.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},a.nodeList=function(e){var i=Object.prototype.toString.call(e);return e!==void 0&&(i==="[object NodeList]"||i==="[object HTMLCollection]")&&"length"in e&&(e.length===0||a.node(e[0]))},a.string=function(e){return typeof e=="string"||e instanceof String},a.fn=function(e){var i=Object.prototype.toString.call(e);return i==="[object Function]"}},370:function(r,a,e){var i=e(879),l=e(438);function d(_,y,m){if(!_&&!y&&!m)throw new Error("Missing required arguments");if(!i.string(y))throw new TypeError("Second argument must be a String");if(!i.fn(m))throw new TypeError("Third argument must be a Function");if(i.node(_))return v(_,y,m);if(i.nodeList(_))return p(_,y,m);if(i.string(_))return b(_,y,m);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function v(_,y,m){return _.addEventListener(y,m),{destroy:function(){_.removeEventListener(y,m)}}}function p(_,y,m){return Array.prototype.forEach.call(_,function(T){T.addEventListener(y,m)}),{destroy:function(){Array.prototype.forEach.call(_,function(T){T.removeEventListener(y,m)})}}}function b(_,y,m){return l(document.body,_,y,m)}r.exports=d},817:function(r){function a(e){var i;if(e.nodeName==="SELECT")e.focus(),i=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var l=e.hasAttribute("readonly");l||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),l||e.removeAttribute("readonly"),i=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var d=window.getSelection(),v=document.createRange();v.selectNodeContents(e),d.removeAllRanges(),d.addRange(v),i=d.toString()}return i}r.exports=a},279:function(r){function a(){}a.prototype={on:function(e,i,l){var d=this.e||(this.e={});return(d[e]||(d[e]=[])).push({fn:i,ctx:l}),this},once:function(e,i,l){var d=this;function v(){d.off(e,v),i.apply(l,arguments)}return v._=i,this.on(e,v,l)},emit:function(e){var i=[].slice.call(arguments,1),l=((this.e||(this.e={}))[e]||[]).slice(),d=0,v=l.length;for(d;d<v;d++)l[d].fn.apply(l[d].ctx,i);return this},off:function(e,i){var l=this.e||(this.e={}),d=l[e],v=[];if(d&&i)for(var p=0,b=d.length;p<b;p++)d[p].fn!==i&&d[p].fn._!==i&&v.push(d[p]);return v.length?l[e]=v:delete l[e],this}},r.exports=a,r.exports.TinyEmitter=a}},$={};function C(r){if($[r])return $[r].exports;var a=$[r]={exports:{}};return S[r](a,a.exports,C),a.exports}return function(){C.n=function(r){var a=r&&r.__esModule?function(){return r.default}:function(){return r};return C.d(a,{a}),a}}(),function(){C.d=function(r,a){for(var e in a)C.o(a,e)&&!C.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:a[e]})}}(),function(){C.o=function(r,a){return Object.prototype.hasOwnProperty.call(r,a)}}(),C(686)}().default})})(at);const Le=wt(at.exports);const I=w=>(X("data-v-e3ffdbdf"),w=w(),tt(),w),Oe={id:"shareaccount",class:"modal share-account-container"},Ie={class:"modal-dialog",role:"document"},Me={class:"modal-content"},Be=I(()=>t("div",{class:"modal-title"},[t("h4",null,"\u6211\u7684\u597D\u53CB,\u9001\u4F60\u4E00\u5247\u597D\u5EB7")],-1)),Ne={class:"modal-body"},Re=I(()=>t("img",{class:"main-img",src:De,alt:""},null,-1)),je=I(()=>t("br",null,null,-1)),Ve=I(()=>t("br",null,null,-1)),Pe=I(()=>t("br",null,null,-1)),Ue={class:"text-center"},He=I(()=>t("br",null,null,-1)),ze=I(()=>t("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FLOVIN2022",target:"_blank"},[t("i",{class:"fa-brands fa-facebook",style:{"font-size":"28px"}})],-1)),Ye=I(()=>t("br",null,null,-1)),We=["data-clipboard-text"],Je={__name:"ShareAccount",setup(w){const h=ot(),S=V(),$=Q(()=>{var a;return`
  ${location.host}/register?recommend=${(a=h.user)==null?void 0:a.recommendCode}
`});W(()=>{new Le("#copy-btn")});function C(){S.toggleShareAccount(!1)}function r(){alert("\u5DF2\u8907\u88FD\u5206\u4EAB\u7DB2\u5740!")}return(a,e)=>(A(),F("div",Oe,[t("div",Ie,[t("div",Me,[Be,t("div",Ne,[Re,x(" \u597D\u6771\u897F,\u7576\u7136\u8981\u518D\u5206\u4EAB\u7D66\u53E3\u888B\u540D\u55AE!"),je,x(" \u5206\u4EAB\u9019\u5247\u512A\u60E0\u7D66\u597D\u53CB,\u4E5F\u8B93\u597D\u53CB\u4E00\u8D77\u62FF\u5230\u8D85\u4F4E\u512A\u60E0\u50F9"),Ve,Pe,x(" \u65B9\u5F0F\uFF1A\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u514D\u8CBB\u52A0\u5165\u6703\u54E1, \u5B8C\u6210\u6D41\u7A0B\u5F8C, \u5C31\u80FD\u4EAB\u53D7VIP \u548CSVIP\u7684\u8D85\u4F4E\u7279\u60E0\u50F9 "),t("div",Ue,[x(" \u5206\u4EAB"),He,ze,Ye,t("a",{id:"copy-btn",class:"btn btn-main btn-check","data-clipboard-text":g($),onClick:r},"\u8907\u88FD\u5206\u4EAB\u7DB2\u5740",8,We)])]),t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-check2",onClick:C}," \u95DC\u9589 ")])])])]))}},Ge=B(Je,[["__scopeId","data-v-e3ffdbdf"]]),Ze={},qe={class:"footer section"},Ke=$t('<div class="container2"> \u8A2A\u5BA2\u6578\uFF1A1,435,538\u4EBA | \u6703\u54E1\u6578\uFF1A12,380\u4EBA<div class="row"><div class="col-md-4 text-left"> \u5168\u53F0\u6700\u5927\u5805\u679C\u96FB\u5546\u5E73\u53F0 \u4F60\u4ECA\u5929WO\u4E86\u6C92<br> \u540C\u8208\u5BE6\u696D\u80A1\u4EFD\u6709\u9650\u516C\u53F8<br> \u5BA2\u670D\u5C08\u7DDA\uFF1A022371110\u300102-23711183<br> \u5BA2\u670D\u4FE1\u7BB1\uFF1Amlin@tonghsing.com.tw<br> \u516C\u53F8\u5730\u5740\uFF1A\u53F0\u5317\u5E02\u5EF6\u5E73\u5357\u8DEF85\u865F4\u6A13<br></div><div class="col-md-8 text-right"><ul class="footer-menu"><li><a href="/order">\u6211\u7684\u8A02\u55AE\u67E5\u8A62</a></li><li><a href="/contact">\u806F\u7D61\u6211\u5011</a></li><li><a href="/about">\u95DC\u65BC\u6211\u5011</a></li><li><a href="/faq">\u5E38\u898B\u554F\u984C</a></li><li><a href="/return-help">\u9000\u63DB\u8CA8\u8AAA\u660E</a></li><li><a href="/privacy">\u96B1\u79C1\u6B0A\u653F\u7B56</a></li><li><a href="/terms">\u6703\u54E1\u689D\u6B3E</a></li></ul><ul class="footer-menu social_icon"><li><a href="https://www.instagram.com/p/Co1EeQHpvmD/?igshid=MDJmNzVkMjY=" target="_blank"><i class="fa-brands fa-instagram"></i></a></li><li><a href="https://www.facebook.com/LOVIN2022" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li><li><a href=" https://youtu.be/9RlTDp0BBUw" target="_blank"><i class="fa-brands fa-youtube"></i></a></li></ul></div></div><p>Copyright \xA92023 Developed by <a href="">Weshin</a></p></div>',1),Qe=[Ke];function Xe(w,h){return A(),F("footer",qe,Qe)}const tn=B(Ze,[["render",Xe]]);const en={class:"layout--default"},nn={__name:"default",setup(w){const h=V();return(S,$)=>{const C=Kt,r=ye,a=Te,e=Ge,i=tn;return A(),F("div",en,[k(C),At(S.$slots,"default",{},void 0,!0),g(h).bellMessageToggle?(A(),K(r,{key:0})):Y("",!0),g(h).videoDialogToggle?(A(),K(a,{key:1})):Y("",!0),g(h).shareAccountToggle?(A(),K(e,{key:2})):Y("",!0),k(i)])}}},cn=B(nn,[["__scopeId","data-v-46ba932e"]]);export{cn as default};