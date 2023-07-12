"use strict";
exports.id = 7012;
exports.ids = [7012];
exports.modules = {

/***/ 7012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Faq)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/pages/assets/images/down.png
/* harmony default export */ const down = ({"src":"/_next/static/media/down.4e078618.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEVMaXH///////////////9FpdmZAAAABXRSTlMADBlfXbOzTSQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAnSURBVHicNYoxEgAwDIIU/f+be20aBliQFm/KLRVBIwfyBrc7/g4HB7wANfqkc/EAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/pages/components/Faq.js



const Faq = (props)=>{
    const [hiddenTitleIndex, setHiddenTitleIndex] = (0,external_react_.useState)(0);
    const toggleHiddenTitle = (index)=>{
        if (hiddenTitleIndex === index) {
            setHiddenTitleIndex(null);
        } else {
            setHiddenTitleIndex(index);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "faq-section",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-md-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "faq-title",
                                children: "Frequently Asked Questions (FAQs)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "accordion",
                                id: "accordionExample",
                                itemScope: "",
                                itemProp: "mainEntity",
                                itemType: "https://schema.org/Question",
                                children: props.faqData && props.faqData.length > 0 && props.faqData.map((data, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "accordion-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "accordion-header",
                                                id: "headingOne" + i,
                                                itemProp: data.title,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    className: hiddenTitleIndex === i ? "accordion-button collapsed openDesc" : "accordion-button collapsed",
                                                    type: "button",
                                                    "data-bs-toggle": "collapseOne" + i,
                                                    "data-bs-target": "#collapseOne" + i,
                                                    "aria-controls": "collapseOne" + i,
                                                    onClick: ()=>toggleHiddenTitle(i),
                                                    children: [
                                                        data.status,
                                                        "Q.",
                                                        i + 1,
                                                        " ",
                                                        data.title
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                id: "collapseOne" + i,
                                                "aria-labelledby": "headingOne" + i,
                                                "data-bs-parent": "#accordionExample",
                                                itemScope: "",
                                                itemProp: data.description,
                                                itemType: "https://schema.org/Answer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: hiddenTitleIndex === i ? "accordion-body" : "",
                                                    children: hiddenTitleIndex === i && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: data.description
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
        })
    });
};
/* harmony default export */ const components_Faq = (Faq);


/***/ })

};
;