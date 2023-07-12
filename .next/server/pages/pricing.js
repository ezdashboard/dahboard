(() => {
var exports = {};
exports.id = 9939;
exports.ids = [9939,227,241,398,2482,450,457,5911,8219,3383,8572,5448,8014];
exports.modules = {

/***/ 7747:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(782);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5389);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5301);
/* harmony import */ var _components_FooterForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1698);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Footer__WEBPACK_IMPORTED_MODULE_6__, _components_FooterForm__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Footer__WEBPACK_IMPORTED_MODULE_6__, _components_FooterForm__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function MyPage({ data  }) {
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("startup");
    const [activeMainTab, setMainActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("creativesPlan");
    const [isPlan, updatePlan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("creativesPlan");
    const settings = {
        centerMode: true,
        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        dots: true,
        arrows: true,
        swipe: true,
        infinite: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [hiddenTitleIndex, setHiddenTitleIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const toggleHiddenTitle = (index)=>{
        if (hiddenTitleIndex === index) {
            setHiddenTitleIndex(null);
        } else {
            setHiddenTitleIndex(index);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Our Pricing - Social Media Creative Agency"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Browse this page and get Pricing details of Social Media Creative Agency. We offer Individual, Start Up and Business Plans."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: "https://www.socialmediacreativeagency.com/pricing/"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:locale",
                        content: "en_US"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "article"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: "Our Pricing - Social Media Creative Agency"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: "Browse this page and get Pricing details of Social Media Creative Agency. We offer Individual, Start Up and Business Plans."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: "https://www.socialmediacreativeagency.com/pricing/"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:site_name",
                        content: "Creative Agency"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "article:modified_time",
                        content: "2023-02-27T05:38:59+00:00"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
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
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "PRICING"
                                    })
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "pricing-sec",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-12 text-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "pricing-tab",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: isPlan == "creativesPlan" ? "tablinks active" : "tablinks",
                                            onClick: ()=>updatePlan("creativesPlan"),
                                            children: "Creatives Plan"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: isPlan == "paidPlan" ? "tablinks active" : "tablinks",
                                            onClick: ()=>updatePlan("paidPlan"),
                                            children: "Paid Plan"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: isPlan == "engagementPlan" ? "tablinks active" : "tablinks",
                                            onClick: ()=>updatePlan("engagementPlan"),
                                            children: "Engagement Plan"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row tabcontent",
                            id: "CreativesPlan",
                            style: {
                                display: isPlan == "creativesPlan" ? "block" : "none"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-12 entry-content table-responsive",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                    className: "table",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "redC",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Start-up"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "redC",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Economic"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "redC",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Business"
                                                        })
                                                    })
                                                ]
                                            }),
                                            data.price && data.price.length > 0 && data.price.map((pdata, p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: pdata.title
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: p == 0 ? "fs" : "",
                                                            dangerouslySetInnerHTML: {
                                                                __html: pdata.individual
                                                            }
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: p == 0 ? "fs" : "",
                                                            dangerouslySetInnerHTML: {
                                                                __html: pdata.start_up
                                                            }
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: p == 0 ? "fs" : "",
                                                            dangerouslySetInnerHTML: {
                                                                __html: pdata.business
                                                            }
                                                        })
                                                    ]
                                                }, p))
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row tabcontent",
                            id: "PaidPlan",
                            style: {
                                display: isPlan == "paidPlan" ? "block" : "none"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-12 entry-content table-responsive",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                    className: "table",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                        children: data.pricePaid && data.pricePaid.length > 0 && data.pricePaid.map((pdData, p1)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        children: pdData.title
                                                    }),
                                                    pdData.individual && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: p1 == 0 ? "redC" :  false || p1 == 1 ? "fs" : "",
                                                        dangerouslySetInnerHTML: {
                                                            __html: pdData.individual
                                                        }
                                                    }),
                                                    pdData.start_up && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: p1 == 0 ? "redC" :  false || p1 == 1 ? "fs" : "",
                                                        dangerouslySetInnerHTML: {
                                                            __html: pdData.start_up
                                                        }
                                                    }),
                                                    pdData.business && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: p1 == 0 ? "redC" :  false || p1 == 1 ? "fs" : "",
                                                        dangerouslySetInnerHTML: {
                                                            __html: pdData.business
                                                        }
                                                    })
                                                ]
                                            }, p1))
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row tabcontent",
                            id: "EngagementPlan",
                            style: {
                                display: isPlan == "engagementPlan" ? "block" : "none"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-12 entry-content table-responsive",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                    className: "table",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "redC",
                                                    colSpan: 4,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            children: "SOCIAL MEDIA ENGAGEMENT PLAN"
                                                        })
                                                    })
                                                })
                                            }),
                                            data.priceEng && data.priceEng.length > 0 && data.priceEng.map((pdata, p2)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    children: [
                                                        pdata.id && pdata.id == "19" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "br-right",
                                                            style: {
                                                                textAlign: "center"
                                                            },
                                                            colSpan: 5,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                    children: pdata.title
                                                                })
                                                            })
                                                        }),
                                                        pdata.id && pdata.id != "19" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: pdata.title
                                                        }),
                                                        pdata.start_up && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: p2 == 0 ? "fs" : "",
                                                            dangerouslySetInnerHTML: {
                                                                __html: pdata.individual
                                                            }
                                                        }),
                                                        pdata.start_up && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: p2 == 0 ? "fs" : "",
                                                            dangerouslySetInnerHTML: {
                                                                __html: pdata.start_up
                                                            }
                                                        }),
                                                        pdata.business && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: p2 == 0 ? "fs" : "",
                                                            dangerouslySetInnerHTML: {
                                                                __html: pdata.business
                                                            }
                                                        })
                                                    ]
                                                }, p2))
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "for-mobile-table",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pricing-table-mobile pricing-table-mobile-tab  mr-bt-20",
                        bis_skin_checked: "1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            bis_skin_checked: "1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                bis_skin_checked: "1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-12",
                                    bis_skin_checked: "1",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "nav nav-tabs",
                                        role: "tablist",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "nav-item",
                                                role: "presentation",
                                                onClick: ()=>setMainActiveTab("creativesPlan"),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: activeMainTab == "creativesPlan" ? "nav-link active" : "nav-link",
                                                    "data-bs-toggle": "tab",
                                                    "aria-selected": "true",
                                                    role: "tab",
                                                    children: "Creatives "
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "nav-item",
                                                role: "presentation",
                                                onClick: ()=>setMainActiveTab("paidPlan"),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: activeMainTab == "paidPlan" ? "nav-link active" : "nav-link",
                                                    "data-bs-toggle": "tab",
                                                    "aria-selected": "false",
                                                    role: "tab",
                                                    tabIndex: "-1",
                                                    children: "Paid"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "nav-item",
                                                role: "presentation",
                                                onClick: ()=>setMainActiveTab("engagementPlan"),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: activeMainTab == "engagementPlan" ? "nav-link active" : "nav-link",
                                                    "data-bs-toggle": "tab",
                                                    "aria-selected": "false",
                                                    role: "tab",
                                                    tabIndex: "-1",
                                                    children: "Engagement"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: activeMainTab == "creativesPlan" ? "pricing-table-mobile show" : "pricing-table-mobile hide",
                        bis_skin_checked: "1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            bis_skin_checked: "1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                bis_skin_checked: "1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-md-12",
                                    bis_skin_checked: "1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "nav nav-tabs",
                                            role: "tablist",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "nav-item",
                                                    role: "presentation",
                                                    onClick: ()=>setActiveTab("startup"),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: activeTab == "startup" ? "nav-link active" : "nav-link",
                                                        "data-bs-toggle": "tab",
                                                        "aria-selected": "true",
                                                        role: "tab",
                                                        children: "Start-Up"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "nav-item",
                                                    role: "presentation",
                                                    onClick: ()=>setActiveTab("economic"),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: activeTab == "economic" ? "nav-link active" : "nav-link",
                                                        "data-bs-toggle": "tab",
                                                        "aria-selected": "false",
                                                        role: "tab",
                                                        tabIndex: "-1",
                                                        children: "Economic"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "nav-item",
                                                    role: "presentation",
                                                    onClick: ()=>setActiveTab("business"),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: activeTab == "business" ? "nav-link active" : "nav-link",
                                                        "data-bs-toggle": "tab",
                                                        "aria-selected": "false",
                                                        role: "tab",
                                                        tabIndex: "-1",
                                                        children: "Business"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "tab-content",
                                            bis_skin_checked: "1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: activeTab == "startup" ? "tab-pane container active show" : "tab-pane container fade",
                                                    id: "Start-Up",
                                                    bis_skin_checked: "1",
                                                    role: "tabpanel",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                                        className: "table",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                            children: data.price && data.price.length > 0 && data.price.map((pdata, p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            children: pdata.title
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: p == 0 ? "fs" : "",
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: pdata.individual
                                                                            }
                                                                        })
                                                                    ]
                                                                }, p))
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: activeTab == "economic" ? "tab-pane container active show" : "tab-pane container fade",
                                                    id: "Economic",
                                                    bis_skin_checked: "1",
                                                    role: "tabpanel",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                                        className: "table",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                            children: data.price && data.price.length > 0 && data.price.map((pdata, p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            children: pdata.title
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: p == 0 ? "fs" : "",
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: pdata.start_up
                                                                            }
                                                                        })
                                                                    ]
                                                                }, p))
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: activeTab == "business" ? "tab-pane container active show" : "tab-pane container fade",
                                                    id: "Business",
                                                    bis_skin_checked: "1",
                                                    role: "tabpanel",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                                        className: "table",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                            children: data.price && data.price.length > 0 && data.price.map((pdata, p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            children: pdata.title
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: p == 0 ? "fs" : "",
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: pdata.business
                                                                            }
                                                                        })
                                                                    ]
                                                                }, p))
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: activeMainTab == "paidPlan" ? "pricing-table-mobile show" : "pricing-table-mobile hide",
                        bis_skin_checked: "1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            bis_skin_checked: "1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                bis_skin_checked: "1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-md-12",
                                    bis_skin_checked: "1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "nav nav-tabs",
                                            role: "tablist",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "nav-item",
                                                    role: "presentation",
                                                    onClick: ()=>setActiveTab("startup"),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: activeTab == "startup" ? "nav-link active" : "nav-link",
                                                        "data-bs-toggle": "tab",
                                                        "aria-selected": "true",
                                                        role: "tab",
                                                        children: "Option 1"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "nav-item",
                                                    role: "presentation",
                                                    onClick: ()=>setActiveTab("economic"),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: activeTab == "economic" ? "nav-link active" : "nav-link",
                                                        "data-bs-toggle": "tab",
                                                        "aria-selected": "false",
                                                        role: "tab",
                                                        tabIndex: "-1",
                                                        children: "Option 2"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "nav-item",
                                                    role: "presentation",
                                                    onClick: ()=>setActiveTab("business"),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: activeTab == "business" ? "nav-link active" : "nav-link",
                                                        "data-bs-toggle": "tab",
                                                        "aria-selected": "false",
                                                        role: "tab",
                                                        tabIndex: "-1",
                                                        children: "Option 3"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "tab-content",
                                            bis_skin_checked: "1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: activeTab == "startup" ? "tab-pane container active show" : "tab-pane container fade",
                                                    id: "Start-Up",
                                                    bis_skin_checked: "1",
                                                    role: "tabpanel",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                                        className: "table",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                            children: data.pricePaid && data.pricePaid.length > 0 && data.pricePaid.map((pdata, p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            children: pdata.title
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: p == 0 ? "fs" : "",
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: pdata.individual
                                                                            }
                                                                        })
                                                                    ]
                                                                }, p))
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: activeTab == "economic" ? "tab-pane container active show" : "tab-pane container fade",
                                                    id: "Economic",
                                                    bis_skin_checked: "1",
                                                    role: "tabpanel",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                                        className: "table",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                            children: data.pricePaid && data.pricePaid.length > 0 && data.pricePaid.map((pdata, p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            children: pdata.title
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: p == 0 ? "fs" : "",
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: pdata.start_up
                                                                            }
                                                                        })
                                                                    ]
                                                                }, p))
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: activeTab == "business" ? "tab-pane container active show" : "tab-pane container fade",
                                                    id: "Business",
                                                    bis_skin_checked: "1",
                                                    role: "tabpanel",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                                        className: "table",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                            children: data.pricePaid && data.pricePaid.length > 0 && data.pricePaid.map((pdata, p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            children: pdata.title
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: p == 0 ? "fs" : "",
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: pdata.business
                                                                            }
                                                                        })
                                                                    ]
                                                                }, p))
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: activeMainTab == "engagementPlan" ? "pricing-table-mobile show" : "pricing-table-mobile hide",
                        bis_skin_checked: "1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            bis_skin_checked: "1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                bis_skin_checked: "1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-md-12",
                                    bis_skin_checked: "1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "nav nav-tabs",
                                            role: "tablist",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "nav-item",
                                                    role: "presentation",
                                                    onClick: ()=>setActiveTab("startup"),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: activeTab == "startup" ? "nav-link active" : "nav-link",
                                                        "data-bs-toggle": "tab",
                                                        "aria-selected": "true",
                                                        role: "tab",
                                                        children: "Option 1"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "nav-item",
                                                    role: "presentation",
                                                    onClick: ()=>setActiveTab("economic"),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: activeTab == "economic" ? "nav-link active" : "nav-link",
                                                        "data-bs-toggle": "tab",
                                                        "aria-selected": "false",
                                                        role: "tab",
                                                        tabIndex: "-1",
                                                        children: "Option 2"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "nav-item",
                                                    role: "presentation",
                                                    onClick: ()=>setActiveTab("business"),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: activeTab == "business" ? "nav-link active" : "nav-link",
                                                        "data-bs-toggle": "tab",
                                                        "aria-selected": "false",
                                                        role: "tab",
                                                        tabIndex: "-1",
                                                        children: "Option 3"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "tab-content",
                                            bis_skin_checked: "1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: activeTab == "startup" ? "tab-pane container active show" : "tab-pane container fade",
                                                    id: "Start-Up",
                                                    bis_skin_checked: "1",
                                                    role: "tabpanel",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                                        className: "table",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                            children: data.priceEng && data.priceEng.length > 0 && data.priceEng.map((pdata, p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            children: pdata.title
                                                                        }),
                                                                        pdata.individual && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: p == 0 ? "fs" : "",
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: pdata.individual
                                                                            }
                                                                        })
                                                                    ]
                                                                }, p))
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: activeTab == "economic" ? "tab-pane container active show" : "tab-pane container fade",
                                                    id: "Economic",
                                                    bis_skin_checked: "1",
                                                    role: "tabpanel",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                                        className: "table",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                            children: data.priceEng && data.priceEng.length > 0 && data.priceEng.map((pdata, p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            children: pdata.title
                                                                        }),
                                                                        pdata.start_up && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: p == 0 ? "fs" : "",
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: pdata.start_up
                                                                            }
                                                                        })
                                                                    ]
                                                                }, p))
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: activeTab == "business" ? "tab-pane container active show" : "tab-pane container fade",
                                                    id: "Business",
                                                    bis_skin_checked: "1",
                                                    role: "tabpanel",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                                        className: "table",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                            children: data.priceEng && data.priceEng.length > 0 && data.priceEng.map((pdata, p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            children: pdata.title
                                                                        }),
                                                                        pdata.business && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: p == 0 ? "fs" : "",
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: pdata.business
                                                                            }
                                                                        })
                                                                    ]
                                                                }, p))
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "faq-section",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-md-12",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "faq-title",
                                    children: "Frequently Asked Questions (FAQs)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "accordion",
                                    id: "accordionExample",
                                    itemScope: "",
                                    itemProp: "mainEntity",
                                    itemType: "https://schema.org/Question",
                                    children: data.faq && data.faq.length > 0 && data.faq.map((dataF, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "accordion-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "accordion-header",
                                                    id: "headingOne" + i,
                                                    itemProp: dataF.title,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        className: hiddenTitleIndex === i ? "accordion-button collapsed openDesc" : "accordion-button collapsed",
                                                        type: "button",
                                                        "data-bs-toggle": "collapseOne" + i,
                                                        "data-bs-target": "#collapseOne" + i,
                                                        "aria-controls": "collapseOne" + i,
                                                        onClick: ()=>toggleHiddenTitle(i),
                                                        children: [
                                                            dataF.status,
                                                            "Q.",
                                                            i + 1,
                                                            " ",
                                                            dataF.title
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    id: "collapseOne" + i,
                                                    "aria-labelledby": "headingOne" + i,
                                                    "data-bs-parent": "#accordionExample",
                                                    itemScope: "",
                                                    itemProp: dataF.description,
                                                    itemType: "https://schema.org/Answer",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: hiddenTitleIndex === i ? "accordion-body" : "",
                                                        children: hiddenTitleIndex === i && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: dataF.description
                                                            }
                                                        })
                                                    })
                                                })
                                            ]
                                        }, i))
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "sliderForPricing",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "sliderTitle",
                                children: "Our Work"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                                ...settings,
                                className: "slick-slider",
                                children: data.gallery && data.gallery.length > 0 && data.gallery.map((galData, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: galData.img,
                                                alt: galData.alt
                                            })
                                        })
                                    }, i))
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "start-retainership-sec srs2 ",
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            href: "/contact",
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FooterForm__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        ]
    });
}
async function getStaticProps() {
    const response = await fetch("https://smca.ezrankings.in/react-backend/pricing.php");
    const data = await response.json();
    return {
        props: {
            data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 782:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 8096:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,2636,5675,7012,1698,5389,9040], () => (__webpack_exec__(7747)));
module.exports = __webpack_exports__;

})();