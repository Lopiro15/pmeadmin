(self["webpackChunk"] = self["webpackChunk"] || []).push([["switcher/switcher"],{

/***/ "./assets/switcherjs/switcher.js":
/*!***************************************!*\
  !*** ./assets/switcherjs/switcher.js ***!
  \***************************************/
/***/ (() => {

// Swticher Cookie Base
/**
 * Styleswitch stylesheet switcher built on jQuery
 * Under an Attribution, Share Alike License
 * By Kelvin Luck ( http://www.kelvinluck.com/ )
 * Thanks for permission! 
 **/

// DEMO Swticher Base
jQuery('.demo-icon').click(function () {
  if (jQuery('.demo_changer').hasClass("active")) {
    jQuery('.demo_changer').animate({
      "right": "-270px"
    }, function () {
      jQuery('.demo_changer').removeClass("active");
    });
  } else {
    jQuery('.demo_changer').animate({
      "right": "0px"
    }, function () {
      jQuery('.demo_changer').addClass("active");
    });
  }
});

//p-scroll bar
var ps5 = new PerfectScrollbar('.sidebar-right1', {
  useBothWheelAxes: true,
  suppressScrollX: true
});
jQuery('.main-content').click(function () {
  if (jQuery('.demo_changer').hasClass("active")) {
    jQuery('.demo_changer').animate({
      "right": "-270px"
    }, function () {
      jQuery('.demo_changer').removeClass("active");
    });
  }
});
jQuery('.main-signin-wrapper').click(function () {
  if (jQuery('.demo_changer').hasClass("active")) {
    jQuery('.demo_changer').animate({
      "right": "-270px"
    }, function () {
      jQuery('.demo_changer').removeClass("active");
    });
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/switcherjs/switcher.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIvc3dpdGNoZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBQSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUNDLEtBQUssQ0FBQyxZQUFVO0VBQ3BDLElBQUdELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFDO0lBQzdDRixNQUFNLENBQUMsZUFBZSxDQUFDLENBQUNHLE9BQU8sQ0FBQztNQUFDLE9BQU8sRUFBQztJQUFRLENBQUMsRUFBQyxZQUFVO01BQzVESCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUNJLFdBQVcsQ0FBQyxRQUFRLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0VBQ0gsQ0FBQyxNQUFJO0lBQ0pKLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQ0csT0FBTyxDQUFDO01BQUMsT0FBTyxFQUFDO0lBQUssQ0FBQyxFQUFDLFlBQVU7TUFDekRILE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQ0ssUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUMzQyxDQUFDLENBQUM7RUFDSDtBQUNELENBQUMsQ0FBQzs7QUFFRjtBQUNBLElBQU1DLEdBQUcsR0FBRyxJQUFJQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRTtFQUNuREMsZ0JBQWdCLEVBQUMsSUFBSTtFQUNyQkMsZUFBZSxFQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUpULE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVU7RUFDdkMsSUFBR0QsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDRSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUM7SUFDN0NGLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQ0csT0FBTyxDQUFDO01BQUMsT0FBTyxFQUFDO0lBQVEsQ0FBQyxFQUFDLFlBQVU7TUFDNURILE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQ0ksV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUM5QyxDQUFDLENBQUM7RUFDSDtBQUNELENBQUMsQ0FBQztBQUVGSixNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVU7RUFDOUMsSUFBR0QsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDRSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUM7SUFDN0NGLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQ0csT0FBTyxDQUFDO01BQUMsT0FBTyxFQUFDO0lBQVEsQ0FBQyxFQUFDLFlBQVU7TUFDNURILE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQ0ksV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUM5QyxDQUFDLENBQUM7RUFDSDtBQUNELENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zd2l0Y2hlcmpzL3N3aXRjaGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN3dGljaGVyIENvb2tpZSBCYXNlXG4vKipcbiAqIFN0eWxlc3dpdGNoIHN0eWxlc2hlZXQgc3dpdGNoZXIgYnVpbHQgb24galF1ZXJ5XG4gKiBVbmRlciBhbiBBdHRyaWJ1dGlvbiwgU2hhcmUgQWxpa2UgTGljZW5zZVxuICogQnkgS2VsdmluIEx1Y2sgKCBodHRwOi8vd3d3LmtlbHZpbmx1Y2suY29tLyApXG4gKiBUaGFua3MgZm9yIHBlcm1pc3Npb24hIFxuICoqL1xuXG4vLyBERU1PIFN3dGljaGVyIEJhc2VcbmpRdWVyeSgnLmRlbW8taWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdGlmKGpRdWVyeSgnLmRlbW9fY2hhbmdlcicpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKXtcblx0XHRqUXVlcnkoJy5kZW1vX2NoYW5nZXInKS5hbmltYXRlKHtcInJpZ2h0XCI6XCItMjcwcHhcIn0sZnVuY3Rpb24oKXtcblx0XHRcdGpRdWVyeSgnLmRlbW9fY2hhbmdlcicpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdH0pO1x0XHRcdFx0XHRcdFxuXHR9ZWxzZXtcblx0XHRqUXVlcnkoJy5kZW1vX2NoYW5nZXInKS5hbmltYXRlKHtcInJpZ2h0XCI6XCIwcHhcIn0sZnVuY3Rpb24oKXtcblx0XHRcdGpRdWVyeSgnLmRlbW9fY2hhbmdlcicpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXHRcdH0pO1x0XHRcdFxuXHR9IFxufSk7XG5cbi8vcC1zY3JvbGwgYmFyXG5jb25zdCBwczUgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnNpZGViYXItcmlnaHQxJywge1xuXHR1c2VCb3RoV2hlZWxBeGVzOnRydWUsXG5cdHN1cHByZXNzU2Nyb2xsWDp0cnVlLFxuICB9KTtcbiAgXG5qUXVlcnkoJy5tYWluLWNvbnRlbnQnKS5jbGljayhmdW5jdGlvbigpe1xuXHRpZihqUXVlcnkoJy5kZW1vX2NoYW5nZXInKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSl7XG5cdFx0alF1ZXJ5KCcuZGVtb19jaGFuZ2VyJykuYW5pbWF0ZSh7XCJyaWdodFwiOlwiLTI3MHB4XCJ9LGZ1bmN0aW9uKCl7XG5cdFx0XHRqUXVlcnkoJy5kZW1vX2NoYW5nZXInKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHR9KTtcdFx0XHRcdFx0XHRcblx0fVxufSk7XG5cbmpRdWVyeSgnLm1haW4tc2lnbmluLXdyYXBwZXInKS5jbGljayhmdW5jdGlvbigpe1xuXHRpZihqUXVlcnkoJy5kZW1vX2NoYW5nZXInKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSl7XG5cdFx0alF1ZXJ5KCcuZGVtb19jaGFuZ2VyJykuYW5pbWF0ZSh7XCJyaWdodFwiOlwiLTI3MHB4XCJ9LGZ1bmN0aW9uKCl7XG5cdFx0XHRqUXVlcnkoJy5kZW1vX2NoYW5nZXInKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblx0XHR9KTtcdFx0XHRcdFx0XHRcblx0fVxufSk7XG4iXSwibmFtZXMiOlsialF1ZXJ5IiwiY2xpY2siLCJoYXNDbGFzcyIsImFuaW1hdGUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwicHM1IiwiUGVyZmVjdFNjcm9sbGJhciIsInVzZUJvdGhXaGVlbEF4ZXMiLCJzdXBwcmVzc1Njcm9sbFgiXSwic291cmNlUm9vdCI6IiJ9