"use strict";
exports.id = 859;
exports.ids = [859];
exports.modules = {

/***/ 859:
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
/* harmony import */ var _AboutContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8319);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Faq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7012);
/* harmony import */ var _PortfolioSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6425);
/* harmony import */ var _FooterForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, _FooterForm__WEBPACK_IMPORTED_MODULE_7__]);
([axios__WEBPACK_IMPORTED_MODULE_3__, _FooterForm__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const About = ()=>{
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [aboutData, setAboutData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [imgData, setImgData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [faqData, setFaqData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const fetchData = async ()=>{
        axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`https://smca.ezrankings.in/react-backend/about.php`).then((res)=>{
            const data = res.data.about.map((item)=>{
                return {
                    id: item.id,
                    alt: item.alt,
                    title: item.title,
                    description: item.description,
                    image: item.img
                };
            });
            const faqqData = res.data.faq.map((item, k)=>{
                return {
                    id: item.id,
                    title: item.title,
                    status: k == 0 ? true : false,
                    description: item.description
                };
            });
            const Sldata = res.data.gallery.map((item)=>{
                return {
                    id: item.id,
                    alt: item.alt,
                    image: item.img
                };
            });
            setImgData(Sldata);
            setFaqData(faqqData);
            setAboutData(data);
        }).catch((err)=>{});
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchData();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "banner-section",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-md-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "banner-caption",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            "AB",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://smca.ezrankings.in/react-backend/uploads/oshap.png",
                                                className: "o-shap",
                                                alt: ""
                                            }),
                                            "UT"
                                        ]
                                    })
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "exp-branding-sec",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "contianer",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "title-header",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: "We are a passionate team of Social media creative experts who are committed to assisting companies in flourishing digitally."
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AboutContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
                aboutContentData: aboutData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PortfolioSlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
                imgData: imgData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "start-retainership-sec  srs2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "continer",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "content-wrap",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "We believe that every business is ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "unique and deserves excellent and customized social media creatives,"
                                            }),
                                            " thats why we take the time to develop an enduring connection with our clients."
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "content-wrap2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: "Lets create something amazing together."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "",
                                            className: "",
                                            children: "Get Started"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FooterForm__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Faq__WEBPACK_IMPORTED_MODULE_5__["default"], {
                faqData: faqData
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;