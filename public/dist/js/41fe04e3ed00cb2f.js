"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_auth_verification_verify_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/verification/verify.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/verification/verify.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nvar qs = function qs(params) {\n  return Object.keys(params).map(function (key) {\n    return \"\".concat(key, \"=\").concat(params[key]);\n  }).join('&');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  beforeRouteEnter: function beforeRouteEnter(to, from, next) {\n    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var _yield$axios$post, data;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"/api/email/verify/\".concat(to.params.id, \"?\").concat(qs(to.query)));\n\n            case 3:\n              _yield$axios$post = _context.sent;\n              data = _yield$axios$post.data;\n              next(function (vm) {\n                vm.success = data.status;\n              });\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              next(function (vm) {\n                vm.error = _context.t0.response.data.status;\n              });\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }))();\n  },\n  layout: 'guestLayout',\n  middleware: 'guest',\n  metaInfo: function metaInfo() {\n    return {\n      title: this.$t('verify_email')\n    };\n  },\n  data: function data() {\n    return {\n      error: '',\n      success: ''\n    };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVzb3VyY2VzL2pzL3BhZ2VzL2F1dGgvdmVyaWZpY2F0aW9uL3ZlcmlmeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxpRUFBZTtBQUNmQSxrQkFEQSw0QkFDQUMsRUFEQSxFQUNBQyxJQURBLEVBQ0FDLElBREEsRUFDQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRUFDLGlEQUFBQSxxRUFGQTs7QUFBQTtBQUFBO0FBRUFDLGtCQUZBLHFCQUVBQSxJQUZBO0FBSUFGO0FBQUFHO0FBQUE7QUFKQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1BSDtBQUFBRztBQUFBOztBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUEsR0FUQTtBQVdBQyx1QkFYQTtBQVlBQyxxQkFaQTtBQWNBQyxVQWRBLHNCQWNBO0FBQ0E7QUFBQUM7QUFBQTtBQUNBLEdBaEJBO0FBa0JBTDtBQUFBO0FBQ0FNLGVBREE7QUFFQUM7QUFGQTtBQUFBO0FBbEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9wYWdlcy9hdXRoL3ZlcmlmaWNhdGlvbi92ZXJpZnkudnVlPzMxOTciXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC02IHNtOnAtMTIgbWQ6dy0xLzJcIj5cbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsXCI+XG4gICAgICA8aDEgY2xhc3M9XCJtYi00IHRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTIwMFwiPlxuICAgICAgICB7eyAkdCgndmVyaWZ5X2VtYWlsJykgfX1cbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IHYtaWY9XCJzdWNjZXNzXCIgY2xhc3M9XCJ3LWZ1bGxcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyZWVuLTkwMFwiPlxuICAgICAgICAgIHt7IHN1Y2Nlc3MgfX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8dC1idXR0b24gdGFnLW5hbWU9XCJhXCIgY2xhc3M9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtcHVycGxlLTYwMCBkYXJrOnRleHQtcHVycGxlLTQwMCBob3Zlcjp1bmRlcmxpbmVcIiB2YXJpYW50PVwibGlua1wiIDp0bz1cInsgbmFtZTogJ2xvZ2luJ31cIj5cbiAgICAgICAgICB7eyAkdCgnbG9naW4nKSB9fVxuICAgICAgICA8L3QtYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXJlZC05MDBcIj5cbiAgICAgICAgICB7eyBlcnJvciB8fCAkdCgnZmFpbGVkX3RvX3ZlcmlmeV9lbWFpbCcpIH19XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHQtYnV0dG9uIHRhZy1uYW1lPVwiYVwiIGNsYXNzPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXB1cnBsZS02MDAgZGFyazp0ZXh0LXB1cnBsZS00MDAgaG92ZXI6dW5kZXJsaW5lXCIgdmFyaWFudD1cImxpbmtcIiA6dG89XCJ7IG5hbWU6ICd2ZXJpZmljYXRpb24ucmVzZW5kJyB9XCI+XG4gICAgICAgICAge3sgJHQoJ3Jlc2VuZF92ZXJpZmljYXRpb25fbGluaycpIH19XG4gICAgICAgIDwvdC1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBxcyA9IChwYXJhbXMpID0+IE9iamVjdC5rZXlzKHBhcmFtcykubWFwKGtleSA9PiBgJHtrZXl9PSR7cGFyYW1zW2tleV19YCkuam9pbignJicpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXN5bmMgYmVmb3JlUm91dGVFbnRlciAodG8sIGZyb20sIG5leHQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2VtYWlsL3ZlcmlmeS8ke3RvLnBhcmFtcy5pZH0/JHtxcyh0by5xdWVyeSl9YClcblxuICAgICAgbmV4dCh2bSA9PiB7IHZtLnN1Y2Nlc3MgPSBkYXRhLnN0YXR1cyB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG5leHQodm0gPT4geyB2bS5lcnJvciA9IGUucmVzcG9uc2UuZGF0YS5zdGF0dXMgfSlcbiAgICB9XG4gIH0sXG5cbiAgbGF5b3V0OiAnZ3Vlc3RMYXlvdXQnLFxuICBtaWRkbGV3YXJlOiAnZ3Vlc3QnLFxuXG4gIG1ldGFJbmZvICgpIHtcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgndmVyaWZ5X2VtYWlsJykgfVxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgZXJyb3I6ICcnLFxuICAgIHN1Y2Nlc3M6ICcnXG4gIH0pXG59XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJiZWZvcmVSb3V0ZUVudGVyIiwidG8iLCJmcm9tIiwibmV4dCIsImF4aW9zIiwiZGF0YSIsInZtIiwibGF5b3V0IiwibWlkZGxld2FyZSIsIm1ldGFJbmZvIiwidGl0bGUiLCJlcnJvciIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/verification/verify.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/pages/auth/verification/verify.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/auth/verification/verify.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _verify_vue_vue_type_template_id_01f2e56f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify.vue?vue&type=template&id=01f2e56f& */ \"./resources/js/pages/auth/verification/verify.vue?vue&type=template&id=01f2e56f&\");\n/* harmony import */ var _verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify.vue?vue&type=script&lang=js& */ \"./resources/js/pages/auth/verification/verify.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _verify_vue_vue_type_template_id_01f2e56f___WEBPACK_IMPORTED_MODULE_0__.render,\n  _verify_vue_vue_type_template_id_01f2e56f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/auth/verification/verify.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvYXV0aC92ZXJpZmljYXRpb24vdmVyaWZ5LnZ1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXFGO0FBQzNCO0FBQ0w7OztBQUdyRDtBQUNBLENBQW1HO0FBQ25HLGdCQUFnQix1R0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSw4RUFBTTtBQUNSLEVBQUUsdUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL2F1dGgvdmVyaWZpY2F0aW9uL3ZlcmlmeS52dWU/NjNhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3ZlcmlmeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDFmMmU1NmYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdmVyaWZ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdmVyaWZ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvaHRtbC9SZXBvL2Jvc29uaXNoL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzAxZjJlNTZmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAxZjJlNTZmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAxZjJlNTZmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi92ZXJpZnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAxZjJlNTZmJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAxZjJlNTZmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvYXV0aC92ZXJpZmljYXRpb24vdmVyaWZ5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/auth/verification/verify.vue\n");

/***/ }),

/***/ "./resources/js/pages/auth/verification/verify.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/auth/verification/verify.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./verify.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/verification/verify.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvYXV0aC92ZXJpZmljYXRpb24vdmVyaWZ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNE4sQ0FBQyxpRUFBZSwyTUFBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL2F1dGgvdmVyaWZpY2F0aW9uL3ZlcmlmeS52dWU/NmI3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmVyaWZ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZlcmlmeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/auth/verification/verify.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/pages/auth/verification/verify.vue?vue&type=template&id=01f2e56f&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/auth/verification/verify.vue?vue&type=template&id=01f2e56f& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_01f2e56f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_01f2e56f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_01f2e56f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./verify.vue?vue&type=template&id=01f2e56f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/verification/verify.vue?vue&type=template&id=01f2e56f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/verification/verify.vue?vue&type=template&id=01f2e56f&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/verification/verify.vue?vue&type=template&id=01f2e56f& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"flex items-center justify-center p-6 sm:p-12 md:w-1/2\" },\n    [\n      _c(\"div\", { staticClass: \"w-full\" }, [\n        _c(\n          \"h1\",\n          {\n            staticClass:\n              \"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200\",\n          },\n          [_vm._v(\"\\n      \" + _vm._s(_vm.$t(\"verify_email\")) + \"\\n    \")]\n        ),\n        _vm._v(\" \"),\n        _vm.success\n          ? _c(\n              \"div\",\n              { staticClass: \"w-full\" },\n              [\n                _c(\"p\", { staticClass: \"text-green-900\" }, [\n                  _vm._v(\"\\n        \" + _vm._s(_vm.success) + \"\\n      \"),\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"t-button\",\n                  {\n                    staticClass:\n                      \"text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline\",\n                    attrs: {\n                      \"tag-name\": \"a\",\n                      variant: \"link\",\n                      to: { name: \"login\" },\n                    },\n                  },\n                  [_vm._v(\"\\n        \" + _vm._s(_vm.$t(\"login\")) + \"\\n      \")]\n                ),\n              ],\n              1\n            )\n          : _c(\n              \"div\",\n              [\n                _c(\"p\", { staticClass: \"text-red-900\" }, [\n                  _vm._v(\n                    \"\\n        \" +\n                      _vm._s(_vm.error || _vm.$t(\"failed_to_verify_email\")) +\n                      \"\\n      \"\n                  ),\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"t-button\",\n                  {\n                    staticClass:\n                      \"text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline\",\n                    attrs: {\n                      \"tag-name\": \"a\",\n                      variant: \"link\",\n                      to: { name: \"verification.resend\" },\n                    },\n                  },\n                  [\n                    _vm._v(\n                      \"\\n        \" +\n                        _vm._s(_vm.$t(\"resend_verification_link\")) +\n                        \"\\n      \"\n                    ),\n                  ]\n                ),\n              ],\n              1\n            ),\n      ]),\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZXNvdXJjZXMvanMvcGFnZXMvYXV0aC92ZXJpZmljYXRpb24vdmVyaWZ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMWYyZTU2ZiYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNFQUFzRTtBQUM1RTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0EsMEJBQTBCLCtCQUErQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGVBQWU7QUFDM0MscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZCQUE2QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pELHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9hdXRoL3ZlcmlmaWNhdGlvbi92ZXJpZnkudnVlPzU0NzUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNiBzbTpwLTEyIG1kOnctMS8yXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJoMVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcIm1iLTQgdGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMjAwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KFwidmVyaWZ5X2VtYWlsXCIpKSArIFwiXFxuICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnN1Y2Nlc3NcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyZWVuLTkwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnN1Y2Nlc3MpICsgXCJcXG4gICAgICBcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtcHVycGxlLTYwMCBkYXJrOnRleHQtcHVycGxlLTQwMCBob3Zlcjp1bmRlcmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcInRhZy1uYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwibGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvOiB7IG5hbWU6IFwibG9naW5cIiB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChcImxvZ2luXCIpKSArIFwiXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yZWQtOTAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZXJyb3IgfHwgX3ZtLiR0KFwiZmFpbGVkX3RvX3ZlcmlmeV9lbWFpbFwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtcHVycGxlLTYwMCBkYXJrOnRleHQtcHVycGxlLTQwMCBob3Zlcjp1bmRlcmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcInRhZy1uYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwibGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvOiB7IG5hbWU6IFwidmVyaWZpY2F0aW9uLnJlc2VuZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJyZXNlbmRfdmVyaWZpY2F0aW9uX2xpbmtcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgXSksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/verification/verify.vue?vue&type=template&id=01f2e56f&\n");

/***/ })

}]);