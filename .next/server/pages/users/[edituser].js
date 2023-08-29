"use strict";
(() => {
var exports = {};
exports.id = 897;
exports.ids = [897,385,572,994,557,976,667,461];
exports.modules = {

/***/ 1007:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6358);
/* harmony import */ var _components_TopHeade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7086);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_7__]);
axios__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// pages/posts/[id].js



// import routes from './routes';





function Index({ userDetail  }) {
    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handleFileChange = (event)=>{
        setSelectedFile(event.target.files[0]);
    };
    const [bodyCsss, setBodyCss] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("py-5");
    const [inputData, setInputData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        userid: userDetail[0]["userid"],
        logo: userDetail[0]["logo"],
        email: userDetail[0]["email"],
        name: userDetail[0]["name"],
        title: userDetail[0]["title"],
        type: userDetail[0]["type"],
        companyname: userDetail[0]["companyname"],
        contactno: userDetail[0]["contactno"],
        status: userDetail[0]["status"],
        location: userDetail[0]["location"],
        image: userDetail[0]["image"],
        password: ""
    });
    const [profileData, setProfileData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        companyname: "",
        title: "",
        name: "",
        email: "",
        contactno: "",
        about: "",
        location: "",
        image: "",
        logo: "",
        type: "",
        userid: ""
    });
    const [hiddenTitleIndex, setHiddenTitleIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const toggleHiddenTitle = (index)=>{
        if (hiddenTitleIndex === index) {
            setHiddenTitleIndex(null);
        } else {
            setHiddenTitleIndex(index);
        }
    };
    const [closeIcon, setCloseIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isValidEmail, setIsValidEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (localStorage.title && localStorage.email && localStorage.logo && localStorage.companyname && localStorage.userid && localStorage.name) {
            setProfileData({
                companyname: localStorage.companyname,
                title: localStorage.title,
                name: localStorage.name,
                email: localStorage.email,
                contactno: localStorage.contactno ? localStorage.contactno : "",
                about: localStorage.about ? localStorage.about : "",
                location: localStorage.location ? localStorage.location : "",
                image: localStorage.image ? localStorage.image : "",
                logo: localStorage.logo,
                userid: localStorage.userid
            });
        }
    }, []);
    const [msg, setFormStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [submitBtn, setSubmitBtn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const inputChangeData = (event)=>{
        const { name , value  } = event.target;
        setInputData((valuePre)=>{
            return {
                ...valuePre,
                [name]: value
            };
        });
    };
    const submitCloseIcon = ()=>{
        setCloseIcon(false);
    };
    const onSubmit = (e)=>{
        e.preventDefault();
        setSubmitBtn({
            padding: "1rem 0rem",
            display: "block",
            color: "red"
        });
        if (inputData && inputData.email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setIsValidEmail(emailRegex.test(inputData.email));
        }
        if (!inputData.name) {
            setFormStatus("Name can not be blank.");
            setCloseIcon(true);
        } else if (!inputData.type) {
            setFormStatus("User type can not be blank.");
            setCloseIcon(true);
        } else if (!inputData.email) {
            setFormStatus("Email can not be blank.");
            setCloseIcon(true);
        } else if (!inputData.companyname) {
            setFormStatus("Company Name can not be blank.");
            setCloseIcon(true);
        } else if (!inputData.contactno) {
            setFormStatus("Phone Number can not be blank.");
            setCloseIcon(true);
        //   }else if(!inputData.password){
        //     setFormStatus("Password can not be blank.")
        //     setCloseIcon(true);                                  
        } else {
            // inputData.userid = profileData && profileData.userid ? profileData.userid : '';
            axios__WEBPACK_IMPORTED_MODULE_7__["default"].post(`https://smca.ezrankings.in/dashboard/updateUser.php`, inputData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((res)=>{
                const data = res.data;
                if (res && res.data && res.data.error && res.data.error.length > 0) {
                    setFormStatus(res.data.error);
                    setCloseIcon(true);
                } else if (res && res.data && res.data.status) {
                    //Router.push('/thankyou')
                    setFormStatus("User profile updated successfully.");
                    setCloseIcon(true);
                    setSubmitBtn({
                        padding: "1rem 0rem",
                        display: "block",
                        color: "#46c737",
                        fontSize: "20px"
                    });
                }
            }).catch((err)=>{});
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "#",
                        rel: "shortcut icon"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "author",
                        content: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Reseller Dashboard"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "dns-prefetch",
                        href: "//developers.google.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "dns-prefetch",
                        href: "//maps.googleapis.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        src: "https://smca.ezrankings.in/dashboard/js/markerclusterer.js"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&libraries=places"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        src: "https://smca.ezrankings.in/dashboard/js/app.js"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        src: "https://smca.ezrankings.in/dashboard/js/map.js"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex mt-[4.7rem] md:mt-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SideBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        logo: profileData.logo
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TopHeade__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                title: profileData.companyname,
                                img: profileData.image
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center mt-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "intro-y text-lg font-medium mr-auto",
                                    children: "User Update"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "intro-y box py-10 sm:py-20 mt-5",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "px-5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "font-medium text-center text-lg",
                                                children: "Update user"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-slate-500 text-center mt-2",
                                                children: "To start off, please enter your username, email address and password."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "px-5 sm:px-20 mt-10 pt-10 border-t border-slate-200/60 dark:border-darkmode-400",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-md-12",
                                                children: closeIcon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    style: submitBtn,
                                                    children: [
                                                        msg,
                                                        "  ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            onClick: submitCloseIcon,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-times",
                                                                "aria-hidden": "true"
                                                            })
                                                        })
                                                    ]
                                                }) : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "font-medium text-base",
                                                children: "Profile Settings"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                                onSubmit: onSubmit,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "grid grid-cols-12 gap-4 gap-y-5 mt-5",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "intro-y col-span-12 sm:col-span-6",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "input-wizard-1",
                                                                    className: "form-label",
                                                                    children: "Name*"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "text",
                                                                    className: "form-control",
                                                                    placeholder: "abc",
                                                                    onChange: inputChangeData,
                                                                    name: "name",
                                                                    value: inputData.name
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "intro-y col-span-12 sm:col-span-6",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "input-wizard-2",
                                                                    className: "form-label",
                                                                    children: "Email*"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "email",
                                                                    className: "form-control",
                                                                    placeholder: "example@gmail.com",
                                                                    onChange: inputChangeData,
                                                                    name: "email",
                                                                    value: inputData.email
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "intro-y col-span-12 sm:col-span-6",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "input-wizard-3",
                                                                    className: "form-label",
                                                                    children: "Company Name*"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "text",
                                                                    className: "form-control",
                                                                    placeholder: "XYZ",
                                                                    onChange: inputChangeData,
                                                                    name: "companyname",
                                                                    value: inputData.companyname
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "intro-y col-span-12 sm:col-span-6",
                                                            bis_skin_checked: "1",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "input-wizard-6",
                                                                    className: "form-label",
                                                                    children: "Department"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                    className: "form-select",
                                                                    onChange: inputChangeData,
                                                                    name: "type",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: "user",
                                                                            children: "User"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: "manager",
                                                                            children: "Manager"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "intro-y col-span-12 sm:col-span-6",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "input-wizard-3",
                                                                    className: "form-label",
                                                                    children: "Phone Number*"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "number",
                                                                    className: "form-control",
                                                                    placeholder: "+91 ",
                                                                    onChange: inputChangeData,
                                                                    name: "contactno",
                                                                    value: inputData.contactno
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "intro-y col-span-12 sm:col-span-6",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "input-wizard-4",
                                                                    className: "form-label",
                                                                    children: "Password*"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "password",
                                                                    className: "form-control",
                                                                    placeholder: "********",
                                                                    onChange: inputChangeData,
                                                                    name: "password",
                                                                    value: inputData.password
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                className: "btn btn-primary w-24 ml-2",
                                                                type: "submit",
                                                                children: "Update"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
// This function gets called at build time
async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch("https://smca.ezrankings.in/dashboard/usersD.php?page=1");
    const posts = await res.json();
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post)=>({
            params: {
                edituser: post.userid.toString()
            }
        }));
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
        paths,
        fallback: false
    };
}
// This also gets called at build time
async function getStaticProps({ params  }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://smca.ezrankings.in/dashboard/getuser.php?userid=${params.edituser}`);
    const userDetail = await res.json();
    // Pass post data to the page via props
    return {
        props: {
            userDetail
        }
    };
} // export async function getStaticPaths() {
 //     // Call an external API endpoint to get posts
 //     const res = await fetch('https://smca.ezrankings.in/react-backend/blogs.php')
 //     const posts = await res.json()
 //     // Get the paths we want to pre-render based on posts
 //     const paths = posts.map((post) => ({
 //       params: { edituser: post.linkUrl.toString(), },
 //     }))
 //     // We'll pre-render only these paths at build time.
 //     // { fallback: false } means other routes should 404.
 //     return { paths, fallback: false }
 //   }
 //   // This also gets called at build time
 //   export async function getStaticProps({ params }) {
 //     // params contains the post `id`.
 //     // If the route is like /posts/1, then params.id is 1
 //     const res = await fetch(`https://smca.ezrankings.in/react-backend/blogCat.php?url=${params.edituser}`)
 //     const dataBlogs = await res.json()
 //     // Pass post data to the page via props
 //     return { props: { dataBlogs } }
 //   }

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2423:
/***/ ((module) => {

module.exports = require("lucide-react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,358,86], () => (__webpack_exec__(1007)));
module.exports = __webpack_exports__;

})();