"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/isows@1.0.3_ws@8.13.0";
exports.ids = ["vendor-chunks/isows@1.0.3_ws@8.13.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/isows@1.0.3_ws@8.13.0/node_modules/isows/_cjs/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/isows@1.0.3_ws@8.13.0/node_modules/isows/_cjs/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.WebSocket = void 0;\nconst WebSocket_ = __webpack_require__(/*! ws */ \"(ssr)/./node_modules/.pnpm/ws@8.13.0/node_modules/ws/index.js\");\nconst utils_js_1 = __webpack_require__(/*! ./utils.js */ \"(ssr)/./node_modules/.pnpm/isows@1.0.3_ws@8.13.0/node_modules/isows/_cjs/utils.js\");\nexports.WebSocket = (() => {\n    try {\n        return (0, utils_js_1.getNativeWebSocket)();\n    }\n    catch {\n        if (WebSocket_.WebSocket)\n            return WebSocket_.WebSocket;\n        return WebSocket_;\n    }\n})();\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vaXNvd3NAMS4wLjNfd3NAOC4xMy4wL25vZGVfbW9kdWxlcy9pc293cy9fY2pzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQixtQkFBbUIsbUJBQU8sQ0FBQyx5RUFBSTtBQUMvQixtQkFBbUIsbUJBQU8sQ0FBQyxxR0FBWTtBQUN2QyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL0FydGh1ckxhYnMvLi9ub2RlX21vZHVsZXMvLnBucG0vaXNvd3NAMS4wLjNfd3NAOC4xMy4wL25vZGVfbW9kdWxlcy9pc293cy9fY2pzL2luZGV4LmpzP2RiNDAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLldlYlNvY2tldCA9IHZvaWQgMDtcbmNvbnN0IFdlYlNvY2tldF8gPSByZXF1aXJlKFwid3NcIik7XG5jb25zdCB1dGlsc19qc18xID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5leHBvcnRzLldlYlNvY2tldCA9ICgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuICgwLCB1dGlsc19qc18xLmdldE5hdGl2ZVdlYlNvY2tldCkoKTtcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgICBpZiAoV2ViU29ja2V0Xy5XZWJTb2NrZXQpXG4gICAgICAgICAgICByZXR1cm4gV2ViU29ja2V0Xy5XZWJTb2NrZXQ7XG4gICAgICAgIHJldHVybiBXZWJTb2NrZXRfO1xuICAgIH1cbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/isows@1.0.3_ws@8.13.0/node_modules/isows/_cjs/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/isows@1.0.3_ws@8.13.0/node_modules/isows/_cjs/utils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/isows@1.0.3_ws@8.13.0/node_modules/isows/_cjs/utils.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getNativeWebSocket = void 0;\nfunction getNativeWebSocket() {\n    if (typeof WebSocket !== \"undefined\")\n        return WebSocket;\n    if (typeof global.WebSocket !== \"undefined\")\n        return global.WebSocket;\n    if (typeof window.WebSocket !== \"undefined\")\n        return window.WebSocket;\n    if (typeof self.WebSocket !== \"undefined\")\n        return self.WebSocket;\n    throw new Error(\"`WebSocket` is not supported in this environment\");\n}\nexports.getNativeWebSocket = getNativeWebSocket;\n//# sourceMappingURL=utils.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vaXNvd3NAMS4wLjNfd3NAOC4xMy4wL25vZGVfbW9kdWxlcy9pc293cy9fY2pzL3V0aWxzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQXJ0aHVyTGFicy8uL25vZGVfbW9kdWxlcy8ucG5wbS9pc293c0AxLjAuM193c0A4LjEzLjAvbm9kZV9tb2R1bGVzL2lzb3dzL19janMvdXRpbHMuanM/NDEyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0TmF0aXZlV2ViU29ja2V0ID0gdm9pZCAwO1xuZnVuY3Rpb24gZ2V0TmF0aXZlV2ViU29ja2V0KCkge1xuICAgIGlmICh0eXBlb2YgV2ViU29ja2V0ICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICByZXR1cm4gV2ViU29ja2V0O1xuICAgIGlmICh0eXBlb2YgZ2xvYmFsLldlYlNvY2tldCAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5XZWJTb2NrZXQ7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuV2ViU29ja2V0ICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICByZXR1cm4gd2luZG93LldlYlNvY2tldDtcbiAgICBpZiAodHlwZW9mIHNlbGYuV2ViU29ja2V0ICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICByZXR1cm4gc2VsZi5XZWJTb2NrZXQ7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiYFdlYlNvY2tldGAgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGVudmlyb25tZW50XCIpO1xufVxuZXhwb3J0cy5nZXROYXRpdmVXZWJTb2NrZXQgPSBnZXROYXRpdmVXZWJTb2NrZXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/isows@1.0.3_ws@8.13.0/node_modules/isows/_cjs/utils.js\n");

/***/ })

};
;