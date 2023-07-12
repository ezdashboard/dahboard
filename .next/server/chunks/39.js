"use strict";
exports.id = 39;
exports.ids = [39];
exports.modules = {

/***/ 39:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ContactForm = ()=>{
    const [closeIcon, setCloseIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [msg, setFormStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [inputData, setInputData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        email: "",
        type: 2,
        message: ""
    });
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
        if (!inputData.name) {
            setFormStatus("Name can not be blank.");
            setCloseIcon(true);
        } else if (!inputData.email) {
            setFormStatus("Email can not be blank.");
            setCloseIcon(true);
        } else if (!inputData.message) {
            setFormStatus("Message can not be blank.");
            setCloseIcon(true);
        } else {
            axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(`https://smca.ezrankings.in/react-backend/contacts.php`, inputData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((res)=>{
                const data = res.data;
                if (data) {
                    setInputData({
                        name: "",
                        email: "",
                        message: ""
                    });
                    next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/thankyou");
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            onSubmit: onSubmit,
            className: "form-inline",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
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
                                        class: "fa fa-times",
                                        "aria-hidden": "true"
                                    })
                                })
                            ]
                        }) : ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "form-group",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control contactForm",
                                onChange: inputChangeData,
                                value: inputData.name,
                                name: "name",
                                placeholder: "Name"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "form-group",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                className: "form-control contactForm",
                                onChange: inputChangeData,
                                value: inputData.email,
                                name: "email",
                                placeholder: "Email"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "form-group",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "form-control contactForm",
                                onChange: inputChangeData,
                                value: inputData.message,
                                name: "message",
                                placeholder: "Message"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "form-group mt-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "btn-border2",
                                type: "submit",
                                children: "Send"
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;