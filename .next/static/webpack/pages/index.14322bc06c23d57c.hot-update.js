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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _arraySet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arraySet */ \"./pages/arraySet/index.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar bigSet = function(array) {\n    var object1 = {};\n    array.map(function(number) {\n        if (!object1[number]) {\n            object1[number] = 1;\n        } else {\n            object1[number] += 1;\n        }\n    });\n    var newArray = [];\n    for(var key in object1){\n        newArray.push(key);\n    }\n    return newArray;\n};\nvar union2 = function(arrayOne, arraySecond) {\n    return bigSet((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arrayOne).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arraySecond)));\n};\nvar union3 = function(arrayOne, arraySecond, arrayThree) {\n    var arrays = union2(arrayOne, arraySecond);\n    return union2(arrays, arrayThree);\n};\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), massives = ref[0], setMassives = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        -2,\n        5,\n        10\n    ]), firstArray = ref1[0], setFirstArray = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1,\n        10,\n        -7,\n        10,\n        5\n    ]), secondArray = ref2[0], setSecondArray = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setMassives(union2(firstArray, secondArray));\n    }, []);\n    var addToFirstArray = function(number) {\n        console.log(number);\n        setFirstArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(firstArray).concat([\n            number\n        ]));\n    };\n    var addToSecondArray = function(number) {\n        setSecondArray((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(secondArray).concat([\n            number\n        ]));\n    };\n    var deleteInFirstArray = function(index) {\n        var newArray = firstArray;\n        newArray.splice(index, 1);\n        setFirstArray(newArray);\n    };\n    var deleteInSecondArray = function(index) {\n        var newArray = secondArray;\n        newArray.splice(index, 1);\n        setSecondArray(newArray);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_arraySet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        array: firstArray,\n                        style: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default()),\n                        addToArray: addToFirstArray,\n                        deleteInArray: deleteInFirstArray\n                    }, void 0, false, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_arraySet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        array: secondArray,\n                        style: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default()),\n                        addToArray: addToSecondArray,\n                        deleteInArray: deleteInSecondArray\n                    }, void 0, false, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().box),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().block),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Union\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().array),\n                            children: massives.map(function(number) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().number),\n                                    children: number\n                                }, number, false, {\n                                    fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 22\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"51BMs0mTd09ECHV25iwxl9rHGmg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFycmF5U2V0IGZyb20gJy4vYXJyYXlTZXQnO1xuXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcblxuY29uc3QgYmlnU2V0ID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IG9iamVjdDEgPSB7fVxuXG4gIGFycmF5Lm1hcChudW1iZXIgPT4ge1xuICAgIGlmICghb2JqZWN0MVtudW1iZXJdKSB7XG4gICAgICBvYmplY3QxW251bWJlcl0gPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIG9iamVjdDFbbnVtYmVyXSArPSAxXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG5ld0FycmF5ID0gW11cblxuICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0MSkge1xuICAgIG5ld0FycmF5LnB1c2goa2V5KVxuICB9XG5cbiAgcmV0dXJuIG5ld0FycmF5XG59XG5cbmNvbnN0IHVuaW9uMiA9IChhcnJheU9uZSwgYXJyYXlTZWNvbmQpID0+IHtcbiAgcmV0dXJuIGJpZ1NldChbLi4uYXJyYXlPbmUsIC4uLmFycmF5U2Vjb25kXSlcbn1cblxuY29uc3QgdW5pb24zID0gKGFycmF5T25lLCBhcnJheVNlY29uZCwgYXJyYXlUaHJlZSkgPT4ge1xuICBjb25zdCBhcnJheXMgPSB1bmlvbjIoYXJyYXlPbmUsIGFycmF5U2Vjb25kKVxuXG4gIHJldHVybiB1bmlvbjIoYXJyYXlzLCBhcnJheVRocmVlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFttYXNzaXZlcywgc2V0TWFzc2l2ZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IFtmaXJzdEFycmF5LCBzZXRGaXJzdEFycmF5XSA9IHVzZVN0YXRlKFsxLCAtMiwgNSwgMTBdKTtcbiAgY29uc3QgW3NlY29uZEFycmF5LCBzZXRTZWNvbmRBcnJheV0gPSB1c2VTdGF0ZShbMSwgMTAsIC03LCAxMCwgNV0pXG4gXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TWFzc2l2ZXModW5pb24yKGZpcnN0QXJyYXksIHNlY29uZEFycmF5KSk7XG4gIH0sIFtdKVxuXG4gIGNvbnN0IGFkZFRvRmlyc3RBcnJheSA9IChudW1iZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhudW1iZXIpXG4gICAgc2V0Rmlyc3RBcnJheShbLi4uZmlyc3RBcnJheSwgbnVtYmVyXSlcbiAgfVxuXG4gIGNvbnN0IGFkZFRvU2Vjb25kQXJyYXkgPSAobnVtYmVyKSA9PiB7XG4gICAgc2V0U2Vjb25kQXJyYXkoWy4uLnNlY29uZEFycmF5LCBudW1iZXJdKVxuICB9XG5cbiAgY29uc3QgZGVsZXRlSW5GaXJzdEFycmF5ID0gKGluZGV4KSA9PiB7XG4gICAgbGV0IG5ld0FycmF5ID0gZmlyc3RBcnJheTtcbiAgICBuZXdBcnJheS5zcGxpY2UoaW5kZXgsIDEpIFxuICAgIHNldEZpcnN0QXJyYXkobmV3QXJyYXkpXG4gIH1cblxuICBjb25zdCBkZWxldGVJblNlY29uZEFycmF5ID0gKGluZGV4KSA9PiB7XG4gICAgbGV0IG5ld0FycmF5ID0gc2Vjb25kQXJyYXk7XG4gICAgbmV3QXJyYXkuc3BsaWNlKGluZGV4LCAxKVxuICAgIHNldFNlY29uZEFycmF5KG5ld0FycmF5KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ib3h9PlxuICAgICAgICA8QXJyYXlTZXQgYXJyYXk9e2ZpcnN0QXJyYXl9IHN0eWxlPXtzdHlsZX0gYWRkVG9BcnJheT17YWRkVG9GaXJzdEFycmF5fSBkZWxldGVJbkFycmF5PXtkZWxldGVJbkZpcnN0QXJyYXl9IC8+XG4gICAgICAgIDxBcnJheVNldCBhcnJheT17c2Vjb25kQXJyYXl9IHN0eWxlPXtzdHlsZX0gYWRkVG9BcnJheT17YWRkVG9TZWNvbmRBcnJheX0gZGVsZXRlSW5BcnJheT17ZGVsZXRlSW5TZWNvbmRBcnJheX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJveH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ibG9ja30+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgVW5pb25cbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hcnJheX0+XG4gICAgICAgICAgICB7bWFzc2l2ZXMubWFwKG51bWJlciA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17bnVtYmVyfSBjbGFzc05hbWU9e3N0eWxlLm51bWJlcn0+XG4gICAgICAgICAgICAgICAge251bWJlcn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJyYXlTZXQiLCJzdHlsZSIsImJpZ1NldCIsImFycmF5Iiwib2JqZWN0MSIsIm1hcCIsIm51bWJlciIsIm5ld0FycmF5Iiwia2V5IiwicHVzaCIsInVuaW9uMiIsImFycmF5T25lIiwiYXJyYXlTZWNvbmQiLCJ1bmlvbjMiLCJhcnJheVRocmVlIiwiYXJyYXlzIiwiSG9tZSIsIm1hc3NpdmVzIiwic2V0TWFzc2l2ZXMiLCJmaXJzdEFycmF5Iiwic2V0Rmlyc3RBcnJheSIsInNlY29uZEFycmF5Iiwic2V0U2Vjb25kQXJyYXkiLCJhZGRUb0ZpcnN0QXJyYXkiLCJjb25zb2xlIiwibG9nIiwiYWRkVG9TZWNvbmRBcnJheSIsImRlbGV0ZUluRmlyc3RBcnJheSIsImluZGV4Iiwic3BsaWNlIiwiZGVsZXRlSW5TZWNvbmRBcnJheSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImJveCIsImFkZFRvQXJyYXkiLCJkZWxldGVJbkFycmF5IiwiYmxvY2siLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});