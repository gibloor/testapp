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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _arraySet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arraySet */ \"./pages/arraySet/index.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar bigSet = function(array) {\n    var object1 = {};\n    array.map(function(number) {\n        if (!object1[number]) {\n            object1[number] = 1;\n        } else {\n            object1[number] += 1;\n        }\n    });\n    var newArray = [];\n    for(var key in object1){\n        newArray.push(key);\n    }\n    return newArray;\n};\nvar union2 = function(arrayOne, arraySecond) {\n    return bigSet((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arrayOne).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arraySecond)));\n};\nvar intersection2 = function(firstArray, secondArray) {\n    var container = {};\n    firstArray.map(function(number) {\n        container[number] = 1;\n    });\n    secondArray.map(function(number) {\n        if (container[number]) {\n            container[number] = 2;\n        }\n    });\n    var newArray = [];\n    for(var key in container){\n        if (container[key] === 2) {\n            newArray.push(key);\n        }\n    }\n    return newArray;\n};\nvar diff = function(firstArray, secondArray) {\n    var container = {};\n    firstArray.map(function(number) {\n        container[number] = 1;\n    });\n    secondArray.map(function(number) {\n        if (container[number]) {\n            container[number] = 2;\n        } else {\n            container[number] = 1;\n        }\n    });\n    var newArray = [];\n    for(var key in container){\n        if (container[key] === 1) {\n            newArray.push(key);\n        }\n    }\n    return newArray;\n};\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"union\", 2), algorithm = ref[0], setAlgorithm = ref[1];\n    var switchers = [\n        \"union\",\n        \"intersection\",\n        \"difference\"\n    ];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), massives = ref1[0], setMassives = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        -2,\n        5,\n        10\n    ]), firstArray = ref2[0], setFirstArray = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        10,\n        -7,\n        10,\n        5\n    ]), secondArray = ref3[0], setSecondArray = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setMassives(diff(firstArray, secondArray));\n    }, [\n        firstArray,\n        secondArray\n    ]);\n    var addToFirstArray = function(number) {\n        setFirstArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(firstArray).concat([\n            number\n        ]));\n    };\n    var addToSecondArray = function(number) {\n        setSecondArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(secondArray).concat([\n            number\n        ]));\n    };\n    var deleteInFirstArray = function(index) {\n        var newArray = firstArray;\n        newArray.splice(index, 1);\n        setFirstArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newArray));\n    };\n    var deleteInSecondArray = function(index) {\n        var newArray = secondArray;\n        newArray.splice(index, 1);\n        setSecondArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newArray));\n    };\n    var changeAlgorithm = function(switcher) {\n        setAlgorithm(switcher);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_arraySet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        array: firstArray,\n                        style: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()),\n                        addToArray: addToFirstArray,\n                        deleteInArray: deleteInFirstArray\n                    }, void 0, false, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_arraySet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        array: secondArray,\n                        style: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()),\n                        addToArray: addToSecondArray,\n                        deleteInArray: deleteInSecondArray\n                    }, void 0, false, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().box),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().block),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Union\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 132,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().array),\n                            children: massives.map(function(number) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().number),\n                                    children: number\n                                }, number, false, {\n                                    fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                    lineNumber: 137,\n                                    columnNumber: 22\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 135,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().switcher),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: switchers.map(function(switcher) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: switcher,\n                                        children: [\n                                            switcher,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: switcher,\n                                                name: \"switcher\",\n                                                type: \"radio\",\n                                                value: switcher,\n                                                onChange: function() {\n                                                    return setAlgorithm(switcher);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                                lineNumber: 147,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, switcher, true, {\n                                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                        lineNumber: 145,\n                                        columnNumber: 17\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                lineNumber: 143,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 142,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"51BMs0mTd09ECHV25iwxl9rHGmg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxFQUFFbEMsZ0VBQVc7c0NBQ3hCcUIsUUFBUSxDQUFDakIsR0FBRyxDQUFDQyxTQUFBQSxNQUFNLEVBQUk7Z0NBQ3RCLHFCQUFPLDhEQUFDNEIsS0FBRztvQ0FBY0MsU0FBUyxFQUFFbEMsaUVBQVk7OENBQzdDSyxNQUFNO21DQURRQSxNQUFNOzs7O3lDQUVqQjs0QkFDUixDQUFDLENBQUM7Ozs7O2dDQUNFO3NDQUNOLDhEQUFDNEIsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFbEMsbUVBQWM7c0NBQzVCLDRFQUFDd0MsTUFBSTswQ0FDRnBCLFNBQVMsQ0FBQ2hCLEdBQUcsQ0FBQzRCLFNBQUFBLFFBQVE7eURBQ3JCLDhEQUFDUyxPQUFLO3dDQUFnQkMsR0FBRyxFQUFFVixRQUFROzs0Q0FDaENBLFFBQVE7MERBQ1QsOERBQUNXLE9BQUs7Z0RBQUNDLEVBQUUsRUFBRVosUUFBUTtnREFBRWEsSUFBSSxFQUFDLFVBQVU7Z0RBQUNDLElBQUksRUFBQyxPQUFPO2dEQUFDQyxLQUFLLEVBQUVmLFFBQVE7Z0RBQUVnQixRQUFRLEVBQUU7MkRBQU03QixZQUFZLENBQUNhLFFBQVEsQ0FBQztpREFBQTs7Ozs7cURBQUk7O3VDQUZuR0EsUUFBUTs7Ozs2Q0FHWjtpQ0FDVCxDQUFDOzs7OztvQ0FDRzs7Ozs7Z0NBQ0g7Ozs7Ozt3QkFDRjs7Ozs7b0JBQ0Y7Ozs7OztZQUNGLENBQ1A7QUFDSCxDQUFDO0dBM0V1QmYsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcnJheVNldCBmcm9tICcuL2FycmF5U2V0JztcblxuaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XG5cbmNvbnN0IGJpZ1NldCA9IChhcnJheSkgPT4ge1xuICBjb25zdCBvYmplY3QxID0ge31cblxuICBhcnJheS5tYXAobnVtYmVyID0+IHtcbiAgICBpZiAoIW9iamVjdDFbbnVtYmVyXSkge1xuICAgICAgb2JqZWN0MVtudW1iZXJdID0gMVxuICAgIH0gZWxzZSB7XG4gICAgICBvYmplY3QxW251bWJlcl0gKz0gMVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBuZXdBcnJheSA9IFtdXG5cbiAgZm9yIChsZXQga2V5IGluIG9iamVjdDEpIHtcbiAgICBuZXdBcnJheS5wdXNoKGtleSlcbiAgfVxuXG4gIHJldHVybiBuZXdBcnJheVxufVxuXG5jb25zdCB1bmlvbjIgPSAoYXJyYXlPbmUsIGFycmF5U2Vjb25kKSA9PiB7XG4gIHJldHVybiBiaWdTZXQoWy4uLmFycmF5T25lLCAuLi5hcnJheVNlY29uZF0pXG59XG5cbmNvbnN0IGludGVyc2VjdGlvbjIgPSAoZmlyc3RBcnJheSwgc2Vjb25kQXJyYXkpID0+IHtcblxuICBjb25zdCBjb250YWluZXIgPSB7fVxuXG4gIGZpcnN0QXJyYXkubWFwKG51bWJlciA9PiB7XG4gICAgY29udGFpbmVyW251bWJlcl0gPSAxXG4gIH0pXG5cbiAgc2Vjb25kQXJyYXkubWFwKG51bWJlciA9PiB7XG4gICAgaWYgKGNvbnRhaW5lcltudW1iZXJdKSB7XG4gICAgICBjb250YWluZXJbbnVtYmVyXSA9IDJcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbmV3QXJyYXkgPSBbXVxuXG4gIGZvciAobGV0IGtleSBpbiBjb250YWluZXIpIHtcbiAgICBpZiAoY29udGFpbmVyW2tleV0gPT09IDIpIHtcbiAgICAgIG5ld0FycmF5LnB1c2goa2V5KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdBcnJheVxufVxuXG5jb25zdCBkaWZmID0gKGZpcnN0QXJyYXksIHNlY29uZEFycmF5KSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IHt9XG5cbiAgZmlyc3RBcnJheS5tYXAobnVtYmVyID0+IHtcbiAgICBjb250YWluZXJbbnVtYmVyXSA9IDFcbiAgfSlcblxuICBzZWNvbmRBcnJheS5tYXAobnVtYmVyID0+IHtcbiAgICBpZiAoY29udGFpbmVyW251bWJlcl0pIHtcbiAgICAgIGNvbnRhaW5lcltudW1iZXJdID0gMlxuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXJbbnVtYmVyXSA9IDFcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbmV3QXJyYXkgPSBbXVxuXG4gIGZvciAobGV0IGtleSBpbiBjb250YWluZXIpIHtcbiAgICBpZiAoY29udGFpbmVyW2tleV0gPT09IDEpIHtcbiAgICAgIG5ld0FycmF5LnB1c2goa2V5KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdBcnJheVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFthbGdvcml0aG0sIHNldEFsZ29yaXRobV0gPSAndW5pb24nO1xuXG4gIGNvbnN0IHN3aXRjaGVycyA9IFtcbiAgICAndW5pb24nLFxuICAgICdpbnRlcnNlY3Rpb24nLFxuICAgICdkaWZmZXJlbmNlJ1xuICBdXG5cbiAgY29uc3QgW21hc3NpdmVzLCBzZXRNYXNzaXZlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgW2ZpcnN0QXJyYXksIHNldEZpcnN0QXJyYXldID0gdXNlU3RhdGUoWzEsIC0yLCA1LCAxMF0pO1xuICBjb25zdCBbc2Vjb25kQXJyYXksIHNldFNlY29uZEFycmF5XSA9IHVzZVN0YXRlKFsxLCAxMCwgLTcsIDEwLCA1XSlcbiBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNYXNzaXZlcyhkaWZmKGZpcnN0QXJyYXksIHNlY29uZEFycmF5KSk7XG4gIH0sIFtmaXJzdEFycmF5LCBzZWNvbmRBcnJheV0pXG5cbiAgY29uc3QgYWRkVG9GaXJzdEFycmF5ID0gKG51bWJlcikgPT4ge1xuICAgIHNldEZpcnN0QXJyYXkoWy4uLmZpcnN0QXJyYXksIG51bWJlcl0pXG4gIH1cblxuICBjb25zdCBhZGRUb1NlY29uZEFycmF5ID0gKG51bWJlcikgPT4ge1xuICAgIHNldFNlY29uZEFycmF5KFsuLi5zZWNvbmRBcnJheSwgbnVtYmVyXSlcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZUluRmlyc3RBcnJheSA9IChpbmRleCkgPT4ge1xuICAgIGxldCBuZXdBcnJheSA9IGZpcnN0QXJyYXk7XG4gICAgbmV3QXJyYXkuc3BsaWNlKGluZGV4LCAxKVxuICAgIHNldEZpcnN0QXJyYXkoWy4uLm5ld0FycmF5XSlcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZUluU2Vjb25kQXJyYXkgPSAoaW5kZXgpID0+IHtcbiAgICBsZXQgbmV3QXJyYXkgPSBzZWNvbmRBcnJheTtcbiAgICBuZXdBcnJheS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgc2V0U2Vjb25kQXJyYXkoWy4uLm5ld0FycmF5XSlcbiAgfVxuXG4gIGNvbnN0IGNoYW5nZUFsZ29yaXRobSA9IChzd2l0Y2hlcikgPT4ge1xuICAgIHNldEFsZ29yaXRobShzd2l0Y2hlcilcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYm94fT5cbiAgICAgICAgPEFycmF5U2V0IGFycmF5PXtmaXJzdEFycmF5fSBzdHlsZT17c3R5bGV9IGFkZFRvQXJyYXk9e2FkZFRvRmlyc3RBcnJheX0gZGVsZXRlSW5BcnJheT17ZGVsZXRlSW5GaXJzdEFycmF5fSAvPlxuICAgICAgICA8QXJyYXlTZXQgYXJyYXk9e3NlY29uZEFycmF5fSBzdHlsZT17c3R5bGV9IGFkZFRvQXJyYXk9e2FkZFRvU2Vjb25kQXJyYXl9IGRlbGV0ZUluQXJyYXk9e2RlbGV0ZUluU2Vjb25kQXJyYXl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ib3h9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYmxvY2t9PlxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIFVuaW9uXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYXJyYXl9PlxuICAgICAgICAgICAge21hc3NpdmVzLm1hcChudW1iZXIgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e251bWJlcn0gY2xhc3NOYW1lPXtzdHlsZS5udW1iZXJ9PlxuICAgICAgICAgICAgICAgIHtudW1iZXJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN3aXRjaGVyfT5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICB7c3dpdGNoZXJzLm1hcChzd2l0Y2hlciA9PiAoXG4gICAgICAgICAgICAgICAgPGxhYmVsIGtleT17c3dpdGNoZXJ9IGZvcj17c3dpdGNoZXJ9PlxuICAgICAgICAgICAgICAgICAge3N3aXRjaGVyfVxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXtzd2l0Y2hlcn0gbmFtZT0nc3dpdGNoZXInIHR5cGU9J3JhZGlvJyB2YWx1ZT17c3dpdGNoZXJ9IG9uQ2hhbmdlPXsoKSA9PiBzZXRBbGdvcml0aG0oc3dpdGNoZXIpfSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnJheVNldCIsInN0eWxlIiwiYmlnU2V0IiwiYXJyYXkiLCJvYmplY3QxIiwibWFwIiwibnVtYmVyIiwibmV3QXJyYXkiLCJrZXkiLCJwdXNoIiwidW5pb24yIiwiYXJyYXlPbmUiLCJhcnJheVNlY29uZCIsImludGVyc2VjdGlvbjIiLCJmaXJzdEFycmF5Iiwic2Vjb25kQXJyYXkiLCJjb250YWluZXIiLCJkaWZmIiwiSG9tZSIsImFsZ29yaXRobSIsInNldEFsZ29yaXRobSIsInN3aXRjaGVycyIsIm1hc3NpdmVzIiwic2V0TWFzc2l2ZXMiLCJzZXRGaXJzdEFycmF5Iiwic2V0U2Vjb25kQXJyYXkiLCJhZGRUb0ZpcnN0QXJyYXkiLCJhZGRUb1NlY29uZEFycmF5IiwiZGVsZXRlSW5GaXJzdEFycmF5IiwiaW5kZXgiLCJzcGxpY2UiLCJkZWxldGVJblNlY29uZEFycmF5IiwiY2hhbmdlQWxnb3JpdGhtIiwic3dpdGNoZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJib3giLCJhZGRUb0FycmF5IiwiZGVsZXRlSW5BcnJheSIsImJsb2NrIiwiaDMiLCJmb3JtIiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsImlkIiwibmFtZSIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});