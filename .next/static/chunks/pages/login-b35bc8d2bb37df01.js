(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return a(6052)}])},6052:function(e,t,a){"use strict";a.r(t);var s=a(5893),l=a(7294),r=a(6154),n=a(9008),o=a.n(n);a(1664);var i=a(1163),c=a.n(i);let m=()=>{let[e,t]=(0,l.useState)(0),[a,n]=(0,l.useState)("login"),[i,m]=(0,l.useState)(!1),[d,x]=(0,l.useState)(!1),[u,h]=(0,l.useState)(""),[p,g]=(0,l.useState)({email:"",type:null,password:""}),[f,j]=(0,l.useState)({}),y=e=>{let{name:t,value:a}=e.target;g(e=>({...e,[t]:a}))};(0,l.useEffect)(()=>{localStorage.userid&&c().push("/profile")},[]);let b=()=>{m(!1)},w=e=>{e.preventDefault(),j({padding:"1rem 0rem",display:"block",color:"red"}),p&&p.email&&x(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)),p.email?p.password?r.Z.post("https://smca.ezrankings.in/dashboard/login.php",p,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{let t=e.data;e&&e.data&&e.data.error&&e.data.error.length>0?(h(e.data.error),m(!0)):t&&(g({email:"",password:""}),h(""),j({padding:"1rem 0rem",display:"block",color:"#46c737"}),t.userData&&(t.userData[0],localStorage.clear(),localStorage.setItem("companyname",t.userData[0].companyname),localStorage.setItem("title",t.userData[0].title),localStorage.setItem("name",t.userData[0].name),localStorage.setItem("email",t.userData[0].email),localStorage.setItem("logo",t.userData[0].logo),localStorage.setItem("userid",t.userData[0].userid),localStorage.setItem("image",t.userData[0].image),localStorage.setItem("type",t.userData[0].type),localStorage.setItem("contactno",t.userData[0].contactno),localStorage.setItem("about",t.userData[0].about),localStorage.setItem("location",t.userData[0].location),c().push("/profile")))}).catch(e=>{}):(h("Password can not be blank."),m(!0)):(h("Email can not be blank."),m(!0))};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o(),{children:[(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("link",{href:"#",rel:"shortcut icon"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("meta",{name:"description",content:""}),(0,s.jsx)("meta",{name:"keywords",content:""}),(0,s.jsx)("meta",{name:"author",content:""}),(0,s.jsx)("title",{children:"Reseller Dashboard"}),(0,s.jsx)("link",{rel:"dns-prefetch",href:"//developers.google.com"}),(0,s.jsx)("link",{rel:"dns-prefetch",href:"//maps.googleapis.com"})]}),(0,s.jsx)("div",{className:"container sm:px-10 login",children:(0,s.jsxs)("div",{className:"block xl:grid grid-cols-2 gap-4",children:[(0,s.jsxs)("div",{className:"hidden xl:flex flex-col min-h-screen",children:[(0,s.jsx)("a",{href:"",className:"-intro-x flex items-center pt-5",children:(0,s.jsx)("img",{alt:"",src:"https://smca.ezrankings.in/dashboard/images/logo.png"})}),(0,s.jsxs)("div",{className:"my-auto",children:[(0,s.jsx)("img",{alt:"",className:"-intro-x w-1/2 -mt-16",src:"https://smca.ezrankings.in/dashboard/images/Frame.png"}),(0,s.jsxs)("div",{className:"-intro-x text-white font-medium text-4xl leading-tight mt-10",children:["A few more clicks to ",(0,s.jsx)("br",{})," sign in to your account."]}),(0,s.jsx)("div",{className:"-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400",children:"Manage all your e-commerce accounts in one place"})]})]}),(0,s.jsx)("div",{className:"h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0",children:(0,s.jsx)("form",{onSubmit:w,children:(0,s.jsxs)("div",{className:"my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto",children:[(0,s.jsx)("h2",{className:"intro-x font-bold text-xxl xl:text-3xl text-center xl:text-left",children:"Sign In"}),(0,s.jsx)("div",{className:"col-md-12",children:i?(0,s.jsxs)("span",{style:f,children:[u,"  ",(0,s.jsx)("span",{onClick:b,children:(0,s.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})})]}):""}),(0,s.jsx)("div",{className:"intro-x mt-2 text-slate-400 xl:hidden text-center",children:"A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place"}),(0,s.jsxs)("div",{className:"intro-x mt-8",children:[(0,s.jsx)("input",{type:"text",className:"intro-x login__input form-control py-3 px-4 block",placeholder:"Email",onChange:y,value:p.email,name:"email"}),(0,s.jsx)("input",{type:"password",className:"intro-x login__input form-control py-3 px-4 block mt-4",placeholder:"Password",onChange:y,value:p.password,name:"password"})]}),(0,s.jsxs)("div",{className:"intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4",children:[(0,s.jsxs)("div",{className:"flex items-center mr-auto",children:[(0,s.jsx)("input",{id:"remember-me",type:"checkbox",className:"form-check-input border mr-2"}),(0,s.jsx)("label",{className:"cursor-pointer select-none",htmlFor:"remember-me",children:"Remember me"})]}),(0,s.jsx)("a",{href:"",children:"Forgot Password?"})]}),(0,s.jsx)("div",{className:"intro-x mt-5 xl:mt-8 text-center xl:text-left",children:(0,s.jsx)("button",{className:"btn btn-primary py-3 px-4 w-full  xl:mr-3 align-top",type:"submit",children:"Login"})}),(0,s.jsxs)("div",{className:"intro-x mt-10 xl:mt-24 text-slate-600 dark:text-slate-500 text-center xl:text-left",children:["By signin up, you agree to our ",(0,s.jsx)("a",{className:"text-primary dark:text-slate-200",href:"",children:"Terms and Conditions"})," & ",(0,s.jsx)("a",{className:"text-primary dark:text-slate-200",href:"",children:"Privacy Policy"})]})]})})})]})})]})};t.default=m}},function(e){e.O(0,[664,45,774,888,179],function(){return e(e.s=6429)}),_N_E=e.O()}]);