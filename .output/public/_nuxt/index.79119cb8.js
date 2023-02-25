import{b as o,f as w,Z as _,_ as x,v as n,o as z,h as B,d as f,a6 as v,a8 as i,$ as y,a0 as u,i as H,H as b,D as A}from"./swiper-vue.08c57f7b.js";import{u as I,N,b as S,c as L,a as M}from"./entry.8c805425.js";import{G as U}from"./requestURL.059e2fdd.js";import{_ as V}from"./client-only.5e6823b7.js";import{u as O}from"./authStore.65c45ba4.js";const D={__name:"AccountsTable",setup(m){const s=()=>[{type:"selection",disabled(e){return e.name==="Edward King 3"}},{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"}],r=Array.from({length:46}).map((e,l)=>({name:`Account ${l}`,age:32,address:`London, Park Lane no. ${l}`})),d=o(s()),a=o([]),p=e=>e.address,c=o({pageSize:30});function h(e){a.value=e}return(e,l)=>{const g=w("n-data-table");return _(),x(g,{columns:n(d),data:n(r),pagination:n(c),"row-key":p,style:{padding:"0 12px 16px 0"},"max-height":"100vh","onUpdate:checkedRowKeys":h},null,8,["columns","data","pagination"])}}},G={__name:"ProductTable",setup(m){const s=I(),r=()=>[{type:"selection",disabled(t){return t.name==="Edward King 3"}},{title:"\u540D\u7A31",key:"name"},{title:"\u5206\u985E",key:"category"},{title:"\u552E\u50F9",key:"price"},{title:"\u6703\u54E1\u50F9",key:"memberPrice"},{title:"VIP\u50F9",key:"vipPrice"},{title:"SVIP\u50F9\u9322",key:"svipPrice"},{title:"Action",key:"actions",render(t){return B(N,{strong:!0,tertiary:!0,size:"small",onClick:()=>l(t)},{default:()=>"Delete"})}}],d=o([]),a=o(r()),p=o([]),c=t=>t.id,h=o({pageSize:20});z(()=>{e()});async function e(){try{const t=await $fetch(`${s.public.apiBase}/${U}`),{data:k}=t;d.value=k}catch{}}function l(t){console.log(t)}function g(t){p.value=t}return(t,k)=>{const C=w("n-data-table");return _(),x(C,{columns:n(a),data:n(d),pagination:n(h),"row-key":c,style:{padding:"0 12px 16px 0"},"max-height":"100vh","onUpdate:checkedRowKeys":g},null,8,["columns","data","pagination"])}}},Z={__name:"OrderTable",setup(m){const s=()=>[{type:"selection",disabled(e){return e.name==="Edward King 3"}},{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"}],r=Array.from({length:46}).map((e,l)=>({name:`Order ${l}`,age:32,address:`London, Park Lane no. ${l}`})),d=o(s()),a=o([]),p=e=>e.address,c=o({pageSize:30});function h(e){a.value=e}return(e,l)=>{const g=w("n-data-table");return _(),x(g,{columns:n(d),data:n(r),pagination:n(c),"row-key":p,style:{padding:"0 12px 16px 0"},"max-height":"100vh","onUpdate:checkedRowKeys":h},null,8,["columns","data","pagination"])}}},j={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},q=i("path",{d:"M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.89 15.89 0 0 0-5.46-12A143 143 0 0 0 202.24 74z",fill:"currentColor"},null,-1),F=i("path",{d:"M481.92 53.3A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.31 143.31 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61z",fill:"currentColor"},null,-1),J=[q,F],Q=f({name:"Book",render:function(s,r){return _(),v("svg",j,J)}}),W={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},X=i("circle",{cx:"176",cy:"416",r:"32",fill:"currentColor"},null,-1),Y=i("circle",{cx:"400",cy:"416",r:"32",fill:"currentColor"},null,-1),ee=i("path",{d:"M456.8 120.78a23.92 23.92 0 0 0-18.56-8.78H133.89l-6.13-34.78A16 16 0 0 0 112 64H48a16 16 0 0 0 0 32h50.58l45.66 258.78A16 16 0 0 0 160 368h256a16 16 0 0 0 0-32H173.42l-5.64-32h241.66A24.07 24.07 0 0 0 433 284.71l28.8-144a24 24 0 0 0-5-19.93z",fill:"currentColor"},null,-1),ne=[X,Y,ee],te=f({name:"Cart",render:function(s,r){return _(),v("svg",W,ne)}}),oe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ae=i("circle",{cx:"256",cy:"256",r:"48",fill:"currentColor"},null,-1),ce=i("circle",{cx:"416",cy:"256",r:"48",fill:"currentColor"},null,-1),le=i("circle",{cx:"96",cy:"256",r:"48",fill:"currentColor"},null,-1),se=[ae,ce,le],$=f({name:"EllipsisHorizontal",render:function(s,r){return _(),v("svg",oe,se)}}),re={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ie=i("path",{d:"M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38c-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6z",fill:"currentColor"},null,-1),de=i("path",{d:"M432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75c1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480z",fill:"currentColor"},null,-1),ue=[ie,de],_e=f({name:"Person",render:function(s,r){return _(),v("svg",re,ue)}}),me=f({__name:"index",setup(m){const s=O(),r=S(),d=o(!0);function a(e){return()=>B(L,null,{default:()=>B(e)})}z(()=>{s.status.loggedIn||r.push({path:"/admin/login"})});const p=o([{label:"\u6703\u54E1\u7BA1\u7406",key:"account-management",icon:a(_e),disabled:!0,children:[{icon:a($),label:"\u6240\u6709\u7528\u6236",key:"account-management-all"}]},{label:"\u7522\u54C1\u7BA1\u7406",key:"product-management",icon:a(te),children:[{icon:a($),label:"\u6240\u6709\u7522\u54C1",key:"product-management-all"}]},{label:"\u8A02\u55AE\u7BA1\u7406",key:"order-management",icon:a(Q),children:[{icon:a($),label:"\u6240\u6709\u8A02\u55AE",key:"order-management-all"}]}]),c=o("");function h(e){console.log(e)}return(e,l)=>{const g=w("n-menu"),t=w("n-layout-sider"),k=D,C=G,K=Z,P=w("n-layout"),E=w("n-space"),R=V;return _(),x(R,null,{default:y(()=>[u(E,{vertical:""},{default:y(()=>[u(P,null,{default:y(()=>[u(P,{class:"sider-layout","has-sider":"",style:{height:"100vh","background-color":"#fff"}},{default:y(()=>[u(t,{bordered:"","show-trigger":"","collapse-mode":"width","collapsed-width":64,width:200,"content-style":"padding-left: 0;","native-scrollbar":!0,inverted:n(d)},{default:y(()=>[u(g,{value:n(c),"onUpdate:value":[l[0]||(l[0]=T=>H(c)?c.value=T:null),h],inverted:n(d),"collapsed-width":64,"collapsed-icon-size":22,options:n(p)},null,8,["value","inverted","options"])]),_:1},8,["inverted"]),b(u(k,null,null,512),[[A,n(c).includes("account-management")]]),b(u(C,null,null,512),[[A,n(c).includes("product-management")]]),b(u(K,null,null,512),[[A,n(c).includes("order-management")]])]),_:1})]),_:1})]),_:1})]),_:1})}}});const fe=M(me,[["__scopeId","data-v-c742cc3a"]]);export{fe as default};
