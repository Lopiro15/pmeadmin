(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/crypto-buysell"],{

/***/ "./assets/js/crypto-buysell.js":
/*!*************************************!*\
  !*** ./assets/js/crypto-buysell.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
$(function () {
  'use strict';

  /*LIne-Chart */
  var ctx = document.getElementById("earningbit").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      datasets: [_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        label: 'Buy',
        data: [420, 380, 610, 454, 530, 420, 680],
        borderWidth: 2,
        backgroundColor: 'transparent',
        borderColor: '#4d65d9'
      }, "borderWidth", 3), "pointBackgroundColor", '#ffffff'), "pointRadius", 2), "lineTension", 0.3), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        label: 'Sell',
        data: [520, 450, 550, 424, 580, 470, 640],
        borderWidth: 2,
        backgroundColor: 'transparent',
        borderColor: '#afbaef'
      }, "borderWidth", 3), "pointBackgroundColor", '#ffffff'), "borderDash", [5, 5]), "pointRadius", 2), "lineTension", 0.3)]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            fontColor: "#8492a6",
            fontFamily: 'Roboto'
          },
          display: true,
          gridLines: {
            color: 'rgba(132, 146, 166, 0.2)'
          }
        },
        y: {
          ticks: {
            fontColor: "#8492a6",
            fontFamily: 'Roboto'
          },
          display: true,
          gridLines: {
            color: 'rgba(132, 146, 166, 0.2)'
          },
          scaleLabel: {
            display: false,
            labelString: 'Thousands',
            fontColor: 'rgba(132, 146, 166, 0.2)'
          }
        }
      },
      legend: {
        labels: {
          fontColor: "#8492a6"
        }
      }
    }
  });

  /*LIne-Chart */

  function iformat(icon) {
    var originalOption = icon.element;
    return $('<span><i class="fa ' + $(originalOption).data('icon') + '"></i> ' + icon.text + '</span>');
  }
  $('.icons_select2').select2({
    width: "100%",
    templateSelection: iformat,
    templateResult: iformat,
    allowHtml: true
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_define-built-in_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-0eab75","vendors-node_modules_core-js_modules_es_error_cause_js-node_modules_core-js_modules_es_error_-f2dd87","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-7df6c4"], () => (__webpack_exec__("./assets/js/crypto-buysell.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxNQUFNO0lBQ2JDLGlCQUFpQixFQUFFUCxPQUFPO0lBQzFCUSxjQUFjLEVBQUVSLE9BQU87SUFDdkJTLFNBQVMsRUFBRTtFQUNaLENBQUMsQ0FBQztFQUVGeEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDeUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQy9CLElBQUlDLFdBQVcsR0FBR3hDLFFBQVEsQ0FBQ3lDLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDO0lBQ3JFRCxXQUFXLENBQUNFLE9BQU8sQ0FBQyxVQUFDVixPQUFPLEVBQUNXLEtBQUssRUFBRztNQUNwQ1gsT0FBTyxDQUFDWSxLQUFLLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUM7RUFDSCxDQUFDLENBQUM7QUFFSCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3J5cHRvLWJ1eXNlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gIC8qTEluZS1DaGFydCAqL1xyXG5cdHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVhcm5pbmdiaXRcIikuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHR2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuXHRcdHR5cGU6ICdsaW5lJyxcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0bGFiZWxzOiBbXCJTVU5cIiwgXCJNT05cIiwgXCJUVUVcIiwgXCJXRURcIiwgXCJUSFVcIiwgXCJGUklcIiwgXCJTQVRcIl0sXHJcblx0XHRcdGRhdGFzZXRzOiBbe1xyXG5cdFx0XHRcdGxhYmVsOiAnQnV5JyxcclxuXHRcdFx0XHRkYXRhOiBbNDIwLCAzODAsIDYxMCwgNDU0LCA1MzAsIDQyMCwgNjgwXSxcclxuXHRcdFx0XHRib3JkZXJXaWR0aDogMixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcblx0XHRcdFx0Ym9yZGVyQ29sb3I6ICcjNGQ2NWQ5JyxcclxuXHRcdFx0XHRib3JkZXJXaWR0aDogMyxcclxuXHRcdFx0XHRwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG5cdFx0XHRcdHBvaW50UmFkaXVzOiAyLFxyXG5cdFx0XHRcdGxpbmVUZW5zaW9uOiAwLjMsXHJcblx0XHRcdH0sXHJcbiAgICAgIHtcclxuXHRcdFx0XHRsYWJlbDogJ1NlbGwnLFxyXG5cdFx0XHRcdGRhdGE6IFs1MjAsIDQ1MCwgNTUwLCA0MjQsIDU4MCwgNDcwLCA2NDBdLFxyXG5cdFx0XHRcdGJvcmRlcldpZHRoOiAyLFxyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuXHRcdFx0XHRib3JkZXJDb2xvcjogJyNhZmJhZWYnLFxyXG5cdFx0XHRcdGJvcmRlcldpZHRoOiAzLFxyXG5cdFx0XHRcdHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgXHRcdGJvcmRlckRhc2g6IFs1LDVdLFxyXG5cdFx0XHRcdHBvaW50UmFkaXVzOiAyLFxyXG5cdFx0XHRcdGxpbmVUZW5zaW9uOiAwLjMsXHJcblx0XHRcdH1cclxuICAgIF1cclxuXHRcdH0sXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdHJlc3BvbnNpdmU6IHRydWUsXHJcblx0XHRcdG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG5cclxuXHRcdFx0c2NhbGVzOiB7XHJcblx0XHRcdFx0eDoge1xyXG5cdFx0XHRcdFx0dGlja3M6IHtcclxuXHRcdFx0XHRcdFx0Zm9udENvbG9yOiBcIiM4NDkyYTZcIixcclxuXHRcdFx0XHRcdFx0Zm9udEZhbWlseTogJ1JvYm90bycsXHJcblx0XHRcdFx0XHQgfSxcclxuXHRcdFx0XHRcdGRpc3BsYXk6IHRydWUsXHJcblx0XHRcdFx0XHRncmlkTGluZXM6IHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICdyZ2JhKDEzMiwgMTQ2LCAxNjYsIDAuMiknXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR5OiB7XHJcblx0XHRcdFx0XHR0aWNrczoge1xyXG5cdFx0XHRcdFx0XHRmb250Q29sb3I6IFwiIzg0OTJhNlwiLFxyXG5cdFx0XHRcdFx0XHRmb250RmFtaWx5OiAnUm9ib3RvJyxcclxuXHRcdFx0XHRcdCB9LFxyXG5cdFx0XHRcdFx0ZGlzcGxheTogdHJ1ZSxcclxuXHRcdFx0XHRcdGdyaWRMaW5lczoge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogJ3JnYmEoMTMyLCAxNDYsIDE2NiwgMC4yKSdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzY2FsZUxhYmVsOiB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRsYWJlbFN0cmluZzogJ1Rob3VzYW5kcycsXHJcblx0XHRcdFx0XHRcdGZvbnRDb2xvcjogJ3JnYmEoMTMyLCAxNDYsIDE2NiwgMC4yKSdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdGxhYmVsczoge1xyXG5cdFx0XHRcdFx0Zm9udENvbG9yOiBcIiM4NDkyYTZcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG4gICAvKkxJbmUtQ2hhcnQgKi9cclxuXHJcblxyXG5cdGZ1bmN0aW9uIGlmb3JtYXQoaWNvbikge1xyXG5cdFx0dmFyIG9yaWdpbmFsT3B0aW9uID0gaWNvbi5lbGVtZW50O1xyXG5cdFx0cmV0dXJuICQoJzxzcGFuPjxpIGNsYXNzPVwiZmEgJyArICQob3JpZ2luYWxPcHRpb24pLmRhdGEoJ2ljb24nKSArICdcIj48L2k+ICcgKyBpY29uLnRleHQgKyAnPC9zcGFuPicpO1xyXG5cdH1cclxuXHQkKCcuaWNvbnNfc2VsZWN0MicpLnNlbGVjdDIoe1xyXG5cdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0dGVtcGxhdGVTZWxlY3Rpb246IGlmb3JtYXQsXHJcblx0XHR0ZW1wbGF0ZVJlc3VsdDogaWZvcm1hdCxcclxuXHRcdGFsbG93SHRtbDogdHJ1ZVxyXG5cdH0pO1xyXG5cclxuXHQkKCcuc2VsZWN0MicpLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdGxldCBzZWxlY3RGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QyLXNlYXJjaF9fZmllbGQnKVxyXG5cdFx0c2VsZWN0RmllbGQuZm9yRWFjaCgoZWxlbWVudCxpbmRleCk9PntcclxuXHRcdFx0ZWxlbWVudC5mb2N1cygpO1xyXG5cdFx0fSlcclxuXHR9KTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyIkIiwiY3R4IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJteUNoYXJ0IiwiQ2hhcnQiLCJ0eXBlIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiX2RlZmluZVByb3BlcnR5IiwibGFiZWwiLCJib3JkZXJXaWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwic2NhbGVzIiwieCIsInRpY2tzIiwiZm9udENvbG9yIiwiZm9udEZhbWlseSIsImRpc3BsYXkiLCJncmlkTGluZXMiLCJjb2xvciIsInkiLCJzY2FsZUxhYmVsIiwibGFiZWxTdHJpbmciLCJsZWdlbmQiLCJpZm9ybWF0IiwiaWNvbiIsIm9yaWdpbmFsT3B0aW9uIiwiZWxlbWVudCIsInRleHQiLCJzZWxlY3QyIiwid2lkdGgiLCJ0ZW1wbGF0ZVNlbGVjdGlvbiIsInRlbXBsYXRlUmVzdWx0IiwiYWxsb3dIdG1sIiwib24iLCJzZWxlY3RGaWVsZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaW5kZXgiLCJmb2N1cyJdLCJzb3VyY2VSb290IjoiIn0=