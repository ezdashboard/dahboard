"use strict";
(() => {
var exports = {};
exports.id = 2164;
exports.ids = [2164];
exports.modules = {

/***/ 6405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
const EXTERNAL_DATA_URL = "https://smca.ezrankings.in/react-backend/sitemap.php";
function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${posts.map(({ linkUrl  })=>{
        return `
       <url>
           <loc>${`${linkUrl}`}</loc>
       </url>
     `;
    }).join("")}
   </urlset>
 `;
}
function SiteMap() {
// getServerSideProps will do the heavy lifting
}
async function getServerSideProps({ res  }) {
    // We make an API call to gather the URLs for our site
    const request = await fetch(EXTERNAL_DATA_URL);
    const posts = await request.json();
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(posts);
    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
    return {
        props: {}
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteMap);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6405));
module.exports = __webpack_exports__;

})();