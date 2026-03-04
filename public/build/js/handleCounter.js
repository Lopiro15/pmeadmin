(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/handleCounter"],{

/***/ "./assets/js/handleCounter.js":
/*!************************************!*\
  !*** ./assets/js/handleCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/**
 * handle counter
 */
;
(function () {
  'use strict';

  $.fn.handleCounter = function (options) {
    var $input, $btnMinus, $btnPlugs, minimum, maximize, writable, onChange, onMinimum, onMaximize;
    var $handleCounter = this;
    $btnMinus = $handleCounter.find('.counter-minus');
    $input = $handleCounter.find('input');
    $btnPlugs = $handleCounter.find('.counter-plus');
    var defaultOpts = {
      writable: true,
      minimum: 1,
      maximize: null,
      onChange: function onChange() {},
      onMinimum: function onMinimum() {},
      onMaximize: function onMaximize() {}
    };
    var settings = $.extend({}, defaultOpts, options);
    minimum = settings.minimum;
    maximize = settings.maximize;
    writable = settings.writable;
    onChange = settings.onChange;
    onMinimum = settings.onMinimum;
    onMaximize = settings.onMaximize;
    if (!$.isNumeric(minimum)) {
      minimum = defaultOpts.minimum;
    }
    if (!$.isNumeric(maximize)) {
      maximize = defaultOpts.maximize;
    }
    var inputVal = $input.val();
    if (isNaN(parseInt(inputVal))) {
      inputVal = $input.val(0).val();
    }
    if (!writable) {
      $input.prop('disabled', true);
    }
    changeVal(inputVal);
    $input.val(inputVal);
    $btnMinus.click(function () {
      var num = parseInt($input.val());
      if (num > minimum) {
        $input.val(num - 1);
        changeVal(num - 1);
      }
    });
    $btnPlugs.click(function () {
      var num = parseInt($input.val());
      if (maximize == null || num < maximize) {
        $input.val(num + 1);
        changeVal(num + 1);
      }
    });
    var keyUpTime;
    $input.keyup(function () {
      clearTimeout(keyUpTime);
      keyUpTime = setTimeout(function () {
        var num = $input.val();
        if (num == '') {
          num = minimum;
          $input.val(minimum);
        }
        var reg = new RegExp("^[\\d]*$");
        if (isNaN(parseInt(num)) || !reg.test(num)) {
          $input.val($input.data('num'));
          changeVal($input.data('num'));
        } else if (num < minimum) {
          $input.val(minimum);
          changeVal(minimum);
        } else if (maximize != null && num > maximize) {
          $input.val(maximize);
          changeVal(maximize);
        } else {
          changeVal(num);
        }
      }, 300);
    });
    $input.focus(function () {
      var num = $input.val();
      if (num == 0) $input.select();
    });
    function changeVal(num) {
      $input.data('num', num);
      $btnMinus.prop('disabled', false);
      $btnPlugs.prop('disabled', false);
      if (num <= minimum) {
        $btnMinus.prop('disabled', true);
        onMinimum.call(this, num);
      } else if (maximize != null && num >= maximize) {
        $btnPlugs.prop('disabled', true);
        onMaximize.call(this, num);
      }
      onChange.call(this, num);
    }
    return $handleCounter;
  };

  //  handleCounter
  var options = {
    minimum: 1,
    maximize: 10,
    onChange: valChanged,
    onMinimum: function onMinimum(e) {
      console.log('reached minimum: ' + e);
    },
    onMaximize: function onMaximize(e) {
      console.log('reached maximize' + e);
    }
  };
  $('#handleCounter').handleCounter(options);
  $('#handleCounter1').handleCounter(options);
  $('#handleCounter2').handleCounter(options);
  $('#handleCounter3').handleCounter(options);
  $('#handleCounter4').handleCounter(options);
  $('#handleCounter5').handleCounter(options);
  function valChanged(d) {
    //   console.log(d)
  }
})(jQuery);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_define-built-in_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164","vendors-node_modules_core-js_modules_es_parse-int_js-node_modules_core-js_modules_es_regexp_c-c3bb59","vendors-node_modules_core-js_internals_define-built-in-accessor_js-node_modules_core-js_inter-6c1ed7"], () => (__webpack_exec__("./assets/js/handleCounter.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7O0VBR0o7RUFDRSxJQUFJVixPQUFPLEdBQUc7SUFDZEksT0FBTyxFQUFFLENBQUM7SUFDVkMsUUFBUSxFQUFFLEVBQUU7SUFDWkUsUUFBUSxFQUFFNEIsVUFBVTtJQUNwQjNCLFNBQVMsRUFBRSxTQUFYQSxTQUFTQSxDQUFXNEIsQ0FBQyxFQUFFO01BQ3RCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBQ0YsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRDNCLFVBQVUsRUFBRSxTQUFaQSxVQUFVQSxDQUFXMkIsQ0FBQyxFQUFFO01BQ3ZCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBQ0YsQ0FBQyxDQUFDO0lBQ2xDO0VBQ0QsQ0FBQztFQUNEdkMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNFLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDO0VBQzFDSCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0UsYUFBYSxDQUFDQyxPQUFPLENBQUM7RUFDM0NILENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDRSxhQUFhLENBQUNDLE9BQU8sQ0FBQztFQUMzQ0gsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNFLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDO0VBQzNDSCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0UsYUFBYSxDQUFDQyxPQUFPLENBQUM7RUFDM0NILENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDRSxhQUFhLENBQUNDLE9BQU8sQ0FBQztFQUVyQyxTQUFTbUMsVUFBVUEsQ0FBQ0ksQ0FBQyxFQUFFO0lBQ3RCO0VBQUE7QUFJVCxDQUFDLEVBQUVDLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oYW5kbGVDb3VudGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogaGFuZGxlIGNvdW50ZXJcbiAqL1xuOyhmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgICQuZm4uaGFuZGxlQ291bnRlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciAkaW5wdXQsXG4gICAgICAgICAgICAkYnRuTWludXMsXG4gICAgICAgICAgICAkYnRuUGx1Z3MsXG4gICAgICAgICAgICBtaW5pbXVtLFxuICAgICAgICAgICAgbWF4aW1pemUsXG4gICAgICAgICAgICB3cml0YWJsZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlLFxuICAgICAgICAgICAgb25NaW5pbXVtLFxuICAgICAgICAgICAgb25NYXhpbWl6ZTtcbiAgICAgICAgdmFyICRoYW5kbGVDb3VudGVyID0gdGhpc1xuICAgICAgICAkYnRuTWludXMgPSAkaGFuZGxlQ291bnRlci5maW5kKCcuY291bnRlci1taW51cycpXG4gICAgICAgICRpbnB1dCA9ICRoYW5kbGVDb3VudGVyLmZpbmQoJ2lucHV0JylcbiAgICAgICAgJGJ0blBsdWdzID0gJGhhbmRsZUNvdW50ZXIuZmluZCgnLmNvdW50ZXItcGx1cycpXG4gICAgICAgIHZhciBkZWZhdWx0T3B0cyA9IHtcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgICAgIG1heGltaXplOiBudWxsLFxuICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uKCl7fSxcbiAgICAgICAgICAgIG9uTWluaW11bTogZnVuY3Rpb24oKXt9LFxuICAgICAgICAgICAgb25NYXhpbWl6ZTogZnVuY3Rpb24oKXt9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRPcHRzLCBvcHRpb25zKVxuICAgICAgICBtaW5pbXVtID0gc2V0dGluZ3MubWluaW11bVxuICAgICAgICBtYXhpbWl6ZSA9IHNldHRpbmdzLm1heGltaXplXG4gICAgICAgIHdyaXRhYmxlID0gc2V0dGluZ3Mud3JpdGFibGVcbiAgICAgICAgb25DaGFuZ2UgPSBzZXR0aW5ncy5vbkNoYW5nZVxuICAgICAgICBvbk1pbmltdW0gPSBzZXR0aW5ncy5vbk1pbmltdW1cbiAgICAgICAgb25NYXhpbWl6ZSA9IHNldHRpbmdzLm9uTWF4aW1pemVcbiAgICAgICAgaWYgKCEkLmlzTnVtZXJpYyhtaW5pbXVtKSkge1xuICAgICAgICAgICAgbWluaW11bSA9IGRlZmF1bHRPcHRzLm1pbmltdW1cbiAgICAgICAgfVxuICAgICAgICBpZiAoISQuaXNOdW1lcmljKG1heGltaXplKSkge1xuICAgICAgICAgICAgbWF4aW1pemUgPSBkZWZhdWx0T3B0cy5tYXhpbWl6ZVxuICAgICAgICB9XG4gICAgICAgIHZhciBpbnB1dFZhbCA9ICRpbnB1dC52YWwoKVxuICAgICAgICBpZiAoaXNOYU4ocGFyc2VJbnQoaW5wdXRWYWwpKSkge1xuICAgICAgICAgICAgaW5wdXRWYWwgPSAkaW5wdXQudmFsKDApLnZhbCgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF3cml0YWJsZSkge1xuICAgICAgICAgICAgJGlucHV0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYW5nZVZhbChpbnB1dFZhbClcbiAgICAgICAgJGlucHV0LnZhbChpbnB1dFZhbClcbiAgICAgICAgJGJ0bk1pbnVzLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBudW0gPSBwYXJzZUludCgkaW5wdXQudmFsKCkpXG4gICAgICAgICAgICBpZiAobnVtID4gbWluaW11bSkge1xuICAgICAgICAgICAgICAgICRpbnB1dC52YWwobnVtIC0gMSlcbiAgICAgICAgICAgICAgICBjaGFuZ2VWYWwobnVtIC0gMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgJGJ0blBsdWdzLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBudW0gPSBwYXJzZUludCgkaW5wdXQudmFsKCkpXG4gICAgICAgICAgICBpZiAobWF4aW1pemU9PW51bGx8fG51bSA8IG1heGltaXplKSB7XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChudW0gKyAxKVxuICAgICAgICAgICAgICAgIGNoYW5nZVZhbChudW0gKyAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB2YXIga2V5VXBUaW1lXG4gICAgICAgICRpbnB1dC5rZXl1cChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoa2V5VXBUaW1lKVxuICAgICAgICAgICAga2V5VXBUaW1lID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgbnVtID0gJGlucHV0LnZhbCgpXG4gICAgICAgICAgICAgICAgaWYgKG51bSA9PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgIG51bSA9IG1pbmltdW1cbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbChtaW5pbXVtKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIl5bXFxcXGRdKiRcIilcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4ocGFyc2VJbnQobnVtKSkgfHwgIXJlZy50ZXN0KG51bSkpIHtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbCgkaW5wdXQuZGF0YSgnbnVtJykpXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVZhbCgkaW5wdXQuZGF0YSgnbnVtJykpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW0gPCBtaW5pbXVtKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwobWluaW11bSlcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlVmFsKG1pbmltdW0pXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYgKG1heGltaXplIT1udWxsJiZudW0gPiBtYXhpbWl6ZSkge1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudmFsKG1heGltaXplKVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VWYWwobWF4aW1pemUpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlVmFsKG51bSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LDMwMClcbiAgICAgICAgfSlcbiAgICAgICAgJGlucHV0LmZvY3VzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBudW0gPSAkaW5wdXQudmFsKClcbiAgICAgICAgICAgIGlmIChudW0gPT0gMCkgJGlucHV0LnNlbGVjdCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZnVuY3Rpb24gY2hhbmdlVmFsKG51bSkge1xuICAgICAgICAgICAgJGlucHV0LmRhdGEoJ251bScsIG51bSlcbiAgICAgICAgICAgICRidG5NaW51cy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKVxuICAgICAgICAgICAgJGJ0blBsdWdzLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpXG4gICAgICAgICAgICBpZiAobnVtIDw9IG1pbmltdW0pIHtcbiAgICAgICAgICAgICAgICAkYnRuTWludXMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKVxuICAgICAgICAgICAgICAgIG9uTWluaW11bS5jYWxsKHRoaXMsIG51bSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWF4aW1pemUhPW51bGwmJm51bSA+PSBtYXhpbWl6ZSkge1xuICAgICAgICAgICAgICAgICRidG5QbHVncy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpXG4gICAgICAgICAgICAgICAgb25NYXhpbWl6ZS5jYWxsKHRoaXMsIG51bSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlLmNhbGwodGhpcywgbnVtKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkaGFuZGxlQ291bnRlclxuICAgIH07XG5cdFxuXHRcblx0Ly8gIGhhbmRsZUNvdW50ZXJcblx0ICB2YXIgb3B0aW9ucyA9IHtcblx0XHRcdG1pbmltdW06IDEsXG5cdFx0XHRtYXhpbWl6ZTogMTAsXG5cdFx0XHRvbkNoYW5nZTogdmFsQ2hhbmdlZCxcblx0XHRcdG9uTWluaW11bTogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncmVhY2hlZCBtaW5pbXVtOiAnK2UpXG5cdFx0XHR9LFxuXHRcdFx0b25NYXhpbWl6ZTogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncmVhY2hlZCBtYXhpbWl6ZScrZSlcblx0XHRcdH1cblx0XHR9XG5cdFx0JCgnI2hhbmRsZUNvdW50ZXInKS5oYW5kbGVDb3VudGVyKG9wdGlvbnMpXG5cdFx0JCgnI2hhbmRsZUNvdW50ZXIxJykuaGFuZGxlQ291bnRlcihvcHRpb25zKVxuXHRcdCQoJyNoYW5kbGVDb3VudGVyMicpLmhhbmRsZUNvdW50ZXIob3B0aW9ucylcblx0XHQkKCcjaGFuZGxlQ291bnRlcjMnKS5oYW5kbGVDb3VudGVyKG9wdGlvbnMpXG5cdFx0JCgnI2hhbmRsZUNvdW50ZXI0JykuaGFuZGxlQ291bnRlcihvcHRpb25zKVxuXHRcdCQoJyNoYW5kbGVDb3VudGVyNScpLmhhbmRsZUNvdW50ZXIob3B0aW9ucylcbiAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gdmFsQ2hhbmdlZChkKSB7XG4gICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGQpXG4gICAgICAgIH1cblx0XHRcblx0XHRcbn0pKGpRdWVyeSkiXSwibmFtZXMiOlsiJCIsImZuIiwiaGFuZGxlQ291bnRlciIsIm9wdGlvbnMiLCIkaW5wdXQiLCIkYnRuTWludXMiLCIkYnRuUGx1Z3MiLCJtaW5pbXVtIiwibWF4aW1pemUiLCJ3cml0YWJsZSIsIm9uQ2hhbmdlIiwib25NaW5pbXVtIiwib25NYXhpbWl6ZSIsIiRoYW5kbGVDb3VudGVyIiwiZmluZCIsImRlZmF1bHRPcHRzIiwic2V0dGluZ3MiLCJleHRlbmQiLCJpc051bWVyaWMiLCJpbnB1dFZhbCIsInZhbCIsImlzTmFOIiwicGFyc2VJbnQiLCJwcm9wIiwiY2hhbmdlVmFsIiwiY2xpY2siLCJudW0iLCJrZXlVcFRpbWUiLCJrZXl1cCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJyZWciLCJSZWdFeHAiLCJ0ZXN0IiwiZGF0YSIsImZvY3VzIiwic2VsZWN0IiwiY2FsbCIsInZhbENoYW5nZWQiLCJlIiwiY29uc29sZSIsImxvZyIsImQiLCJqUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9