(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css_icon_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/css/icon-list.css */ "./assets/styles/css/icon-list.css");
/* harmony import */ var _styles_css_plugin_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/css/plugin.css */ "./assets/styles/css/plugin.css");
/* harmony import */ var _styles_css_icons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/css/icons.css */ "./assets/styles/css/icons.css");
/* harmony import */ var _styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/scss/style.scss */ "./assets/styles/scss/style.scss");
/* harmony import */ var _web_fonts_font_awesome_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-fonts/font-awesome/font-awesome.min.css */ "./assets/web-fonts/font-awesome/font-awesome.min.css");
/* harmony import */ var _styles_css_plugins_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/css/plugins.css */ "./assets/styles/css/plugins.css");
/* harmony import */ var _styles_switchercss_switcher_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/switchercss/switcher.css */ "./assets/styles/switchercss/switcher.css");
/* harmony import */ var _styles_switchercss_demo_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/switchercss/demo.css */ "./assets/styles/switchercss/demo.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _components_Message_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Message.vue */ "./assets/components/Message.vue");
/* harmony import */ var _components_Suggestion_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Suggestion.vue */ "./assets/components/Suggestion.vue");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)










__webpack_require__(/*! ./js/parametrage/add-collection-repas-detail */ "./assets/js/parametrage/add-collection-repas-detail.js");
__webpack_require__(/*! ./js/parametrage/add-collection-page-imageBanniere */ "./assets/js/parametrage/add-collection-page-imageBanniere.js");
__webpack_require__(/*! ./js/parametrage/add-collection-section-detailSection */ "./assets/js/parametrage/add-collection-section-detailSection.js");
__webpack_require__(/*! ./js/parametrage/add-collection-product-price */ "./assets/js/parametrage/add-collection-product-price.js");
__webpack_require__(/*! ./js/parametrage/add-collection-avantage-ticket */ "./assets/js/parametrage/add-collection-avantage-ticket.js");
$('select.select2').select2({
  width: '100%'
});

// const $ = require('./plugins/jquery/jquery.min');
// global.$ = global.jQuery = $;
// global.jQuery = $;
//
// import toastr from 'toastr';
// global.toastr = toastr;

// start the Stimulus application
// import './bootstrap';





var app = (0,vue__WEBPACK_IMPORTED_MODULE_9__.createApp)(_components_Message_vue__WEBPACK_IMPORTED_MODULE_10__["default"]);
var app2 = (0,vue__WEBPACK_IMPORTED_MODULE_9__.createApp)(_components_Suggestion_vue__WEBPACK_IMPORTED_MODULE_11__["default"]);
app.use((0,pinia__WEBPACK_IMPORTED_MODULE_12__.createPinia)());
app.mount('#appMessage');
app2.use((0,pinia__WEBPACK_IMPORTED_MODULE_12__.createPinia)());
app2.mount('#appSuggestion');

/***/ }),

/***/ "./assets/js/parametrage/add-collection-avantage-ticket.js":
/*!*****************************************************************!*\
  !*** ./assets/js/parametrage/add-collection-avantage-ticket.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
$(document).ready(function () {
  var addFormToCollectionAvantageTicket = function addFormToCollectionAvantageTicket() {
    $('#AddAvantageTypeTicket').click(function (e) {
      var list = $($(this).attr('data-list-selector'));
      var $widget = $('#widget-counter-avantage-ticket');
      var index = +$widget.val();
      // Try to find the counter of the list or use the length of the list

      // grab the prototype template
      var newWidget = list.attr('data-prototype');
      // replace the "__name__" used in the id and name of the prototype
      // with a number that's unique to your emails
      // end name attribute looks like name="contact[emails][2]"
      newWidget = newWidget.replace(/__name__/g, index);
      // Increase the counter
      $widget.val(index + 1);
      // And stores it, the length cannot be used if deleting widgets is allowed
      list.data('widget-counter-avantage-ticket', index);

      // create a new list element and add it to the list
      $('#table-collection-avantage-ticket tbody').append(newWidget);
      // $('.select2').select2({width: '100%', theme: 'bootstrap'});
      addTagFormDeleteLinkAvantageTicket(newWidget);
    });
  };
  var addTagFormDeleteLinkAvantageTicket = function addTagFormDeleteLinkAvantageTicket() {
    $('body').on('click', '.delete-avantage-ticket', function () {
      var target = $(this).attr('data-target');
      $(target).remove();
    });
  };
  addFormToCollectionAvantageTicket();
  addTagFormDeleteLinkAvantageTicket();
});

/***/ }),

/***/ "./assets/js/parametrage/add-collection-page-imageBanniere.js":
/*!********************************************************************!*\
  !*** ./assets/js/parametrage/add-collection-page-imageBanniere.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
$(document).ready(function () {
  var addFormToCollectionPageBanniere = function addFormToCollectionPageBanniere() {
    $('#AddImageBanniere').click(function (e) {
      var list = $($(this).attr('data-list-selector'));
      var $widget = $('#widget-counter-image-bannieres');
      var index = +$widget.val();
      // Try to find the counter of the list or use the length of the list

      // grab the prototype template
      var newWidget = list.attr('data-prototype');
      // replace the "__name__" used in the id and name of the prototype
      // with a number that's unique to your emails
      // end name attribute looks like name="contact[emails][2]"
      newWidget = newWidget.replace(/__name__/g, index);
      // Increase the counter
      $widget.val(index + 1);
      // And stores it, the length cannot be used if deleting widgets is allowed
      list.data('widget-counter-image-bannieres', index);

      // create a new list element and add it to the list
      $('#table-collection-image-bannieres').append(newWidget);
      $('.dropify').dropify({
        messages: {
          'default': 'Glissez-déposez un fichier ici ou cliquez sur',
          'replace': 'Glisser-déposer ou cliquer pour remplacer',
          'remove': 'Supprimer',
          'error': 'Ooops, quelque chose d\'erroné a été ajouté.'
        },
        error: {
          'fileSize': 'The file size is too big (5M max).'
        }
      });
      addTagFormDeleteLinkPageBanniere(newWidget);
    });
  };
  var addTagFormDeleteLinkPageBanniere = function addTagFormDeleteLinkPageBanniere() {
    $('body').on('click', '.delete-image-banniere', function () {
      var target = $(this).attr('data-target');
      $(target).remove();
    });
  };
  addFormToCollectionPageBanniere();
  addTagFormDeleteLinkPageBanniere();
});

/***/ }),

/***/ "./assets/js/parametrage/add-collection-product-price.js":
/*!***************************************************************!*\
  !*** ./assets/js/parametrage/add-collection-product-price.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
$(document).ready(function () {
  var addFormToCollectionProductPrice = function addFormToCollectionProductPrice() {
    $('#AddPriceProduct').click(function (e) {
      var list = $($(this).attr('data-list-selector'));
      var $widget = $('#widget-counter-price-produits');
      var index = +$widget.val();
      // Try to find the counter of the list or use the length of the list

      // grab the prototype template
      var newWidget = list.attr('data-prototype');
      // replace the "__name__" used in the id and name of the prototype
      // with a number that's unique to your emails
      // end name attribute looks like name="contact[emails][2]"
      newWidget = newWidget.replace(/__name__/g, index);
      // Increase the counter
      $widget.val(index + 1);
      // And stores it, the length cannot be used if deleting widgets is allowed
      list.data('widget-counter-price-produits', index);

      // create a new list element and add it to the list
      $('#table-collection-price-produits tbody').append(newWidget);
      // $('.select2').select2({width: '100%', theme: 'bootstrap'});
      addTagFormDeleteLinkProductPrice(newWidget);
    });
  };
  var addTagFormDeleteLinkProductPrice = function addTagFormDeleteLinkProductPrice() {
    $('body').on('click', '.delete-product-price', function () {
      var target = $(this).attr('data-target');
      $(target).remove();
    });
  };
  addFormToCollectionProductPrice();
  addTagFormDeleteLinkProductPrice();
});

/***/ }),

/***/ "./assets/js/parametrage/add-collection-repas-detail.js":
/*!**************************************************************!*\
  !*** ./assets/js/parametrage/add-collection-repas-detail.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
$(document).ready(function () {
  var addFormToCollectionDetailRepas = function addFormToCollectionDetailRepas() {
    $('#AddDetailRepas').click(function (e) {
      var list = $($(this).attr('data-list-selector'));
      var $widget = $('#widget-counter-detail-repas');
      var index = +$widget.val();
      // Try to find the counter of the list or use the length of the list

      // grab the prototype template
      var newWidget = list.attr('data-prototype');
      // replace the "__name__" used in the id and name of the prototype
      // with a number that's unique to your emails
      // end name attribute looks like name="contact[emails][2]"
      newWidget = newWidget.replace(/__name__/g, index);
      // Increase the counter
      $widget.val(index + 1);
      // And stores it, the length cannot be used if deleting widgets is allowed
      list.data('widget-counter-detail-repas', index);

      // create a new list element and add it to the list
      $('#table-collection-detail-repas').append(newWidget);
      $('.dropify').dropify({
        messages: {
          'default': 'Glissez-déposez un fichier ici ou cliquez sur',
          'replace': 'Glisser-déposer ou cliquer pour remplacer',
          'remove': 'Supprimer',
          'error': 'Ooops, quelque chose d\'erroné a été ajouté.'
        },
        error: {
          'fileSize': 'The file size is too big (15M max).'
        }
      });
      $('.select2').select2();
      addTagFormDeleteLinkDetailRepas(newWidget);
    });
  };
  var addTagFormDeleteLinkDetailRepas = function addTagFormDeleteLinkDetailRepas() {
    $('body').on('click', '.delete-detail-repas', function () {
      var target = $(this).attr('data-target');
      $(target).remove();
    });
  };
  addFormToCollectionDetailRepas();
  addTagFormDeleteLinkDetailRepas();
});

/***/ }),

/***/ "./assets/js/parametrage/add-collection-section-detailSection.js":
/*!***********************************************************************!*\
  !*** ./assets/js/parametrage/add-collection-section-detailSection.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
$(document).ready(function () {
  var addFormToCollectionSectionDetailSection = function addFormToCollectionSectionDetailSection() {
    $('#AddDetailSections').click(function (e) {
      var list = $($(this).attr('data-list-selector'));
      var $widget = $('#widget-counter-detail-sections');
      var index = +$widget.val();
      // Try to find the counter of the list or use the length of the list

      // grab the prototype template
      var newWidget = list.attr('data-prototype');
      // replace the "__name__" used in the id and name of the prototype
      // with a number that's unique to your emails
      // end name attribute looks like name="contact[emails][2]"
      newWidget = newWidget.replace(/__name__/g, index);
      // Increase the counter
      $widget.val(index + 1);
      // And stores it, the length cannot be used if deleting widgets is allowed
      list.data('widget-counter-detail-sections', index);

      // create a new list element and add it to the list
      $('#table-collection-detail-sections').append(newWidget);
      $('.dropify').dropify({
        messages: {
          'default': 'Glissez-déposez un fichier ici ou cliquez sur',
          'replace': 'Glisser-déposer ou cliquer pour remplacer',
          'remove': 'Supprimer',
          'error': 'Ooops, quelque chose d\'erroné a été ajouté.'
        },
        error: {
          'fileSize': 'The file size is too big (5M max).'
        }
      });
      addTagFormDeleteLinkSectionDetailSection(newWidget);
    });
  };
  var addTagFormDeleteLinkSectionDetailSection = function addTagFormDeleteLinkSectionDetailSection() {
    $('body').on('click', '.delete-detail-sections', function () {
      var target = $(this).attr('data-target');
      $(target).remove();
    });
  };
  addFormToCollectionSectionDetailSection();
  addTagFormDeleteLinkSectionDetailSection();
});

/***/ }),

/***/ "./assets/stores/messageStore.js":
/*!***************************************!*\
  !*** ./assets/stores/messageStore.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMessageStore: () => (/* binding */ useMessageStore)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");



var useMessageStore = (0,pinia__WEBPACK_IMPORTED_MODULE_2__.defineStore)('message', function () {
  var idStore = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  var comments = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  var next = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  var prev = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  var q = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  var totalComments = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  var page = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  var activeComment = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  var subject = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  var msg = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  var maxPage = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
    return Math.ceil(+totalComments.value / 10);
  });
  var paginate = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
    var start = (page.value - 1) * 10 + 1;
    var end = page.value * 10;
    if (end > totalComments.value) {
      end = totalComments.value; // Ne dépasse pas le nombre total d'items
    }
    if (totalComments.value === 0) {
      start = 0;
      end = 0;
    }
    return "".concat(start, " - ").concat(end);
  });
  return {
    idStore: idStore,
    comments: comments,
    prev: prev,
    next: next,
    q: q,
    totalComments: totalComments,
    page: page,
    paginate: paginate,
    maxPage: maxPage,
    activeComment: activeComment,
    subject: subject,
    msg: msg
  };
});

/***/ }),

/***/ "./assets/stores/suggestionStore.js":
/*!******************************************!*\
  !*** ./assets/stores/suggestionStore.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSuggestionStore: () => (/* binding */ useSuggestionStore)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");



var useSuggestionStore = (0,pinia__WEBPACK_IMPORTED_MODULE_2__.defineStore)('suggestion', function () {
  var idStore = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  var comments = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  var next = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  var prev = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  var q = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  var totalComments = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  var page = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  var activeComment = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  var subject = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  var msg = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  var maxPage = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
    return Math.ceil(+totalComments.value / 10);
  });
  var paginate = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
    var start = (page.value - 1) * 10 + 1;
    var end = page.value * 10;
    if (end > totalComments.value) {
      end = totalComments.value; // Ne dépasse pas le nombre total d'items
    }
    if (totalComments.value === 0) {
      start = 0;
      end = 0;
    }
    return "".concat(start, " - ").concat(end);
  });
  return {
    idStore: idStore,
    comments: comments,
    prev: prev,
    next: next,
    q: q,
    totalComments: totalComments,
    page: page,
    paginate: paginate,
    maxPage: maxPage,
    activeComment: activeComment,
    subject: subject,
    msg: msg
  };
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Message.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Message.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stores_messageStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/messageStore */ "./assets/stores/messageStore.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/formatDistanceToNow.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/locale/fr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Message",
  data: function data() {
    return {
      store: (0,_stores_messageStore__WEBPACK_IMPORTED_MODULE_7__.useMessageStore)(),
      selectedComment: [],
      isInbox: true,
      isData: false,
      isReply: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    fetch("/api/messages?order[createdAt]=desc", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        // Autres en-têtes si nécessaire
      },
      credentials: 'omit' // Utilisez 'omit' pour ne pas envoyer les cookies
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      var _json$view$next, _json$view$previous;
      _this.store.page = 1;
      _this.store.comments = json["member"];
      _this.store.totalComments = +json["totalItems"];
      _this.store.next = (_json$view$next = json["view"]["next"]) !== null && _json$view$next !== void 0 ? _json$view$next : json["view"]["last"];
      _this.store.prev = (_json$view$previous = json["view"]["previous"]) !== null && _json$view$previous !== void 0 ? _json$view$previous : json["view"]["first"];
      _this.isData = _this.store.totalComments > 0;
    });
  },
  methods: {
    paginate: function paginate(link, index) {
      var _this2 = this;
      fetch(link, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          // Autres en-têtes si nécessaire
        },
        credentials: 'omit' // Utilisez 'omit' pour ne pas envoyer les cookies
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        var _json$view$next2, _json$view$previous2;
        _this2.store.page = _this2.store.page + index;
        _this2.store.page = _this2.store.page === 0 ? 1 : _this2.store.page > _this2.store.maxPage ? _this2.store.maxPage : _this2.store.page;
        _this2.store.comments = json["member"];
        _this2.store.totalComments = +json["totalItems"];
        _this2.store.next = (_json$view$next2 = json["view"]["next"]) !== null && _json$view$next2 !== void 0 ? _json$view$next2 : json["view"]["last"];
        _this2.store.prev = (_json$view$previous2 = json["view"]["previous"]) !== null && _json$view$previous2 !== void 0 ? _json$view$previous2 : json["view"]["first"];
        _this2.isData = _this2.store.totalComments > 0;
      });
    },
    refresh: function refresh() {
      var _this3 = this;
      fetch("/api/messages?order[createdAt]=desc", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          // Autres en-têtes si nécessaire
        },
        credentials: 'omit' // Utilisez 'omit' pour ne pas envoyer les cookies
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        var _json$view$next3, _json$view$previous3;
        _this3.store.page = 1;
        _this3.store.comments = json["member"];
        _this3.store.totalComments = +json["totalItems"];
        _this3.store.next = (_json$view$next3 = json["view"]["next"]) !== null && _json$view$next3 !== void 0 ? _json$view$next3 : json["view"]["last"];
        _this3.store.prev = (_json$view$previous3 = json["view"]["previous"]) !== null && _json$view$previous3 !== void 0 ? _json$view$previous3 : json["view"]["first"];
        _this3.isData = _this3.store.totalComments > 0;
      });
    },
    goInbox: function goInbox() {
      this.isInbox = true;
      this.isReply = false;
    },
    cancelReply: function cancelReply() {
      this.isInbox = true;
      this.isReply = false;
    },
    goDetail: function goDetail(comment) {
      this.store.activeComment = comment;
      this.isInbox = false;
    },
    goReply: function goReply(comment) {
      this.store.activeComment = comment;
      this.isInbox = false;
      this.isReply = true;
    },
    formatDate: function formatDate(date) {
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.format)(date, 'dd MMMM yyyy HH:mm:ss', {
        locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_10__.fr
      }); // Exemple : 31 octobre 2024 14:30:45
    },
    truncater: function truncater(value, length) {
      if (!value) return '';
      if (value.length <= length) return value;
      return value.substring(0, length) + '...';
    },
    ago: function ago(value) {
      if (!value) return '';
      // Utilisation de la fonction date-fns pour formater la date en fonction du temps écoulé
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.formatDistanceToNow)(new Date(value), {
        addSuffix: true,
        locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_10__.fr
      });
    },
    search: function search(q) {
      var _this4 = this;
      fetch("/api/messages?q=" + q + "&order[createdAt]=desc", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          // Autres en-têtes si nécessaire
        },
        credentials: 'omit' // Utilisez 'omit' pour ne pas envoyer les cookies
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        var _json$view$next4, _json$view$previous4;
        _this4.store.page = 1;
        _this4.store.comments = json["member"];
        _this4.store.totalComments = +json["totalItems"];
        _this4.store.next = (_json$view$next4 = json["view"]["next"]) !== null && _json$view$next4 !== void 0 ? _json$view$next4 : json["view"]["last"];
        _this4.store.prev = (_json$view$previous4 = json["view"]["previous"]) !== null && _json$view$previous4 !== void 0 ? _json$view$previous4 : json["view"]["first"];
        _this4.isData = _this4.store.totalComments > 0;
      });
    },
    "delete": function _delete() {
      var _this5 = this;
      var storeId = +this.store.idStore;
      var item;
      if (this.isInbox) {
        if (this.selectedComment.length > 0) {
          item = this.selectedComment;
        }
      } else {
        item = this.store.activeComment.id;
      }
      if (item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
          title: 'En êtes vous sûre?',
          text: "Cette action est irréversible!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, supprimer !',
          cancelButtonText: 'Non, Annuler!',
          customClass: {
            confirmButton: 'btn btn-success mt-2',
            cancelButton: 'btn btn-danger ms-2 mt-2'
          },
          buttonsStyling: false
        }).then(function (result) {
          if (result.value) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
              title: '<div class="spinner-border text-primary m-1" role="status">\n' + '            <span class="sr-only">Loading...</span>\n' + '          </div>',
              icon: 'info',
              showCloseButton: false,
              showCancelButton: false,
              showConfirmButton: false
            });
            var data = {
              items: item // Envoi le tableau sous la clé 'items'
            };
            fetch('/admin/messages/delete', {
              method: 'POST',
              // Méthode HTTP
              headers: {
                'Content-Type': 'application/json' // Indiquer le type de contenu
              },
              body: JSON.stringify(data) // Convertir l'objet en chaîne JSON
            }).then(function (response) {
              if (!response.ok) {
                throw new Error('Erreur dans la requête: ' + response.statusText);
              }
              return response.json(); // Traiter la réponse en JSON
            }).then(function (data) {
              fetch("/api/messages?order[createdAt]=desc", {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                  // Autres en-têtes si nécessaire
                },
                credentials: 'omit' // Utilisez 'omit' pour ne pas envoyer les cookies
              }).then(function (response) {
                return response.json();
              }).then(function (json) {
                var _json$view$next5, _json$view$previous5;
                _this5.store.page = 1;
                _this5.store.comments = json["member"];
                _this5.store.totalComments = +json["totalItems"];
                _this5.store.next = (_json$view$next5 = json["view"]["next"]) !== null && _json$view$next5 !== void 0 ? _json$view$next5 : json["view"]["last"];
                _this5.store.prev = (_json$view$previous5 = json["view"]["previous"]) !== null && _json$view$previous5 !== void 0 ? _json$view$previous5 : json["view"]["first"];
                _this5.isData = _this5.store.totalComments > 0;
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                  title: 'Succès!',
                  text: 'Le commentaire a été supprimé',
                  icon: 'success'
                }); // Gérer la réponse
              });
            })["catch"](function (error) {
              console.error('Erreur:', error); // Gérer les erreurs
            });
          } else if (
          // Read more about handling dismissals
          result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().DismissReason).cancel) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
              title: 'Annulé',
              text: 'Aucune action n\'a été éffectuée :)',
              icon: 'error'
            });
          }
        });
      }
    },
    reply: function reply() {
      var _this6 = this;
      sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
        title: '<div class="spinner-border text-primary m-1" role="status">\n' + '            <span class="sr-only">Loading...</span>\n' + '          </div>',
        icon: 'info',
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false
      });
      var data = {
        to: this.store.activeComment.email,
        subject: this.store.subject,
        message: this.store.msg
      };
      fetch('/admin/messages/reply', {
        method: 'POST',
        // Méthode HTTP
        headers: {
          'Content-Type': 'application/json' // Indiquer le type de contenu
        },
        body: JSON.stringify(data) // Convertir l'objet en chaîne JSON
      }).then(function (response) {
        if (!response.ok) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
            title: 'Erreur',
            text: 'Vérifiez votre message :)',
            icon: 'error'
          });
          throw new Error('Erreur dans la requête: ' + response.statusText);
        }
        return response.json(); // Traiter la réponse en JSON
      }).then(function (data) {
        fetch("/api/messages?order[createdAt]=desc", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
            // Autres en-têtes si nécessaire
          },
          credentials: 'omit' // Utilisez 'omit' pour ne pas envoyer les cookies
        }).then(function (response) {
          return response.json();
        }).then(function (json) {
          var _json$view$next6, _json$view$previous6;
          _this6.store.page = 1;
          _this6.store.comments = json["member"];
          _this6.store.totalComments = +json["totalItems"];
          _this6.store.next = (_json$view$next6 = json["view"]["next"]) !== null && _json$view$next6 !== void 0 ? _json$view$next6 : json["view"]["last"];
          _this6.store.prev = (_json$view$previous6 = json["view"]["previous"]) !== null && _json$view$previous6 !== void 0 ? _json$view$previous6 : json["view"]["first"];
          _this6.isData = _this6.store.totalComments > 0;
          _this6.store.msg = "";
          _this6.store.subject = "";
          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
            title: 'Succès!',
            text: 'La réponse a été envoyé',
            icon: 'success'
          }); // Gérer la réponse
          _this6.goInbox();
        });
      })["catch"](function (error) {
        console.error('Erreur:', error); // Gérer les erreurs
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Suggestion.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Suggestion.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stores_suggestionStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/suggestionStore */ "./assets/stores/suggestionStore.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/formatDistanceToNow.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/locale/fr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Suggestion",
  data: function data() {
    return {
      store: (0,_stores_suggestionStore__WEBPACK_IMPORTED_MODULE_7__.useSuggestionStore)(),
      selectedComment: [],
      isInbox: true,
      isData: false,
      isReply: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    fetch("/api/suggestions?order[createdAt]=desc", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        // Autres en-têtes si nécessaire
      },
      credentials: 'omit' // Utilisez 'omit' pour ne pas envoyer les cookies
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      var _json$view$next, _json$view$previous;
      _this.store.page = 1;
      _this.store.comments = json["member"];
      _this.store.totalComments = +json["totalItems"];
      _this.store.next = (_json$view$next = json["view"]["next"]) !== null && _json$view$next !== void 0 ? _json$view$next : json["view"]["last"];
      _this.store.prev = (_json$view$previous = json["view"]["previous"]) !== null && _json$view$previous !== void 0 ? _json$view$previous : json["view"]["first"];
      _this.isData = _this.store.totalComments > 0;
    });
  },
  methods: {
    paginate: function paginate(link, index) {
      var _this2 = this;
      fetch(link, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          // Autres en-têtes si nécessaire
        },
        credentials: 'omit' // Utilisez 'omit' pour ne pas envoyer les cookies
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        var _json$view$next2, _json$view$previous2;
        _this2.store.page = _this2.store.page + index;
        _this2.store.page = _this2.store.page === 0 ? 1 : _this2.store.page > _this2.store.maxPage ? _this2.store.maxPage : _this2.store.page;
        _this2.store.comments = json["member"];
        _this2.store.totalComments = +json["totalItems"];
        _this2.store.next = (_json$view$next2 = json["view"]["next"]) !== null && _json$view$next2 !== void 0 ? _json$view$next2 : json["view"]["last"];
        _this2.store.prev = (_json$view$previous2 = json["view"]["previous"]) !== null && _json$view$previous2 !== void 0 ? _json$view$previous2 : json["view"]["first"];
        _this2.isData = _this2.store.totalComments > 0;
      });
    },
    refresh: function refresh() {
      var _this3 = this;
      fetch("/api/suggestions?order[createdAt]=desc", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          // Autres en-têtes si nécessaire
        },
        credentials: 'omit' // Utilisez 'omit' pour ne pas envoyer les cookies
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        var _json$view$next3, _json$view$previous3;
        _this3.store.page = 1;
        _this3.store.comments = json["member"];
        _this3.store.totalComments = +json["totalItems"];
        _this3.store.next = (_json$view$next3 = json["view"]["next"]) !== null && _json$view$next3 !== void 0 ? _json$view$next3 : json["view"]["last"];
        _this3.store.prev = (_json$view$previous3 = json["view"]["previous"]) !== null && _json$view$previous3 !== void 0 ? _json$view$previous3 : json["view"]["first"];
        _this3.isData = _this3.store.totalComments > 0;
      });
    },
    goInbox: function goInbox() {
      this.isInbox = true;
      this.isReply = false;
    },
    goDetail: function goDetail(comment) {
      this.store.activeComment = comment;
      this.isInbox = false;
    },
    formatDate: function formatDate(date) {
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.format)(date, 'dd MMMM yyyy HH:mm:ss', {
        locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_10__.fr
      }); // Exemple : 31 octobre 2024 14:30:45
    },
    truncater: function truncater(value, length) {
      if (!value) return '';
      if (value.length <= length) return value;
      return value.substring(0, length) + '...';
    },
    ago: function ago(value) {
      if (!value) return '';
      // Utilisation de la fonction date-fns pour formater la date en fonction du temps écoulé
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.formatDistanceToNow)(new Date(value), {
        addSuffix: true,
        locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_10__.fr
      });
    },
    search: function search(q) {
      var _this4 = this;
      fetch("/api/suggestions?content=" + q + "&order[createdAt]=desc", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          // Autres en-têtes si nécessaire
        },
        credentials: 'omit' // Utilisez 'omit' pour ne pas envoyer les cookies
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        var _json$view$next4, _json$view$previous4;
        _this4.store.page = 1;
        _this4.store.comments = json["member"];
        _this4.store.totalComments = +json["totalItems"];
        _this4.store.next = (_json$view$next4 = json["view"]["next"]) !== null && _json$view$next4 !== void 0 ? _json$view$next4 : json["view"]["last"];
        _this4.store.prev = (_json$view$previous4 = json["view"]["previous"]) !== null && _json$view$previous4 !== void 0 ? _json$view$previous4 : json["view"]["first"];
        _this4.isData = _this4.store.totalComments > 0;
      });
    },
    "delete": function _delete() {
      var _this5 = this;
      var item;
      if (this.isInbox) {
        if (this.selectedComment.length > 0) {
          item = this.selectedComment;
        }
      } else {
        item = this.store.activeComment.id;
      }
      if (item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
          title: 'En êtes vous sûre?',
          text: "Cette action est irréversible!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, supprimer !',
          cancelButtonText: 'Non, Annuler!',
          customClass: {
            confirmButton: 'btn btn-success mt-2',
            cancelButton: 'btn btn-danger ms-2 mt-2'
          },
          buttonsStyling: false
        }).then(function (result) {
          if (result.value) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
              title: '<div class="spinner-border text-primary m-1" role="status">\n' + '            <span class="sr-only">Loading...</span>\n' + '          </div>',
              icon: 'info',
              showCloseButton: false,
              showCancelButton: false,
              showConfirmButton: false
            });
            var data = {
              items: item // Envoi le tableau sous la clé 'items'
            };
            fetch('/admin/suggestion/delete', {
              method: 'POST',
              // Méthode HTTP
              headers: {
                'Content-Type': 'application/json' // Indiquer le type de contenu
              },
              body: JSON.stringify(data) // Convertir l'objet en chaîne JSON
            }).then(function (response) {
              if (!response.ok) {
                throw new Error('Erreur dans la requête: ' + response.statusText);
              }
              return response.json(); // Traiter la réponse en JSON
            }).then(function (data) {
              fetch("/api/suggestions?order[createdAt]=desc", {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                  // Autres en-têtes si nécessaire
                },
                credentials: 'omit' // Utilisez 'omit' pour ne pas envoyer les cookies
              }).then(function (response) {
                return response.json();
              }).then(function (json) {
                var _json$view$next5, _json$view$previous5;
                _this5.store.page = 1;
                _this5.store.comments = json["member"];
                _this5.store.totalComments = +json["totalItems"];
                _this5.store.next = (_json$view$next5 = json["view"]["next"]) !== null && _json$view$next5 !== void 0 ? _json$view$next5 : json["view"]["last"];
                _this5.store.prev = (_json$view$previous5 = json["view"]["previous"]) !== null && _json$view$previous5 !== void 0 ? _json$view$previous5 : json["view"]["first"];
                _this5.isData = _this5.store.totalComments > 0;
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                  title: 'Succès!',
                  text: 'Les suggestions a été supprimé',
                  icon: 'success'
                }); // Gérer la réponse
              });
            })["catch"](function (error) {
              console.error('Erreur:', error); // Gérer les erreurs
            });
          } else if (
          // Read more about handling dismissals
          result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().DismissReason).cancel) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
              title: 'Annulé',
              text: 'Aucune action n\'a été éffectuée :)',
              icon: 'error'
            });
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Message.vue?vue&type=template&id=ebdccd48":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Message.vue?vue&type=template&id=ebdccd48 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");



var _hoisted_1 = {
  "class": "row row-sm"
};
var _hoisted_2 = {
  key: 0,
  "class": "col-xl-12 col-lg-12 main-content-body-mail1"
};
var _hoisted_3 = {
  "class": "card custom-card mail-container task-container overflow-hidden"
};
var _hoisted_4 = {
  "class": "inbox-body p-4"
};
var _hoisted_5 = {
  "class": "input-group main-mail-search"
};
var _hoisted_6 = {
  "class": "input-group-btn"
};
var _hoisted_7 = {
  "class": "mail-option mt-4"
};
var _hoisted_8 = {
  "class": "btn-group hidden-phone"
};
var _hoisted_9 = {
  "class": "dropdown-menu"
};
var _hoisted_10 = {
  "class": "unstyled inbox-pagination"
};
var _hoisted_11 = {
  "class": "table-responsive"
};
var _hoisted_12 = {
  "class": "table table-inbox text-md-nowrap table-hover text-nowrap"
};
var _hoisted_13 = {
  "class": ""
};
var _hoisted_14 = {
  "class": "inbox-small-cells"
};
var _hoisted_15 = {
  "class": "custom-control custom-checkbox mb-0"
};
var _hoisted_16 = ["id", "value"];
var _hoisted_17 = ["onClick"];
var _hoisted_18 = ["onClick"];
var _hoisted_19 = ["onClick"];
var _hoisted_20 = {
  "class": "text-center ms-3 mb-4"
};
var _hoisted_21 = {
  "class": "row row-sm"
};
var _hoisted_22 = {
  "class": "pagination justify-content-end"
};
var _hoisted_23 = {
  "class": "page-item"
};
var _hoisted_24 = {
  "class": "page-item"
};
var _hoisted_25 = {
  key: 0,
  "class": "row row-sm"
};
var _hoisted_26 = {
  "class": "col-lg-12 col-xl-12 col-md-12"
};
var _hoisted_27 = {
  "class": "card custom-card"
};
var _hoisted_28 = {
  "class": "card-body h-100"
};
var _hoisted_29 = {
  "class": "email-media"
};
var _hoisted_30 = {
  "class": "mb-4 d-lg-flex"
};
var _hoisted_31 = {
  "class": "ms-auto d-none d-md-flex fs-18"
};
var _hoisted_32 = {
  "class": "media mt-0"
};
var _hoisted_33 = {
  "class": "main-img-user avatar-md me-3 online"
};
var _hoisted_34 = ["src"];
var _hoisted_35 = {
  "class": "media-body tx-inverse"
};
var _hoisted_36 = {
  "class": "float-end d-none d-md-flex fs-15"
};
var _hoisted_37 = {
  "class": "me-3"
};
var _hoisted_38 = {
  "class": "media-title font-weight-normal"
};
var _hoisted_39 = {
  "class": "tx-18 tx-medium"
};
var _hoisted_40 = {
  "class": "mb-0 text-muted"
};
var _hoisted_41 = {
  "class": "me-2 d-md-none"
};
var _hoisted_42 = {
  "class": "eamil-body"
};
var _hoisted_43 = {
  "class": "card-footer"
};
var _hoisted_44 = {
  key: 1,
  "class": "row row-sm"
};
var _hoisted_45 = {
  "class": "col-lg-12 col-xl-12 col-md-12"
};
var _hoisted_46 = {
  "class": "card custom-card"
};
var _hoisted_47 = {
  "class": "card-body"
};
var _hoisted_48 = {
  "class": "form-group"
};
var _hoisted_49 = {
  "class": "row align-items-center"
};
var _hoisted_50 = {
  "class": "col-sm-9 col-xl-10"
};
var _hoisted_51 = {
  "class": "form-group"
};
var _hoisted_52 = {
  "class": "row align-items-center"
};
var _hoisted_53 = {
  "class": "col-sm-9 col-xl-10"
};
var _hoisted_54 = {
  "class": "form-group"
};
var _hoisted_55 = {
  "class": "row"
};
var _hoisted_56 = {
  "class": "col-sm-9 col-xl-10"
};
var _hoisted_57 = {
  "class": "card-footer d-sm-flex"
};
var _hoisted_58 = {
  "class": "btn-list ms-auto"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_1, [$data.isInbox ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("input", {
    "class": "form-control",
    placeholder: "Rechercher Message...",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _this.store.q = $event;
    }),
    type: "text"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelText, this.store.q]]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("span", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("button", {
    "class": "btn btn-primary",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function ($event) {
      return $options.search(_this.store.q);
    }, ["prevent"])),
    type: "button"
  }, _cache[13] || (_cache[13] = [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("span", {
    "class": "input-group-btn"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("i", {
    "class": "fa fa-search"
  })], -1 /* HOISTED */)]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_8, [_cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("a", {
    "data-bs-toggle": "dropdown",
    href: "javascript:;",
    "class": "btn mini blue",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)(" Plus "), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("i", {
    "class": "fe fe-chevron-down"
  })], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("ul", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("a", {
    href: "javascript:;",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function () {
      return _this["delete"] && _this["delete"].apply(_this, arguments);
    }, ["prevent"]))
  }, _cache[14] || (_cache[14] = [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("i", {
    "class": "fe fe-trash me-2"
  }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)(" Supprimer")]))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("ul", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(this.store.paginate) + " de " + (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(this.store.totalComments), 1 /* TEXT */)])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vShow, $data.isInbox && $data.isData]])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("table", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)(this.store.comments, function (comment, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("tr", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("td", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("label", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("input", {
      type: "checkbox",
      "class": "custom-control-input",
      id: 'chk' + index,
      value: comment.id,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
        return $data.selectedComment = $event;
      })
    }, null, 8 /* PROPS */, _hoisted_16), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelCheckbox, $data.selectedComment]]), _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("span", {
      "class": "custom-control-label"
    }, null, -1 /* HOISTED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("td", {
      "class": "view-message dont-show tx-semibold clickable-row",
      onClick: function onClick($event) {
        return $options.goDetail(comment);
      },
      "data-href": ""
    }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(comment.fullName), 9 /* TEXT, PROPS */, _hoisted_17), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("td", {
      "class": "view-message tx-light clickable-row",
      onClick: function onClick($event) {
        return $options.goDetail(comment);
      },
      "data-href": ""
    }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(_this.truncater(comment.content, 92)), 9 /* TEXT, PROPS */, _hoisted_18), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("td", {
      "class": "view-message text-end tx-semibold clickable-row",
      onClick: function onClick($event) {
        return $options.goDetail(comment);
      },
      "data-href": ""
    }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(_this.ago(comment.createdAt)), 9 /* TEXT, PROPS */, _hoisted_19)]);
  }), 256 /* UNKEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vShow, $data.isInbox && $data.isData]]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("tbody", null, _cache[17] || (_cache[17] = [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("tr", {
    "class": ""
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("td", {
    "class": "text-muted text-center"
  }, "Aucun Message")], -1 /* HOISTED */)]), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vShow, !$data.isData]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(" mail-content ")]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("nav", null, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("ul", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("li", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("a", {
    "class": "page-link",
    href: "javascript:;",
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function ($event) {
      return $options.paginate(_this.store.prev, -1);
    }, ["prevent"]))
  }, "Prev")]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("li", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("a", {
    "class": "page-link",
    href: "javascript:;",
    onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function ($event) {
      return $options.paginate(_this.store.next, 1);
    }, ["prevent"]))
  }, "Next")])])])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vShow, $data.isInbox && $data.isData]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("v-if", true)]), !$data.isInbox ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_30, [_cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("h3", null, "Detail Message", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("a", {
    href: "javascript:;",
    onClick: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function () {
      return $options.goInbox && $options.goInbox.apply($options, arguments);
    }, ["prevent"])),
    "class": "contact-icon text-primary",
    "data-bs-toggle": "tooltip",
    title: "",
    "data-bs-original-title": "Tag",
    "aria-label": "Inbox"
  }, _cache[18] || (_cache[18] = [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("i", {
    "class": "fe fe-inbox"
  }, null, -1 /* HOISTED */)]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("img", {
    alt: "avatar",
    "class": "rounded-circle",
    src: 'https://ui-avatars.com/api/?background=random&font=000&name=' + this.store.activeComment.fullName
  }, null, 8 /* PROPS */, _hoisted_34)]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)($options.formatDate(this.store.activeComment.createdAt)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("span", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(this.store.activeComment.fullName), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("p", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(this.store.activeComment.email), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("small", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)($options.formatDate(this.store.activeComment.createdAt)), 1 /* TEXT */)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(this.store.activeComment.content), 1 /* TEXT */), _cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("hr", {
    "class": "message-inner-separator"
  }, null, -1 /* HOISTED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("a", {
    "class": "btn btn-sm ripple btn-primary mt-1 mb-1",
    onClick: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function ($event) {
      return $options.goReply(_this.store.activeComment);
    }, ["prevent"])),
    href: "javascript:;"
  }, _cache[21] || (_cache[21] = [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("i", {
    "class": "fa fa-reply"
  }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)(" Repondre")])), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("          <a class=\"btn btn-sm ripple btn-secondary mt-1 mb-1\" href=\"javascript:;\"><i class=\"fa fa-share\"></i> Forward</a>")])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("v-if", true), $data.isReply ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_46, [_cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", {
    "class": "card-header"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("h3", {
    "class": "card-title tx-18"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("label", {
    "class": "main-content-label tx-15"
  }, "Répondre")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("form", null, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_49, [_cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("label", {
    "class": "col-sm-3 col-xl-2 form-label tx-semibold"
  }, "A", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    readonly: "readonly",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return _this.store.activeComment.email = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelText, this.store.activeComment.email]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_52, [_cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("label", {
    "class": "col-sm-3 col-xl-2 form-label tx-semibold"
  }, "Sujet", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return _this.store.subject = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelText, this.store.subject]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_55, [_cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("label", {
    "class": "col-sm-3 col-xl-2 form-label tx-semibold"
  }, "Message", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("textarea", {
    rows: "10",
    "class": "form-control",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return _this.store.msg = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelText, this.store.msg]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("button", {
    "class": "btn btn-danger",
    onClick: _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function () {
      return $options.cancelReply && $options.cancelReply.apply($options, arguments);
    }, ["prevent"]))
  }, "Annuler"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("button", {
    "class": "btn btn-primary",
    onClick: _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function () {
      return $options.reply && $options.reply.apply($options, arguments);
    }, ["prevent"]))
  }, "Envoyer")])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Suggestion.vue?vue&type=template&id=118d133f":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Suggestion.vue?vue&type=template&id=118d133f ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");



var _hoisted_1 = {
  "class": "row row-sm"
};
var _hoisted_2 = {
  key: 0,
  "class": "col-xl-12 col-lg-12 main-content-body-mail1"
};
var _hoisted_3 = {
  "class": "card custom-card mail-container task-container overflow-hidden"
};
var _hoisted_4 = {
  "class": "inbox-body p-4"
};
var _hoisted_5 = {
  "class": "input-group main-mail-search"
};
var _hoisted_6 = {
  "class": "input-group-btn"
};
var _hoisted_7 = {
  "class": "mail-option mt-4"
};
var _hoisted_8 = {
  "class": "btn-group hidden-phone"
};
var _hoisted_9 = {
  "class": "dropdown-menu"
};
var _hoisted_10 = {
  "class": "unstyled inbox-pagination"
};
var _hoisted_11 = {
  "class": "table-responsive"
};
var _hoisted_12 = {
  "class": "table table-inbox text-md-nowrap table-hover text-nowrap"
};
var _hoisted_13 = {
  "class": ""
};
var _hoisted_14 = {
  "class": "inbox-small-cells"
};
var _hoisted_15 = {
  "class": "custom-control custom-checkbox mb-0"
};
var _hoisted_16 = ["id", "value"];
var _hoisted_17 = ["onClick"];
var _hoisted_18 = ["onClick"];
var _hoisted_19 = {
  "class": "text-center ms-3 mb-4"
};
var _hoisted_20 = {
  "class": "row row-sm"
};
var _hoisted_21 = {
  "class": "pagination justify-content-end"
};
var _hoisted_22 = {
  "class": "page-item"
};
var _hoisted_23 = {
  "class": "page-item"
};
var _hoisted_24 = {
  key: 0,
  "class": "row row-sm"
};
var _hoisted_25 = {
  "class": "col-lg-12 col-xl-12 col-md-12"
};
var _hoisted_26 = {
  "class": "card custom-card"
};
var _hoisted_27 = {
  "class": "card-body h-100"
};
var _hoisted_28 = {
  "class": "email-media"
};
var _hoisted_29 = {
  "class": "mb-4 d-lg-flex"
};
var _hoisted_30 = {
  "class": "ms-auto d-none d-md-flex fs-18"
};
var _hoisted_31 = {
  "class": "media mt-0"
};
var _hoisted_32 = {
  "class": "media-body tx-inverse"
};
var _hoisted_33 = {
  "class": "float-end d-none d-md-flex fs-15"
};
var _hoisted_34 = {
  "class": "me-3"
};
var _hoisted_35 = {
  "class": "media-title font-weight-normal"
};
var _hoisted_36 = {
  "class": "me-2 d-md-none"
};
var _hoisted_37 = {
  "class": "eamil-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_1, [$data.isInbox ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("input", {
    "class": "form-control",
    placeholder: "Rechercher Message...",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _this.store.q = $event;
    }),
    type: "text"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelText, this.store.q]]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("span", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("button", {
    "class": "btn btn-primary",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function ($event) {
      return $options.search(_this.store.q);
    }, ["prevent"])),
    type: "button"
  }, _cache[7] || (_cache[7] = [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("span", {
    "class": "input-group-btn"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("i", {
    "class": "fa fa-search"
  })], -1 /* HOISTED */)]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_8, [_cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("a", {
    "data-bs-toggle": "dropdown",
    href: "javascript:;",
    "class": "btn mini blue",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)(" Plus "), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("i", {
    "class": "fe fe-chevron-down"
  })], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("ul", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("a", {
    href: "javascript:;",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function () {
      return _this["delete"] && _this["delete"].apply(_this, arguments);
    }, ["prevent"]))
  }, _cache[8] || (_cache[8] = [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("i", {
    "class": "fe fe-trash me-2"
  }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)(" Supprimer")]))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("ul", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(this.store.paginate) + " de " + (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(this.store.totalComments), 1 /* TEXT */)])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vShow, $data.isInbox && $data.isData]])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("table", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)(this.store.comments, function (comment, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("tr", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("td", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("label", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("input", {
      type: "checkbox",
      "class": "custom-control-input",
      id: 'chk' + index,
      value: comment.id,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
        return $data.selectedComment = $event;
      })
    }, null, 8 /* PROPS */, _hoisted_16), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelCheckbox, $data.selectedComment]]), _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("span", {
      "class": "custom-control-label"
    }, null, -1 /* HOISTED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("td", {
      "class": "view-message tx-light clickable-row",
      onClick: function onClick($event) {
        return $options.goDetail(comment);
      },
      "data-href": ""
    }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(_this.truncater(comment.content, 92)), 9 /* TEXT, PROPS */, _hoisted_17), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("td", {
      "class": "view-message text-end tx-semibold clickable-row",
      onClick: function onClick($event) {
        return $options.goDetail(comment);
      },
      "data-href": ""
    }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(_this.ago(comment.createdAt)), 9 /* TEXT, PROPS */, _hoisted_18)]);
  }), 256 /* UNKEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vShow, $data.isInbox && $data.isData]]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("tbody", null, _cache[11] || (_cache[11] = [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("tr", {
    "class": ""
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("td", {
    "class": "text-muted text-center"
  }, "Aucune Suggestion")], -1 /* HOISTED */)]), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vShow, !$data.isData]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(" mail-content ")]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("nav", null, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("ul", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("li", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("a", {
    "class": "page-link",
    href: "javascript:;",
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function ($event) {
      return $options.paginate(_this.store.prev, -1);
    }, ["prevent"]))
  }, "Prev")]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("li", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("a", {
    "class": "page-link",
    href: "javascript:;",
    onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function ($event) {
      return $options.paginate(_this.store.next, 1);
    }, ["prevent"]))
  }, "Next")])])])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vShow, $data.isInbox && $data.isData]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("v-if", true)]), !$data.isInbox ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_29, [_cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("h3", null, "Detail Suggestion", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("a", {
    href: "javascript:;",
    onClick: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.withModifiers)(function () {
      return $options.goInbox && $options.goInbox.apply($options, arguments);
    }, ["prevent"])),
    "class": "contact-icon text-primary",
    "data-bs-toggle": "tooltip",
    title: "",
    "data-bs-original-title": "Tag",
    "aria-label": "Inbox"
  }, _cache[12] || (_cache[12] = [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("i", {
    "class": "fe fe-inbox"
  }, null, -1 /* HOISTED */)]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_31, [_cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", {
    "class": "main-img-user avatar-md me-3 online"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("img", {
    alt: "avatar",
    "class": "rounded-circle",
    src: 'https://ui-avatars.com/api/?background=random&font=000&name=unknown'
  })], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)($options.formatDate(this.store.activeComment.createdAt)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_35, [_cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("span", {
    "class": "tx-18 tx-medium"
  }, "Inconnu", -1 /* HOISTED */)), _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("p", {
    "class": "mb-0 text-muted"
  }, "Inconnu", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("small", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)($options.formatDate(this.store.activeComment.createdAt)), 1 /* TEXT */)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(this.store.activeComment.content), 1 /* TEXT */), _cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("hr", {
    "class": "message-inner-separator"
  }, null, -1 /* HOISTED */))])]), _cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("div", {
    "class": "card-footer"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("          <a class=\"btn btn-sm ripple btn-secondary mt-1 mb-1\" href=\"javascript:;\"><i class=\"fa fa-share\"></i> Forward</a>")], -1 /* HOISTED */))])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./assets/styles/scss/style.scss":
/*!***************************************!*\
  !*** ./assets/styles/scss/style.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/css/icon-list.css":
/*!*****************************************!*\
  !*** ./assets/styles/css/icon-list.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/css/icons.css":
/*!*************************************!*\
  !*** ./assets/styles/css/icons.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/css/plugin.css":
/*!**************************************!*\
  !*** ./assets/styles/css/plugin.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/css/plugins.css":
/*!***************************************!*\
  !*** ./assets/styles/css/plugins.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/switchercss/demo.css":
/*!********************************************!*\
  !*** ./assets/styles/switchercss/demo.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/switchercss/switcher.css":
/*!************************************************!*\
  !*** ./assets/styles/switchercss/switcher.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/web-fonts/font-awesome/font-awesome.min.css":
/*!************************************************************!*\
  !*** ./assets/web-fonts/font-awesome/font-awesome.min.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/components/Message.vue":
/*!***************************************!*\
  !*** ./assets/components/Message.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Message_vue_vue_type_template_id_ebdccd48__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message.vue?vue&type=template&id=ebdccd48 */ "./assets/components/Message.vue?vue&type=template&id=ebdccd48");
/* harmony import */ var _Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.vue?vue&type=script&lang=js */ "./assets/components/Message.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Message_vue_vue_type_template_id_ebdccd48__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/Message.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/Suggestion.vue":
/*!******************************************!*\
  !*** ./assets/components/Suggestion.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Suggestion_vue_vue_type_template_id_118d133f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Suggestion.vue?vue&type=template&id=118d133f */ "./assets/components/Suggestion.vue?vue&type=template&id=118d133f");
/* harmony import */ var _Suggestion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Suggestion.vue?vue&type=script&lang=js */ "./assets/components/Suggestion.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Suggestion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Suggestion_vue_vue_type_template_id_118d133f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/Suggestion.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/Message.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./assets/components/Message.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Message.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Message.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/Suggestion.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./assets/components/Suggestion.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Suggestion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Suggestion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Suggestion.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Suggestion.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/Message.vue?vue&type=template&id=ebdccd48":
/*!*********************************************************************!*\
  !*** ./assets/components/Message.vue?vue&type=template&id=ebdccd48 ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Message_vue_vue_type_template_id_ebdccd48__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Message_vue_vue_type_template_id_ebdccd48__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Message.vue?vue&type=template&id=ebdccd48 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Message.vue?vue&type=template&id=ebdccd48");


/***/ }),

/***/ "./assets/components/Suggestion.vue?vue&type=template&id=118d133f":
/*!************************************************************************!*\
  !*** ./assets/components/Suggestion.vue?vue&type=template&id=118d133f ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Suggestion_vue_vue_type_template_id_118d133f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Suggestion_vue_vue_type_template_id_118d133f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Suggestion.vue?vue&type=template&id=118d133f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Suggestion.vue?vue&type=template&id=118d133f");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_define-built-in_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_error_cause_js-node_modules_core-js_modules_es_error_-f2dd87","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-bed4a0","vendors-node_modules_core-js_modules_es_date_to-json_js-node_modules_core-js_modules_es_promi-f0926d","vendors-node_modules_sweetalert2_dist_sweetalert2_all_js-node_modules_vue-loader_dist_exportH-0c64e3"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEM1RyxLQUFLLENBQUNqQixhQUFhLENBQUN1SSxPQUFPLDhDQUN0Q2pDLHVEQUFBLENBQW9DO0lBQWhDLFNBQU07RUFBeUIsNkRBR3ZDQSx1REFBQSxDQUVNO0lBRkQsU0FBTTtFQUFhLElBQ3RCcUMsdURBQUEsb0lBQWlJLCtCQTlHM0lBLHVEQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW9FO0FBQ1Y7QUFDTDs7QUFFckQsQ0FBZ0Y7QUFDaEYsaUNBQWlDLHlGQUFlLENBQUMsNEVBQU0sYUFBYSw4RUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QndEO0FBQ1Y7QUFDTDs7QUFFeEQsQ0FBZ0Y7QUFDaEYsaUNBQWlDLHlGQUFlLENBQUMsK0VBQU0sYUFBYSxpRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ1TDs7Ozs7Ozs7Ozs7Ozs7OztBQ0FHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFyYW1ldHJhZ2UvYWRkLWNvbGxlY3Rpb24tYXZhbnRhZ2UtdGlja2V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYXJhbWV0cmFnZS9hZGQtY29sbGVjdGlvbi1wYWdlLWltYWdlQmFubmllcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhcmFtZXRyYWdlL2FkZC1jb2xsZWN0aW9uLXByb2R1Y3QtcHJpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhcmFtZXRyYWdlL2FkZC1jb2xsZWN0aW9uLXJlcGFzLWRldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFyYW1ldHJhZ2UvYWRkLWNvbGxlY3Rpb24tc2VjdGlvbi1kZXRhaWxTZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yZXMvbWVzc2FnZVN0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yZXMvc3VnZ2VzdGlvblN0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL01lc3NhZ2UudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1N1Z2dlc3Rpb24udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvc2Nzcy9zdHlsZS5zY3NzPzNmMWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzlkNzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9jc3MvaWNvbi1saXN0LmNzcz9kZDllIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvY3NzL2ljb25zLmNzcz83N2IxIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvY3NzL3BsdWdpbi5jc3M/MjdhYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Nzcy9wbHVnaW5zLmNzcz82NDA1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvc3dpdGNoZXJjc3MvZGVtby5jc3M/ZjQxOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3N3aXRjaGVyY3NzL3N3aXRjaGVyLmNzcz9jMGNmIiwid2VicGFjazovLy8uL2Fzc2V0cy93ZWItZm9udHMvZm9udC1hd2Vzb21lL2ZvbnQtYXdlc29tZS5taW4uY3NzPzAxZjAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWVzc2FnZS52dWU/OTAwMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TdWdnZXN0aW9uLnZ1ZT85ZDFiIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL01lc3NhZ2UudnVlP2JjNWIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU3VnZ2VzdGlvbi52dWU/NGFkNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9NZXNzYWdlLnZ1ZT8zNmJjIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1N1Z2dlc3Rpb24udnVlPzJjZWUiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcblxuaW1wb3J0ICcuL3N0eWxlcy9jc3MvaWNvbi1saXN0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2Nzcy9wbHVnaW4uY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvY3NzL2ljb25zLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vd2ViLWZvbnRzL2ZvbnQtYXdlc29tZS9mb250LWF3ZXNvbWUubWluLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2Nzcy9wbHVnaW5zLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3N3aXRjaGVyY3NzL3N3aXRjaGVyLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3N3aXRjaGVyY3NzL2RlbW8uY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cblxucmVxdWlyZSgnLi9qcy9wYXJhbWV0cmFnZS9hZGQtY29sbGVjdGlvbi1yZXBhcy1kZXRhaWwnKTtcbnJlcXVpcmUoJy4vanMvcGFyYW1ldHJhZ2UvYWRkLWNvbGxlY3Rpb24tcGFnZS1pbWFnZUJhbm5pZXJlJyk7XG5yZXF1aXJlKCcuL2pzL3BhcmFtZXRyYWdlL2FkZC1jb2xsZWN0aW9uLXNlY3Rpb24tZGV0YWlsU2VjdGlvbicpO1xucmVxdWlyZSgnLi9qcy9wYXJhbWV0cmFnZS9hZGQtY29sbGVjdGlvbi1wcm9kdWN0LXByaWNlJyk7XG5yZXF1aXJlKCcuL2pzL3BhcmFtZXRyYWdlL2FkZC1jb2xsZWN0aW9uLWF2YW50YWdlLXRpY2tldCcpO1xuXG4kKCdzZWxlY3Quc2VsZWN0MicpLnNlbGVjdDIoe3dpZHRoOiAnMTAwJSd9KTtcblxuLy8gY29uc3QgJCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9qcXVlcnkvanF1ZXJ5Lm1pbicpO1xuLy8gZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gJDtcbi8vIGdsb2JhbC5qUXVlcnkgPSAkO1xuLy9cbi8vIGltcG9ydCB0b2FzdHIgZnJvbSAndG9hc3RyJztcbi8vIGdsb2JhbC50b2FzdHIgPSB0b2FzdHI7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbmltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBjcmVhdGVQaW5pYSB9IGZyb20gJ3BpbmlhJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvTWVzc2FnZS52dWUnO1xuaW1wb3J0IEFwcDIgZnJvbSAnLi9jb21wb25lbnRzL1N1Z2dlc3Rpb24udnVlJztcbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChBcHApXG5jb25zdCBhcHAyID0gY3JlYXRlQXBwKEFwcDIpXG5cbmFwcC51c2UoY3JlYXRlUGluaWEoKSlcbmFwcC5tb3VudCgnI2FwcE1lc3NhZ2UnKVxuXG5hcHAyLnVzZShjcmVhdGVQaW5pYSgpKVxuYXBwMi5tb3VudCgnI2FwcFN1Z2dlc3Rpb24nKVxuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYWRkRm9ybVRvQ29sbGVjdGlvbkF2YW50YWdlVGlja2V0ID0gKCkgPT4ge1xyXG4gICAgICAgICQoJyNBZGRBdmFudGFnZVR5cGVUaWNrZXQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gJCgkKHRoaXMpLmF0dHIoJ2RhdGEtbGlzdC1zZWxlY3RvcicpKTtcclxuICAgICAgICAgICAgY29uc3QgJHdpZGdldCA9ICQoJyN3aWRnZXQtY291bnRlci1hdmFudGFnZS10aWNrZXQnKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSArJHdpZGdldC52YWwoKTtcclxuICAgICAgICAgICAgLy8gVHJ5IHRvIGZpbmQgdGhlIGNvdW50ZXIgb2YgdGhlIGxpc3Qgb3IgdXNlIHRoZSBsZW5ndGggb2YgdGhlIGxpc3RcclxuXHJcbiAgICAgICAgICAgIC8vIGdyYWIgdGhlIHByb3RvdHlwZSB0ZW1wbGF0ZVxyXG4gICAgICAgICAgICBsZXQgbmV3V2lkZ2V0ID0gbGlzdC5hdHRyKCdkYXRhLXByb3RvdHlwZScpO1xyXG4gICAgICAgICAgICAvLyByZXBsYWNlIHRoZSBcIl9fbmFtZV9fXCIgdXNlZCBpbiB0aGUgaWQgYW5kIG5hbWUgb2YgdGhlIHByb3RvdHlwZVxyXG4gICAgICAgICAgICAvLyB3aXRoIGEgbnVtYmVyIHRoYXQncyB1bmlxdWUgdG8geW91ciBlbWFpbHNcclxuICAgICAgICAgICAgLy8gZW5kIG5hbWUgYXR0cmlidXRlIGxvb2tzIGxpa2UgbmFtZT1cImNvbnRhY3RbZW1haWxzXVsyXVwiXHJcbiAgICAgICAgICAgIG5ld1dpZGdldCA9IG5ld1dpZGdldC5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XHJcbiAgICAgICAgICAgIC8vIEluY3JlYXNlIHRoZSBjb3VudGVyXHJcbiAgICAgICAgICAgICR3aWRnZXQudmFsKGluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIC8vIEFuZCBzdG9yZXMgaXQsIHRoZSBsZW5ndGggY2Fubm90IGJlIHVzZWQgaWYgZGVsZXRpbmcgd2lkZ2V0cyBpcyBhbGxvd2VkXHJcbiAgICAgICAgICAgIGxpc3QuZGF0YSgnd2lkZ2V0LWNvdW50ZXItYXZhbnRhZ2UtdGlja2V0JywgaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGxpc3QgZWxlbWVudCBhbmQgYWRkIGl0IHRvIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICQoJyN0YWJsZS1jb2xsZWN0aW9uLWF2YW50YWdlLXRpY2tldCB0Ym9keScpLmFwcGVuZChuZXdXaWRnZXQpO1xyXG4gICAgICAgICAgICAvLyAkKCcuc2VsZWN0MicpLnNlbGVjdDIoe3dpZHRoOiAnMTAwJScsIHRoZW1lOiAnYm9vdHN0cmFwJ30pO1xyXG4gICAgICAgICAgICBhZGRUYWdGb3JtRGVsZXRlTGlua0F2YW50YWdlVGlja2V0KG5ld1dpZGdldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZFRhZ0Zvcm1EZWxldGVMaW5rQXZhbnRhZ2VUaWNrZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuZGVsZXRlLWF2YW50YWdlLXRpY2tldCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRhcmdldCcpO1xyXG4gICAgICAgICAgICAkKHRhcmdldCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFkZEZvcm1Ub0NvbGxlY3Rpb25BdmFudGFnZVRpY2tldCgpO1xyXG4gICAgYWRkVGFnRm9ybURlbGV0ZUxpbmtBdmFudGFnZVRpY2tldCgpO1xyXG59KTtcclxuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYWRkRm9ybVRvQ29sbGVjdGlvblBhZ2VCYW5uaWVyZSA9ICgpID0+IHtcclxuICAgICAgICAkKCcjQWRkSW1hZ2VCYW5uaWVyZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSAkKCQodGhpcykuYXR0cignZGF0YS1saXN0LXNlbGVjdG9yJykpO1xyXG4gICAgICAgICAgICBjb25zdCAkd2lkZ2V0ID0gJCgnI3dpZGdldC1jb3VudGVyLWltYWdlLWJhbm5pZXJlcycpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9ICskd2lkZ2V0LnZhbCgpO1xyXG4gICAgICAgICAgICAvLyBUcnkgdG8gZmluZCB0aGUgY291bnRlciBvZiB0aGUgbGlzdCBvciB1c2UgdGhlIGxlbmd0aCBvZiB0aGUgbGlzdFxyXG5cclxuICAgICAgICAgICAgLy8gZ3JhYiB0aGUgcHJvdG90eXBlIHRlbXBsYXRlXHJcbiAgICAgICAgICAgIGxldCBuZXdXaWRnZXQgPSBsaXN0LmF0dHIoJ2RhdGEtcHJvdG90eXBlJyk7XHJcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdGhlIFwiX19uYW1lX19cIiB1c2VkIGluIHRoZSBpZCBhbmQgbmFtZSBvZiB0aGUgcHJvdG90eXBlXHJcbiAgICAgICAgICAgIC8vIHdpdGggYSBudW1iZXIgdGhhdCdzIHVuaXF1ZSB0byB5b3VyIGVtYWlsc1xyXG4gICAgICAgICAgICAvLyBlbmQgbmFtZSBhdHRyaWJ1dGUgbG9va3MgbGlrZSBuYW1lPVwiY29udGFjdFtlbWFpbHNdWzJdXCJcclxuICAgICAgICAgICAgbmV3V2lkZ2V0ID0gbmV3V2lkZ2V0LnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcclxuICAgICAgICAgICAgLy8gSW5jcmVhc2UgdGhlIGNvdW50ZXJcclxuICAgICAgICAgICAgJHdpZGdldC52YWwoaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgLy8gQW5kIHN0b3JlcyBpdCwgdGhlIGxlbmd0aCBjYW5ub3QgYmUgdXNlZCBpZiBkZWxldGluZyB3aWRnZXRzIGlzIGFsbG93ZWRcclxuICAgICAgICAgICAgbGlzdC5kYXRhKCd3aWRnZXQtY291bnRlci1pbWFnZS1iYW5uaWVyZXMnLCBpbmRleCk7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgbGlzdCBlbGVtZW50IGFuZCBhZGQgaXQgdG8gdGhlIGxpc3RcclxuICAgICAgICAgICAgJCgnI3RhYmxlLWNvbGxlY3Rpb24taW1hZ2UtYmFubmllcmVzJykuYXBwZW5kKG5ld1dpZGdldCk7XHJcbiAgICAgICAgICAgICQoJy5kcm9waWZ5JykuZHJvcGlmeSh7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdkZWZhdWx0JzogJ0dsaXNzZXotZMOpcG9zZXogdW4gZmljaGllciBpY2kgb3UgY2xpcXVleiBzdXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZXBsYWNlJzogJ0dsaXNzZXItZMOpcG9zZXIgb3UgY2xpcXVlciBwb3VyIHJlbXBsYWNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JlbW92ZSc6ICdTdXBwcmltZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdlcnJvcic6ICdPb29wcywgcXVlbHF1ZSBjaG9zZSBkXFwnZXJyb27DqSBhIMOpdMOpIGFqb3V0w6kuJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZpbGVTaXplJzogJ1RoZSBmaWxlIHNpemUgaXMgdG9vIGJpZyAoNU0gbWF4KS4nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZGRUYWdGb3JtRGVsZXRlTGlua1BhZ2VCYW5uaWVyZShuZXdXaWRnZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRUYWdGb3JtRGVsZXRlTGlua1BhZ2VCYW5uaWVyZSA9ICgpID0+IHtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5kZWxldGUtaW1hZ2UtYmFubmllcmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9ICQodGhpcykuYXR0cignZGF0YS10YXJnZXQnKTtcclxuICAgICAgICAgICAgJCh0YXJnZXQpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBhZGRGb3JtVG9Db2xsZWN0aW9uUGFnZUJhbm5pZXJlKCk7XHJcbiAgICBhZGRUYWdGb3JtRGVsZXRlTGlua1BhZ2VCYW5uaWVyZSgpO1xyXG59KTtcclxuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYWRkRm9ybVRvQ29sbGVjdGlvblByb2R1Y3RQcmljZSA9ICgpID0+IHtcclxuICAgICAgICAkKCcjQWRkUHJpY2VQcm9kdWN0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY29uc3QgbGlzdCA9ICQoJCh0aGlzKS5hdHRyKCdkYXRhLWxpc3Qtc2VsZWN0b3InKSk7XHJcbiAgICAgICAgICAgIGNvbnN0ICR3aWRnZXQgPSAkKCcjd2lkZ2V0LWNvdW50ZXItcHJpY2UtcHJvZHVpdHMnKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSArJHdpZGdldC52YWwoKTtcclxuICAgICAgICAgICAgLy8gVHJ5IHRvIGZpbmQgdGhlIGNvdW50ZXIgb2YgdGhlIGxpc3Qgb3IgdXNlIHRoZSBsZW5ndGggb2YgdGhlIGxpc3RcclxuXHJcbiAgICAgICAgICAgIC8vIGdyYWIgdGhlIHByb3RvdHlwZSB0ZW1wbGF0ZVxyXG4gICAgICAgICAgICBsZXQgbmV3V2lkZ2V0ID0gbGlzdC5hdHRyKCdkYXRhLXByb3RvdHlwZScpO1xyXG4gICAgICAgICAgICAvLyByZXBsYWNlIHRoZSBcIl9fbmFtZV9fXCIgdXNlZCBpbiB0aGUgaWQgYW5kIG5hbWUgb2YgdGhlIHByb3RvdHlwZVxyXG4gICAgICAgICAgICAvLyB3aXRoIGEgbnVtYmVyIHRoYXQncyB1bmlxdWUgdG8geW91ciBlbWFpbHNcclxuICAgICAgICAgICAgLy8gZW5kIG5hbWUgYXR0cmlidXRlIGxvb2tzIGxpa2UgbmFtZT1cImNvbnRhY3RbZW1haWxzXVsyXVwiXHJcbiAgICAgICAgICAgIG5ld1dpZGdldCA9IG5ld1dpZGdldC5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XHJcbiAgICAgICAgICAgIC8vIEluY3JlYXNlIHRoZSBjb3VudGVyXHJcbiAgICAgICAgICAgICR3aWRnZXQudmFsKGluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIC8vIEFuZCBzdG9yZXMgaXQsIHRoZSBsZW5ndGggY2Fubm90IGJlIHVzZWQgaWYgZGVsZXRpbmcgd2lkZ2V0cyBpcyBhbGxvd2VkXHJcbiAgICAgICAgICAgIGxpc3QuZGF0YSgnd2lkZ2V0LWNvdW50ZXItcHJpY2UtcHJvZHVpdHMnLCBpbmRleCk7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgbGlzdCBlbGVtZW50IGFuZCBhZGQgaXQgdG8gdGhlIGxpc3RcclxuICAgICAgICAgICAgJCgnI3RhYmxlLWNvbGxlY3Rpb24tcHJpY2UtcHJvZHVpdHMgdGJvZHknKS5hcHBlbmQobmV3V2lkZ2V0KTtcclxuICAgICAgICAgICAgLy8gJCgnLnNlbGVjdDInKS5zZWxlY3QyKHt3aWR0aDogJzEwMCUnLCB0aGVtZTogJ2Jvb3RzdHJhcCd9KTtcclxuICAgICAgICAgICAgYWRkVGFnRm9ybURlbGV0ZUxpbmtQcm9kdWN0UHJpY2UobmV3V2lkZ2V0KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkVGFnRm9ybURlbGV0ZUxpbmtQcm9kdWN0UHJpY2UgPSAoKSA9PiB7XHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuZGVsZXRlLXByb2R1Y3QtcHJpY2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9ICQodGhpcykuYXR0cignZGF0YS10YXJnZXQnKTtcclxuICAgICAgICAgICAgJCh0YXJnZXQpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBhZGRGb3JtVG9Db2xsZWN0aW9uUHJvZHVjdFByaWNlKCk7XHJcbiAgICBhZGRUYWdGb3JtRGVsZXRlTGlua1Byb2R1Y3RQcmljZSgpO1xyXG59KTtcclxuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYWRkRm9ybVRvQ29sbGVjdGlvbkRldGFpbFJlcGFzID0gKCkgPT4ge1xyXG4gICAgICAgICQoJyNBZGREZXRhaWxSZXBhcycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSAkKCQodGhpcykuYXR0cignZGF0YS1saXN0LXNlbGVjdG9yJykpO1xyXG4gICAgICAgICAgICBjb25zdCAkd2lkZ2V0ID0gJCgnI3dpZGdldC1jb3VudGVyLWRldGFpbC1yZXBhcycpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9ICskd2lkZ2V0LnZhbCgpO1xyXG4gICAgICAgICAgICAvLyBUcnkgdG8gZmluZCB0aGUgY291bnRlciBvZiB0aGUgbGlzdCBvciB1c2UgdGhlIGxlbmd0aCBvZiB0aGUgbGlzdFxyXG5cclxuICAgICAgICAgICAgLy8gZ3JhYiB0aGUgcHJvdG90eXBlIHRlbXBsYXRlXHJcbiAgICAgICAgICAgIGxldCBuZXdXaWRnZXQgPSBsaXN0LmF0dHIoJ2RhdGEtcHJvdG90eXBlJyk7XHJcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdGhlIFwiX19uYW1lX19cIiB1c2VkIGluIHRoZSBpZCBhbmQgbmFtZSBvZiB0aGUgcHJvdG90eXBlXHJcbiAgICAgICAgICAgIC8vIHdpdGggYSBudW1iZXIgdGhhdCdzIHVuaXF1ZSB0byB5b3VyIGVtYWlsc1xyXG4gICAgICAgICAgICAvLyBlbmQgbmFtZSBhdHRyaWJ1dGUgbG9va3MgbGlrZSBuYW1lPVwiY29udGFjdFtlbWFpbHNdWzJdXCJcclxuICAgICAgICAgICAgbmV3V2lkZ2V0ID0gbmV3V2lkZ2V0LnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcclxuICAgICAgICAgICAgLy8gSW5jcmVhc2UgdGhlIGNvdW50ZXJcclxuICAgICAgICAgICAgJHdpZGdldC52YWwoaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgLy8gQW5kIHN0b3JlcyBpdCwgdGhlIGxlbmd0aCBjYW5ub3QgYmUgdXNlZCBpZiBkZWxldGluZyB3aWRnZXRzIGlzIGFsbG93ZWRcclxuICAgICAgICAgICAgbGlzdC5kYXRhKCd3aWRnZXQtY291bnRlci1kZXRhaWwtcmVwYXMnLCBpbmRleCk7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgbGlzdCBlbGVtZW50IGFuZCBhZGQgaXQgdG8gdGhlIGxpc3RcclxuICAgICAgICAgICAgJCgnI3RhYmxlLWNvbGxlY3Rpb24tZGV0YWlsLXJlcGFzJykuYXBwZW5kKG5ld1dpZGdldCk7XHJcbiAgICAgICAgICAgICQoJy5kcm9waWZ5JykuZHJvcGlmeSh7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdkZWZhdWx0JzogJ0dsaXNzZXotZMOpcG9zZXogdW4gZmljaGllciBpY2kgb3UgY2xpcXVleiBzdXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZXBsYWNlJzogJ0dsaXNzZXItZMOpcG9zZXIgb3UgY2xpcXVlciBwb3VyIHJlbXBsYWNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JlbW92ZSc6ICdTdXBwcmltZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdlcnJvcic6ICdPb29wcywgcXVlbHF1ZSBjaG9zZSBkXFwnZXJyb27DqSBhIMOpdMOpIGFqb3V0w6kuJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZpbGVTaXplJzogJ1RoZSBmaWxlIHNpemUgaXMgdG9vIGJpZyAoMTVNIG1heCkuJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCgnLnNlbGVjdDInKS5zZWxlY3QyKClcclxuICAgICAgICAgICAgYWRkVGFnRm9ybURlbGV0ZUxpbmtEZXRhaWxSZXBhcyhuZXdXaWRnZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRUYWdGb3JtRGVsZXRlTGlua0RldGFpbFJlcGFzID0gKCkgPT4ge1xyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmRlbGV0ZS1kZXRhaWwtcmVwYXMnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9ICQodGhpcykuYXR0cignZGF0YS10YXJnZXQnKTtcclxuICAgICAgICAgICAgJCh0YXJnZXQpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBhZGRGb3JtVG9Db2xsZWN0aW9uRGV0YWlsUmVwYXMoKTtcclxuICAgIGFkZFRhZ0Zvcm1EZWxldGVMaW5rRGV0YWlsUmVwYXMoKTtcclxufSk7XHJcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGFkZEZvcm1Ub0NvbGxlY3Rpb25TZWN0aW9uRGV0YWlsU2VjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAkKCcjQWRkRGV0YWlsU2VjdGlvbnMnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gJCgkKHRoaXMpLmF0dHIoJ2RhdGEtbGlzdC1zZWxlY3RvcicpKTtcclxuICAgICAgICAgICAgY29uc3QgJHdpZGdldCA9ICQoJyN3aWRnZXQtY291bnRlci1kZXRhaWwtc2VjdGlvbnMnKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSArJHdpZGdldC52YWwoKTtcclxuICAgICAgICAgICAgLy8gVHJ5IHRvIGZpbmQgdGhlIGNvdW50ZXIgb2YgdGhlIGxpc3Qgb3IgdXNlIHRoZSBsZW5ndGggb2YgdGhlIGxpc3RcclxuXHJcbiAgICAgICAgICAgIC8vIGdyYWIgdGhlIHByb3RvdHlwZSB0ZW1wbGF0ZVxyXG4gICAgICAgICAgICBsZXQgbmV3V2lkZ2V0ID0gbGlzdC5hdHRyKCdkYXRhLXByb3RvdHlwZScpO1xyXG4gICAgICAgICAgICAvLyByZXBsYWNlIHRoZSBcIl9fbmFtZV9fXCIgdXNlZCBpbiB0aGUgaWQgYW5kIG5hbWUgb2YgdGhlIHByb3RvdHlwZVxyXG4gICAgICAgICAgICAvLyB3aXRoIGEgbnVtYmVyIHRoYXQncyB1bmlxdWUgdG8geW91ciBlbWFpbHNcclxuICAgICAgICAgICAgLy8gZW5kIG5hbWUgYXR0cmlidXRlIGxvb2tzIGxpa2UgbmFtZT1cImNvbnRhY3RbZW1haWxzXVsyXVwiXHJcbiAgICAgICAgICAgIG5ld1dpZGdldCA9IG5ld1dpZGdldC5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XHJcbiAgICAgICAgICAgIC8vIEluY3JlYXNlIHRoZSBjb3VudGVyXHJcbiAgICAgICAgICAgICR3aWRnZXQudmFsKGluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIC8vIEFuZCBzdG9yZXMgaXQsIHRoZSBsZW5ndGggY2Fubm90IGJlIHVzZWQgaWYgZGVsZXRpbmcgd2lkZ2V0cyBpcyBhbGxvd2VkXHJcbiAgICAgICAgICAgIGxpc3QuZGF0YSgnd2lkZ2V0LWNvdW50ZXItZGV0YWlsLXNlY3Rpb25zJywgaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGxpc3QgZWxlbWVudCBhbmQgYWRkIGl0IHRvIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICQoJyN0YWJsZS1jb2xsZWN0aW9uLWRldGFpbC1zZWN0aW9ucycpLmFwcGVuZChuZXdXaWRnZXQpO1xyXG4gICAgICAgICAgICAkKCcuZHJvcGlmeScpLmRyb3BpZnkoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnZGVmYXVsdCc6ICdHbGlzc2V6LWTDqXBvc2V6IHVuIGZpY2hpZXIgaWNpIG91IGNsaXF1ZXogc3VyJyxcclxuICAgICAgICAgICAgICAgICAgICAncmVwbGFjZSc6ICdHbGlzc2VyLWTDqXBvc2VyIG91IGNsaXF1ZXIgcG91ciByZW1wbGFjZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZW1vdmUnOiAnU3VwcHJpbWVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnZXJyb3InOiAnT29vcHMsIHF1ZWxxdWUgY2hvc2UgZFxcJ2Vycm9uw6kgYSDDqXTDqSBham91dMOpLidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICdmaWxlU2l6ZSc6ICdUaGUgZmlsZSBzaXplIGlzIHRvbyBiaWcgKDVNIG1heCkuJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWRkVGFnRm9ybURlbGV0ZUxpbmtTZWN0aW9uRGV0YWlsU2VjdGlvbihuZXdXaWRnZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRUYWdGb3JtRGVsZXRlTGlua1NlY3Rpb25EZXRhaWxTZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmRlbGV0ZS1kZXRhaWwtc2VjdGlvbnMnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9ICQodGhpcykuYXR0cignZGF0YS10YXJnZXQnKTtcclxuICAgICAgICAgICAgJCh0YXJnZXQpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBhZGRGb3JtVG9Db2xsZWN0aW9uU2VjdGlvbkRldGFpbFNlY3Rpb24oKTtcclxuICAgIGFkZFRhZ0Zvcm1EZWxldGVMaW5rU2VjdGlvbkRldGFpbFNlY3Rpb24oKTtcclxufSk7XHJcbiIsImltcG9ydCB7IHJlZiwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXHJcbmltcG9ydCB7IGRlZmluZVN0b3JlIH0gZnJvbSAncGluaWEnXHJcblxyXG5leHBvcnQgY29uc3QgdXNlTWVzc2FnZVN0b3JlID0gZGVmaW5lU3RvcmUoJ21lc3NhZ2UnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBpZFN0b3JlID0gcmVmKDApXHJcbiAgICBjb25zdCBjb21tZW50cyA9IHJlZihbXSlcclxuICAgIGNvbnN0IG5leHQgPSByZWYoXCJcIilcclxuICAgIGNvbnN0IHByZXYgPSByZWYoXCJcIilcclxuICAgIGNvbnN0IHEgPSByZWYoXCJcIilcclxuICAgIGNvbnN0IHRvdGFsQ29tbWVudHMgPSByZWYoMClcclxuICAgIGNvbnN0IHBhZ2UgPSByZWYoMClcclxuICAgIGNvbnN0IGFjdGl2ZUNvbW1lbnQgPSByZWYoXCJcIilcclxuICAgIGNvbnN0IHN1YmplY3QgPSByZWYoXCJcIilcclxuICAgIGNvbnN0IG1zZyA9IHJlZihcIlwiKVxyXG5cclxuICAgIGNvbnN0IG1heFBhZ2UgPSBjb21wdXRlZCgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgrdG90YWxDb21tZW50cy52YWx1ZSAvIDEwKTtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcGFnaW5hdGUgPSBjb21wdXRlZCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gKHBhZ2UudmFsdWUgLSAxKSAqIDEwICsgMTtcclxuICAgICAgICBsZXQgZW5kID0gcGFnZS52YWx1ZSAqIDEwO1xyXG5cclxuICAgICAgICBpZiAoZW5kID4gdG90YWxDb21tZW50cy52YWx1ZSkge1xyXG4gICAgICAgICAgICBlbmQgPSB0b3RhbENvbW1lbnRzLnZhbHVlOyAvLyBOZSBkw6lwYXNzZSBwYXMgbGUgbm9tYnJlIHRvdGFsIGQnaXRlbXNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0b3RhbENvbW1lbnRzLnZhbHVlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gMFxyXG4gICAgICAgICAgICBlbmQgPSAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYCR7c3RhcnR9IC0gJHtlbmR9YDtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZFN0b3JlLFxyXG4gICAgICAgIGNvbW1lbnRzLFxyXG4gICAgICAgIHByZXYsXHJcbiAgICAgICAgbmV4dCxcclxuICAgICAgICBxLFxyXG4gICAgICAgIHRvdGFsQ29tbWVudHMsXHJcbiAgICAgICAgcGFnZSxcclxuICAgICAgICBwYWdpbmF0ZSxcclxuICAgICAgICBtYXhQYWdlLFxyXG4gICAgICAgIGFjdGl2ZUNvbW1lbnQsXHJcbiAgICAgICAgc3ViamVjdCxcclxuICAgICAgICBtc2dcclxuICAgIH1cclxufSkiLCJpbXBvcnQgeyByZWYsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xyXG5pbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gJ3BpbmlhJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN1Z2dlc3Rpb25TdG9yZSA9IGRlZmluZVN0b3JlKCdzdWdnZXN0aW9uJywgKCkgPT4ge1xyXG4gICAgY29uc3QgaWRTdG9yZSA9IHJlZigwKVxyXG4gICAgY29uc3QgY29tbWVudHMgPSByZWYoW10pXHJcbiAgICBjb25zdCBuZXh0ID0gcmVmKFwiXCIpXHJcbiAgICBjb25zdCBwcmV2ID0gcmVmKFwiXCIpXHJcbiAgICBjb25zdCBxID0gcmVmKFwiXCIpXHJcbiAgICBjb25zdCB0b3RhbENvbW1lbnRzID0gcmVmKDApXHJcbiAgICBjb25zdCBwYWdlID0gcmVmKDApXHJcbiAgICBjb25zdCBhY3RpdmVDb21tZW50ID0gcmVmKFwiXCIpXHJcbiAgICBjb25zdCBzdWJqZWN0ID0gcmVmKFwiXCIpXHJcbiAgICBjb25zdCBtc2cgPSByZWYoXCJcIilcclxuXHJcbiAgICBjb25zdCBtYXhQYWdlID0gY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoK3RvdGFsQ29tbWVudHMudmFsdWUgLyAxMCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHBhZ2luYXRlID0gY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgIGxldCBzdGFydCA9IChwYWdlLnZhbHVlIC0gMSkgKiAxMCArIDE7XHJcbiAgICAgICAgbGV0IGVuZCA9IHBhZ2UudmFsdWUgKiAxMDtcclxuXHJcbiAgICAgICAgaWYgKGVuZCA+IHRvdGFsQ29tbWVudHMudmFsdWUpIHtcclxuICAgICAgICAgICAgZW5kID0gdG90YWxDb21tZW50cy52YWx1ZTsgLy8gTmUgZMOpcGFzc2UgcGFzIGxlIG5vbWJyZSB0b3RhbCBkJ2l0ZW1zXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG90YWxDb21tZW50cy52YWx1ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBzdGFydCA9IDBcclxuICAgICAgICAgICAgZW5kID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGAke3N0YXJ0fSAtICR7ZW5kfWA7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWRTdG9yZSxcclxuICAgICAgICBjb21tZW50cyxcclxuICAgICAgICBwcmV2LFxyXG4gICAgICAgIG5leHQsXHJcbiAgICAgICAgcSxcclxuICAgICAgICB0b3RhbENvbW1lbnRzLFxyXG4gICAgICAgIHBhZ2UsXHJcbiAgICAgICAgcGFnaW5hdGUsXHJcbiAgICAgICAgbWF4UGFnZSxcclxuICAgICAgICBhY3RpdmVDb21tZW50LFxyXG4gICAgICAgIHN1YmplY3QsXHJcbiAgICAgICAgbXNnXHJcbiAgICB9XHJcbn0pIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJyb3cgcm93LXNtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTEyIGNvbC1sZy0xMiAgbWFpbi1jb250ZW50LWJvZHktbWFpbDFcIiB2LWlmPVwiaXNJbmJveFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjdXN0b20tY2FyZCBtYWlsLWNvbnRhaW5lciB0YXNrLWNvbnRhaW5lciBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ib3gtYm9keSBwLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYWluLW1haWwtc2VhcmNoXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlciBNZXNzYWdlLi4uXCIgdi1tb2RlbD1cInRoaXMuc3RvcmUucVwiIHR5cGU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEBjbGljay5wcmV2ZW50PVwic2VhcmNoKHRoaXMuc3RvcmUucSlcIiB0eXBlPVwiYnV0dG9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbC1vcHRpb24gbXQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGhpZGRlbi1waG9uZVwiPlxyXG4gICAgICAgICAgICAgIDxhIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJidG4gbWluaSBibHVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICBQbHVzXHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZlIGZlLWNoZXZyb24tZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBAY2xpY2sucHJldmVudD1cInRoaXMuZGVsZXRlXCI+PGkgY2xhc3M9XCJmZSBmZS10cmFzaCBtZS0yXCI+PC9pPiBTdXBwcmltZXI8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwidW5zdHlsZWQgaW5ib3gtcGFnaW5hdGlvblwiIHYtc2hvdz1cImlzSW5ib3ggJiYgaXNEYXRhXCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxzcGFuPnt7IHRoaXMuc3RvcmUucGFnaW5hdGUgfX0gZGUge3sgdGhpcy5zdG9yZS50b3RhbENvbW1lbnRzIH19PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWluYm94IHRleHQtbWQtbm93cmFwIHRhYmxlLWhvdmVyIHRleHQtbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgPHRib2R5IHYtc2hvdz1cImlzSW5ib3ggJiYgaXNEYXRhXCI+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiXCIgdi1mb3I9XCIoY29tbWVudCwgaW5kZXgpIGluIHRoaXMuc3RvcmUuY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImluYm94LXNtYWxsLWNlbGxzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiA6aWQ9XCInY2hrJyArIGluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiY29tbWVudC5pZFwiIHYtbW9kZWw9XCJzZWxlY3RlZENvbW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInZpZXctbWVzc2FnZSBkb250LXNob3cgdHgtc2VtaWJvbGQgY2xpY2thYmxlLXJvd1wiIEBjbGljaz1cImdvRGV0YWlsKGNvbW1lbnQpXCIgZGF0YS1ocmVmPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IGNvbW1lbnQuZnVsbE5hbWUgfX1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ2aWV3LW1lc3NhZ2UgdHgtbGlnaHQgY2xpY2thYmxlLXJvd1wiIEBjbGljaz1cImdvRGV0YWlsKGNvbW1lbnQpXCIgZGF0YS1ocmVmPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IHRoaXMudHJ1bmNhdGVyKGNvbW1lbnQuY29udGVudCwgOTIpIH19XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidmlldy1tZXNzYWdlIHRleHQtZW5kIHR4LXNlbWlib2xkIGNsaWNrYWJsZS1yb3dcIiBAY2xpY2s9XCJnb0RldGFpbChjb21tZW50KVwiIGRhdGEtaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICB7eyB0aGlzLmFnbyhjb21tZW50LmNyZWF0ZWRBdCkgfX1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDx0Ym9keSB2LXNob3c9XCIhaXNEYXRhXCI+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyXCI+QXVjdW4gTWVzc2FnZTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBtYWlsLWNvbnRlbnQgLS0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXMtMyBtYi00XCIgdi1zaG93PVwiaXNJbmJveCAmJiBpc0RhdGFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy1zbVwiPlxyXG4gICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvbiBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZS1pdGVtXCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiamF2YXNjcmlwdDo7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCJwYWdpbmF0ZSh0aGlzLnN0b3JlLnByZXYsIC0xKVwiPlByZXY8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cInBhZ2luYXRlKHRoaXMuc3RvcmUubmV4dCwgMSlcIj5OZXh0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcblxyXG4gIDxkaXYgY2xhc3M9XCJyb3cgcm93LXNtXCIgdi1pZj1cIiFpc0luYm94XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIGNvbC14bC0xMiBjb2wtbWQtMTJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY3VzdG9tLWNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGgtMTAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW1haWwtbWVkaWFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTQgZC1sZy1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGgzPkRldGFpbCBNZXNzYWdlPC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXMtYXV0byBkLW5vbmUgZC1tZC1mbGV4IGZzLTE4XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgQGNsaWNrLnByZXZlbnQ9XCJnb0luYm94XCIgY2xhc3M9XCJjb250YWN0LWljb24gdGV4dC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiXCIgZGF0YS1icy1vcmlnaW5hbC10aXRsZT1cIlRhZ1wiIGFyaWEtbGFiZWw9XCJJbmJveFwiPjxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmZSBmZS1pbmJveFwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEgbXQtMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWltZy11c2VyIGF2YXRhci1tZCBtZS0zIG9ubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJhdmF0YXJcIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIidodHRwczovL3VpLWF2YXRhcnMuY29tL2FwaS8/YmFja2dyb3VuZD1yYW5kb20mZm9udD0wMDAmbmFtZT0nICsgdGhpcy5zdG9yZS5hY3RpdmVDb21tZW50LmZ1bGxOYW1lXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHkgdHgtaW52ZXJzZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsb2F0LWVuZCBkLW5vbmUgZC1tZC1mbGV4IGZzLTE1XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZS0zXCI+e3sgZm9ybWF0RGF0ZSh0aGlzLnN0b3JlLmFjdGl2ZUNvbW1lbnQuY3JlYXRlZEF0KSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtdGl0bGUgZm9udC13ZWlnaHQtbm9ybWFsXCI+PHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInR4LTE4IHR4LW1lZGl1bVwiPnt7IHRoaXMuc3RvcmUuYWN0aXZlQ29tbWVudC5mdWxsTmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0wIHRleHQtbXV0ZWRcIj57eyB0aGlzLnN0b3JlLmFjdGl2ZUNvbW1lbnQuZW1haWwgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cIm1lLTIgZC1tZC1ub25lXCI+e3sgZm9ybWF0RGF0ZSh0aGlzLnN0b3JlLmFjdGl2ZUNvbW1lbnQuY3JlYXRlZEF0KSB9fTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlYW1pbC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxwPnt7IHRoaXMuc3RvcmUuYWN0aXZlQ29tbWVudC5jb250ZW50IH19PC9wPlxyXG4gICAgICAgICAgICA8aHIgY2xhc3M9XCJtZXNzYWdlLWlubmVyLXNlcGFyYXRvclwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tc20gcmlwcGxlIGJ0bi1wcmltYXJ5IG10LTEgbWItMVwiIEBjbGljay5wcmV2ZW50PVwiZ29SZXBseSh0aGlzLnN0b3JlLmFjdGl2ZUNvbW1lbnQpXCJcclxuICAgICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48aSBjbGFzcz1cImZhIGZhLXJlcGx5XCI+PC9pPiBSZXBvbmRyZTwvYT5cclxuICAgICAgICAgIDwhLS0gICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXNtIHJpcHBsZSBidG4tc2Vjb25kYXJ5IG10LTEgbWItMVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48aSBjbGFzcz1cImZhIGZhLXNoYXJlXCI+PC9pPiBGb3J3YXJkPC9hPi0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInJvdyByb3ctc21cIiB2LWlmPVwiaXNSZXBseVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiBjb2wteGwtMTIgY29sLW1kLTEyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGN1c3RvbS1jYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlIHR4LTE4XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1haW4tY29udGVudC1sYWJlbCB0eC0xNVwiPlLDqXBvbmRyZTwvbGFiZWw+XHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMyBjb2wteGwtMiBmb3JtLWxhYmVsIHR4LXNlbWlib2xkXCI+QTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTkgY29sLXhsLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVhZG9ubHk9XCJyZWFkb25seVwiIHYtbW9kZWw9XCJ0aGlzLnN0b3JlLmFjdGl2ZUNvbW1lbnQuZW1haWxcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTMgY29sLXhsLTIgZm9ybS1sYWJlbCB0eC1zZW1pYm9sZFwiPlN1amV0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOSBjb2wteGwtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwidGhpcy5zdG9yZS5zdWJqZWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTMgY29sLXhsLTIgZm9ybS1sYWJlbCB0eC1zZW1pYm9sZFwiPk1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05IGNvbC14bC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjEwXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwidGhpcy5zdG9yZS5tc2dcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlciBkLXNtLWZsZXhcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tbGlzdCBtcy1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIEBjbGljay5wcmV2ZW50PVwiY2FuY2VsUmVwbHlcIj5Bbm51bGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2sucHJldmVudD1cInJlcGx5XCI+RW52b3llcjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHt1c2VNZXNzYWdlU3RvcmV9IGZyb20gXCIuLi9zdG9yZXMvbWVzc2FnZVN0b3JlXCI7XHJcbmltcG9ydCB7Zm9ybWF0RGlzdGFuY2VUb05vd30gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQge2Zvcm1hdH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQge2ZyfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJNZXNzYWdlXCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0b3JlOiB1c2VNZXNzYWdlU3RvcmUoKSxcclxuICAgICAgc2VsZWN0ZWRDb21tZW50OiBbXSxcclxuICAgICAgaXNJbmJveDogdHJ1ZSxcclxuICAgICAgaXNEYXRhOiBmYWxzZSxcclxuICAgICAgaXNSZXBseTogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBmZXRjaChcIi9hcGkvbWVzc2FnZXM/b3JkZXJbY3JlYXRlZEF0XT1kZXNjXCIsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgLy8gQXV0cmVzIGVuLXTDqnRlcyBzaSBuw6ljZXNzYWlyZVxyXG4gICAgICB9LFxyXG4gICAgICBjcmVkZW50aWFsczogJ29taXQnLCAvLyBVdGlsaXNleiAnb21pdCcgcG91ciBuZSBwYXMgZW52b3llciBsZXMgY29va2llc1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5wYWdlID0gMTtcclxuICAgICAgICAgIHRoaXMuc3RvcmUuY29tbWVudHMgPSBqc29uW1wibWVtYmVyXCJdO1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS50b3RhbENvbW1lbnRzID0gK2pzb25bXCJ0b3RhbEl0ZW1zXCJdO1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5uZXh0ID0ganNvbltcInZpZXdcIl1bXCJuZXh0XCJdID8/IGpzb25bXCJ2aWV3XCJdW1wibGFzdFwiXTtcclxuICAgICAgICAgIHRoaXMuc3RvcmUucHJldiA9IGpzb25bXCJ2aWV3XCJdW1wicHJldmlvdXNcIl0gPz8ganNvbltcInZpZXdcIl1bXCJmaXJzdFwiXTtcclxuICAgICAgICAgIHRoaXMuaXNEYXRhID0gKHRoaXMuc3RvcmUudG90YWxDb21tZW50cyA+IDApXHJcbiAgICAgICAgfSlcclxuICAgIDtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHBhZ2luYXRlKGxpbmssIGluZGV4KSB7XHJcbiAgICAgIGZldGNoKGxpbmssIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAvLyBBdXRyZXMgZW4tdMOqdGVzIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ29taXQnLCAvLyBVdGlsaXNleiAnb21pdCcgcG91ciBuZSBwYXMgZW52b3llciBsZXMgY29va2llc1xyXG4gICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnBhZ2UgPSB0aGlzLnN0b3JlLnBhZ2UgKyBpbmRleFxyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnBhZ2UgPSAodGhpcy5zdG9yZS5wYWdlID09PSAwKSA/IDEgOiAoKHRoaXMuc3RvcmUucGFnZSA+IHRoaXMuc3RvcmUubWF4UGFnZSkgPyB0aGlzLnN0b3JlLm1heFBhZ2UgOiB0aGlzLnN0b3JlLnBhZ2UpXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuY29tbWVudHMgPSBqc29uW1wibWVtYmVyXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnRvdGFsQ29tbWVudHMgPSAranNvbltcInRvdGFsSXRlbXNcIl07XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUubmV4dCA9IGpzb25bXCJ2aWV3XCJdW1wibmV4dFwiXSA/PyBqc29uW1widmlld1wiXVtcImxhc3RcIl07XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUucHJldiA9IGpzb25bXCJ2aWV3XCJdW1wicHJldmlvdXNcIl0gPz8ganNvbltcInZpZXdcIl1bXCJmaXJzdFwiXTtcclxuICAgICAgICAgICAgdGhpcy5pc0RhdGEgPSAodGhpcy5zdG9yZS50b3RhbENvbW1lbnRzID4gMClcclxuICAgICAgICAgIH0pXHJcbiAgICAgIDtcclxuICAgIH0sXHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICBmZXRjaChcIi9hcGkvbWVzc2FnZXM/b3JkZXJbY3JlYXRlZEF0XT1kZXNjXCIsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAvLyBBdXRyZXMgZW4tdMOqdGVzIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ29taXQnLCAvLyBVdGlsaXNleiAnb21pdCcgcG91ciBuZSBwYXMgZW52b3llciBsZXMgY29va2llc1xyXG4gICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLmNvbW1lbnRzID0ganNvbltcIm1lbWJlclwiXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS50b3RhbENvbW1lbnRzID0gK2pzb25bXCJ0b3RhbEl0ZW1zXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLm5leHQgPSBqc29uW1widmlld1wiXVtcIm5leHRcIl0gPz8ganNvbltcInZpZXdcIl1bXCJsYXN0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnByZXYgPSBqc29uW1widmlld1wiXVtcInByZXZpb3VzXCJdID8/IGpzb25bXCJ2aWV3XCJdW1wiZmlyc3RcIl07XHJcbiAgICAgICAgICAgIHRoaXMuaXNEYXRhID0gKHRoaXMuc3RvcmUudG90YWxDb21tZW50cyA+IDApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICA7XHJcbiAgICB9LFxyXG4gICAgZ29JbmJveCgpIHtcclxuICAgICAgdGhpcy5pc0luYm94ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pc1JlcGx5ID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgY2FuY2VsUmVwbHkoKSB7XHJcbiAgICAgIHRoaXMuaXNJbmJveCA9IHRydWU7XHJcbiAgICAgIHRoaXMuaXNSZXBseSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGdvRGV0YWlsKGNvbW1lbnQpIHtcclxuICAgICAgdGhpcy5zdG9yZS5hY3RpdmVDb21tZW50ID0gY29tbWVudDtcclxuICAgICAgdGhpcy5pc0luYm94ID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgZ29SZXBseShjb21tZW50KSB7XHJcbiAgICAgIHRoaXMuc3RvcmUuYWN0aXZlQ29tbWVudCA9IGNvbW1lbnQ7XHJcbiAgICAgIHRoaXMuaXNJbmJveCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmlzUmVwbHkgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4gICAgICByZXR1cm4gZm9ybWF0KGRhdGUsICdkZCBNTU1NIHl5eXkgSEg6bW06c3MnLCB7bG9jYWxlOiBmcn0pOyAvLyBFeGVtcGxlIDogMzEgb2N0b2JyZSAyMDI0IDE0OjMwOjQ1XHJcbiAgICB9LFxyXG4gICAgdHJ1bmNhdGVyKHZhbHVlLCBsZW5ndGgpIHtcclxuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xyXG4gICAgICBpZiAodmFsdWUubGVuZ3RoIDw9IGxlbmd0aCkgcmV0dXJuIHZhbHVlO1xyXG4gICAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKDAsIGxlbmd0aCkgKyAnLi4uJztcclxuICAgIH0sXHJcbiAgICBhZ28odmFsdWUpIHtcclxuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xyXG4gICAgICAvLyBVdGlsaXNhdGlvbiBkZSBsYSBmb25jdGlvbiBkYXRlLWZucyBwb3VyIGZvcm1hdGVyIGxhIGRhdGUgZW4gZm9uY3Rpb24gZHUgdGVtcHMgw6ljb3Vsw6lcclxuICAgICAgcmV0dXJuIGZvcm1hdERpc3RhbmNlVG9Ob3cobmV3IERhdGUodmFsdWUpLCB7YWRkU3VmZml4OiB0cnVlLCBsb2NhbGU6IGZyfSk7XHJcbiAgICB9LFxyXG4gICAgc2VhcmNoKHEpIHtcclxuICAgICAgZmV0Y2goXCIvYXBpL21lc3NhZ2VzP3E9XCIgKyBxICsgXCImb3JkZXJbY3JlYXRlZEF0XT1kZXNjXCIsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAvLyBBdXRyZXMgZW4tdMOqdGVzIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ29taXQnLCAvLyBVdGlsaXNleiAnb21pdCcgcG91ciBuZSBwYXMgZW52b3llciBsZXMgY29va2llc1xyXG4gICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLmNvbW1lbnRzID0ganNvbltcIm1lbWJlclwiXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS50b3RhbENvbW1lbnRzID0gK2pzb25bXCJ0b3RhbEl0ZW1zXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLm5leHQgPSBqc29uW1widmlld1wiXVtcIm5leHRcIl0gPz8ganNvbltcInZpZXdcIl1bXCJsYXN0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnByZXYgPSBqc29uW1widmlld1wiXVtcInByZXZpb3VzXCJdID8/IGpzb25bXCJ2aWV3XCJdW1wiZmlyc3RcIl07XHJcbiAgICAgICAgICAgIHRoaXMuaXNEYXRhID0gKHRoaXMuc3RvcmUudG90YWxDb21tZW50cyA+IDApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICA7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlKCkge1xyXG4gICAgICBjb25zdCBzdG9yZUlkID0gK3RoaXMuc3RvcmUuaWRTdG9yZTtcclxuICAgICAgbGV0IGl0ZW07XHJcbiAgICAgIGlmICh0aGlzLmlzSW5ib3gpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENvbW1lbnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgaXRlbSA9IHRoaXMuc2VsZWN0ZWRDb21tZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW0gPSB0aGlzLnN0b3JlLmFjdGl2ZUNvbW1lbnQuaWRcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICB0aXRsZTogJ0VuIMOqdGVzIHZvdXMgc8O7cmU/JyxcclxuICAgICAgICAgIHRleHQ6IFwiQ2V0dGUgYWN0aW9uIGVzdCBpcnLDqXZlcnNpYmxlIVwiLFxyXG4gICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBzdXBwcmltZXIgIScsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyIScsXHJcbiAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1zdWNjZXNzIG10LTInLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLWRhbmdlciBtcy0yIG10LTInLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICc8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1wcmltYXJ5IG0tMVwiIHJvbGU9XCJzdGF0dXNcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgJyAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICcgICAgICAgICAgPC9kaXY+JyxcclxuICAgICAgICAgICAgICBpY29uOiAnaW5mbycsXHJcbiAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgaXRlbXM6IGl0ZW0gLy8gRW52b2kgbGUgdGFibGVhdSBzb3VzIGxhIGNsw6kgJ2l0ZW1zJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZmV0Y2goJy9hZG1pbi9tZXNzYWdlcy9kZWxldGUnLCB7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vIE3DqXRob2RlIEhUVFBcclxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIEluZGlxdWVyIGxlIHR5cGUgZGUgY29udGVudVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSkgLy8gQ29udmVydGlyIGwnb2JqZXQgZW4gY2hhw65uZSBKU09OXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VycmV1ciBkYW5zIGxhIHJlcXXDqnRlOiAnICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgLy8gVHJhaXRlciBsYSByw6lwb25zZSBlbiBKU09OXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FwaS9tZXNzYWdlcz9vcmRlcltjcmVhdGVkQXRdPWRlc2NcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIEF1dHJlcyBlbi10w6p0ZXMgc2kgbsOpY2Vzc2FpcmVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnb21pdCcsIC8vIFV0aWxpc2V6ICdvbWl0JyBwb3VyIG5lIHBhcyBlbnZveWVyIGxlcyBjb29raWVzXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucGFnZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuY29tbWVudHMgPSBqc29uW1wibWVtYmVyXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnRvdGFsQ29tbWVudHMgPSAranNvbltcInRvdGFsSXRlbXNcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUubmV4dCA9IGpzb25bXCJ2aWV3XCJdW1wibmV4dFwiXSA/PyBqc29uW1widmlld1wiXVtcImxhc3RcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucHJldiA9IGpzb25bXCJ2aWV3XCJdW1wicHJldmlvdXNcIl0gPz8ganNvbltcInZpZXdcIl1bXCJmaXJzdFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RhdGEgPSAodGhpcy5zdG9yZS50b3RhbENvbW1lbnRzID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2PDqHMhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTGUgY29tbWVudGFpcmUgYSDDqXTDqSBzdXBwcmltw6knLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgLy8gR8OpcmVyIGxhIHLDqXBvbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1cjonLCBlcnJvcik7IC8vIEfDqXJlciBsZXMgZXJyZXVyc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcclxuICAgICAgICAgICAgICByZXN1bHQuZGlzbWlzcyA9PT0gU3dhbC5EaXNtaXNzUmVhc29uLmNhbmNlbFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdBbm51bMOpJyxcclxuICAgICAgICAgICAgICB0ZXh0OiAnQXVjdW5lIGFjdGlvbiBuXFwnYSDDqXTDqSDDqWZmZWN0dcOpZSA6KScsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlcGx5KCkge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiAnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtcHJpbWFyeSBtLTFcIiByb2xlPVwic3RhdHVzXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDwvZGl2PicsXHJcbiAgICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICAgIHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIHRvOiB0aGlzLnN0b3JlLmFjdGl2ZUNvbW1lbnQuZW1haWwsXHJcbiAgICAgICAgc3ViamVjdDogdGhpcy5zdG9yZS5zdWJqZWN0LFxyXG4gICAgICAgIG1lc3NhZ2U6IHRoaXMuc3RvcmUubXNnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZldGNoKCcvYWRtaW4vbWVzc2FnZXMvcmVwbHknLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vIE3DqXRob2RlIEhUVFBcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIEluZGlxdWVyIGxlIHR5cGUgZGUgY29udGVudVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSkgLy8gQ29udmVydGlyIGwnb2JqZXQgZW4gY2hhw65uZSBKU09OXHJcbiAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdFcnJldXInLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1bDqXJpZmlleiB2b3RyZSBtZXNzYWdlIDopJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VycmV1ciBkYW5zIGxhIHJlcXXDqnRlOiAnICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgLy8gVHJhaXRlciBsYSByw6lwb25zZSBlbiBKU09OXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGZldGNoKFwiL2FwaS9tZXNzYWdlcz9vcmRlcltjcmVhdGVkQXRdPWRlc2NcIiwge1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIC8vIEF1dHJlcyBlbi10w6p0ZXMgc2kgbsOpY2Vzc2FpcmVcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnb21pdCcsIC8vIFV0aWxpc2V6ICdvbWl0JyBwb3VyIG5lIHBhcyBlbnZveWVyIGxlcyBjb29raWVzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucGFnZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuY29tbWVudHMgPSBqc29uW1wibWVtYmVyXCJdO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnRvdGFsQ29tbWVudHMgPSAranNvbltcInRvdGFsSXRlbXNcIl07XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUubmV4dCA9IGpzb25bXCJ2aWV3XCJdW1wibmV4dFwiXSA/PyBqc29uW1widmlld1wiXVtcImxhc3RcIl07XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucHJldiA9IGpzb25bXCJ2aWV3XCJdW1wicHJldmlvdXNcIl0gPz8ganNvbltcInZpZXdcIl1bXCJmaXJzdFwiXTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5pc0RhdGEgPSAodGhpcy5zdG9yZS50b3RhbENvbW1lbnRzID4gMClcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5tc2cgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc3ViamVjdCA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2PDqHMhJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTGEgcsOpcG9uc2UgYSDDqXTDqSBlbnZvecOpJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgIH0pIC8vIEfDqXJlciBsYSByw6lwb25zZVxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmdvSW5ib3goKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXI6JywgZXJyb3IpOyAvLyBHw6lyZXIgbGVzIGVycmV1cnNcclxuICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJyb3cgcm93LXNtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTEyIGNvbC1sZy0xMiAgbWFpbi1jb250ZW50LWJvZHktbWFpbDFcIiB2LWlmPVwiaXNJbmJveFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjdXN0b20tY2FyZCBtYWlsLWNvbnRhaW5lciB0YXNrLWNvbnRhaW5lciBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ib3gtYm9keSBwLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYWluLW1haWwtc2VhcmNoXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlciBNZXNzYWdlLi4uXCIgdi1tb2RlbD1cInRoaXMuc3RvcmUucVwiIHR5cGU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEBjbGljay5wcmV2ZW50PVwic2VhcmNoKHRoaXMuc3RvcmUucSlcIiB0eXBlPVwiYnV0dG9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbC1vcHRpb24gbXQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGhpZGRlbi1waG9uZVwiPlxyXG4gICAgICAgICAgICAgIDxhIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJidG4gbWluaSBibHVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICBQbHVzXHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZlIGZlLWNoZXZyb24tZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBAY2xpY2sucHJldmVudD1cInRoaXMuZGVsZXRlXCI+PGkgY2xhc3M9XCJmZSBmZS10cmFzaCBtZS0yXCI+PC9pPiBTdXBwcmltZXI8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwidW5zdHlsZWQgaW5ib3gtcGFnaW5hdGlvblwiIHYtc2hvdz1cImlzSW5ib3ggJiYgaXNEYXRhXCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxzcGFuPnt7IHRoaXMuc3RvcmUucGFnaW5hdGUgfX0gZGUge3sgdGhpcy5zdG9yZS50b3RhbENvbW1lbnRzIH19PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWluYm94IHRleHQtbWQtbm93cmFwIHRhYmxlLWhvdmVyIHRleHQtbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgPHRib2R5IHYtc2hvdz1cImlzSW5ib3ggJiYgaXNEYXRhXCI+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiXCIgdi1mb3I9XCIoY29tbWVudCwgaW5kZXgpIGluIHRoaXMuc3RvcmUuY29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImluYm94LXNtYWxsLWNlbGxzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiA6aWQ9XCInY2hrJyArIGluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiY29tbWVudC5pZFwiIHYtbW9kZWw9XCJzZWxlY3RlZENvbW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInZpZXctbWVzc2FnZSB0eC1saWdodCBjbGlja2FibGUtcm93XCIgQGNsaWNrPVwiZ29EZXRhaWwoY29tbWVudClcIiBkYXRhLWhyZWY9XCJcIj5cclxuICAgICAgICAgICAgICAgICAge3sgdGhpcy50cnVuY2F0ZXIoY29tbWVudC5jb250ZW50LCA5MikgfX1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ2aWV3LW1lc3NhZ2UgdGV4dC1lbmQgdHgtc2VtaWJvbGQgY2xpY2thYmxlLXJvd1wiIEBjbGljaz1cImdvRGV0YWlsKGNvbW1lbnQpXCIgZGF0YS1ocmVmPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IHRoaXMuYWdvKGNvbW1lbnQuY3JlYXRlZEF0KSB9fVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPHRib2R5IHYtc2hvdz1cIiFpc0RhdGFcIj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtbXV0ZWQgdGV4dC1jZW50ZXJcIj5BdWN1bmUgU3VnZ2VzdGlvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBtYWlsLWNvbnRlbnQgLS0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXMtMyBtYi00XCIgdi1zaG93PVwiaXNJbmJveCAmJiBpc0RhdGFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy1zbVwiPlxyXG4gICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvbiBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZS1pdGVtXCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiamF2YXNjcmlwdDo7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCJwYWdpbmF0ZSh0aGlzLnN0b3JlLnByZXYsIC0xKVwiPlByZXY8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cInBhZ2luYXRlKHRoaXMuc3RvcmUubmV4dCwgMSlcIj5OZXh0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcblxyXG4gIDxkaXYgY2xhc3M9XCJyb3cgcm93LXNtXCIgdi1pZj1cIiFpc0luYm94XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIGNvbC14bC0xMiBjb2wtbWQtMTJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY3VzdG9tLWNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGgtMTAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW1haWwtbWVkaWFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTQgZC1sZy1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGgzPkRldGFpbCBTdWdnZXN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXMtYXV0byBkLW5vbmUgZC1tZC1mbGV4IGZzLTE4XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgQGNsaWNrLnByZXZlbnQ9XCJnb0luYm94XCIgY2xhc3M9XCJjb250YWN0LWljb24gdGV4dC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiXCIgZGF0YS1icy1vcmlnaW5hbC10aXRsZT1cIlRhZ1wiIGFyaWEtbGFiZWw9XCJJbmJveFwiPjxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmZSBmZS1pbmJveFwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEgbXQtMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWltZy11c2VyIGF2YXRhci1tZCBtZS0zIG9ubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJhdmF0YXJcIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIidodHRwczovL3VpLWF2YXRhcnMuY29tL2FwaS8/YmFja2dyb3VuZD1yYW5kb20mZm9udD0wMDAmbmFtZT11bmtub3duJ1wiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IHR4LWludmVyc2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdC1lbmQgZC1ub25lIGQtbWQtZmxleCBmcy0xNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWUtM1wiPnt7IGZvcm1hdERhdGUodGhpcy5zdG9yZS5hY3RpdmVDb21tZW50LmNyZWF0ZWRBdCkgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLXRpdGxlIGZvbnQtd2VpZ2h0LW5vcm1hbFwiPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0eC0xOCB0eC1tZWRpdW1cIj5JbmNvbm51PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTAgdGV4dC1tdXRlZFwiPkluY29ubnU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cIm1lLTIgZC1tZC1ub25lXCI+e3sgZm9ybWF0RGF0ZSh0aGlzLnN0b3JlLmFjdGl2ZUNvbW1lbnQuY3JlYXRlZEF0KSB9fTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlYW1pbC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxwPnt7IHRoaXMuc3RvcmUuYWN0aXZlQ29tbWVudC5jb250ZW50IH19PC9wPlxyXG4gICAgICAgICAgICA8aHIgY2xhc3M9XCJtZXNzYWdlLWlubmVyLXNlcGFyYXRvclwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICA8IS0tICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1zbSByaXBwbGUgYnRuLXNlY29uZGFyeSBtdC0xIG1iLTFcIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+PGkgY2xhc3M9XCJmYSBmYS1zaGFyZVwiPjwvaT4gRm9yd2FyZDwvYT4tLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQge3VzZVN1Z2dlc3Rpb25TdG9yZX0gZnJvbSBcIi4uL3N0b3Jlcy9zdWdnZXN0aW9uU3RvcmVcIjtcclxuaW1wb3J0IHtmb3JtYXREaXN0YW5jZVRvTm93fSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCB7Zm9ybWF0fSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCB7ZnJ9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIlN1Z2dlc3Rpb25cIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3RvcmU6IHVzZVN1Z2dlc3Rpb25TdG9yZSgpLFxyXG4gICAgICBzZWxlY3RlZENvbW1lbnQ6IFtdLFxyXG4gICAgICBpc0luYm94OiB0cnVlLFxyXG4gICAgICBpc0RhdGE6IGZhbHNlLFxyXG4gICAgICBpc1JlcGx5OiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGZldGNoKFwiL2FwaS9zdWdnZXN0aW9ucz9vcmRlcltjcmVhdGVkQXRdPWRlc2NcIiwge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAvLyBBdXRyZXMgZW4tdMOqdGVzIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWRlbnRpYWxzOiAnb21pdCcsIC8vIFV0aWxpc2V6ICdvbWl0JyBwb3VyIG5lIHBhcyBlbnZveWVyIGxlcyBjb29raWVzXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnN0b3JlLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5jb21tZW50cyA9IGpzb25bXCJtZW1iZXJcIl07XHJcbiAgICAgICAgICB0aGlzLnN0b3JlLnRvdGFsQ29tbWVudHMgPSAranNvbltcInRvdGFsSXRlbXNcIl07XHJcbiAgICAgICAgICB0aGlzLnN0b3JlLm5leHQgPSBqc29uW1widmlld1wiXVtcIm5leHRcIl0gPz8ganNvbltcInZpZXdcIl1bXCJsYXN0XCJdO1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5wcmV2ID0ganNvbltcInZpZXdcIl1bXCJwcmV2aW91c1wiXSA/PyBqc29uW1widmlld1wiXVtcImZpcnN0XCJdO1xyXG4gICAgICAgICAgdGhpcy5pc0RhdGEgPSAodGhpcy5zdG9yZS50b3RhbENvbW1lbnRzID4gMClcclxuICAgICAgICB9KVxyXG4gICAgO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgcGFnaW5hdGUobGluaywgaW5kZXgpIHtcclxuICAgICAgZmV0Y2gobGluaywge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgIC8vIEF1dHJlcyBlbi10w6p0ZXMgc2kgbsOpY2Vzc2FpcmVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnb21pdCcsIC8vIFV0aWxpc2V6ICdvbWl0JyBwb3VyIG5lIHBhcyBlbnZveWVyIGxlcyBjb29raWVzXHJcbiAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUucGFnZSA9IHRoaXMuc3RvcmUucGFnZSArIGluZGV4XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUucGFnZSA9ICh0aGlzLnN0b3JlLnBhZ2UgPT09IDApID8gMSA6ICgodGhpcy5zdG9yZS5wYWdlID4gdGhpcy5zdG9yZS5tYXhQYWdlKSA/IHRoaXMuc3RvcmUubWF4UGFnZSA6IHRoaXMuc3RvcmUucGFnZSlcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5jb21tZW50cyA9IGpzb25bXCJtZW1iZXJcIl07XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUudG90YWxDb21tZW50cyA9ICtqc29uW1widG90YWxJdGVtc1wiXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5uZXh0ID0ganNvbltcInZpZXdcIl1bXCJuZXh0XCJdID8/IGpzb25bXCJ2aWV3XCJdW1wibGFzdFwiXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5wcmV2ID0ganNvbltcInZpZXdcIl1bXCJwcmV2aW91c1wiXSA/PyBqc29uW1widmlld1wiXVtcImZpcnN0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLmlzRGF0YSA9ICh0aGlzLnN0b3JlLnRvdGFsQ29tbWVudHMgPiAwKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgO1xyXG4gICAgfSxcclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgIGZldGNoKFwiL2FwaS9zdWdnZXN0aW9ucz9vcmRlcltjcmVhdGVkQXRdPWRlc2NcIiwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgIC8vIEF1dHJlcyBlbi10w6p0ZXMgc2kgbsOpY2Vzc2FpcmVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnb21pdCcsIC8vIFV0aWxpc2V6ICdvbWl0JyBwb3VyIG5lIHBhcyBlbnZveWVyIGxlcyBjb29raWVzXHJcbiAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUucGFnZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuY29tbWVudHMgPSBqc29uW1wibWVtYmVyXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnRvdGFsQ29tbWVudHMgPSAranNvbltcInRvdGFsSXRlbXNcIl07XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUubmV4dCA9IGpzb25bXCJ2aWV3XCJdW1wibmV4dFwiXSA/PyBqc29uW1widmlld1wiXVtcImxhc3RcIl07XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUucHJldiA9IGpzb25bXCJ2aWV3XCJdW1wicHJldmlvdXNcIl0gPz8ganNvbltcInZpZXdcIl1bXCJmaXJzdFwiXTtcclxuICAgICAgICAgICAgdGhpcy5pc0RhdGEgPSAodGhpcy5zdG9yZS50b3RhbENvbW1lbnRzID4gMClcclxuICAgICAgICAgIH0pXHJcbiAgICAgIDtcclxuICAgIH0sXHJcbiAgICBnb0luYm94KCkge1xyXG4gICAgICB0aGlzLmlzSW5ib3ggPSB0cnVlO1xyXG4gICAgICB0aGlzLmlzUmVwbHkgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBnb0RldGFpbChjb21tZW50KSB7XHJcbiAgICAgIHRoaXMuc3RvcmUuYWN0aXZlQ29tbWVudCA9IGNvbW1lbnQ7XHJcbiAgICAgIHRoaXMuaXNJbmJveCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4gICAgICByZXR1cm4gZm9ybWF0KGRhdGUsICdkZCBNTU1NIHl5eXkgSEg6bW06c3MnLCB7bG9jYWxlOiBmcn0pOyAvLyBFeGVtcGxlIDogMzEgb2N0b2JyZSAyMDI0IDE0OjMwOjQ1XHJcbiAgICB9LFxyXG4gICAgdHJ1bmNhdGVyKHZhbHVlLCBsZW5ndGgpIHtcclxuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xyXG4gICAgICBpZiAodmFsdWUubGVuZ3RoIDw9IGxlbmd0aCkgcmV0dXJuIHZhbHVlO1xyXG4gICAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKDAsIGxlbmd0aCkgKyAnLi4uJztcclxuICAgIH0sXHJcbiAgICBhZ28odmFsdWUpIHtcclxuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xyXG4gICAgICAvLyBVdGlsaXNhdGlvbiBkZSBsYSBmb25jdGlvbiBkYXRlLWZucyBwb3VyIGZvcm1hdGVyIGxhIGRhdGUgZW4gZm9uY3Rpb24gZHUgdGVtcHMgw6ljb3Vsw6lcclxuICAgICAgcmV0dXJuIGZvcm1hdERpc3RhbmNlVG9Ob3cobmV3IERhdGUodmFsdWUpLCB7YWRkU3VmZml4OiB0cnVlLCBsb2NhbGU6IGZyfSk7XHJcbiAgICB9LFxyXG4gICAgc2VhcmNoKHEpIHtcclxuICAgICAgZmV0Y2goXCIvYXBpL3N1Z2dlc3Rpb25zP2NvbnRlbnQ9XCIgKyBxICsgXCImb3JkZXJbY3JlYXRlZEF0XT1kZXNjXCIsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAvLyBBdXRyZXMgZW4tdMOqdGVzIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ29taXQnLCAvLyBVdGlsaXNleiAnb21pdCcgcG91ciBuZSBwYXMgZW52b3llciBsZXMgY29va2llc1xyXG4gICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLmNvbW1lbnRzID0ganNvbltcIm1lbWJlclwiXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS50b3RhbENvbW1lbnRzID0gK2pzb25bXCJ0b3RhbEl0ZW1zXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLm5leHQgPSBqc29uW1widmlld1wiXVtcIm5leHRcIl0gPz8ganNvbltcInZpZXdcIl1bXCJsYXN0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnByZXYgPSBqc29uW1widmlld1wiXVtcInByZXZpb3VzXCJdID8/IGpzb25bXCJ2aWV3XCJdW1wiZmlyc3RcIl07XHJcbiAgICAgICAgICAgIHRoaXMuaXNEYXRhID0gKHRoaXMuc3RvcmUudG90YWxDb21tZW50cyA+IDApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICA7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlKCkge1xyXG4gICAgICBsZXQgaXRlbTtcclxuICAgICAgaWYgKHRoaXMuaXNJbmJveCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ29tbWVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBpdGVtID0gdGhpcy5zZWxlY3RlZENvbW1lbnRcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbSA9IHRoaXMuc3RvcmUuYWN0aXZlQ29tbWVudC5pZFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiAnRW4gw6p0ZXMgdm91cyBzw7tyZT8nLFxyXG4gICAgICAgICAgdGV4dDogXCJDZXR0ZSBhY3Rpb24gZXN0IGlycsOpdmVyc2libGUhXCIsXHJcbiAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIHN1cHByaW1lciAhJyxcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdOb24sIEFubnVsZXIhJyxcclxuICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXN1Y2Nlc3MgbXQtMicsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tZGFuZ2VyIG1zLTIgbXQtMicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICB0aXRsZTogJzxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlciB0ZXh0LXByaW1hcnkgbS0xXCIgcm9sZT1cInN0YXR1c1wiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAnICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgJyAgICAgICAgICA8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgIGljb246ICdpbmZvJyxcclxuICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgICBpdGVtczogaXRlbSAvLyBFbnZvaSBsZSB0YWJsZWF1IHNvdXMgbGEgY2zDqSAnaXRlbXMnXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmZXRjaCgnL2FkbWluL3N1Z2dlc3Rpb24vZGVsZXRlJywge1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyBNw6l0aG9kZSBIVFRQXHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyBJbmRpcXVlciBsZSB0eXBlIGRlIGNvbnRlbnVcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpIC8vIENvbnZlcnRpciBsJ29iamV0IGVuIGNoYcOubmUgSlNPTlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJldXIgZGFucyBsYSByZXF1w6p0ZTogJyArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7IC8vIFRyYWl0ZXIgbGEgcsOpcG9uc2UgZW4gSlNPTlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBmZXRjaChcIi9hcGkvc3VnZ2VzdGlvbnM/b3JkZXJbY3JlYXRlZEF0XT1kZXNjXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBBdXRyZXMgZW4tdMOqdGVzIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ29taXQnLCAvLyBVdGlsaXNleiAnb21pdCcgcG91ciBuZSBwYXMgZW52b3llciBsZXMgY29va2llc1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmNvbW1lbnRzID0ganNvbltcIm1lbWJlclwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS50b3RhbENvbW1lbnRzID0gK2pzb25bXCJ0b3RhbEl0ZW1zXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLm5leHQgPSBqc29uW1widmlld1wiXVtcIm5leHRcIl0gPz8ganNvbltcInZpZXdcIl1bXCJsYXN0XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnByZXYgPSBqc29uW1widmlld1wiXVtcInByZXZpb3VzXCJdID8/IGpzb25bXCJ2aWV3XCJdW1wiZmlyc3RcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEYXRhID0gKHRoaXMuc3RvcmUudG90YWxDb21tZW50cyA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjw6hzIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0xlcyBzdWdnZXN0aW9ucyBhIMOpdMOpIHN1cHByaW3DqScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSAvLyBHw6lyZXIgbGEgcsOpcG9uc2VcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyOicsIGVycm9yKTsgLy8gR8OpcmVyIGxlcyBlcnJldXJzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAvLyBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2Fsc1xyXG4gICAgICAgICAgICAgIHJlc3VsdC5kaXNtaXNzID09PSBTd2FsLkRpc21pc3NSZWFzb24uY2FuY2VsXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ0FubnVsw6knLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdBdWN1bmUgYWN0aW9uIG5cXCdhIMOpdMOpIMOpZmZlY3R1w6llIDopJyxcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWViZGNjZDQ4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWVzc2FnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWVzc2FnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvTWVzc2FnZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiZWJkY2NkNDhcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdlYmRjY2Q0OCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJ2ViZGNjZDQ4JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NZXNzYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYmRjY2Q0OFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCdlYmRjY2Q0OCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vU3VnZ2VzdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTE4ZDEzM2ZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWdnZXN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWdnZXN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9TdWdnZXN0aW9uLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIxMThkMTMzZlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzExOGQxMzNmJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMTE4ZDEzM2YnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Z2dlc3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTExOGQxMzNmXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzExOGQxMzNmJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9NZXNzYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TdWdnZXN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1N1Z2dlc3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTWVzc2FnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWJkY2NkNDhcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TdWdnZXN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMThkMTMzZlwiIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwic2VsZWN0MiIsIndpZHRoIiwiY3JlYXRlQXBwIiwiY3JlYXRlUGluaWEiLCJBcHAiLCJBcHAyIiwiYXBwIiwiYXBwMiIsInVzZSIsIm1vdW50IiwiZG9jdW1lbnQiLCJyZWFkeSIsImFkZEZvcm1Ub0NvbGxlY3Rpb25BdmFudGFnZVRpY2tldCIsImNsaWNrIiwiZSIsImxpc3QiLCJhdHRyIiwiJHdpZGdldCIsImluZGV4IiwidmFsIiwibmV3V2lkZ2V0IiwicmVwbGFjZSIsImRhdGEiLCJhcHBlbmQiLCJhZGRUYWdGb3JtRGVsZXRlTGlua0F2YW50YWdlVGlja2V0Iiwib24iLCJ0YXJnZXQiLCJyZW1vdmUiLCJhZGRGb3JtVG9Db2xsZWN0aW9uUGFnZUJhbm5pZXJlIiwiZHJvcGlmeSIsIm1lc3NhZ2VzIiwiZXJyb3IiLCJhZGRUYWdGb3JtRGVsZXRlTGlua1BhZ2VCYW5uaWVyZSIsImFkZEZvcm1Ub0NvbGxlY3Rpb25Qcm9kdWN0UHJpY2UiLCJhZGRUYWdGb3JtRGVsZXRlTGlua1Byb2R1Y3RQcmljZSIsImFkZEZvcm1Ub0NvbGxlY3Rpb25EZXRhaWxSZXBhcyIsImFkZFRhZ0Zvcm1EZWxldGVMaW5rRGV0YWlsUmVwYXMiLCJhZGRGb3JtVG9Db2xsZWN0aW9uU2VjdGlvbkRldGFpbFNlY3Rpb24iLCJhZGRUYWdGb3JtRGVsZXRlTGlua1NlY3Rpb25EZXRhaWxTZWN0aW9uIiwicmVmIiwiY29tcHV0ZWQiLCJkZWZpbmVTdG9yZSIsInVzZU1lc3NhZ2VTdG9yZSIsImlkU3RvcmUiLCJjb21tZW50cyIsIm5leHQiLCJwcmV2IiwicSIsInRvdGFsQ29tbWVudHMiLCJwYWdlIiwiYWN0aXZlQ29tbWVudCIsInN1YmplY3QiLCJtc2ciLCJtYXhQYWdlIiwiTWF0aCIsImNlaWwiLCJ2YWx1ZSIsInBhZ2luYXRlIiwic3RhcnQiLCJlbmQiLCJjb25jYXQiLCJ1c2VTdWdnZXN0aW9uU3RvcmUiLCJmb3JtYXREaXN0YW5jZVRvTm93IiwiZm9ybWF0IiwiZnIiLCJTd2FsIiwibmFtZSIsInN0b3JlIiwic2VsZWN0ZWRDb21tZW50IiwiaXNJbmJveCIsImlzRGF0YSIsImlzUmVwbHkiLCJtb3VudGVkIiwiX3RoaXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJfanNvbiR2aWV3JG5leHQiLCJfanNvbiR2aWV3JHByZXZpb3VzIiwibWV0aG9kcyIsImxpbmsiLCJfdGhpczIiLCJfanNvbiR2aWV3JG5leHQyIiwiX2pzb24kdmlldyRwcmV2aW91czIiLCJyZWZyZXNoIiwiX3RoaXMzIiwiX2pzb24kdmlldyRuZXh0MyIsIl9qc29uJHZpZXckcHJldmlvdXMzIiwiZ29JbmJveCIsImNhbmNlbFJlcGx5IiwiZ29EZXRhaWwiLCJjb21tZW50IiwiZ29SZXBseSIsImZvcm1hdERhdGUiLCJkYXRlIiwibG9jYWxlIiwidHJ1bmNhdGVyIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiYWdvIiwiRGF0ZSIsImFkZFN1ZmZpeCIsInNlYXJjaCIsIl90aGlzNCIsIl9qc29uJHZpZXckbmV4dDQiLCJfanNvbiR2aWV3JHByZXZpb3VzNCIsImRlbGV0ZSIsIl90aGlzNSIsInN0b3JlSWQiLCJpdGVtIiwiaWQiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsInJlc3VsdCIsInNob3dDbG9zZUJ1dHRvbiIsInNob3dDb25maXJtQnV0dG9uIiwiaXRlbXMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiX2pzb24kdmlldyRuZXh0NSIsIl9qc29uJHZpZXckcHJldmlvdXM1IiwiY29uc29sZSIsImRpc21pc3MiLCJEaXNtaXNzUmVhc29uIiwiY2FuY2VsIiwicmVwbHkiLCJfdGhpczYiLCJ0byIsImVtYWlsIiwibWVzc2FnZSIsIl9qc29uJHZpZXckbmV4dDYiLCJfanNvbiR2aWV3JHByZXZpb3VzNiIsImtleSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2hvaXN0ZWRfMSIsIiRkYXRhIiwiX2hvaXN0ZWRfMiIsIl9ob2lzdGVkXzMiLCJfaG9pc3RlZF80IiwiX2hvaXN0ZWRfNSIsInBsYWNlaG9sZGVyIiwiX2NhY2hlIiwiJGV2ZW50IiwidHlwZSIsIl9ob2lzdGVkXzYiLCJvbkNsaWNrIiwiX3dpdGhNb2RpZmllcnMiLCIkb3B0aW9ucyIsIl9ob2lzdGVkXzciLCJfaG9pc3RlZF84IiwiaHJlZiIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfaG9pc3RlZF85IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaG9pc3RlZF8xMCIsIl90b0Rpc3BsYXlTdHJpbmciLCJfaG9pc3RlZF8xMSIsIl9ob2lzdGVkXzEyIiwiX3JlbmRlckxpc3QiLCJfaG9pc3RlZF8xMyIsIl9ob2lzdGVkXzE0IiwiX2hvaXN0ZWRfMTUiLCJfaG9pc3RlZF8xNiIsImZ1bGxOYW1lIiwiX2hvaXN0ZWRfMTciLCJjb250ZW50IiwiX2hvaXN0ZWRfMTgiLCJjcmVhdGVkQXQiLCJfaG9pc3RlZF8xOSIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfaG9pc3RlZF8yMCIsIl9ob2lzdGVkXzIxIiwiX2hvaXN0ZWRfMjIiLCJfaG9pc3RlZF8yMyIsIl9ob2lzdGVkXzI0IiwiX2hvaXN0ZWRfMjUiLCJfaG9pc3RlZF8yNiIsIl9ob2lzdGVkXzI3IiwiX2hvaXN0ZWRfMjgiLCJfaG9pc3RlZF8yOSIsIl9ob2lzdGVkXzMwIiwiX2hvaXN0ZWRfMzEiLCJfaG9pc3RlZF8zMiIsIl9ob2lzdGVkXzMzIiwiYWx0Iiwic3JjIiwiX2hvaXN0ZWRfMzQiLCJfaG9pc3RlZF8zNSIsIl9ob2lzdGVkXzM2IiwiX2hvaXN0ZWRfMzciLCJfaG9pc3RlZF8zOCIsIl9ob2lzdGVkXzM5IiwiX2hvaXN0ZWRfNDAiLCJfaG9pc3RlZF80MSIsIl9ob2lzdGVkXzQyIiwiX2hvaXN0ZWRfNDMiLCJfaG9pc3RlZF80NCIsIl9ob2lzdGVkXzQ1IiwiX2hvaXN0ZWRfNDYiLCJfaG9pc3RlZF80NyIsIl9ob2lzdGVkXzQ4IiwiX2hvaXN0ZWRfNDkiLCJfaG9pc3RlZF81MCIsInJlYWRvbmx5IiwiX2hvaXN0ZWRfNTEiLCJfaG9pc3RlZF81MiIsIl9ob2lzdGVkXzUzIiwiX2hvaXN0ZWRfNTQiLCJfaG9pc3RlZF81NSIsIl9ob2lzdGVkXzU2Iiwicm93cyIsIl9ob2lzdGVkXzU3IiwiX2hvaXN0ZWRfNTgiXSwic291cmNlUm9vdCI6IiJ9