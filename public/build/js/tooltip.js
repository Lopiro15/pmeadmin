(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/tooltip"],{

/***/ "./assets/js/tooltip.js":
/*!******************************!*\
  !*** ./assets/js/tooltip.js ***!
  \******************************/
/***/ (() => {

$(function () {
  'use strict';

  var tooltip = new bootstrap.Tooltip(document.querySelector('[data-bs-toggle="tooltip-primary"]'), {
    template: '<div class="tooltip tooltip-primary" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>'
  });
  var tooltip = new bootstrap.Tooltip(document.querySelector('[data-bs-toggle="tooltip-secondary"]'), {
    template: '<div class="tooltip tooltip-secondary" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>'
  });
  var tooltip = new bootstrap.Tooltip(document.querySelector('[data-bs-toggle="tooltip-info"]'), {
    template: '<div class="tooltip tooltip-info" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>'
  });
  var tooltip = new bootstrap.Tooltip(document.querySelector('[data-bs-toggle="tooltip-success"]'), {
    template: '<div class="tooltip tooltip-success" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>'
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/tooltip.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdG9vbHRpcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxDQUFDLENBQUMsWUFBVztFQUNaLFlBQVk7O0VBRVosSUFBSUMsT0FBTyxHQUFHLElBQUlDLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQ0FBb0MsQ0FBQyxFQUFFO0lBQzNGQyxRQUFRLEVBQUU7RUFDZCxDQUFDLENBQUM7RUFFTCxJQUFJTCxPQUFPLEdBQUcsSUFBSUMsU0FBUyxDQUFDQyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNDQUFzQyxDQUFDLEVBQUU7SUFDN0ZDLFFBQVEsRUFBRTtFQUNkLENBQUMsQ0FBQztFQUVMLElBQUlMLE9BQU8sR0FBRyxJQUFJQyxTQUFTLENBQUNDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUNBQWlDLENBQUMsRUFBRTtJQUN4RkMsUUFBUSxFQUFFO0VBQ2QsQ0FBQyxDQUFDO0VBRUwsSUFBSUwsT0FBTyxHQUFHLElBQUlDLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQ0FBb0MsQ0FBQyxFQUFFO0lBQzNGQyxRQUFRLEVBQUU7RUFDZCxDQUFDLENBQUM7QUFHTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdG9vbHRpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0J1xyXG5cclxuXHR2YXIgdG9vbHRpcCA9IG5ldyBib290c3RyYXAuVG9vbHRpcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwLXByaW1hcnlcIl0nKSwge1xyXG4gICAgICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXAgdG9vbHRpcC1wcmltYXJ5XCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjxcXC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48XFwvZGl2PjxcXC9kaXY+J1xyXG4gICAgfSlcclxuXHJcblx0dmFyIHRvb2x0aXAgPSBuZXcgYm9vdHN0cmFwLlRvb2x0aXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcC1zZWNvbmRhcnlcIl0nKSwge1xyXG4gICAgICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXAgdG9vbHRpcC1zZWNvbmRhcnlcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PFxcL2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjxcXC9kaXY+PFxcL2Rpdj4nXHJcbiAgICB9KVxyXG5cclxuXHR2YXIgdG9vbHRpcCA9IG5ldyBib290c3RyYXAuVG9vbHRpcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwLWluZm9cIl0nKSwge1xyXG4gICAgICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXAgdG9vbHRpcC1pbmZvXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjxcXC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48XFwvZGl2PjxcXC9kaXY+J1xyXG4gICAgfSlcclxuXHRcclxuXHR2YXIgdG9vbHRpcCA9IG5ldyBib290c3RyYXAuVG9vbHRpcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwLXN1Y2Nlc3NcIl0nKSwge1xyXG4gICAgICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXAgdG9vbHRpcC1zdWNjZXNzXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjxcXC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48XFwvZGl2PjxcXC9kaXY+J1xyXG4gICAgfSlcclxuXHJcblx0XHJcbn0pOyJdLCJuYW1lcyI6WyIkIiwidG9vbHRpcCIsImJvb3RzdHJhcCIsIlRvb2x0aXAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=