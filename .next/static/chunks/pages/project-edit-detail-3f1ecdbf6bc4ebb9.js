(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[928],{4297:function(e,a,s){"use strict";s.d(a,{Z:function(){return n}});var t=s(7294),l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=(e,a)=>{let s=(0,t.forwardRef)(({color:s="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:c,children:o,...d},m)=>(0,t.createElement)("svg",{ref:m,...l,width:n,height:n,stroke:s,strokeWidth:c?24*Number(i)/Number(n):i,className:`lucide lucide-${r(e)}`,...d},[...a.map(([e,a])=>(0,t.createElement)(e,a)),...(Array.isArray(o)?o:[o])||[]]));return s.displayName=`${e}`,s}},2047:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project-edit-detail",function(){return s(4255)}])},2580:function(e,a,s){"use strict";s.r(a);var t=s(5893),l=s(1664),r=s.n(l),n=s(7294),i=s(1163),c=s.n(i);let o=()=>{let[e,a]=(0,n.useState)(""),[s,l]=(0,n.useState)(!0),[i,o]=(0,n.useState)({users:!1}),d=()=>{localStorage.clear(),l(!1),c().push("/")},m=()=>{document.getElementById("mySidenav").style.width="0"},u=()=>{document.getElementById("mySidenav").style.width="250px"};return(0,n.useEffect)(()=>{localStorage.userid?(localStorage&&localStorage.logo&&a(localStorage.logo),localStorage&&localStorage.length>0&&localStorage.type&&"admin"==localStorage.type&&o({users:!0})):c().push("/")},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"sider-menu",children:[(0,t.jsx)("div",{className:"side-logo",children:(0,t.jsx)(r(),{href:"/dashboard",children:(0,t.jsx)("img",{alt:"",src:e})})}),(0,t.jsxs)("div",{id:"mySidenav",className:"sidenav",children:[(0,t.jsx)(r(),{href:"#",className:"closebtn",onClick:m,children:"\xd7"}),(0,t.jsx)(r(),{href:"/dashboard",children:"Dashboard"}),(0,t.jsx)(r(),{href:"/projectList",children:"Project details & Reports"}),(0,t.jsx)(r(),{href:"/reseller-benefits",children:"Reseller Benefits"}),(0,t.jsx)(r(),{href:"/learning-resources",children:"Learning Resources"}),(0,t.jsx)(r(),{href:"/profile",children:"Profile"}),(0,t.jsx)(r(),{href:"/users",children:"Users"}),(0,t.jsx)(r(),{href:"#",onClick:d,children:"Signout"})]}),(0,t.jsx)("span",{onClick:u,children:"☰"})]})})};a.default=o},4607:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return v}});var t=s(5893),l=s(7294),r=s(1664),n=s.n(r),i=s(1163),c=s.n(i),o=s(4297);let d=(0,o.Z)("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),m=(0,o.Z)("BookMarked",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2",key:"13o6vz"}]]),u=(0,o.Z)("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),h=(0,o.Z)("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),p=(0,o.Z)("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),j=(0,o.Z)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),x=(0,o.Z)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),g=e=>{let[a,s]=(0,l.useState)(!0),[r,o]=(0,l.useState)(""),[g,v]=(0,l.useState)({users:!1}),f=(0,i.useRouter)(),y=()=>{localStorage.clear(),s(!1),c().push("/")};return(0,l.useEffect)(()=>{localStorage.userid?(localStorage&&localStorage.logo&&o(localStorage.logo),localStorage&&localStorage.length>0&&localStorage.type&&"admin"==localStorage.type&&v({users:!0})):c().push("/")},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("nav",{className:"side-nav",children:[(0,t.jsx)(n(),{href:"#",className:"intro-x flex items-center pl-5 pt-4",children:(0,t.jsx)("img",{alt:"",src:r})}),(0,t.jsx)("div",{className:"side-nav__devider my-6"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"/dashboard",className:"/dashboard"==f.pathname?"side-menu side-menu--active":"side-menu",children:[(0,t.jsx)("div",{className:"side-menu__icon",children:(0,t.jsx)(d,{size:16})}),(0,t.jsx)("div",{className:"side-menu__title",children:"Dashboard"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"/projectList",className:"/projectList"==f.pathname?"side-menu side-menu--active":"side-menu",children:[(0,t.jsx)("div",{className:"side-menu__icon",children:(0,t.jsx)(m,{size:16})}),(0,t.jsx)("div",{className:"side-menu__title",children:"Project details & Reports"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"/reseller-benefits",className:"/reseller-benefits"==f.pathname?"side-menu side-menu--active":"side-menu",children:[(0,t.jsx)("div",{className:"side-menu__icon",children:(0,t.jsx)(u,{size:16})}),(0,t.jsx)("div",{className:"side-menu__title",children:"Reseller Benefits"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"/learning-resources",className:"/learning-resources"==f.pathname?"side-menu side-menu--active":"side-menu",children:[(0,t.jsx)("div",{className:"side-menu__icon",children:(0,t.jsx)(h,{size:16})}),(0,t.jsx)("div",{className:"side-menu__title",children:"Learning Resources"})]})}),(0,t.jsx)("li",{className:"side-nav__devider my-6"})]}),(0,t.jsxs)("ul",{className:"bottom-list",children:[(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"/profile",className:"/profile"==f.pathname?"side-menu side-menu--active":"side-menu",children:[(0,t.jsx)("div",{className:"side-menu__icon",children:(0,t.jsx)(p,{size:16})}),(0,t.jsx)("div",{className:"side-menu__title",children:"Profile"})]})}),g.users&&(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"/users",className:"/users"==f.pathname?"side-menu side-menu--active":"side-menu",children:[(0,t.jsx)("div",{className:"side-menu__icon",children:(0,t.jsx)(j,{size:16})}),(0,t.jsx)("div",{className:"side-menu__title",children:"Users"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"#",onClick:y,className:"side-menu",children:[(0,t.jsx)("div",{className:"side-menu__icon",children:(0,t.jsx)(x,{size:16})}),(0,t.jsx)("div",{className:"side-menu__title",children:"SignOut"})]})})]})]})})};var v=g},8842:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return d}});var t=s(5893),l=s(7294),r=s(4297);let n=(0,r.Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);var i=s(1664),c=s.n(i);let o=e=>{let[a,s]=(0,l.useState)("");return(0,l.useEffect)(()=>{localStorage&&localStorage.image&&s(localStorage.image)},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"top-bar",children:[(0,t.jsx)("nav",{className:"-intro-x mr-auto hidden sm:flex",children:(0,t.jsx)("ol",{className:"breadcrumb",children:(0,t.jsxs)("li",{className:"breadcrumb-item active",children:["Welcome to ","Reseller dashboard."]})})}),(0,t.jsx)("div",{className:"intro-x relative mr-3 sm:mr-6",children:(0,t.jsx)(c(),{className:"notification sm:hidden",href:"#",children:(0,t.jsx)(n,{className:"search__icon dark:text-slate-500"})})}),(0,t.jsx)("div",{className:"intro-x dropdown w-8 h-8",children:(0,t.jsx)("div",{className:"dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in",children:(0,t.jsx)(c(),{href:"/profile",children:(0,t.jsx)("img",{alt:"",src:a})})})})]})})};var d=o},4255:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return m}});var t=s(5893),l=s(7294),r=s(9008),n=s.n(r),i=s(4607),c=s(8842),o=s(6154),d=s(2580);function m(){let[e,a]=(0,l.useState)("py-5"),[s,r]=(0,l.useState)(!1),[m,u]=(0,l.useState)({}),[h,p]=(0,l.useState)(""),[j,x]=(0,l.useState)(null),[g,v]=(0,l.useState)([]),[f,y]=(0,l.useState)({}),[N,S]=(0,l.useState)({companyname:"",title:"",name:"",email:"",contactno:"",about:"",location:"",image:"",logo:"",userid:""}),[b,k]=(0,l.useState)([]),w=async()=>{o.Z.get("https://smca.ezrankings.in/dashboard/usersD.php?page=").then(e=>{let a=e.data.map(e=>({id:e.userid,name:e.name,email:e.email,contactno:e.contactno,companyname:e.companyname,title:e.title,logo:e.logo,type:e.type,status:"1"==e.status?"Active":"Inactive",image:e.image}));k(a)}).catch(e=>{})},[_,z]=(0,l.useState)(0),[D,A]=(0,l.useState)({}),[U,C]=(0,l.useState)(""),[P,L]=(0,l.useState)(!1),F=()=>{r(!1)},I=e=>{let{name:a,value:s}=e.target;y(e=>({...e,[a]:s}))},O=e=>{e&&o.Z.get("https://smca.ezrankings.in/dashboard/getreport.php?url=".concat(e)).then(e=>{A({id:e.data[0].id?e.data[0].id:null,serviceName:e.data[0].serviceId?e.data[0].serviceId:null,userName:e.data[0].userName?e.data[0].userName:null,serviceId:e.data[0].serviceName?e.data[0].serviceName:null,dwlUrl:e.data[0].dwlUrl?e.data[0].dwlUrl:null,projectUrl:e.data[0].projectUrl?e.data[0].projectUrl:null,planOption:e.data[0].planOption?e.data[0].planOption:null,billingAmt:e.data[0].billingAmt?e.data[0].billingAmt:null,startDate:e.data[0].startDate?e.data[0].startDate:null,reportingDate:e.data[0].reportingDate?e.data[0].reportingDate:null,paymentStatus:e.data[0].paymentStatus?e.data[0].paymentStatus:null,projectStatus:e.data[0].projectStatus?e.data[0].projectStatus:null,userAssign:e.data[0].userAssign?e.data[0].userAssign:null,userid:localStorage&&localStorage.userid?localStorage.userid:""}),y({id:e.data[0].id?e.data[0].id:null,serviceName:e.data[0].serviceId?e.data[0].serviceId:null,userName:e.data[0].userName?e.data[0].userName:null,serviceId:e.data[0].serviceName?e.data[0].serviceName:null,dwlUrl:e.data[0].dwlUrl?e.data[0].dwlUrl:null,projectUrl:e.data[0].projectUrl?e.data[0].projectUrl:null,planOption:e.data[0].planOption?e.data[0].planOption:null,billingAmt:e.data[0].billingAmt?e.data[0].billingAmt:null,startDate:e.data[0].startDate?e.data[0].startDate:null,reportingDate:e.data[0].reportingDate?e.data[0].reportingDate:null,paymentStatus:e.data[0].paymentStatus?e.data[0].paymentStatus:null,projectStatus:e.data[0].projectStatus?e.data[0].projectStatus:null,userAssign:e.data[0].userAssign?e.data[0].userAssign:null,userid:localStorage&&localStorage.userid?localStorage.userid:""}),L(!0)}).catch(e=>{})},R=e=>{e.preventDefault(),new FormData,u({padding:"1rem 0rem",display:"block",color:"red"}),f.id?f.projectUrl?f.dwlUrl?f.serviceName?f.userAssign?f.planOption?f.billingAmt?f.startDate?f.reportingDate?f.paymentStatus?f.projectStatus?o.Z.post("https://smca.ezrankings.in/dashboard/edit-report.php",f,{}).then(e=>{e.data,e&&e.data&&e.data.error&&e.data.error.length>0?(p(e.data.error),r(!0)):e&&e.data&&e.data.status&&e.data.msg.length>0&&(p("Update Successfully."),r(!0),u({padding:"1rem 0rem",display:"block",color:"#46c737"}))}).catch(e=>{}):(p("Please select project status."),r(!0)):(p("Please select payment status."),r(!0)):(p("Report date can not be blank."),r(!0)):(p("Start date can not be blank."),r(!0)):(p("Billing amount can not be blank."),r(!0)):(p("Plan opted can not be blank."),r(!0)):(p("Please select user."),r(!0)):(p("Please select Service name."),r(!0)):(p("Download url can not be blank."),r(!0)):(p("Project url can not be blank."),r(!0)):(p("Invalid data."),r(!0))},Z=async()=>{o.Z.get("https://smca.ezrankings.in/dashboard/services.php").then(e=>{let a=e.data.serviceData.map(e=>({id:e.id,name:e.service_name,status:e.status}));v(a)}).catch(e=>{})};return(0,l.useEffect)(()=>{a("py-5"),localStorage.title&&localStorage.email&&localStorage.logo&&localStorage.companyname&&localStorage.userid&&localStorage.name&&S({companyname:localStorage.companyname,title:localStorage.title,name:localStorage.name,email:localStorage.email,contactno:localStorage.contactno?localStorage.contactno:"",about:localStorage.about?localStorage.about:"",location:localStorage.location?localStorage.location:"",image:localStorage.image?localStorage.image:"",logo:localStorage.logo,userid:localStorage.userid}),localStorage.projectId&&C(localStorage.projectId),O(localStorage.projectId),Z(),w()},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n(),{children:[(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsx)("link",{href:"#",rel:"shortcut icon"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("meta",{name:"description",content:""}),(0,t.jsx)("meta",{name:"keywords",content:""}),(0,t.jsx)("meta",{name:"author",content:""}),(0,t.jsx)("title",{children:"Edit Report Data"}),(0,t.jsx)("link",{rel:"dns-prefetch",href:"//developers.google.com"}),(0,t.jsx)("link",{rel:"dns-prefetch",href:"//maps.googleapis.com"}),(0,t.jsx)("script",{src:"https://kit.fontawesome.com/fbadad80a0.js",crossOrigin:"anonymous"}),(0,t.jsx)("script",{src:"https://smca.ezrankings.in/dashboard/js/markerclusterer.js"}),(0,t.jsx)("script",{src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&libraries=places"}),(0,t.jsx)("script",{src:"https://smca.ezrankings.in/dashboard/js/app.js"}),(0,t.jsx)("script",{src:"https://smca.ezrankings.in/dashboard/js/map.js"}),(0,t.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js"}),(0,t.jsx)("script",{src:"//cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"})]}),(0,t.jsx)(d.default,{}),(0,t.jsxs)("div",{className:"flex mt-[4.7rem] md:mt-0",children:[(0,t.jsx)(i.default,{}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)(c.default,{}),(0,t.jsx)("div",{className:"flex items-center mt-8",children:(0,t.jsx)("h2",{className:"intro-y text-lg font-medium mr-auto",children:"Add New Report"})}),(0,t.jsx)("div",{className:"intro-y box mt-5 add-new-report",children:(0,t.jsxs)("div",{className:"border-slate-200/60 dark:border-darkmode-400",children:[s?(0,t.jsxs)("span",{style:m,children:[h,"  ",(0,t.jsx)("span",{onClick:F,children:(0,t.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})})]}):"",(0,t.jsxs)("form",{onSubmit:R,children:[(0,t.jsxs)("div",{className:"grid grid-cols-12 gap-4 gap-y-5 mt-5",children:[(0,t.jsxs)("div",{className:"intro-y col-span-12 sm:col-span-6",children:[(0,t.jsx)("label",{htmlFor:"input-wizard-2",className:"form-label",children:"Project URL"}),(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"www.abc.com",onChange:I,name:"projectUrl",value:f.projectUrl})]}),(0,t.jsxs)("div",{className:"intro-y col-span-12 sm:col-span-6",children:[(0,t.jsx)("label",{htmlFor:"input-wizard-2",className:"form-label",children:"Download Link URL"}),(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"www.abc.com",onChange:I,name:"dwlUrl",value:f.dwlUrl})]}),(0,t.jsxs)("div",{className:"intro-y col-span-12 sm:col-span-6",children:[(0,t.jsx)("label",{htmlFor:"input-wizard-1",className:"form-label",children:"Service Name"}),(0,t.jsxs)("select",{className:"form-select",onChange:I,name:"serviceName",children:[f.serviceName==D.serviceName&&(0,t.jsx)("option",{value:f.serviceName,children:f.serviceId}),g&&g.length>0&&g.map((e,a)=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("option",{value:e.id,children:e.name},a)}))]})]}),(0,t.jsxs)("div",{className:"intro-y col-span-12 sm:col-span-6",children:[(0,t.jsx)("label",{htmlFor:"input-wizard-3",className:"form-label",children:"User List"}),(0,t.jsxs)("select",{className:"form-select",onChange:I,name:"userAssign",children:[f.userName==D.userName&&(0,t.jsx)("option",{value:f.userAssign,select:"selected",children:f.userName}),b&&b.length>0&&b.map((e,a)=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("option",{value:e.id,children:e.name},a)}))]})]}),(0,t.jsxs)("div",{className:"intro-y col-span-12 sm:col-span-6",children:[(0,t.jsx)("label",{htmlFor:"input-wizard-3",className:"form-label",children:"Plan Opted"}),(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"123",onChange:I,name:"planOption",value:f.planOption})]}),(0,t.jsxs)("div",{className:"intro-y col-span-12 sm:col-span-6",children:[(0,t.jsx)("label",{htmlFor:"input-wizard-3",className:"form-label",children:"Billing Amount"}),(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"$ ",onChange:I,name:"billingAmt",value:f.billingAmt})]}),(0,t.jsxs)("div",{className:"intro-y col-span-12 sm:col-span-6",children:[(0,t.jsx)("label",{htmlFor:"input-wizard-4",className:"form-label",children:"Start Date"}),(0,t.jsx)("input",{type:"date",className:"form-control",placeholder:"********",onChange:I,name:"startDate",value:f.startDate})]}),(0,t.jsxs)("div",{className:"intro-y col-span-12 sm:col-span-6",children:[(0,t.jsx)("label",{htmlFor:"input-wizard-4",className:"form-label",children:"Reporting Date"}),(0,t.jsx)("input",{type:"date",className:"form-control",placeholder:"********",onChange:I,name:"reportingDate",value:f.reportingDate})]}),(0,t.jsxs)("div",{className:"intro-y col-span-12 sm:col-span-6",children:[(0,t.jsx)("label",{htmlFor:"input-wizard-4",className:"form-label",children:"Payment Status"}),(0,t.jsxs)("select",{className:"form-select",onChange:I,name:"paymentStatus",children:[(0,t.jsx)("option",{value:f.paymentStatus,select:"selected",children:f.paymentStatus}),(0,t.jsx)("option",{value:"Paid",children:"Paid"}),(0,t.jsx)("option",{value:"Due",children:"Due"})]})]}),(0,t.jsxs)("div",{className:"intro-y col-span-12 sm:col-span-6",children:[(0,t.jsx)("label",{htmlFor:"input-wizard-4",className:"form-label",children:"Project Status"}),(0,t.jsx)("div",{className:"form-check",children:(0,t.jsxs)("select",{className:"form-select",onChange:I,name:"projectStatus",children:[(0,t.jsx)("option",{value:f.projectStatus,select:"selected",children:f.projectStatus}),(0,t.jsx)("option",{value:"Active",children:"Active"}),(0,t.jsx)("option",{value:"Paused",children:"Paused"})]})})]})]}),(0,t.jsx)("div",{className:"intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5",children:(0,t.jsx)("button",{className:"btn btn-primary w-24 ml-2",type:"submit",children:"Update"})})]})]})})]})]})]})}},1163:function(e,a,s){e.exports=s(6885)}},function(e){e.O(0,[664,237,774,888,179],function(){return e(e.s=2047)}),_N_E=e.O()}]);