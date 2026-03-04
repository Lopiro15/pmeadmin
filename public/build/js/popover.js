(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/popover"],{

/***/ "./assets/js/popover.js":
/*!******************************!*\
  !*** ./assets/js/popover.js ***!
  \******************************/
/***/ (() => {

jQuery(function (e) {
  'use strict';

  var popover = new bootstrap.Popover(document.querySelector('.example'), {
    container: 'body'
  });
  var popover = new bootstrap.Popover(document.querySelector('[data-bs-popover-color="head-primary"]'), {
    template: '<div class="popover popover-head-primary x-placement" role="tooltip"><div class="popover-arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
  });
  var popover = new bootstrap.Popover(document.querySelector('[data-bs-popover-color="head-secondary"]'), {
    template: '<div class="popover popover-head-secondary x-placement" role="tooltip"><div class="popover-arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
  });
  var popover = new bootstrap.Popover(document.querySelector('[data-bs-popover-color="head-success"]'), {
    template: '<div class="popover popover-head-success x-placement" role="tooltip"><div class="popover-arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
  });
  var popover = new bootstrap.Popover(document.querySelector('[data-bs-popover-color="head-info"]'), {
    template: '<div class="popover popover-head-info x-placement" role="tooltip"><div class="popover-arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
  });
  var popover = new bootstrap.Popover(document.querySelector('[data-bs-popover-color="primary"]'), {
    template: '<div class="popover popover-primary x-placement" role="tooltip"><div class="popover-arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
  });
  var popover = new bootstrap.Popover(document.querySelector('[data-bs-popover-color="secondary"]'), {
    template: '<div class="popover popover-secondary x-placement" role="tooltip"><div class="popover-arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
  });
  var popover = new bootstrap.Popover(document.querySelector('[data-bs-popover-color="success"]'), {
    template: '<div class="popover popover-success x-placement" role="tooltip"><div class="popover-arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
  });
  var popover = new bootstrap.Popover(document.querySelector('[data-bs-popover-color="info"]'), {
    template: '<div class="popover popover-info x-placement" role="tooltip"><div class="popover-arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
  });
  $(document).on('click', function (e) {
    $('[data-bs-toggle="popover"],[data-bs-original-title]').each(function () {
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
        (($(this).popover('hide').data('bs.popover') || {}).inState || {}).click = false; // fix for BS 3.3.6
      }
    });
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/popover.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXNDb250ZW50IjpbImpRdWVyeShmdW5jdGlvbihlKXtcclxuXHQndXNlIHN0cmljdCc7XHJcblx0dmFyIHBvcG92ZXIgPSBuZXcgYm9vdHN0cmFwLlBvcG92ZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4YW1wbGUnKSwge1xyXG5cdFx0Y29udGFpbmVyOiAnYm9keSdcclxuXHR9KVxyXG5cdFxyXG5cdHZhciBwb3BvdmVyID0gbmV3IGJvb3RzdHJhcC5Qb3BvdmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJzLXBvcG92ZXItY29sb3I9XCJoZWFkLXByaW1hcnlcIl0nKSwge1xyXG5cdCAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlciBwb3BvdmVyLWhlYWQtcHJpbWFyeSB4LXBsYWNlbWVudFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48XFwvZGl2PjxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PFxcL2gzPjxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48XFwvZGl2PjxcXC9kaXY+J1xyXG5cdH0pXHJcblxyXG5cdHZhciBwb3BvdmVyID0gbmV3IGJvb3RzdHJhcC5Qb3BvdmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJzLXBvcG92ZXItY29sb3I9XCJoZWFkLXNlY29uZGFyeVwiXScpLCB7XHJcblx0IHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInBvcG92ZXIgcG9wb3Zlci1oZWFkLXNlY29uZGFyeSB4LXBsYWNlbWVudFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48XFwvZGl2PjxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PFxcL2gzPjxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48XFwvZGl2PjxcXC9kaXY+J1xyXG5cdH0pXHJcblxyXG5cdHZhciBwb3BvdmVyID0gbmV3IGJvb3RzdHJhcC5Qb3BvdmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJzLXBvcG92ZXItY29sb3I9XCJoZWFkLXN1Y2Nlc3NcIl0nKSwge1xyXG5cdFx0dGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlciBwb3BvdmVyLWhlYWQtc3VjY2VzcyB4LXBsYWNlbWVudFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48XFwvZGl2PjxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PFxcL2gzPjxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48XFwvZGl2PjxcXC9kaXY+J1xyXG5cdH0pXHJcblxyXG5cdHZhciBwb3BvdmVyID0gbmV3IGJvb3RzdHJhcC5Qb3BvdmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJzLXBvcG92ZXItY29sb3I9XCJoZWFkLWluZm9cIl0nKSwge1xyXG5cdFx0dGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlciBwb3BvdmVyLWhlYWQtaW5mbyB4LXBsYWNlbWVudFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48XFwvZGl2PjxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PFxcL2gzPjxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48XFwvZGl2PjxcXC9kaXY+J1xyXG5cdH0pXHJcbiAgIFxyXG5cdHZhciBwb3BvdmVyID0gbmV3IGJvb3RzdHJhcC5Qb3BvdmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJzLXBvcG92ZXItY29sb3I9XCJwcmltYXJ5XCJdJyksIHtcclxuXHQgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInBvcG92ZXIgcG9wb3Zlci1wcmltYXJ5IHgtcGxhY2VtZW50XCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwicG9wb3Zlci1hcnJvd1wiPjxcXC9kaXY+PGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48XFwvaDM+PGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjxcXC9kaXY+PFxcL2Rpdj4nXHJcblx0fSlcclxuXHJcblx0dmFyIHBvcG92ZXIgPSBuZXcgYm9vdHN0cmFwLlBvcG92ZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnMtcG9wb3Zlci1jb2xvcj1cInNlY29uZGFyeVwiXScpLCB7XHJcblx0ICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJwb3BvdmVyIHBvcG92ZXItc2Vjb25kYXJ5IHgtcGxhY2VtZW50XCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwicG9wb3Zlci1hcnJvd1wiPjxcXC9kaXY+PGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48XFwvaDM+PGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjxcXC9kaXY+PFxcL2Rpdj4nXHJcblx0fSlcclxuXHJcblx0dmFyIHBvcG92ZXIgPSBuZXcgYm9vdHN0cmFwLlBvcG92ZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnMtcG9wb3Zlci1jb2xvcj1cInN1Y2Nlc3NcIl0nKSwge1xyXG5cdFx0dGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlciBwb3BvdmVyLXN1Y2Nlc3MgeC1wbGFjZW1lbnRcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJwb3BvdmVyLWFycm93XCI+PFxcL2Rpdj48aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPjxcXC9oMz48ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PFxcL2Rpdj48XFwvZGl2PidcclxuXHR9KVxyXG5cclxuXHR2YXIgcG9wb3ZlciA9IG5ldyBib290c3RyYXAuUG9wb3Zlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1icy1wb3BvdmVyLWNvbG9yPVwiaW5mb1wiXScpLCB7XHJcblx0XHR0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJwb3BvdmVyIHBvcG92ZXItaW5mbyB4LXBsYWNlbWVudFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48XFwvZGl2PjxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PFxcL2gzPjxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48XFwvZGl2PjxcXC9kaXY+J1xyXG5cdH0pXHJcblx0XHJcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0JCgnW2RhdGEtYnMtdG9nZ2xlPVwicG9wb3ZlclwiXSxbZGF0YS1icy1vcmlnaW5hbC10aXRsZV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoISQodGhpcykuaXMoZS50YXJnZXQpICYmICQodGhpcykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDAgJiYgJCgnLnBvcG92ZXInKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdCgoJCh0aGlzKS5wb3BvdmVyKCdoaWRlJykuZGF0YSgnYnMucG9wb3ZlcicpIHx8IHt9KS5pblN0YXRlIHx8IHt9KS5jbGljayA9IGZhbHNlIC8vIGZpeCBmb3IgQlMgMy4zLjZcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn0pOyJdLCJuYW1lcyI6WyJqUXVlcnkiLCJlIiwicG9wb3ZlciIsImJvb3RzdHJhcCIsIlBvcG92ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWluZXIiLCJ0ZW1wbGF0ZSIsIiQiLCJvbiIsImVhY2giLCJpcyIsInRhcmdldCIsImhhcyIsImxlbmd0aCIsImRhdGEiLCJpblN0YXRlIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9