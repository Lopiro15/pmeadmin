(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/modal"],{

/***/ "./assets/js/modal.js":
/*!****************************!*\
  !*** ./assets/js/modal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
$(function () {
  'use strict';

  // showing modal with effect
  $('.modal-effect').on('click', function (e) {
    e.preventDefault();
    var effect = $(this).attr('data-bs-effect');
    $('#modaldemo8').addClass(effect);
  });

  // hide modal with effect
  $('#modaldemo8').on('hidden.bs.modal', function (e) {
    $(this).removeClass(function (index, className) {
      return (className.match(/(^|\s)effect-\S+/g) || []).join(' ');
    });
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_define-built-in_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-bed4a0","vendors-node_modules_core-js_internals_object-create_js-node_modules_core-js_internals_string-98dad5"], () => (__webpack_exec__("./assets/js/modal.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbW9kYWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDLFlBQVc7RUFDWixZQUFZOztFQUVaO0VBQ0FBLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTQyxDQUFDLEVBQUU7SUFDMUNBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEIsSUFBSUMsTUFBTSxHQUFHSixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNLLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMzQ0wsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDTSxRQUFRLENBQUNGLE1BQU0sQ0FBQztFQUNsQyxDQUFDLENBQUM7O0VBRUY7RUFDQUosQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0lBQ2xERixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNPLFdBQVcsQ0FBQyxVQUFTQyxLQUFLLEVBQUVDLFNBQVMsRUFBRTtNQUM5QyxPQUFPLENBQUNBLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxFQUFFQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQzlELENBQUMsQ0FBQztFQUNILENBQUMsQ0FBQztBQUNILENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0J1xyXG5cdFxyXG5cdC8vIHNob3dpbmcgbW9kYWwgd2l0aCBlZmZlY3RcclxuXHQkKCcubW9kYWwtZWZmZWN0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dmFyIGVmZmVjdCA9ICQodGhpcykuYXR0cignZGF0YS1icy1lZmZlY3QnKTtcclxuXHRcdCQoJyNtb2RhbGRlbW84JykuYWRkQ2xhc3MoZWZmZWN0KTtcclxuXHR9KTtcclxuXHRcclxuXHQvLyBoaWRlIG1vZGFsIHdpdGggZWZmZWN0XHJcblx0JCgnI21vZGFsZGVtbzgnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0JCh0aGlzKS5yZW1vdmVDbGFzcyhmdW5jdGlvbihpbmRleCwgY2xhc3NOYW1lKSB7XHJcblx0XHRcdHJldHVybiAoY2xhc3NOYW1lLm1hdGNoKC8oXnxcXHMpZWZmZWN0LVxcUysvZykgfHwgW10pLmpvaW4oJyAnKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIiQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVmZmVjdCIsImF0dHIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJtYXRjaCIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9