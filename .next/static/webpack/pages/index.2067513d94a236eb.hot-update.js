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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\n\nvar bigSet = function(array) {\n    var object1 = {};\n    array.map(function(number) {\n        if (!object1[number]) {\n            object1[number] = 1;\n        } else {\n            object1[number] += 1;\n        }\n    });\n    var newArray = [];\n    for(var key in object1){\n        newArray.push(key);\n    }\n    return newArray;\n};\nvar union2 = function(arrayOne, arraySecond) {\n    return bigSet((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arrayOne).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arraySecond)));\n};\nvar union3 = function(arrayOne, arraySecond, arrayThree) {\n    var arrays = union2(arrayOne, arraySecond);\n    return union2(arrays, arrayThree);\n};\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), massives = ref[0], setMassives = ref[1];\n    var setA = [\n        1,\n        -2,\n        5,\n        10\n    ];\n    var setB = [\n        1,\n        10,\n        -7,\n        10,\n        5\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setMassives(union2(setA, setB));\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"setA\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: setA.map(function(number, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"number\",\n                                        children: number\n                                    }, index, false, {\n                                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"SetB\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: setB.map(function(number, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"number\",\n                                        children: number\n                                    }, index, false, {\n                                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"block\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Union\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: massives.map(function(number) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"number\",\n                                    children: number\n                                }, void 0, false, {\n                                    fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 22\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLFNBQVMsRUFBQyxLQUFLOzBCQUNsQiw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLE9BQU87O3NDQUNwQiw4REFBQ0MsSUFBRTtzQ0FBQyxPQUVKOzs7OztnQ0FBSztzQ0FDTCw4REFBQ0MsR0FBQztzQ0FDQ1AsUUFBUSxDQUFDWixHQUFHLENBQUNDLFNBQUFBLE1BQU0sRUFBSTtnQ0FDdEIscUJBQU8sOERBQUNlLEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxRQUFROzhDQUMzQmhCLE1BQU07Ozs7O3lDQUNIOzRCQUNSLENBQUMsQ0FBQzs7Ozs7Z0NBQ0E7Ozs7Ozt3QkFDQTs7Ozs7b0JBQ0Y7Ozs7OztZQUNGLENBQ1A7QUFDSCxDQUFDO0dBeER1QlUsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgYmlnU2V0ID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IG9iamVjdDEgPSB7XG5cbiAgfVxuXG4gIGFycmF5Lm1hcChudW1iZXIgPT4ge1xuICAgIGlmICghb2JqZWN0MVtudW1iZXJdKSB7XG4gICAgICBvYmplY3QxW251bWJlcl0gPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIG9iamVjdDFbbnVtYmVyXSArPSAxXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG5ld0FycmF5ID0gW11cblxuICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0MSkge1xuICAgIG5ld0FycmF5LnB1c2goa2V5KVxuICB9XG5cbiAgcmV0dXJuIG5ld0FycmF5XG59XG5cbmNvbnN0IHVuaW9uMiA9IChhcnJheU9uZSwgYXJyYXlTZWNvbmQpID0+IHtcbiAgcmV0dXJuIGJpZ1NldChbLi4uYXJyYXlPbmUsIC4uLmFycmF5U2Vjb25kXSlcblxufVxuXG5jb25zdCB1bmlvbjMgPSAoYXJyYXlPbmUsIGFycmF5U2Vjb25kLCBhcnJheVRocmVlKSA9PiB7XG4gIGNvbnN0IGFycmF5cyA9IHVuaW9uMihhcnJheU9uZSwgYXJyYXlTZWNvbmQpXG5cbiAgcmV0dXJuIHVuaW9uMihhcnJheXMsIGFycmF5VGhyZWUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW21hc3NpdmVzLCBzZXRNYXNzaXZlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3Qgc2V0QSA9IFsxLCAtMiwgNSwgMTBdO1xuICBjb25zdCBzZXRCID0gWzEsIDEwLCAtNywgMTAsIDVdXG4gXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TWFzc2l2ZXModW5pb24yKHNldEEsIHNldEIpKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrJz5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICBzZXRBXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtzZXRBLm1hcCgobnVtYmVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT0nbnVtYmVyJz5cbiAgICAgICAgICAgICAgICB7bnVtYmVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvcD5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrJz5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICBTZXRCXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtzZXRCLm1hcCgobnVtYmVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT0nbnVtYmVyJz5cbiAgICAgICAgICAgICAgICB7bnVtYmVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2snPlxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIFVuaW9uXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHttYXNzaXZlcy5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdudW1iZXInPlxuICAgICAgICAgICAgICAgIHtudW1iZXJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJiaWdTZXQiLCJhcnJheSIsIm9iamVjdDEiLCJtYXAiLCJudW1iZXIiLCJuZXdBcnJheSIsImtleSIsInB1c2giLCJ1bmlvbjIiLCJhcnJheU9uZSIsImFycmF5U2Vjb25kIiwidW5pb24zIiwiYXJyYXlUaHJlZSIsImFycmF5cyIsIkhvbWUiLCJtYXNzaXZlcyIsInNldE1hc3NpdmVzIiwic2V0QSIsInNldEIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInAiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});