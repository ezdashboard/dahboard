(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{4297:function(e,s,i){"use strict";i.d(s,{Z:function(){return r}});var n=i(7294),t={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r=(e,s)=>{let i=(0,n.forwardRef)(({color:i="currentColor",size:r=24,strokeWidth:l=2,absoluteStrokeWidth:c,children:d,...u},o)=>(0,n.createElement)("svg",{ref:o,...t,width:r,height:r,stroke:i,strokeWidth:c?24*Number(l)/Number(r):l,className:`lucide lucide-${a(e)}`,...u},[...s.map(([e,s])=>(0,n.createElement)(e,s)),...(Array.isArray(d)?d:[d])||[]]));return i.displayName=`${e}`,i}},7231:function(e,s,i){"use strict";i.d(s,{Z:function(){return t}});var n=i(4297);let t=(0,n.Z)("BookMarked",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2",key:"13o6vz"}]])},1197:function(e,s,i){"use strict";i.d(s,{Z:function(){return t}});var n=i(4297);let t=(0,n.Z)("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]])},5283:function(e,s,i){"use strict";i.d(s,{Z:function(){return t}});var n=i(4297);let t=(0,n.Z)("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]])},9503:function(e,s,i){"use strict";i.d(s,{Z:function(){return t}});var n=i(4297);let t=(0,n.Z)("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]])},8051:function(e,s,i){"use strict";i.d(s,{Z:function(){return t}});var n=i(4297);let t=(0,n.Z)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]])},5162:function(e,s,i){"use strict";i.d(s,{Z:function(){return t}});var n=i(4297);let t=(0,n.Z)("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]])},9525:function(e,s,i){"use strict";i.d(s,{Z:function(){return t}});var n=i(4297);let t=(0,n.Z)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])},3042:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/SideBar",function(){return i(6358)}])},6358:function(e,s,i){"use strict";i.r(s);var n=i(5893),t=i(7294),a=i(1664),r=i.n(a),l=i(1163),c=i.n(l),d=i(1197),u=i(7231),o=i(5162),h=i(9503),m=i(5283),x=i(9525),p=i(8051);let v=e=>{let[s,i]=(0,t.useState)(!0),[a,v]=(0,t.useState)(""),[f,j]=(0,t.useState)({users:!1}),_=(0,l.useRouter)(),y=()=>{localStorage.clear(),i(!1),c().push("/")};return(0,t.useEffect)(()=>{localStorage.userid&&localStorage.tokenAuth?(localStorage&&localStorage.logo&&v(localStorage.logo),localStorage&&localStorage.length>0&&localStorage.type&&"admin"==localStorage.type&&j({users:!0})):c().push("/")},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("nav",{className:"side-nav",children:[(0,n.jsx)(r(),{href:"#",className:"intro-x flex items-center pl-5 pt-4",children:(0,n.jsx)("img",{alt:"",src:a})}),(0,n.jsx)("div",{className:"side-nav__devider my-6"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(r(),{href:"/dashboard",className:"/dashboard"==_.pathname?"side-menu side-menu--active":"side-menu",children:[(0,n.jsx)("div",{className:"side-menu__icon",children:(0,n.jsx)(d.Z,{size:16})}),(0,n.jsx)("div",{className:"side-menu__title",children:"Dashboard"})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(r(),{href:"/projectList",className:"/projectList"==_.pathname?"side-menu side-menu--active":"side-menu",children:[(0,n.jsx)("div",{className:"side-menu__icon",children:(0,n.jsx)(u.Z,{size:16})}),(0,n.jsx)("div",{className:"side-menu__title",children:"Project details & Reports"})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(r(),{href:"/reseller-benefits",className:"/reseller-benefits"==_.pathname?"side-menu side-menu--active":"side-menu",children:[(0,n.jsx)("div",{className:"side-menu__icon",children:(0,n.jsx)(o.Z,{size:16})}),(0,n.jsx)("div",{className:"side-menu__title",children:"Reseller Benefits"})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(r(),{href:"/learning-resources",className:"/learning-resources"==_.pathname?"side-menu side-menu--active":"side-menu",children:[(0,n.jsx)("div",{className:"side-menu__icon",children:(0,n.jsx)(h.Z,{size:16})}),(0,n.jsx)("div",{className:"side-menu__title",children:"Learning Resources"})]})}),(0,n.jsx)("li",{className:"side-nav__devider my-6"})]}),(0,n.jsxs)("ul",{className:"bottom-list",children:[(0,n.jsx)("li",{children:(0,n.jsxs)(r(),{href:"/profile",className:"/profile"==_.pathname?"side-menu side-menu--active":"side-menu",children:[(0,n.jsx)("div",{className:"side-menu__icon",children:(0,n.jsx)(m.Z,{size:16})}),(0,n.jsx)("div",{className:"side-menu__title",children:"Profile"})]})}),f.users&&(0,n.jsx)("li",{children:(0,n.jsxs)(r(),{href:"/users",className:"/users"==_.pathname?"side-menu side-menu--active":"side-menu",children:[(0,n.jsx)("div",{className:"side-menu__icon",children:(0,n.jsx)(x.Z,{size:16})}),(0,n.jsx)("div",{className:"side-menu__title",children:"Users"})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(r(),{href:"#",onClick:y,className:"side-menu",children:[(0,n.jsx)("div",{className:"side-menu__icon",children:(0,n.jsx)(p.Z,{size:16})}),(0,n.jsx)("div",{className:"side-menu__title",children:"SignOut"})]})})]})]})})};s.default=v},1163:function(e,s,i){e.exports=i(6885)}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=3042)}),_N_E=e.O()}]);