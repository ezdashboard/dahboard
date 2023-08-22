"use strict";
(() => {
var exports = {};
exports.id = 110;
exports.ids = [110];
exports.modules = {

/***/ 1056:
/***/ ((module) => {

module.exports = require("next/dist/server/web/spec-extension/response.js");

/***/ }),

/***/ 2755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DELETE": () => (/* binding */ DELETE)
/* harmony export */ });
/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3141);

function DELETE(request, content) {
    let id = content.params.id;
    if (id) {
        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__/* ["default"].json */ .Z.json({
            result: "user deleted",
            success: true
        }, {
            status: "200"
        });
    } else {
        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__/* ["default"].json */ .Z.json({
            result: "user error",
            success: false
        }, {
            status: "202"
        });
    }
}


/***/ }),

/***/ 3141:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _response.NextResponse;
    }
}));
var _response = __webpack_require__(1056);

//# sourceMappingURL=next-response.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2755));
module.exports = __webpack_exports__;

})();