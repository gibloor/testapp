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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar array = [\n    1,\n    3,\n    5,\n    4,\n    4,\n    5\n];\nvar array2 = [\n    1,\n    7,\n    9, \n];\nvar array3 = [\n    11,\n    14,\n    7\n];\nvar bigSet = function(array) {\n    var object1 = {};\n    array.map(function(number) {\n        if (!object1[number]) {\n            object1[number] = 1;\n        } else {\n            object1[number] += 1;\n        }\n    });\n    var newArray = [];\n    for(var key in object1){\n        newArray.push(key);\n    }\n    return newArray;\n};\n// console.log(bigSet(array))\nvar union2 = function(arrayOne, arraySecond) {\n    return bigSet((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(arrayOne).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(arraySecond)));\n};\n// console.log(union2(array, array2))\nvar union3 = function(arrayOne, arraySecond, arrayThree) {\n    var arrays = union2(arrayOne, arraySecond);\n    return union2(arrays, arrayThree);\n};\nconsole.log(union3(array, array2, array3));\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), massives = ref[0], setMassives = ref[1];\n    var setA = [\n        1,\n        -2,\n        5,\n        10\n    ];\n    var setB = [\n        1,\n        10,\n        -7,\n        10,\n        5\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setMassives(union2(setA, setB));\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"box\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"block\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Union\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: massives.map(function(number) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"number\",\n                                children: number\n                            }, void 0, false, {\n                                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                                lineNumber: 97,\n                                columnNumber: 22\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nikitakubrakov/Desktop/dev/testapp/pages/index.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzs7Ozs7NEJBQ0E7Ozs7OztvQkFDQTs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0YsQ0FDUDtBQUNILENBQUM7R0F4RHVCWSxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuY29uc3QgYXJyYXkgPSBbMSwgMywgNSwgNCwgNCwgNV07XG5jb25zdCBhcnJheTIgPSBbMSwgNywgOSxdO1xuY29uc3QgYXJyYXkzID0gWzExLCAxNCwgN11cblxuY29uc3QgYmlnU2V0ID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IG9iamVjdDEgPSB7XG5cbiAgfVxuXG4gIGFycmF5Lm1hcChudW1iZXIgPT4ge1xuICAgIGlmICghb2JqZWN0MVtudW1iZXJdKSB7XG4gICAgICBvYmplY3QxW251bWJlcl0gPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIG9iamVjdDFbbnVtYmVyXSArPSAxXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG5ld0FycmF5ID0gW11cblxuICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0MSkge1xuICAgIG5ld0FycmF5LnB1c2goa2V5KVxuICB9XG5cbiAgcmV0dXJuIG5ld0FycmF5XG59XG5cbi8vIGNvbnNvbGUubG9nKGJpZ1NldChhcnJheSkpXG5cbmNvbnN0IHVuaW9uMiA9IChhcnJheU9uZSwgYXJyYXlTZWNvbmQpID0+IHtcbiAgcmV0dXJuIGJpZ1NldChbLi4uYXJyYXlPbmUsIC4uLmFycmF5U2Vjb25kXSlcblxufVxuXG4vLyBjb25zb2xlLmxvZyh1bmlvbjIoYXJyYXksIGFycmF5MikpXG5cbmNvbnN0IHVuaW9uMyA9IChhcnJheU9uZSwgYXJyYXlTZWNvbmQsIGFycmF5VGhyZWUpID0+IHtcbiAgY29uc3QgYXJyYXlzID0gdW5pb24yKGFycmF5T25lLCBhcnJheVNlY29uZClcblxuICByZXR1cm4gdW5pb24yKGFycmF5cywgYXJyYXlUaHJlZSlcbn1cblxuY29uc29sZS5sb2codW5pb24zKGFycmF5LCBhcnJheTIsIGFycmF5MykpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW21hc3NpdmVzLCBzZXRNYXNzaXZlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3Qgc2V0QSA9IFsxLCAtMiwgNSwgMTBdO1xuICBjb25zdCBzZXRCID0gWzEsIDEwLCAtNywgMTAsIDVdXG4gXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TWFzc2l2ZXModW5pb24yKHNldEEsIHNldEIpKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2JveCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayc+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgc2V0QVxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7c2V0QS5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdudW1iZXInPlxuICAgICAgICAgICAgICAgIHtudW1iZXJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2snPlxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIFNldEJcbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge3NldEIubWFwKG51bWJlciA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nbnVtYmVyJz5cbiAgICAgICAgICAgICAgICB7bnVtYmVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrJz5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICBVbmlvblxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7bWFzc2l2ZXMubWFwKG51bWJlciA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nbnVtYmVyJz5cbiAgICAgICAgICAgICAgICB7bnVtYmVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiYXJyYXkiLCJhcnJheTIiLCJhcnJheTMiLCJiaWdTZXQiLCJvYmplY3QxIiwibWFwIiwibnVtYmVyIiwibmV3QXJyYXkiLCJrZXkiLCJwdXNoIiwidW5pb24yIiwiYXJyYXlPbmUiLCJhcnJheVNlY29uZCIsInVuaW9uMyIsImFycmF5VGhyZWUiLCJhcnJheXMiLCJjb25zb2xlIiwibG9nIiwiSG9tZSIsIm1hc3NpdmVzIiwic2V0TWFzc2l2ZXMiLCJzZXRBIiwic2V0QiIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});