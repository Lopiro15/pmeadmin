(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/select2"],{

/***/ "./assets/js/select2.js":
/*!******************************!*\
  !*** ./assets/js/select2.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
jQuery(function () {
  $('.select2').select2({
    placeholder: 'Selectionnez...',
    searchInputPlaceholder: 'Recherche',
    width: '100%'
  });
  $('.select2-no-search').select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'All categories',
    width: '100%'
  });
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var $state = $('<span><img src="../build/plugins/flag-icon-css/flags/4x3/' + state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>');
    return $state;
  }
  ;
  $(".select2-flag-search").select2({
    templateResult: formatState,
    templateSelection: formatState,
    escapeMarkup: function escapeMarkup(m) {
      return m;
    }
  });
  $('.select2').on('click', function () {
    var selectField = document.querySelectorAll('.select2-search__field');
    selectField.forEach(function (element, index) {
      element.focus();
    });
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_define-built-in_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-7bb33f"], () => (__webpack_exec__("./assets/js/select2.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc2VsZWN0Mi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUMsWUFBVztFQUNqQkMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxPQUFPLENBQUM7SUFDckJDLFdBQVcsRUFBRSxpQkFBaUI7SUFDOUJDLHNCQUFzQixFQUFFLFdBQVc7SUFDbkNDLEtBQUssRUFBRTtFQUNSLENBQUMsQ0FBQztFQUVGSixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO0lBQy9CSSx1QkFBdUIsRUFBRUMsUUFBUTtJQUNqQ0osV0FBVyxFQUFFLGdCQUFnQjtJQUM3QkUsS0FBSyxFQUFFO0VBQ1IsQ0FBQyxDQUFDO0VBRUYsU0FBU0csV0FBV0EsQ0FBQ0MsS0FBSyxFQUFFO0lBQzNCLElBQUksQ0FBQ0EsS0FBSyxDQUFDQyxFQUFFLEVBQUU7TUFBRSxPQUFPRCxLQUFLLENBQUNFLElBQUk7SUFBRTtJQUNwQyxJQUFJQyxNQUFNLEdBQUdYLENBQUMsQ0FDYiwyREFBMkQsR0FBR1EsS0FBSyxDQUFDSSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLENBQUMsR0FDL0YsNEJBQTRCLEdBQzVCTixLQUFLLENBQUNFLElBQUksR0FBRyxTQUNkLENBQUM7SUFDRCxPQUFPQyxNQUFNO0VBQ2Q7RUFBQztFQUVEWCxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO0lBQ2pDYyxjQUFjLEVBQUVSLFdBQVc7SUFDM0JTLGlCQUFpQixFQUFFVCxXQUFXO0lBQzlCVSxZQUFZLEVBQUUsU0FBZEEsWUFBWUEsQ0FBWUMsQ0FBQyxFQUFFO01BQUUsT0FBT0EsQ0FBQztJQUFFO0VBQ3hDLENBQUMsQ0FBQztFQUVGbEIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDbUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQy9CLElBQUlDLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQztJQUNyRUYsV0FBVyxDQUFDRyxPQUFPLENBQUMsVUFBQ1gsT0FBTyxFQUFFWSxLQUFLLEVBQUs7TUFDdkNaLE9BQU8sQ0FBQ2EsS0FBSyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0VBQ0gsQ0FBQyxDQUFDO0FBRUgsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlbGVjdDIuanMiXSwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uKCkge1xyXG5cdCQoJy5zZWxlY3QyJykuc2VsZWN0Mih7XHJcblx0XHRwbGFjZWhvbGRlcjogJ1NlbGVjdGlvbm5lei4uLicsXHJcblx0XHRzZWFyY2hJbnB1dFBsYWNlaG9sZGVyOiAnUmVjaGVyY2hlJyxcclxuXHRcdHdpZHRoOiAnMTAwJSdcclxuXHR9KTtcclxuXHJcblx0JCgnLnNlbGVjdDItbm8tc2VhcmNoJykuc2VsZWN0Mih7XHJcblx0XHRtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHksXHJcblx0XHRwbGFjZWhvbGRlcjogJ0FsbCBjYXRlZ29yaWVzJyxcclxuXHRcdHdpZHRoOiAnMTAwJSdcclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gZm9ybWF0U3RhdGUoc3RhdGUpIHtcclxuXHRcdGlmICghc3RhdGUuaWQpIHsgcmV0dXJuIHN0YXRlLnRleHQ7IH1cclxuXHRcdHZhciAkc3RhdGUgPSAkKFxyXG5cdFx0XHQnPHNwYW4+PGltZyBzcmM9XCIuLi9idWlsZC9wbHVnaW5zL2ZsYWctaWNvbi1jc3MvZmxhZ3MvNHgzLycgKyBzdGF0ZS5lbGVtZW50LnZhbHVlLnRvTG93ZXJDYXNlKCkgK1xyXG5cdFx0XHQnLnN2Z1wiIGNsYXNzPVwiaW1nLWZsYWdcIiAvPiAnICtcclxuXHRcdFx0c3RhdGUudGV4dCArICc8L3NwYW4+J1xyXG5cdFx0KTtcclxuXHRcdHJldHVybiAkc3RhdGU7XHJcblx0fTtcclxuXHJcblx0JChcIi5zZWxlY3QyLWZsYWctc2VhcmNoXCIpLnNlbGVjdDIoe1xyXG5cdFx0dGVtcGxhdGVSZXN1bHQ6IGZvcm1hdFN0YXRlLFxyXG5cdFx0dGVtcGxhdGVTZWxlY3Rpb246IGZvcm1hdFN0YXRlLFxyXG5cdFx0ZXNjYXBlTWFya3VwOiBmdW5jdGlvbiAobSkgeyByZXR1cm4gbTsgfVxyXG5cdH0pO1xyXG5cclxuXHQkKCcuc2VsZWN0MicpLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdGxldCBzZWxlY3RGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QyLXNlYXJjaF9fZmllbGQnKVxyXG5cdFx0c2VsZWN0RmllbGQuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuXHRcdFx0ZWxlbWVudC5mb2N1cygpO1xyXG5cdFx0fSlcclxuXHR9KTtcclxuXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsialF1ZXJ5IiwiJCIsInNlbGVjdDIiLCJwbGFjZWhvbGRlciIsInNlYXJjaElucHV0UGxhY2Vob2xkZXIiLCJ3aWR0aCIsIm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwiSW5maW5pdHkiLCJmb3JtYXRTdGF0ZSIsInN0YXRlIiwiaWQiLCJ0ZXh0IiwiJHN0YXRlIiwiZWxlbWVudCIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJ0ZW1wbGF0ZVJlc3VsdCIsInRlbXBsYXRlU2VsZWN0aW9uIiwiZXNjYXBlTWFya3VwIiwibSIsIm9uIiwic2VsZWN0RmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaW5kZXgiLCJmb2N1cyJdLCJzb3VyY2VSb290IjoiIn0=