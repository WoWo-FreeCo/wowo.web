import{a as N,g as ot,h as mt,f as yt,k as at,n as bt,K as wt}from"./entry.0cbc246d.js";import{u as P}from"./pageStatusStore.e285144a.js";import{b as V,c as Z,o as Y,Z as k,_ as T,aa as t,$ as S,a0 as A,J as O,ac as I,y as b,G as M,ab as W,C as h,ai as Ct,i as xt,a8 as q,a9 as tt,d as $t,ae as Q,a7 as St,K as Et,a3 as X}from"./swiper-vue.2e988726.js";const At=""+new URL("logo.f02090fc.png",import.meta.url).href;const L=x=>(q("data-v-95fcfab6"),x=x(),tt(),x),kt={class:"top_nav"},Ft={class:"container2 relative p-0"},Tt={id:"logo",class:"logo"},Dt=L(()=>t("img",{src:At,alt:""},null,-1)),Lt={class:"top-header"},Ot={id:"top_member",class:"top-menu"},Mt=L(()=>t("i",{class:"fa-regular fa-heart"},null,-1)),Bt={class:"top_cart"},It=L(()=>t("i",{class:"fa-solid fa-cart-shopping"},null,-1)),Nt={class:"top_bell"},Rt=L(()=>t("i",{class:"fa-regular fa-bell"},null,-1)),jt={key:0,class:"badge badge-green bell_bounce"},Vt={key:0},Pt=L(()=>t("i",{class:"fa-regular fa-user"},null,-1)),Ut={key:1,class:"dropdown dropdown-slide"},Ht=L(()=>t("a",{class:"dropdown-toggle","data-toggle":"dropdown","data-hover":"dropdown"},[t("i",{class:"fa-regular fa-user"})],-1)),zt={class:"dropdown-menu"},Wt={id:"menuToggle"},Yt=L(()=>t("span",null,null,-1)),Gt=L(()=>t("span",null,null,-1)),Jt=L(()=>t("span",null,null,-1)),Kt={id:"menu"},Qt={__name:"Header",setup(x){const g=ot(),y=mt(),E=P(),$=yt(),s=V(5),a=Z(()=>g.status.loggedIn),e=V(!1);Y(()=>{console.log(g.user)});function i(){g.logout(),$.push({path:"/"})}function l(){e.value=V(!1)}return(d,v)=>{const p=at;return k(),T("div",kt,[t("div",Ft,[t("div",Tt,[S(p,{to:"/"},{default:A(()=>[Dt]),_:1})]),t("section",Lt,[t("ul",Ot,[t("li",null,[S(p,{to:"/favorite"},{default:A(()=>{var w,_;return[Mt,O(t("span",{class:"badge badge-pink"},I((w=b(y))==null?void 0:w.favMerch.length),513),[[M,((_=b(y))==null?void 0:_.favMerch.length)>0]])]}),_:1})]),t("li",Bt,[S(p,{to:"/cart"},{default:A(()=>{var w,_;return[It,O(t("span",{class:"badge badge-pink"},I((w=b(y))==null?void 0:w.merch.length),513),[[M,((_=b(y))==null?void 0:_.merch.length)>0]])]}),_:1})]),O(t("li",Nt,[t("a",{href:"javascript:;",onClick:v[0]||(v[0]=w=>b(E).toggleBellMessage(!0))},[Rt,b(s)?(k(),T("span",jt,I(b(s)),1)):W("",!0)])],512),[[M,b(a)&&!1]]),b(a)?(k(),T("li",Ut,[Ht,t("ul",zt,[t("li",null,[S(p,{to:"/profile"},{default:A(()=>[h(" \u6703\u54E1\u8CC7\u6599 ")]),_:1})]),t("li",null,[t("a",{href:"javascript:;",onClick:i},"\u767B\u51FA")])])])):(k(),T("li",Vt,[S(p,{to:"/login"},{default:A(()=>[Pt]),_:1})]))])]),t("div",Wt,[O(t("input",{"onUpdate:modelValue":v[1]||(v[1]=w=>xt(e)?e.value=w:null),type:"checkbox"},null,512),[[Ct,b(e)]]),Yt,Gt,Jt,t("ul",Kt,[t("li",{onClick:l},[S(p,{to:"/aboutlovin"},{default:A(()=>[h(" \u95DC\u65BCLOVIN\u6A02\u604B ")]),_:1})]),t("li",{onClick:l},[S(p,{to:"/shop"},{default:A(()=>[h(" \u7522\u54C1\u4ECB\u7D39 ")]),_:1})]),t("li",{onClick:l},[S(p,{to:"/bonus-point"},{default:A(()=>[h(" \u6211\u8981\u8CFA\u7D05\u5229 ")]),_:1})]),O(t("li",{onClick:l},[S(p,{to:"/activity"},{default:A(()=>[h(" WO\u6D3B\u52D5 ")]),_:1})],512),[[M,!1]])])])])])}}},Xt=N(Qt,[["__scopeId","data-v-95fcfab6"]]),R=x=>(q("data-v-cdecec6e"),x=x(),tt(),x),Zt={id:"bell-message-container",class:"bell-message-container animate__fadeIn animate__animated animation-duration-1",tabindex:"-1",role:"dialog","aria-labelledby":"bellCenterTitle"},qt={class:"modal-dialog",role:"document"},te={class:"modal-content"},ee={class:"modal-body m-0 p-0"},ne={class:"nav nav-tabs message_tab"},oe=R(()=>t("a",{href:"javascript:;"},[h(" WO\u5FEB\u8A0A "),t("span",{class:"badge2"},"2")],-1)),ae=[oe],se=R(()=>t("a",{href:"javascript:;"},[h(" \u6211\u7684\u8FFD\u8E64 "),t("span",{class:"badge2"},"2")],-1)),re=[se],ie=R(()=>t("a",{href:"javascript:;"},[h(" \u7D05\u5229\u5FEB\u8A0A "),t("span",{class:"badge2"},"1")],-1)),ce=[ie],ue={class:"tab-content message_content"},le={id:"bell_1",class:"tab-panel"},de=R(()=>t("ul",null,[t("li",null,[h(" \u65B0\u589E\u4E00\u5247"),t("a",{href:"",target:"new"},"\u300C\u5718\u8CFC\u540D\u7A31\u300D"),h("\uFF0C\u5FEB\u4F86\u8FFD\u8E64\u5427\uFF01 ")]),t("li",null,[h(" \u606D\u559C\u60A8\u5F97\u6A19"),t("a",{href:"",target:"new"},"\u300C\u7AF6\u62CD\u540D\u7A31\u300D"),h("\uFF0C\u8ACB\u5728\u671F\u9650\u5167\u78BA\u8A8D\u60A8\u7684\u5BC4\u9001\u8CC7\u8A0A\uFF0C\u903E\u671F\u5C07\u8996\u70BA\u68C4\u9818\uFF01"),t("a",{href:"/b_checkout",target:"new"},[t("u",null,"\u9EDE\u6B64\u78BA\u8A8D")])])],-1)),fe=[de],_e={id:"bell_2",class:"tab-panel"},pe=R(()=>t("ul",null,[t("li",null,[t("a",{href:"",target:"new"},"\u300C\u5718\u8CFC\u540D\u7A31\u300D"),h("\u9032\u5EA6\u5DF2\u905490%\uFF01 ")]),t("li",null,[t("a",{href:"",target:"new"},"\u300C\u7AF6\u62CD\u540D\u7A31\u300D"),h("\u6709\u65B0\u7684\u51FA\u50F9\uFF0C\u524D\u5F80\u5BDF\u770B\uFF01 ")])],-1)),he=[pe],ve={id:"bell_3",class:"tab-panel"},ge=R(()=>t("ul",null,[t("li",null," 2022/09/09\uFF0C\u7C3D\u5230\u6EFF30\u5929\uFF0C\u984D\u5916\u8D08\u900110\u9EDE\u7D05\u5229\u3002 ")],-1)),me=[ge],ye=$t({__name:"BellMessage",setup(x){const g=V(0),y=P();Y(()=>{});function E(){y.toggleBellMessage(!1)}return($,s)=>(k(),T("div",Zt,[t("div",qt,[t("div",te,[t("div",ee,[t("ul",ne,[t("li",{class:Q({active:b(g)===0}),onClick:s[0]||(s[0]=a=>g.value=0)},ae,2),t("li",{class:Q({active:b(g)===1}),onClick:s[1]||(s[1]=a=>g.value=1)},re,2),t("li",{class:Q({active:b(g)===2}),onClick:s[2]||(s[2]=a=>g.value=2)},ce,2)]),t("div",ue,[O(t("div",le,fe,512),[[M,b(g)===0]]),O(t("div",_e,he,512),[[M,b(g)===1]]),O(t("div",ve,me,512),[[M,b(g)===2]])])]),t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-check2","data-dismiss":"modal",onClick:E}," \u95DC\u9589 ")])])])]))}});const be=N(ye,[["__scopeId","data-v-cdecec6e"]]);const we={id:"videoModal",class:"video-dialog-container animate__fadeIn animate__animated animation-duration-1",tabindex:"-1",role:"dialog","aria-labelledby":"videoModalLabel","aria-hidden":"true","data-backdrop":"static"},Ce={class:"modal-dialog",role:"document"},xe={class:"modal-content"},$e={class:"modal-body"},Se={class:"embed-responsive embed-responsive-16by9"},Ee=["src"],Ae={key:0,class:"modal-footer btn-close"},ke={key:1,class:"hint"},Fe={__name:"VideoDialogue",setup(x){const g=V(5),y=P();let E=null;const $=Z(()=>y.dailyVideoURL);Y(()=>{E=setInterval(()=>{g.value<=0&&(clearInterval(E),E=null),g.value-=1},1e3)});function s(){y.toggleVideoDialog(!1)}function a(e){const i=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;if(!i.test(e))return"";const d=e.match(i);let v=d&&d[2].length===11?d[2]:null;return!v&&e.includes("shorts")&&(v=/(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm.exec(e)[3]),`https://www.youtube.com/embed/${v}`}return(e,i)=>(k(),T("div",we,[t("div",Ce,[t("div",xe,[t("div",$e,[t("div",Se,[t("iframe",{id:"yt-iframe",width:"560",height:"315",src:a(b($)),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;",allowfullscreen:""},null,8,Ee)])]),b(g)<=0?(k(),T("div",Ae,[t("button",{type:"button",class:"btn btn-default",onClick:s}," \u95DC\u9589 ")])):(k(),T("div",ke," \u8ACB\u7B49\u5F85 "+I(b(g))+" \u79D2... ",1))])])]))}},Te=N(Fe,[["__scopeId","data-v-58113b18"]]),De=""+new URL("share_ad.31ea5396.jpg",import.meta.url).href;var st={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(x,g){(function(E,$){x.exports=$()})(bt,function(){return function(){var y={686:function(s,a,e){e.d(a,{default:function(){return gt}});var i=e(279),l=e.n(i),d=e(370),v=e.n(d),p=e(817),w=e.n(p);function _(u){try{return document.execCommand(u)}catch{return!1}}var C=function(o){var n=w()(o);return _("cut"),n},m=C;function D(u){var o=document.documentElement.getAttribute("dir")==="rtl",n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[o?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=u,n}var et=function(o,n){var r=D(o);n.container.appendChild(r);var c=w()(r);return _("copy"),r.remove(),c},rt=function(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof o=="string"?r=et(o,n):o instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(o==null?void 0:o.type)?r=et(o.value,n):(r=w()(o),_("copy")),r},G=rt;function U(u){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?U=function(n){return typeof n}:U=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},U(u)}var it=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=o.action,r=n===void 0?"copy":n,c=o.container,f=o.target,F=o.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(f!==void 0)if(f&&U(f)==="object"&&f.nodeType===1){if(r==="copy"&&f.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(f.hasAttribute("readonly")||f.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(F)return G(F,{container:c});if(f)return r==="cut"?m(f):G(f,{container:c})},ct=it;function j(u){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?j=function(n){return typeof n}:j=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},j(u)}function ut(u,o){if(!(u instanceof o))throw new TypeError("Cannot call a class as a function")}function nt(u,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(u,r.key,r)}}function lt(u,o,n){return o&&nt(u.prototype,o),n&&nt(u,n),u}function dt(u,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");u.prototype=Object.create(o&&o.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),o&&J(u,o)}function J(u,o){return J=Object.setPrototypeOf||function(r,c){return r.__proto__=c,r},J(u,o)}function ft(u){var o=ht();return function(){var r=H(u),c;if(o){var f=H(this).constructor;c=Reflect.construct(r,arguments,f)}else c=r.apply(this,arguments);return _t(this,c)}}function _t(u,o){return o&&(j(o)==="object"||typeof o=="function")?o:pt(u)}function pt(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}function ht(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function H(u){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},H(u)}function K(u,o){var n="data-clipboard-".concat(u);if(!!o.hasAttribute(n))return o.getAttribute(n)}var vt=function(u){dt(n,u);var o=ft(n);function n(r,c){var f;return ut(this,n),f=o.call(this),f.resolveOptions(c),f.listenClick(r),f}return lt(n,[{key:"resolveOptions",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof c.action=="function"?c.action:this.defaultAction,this.target=typeof c.target=="function"?c.target:this.defaultTarget,this.text=typeof c.text=="function"?c.text:this.defaultText,this.container=j(c.container)==="object"?c.container:document.body}},{key:"listenClick",value:function(c){var f=this;this.listener=v()(c,"click",function(F){return f.onClick(F)})}},{key:"onClick",value:function(c){var f=c.delegateTarget||c.currentTarget,F=this.action(f)||"copy",z=ct({action:F,container:this.container,target:this.target(f),text:this.text(f)});this.emit(z?"success":"error",{action:F,text:z,trigger:f,clearSelection:function(){f&&f.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(c){return K("action",c)}},{key:"defaultTarget",value:function(c){var f=K("target",c);if(f)return document.querySelector(f)}},{key:"defaultText",value:function(c){return K("text",c)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(c){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return G(c,f)}},{key:"cut",value:function(c){return m(c)}},{key:"isSupported",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],f=typeof c=="string"?[c]:c,F=!!document.queryCommandSupported;return f.forEach(function(z){F=F&&!!document.queryCommandSupported(z)}),F}}]),n}(l()),gt=vt},828:function(s){var a=9;if(typeof Element<"u"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function i(l,d){for(;l&&l.nodeType!==a;){if(typeof l.matches=="function"&&l.matches(d))return l;l=l.parentNode}}s.exports=i},438:function(s,a,e){var i=e(828);function l(p,w,_,C,m){var D=v.apply(this,arguments);return p.addEventListener(_,D,m),{destroy:function(){p.removeEventListener(_,D,m)}}}function d(p,w,_,C,m){return typeof p.addEventListener=="function"?l.apply(null,arguments):typeof _=="function"?l.bind(null,document).apply(null,arguments):(typeof p=="string"&&(p=document.querySelectorAll(p)),Array.prototype.map.call(p,function(D){return l(D,w,_,C,m)}))}function v(p,w,_,C){return function(m){m.delegateTarget=i(m.target,w),m.delegateTarget&&C.call(p,m)}}s.exports=d},879:function(s,a){a.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},a.nodeList=function(e){var i=Object.prototype.toString.call(e);return e!==void 0&&(i==="[object NodeList]"||i==="[object HTMLCollection]")&&"length"in e&&(e.length===0||a.node(e[0]))},a.string=function(e){return typeof e=="string"||e instanceof String},a.fn=function(e){var i=Object.prototype.toString.call(e);return i==="[object Function]"}},370:function(s,a,e){var i=e(879),l=e(438);function d(_,C,m){if(!_&&!C&&!m)throw new Error("Missing required arguments");if(!i.string(C))throw new TypeError("Second argument must be a String");if(!i.fn(m))throw new TypeError("Third argument must be a Function");if(i.node(_))return v(_,C,m);if(i.nodeList(_))return p(_,C,m);if(i.string(_))return w(_,C,m);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function v(_,C,m){return _.addEventListener(C,m),{destroy:function(){_.removeEventListener(C,m)}}}function p(_,C,m){return Array.prototype.forEach.call(_,function(D){D.addEventListener(C,m)}),{destroy:function(){Array.prototype.forEach.call(_,function(D){D.removeEventListener(C,m)})}}}function w(_,C,m){return l(document.body,_,C,m)}s.exports=d},817:function(s){function a(e){var i;if(e.nodeName==="SELECT")e.focus(),i=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var l=e.hasAttribute("readonly");l||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),l||e.removeAttribute("readonly"),i=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var d=window.getSelection(),v=document.createRange();v.selectNodeContents(e),d.removeAllRanges(),d.addRange(v),i=d.toString()}return i}s.exports=a},279:function(s){function a(){}a.prototype={on:function(e,i,l){var d=this.e||(this.e={});return(d[e]||(d[e]=[])).push({fn:i,ctx:l}),this},once:function(e,i,l){var d=this;function v(){d.off(e,v),i.apply(l,arguments)}return v._=i,this.on(e,v,l)},emit:function(e){var i=[].slice.call(arguments,1),l=((this.e||(this.e={}))[e]||[]).slice(),d=0,v=l.length;for(d;d<v;d++)l[d].fn.apply(l[d].ctx,i);return this},off:function(e,i){var l=this.e||(this.e={}),d=l[e],v=[];if(d&&i)for(var p=0,w=d.length;p<w;p++)d[p].fn!==i&&d[p].fn._!==i&&v.push(d[p]);return v.length?l[e]=v:delete l[e],this}},s.exports=a,s.exports.TinyEmitter=a}},E={};function $(s){if(E[s])return E[s].exports;var a=E[s]={exports:{}};return y[s](a,a.exports,$),a.exports}return function(){$.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return $.d(a,{a}),a}}(),function(){$.d=function(s,a){for(var e in a)$.o(a,e)&&!$.o(s,e)&&Object.defineProperty(s,e,{enumerable:!0,get:a[e]})}}(),function(){$.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)}}(),$(686)}().default})})(st);const Le=wt(st.exports);const B=x=>(q("data-v-733dc8c7"),x=x(),tt(),x),Oe={id:"shareaccount",class:"modal share-account-container"},Me={class:"modal-dialog",role:"document"},Be={class:"modal-content"},Ie=B(()=>t("div",{class:"modal-title"},[t("h4",null,"\u6211\u7684\u597D\u53CB,\u9001\u4F60\u4E00\u5247\u597D\u5EB7")],-1)),Ne={class:"modal-body"},Re=B(()=>t("img",{class:"main-img",src:De,alt:""},null,-1)),je={class:"text-center"},Ve=B(()=>t("br",null,null,-1)),Pe=["href"],Ue=B(()=>t("i",{class:"fa-brands fa-facebook",style:{"font-size":"28px"}},null,-1)),He=[Ue],ze=B(()=>t("p",{class:"share-text"}," \u60A8\u7684\u89AA\u53CB\u5F9EFB\u8CBC\u6587\u5167\u7684\u8DEF\u5F91\u9032\u5165WO\u5E73\u53F0\u4E26\u52A0\u5165\u6703\u54E1\u6642\uFF0C\u7CFB\u7D71\u5C07\u76F4\u63A5\u7D81\u5B9A\u63A8\u85A6\u4EBA\u95DC\u4FC2\u3002 ",-1)),We=B(()=>t("br",null,null,-1)),Ye=["data-clipboard-text"],Ge=B(()=>t("p",{class:"share-text"}," \u6309\u4E0A\u65B9\u8907\u88FD\u9215\u5F8C\uFF0C\u9700\u5728LINE\u6216\u5176\u4ED6\u901A\u8A0A\u8EDF\u9AD4\u9032\u884C\u8CBC\u4E0A\uFF0C\u5F9E\u8A72\u8DEF\u5F91\u9032\u5165WO\u5E73\u53F0\u4E26\u52A0\u5165\u6703\u54E1\u6642\uFF0C\u7CFB\u7D71\u5C07\u76F4\u63A5\u7D81\u5B9A\u63A8\u85A6\u4EBA\u95DC\u4FC2\u3002 ",-1)),Je={__name:"ShareAccount",setup(x){const g=ot(),y=P(),E=Z(()=>{var a;return`
  ${location.host}/register?recommend=${(a=g.user)==null?void 0:a.recommendCode}
`});Y(()=>{new Le("#copy-btn")});function $(){y.toggleShareAccount(!1)}function s(){alert("\u5DF2\u8907\u88FD\u5206\u4EAB\u7DB2\u5740!")}return(a,e)=>(k(),T("div",Oe,[t("div",Me,[t("div",Be,[Ie,t("div",Ne,[Re,t("div",je,[Ve,t("a",{href:`https://www.facebook.com/sharer/sharer.php?u=${b(E)}`,target:"_blank"},He,8,Pe),ze,We,t("a",{id:"copy-btn",class:"btn btn-main btn-check","data-clipboard-text":b(E),onClick:s},"\u8907\u88FD\u5206\u4EAB\u7DB2\u5740",8,Ye),Ge])]),t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-check2",onClick:$}," \u95DC\u9589 ")])])])]))}},Ke=N(Je,[["__scopeId","data-v-733dc8c7"]]),Qe={},Xe={class:"footer section"},Ze={class:"container2"},qe={class:"row"},tn=t("div",{class:"col-md-4 text-left"},[h(" \u5168\u53F0\u6700\u5927\u5805\u679C\u96FB\u5546\u5E73\u53F0 \u4F60\u4ECA\u5929WO\u4E86\u6C92"),t("br"),h(" \u540C\u8208\u5BE6\u696D\u80A1\u4EFD\u6709\u9650\u516C\u53F8"),t("br"),h(" \u5BA2\u670D\u5C08\u7DDA\uFF1A02-2371110 \u5206\u6A5F216"),t("br"),h(" \u5408\u4F5C\u5C08\u7DDA\uFF1A02-23751320"),t("br"),h(" \u5BA2\u670D\u4FE1\u7BB1\uFF1Aurlee@tonghsing.com.tw"),t("br"),h(" \u516C\u53F8\u5730\u5740\uFF1A\u53F0\u5317\u5E02\u5EF6\u5E73\u5357\u8DEF85\u865F4\u6A13"),t("br")],-1),en={class:"col-md-8 text-right"},nn={class:"footer-menu"},on=St('<ul class="footer-menu social_icon"><li><a href="https://www.instagram.com/p/Co1EeQHpvmD/?igshid=MDJmNzVkMjY=" target="_blank"><i class="fa-brands fa-instagram"></i></a></li><li><a href="https://www.facebook.com/LOVIN2022" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li><li><a href=" https://youtu.be/9RlTDp0BBUw" target="_blank"><i class="fa-brands fa-youtube"></i></a></li></ul>',1),an=t("p",null,[h("Copyright \xA92023 Developed by "),t("a",{href:""},"Weshin")],-1);function sn(x,g){const y=at;return k(),T("footer",Xe,[t("div",Ze,[h(" \u8A2A\u5BA2\u6578\uFF1A"+I("5,208")+"\u4EBA | \u6703\u54E1\u6578\uFF1A"+I("1,314")+"\u4EBA"),t("div",qe,[tn,t("div",en,[t("ul",nn,[t("li",null,[S(y,{to:"/order"},{default:A(()=>[h(" \u6211\u7684\u8A02\u55AE\u67E5\u8A62 ")]),_:1})]),t("li",null,[S(y,{to:"/contact"},{default:A(()=>[h(" \u806F\u7D61\u6211\u5011 ")]),_:1})]),t("li",null,[S(y,{to:"/about"},{default:A(()=>[h(" \u95DC\u65BC\u6211\u5011 ")]),_:1})]),t("li",null,[S(y,{to:"/faq"},{default:A(()=>[h(" \u5E38\u898B\u554F\u984C ")]),_:1})]),t("li",null,[S(y,{to:"/return-help"},{default:A(()=>[h(" \u9000\u63DB\u8CA8\u8AAA\u660E ")]),_:1})]),t("li",null,[S(y,{to:"/privacy"},{default:A(()=>[h(" \u96B1\u79C1\u6B0A\u653F\u7B56 ")]),_:1})]),t("li",null,[S(y,{to:"/terms"},{default:A(()=>[h(" \u6703\u54E1\u689D\u6B3E ")]),_:1})])]),on])]),an])])}const rn=N(Qe,[["render",sn]]);const cn={class:"layout--default"},un={__name:"default",setup(x){const g=P();return(y,E)=>{const $=Xt,s=be,a=Te,e=Ke,i=rn;return k(),T("div",cn,[S($),Et(y.$slots,"default",{},void 0,!0),b(g).bellMessageToggle?(k(),X(s,{key:0})):W("",!0),b(g).videoDialogToggle?(k(),X(a,{key:1})):W("",!0),b(g).shareAccountToggle?(k(),X(e,{key:2})):W("",!0),S(i)])}}},pn=N(un,[["__scopeId","data-v-46ba932e"]]);export{pn as default};