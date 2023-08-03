"use strict";
exports.id = 326;
exports.ids = [326];
exports.modules = {

/***/ 8326:
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const NewsLetter = ()=>{
    const [newsData, setNewsData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const NewsList = async (page)=>{
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`https://smca.ezrankings.in/dashboard/newsList.php`).then((res)=>{
            const data = res.data.newsData.map((item)=>{
                return {
                    id: item.id,
                    title: item.title,
                    content: item.content,
                    time: item.time,
                    user: item.user
                };
            });
            setNewsData(data);
            setLoading(true);
        }).catch((err)=>{});
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        //setTimeout(function(){
        NewsList();
    //},5000)
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                    src: "https://smca.ezrankings.in/dashboard/js/app.js"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-span-12 md:col-span-6 xl:col-span-12 xl:col-start-1 xl:row-start-1 2xl:col-start-auto 2xl:row-start-auto mt-3",
                bis_skin_checked: "1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "intro-x flex items-center h-10",
                        bis_skin_checked: "1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-lg font-medium truncate mr-auto",
                                children: "Our Newsletter"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                "data-carousel": "important-notes",
                                "data-target": "prev",
                                className: "tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    "stroke-width": "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    "icon-name": "chevron-left",
                                    "data-lucide": "chevron-left",
                                    className: "lucide lucide-chevron-left w-4 h-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                        points: "15 18 9 12 15 6"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                "data-carousel": "important-notes",
                                "data-target": "next",
                                className: "tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    "stroke-width": "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    "icon-name": "chevron-right",
                                    "data-lucide": "chevron-right",
                                    className: "lucide lucide-chevron-right w-4 h-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                        points: "9 18 15 12 9 6"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-5 intro-x",
                        bis_skin_checked: "1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "box zoom-in",
                            bis_skin_checked: "1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "tns-outer",
                                id: "important-notes-ow",
                                bis_skin_checked: "1",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        type: "button",
                                        "data-action": "stop",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "tns-visually-hidden",
                                                children: "stop animation"
                                            }),
                                            "stop"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "tns-liveregion tns-visually-hidden",
                                        "aria-live": "polite",
                                        "aria-atomic": "true",
                                        bis_skin_checked: "1",
                                        children: [
                                            "slide ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "current",
                                                children: "2"
                                            }),
                                            "  of 3"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "important-notes-mw",
                                        className: "tns-ovh",
                                        bis_skin_checked: "1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "tns-inner",
                                            id: "important-notes-iw",
                                            bis_skin_checked: "1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "tiny-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal news01",
                                                id: "important-notes",
                                                bis_skin_checked: "1",
                                                children: newsData && newsData.length > 0 && newsData.map((newsI, n)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: n == 0 ? "p-5 tns-item tns-slide-active" : "p-5 tns-item",
                                                            id: "important-notes-item" + n,
                                                            bis_skin_checked: "1",
                                                            "aria-hidden": "true",
                                                            tabIndex: "-1",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "text-base font-medium truncate",
                                                                    bis_skin_checked: "1",
                                                                    children: newsI.title
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "text-slate-400 mt-1",
                                                                    bis_skin_checked: "1",
                                                                    children: [
                                                                        newsI.time,
                                                                        " ago"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "text-slate-500 text-justify mt-1",
                                                                    bis_skin_checked: "1",
                                                                    children: newsI.content
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "font-medium flex mt-5",
                                                                    bis_skin_checked: "1",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            type: "button",
                                                                            className: "btn btn-secondary py-1 px-2",
                                                                            children: "View Notes"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            type: "button",
                                                                            className: "btn btn-outline-secondary py-1 px-2 ml-auto ml-auto",
                                                                            children: "Dismiss"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }, n)
                                                    });
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsLetter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;