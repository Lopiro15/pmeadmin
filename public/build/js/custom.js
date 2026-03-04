(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/custom"],{

/***/ "./assets/js/custom.js":
/*!*****************************!*\
  !*** ./assets/js/custom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
$(function () {
  'use strict';

  // ______________ PAGE LOADING
  $("#global-loader").fadeOut("slow");

  // ______________ Card
  var DIV_CARD = 'div.card';

  // ______________ Function for remove card
  $(document).on('click', '[data-bs-toggle="card-remove"]', function (e) {
    var $card = $(this).closest(DIV_CARD);
    $card.remove();
    e.preventDefault();
    return false;
  });

  // ______________ Functions for collapsed card
  $(document).on('click', '[data-bs-toggle="card-collapse"]', function (e) {
    var $card = $(this).closest(DIV_CARD);
    $card.toggleClass('card-collapsed');
    e.preventDefault();
    return false;
  });

  // ______________ Card full screen
  $(document).on('click', '[data-bs-toggle="card-fullscreen"]', function (e) {
    var $card = $(this).closest(DIV_CARD);
    $card.toggleClass('card-fullscreen').removeClass('card-collapsed');
    e.preventDefault();
    return false;
  });

  // ______________Main-navbar
  if (window.matchMedia('(min-width: 992px)').matches) {
    $('.main-navbar .active').removeClass('show');
    $('.main-header-menu .active').removeClass('show');
  }
  $('.main-header .dropdown > a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('show');
    $(this).parent().siblings().removeClass('show');
  });
  $('.mobile-main-header .dropdown > a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('show');
    $(this).parent().siblings().removeClass('show');
  });
  $('.main-navbar .with-sub').on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('show');
    $(this).parent().siblings().removeClass('show');
  });
  $('.dropdown-menu .main-header-arrow').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.dropdown').removeClass('show');
  });
  $('#mainSidebarToggle').on('click', function (e) {
    e.preventDefault();
    $('body.horizontalmenu').toggleClass('main-navbar-show');
  });
  $('#mainContentLeftShow').on('click touch', function (e) {
    e.preventDefault();
    $('body').addClass('main-content-left-show');
  });
  $('#mainContentLeftHide').on('click touch', function (e) {
    e.preventDefault();
    $('body').removeClass('main-content-left-show');
  });
  $('#mainContentBodyHide').on('click touch', function (e) {
    e.preventDefault();
    $('body').removeClass('main-content-body-show');
  });
  $('body').append('<div class="main-navbar-backdrop"></div>');
  $('.main-navbar-backdrop').on('click touchstart', function () {
    $('body').removeClass('main-navbar-show');
  });

  // ______________Dropdown menu
  $(document).on('click touchstart', function (e) {
    e.stopPropagation();
    var dropTarg = $(e.target).closest('.main-header .dropdown').length;
    if (!dropTarg) {
      $('.main-header .dropdown').removeClass('show');
    }
    if (window.matchMedia('(min-width: 992px)').matches) {
      var navTarg = $(e.target).closest('.main-navbar .nav-item').length;
      if (!navTarg) {
        $('.main-navbar .show').removeClass('show');
      }
      var menuTarg = $(e.target).closest('.main-header-menu .nav-item').length;
      if (!menuTarg) {
        $('.main-header-menu .show').removeClass('show');
      }
      if ($(e.target).hasClass('main-menu-sub-mega')) {
        $('.main-header-menu .show').removeClass('show');
      }
    } else {
      if (!$(e.target).closest('#mainMenuShow').length) {
        var hm = $(e.target).closest('.main-header-menu').length;
        if (!hm) {
          $('body').removeClass('main-header-menu-show');
        }
      }
    }
  });

  // ______________MainMenuShow
  $('#mainMenuShow').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('main-header-menu-show');
  });
  $('.main-header-menu .with-sub').on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('show');
    $(this).parent().siblings().removeClass('show');
  });
  $('.main-header-menu-header .close').on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('main-header-menu-show');
  });

  // ______________Popover
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // ______________Tooltip
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // ______________Toast
  $(".toast").toast();

  // ______________Live Toast
  var toastTrigger = document.getElementById('liveToastBtn');
  var toastLiveExample = document.getElementById('liveToast');
  if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
      var toast = new bootstrap.Toast(toastLiveExample);
      toast.show();
    });
  }

  // ______________Back-top-button
  $(window).on("scroll", function (e) {
    if ($(this).scrollTop() > 0) {
      $('#back-to-top').fadeIn('slow');
    } else {
      $('#back-to-top').fadeOut('slow');
    }
  });
  $(document).on("click", "#back-to-top", function (e) {
    $("html, body").animate({
      scrollTop: 0
    }, 0);
    return false;
  });

  // ______________Full screen
  $(document).on("click", ".fullscreen-button", function toggleFullScreen() {
    $('html').addClass('fullscreen');
    if (document.fullScreenElement !== undefined && document.fullScreenElement === null || document.msFullscreenElement !== undefined && document.msFullscreenElement === null || document.mozFullScreen !== undefined && !document.mozFullScreen || document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      $('html').removeClass('fullscreen');
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  });

  //Input file-browser
  $(document).on('change', '.file-browserinput', function () {
    var input = $(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
  }); // We can watch for our custom `fileselect` event like this

  // ______________Cover Image
  $(".cover-image").each(function () {
    var attr = $(this).attr('data-image-src');
    if (_typeof(attr) !== ( true ? "undefined" : 0) && attr !== false) {
      $(this).css('background', 'url(' + attr + ') center center');
    }
  });

  // ______________Accordion Style
  $(document).on("click", '[data-bs-toggle="collapse"]', function () {
    $(this).toggleClass('active').siblings().removeClass('active');
  });

  // ______________EMAIL INBOX
  $(".clickable-row").on('click', function () {
    window.location = $(this).data("href");
  });

  // ______________Horizontal-menu Active Class
  function addActiveClass(element) {
    if (current === "") {
      if (element.attr('href').indexOf("#") !== -1) {
        element.parents('.main-navbar .nav-item').last().removeClass('active');
        if (element.parents('.main-navbar .nav-sub').length) {
          element.parents('.main-navbar .nav-sub-item').last().removeClass('active');
        }
      }
    } else {
      if (element.attr('href').indexOf(current) !== -1) {
        element.parents('.main-navbar .nav-item').last().addClass('active');
        if (element.parents('.main-navbar .nav-sub').length) {
          element.parents('.main-navbar .nav-sub-item').last().addClass('active');
        }
      }
    }
  }
  var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
  $('.main-navbar .nav li a').each(function () {
    var $this = $(this);
    addActiveClass($this);
  });

  /* Headerfixed */
  $(window).on("scroll", function (e) {
    if ($(window).scrollTop() >= 66) {
      $('.main-header').addClass('fixed-header');
    } else {
      $('.main-header').removeClass('fixed-header');
    }
  });

  /*Switcher Toggle Start*/
  $('.layout-setting').on("click", function (e) {
    if (!document.querySelector('body').classList.contains('dark-theme')) {
      $('body').addClass('dark-theme');
      $('body').removeClass('light-theme');
      $('#myonoffswitch5').prop('checked', true);
      $('#myonoffswitch8').prop('checked', true);
      localStorage.setItem('dashplexdarktheme', true);
      localStorage.removeItem('dashplexlighttheme');
      $('#myonoffswitch2').prop('checked', true);
    } else {
      $('body').removeClass('dark-theme');
      $('body').addClass('light-theme');
      $('#myonoffswitch3').prop('checked', true);
      $('#myonoffswitch6').prop('checked', true);
      localStorage.setItem('dashplexlighttheme', true);
      localStorage.removeItem('dashplexdarktheme');
      $('#myonoffswitch1').prop('checked', true);
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_define-built-in_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-0eab75","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-bed4a0","vendors-node_modules_core-js_modules_es_array_index-of_js-node_modules_core-js_modules_es_arr-cb40da"], () => (__webpack_exec__("./assets/js/custom.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQzZGLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO01BRTFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUM7TUFDaERELFlBQVksQ0FBQ0UsVUFBVSxDQUFDLG1CQUFtQixDQUFDO01BQzVDaEcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM2RixJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztJQUMzQztFQUNELENBQUMsQ0FBQztBQUNILENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XHJcblx0J3VzZSBzdHJpY3QnXHJcblxyXG5cdC8vIF9fX19fX19fX19fX19fIFBBR0UgTE9BRElOR1xyXG5cdCQoXCIjZ2xvYmFsLWxvYWRlclwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuXHJcblxyXG5cclxuXHQvLyBfX19fX19fX19fX19fXyBDYXJkXHJcblx0Y29uc3QgRElWX0NBUkQgPSAnZGl2LmNhcmQnO1xyXG5cclxuXHQvLyBfX19fX19fX19fX19fXyBGdW5jdGlvbiBmb3IgcmVtb3ZlIGNhcmRcclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtYnMtdG9nZ2xlPVwiY2FyZC1yZW1vdmVcIl0nLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0bGV0ICRjYXJkID0gJCh0aGlzKS5jbG9zZXN0KERJVl9DQVJEKTtcclxuXHRcdCRjYXJkLnJlbW92ZSgpO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBfX19fX19fX19fX19fXyBGdW5jdGlvbnMgZm9yIGNvbGxhcHNlZCBjYXJkXHJcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWJzLXRvZ2dsZT1cImNhcmQtY29sbGFwc2VcIl0nLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0bGV0ICRjYXJkID0gJCh0aGlzKS5jbG9zZXN0KERJVl9DQVJEKTtcclxuXHRcdCRjYXJkLnRvZ2dsZUNsYXNzKCdjYXJkLWNvbGxhcHNlZCcpO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBfX19fX19fX19fX19fXyBDYXJkIGZ1bGwgc2NyZWVuXHJcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWJzLXRvZ2dsZT1cImNhcmQtZnVsbHNjcmVlblwiXScsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRsZXQgJGNhcmQgPSAkKHRoaXMpLmNsb3Nlc3QoRElWX0NBUkQpO1xyXG5cdFx0JGNhcmQudG9nZ2xlQ2xhc3MoJ2NhcmQtZnVsbHNjcmVlbicpLnJlbW92ZUNsYXNzKCdjYXJkLWNvbGxhcHNlZCcpO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBfX19fX19fX19fX19fX01haW4tbmF2YmFyXHJcblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA5OTJweCknKS5tYXRjaGVzKSB7XHJcblx0XHQkKCcubWFpbi1uYXZiYXIgLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0XHQkKCcubWFpbi1oZWFkZXItbWVudSAuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHR9XHJcblx0JCgnLm1haW4taGVhZGVyIC5kcm9wZG93biA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnc2hvdycpO1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0fSk7XHJcblx0JCgnLm1vYmlsZS1tYWluLWhlYWRlciAuZHJvcGRvd24gPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdCQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG5cdH0pO1xyXG5cdCQoJy5tYWluLW5hdmJhciAud2l0aC1zdWInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnc2hvdycpO1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0fSk7XHJcblx0JCgnLmRyb3Bkb3duLW1lbnUgLm1haW4taGVhZGVyLWFycm93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQodGhpcykuY2xvc2VzdCgnLmRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHR9KTtcclxuXHQkKCcjbWFpblNpZGViYXJUb2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnYm9keS5ob3Jpem9udGFsbWVudScpLnRvZ2dsZUNsYXNzKCdtYWluLW5hdmJhci1zaG93Jyk7XHJcblx0fSk7XHJcblx0JCgnI21haW5Db250ZW50TGVmdFNob3cnKS5vbignY2xpY2sgdG91Y2gnLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdtYWluLWNvbnRlbnQtbGVmdC1zaG93Jyk7XHJcblx0fSk7XHJcblx0JCgnI21haW5Db250ZW50TGVmdEhpZGUnKS5vbignY2xpY2sgdG91Y2gnLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdtYWluLWNvbnRlbnQtbGVmdC1zaG93Jyk7XHJcblx0fSk7XHJcblx0JCgnI21haW5Db250ZW50Qm9keUhpZGUnKS5vbignY2xpY2sgdG91Y2gnLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdtYWluLWNvbnRlbnQtYm9keS1zaG93Jyk7XHJcblx0fSlcclxuXHQkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwibWFpbi1uYXZiYXItYmFja2Ryb3BcIj48L2Rpdj4nKTtcclxuXHQkKCcubWFpbi1uYXZiYXItYmFja2Ryb3AnKS5vbignY2xpY2sgdG91Y2hzdGFydCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbWFpbi1uYXZiYXItc2hvdycpO1xyXG5cdH0pO1xyXG5cclxuXHJcblxyXG5cdC8vIF9fX19fX19fX19fX19fRHJvcGRvd24gbWVudVxyXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR2YXIgZHJvcFRhcmcgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubWFpbi1oZWFkZXIgLmRyb3Bkb3duJykubGVuZ3RoO1xyXG5cdFx0aWYgKCFkcm9wVGFyZykge1xyXG5cdFx0XHQkKCcubWFpbi1oZWFkZXIgLmRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdH1cclxuXHRcdGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogOTkycHgpJykubWF0Y2hlcykge1xyXG5cdFx0XHR2YXIgbmF2VGFyZyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tYWluLW5hdmJhciAubmF2LWl0ZW0nKS5sZW5ndGg7XHJcblx0XHRcdGlmICghbmF2VGFyZykge1xyXG5cdFx0XHRcdCQoJy5tYWluLW5hdmJhciAuc2hvdycpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIG1lbnVUYXJnID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm1haW4taGVhZGVyLW1lbnUgLm5hdi1pdGVtJykubGVuZ3RoO1xyXG5cdFx0XHRpZiAoIW1lbnVUYXJnKSB7XHJcblx0XHRcdFx0JCgnLm1haW4taGVhZGVyLW1lbnUgLnNob3cnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnbWFpbi1tZW51LXN1Yi1tZWdhJykpIHtcclxuXHRcdFx0XHQkKCcubWFpbi1oZWFkZXItbWVudSAuc2hvdycpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnI21haW5NZW51U2hvdycpLmxlbmd0aCkge1xyXG5cdFx0XHRcdHZhciBobSA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tYWluLWhlYWRlci1tZW51JykubGVuZ3RoO1xyXG5cdFx0XHRcdGlmICghaG0pIHtcclxuXHRcdFx0XHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbWFpbi1oZWFkZXItbWVudS1zaG93Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vIF9fX19fX19fX19fX19fTWFpbk1lbnVTaG93XHJcblx0JCgnI21haW5NZW51U2hvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ21haW4taGVhZGVyLW1lbnUtc2hvdycpO1xyXG5cdH0pXHJcblx0JCgnLm1haW4taGVhZGVyLW1lbnUgLndpdGgtc3ViJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdCQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG5cdH0pXHJcblx0JCgnLm1haW4taGVhZGVyLW1lbnUtaGVhZGVyIC5jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21haW4taGVhZGVyLW1lbnUtc2hvdycpO1xyXG5cdH0pXHJcblxyXG5cdC8vIF9fX19fX19fX19fX19fUG9wb3ZlclxyXG5cdHZhciBwb3BvdmVyVHJpZ2dlckxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInBvcG92ZXJcIl0nKSlcclxuXHR2YXIgcG9wb3Zlckxpc3QgPSBwb3BvdmVyVHJpZ2dlckxpc3QubWFwKGZ1bmN0aW9uIChwb3BvdmVyVHJpZ2dlckVsKSB7XHJcblx0XHRyZXR1cm4gbmV3IGJvb3RzdHJhcC5Qb3BvdmVyKHBvcG92ZXJUcmlnZ2VyRWwpXHJcblx0fSlcclxuXHJcblx0Ly8gX19fX19fX19fX19fX19Ub29sdGlwXHJcblx0dmFyIHRvb2x0aXBUcmlnZ2VyTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiXScpKVxyXG5cdHZhciB0b29sdGlwTGlzdCA9IHRvb2x0aXBUcmlnZ2VyTGlzdC5tYXAoZnVuY3Rpb24gKHRvb2x0aXBUcmlnZ2VyRWwpIHtcclxuXHRcdHJldHVybiBuZXcgYm9vdHN0cmFwLlRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbClcclxuXHR9KVxyXG5cclxuXHQvLyBfX19fX19fX19fX19fX1RvYXN0XHJcblx0JChcIi50b2FzdFwiKS50b2FzdCgpO1xyXG5cclxuXHQvLyBfX19fX19fX19fX19fX0xpdmUgVG9hc3RcclxuXHR2YXIgdG9hc3RUcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpdmVUb2FzdEJ0bicpXHJcblx0dmFyIHRvYXN0TGl2ZUV4YW1wbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl2ZVRvYXN0JylcclxuXHRpZiAodG9hc3RUcmlnZ2VyKSB7XHJcblx0XHR0b2FzdFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciB0b2FzdCA9IG5ldyBib290c3RyYXAuVG9hc3QodG9hc3RMaXZlRXhhbXBsZSlcclxuXHJcblx0XHRcdHRvYXN0LnNob3coKVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdC8vIF9fX19fX19fX19fX19fQmFjay10b3AtYnV0dG9uXHJcblx0JCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDApIHtcclxuXHRcdFx0JCgnI2JhY2stdG8tdG9wJykuZmFkZUluKCdzbG93Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCcjYmFjay10by10b3AnKS5mYWRlT3V0KCdzbG93Jyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0JChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIiNiYWNrLXRvLXRvcFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0JChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XHJcblx0XHRcdHNjcm9sbFRvcDogMFxyXG5cdFx0fSwgMCk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblxyXG5cdC8vIF9fX19fX19fX19fX19fRnVsbCBzY3JlZW5cclxuXHQkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmZ1bGxzY3JlZW4tYnV0dG9uXCIsIGZ1bmN0aW9uIHRvZ2dsZUZ1bGxTY3JlZW4oKSB7XHJcblx0XHQkKCdodG1sJykuYWRkQ2xhc3MoJ2Z1bGxzY3JlZW4nKTtcclxuXHRcdGlmICgoZG9jdW1lbnQuZnVsbFNjcmVlbkVsZW1lbnQgIT09IHVuZGVmaW5lZCAmJiBkb2N1bWVudC5mdWxsU2NyZWVuRWxlbWVudCA9PT0gbnVsbCkgfHwgKGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQgIT09IHVuZGVmaW5lZCAmJiBkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50ID09PSBudWxsKSB8fCAoZG9jdW1lbnQubW96RnVsbFNjcmVlbiAhPT0gdW5kZWZpbmVkICYmICFkb2N1bWVudC5tb3pGdWxsU2NyZWVuKSB8fCAoZG9jdW1lbnQud2Via2l0SXNGdWxsU2NyZWVuICE9PSB1bmRlZmluZWQgJiYgIWRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbikpIHtcclxuXHRcdFx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZXF1ZXN0RnVsbFNjcmVlbikge1xyXG5cdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZXF1ZXN0RnVsbFNjcmVlbigpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xyXG5cdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbikge1xyXG5cdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbihFbGVtZW50LkFMTE9XX0tFWUJPQVJEX0lOUFVUKTtcclxuXHRcdFx0fSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG5cdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnZnVsbHNjcmVlbicpO1xyXG5cdFx0XHRpZiAoZG9jdW1lbnQuY2FuY2VsRnVsbFNjcmVlbikge1xyXG5cdFx0XHRcdGRvY3VtZW50LmNhbmNlbEZ1bGxTY3JlZW4oKTtcclxuXHRcdFx0fSBlbHNlIGlmIChkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XHJcblx0XHRcdFx0ZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdENhbmNlbEZ1bGxTY3JlZW4pIHtcclxuXHRcdFx0XHRkb2N1bWVudC53ZWJraXRDYW5jZWxGdWxsU2NyZWVuKCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbikge1xyXG5cdFx0XHRcdGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcblxyXG5cdC8vSW5wdXQgZmlsZS1icm93c2VyXHJcblx0JChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuZmlsZS1icm93c2VyaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgaW5wdXQgPSAkKHRoaXMpLFxyXG5cdFx0XHRudW1GaWxlcyA9IGlucHV0LmdldCgwKS5maWxlcyA/IGlucHV0LmdldCgwKS5maWxlcy5sZW5ndGggOiAxLFxyXG5cdFx0XHRsYWJlbCA9IGlucHV0LnZhbCgpLnJlcGxhY2UoL1xcXFwvZywgJy8nKS5yZXBsYWNlKC8uKlxcLy8sICcnKTtcclxuXHRcdGlucHV0LnRyaWdnZXIoJ2ZpbGVzZWxlY3QnLCBbbnVtRmlsZXMsIGxhYmVsXSk7XHJcblx0fSk7Ly8gV2UgY2FuIHdhdGNoIGZvciBvdXIgY3VzdG9tIGBmaWxlc2VsZWN0YCBldmVudCBsaWtlIHRoaXNcclxuXHJcblx0Ly8gX19fX19fX19fX19fX19Db3ZlciBJbWFnZVxyXG5cdCQoXCIuY292ZXItaW1hZ2VcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgYXR0ciA9ICQodGhpcykuYXR0cignZGF0YS1pbWFnZS1zcmMnKTtcclxuXHRcdGlmICh0eXBlb2YgYXR0ciAhPT0gdHlwZW9mIHVuZGVmaW5lZCAmJiBhdHRyICE9PSBmYWxzZSkge1xyXG5cdFx0XHQkKHRoaXMpLmNzcygnYmFja2dyb3VuZCcsICd1cmwoJyArIGF0dHIgKyAnKSBjZW50ZXIgY2VudGVyJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vIF9fX19fX19fX19fX19fQWNjb3JkaW9uIFN0eWxlXHJcblx0JChkb2N1bWVudCkub24oXCJjbGlja1wiLCAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0Ly8gX19fX19fX19fX19fX19FTUFJTCBJTkJPWFxyXG5cdCQoXCIuY2xpY2thYmxlLXJvd1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHR3aW5kb3cubG9jYXRpb24gPSAkKHRoaXMpLmRhdGEoXCJocmVmXCIpO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBfX19fX19fX19fX19fX0hvcml6b250YWwtbWVudSBBY3RpdmUgQ2xhc3NcclxuXHRmdW5jdGlvbiBhZGRBY3RpdmVDbGFzcyhlbGVtZW50KSB7XHJcblx0XHRpZiAoY3VycmVudCA9PT0gXCJcIikge1xyXG5cdFx0XHRpZiAoZWxlbWVudC5hdHRyKCdocmVmJykuaW5kZXhPZihcIiNcIikgIT09IC0xKSB7XHJcblx0XHRcdFx0ZWxlbWVudC5wYXJlbnRzKCcubWFpbi1uYXZiYXIgLm5hdi1pdGVtJykubGFzdCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRpZiAoZWxlbWVudC5wYXJlbnRzKCcubWFpbi1uYXZiYXIgLm5hdi1zdWInKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQucGFyZW50cygnLm1haW4tbmF2YmFyIC5uYXYtc3ViLWl0ZW0nKS5sYXN0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGVsZW1lbnQuYXR0cignaHJlZicpLmluZGV4T2YoY3VycmVudCkgIT09IC0xKSB7XHJcblx0XHRcdFx0ZWxlbWVudC5wYXJlbnRzKCcubWFpbi1uYXZiYXIgLm5hdi1pdGVtJykubGFzdCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRpZiAoZWxlbWVudC5wYXJlbnRzKCcubWFpbi1uYXZiYXIgLm5hdi1zdWInKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQucGFyZW50cygnLm1haW4tbmF2YmFyIC5uYXYtc3ViLWl0ZW0nKS5sYXN0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHR2YXIgY3VycmVudCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5zbGljZSgtMSlbMF0ucmVwbGFjZSgvXlxcL3xcXC8kL2csICcnKTtcclxuXHQkKCcubWFpbi1uYXZiYXIgLm5hdiBsaSBhJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cdFx0YWRkQWN0aXZlQ2xhc3MoJHRoaXMpO1xyXG5cdH0pXHJcblxyXG5cclxuXHQvKiBIZWFkZXJmaXhlZCAqL1xyXG5cdCQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSA2Nikge1xyXG5cdFx0XHQkKCcubWFpbi1oZWFkZXInKS5hZGRDbGFzcygnZml4ZWQtaGVhZGVyJyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0JCgnLm1haW4taGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2ZpeGVkLWhlYWRlcicpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHJcblx0LypTd2l0Y2hlciBUb2dnbGUgU3RhcnQqL1xyXG5cdCQoJy5sYXlvdXQtc2V0dGluZycpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGlmICghKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstdGhlbWUnKSkpIHtcclxuXHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdkYXJrLXRoZW1lJyk7XHJcblx0XHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbGlnaHQtdGhlbWUnKTtcclxuXHJcblx0XHRcdCQoJyNteW9ub2Zmc3dpdGNoNScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0JCgnI215b25vZmZzd2l0Y2g4JykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rhc2hwbGV4ZGFya3RoZW1lJywgdHJ1ZSk7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdkYXNocGxleGxpZ2h0dGhlbWUnKTtcclxuXHRcdFx0JCgnI215b25vZmZzd2l0Y2gyJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnZGFyay10aGVtZScpO1xyXG5cdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ2xpZ2h0LXRoZW1lJyk7XHJcblx0XHRcdCQoJyNteW9ub2Zmc3dpdGNoMycpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0JCgnI215b25vZmZzd2l0Y2g2JykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rhc2hwbGV4bGlnaHR0aGVtZScsIHRydWUpO1xyXG5cdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZGFzaHBsZXhkYXJrdGhlbWUnKTtcclxuXHRcdFx0JCgnI215b25vZmZzd2l0Y2gxJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59KTsiXSwibmFtZXMiOlsiJCIsImZhZGVPdXQiLCJESVZfQ0FSRCIsImRvY3VtZW50Iiwib24iLCJlIiwiJGNhcmQiLCJjbG9zZXN0IiwicmVtb3ZlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsInJlbW92ZUNsYXNzIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJwYXJlbnQiLCJzaWJsaW5ncyIsImFkZENsYXNzIiwiYXBwZW5kIiwic3RvcFByb3BhZ2F0aW9uIiwiZHJvcFRhcmciLCJ0YXJnZXQiLCJsZW5ndGgiLCJuYXZUYXJnIiwibWVudVRhcmciLCJoYXNDbGFzcyIsImhtIiwicG9wb3ZlclRyaWdnZXJMaXN0Iiwic2xpY2UiLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsInBvcG92ZXJMaXN0IiwibWFwIiwicG9wb3ZlclRyaWdnZXJFbCIsImJvb3RzdHJhcCIsIlBvcG92ZXIiLCJ0b29sdGlwVHJpZ2dlckxpc3QiLCJ0b29sdGlwTGlzdCIsInRvb2x0aXBUcmlnZ2VyRWwiLCJUb29sdGlwIiwidG9hc3QiLCJ0b2FzdFRyaWdnZXIiLCJnZXRFbGVtZW50QnlJZCIsInRvYXN0TGl2ZUV4YW1wbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiVG9hc3QiLCJzaG93Iiwic2Nyb2xsVG9wIiwiZmFkZUluIiwiYW5pbWF0ZSIsInRvZ2dsZUZ1bGxTY3JlZW4iLCJmdWxsU2NyZWVuRWxlbWVudCIsInVuZGVmaW5lZCIsIm1zRnVsbHNjcmVlbkVsZW1lbnQiLCJtb3pGdWxsU2NyZWVuIiwid2Via2l0SXNGdWxsU2NyZWVuIiwiZG9jdW1lbnRFbGVtZW50IiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIiwiRWxlbWVudCIsIkFMTE9XX0tFWUJPQVJEX0lOUFVUIiwibXNSZXF1ZXN0RnVsbHNjcmVlbiIsImNhbmNlbEZ1bGxTY3JlZW4iLCJtb3pDYW5jZWxGdWxsU2NyZWVuIiwid2Via2l0Q2FuY2VsRnVsbFNjcmVlbiIsIm1zRXhpdEZ1bGxzY3JlZW4iLCJpbnB1dCIsIm51bUZpbGVzIiwiZ2V0IiwiZmlsZXMiLCJsYWJlbCIsInZhbCIsInJlcGxhY2UiLCJ0cmlnZ2VyIiwiZWFjaCIsImF0dHIiLCJfdHlwZW9mIiwiY3NzIiwibG9jYXRpb24iLCJkYXRhIiwiYWRkQWN0aXZlQ2xhc3MiLCJlbGVtZW50IiwiY3VycmVudCIsImluZGV4T2YiLCJwYXJlbnRzIiwibGFzdCIsInBhdGhuYW1lIiwic3BsaXQiLCIkdGhpcyIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInByb3AiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=