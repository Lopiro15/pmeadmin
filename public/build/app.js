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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QndEO0FBQ1Y7QUFDTDs7QUFFeEQsQ0FBZ0Y7QUFDaEYsaUNBQWlDLHlGQUFlLENBQUMsK0VBQU0sYUFBYSxpRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ1TDs7Ozs7Ozs7Ozs7Ozs7OztBQ0FHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFyYW1ldHJhZ2UvYWRkLWNvbGxlY3Rpb24tcGFnZS1pbWFnZUJhbm5pZXJlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYXJhbWV0cmFnZS9hZGQtY29sbGVjdGlvbi1yZXBhcy1kZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhcmFtZXRyYWdlL2FkZC1jb2xsZWN0aW9uLXNlY3Rpb24tZGV0YWlsU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3RvcmVzL21lc3NhZ2VTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3RvcmVzL3N1Z2dlc3Rpb25TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9NZXNzYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TdWdnZXN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3Njc3Mvc3R5bGUuc2Nzcz8zZjFhIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz85ZDcxIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvY3NzL2ljb24tbGlzdC5jc3M/ZGQ5ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Nzcy9pY29ucy5jc3M/NzdiMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Nzcy9wbHVnaW4uY3NzPzI3YWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9jc3MvcGx1Z2lucy5jc3M/NjQwNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3N3aXRjaGVyY3NzL2RlbW8uY3NzP2Y0MTgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9zd2l0Y2hlcmNzcy9zd2l0Y2hlci5jc3M/YzBjZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2ViLWZvbnRzL2ZvbnQtYXdlc29tZS9mb250LWF3ZXNvbWUubWluLmNzcz8wMWYwIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL01lc3NhZ2UudnVlPzkwMDMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU3VnZ2VzdGlvbi52dWU/OWQxYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9NZXNzYWdlLnZ1ZT9iYzViIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1N1Z2dlc3Rpb24udnVlPzRhZDUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWVzc2FnZS52dWU/MzZiYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TdWdnZXN0aW9uLnZ1ZT8yY2VlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5cbmltcG9ydCAnLi9zdHlsZXMvY3NzL2ljb24tbGlzdC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9jc3MvcGx1Z2luLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2Nzcy9pY29ucy5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL3dlYi1mb250cy9mb250LWF3ZXNvbWUvZm9udC1hd2Vzb21lLm1pbi5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9jc3MvcGx1Z2lucy5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zd2l0Y2hlcmNzcy9zd2l0Y2hlci5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zd2l0Y2hlcmNzcy9kZW1vLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5cbnJlcXVpcmUoJy4vanMvcGFyYW1ldHJhZ2UvYWRkLWNvbGxlY3Rpb24tcmVwYXMtZGV0YWlsJyk7XG5yZXF1aXJlKCcuL2pzL3BhcmFtZXRyYWdlL2FkZC1jb2xsZWN0aW9uLXBhZ2UtaW1hZ2VCYW5uaWVyZScpO1xucmVxdWlyZSgnLi9qcy9wYXJhbWV0cmFnZS9hZGQtY29sbGVjdGlvbi1zZWN0aW9uLWRldGFpbFNlY3Rpb24nKTtcblxuJCgnc2VsZWN0LnNlbGVjdDInKS5zZWxlY3QyKHt3aWR0aDogJzEwMCUnfSk7XG5cbi8vIGNvbnN0ICQgPSByZXF1aXJlKCcuL3BsdWdpbnMvanF1ZXJ5L2pxdWVyeS5taW4nKTtcbi8vIGdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XG4vLyBnbG9iYWwualF1ZXJ5ID0gJDtcbi8vXG4vLyBpbXBvcnQgdG9hc3RyIGZyb20gJ3RvYXN0cic7XG4vLyBnbG9iYWwudG9hc3RyID0gdG9hc3RyO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbi8vIGltcG9ydCAnLi9ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgY3JlYXRlUGluaWEgfSBmcm9tICdwaW5pYSdcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL01lc3NhZ2UudnVlJztcbmltcG9ydCBBcHAyIGZyb20gJy4vY29tcG9uZW50cy9TdWdnZXN0aW9uLnZ1ZSc7XG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKVxuY29uc3QgYXBwMiA9IGNyZWF0ZUFwcChBcHAyKVxuXG5hcHAudXNlKGNyZWF0ZVBpbmlhKCkpXG5hcHAubW91bnQoJyNhcHBNZXNzYWdlJylcblxuYXBwMi51c2UoY3JlYXRlUGluaWEoKSlcbmFwcDIubW91bnQoJyNhcHBTdWdnZXN0aW9uJylcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGFkZEZvcm1Ub0NvbGxlY3Rpb25QYWdlQmFubmllcmUgPSAoKSA9PiB7XHJcbiAgICAgICAgJCgnI0FkZEltYWdlQmFubmllcmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gJCgkKHRoaXMpLmF0dHIoJ2RhdGEtbGlzdC1zZWxlY3RvcicpKTtcclxuICAgICAgICAgICAgY29uc3QgJHdpZGdldCA9ICQoJyN3aWRnZXQtY291bnRlci1pbWFnZS1iYW5uaWVyZXMnKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSArJHdpZGdldC52YWwoKTtcclxuICAgICAgICAgICAgLy8gVHJ5IHRvIGZpbmQgdGhlIGNvdW50ZXIgb2YgdGhlIGxpc3Qgb3IgdXNlIHRoZSBsZW5ndGggb2YgdGhlIGxpc3RcclxuXHJcbiAgICAgICAgICAgIC8vIGdyYWIgdGhlIHByb3RvdHlwZSB0ZW1wbGF0ZVxyXG4gICAgICAgICAgICBsZXQgbmV3V2lkZ2V0ID0gbGlzdC5hdHRyKCdkYXRhLXByb3RvdHlwZScpO1xyXG4gICAgICAgICAgICAvLyByZXBsYWNlIHRoZSBcIl9fbmFtZV9fXCIgdXNlZCBpbiB0aGUgaWQgYW5kIG5hbWUgb2YgdGhlIHByb3RvdHlwZVxyXG4gICAgICAgICAgICAvLyB3aXRoIGEgbnVtYmVyIHRoYXQncyB1bmlxdWUgdG8geW91ciBlbWFpbHNcclxuICAgICAgICAgICAgLy8gZW5kIG5hbWUgYXR0cmlidXRlIGxvb2tzIGxpa2UgbmFtZT1cImNvbnRhY3RbZW1haWxzXVsyXVwiXHJcbiAgICAgICAgICAgIG5ld1dpZGdldCA9IG5ld1dpZGdldC5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XHJcbiAgICAgICAgICAgIC8vIEluY3JlYXNlIHRoZSBjb3VudGVyXHJcbiAgICAgICAgICAgICR3aWRnZXQudmFsKGluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIC8vIEFuZCBzdG9yZXMgaXQsIHRoZSBsZW5ndGggY2Fubm90IGJlIHVzZWQgaWYgZGVsZXRpbmcgd2lkZ2V0cyBpcyBhbGxvd2VkXHJcbiAgICAgICAgICAgIGxpc3QuZGF0YSgnd2lkZ2V0LWNvdW50ZXItaW1hZ2UtYmFubmllcmVzJywgaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGxpc3QgZWxlbWVudCBhbmQgYWRkIGl0IHRvIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICQoJyN0YWJsZS1jb2xsZWN0aW9uLWltYWdlLWJhbm5pZXJlcycpLmFwcGVuZChuZXdXaWRnZXQpO1xyXG4gICAgICAgICAgICAkKCcuZHJvcGlmeScpLmRyb3BpZnkoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnZGVmYXVsdCc6ICdHbGlzc2V6LWTDqXBvc2V6IHVuIGZpY2hpZXIgaWNpIG91IGNsaXF1ZXogc3VyJyxcclxuICAgICAgICAgICAgICAgICAgICAncmVwbGFjZSc6ICdHbGlzc2VyLWTDqXBvc2VyIG91IGNsaXF1ZXIgcG91ciByZW1wbGFjZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZW1vdmUnOiAnU3VwcHJpbWVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnZXJyb3InOiAnT29vcHMsIHF1ZWxxdWUgY2hvc2UgZFxcJ2Vycm9uw6kgYSDDqXTDqSBham91dMOpLidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICdmaWxlU2l6ZSc6ICdUaGUgZmlsZSBzaXplIGlzIHRvbyBiaWcgKDVNIG1heCkuJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWRkVGFnRm9ybURlbGV0ZUxpbmtQYWdlQmFubmllcmUobmV3V2lkZ2V0KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkVGFnRm9ybURlbGV0ZUxpbmtQYWdlQmFubmllcmUgPSAoKSA9PiB7XHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuZGVsZXRlLWltYWdlLWJhbm5pZXJlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XHJcbiAgICAgICAgICAgICQodGFyZ2V0KS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgYWRkRm9ybVRvQ29sbGVjdGlvblBhZ2VCYW5uaWVyZSgpO1xyXG4gICAgYWRkVGFnRm9ybURlbGV0ZUxpbmtQYWdlQmFubmllcmUoKTtcclxufSk7XHJcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGFkZEZvcm1Ub0NvbGxlY3Rpb25EZXRhaWxSZXBhcyA9ICgpID0+IHtcclxuICAgICAgICAkKCcjQWRkRGV0YWlsUmVwYXMnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gJCgkKHRoaXMpLmF0dHIoJ2RhdGEtbGlzdC1zZWxlY3RvcicpKTtcclxuICAgICAgICAgICAgY29uc3QgJHdpZGdldCA9ICQoJyN3aWRnZXQtY291bnRlci1kZXRhaWwtcmVwYXMnKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSArJHdpZGdldC52YWwoKTtcclxuICAgICAgICAgICAgLy8gVHJ5IHRvIGZpbmQgdGhlIGNvdW50ZXIgb2YgdGhlIGxpc3Qgb3IgdXNlIHRoZSBsZW5ndGggb2YgdGhlIGxpc3RcclxuXHJcbiAgICAgICAgICAgIC8vIGdyYWIgdGhlIHByb3RvdHlwZSB0ZW1wbGF0ZVxyXG4gICAgICAgICAgICBsZXQgbmV3V2lkZ2V0ID0gbGlzdC5hdHRyKCdkYXRhLXByb3RvdHlwZScpO1xyXG4gICAgICAgICAgICAvLyByZXBsYWNlIHRoZSBcIl9fbmFtZV9fXCIgdXNlZCBpbiB0aGUgaWQgYW5kIG5hbWUgb2YgdGhlIHByb3RvdHlwZVxyXG4gICAgICAgICAgICAvLyB3aXRoIGEgbnVtYmVyIHRoYXQncyB1bmlxdWUgdG8geW91ciBlbWFpbHNcclxuICAgICAgICAgICAgLy8gZW5kIG5hbWUgYXR0cmlidXRlIGxvb2tzIGxpa2UgbmFtZT1cImNvbnRhY3RbZW1haWxzXVsyXVwiXHJcbiAgICAgICAgICAgIG5ld1dpZGdldCA9IG5ld1dpZGdldC5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XHJcbiAgICAgICAgICAgIC8vIEluY3JlYXNlIHRoZSBjb3VudGVyXHJcbiAgICAgICAgICAgICR3aWRnZXQudmFsKGluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIC8vIEFuZCBzdG9yZXMgaXQsIHRoZSBsZW5ndGggY2Fubm90IGJlIHVzZWQgaWYgZGVsZXRpbmcgd2lkZ2V0cyBpcyBhbGxvd2VkXHJcbiAgICAgICAgICAgIGxpc3QuZGF0YSgnd2lkZ2V0LWNvdW50ZXItZGV0YWlsLXJlcGFzJywgaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGxpc3QgZWxlbWVudCBhbmQgYWRkIGl0IHRvIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICQoJyN0YWJsZS1jb2xsZWN0aW9uLWRldGFpbC1yZXBhcycpLmFwcGVuZChuZXdXaWRnZXQpO1xyXG4gICAgICAgICAgICAkKCcuZHJvcGlmeScpLmRyb3BpZnkoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnZGVmYXVsdCc6ICdHbGlzc2V6LWTDqXBvc2V6IHVuIGZpY2hpZXIgaWNpIG91IGNsaXF1ZXogc3VyJyxcclxuICAgICAgICAgICAgICAgICAgICAncmVwbGFjZSc6ICdHbGlzc2VyLWTDqXBvc2VyIG91IGNsaXF1ZXIgcG91ciByZW1wbGFjZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZW1vdmUnOiAnU3VwcHJpbWVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnZXJyb3InOiAnT29vcHMsIHF1ZWxxdWUgY2hvc2UgZFxcJ2Vycm9uw6kgYSDDqXTDqSBham91dMOpLidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICdmaWxlU2l6ZSc6ICdUaGUgZmlsZSBzaXplIGlzIHRvbyBiaWcgKDE1TSBtYXgpLidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJy5zZWxlY3QyJykuc2VsZWN0MigpXHJcbiAgICAgICAgICAgIGFkZFRhZ0Zvcm1EZWxldGVMaW5rRGV0YWlsUmVwYXMobmV3V2lkZ2V0KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkVGFnRm9ybURlbGV0ZUxpbmtEZXRhaWxSZXBhcyA9ICgpID0+IHtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5kZWxldGUtZGV0YWlsLXJlcGFzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XHJcbiAgICAgICAgICAgICQodGFyZ2V0KS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgYWRkRm9ybVRvQ29sbGVjdGlvbkRldGFpbFJlcGFzKCk7XHJcbiAgICBhZGRUYWdGb3JtRGVsZXRlTGlua0RldGFpbFJlcGFzKCk7XHJcbn0pO1xyXG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBhZGRGb3JtVG9Db2xsZWN0aW9uU2VjdGlvbkRldGFpbFNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgJCgnI0FkZERldGFpbFNlY3Rpb25zJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY29uc3QgbGlzdCA9ICQoJCh0aGlzKS5hdHRyKCdkYXRhLWxpc3Qtc2VsZWN0b3InKSk7XHJcbiAgICAgICAgICAgIGNvbnN0ICR3aWRnZXQgPSAkKCcjd2lkZ2V0LWNvdW50ZXItZGV0YWlsLXNlY3Rpb25zJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gKyR3aWRnZXQudmFsKCk7XHJcbiAgICAgICAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSBjb3VudGVyIG9mIHRoZSBsaXN0IG9yIHVzZSB0aGUgbGVuZ3RoIG9mIHRoZSBsaXN0XHJcblxyXG4gICAgICAgICAgICAvLyBncmFiIHRoZSBwcm90b3R5cGUgdGVtcGxhdGVcclxuICAgICAgICAgICAgbGV0IG5ld1dpZGdldCA9IGxpc3QuYXR0cignZGF0YS1wcm90b3R5cGUnKTtcclxuICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgXCJfX25hbWVfX1wiIHVzZWQgaW4gdGhlIGlkIGFuZCBuYW1lIG9mIHRoZSBwcm90b3R5cGVcclxuICAgICAgICAgICAgLy8gd2l0aCBhIG51bWJlciB0aGF0J3MgdW5pcXVlIHRvIHlvdXIgZW1haWxzXHJcbiAgICAgICAgICAgIC8vIGVuZCBuYW1lIGF0dHJpYnV0ZSBsb29rcyBsaWtlIG5hbWU9XCJjb250YWN0W2VtYWlsc11bMl1cIlxyXG4gICAgICAgICAgICBuZXdXaWRnZXQgPSBuZXdXaWRnZXQucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpO1xyXG4gICAgICAgICAgICAvLyBJbmNyZWFzZSB0aGUgY291bnRlclxyXG4gICAgICAgICAgICAkd2lkZ2V0LnZhbChpbmRleCArIDEpO1xyXG4gICAgICAgICAgICAvLyBBbmQgc3RvcmVzIGl0LCB0aGUgbGVuZ3RoIGNhbm5vdCBiZSB1c2VkIGlmIGRlbGV0aW5nIHdpZGdldHMgaXMgYWxsb3dlZFxyXG4gICAgICAgICAgICBsaXN0LmRhdGEoJ3dpZGdldC1jb3VudGVyLWRldGFpbC1zZWN0aW9ucycsIGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBsaXN0IGVsZW1lbnQgYW5kIGFkZCBpdCB0byB0aGUgbGlzdFxyXG4gICAgICAgICAgICAkKCcjdGFibGUtY29sbGVjdGlvbi1kZXRhaWwtc2VjdGlvbnMnKS5hcHBlbmQobmV3V2lkZ2V0KTtcclxuICAgICAgICAgICAgJCgnLmRyb3BpZnknKS5kcm9waWZ5KHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2RlZmF1bHQnOiAnR2xpc3Nlei1kw6lwb3NleiB1biBmaWNoaWVyIGljaSBvdSBjbGlxdWV6IHN1cicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JlcGxhY2UnOiAnR2xpc3Nlci1kw6lwb3NlciBvdSBjbGlxdWVyIHBvdXIgcmVtcGxhY2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAncmVtb3ZlJzogJ1N1cHByaW1lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Vycm9yJzogJ09vb3BzLCBxdWVscXVlIGNob3NlIGRcXCdlcnJvbsOpIGEgw6l0w6kgYWpvdXTDqS4nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAnZmlsZVNpemUnOiAnVGhlIGZpbGUgc2l6ZSBpcyB0b28gYmlnICg1TSBtYXgpLidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFkZFRhZ0Zvcm1EZWxldGVMaW5rU2VjdGlvbkRldGFpbFNlY3Rpb24obmV3V2lkZ2V0KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkVGFnRm9ybURlbGV0ZUxpbmtTZWN0aW9uRGV0YWlsU2VjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5kZWxldGUtZGV0YWlsLXNlY3Rpb25zJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XHJcbiAgICAgICAgICAgICQodGFyZ2V0KS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgYWRkRm9ybVRvQ29sbGVjdGlvblNlY3Rpb25EZXRhaWxTZWN0aW9uKCk7XHJcbiAgICBhZGRUYWdGb3JtRGVsZXRlTGlua1NlY3Rpb25EZXRhaWxTZWN0aW9uKCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyByZWYsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xyXG5pbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gJ3BpbmlhJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZU1lc3NhZ2VTdG9yZSA9IGRlZmluZVN0b3JlKCdtZXNzYWdlJywgKCkgPT4ge1xyXG4gICAgY29uc3QgaWRTdG9yZSA9IHJlZigwKVxyXG4gICAgY29uc3QgY29tbWVudHMgPSByZWYoW10pXHJcbiAgICBjb25zdCBuZXh0ID0gcmVmKFwiXCIpXHJcbiAgICBjb25zdCBwcmV2ID0gcmVmKFwiXCIpXHJcbiAgICBjb25zdCBxID0gcmVmKFwiXCIpXHJcbiAgICBjb25zdCB0b3RhbENvbW1lbnRzID0gcmVmKDApXHJcbiAgICBjb25zdCBwYWdlID0gcmVmKDApXHJcbiAgICBjb25zdCBhY3RpdmVDb21tZW50ID0gcmVmKFwiXCIpXHJcbiAgICBjb25zdCBzdWJqZWN0ID0gcmVmKFwiXCIpXHJcbiAgICBjb25zdCBtc2cgPSByZWYoXCJcIilcclxuXHJcbiAgICBjb25zdCBtYXhQYWdlID0gY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoK3RvdGFsQ29tbWVudHMudmFsdWUgLyAxMCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHBhZ2luYXRlID0gY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgIGxldCBzdGFydCA9IChwYWdlLnZhbHVlIC0gMSkgKiAxMCArIDE7XHJcbiAgICAgICAgbGV0IGVuZCA9IHBhZ2UudmFsdWUgKiAxMDtcclxuXHJcbiAgICAgICAgaWYgKGVuZCA+IHRvdGFsQ29tbWVudHMudmFsdWUpIHtcclxuICAgICAgICAgICAgZW5kID0gdG90YWxDb21tZW50cy52YWx1ZTsgLy8gTmUgZMOpcGFzc2UgcGFzIGxlIG5vbWJyZSB0b3RhbCBkJ2l0ZW1zXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG90YWxDb21tZW50cy52YWx1ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBzdGFydCA9IDBcclxuICAgICAgICAgICAgZW5kID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGAke3N0YXJ0fSAtICR7ZW5kfWA7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWRTdG9yZSxcclxuICAgICAgICBjb21tZW50cyxcclxuICAgICAgICBwcmV2LFxyXG4gICAgICAgIG5leHQsXHJcbiAgICAgICAgcSxcclxuICAgICAgICB0b3RhbENvbW1lbnRzLFxyXG4gICAgICAgIHBhZ2UsXHJcbiAgICAgICAgcGFnaW5hdGUsXHJcbiAgICAgICAgbWF4UGFnZSxcclxuICAgICAgICBhY3RpdmVDb21tZW50LFxyXG4gICAgICAgIHN1YmplY3QsXHJcbiAgICAgICAgbXNnXHJcbiAgICB9XHJcbn0pIiwiaW1wb3J0IHsgcmVmLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcclxuaW1wb3J0IHsgZGVmaW5lU3RvcmUgfSBmcm9tICdwaW5pYSdcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdWdnZXN0aW9uU3RvcmUgPSBkZWZpbmVTdG9yZSgnc3VnZ2VzdGlvbicsICgpID0+IHtcclxuICAgIGNvbnN0IGlkU3RvcmUgPSByZWYoMClcclxuICAgIGNvbnN0IGNvbW1lbnRzID0gcmVmKFtdKVxyXG4gICAgY29uc3QgbmV4dCA9IHJlZihcIlwiKVxyXG4gICAgY29uc3QgcHJldiA9IHJlZihcIlwiKVxyXG4gICAgY29uc3QgcSA9IHJlZihcIlwiKVxyXG4gICAgY29uc3QgdG90YWxDb21tZW50cyA9IHJlZigwKVxyXG4gICAgY29uc3QgcGFnZSA9IHJlZigwKVxyXG4gICAgY29uc3QgYWN0aXZlQ29tbWVudCA9IHJlZihcIlwiKVxyXG4gICAgY29uc3Qgc3ViamVjdCA9IHJlZihcIlwiKVxyXG4gICAgY29uc3QgbXNnID0gcmVmKFwiXCIpXHJcblxyXG4gICAgY29uc3QgbWF4UGFnZSA9IGNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKCt0b3RhbENvbW1lbnRzLnZhbHVlIC8gMTApO1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBwYWdpbmF0ZSA9IGNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICBsZXQgc3RhcnQgPSAocGFnZS52YWx1ZSAtIDEpICogMTAgKyAxO1xyXG4gICAgICAgIGxldCBlbmQgPSBwYWdlLnZhbHVlICogMTA7XHJcblxyXG4gICAgICAgIGlmIChlbmQgPiB0b3RhbENvbW1lbnRzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGVuZCA9IHRvdGFsQ29tbWVudHMudmFsdWU7IC8vIE5lIGTDqXBhc3NlIHBhcyBsZSBub21icmUgdG90YWwgZCdpdGVtc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRvdGFsQ29tbWVudHMudmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgc3RhcnQgPSAwXHJcbiAgICAgICAgICAgIGVuZCA9IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBgJHtzdGFydH0gLSAke2VuZH1gO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkU3RvcmUsXHJcbiAgICAgICAgY29tbWVudHMsXHJcbiAgICAgICAgcHJldixcclxuICAgICAgICBuZXh0LFxyXG4gICAgICAgIHEsXHJcbiAgICAgICAgdG90YWxDb21tZW50cyxcclxuICAgICAgICBwYWdlLFxyXG4gICAgICAgIHBhZ2luYXRlLFxyXG4gICAgICAgIG1heFBhZ2UsXHJcbiAgICAgICAgYWN0aXZlQ29tbWVudCxcclxuICAgICAgICBzdWJqZWN0LFxyXG4gICAgICAgIG1zZ1xyXG4gICAgfVxyXG59KSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicm93IHJvdy1zbVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC14bC0xMiBjb2wtbGctMTIgIG1haW4tY29udGVudC1ib2R5LW1haWwxXCIgdi1pZj1cImlzSW5ib3hcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY3VzdG9tLWNhcmQgbWFpbC1jb250YWluZXIgdGFzay1jb250YWluZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluYm94LWJvZHkgcC00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWFpbi1tYWlsLXNlYXJjaFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZXIgTWVzc2FnZS4uLlwiIHYtbW9kZWw9XCJ0aGlzLnN0b3JlLnFcIiB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2sucHJldmVudD1cInNlYXJjaCh0aGlzLnN0b3JlLnEpXCIgdHlwZT1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1zZWFyY2hcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1haWwtb3B0aW9uIG10LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBoaWRkZW4tcGhvbmVcIj5cclxuICAgICAgICAgICAgICA8YSBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiYnRuIG1pbmkgYmx1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgUGx1c1xyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmZSBmZS1jaGV2cm9uLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgQGNsaWNrLnByZXZlbnQ9XCJ0aGlzLmRlbGV0ZVwiPjxpIGNsYXNzPVwiZmUgZmUtdHJhc2ggbWUtMlwiPjwvaT4gU3VwcHJpbWVyPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInVuc3R5bGVkIGluYm94LXBhZ2luYXRpb25cIiB2LXNob3c9XCJpc0luYm94ICYmIGlzRGF0YVwiPlxyXG4gICAgICAgICAgICAgIDxsaT48c3Bhbj57eyB0aGlzLnN0b3JlLnBhZ2luYXRlIH19IGRlIHt7IHRoaXMuc3RvcmUudG90YWxDb21tZW50cyB9fTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1pbmJveCB0ZXh0LW1kLW5vd3JhcCB0YWJsZS1ob3ZlciB0ZXh0LW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgIDx0Ym9keSB2LXNob3c9XCJpc0luYm94ICYmIGlzRGF0YVwiPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzcz1cIlwiIHYtZm9yPVwiKGNvbW1lbnQsIGluZGV4KSBpbiB0aGlzLnN0b3JlLmNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJpbmJveC1zbWFsbC1jZWxsc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgOmlkPVwiJ2NoaycgKyBpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImNvbW1lbnQuaWRcIiB2LW1vZGVsPVwic2VsZWN0ZWRDb21tZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ2aWV3LW1lc3NhZ2UgZG9udC1zaG93IHR4LXNlbWlib2xkIGNsaWNrYWJsZS1yb3dcIiBAY2xpY2s9XCJnb0RldGFpbChjb21tZW50KVwiIGRhdGEtaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICB7eyBjb21tZW50LmZ1bGxOYW1lIH19XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidmlldy1tZXNzYWdlIHR4LWxpZ2h0IGNsaWNrYWJsZS1yb3dcIiBAY2xpY2s9XCJnb0RldGFpbChjb21tZW50KVwiIGRhdGEtaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICB7eyB0aGlzLnRydW5jYXRlcihjb21tZW50LmNvbnRlbnQsIDkyKSB9fVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInZpZXctbWVzc2FnZSB0ZXh0LWVuZCB0eC1zZW1pYm9sZCBjbGlja2FibGUtcm93XCIgQGNsaWNrPVwiZ29EZXRhaWwoY29tbWVudClcIiBkYXRhLWhyZWY9XCJcIj5cclxuICAgICAgICAgICAgICAgICAge3sgdGhpcy5hZ28oY29tbWVudC5jcmVhdGVkQXQpIH19XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8dGJvZHkgdi1zaG93PVwiIWlzRGF0YVwiPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1tdXRlZCB0ZXh0LWNlbnRlclwiPkF1Y3VuIE1lc3NhZ2U8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gbWFpbC1jb250ZW50IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG1zLTMgbWItNFwiIHYtc2hvdz1cImlzSW5ib3ggJiYgaXNEYXRhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyByb3ctc21cIj5cclxuICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb24ganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwicGFnaW5hdGUodGhpcy5zdG9yZS5wcmV2LCAtMSlcIj5QcmV2PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZS1pdGVtXCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiamF2YXNjcmlwdDo7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCJwYWdpbmF0ZSh0aGlzLnN0b3JlLm5leHQsIDEpXCI+TmV4dDwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG5cclxuICA8ZGl2IGNsYXNzPVwicm93IHJvdy1zbVwiIHYtaWY9XCIhaXNJbmJveFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiBjb2wteGwtMTIgY29sLW1kLTEyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGN1c3RvbS1jYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBoLTEwMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVtYWlsLW1lZGlhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi00IGQtbGctZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxoMz5EZXRhaWwgTWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1zLWF1dG8gZC1ub25lIGQtbWQtZmxleCBmcy0xOFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIEBjbGljay5wcmV2ZW50PVwiZ29JbmJveFwiIGNsYXNzPVwiY29udGFjdC1pY29uIHRleHQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlwiIGRhdGEtYnMtb3JpZ2luYWwtdGl0bGU9XCJUYWdcIiBhcmlhLWxhYmVsPVwiSW5ib3hcIj48aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmUgZmUtaW5ib3hcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhIG10LTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1pbWctdXNlciBhdmF0YXItbWQgbWUtMyBvbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiYXZhdGFyXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCInaHR0cHM6Ly91aS1hdmF0YXJzLmNvbS9hcGkvP2JhY2tncm91bmQ9cmFuZG9tJmZvbnQ9MDAwJm5hbWU9JyArIHRoaXMuc3RvcmUuYWN0aXZlQ29tbWVudC5mdWxsTmFtZVwiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IHR4LWludmVyc2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdC1lbmQgZC1ub25lIGQtbWQtZmxleCBmcy0xNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWUtM1wiPnt7IGZvcm1hdERhdGUodGhpcy5zdG9yZS5hY3RpdmVDb21tZW50LmNyZWF0ZWRBdCkgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLXRpdGxlIGZvbnQtd2VpZ2h0LW5vcm1hbFwiPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0eC0xOCB0eC1tZWRpdW1cIj57eyB0aGlzLnN0b3JlLmFjdGl2ZUNvbW1lbnQuZnVsbE5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMCB0ZXh0LW11dGVkXCI+e3sgdGhpcy5zdG9yZS5hY3RpdmVDb21tZW50LmVtYWlsIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJtZS0yIGQtbWQtbm9uZVwiPnt7IGZvcm1hdERhdGUodGhpcy5zdG9yZS5hY3RpdmVDb21tZW50LmNyZWF0ZWRBdCkgfX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWFtaWwtYm9keVwiPlxyXG4gICAgICAgICAgICA8cD57eyB0aGlzLnN0b3JlLmFjdGl2ZUNvbW1lbnQuY29udGVudCB9fTwvcD5cclxuICAgICAgICAgICAgPGhyIGNsYXNzPVwibWVzc2FnZS1pbm5lci1zZXBhcmF0b3JcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXNtIHJpcHBsZSBidG4tcHJpbWFyeSBtdC0xIG1iLTFcIiBAY2xpY2sucHJldmVudD1cImdvUmVwbHkodGhpcy5zdG9yZS5hY3RpdmVDb21tZW50KVwiXHJcbiAgICAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDo7XCI+PGkgY2xhc3M9XCJmYSBmYS1yZXBseVwiPjwvaT4gUmVwb25kcmU8L2E+XHJcbiAgICAgICAgICA8IS0tICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1zbSByaXBwbGUgYnRuLXNlY29uZGFyeSBtdC0xIG1iLTFcIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+PGkgY2xhc3M9XCJmYSBmYS1zaGFyZVwiPjwvaT4gRm9yd2FyZDwvYT4tLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcblxyXG4gIDxkaXYgY2xhc3M9XCJyb3cgcm93LXNtXCIgdi1pZj1cImlzUmVwbHlcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgY29sLXhsLTEyIGNvbC1tZC0xMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjdXN0b20tY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZSB0eC0xOFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtYWluLWNvbnRlbnQtbGFiZWwgdHgtMTVcIj5Sw6lwb25kcmU8L2xhYmVsPlxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTMgY29sLXhsLTIgZm9ybS1sYWJlbCB0eC1zZW1pYm9sZFwiPkE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05IGNvbC14bC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJlYWRvbmx5PVwicmVhZG9ubHlcIiB2LW1vZGVsPVwidGhpcy5zdG9yZS5hY3RpdmVDb21tZW50LmVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1zbS0zIGNvbC14bC0yIGZvcm0tbGFiZWwgdHgtc2VtaWJvbGRcIj5TdWpldDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTkgY29sLXhsLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInRoaXMuc3RvcmUuc3ViamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1zbS0zIGNvbC14bC0yIGZvcm0tbGFiZWwgdHgtc2VtaWJvbGRcIj5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOSBjb2wteGwtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCIxMFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInRoaXMuc3RvcmUubXNnXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXIgZC1zbS1mbGV4XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWxpc3QgbXMtYXV0b1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiBAY2xpY2sucHJldmVudD1cImNhbmNlbFJlcGx5XCI+QW5udWxlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrLnByZXZlbnQ9XCJyZXBseVwiPkVudm95ZXI8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7dXNlTWVzc2FnZVN0b3JlfSBmcm9tIFwiLi4vc3RvcmVzL21lc3NhZ2VTdG9yZVwiO1xyXG5pbXBvcnQge2Zvcm1hdERpc3RhbmNlVG9Ob3d9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHtmcn0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiTWVzc2FnZVwiLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdG9yZTogdXNlTWVzc2FnZVN0b3JlKCksXHJcbiAgICAgIHNlbGVjdGVkQ29tbWVudDogW10sXHJcbiAgICAgIGlzSW5ib3g6IHRydWUsXHJcbiAgICAgIGlzRGF0YTogZmFsc2UsXHJcbiAgICAgIGlzUmVwbHk6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgZmV0Y2goXCIvYXBpL21lc3NhZ2VzP29yZGVyW2NyZWF0ZWRBdF09ZGVzY1wiLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIC8vIEF1dHJlcyBlbi10w6p0ZXMgc2kgbsOpY2Vzc2FpcmVcclxuICAgICAgfSxcclxuICAgICAgY3JlZGVudGlhbHM6ICdvbWl0JywgLy8gVXRpbGlzZXogJ29taXQnIHBvdXIgbmUgcGFzIGVudm95ZXIgbGVzIGNvb2tpZXNcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgIHRoaXMuc3RvcmUucGFnZSA9IDE7XHJcbiAgICAgICAgICB0aGlzLnN0b3JlLmNvbW1lbnRzID0ganNvbltcIm1lbWJlclwiXTtcclxuICAgICAgICAgIHRoaXMuc3RvcmUudG90YWxDb21tZW50cyA9ICtqc29uW1widG90YWxJdGVtc1wiXTtcclxuICAgICAgICAgIHRoaXMuc3RvcmUubmV4dCA9IGpzb25bXCJ2aWV3XCJdW1wibmV4dFwiXSA/PyBqc29uW1widmlld1wiXVtcImxhc3RcIl07XHJcbiAgICAgICAgICB0aGlzLnN0b3JlLnByZXYgPSBqc29uW1widmlld1wiXVtcInByZXZpb3VzXCJdID8/IGpzb25bXCJ2aWV3XCJdW1wiZmlyc3RcIl07XHJcbiAgICAgICAgICB0aGlzLmlzRGF0YSA9ICh0aGlzLnN0b3JlLnRvdGFsQ29tbWVudHMgPiAwKVxyXG4gICAgICAgIH0pXHJcbiAgICA7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBwYWdpbmF0ZShsaW5rLCBpbmRleCkge1xyXG4gICAgICBmZXRjaChsaW5rLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgLy8gQXV0cmVzIGVuLXTDqnRlcyBzaSBuw6ljZXNzYWlyZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdvbWl0JywgLy8gVXRpbGlzZXogJ29taXQnIHBvdXIgbmUgcGFzIGVudm95ZXIgbGVzIGNvb2tpZXNcclxuICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5wYWdlID0gdGhpcy5zdG9yZS5wYWdlICsgaW5kZXhcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5wYWdlID0gKHRoaXMuc3RvcmUucGFnZSA9PT0gMCkgPyAxIDogKCh0aGlzLnN0b3JlLnBhZ2UgPiB0aGlzLnN0b3JlLm1heFBhZ2UpID8gdGhpcy5zdG9yZS5tYXhQYWdlIDogdGhpcy5zdG9yZS5wYWdlKVxyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLmNvbW1lbnRzID0ganNvbltcIm1lbWJlclwiXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS50b3RhbENvbW1lbnRzID0gK2pzb25bXCJ0b3RhbEl0ZW1zXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLm5leHQgPSBqc29uW1widmlld1wiXVtcIm5leHRcIl0gPz8ganNvbltcInZpZXdcIl1bXCJsYXN0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnByZXYgPSBqc29uW1widmlld1wiXVtcInByZXZpb3VzXCJdID8/IGpzb25bXCJ2aWV3XCJdW1wiZmlyc3RcIl07XHJcbiAgICAgICAgICAgIHRoaXMuaXNEYXRhID0gKHRoaXMuc3RvcmUudG90YWxDb21tZW50cyA+IDApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICA7XHJcbiAgICB9LFxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgZmV0Y2goXCIvYXBpL21lc3NhZ2VzP29yZGVyW2NyZWF0ZWRBdF09ZGVzY1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgLy8gQXV0cmVzIGVuLXTDqnRlcyBzaSBuw6ljZXNzYWlyZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdvbWl0JywgLy8gVXRpbGlzZXogJ29taXQnIHBvdXIgbmUgcGFzIGVudm95ZXIgbGVzIGNvb2tpZXNcclxuICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5wYWdlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5jb21tZW50cyA9IGpzb25bXCJtZW1iZXJcIl07XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUudG90YWxDb21tZW50cyA9ICtqc29uW1widG90YWxJdGVtc1wiXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5uZXh0ID0ganNvbltcInZpZXdcIl1bXCJuZXh0XCJdID8/IGpzb25bXCJ2aWV3XCJdW1wibGFzdFwiXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5wcmV2ID0ganNvbltcInZpZXdcIl1bXCJwcmV2aW91c1wiXSA/PyBqc29uW1widmlld1wiXVtcImZpcnN0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLmlzRGF0YSA9ICh0aGlzLnN0b3JlLnRvdGFsQ29tbWVudHMgPiAwKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgO1xyXG4gICAgfSxcclxuICAgIGdvSW5ib3goKSB7XHJcbiAgICAgIHRoaXMuaXNJbmJveCA9IHRydWU7XHJcbiAgICAgIHRoaXMuaXNSZXBseSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGNhbmNlbFJlcGx5KCkge1xyXG4gICAgICB0aGlzLmlzSW5ib3ggPSB0cnVlO1xyXG4gICAgICB0aGlzLmlzUmVwbHkgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBnb0RldGFpbChjb21tZW50KSB7XHJcbiAgICAgIHRoaXMuc3RvcmUuYWN0aXZlQ29tbWVudCA9IGNvbW1lbnQ7XHJcbiAgICAgIHRoaXMuaXNJbmJveCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGdvUmVwbHkoY29tbWVudCkge1xyXG4gICAgICB0aGlzLnN0b3JlLmFjdGl2ZUNvbW1lbnQgPSBjb21tZW50O1xyXG4gICAgICB0aGlzLmlzSW5ib3ggPSBmYWxzZTtcclxuICAgICAgdGhpcy5pc1JlcGx5ID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcclxuICAgICAgcmV0dXJuIGZvcm1hdChkYXRlLCAnZGQgTU1NTSB5eXl5IEhIOm1tOnNzJywge2xvY2FsZTogZnJ9KTsgLy8gRXhlbXBsZSA6IDMxIG9jdG9icmUgMjAyNCAxNDozMDo0NVxyXG4gICAgfSxcclxuICAgIHRydW5jYXRlcih2YWx1ZSwgbGVuZ3RoKSB7XHJcbiAgICAgIGlmICghdmFsdWUpIHJldHVybiAnJztcclxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBsZW5ndGgpIHJldHVybiB2YWx1ZTtcclxuICAgICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZygwLCBsZW5ndGgpICsgJy4uLic7XHJcbiAgICB9LFxyXG4gICAgYWdvKHZhbHVlKSB7XHJcbiAgICAgIGlmICghdmFsdWUpIHJldHVybiAnJztcclxuICAgICAgLy8gVXRpbGlzYXRpb24gZGUgbGEgZm9uY3Rpb24gZGF0ZS1mbnMgcG91ciBmb3JtYXRlciBsYSBkYXRlIGVuIGZvbmN0aW9uIGR1IHRlbXBzIMOpY291bMOpXHJcbiAgICAgIHJldHVybiBmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKHZhbHVlKSwge2FkZFN1ZmZpeDogdHJ1ZSwgbG9jYWxlOiBmcn0pO1xyXG4gICAgfSxcclxuICAgIHNlYXJjaChxKSB7XHJcbiAgICAgIGZldGNoKFwiL2FwaS9tZXNzYWdlcz9xPVwiICsgcSArIFwiJm9yZGVyW2NyZWF0ZWRBdF09ZGVzY1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgLy8gQXV0cmVzIGVuLXTDqnRlcyBzaSBuw6ljZXNzYWlyZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdvbWl0JywgLy8gVXRpbGlzZXogJ29taXQnIHBvdXIgbmUgcGFzIGVudm95ZXIgbGVzIGNvb2tpZXNcclxuICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5wYWdlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5jb21tZW50cyA9IGpzb25bXCJtZW1iZXJcIl07XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUudG90YWxDb21tZW50cyA9ICtqc29uW1widG90YWxJdGVtc1wiXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5uZXh0ID0ganNvbltcInZpZXdcIl1bXCJuZXh0XCJdID8/IGpzb25bXCJ2aWV3XCJdW1wibGFzdFwiXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5wcmV2ID0ganNvbltcInZpZXdcIl1bXCJwcmV2aW91c1wiXSA/PyBqc29uW1widmlld1wiXVtcImZpcnN0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLmlzRGF0YSA9ICh0aGlzLnN0b3JlLnRvdGFsQ29tbWVudHMgPiAwKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgO1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZSgpIHtcclxuICAgICAgY29uc3Qgc3RvcmVJZCA9ICt0aGlzLnN0b3JlLmlkU3RvcmU7XHJcbiAgICAgIGxldCBpdGVtO1xyXG4gICAgICBpZiAodGhpcy5pc0luYm94KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDb21tZW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGl0ZW0gPSB0aGlzLnNlbGVjdGVkQ29tbWVudFxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtID0gdGhpcy5zdG9yZS5hY3RpdmVDb21tZW50LmlkXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgdGl0bGU6ICdFbiDDqnRlcyB2b3VzIHPDu3JlPycsXHJcbiAgICAgICAgICB0ZXh0OiBcIkNldHRlIGFjdGlvbiBlc3QgaXJyw6l2ZXJzaWJsZSFcIixcclxuICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aSwgc3VwcHJpbWVyICEnLFxyXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vbiwgQW5udWxlciEnLFxyXG4gICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tc3VjY2VzcyBtdC0yJyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1kYW5nZXIgbXMtMiBtdC0yJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtcHJpbWFyeSBtLTFcIiByb2xlPVwic3RhdHVzXCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICcgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAnICAgICAgICAgIDwvZGl2PicsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgIGl0ZW1zOiBpdGVtIC8vIEVudm9pIGxlIHRhYmxlYXUgc291cyBsYSBjbMOpICdpdGVtcydcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZldGNoKCcvYWRtaW4vbWVzc2FnZXMvZGVsZXRlJywge1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyBNw6l0aG9kZSBIVFRQXHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyBJbmRpcXVlciBsZSB0eXBlIGRlIGNvbnRlbnVcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpIC8vIENvbnZlcnRpciBsJ29iamV0IGVuIGNoYcOubmUgSlNPTlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJldXIgZGFucyBsYSByZXF1w6p0ZTogJyArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7IC8vIFRyYWl0ZXIgbGEgcsOpcG9uc2UgZW4gSlNPTlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBmZXRjaChcIi9hcGkvbWVzc2FnZXM/b3JkZXJbY3JlYXRlZEF0XT1kZXNjXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBBdXRyZXMgZW4tdMOqdGVzIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ29taXQnLCAvLyBVdGlsaXNleiAnb21pdCcgcG91ciBuZSBwYXMgZW52b3llciBsZXMgY29va2llc1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmNvbW1lbnRzID0ganNvbltcIm1lbWJlclwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS50b3RhbENvbW1lbnRzID0gK2pzb25bXCJ0b3RhbEl0ZW1zXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLm5leHQgPSBqc29uW1widmlld1wiXVtcIm5leHRcIl0gPz8ganNvbltcInZpZXdcIl1bXCJsYXN0XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnByZXYgPSBqc29uW1widmlld1wiXVtcInByZXZpb3VzXCJdID8/IGpzb25bXCJ2aWV3XCJdW1wiZmlyc3RcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEYXRhID0gKHRoaXMuc3RvcmUudG90YWxDb21tZW50cyA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjw6hzIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0xlIGNvbW1lbnRhaXJlIGEgw6l0w6kgc3VwcHJpbcOpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIC8vIEfDqXJlciBsYSByw6lwb25zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXI6JywgZXJyb3IpOyAvLyBHw6lyZXIgbGVzIGVycmV1cnNcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgIC8vIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzXHJcbiAgICAgICAgICAgICAgcmVzdWx0LmRpc21pc3MgPT09IFN3YWwuRGlzbWlzc1JlYXNvbi5jYW5jZWxcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAnQW5udWzDqScsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0F1Y3VuZSBhY3Rpb24gblxcJ2Egw6l0w6kgw6lmZmVjdHXDqWUgOiknLFxyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZXBseSgpIHtcclxuICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICB0aXRsZTogJzxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlciB0ZXh0LXByaW1hcnkgbS0xXCIgcm9sZT1cInN0YXR1c1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8L2Rpdj4nLFxyXG4gICAgICAgIGljb246ICdpbmZvJyxcclxuICAgICAgICBzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICB0bzogdGhpcy5zdG9yZS5hY3RpdmVDb21tZW50LmVtYWlsLFxyXG4gICAgICAgIHN1YmplY3Q6IHRoaXMuc3RvcmUuc3ViamVjdCxcclxuICAgICAgICBtZXNzYWdlOiB0aGlzLnN0b3JlLm1zZ1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmZXRjaCgnL2FkbWluL21lc3NhZ2VzL3JlcGx5Jywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyBNw6l0aG9kZSBIVFRQXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyBJbmRpcXVlciBsZSB0eXBlIGRlIGNvbnRlbnVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpIC8vIENvbnZlcnRpciBsJ29iamV0IGVuIGNoYcOubmUgSlNPTlxyXG4gICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyZXVyJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdWw6lyaWZpZXogdm90cmUgbWVzc2FnZSA6KScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJldXIgZGFucyBsYSByZXF1w6p0ZTogJyArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7IC8vIFRyYWl0ZXIgbGEgcsOpcG9uc2UgZW4gSlNPTlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBmZXRjaChcIi9hcGkvbWVzc2FnZXM/b3JkZXJbY3JlYXRlZEF0XT1kZXNjXCIsIHtcclxuICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAvLyBBdXRyZXMgZW4tdMOqdGVzIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ29taXQnLCAvLyBVdGlsaXNleiAnb21pdCcgcG91ciBuZSBwYXMgZW52b3llciBsZXMgY29va2llc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmNvbW1lbnRzID0ganNvbltcIm1lbWJlclwiXTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS50b3RhbENvbW1lbnRzID0gK2pzb25bXCJ0b3RhbEl0ZW1zXCJdO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLm5leHQgPSBqc29uW1widmlld1wiXVtcIm5leHRcIl0gPz8ganNvbltcInZpZXdcIl1bXCJsYXN0XCJdO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnByZXYgPSBqc29uW1widmlld1wiXVtcInByZXZpb3VzXCJdID8/IGpzb25bXCJ2aWV3XCJdW1wiZmlyc3RcIl07XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNEYXRhID0gKHRoaXMuc3RvcmUudG90YWxDb21tZW50cyA+IDApXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUubXNnID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnN1YmplY3QgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjw6hzIScsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0xhIHLDqXBvbnNlIGEgw6l0w6kgZW52b3nDqScsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICB9KSAvLyBHw6lyZXIgbGEgcsOpcG9uc2VcclxuICAgICAgICAgICAgICAgICAgdGhpcy5nb0luYm94KClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyOicsIGVycm9yKTsgLy8gR8OpcmVyIGxlcyBlcnJldXJzXHJcbiAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicm93IHJvdy1zbVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC14bC0xMiBjb2wtbGctMTIgIG1haW4tY29udGVudC1ib2R5LW1haWwxXCIgdi1pZj1cImlzSW5ib3hcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY3VzdG9tLWNhcmQgbWFpbC1jb250YWluZXIgdGFzay1jb250YWluZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluYm94LWJvZHkgcC00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWFpbi1tYWlsLXNlYXJjaFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZXIgTWVzc2FnZS4uLlwiIHYtbW9kZWw9XCJ0aGlzLnN0b3JlLnFcIiB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2sucHJldmVudD1cInNlYXJjaCh0aGlzLnN0b3JlLnEpXCIgdHlwZT1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1zZWFyY2hcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1haWwtb3B0aW9uIG10LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBoaWRkZW4tcGhvbmVcIj5cclxuICAgICAgICAgICAgICA8YSBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiYnRuIG1pbmkgYmx1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgUGx1c1xyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmZSBmZS1jaGV2cm9uLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgQGNsaWNrLnByZXZlbnQ9XCJ0aGlzLmRlbGV0ZVwiPjxpIGNsYXNzPVwiZmUgZmUtdHJhc2ggbWUtMlwiPjwvaT4gU3VwcHJpbWVyPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInVuc3R5bGVkIGluYm94LXBhZ2luYXRpb25cIiB2LXNob3c9XCJpc0luYm94ICYmIGlzRGF0YVwiPlxyXG4gICAgICAgICAgICAgIDxsaT48c3Bhbj57eyB0aGlzLnN0b3JlLnBhZ2luYXRlIH19IGRlIHt7IHRoaXMuc3RvcmUudG90YWxDb21tZW50cyB9fTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1pbmJveCB0ZXh0LW1kLW5vd3JhcCB0YWJsZS1ob3ZlciB0ZXh0LW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgIDx0Ym9keSB2LXNob3c9XCJpc0luYm94ICYmIGlzRGF0YVwiPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzcz1cIlwiIHYtZm9yPVwiKGNvbW1lbnQsIGluZGV4KSBpbiB0aGlzLnN0b3JlLmNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJpbmJveC1zbWFsbC1jZWxsc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgOmlkPVwiJ2NoaycgKyBpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImNvbW1lbnQuaWRcIiB2LW1vZGVsPVwic2VsZWN0ZWRDb21tZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ2aWV3LW1lc3NhZ2UgdHgtbGlnaHQgY2xpY2thYmxlLXJvd1wiIEBjbGljaz1cImdvRGV0YWlsKGNvbW1lbnQpXCIgZGF0YS1ocmVmPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IHRoaXMudHJ1bmNhdGVyKGNvbW1lbnQuY29udGVudCwgOTIpIH19XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidmlldy1tZXNzYWdlIHRleHQtZW5kIHR4LXNlbWlib2xkIGNsaWNrYWJsZS1yb3dcIiBAY2xpY2s9XCJnb0RldGFpbChjb21tZW50KVwiIGRhdGEtaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICB7eyB0aGlzLmFnbyhjb21tZW50LmNyZWF0ZWRBdCkgfX1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDx0Ym9keSB2LXNob3c9XCIhaXNEYXRhXCI+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyXCI+QXVjdW5lIFN1Z2dlc3Rpb248L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gbWFpbC1jb250ZW50IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG1zLTMgbWItNFwiIHYtc2hvdz1cImlzSW5ib3ggJiYgaXNEYXRhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyByb3ctc21cIj5cclxuICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb24ganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwicGFnaW5hdGUodGhpcy5zdG9yZS5wcmV2LCAtMSlcIj5QcmV2PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZS1pdGVtXCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmPVwiamF2YXNjcmlwdDo7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCJwYWdpbmF0ZSh0aGlzLnN0b3JlLm5leHQsIDEpXCI+TmV4dDwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG5cclxuICA8ZGl2IGNsYXNzPVwicm93IHJvdy1zbVwiIHYtaWY9XCIhaXNJbmJveFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiBjb2wteGwtMTIgY29sLW1kLTEyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGN1c3RvbS1jYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBoLTEwMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVtYWlsLW1lZGlhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi00IGQtbGctZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxoMz5EZXRhaWwgU3VnZ2VzdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1zLWF1dG8gZC1ub25lIGQtbWQtZmxleCBmcy0xOFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIEBjbGljay5wcmV2ZW50PVwiZ29JbmJveFwiIGNsYXNzPVwiY29udGFjdC1pY29uIHRleHQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlwiIGRhdGEtYnMtb3JpZ2luYWwtdGl0bGU9XCJUYWdcIiBhcmlhLWxhYmVsPVwiSW5ib3hcIj48aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmUgZmUtaW5ib3hcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhIG10LTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1pbWctdXNlciBhdmF0YXItbWQgbWUtMyBvbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiYXZhdGFyXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCInaHR0cHM6Ly91aS1hdmF0YXJzLmNvbS9hcGkvP2JhY2tncm91bmQ9cmFuZG9tJmZvbnQ9MDAwJm5hbWU9dW5rbm93bidcIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keSB0eC1pbnZlcnNlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxvYXQtZW5kIGQtbm9uZSBkLW1kLWZsZXggZnMtMTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lLTNcIj57eyBmb3JtYXREYXRlKHRoaXMuc3RvcmUuYWN0aXZlQ29tbWVudC5jcmVhdGVkQXQpIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS10aXRsZSBmb250LXdlaWdodC1ub3JtYWxcIj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidHgtMTggdHgtbWVkaXVtXCI+SW5jb25udTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0wIHRleHQtbXV0ZWRcIj5JbmNvbm51PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJtZS0yIGQtbWQtbm9uZVwiPnt7IGZvcm1hdERhdGUodGhpcy5zdG9yZS5hY3RpdmVDb21tZW50LmNyZWF0ZWRBdCkgfX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWFtaWwtYm9keVwiPlxyXG4gICAgICAgICAgICA8cD57eyB0aGlzLnN0b3JlLmFjdGl2ZUNvbW1lbnQuY29udGVudCB9fTwvcD5cclxuICAgICAgICAgICAgPGhyIGNsYXNzPVwibWVzc2FnZS1pbm5lci1zZXBhcmF0b3JcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgPCEtLSAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tc20gcmlwcGxlIGJ0bi1zZWNvbmRhcnkgbXQtMSBtYi0xXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjxpIGNsYXNzPVwiZmEgZmEtc2hhcmVcIj48L2k+IEZvcndhcmQ8L2E+LS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHt1c2VTdWdnZXN0aW9uU3RvcmV9IGZyb20gXCIuLi9zdG9yZXMvc3VnZ2VzdGlvblN0b3JlXCI7XHJcbmltcG9ydCB7Zm9ybWF0RGlzdGFuY2VUb05vd30gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQge2Zvcm1hdH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQge2ZyfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJTdWdnZXN0aW9uXCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0b3JlOiB1c2VTdWdnZXN0aW9uU3RvcmUoKSxcclxuICAgICAgc2VsZWN0ZWRDb21tZW50OiBbXSxcclxuICAgICAgaXNJbmJveDogdHJ1ZSxcclxuICAgICAgaXNEYXRhOiBmYWxzZSxcclxuICAgICAgaXNSZXBseTogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBmZXRjaChcIi9hcGkvc3VnZ2VzdGlvbnM/b3JkZXJbY3JlYXRlZEF0XT1kZXNjXCIsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgLy8gQXV0cmVzIGVuLXTDqnRlcyBzaSBuw6ljZXNzYWlyZVxyXG4gICAgICB9LFxyXG4gICAgICBjcmVkZW50aWFsczogJ29taXQnLCAvLyBVdGlsaXNleiAnb21pdCcgcG91ciBuZSBwYXMgZW52b3llciBsZXMgY29va2llc1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5wYWdlID0gMTtcclxuICAgICAgICAgIHRoaXMuc3RvcmUuY29tbWVudHMgPSBqc29uW1wibWVtYmVyXCJdO1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS50b3RhbENvbW1lbnRzID0gK2pzb25bXCJ0b3RhbEl0ZW1zXCJdO1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5uZXh0ID0ganNvbltcInZpZXdcIl1bXCJuZXh0XCJdID8/IGpzb25bXCJ2aWV3XCJdW1wibGFzdFwiXTtcclxuICAgICAgICAgIHRoaXMuc3RvcmUucHJldiA9IGpzb25bXCJ2aWV3XCJdW1wicHJldmlvdXNcIl0gPz8ganNvbltcInZpZXdcIl1bXCJmaXJzdFwiXTtcclxuICAgICAgICAgIHRoaXMuaXNEYXRhID0gKHRoaXMuc3RvcmUudG90YWxDb21tZW50cyA+IDApXHJcbiAgICAgICAgfSlcclxuICAgIDtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHBhZ2luYXRlKGxpbmssIGluZGV4KSB7XHJcbiAgICAgIGZldGNoKGxpbmssIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAvLyBBdXRyZXMgZW4tdMOqdGVzIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ29taXQnLCAvLyBVdGlsaXNleiAnb21pdCcgcG91ciBuZSBwYXMgZW52b3llciBsZXMgY29va2llc1xyXG4gICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnBhZ2UgPSB0aGlzLnN0b3JlLnBhZ2UgKyBpbmRleFxyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnBhZ2UgPSAodGhpcy5zdG9yZS5wYWdlID09PSAwKSA/IDEgOiAoKHRoaXMuc3RvcmUucGFnZSA+IHRoaXMuc3RvcmUubWF4UGFnZSkgPyB0aGlzLnN0b3JlLm1heFBhZ2UgOiB0aGlzLnN0b3JlLnBhZ2UpXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuY29tbWVudHMgPSBqc29uW1wibWVtYmVyXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnRvdGFsQ29tbWVudHMgPSAranNvbltcInRvdGFsSXRlbXNcIl07XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUubmV4dCA9IGpzb25bXCJ2aWV3XCJdW1wibmV4dFwiXSA/PyBqc29uW1widmlld1wiXVtcImxhc3RcIl07XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUucHJldiA9IGpzb25bXCJ2aWV3XCJdW1wicHJldmlvdXNcIl0gPz8ganNvbltcInZpZXdcIl1bXCJmaXJzdFwiXTtcclxuICAgICAgICAgICAgdGhpcy5pc0RhdGEgPSAodGhpcy5zdG9yZS50b3RhbENvbW1lbnRzID4gMClcclxuICAgICAgICAgIH0pXHJcbiAgICAgIDtcclxuICAgIH0sXHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICBmZXRjaChcIi9hcGkvc3VnZ2VzdGlvbnM/b3JkZXJbY3JlYXRlZEF0XT1kZXNjXCIsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAvLyBBdXRyZXMgZW4tdMOqdGVzIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ29taXQnLCAvLyBVdGlsaXNleiAnb21pdCcgcG91ciBuZSBwYXMgZW52b3llciBsZXMgY29va2llc1xyXG4gICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLmNvbW1lbnRzID0ganNvbltcIm1lbWJlclwiXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS50b3RhbENvbW1lbnRzID0gK2pzb25bXCJ0b3RhbEl0ZW1zXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLm5leHQgPSBqc29uW1widmlld1wiXVtcIm5leHRcIl0gPz8ganNvbltcInZpZXdcIl1bXCJsYXN0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnByZXYgPSBqc29uW1widmlld1wiXVtcInByZXZpb3VzXCJdID8/IGpzb25bXCJ2aWV3XCJdW1wiZmlyc3RcIl07XHJcbiAgICAgICAgICAgIHRoaXMuaXNEYXRhID0gKHRoaXMuc3RvcmUudG90YWxDb21tZW50cyA+IDApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICA7XHJcbiAgICB9LFxyXG4gICAgZ29JbmJveCgpIHtcclxuICAgICAgdGhpcy5pc0luYm94ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pc1JlcGx5ID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgZ29EZXRhaWwoY29tbWVudCkge1xyXG4gICAgICB0aGlzLnN0b3JlLmFjdGl2ZUNvbW1lbnQgPSBjb21tZW50O1xyXG4gICAgICB0aGlzLmlzSW5ib3ggPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcclxuICAgICAgcmV0dXJuIGZvcm1hdChkYXRlLCAnZGQgTU1NTSB5eXl5IEhIOm1tOnNzJywge2xvY2FsZTogZnJ9KTsgLy8gRXhlbXBsZSA6IDMxIG9jdG9icmUgMjAyNCAxNDozMDo0NVxyXG4gICAgfSxcclxuICAgIHRydW5jYXRlcih2YWx1ZSwgbGVuZ3RoKSB7XHJcbiAgICAgIGlmICghdmFsdWUpIHJldHVybiAnJztcclxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBsZW5ndGgpIHJldHVybiB2YWx1ZTtcclxuICAgICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZygwLCBsZW5ndGgpICsgJy4uLic7XHJcbiAgICB9LFxyXG4gICAgYWdvKHZhbHVlKSB7XHJcbiAgICAgIGlmICghdmFsdWUpIHJldHVybiAnJztcclxuICAgICAgLy8gVXRpbGlzYXRpb24gZGUgbGEgZm9uY3Rpb24gZGF0ZS1mbnMgcG91ciBmb3JtYXRlciBsYSBkYXRlIGVuIGZvbmN0aW9uIGR1IHRlbXBzIMOpY291bMOpXHJcbiAgICAgIHJldHVybiBmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKHZhbHVlKSwge2FkZFN1ZmZpeDogdHJ1ZSwgbG9jYWxlOiBmcn0pO1xyXG4gICAgfSxcclxuICAgIHNlYXJjaChxKSB7XHJcbiAgICAgIGZldGNoKFwiL2FwaS9zdWdnZXN0aW9ucz9jb250ZW50PVwiICsgcSArIFwiJm9yZGVyW2NyZWF0ZWRBdF09ZGVzY1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgLy8gQXV0cmVzIGVuLXTDqnRlcyBzaSBuw6ljZXNzYWlyZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdvbWl0JywgLy8gVXRpbGlzZXogJ29taXQnIHBvdXIgbmUgcGFzIGVudm95ZXIgbGVzIGNvb2tpZXNcclxuICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5wYWdlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5jb21tZW50cyA9IGpzb25bXCJtZW1iZXJcIl07XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUudG90YWxDb21tZW50cyA9ICtqc29uW1widG90YWxJdGVtc1wiXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5uZXh0ID0ganNvbltcInZpZXdcIl1bXCJuZXh0XCJdID8/IGpzb25bXCJ2aWV3XCJdW1wibGFzdFwiXTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS5wcmV2ID0ganNvbltcInZpZXdcIl1bXCJwcmV2aW91c1wiXSA/PyBqc29uW1widmlld1wiXVtcImZpcnN0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLmlzRGF0YSA9ICh0aGlzLnN0b3JlLnRvdGFsQ29tbWVudHMgPiAwKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgO1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZSgpIHtcclxuICAgICAgbGV0IGl0ZW07XHJcbiAgICAgIGlmICh0aGlzLmlzSW5ib3gpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENvbW1lbnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgaXRlbSA9IHRoaXMuc2VsZWN0ZWRDb21tZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW0gPSB0aGlzLnN0b3JlLmFjdGl2ZUNvbW1lbnQuaWRcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICB0aXRsZTogJ0VuIMOqdGVzIHZvdXMgc8O7cmU/JyxcclxuICAgICAgICAgIHRleHQ6IFwiQ2V0dGUgYWN0aW9uIGVzdCBpcnLDqXZlcnNpYmxlIVwiLFxyXG4gICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT3VpLCBzdXBwcmltZXIgIScsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uLCBBbm51bGVyIScsXHJcbiAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1zdWNjZXNzIG10LTInLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLWRhbmdlciBtcy0yIG10LTInLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICc8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1wcmltYXJ5IG0tMVwiIHJvbGU9XCJzdGF0dXNcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgJyAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICcgICAgICAgICAgPC9kaXY+JyxcclxuICAgICAgICAgICAgICBpY29uOiAnaW5mbycsXHJcbiAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgaXRlbXM6IGl0ZW0gLy8gRW52b2kgbGUgdGFibGVhdSBzb3VzIGxhIGNsw6kgJ2l0ZW1zJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZmV0Y2goJy9hZG1pbi9zdWdnZXN0aW9uL2RlbGV0ZScsIHtcclxuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgLy8gTcOpdGhvZGUgSFRUUFxyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8gSW5kaXF1ZXIgbGUgdHlwZSBkZSBjb250ZW51XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSAvLyBDb252ZXJ0aXIgbCdvYmpldCBlbiBjaGHDrm5lIEpTT05cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyZXVyIGRhbnMgbGEgcmVxdcOqdGU6ICcgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpOyAvLyBUcmFpdGVyIGxhIHLDqXBvbnNlIGVuIEpTT05cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYXBpL3N1Z2dlc3Rpb25zP29yZGVyW2NyZWF0ZWRBdF09ZGVzY1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gQXV0cmVzIGVuLXTDqnRlcyBzaSBuw6ljZXNzYWlyZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdvbWl0JywgLy8gVXRpbGlzZXogJ29taXQnIHBvdXIgbmUgcGFzIGVudm95ZXIgbGVzIGNvb2tpZXNcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5wYWdlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5jb21tZW50cyA9IGpzb25bXCJtZW1iZXJcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUudG90YWxDb21tZW50cyA9ICtqc29uW1widG90YWxJdGVtc1wiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5uZXh0ID0ganNvbltcInZpZXdcIl1bXCJuZXh0XCJdID8/IGpzb25bXCJ2aWV3XCJdW1wibGFzdFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5wcmV2ID0ganNvbltcInZpZXdcIl1bXCJwcmV2aW91c1wiXSA/PyBqc29uW1widmlld1wiXVtcImZpcnN0XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRGF0YSA9ICh0aGlzLnN0b3JlLnRvdGFsQ29tbWVudHMgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY8OocyEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdMZXMgc3VnZ2VzdGlvbnMgYSDDqXTDqSBzdXBwcmltw6knLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgLy8gR8OpcmVyIGxhIHLDqXBvbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1cjonLCBlcnJvcik7IC8vIEfDqXJlciBsZXMgZXJyZXVyc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgLy8gUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHNcclxuICAgICAgICAgICAgICByZXN1bHQuZGlzbWlzcyA9PT0gU3dhbC5EaXNtaXNzUmVhc29uLmNhbmNlbFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdBbm51bMOpJyxcclxuICAgICAgICAgICAgICB0ZXh0OiAnQXVjdW5lIGFjdGlvbiBuXFwnYSDDqXTDqSDDqWZmZWN0dcOpZSA6KScsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9NZXNzYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYmRjY2Q0OFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL01lc3NhZ2UudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImViZGNjZDQ4XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZWJkY2NkNDgnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCdlYmRjY2Q0OCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWVzc2FnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWJkY2NkNDhcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignZWJkY2NkNDgnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1N1Z2dlc3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTExOGQxMzNmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VnZ2VzdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VnZ2VzdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvU3VnZ2VzdGlvbi52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMTE4ZDEzM2ZcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcxMThkMTMzZicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzExOGQxMzNmJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWdnZXN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMThkMTMzZlwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcxMThkMTMzZicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTWVzc2FnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9NZXNzYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vU3VnZ2VzdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TdWdnZXN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWViZGNjZDQ4XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vU3VnZ2VzdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTE4ZDEzM2ZcIiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsInNlbGVjdDIiLCJ3aWR0aCIsImNyZWF0ZUFwcCIsImNyZWF0ZVBpbmlhIiwiQXBwIiwiQXBwMiIsImFwcCIsImFwcDIiLCJ1c2UiLCJtb3VudCIsImRvY3VtZW50IiwicmVhZHkiLCJhZGRGb3JtVG9Db2xsZWN0aW9uUGFnZUJhbm5pZXJlIiwiY2xpY2siLCJlIiwibGlzdCIsImF0dHIiLCIkd2lkZ2V0IiwiaW5kZXgiLCJ2YWwiLCJuZXdXaWRnZXQiLCJyZXBsYWNlIiwiZGF0YSIsImFwcGVuZCIsImRyb3BpZnkiLCJtZXNzYWdlcyIsImVycm9yIiwiYWRkVGFnRm9ybURlbGV0ZUxpbmtQYWdlQmFubmllcmUiLCJvbiIsInRhcmdldCIsInJlbW92ZSIsImFkZEZvcm1Ub0NvbGxlY3Rpb25EZXRhaWxSZXBhcyIsImFkZFRhZ0Zvcm1EZWxldGVMaW5rRGV0YWlsUmVwYXMiLCJhZGRGb3JtVG9Db2xsZWN0aW9uU2VjdGlvbkRldGFpbFNlY3Rpb24iLCJhZGRUYWdGb3JtRGVsZXRlTGlua1NlY3Rpb25EZXRhaWxTZWN0aW9uIiwicmVmIiwiY29tcHV0ZWQiLCJkZWZpbmVTdG9yZSIsInVzZU1lc3NhZ2VTdG9yZSIsImlkU3RvcmUiLCJjb21tZW50cyIsIm5leHQiLCJwcmV2IiwicSIsInRvdGFsQ29tbWVudHMiLCJwYWdlIiwiYWN0aXZlQ29tbWVudCIsInN1YmplY3QiLCJtc2ciLCJtYXhQYWdlIiwiTWF0aCIsImNlaWwiLCJ2YWx1ZSIsInBhZ2luYXRlIiwic3RhcnQiLCJlbmQiLCJjb25jYXQiLCJ1c2VTdWdnZXN0aW9uU3RvcmUiLCJmb3JtYXREaXN0YW5jZVRvTm93IiwiZm9ybWF0IiwiZnIiLCJTd2FsIiwibmFtZSIsInN0b3JlIiwic2VsZWN0ZWRDb21tZW50IiwiaXNJbmJveCIsImlzRGF0YSIsImlzUmVwbHkiLCJtb3VudGVkIiwiX3RoaXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJfanNvbiR2aWV3JG5leHQiLCJfanNvbiR2aWV3JHByZXZpb3VzIiwibWV0aG9kcyIsImxpbmsiLCJfdGhpczIiLCJfanNvbiR2aWV3JG5leHQyIiwiX2pzb24kdmlldyRwcmV2aW91czIiLCJyZWZyZXNoIiwiX3RoaXMzIiwiX2pzb24kdmlldyRuZXh0MyIsIl9qc29uJHZpZXckcHJldmlvdXMzIiwiZ29JbmJveCIsImNhbmNlbFJlcGx5IiwiZ29EZXRhaWwiLCJjb21tZW50IiwiZ29SZXBseSIsImZvcm1hdERhdGUiLCJkYXRlIiwibG9jYWxlIiwidHJ1bmNhdGVyIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiYWdvIiwiRGF0ZSIsImFkZFN1ZmZpeCIsInNlYXJjaCIsIl90aGlzNCIsIl9qc29uJHZpZXckbmV4dDQiLCJfanNvbiR2aWV3JHByZXZpb3VzNCIsImRlbGV0ZSIsIl90aGlzNSIsInN0b3JlSWQiLCJpdGVtIiwiaWQiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsInJlc3VsdCIsInNob3dDbG9zZUJ1dHRvbiIsInNob3dDb25maXJtQnV0dG9uIiwiaXRlbXMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiX2pzb24kdmlldyRuZXh0NSIsIl9qc29uJHZpZXckcHJldmlvdXM1IiwiY29uc29sZSIsImRpc21pc3MiLCJEaXNtaXNzUmVhc29uIiwiY2FuY2VsIiwicmVwbHkiLCJfdGhpczYiLCJ0byIsImVtYWlsIiwibWVzc2FnZSIsIl9qc29uJHZpZXckbmV4dDYiLCJfanNvbiR2aWV3JHByZXZpb3VzNiIsImtleSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2hvaXN0ZWRfMSIsIiRkYXRhIiwiX2hvaXN0ZWRfMiIsIl9ob2lzdGVkXzMiLCJfaG9pc3RlZF80IiwiX2hvaXN0ZWRfNSIsInBsYWNlaG9sZGVyIiwiX2NhY2hlIiwiJGV2ZW50IiwidHlwZSIsIl9ob2lzdGVkXzYiLCJvbkNsaWNrIiwiX3dpdGhNb2RpZmllcnMiLCIkb3B0aW9ucyIsIl9ob2lzdGVkXzciLCJfaG9pc3RlZF84IiwiaHJlZiIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfaG9pc3RlZF85IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaG9pc3RlZF8xMCIsIl90b0Rpc3BsYXlTdHJpbmciLCJfaG9pc3RlZF8xMSIsIl9ob2lzdGVkXzEyIiwiX3JlbmRlckxpc3QiLCJfaG9pc3RlZF8xMyIsIl9ob2lzdGVkXzE0IiwiX2hvaXN0ZWRfMTUiLCJfaG9pc3RlZF8xNiIsImZ1bGxOYW1lIiwiX2hvaXN0ZWRfMTciLCJjb250ZW50IiwiX2hvaXN0ZWRfMTgiLCJjcmVhdGVkQXQiLCJfaG9pc3RlZF8xOSIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfaG9pc3RlZF8yMCIsIl9ob2lzdGVkXzIxIiwiX2hvaXN0ZWRfMjIiLCJfaG9pc3RlZF8yMyIsIl9ob2lzdGVkXzI0IiwiX2hvaXN0ZWRfMjUiLCJfaG9pc3RlZF8yNiIsIl9ob2lzdGVkXzI3IiwiX2hvaXN0ZWRfMjgiLCJfaG9pc3RlZF8yOSIsIl9ob2lzdGVkXzMwIiwiX2hvaXN0ZWRfMzEiLCJfaG9pc3RlZF8zMiIsIl9ob2lzdGVkXzMzIiwiYWx0Iiwic3JjIiwiX2hvaXN0ZWRfMzQiLCJfaG9pc3RlZF8zNSIsIl9ob2lzdGVkXzM2IiwiX2hvaXN0ZWRfMzciLCJfaG9pc3RlZF8zOCIsIl9ob2lzdGVkXzM5IiwiX2hvaXN0ZWRfNDAiLCJfaG9pc3RlZF80MSIsIl9ob2lzdGVkXzQyIiwiX2hvaXN0ZWRfNDMiLCJfaG9pc3RlZF80NCIsIl9ob2lzdGVkXzQ1IiwiX2hvaXN0ZWRfNDYiLCJfaG9pc3RlZF80NyIsIl9ob2lzdGVkXzQ4IiwiX2hvaXN0ZWRfNDkiLCJfaG9pc3RlZF81MCIsInJlYWRvbmx5IiwiX2hvaXN0ZWRfNTEiLCJfaG9pc3RlZF81MiIsIl9ob2lzdGVkXzUzIiwiX2hvaXN0ZWRfNTQiLCJfaG9pc3RlZF81NSIsIl9ob2lzdGVkXzU2Iiwicm93cyIsIl9ob2lzdGVkXzU3IiwiX2hvaXN0ZWRfNTgiXSwic291cmNlUm9vdCI6IiJ9