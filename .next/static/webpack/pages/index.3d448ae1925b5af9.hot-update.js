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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _arraySet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arraySet */ \"./pages/arraySet/index.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar bigSet = function(array) {\n    var object1 = {};\n    array.map(function(number) {\n        if (!object1[number]) {\n            object1[number] = 1;\n        } else {\n            object1[number] += 1;\n        }\n    });\n    var newArray = [];\n    for(var key in object1){\n        newArray.push(key);\n    }\n    return newArray;\n};\nvar union2 = function(arrayOne, arraySecond) {\n    return bigSet((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arrayOne).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arraySecond)));\n};\nvar intersection2 = function(firstArray, secondArray) {\n    var container = {};\n    firstArray.map(function(number) {\n        container[number] = 1;\n    });\n    secondArray.map(function(number) {\n        if (container[number]) {\n            container[number] = 2;\n        }\n    });\n    var newArray = [];\n    for(var key in container){\n        if (container[key] === 2) {\n            newArray.push(key);\n        }\n    }\n    return newArray;\n};\nvar diff = function(firstArray, secondArray) {\n    var container = {};\n    firstArray.map(function(number) {\n        container[number] = 1;\n    });\n    secondArray.map(function(number) {\n        if (container[number]) {\n            container[number] = 2;\n        } else {\n            container[number] = 1;\n        }\n    });\n    var newArray = [];\n    for(var key in container){\n        if (container[key] === 1) {\n            newArray.push(key);\n        }\n    }\n    return newArray;\n};\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"union\", 2), algorithm = ref[0], setAlgorithm = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), massives = ref1[0], setMassives = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        -2,\n        5,\n        10\n    ]), firstArray = ref2[0], setFirstArray = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        10,\n        -7,\n        10,\n        5\n    ]), secondArray = ref3[0], setSecondArray = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setMassives(diff(firstArray, secondArray));\n    }, [\n        firstArray,\n        secondArray\n    ]);\n    var addToFirstArray = function(number) {\n        setFirstArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(firstArray).concat([\n            number\n        ]));\n    };\n    var addToSecondArray = function(number) {\n        setSecondArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(secondArray).concat([\n            number\n        ]));\n    };\n    var deleteInFirstArray = function(index) {\n        var newArray = firstArray;\n        newArray.splice(index, 1);\n        setFirstArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newArray));\n    };\n    var deleteInSecondArray = function(index) {\n        var newArray = secondArray;\n        newArray.splice(index, 1);\n        setSecondArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newArray));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_arraySet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        array: firstArray,\n                        style: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()),\n                        addToArray: addToFirstArray,\n                        deleteInArray: deleteInFirstArray\n                    }, void 0, false, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_arraySet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        array: secondArray,\n                        style: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default()),\n                        addToArray: addToSecondArray,\n                        deleteInArray: deleteInSecondArray\n                    }, void 0, false, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().box),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().block),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Union\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().array),\n                            children: massives.map(function(number) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().number),\n                                    children: number\n                                }, number, false, {\n                                    fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                    lineNumber: 127,\n                                    columnNumber: 22\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"51BMs0mTd09ECHV25iwxl9rHGmg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RFFBLE1BQU07Ozs7eUNBRWpCOzRCQUNSLENBQUMsQ0FBQzs7Ozs7Z0NBQ0U7Ozs7Ozt3QkFDRjs7Ozs7b0JBQ0Y7Ozs7OztZQUNGLENBQ1A7QUFDSCxDQUFDO0dBdkR1QlksSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcnJheVNldCBmcm9tICcuL2FycmF5U2V0JztcblxuaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XG5cbmNvbnN0IGJpZ1NldCA9IChhcnJheSkgPT4ge1xuICBjb25zdCBvYmplY3QxID0ge31cblxuICBhcnJheS5tYXAobnVtYmVyID0+IHtcbiAgICBpZiAoIW9iamVjdDFbbnVtYmVyXSkge1xuICAgICAgb2JqZWN0MVtudW1iZXJdID0gMVxuICAgIH0gZWxzZSB7XG4gICAgICBvYmplY3QxW251bWJlcl0gKz0gMVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBuZXdBcnJheSA9IFtdXG5cbiAgZm9yIChsZXQga2V5IGluIG9iamVjdDEpIHtcbiAgICBuZXdBcnJheS5wdXNoKGtleSlcbiAgfVxuXG4gIHJldHVybiBuZXdBcnJheVxufVxuXG5jb25zdCB1bmlvbjIgPSAoYXJyYXlPbmUsIGFycmF5U2Vjb25kKSA9PiB7XG4gIHJldHVybiBiaWdTZXQoWy4uLmFycmF5T25lLCAuLi5hcnJheVNlY29uZF0pXG59XG5cbmNvbnN0IGludGVyc2VjdGlvbjIgPSAoZmlyc3RBcnJheSwgc2Vjb25kQXJyYXkpID0+IHtcblxuICBjb25zdCBjb250YWluZXIgPSB7fVxuXG4gIGZpcnN0QXJyYXkubWFwKG51bWJlciA9PiB7XG4gICAgY29udGFpbmVyW251bWJlcl0gPSAxXG4gIH0pXG5cbiAgc2Vjb25kQXJyYXkubWFwKG51bWJlciA9PiB7XG4gICAgaWYgKGNvbnRhaW5lcltudW1iZXJdKSB7XG4gICAgICBjb250YWluZXJbbnVtYmVyXSA9IDJcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbmV3QXJyYXkgPSBbXVxuXG4gIGZvciAobGV0IGtleSBpbiBjb250YWluZXIpIHtcbiAgICBpZiAoY29udGFpbmVyW2tleV0gPT09IDIpIHtcbiAgICAgIG5ld0FycmF5LnB1c2goa2V5KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdBcnJheVxufVxuXG5jb25zdCBkaWZmID0gKGZpcnN0QXJyYXksIHNlY29uZEFycmF5KSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IHt9XG5cbiAgZmlyc3RBcnJheS5tYXAobnVtYmVyID0+IHtcbiAgICBjb250YWluZXJbbnVtYmVyXSA9IDFcbiAgfSlcblxuICBzZWNvbmRBcnJheS5tYXAobnVtYmVyID0+IHtcbiAgICBpZiAoY29udGFpbmVyW251bWJlcl0pIHtcbiAgICAgIGNvbnRhaW5lcltudW1iZXJdID0gMlxuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXJbbnVtYmVyXSA9IDFcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbmV3QXJyYXkgPSBbXVxuXG4gIGZvciAobGV0IGtleSBpbiBjb250YWluZXIpIHtcbiAgICBpZiAoY29udGFpbmVyW2tleV0gPT09IDEpIHtcbiAgICAgIG5ld0FycmF5LnB1c2goa2V5KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdBcnJheVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFthbGdvcml0aG0sIHNldEFsZ29yaXRobV0gPSAndW5pb24nO1xuXG4gIGNvbnN0IFttYXNzaXZlcywgc2V0TWFzc2l2ZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IFtmaXJzdEFycmF5LCBzZXRGaXJzdEFycmF5XSA9IHVzZVN0YXRlKFsxLCAtMiwgNSwgMTBdKTtcbiAgY29uc3QgW3NlY29uZEFycmF5LCBzZXRTZWNvbmRBcnJheV0gPSB1c2VTdGF0ZShbMSwgMTAsIC03LCAxMCwgNV0pXG4gXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TWFzc2l2ZXMoZGlmZihmaXJzdEFycmF5LCBzZWNvbmRBcnJheSkpO1xuICB9LCBbZmlyc3RBcnJheSwgc2Vjb25kQXJyYXldKVxuXG4gIGNvbnN0IGFkZFRvRmlyc3RBcnJheSA9IChudW1iZXIpID0+IHtcbiAgICBzZXRGaXJzdEFycmF5KFsuLi5maXJzdEFycmF5LCBudW1iZXJdKVxuICB9XG5cbiAgY29uc3QgYWRkVG9TZWNvbmRBcnJheSA9IChudW1iZXIpID0+IHtcbiAgICBzZXRTZWNvbmRBcnJheShbLi4uc2Vjb25kQXJyYXksIG51bWJlcl0pXG4gIH1cblxuICBjb25zdCBkZWxldGVJbkZpcnN0QXJyYXkgPSAoaW5kZXgpID0+IHtcbiAgICBsZXQgbmV3QXJyYXkgPSBmaXJzdEFycmF5O1xuICAgIG5ld0FycmF5LnNwbGljZShpbmRleCwgMSlcbiAgICBzZXRGaXJzdEFycmF5KFsuLi5uZXdBcnJheV0pXG4gIH1cblxuICBjb25zdCBkZWxldGVJblNlY29uZEFycmF5ID0gKGluZGV4KSA9PiB7XG4gICAgbGV0IG5ld0FycmF5ID0gc2Vjb25kQXJyYXk7XG4gICAgbmV3QXJyYXkuc3BsaWNlKGluZGV4LCAxKVxuICAgIHNldFNlY29uZEFycmF5KFsuLi5uZXdBcnJheV0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJveH0+XG4gICAgICAgIDxBcnJheVNldCBhcnJheT17Zmlyc3RBcnJheX0gc3R5bGU9e3N0eWxlfSBhZGRUb0FycmF5PXthZGRUb0ZpcnN0QXJyYXl9IGRlbGV0ZUluQXJyYXk9e2RlbGV0ZUluRmlyc3RBcnJheX0gLz5cbiAgICAgICAgPEFycmF5U2V0IGFycmF5PXtzZWNvbmRBcnJheX0gc3R5bGU9e3N0eWxlfSBhZGRUb0FycmF5PXthZGRUb1NlY29uZEFycmF5fSBkZWxldGVJbkFycmF5PXtkZWxldGVJblNlY29uZEFycmF5fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYm94fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJsb2NrfT5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICBVbmlvblxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFycmF5fT5cbiAgICAgICAgICAgIHttYXNzaXZlcy5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtudW1iZXJ9IGNsYXNzTmFtZT17c3R5bGUubnVtYmVyfT5cbiAgICAgICAgICAgICAgICB7bnVtYmVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnJheVNldCIsInN0eWxlIiwiYmlnU2V0IiwiYXJyYXkiLCJvYmplY3QxIiwibWFwIiwibnVtYmVyIiwibmV3QXJyYXkiLCJrZXkiLCJwdXNoIiwidW5pb24yIiwiYXJyYXlPbmUiLCJhcnJheVNlY29uZCIsImludGVyc2VjdGlvbjIiLCJmaXJzdEFycmF5Iiwic2Vjb25kQXJyYXkiLCJjb250YWluZXIiLCJkaWZmIiwiSG9tZSIsImFsZ29yaXRobSIsInNldEFsZ29yaXRobSIsIm1hc3NpdmVzIiwic2V0TWFzc2l2ZXMiLCJzZXRGaXJzdEFycmF5Iiwic2V0U2Vjb25kQXJyYXkiLCJhZGRUb0ZpcnN0QXJyYXkiLCJhZGRUb1NlY29uZEFycmF5IiwiZGVsZXRlSW5GaXJzdEFycmF5IiwiaW5kZXgiLCJzcGxpY2UiLCJkZWxldGVJblNlY29uZEFycmF5IiwiZGl2IiwiY2xhc3NOYW1lIiwiYm94IiwiYWRkVG9BcnJheSIsImRlbGV0ZUluQXJyYXkiLCJibG9jayIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});