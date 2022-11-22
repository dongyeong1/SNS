webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, addpostRequestAction, addcommentRequestAction, reducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_REQUEST\", function() { return REMOVE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_SUCCESS\", function() { return REMOVE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_FAILURE\", function() { return REMOVE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addpostRequestAction\", function() { return addpostRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addcommentRequestAction\", function() { return addcommentRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.esm.js\");\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: '동영'\n    },\n    content: '첫 번째 게시글 #해시태그 #익스프레스',\n    Images: [{\n      src: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png'\n    }, {\n      src: 'https://byline.network/wp-content/uploads/2018/05/cat.png'\n    }],\n    Comments: [{\n      User: {\n        nickname: 'ji'\n      },\n      content: '사고싶어요'\n    }]\n  }],\n  imagePaths: [],\n  addpostLoading: false,\n  addpostDone: false,\n  addpostError: null,\n  removepostLoading: false,\n  removepostDone: false,\n  removepostError: null,\n  addcommentLoading: false,\n  addcommentDone: false,\n  addcommentError: null\n};\nvar dummyPost = function dummyPost(id, content) {\n  return {\n    id: id,\n    content: content,\n    User: {\n      id: 1,\n      nickname: '제로'\n    },\n    Images: [],\n    Comments: []\n  };\n};\nvar dummyComment = function dummyComment(content, id) {\n  return {\n    id: id,\n    User: {\n      nickname: 'ji'\n    },\n    content: content\n  };\n};\nvar ADD_POST_REQUEST = 'ADD_POST_REQUEST';\nvar ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';\nvar ADD_POST_FAILURE = 'ADD_POST_FAILURE';\nvar ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';\nvar ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';\nvar ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';\nvar REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';\nvar REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';\nvar REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';\nvar addpostRequestAction = function addpostRequestAction(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addcommentRequestAction = function addcommentRequestAction(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  return Object(immer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state, function (draft) {\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"HYDRATE\"]:\n        console.log('HYDRATE', action);\n        return _objectSpread(_objectSpread({}, state), action.payload);\n      case ADD_POST_REQUEST:\n        draft.addpostDone = false;\n        draft.addpostLoading = true;\n        draft.addpostError = null;\n        break;\n      case ADD_POST_SUCCESS:\n        draft.mainPosts.unshift(dummyPost(action.data.id, action.data.content));\n        draft.addpostDone = true;\n        draft.addpostLoading = false;\n        break;\n      case ADD_POST_FAILURE:\n        draft.addpostDone = false;\n        draft.addpostLoading = false;\n        draft.addpostError = action.err;\n        break;\n      case ADD_COMMENT_REQUEST:\n        draft.addcommentLoading = true;\n        draft.addcommentDone = false;\n        draft.addcommentError = null;\n        break;\n      case ADD_COMMENT_SUCCESS:\n        {\n          draft.addcommentDone = true;\n          draft.addcommentLoading = false;\n          var post = draft.mainPosts.find(function (v) {\n            return v.id === action.data.postId;\n          });\n          post.Comments.unshift(dummyComment(action.data.content, action.data.postId));\n          break;\n          // const postIndex =state.mainPosts.findIndex((v)=>v.id===action.data.postId);\n          // const post ={...state.mainPosts[postIndex]};\n          // post.Comments=[dummyComment(action.data.content),...post.Comments];\n          // const mainPosts=[...state.mainPosts];\n          // mainPosts[postIndex]=post\n          // return{\n          //     ...state,\n          //     mainPosts,\n          //     addcommentDone:true,\n          //     addcommentLoading:false,\n          // }\n        }\n\n      case ADD_COMMENT_FAILURE:\n        draft.addcommentDone = false;\n        draft.addcommentLoading = false;\n        draft.addcommentError = action.err;\n        break;\n      case REMOVE_POST_REQUEST:\n        draft.removepostDone = false;\n        draft.removepostLoading = true;\n        draft.removepostError = null;\n        break;\n      case REMOVE_POST_SUCCESS:\n        {\n          draft.removepostDone = true;\n          draft.removepostLoading = false;\n          draft.mainPosts = draft.mainPosts.filter(function (m) {\n            return m.id !== action.data;\n          });\n          break;\n        }\n      case REMOVE_POST_FAILURE:\n        draft.removepostDone = false;\n        draft.removepostLoading = false;\n        draft.removepostError = action.err;\n        break;\n      default:\n        return state;\n    }\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZHBvc3RMb2FkaW5nIiwiYWRkcG9zdERvbmUiLCJhZGRwb3N0RXJyb3IiLCJyZW1vdmVwb3N0TG9hZGluZyIsInJlbW92ZXBvc3REb25lIiwicmVtb3ZlcG9zdEVycm9yIiwiYWRkY29tbWVudExvYWRpbmciLCJhZGRjb21tZW50RG9uZSIsImFkZGNvbW1lbnRFcnJvciIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsImFkZHBvc3RSZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJhZGRjb21tZW50UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInVuc2hpZnQiLCJlcnIiLCJwb3N0IiwiZmluZCIsInYiLCJwb3N0SWQiLCJmaWx0ZXIiLCJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2Q7QUFDRjtBQUdwQixJQUFNQSxZQUFZLEdBQUM7RUFDdEJDLFNBQVMsRUFBQyxDQUFDO0lBQ1BDLEVBQUUsRUFBQyxDQUFDO0lBQ0pDLElBQUksRUFBQztNQUNERCxFQUFFLEVBQUMsQ0FBQztN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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7UUFDSjs7TUFDQSxLQUFLdEIsbUJBQW1CO1FBRWhCWSxLQUFLLENBQUNyQixjQUFjLEdBQUMsS0FBSztRQUMxQnFCLEtBQUssQ0FBQ3RCLGlCQUFpQixHQUFDLEtBQUs7UUFDN0JzQixLQUFLLENBQUNwQixlQUFlLEdBQUNrQixNQUFNLENBQUNRLEdBQUc7UUFDaEM7TUFFUixLQUFLakIsbUJBQW1CO1FBQ2hCVyxLQUFLLENBQUN4QixjQUFjLEdBQUMsS0FBSztRQUMxQndCLEtBQUssQ0FBQ3pCLGlCQUFpQixHQUFDLElBQUk7UUFDNUJ5QixLQUFLLENBQUN2QixlQUFlLEdBQUMsSUFBSTtRQUMxQjtNQUVSLEtBQUthLG1CQUFtQjtRQUFDO1VBRWpCVSxLQUFLLENBQUN4QixjQUFjLEdBQUMsSUFBSTtVQUN6QndCLEtBQUssQ0FBQ3pCLGlCQUFpQixHQUFDLEtBQUs7VUFDN0J5QixLQUFLLENBQUNyQyxTQUFTLEdBQUNxQyxLQUFLLENBQUNyQyxTQUFTLENBQUNnRCxNQUFNLENBQUMsVUFBQ0MsQ0FBQztZQUFBLE9BQUdBLENBQUMsQ0FBQ2hELEVBQUUsS0FBR2tDLE1BQU0sQ0FBQ0wsSUFBSTtVQUFBLEVBQUM7VUFDL0Q7UUFDSjtNQUNKLEtBQUtGLG1CQUFtQjtRQUNwQlMsS0FBSyxDQUFDeEIsY0FBYyxHQUFDLEtBQUs7UUFDMUJ3QixLQUFLLENBQUN6QixpQkFBaUIsR0FBQyxLQUFLO1FBQzdCeUIsS0FBSyxDQUFDdkIsZUFBZSxHQUFDcUIsTUFBTSxDQUFDUSxHQUFHO1FBQ2hDO01BQ1I7UUFDSSxPQUFPVCxLQUFLO0lBQUM7RUFDaEIsQ0FBQyxDQUFDO0FBSWYsQ0FBQztBQUVjRCxzRUFBTyIsImZpbGUiOiIuL3JlZHVjZXJzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hZRFJBVEV9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJ1xuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXG5cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZT17XG4gICAgbWFpblBvc3RzOlt7XG4gICAgICAgIGlkOjEsXG4gICAgICAgIFVzZXI6e1xuICAgICAgICAgICAgaWQ6MSxcbiAgICAgICAgICAgIG5pY2tuYW1lOifrj5nsmIEnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQ6J+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXG4gICAgICAgIEltYWdlczpbe1xuICAgICAgICAgICAgc3JjOidodHRwczovL2hlbHB4LmFkb2JlLmNvbS9jb250ZW50L2RhbS9oZWxwL2VuL3Bob3Rvc2hvcC91c2luZy9xdWljay1hY3Rpb25zL3JlbW92ZS1iYWNrZ3JvdW5kLWJlZm9yZS1xYTEucG5nJ1xuICAgICAgICB9LHtcbiAgICAgICAgICAgIHNyYzonaHR0cHM6Ly9ieWxpbmUubmV0d29yay93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNS9jYXQucG5nJ1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIF0sXG4gICAgICAgIENvbW1lbnRzOltcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBVc2VyOntcbiAgICAgICAgICAgICAgICAgbmlja25hbWU6J2ppJ1xuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgY29udGVudDon7IKs6rOg7Iu27Ja07JqUJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgXG4gICAgfV0sXG4gICAgaW1hZ2VQYXRoczpbXSxcbiAgICBhZGRwb3N0TG9hZGluZzpmYWxzZSxcbiAgICBhZGRwb3N0RG9uZTpmYWxzZSxcbiAgICBhZGRwb3N0RXJyb3I6bnVsbCxcblxuICAgIHJlbW92ZXBvc3RMb2FkaW5nOmZhbHNlLFxuICAgIHJlbW92ZXBvc3REb25lOmZhbHNlLFxuICAgIHJlbW92ZXBvc3RFcnJvcjpudWxsLFxuXG4gICAgYWRkY29tbWVudExvYWRpbmc6ZmFsc2UsXG4gICAgYWRkY29tbWVudERvbmU6ZmFsc2UsXG4gICAgYWRkY29tbWVudEVycm9yOm51bGxcbn1cblxuY29uc3QgZHVtbXlQb3N0PShpZCxjb250ZW50KT0+e1xuICAgIHJldHVybntcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIFVzZXI6e1xuICAgICAgICAgICAgaWQ6MSxcbiAgICAgICAgICAgIG5pY2tuYW1lOifsoJzroZwnXG4gICAgICAgIH0sXG4gICAgICAgIEltYWdlczpbXSxcbiAgICAgICAgQ29tbWVudHM6W11cbiAgICB9XG4gICBcbn1cblxuY29uc3QgZHVtbXlDb21tZW50PShjb250ZW50LGlkKT0+e1xuICAgIHJldHVybntcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgVXNlcjp7XG4gICAgICAgICAgICAgICAgbmlja25hbWU6J2ppJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgIH1cbiAgICBcbn1cbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUPSdBRERfUE9TVF9SRVFVRVNUJzsgXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUz0nQUREX1BPU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRT0nQUREX1BPU1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUPSdBRERfQ09NTUVOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTPSdBRERfQ09NTUVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFPSdBRERfQ09NTUVOVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1Q9J1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1M9J1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkU9J1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xuXG5cblxuZXhwb3J0IGNvbnN0IGFkZHBvc3RSZXF1ZXN0QWN0aW9uPShkYXRhKT0+e1xuICAgcmV0dXJue1xuICAgIHR5cGU6QUREX1BPU1RfUkVRVUVTVCxcbiAgICBkYXRhXG4gICB9XG59XG5cbmV4cG9ydCBjb25zdCBhZGRjb21tZW50UmVxdWVzdEFjdGlvbj0oZGF0YSk9PntcbiAgICByZXR1cm57XG4gICAgICAgIHR5cGU6QUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgICAgICAgZGF0YVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcbiAgICBcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG5cbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsYWN0aW9uKVxuICAgICAgICAgICAgICAgIHJldHVybnsuLi5zdGF0ZSwuLi5hY3Rpb24ucGF5bG9hZH1cbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRwb3N0RG9uZT1mYWxzZVxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZHBvc3RMb2FkaW5nPXRydWVcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRwb3N0RXJyb3I9bnVsbFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YS5pZCxhY3Rpb24uZGF0YS5jb250ZW50KSlcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRwb3N0RG9uZT10cnVlXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkcG9zdExvYWRpbmc9ZmFsc2VcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTogXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkcG9zdERvbmU9ZmFsc2VcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRwb3N0TG9hZGluZz1mYWxzZVxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZHBvc3RFcnJvcj1hY3Rpb24uZXJyXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOiAgICBcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRjb21tZW50TG9hZGluZz10cnVlO1xuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZGNvbW1lbnREb25lPWZhbHNlO1xuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZGNvbW1lbnRFcnJvcj1udWxsXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOntcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRjb21tZW50RG9uZT10cnVlO1xuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZGNvbW1lbnRMb2FkaW5nPWZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPWRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KT0+di5pZD09PWFjdGlvbi5kYXRhLnBvc3RJZCk7XG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50LGFjdGlvbi5kYXRhLnBvc3RJZCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0SW5kZXggPXN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpPT52LmlkPT09YWN0aW9uLmRhdGEucG9zdElkKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgcG9zdCA9ey4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdfTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcG9zdC5Db21tZW50cz1bZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLC4uLnBvc3QuQ29tbWVudHNdO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBtYWluUG9zdHM9Wy4uLnN0YXRlLm1haW5Qb3N0c107XG4gICAgICAgICAgICAgICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdPXBvc3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJue1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBtYWluUG9zdHMsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBhZGRjb21tZW50RG9uZTp0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYWRkY29tbWVudExvYWRpbmc6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWZ0LmFkZGNvbW1lbnREb25lPWZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFmdC5hZGRjb21tZW50TG9hZGluZz1mYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQuYWRkY29tbWVudEVycm9yPWFjdGlvbi5lcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlcG9zdERvbmU9ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVwb3N0TG9hZGluZz10cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlcG9zdEVycm9yPW51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOntcblxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlcG9zdERvbmU9dHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZXBvc3RMb2FkaW5nPWZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzPWRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKG0pPT5tLmlkIT09YWN0aW9uLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVwb3N0RG9uZT1mYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlcG9zdExvYWRpbmc9ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZXBvc3RFcnJvcj1hY3Rpb24uZXJyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9ICAgIH0pO1xuXG4gICBcblxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})