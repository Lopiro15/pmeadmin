(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/form-elements"],{

/***/ "./assets/js/form-elements.js":
/*!************************************!*\
  !*** ./assets/js/form-elements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
$(function () {
  'use strict';

  // Toggle Switches
  $('.main-toggle').on('click', function () {
    $(this).toggleClass('on');
  });

  // Input Masks
  $('#dateMask').mask('99/99/9999');
  $('#phoneMask').mask('(999) 999-9999');
  $('#phoneExtMask').mask('(999) 999-9999? ext 99999');
  $('#ssnMask').mask('999-99-9999');

  // Color picker
  $('#colorpicker').spectrum({
    color: '#17A2B8'
  });

  // transparency selection
  $('#showAlpha').spectrum({
    color: 'rgba(23,162,184,0.5)',
    showAlpha: true
  });

  //Palettes selection 
  $('#showPaletteOnly').spectrum({
    showPaletteOnly: true,
    showPalette: true,
    color: '#DC3545',
    palette: [['#1D2939', '#fff', '#0866C6', '#23BF08', '#F49917'], ['#DC3545', '#17A2B8', '#6610F2', '#fa1e81', '#72e7a6']]
  });

  // Fc-datepicker
  $('.fc-datepicker').datepicker({
    showOtherMonths: true,
    selectOtherMonths: true
  });

  // Datepicker no of months
  $('#datepickerNoOfMonths').datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    numberOfMonths: 2
  });

  // Rangeslider1
  $('.rangeslider1').ionRangeSlider();

  // Rangeslider2
  $('.rangeslider2').ionRangeSlider({
    min: 100,
    max: 1000,
    from: 550
  });

  // Rangeslider3
  $('.rangeslider3').ionRangeSlider({
    type: 'double',
    grid: true,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    prefix: '$'
  });

  // Rangeslider4
  $('.rangeslider4').ionRangeSlider({
    type: 'double',
    grid: true,
    min: -1000,
    max: 1000,
    from: -500,
    to: 500,
    step: 250
  });

  // Filebrowser
  $(document).on('change', ':file', function () {
    var input = $(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
  });

  //Date picker
  $('#datepicker-date').bootstrapdatepicker({
    format: "dd-mm-yyyy",
    viewMode: "date",
    multidate: true,
    multidateSeparator: "-"
  });

  //Month picker
  $('#datepicker-month').bootstrapdatepicker({
    format: "MM",
    viewMode: "months",
    minViewMode: "months",
    multidate: true,
    multidateSeparator: "-"
  });

  //Year picker
  $('#datepicker-year').bootstrapdatepicker({
    format: "yyyy",
    viewMode: "year",
    minViewMode: "years",
    multidate: true,
    multidateSeparator: "-"
  });
  // AmazeUI Datetimepicker
  $('#datetimepicker').datetimepicker({
    format: 'yyyy-mm-dd hh:ii:ss',
    autoclose: true
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_define-built-in_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-bed4a0","vendors-node_modules_core-js_internals_object-create_js-node_modules_core-js_internals_string-cebfbe"], () => (__webpack_exec__("./assets/js/form-elements.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvZm9ybS1lbGVtZW50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUFBLENBQUMsQ0FBQyxZQUFXO0VBQ1osWUFBWTs7RUFFWjtFQUNBQSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUN4Q0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDRSxXQUFXLENBQUMsSUFBSSxDQUFDO0VBQzFCLENBQUMsQ0FBQzs7RUFFRjtFQUNBRixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNHLElBQUksQ0FBQyxZQUFZLENBQUM7RUFDakNILENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ0csSUFBSSxDQUFDLGdCQUFnQixDQUFDO0VBQ3RDSCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNHLElBQUksQ0FBQywyQkFBMkIsQ0FBQztFQUNwREgsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDRyxJQUFJLENBQUMsYUFBYSxDQUFDOztFQUdqQztFQUNBSCxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNJLFFBQVEsQ0FBQztJQUMxQkMsS0FBSyxFQUFFO0VBQ1IsQ0FBQyxDQUFDOztFQUVGO0VBQ0FMLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ0ksUUFBUSxDQUFDO0lBQ3hCQyxLQUFLLEVBQUUsc0JBQXNCO0lBQzdCQyxTQUFTLEVBQUU7RUFDWixDQUFDLENBQUM7O0VBRUY7RUFDQU4sQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNJLFFBQVEsQ0FBQztJQUM5QkcsZUFBZSxFQUFFLElBQUk7SUFDckJDLFdBQVcsRUFBRSxJQUFJO0lBQ2pCSCxLQUFLLEVBQUUsU0FBUztJQUNoQkksT0FBTyxFQUFFLENBQ1IsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQ3BELENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztFQUV6RCxDQUFDLENBQUM7O0VBR0Y7RUFDQVQsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNVLFVBQVUsQ0FBQztJQUM5QkMsZUFBZSxFQUFFLElBQUk7SUFDckJDLGlCQUFpQixFQUFFO0VBQ3BCLENBQUMsQ0FBQzs7RUFFRjtFQUNBWixDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ1UsVUFBVSxDQUFDO0lBQ3JDQyxlQUFlLEVBQUUsSUFBSTtJQUNyQkMsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QkMsY0FBYyxFQUFFO0VBQ2pCLENBQUMsQ0FBQzs7RUFFRjtFQUNBYixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNjLGNBQWMsQ0FBQyxDQUFDOztFQUVuQztFQUNBZCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNjLGNBQWMsQ0FBQztJQUNqQ0MsR0FBRyxFQUFFLEdBQUc7SUFDUkMsR0FBRyxFQUFFLElBQUk7SUFDVEMsSUFBSSxFQUFFO0VBQ1AsQ0FBQyxDQUFDOztFQUVGO0VBQ0FqQixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNjLGNBQWMsQ0FBQztJQUNqQ0ksSUFBSSxFQUFFLFFBQVE7SUFDZEMsSUFBSSxFQUFFLElBQUk7SUFDVkosR0FBRyxFQUFFLENBQUM7SUFDTkMsR0FBRyxFQUFFLElBQUk7SUFDVEMsSUFBSSxFQUFFLEdBQUc7SUFDVEcsRUFBRSxFQUFFLEdBQUc7SUFDUEMsTUFBTSxFQUFFO0VBQ1QsQ0FBQyxDQUFDOztFQUVGO0VBQ0FyQixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNjLGNBQWMsQ0FBQztJQUNqQ0ksSUFBSSxFQUFFLFFBQVE7SUFDZEMsSUFBSSxFQUFFLElBQUk7SUFDVkosR0FBRyxFQUFFLENBQUMsSUFBSTtJQUNWQyxHQUFHLEVBQUUsSUFBSTtJQUNUQyxJQUFJLEVBQUUsQ0FBQyxHQUFHO0lBQ1ZHLEVBQUUsRUFBRSxHQUFHO0lBQ1BFLElBQUksRUFBRTtFQUNQLENBQUMsQ0FBQzs7RUFFRjtFQUNBdEIsQ0FBQyxDQUFDdUIsUUFBUSxDQUFDLENBQUN0QixFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxZQUFXO0lBQzdDLElBQUl1QixLQUFLLEdBQUd4QixDQUFDLENBQUMsSUFBSSxDQUFDO01BQ2xCeUIsUUFBUSxHQUFHRCxLQUFLLENBQUNFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxHQUFHSCxLQUFLLENBQUNFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztNQUM3REMsS0FBSyxHQUFHTCxLQUFLLENBQUNNLEdBQUcsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUNBLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO0lBQzVEUCxLQUFLLENBQUNRLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQ1AsUUFBUSxFQUFFSSxLQUFLLENBQUMsQ0FBQztFQUM5QyxDQUFDLENBQUM7O0VBRUY7RUFDQTdCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDaUMsbUJBQW1CLENBQUM7SUFDekNDLE1BQU0sRUFBRSxZQUFZO0lBQ3BCQyxRQUFRLEVBQUUsTUFBTTtJQUNoQkMsU0FBUyxFQUFFLElBQUk7SUFDZkMsa0JBQWtCLEVBQUU7RUFDckIsQ0FBQyxDQUFDOztFQUVGO0VBQ0FyQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ2lDLG1CQUFtQixDQUFDO0lBQzFDQyxNQUFNLEVBQUUsSUFBSTtJQUNaQyxRQUFRLEVBQUUsUUFBUTtJQUNsQkcsV0FBVyxFQUFFLFFBQVE7SUFDckJGLFNBQVMsRUFBRSxJQUFJO0lBQ2ZDLGtCQUFrQixFQUFFO0VBQ3JCLENBQUMsQ0FBQzs7RUFFRjtFQUNBckMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNpQyxtQkFBbUIsQ0FBQztJQUN6Q0MsTUFBTSxFQUFFLE1BQU07SUFDZEMsUUFBUSxFQUFFLE1BQU07SUFDaEJHLFdBQVcsRUFBRSxPQUFPO0lBQ3BCRixTQUFTLEVBQUUsSUFBSTtJQUNmQyxrQkFBa0IsRUFBRTtFQUNyQixDQUFDLENBQUM7RUFDSDtFQUNDckMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUN1QyxjQUFjLENBQUM7SUFDbkNMLE1BQU0sRUFBRSxxQkFBcUI7SUFDN0JNLFNBQVMsRUFBRTtFQUNaLENBQUMsQ0FBQztBQUtILENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mb3JtLWVsZW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnXHJcblx0XHJcblx0Ly8gVG9nZ2xlIFN3aXRjaGVzXHJcblx0JCgnLm1haW4tdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvbicpO1xyXG5cdH0pXHJcblx0XHJcblx0Ly8gSW5wdXQgTWFza3NcclxuXHQkKCcjZGF0ZU1hc2snKS5tYXNrKCc5OS85OS85OTk5Jyk7XHJcblx0JCgnI3Bob25lTWFzaycpLm1hc2soJyg5OTkpIDk5OS05OTk5Jyk7XHJcblx0JCgnI3Bob25lRXh0TWFzaycpLm1hc2soJyg5OTkpIDk5OS05OTk5PyBleHQgOTk5OTknKTtcclxuXHQkKCcjc3NuTWFzaycpLm1hc2soJzk5OS05OS05OTk5Jyk7XHJcblx0XHJcblx0XHJcblx0Ly8gQ29sb3IgcGlja2VyXHJcblx0JCgnI2NvbG9ycGlja2VyJykuc3BlY3RydW0oe1xyXG5cdFx0Y29sb3I6ICcjMTdBMkI4J1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vIHRyYW5zcGFyZW5jeSBzZWxlY3Rpb25cclxuXHQkKCcjc2hvd0FscGhhJykuc3BlY3RydW0oe1xyXG5cdFx0Y29sb3I6ICdyZ2JhKDIzLDE2MiwxODQsMC41KScsXHJcblx0XHRzaG93QWxwaGE6IHRydWVcclxuXHR9KTtcclxuXHRcclxuXHQvL1BhbGV0dGVzIHNlbGVjdGlvbiBcclxuXHQkKCcjc2hvd1BhbGV0dGVPbmx5Jykuc3BlY3RydW0oe1xyXG5cdFx0c2hvd1BhbGV0dGVPbmx5OiB0cnVlLFxyXG5cdFx0c2hvd1BhbGV0dGU6IHRydWUsXHJcblx0XHRjb2xvcjogJyNEQzM1NDUnLFxyXG5cdFx0cGFsZXR0ZTogW1xyXG5cdFx0XHRbJyMxRDI5MzknLCAnI2ZmZicsICcjMDg2NkM2JywgJyMyM0JGMDgnLCAnI0Y0OTkxNyddLFxyXG5cdFx0XHRbJyNEQzM1NDUnLCAnIzE3QTJCOCcsICcjNjYxMEYyJywgJyNmYTFlODEnLCAnIzcyZTdhNiddXHJcblx0XHRdXHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0Ly8gRmMtZGF0ZXBpY2tlclxyXG5cdCQoJy5mYy1kYXRlcGlja2VyJykuZGF0ZXBpY2tlcih7XHJcblx0XHRzaG93T3RoZXJNb250aHM6IHRydWUsXHJcblx0XHRzZWxlY3RPdGhlck1vbnRoczogdHJ1ZVxyXG5cdH0pO1xyXG5cdFxyXG5cdC8vIERhdGVwaWNrZXIgbm8gb2YgbW9udGhzXHJcblx0JCgnI2RhdGVwaWNrZXJOb09mTW9udGhzJykuZGF0ZXBpY2tlcih7XHJcblx0XHRzaG93T3RoZXJNb250aHM6IHRydWUsXHJcblx0XHRzZWxlY3RPdGhlck1vbnRoczogdHJ1ZSxcclxuXHRcdG51bWJlck9mTW9udGhzOiAyXHJcblx0fSk7XHJcblx0XHJcblx0Ly8gUmFuZ2VzbGlkZXIxXHJcblx0JCgnLnJhbmdlc2xpZGVyMScpLmlvblJhbmdlU2xpZGVyKCk7XHJcblx0XHJcblx0Ly8gUmFuZ2VzbGlkZXIyXHJcblx0JCgnLnJhbmdlc2xpZGVyMicpLmlvblJhbmdlU2xpZGVyKHtcclxuXHRcdG1pbjogMTAwLFxyXG5cdFx0bWF4OiAxMDAwLFxyXG5cdFx0ZnJvbTogNTUwXHJcblx0fSk7XHJcblx0XHJcblx0Ly8gUmFuZ2VzbGlkZXIzXHJcblx0JCgnLnJhbmdlc2xpZGVyMycpLmlvblJhbmdlU2xpZGVyKHtcclxuXHRcdHR5cGU6ICdkb3VibGUnLFxyXG5cdFx0Z3JpZDogdHJ1ZSxcclxuXHRcdG1pbjogMCxcclxuXHRcdG1heDogMTAwMCxcclxuXHRcdGZyb206IDIwMCxcclxuXHRcdHRvOiA4MDAsXHJcblx0XHRwcmVmaXg6ICckJ1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vIFJhbmdlc2xpZGVyNFxyXG5cdCQoJy5yYW5nZXNsaWRlcjQnKS5pb25SYW5nZVNsaWRlcih7XHJcblx0XHR0eXBlOiAnZG91YmxlJyxcclxuXHRcdGdyaWQ6IHRydWUsXHJcblx0XHRtaW46IC0xMDAwLFxyXG5cdFx0bWF4OiAxMDAwLFxyXG5cdFx0ZnJvbTogLTUwMCxcclxuXHRcdHRvOiA1MDAsXHJcblx0XHRzdGVwOiAyNTBcclxuXHR9KTtcclxuXHRcclxuXHQvLyBGaWxlYnJvd3NlclxyXG5cdCQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnOmZpbGUnLCBmdW5jdGlvbigpIHtcclxuXHR2YXIgaW5wdXQgPSAkKHRoaXMpLFxyXG5cdFx0bnVtRmlsZXMgPSBpbnB1dC5nZXQoMCkuZmlsZXMgPyBpbnB1dC5nZXQoMCkuZmlsZXMubGVuZ3RoIDogMSxcclxuXHRcdGxhYmVsID0gaW5wdXQudmFsKCkucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoLy4qXFwvLywgJycpO1xyXG5cdGlucHV0LnRyaWdnZXIoJ2ZpbGVzZWxlY3QnLCBbbnVtRmlsZXMsIGxhYmVsXSk7XHJcblx0fSk7XHJcblx0XHJcblx0Ly9EYXRlIHBpY2tlclxyXG5cdCQoJyNkYXRlcGlja2VyLWRhdGUnKS5ib290c3RyYXBkYXRlcGlja2VyKHtcclxuXHRcdGZvcm1hdDogXCJkZC1tbS15eXl5XCIsXHJcblx0XHR2aWV3TW9kZTogXCJkYXRlXCIsXHJcblx0XHRtdWx0aWRhdGU6IHRydWUsXHJcblx0XHRtdWx0aWRhdGVTZXBhcmF0b3I6IFwiLVwiLFxyXG5cdH0pXHJcblx0XHJcblx0Ly9Nb250aCBwaWNrZXJcclxuXHQkKCcjZGF0ZXBpY2tlci1tb250aCcpLmJvb3RzdHJhcGRhdGVwaWNrZXIoe1xyXG5cdFx0Zm9ybWF0OiBcIk1NXCIsXHJcblx0XHR2aWV3TW9kZTogXCJtb250aHNcIixcclxuXHRcdG1pblZpZXdNb2RlOiBcIm1vbnRoc1wiLFxyXG5cdFx0bXVsdGlkYXRlOiB0cnVlLFxyXG5cdFx0bXVsdGlkYXRlU2VwYXJhdG9yOiBcIi1cIixcclxuXHR9KVxyXG5cdFxyXG5cdC8vWWVhciBwaWNrZXJcclxuXHQkKCcjZGF0ZXBpY2tlci15ZWFyJykuYm9vdHN0cmFwZGF0ZXBpY2tlcih7XHJcblx0XHRmb3JtYXQ6IFwieXl5eVwiLFxyXG5cdFx0dmlld01vZGU6IFwieWVhclwiLFxyXG5cdFx0bWluVmlld01vZGU6IFwieWVhcnNcIixcclxuXHRcdG11bHRpZGF0ZTogdHJ1ZSxcclxuXHRcdG11bHRpZGF0ZVNlcGFyYXRvcjogXCItXCIsXHJcblx0fSlcclxuLy8gQW1hemVVSSBEYXRldGltZXBpY2tlclxyXG5cdCQoJyNkYXRldGltZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcclxuXHRcdGZvcm1hdDogJ3l5eXktbW0tZGQgaGg6aWk6c3MnLFxyXG5cdFx0YXV0b2Nsb3NlOiB0cnVlXHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcbn0pOyJdLCJuYW1lcyI6WyIkIiwib24iLCJ0b2dnbGVDbGFzcyIsIm1hc2siLCJzcGVjdHJ1bSIsImNvbG9yIiwic2hvd0FscGhhIiwic2hvd1BhbGV0dGVPbmx5Iiwic2hvd1BhbGV0dGUiLCJwYWxldHRlIiwiZGF0ZXBpY2tlciIsInNob3dPdGhlck1vbnRocyIsInNlbGVjdE90aGVyTW9udGhzIiwibnVtYmVyT2ZNb250aHMiLCJpb25SYW5nZVNsaWRlciIsIm1pbiIsIm1heCIsImZyb20iLCJ0eXBlIiwiZ3JpZCIsInRvIiwicHJlZml4Iiwic3RlcCIsImRvY3VtZW50IiwiaW5wdXQiLCJudW1GaWxlcyIsImdldCIsImZpbGVzIiwibGVuZ3RoIiwibGFiZWwiLCJ2YWwiLCJyZXBsYWNlIiwidHJpZ2dlciIsImJvb3RzdHJhcGRhdGVwaWNrZXIiLCJmb3JtYXQiLCJ2aWV3TW9kZSIsIm11bHRpZGF0ZSIsIm11bHRpZGF0ZVNlcGFyYXRvciIsIm1pblZpZXdNb2RlIiwiZGF0ZXRpbWVwaWNrZXIiLCJhdXRvY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9