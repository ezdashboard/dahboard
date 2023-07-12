"use strict";
exports.id = 5301;
exports.ids = [5301];
exports.modules = {

/***/ 3087:
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
/* harmony import */ var _PortfolioPageSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1971);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FooterForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1698);
/* harmony import */ var _Faq_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7012);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, _FooterForm__WEBPACK_IMPORTED_MODULE_5__]);
([axios__WEBPACK_IMPORTED_MODULE_3__, _FooterForm__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Portfolio = ()=>{
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [imgPortData, setImgPortData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [faqData, setFaqData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [imgPortBlogData, setImgPortBlogData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const handleNextPage = ()=>{
        setCurrentPage(currentPage + 1);
    };
    const fetchData = async (page)=>{
        axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`https://smca.ezrankings.in/react-backend/portData.php?page=${page}`).then((res)=>{
            const data = res.data.gallery && res.data.gallery.length > 0 && res.data.gallery.map((item)=>{
                return {
                    id: item.id,
                    alt: item.alt,
                    image: item.image
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
            const blogData = res.data.blog.map((item)=>{
                return {
                    id: item.id,
                    alt: item.alt,
                    image: item.image
                };
            });
            if (faqqData && faqqData.length > 0) {
                setImgPortData(data);
            }
            setFaqData(faqqData);
            // setImgPortBlogData([...imgPortBlogData, blogData]);
            if (imgPortBlogData && imgPortBlogData.length > 0) {
                let newArrayBlog = imgPortBlogData;
                for(let z = 0; z < blogData.length; z++){
                    newArrayBlog.push(blogData[z]);
                }
                setImgPortBlogData(newArrayBlog);
            // setImgPortBlogData([...imgPortBlogData, blogData]);
            } else {
                setImgPortBlogData(blogData);
            }
        }).catch((err)=>{});
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchData(currentPage);
    }, [
        currentPage
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "banner-section portfoliopage",
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
                                            "PORTF",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "https://smca.ezrankings.in/react-backend/uploads/oshap.png",
                                                className: "o-shap",
                                                alt: ""
                                            }),
                                            "Lio"
                                        ]
                                    })
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "porfolio-slider",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-md-9 mx-auto",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "slider-porfolio",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PortfolioPageSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    imgData: imgPortData
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "portfolio-sec",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            imgPortBlogData.map((blogImg, b)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "portfolio-card",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                            children: [
                                                " ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    href: blogImg.image,
                                                    "data-fancybox": "gallery",
                                                    "data-caption": blogImg.alt,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: blogImg.image,
                                                            alt: blogImg.alt
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "zoom-img",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-search-plus"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }, b)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "load-more-btn",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        onClick: handleNextPage,
                                        children: "Load More"
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "start-retainership-sec ",
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
                                            " that's why we take the time to develop an enduring connection with our clients."
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
                                            children: "Let’s create something amazing together."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://www.socialmediacreativeagency.com/contact-us",
                                            class: "",
                                            children: "Get Started"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FooterForm__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Faq_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
                faqData: faqData
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;