"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5301],{7012:function(e,a,s){s.r(a),s.d(a,{default:function(){return t}});var l=s(5893),i=s(7294);let c=e=>{let[a,s]=(0,i.useState)(0),c=e=>{a===e?s(null):s(e)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{className:"faq-section",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col-md-12",children:[(0,l.jsx)("h2",{className:"faq-title",children:"Frequently Asked Questions (FAQs)"}),(0,l.jsx)("div",{className:"accordion",id:"accordionExample",itemScope:"",itemProp:"mainEntity",itemType:"https://schema.org/Question",children:e.faqData&&e.faqData.length>0&&e.faqData.map((e,s)=>(0,l.jsxs)("div",{className:"accordion-item",children:[(0,l.jsx)("h2",{className:"accordion-header",id:"headingOne"+s,itemProp:e.title,children:(0,l.jsxs)("button",{className:a===s?"accordion-button collapsed openDesc":"accordion-button collapsed",type:"button","data-bs-toggle":"collapseOne"+s,"data-bs-target":"#collapseOne"+s,"aria-controls":"collapseOne"+s,onClick:()=>c(s),children:[e.status,"Q.",s+1," ",e.title]})}),(0,l.jsx)("div",{id:"collapseOne"+s,"aria-labelledby":"headingOne"+s,"data-bs-parent":"#accordionExample",itemScope:"",itemProp:e.description,itemType:"https://schema.org/Answer",children:(0,l.jsx)("div",{className:a===s?"accordion-body":"",children:a===s&&(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:e.description}})})})]},s))})]})})})})})};var t=c},1698:function(e,a,s){s.r(a);var l=s(5893),i=s(7294),c=s(6154);let t=()=>{let[e,a]=(0,i.useState)(!1),[s,t]=(0,i.useState)(""),[n,r]=(0,i.useState)({name:"",email:"",message:""}),[d,o]=(0,i.useState)({}),m=e=>{let{name:a,value:s}=e.target;r(e=>({...e,[a]:s}))},h=()=>{a(!1)},p=e=>{e.preventDefault(),o({padding:"1rem 0rem",display:"block",color:"red"}),n.name?n.email?n.message?c.Z.post("https://smca.ezrankings.in/react-backend/contacts.php",n,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{let s=e.data;s&&(r({name:"",email:"",message:""}),t("Submit Successfully."),a(!0),o({padding:"1rem 0rem",display:"block",color:"#46c737"}))}).catch(e=>{}):(t("Message can not be blank."),a(!0)):(t("Email can not be blank."),a(!0)):(t("Name can not be blank."),a(!0))};return(0,l.jsx)("section",{className:"form-section pt-0",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h2",{children:"Great ideas always start as conversations."}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("form",{onSubmit:p,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-12",children:e?(0,l.jsxs)("span",{style:d,children:[s,"  ",(0,l.jsx)("span",{onClick:h,children:(0,l.jsx)("i",{class:"fa fa-times","aria-hidden":"true"})})]}):""}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:n.name,name:"name",placeholder:"Name"})})}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:n.email,name:"email",placeholder:"Email"})})}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:n.message,name:"message",placeholder:"Message"})})}),(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"form-group mt-4",children:(0,l.jsx)("button",{className:"btn-border2",type:"submit",children:"Send"})})})]})})})})]})})};a.default=t},3087:function(e,a,s){s.r(a);var l=s(5893),i=s(7294),c=s(1971),t=s(6154);s(5675);var n=s(1698),r=s(7012);let d=()=>{let[e,a]=(0,i.useState)(!1),[s,d]=(0,i.useState)([]),[o,m]=(0,i.useState)([]),[h,p]=(0,i.useState)(1),[x,j]=(0,i.useState)([]),u=()=>{p(h+1)},g=async e=>{t.Z.get("https://smca.ezrankings.in/react-backend/portData.php?page=".concat(e)).then(e=>{let a=e.data.gallery&&e.data.gallery.length>0&&e.data.gallery.map(e=>({id:e.id,alt:e.alt,image:e.image})),s=e.data.faq.map((e,a)=>({id:e.id,title:e.title,status:0==a,description:e.description})),l=e.data.blog.map(e=>({id:e.id,alt:e.alt,image:e.image}));if(s&&s.length>0&&d(a),m(s),x&&x.length>0){for(let e=0;e<l.length;e++)x.push(l[e]);j(x)}else j(l)}).catch(e=>{})};return(0,i.useEffect)(()=>{g(h)},[h]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("section",{className:"banner-section portfoliopage",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"banner-caption",children:(0,l.jsx)("h1",{children:(0,l.jsxs)("span",{children:["PORTF",(0,l.jsx)("img",{src:"https://smca.ezrankings.in/react-backend/uploads/oshap.png",className:"o-shap",alt:""}),"Lio"]})})})})})})}),(0,l.jsx)("section",{className:"porfolio-slider",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-9 mx-auto",children:(0,l.jsx)("div",{className:"slider-porfolio",children:(0,l.jsx)(c.default,{imgData:s})})})})})}),(0,l.jsx)("section",{className:"portfolio-sec",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[x.map((e,a)=>(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"portfolio-card",children:(0,l.jsxs)("figure",{children:[" ",(0,l.jsxs)("a",{href:e.image,"data-fancybox":"gallery","data-caption":e.alt,children:[(0,l.jsx)("img",{src:e.image,alt:e.alt}),(0,l.jsx)("span",{className:"zoom-img",children:(0,l.jsx)("i",{className:"fas fa-search-plus"})})]})]})})},a)),(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"load-more-btn",children:(0,l.jsx)("a",{onClick:u,children:"Load More"})})})]})})}),(0,l.jsx)("section",{className:"start-retainership-sec ",children:(0,l.jsxs)("div",{className:"continer",children:[(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"content-wrap",children:(0,l.jsxs)("p",{children:["We believe that every business is ",(0,l.jsx)("span",{children:"unique and deserves excellent and customized social media creatives,"})," that's why we take the time to develop an enduring connection with our clients."]})})})}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsxs)("div",{className:"content-wrap2",children:[(0,l.jsx)("h2",{children:"Let’s create something amazing together."}),(0,l.jsx)("a",{href:"https://www.socialmediacreativeagency.com/contact-us",class:"",children:"Get Started"})]})})})]})}),(0,l.jsx)(n.default,{}),(0,l.jsx)(r.default,{faqData:o})]})};a.default=d},1971:function(e,a,s){s.r(a),s.d(a,{default:function(){return c}});var l=s(5893);s(7294);var i=s(6066);function c(e){return(0,l.jsx)(i.Z,{autoplay:!1,autoplaySpeed:1e3,slidesToShow:1,dots:!0,arrows:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}],className:"slick-slider2",children:e.imgData&&e.imgData.length>0&&e.imgData.map((e,a)=>(0,l.jsx)("div",{className:"item",children:(0,l.jsx)("figure",{children:(0,l.jsx)("img",{src:e.image,alt:e.alt})})},a))})}s(4640),s(9678)}}]);