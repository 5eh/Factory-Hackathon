"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@safe-global+safe-apps-provider@0.18.1_typescript@5.5.2";
exports.ids = ["vendor-chunks/@safe-global+safe-apps-provider@0.18.1_typescript@5.5.2"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@safe-global+safe-apps-provider@0.18.1_typescript@5.5.2/node_modules/@safe-global/safe-apps-provider/dist/index.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@safe-global+safe-apps-provider@0.18.1_typescript@5.5.2/node_modules/@safe-global/safe-apps-provider/dist/index.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SafeAppProvider = void 0;\nvar provider_1 = __webpack_require__(/*! ./provider */ \"(ssr)/./node_modules/.pnpm/@safe-global+safe-apps-provider@0.18.1_typescript@5.5.2/node_modules/@safe-global/safe-apps-provider/dist/provider.js\");\nObject.defineProperty(exports, \"SafeAppProvider\", ({ enumerable: true, get: function () { return provider_1.SafeAppProvider; } }));\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNhZmUtZ2xvYmFsK3NhZmUtYXBwcy1wcm92aWRlckAwLjE4LjFfdHlwZXNjcmlwdEA1LjUuMi9ub2RlX21vZHVsZXMvQHNhZmUtZ2xvYmFsL3NhZmUtYXBwcy1wcm92aWRlci9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QjtBQUN2QixpQkFBaUIsbUJBQU8sQ0FBQyxvS0FBWTtBQUNyQyxtREFBa0QsRUFBRSxxQ0FBcUMsc0NBQXNDLEVBQUM7QUFDaEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcnRodXJMYWJzLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzYWZlLWdsb2JhbCtzYWZlLWFwcHMtcHJvdmlkZXJAMC4xOC4xX3R5cGVzY3JpcHRANS41LjIvbm9kZV9tb2R1bGVzL0BzYWZlLWdsb2JhbC9zYWZlLWFwcHMtcHJvdmlkZXIvZGlzdC9pbmRleC5qcz8xMmUwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TYWZlQXBwUHJvdmlkZXIgPSB2b2lkIDA7XG52YXIgcHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU2FmZUFwcFByb3ZpZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwcm92aWRlcl8xLlNhZmVBcHBQcm92aWRlcjsgfSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@safe-global+safe-apps-provider@0.18.1_typescript@5.5.2/node_modules/@safe-global/safe-apps-provider/dist/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@safe-global+safe-apps-provider@0.18.1_typescript@5.5.2/node_modules/@safe-global/safe-apps-provider/dist/provider.js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@safe-global+safe-apps-provider@0.18.1_typescript@5.5.2/node_modules/@safe-global/safe-apps-provider/dist/provider.js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SafeAppProvider = void 0;\nconst events_1 = __webpack_require__(/*! events */ \"events\");\nconst utils_1 = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/.pnpm/@safe-global+safe-apps-provider@0.18.1_typescript@5.5.2/node_modules/@safe-global/safe-apps-provider/dist/utils.js\");\n// The API is based on Ethereum JavaScript API Provider Standard. Link: https://eips.ethereum.org/EIPS/eip-1193\nclass SafeAppProvider extends events_1.EventEmitter {\n    constructor(safe, sdk) {\n        super();\n        this.submittedTxs = new Map();\n        this.safe = safe;\n        this.sdk = sdk;\n    }\n    async connect() {\n        this.emit('connect', { chainId: this.chainId });\n        return;\n    }\n    async disconnect() {\n        return;\n    }\n    get chainId() {\n        return this.safe.chainId;\n    }\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    async request(request) {\n        const { method, params = [] } = request;\n        switch (method) {\n            case 'eth_accounts':\n                return [this.safe.safeAddress];\n            case 'net_version':\n            case 'eth_chainId':\n                return `0x${this.chainId.toString(16)}`;\n            case 'personal_sign': {\n                const [message, address] = params;\n                if (this.safe.safeAddress.toLowerCase() !== address.toLowerCase()) {\n                    throw new Error('The address or message hash is invalid');\n                }\n                const response = await this.sdk.txs.signMessage(message);\n                const signature = 'signature' in response ? response.signature : undefined;\n                return signature || '0x';\n            }\n            case 'eth_sign': {\n                const [address, messageHash] = params;\n                if (this.safe.safeAddress.toLowerCase() !== address.toLowerCase() || !messageHash.startsWith('0x')) {\n                    throw new Error('The address or message hash is invalid');\n                }\n                const response = await this.sdk.txs.signMessage(messageHash);\n                const signature = 'signature' in response ? response.signature : undefined;\n                return signature || '0x';\n            }\n            case 'eth_signTypedData':\n            case 'eth_signTypedData_v4': {\n                const [address, typedData] = params;\n                const parsedTypedData = typeof typedData === 'string' ? JSON.parse(typedData) : typedData;\n                if (this.safe.safeAddress.toLowerCase() !== address.toLowerCase()) {\n                    throw new Error('The address is invalid');\n                }\n                const response = await this.sdk.txs.signTypedMessage(parsedTypedData);\n                const signature = 'signature' in response ? response.signature : undefined;\n                return signature || '0x';\n            }\n            case 'eth_sendTransaction':\n                // `value` or `data` can be explicitly set as `undefined` for example in Viem. The spread will overwrite the fallback value.\n                const tx = Object.assign(Object.assign({}, params[0]), { value: params[0].value || '0', data: params[0].data || '0x' });\n                // Some ethereum libraries might pass the gas as a hex-encoded string\n                // We need to convert it to a number because the SDK expects a number and our backend only supports\n                // Decimal numbers\n                if (typeof tx.gas === 'string' && tx.gas.startsWith('0x')) {\n                    tx.gas = parseInt(tx.gas, 16);\n                }\n                const resp = await this.sdk.txs.send({\n                    txs: [tx],\n                    params: { safeTxGas: tx.gas },\n                });\n                // Store fake transaction\n                this.submittedTxs.set(resp.safeTxHash, {\n                    from: this.safe.safeAddress,\n                    hash: resp.safeTxHash,\n                    gas: 0,\n                    gasPrice: '0x00',\n                    nonce: 0,\n                    input: tx.data,\n                    value: tx.value,\n                    to: tx.to,\n                    blockHash: null,\n                    blockNumber: null,\n                    transactionIndex: null,\n                });\n                return resp.safeTxHash;\n            case 'eth_blockNumber':\n                const block = await this.sdk.eth.getBlockByNumber(['latest']);\n                return block.number;\n            case 'eth_getBalance':\n                return this.sdk.eth.getBalance([(0, utils_1.getLowerCase)(params[0]), params[1]]);\n            case 'eth_getCode':\n                return this.sdk.eth.getCode([(0, utils_1.getLowerCase)(params[0]), params[1]]);\n            case 'eth_getTransactionCount':\n                return this.sdk.eth.getTransactionCount([(0, utils_1.getLowerCase)(params[0]), params[1]]);\n            case 'eth_getStorageAt':\n                return this.sdk.eth.getStorageAt([(0, utils_1.getLowerCase)(params[0]), params[1], params[2]]);\n            case 'eth_getBlockByNumber':\n                return this.sdk.eth.getBlockByNumber([params[0], params[1]]);\n            case 'eth_getBlockByHash':\n                return this.sdk.eth.getBlockByHash([params[0], params[1]]);\n            case 'eth_getTransactionByHash':\n                let txHash = params[0];\n                try {\n                    const resp = await this.sdk.txs.getBySafeTxHash(txHash);\n                    txHash = resp.txHash || txHash;\n                }\n                catch (e) { }\n                // Use fake transaction if we don't have a real tx hash\n                if (this.submittedTxs.has(txHash)) {\n                    return this.submittedTxs.get(txHash);\n                }\n                return this.sdk.eth.getTransactionByHash([txHash]).then((tx) => {\n                    // We set the tx hash to the one requested, as some provider assert this\n                    if (tx) {\n                        tx.hash = params[0];\n                    }\n                    return tx;\n                });\n            case 'eth_getTransactionReceipt': {\n                let txHash = params[0];\n                try {\n                    const resp = await this.sdk.txs.getBySafeTxHash(txHash);\n                    txHash = resp.txHash || txHash;\n                }\n                catch (e) { }\n                return this.sdk.eth.getTransactionReceipt([txHash]).then((tx) => {\n                    // We set the tx hash to the one requested, as some provider assert this\n                    if (tx) {\n                        tx.transactionHash = params[0];\n                    }\n                    return tx;\n                });\n            }\n            case 'eth_estimateGas': {\n                return this.sdk.eth.getEstimateGas(params[0]);\n            }\n            case 'eth_call': {\n                return this.sdk.eth.call([params[0], params[1]]);\n            }\n            case 'eth_getLogs':\n                return this.sdk.eth.getPastLogs([params[0]]);\n            case 'eth_gasPrice':\n                return this.sdk.eth.getGasPrice();\n            case 'wallet_getPermissions':\n                return this.sdk.wallet.getPermissions();\n            case 'wallet_requestPermissions':\n                return this.sdk.wallet.requestPermissions(params[0]);\n            case 'safe_setSettings':\n                return this.sdk.eth.setSafeSettings([params[0]]);\n            default:\n                throw Error(`\"${request.method}\" not implemented`);\n        }\n    }\n    // this method is needed for ethers v4\n    // https://github.com/ethers-io/ethers.js/blob/427e16826eb15d52d25c4f01027f8db22b74b76c/src.ts/providers/web3-provider.ts#L41-L55\n    send(request, callback) {\n        if (!request)\n            callback('Undefined request');\n        this.request(request)\n            .then((result) => callback(null, { jsonrpc: '2.0', id: request.id, result }))\n            .catch((error) => callback(error, null));\n    }\n}\nexports.SafeAppProvider = SafeAppProvider;\n//# sourceMappingURL=provider.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNhZmUtZ2xvYmFsK3NhZmUtYXBwcy1wcm92aWRlckAwLjE4LjFfdHlwZXNjcmlwdEA1LjUuMi9ub2RlX21vZHVsZXMvQHNhZmUtZ2xvYmFsL3NhZmUtYXBwcy1wcm92aWRlci9kaXN0L3Byb3ZpZGVyLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QjtBQUN2QixpQkFBaUIsbUJBQU8sQ0FBQyxzQkFBUTtBQUNqQyxnQkFBZ0IsbUJBQU8sQ0FBQyw4SkFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsdUJBQXVCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBCQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxnQkFBZ0IsNkRBQTZEO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUJBQW1CO0FBQ2pELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx3Q0FBd0M7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQXJ0aHVyTGFicy8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac2FmZS1nbG9iYWwrc2FmZS1hcHBzLXByb3ZpZGVyQDAuMTguMV90eXBlc2NyaXB0QDUuNS4yL25vZGVfbW9kdWxlcy9Ac2FmZS1nbG9iYWwvc2FmZS1hcHBzLXByb3ZpZGVyL2Rpc3QvcHJvdmlkZXIuanM/ODk5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2FmZUFwcFByb3ZpZGVyID0gdm9pZCAwO1xuY29uc3QgZXZlbnRzXzEgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuLy8gVGhlIEFQSSBpcyBiYXNlZCBvbiBFdGhlcmV1bSBKYXZhU2NyaXB0IEFQSSBQcm92aWRlciBTdGFuZGFyZC4gTGluazogaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xMTkzXG5jbGFzcyBTYWZlQXBwUHJvdmlkZXIgZXh0ZW5kcyBldmVudHNfMS5FdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHNhZmUsIHNkaykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZFR4cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5zYWZlID0gc2FmZTtcbiAgICAgICAgdGhpcy5zZGsgPSBzZGs7XG4gICAgfVxuICAgIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnY29ubmVjdCcsIHsgY2hhaW5JZDogdGhpcy5jaGFpbklkIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFzeW5jIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2V0IGNoYWluSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhZmUuY2hhaW5JZDtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBhc3luYyByZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgeyBtZXRob2QsIHBhcmFtcyA9IFtdIH0gPSByZXF1ZXN0O1xuICAgICAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICAgICAgY2FzZSAnZXRoX2FjY291bnRzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gW3RoaXMuc2FmZS5zYWZlQWRkcmVzc107XG4gICAgICAgICAgICBjYXNlICduZXRfdmVyc2lvbic6XG4gICAgICAgICAgICBjYXNlICdldGhfY2hhaW5JZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAweCR7dGhpcy5jaGFpbklkLnRvU3RyaW5nKDE2KX1gO1xuICAgICAgICAgICAgY2FzZSAncGVyc29uYWxfc2lnbic6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbbWVzc2FnZSwgYWRkcmVzc10gPSBwYXJhbXM7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2FmZS5zYWZlQWRkcmVzcy50b0xvd2VyQ2FzZSgpICE9PSBhZGRyZXNzLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYWRkcmVzcyBvciBtZXNzYWdlIGhhc2ggaXMgaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2RrLnR4cy5zaWduTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzaWduYXR1cmUgPSAnc2lnbmF0dXJlJyBpbiByZXNwb25zZSA/IHJlc3BvbnNlLnNpZ25hdHVyZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2lnbmF0dXJlIHx8ICcweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdldGhfc2lnbic6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbYWRkcmVzcywgbWVzc2FnZUhhc2hdID0gcGFyYW1zO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNhZmUuc2FmZUFkZHJlc3MudG9Mb3dlckNhc2UoKSAhPT0gYWRkcmVzcy50b0xvd2VyQ2FzZSgpIHx8ICFtZXNzYWdlSGFzaC5zdGFydHNXaXRoKCcweCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGFkZHJlc3Mgb3IgbWVzc2FnZSBoYXNoIGlzIGludmFsaWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNkay50eHMuc2lnbk1lc3NhZ2UobWVzc2FnZUhhc2gpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9ICdzaWduYXR1cmUnIGluIHJlc3BvbnNlID8gcmVzcG9uc2Uuc2lnbmF0dXJlIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiBzaWduYXR1cmUgfHwgJzB4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ2V0aF9zaWduVHlwZWREYXRhJzpcbiAgICAgICAgICAgIGNhc2UgJ2V0aF9zaWduVHlwZWREYXRhX3Y0Jzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IFthZGRyZXNzLCB0eXBlZERhdGFdID0gcGFyYW1zO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFR5cGVkRGF0YSA9IHR5cGVvZiB0eXBlZERhdGEgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZSh0eXBlZERhdGEpIDogdHlwZWREYXRhO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNhZmUuc2FmZUFkZHJlc3MudG9Mb3dlckNhc2UoKSAhPT0gYWRkcmVzcy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGFkZHJlc3MgaXMgaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2RrLnR4cy5zaWduVHlwZWRNZXNzYWdlKHBhcnNlZFR5cGVkRGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gJ3NpZ25hdHVyZScgaW4gcmVzcG9uc2UgPyByZXNwb25zZS5zaWduYXR1cmUgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpZ25hdHVyZSB8fCAnMHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnZXRoX3NlbmRUcmFuc2FjdGlvbic6XG4gICAgICAgICAgICAgICAgLy8gYHZhbHVlYCBvciBgZGF0YWAgY2FuIGJlIGV4cGxpY2l0bHkgc2V0IGFzIGB1bmRlZmluZWRgIGZvciBleGFtcGxlIGluIFZpZW0uIFRoZSBzcHJlYWQgd2lsbCBvdmVyd3JpdGUgdGhlIGZhbGxiYWNrIHZhbHVlLlxuICAgICAgICAgICAgICAgIGNvbnN0IHR4ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwYXJhbXNbMF0pLCB7IHZhbHVlOiBwYXJhbXNbMF0udmFsdWUgfHwgJzAnLCBkYXRhOiBwYXJhbXNbMF0uZGF0YSB8fCAnMHgnIH0pO1xuICAgICAgICAgICAgICAgIC8vIFNvbWUgZXRoZXJldW0gbGlicmFyaWVzIG1pZ2h0IHBhc3MgdGhlIGdhcyBhcyBhIGhleC1lbmNvZGVkIHN0cmluZ1xuICAgICAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY29udmVydCBpdCB0byBhIG51bWJlciBiZWNhdXNlIHRoZSBTREsgZXhwZWN0cyBhIG51bWJlciBhbmQgb3VyIGJhY2tlbmQgb25seSBzdXBwb3J0c1xuICAgICAgICAgICAgICAgIC8vIERlY2ltYWwgbnVtYmVyc1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdHguZ2FzID09PSAnc3RyaW5nJyAmJiB0eC5nYXMuc3RhcnRzV2l0aCgnMHgnKSkge1xuICAgICAgICAgICAgICAgICAgICB0eC5nYXMgPSBwYXJzZUludCh0eC5nYXMsIDE2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHRoaXMuc2RrLnR4cy5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgdHhzOiBbdHhdLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgc2FmZVR4R2FzOiB0eC5nYXMgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBmYWtlIHRyYW5zYWN0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWRUeHMuc2V0KHJlc3Auc2FmZVR4SGFzaCwge1xuICAgICAgICAgICAgICAgICAgICBmcm9tOiB0aGlzLnNhZmUuc2FmZUFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IHJlc3Auc2FmZVR4SGFzaCxcbiAgICAgICAgICAgICAgICAgICAgZ2FzOiAwLFxuICAgICAgICAgICAgICAgICAgICBnYXNQcmljZTogJzB4MDAnLFxuICAgICAgICAgICAgICAgICAgICBub25jZTogMCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHR4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0eC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdG86IHR4LnRvLFxuICAgICAgICAgICAgICAgICAgICBibG9ja0hhc2g6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrTnVtYmVyOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbkluZGV4OiBudWxsLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwLnNhZmVUeEhhc2g7XG4gICAgICAgICAgICBjYXNlICdldGhfYmxvY2tOdW1iZXInOlxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gYXdhaXQgdGhpcy5zZGsuZXRoLmdldEJsb2NrQnlOdW1iZXIoWydsYXRlc3QnXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJsb2NrLm51bWJlcjtcbiAgICAgICAgICAgIGNhc2UgJ2V0aF9nZXRCYWxhbmNlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZGsuZXRoLmdldEJhbGFuY2UoWygwLCB1dGlsc18xLmdldExvd2VyQ2FzZSkocGFyYW1zWzBdKSwgcGFyYW1zWzFdXSk7XG4gICAgICAgICAgICBjYXNlICdldGhfZ2V0Q29kZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RrLmV0aC5nZXRDb2RlKFsoMCwgdXRpbHNfMS5nZXRMb3dlckNhc2UpKHBhcmFtc1swXSksIHBhcmFtc1sxXV0pO1xuICAgICAgICAgICAgY2FzZSAnZXRoX2dldFRyYW5zYWN0aW9uQ291bnQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNkay5ldGguZ2V0VHJhbnNhY3Rpb25Db3VudChbKDAsIHV0aWxzXzEuZ2V0TG93ZXJDYXNlKShwYXJhbXNbMF0pLCBwYXJhbXNbMV1dKTtcbiAgICAgICAgICAgIGNhc2UgJ2V0aF9nZXRTdG9yYWdlQXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNkay5ldGguZ2V0U3RvcmFnZUF0KFsoMCwgdXRpbHNfMS5nZXRMb3dlckNhc2UpKHBhcmFtc1swXSksIHBhcmFtc1sxXSwgcGFyYW1zWzJdXSk7XG4gICAgICAgICAgICBjYXNlICdldGhfZ2V0QmxvY2tCeU51bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RrLmV0aC5nZXRCbG9ja0J5TnVtYmVyKFtwYXJhbXNbMF0sIHBhcmFtc1sxXV0pO1xuICAgICAgICAgICAgY2FzZSAnZXRoX2dldEJsb2NrQnlIYXNoJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZGsuZXRoLmdldEJsb2NrQnlIYXNoKFtwYXJhbXNbMF0sIHBhcmFtc1sxXV0pO1xuICAgICAgICAgICAgY2FzZSAnZXRoX2dldFRyYW5zYWN0aW9uQnlIYXNoJzpcbiAgICAgICAgICAgICAgICBsZXQgdHhIYXNoID0gcGFyYW1zWzBdO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLnNkay50eHMuZ2V0QnlTYWZlVHhIYXNoKHR4SGFzaCk7XG4gICAgICAgICAgICAgICAgICAgIHR4SGFzaCA9IHJlc3AudHhIYXNoIHx8IHR4SGFzaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAgICAgICAgIC8vIFVzZSBmYWtlIHRyYW5zYWN0aW9uIGlmIHdlIGRvbid0IGhhdmUgYSByZWFsIHR4IGhhc2hcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWJtaXR0ZWRUeHMuaGFzKHR4SGFzaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0dGVkVHhzLmdldCh0eEhhc2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZGsuZXRoLmdldFRyYW5zYWN0aW9uQnlIYXNoKFt0eEhhc2hdKS50aGVuKCh0eCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBzZXQgdGhlIHR4IGhhc2ggdG8gdGhlIG9uZSByZXF1ZXN0ZWQsIGFzIHNvbWUgcHJvdmlkZXIgYXNzZXJ0IHRoaXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eC5oYXNoID0gcGFyYW1zWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0eDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhc2UgJ2V0aF9nZXRUcmFuc2FjdGlvblJlY2VpcHQnOiB7XG4gICAgICAgICAgICAgICAgbGV0IHR4SGFzaCA9IHBhcmFtc1swXTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5zZGsudHhzLmdldEJ5U2FmZVR4SGFzaCh0eEhhc2gpO1xuICAgICAgICAgICAgICAgICAgICB0eEhhc2ggPSByZXNwLnR4SGFzaCB8fCB0eEhhc2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZGsuZXRoLmdldFRyYW5zYWN0aW9uUmVjZWlwdChbdHhIYXNoXSkudGhlbigodHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2Ugc2V0IHRoZSB0eCBoYXNoIHRvIHRoZSBvbmUgcmVxdWVzdGVkLCBhcyBzb21lIHByb3ZpZGVyIGFzc2VydCB0aGlzXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHgudHJhbnNhY3Rpb25IYXNoID0gcGFyYW1zWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0eDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ2V0aF9lc3RpbWF0ZUdhcyc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZGsuZXRoLmdldEVzdGltYXRlR2FzKHBhcmFtc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdldGhfY2FsbCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZGsuZXRoLmNhbGwoW3BhcmFtc1swXSwgcGFyYW1zWzFdXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdldGhfZ2V0TG9ncyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RrLmV0aC5nZXRQYXN0TG9ncyhbcGFyYW1zWzBdXSk7XG4gICAgICAgICAgICBjYXNlICdldGhfZ2FzUHJpY2UnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNkay5ldGguZ2V0R2FzUHJpY2UoKTtcbiAgICAgICAgICAgIGNhc2UgJ3dhbGxldF9nZXRQZXJtaXNzaW9ucyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RrLndhbGxldC5nZXRQZXJtaXNzaW9ucygpO1xuICAgICAgICAgICAgY2FzZSAnd2FsbGV0X3JlcXVlc3RQZXJtaXNzaW9ucyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RrLndhbGxldC5yZXF1ZXN0UGVybWlzc2lvbnMocGFyYW1zWzBdKTtcbiAgICAgICAgICAgIGNhc2UgJ3NhZmVfc2V0U2V0dGluZ3MnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNkay5ldGguc2V0U2FmZVNldHRpbmdzKFtwYXJhbXNbMF1dKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFwiJHtyZXF1ZXN0Lm1ldGhvZH1cIiBub3QgaW1wbGVtZW50ZWRgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGlzIG1ldGhvZCBpcyBuZWVkZWQgZm9yIGV0aGVycyB2NFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ldGhlcnMtaW8vZXRoZXJzLmpzL2Jsb2IvNDI3ZTE2ODI2ZWIxNWQ1MmQyNWM0ZjAxMDI3ZjhkYjIyYjc0Yjc2Yy9zcmMudHMvcHJvdmlkZXJzL3dlYjMtcHJvdmlkZXIudHMjTDQxLUw1NVxuICAgIHNlbmQocmVxdWVzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KVxuICAgICAgICAgICAgY2FsbGJhY2soJ1VuZGVmaW5lZCByZXF1ZXN0Jyk7XG4gICAgICAgIHRoaXMucmVxdWVzdChyZXF1ZXN0KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gY2FsbGJhY2sobnVsbCwgeyBqc29ucnBjOiAnMi4wJywgaWQ6IHJlcXVlc3QuaWQsIHJlc3VsdCB9KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNhbGxiYWNrKGVycm9yLCBudWxsKSk7XG4gICAgfVxufVxuZXhwb3J0cy5TYWZlQXBwUHJvdmlkZXIgPSBTYWZlQXBwUHJvdmlkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm92aWRlci5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@safe-global+safe-apps-provider@0.18.1_typescript@5.5.2/node_modules/@safe-global/safe-apps-provider/dist/provider.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@safe-global+safe-apps-provider@0.18.1_typescript@5.5.2/node_modules/@safe-global/safe-apps-provider/dist/utils.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@safe-global+safe-apps-provider@0.18.1_typescript@5.5.2/node_modules/@safe-global/safe-apps-provider/dist/utils.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getLowerCase = void 0;\nfunction getLowerCase(value) {\n    if (value) {\n        return value.toLowerCase();\n    }\n    return value;\n}\nexports.getLowerCase = getLowerCase;\n//# sourceMappingURL=utils.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNhZmUtZ2xvYmFsK3NhZmUtYXBwcy1wcm92aWRlckAwLjE4LjFfdHlwZXNjcmlwdEA1LjUuMi9ub2RlX21vZHVsZXMvQHNhZmUtZ2xvYmFsL3NhZmUtYXBwcy1wcm92aWRlci9kaXN0L3V0aWxzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcnRodXJMYWJzLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzYWZlLWdsb2JhbCtzYWZlLWFwcHMtcHJvdmlkZXJAMC4xOC4xX3R5cGVzY3JpcHRANS41LjIvbm9kZV9tb2R1bGVzL0BzYWZlLWdsb2JhbC9zYWZlLWFwcHMtcHJvdmlkZXIvZGlzdC91dGlscy5qcz9kNzliIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRMb3dlckNhc2UgPSB2b2lkIDA7XG5mdW5jdGlvbiBnZXRMb3dlckNhc2UodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydHMuZ2V0TG93ZXJDYXNlID0gZ2V0TG93ZXJDYXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@safe-global+safe-apps-provider@0.18.1_typescript@5.5.2/node_modules/@safe-global/safe-apps-provider/dist/utils.js\n");

/***/ })

};
;