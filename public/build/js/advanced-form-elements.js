(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/advanced-form-elements"],{

/***/ "./assets/js/advanced-form-elements.js":
/*!*********************************************!*\
  !*** ./assets/js/advanced-form-elements.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
$(function () {
  'use strict';

  //Date range picker
  $('#reservation').daterangepicker();

  // Time Picker
  $('#tpBasic').timepicker();
  $('#tp2').timepicker({
    'scrollDefault': 'now'
  });
  $('#tp3').timepicker();
  $(document).on('click', '#setTimeButton', function () {
    $('#tp3').timepicker('setTime', new Date());
  });
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = uncurryThis(DatePrototype[TO_STRING]);
var thisTimeValue = uncurryThis(DatePrototype.getTime);

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) !== INVALID_DATE) {
  defineBuiltIn(DatePrototype, TO_STRING, function toString() {
    var value = thisTimeValue(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString(this) : INVALID_DATE;
  });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_define-built-in_js"], () => (__webpack_exec__("./assets/js/advanced-form-elements.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYWR2YW5jZWQtZm9ybS1lbGVtZW50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDLFlBQVc7RUFDWixZQUFZOztFQUNaO0VBQ0FBLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsZUFBZSxDQUFDLENBQUM7O0VBRW5DO0VBQ0FELENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQ0UsVUFBVSxDQUFDLENBQUM7RUFDMUJGLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0UsVUFBVSxDQUFDO0lBQ3BCLGVBQWUsRUFBRTtFQUNsQixDQUFDLENBQUM7RUFFRkYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDRSxVQUFVLENBQUMsQ0FBQztFQUV0QkYsQ0FBQyxDQUFDRyxRQUFRLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFXO0lBQ3BESixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNFLFVBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSUcsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUM1QyxDQUFDLENBQUM7QUFDSCxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDaEJXO0FBQ2I7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQsb0JBQW9CLG1CQUFPLENBQUMseUZBQThCOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkdmFuY2VkLWZvcm0tZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLXN0cmluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0J1xyXG5cdC8vRGF0ZSByYW5nZSBwaWNrZXJcclxuXHQkKCcjcmVzZXJ2YXRpb24nKS5kYXRlcmFuZ2VwaWNrZXIoKTtcclxuXHJcblx0Ly8gVGltZSBQaWNrZXJcclxuXHQkKCcjdHBCYXNpYycpLnRpbWVwaWNrZXIoKTtcclxuXHQkKCcjdHAyJykudGltZXBpY2tlcih7XHJcblx0XHQnc2Nyb2xsRGVmYXVsdCc6ICdub3cnXHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3RwMycpLnRpbWVwaWNrZXIoKTtcclxuXHRcclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3NldFRpbWVCdXR0b24nLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJyN0cDMnKS50aW1lcGlja2VyKCdzZXRUaW1lJywgbmV3IERhdGUoKSk7XHJcblx0fSk7XHJcbn0pOyIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcblxudmFyIERhdGVQcm90b3R5cGUgPSBEYXRlLnByb3RvdHlwZTtcbnZhciBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJztcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIG5hdGl2ZURhdGVUb1N0cmluZyA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGVbVE9fU1RSSU5HXSk7XG52YXIgdGhpc1RpbWVWYWx1ZSA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGUuZ2V0VGltZSk7XG5cbi8vIGBEYXRlLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoU3RyaW5nKG5ldyBEYXRlKE5hTikpICE9PSBJTlZBTElEX0RBVEUpIHtcbiAgZGVmaW5lQnVpbHRJbihEYXRlUHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXNUaW1lVmFsdWUodGhpcyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gbmF0aXZlRGF0ZVRvU3RyaW5nKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyIkIiwiZGF0ZXJhbmdlcGlja2VyIiwidGltZXBpY2tlciIsImRvY3VtZW50Iiwib24iLCJEYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==