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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _arraySet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arraySet */ \"./pages/arraySet/index.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar bigSet = function(array) {\n    var object1 = {};\n    array.map(function(number) {\n        if (!object1[number]) {\n            object1[number] = 1;\n        } else {\n            object1[number] += 1;\n        }\n    });\n    var newArray = [];\n    for(var key in object1){\n        newArray.push(key);\n    }\n    return newArray;\n};\nvar union2 = function(arrayOne, arraySecond) {\n    return bigSet((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arrayOne).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arraySecond)));\n};\nvar union3 = function(arrayOne, arraySecond, arrayThree) {\n    var arrays = union2(arrayOne, arraySecond);\n    return union2(arrays, arrayThree);\n};\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), massives = ref[0], setMassives = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        -2,\n        5,\n        10\n    ]), firstArray = ref1[0], setFirstArray = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        10,\n        -7,\n        10,\n        5\n    ]), secondArray = ref2[0], setSecondArray = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setMassives(union2(firstArray, secondArray));\n    }, [\n        firstArray,\n        secondArray\n    ]);\n    var addToFirstArray = function(number) {\n        console.log(number);\n        setFirstArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(firstArray).concat([\n            number\n        ]));\n    };\n    var addToSecondArray = function(number) {\n        setSecondArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(secondArray).concat([\n            number\n        ]));\n    };\n    var deleteInFirstArray = function(index) {\n        var newArray = firstArray;\n        newArray.splice(index, 1);\n        setFirstArray(newArray);\n    };\n    var deleteInSecondArray = function(index) {\n        var newArray = secondArray;\n        newArray.splice(index, 1);\n        setSecondArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newArray));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_arraySet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        array: firstArray,\n                        style: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default()),\n                        addToArray: addToFirstArray,\n                        deleteInArray: deleteInFirstArray\n                    }, void 0, false, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_arraySet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        array: secondArray,\n                        style: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default()),\n                        addToArray: addToSecondArray,\n                        deleteInArray: deleteInSecondArray\n                    }, void 0, false, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().box),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().block),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Union\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().array),\n                            children: massives.map(function(number) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().number),\n                                    children: number\n                                }, number, false, {\n                                    fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 22\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"51BMs0mTd09ECHV25iwxl9rHGmg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDRixDQUNQO0FBQ0gsQ0FBQztHQXREdUJVLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXJyYXlTZXQgZnJvbSAnLi9hcnJheVNldCc7XG5cbmltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnO1xuXG5jb25zdCBiaWdTZXQgPSAoYXJyYXkpID0+IHtcbiAgY29uc3Qgb2JqZWN0MSA9IHt9XG5cbiAgYXJyYXkubWFwKG51bWJlciA9PiB7XG4gICAgaWYgKCFvYmplY3QxW251bWJlcl0pIHtcbiAgICAgIG9iamVjdDFbbnVtYmVyXSA9IDFcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0MVtudW1iZXJdICs9IDFcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbmV3QXJyYXkgPSBbXVxuXG4gIGZvciAobGV0IGtleSBpbiBvYmplY3QxKSB7XG4gICAgbmV3QXJyYXkucHVzaChrZXkpXG4gIH1cblxuICByZXR1cm4gbmV3QXJyYXlcbn1cblxuY29uc3QgdW5pb24yID0gKGFycmF5T25lLCBhcnJheVNlY29uZCkgPT4ge1xuICByZXR1cm4gYmlnU2V0KFsuLi5hcnJheU9uZSwgLi4uYXJyYXlTZWNvbmRdKVxufVxuXG5jb25zdCB1bmlvbjMgPSAoYXJyYXlPbmUsIGFycmF5U2Vjb25kLCBhcnJheVRocmVlKSA9PiB7XG4gIGNvbnN0IGFycmF5cyA9IHVuaW9uMihhcnJheU9uZSwgYXJyYXlTZWNvbmQpXG5cbiAgcmV0dXJuIHVuaW9uMihhcnJheXMsIGFycmF5VGhyZWUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW21hc3NpdmVzLCBzZXRNYXNzaXZlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgW2ZpcnN0QXJyYXksIHNldEZpcnN0QXJyYXldID0gdXNlU3RhdGUoWzEsIC0yLCA1LCAxMF0pO1xuICBjb25zdCBbc2Vjb25kQXJyYXksIHNldFNlY29uZEFycmF5XSA9IHVzZVN0YXRlKFsxLCAxMCwgLTcsIDEwLCA1XSlcbiBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNYXNzaXZlcyh1bmlvbjIoZmlyc3RBcnJheSwgc2Vjb25kQXJyYXkpKTtcbiAgfSwgW2ZpcnN0QXJyYXksIHNlY29uZEFycmF5XSlcblxuICBjb25zdCBhZGRUb0ZpcnN0QXJyYXkgPSAobnVtYmVyKSA9PiB7XG4gICAgY29uc29sZS5sb2cobnVtYmVyKVxuICAgIHNldEZpcnN0QXJyYXkoWy4uLmZpcnN0QXJyYXksIG51bWJlcl0pXG4gIH1cblxuICBjb25zdCBhZGRUb1NlY29uZEFycmF5ID0gKG51bWJlcikgPT4ge1xuICAgIHNldFNlY29uZEFycmF5KFsuLi5zZWNvbmRBcnJheSwgbnVtYmVyXSlcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZUluRmlyc3RBcnJheSA9IChpbmRleCkgPT4ge1xuICAgIGxldCBuZXdBcnJheSA9IGZpcnN0QXJyYXk7XG4gICAgbmV3QXJyYXkuc3BsaWNlKGluZGV4LCAxKVxuICAgIHNldEZpcnN0QXJyYXkobmV3QXJyYXkpXG4gIH1cblxuICBjb25zdCBkZWxldGVJblNlY29uZEFycmF5ID0gKGluZGV4KSA9PiB7XG4gICAgbGV0IG5ld0FycmF5ID0gc2Vjb25kQXJyYXk7XG4gICAgbmV3QXJyYXkuc3BsaWNlKGluZGV4LCAxKVxuICAgIHNldFNlY29uZEFycmF5KFsuLi5uZXdBcnJheV0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJveH0+XG4gICAgICAgIDxBcnJheVNldCBhcnJheT17Zmlyc3RBcnJheX0gc3R5bGU9e3N0eWxlfSBhZGRUb0FycmF5PXthZGRUb0ZpcnN0QXJyYXl9IGRlbGV0ZUluQXJyYXk9e2RlbGV0ZUluRmlyc3RBcnJheX0gLz5cbiAgICAgICAgPEFycmF5U2V0IGFycmF5PXtzZWNvbmRBcnJheX0gc3R5bGU9e3N0eWxlfSBhZGRUb0FycmF5PXthZGRUb1NlY29uZEFycmF5fSBkZWxldGVJbkFycmF5PXtkZWxldGVJblNlY29uZEFycmF5fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYm94fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJsb2NrfT5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICBVbmlvblxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFycmF5fT5cbiAgICAgICAgICAgIHttYXNzaXZlcy5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtudW1iZXJ9IGNsYXNzTmFtZT17c3R5bGUubnVtYmVyfT5cbiAgICAgICAgICAgICAgICB7bnVtYmVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnJheVNldCIsInN0eWxlIiwiYmlnU2V0IiwiYXJyYXkiLCJvYmplY3QxIiwibWFwIiwibnVtYmVyIiwibmV3QXJyYXkiLCJrZXkiLCJwdXNoIiwidW5pb24yIiwiYXJyYXlPbmUiLCJhcnJheVNlY29uZCIsInVuaW9uMyIsImFycmF5VGhyZWUiLCJhcnJheXMiLCJIb21lIiwibWFzc2l2ZXMiLCJzZXRNYXNzaXZlcyIsImZpcnN0QXJyYXkiLCJzZXRGaXJzdEFycmF5Iiwic2Vjb25kQXJyYXkiLCJzZXRTZWNvbmRBcnJheSIsImFkZFRvRmlyc3RBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJhZGRUb1NlY29uZEFycmF5IiwiZGVsZXRlSW5GaXJzdEFycmF5IiwiaW5kZXgiLCJzcGxpY2UiLCJkZWxldGVJblNlY29uZEFycmF5IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiYm94IiwiYWRkVG9BcnJheSIsImRlbGV0ZUluQXJyYXkiLCJibG9jayIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});