(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2482],{4429:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/ContactForm",function(){return s(39)}])},39:function(e,a,s){"use strict";s.r(a);var n=s(5893),t=s(7294),l=s(6154),c=s(1163),m=s.n(c);let o=()=>{let[e,a]=(0,t.useState)(!1),[s,c]=(0,t.useState)(""),[o,r]=(0,t.useState)({name:"",email:"",type:2,message:""}),[i,d]=(0,t.useState)({}),u=e=>{let{name:a,value:s}=e.target;r(e=>({...e,[a]:s}))},p=()=>{a(!1)},h=e=>{e.preventDefault(),d({padding:"1rem 0rem",display:"block",color:"red"}),o.name?o.email?o.message?l.Z.post("https://smca.ezrankings.in/react-backend/contacts.php",o,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{let s=e.data;s&&(r({name:"",email:"",message:""}),m().push("/thankyou"),c("Submit Successfully."),a(!0),d({padding:"1rem 0rem",display:"block",color:"#46c737"}))}).catch(e=>{}):(c("Message can not be blank."),a(!0)):(c("Email can not be blank."),a(!0)):(c("Name can not be blank."),a(!0))};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("form",{onSubmit:h,className:"form-inline",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-12",children:e?(0,n.jsxs)("span",{style:i,children:[s,"  ",(0,n.jsx)("span",{onClick:p,children:(0,n.jsx)("i",{class:"fa fa-times","aria-hidden":"true"})})]}):""}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"text",className:"form-control contactForm",onChange:u,value:o.name,name:"name",placeholder:"Name"})})}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"email",className:"form-control contactForm",onChange:u,value:o.email,name:"email",placeholder:"Email"})})}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"text",className:"form-control contactForm",onChange:u,value:o.message,name:"message",placeholder:"Message"})})}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsx)("div",{className:"form-group mt-2",children:(0,n.jsx)("button",{className:"btn-border2",type:"submit",children:"Send"})})})]})})})};a.default=o},1163:function(e,a,s){e.exports=s(6885)}},function(e){e.O(0,[6154,9774,2888,179],function(){return e(e.s=4429)}),_N_E=e.O()}]);