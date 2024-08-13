"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@stablelib+hkdf@1.0.1";
exports.ids = ["vendor-chunks/@stablelib+hkdf@1.0.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@stablelib+hkdf@1.0.1/node_modules/@stablelib/hkdf/lib/hkdf.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/@stablelib+hkdf@1.0.1/node_modules/@stablelib/hkdf/lib/hkdf.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n// Copyright (C) 2016 Dmitry Chestnykh\n// MIT License. See LICENSE file for details.\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar hmac_1 = __webpack_require__(/*! @stablelib/hmac */ \"(ssr)/./node_modules/.pnpm/@stablelib+hmac@1.0.1/node_modules/@stablelib/hmac/lib/hmac.js\");\nvar wipe_1 = __webpack_require__(/*! @stablelib/wipe */ \"(ssr)/./node_modules/.pnpm/@stablelib+wipe@1.0.1/node_modules/@stablelib/wipe/lib/wipe.js\");\n/**\n * HMAC-based Extract-and-Expand Key Derivation Function.\n *\n * Implements HKDF from RFC5869.\n *\n * Expands the given master key with salt and info into\n * a limited stream of key material.\n */\nvar HKDF = /** @class */ (function () {\n    /**\n     * Create a new HKDF instance for the given hash function\n     * with the master key, optional salt, and info.\n     *\n     * - Master key is a high-entropy secret key (not a password).\n     * - Salt is a non-secret random value.\n     * - Info is application- and/or context-specific information.\n     */\n    function HKDF(hash, key, salt, info) {\n        if (salt === void 0) { salt = new Uint8Array(0); }\n        this._counter = new Uint8Array(1); // starts with zero\n        this._hash = hash;\n        this._info = info;\n        // HKDF-Extract uses salt as HMAC key, and key as data.\n        var okm = hmac_1.hmac(this._hash, salt, key);\n        // Initialize HMAC for expanding with extracted key.\n        this._hmac = new hmac_1.HMAC(hash, okm);\n        // Allocate buffer.\n        this._buffer = new Uint8Array(this._hmac.digestLength);\n        this._bufpos = this._buffer.length;\n    }\n    // Fill buffer with new block of HKDF-Extract output.\n    HKDF.prototype._fillBuffer = function () {\n        // Increment counter.\n        this._counter[0]++;\n        var ctr = this._counter[0];\n        // Check if counter overflowed.\n        if (ctr === 0) {\n            throw new Error(\"hkdf: cannot expand more\");\n        }\n        // Prepare HMAC instance for new data with old key.\n        this._hmac.reset();\n        // Hash in previous output if it was generated\n        // (i.e. counter is greater than 1).\n        if (ctr > 1) {\n            this._hmac.update(this._buffer);\n        }\n        // Hash in info if it exists.\n        if (this._info) {\n            this._hmac.update(this._info);\n        }\n        // Hash in the counter.\n        this._hmac.update(this._counter);\n        // Output result to buffer and clean HMAC instance.\n        this._hmac.finish(this._buffer);\n        // Reset buffer position.\n        this._bufpos = 0;\n    };\n    /**\n     * Expand returns next key material of the given length.\n     *\n     * It throws if expansion limit is reached (which is\n     * 254 digests of the underlying HMAC function).\n     */\n    HKDF.prototype.expand = function (length) {\n        var out = new Uint8Array(length);\n        for (var i = 0; i < out.length; i++) {\n            if (this._bufpos === this._buffer.length) {\n                this._fillBuffer();\n            }\n            out[i] = this._buffer[this._bufpos++];\n        }\n        return out;\n    };\n    HKDF.prototype.clean = function () {\n        this._hmac.clean();\n        wipe_1.wipe(this._buffer);\n        wipe_1.wipe(this._counter);\n        this._bufpos = 0;\n    };\n    return HKDF;\n}());\nexports.HKDF = HKDF;\n// TODO(dchest): maybe implement deriveKey?\n//# sourceMappingURL=hkdf.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHN0YWJsZWxpYitoa2RmQDEuMC4xL25vZGVfbW9kdWxlcy9Ac3RhYmxlbGliL2hrZGYvbGliL2hrZGYuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWEsbUJBQU8sQ0FBQyxrSEFBaUI7QUFDdEMsYUFBYSxtQkFBTyxDQUFDLGtIQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxZQUFZO0FBQ1o7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0FydGh1ckxhYnMvLi9ub2RlX21vZHVsZXMvLnBucG0vQHN0YWJsZWxpYitoa2RmQDEuMC4xL25vZGVfbW9kdWxlcy9Ac3RhYmxlbGliL2hrZGYvbGliL2hrZGYuanM/MzUzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAoQykgMjAxNiBEbWl0cnkgQ2hlc3RueWtoXG4vLyBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBmb3IgZGV0YWlscy5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBobWFjXzEgPSByZXF1aXJlKFwiQHN0YWJsZWxpYi9obWFjXCIpO1xudmFyIHdpcGVfMSA9IHJlcXVpcmUoXCJAc3RhYmxlbGliL3dpcGVcIik7XG4vKipcbiAqIEhNQUMtYmFzZWQgRXh0cmFjdC1hbmQtRXhwYW5kIEtleSBEZXJpdmF0aW9uIEZ1bmN0aW9uLlxuICpcbiAqIEltcGxlbWVudHMgSEtERiBmcm9tIFJGQzU4NjkuXG4gKlxuICogRXhwYW5kcyB0aGUgZ2l2ZW4gbWFzdGVyIGtleSB3aXRoIHNhbHQgYW5kIGluZm8gaW50b1xuICogYSBsaW1pdGVkIHN0cmVhbSBvZiBrZXkgbWF0ZXJpYWwuXG4gKi9cbnZhciBIS0RGID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBIS0RGIGluc3RhbmNlIGZvciB0aGUgZ2l2ZW4gaGFzaCBmdW5jdGlvblxuICAgICAqIHdpdGggdGhlIG1hc3RlciBrZXksIG9wdGlvbmFsIHNhbHQsIGFuZCBpbmZvLlxuICAgICAqXG4gICAgICogLSBNYXN0ZXIga2V5IGlzIGEgaGlnaC1lbnRyb3B5IHNlY3JldCBrZXkgKG5vdCBhIHBhc3N3b3JkKS5cbiAgICAgKiAtIFNhbHQgaXMgYSBub24tc2VjcmV0IHJhbmRvbSB2YWx1ZS5cbiAgICAgKiAtIEluZm8gaXMgYXBwbGljYXRpb24tIGFuZC9vciBjb250ZXh0LXNwZWNpZmljIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEhLREYoaGFzaCwga2V5LCBzYWx0LCBpbmZvKSB7XG4gICAgICAgIGlmIChzYWx0ID09PSB2b2lkIDApIHsgc2FsdCA9IG5ldyBVaW50OEFycmF5KDApOyB9XG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSBuZXcgVWludDhBcnJheSgxKTsgLy8gc3RhcnRzIHdpdGggemVyb1xuICAgICAgICB0aGlzLl9oYXNoID0gaGFzaDtcbiAgICAgICAgdGhpcy5faW5mbyA9IGluZm87XG4gICAgICAgIC8vIEhLREYtRXh0cmFjdCB1c2VzIHNhbHQgYXMgSE1BQyBrZXksIGFuZCBrZXkgYXMgZGF0YS5cbiAgICAgICAgdmFyIG9rbSA9IGhtYWNfMS5obWFjKHRoaXMuX2hhc2gsIHNhbHQsIGtleSk7XG4gICAgICAgIC8vIEluaXRpYWxpemUgSE1BQyBmb3IgZXhwYW5kaW5nIHdpdGggZXh0cmFjdGVkIGtleS5cbiAgICAgICAgdGhpcy5faG1hYyA9IG5ldyBobWFjXzEuSE1BQyhoYXNoLCBva20pO1xuICAgICAgICAvLyBBbGxvY2F0ZSBidWZmZXIuXG4gICAgICAgIHRoaXMuX2J1ZmZlciA9IG5ldyBVaW50OEFycmF5KHRoaXMuX2htYWMuZGlnZXN0TGVuZ3RoKTtcbiAgICAgICAgdGhpcy5fYnVmcG9zID0gdGhpcy5fYnVmZmVyLmxlbmd0aDtcbiAgICB9XG4gICAgLy8gRmlsbCBidWZmZXIgd2l0aCBuZXcgYmxvY2sgb2YgSEtERi1FeHRyYWN0IG91dHB1dC5cbiAgICBIS0RGLnByb3RvdHlwZS5fZmlsbEJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSW5jcmVtZW50IGNvdW50ZXIuXG4gICAgICAgIHRoaXMuX2NvdW50ZXJbMF0rKztcbiAgICAgICAgdmFyIGN0ciA9IHRoaXMuX2NvdW50ZXJbMF07XG4gICAgICAgIC8vIENoZWNrIGlmIGNvdW50ZXIgb3ZlcmZsb3dlZC5cbiAgICAgICAgaWYgKGN0ciA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaGtkZjogY2Fubm90IGV4cGFuZCBtb3JlXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByZXBhcmUgSE1BQyBpbnN0YW5jZSBmb3IgbmV3IGRhdGEgd2l0aCBvbGQga2V5LlxuICAgICAgICB0aGlzLl9obWFjLnJlc2V0KCk7XG4gICAgICAgIC8vIEhhc2ggaW4gcHJldmlvdXMgb3V0cHV0IGlmIGl0IHdhcyBnZW5lcmF0ZWRcbiAgICAgICAgLy8gKGkuZS4gY291bnRlciBpcyBncmVhdGVyIHRoYW4gMSkuXG4gICAgICAgIGlmIChjdHIgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLl9obWFjLnVwZGF0ZSh0aGlzLl9idWZmZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhc2ggaW4gaW5mbyBpZiBpdCBleGlzdHMuXG4gICAgICAgIGlmICh0aGlzLl9pbmZvKSB7XG4gICAgICAgICAgICB0aGlzLl9obWFjLnVwZGF0ZSh0aGlzLl9pbmZvKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYXNoIGluIHRoZSBjb3VudGVyLlxuICAgICAgICB0aGlzLl9obWFjLnVwZGF0ZSh0aGlzLl9jb3VudGVyKTtcbiAgICAgICAgLy8gT3V0cHV0IHJlc3VsdCB0byBidWZmZXIgYW5kIGNsZWFuIEhNQUMgaW5zdGFuY2UuXG4gICAgICAgIHRoaXMuX2htYWMuZmluaXNoKHRoaXMuX2J1ZmZlcik7XG4gICAgICAgIC8vIFJlc2V0IGJ1ZmZlciBwb3NpdGlvbi5cbiAgICAgICAgdGhpcy5fYnVmcG9zID0gMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4cGFuZCByZXR1cm5zIG5leHQga2V5IG1hdGVyaWFsIG9mIHRoZSBnaXZlbiBsZW5ndGguXG4gICAgICpcbiAgICAgKiBJdCB0aHJvd3MgaWYgZXhwYW5zaW9uIGxpbWl0IGlzIHJlYWNoZWQgKHdoaWNoIGlzXG4gICAgICogMjU0IGRpZ2VzdHMgb2YgdGhlIHVuZGVybHlpbmcgSE1BQyBmdW5jdGlvbikuXG4gICAgICovXG4gICAgSEtERi5wcm90b3R5cGUuZXhwYW5kID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgICAgICB2YXIgb3V0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9idWZwb3MgPT09IHRoaXMuX2J1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9maWxsQnVmZmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRbaV0gPSB0aGlzLl9idWZmZXJbdGhpcy5fYnVmcG9zKytdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcbiAgICBIS0RGLnByb3RvdHlwZS5jbGVhbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5faG1hYy5jbGVhbigpO1xuICAgICAgICB3aXBlXzEud2lwZSh0aGlzLl9idWZmZXIpO1xuICAgICAgICB3aXBlXzEud2lwZSh0aGlzLl9jb3VudGVyKTtcbiAgICAgICAgdGhpcy5fYnVmcG9zID0gMDtcbiAgICB9O1xuICAgIHJldHVybiBIS0RGO1xufSgpKTtcbmV4cG9ydHMuSEtERiA9IEhLREY7XG4vLyBUT0RPKGRjaGVzdCk6IG1heWJlIGltcGxlbWVudCBkZXJpdmVLZXk/XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oa2RmLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@stablelib+hkdf@1.0.1/node_modules/@stablelib/hkdf/lib/hkdf.js\n");

/***/ })

};
;