webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == typeof value && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nvar _marked = /*#__PURE__*/_regeneratorRuntime().mark(login),\n  _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(logout),\n  _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(signup),\n  _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(follow),\n  _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(unfollow),\n  _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogin),\n  _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogOut),\n  _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchSignup),\n  _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(watchFollowing),\n  _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnFollowing),\n  _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(userSaga);\n\n\n\nfunction loginAPI(data) {\n  // return axios.post('/user/login')\n  return console.log('12345566');\n}\nfunction login(action) {\n  return _regeneratorRuntime().wrap(function login$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n        case 2:\n          _context.prev = 2;\n          _context.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_IN_SUCCESS\"],\n            data: action.data\n          });\n        case 5:\n          _context.next = 11;\n          break;\n        case 7:\n          _context.prev = 7;\n          _context.t0 = _context[\"catch\"](2);\n          _context.next = 11;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_IN_FAILURE\"],\n            error: _context.t0.response.data\n          });\n        case 11:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[2, 7]]);\n}\nfunction logOutAPI() {\n  // return axios.post('/user/logout')\n}\nfunction logout() {\n  return _regeneratorRuntime().wrap(function logout$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.prev = 0;\n          _context2.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n        case 3:\n          _context2.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_OUT_SUCCESS\"]\n          });\n        case 5:\n          _context2.next = 11;\n          break;\n        case 7:\n          _context2.prev = 7;\n          _context2.t0 = _context2[\"catch\"](0);\n          _context2.next = 11;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_OUT_FAILURE\"],\n            error: _context2.t0.response.data\n          });\n        case 11:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2, null, [[0, 7]]);\n}\nfunction signupAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('http://localhost:3065/user', data);\n}\nfunction signup(action) {\n  var result;\n  return _regeneratorRuntime().wrap(function signup$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.prev = 0;\n          _context3.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(signupAPI, action.data);\n        case 3:\n          result = _context3.sent;\n          // yield delay(1000)\n          console.log(result);\n          _context3.next = 7;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_UP_SUCCESS\"],\n            data: result\n          });\n        case 7:\n          _context3.next = 14;\n          break;\n        case 9:\n          _context3.prev = 9;\n          _context3.t0 = _context3[\"catch\"](0);\n          console.log('eeeeerrrr', _context3.t0.response);\n          _context3.next = 14;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_UP_FAILURE\"],\n            error: _context3.t0.response.data\n          });\n        case 14:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3, null, [[0, 9]]);\n}\nfunction followAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('/api/signup');\n}\nfunction follow(action) {\n  return _regeneratorRuntime().wrap(function follow$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.prev = 0;\n          _context4.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n        case 3:\n          _context4.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"FOLLOW_SUCCESS\"],\n            data: action.data\n          });\n        case 5:\n          _context4.next = 11;\n          break;\n        case 7:\n          _context4.prev = 7;\n          _context4.t0 = _context4[\"catch\"](0);\n          _context4.next = 11;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"FOLLOW_FAILURE\"],\n            error: _context4.t0.response.data\n          });\n        case 11:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4, null, [[0, 7]]);\n}\nfunction unfollowAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('/api/signup');\n}\nfunction unfollow(action) {\n  return _regeneratorRuntime().wrap(function unfollow$(_context5) {\n    while (1) {\n      switch (_context5.prev = _context5.next) {\n        case 0:\n          _context5.prev = 0;\n          _context5.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n        case 3:\n          _context5.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"UNFOLLOW_SUCCESS\"],\n            data: action.data\n          });\n        case 5:\n          _context5.next = 11;\n          break;\n        case 7:\n          _context5.prev = 7;\n          _context5.t0 = _context5[\"catch\"](0);\n          _context5.next = 11;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"UNFOLLOW_FAILURE\"],\n            error: _context5.t0.response.data\n          });\n        case 11:\n        case \"end\":\n          return _context5.stop();\n      }\n    }\n  }, _marked5, null, [[0, 7]]);\n}\nfunction watchLogin() {\n  return _regeneratorRuntime().wrap(function watchLogin$(_context6) {\n    while (1) {\n      switch (_context6.prev = _context6.next) {\n        case 0:\n          _context6.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_IN_REQUEST\"], login);\n        case 2:\n        case \"end\":\n          return _context6.stop();\n      }\n    }\n  }, _marked6);\n}\nfunction watchLogOut() {\n  return _regeneratorRuntime().wrap(function watchLogOut$(_context7) {\n    while (1) {\n      switch (_context7.prev = _context7.next) {\n        case 0:\n          _context7.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_OUT_REQUEST\"], logout);\n        case 2:\n        case \"end\":\n          return _context7.stop();\n      }\n    }\n  }, _marked7);\n}\nfunction watchSignup() {\n  return _regeneratorRuntime().wrap(function watchSignup$(_context8) {\n    while (1) {\n      switch (_context8.prev = _context8.next) {\n        case 0:\n          _context8.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_UP_REQUEST\"], signup);\n        case 2:\n        case \"end\":\n          return _context8.stop();\n      }\n    }\n  }, _marked8);\n}\nfunction watchFollowing() {\n  return _regeneratorRuntime().wrap(function watchFollowing$(_context9) {\n    while (1) {\n      switch (_context9.prev = _context9.next) {\n        case 0:\n          _context9.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"FOLLOW_REQUEST\"], follow);\n        case 2:\n        case \"end\":\n          return _context9.stop();\n      }\n    }\n  }, _marked9);\n}\nfunction watchUnFollowing() {\n  return _regeneratorRuntime().wrap(function watchUnFollowing$(_context10) {\n    while (1) {\n      switch (_context10.prev = _context10.next) {\n        case 0:\n          _context10.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"UNFOLLOW_REQUEST\"], unfollow);\n        case 2:\n        case \"end\":\n          return _context10.stop();\n      }\n    }\n  }, _marked10);\n}\nfunction userSaga() {\n  return _regeneratorRuntime().wrap(function userSaga$(_context11) {\n    while (1) {\n      switch (_context11.prev = _context11.next) {\n        case 0:\n          _context11.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchSignup), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFollowing), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchUnFollowing)]);\n        case 2:\n        case \"end\":\n          return _context11.stop();\n      }\n    }\n  }, _marked11);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcz9hMzg2Il0sIm5hbWVzIjpbImxvZ2luIiwibG9nb3V0Iiwic2lnbnVwIiwiZm9sbG93IiwidW5mb2xsb3ciLCJ3YXRjaExvZ2luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ251cCIsIndhdGNoRm9sbG93aW5nIiwid2F0Y2hVbkZvbGxvd2luZyIsInVzZXJTYWdhIiwibG9naW5BUEkiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImFjdGlvbiIsImRlbGF5IiwicHV0IiwidHlwZSIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJlcnJvciIsInJlc3BvbnNlIiwibG9nT3V0QVBJIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwic2lnbnVwQVBJIiwiYXhpb3MiLCJwb3N0IiwiY2FsbCIsInJlc3VsdCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsImZvbGxvd0FQSSIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJ1bmZvbGxvd0FQSSIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwidGFrZUxhdGVzdCIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX09VVF9SRVFVRVNUIiwiU0lHTl9VUF9SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7K0NBQ0E7QUFBQSxzREF3QlVBLEtBQUs7RUFBQSxtREF1QkxDLE1BQU07RUFBQSxtREFvQk5DLE1BQU07RUFBQSxtREF1Qk5DLE1BQU07RUFBQSxtREFvQk5DLFFBQVE7RUFBQSxtREFpQlJDLFVBQVU7RUFBQSxtREFHVkMsV0FBVztFQUFBLG1EQUdYQyxXQUFXO0VBQUEsbURBR1hDLGNBQWM7RUFBQSxvREFHZEMsZ0JBQWdCO0VBQUEsb0RBS0RDLFFBQVE7QUFqSnVDO0FBQy9DO0FBZ0Jv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Q0FBQztRQUFBO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBO0FBRTNDLFNBQVVNLGdCQUFnQjtFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFDdEIsT0FBTThCLHFFQUFVLENBQUNLLCtEQUFnQixFQUFDeEMsUUFBUSxDQUFDO1FBQUE7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBO0FBQUE7QUFJaEMsU0FBVU0sUUFBUTtFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFDN0IsT0FBTW1DLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ3pDLFVBQVUsQ0FBQyxFQUNoQnlDLCtEQUFJLENBQUN4QyxXQUFXLENBQUMsRUFDakJ3QywrREFBSSxDQUFDdkMsV0FBVyxDQUFDLEVBQ2pCdUMsK0RBQUksQ0FBQ3RDLGNBQWMsQ0FBQyxFQUNwQnNDLCtEQUFJLENBQUNyQyxnQkFBZ0IsQ0FBQyxDQUN6QixDQUFDO1FBQUE7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBO0FBQUEiLCJmaWxlIjoiLi9zYWdhcy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsICxmb3JrLGRlbGF5LHB1dCxjYWxsLHRha2VMYXRlc3R9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IFxuICAgIFNJR05fVVBfRkFJTFVSRSxcbiAgICBTSUdOX1VQX1NVQ0NFU1MsXG4gICAgU0lHTl9VUF9SRVFVRVNULFxuICAgIExPR19PVVRfUkVRVUVTVCxcbiAgICBMT0dfT1VUX1NVQ0NFU1MsXG4gICAgTE9HX09VVF9GQUlMVVJFLFxuICAgIExPR19JTl9SRVFVRVNULCBcbiAgICBMT0dfSU5fU1VDQ0VTUywgXG4gICAgTE9HX0lOX0ZBSUxVUkUsIFxuICAgIEZPTExPV19SRVFVRVNULFxuICAgIFVORk9MTE9XX1JFUVVFU1QsXG4gICAgRk9MTE9XX1NVQ0NFU1MsXG4gICAgRk9MTE9XX0ZBSUxVUkUsXG4gICAgVU5GT0xMT1dfRkFJTFVSRSxcbiAgICBVTkZPTExPV19TVUNDRVNTfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xuXG5mdW5jdGlvbiBsb2dpbkFQSShkYXRhKXtcbiAgICAvLyByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nKVxuICAgIHJldHVybiBjb25zb2xlLmxvZygnMTIzNDU1NjYnKVxufVxuXG5cbmZ1bmN0aW9uKiBsb2dpbihhY3Rpb24pe1xuLy8gICAgIGNvbnNvbGUubG9nKCdxd2VyZXFyZXdyYXNkZmRhc2QnKVxuLy8gY29uc3QgcmVzdWx0ID15aWVsZCBjYWxsKGxvZ2luQVBJLGFjdGlvbi5kYXRhKVxuXG55aWVsZCBkZWxheSgxMDAwKVxudHJ5e1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAgIHR5cGU6TE9HX0lOX1NVQ0NFU1MsXG4gICAgICAgIGRhdGE6YWN0aW9uLmRhdGFcbiAgICB9KVxufVxuY2F0Y2goZXJyKXtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgICB0eXBlOkxPR19JTl9GQUlMVVJFLFxuICAgICAgICBlcnJvcjplcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KVxufVxufVxuXG5mdW5jdGlvbiBsb2dPdXRBUEkoKXtcbiAgICAvLyByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0Jylcbn1cblxuZnVuY3Rpb24qIGxvZ291dCgpe1xuICAgIHRyeXtcbiAgICAgICAgLy8geWllbGQgY2FsbChsb2dPdXRBUEkpXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApXG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOkxPR19PVVRfU1VDQ0VTUyxcbiAgICAgICAgfSlcbiAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6TE9HX09VVF9GQUlMVVJFLFxuICAgICAgICAgICAgZXJyb3I6ZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuXG59XG5mdW5jdGlvbiBzaWdudXBBUEkoZGF0YSl7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyJyxkYXRhKVxufVxuXG5mdW5jdGlvbiogc2lnbnVwKGFjdGlvbil7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ251cEFQSSxhY3Rpb24uZGF0YSlcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMClcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHlwZTpTSUdOX1VQX1NVQ0NFU1MsXG4gICAgICAgICAgICBkYXRhOnJlc3VsdFxuICAgICAgICB9KVxuICAgIH1jYXRjaChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZygnZWVlZWVycnJyJyxlcnIucmVzcG9uc2UpXG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOlNJR05fVVBfRkFJTFVSRSxcbiAgICAgICAgICAgIGVycm9yOmVyci5yZXNwb25zZS5kYXRhLFxuICAgICAgICB9KVxuICAgICAgICAgIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9sbG93QVBJKCl7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvc2lnbnVwJylcbn1cblxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pe1xuICAgIHRyeXtcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMClcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6Rk9MTE9XX1NVQ0NFU1MsXG4gICAgICAgICAgICBkYXRhOmFjdGlvbi5kYXRhXG4gICAgICAgIH0pXG4gICAgfWNhdGNoKGVycil7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOkZPTExPV19GQUlMVVJFLFxuICAgICAgICAgICAgZXJyb3I6ZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgIH0pXG4gICAgICAgICAgXG4gICAgfVxufVxuXG5mdW5jdGlvbiB1bmZvbGxvd0FQSSgpe1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3NpZ251cCcpXG59XG5cbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pe1xuICAgIHRyeXtcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMClcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6VU5GT0xMT1dfU1VDQ0VTUyxcbiAgICAgICAgICAgIGRhdGE6YWN0aW9uLmRhdGFcbiAgICAgICAgfSlcbiAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6VU5GT0xMT1dfRkFJTFVSRSxcbiAgICAgICAgICAgIGVycm9yOmVyci5yZXNwb25zZS5kYXRhLFxuICAgICAgICB9KVxuICAgICAgICAgIFxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpe1xuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsbG9naW4pXG59XG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKXtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCxsb2dvdXQpXG59XG5mdW5jdGlvbiogd2F0Y2hTaWdudXAoKXtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCxzaWdudXApXG59XG5mdW5jdGlvbiogd2F0Y2hGb2xsb3dpbmcoKXtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULGZvbGxvdylcbn1cbmZ1bmN0aW9uKiB3YXRjaFVuRm9sbG93aW5nKCl7XG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULHVuZm9sbG93KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpe1xuICAgIHlpZWxkIGFsbChbXG4gICAgICAgIGZvcmsod2F0Y2hMb2dpbiksXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxuICAgICAgICBmb3JrKHdhdGNoU2lnbnVwKSxcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvd2luZyksXG4gICAgICAgIGZvcmsod2F0Y2hVbkZvbGxvd2luZylcbiAgICBdKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/user.js\n");

/***/ })

})