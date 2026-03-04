(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/check-all-mail"],{

/***/ "./assets/js/check-all-mail.js":
/*!*************************************!*\
  !*** ./assets/js/check-all-mail.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
$(function () {
  'use strict';

  $('#checkAll').on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-mail-list .ckbox input').each(function () {
        $(this).closest('.main-mail-item').addClass('selected');
        $(this).attr('checked', true);
      });
      $('.main-mail-options .btn:not(:first-child)').removeClass('disabled');
    } else {
      $('.main-mail-list .ckbox input').each(function () {
        $(this).closest('.main-mail-item').removeClass('selected');
        $(this).attr('checked', false);
      });
      $('.main-mail-options .btn:not(:first-child)').addClass('disabled');
    }
  });
  $('.main-mail-item .main-mail-checkbox input').on('click', function () {
    if ($(this).is(':checked')) {
      $(this).attr('checked', false);
      $(this).closest('.main-mail-item').addClass('selected');
      $('.main-mail-options .btn:not(:first-child)').removeClass('disabled');
    } else {
      $(this).attr('checked', true);
      $(this).closest('.main-mail-item').removeClass('selected');
      if (!$('.main-mail-list .selected').length) {
        $('.main-mail-options .btn:not(:first-child)').addClass('disabled');
      }
    }
  });
  $('.main-mail-star').on('click', function (e) {
    $(this).toggleClass('active');
  });
  $('#btnCompose').on('click', function (e) {
    e.preventDefault();
    $('.main-mail-compose').show();
  });
  $('.main-mail-compose-header a:first-child').on('click', function (e) {
    e.preventDefault();
    $('.main-mail-compose').toggleClass('main-mail-compose-minimize');
  });
  $('.main-mail-compose-header a:nth-child(2)').on('click', function (e) {
    e.preventDefault();
    $(this).find('.fas').toggleClass('fa-compress');
    $(this).find('.fas').toggleClass('fa-expand');
    $('.main-mail-compose').toggleClass('main-mail-compose-compress');
    $('.main-mail-compose').removeClass('main-mail-compose-minimize');
  });
  $('.main-mail-compose-header a:last-child').on('click', function (e) {
    e.preventDefault();
    $('.main-mail-compose').hide(100);
    $('.main-mail-compose').removeClass('main-mail-compose-minimize');
  });
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_define-built-in_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164"], () => (__webpack_exec__("./assets/js/check-all-mail.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2hlY2stYWxsLW1haWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFDQSxDQUFDLENBQUMsWUFBVztFQUNaLFlBQVk7O0VBQ1pBLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO0lBQ3JDLElBQUlELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0UsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQzNCRixDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFlBQVc7UUFDakRILENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDdkRMLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ00sSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7TUFDOUIsQ0FBQyxDQUFDO01BQ0ZOLENBQUMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDTyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQ3ZFLENBQUMsTUFBTTtNQUNOUCxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFlBQVc7UUFDakRILENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUNHLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDMURQLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ00sSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7TUFDL0IsQ0FBQyxDQUFDO01BQ0ZOLENBQUMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDSyxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQ3BFO0VBQ0QsQ0FBQyxDQUFDO0VBQ0ZMLENBQUMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7SUFDckUsSUFBSUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDRSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDM0JGLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ00sSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7TUFDOUJOLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUM7TUFDdkRMLENBQUMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDTyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQ3ZFLENBQUMsTUFBTTtNQUNOUCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNNLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO01BQzdCTixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDRyxXQUFXLENBQUMsVUFBVSxDQUFDO01BQzFELElBQUksQ0FBQ1AsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUNRLE1BQU0sRUFBRTtRQUMzQ1IsQ0FBQyxDQUFDLDJDQUEyQyxDQUFDLENBQUNLLFFBQVEsQ0FBQyxVQUFVLENBQUM7TUFDcEU7SUFDRDtFQUNELENBQUMsQ0FBQztFQUNGTCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTUSxDQUFDLEVBQUU7SUFDNUNULENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1UsV0FBVyxDQUFDLFFBQVEsQ0FBQztFQUM5QixDQUFDLENBQUM7RUFDRlYsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVNRLENBQUMsRUFBRTtJQUN4Q0EsQ0FBQyxDQUFDRSxjQUFjLENBQUMsQ0FBQztJQUNsQlgsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNZLElBQUksQ0FBQyxDQUFDO0VBQy9CLENBQUMsQ0FBQztFQUNGWixDQUFDLENBQUMseUNBQXlDLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTUSxDQUFDLEVBQUU7SUFDcEVBLENBQUMsQ0FBQ0UsY0FBYyxDQUFDLENBQUM7SUFDbEJYLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDVSxXQUFXLENBQUMsNEJBQTRCLENBQUM7RUFDbEUsQ0FBQyxDQUFDO0VBQ0ZWLENBQUMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVNRLENBQUMsRUFBRTtJQUNyRUEsQ0FBQyxDQUFDRSxjQUFjLENBQUMsQ0FBQztJQUNsQlgsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDYSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUNILFdBQVcsQ0FBQyxhQUFhLENBQUM7SUFDL0NWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDSCxXQUFXLENBQUMsV0FBVyxDQUFDO0lBQzdDVixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ1UsV0FBVyxDQUFDLDRCQUE0QixDQUFDO0lBQ2pFVixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ08sV0FBVyxDQUFDLDRCQUE0QixDQUFDO0VBQ2xFLENBQUMsQ0FBQztFQUNGUCxDQUFDLENBQUMsd0NBQXdDLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTUSxDQUFDLEVBQUU7SUFDbkVBLENBQUMsQ0FBQ0UsY0FBYyxDQUFDLENBQUM7SUFDbEJYLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDYyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pDZCxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ08sV0FBVyxDQUFDLDRCQUE0QixDQUFDO0VBQ2xFLENBQUMsQ0FBQztBQUNILENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNyRFU7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFlBQVkscUhBQTRDO0FBQ3hELHVCQUF1QixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFaEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLHNCQUFzQjs7QUFFbkU7QUFDQTtBQUNBLElBQUksbURBQW1EO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGVjay1hbGwtbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiICQoZnVuY3Rpb24oKSB7XHJcbiBcdCd1c2Ugc3RyaWN0J1xyXG4gXHQkKCcjY2hlY2tBbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuIFx0XHRpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gXHRcdFx0JCgnLm1haW4tbWFpbC1saXN0IC5ja2JveCBpbnB1dCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiBcdFx0XHRcdCQodGhpcykuY2xvc2VzdCgnLm1haW4tbWFpbC1pdGVtJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiBcdFx0XHRcdCQodGhpcykuYXR0cignY2hlY2tlZCcsIHRydWUpO1xyXG4gXHRcdFx0fSk7XHJcbiBcdFx0XHQkKCcubWFpbi1tYWlsLW9wdGlvbnMgLmJ0bjpub3QoOmZpcnN0LWNoaWxkKScpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG4gXHRcdH0gZWxzZSB7XHJcbiBcdFx0XHQkKCcubWFpbi1tYWlsLWxpc3QgLmNrYm94IGlucHV0JykuZWFjaChmdW5jdGlvbigpIHtcclxuIFx0XHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcubWFpbi1tYWlsLWl0ZW0nKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuIFx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gXHRcdFx0fSk7XHJcbiBcdFx0XHQkKCcubWFpbi1tYWlsLW9wdGlvbnMgLmJ0bjpub3QoOmZpcnN0LWNoaWxkKScpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG4gXHRcdH1cclxuIFx0fSk7XHJcbiBcdCQoJy5tYWluLW1haWwtaXRlbSAubWFpbi1tYWlsLWNoZWNrYm94IGlucHV0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiBcdFx0aWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuIFx0XHRcdCQodGhpcykuYXR0cignY2hlY2tlZCcsIGZhbHNlKTtcclxuIFx0XHRcdCQodGhpcykuY2xvc2VzdCgnLm1haW4tbWFpbC1pdGVtJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiBcdFx0XHQkKCcubWFpbi1tYWlsLW9wdGlvbnMgLmJ0bjpub3QoOmZpcnN0LWNoaWxkKScpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG4gXHRcdH0gZWxzZSB7XHJcbiBcdFx0XHQkKHRoaXMpLmF0dHIoJ2NoZWNrZWQnLCB0cnVlKTtcclxuIFx0XHRcdCQodGhpcykuY2xvc2VzdCgnLm1haW4tbWFpbC1pdGVtJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiBcdFx0XHRpZiAoISQoJy5tYWluLW1haWwtbGlzdCAuc2VsZWN0ZWQnKS5sZW5ndGgpIHtcclxuIFx0XHRcdFx0JCgnLm1haW4tbWFpbC1vcHRpb25zIC5idG46bm90KDpmaXJzdC1jaGlsZCknKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdH0pO1xyXG4gXHQkKCcubWFpbi1tYWlsLXN0YXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiBcdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiBcdH0pO1xyXG4gXHQkKCcjYnRuQ29tcG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuIFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcbiBcdFx0JCgnLm1haW4tbWFpbC1jb21wb3NlJykuc2hvdygpO1xyXG4gXHR9KTtcclxuIFx0JCgnLm1haW4tbWFpbC1jb21wb3NlLWhlYWRlciBhOmZpcnN0LWNoaWxkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuIFx0XHQkKCcubWFpbi1tYWlsLWNvbXBvc2UnKS50b2dnbGVDbGFzcygnbWFpbi1tYWlsLWNvbXBvc2UtbWluaW1pemUnKTtcclxuIFx0fSlcclxuIFx0JCgnLm1haW4tbWFpbC1jb21wb3NlLWhlYWRlciBhOm50aC1jaGlsZCgyKScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuIFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcbiBcdFx0JCh0aGlzKS5maW5kKCcuZmFzJykudG9nZ2xlQ2xhc3MoJ2ZhLWNvbXByZXNzJyk7XHJcbiBcdFx0JCh0aGlzKS5maW5kKCcuZmFzJykudG9nZ2xlQ2xhc3MoJ2ZhLWV4cGFuZCcpO1xyXG4gXHRcdCQoJy5tYWluLW1haWwtY29tcG9zZScpLnRvZ2dsZUNsYXNzKCdtYWluLW1haWwtY29tcG9zZS1jb21wcmVzcycpO1xyXG4gXHRcdCQoJy5tYWluLW1haWwtY29tcG9zZScpLnJlbW92ZUNsYXNzKCdtYWluLW1haWwtY29tcG9zZS1taW5pbWl6ZScpO1xyXG4gXHR9KTtcclxuIFx0JCgnLm1haW4tbWFpbC1jb21wb3NlLWhlYWRlciBhOmxhc3QtY2hpbGQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiBcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gXHRcdCQoJy5tYWluLW1haWwtY29tcG9zZScpLmhpZGUoMTAwKTtcclxuIFx0XHQkKCcubWFpbi1tYWlsLWNvbXBvc2UnKS5yZW1vdmVDbGFzcygnbWFpbi1tYWlsLWNvbXBvc2UtbWluaW1pemUnKTtcclxuIFx0fSk7XHJcbiB9KTsiLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbnZhciBGSU5EID0gJ2ZpbmQnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZmluZCAtLSB0ZXN0aW5nXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuIl0sIm5hbWVzIjpbIiQiLCJvbiIsImlzIiwiZWFjaCIsImNsb3Nlc3QiLCJhZGRDbGFzcyIsImF0dHIiLCJyZW1vdmVDbGFzcyIsImxlbmd0aCIsImUiLCJ0b2dnbGVDbGFzcyIsInByZXZlbnREZWZhdWx0Iiwic2hvdyIsImZpbmQiLCJoaWRlIl0sInNvdXJjZVJvb3QiOiIifQ==