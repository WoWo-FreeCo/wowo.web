import{b as m}from"./entry.c4b0373b.js";import{u as e}from"./cookie.dcf567c0.js";import{o as n,_ as u,Z as i}from"./swiper-vue.6d0a2b42.js";const S={__name:"cvs_callback",setup(d){const s=m(),t=e("storeid"),o=e("storename"),a=e("storeaddress"),r=e("outside"),c=e("ship"),l=e("TempVar");return n(()=>{s.success("\u5DF2\u53D6\u5F97\u5E97\u5BB6\u8CC7\u8A0A\uFF0C\u7DB2\u9801\u5373\u5C07\u95DC\u9589..."),setTimeout(()=>{localStorage.setItem("storeid",t.value),localStorage.setItem("storename",o.value),localStorage.setItem("storeaddress",a.value),localStorage.setItem("outside",r.value),localStorage.setItem("ship",c.value),localStorage.setItem("TempVar",l.value),window.close()},1250)}),(p,_)=>(i(),u("div"))}};export{S as default};