"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@walletconnect+relay-api@1.0.10";
exports.ids = ["vendor-chunks/@walletconnect+relay-api@1.0.10"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+relay-api@1.0.10/node_modules/@walletconnect/relay-api/dist/index.es.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+relay-api@1.0.10/node_modules/@walletconnect/relay-api/dist/index.es.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RELAY_JSONRPC: () => (/* binding */ C),\n/* harmony export */   isPublishMethod: () => (/* binding */ c),\n/* harmony export */   isPublishParams: () => (/* binding */ h),\n/* harmony export */   isPublishRequest: () => (/* binding */ P),\n/* harmony export */   isSubscribeMethod: () => (/* binding */ b),\n/* harmony export */   isSubscribeParams: () => (/* binding */ a),\n/* harmony export */   isSubscribeRequest: () => (/* binding */ R),\n/* harmony export */   isSubscriptionMethod: () => (/* binding */ m),\n/* harmony export */   isSubscriptionParams: () => (/* binding */ d),\n/* harmony export */   isSubscriptionRequest: () => (/* binding */ S),\n/* harmony export */   isUnsubscribeMethod: () => (/* binding */ o),\n/* harmony export */   isUnsubscribeParams: () => (/* binding */ p),\n/* harmony export */   isUnsubscribeRequest: () => (/* binding */ _),\n/* harmony export */   parsePublishRequest: () => (/* binding */ q),\n/* harmony export */   parseSubscribeRequest: () => (/* binding */ g),\n/* harmony export */   parseSubscriptionRequest: () => (/* binding */ k),\n/* harmony export */   parseUnsubscribeRequest: () => (/* binding */ E)\n/* harmony export */ });\nfunction e(s,r,i=\"string\"){if(!s[r]||typeof s[r]!==i)throw new Error(`Missing or invalid \"${r}\" param`)}function l(s,r){let i=!0;return r.forEach(t=>{t in s||(i=!1)}),i}function f(s,r){return Array.isArray(s)?s.length===r:Object.keys(s).length===r}function w(s,r){return Array.isArray(s)?s.length>=r:Object.keys(s).length>=r}function u(s,r,i){return(i.length?w(s,r.length):f(s,r.length))?l(s,r):!1}function n(s,r,i=\"_\"){const t=s.split(i);return t[t.length-1].trim().toLowerCase()===r.trim().toLowerCase()}function R(s){return b(s.method)&&a(s.params)}function b(s){return n(s,\"subscribe\")}function a(s){return u(s,[\"topic\"],[])}function P(s){return c(s.method)&&h(s.params)}function c(s){return n(s,\"publish\")}function h(s){return u(s,[\"message\",\"topic\",\"ttl\"],[\"prompt\",\"tag\"])}function _(s){return o(s.method)&&p(s.params)}function o(s){return n(s,\"unsubscribe\")}function p(s){return u(s,[\"id\",\"topic\"],[])}function S(s){return m(s.method)&&d(s.params)}function m(s){return n(s,\"subscription\")}function d(s){return u(s,[\"id\",\"data\"],[])}function g(s){if(!b(s.method))throw new Error(\"JSON-RPC Request has invalid subscribe method\");if(!a(s.params))throw new Error(\"JSON-RPC Request has invalid subscribe params\");const r=s.params;return e(r,\"topic\"),r}function q(s){if(!c(s.method))throw new Error(\"JSON-RPC Request has invalid publish method\");if(!h(s.params))throw new Error(\"JSON-RPC Request has invalid publish params\");const r=s.params;return e(r,\"topic\"),e(r,\"message\"),e(r,\"ttl\",\"number\"),r}function E(s){if(!o(s.method))throw new Error(\"JSON-RPC Request has invalid unsubscribe method\");if(!p(s.params))throw new Error(\"JSON-RPC Request has invalid unsubscribe params\");const r=s.params;return e(r,\"id\"),r}function k(s){if(!m(s.method))throw new Error(\"JSON-RPC Request has invalid subscription method\");if(!d(s.params))throw new Error(\"JSON-RPC Request has invalid subscription params\");const r=s.params;return e(r,\"id\"),e(r,\"data\"),r}const C={waku:{publish:\"waku_publish\",batchPublish:\"waku_batchPublish\",subscribe:\"waku_subscribe\",batchSubscribe:\"waku_batchSubscribe\",subscription:\"waku_subscription\",unsubscribe:\"waku_unsubscribe\",batchUnsubscribe:\"waku_batchUnsubscribe\",batchFetchMessages:\"waku_batchFetchMessages\"},irn:{publish:\"irn_publish\",batchPublish:\"irn_batchPublish\",subscribe:\"irn_subscribe\",batchSubscribe:\"irn_batchSubscribe\",subscription:\"irn_subscription\",unsubscribe:\"irn_unsubscribe\",batchUnsubscribe:\"irn_batchUnsubscribe\",batchFetchMessages:\"irn_batchFetchMessages\"},iridium:{publish:\"iridium_publish\",batchPublish:\"iridium_batchPublish\",subscribe:\"iridium_subscribe\",batchSubscribe:\"iridium_batchSubscribe\",subscription:\"iridium_subscription\",unsubscribe:\"iridium_unsubscribe\",batchUnsubscribe:\"iridium_batchUnsubscribe\",batchFetchMessages:\"iridium_batchFetchMessages\"}};\n//# sourceMappingURL=index.es.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmVsYXktYXBpQDEuMC4xMC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvcmVsYXktYXBpL2Rpc3QvaW5kZXguZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQkFBMkIsaUVBQWlFLEVBQUUsVUFBVSxnQkFBZ0IsU0FBUyxxQkFBcUIsZUFBZSxJQUFJLGdCQUFnQiwrREFBK0QsZ0JBQWdCLDZEQUE2RCxrQkFBa0IsdURBQXVELHNCQUFzQixtQkFBbUIsbUVBQW1FLGNBQWMsZ0NBQWdDLGNBQWMsd0JBQXdCLGNBQWMseUJBQXlCLGNBQWMsZ0NBQWdDLGNBQWMsc0JBQXNCLGNBQWMsdURBQXVELGNBQWMsZ0NBQWdDLGNBQWMsMEJBQTBCLGNBQWMsOEJBQThCLGNBQWMsZ0NBQWdDLGNBQWMsMkJBQTJCLGNBQWMsNkJBQTZCLGNBQWMsaUZBQWlGLGlGQUFpRixpQkFBaUIsc0JBQXNCLGNBQWMsK0VBQStFLCtFQUErRSxpQkFBaUIseURBQXlELGNBQWMsbUZBQW1GLG1GQUFtRixpQkFBaUIsbUJBQW1CLGNBQWMsb0ZBQW9GLG9GQUFvRixpQkFBaUIsK0JBQStCLFNBQVMsTUFBTSw4UUFBOFEsTUFBTSxzUUFBc1EsVUFBVSx3U0FBbXRCO0FBQ2pxRyIsInNvdXJjZXMiOlsid2VicGFjazovL0FydGh1ckxhYnMvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrcmVsYXktYXBpQDEuMC4xMC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvcmVsYXktYXBpL2Rpc3QvaW5kZXguZXMuanM/Yjg2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBlKHMscixpPVwic3RyaW5nXCIpe2lmKCFzW3JdfHx0eXBlb2Ygc1tyXSE9PWkpdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIG9yIGludmFsaWQgXCIke3J9XCIgcGFyYW1gKX1mdW5jdGlvbiBsKHMscil7bGV0IGk9ITA7cmV0dXJuIHIuZm9yRWFjaCh0PT57dCBpbiBzfHwoaT0hMSl9KSxpfWZ1bmN0aW9uIGYocyxyKXtyZXR1cm4gQXJyYXkuaXNBcnJheShzKT9zLmxlbmd0aD09PXI6T2JqZWN0LmtleXMocykubGVuZ3RoPT09cn1mdW5jdGlvbiB3KHMscil7cmV0dXJuIEFycmF5LmlzQXJyYXkocyk/cy5sZW5ndGg+PXI6T2JqZWN0LmtleXMocykubGVuZ3RoPj1yfWZ1bmN0aW9uIHUocyxyLGkpe3JldHVybihpLmxlbmd0aD93KHMsci5sZW5ndGgpOmYocyxyLmxlbmd0aCkpP2wocyxyKTohMX1mdW5jdGlvbiBuKHMscixpPVwiX1wiKXtjb25zdCB0PXMuc3BsaXQoaSk7cmV0dXJuIHRbdC5sZW5ndGgtMV0udHJpbSgpLnRvTG93ZXJDYXNlKCk9PT1yLnRyaW0oKS50b0xvd2VyQ2FzZSgpfWZ1bmN0aW9uIFIocyl7cmV0dXJuIGIocy5tZXRob2QpJiZhKHMucGFyYW1zKX1mdW5jdGlvbiBiKHMpe3JldHVybiBuKHMsXCJzdWJzY3JpYmVcIil9ZnVuY3Rpb24gYShzKXtyZXR1cm4gdShzLFtcInRvcGljXCJdLFtdKX1mdW5jdGlvbiBQKHMpe3JldHVybiBjKHMubWV0aG9kKSYmaChzLnBhcmFtcyl9ZnVuY3Rpb24gYyhzKXtyZXR1cm4gbihzLFwicHVibGlzaFwiKX1mdW5jdGlvbiBoKHMpe3JldHVybiB1KHMsW1wibWVzc2FnZVwiLFwidG9waWNcIixcInR0bFwiXSxbXCJwcm9tcHRcIixcInRhZ1wiXSl9ZnVuY3Rpb24gXyhzKXtyZXR1cm4gbyhzLm1ldGhvZCkmJnAocy5wYXJhbXMpfWZ1bmN0aW9uIG8ocyl7cmV0dXJuIG4ocyxcInVuc3Vic2NyaWJlXCIpfWZ1bmN0aW9uIHAocyl7cmV0dXJuIHUocyxbXCJpZFwiLFwidG9waWNcIl0sW10pfWZ1bmN0aW9uIFMocyl7cmV0dXJuIG0ocy5tZXRob2QpJiZkKHMucGFyYW1zKX1mdW5jdGlvbiBtKHMpe3JldHVybiBuKHMsXCJzdWJzY3JpcHRpb25cIil9ZnVuY3Rpb24gZChzKXtyZXR1cm4gdShzLFtcImlkXCIsXCJkYXRhXCJdLFtdKX1mdW5jdGlvbiBnKHMpe2lmKCFiKHMubWV0aG9kKSl0aHJvdyBuZXcgRXJyb3IoXCJKU09OLVJQQyBSZXF1ZXN0IGhhcyBpbnZhbGlkIHN1YnNjcmliZSBtZXRob2RcIik7aWYoIWEocy5wYXJhbXMpKXRocm93IG5ldyBFcnJvcihcIkpTT04tUlBDIFJlcXVlc3QgaGFzIGludmFsaWQgc3Vic2NyaWJlIHBhcmFtc1wiKTtjb25zdCByPXMucGFyYW1zO3JldHVybiBlKHIsXCJ0b3BpY1wiKSxyfWZ1bmN0aW9uIHEocyl7aWYoIWMocy5tZXRob2QpKXRocm93IG5ldyBFcnJvcihcIkpTT04tUlBDIFJlcXVlc3QgaGFzIGludmFsaWQgcHVibGlzaCBtZXRob2RcIik7aWYoIWgocy5wYXJhbXMpKXRocm93IG5ldyBFcnJvcihcIkpTT04tUlBDIFJlcXVlc3QgaGFzIGludmFsaWQgcHVibGlzaCBwYXJhbXNcIik7Y29uc3Qgcj1zLnBhcmFtcztyZXR1cm4gZShyLFwidG9waWNcIiksZShyLFwibWVzc2FnZVwiKSxlKHIsXCJ0dGxcIixcIm51bWJlclwiKSxyfWZ1bmN0aW9uIEUocyl7aWYoIW8ocy5tZXRob2QpKXRocm93IG5ldyBFcnJvcihcIkpTT04tUlBDIFJlcXVlc3QgaGFzIGludmFsaWQgdW5zdWJzY3JpYmUgbWV0aG9kXCIpO2lmKCFwKHMucGFyYW1zKSl0aHJvdyBuZXcgRXJyb3IoXCJKU09OLVJQQyBSZXF1ZXN0IGhhcyBpbnZhbGlkIHVuc3Vic2NyaWJlIHBhcmFtc1wiKTtjb25zdCByPXMucGFyYW1zO3JldHVybiBlKHIsXCJpZFwiKSxyfWZ1bmN0aW9uIGsocyl7aWYoIW0ocy5tZXRob2QpKXRocm93IG5ldyBFcnJvcihcIkpTT04tUlBDIFJlcXVlc3QgaGFzIGludmFsaWQgc3Vic2NyaXB0aW9uIG1ldGhvZFwiKTtpZighZChzLnBhcmFtcykpdGhyb3cgbmV3IEVycm9yKFwiSlNPTi1SUEMgUmVxdWVzdCBoYXMgaW52YWxpZCBzdWJzY3JpcHRpb24gcGFyYW1zXCIpO2NvbnN0IHI9cy5wYXJhbXM7cmV0dXJuIGUocixcImlkXCIpLGUocixcImRhdGFcIikscn1jb25zdCBDPXt3YWt1OntwdWJsaXNoOlwid2FrdV9wdWJsaXNoXCIsYmF0Y2hQdWJsaXNoOlwid2FrdV9iYXRjaFB1Ymxpc2hcIixzdWJzY3JpYmU6XCJ3YWt1X3N1YnNjcmliZVwiLGJhdGNoU3Vic2NyaWJlOlwid2FrdV9iYXRjaFN1YnNjcmliZVwiLHN1YnNjcmlwdGlvbjpcIndha3Vfc3Vic2NyaXB0aW9uXCIsdW5zdWJzY3JpYmU6XCJ3YWt1X3Vuc3Vic2NyaWJlXCIsYmF0Y2hVbnN1YnNjcmliZTpcIndha3VfYmF0Y2hVbnN1YnNjcmliZVwiLGJhdGNoRmV0Y2hNZXNzYWdlczpcIndha3VfYmF0Y2hGZXRjaE1lc3NhZ2VzXCJ9LGlybjp7cHVibGlzaDpcImlybl9wdWJsaXNoXCIsYmF0Y2hQdWJsaXNoOlwiaXJuX2JhdGNoUHVibGlzaFwiLHN1YnNjcmliZTpcImlybl9zdWJzY3JpYmVcIixiYXRjaFN1YnNjcmliZTpcImlybl9iYXRjaFN1YnNjcmliZVwiLHN1YnNjcmlwdGlvbjpcImlybl9zdWJzY3JpcHRpb25cIix1bnN1YnNjcmliZTpcImlybl91bnN1YnNjcmliZVwiLGJhdGNoVW5zdWJzY3JpYmU6XCJpcm5fYmF0Y2hVbnN1YnNjcmliZVwiLGJhdGNoRmV0Y2hNZXNzYWdlczpcImlybl9iYXRjaEZldGNoTWVzc2FnZXNcIn0saXJpZGl1bTp7cHVibGlzaDpcImlyaWRpdW1fcHVibGlzaFwiLGJhdGNoUHVibGlzaDpcImlyaWRpdW1fYmF0Y2hQdWJsaXNoXCIsc3Vic2NyaWJlOlwiaXJpZGl1bV9zdWJzY3JpYmVcIixiYXRjaFN1YnNjcmliZTpcImlyaWRpdW1fYmF0Y2hTdWJzY3JpYmVcIixzdWJzY3JpcHRpb246XCJpcmlkaXVtX3N1YnNjcmlwdGlvblwiLHVuc3Vic2NyaWJlOlwiaXJpZGl1bV91bnN1YnNjcmliZVwiLGJhdGNoVW5zdWJzY3JpYmU6XCJpcmlkaXVtX2JhdGNoVW5zdWJzY3JpYmVcIixiYXRjaEZldGNoTWVzc2FnZXM6XCJpcmlkaXVtX2JhdGNoRmV0Y2hNZXNzYWdlc1wifX07ZXhwb3J0e0MgYXMgUkVMQVlfSlNPTlJQQyxjIGFzIGlzUHVibGlzaE1ldGhvZCxoIGFzIGlzUHVibGlzaFBhcmFtcyxQIGFzIGlzUHVibGlzaFJlcXVlc3QsYiBhcyBpc1N1YnNjcmliZU1ldGhvZCxhIGFzIGlzU3Vic2NyaWJlUGFyYW1zLFIgYXMgaXNTdWJzY3JpYmVSZXF1ZXN0LG0gYXMgaXNTdWJzY3JpcHRpb25NZXRob2QsZCBhcyBpc1N1YnNjcmlwdGlvblBhcmFtcyxTIGFzIGlzU3Vic2NyaXB0aW9uUmVxdWVzdCxvIGFzIGlzVW5zdWJzY3JpYmVNZXRob2QscCBhcyBpc1Vuc3Vic2NyaWJlUGFyYW1zLF8gYXMgaXNVbnN1YnNjcmliZVJlcXVlc3QscSBhcyBwYXJzZVB1Ymxpc2hSZXF1ZXN0LGcgYXMgcGFyc2VTdWJzY3JpYmVSZXF1ZXN0LGsgYXMgcGFyc2VTdWJzY3JpcHRpb25SZXF1ZXN0LEUgYXMgcGFyc2VVbnN1YnNjcmliZVJlcXVlc3R9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXMuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+relay-api@1.0.10/node_modules/@walletconnect/relay-api/dist/index.es.js\n");

/***/ })

};
;