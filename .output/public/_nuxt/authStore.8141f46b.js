import{s as t}from"./entry.b2c13a7d.js";const o={status:{loggedIn:!1},user:{}},r=t({id:"auth",state:()=>o,getters:{userName:e=>{var s;return(s=e.user)==null?void 0:s.username}},actions:{updateUser(e){this.user=e},loginSuccess(e="",s=""){this.status.loggedIn=!0,console.log("abc, ",s),localStorage.setItem("accessToken",e),localStorage.setItem("refreshToken",s)},logout(){this.status.loggedIn=!1,this.user={},localStorage.removeItem("accessToken")}}});export{r as u};