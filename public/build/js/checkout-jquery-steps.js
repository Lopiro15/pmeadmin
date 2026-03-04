(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/checkout-jquery-steps"],{

/***/ "./assets/js/checkout-jquery-steps.js":
/*!********************************************!*\
  !*** ./assets/js/checkout-jquery-steps.js ***!
  \********************************************/
/***/ (() => {

$(function () {
  'use strict';

  $("#checkoutsteps").steps({
    headerTag: "h4",
    bodyTag: "section",
    transitionEffect: "fade",
    enableAllSteps: true,
    transitionEffectSpeed: 500,
    onStepChanging: function onStepChanging(event, currentIndex, newIndex) {
      if (newIndex === 1) {
        $('.steps ul').addClass('step-2');
      } else {
        $('.steps ul').removeClass('step-2');
      }
      if (newIndex === 2) {
        $('.steps ul').addClass('step-3');
      } else {
        $('.steps ul').removeClass('step-3');
      }
      if (newIndex === 3) {
        $('.steps ul').addClass('step-4');
        $('.actions ul').addClass('step-last');
      } else {
        $('.steps ul').removeClass('step-4');
        $('.actions ul').removeClass('step-last');
      }
      return true;
    },
    labels: {
      finish: "Order",
      next: "Next",
      previous: "Previous"
    }
  });
  // Custom Steps Jquery Steps
  $('.wizard > .steps li a').click(function () {
    $(this).parent().addClass('checked');
    $(this).parent().prevAll().addClass('checked');
    $(this).parent().nextAll().removeClass('checked');
  });
  // Custom Button Jquery Steps
  $('.forward').click(function () {
    $("#wizard").steps('next');
  });
  $('.backward').click(function () {
    $("#wizard").steps('previous');
  });
  // Checkbox
  $('.checkbox-circle label').click(function () {
    $('.checkbox-circle label').removeClass('active');
    $(this).addClass('active');
  });
  $('#checkoutsteps .steps').prepend("<div class='checkoutline'></div>");
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/checkout-jquery-steps.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLHVCQUF1QixDQUFDLENBQUNxQixPQUFPLENBQUMsa0NBQWtDLENBQUM7QUFDMUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoZWNrb3V0LWpxdWVyeS1zdGVwcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcclxuXHQndXNlIHN0cmljdCdcclxuXHJcbiAgICAkKFwiI2NoZWNrb3V0c3RlcHNcIikuc3RlcHMoe1xyXG4gICAgICAgIGhlYWRlclRhZzogXCJoNFwiLFxyXG4gICAgICAgIGJvZHlUYWc6IFwic2VjdGlvblwiLFxyXG4gICAgICAgIHRyYW5zaXRpb25FZmZlY3Q6IFwiZmFkZVwiLFxyXG4gICAgICAgIGVuYWJsZUFsbFN0ZXBzOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb25FZmZlY3RTcGVlZDogNTAwLFxyXG4gICAgICAgIG9uU3RlcENoYW5naW5nOiBmdW5jdGlvbiAoZXZlbnQsIGN1cnJlbnRJbmRleCwgbmV3SW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc3RlcHMgdWwnKS5hZGRDbGFzcygnc3RlcC0yJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc3RlcHMgdWwnKS5yZW1vdmVDbGFzcygnc3RlcC0yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc3RlcHMgdWwnKS5hZGRDbGFzcygnc3RlcC0zJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc3RlcHMgdWwnKS5yZW1vdmVDbGFzcygnc3RlcC0zJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgJCgnLnN0ZXBzIHVsJykuYWRkQ2xhc3MoJ3N0ZXAtNCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmFjdGlvbnMgdWwnKS5hZGRDbGFzcygnc3RlcC1sYXN0Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc3RlcHMgdWwnKS5yZW1vdmVDbGFzcygnc3RlcC00Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuYWN0aW9ucyB1bCcpLnJlbW92ZUNsYXNzKCdzdGVwLWxhc3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICBmaW5pc2g6IFwiT3JkZXJcIixcclxuICAgICAgICAgICAgbmV4dDogXCJOZXh0XCIsXHJcbiAgICAgICAgICAgIHByZXZpb3VzOiBcIlByZXZpb3VzXCJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIEN1c3RvbSBTdGVwcyBKcXVlcnkgU3RlcHNcclxuICAgICQoJy53aXphcmQgPiAuc3RlcHMgbGkgYScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdjaGVja2VkJyk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wcmV2QWxsKCkuYWRkQ2xhc3MoJ2NoZWNrZWQnKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHRBbGwoKS5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBDdXN0b20gQnV0dG9uIEpxdWVyeSBTdGVwc1xyXG4gICAgJCgnLmZvcndhcmQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiN3aXphcmRcIikuc3RlcHMoJ25leHQnKTtcclxuICAgIH0pXHJcbiAgICAkKCcuYmFja3dhcmQnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiN3aXphcmRcIikuc3RlcHMoJ3ByZXZpb3VzJyk7XHJcbiAgICB9KVxyXG4gICAgLy8gQ2hlY2tib3hcclxuICAgICQoJy5jaGVja2JveC1jaXJjbGUgbGFiZWwnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmNoZWNrYm94LWNpcmNsZSBsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pXHJcbiAgICAkKCcjY2hlY2tvdXRzdGVwcyAuc3RlcHMnKS5wcmVwZW5kKFwiPGRpdiBjbGFzcz0nY2hlY2tvdXRsaW5lJz48L2Rpdj5cIik7XHJcbn0pIl0sIm5hbWVzIjpbIiQiLCJzdGVwcyIsImhlYWRlclRhZyIsImJvZHlUYWciLCJ0cmFuc2l0aW9uRWZmZWN0IiwiZW5hYmxlQWxsU3RlcHMiLCJ0cmFuc2l0aW9uRWZmZWN0U3BlZWQiLCJvblN0ZXBDaGFuZ2luZyIsImV2ZW50IiwiY3VycmVudEluZGV4IiwibmV3SW5kZXgiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibGFiZWxzIiwiZmluaXNoIiwibmV4dCIsInByZXZpb3VzIiwiY2xpY2siLCJwYXJlbnQiLCJwcmV2QWxsIiwibmV4dEFsbCIsInByZXBlbmQiXSwic291cmNlUm9vdCI6IiJ9