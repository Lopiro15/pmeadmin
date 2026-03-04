(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/sticky"],{

/***/ "./assets/js/sticky.js":
/*!*****************************!*\
  !*** ./assets/js/sticky.js ***!
  \*****************************/
/***/ (() => {

(function () {
  var stickyElement = $(".sticky"),
    stickyClass = "sticky-pin",
    stickyPos = 66,
    //Distance from the top of the window.
    stickyHeight;

  ///Create a negative margin to prevent content 'jumps':
  stickyElement.after('<div class="jumps-prevent"></div>');
  function jumpsPrevent() {
    stickyHeight = stickyElement.innerHeight();
    stickyElement.css({
      "margin-bottom": "-" + stickyHeight + "px"
    });
    stickyElement.next().css({
      "padding-top": +stickyHeight + "px"
    });
  }
  ;
  jumpsPrevent(); //Run.

  //Function trigger:
  $(window).resize(function () {
    jumpsPrevent();
  });

  //Sticker function:
  function stickerFn() {
    var winTop = $(this).scrollTop();
    //Check element position:
    winTop >= stickyPos ? stickyElement.addClass(stickyClass) : stickyElement.removeClass(stickyClass); //Boolean class switcher.
  }
  ;
  stickerFn(); //Run.

  function stickerhoverFn(hover) {
    var winTop = $(this).scrollTop();
    //Check element position:
    winTop >= stickyPos ? hover.addClass('sidemenu-scroll') : hover.removeClass('sidemenu-scroll'); //Boolean class switcher.
  }
  ;
  var hoverSubmenu = $('.hover-submenu .main-sidebar');
  var hoverSubmenu1 = $('.hover-submenu1 .main-sidebar');
  stickerhoverFn(hoverSubmenu);
  stickerhoverFn(hoverSubmenu1);
  //Function trigger:
  $(window).scroll(function () {
    stickerFn();
    stickerhoverFn(hoverSubmenu);
    stickerhoverFn(hoverSubmenu1);
  });
})();

// sidemenu
(function () {
  $('.side-menu').scroll(function () {
    var _s$;
    var s = $(".side-menu .ps__rail-y");
    if (((_s$ = s[0]) === null || _s$ === void 0 ? void 0 : _s$.style.top.split('px')[0]) <= 60) {
      $('.side-menu').removeClass('sidemenu-scroll');
    } else {
      $('.side-menu').addClass('sidemenu-scroll');
    }
  });
})();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/sticky.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzdDO0VBRUQsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3RpY2t5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe1xuICBcbiAgdmFyIHN0aWNreUVsZW1lbnQgPSAkKFwiLnN0aWNreVwiKSxcbiAgICAgIHN0aWNreUNsYXNzID0gXCJzdGlja3ktcGluXCIsXG4gICAgICBzdGlja3lQb3MgPSA2NiwgLy9EaXN0YW5jZSBmcm9tIHRoZSB0b3Agb2YgdGhlIHdpbmRvdy5cbiAgICAgIHN0aWNreUhlaWdodDtcblxuICBcblxuICAvLy9DcmVhdGUgYSBuZWdhdGl2ZSBtYXJnaW4gdG8gcHJldmVudCBjb250ZW50ICdqdW1wcyc6XG4gIHN0aWNreUVsZW1lbnQuYWZ0ZXIoJzxkaXYgY2xhc3M9XCJqdW1wcy1wcmV2ZW50XCI+PC9kaXY+Jyk7XG4gIGZ1bmN0aW9uIGp1bXBzUHJldmVudCgpIHtcbiAgICBzdGlja3lIZWlnaHQgPSBzdGlja3lFbGVtZW50LmlubmVySGVpZ2h0KCk7XG4gICAgc3RpY2t5RWxlbWVudC5jc3Moe1wibWFyZ2luLWJvdHRvbVwiOlwiLVwiICsgc3RpY2t5SGVpZ2h0ICsgXCJweFwifSk7XG4gICAgc3RpY2t5RWxlbWVudC5uZXh0KCkuY3NzKHtcInBhZGRpbmctdG9wXCI6ICsgc3RpY2t5SGVpZ2h0ICsgXCJweFwifSk7IFxuICB9O1xuICBqdW1wc1ByZXZlbnQoKTsgLy9SdW4uXG5cbiAgLy9GdW5jdGlvbiB0cmlnZ2VyOlxuICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XG4gICAganVtcHNQcmV2ZW50KCk7XG4gIH0pO1xuXG4gIC8vU3RpY2tlciBmdW5jdGlvbjpcbiAgZnVuY3Rpb24gc3RpY2tlckZuKCkge1xuICAgIHZhciB3aW5Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuICAgIC8vQ2hlY2sgZWxlbWVudCBwb3NpdGlvbjpcbiAgICB3aW5Ub3AgPj0gc3RpY2t5UG9zID9cbiAgICAgIHN0aWNreUVsZW1lbnQuYWRkQ2xhc3Moc3RpY2t5Q2xhc3MpOlxuICAgICAgc3RpY2t5RWxlbWVudC5yZW1vdmVDbGFzcyhzdGlja3lDbGFzcykgLy9Cb29sZWFuIGNsYXNzIHN3aXRjaGVyLlxuICB9O1xuICBzdGlja2VyRm4oKTsgLy9SdW4uXG4gIFxuICBmdW5jdGlvbiBzdGlja2VyaG92ZXJGbihob3Zlcikge1xuICAgIHZhciB3aW5Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuICAgIC8vQ2hlY2sgZWxlbWVudCBwb3NpdGlvbjpcbiAgICB3aW5Ub3AgPj0gc3RpY2t5UG9zID9cbiAgICAgIGhvdmVyLmFkZENsYXNzKCdzaWRlbWVudS1zY3JvbGwnKTpcbiAgICAgIGhvdmVyLnJlbW92ZUNsYXNzKCdzaWRlbWVudS1zY3JvbGwnKSAvL0Jvb2xlYW4gY2xhc3Mgc3dpdGNoZXIuXG4gIH07XG4gIGxldCBob3ZlclN1Ym1lbnUgPSAkKCcuaG92ZXItc3VibWVudSAubWFpbi1zaWRlYmFyJylcbiAgbGV0IGhvdmVyU3VibWVudTEgPSAkKCcuaG92ZXItc3VibWVudTEgLm1haW4tc2lkZWJhcicpXG4gIHN0aWNrZXJob3ZlckZuKGhvdmVyU3VibWVudSlcbiAgc3RpY2tlcmhvdmVyRm4oaG92ZXJTdWJtZW51MSlcbiAgLy9GdW5jdGlvbiB0cmlnZ2VyOlxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAgc3RpY2tlckZuKCk7XG4gICAgc3RpY2tlcmhvdmVyRm4oaG92ZXJTdWJtZW51KVxuICAgIHN0aWNrZXJob3ZlckZuKGhvdmVyU3VibWVudTEpXG4gIH0pO1xuXG59KSgpO1xuXG4vLyBzaWRlbWVudVxuKGZ1bmN0aW9uKCl7XG4gXHQkKCcuc2lkZS1tZW51Jykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzID0gJChcIi5zaWRlLW1lbnUgLnBzX19yYWlsLXlcIik7XG4gICAgaWYoc1swXT8uc3R5bGUudG9wLnNwbGl0KCdweCcpWzBdIDw9IDYwKXtcbiAgICAgICQoJy5zaWRlLW1lbnUnKS5yZW1vdmVDbGFzcygnc2lkZW1lbnUtc2Nyb2xsJykgICAgICBcbiAgICB9IFxuICAgIGVsc2V7XG4gICAgICAkKCcuc2lkZS1tZW51JykuYWRkQ2xhc3MoJ3NpZGVtZW51LXNjcm9sbCcpXG4gICAgfVxuICBcbiAgIH0pXG59KSgpOyJdLCJuYW1lcyI6WyJzdGlja3lFbGVtZW50IiwiJCIsInN0aWNreUNsYXNzIiwic3RpY2t5UG9zIiwic3RpY2t5SGVpZ2h0IiwiYWZ0ZXIiLCJqdW1wc1ByZXZlbnQiLCJpbm5lckhlaWdodCIsImNzcyIsIm5leHQiLCJ3aW5kb3ciLCJyZXNpemUiLCJzdGlja2VyRm4iLCJ3aW5Ub3AiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic3RpY2tlcmhvdmVyRm4iLCJob3ZlciIsImhvdmVyU3VibWVudSIsImhvdmVyU3VibWVudTEiLCJzY3JvbGwiLCJfcyQiLCJzIiwic3R5bGUiLCJ0b3AiLCJzcGxpdCJdLCJzb3VyY2VSb290IjoiIn0=