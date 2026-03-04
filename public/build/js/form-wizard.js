(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/form-wizard"],{

/***/ "./assets/js/form-wizard.js":
/*!**********************************!*\
  !*** ./assets/js/form-wizard.js ***!
  \**********************************/
/***/ (() => {

$(function () {
  'use strict';

  $('#wizard1').steps({
    headerTag: 'h3',
    bodyTag: 'section',
    autoFocus: true,
    titleTemplate: '<span class="number">#index#<\/span> <span class="title">#title#<\/span>'
  });
  $('#wizard3').steps({
    headerTag: 'h3',
    bodyTag: 'section',
    autoFocus: true,
    titleTemplate: '<span class="number">#index#<\/span> <span class="title">#title#<\/span>',
    stepsOrientation: 1
  });

  //fancyfileuplod
  $('#demo').FancyFileUpload({
    params: {
      action: 'fileuploader'
    },
    maxfilesize: 1000000
  });
  $('.dropify').dropify({
    messages: {
      'default': 'Drag and drop a file here or click',
      'replace': 'Drag and drop or click to replace',
      'remove': 'Remove',
      'error': 'Ooops, something wrong appended.'
    },
    error: {
      'fileSize': 'The file size is too big (2M max).'
    }
  });
  $('.dropify-clear').click(function () {
    $('.dropify-render img').remove();
    $(".dropify-preview").css("display", "none");
    $(".dropify-clear").css("display", "none");
  });

  //accordion-wizard
  var options = {
    mode: 'wizard',
    autoButtonsNextClass: 'btn btn-primary float-end',
    autoButtonsPrevClass: 'btn btn-secondary',
    stepNumberClass: 'badge bg-primary me-1',
    onSubmit: function onSubmit() {
      alert('Form submitted!');
      return true;
    }
  };
  $("#form").accWizard(options);
  var dropify = document.querySelector('.dropify-readurl');
  if (dropify) {
    dropify.addEventListener('change', readURL);
  }
});

//Function to show image before upload

function readURL(input) {
  input = this;
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.dropify-render img').remove();
      var img = $('<img id="dropify-img">'); //Equivalent: $(document.createElement('img'))
      img.attr('src', e.target.result);
      img.appendTo('.dropify-render');
      $(".dropify-preview").css("display", "block");
      $(".dropify-clear").css("display", "block");
    };
    reader.readAsDataURL(input.files[0]);
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/form-wizard.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxDQUFDSSxRQUFRLENBQUMsaUJBQWlCLENBQUM7TUFDL0J2QyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ2dCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO01BQzdDaEIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNnQixHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQztJQUM1QyxDQUFDO0lBQ0RlLE1BQU0sQ0FBQ1MsYUFBYSxDQUFDWCxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNyQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Zvcm0td2l6YXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG5cdCd1c2Ugc3RyaWN0J1xyXG5cclxuXHQkKCcjd2l6YXJkMScpLnN0ZXBzKHtcclxuXHRcdGhlYWRlclRhZzogJ2gzJyxcclxuXHRcdGJvZHlUYWc6ICdzZWN0aW9uJyxcclxuXHRcdGF1dG9Gb2N1czogdHJ1ZSxcclxuXHRcdHRpdGxlVGVtcGxhdGU6ICc8c3BhbiBjbGFzcz1cIm51bWJlclwiPiNpbmRleCM8XFwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPiN0aXRsZSM8XFwvc3Bhbj4nXHJcblx0fSk7XHJcblxyXG5cdCQoJyN3aXphcmQzJykuc3RlcHMoe1xyXG5cdFx0aGVhZGVyVGFnOiAnaDMnLFxyXG5cdFx0Ym9keVRhZzogJ3NlY3Rpb24nLFxyXG5cdFx0YXV0b0ZvY3VzOiB0cnVlLFxyXG5cdFx0dGl0bGVUZW1wbGF0ZTogJzxzcGFuIGNsYXNzPVwibnVtYmVyXCI+I2luZGV4IzxcXC9zcGFuPiA8c3BhbiBjbGFzcz1cInRpdGxlXCI+I3RpdGxlIzxcXC9zcGFuPicsXHJcblx0XHRzdGVwc09yaWVudGF0aW9uOiAxXHJcblx0fSk7XHJcblxyXG5cdC8vZmFuY3lmaWxldXBsb2RcclxuXHQkKCcjZGVtbycpLkZhbmN5RmlsZVVwbG9hZCh7XHJcblx0XHRwYXJhbXM6IHtcclxuXHRcdFx0YWN0aW9uOiAnZmlsZXVwbG9hZGVyJ1xyXG5cdFx0fSxcclxuXHRcdG1heGZpbGVzaXplOiAxMDAwMDAwXHJcblx0fSk7XHJcblx0JCgnLmRyb3BpZnknKS5kcm9waWZ5KHtcclxuXHRcdG1lc3NhZ2VzOiB7XHJcblx0XHRcdCdkZWZhdWx0JzogJ0RyYWcgYW5kIGRyb3AgYSBmaWxlIGhlcmUgb3IgY2xpY2snLFxyXG5cdFx0XHQncmVwbGFjZSc6ICdEcmFnIGFuZCBkcm9wIG9yIGNsaWNrIHRvIHJlcGxhY2UnLFxyXG5cdFx0XHQncmVtb3ZlJzogJ1JlbW92ZScsXHJcblx0XHRcdCdlcnJvcic6ICdPb29wcywgc29tZXRoaW5nIHdyb25nIGFwcGVuZGVkLidcclxuXHRcdH0sXHJcblx0XHRlcnJvcjoge1xyXG5cdFx0XHQnZmlsZVNpemUnOiAnVGhlIGZpbGUgc2l6ZSBpcyB0b28gYmlnICgyTSBtYXgpLidcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcdFxyXG5cdFxyXG5cdCQoJy5kcm9waWZ5LWNsZWFyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0JCgnLmRyb3BpZnktcmVuZGVyIGltZycpLnJlbW92ZSgpO1xyXG5cdFx0JChcIi5kcm9waWZ5LXByZXZpZXdcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblx0XHQkKFwiLmRyb3BpZnktY2xlYXJcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblx0fSk7XHJcblxyXG5cdC8vYWNjb3JkaW9uLXdpemFyZFxyXG5cdHZhciBvcHRpb25zID0ge1xyXG5cdFx0bW9kZTogJ3dpemFyZCcsXHJcblx0XHRhdXRvQnV0dG9uc05leHRDbGFzczogJ2J0biBidG4tcHJpbWFyeSBmbG9hdC1lbmQnLFxyXG5cdFx0YXV0b0J1dHRvbnNQcmV2Q2xhc3M6ICdidG4gYnRuLXNlY29uZGFyeScsXHJcblx0XHRzdGVwTnVtYmVyQ2xhc3M6ICdiYWRnZSBiZy1wcmltYXJ5IG1lLTEnLFxyXG5cdFx0b25TdWJtaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0YWxlcnQoJ0Zvcm0gc3VibWl0dGVkIScpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0JChcIiNmb3JtXCIpLmFjY1dpemFyZChvcHRpb25zKTtcclxuXHJcblx0bGV0IGRyb3BpZnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGlmeS1yZWFkdXJsJyk7XHJcblx0aWYgKGRyb3BpZnkpIHtcclxuXHRcdGRyb3BpZnkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgcmVhZFVSTClcclxuXHR9XHJcbn0pO1xyXG5cclxuLy9GdW5jdGlvbiB0byBzaG93IGltYWdlIGJlZm9yZSB1cGxvYWRcclxuXHJcbmZ1bmN0aW9uIHJlYWRVUkwoaW5wdXQpIHtcclxuXHRpbnB1dCA9IHRoaXNcclxuXHRpZiAoaW5wdXQuZmlsZXMgJiYgaW5wdXQuZmlsZXNbMF0pIHtcclxuXHRcdHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cdFx0cmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdCQoJy5kcm9waWZ5LXJlbmRlciBpbWcnKS5yZW1vdmUoKTtcclxuXHRcdFx0dmFyIGltZyA9ICQoJzxpbWcgaWQ9XCJkcm9waWZ5LWltZ1wiPicpOyAvL0VxdWl2YWxlbnQ6ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykpXHJcblx0XHRcdGltZy5hdHRyKCdzcmMnLCBlLnRhcmdldC5yZXN1bHQpO1xyXG5cdFx0XHRpbWcuYXBwZW5kVG8oJy5kcm9waWZ5LXJlbmRlcicpO1xyXG5cdFx0XHQkKFwiLmRyb3BpZnktcHJldmlld1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblx0XHRcdCQoXCIuZHJvcGlmeS1jbGVhclwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblx0XHR9O1xyXG5cdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXQuZmlsZXNbMF0pO1xyXG5cdH1cclxufSJdLCJuYW1lcyI6WyIkIiwic3RlcHMiLCJoZWFkZXJUYWciLCJib2R5VGFnIiwiYXV0b0ZvY3VzIiwidGl0bGVUZW1wbGF0ZSIsInN0ZXBzT3JpZW50YXRpb24iLCJGYW5jeUZpbGVVcGxvYWQiLCJwYXJhbXMiLCJhY3Rpb24iLCJtYXhmaWxlc2l6ZSIsImRyb3BpZnkiLCJtZXNzYWdlcyIsImVycm9yIiwiY2xpY2siLCJyZW1vdmUiLCJjc3MiLCJvcHRpb25zIiwibW9kZSIsImF1dG9CdXR0b25zTmV4dENsYXNzIiwiYXV0b0J1dHRvbnNQcmV2Q2xhc3MiLCJzdGVwTnVtYmVyQ2xhc3MiLCJvblN1Ym1pdCIsImFsZXJ0IiwiYWNjV2l6YXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlYWRVUkwiLCJpbnB1dCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJpbWciLCJhdHRyIiwidGFyZ2V0IiwicmVzdWx0IiwiYXBwZW5kVG8iLCJyZWFkQXNEYXRhVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==