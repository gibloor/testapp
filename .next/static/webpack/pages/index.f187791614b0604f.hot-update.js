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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _arraySet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arraySet */ \"./pages/arraySet/index.js\");\n/* harmony import */ var _algorithms_union__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algorithms/union */ \"./pages/algorithms/union.js\");\n/* harmony import */ var _algorithms_intersection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./algorithms/intersection */ \"./pages/algorithms/intersection.js\");\n/* harmony import */ var _algorithms_difference__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./algorithms/difference */ \"./pages/algorithms/difference.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), algorithm = ref[0], setAlgorithm = ref[1];\n    var switchers = [\n        \"union\",\n        \"intersection\",\n        \"difference\"\n    ];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), arrays = ref1[0], setArrays = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        -2,\n        5,\n        10\n    ]), firstArray = ref2[0], setFirstArray = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        10,\n        -7,\n        10,\n        5\n    ]), secondArray = ref3[0], setSecondArray = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var newArray = [];\n        switch(algorithm){\n            case \"union\":\n                newArray = (0,_algorithms_union__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(firstArray, secondArray);\n                break;\n            case \"intersection\":\n                newArray = (0,_algorithms_intersection__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(firstArray, secondArray);\n                break;\n            case \"difference\":\n                newArray = (0,_algorithms_difference__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(firstArray, secondArray);\n                break;\n        }\n        setArrays(newArray);\n    }, [\n        firstArray,\n        secondArray,\n        algorithm\n    ]);\n    var addToFirstArray = function(number) {\n        setFirstArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(firstArray).concat([\n            number\n        ]));\n    };\n    var addToSecondArray = function(number) {\n        setSecondArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(secondArray).concat([\n            number\n        ]));\n    };\n    var deleteInFirstArray = function(index) {\n        var newArray = firstArray;\n        newArray.splice(index, 1);\n        setFirstArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(newArray));\n    };\n    var deleteInSecondArray = function(index) {\n        var newArray = secondArray;\n        newArray.splice(index, 1);\n        setSecondArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(newArray));\n    };\n    var saveState = function() {\n        localStorage.setItem(\"state\", JSON.stringify({\n            firstArray: firstArray,\n            secondArray: secondArray,\n            algorithm: algorithm\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_arraySet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        array: firstArray,\n                        style: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default()),\n                        addToArray: addToFirstArray,\n                        deleteInArray: deleteInFirstArray\n                    }, void 0, false, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_arraySet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        array: secondArray,\n                        style: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default()),\n                        addToArray: addToSecondArray,\n                        deleteInArray: deleteInSecondArray\n                    }, void 0, false, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().box),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().block),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: [\n                                \"algorithm: \",\n                                algorithm\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().array),\n                            children: arrays.map(function(number) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().number),\n                                    children: number\n                                }, number, false, {\n                                    fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 22\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().switcher),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: switchers.map(function(switcher) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: switcher,\n                                        children: [\n                                            switcher,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: switcher,\n                                                name: \"switcher\",\n                                                type: \"radio\",\n                                                value: switcher,\n                                                onChange: function() {\n                                                    return setAlgorithm(switcher);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                                lineNumber: 92,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, switcher, true, {\n                                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 17\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                saveState();\n                            },\n                            children: \"save state\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"hrobQK5H+l21LpTxj3i0X1uoSQY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sRUFBRUgsUUFBUTs7NENBQ3BDQSxRQUFROzBEQUNULDhEQUFDSSxPQUFLO2dEQUFDQyxFQUFFLEVBQUVMLFFBQVE7Z0RBQUVNLElBQUksRUFBQyxVQUFVO2dEQUFDQyxJQUFJLEVBQUMsT0FBTztnREFBQ0MsS0FBSyxFQUFFUixRQUFRO2dEQUFFUyxRQUFRLEVBQUU7MkRBQU14QyxZQUFZLENBQUMrQixRQUFRLENBQUM7aURBQUE7Ozs7O3FEQUFJOzt1Q0FGbkdBLFFBQVE7Ozs7NkNBR1o7aUNBQ1QsQ0FBQzs7Ozs7b0NBQ0c7Ozs7O2dDQUNIO3NDQUVOLDhEQUFDVSxRQUFNOzRCQUFDQyxPQUFPLEVBQUUsV0FBTTtnQ0FBQzFCLFNBQVMsRUFBRTs0QkFBQSxDQUFDO3NDQUFFLFlBQVU7Ozs7O2dDQUFTOzs7Ozs7d0JBQ3JEOzs7OztvQkFDRjs7Ozs7O1lBQ0YsQ0FDUDtBQUNILENBQUM7R0E3RnVCbEIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEFycmF5U2V0IGZyb20gJy4vYXJyYXlTZXQnO1xuaW1wb3J0IHVuaW9uIGZyb20gJy4vYWxnb3JpdGhtcy91bmlvbic7XG5pbXBvcnQgaW50ZXJzZWN0aW9uIGZyb20gJy4vYWxnb3JpdGhtcy9pbnRlcnNlY3Rpb24nO1xuaW1wb3J0IGRpZmZlcmVuY2UgZnJvbSAnLi9hbGdvcml0aG1zL2RpZmZlcmVuY2UnO1xuXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbYWxnb3JpdGhtLCBzZXRBbGdvcml0aG1dID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IHN3aXRjaGVycyA9IFtcbiAgICAndW5pb24nLFxuICAgICdpbnRlcnNlY3Rpb24nLFxuICAgICdkaWZmZXJlbmNlJ1xuICBdXG5cbiAgY29uc3QgW2FycmF5cywgc2V0QXJyYXlzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBbZmlyc3RBcnJheSwgc2V0Rmlyc3RBcnJheV0gPSB1c2VTdGF0ZShbMSwgLTIsIDUsIDEwXSk7XG4gIGNvbnN0IFtzZWNvbmRBcnJheSwgc2V0U2Vjb25kQXJyYXldID0gdXNlU3RhdGUoWzEsIDEwLCAtNywgMTAsIDVdKVxuIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBuZXdBcnJheSA9IFtdXG5cbiAgICBzd2l0Y2ggKGFsZ29yaXRobSkge1xuICAgICAgY2FzZSAndW5pb24nOlxuICAgICAgICBuZXdBcnJheSA9IHVuaW9uKGZpcnN0QXJyYXksIHNlY29uZEFycmF5KVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaW50ZXJzZWN0aW9uJzpcbiAgICAgICAgbmV3QXJyYXkgPSBpbnRlcnNlY3Rpb24oZmlyc3RBcnJheSwgc2Vjb25kQXJyYXkpXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkaWZmZXJlbmNlJzpcbiAgICAgICAgbmV3QXJyYXkgPSBkaWZmZXJlbmNlKGZpcnN0QXJyYXksIHNlY29uZEFycmF5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc2V0QXJyYXlzKG5ld0FycmF5KTtcbiAgfSwgW2ZpcnN0QXJyYXksIHNlY29uZEFycmF5LCBhbGdvcml0aG1dKVxuXG4gIGNvbnN0IGFkZFRvRmlyc3RBcnJheSA9IChudW1iZXIpID0+IHtcbiAgICBzZXRGaXJzdEFycmF5KFsuLi5maXJzdEFycmF5LCBudW1iZXJdKVxuICB9XG5cbiAgY29uc3QgYWRkVG9TZWNvbmRBcnJheSA9IChudW1iZXIpID0+IHtcbiAgICBzZXRTZWNvbmRBcnJheShbLi4uc2Vjb25kQXJyYXksIG51bWJlcl0pXG4gIH1cblxuICBjb25zdCBkZWxldGVJbkZpcnN0QXJyYXkgPSAoaW5kZXgpID0+IHtcbiAgICBsZXQgbmV3QXJyYXkgPSBmaXJzdEFycmF5O1xuICAgIG5ld0FycmF5LnNwbGljZShpbmRleCwgMSlcbiAgICBzZXRGaXJzdEFycmF5KFsuLi5uZXdBcnJheV0pXG4gIH1cblxuICBjb25zdCBkZWxldGVJblNlY29uZEFycmF5ID0gKGluZGV4KSA9PiB7XG4gICAgbGV0IG5ld0FycmF5ID0gc2Vjb25kQXJyYXk7XG4gICAgbmV3QXJyYXkuc3BsaWNlKGluZGV4LCAxKVxuICAgIHNldFNlY29uZEFycmF5KFsuLi5uZXdBcnJheV0pXG4gIH1cblxuICBjb25zdCBzYXZlU3RhdGUgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXRlJywgSlNPTi5zdHJpbmdpZnkoe2ZpcnN0QXJyYXksIHNlY29uZEFycmF5LCBhbGdvcml0aG19KSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJveH0+XG4gICAgICAgIDxBcnJheVNldCBhcnJheT17Zmlyc3RBcnJheX0gc3R5bGU9e3N0eWxlfSBhZGRUb0FycmF5PXthZGRUb0ZpcnN0QXJyYXl9IGRlbGV0ZUluQXJyYXk9e2RlbGV0ZUluRmlyc3RBcnJheX0gLz5cbiAgICAgICAgPEFycmF5U2V0IGFycmF5PXtzZWNvbmRBcnJheX0gc3R5bGU9e3N0eWxlfSBhZGRUb0FycmF5PXthZGRUb1NlY29uZEFycmF5fSBkZWxldGVJbkFycmF5PXtkZWxldGVJblNlY29uZEFycmF5fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYm94fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJsb2NrfT5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICBhbGdvcml0aG06IHthbGdvcml0aG19XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYXJyYXl9PlxuICAgICAgICAgICAge2FycmF5cy5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtudW1iZXJ9IGNsYXNzTmFtZT17c3R5bGUubnVtYmVyfT5cbiAgICAgICAgICAgICAgICB7bnVtYmVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zd2l0Y2hlcn0+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAge3N3aXRjaGVycy5tYXAoc3dpdGNoZXIgPT4gKFxuICAgICAgICAgICAgICAgIDxsYWJlbCBrZXk9e3N3aXRjaGVyfSBodG1sRm9yPXtzd2l0Y2hlcn0+XG4gICAgICAgICAgICAgICAgICB7c3dpdGNoZXJ9XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9e3N3aXRjaGVyfSBuYW1lPSdzd2l0Y2hlcicgdHlwZT0ncmFkaW8nIHZhbHVlPXtzd2l0Y2hlcn0gb25DaGFuZ2U9eygpID0+IHNldEFsZ29yaXRobShzd2l0Y2hlcil9IC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtzYXZlU3RhdGUoKX19PnNhdmUgc3RhdGU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFycmF5U2V0IiwidW5pb24iLCJpbnRlcnNlY3Rpb24iLCJkaWZmZXJlbmNlIiwic3R5bGUiLCJIb21lIiwiYWxnb3JpdGhtIiwic2V0QWxnb3JpdGhtIiwic3dpdGNoZXJzIiwiYXJyYXlzIiwic2V0QXJyYXlzIiwiZmlyc3RBcnJheSIsInNldEZpcnN0QXJyYXkiLCJzZWNvbmRBcnJheSIsInNldFNlY29uZEFycmF5IiwibmV3QXJyYXkiLCJhZGRUb0ZpcnN0QXJyYXkiLCJudW1iZXIiLCJhZGRUb1NlY29uZEFycmF5IiwiZGVsZXRlSW5GaXJzdEFycmF5IiwiaW5kZXgiLCJzcGxpY2UiLCJkZWxldGVJblNlY29uZEFycmF5Iiwic2F2ZVN0YXRlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJib3giLCJhcnJheSIsImFkZFRvQXJyYXkiLCJkZWxldGVJbkFycmF5IiwiYmxvY2siLCJoMyIsIm1hcCIsInN3aXRjaGVyIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJuYW1lIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});