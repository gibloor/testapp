"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/arraySet/index.js":
/*!*********************************!*\
  !*** ./pages/arraySet/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArraySet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ArraySet(props) {\n    var _this = this;\n    var array = props.array, style = props.style, addToArray = props.addToArray;\n    var submitNumber = function(e) {\n        e.preventDefault();\n        addToArray(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.block,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"setA\"\n            }, void 0, false, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/arraySet/index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.array,\n                children: array.map(function(number, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.number,\n                        children: number\n                    }, index, false, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/arraySet/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/arraySet/index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: function(e) {\n                    return submitNumber(e);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\"\n                }, void 0, false, {\n                    fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/arraySet/index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/arraySet/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/arraySet/index.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = ArraySet;\nvar _c;\n$RefreshReg$(_c, \"ArraySet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnJheVNldC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQWlDO0FBRWxCLFNBQVNDLFFBQVEsQ0FBQ0MsS0FBSyxFQUFFOztJQUV0QyxJQUFRQyxLQUFLLEdBQXdCRCxLQUFLLENBQWxDQyxLQUFLLEVBQUVDLEtBQUssR0FBaUJGLEtBQUssQ0FBM0JFLEtBQUssRUFBRUMsVUFBVSxHQUFLSCxLQUFLLENBQXBCRyxVQUFVO0lBSWhDLElBQU1DLFlBQVksR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDMUJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO1FBQ2xCSCxVQUFVLENBQUNFLENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRVIsS0FBSyxDQUFDUyxLQUFLOzswQkFDekIsOERBQUNDLElBQUU7MEJBQUMsTUFFSjs7Ozs7b0JBQUs7MEJBQ0wsOERBQUNILEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVIsS0FBSyxDQUFDRCxLQUFLOzBCQUN4QkEsS0FBSyxDQUFDWSxHQUFHLENBQUMsU0FBQ0MsTUFBTSxFQUFFQyxLQUFLO3lDQUN2Qiw4REFBQ04sS0FBRzt3QkFBYUMsU0FBUyxFQUFFUixLQUFLLENBQUNZLE1BQU07a0NBQ3JDQSxNQUFNO3VCQURDQyxLQUFLOzs7OzZCQUVUO2lCQUNQLENBQUM7Ozs7O29CQUNFOzBCQUNOLDhEQUFDQyxNQUFJO2dCQUFDQyxRQUFRLEVBQUUsU0FBQ1osQ0FBQzsyQkFBS0QsWUFBWSxDQUFDQyxDQUFDLENBQUM7aUJBQUE7MEJBQ3BDLDRFQUFDYSxPQUFLO29CQUFDQyxJQUFJLEVBQUMsUUFBUTs7Ozs7d0JBQUU7Ozs7O29CQUNqQjs7Ozs7O1lBQ0gsQ0FDUDtBQUNILENBQUM7QUE1QnVCcEIsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnJheVNldC9pbmRleC5qcz9jZmFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnJheVNldChwcm9wcykge1xuXG4gIGNvbnN0IHsgYXJyYXksIHN0eWxlLCBhZGRUb0FycmF5IH0gPSBwcm9wcztcblxuXG5cbiAgY29uc3Qgc3VibWl0TnVtYmVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBhZGRUb0FycmF5KGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYmxvY2t9PlxuICAgICAgPGgzPlxuICAgICAgICBzZXRBXG4gICAgICA8L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFycmF5fT5cbiAgICAgICAge2FycmF5Lm1hcCgobnVtYmVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZS5udW1iZXJ9PlxuICAgICAgICAgICAge251bWJlcn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gc3VibWl0TnVtYmVyKGUpfT5cbiAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicvPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApICBcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJBcnJheVNldCIsInByb3BzIiwiYXJyYXkiLCJzdHlsZSIsImFkZFRvQXJyYXkiLCJzdWJtaXROdW1iZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImJsb2NrIiwiaDMiLCJtYXAiLCJudW1iZXIiLCJpbmRleCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/arraySet/index.js\n"));

/***/ })

});