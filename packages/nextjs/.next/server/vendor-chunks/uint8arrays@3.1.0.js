"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uint8arrays@3.1.0";
exports.ids = ["vendor-chunks/uint8arrays@3.1.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/alloc.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/alloc.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   alloc: () => (/* binding */ alloc),\n/* harmony export */   allocUnsafe: () => (/* binding */ allocUnsafe)\n/* harmony export */ });\nfunction alloc(size = 0) {\n  if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {\n    return globalThis.Buffer.alloc(size);\n  }\n  return new Uint8Array(size);\n}\nfunction allocUnsafe(size = 0) {\n  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {\n    return globalThis.Buffer.allocUnsafe(size);\n  }\n  return new Uint8Array(size);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdWludDhhcnJheXNAMy4xLjAvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvYWxsb2MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcnRodXJMYWJzLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3VpbnQ4YXJyYXlzQDMuMS4wL25vZGVfbW9kdWxlcy91aW50OGFycmF5cy9lc20vc3JjL2FsbG9jLmpzPzkxNmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGFsbG9jKHNpemUgPSAwKSB7XG4gIGlmIChnbG9iYWxUaGlzLkJ1ZmZlciAhPSBudWxsICYmIGdsb2JhbFRoaXMuQnVmZmVyLmFsbG9jICE9IG51bGwpIHtcbiAgICByZXR1cm4gZ2xvYmFsVGhpcy5CdWZmZXIuYWxsb2Moc2l6ZSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHNpemUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFsbG9jVW5zYWZlKHNpemUgPSAwKSB7XG4gIGlmIChnbG9iYWxUaGlzLkJ1ZmZlciAhPSBudWxsICYmIGdsb2JhbFRoaXMuQnVmZmVyLmFsbG9jVW5zYWZlICE9IG51bGwpIHtcbiAgICByZXR1cm4gZ2xvYmFsVGhpcy5CdWZmZXIuYWxsb2NVbnNhZmUoc2l6ZSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHNpemUpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/alloc.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/compare.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/compare.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compare: () => (/* binding */ compare)\n/* harmony export */ });\nfunction compare(a, b) {\n  for (let i = 0; i < a.byteLength; i++) {\n    if (a[i] < b[i]) {\n      return -1;\n    }\n    if (a[i] > b[i]) {\n      return 1;\n    }\n  }\n  if (a.byteLength > b.byteLength) {\n    return 1;\n  }\n  if (a.byteLength < b.byteLength) {\n    return -1;\n  }\n  return 0;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdWludDhhcnJheXNAMy4xLjAvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvY29tcGFyZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUCxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0FydGh1ckxhYnMvLi9ub2RlX21vZHVsZXMvLnBucG0vdWludDhhcnJheXNAMy4xLjAvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvY29tcGFyZS5qcz8xYjA0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgIGlmIChhW2ldIDwgYltpXSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAoYVtpXSA+IGJbaV0pIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuICBpZiAoYS5ieXRlTGVuZ3RoID4gYi5ieXRlTGVuZ3RoKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKGEuYnl0ZUxlbmd0aCA8IGIuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICByZXR1cm4gMDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/compare.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/concat.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/concat.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   concat: () => (/* binding */ concat)\n/* harmony export */ });\n/* harmony import */ var _alloc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alloc.js */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/alloc.js\");\n\nfunction concat(arrays, length) {\n  if (!length) {\n    length = arrays.reduce((acc, curr) => acc + curr.length, 0);\n  }\n  const output = (0,_alloc_js__WEBPACK_IMPORTED_MODULE_0__.allocUnsafe)(length);\n  let offset = 0;\n  for (const arr of arrays) {\n    output.set(arr, offset);\n    offset += arr.length;\n  }\n  return output;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdWludDhhcnJheXNAMy4xLjAvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvY29uY2F0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBQ2xDO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNEQUFXO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQXJ0aHVyTGFicy8uL25vZGVfbW9kdWxlcy8ucG5wbS91aW50OGFycmF5c0AzLjEuMC9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvZXNtL3NyYy9jb25jYXQuanM/MThjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGxvY1Vuc2FmZSB9IGZyb20gJy4vYWxsb2MuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdChhcnJheXMsIGxlbmd0aCkge1xuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IGFycmF5cy5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3Vyci5sZW5ndGgsIDApO1xuICB9XG4gIGNvbnN0IG91dHB1dCA9IGFsbG9jVW5zYWZlKGxlbmd0aCk7XG4gIGxldCBvZmZzZXQgPSAwO1xuICBmb3IgKGNvbnN0IGFyciBvZiBhcnJheXMpIHtcbiAgICBvdXRwdXQuc2V0KGFyciwgb2Zmc2V0KTtcbiAgICBvZmZzZXQgKz0gYXJyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/concat.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/equals.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/equals.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   equals: () => (/* binding */ equals)\n/* harmony export */ });\nfunction equals(a, b) {\n  if (a === b) {\n    return true;\n  }\n  if (a.byteLength !== b.byteLength) {\n    return false;\n  }\n  for (let i = 0; i < a.byteLength; i++) {\n    if (a[i] !== b[i]) {\n      return false;\n    }\n  }\n  return true;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdWludDhhcnJheXNAMy4xLjAvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvZXF1YWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQXJ0aHVyTGFicy8uL25vZGVfbW9kdWxlcy8ucG5wbS91aW50OGFycmF5c0AzLjEuMC9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvZXNtL3NyYy9lcXVhbHMuanM/ODJmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoYS5ieXRlTGVuZ3RoICE9PSBiLmJ5dGVMZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/equals.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/from-string.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/from-string.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromString: () => (/* binding */ fromString)\n/* harmony export */ });\n/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/bases.js */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/util/bases.js\");\n\nfunction fromString(string, encoding = 'utf8') {\n  const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][encoding];\n  if (!base) {\n    throw new Error(`Unsupported encoding \"${ encoding }\"`);\n  }\n  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {\n    return globalThis.Buffer.from(string, 'utf8');\n  }\n  return base.decoder.decode(`${ base.prefix }${ string }`);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdWludDhhcnJheXNAMy4xLjAvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvZnJvbS1zdHJpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0M7QUFDN0I7QUFDUCxlQUFlLHNEQUFLO0FBQ3BCO0FBQ0EsOENBQThDLFVBQVU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsYUFBYSxHQUFHLFFBQVE7QUFDekQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcnRodXJMYWJzLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3VpbnQ4YXJyYXlzQDMuMS4wL25vZGVfbW9kdWxlcy91aW50OGFycmF5cy9lc20vc3JjL2Zyb20tc3RyaW5nLmpzP2YwYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VzIGZyb20gJy4vdXRpbC9iYXNlcy5qcyc7XG5leHBvcnQgZnVuY3Rpb24gZnJvbVN0cmluZyhzdHJpbmcsIGVuY29kaW5nID0gJ3V0ZjgnKSB7XG4gIGNvbnN0IGJhc2UgPSBiYXNlc1tlbmNvZGluZ107XG4gIGlmICghYmFzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgZW5jb2RpbmcgXCIkeyBlbmNvZGluZyB9XCJgKTtcbiAgfVxuICBpZiAoKGVuY29kaW5nID09PSAndXRmOCcgfHwgZW5jb2RpbmcgPT09ICd1dGYtOCcpICYmIGdsb2JhbFRoaXMuQnVmZmVyICE9IG51bGwgJiYgZ2xvYmFsVGhpcy5CdWZmZXIuZnJvbSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGdsb2JhbFRoaXMuQnVmZmVyLmZyb20oc3RyaW5nLCAndXRmOCcpO1xuICB9XG4gIHJldHVybiBiYXNlLmRlY29kZXIuZGVjb2RlKGAkeyBiYXNlLnByZWZpeCB9JHsgc3RyaW5nIH1gKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/from-string.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/index.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compare: () => (/* reexport safe */ _compare_js__WEBPACK_IMPORTED_MODULE_0__.compare),\n/* harmony export */   concat: () => (/* reexport safe */ _concat_js__WEBPACK_IMPORTED_MODULE_1__.concat),\n/* harmony export */   equals: () => (/* reexport safe */ _equals_js__WEBPACK_IMPORTED_MODULE_2__.equals),\n/* harmony export */   fromString: () => (/* reexport safe */ _from_string_js__WEBPACK_IMPORTED_MODULE_3__.fromString),\n/* harmony export */   toString: () => (/* reexport safe */ _to_string_js__WEBPACK_IMPORTED_MODULE_4__.toString),\n/* harmony export */   xor: () => (/* reexport safe */ _xor_js__WEBPACK_IMPORTED_MODULE_5__.xor)\n/* harmony export */ });\n/* harmony import */ var _compare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compare.js */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/compare.js\");\n/* harmony import */ var _concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat.js */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/concat.js\");\n/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equals.js */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/equals.js\");\n/* harmony import */ var _from_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./from-string.js */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/from-string.js\");\n/* harmony import */ var _to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to-string.js */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/to-string.js\");\n/* harmony import */ var _xor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xor.js */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/xor.js\");\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdWludDhhcnJheXNAMy4xLjAvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0Y7QUFDQTtBQUNTO0FBQ0o7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL0FydGh1ckxhYnMvLi9ub2RlX21vZHVsZXMvLnBucG0vdWludDhhcnJheXNAMy4xLjAvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvaW5kZXguanM/NDVkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnLi9jb21wYXJlLmpzJztcbmltcG9ydCB7IGNvbmNhdCB9IGZyb20gJy4vY29uY2F0LmpzJztcbmltcG9ydCB7IGVxdWFscyB9IGZyb20gJy4vZXF1YWxzLmpzJztcbmltcG9ydCB7IGZyb21TdHJpbmcgfSBmcm9tICcuL2Zyb20tc3RyaW5nLmpzJztcbmltcG9ydCB7IHRvU3RyaW5nIH0gZnJvbSAnLi90by1zdHJpbmcuanMnO1xuaW1wb3J0IHsgeG9yIH0gZnJvbSAnLi94b3IuanMnO1xuZXhwb3J0IHtcbiAgY29tcGFyZSxcbiAgY29uY2F0LFxuICBlcXVhbHMsXG4gIGZyb21TdHJpbmcsXG4gIHRvU3RyaW5nLFxuICB4b3Jcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/to-string.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/to-string.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toString: () => (/* binding */ toString)\n/* harmony export */ });\n/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/bases.js */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/util/bases.js\");\n\nfunction toString(array, encoding = 'utf8') {\n  const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][encoding];\n  if (!base) {\n    throw new Error(`Unsupported encoding \"${ encoding }\"`);\n  }\n  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {\n    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');\n  }\n  return base.encoder.encode(array).substring(1);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdWludDhhcnJheXNAMy4xLjAvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvdG8tc3RyaW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9DO0FBQzdCO0FBQ1AsZUFBZSxzREFBSztBQUNwQjtBQUNBLDhDQUE4QyxVQUFVO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0FydGh1ckxhYnMvLi9ub2RlX21vZHVsZXMvLnBucG0vdWludDhhcnJheXNAMy4xLjAvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvdG8tc3RyaW5nLmpzPzAxZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VzIGZyb20gJy4vdXRpbC9iYXNlcy5qcyc7XG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcoYXJyYXksIGVuY29kaW5nID0gJ3V0ZjgnKSB7XG4gIGNvbnN0IGJhc2UgPSBiYXNlc1tlbmNvZGluZ107XG4gIGlmICghYmFzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgZW5jb2RpbmcgXCIkeyBlbmNvZGluZyB9XCJgKTtcbiAgfVxuICBpZiAoKGVuY29kaW5nID09PSAndXRmOCcgfHwgZW5jb2RpbmcgPT09ICd1dGYtOCcpICYmIGdsb2JhbFRoaXMuQnVmZmVyICE9IG51bGwgJiYgZ2xvYmFsVGhpcy5CdWZmZXIuZnJvbSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGdsb2JhbFRoaXMuQnVmZmVyLmZyb20oYXJyYXkuYnVmZmVyLCBhcnJheS5ieXRlT2Zmc2V0LCBhcnJheS5ieXRlTGVuZ3RoKS50b1N0cmluZygndXRmOCcpO1xuICB9XG4gIHJldHVybiBiYXNlLmVuY29kZXIuZW5jb2RlKGFycmF5KS5zdWJzdHJpbmcoMSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/to-string.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/util/bases.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/util/bases.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var multiformats_basics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/basics */ \"(ssr)/./node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/basics.js\");\n/* harmony import */ var _alloc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../alloc.js */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/alloc.js\");\n\n\nfunction createCodec(name, prefix, encode, decode) {\n  return {\n    name,\n    prefix,\n    encoder: {\n      name,\n      prefix,\n      encode\n    },\n    decoder: { decode }\n  };\n}\nconst string = createCodec('utf8', 'u', buf => {\n  const decoder = new TextDecoder('utf8');\n  return 'u' + decoder.decode(buf);\n}, str => {\n  const encoder = new TextEncoder();\n  return encoder.encode(str.substring(1));\n});\nconst ascii = createCodec('ascii', 'a', buf => {\n  let string = 'a';\n  for (let i = 0; i < buf.length; i++) {\n    string += String.fromCharCode(buf[i]);\n  }\n  return string;\n}, str => {\n  str = str.substring(1);\n  const buf = (0,_alloc_js__WEBPACK_IMPORTED_MODULE_1__.allocUnsafe)(str.length);\n  for (let i = 0; i < str.length; i++) {\n    buf[i] = str.charCodeAt(i);\n  }\n  return buf;\n});\nconst BASES = {\n  utf8: string,\n  'utf-8': string,\n  hex: multiformats_basics__WEBPACK_IMPORTED_MODULE_0__.bases.base16,\n  latin1: ascii,\n  ascii: ascii,\n  binary: ascii,\n  ...multiformats_basics__WEBPACK_IMPORTED_MODULE_0__.bases\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BASES);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdWludDhhcnJheXNAMy4xLjAvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvdXRpbC9iYXNlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFDRjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsY0FBYyxzREFBVztBQUN6QixrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxPQUFPLHNEQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzREFBSztBQUNWO0FBQ0EsaUVBQWUsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL0FydGh1ckxhYnMvLi9ub2RlX21vZHVsZXMvLnBucG0vdWludDhhcnJheXNAMy4xLjAvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvdXRpbC9iYXNlcy5qcz8zYTE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJhc2VzIH0gZnJvbSAnbXVsdGlmb3JtYXRzL2Jhc2ljcyc7XG5pbXBvcnQgeyBhbGxvY1Vuc2FmZSB9IGZyb20gJy4uL2FsbG9jLmpzJztcbmZ1bmN0aW9uIGNyZWF0ZUNvZGVjKG5hbWUsIHByZWZpeCwgZW5jb2RlLCBkZWNvZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHByZWZpeCxcbiAgICBlbmNvZGVyOiB7XG4gICAgICBuYW1lLFxuICAgICAgcHJlZml4LFxuICAgICAgZW5jb2RlXG4gICAgfSxcbiAgICBkZWNvZGVyOiB7IGRlY29kZSB9XG4gIH07XG59XG5jb25zdCBzdHJpbmcgPSBjcmVhdGVDb2RlYygndXRmOCcsICd1JywgYnVmID0+IHtcbiAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmOCcpO1xuICByZXR1cm4gJ3UnICsgZGVjb2Rlci5kZWNvZGUoYnVmKTtcbn0sIHN0ciA9PiB7XG4gIGNvbnN0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgcmV0dXJuIGVuY29kZXIuZW5jb2RlKHN0ci5zdWJzdHJpbmcoMSkpO1xufSk7XG5jb25zdCBhc2NpaSA9IGNyZWF0ZUNvZGVjKCdhc2NpaScsICdhJywgYnVmID0+IHtcbiAgbGV0IHN0cmluZyA9ICdhJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWYubGVuZ3RoOyBpKyspIHtcbiAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pO1xuICB9XG4gIHJldHVybiBzdHJpbmc7XG59LCBzdHIgPT4ge1xuICBzdHIgPSBzdHIuc3Vic3RyaW5nKDEpO1xuICBjb25zdCBidWYgPSBhbGxvY1Vuc2FmZShzdHIubGVuZ3RoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBidWZbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gYnVmO1xufSk7XG5jb25zdCBCQVNFUyA9IHtcbiAgdXRmODogc3RyaW5nLFxuICAndXRmLTgnOiBzdHJpbmcsXG4gIGhleDogYmFzZXMuYmFzZTE2LFxuICBsYXRpbjE6IGFzY2lpLFxuICBhc2NpaTogYXNjaWksXG4gIGJpbmFyeTogYXNjaWksXG4gIC4uLmJhc2VzXG59O1xuZXhwb3J0IGRlZmF1bHQgQkFTRVM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/util/bases.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/xor.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/xor.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   xor: () => (/* binding */ xor)\n/* harmony export */ });\n/* harmony import */ var _alloc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alloc.js */ \"(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/alloc.js\");\n\nfunction xor(a, b) {\n  if (a.length !== b.length) {\n    throw new Error('Inputs should have the same length');\n  }\n  const result = (0,_alloc_js__WEBPACK_IMPORTED_MODULE_0__.allocUnsafe)(a.length);\n  for (let i = 0; i < a.length; i++) {\n    result[i] = a[i] ^ b[i];\n  }\n  return result;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdWludDhhcnJheXNAMy4xLjAvbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMveG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBQ2xDO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNEQUFXO0FBQzVCLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQXJ0aHVyTGFicy8uL25vZGVfbW9kdWxlcy8ucG5wbS91aW50OGFycmF5c0AzLjEuMC9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvZXNtL3NyYy94b3IuanM/ZTYyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGxvY1Vuc2FmZSB9IGZyb20gJy4vYWxsb2MuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIHhvcihhLCBiKSB7XG4gIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0lucHV0cyBzaG91bGQgaGF2ZSB0aGUgc2FtZSBsZW5ndGgnKTtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBhbGxvY1Vuc2FmZShhLmxlbmd0aCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdFtpXSA9IGFbaV0gXiBiW2ldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/xor.js\n");

/***/ })

};
;