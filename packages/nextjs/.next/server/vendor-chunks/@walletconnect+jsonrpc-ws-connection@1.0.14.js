"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@walletconnect+jsonrpc-ws-connection@1.0.14";
exports.ids = ["vendor-chunks/@walletconnect+jsonrpc-ws-connection@1.0.14"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@walletconnect+jsonrpc-ws-connection@1.0.14/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@walletconnect+jsonrpc-ws-connection@1.0.14/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WsConnection: () => (/* binding */ f),\n/* harmony export */   \"default\": () => (/* binding */ f)\n/* harmony export */ });\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"events\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @walletconnect/safe-json */ \"(ssr)/./node_modules/.pnpm/@walletconnect+safe-json@1.0.2/node_modules/@walletconnect/safe-json/dist/esm/index.js\");\n/* harmony import */ var _walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @walletconnect/jsonrpc-utils */ \"(ssr)/./node_modules/.pnpm/@walletconnect+jsonrpc-utils@1.0.8/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js\");\nconst w=()=>typeof WebSocket<\"u\"?WebSocket:typeof global<\"u\"&&typeof global.WebSocket<\"u\"?global.WebSocket:typeof window<\"u\"&&typeof window.WebSocket<\"u\"?window.WebSocket:typeof self<\"u\"&&typeof self.WebSocket<\"u\"?self.WebSocket:__webpack_require__(/*! ws */ \"(ssr)/./node_modules/.pnpm/ws@7.5.10/node_modules/ws/index.js\"),b=()=>typeof WebSocket<\"u\"||typeof global<\"u\"&&typeof global.WebSocket<\"u\"||typeof window<\"u\"&&typeof window.WebSocket<\"u\"||typeof self<\"u\"&&typeof self.WebSocket<\"u\",a=c=>c.split(\"?\")[0],h=10,S=w();class f{constructor(e){if(this.url=e,this.events=new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.registering=!1,!(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.isWsUrl)(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);this.url=e}get connected(){return typeof this.socket<\"u\"}get connecting(){return this.registering}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async open(e=this.url){await this.register(e)}async close(){return new Promise((e,t)=>{if(typeof this.socket>\"u\"){t(new Error(\"Connection already closed\"));return}this.socket.onclose=n=>{this.onClose(n),e()},this.socket.close()})}async send(e){typeof this.socket>\"u\"&&(this.socket=await this.register());try{this.socket.send((0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__.safeJsonStringify)(e))}catch(t){this.onError(e.id,t)}}register(e=this.url){if(!(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.isWsUrl)(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);if(this.registering){const t=this.events.getMaxListeners();return(this.events.listenerCount(\"register_error\")>=t||this.events.listenerCount(\"open\")>=t)&&this.events.setMaxListeners(t+1),new Promise((n,o)=>{this.events.once(\"register_error\",s=>{this.resetMaxListeners(),o(s)}),this.events.once(\"open\",()=>{if(this.resetMaxListeners(),typeof this.socket>\"u\")return o(new Error(\"WebSocket connection is missing or invalid\"));n(this.socket)})})}return this.url=e,this.registering=!0,new Promise((t,n)=>{const o=new URLSearchParams(e).get(\"origin\"),s=(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.isReactNative)()?{headers:{origin:o}}:{rejectUnauthorized:!(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.isLocalhostUrl)(e)},i=new S(e,[],s);b()?i.onerror=r=>{const l=r;n(this.emitError(l.error))}:i.on(\"error\",r=>{n(this.emitError(r))}),i.onopen=()=>{this.onOpen(i),t(i)}})}onOpen(e){e.onmessage=t=>this.onPayload(t),e.onclose=t=>this.onClose(t),this.socket=e,this.registering=!1,this.events.emit(\"open\")}onClose(e){this.socket=void 0,this.registering=!1,this.events.emit(\"close\",e)}onPayload(e){if(typeof e.data>\"u\")return;const t=typeof e.data==\"string\"?(0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__.safeJsonParse)(e.data):e.data;this.events.emit(\"payload\",t)}onError(e,t){const n=this.parseError(t),o=n.message||n.toString(),s=(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcError)(e,o);this.events.emit(\"payload\",s)}parseError(e,t=this.url){return (0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.parseConnectionError)(e,a(t),\"WS\")}resetMaxListeners(){this.events.getMaxListeners()>h&&this.events.setMaxListeners(h)}emitError(e){const t=this.parseError(new Error(e?.message||`WebSocket connection failed for host: ${a(this.url)}`));return this.events.emit(\"register_error\",t),t}}\n//# sourceMappingURL=index.es.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QranNvbnJwYy13cy1jb25uZWN0aW9uQDEuMC4xNC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvanNvbnJwYy13cy1jb25uZWN0aW9uL2Rpc3QvaW5kZXguZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNRLHFPQUFxTyxtQkFBTyxDQUFDLHlFQUFJLHlNQUF5TSxRQUFRLGVBQWUsOEJBQThCLGdEQUFDLHNCQUFzQixxRUFBQyxpRkFBaUYsRUFBRSxHQUFHLFdBQVcsZ0JBQWdCLDhCQUE4QixpQkFBaUIsd0JBQXdCLFFBQVEsb0JBQW9CLFVBQVUsc0JBQXNCLFNBQVMscUJBQXFCLG9CQUFvQixnQ0FBZ0MsdUJBQXVCLHVCQUF1QixjQUFjLDJCQUEyQiwyQkFBMkIsMENBQTBDLE9BQU8sd0JBQXdCLG9CQUFvQixxQkFBcUIsRUFBRSxjQUFjLDREQUE0RCxJQUFJLGlCQUFpQiwyRUFBQyxLQUFLLFNBQVMsc0JBQXNCLHFCQUFxQixJQUFJLHFFQUFDLGlGQUFpRixFQUFFLEdBQUcscUJBQXFCLHNDQUFzQyxtSkFBbUosc0NBQXNDLDhCQUE4QiwrQkFBK0IscUhBQXFILGVBQWUsRUFBRSxFQUFFLDBEQUEwRCwrQ0FBK0MsMkVBQUMsSUFBSSxTQUFTLFVBQVUsRUFBRSxvQkFBb0IsNEVBQUMsSUFBSSxpQkFBaUIsa0JBQWtCLFVBQVUsMkJBQTJCLGtCQUFrQixxQkFBcUIsZ0JBQWdCLHFCQUFxQixFQUFFLFVBQVUseUhBQXlILFdBQVcsbUVBQW1FLGFBQWEsNEJBQTRCLGdDQUFnQyx1RUFBQyxnQkFBZ0IsOEJBQThCLGFBQWEsdURBQXVELGdGQUFDLE1BQU0sOEJBQThCLHlCQUF5QixPQUFPLGtGQUFDLGNBQWMsb0JBQW9CLGdFQUFnRSxhQUFhLHVGQUF1RixZQUFZLElBQUksK0NBQXNGO0FBQ3ZoRyIsInNvdXJjZXMiOlsid2VicGFjazovL0FydGh1ckxhYnMvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QranNvbnJwYy13cy1jb25uZWN0aW9uQDEuMC4xNC9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvanNvbnJwYy13cy1jb25uZWN0aW9uL2Rpc3QvaW5kZXguZXMuanM/NjMzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7RXZlbnRFbWl0dGVyIGFzIHV9ZnJvbVwiZXZlbnRzXCI7aW1wb3J0e3NhZmVKc29uU3RyaW5naWZ5IGFzIHAsc2FmZUpzb25QYXJzZSBhcyBnfWZyb21cIkB3YWxsZXRjb25uZWN0L3NhZmUtanNvblwiO2ltcG9ydHtpc1dzVXJsIGFzIGQsaXNSZWFjdE5hdGl2ZSBhcyB5LGlzTG9jYWxob3N0VXJsIGFzIG0sZm9ybWF0SnNvblJwY0Vycm9yIGFzIGsscGFyc2VDb25uZWN0aW9uRXJyb3IgYXMgdn1mcm9tXCJAd2FsbGV0Y29ubmVjdC9qc29ucnBjLXV0aWxzXCI7Y29uc3Qgdz0oKT0+dHlwZW9mIFdlYlNvY2tldDxcInVcIj9XZWJTb2NrZXQ6dHlwZW9mIGdsb2JhbDxcInVcIiYmdHlwZW9mIGdsb2JhbC5XZWJTb2NrZXQ8XCJ1XCI/Z2xvYmFsLldlYlNvY2tldDp0eXBlb2Ygd2luZG93PFwidVwiJiZ0eXBlb2Ygd2luZG93LldlYlNvY2tldDxcInVcIj93aW5kb3cuV2ViU29ja2V0OnR5cGVvZiBzZWxmPFwidVwiJiZ0eXBlb2Ygc2VsZi5XZWJTb2NrZXQ8XCJ1XCI/c2VsZi5XZWJTb2NrZXQ6cmVxdWlyZShcIndzXCIpLGI9KCk9PnR5cGVvZiBXZWJTb2NrZXQ8XCJ1XCJ8fHR5cGVvZiBnbG9iYWw8XCJ1XCImJnR5cGVvZiBnbG9iYWwuV2ViU29ja2V0PFwidVwifHx0eXBlb2Ygd2luZG93PFwidVwiJiZ0eXBlb2Ygd2luZG93LldlYlNvY2tldDxcInVcInx8dHlwZW9mIHNlbGY8XCJ1XCImJnR5cGVvZiBzZWxmLldlYlNvY2tldDxcInVcIixhPWM9PmMuc3BsaXQoXCI/XCIpWzBdLGg9MTAsUz13KCk7Y2xhc3MgZntjb25zdHJ1Y3RvcihlKXtpZih0aGlzLnVybD1lLHRoaXMuZXZlbnRzPW5ldyB1LHRoaXMucmVnaXN0ZXJpbmc9ITEsIWQoZSkpdGhyb3cgbmV3IEVycm9yKGBQcm92aWRlZCBVUkwgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBXZWJTb2NrZXQgY29ubmVjdGlvbjogJHtlfWApO3RoaXMudXJsPWV9Z2V0IGNvbm5lY3RlZCgpe3JldHVybiB0eXBlb2YgdGhpcy5zb2NrZXQ8XCJ1XCJ9Z2V0IGNvbm5lY3RpbmcoKXtyZXR1cm4gdGhpcy5yZWdpc3RlcmluZ31vbihlLHQpe3RoaXMuZXZlbnRzLm9uKGUsdCl9b25jZShlLHQpe3RoaXMuZXZlbnRzLm9uY2UoZSx0KX1vZmYoZSx0KXt0aGlzLmV2ZW50cy5vZmYoZSx0KX1yZW1vdmVMaXN0ZW5lcihlLHQpe3RoaXMuZXZlbnRzLnJlbW92ZUxpc3RlbmVyKGUsdCl9YXN5bmMgb3BlbihlPXRoaXMudXJsKXthd2FpdCB0aGlzLnJlZ2lzdGVyKGUpfWFzeW5jIGNsb3NlKCl7cmV0dXJuIG5ldyBQcm9taXNlKChlLHQpPT57aWYodHlwZW9mIHRoaXMuc29ja2V0PlwidVwiKXt0KG5ldyBFcnJvcihcIkNvbm5lY3Rpb24gYWxyZWFkeSBjbG9zZWRcIikpO3JldHVybn10aGlzLnNvY2tldC5vbmNsb3NlPW49Pnt0aGlzLm9uQ2xvc2UobiksZSgpfSx0aGlzLnNvY2tldC5jbG9zZSgpfSl9YXN5bmMgc2VuZChlKXt0eXBlb2YgdGhpcy5zb2NrZXQ+XCJ1XCImJih0aGlzLnNvY2tldD1hd2FpdCB0aGlzLnJlZ2lzdGVyKCkpO3RyeXt0aGlzLnNvY2tldC5zZW5kKHAoZSkpfWNhdGNoKHQpe3RoaXMub25FcnJvcihlLmlkLHQpfX1yZWdpc3RlcihlPXRoaXMudXJsKXtpZighZChlKSl0aHJvdyBuZXcgRXJyb3IoYFByb3ZpZGVkIFVSTCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIFdlYlNvY2tldCBjb25uZWN0aW9uOiAke2V9YCk7aWYodGhpcy5yZWdpc3RlcmluZyl7Y29uc3QgdD10aGlzLmV2ZW50cy5nZXRNYXhMaXN0ZW5lcnMoKTtyZXR1cm4odGhpcy5ldmVudHMubGlzdGVuZXJDb3VudChcInJlZ2lzdGVyX2Vycm9yXCIpPj10fHx0aGlzLmV2ZW50cy5saXN0ZW5lckNvdW50KFwib3BlblwiKT49dCkmJnRoaXMuZXZlbnRzLnNldE1heExpc3RlbmVycyh0KzEpLG5ldyBQcm9taXNlKChuLG8pPT57dGhpcy5ldmVudHMub25jZShcInJlZ2lzdGVyX2Vycm9yXCIscz0+e3RoaXMucmVzZXRNYXhMaXN0ZW5lcnMoKSxvKHMpfSksdGhpcy5ldmVudHMub25jZShcIm9wZW5cIiwoKT0+e2lmKHRoaXMucmVzZXRNYXhMaXN0ZW5lcnMoKSx0eXBlb2YgdGhpcy5zb2NrZXQ+XCJ1XCIpcmV0dXJuIG8obmV3IEVycm9yKFwiV2ViU29ja2V0IGNvbm5lY3Rpb24gaXMgbWlzc2luZyBvciBpbnZhbGlkXCIpKTtuKHRoaXMuc29ja2V0KX0pfSl9cmV0dXJuIHRoaXMudXJsPWUsdGhpcy5yZWdpc3RlcmluZz0hMCxuZXcgUHJvbWlzZSgodCxuKT0+e2NvbnN0IG89bmV3IFVSTFNlYXJjaFBhcmFtcyhlKS5nZXQoXCJvcmlnaW5cIikscz15KCk/e2hlYWRlcnM6e29yaWdpbjpvfX06e3JlamVjdFVuYXV0aG9yaXplZDohbShlKX0saT1uZXcgUyhlLFtdLHMpO2IoKT9pLm9uZXJyb3I9cj0+e2NvbnN0IGw9cjtuKHRoaXMuZW1pdEVycm9yKGwuZXJyb3IpKX06aS5vbihcImVycm9yXCIscj0+e24odGhpcy5lbWl0RXJyb3IocikpfSksaS5vbm9wZW49KCk9Pnt0aGlzLm9uT3BlbihpKSx0KGkpfX0pfW9uT3BlbihlKXtlLm9ubWVzc2FnZT10PT50aGlzLm9uUGF5bG9hZCh0KSxlLm9uY2xvc2U9dD0+dGhpcy5vbkNsb3NlKHQpLHRoaXMuc29ja2V0PWUsdGhpcy5yZWdpc3RlcmluZz0hMSx0aGlzLmV2ZW50cy5lbWl0KFwib3BlblwiKX1vbkNsb3NlKGUpe3RoaXMuc29ja2V0PXZvaWQgMCx0aGlzLnJlZ2lzdGVyaW5nPSExLHRoaXMuZXZlbnRzLmVtaXQoXCJjbG9zZVwiLGUpfW9uUGF5bG9hZChlKXtpZih0eXBlb2YgZS5kYXRhPlwidVwiKXJldHVybjtjb25zdCB0PXR5cGVvZiBlLmRhdGE9PVwic3RyaW5nXCI/ZyhlLmRhdGEpOmUuZGF0YTt0aGlzLmV2ZW50cy5lbWl0KFwicGF5bG9hZFwiLHQpfW9uRXJyb3IoZSx0KXtjb25zdCBuPXRoaXMucGFyc2VFcnJvcih0KSxvPW4ubWVzc2FnZXx8bi50b1N0cmluZygpLHM9ayhlLG8pO3RoaXMuZXZlbnRzLmVtaXQoXCJwYXlsb2FkXCIscyl9cGFyc2VFcnJvcihlLHQ9dGhpcy51cmwpe3JldHVybiB2KGUsYSh0KSxcIldTXCIpfXJlc2V0TWF4TGlzdGVuZXJzKCl7dGhpcy5ldmVudHMuZ2V0TWF4TGlzdGVuZXJzKCk+aCYmdGhpcy5ldmVudHMuc2V0TWF4TGlzdGVuZXJzKGgpfWVtaXRFcnJvcihlKXtjb25zdCB0PXRoaXMucGFyc2VFcnJvcihuZXcgRXJyb3IoZT8ubWVzc2FnZXx8YFdlYlNvY2tldCBjb25uZWN0aW9uIGZhaWxlZCBmb3IgaG9zdDogJHthKHRoaXMudXJsKX1gKSk7cmV0dXJuIHRoaXMuZXZlbnRzLmVtaXQoXCJyZWdpc3Rlcl9lcnJvclwiLHQpLHR9fWV4cG9ydHtmIGFzIFdzQ29ubmVjdGlvbixmIGFzIGRlZmF1bHR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXMuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@walletconnect+jsonrpc-ws-connection@1.0.14/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js\n");

/***/ })

};
;