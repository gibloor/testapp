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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _arraySet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arraySet */ \"./pages/arraySet/index.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar bigSet = function(array) {\n    var object1 = {};\n    array.map(function(number) {\n        if (!object1[number]) {\n            object1[number] = 1;\n        } else {\n            object1[number] += 1;\n        }\n    });\n    var newArray = [];\n    for(var key in object1){\n        newArray.push(key);\n    }\n    return newArray;\n};\nvar union2 = function(arrayOne, arraySecond) {\n    return bigSet((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arrayOne).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arraySecond)));\n};\nvar intersection2 = function(firstArray, secondArray) {\n    var container = {};\n    firstArray.map(function(number) {\n        container[number] = 1;\n    });\n    secondArray.map(function(number) {\n        if (container[number]) {\n            container[number] = 2;\n        }\n    });\n    var newArray = [];\n    for(var key in container){\n        if (container[key] === 2) {\n            newArray.push(key);\n        }\n    }\n    return newArray;\n};\nvar diff = function(firstArray, secondArray) {\n    var container = {};\n    firstArray.map(function(number) {\n        container[number] = 1;\n    });\n    secondArray.map(function(number) {\n        if (container[number]) {\n            container[number] = 2;\n        } else {\n            container[number] = 1;\n        }\n    });\n    var newArray = [];\n    for(var key in container){\n        if (container[key] === 1) {\n            newArray.push(key);\n        }\n    }\n    return newArray;\n};\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"union\"), algorithm = ref[0], setAlgorithm = ref[1];\n    var switchers = [\n        \"union\",\n        \"intersection\",\n        \"difference\"\n    ];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), massives = ref1[0], setMassives = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        -2,\n        5,\n        10\n    ]), firstArray = ref2[0], setFirstArray = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        10,\n        -7,\n        10,\n        5\n    ]), secondArray = ref3[0], setSecondArray = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setMassives(diff(firstArray, secondArray));\n    }, [\n        firstArray,\n        secondArray\n    ]);\n    var addToFirstArray = function(number) {\n        setFirstArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(firstArray).concat([\n            number\n        ]));\n    };\n    var addToSecondArray = function(number) {\n        setSecondArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(secondArray).concat([\n            number\n        ]));\n    };\n    var deleteInFirstArray = function(index) {\n        var newArray = firstArray;\n        newArray.splice(index, 1);\n        setFirstArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newArray));\n    };\n    var deleteInSecondArray = function(index) {\n        var newArray = secondArray;\n        newArray.splice(index, 1);\n        setSecondArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newArray));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_arraySet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        array: firstArray,\n                        style: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default()),\n                        addToArray: addToFirstArray,\n                        deleteInArray: deleteInFirstArray\n                    }, void 0, false, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_arraySet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        array: secondArray,\n                        style: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default()),\n                        addToArray: addToSecondArray,\n                        deleteInArray: deleteInSecondArray\n                    }, void 0, false, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().box),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().block),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Union\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().array),\n                            children: massives.map(function(number) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().number),\n                                    children: number\n                                }, number, false, {\n                                    fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                    lineNumber: 133,\n                                    columnNumber: 22\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().switcher),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: switchers.map(function(switcher) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        HTMLFor: switcher,\n                                        children: [\n                                            switcher,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: switcher,\n                                                name: \"switcher\",\n                                                type: \"radio\",\n                                                value: switcher,\n                                                onChange: function() {\n                                                    return setAlgorithm(switcher);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                                lineNumber: 143,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, switcher, true, {\n                                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                        lineNumber: 141,\n                                        columnNumber: 17\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OOVaDqLagLHkP1H1ASDXNTtIarM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxTQUFBQSxNQUFNLEVBQUk7Z0NBQ3RCLHFCQUFPLDhEQUFDMEIsS0FBRztvQ0FBY0MsU0FBUyxFQUFFaEMsaUVBQVk7OENBQzdDSyxNQUFNO21DQURRQSxNQUFNOzs7O3lDQUVqQjs0QkFDUixDQUFDLENBQUM7Ozs7O2dDQUNFO3NDQUNOLDhEQUFDMEIsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFaEMsbUVBQWM7c0NBQzVCLDRFQUFDdUMsTUFBSTswQ0FDRm5CLFNBQVMsQ0FBQ2hCLEdBQUcsQ0FBQ2tDLFNBQUFBLFFBQVE7eURBQ3JCLDhEQUFDRSxPQUFLO3dDQUFnQkMsT0FBTyxFQUFFSCxRQUFROzs0Q0FDcENBLFFBQVE7MERBQ1QsOERBQUNJLE9BQUs7Z0RBQUNDLEVBQUUsRUFBRUwsUUFBUTtnREFBRU0sSUFBSSxFQUFDLFVBQVU7Z0RBQUNDLElBQUksRUFBQyxPQUFPO2dEQUFDQyxLQUFLLEVBQUVSLFFBQVE7Z0RBQUVTLFFBQVEsRUFBRTsyREFBTTVCLFlBQVksQ0FBQ21CLFFBQVEsQ0FBQztpREFBQTs7Ozs7cURBQUk7O3VDQUZuR0EsUUFBUTs7Ozs2Q0FHWjtpQ0FDVCxDQUFDOzs7OztvQ0FDRzs7Ozs7Z0NBQ0g7Ozs7Ozt3QkFDRjs7Ozs7b0JBQ0Y7Ozs7OztZQUNGLENBQ1A7QUFDSCxDQUFDO0dBdkV1QnJCLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXJyYXlTZXQgZnJvbSAnLi9hcnJheVNldCc7XG5cbmltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnO1xuXG5jb25zdCBiaWdTZXQgPSAoYXJyYXkpID0+IHtcbiAgY29uc3Qgb2JqZWN0MSA9IHt9XG5cbiAgYXJyYXkubWFwKG51bWJlciA9PiB7XG4gICAgaWYgKCFvYmplY3QxW251bWJlcl0pIHtcbiAgICAgIG9iamVjdDFbbnVtYmVyXSA9IDFcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0MVtudW1iZXJdICs9IDFcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbmV3QXJyYXkgPSBbXVxuXG4gIGZvciAobGV0IGtleSBpbiBvYmplY3QxKSB7XG4gICAgbmV3QXJyYXkucHVzaChrZXkpXG4gIH1cblxuICByZXR1cm4gbmV3QXJyYXlcbn1cblxuY29uc3QgdW5pb24yID0gKGFycmF5T25lLCBhcnJheVNlY29uZCkgPT4ge1xuICByZXR1cm4gYmlnU2V0KFsuLi5hcnJheU9uZSwgLi4uYXJyYXlTZWNvbmRdKVxufVxuXG5jb25zdCBpbnRlcnNlY3Rpb24yID0gKGZpcnN0QXJyYXksIHNlY29uZEFycmF5KSA9PiB7XG5cbiAgY29uc3QgY29udGFpbmVyID0ge31cblxuICBmaXJzdEFycmF5Lm1hcChudW1iZXIgPT4ge1xuICAgIGNvbnRhaW5lcltudW1iZXJdID0gMVxuICB9KVxuXG4gIHNlY29uZEFycmF5Lm1hcChudW1iZXIgPT4ge1xuICAgIGlmIChjb250YWluZXJbbnVtYmVyXSkge1xuICAgICAgY29udGFpbmVyW251bWJlcl0gPSAyXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG5ld0FycmF5ID0gW11cblxuICBmb3IgKGxldCBrZXkgaW4gY29udGFpbmVyKSB7XG4gICAgaWYgKGNvbnRhaW5lcltrZXldID09PSAyKSB7XG4gICAgICBuZXdBcnJheS5wdXNoKGtleSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QXJyYXlcbn1cblxuY29uc3QgZGlmZiA9IChmaXJzdEFycmF5LCBzZWNvbmRBcnJheSkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSB7fVxuXG4gIGZpcnN0QXJyYXkubWFwKG51bWJlciA9PiB7XG4gICAgY29udGFpbmVyW251bWJlcl0gPSAxXG4gIH0pXG5cbiAgc2Vjb25kQXJyYXkubWFwKG51bWJlciA9PiB7XG4gICAgaWYgKGNvbnRhaW5lcltudW1iZXJdKSB7XG4gICAgICBjb250YWluZXJbbnVtYmVyXSA9IDJcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyW251bWJlcl0gPSAxXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG5ld0FycmF5ID0gW11cblxuICBmb3IgKGxldCBrZXkgaW4gY29udGFpbmVyKSB7XG4gICAgaWYgKGNvbnRhaW5lcltrZXldID09PSAxKSB7XG4gICAgICBuZXdBcnJheS5wdXNoKGtleSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QXJyYXlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbYWxnb3JpdGhtLCBzZXRBbGdvcml0aG1dID0gdXNlU3RhdGUoJ3VuaW9uJyk7XG5cbiAgY29uc3Qgc3dpdGNoZXJzID0gW1xuICAgICd1bmlvbicsXG4gICAgJ2ludGVyc2VjdGlvbicsXG4gICAgJ2RpZmZlcmVuY2UnXG4gIF1cblxuICBjb25zdCBbbWFzc2l2ZXMsIHNldE1hc3NpdmVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBbZmlyc3RBcnJheSwgc2V0Rmlyc3RBcnJheV0gPSB1c2VTdGF0ZShbMSwgLTIsIDUsIDEwXSk7XG4gIGNvbnN0IFtzZWNvbmRBcnJheSwgc2V0U2Vjb25kQXJyYXldID0gdXNlU3RhdGUoWzEsIDEwLCAtNywgMTAsIDVdKVxuIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1hc3NpdmVzKGRpZmYoZmlyc3RBcnJheSwgc2Vjb25kQXJyYXkpKTtcbiAgfSwgW2ZpcnN0QXJyYXksIHNlY29uZEFycmF5XSlcblxuICBjb25zdCBhZGRUb0ZpcnN0QXJyYXkgPSAobnVtYmVyKSA9PiB7XG4gICAgc2V0Rmlyc3RBcnJheShbLi4uZmlyc3RBcnJheSwgbnVtYmVyXSlcbiAgfVxuXG4gIGNvbnN0IGFkZFRvU2Vjb25kQXJyYXkgPSAobnVtYmVyKSA9PiB7XG4gICAgc2V0U2Vjb25kQXJyYXkoWy4uLnNlY29uZEFycmF5LCBudW1iZXJdKVxuICB9XG5cbiAgY29uc3QgZGVsZXRlSW5GaXJzdEFycmF5ID0gKGluZGV4KSA9PiB7XG4gICAgbGV0IG5ld0FycmF5ID0gZmlyc3RBcnJheTtcbiAgICBuZXdBcnJheS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgc2V0Rmlyc3RBcnJheShbLi4ubmV3QXJyYXldKVxuICB9XG5cbiAgY29uc3QgZGVsZXRlSW5TZWNvbmRBcnJheSA9IChpbmRleCkgPT4ge1xuICAgIGxldCBuZXdBcnJheSA9IHNlY29uZEFycmF5O1xuICAgIG5ld0FycmF5LnNwbGljZShpbmRleCwgMSlcbiAgICBzZXRTZWNvbmRBcnJheShbLi4ubmV3QXJyYXldKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ib3h9PlxuICAgICAgICA8QXJyYXlTZXQgYXJyYXk9e2ZpcnN0QXJyYXl9IHN0eWxlPXtzdHlsZX0gYWRkVG9BcnJheT17YWRkVG9GaXJzdEFycmF5fSBkZWxldGVJbkFycmF5PXtkZWxldGVJbkZpcnN0QXJyYXl9IC8+XG4gICAgICAgIDxBcnJheVNldCBhcnJheT17c2Vjb25kQXJyYXl9IHN0eWxlPXtzdHlsZX0gYWRkVG9BcnJheT17YWRkVG9TZWNvbmRBcnJheX0gZGVsZXRlSW5BcnJheT17ZGVsZXRlSW5TZWNvbmRBcnJheX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJveH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ibG9ja30+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgVW5pb25cbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hcnJheX0+XG4gICAgICAgICAgICB7bWFzc2l2ZXMubWFwKG51bWJlciA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17bnVtYmVyfSBjbGFzc05hbWU9e3N0eWxlLm51bWJlcn0+XG4gICAgICAgICAgICAgICAge251bWJlcn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3dpdGNoZXJ9PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgIHtzd2l0Y2hlcnMubWFwKHN3aXRjaGVyID0+IChcbiAgICAgICAgICAgICAgICA8bGFiZWwga2V5PXtzd2l0Y2hlcn0gSFRNTEZvcj17c3dpdGNoZXJ9PlxuICAgICAgICAgICAgICAgICAge3N3aXRjaGVyfVxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXtzd2l0Y2hlcn0gbmFtZT0nc3dpdGNoZXInIHR5cGU9J3JhZGlvJyB2YWx1ZT17c3dpdGNoZXJ9IG9uQ2hhbmdlPXsoKSA9PiBzZXRBbGdvcml0aG0oc3dpdGNoZXIpfSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnJheVNldCIsInN0eWxlIiwiYmlnU2V0IiwiYXJyYXkiLCJvYmplY3QxIiwibWFwIiwibnVtYmVyIiwibmV3QXJyYXkiLCJrZXkiLCJwdXNoIiwidW5pb24yIiwiYXJyYXlPbmUiLCJhcnJheVNlY29uZCIsImludGVyc2VjdGlvbjIiLCJmaXJzdEFycmF5Iiwic2Vjb25kQXJyYXkiLCJjb250YWluZXIiLCJkaWZmIiwiSG9tZSIsImFsZ29yaXRobSIsInNldEFsZ29yaXRobSIsInN3aXRjaGVycyIsIm1hc3NpdmVzIiwic2V0TWFzc2l2ZXMiLCJzZXRGaXJzdEFycmF5Iiwic2V0U2Vjb25kQXJyYXkiLCJhZGRUb0ZpcnN0QXJyYXkiLCJhZGRUb1NlY29uZEFycmF5IiwiZGVsZXRlSW5GaXJzdEFycmF5IiwiaW5kZXgiLCJzcGxpY2UiLCJkZWxldGVJblNlY29uZEFycmF5IiwiZGl2IiwiY2xhc3NOYW1lIiwiYm94IiwiYWRkVG9BcnJheSIsImRlbGV0ZUluQXJyYXkiLCJibG9jayIsImgzIiwic3dpdGNoZXIiLCJmb3JtIiwibGFiZWwiLCJIVE1MRm9yIiwiaW5wdXQiLCJpZCIsIm5hbWUiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});