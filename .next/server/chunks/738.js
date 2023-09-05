"use strict";
exports.id = 738;
exports.ids = [738];
exports.modules = {

/***/ 4738:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewsLetter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8326);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NewsLetter__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_3__]);
([_NewsLetter__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const AdminDasbboard = (props)=>{
    //console.log('vikasBPccL', props);
    const [profileData, setProfileData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        companyname: "",
        title: "",
        name: "",
        email: "",
        contactno: "",
        about: "",
        location: "",
        image: "",
        logo: "",
        userid: ""
    });
    const [newsData, setNewsData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [closeIcon, setCloseIcon] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [msg, setFormStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [inputData, setInputData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        content: "",
        title: "",
        userid: profileData && profileData.userid ? profileData.userid : ""
    });
    const [submitBtn, setSubmitBtn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
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
    const NewsList = async (page)=>{
        axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${"https://reseller.ezrankings.in/dashboard/"}newsList.php`).then((res)=>{
            const data = res.data.newsData.map((item)=>{
                return {
                    id: item.id,
                    content: item.content,
                    time: item.time,
                    user: item.user
                };
            });
            setNewsData(data);
        }).catch((err)=>{});
    };
    const onSubmit = (e)=>{
        e.preventDefault();
        if (!inputData.title) {
            setSubmitBtn({
                padding: "1rem 0rem",
                display: "block",
                color: "red"
            });
            setFormStatus("Title can not be blank.");
            setCloseIcon(true);
        } else if (!inputData.content) {
            setSubmitBtn({
                padding: "1rem 0rem",
                display: "block",
                color: "red"
            });
            setFormStatus("Content can not be blank.");
            setCloseIcon(true);
        } else {
            inputData.userid = profileData && profileData.userid ? profileData.userid : "";
            axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(`${"https://reseller.ezrankings.in/dashboard/"}addNews.php`, inputData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((res)=>{
                const data = res.data;
                if (res && res.data && res.data.error && res.data.error.length > 0) {
                    setFormStatus(res.data.error);
                    setCloseIcon(true);
                } else if (res && res.data && res.data.msg && res.data.msg.length > 0) {
                    setInputData({
                        content: "",
                        title: "",
                        userid: profileData && profileData.userid ? profileData.userid : ""
                    });
                    setFormStatus("Submit Successfully.");
                    setCloseIcon(true);
                    setSubmitBtn({
                        padding: "1rem 0rem",
                        display: "block",
                        color: "#46c737"
                    });
                }
            }).catch((err)=>{});
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
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
        NewsList();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "admin-dash mt-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "/projectList",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "#",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "report-box zoom-in card",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "box p-5",
                                    bis_skin_checked: "1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex",
                                            bis_skin_checked: "1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "far fa-tasks"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-3xl font-medium leading-8",
                                            bis_skin_checked: "1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: props && props.data && props.data.total_project ? props.data.total_project : "0"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-base text-slate-500 mt-1",
                                            bis_skin_checked: "1",
                                            children: "Total Projects"
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    props && props.type && props.type == "admin" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "/users",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "#",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "report-box zoom-in card",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "box p-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "far fa-users"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-3xl font-medium leading-8",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: props && props.data && props.data.total_users ? props.data.total_users : "0"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-base text-slate-500 mt-1",
                                            children: "Total Users"
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    props && props.type && props.type == "Manager" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "/projectList",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "#",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "report-box zoom-in card",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "box p-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "far fa-users"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-3xl font-medium leading-8",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: props && props.data && props.data.total_users ? props.data.total_users : "0"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-base text-slate-500 mt-1",
                                            children: "Total Users"
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "/projectList",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "#",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "report-box zoom-in card",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "box p-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "far fa-user-times"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-3xl font-medium leading-8",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    "$",
                                                    props && props.data && props.data.total_price ? props.data.total_price : "0"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-base text-slate-500 mt-1",
                                            children: "Total Cost"
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "#",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "#",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "report-box zoom-in card",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "box p-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "far fa-user-times"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-3xl font-medium leading-8",
                                            children: "50"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-base text-slate-500 mt-1",
                                            children: "Pending Request"
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            props && props.type && props.type == "admin" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "newsletter-box",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "intro-y box lg:mt-5",
                    bis_skin_checked: "1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400",
                            bis_skin_checked: "1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "font-medium text-base mr-auto",
                                children: "Add New"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-5",
                            bis_skin_checked: "1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: onSubmit,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-3",
                                        bis_skin_checked: "1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            name: "title",
                                            onChange: inputChangeData,
                                            className: "form-control",
                                            placeholder: "Title",
                                            value: inputData.title
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-3",
                                        bis_skin_checked: "1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            rows: "5",
                                            name: "content",
                                            onChange: inputChangeData,
                                            className: "form-control",
                                            placeholder: "Write Something Here....",
                                            value: inputData.content
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: "btn btn-primary mt-4",
                                        children: "Save"
                                    }),
                                    closeIcon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: submitBtn,
                                        className: "success",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: msg
                                            }),
                                            "  ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                onClick: submitCloseIcon,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "X"
                                                })
                                            })
                                        ]
                                    }) : ""
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminDasbboard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;