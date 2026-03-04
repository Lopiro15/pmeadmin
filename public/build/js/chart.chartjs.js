(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/chart.chartjs"],{

/***/ "./assets/js/chart.chartjs.js":
/*!************************************!*\
  !*** ./assets/js/chart.chartjs.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
$(function () {
  'use strict';

  /*LIne-Chart */
  var ctx = document.getElementById("chartLine").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"],
      datasets: [_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        label: 'Profits',
        data: [20, 320, 110, 350, 480, 320, 480],
        borderWidth: 2,
        backgroundColor: 'transparent',
        borderColor: '#4d65d9'
      }, "borderWidth", 3), "pointBackgroundColor", '#ffffff'), "pointRadius", 2), "fill", false), "lineTension", 0.3)]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            fontColor: "#8492a6"
          }
        }
      },
      scales: {
        x: {
          ticks: {
            fontColor: "#8492a6"
          },
          display: true,
          gridLines: {
            color: 'rgba(119, 119, 142, 0.2)'
          }
        },
        y: {
          ticks: {
            fontColor: "#8492a6"
          },
          display: true,
          gridLines: {
            color: 'rgba(119, 119, 142, 0.2)'
          },
          scaleLabel: {
            display: false,
            labelString: 'Thousands',
            fontColor: 'rgba(119, 119, 142, 0.2)'
          }
        }
      }
    }
  });

  /* Bar-Chart1 */
  var ctx = document.getElementById("chartBar1").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [_defineProperty(_defineProperty({
        label: 'Sales',
        data: [200, 450, 290, 367, 256, 543, 345],
        borderWidth: 2,
        backgroundColor: '#4d65d9',
        borderColor: '#4d65d9'
      }, "borderWidth", 2.0), "pointBackgroundColor", '#ffffff')]
    },
    options: _defineProperty({
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true
      },
      scales: {
        y: {
          ticks: {
            beginAtZero: true,
            stepSize: 150,
            fontColor: "#8492a6"
          },
          gridLines: {
            color: 'rgba(119, 119, 142, 0.2)'
          }
        },
        x: {
          ticks: {
            display: true,
            fontColor: "#8492a6"
          },
          gridLines: {
            display: false,
            color: 'rgba(119, 119, 142, 0.2)'
          }
        }
      }
    }, "legend", {
      labels: {
        fontColor: "#8492a6"
      }
    })
  });

  /* Bar-Chart2*/
  var ctx = document.getElementById("chartBar2");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: "Data1",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#4d65d9",
        borderWidth: "0",
        backgroundColor: "#4d65d9"
      }, {
        label: "Data2",
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: "#53caed",
        borderWidth: "0",
        backgroundColor: "#53caed"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            fontColor: "#8492a6"
          },
          gridLines: {
            color: 'rgba(119, 119, 142, 0.2)'
          }
        },
        y: {
          ticks: {
            beginAtZero: true,
            fontColor: "#8492a6"
          },
          gridLines: {
            color: 'rgba(119, 119, 142, 0.2)'
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

  /* Area Chart*/
  var ctx = document.getElementById("chartArea");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: "Data1",
        borderColor: "rgba(68, 86, 195, 0.9)",
        borderWidth: "1",
        backgroundColor: "rgba(68, 86, 195, 0.5)",
        data: [20, 42, 61, 40, 72, 45, 40],
        fill: true,
        lineTension: 0.3
      }, {
        label: "Data2",
        borderColor: "rgba(235, 111, 51 ,0.9)",
        borderWidth: "1",
        backgroundColor: "rgba(241, 56, 139, 0.5)",
        pointHighlightStroke: "rgba(241, 56, 139, 0.9)",
        data: [17, 35, 35, 25, 52, 33, 40],
        fill: true,
        lineTension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: 'index',
        intersect: false
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        x: {
          ticks: {
            fontColor: "#8492a6"
          },
          gridLines: {
            color: 'rgba(119, 119, 142, 0.2)'
          }
        },
        y: {
          ticks: {
            beginAtZero: true,
            fontColor: "#8492a6"
          },
          gridLines: {
            color: 'rgba(119, 119, 142, 0.2)'
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

  /* Pie Chart*/
  var datapie = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    datasets: [{
      data: [15, 20, 20, 10, 20, 15],
      backgroundColor: ['#4d65d9', '#53caed', '#01b8ff', '#f16d75', '#29ccbb', '#f1388b']
    }]
  };
  var optionpie = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  /* Doughnut Chart*/
  var ctx6 = document.getElementById('chartPie');
  var myPieChart6 = new Chart(ctx6, {
    type: 'doughnut',
    data: datapie,
    options: optionpie
  });

  /* Pie Chart*/
  var ctx7 = document.getElementById('chartDonut');
  var myPieChart7 = new Chart(ctx7, {
    type: 'pie',
    data: datapie,
    options: optionpie
  });

  /* Radar chart*/
  var ctx = document.getElementById("chartRadar");
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [["Eating", "Dinner"], ["Drinking", "Water"], "Sleeping", ["Designing", "Graphics"], "Coding", "Cycling", "Running"],
      datasets: [{
        label: "Data1",
        data: [65, 59, 66, 45, 56, 55, 40],
        borderColor: "rgba(113, 76, 190, 0.9)",
        borderWidth: "1",
        backgroundColor: "rgba(113, 76, 190, 0.5)"
      }, {
        label: "Data2",
        data: [28, 12, 40, 19, 63, 27, 87],
        borderColor: "rgba(235, 111, 51,0.8)",
        borderWidth: "1",
        backgroundColor: "rgba(235, 111, 51,0.4)"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scale: {
        angleLines: {
          color: '#8492a6'
        },
        gridLines: {
          color: 'rgba(119, 119, 142, 0.2)'
        },
        ticks: {
          beginAtZero: true
        },
        pointLabels: {
          fontColor: '#8492a6'
        }
      }
    }
  });

  /* polar chart */
  var ctx = document.getElementById("chartPolar");
  var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      datasets: [{
        data: [18, 15, 9, 6, 19],
        backgroundColor: ['#4d65d9', '#53caed', '#01b8ff', '#f16d75', '#29ccbb'],
        hoverBackgroundColor: ['#4d65d9', '#53caed', '#01b8ff', '#f16d75', '#29ccbb'],
        borderColor: 'transparent'
      }],
      labels: ["Data1", "Data2", "Data3", "Data4"]
    },
    options: {
      scale: {
        gridLines: {
          color: 'rgba(119, 119, 142, 0.2)'
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        labels: {
          fontColor: "#8492a6"
        }
      }
    }
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/date-to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/date-to-primitive.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/core-js/internals/ordinary-to-primitive.js");

var $TypeError = TypeError;

// `Date.prototype[@@toPrimitive](hint)` method implementation
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
module.exports = function (hint) {
  anObject(this);
  if (hint === 'string' || hint === 'default') hint = 'string';
  else if (hint !== 'number') throw new $TypeError('Incorrect hint');
  return ordinaryToPrimitive(this, hint);
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-primitive.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-primitive.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var dateToPrimitive = __webpack_require__(/*! ../internals/date-to-primitive */ "./node_modules/core-js/internals/date-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var DatePrototype = Date.prototype;

// `Date.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
if (!hasOwn(DatePrototype, TO_PRIMITIVE)) {
  defineBuiltIn(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f);
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);

var NUMBER = 'Number';
var NativeNumber = globalThis[NUMBER];
var PureNumberNamespace = path[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = globalThis.TypeError;
var stringSlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw new TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        // fast equal of /^0b[01]+$/i
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal of /^0o[0-7]+$/i
        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        default:
          return +it;
      }
      digits = stringSlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

var FORCED = isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));

var calledWithNew = function (dummy) {
  // includes check on 1..constructor(foo) case
  return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); });
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
var NumberWrapper = function Number(value) {
  var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
  return calledWithNew(this) ? inheritIfRequired(Object(n), this, NumberWrapper) : n;
};

NumberWrapper.prototype = NumberPrototype;
if (FORCED && !IS_PURE) NumberPrototype.constructor = NumberWrapper;

$({ global: true, constructor: true, wrap: true, forced: FORCED }, {
  Number: NumberWrapper
});

// Use `internal/copy-constructor-properties` helper in `core-js@4`
var copyConstructorProperties = function (target, source) {
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(source) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(source, key = keys[j]) && !hasOwn(target, key)) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

if (IS_PURE && PureNumberNamespace) copyConstructorProperties(path[NUMBER], PureNumberNamespace);
if (FORCED || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber);


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.to-primitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.to-primitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ "./node_modules/core-js/internals/well-known-symbol-define.js");
var defineSymbolToPrimitive = __webpack_require__(/*! ../internals/symbol-define-to-primitive */ "./node_modules/core-js/internals/symbol-define-to-primitive.js");

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_define-built-in_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-0eab75","vendors-node_modules_core-js_modules_es_error_cause_js-node_modules_core-js_modules_es_error_-f2dd87"], () => (__webpack_exec__("./assets/js/chart.chartjs.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxvR0FBb0c7QUFDeEc7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNWWTtBQUNiLDRCQUE0QixtQkFBTyxDQUFDLDJHQUF1QztBQUMzRSw4QkFBOEIsbUJBQU8sQ0FBQywrR0FBeUM7O0FBRS9FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhcnQuY2hhcnRqcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGF0ZS10by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wudG8tcHJpbWl0aXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnXHJcblx0LypMSW5lLUNoYXJ0ICovXHJcblx0dmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnRMaW5lXCIpLmdldENvbnRleHQoJzJkJyk7XHJcblx0dmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcblx0XHR0eXBlOiAnbGluZScsXHJcblx0XHRkYXRhOiB7XHJcblx0XHRcdGxhYmVsczogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVzXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxyXG5cdFx0XHRkYXRhc2V0czogW3tcclxuXHRcdFx0XHRsYWJlbDogJ1Byb2ZpdHMnLFxyXG5cdFx0XHRcdGRhdGE6IFsyMCwgMzIwLCAxMTAsIDM1MCwgNDgwLCAzMjAsIDQ4MF0sXHJcblx0XHRcdFx0Ym9yZGVyV2lkdGg6IDIsXHJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG5cdFx0XHRcdGJvcmRlckNvbG9yOiAnIzRkNjVkOScsXHJcblx0XHRcdFx0Ym9yZGVyV2lkdGg6IDMsXHJcblx0XHRcdFx0cG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuXHRcdFx0XHRwb2ludFJhZGl1czogMixcclxuXHRcdFx0XHRmaWxsOiBmYWxzZSxcclxuXHRcdFx0XHRsaW5lVGVuc2lvbjogMC4zLFxyXG5cdFx0XHR9XVxyXG5cdFx0fSxcclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0cmVzcG9uc2l2ZTogdHJ1ZSxcclxuXHRcdFx0bWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcblx0XHRcdHBsdWdpbnM6IHtcclxuXHRcdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRcdGxhYmVsczoge1xyXG5cdFx0XHRcdFx0XHRmb250Q29sb3I6IFwiIzg0OTJhNlwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzY2FsZXM6IHtcclxuXHRcdFx0XHR4OiB7XHJcblx0XHRcdFx0XHR0aWNrczoge1xyXG5cdFx0XHRcdFx0XHRmb250Q29sb3I6IFwiIzg0OTJhNlwiLFxyXG5cdFx0XHRcdFx0IH0sXHJcblx0XHRcdFx0XHRkaXNwbGF5OiB0cnVlLFxyXG5cdFx0XHRcdFx0Z3JpZExpbmVzOiB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAncmdiYSgxMTksIDExOSwgMTQyLCAwLjIpJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0eToge1xyXG5cdFx0XHRcdFx0dGlja3M6IHtcclxuXHRcdFx0XHRcdFx0Zm9udENvbG9yOiBcIiM4NDkyYTZcIixcclxuXHRcdFx0XHRcdCB9LFxyXG5cdFx0XHRcdFx0ZGlzcGxheTogdHJ1ZSxcclxuXHRcdFx0XHRcdGdyaWRMaW5lczoge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogJ3JnYmEoMTE5LCAxMTksIDE0MiwgMC4yKSdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzY2FsZUxhYmVsOiB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRsYWJlbFN0cmluZzogJ1Rob3VzYW5kcycsXHJcblx0XHRcdFx0XHRcdGZvbnRDb2xvcjogJ3JnYmEoMTE5LCAxMTksIDE0MiwgMC4yKSdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8qIEJhci1DaGFydDEgKi9cclxuXHR2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFydEJhcjFcIikuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHR2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuXHRcdHR5cGU6ICdiYXInLFxyXG5cdFx0ZGF0YToge1xyXG5cdFx0XHRsYWJlbHM6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiXSxcclxuXHRcdFx0ZGF0YXNldHM6IFt7XHJcblx0XHRcdFx0bGFiZWw6ICdTYWxlcycsXHJcblx0XHRcdFx0ZGF0YTogWzIwMCwgNDUwLCAyOTAsIDM2NywgMjU2LCA1NDMsIDM0NV0sXHJcblx0XHRcdFx0Ym9yZGVyV2lkdGg6IDIsXHJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAnIzRkNjVkOScsXHJcblx0XHRcdFx0Ym9yZGVyQ29sb3I6ICcjNGQ2NWQ5JyxcclxuXHRcdFx0XHRib3JkZXJXaWR0aDogMi4wLFxyXG5cdFx0XHRcdHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcblxyXG5cdFx0XHR9XVxyXG5cdFx0fSxcclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0cmVzcG9uc2l2ZTogdHJ1ZSxcclxuXHRcdFx0bWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcblx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdGRpc3BsYXk6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0c2NhbGVzOiB7XHJcblx0XHRcdFx0eToge1xyXG5cdFx0XHRcdFx0dGlja3M6IHtcclxuXHRcdFx0XHRcdFx0YmVnaW5BdFplcm86IHRydWUsXHJcblx0XHRcdFx0XHRcdHN0ZXBTaXplOiAxNTAsXHJcblx0XHRcdFx0XHRcdGZvbnRDb2xvcjogXCIjODQ5MmE2XCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Z3JpZExpbmVzOiB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAncmdiYSgxMTksIDExOSwgMTQyLCAwLjIpJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0eDoge1xyXG5cdFx0XHRcdFx0dGlja3M6IHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0Zm9udENvbG9yOiBcIiM4NDkyYTZcIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRncmlkTGluZXM6IHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmFsc2UsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiAncmdiYSgxMTksIDExOSwgMTQyLCAwLjIpJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0bGFiZWxzOiB7XHJcblx0XHRcdFx0XHRmb250Q29sb3I6IFwiIzg0OTJhNlwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0LyogQmFyLUNoYXJ0MiovXHJcblx0dmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnRCYXIyXCIpO1xyXG5cdHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG5cdFx0dHlwZTogJ2JhcicsXHJcblx0XHRkYXRhOiB7XHJcblx0XHRcdGxhYmVsczogW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCJdLFxyXG5cdFx0XHRkYXRhc2V0czogW3tcclxuXHRcdFx0XHRsYWJlbDogXCJEYXRhMVwiLFxyXG5cdFx0XHRcdGRhdGE6IFs2NSwgNTksIDgwLCA4MSwgNTYsIDU1LCA0MF0sXHJcblx0XHRcdFx0Ym9yZGVyQ29sb3I6IFwiIzRkNjVkOVwiLFxyXG5cdFx0XHRcdGJvcmRlcldpZHRoOiBcIjBcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzRkNjVkOVwiXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHRsYWJlbDogXCJEYXRhMlwiLFxyXG5cdFx0XHRcdGRhdGE6IFsyOCwgNDgsIDQwLCAxOSwgODYsIDI3LCA5MF0sXHJcblx0XHRcdFx0Ym9yZGVyQ29sb3I6IFwiIzUzY2FlZFwiLFxyXG5cdFx0XHRcdGJvcmRlcldpZHRoOiBcIjBcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzUzY2FlZFwiXHJcblx0XHRcdH1dXHJcblx0XHR9LFxyXG5cdFx0b3B0aW9uczoge1xyXG5cdFx0XHRyZXNwb25zaXZlOiB0cnVlLFxyXG5cdFx0XHRtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuXHRcdFx0c2NhbGVzOiB7XHJcblx0XHRcdFx0eDoge1xyXG5cdFx0XHRcdFx0dGlja3M6IHtcclxuXHRcdFx0XHRcdFx0Zm9udENvbG9yOiBcIiM4NDkyYTZcIixcclxuXHRcdFx0XHRcdCB9LFxyXG5cdFx0XHRcdFx0Z3JpZExpbmVzOiB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAncmdiYSgxMTksIDExOSwgMTQyLCAwLjIpJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0eToge1xyXG5cdFx0XHRcdFx0dGlja3M6IHtcclxuXHRcdFx0XHRcdFx0YmVnaW5BdFplcm86IHRydWUsXHJcblx0XHRcdFx0XHRcdGZvbnRDb2xvcjogXCIjODQ5MmE2XCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Z3JpZExpbmVzOiB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAncmdiYSgxMTksIDExOSwgMTQyLCAwLjIpJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdGxhYmVsczoge1xyXG5cdFx0XHRcdFx0Zm9udENvbG9yOiBcIiM4NDkyYTZcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8qIEFyZWEgQ2hhcnQqL1xyXG5cdHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0QXJlYVwiKTtcclxuXHR2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuXHRcdHR5cGU6ICdsaW5lJyxcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0bGFiZWxzOiBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIl0sXHJcblx0XHRcdGRhdGFzZXRzOiBbe1xyXG5cdFx0XHRcdGxhYmVsOiBcIkRhdGExXCIsXHJcblx0XHRcdFx0Ym9yZGVyQ29sb3I6IFwicmdiYSg2OCwgODYsIDE5NSwgMC45KVwiLFxyXG5cdFx0XHRcdGJvcmRlcldpZHRoOiBcIjFcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg2OCwgODYsIDE5NSwgMC41KVwiLFxyXG5cdFx0XHRcdGRhdGE6IFsyMCwgNDIsIDYxLCA0MCwgNzIsIDQ1LCA0MF0sXHJcblx0XHRcdFx0ZmlsbDogdHJ1ZSxcclxuXHRcdFx0XHRsaW5lVGVuc2lvbjogMC4zLFxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0bGFiZWw6IFwiRGF0YTJcIixcclxuXHRcdFx0XHRib3JkZXJDb2xvcjogXCJyZ2JhKDIzNSwgMTExLCA1MSAsMC45KVwiLFxyXG5cdFx0XHRcdGJvcmRlcldpZHRoOiBcIjFcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNDEsIDU2LCAxMzksIDAuNSlcIixcclxuXHRcdFx0XHRwb2ludEhpZ2hsaWdodFN0cm9rZTogXCJyZ2JhKDI0MSwgNTYsIDEzOSwgMC45KVwiLFxyXG5cdFx0XHRcdGRhdGE6IFsxNywgMzUsIDM1LCAyNSwgNTIsIDMzLCA0MF0sXHJcblx0XHRcdFx0ZmlsbDogdHJ1ZSxcclxuXHRcdFx0XHRsaW5lVGVuc2lvbjogMC4zLFxyXG5cdFx0XHR9XVxyXG5cdFx0fSxcclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0cmVzcG9uc2l2ZTogdHJ1ZSxcclxuXHRcdFx0bWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcblx0XHRcdHRvb2x0aXBzOiB7XHJcblx0XHRcdFx0bW9kZTogJ2luZGV4JyxcclxuXHRcdFx0XHRpbnRlcnNlY3Q6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGhvdmVyOiB7XHJcblx0XHRcdFx0bW9kZTogJ25lYXJlc3QnLFxyXG5cdFx0XHRcdGludGVyc2VjdDogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzY2FsZXM6IHtcclxuXHRcdFx0XHR4OiB7XHJcblx0XHRcdFx0XHR0aWNrczoge1xyXG5cdFx0XHRcdFx0XHRmb250Q29sb3I6IFwiIzg0OTJhNlwiLFxyXG5cdFx0XHRcdFx0IH0sXHJcblx0XHRcdFx0XHRncmlkTGluZXM6IHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICdyZ2JhKDExOSwgMTE5LCAxNDIsIDAuMiknXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR5OiB7XHJcblx0XHRcdFx0XHR0aWNrczoge1xyXG5cdFx0XHRcdFx0XHRiZWdpbkF0WmVybzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0Zm9udENvbG9yOiBcIiM4NDkyYTZcIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRncmlkTGluZXM6IHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICdyZ2JhKDExOSwgMTE5LCAxNDIsIDAuMiknXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0bGFiZWxzOiB7XHJcblx0XHRcdFx0XHRmb250Q29sb3I6IFwiIzg0OTJhNlwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0LyogUGllIENoYXJ0Ki9cclxuXHR2YXIgZGF0YXBpZSA9IHtcclxuXHRcdGxhYmVsczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bmUnXSxcclxuXHRcdGRhdGFzZXRzOiBbe1xyXG5cdFx0XHRkYXRhOiBbMTUsIDIwLCAyMCwgMTAsIDIwLCAxNV0sXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogWycjNGQ2NWQ5JywgJyM1M2NhZWQnLCAnIzAxYjhmZicsICcjZjE2ZDc1JywgJyMyOWNjYmInLCAnI2YxMzg4YiddXHJcblx0XHR9XVxyXG5cdH07XHJcblx0dmFyIG9wdGlvbnBpZSA9IHtcclxuXHRcdG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG5cdFx0cmVzcG9uc2l2ZTogdHJ1ZSxcclxuXHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRkaXNwbGF5OiBmYWxzZSxcclxuXHRcdH0sXHJcblx0XHRhbmltYXRpb246IHtcclxuXHRcdFx0YW5pbWF0ZVNjYWxlOiB0cnVlLFxyXG5cdFx0XHRhbmltYXRlUm90YXRlOiB0cnVlXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyogRG91Z2hudXQgQ2hhcnQqL1xyXG5cdHZhciBjdHg2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0UGllJyk7XHJcblx0dmFyIG15UGllQ2hhcnQ2ID0gbmV3IENoYXJ0KGN0eDYsIHtcclxuXHRcdHR5cGU6ICdkb3VnaG51dCcsXHJcblx0XHRkYXRhOiBkYXRhcGllLFxyXG5cdFx0b3B0aW9uczogb3B0aW9ucGllXHJcblx0fSk7XHJcblxyXG5cdC8qIFBpZSBDaGFydCovXHJcblx0dmFyIGN0eDcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnREb251dCcpO1xyXG5cdHZhciBteVBpZUNoYXJ0NyA9IG5ldyBDaGFydChjdHg3LCB7XHJcblx0XHR0eXBlOiAncGllJyxcclxuXHRcdGRhdGE6IGRhdGFwaWUsXHJcblx0XHRvcHRpb25zOiBvcHRpb25waWVcclxuXHR9KTtcclxuXHJcblx0LyogUmFkYXIgY2hhcnQqL1xyXG5cdHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0UmFkYXJcIik7XHJcblx0dmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcblx0XHR0eXBlOiAncmFkYXInLFxyXG5cdFx0ZGF0YToge1xyXG5cdFx0XHRsYWJlbHM6IFtcclxuXHJcblx0XHRcdFx0W1wiRWF0aW5nXCIsIFwiRGlubmVyXCJdLFxyXG5cdFx0XHRcdFtcIkRyaW5raW5nXCIsIFwiV2F0ZXJcIl0sIFwiU2xlZXBpbmdcIiwgW1wiRGVzaWduaW5nXCIsIFwiR3JhcGhpY3NcIl0sIFwiQ29kaW5nXCIsIFwiQ3ljbGluZ1wiLCBcIlJ1bm5pbmdcIixcclxuXHJcblx0XHRcdF0sXHJcblx0XHRcdGRhdGFzZXRzOiBbe1xyXG5cclxuXHRcdFx0XHRsYWJlbDogXCJEYXRhMVwiLFxyXG5cdFx0XHRcdGRhdGE6IFs2NSwgNTksIDY2LCA0NSwgNTYsIDU1LCA0MF0sXHJcblx0XHRcdFx0Ym9yZGVyQ29sb3I6IFwicmdiYSgxMTMsIDc2LCAxOTAsIDAuOSlcIixcclxuXHRcdFx0XHRib3JkZXJXaWR0aDogXCIxXCIsXHJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMTEzLCA3NiwgMTkwLCAwLjUpXCJcclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdGxhYmVsOiBcIkRhdGEyXCIsXHJcblx0XHRcdFx0ZGF0YTogWzI4LCAxMiwgNDAsIDE5LCA2MywgMjcsIDg3XSxcclxuXHRcdFx0XHRib3JkZXJDb2xvcjogXCJyZ2JhKDIzNSwgMTExLCA1MSwwLjgpXCIsXHJcblx0XHRcdFx0Ym9yZGVyV2lkdGg6IFwiMVwiLFxyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzNSwgMTExLCA1MSwwLjQpXCJcclxuXHRcdFx0fV1cclxuXHRcdH0sXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdHJlc3BvbnNpdmU6IHRydWUsXHJcblx0XHRcdG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG5cdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRkaXNwbGF5OmZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdHNjYWxlOiB7XHJcblx0XHRcdFx0YW5nbGVMaW5lczogeyBjb2xvcjogJyM4NDkyYTYnIH0sXHJcblx0XHRcdFx0Z3JpZExpbmVzOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogJ3JnYmEoMTE5LCAxMTksIDE0MiwgMC4yKSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHRpY2tzOiB7XHJcblx0XHRcdFx0XHRiZWdpbkF0WmVybzogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBvaW50TGFiZWxzOiB7XHJcblx0XHRcdFx0XHRmb250Q29sb3I6JyM4NDkyYTYnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQvKiBwb2xhciBjaGFydCAqL1xyXG5cdHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0UG9sYXJcIik7XHJcblx0dmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcblx0XHR0eXBlOiAncG9sYXJBcmVhJyxcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0ZGF0YXNldHM6IFt7XHJcblx0XHRcdFx0ZGF0YTogWzE4LCAxNSwgOSwgNiwgMTldLFxyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogWycjNGQ2NWQ5JywgJyM1M2NhZWQnLCAnIzAxYjhmZicsICcjZjE2ZDc1JywgJyMyOWNjYmInXSxcclxuXHRcdFx0XHRob3ZlckJhY2tncm91bmRDb2xvcjogWycjNGQ2NWQ5JywgJyM1M2NhZWQnLCAnIzAxYjhmZicsICcjZjE2ZDc1JywgJyMyOWNjYmInXSxcclxuXHRcdFx0XHRib3JkZXJDb2xvcjondHJhbnNwYXJlbnQnLFxyXG5cdFx0XHR9XSxcclxuXHRcdFx0bGFiZWxzOiBbXCJEYXRhMVwiLCBcIkRhdGEyXCIsIFwiRGF0YTNcIiwgXCJEYXRhNFwiXVxyXG5cdFx0fSxcclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0c2NhbGU6IHtcclxuXHRcdFx0XHRncmlkTGluZXM6IHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICdyZ2JhKDExOSwgMTE5LCAxNDIsIDAuMiknXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZXNwb25zaXZlOiB0cnVlLFxyXG5cdFx0XHRtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuXHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0bGFiZWxzOiB7XHJcblx0XHRcdFx0XHRmb250Q29sb3I6IFwiIzg0OTJhNlwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYERhdGUucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZGF0ZS5wcm90b3R5cGUtQEB0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaGludCkge1xuICBhbk9iamVjdCh0aGlzKTtcbiAgaWYgKGhpbnQgPT09ICdzdHJpbmcnIHx8IGhpbnQgPT09ICdkZWZhdWx0JykgaGludCA9ICdzdHJpbmcnO1xuICBlbHNlIGlmIChoaW50ICE9PSAnbnVtYmVyJykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0luY29ycmVjdCBoaW50Jyk7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKHRoaXMsIGhpbnQpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ15bJyArIHdoaXRlc3BhY2VzICsgJ10rJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAoJyhefFteJyArIHdoaXRlc3BhY2VzICsgJ10pWycgKyB3aGl0ZXNwYWNlcyArICddKyQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIGlmIChUWVBFICYgMSkgc3RyaW5nID0gcmVwbGFjZShzdHJpbmcsIGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSByZXBsYWNlKHN0cmluZywgcnRyaW0sICckMScpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuICBzdGFydDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG4vLyBgdGhpc051bWJlclZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdGhpc251bWJlcnZhbHVlXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKDEuMC52YWx1ZU9mKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMicgK1xuICAnXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkYXRlVG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGF0ZS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcbnZhciBEYXRlUHJvdG90eXBlID0gRGF0ZS5wcm90b3R5cGU7XG5cbi8vIGBEYXRlLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLUBAdG9wcmltaXRpdmVcbmlmICghaGFzT3duKERhdGVQcm90b3R5cGUsIFRPX1BSSU1JVElWRSkpIHtcbiAgZGVmaW5lQnVpbHRJbihEYXRlUHJvdG90eXBlLCBUT19QUklNSVRJVkUsIGRhdGVUb1ByaW1pdGl2ZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKS5mO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciB0aGlzTnVtYmVyVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGhpcy1udW1iZXItdmFsdWUnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcblxudmFyIE5VTUJFUiA9ICdOdW1iZXInO1xudmFyIE5hdGl2ZU51bWJlciA9IGdsb2JhbFRoaXNbTlVNQkVSXTtcbnZhciBQdXJlTnVtYmVyTmFtZXNwYWNlID0gcGF0aFtOVU1CRVJdO1xudmFyIE51bWJlclByb3RvdHlwZSA9IE5hdGl2ZU51bWJlci5wcm90b3R5cGU7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgY2hhckNvZGVBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJDb2RlQXQpO1xuXG4vLyBgVG9OdW1lcmljYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9udW1lcmljXG52YXIgdG9OdW1lcmljID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcmltVmFsdWUgPSB0b1ByaW1pdGl2ZSh2YWx1ZSwgJ251bWJlcicpO1xuICByZXR1cm4gdHlwZW9mIHByaW1WYWx1ZSA9PSAnYmlnaW50JyA/IHByaW1WYWx1ZSA6IHRvTnVtYmVyKHByaW1WYWx1ZSk7XG59O1xuXG4vLyBgVG9OdW1iZXJgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b251bWJlclxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnbnVtYmVyJyk7XG4gIHZhciBmaXJzdCwgdGhpcmQsIHJhZGl4LCBtYXhDb2RlLCBkaWdpdHMsIGxlbmd0aCwgaW5kZXgsIGNvZGU7XG4gIGlmIChpc1N5bWJvbChpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgbnVtYmVyJyk7XG4gIGlmICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMikge1xuICAgIGl0ID0gdHJpbShpdCk7XG4gICAgZmlyc3QgPSBjaGFyQ29kZUF0KGl0LCAwKTtcbiAgICBpZiAoZmlyc3QgPT09IDQzIHx8IGZpcnN0ID09PSA0NSkge1xuICAgICAgdGhpcmQgPSBjaGFyQ29kZUF0KGl0LCAyKTtcbiAgICAgIGlmICh0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMCkgcmV0dXJuIE5hTjsgLy8gTnVtYmVyKCcrMHgxJykgc2hvdWxkIGJlIE5hTiwgb2xkIFY4IGZpeFxuICAgIH0gZWxzZSBpZiAoZmlyc3QgPT09IDQ4KSB7XG4gICAgICBzd2l0Y2ggKGNoYXJDb2RlQXQoaXQsIDEpKSB7XG4gICAgICAgIC8vIGZhc3QgZXF1YWwgb2YgL14wYlswMV0rJC9pXG4gICAgICAgIGNhc2UgNjY6XG4gICAgICAgIGNhc2UgOTg6XG4gICAgICAgICAgcmFkaXggPSAyO1xuICAgICAgICAgIG1heENvZGUgPSA0OTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gZmFzdCBlcXVhbCBvZiAvXjBvWzAtN10rJC9pXG4gICAgICAgIGNhc2UgNzk6XG4gICAgICAgIGNhc2UgMTExOlxuICAgICAgICAgIHJhZGl4ID0gODtcbiAgICAgICAgICBtYXhDb2RlID0gNTU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICtpdDtcbiAgICAgIH1cbiAgICAgIGRpZ2l0cyA9IHN0cmluZ1NsaWNlKGl0LCAyKTtcbiAgICAgIGxlbmd0aCA9IGRpZ2l0cy5sZW5ndGg7XG4gICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29kZSA9IGNoYXJDb2RlQXQoZGlnaXRzLCBpbmRleCk7XG4gICAgICAgIC8vIHBhcnNlSW50IHBhcnNlcyBhIHN0cmluZyB0byBhIGZpcnN0IHVuYXZhaWxhYmxlIHN5bWJvbFxuICAgICAgICAvLyBidXQgVG9OdW1iZXIgc2hvdWxkIHJldHVybiBOYU4gaWYgYSBzdHJpbmcgY29udGFpbnMgdW5hdmFpbGFibGUgc3ltYm9sc1xuICAgICAgICBpZiAoY29kZSA8IDQ4IHx8IGNvZGUgPiBtYXhDb2RlKSByZXR1cm4gTmFOO1xuICAgICAgfSByZXR1cm4gcGFyc2VJbnQoZGlnaXRzLCByYWRpeCk7XG4gICAgfVxuICB9IHJldHVybiAraXQ7XG59O1xuXG52YXIgRk9SQ0VEID0gaXNGb3JjZWQoTlVNQkVSLCAhTmF0aXZlTnVtYmVyKCcgMG8xJykgfHwgIU5hdGl2ZU51bWJlcignMGIxJykgfHwgTmF0aXZlTnVtYmVyKCcrMHgxJykpO1xuXG52YXIgY2FsbGVkV2l0aE5ldyA9IGZ1bmN0aW9uIChkdW1teSkge1xuICAvLyBpbmNsdWRlcyBjaGVjayBvbiAxLi5jb25zdHJ1Y3Rvcihmb28pIGNhc2VcbiAgcmV0dXJuIGlzUHJvdG90eXBlT2YoTnVtYmVyUHJvdG90eXBlLCBkdW1teSkgJiYgZmFpbHMoZnVuY3Rpb24gKCkgeyB0aGlzTnVtYmVyVmFsdWUoZHVtbXkpOyB9KTtcbn07XG5cbi8vIGBOdW1iZXJgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW51bWJlci1jb25zdHJ1Y3RvclxudmFyIE51bWJlcldyYXBwZXIgPSBmdW5jdGlvbiBOdW1iZXIodmFsdWUpIHtcbiAgdmFyIG4gPSBhcmd1bWVudHMubGVuZ3RoIDwgMSA/IDAgOiBOYXRpdmVOdW1iZXIodG9OdW1lcmljKHZhbHVlKSk7XG4gIHJldHVybiBjYWxsZWRXaXRoTmV3KHRoaXMpID8gaW5oZXJpdElmUmVxdWlyZWQoT2JqZWN0KG4pLCB0aGlzLCBOdW1iZXJXcmFwcGVyKSA6IG47XG59O1xuXG5OdW1iZXJXcmFwcGVyLnByb3RvdHlwZSA9IE51bWJlclByb3RvdHlwZTtcbmlmIChGT1JDRUQgJiYgIUlTX1BVUkUpIE51bWJlclByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE51bWJlcldyYXBwZXI7XG5cbiQoeyBnbG9iYWw6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCB3cmFwOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIE51bWJlcjogTnVtYmVyV3JhcHBlclxufSk7XG5cbi8vIFVzZSBgaW50ZXJuYWwvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzYCBoZWxwZXIgaW4gYGNvcmUtanNANGBcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gIGZvciAodmFyIGtleXMgPSBERVNDUklQVE9SUyA/IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTMjAxNSAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTMjAxNSBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLE1BWF9TQUZFX0lOVEVHRVIsTUlOX1NBRkVfSU5URUdFUixpc0Zpbml0ZSxpc0ludGVnZXIsaXNOYU4saXNTYWZlSW50ZWdlcixwYXJzZUZsb2F0LHBhcnNlSW50LCcgK1xuICAgIC8vIEVTTmV4dFxuICAgICdmcm9tU3RyaW5nLHJhbmdlJ1xuICApLnNwbGl0KCcsJyksIGogPSAwLCBrZXk7IGtleXMubGVuZ3RoID4gajsgaisrKSB7XG4gICAgaWYgKGhhc093bihzb3VyY2UsIGtleSA9IGtleXNbal0pICYmICFoYXNPd24odGFyZ2V0LCBrZXkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuXG5pZiAoSVNfUFVSRSAmJiBQdXJlTnVtYmVyTmFtZXNwYWNlKSBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHBhdGhbTlVNQkVSXSwgUHVyZU51bWJlck5hbWVzcGFjZSk7XG5pZiAoRk9SQ0VEIHx8IElTX1BVUkUpIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMocGF0aFtOVU1CRVJdLCBOYXRpdmVOdW1iZXIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBPYmplY3QuZGVmaW5lUHJvcGVydHkgIT09IGRlZmluZVByb3BlcnR5LCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBkZWZpbmVQcm9wZXJ0eTogZGVmaW5lUHJvcGVydHlcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC1kZWZpbmUnKTtcbnZhciBkZWZpbmVTeW1ib2xUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtZGVmaW5lLXRvLXByaW1pdGl2ZScpO1xuXG4vLyBgU3ltYm9sLnRvUHJpbWl0aXZlYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wudG9wcmltaXRpdmVcbmRlZmluZVdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLUBAdG9wcmltaXRpdmVcbmRlZmluZVN5bWJvbFRvUHJpbWl0aXZlKCk7XG4iXSwibmFtZXMiOlsiJCIsImN0eCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibXlDaGFydCIsIkNoYXJ0IiwidHlwZSIsImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsIl9kZWZpbmVQcm9wZXJ0eSIsImxhYmVsIiwiYm9yZGVyV2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInBsdWdpbnMiLCJsZWdlbmQiLCJmb250Q29sb3IiLCJzY2FsZXMiLCJ4IiwidGlja3MiLCJkaXNwbGF5IiwiZ3JpZExpbmVzIiwiY29sb3IiLCJ5Iiwic2NhbGVMYWJlbCIsImxhYmVsU3RyaW5nIiwiYmVnaW5BdFplcm8iLCJzdGVwU2l6ZSIsImZpbGwiLCJsaW5lVGVuc2lvbiIsInBvaW50SGlnaGxpZ2h0U3Ryb2tlIiwidG9vbHRpcHMiLCJtb2RlIiwiaW50ZXJzZWN0IiwiaG92ZXIiLCJkYXRhcGllIiwib3B0aW9ucGllIiwiYW5pbWF0aW9uIiwiYW5pbWF0ZVNjYWxlIiwiYW5pbWF0ZVJvdGF0ZSIsImN0eDYiLCJteVBpZUNoYXJ0NiIsImN0eDciLCJteVBpZUNoYXJ0NyIsInNjYWxlIiwiYW5nbGVMaW5lcyIsInBvaW50TGFiZWxzIiwiaG92ZXJCYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9