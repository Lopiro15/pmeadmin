(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/table-data"],{

/***/ "./assets/js/table-data.js":
/*!*********************************!*\
  !*** ./assets/js/table-data.js ***!
  \*********************************/
/***/ (() => {

$(function (e) {
  'use strict';

  //______Basic Data Table
  $('#basic-datatable').DataTable({
    buttons: ['colvis', {
      extend: 'excel',
      exportOptions: {
        columns: ':not(.no-export)'
      }
    }],
    responsive: true,
    language: {
      paginate: {
        previous: "Précédent",
        next: "Suivant"
      },
      "sProcessing": "Traitement en cours...",
      "sSearch": "Rechercher&nbsp;:",
      "sLengthMenu": "Afficher _MENU_ &eacute;l&eacute;ments",
      "sInfo": "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
      "sInfoEmpty": "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
      "sInfoFiltered": "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
      "sInfoPostFix": "",
      "sLoadingRecords": "Chargement en cours...",
      "sZeroRecords": "Aucun &eacute;l&eacute;ment &agrave; afficher",
      "sEmptyTable": "Aucune donn&eacute;e disponible dans le tableau",
      "oPaginate": {
        "sFirst": "Premier",
        "sPrevious": "Pr&eacute;c&eacute;dent",
        "sNext": "Suivant",
        "sLast": "Dernier"
      },
      "oAria": {
        "sSortAscending": ": activer pour trier la colonne par ordre croissant",
        "sSortDescending": ": activer pour trier la colonne par ordre d&eacute;croissant"
      }
    },
    dom: '<"row"<"col-sm-12 col-md-8 row"<"col-md-8 "B>><"col-sm-12 col-md-4"f>><"row"<"col-sm-12"t>><"row"<"col-sm-12 col-md-5"i><"col-sm-12 col-md-7"p>>'
  });

  // //______Responsive Data Table
  // $('#responsive-datatable').DataTable({
  //     responsive: true,
  //     language: {
  //         searchPlaceholder: 'Search...',
  //         sSearch: '',
  //     }
  // });
  //
  // $('#modal-datatable').DataTable({
  //     responsive: {
  //         details: {
  //             display: $.fn.dataTable.Responsive.display.modal({
  //                 header: function (row) {
  //                     var data = row.data();
  //                     return 'Details for ' + data[0] + ' ' + data[1];
  //                 }
  //             }),
  //             renderer: $.fn.dataTable.Responsive.renderer.tableAll({
  //                 tableClass: 'table'
  //             })
  //         }
  //     }
  // });
  //
  // //______File-Export Data Table
  // var table = $('#file-datatable').DataTable({
  //     buttons: ['copy', 'excel', 'pdf', 'colvis'],
  //     responsive: true,
  //     language: {
  //         searchPlaceholder: 'Search...',
  //         sSearch: '',
  //     }
  // });
  // table.buttons().container()
  //     .appendTo('#file-datatable_wrapper .col-md-6:eq(0)');
  //
  // //______Delete Data Table
  // var table = $('#delete-datatable').DataTable({
  //     language: {
  //         searchPlaceholder: 'Search...',
  //         sSearch: '',
  //     }
  // });
  // $('#delete-datatable tbody').on('click', 'tr', function () {
  //     if ($(this).hasClass('selected')) {
  //         $(this).removeClass('selected');
  //     } else {
  //         table.$('tr.selected').removeClass('selected');
  //         $(this).addClass('selected');
  //     }
  // });
  // $('#button').click(function () {
  //     table.row('.selected').remove().draw(false);
  // });
  //
  // //______Form Input Datatable
  // $('#form-input-datatable').DataTable({
  //     language: {
  //         searchPlaceholder: 'Search...',
  //         sSearch: '',
  //     },
  //     responsive: true,
  //     columnDefs: [{
  //         orderable: false,
  //         targets: [1, 2, 3]
  //     }]
  //
  // });
  //
  // //______Select2
  // $('.select2').select2({
  //     minimumResultsForSearch: Infinity
  // });
  //
  //
  // $('.select2-no-search').select2({
  //     minimumResultsForSearch: Infinity,
  //     placeholder: 'All categories',
  //     width: '100%'
  // });
  //
  // $('#form-input-datatable').on('draw.dt', function () {
  //     $('.select2-no-search').select2({
  //         minimumResultsForSearch: Infinity,
  //         placeholder: 'Choose one'
  //     });
  // });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/table-data.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGFibGUtZGF0YS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxDQUFDLENBQUMsVUFBVUMsQ0FBQyxFQUFFO0VBQ1gsWUFBWTs7RUFDWjtFQUNBRCxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ0UsU0FBUyxDQUFDO0lBQzVCQyxPQUFPLEVBQUUsQ0FDTCxRQUFRLEVBQ1I7TUFDSUMsTUFBTSxFQUFFLE9BQU87TUFDZkMsYUFBYSxFQUFFO1FBQ1hDLE9BQU8sRUFBRTtNQUNiO0lBQ0osQ0FBQyxDQUNKO0lBQ0RDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxRQUFRLEVBQUU7TUFDTkMsUUFBUSxFQUFFO1FBQ05DLFFBQVEsRUFBRSxXQUFXO1FBQ3JCQyxJQUFJLEVBQUU7TUFDVixDQUFDO01BQ0QsYUFBYSxFQUFFLHdCQUF3QjtNQUN2QyxTQUFTLEVBQUUsbUJBQW1CO01BQzlCLGFBQWEsRUFBRSx3Q0FBd0M7TUFDdkQsT0FBTyxFQUFFLHlGQUF5RjtNQUNsRyxZQUFZLEVBQUUseUVBQXlFO01BQ3ZGLGVBQWUsRUFBRSwwREFBMEQ7TUFDM0UsY0FBYyxFQUFFLEVBQUU7TUFDbEIsaUJBQWlCLEVBQUUsd0JBQXdCO01BQzNDLGNBQWMsRUFBRSwrQ0FBK0M7TUFDL0QsYUFBYSxFQUFFLGlEQUFpRDtNQUNoRSxXQUFXLEVBQUU7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLE9BQU8sRUFBRTtNQUNiLENBQUM7TUFDRCxPQUFPLEVBQUU7UUFDTCxnQkFBZ0IsRUFBRSxxREFBcUQ7UUFDdkUsaUJBQWlCLEVBQUU7TUFDdkI7SUFDSixDQUFDO0lBQ0RDLEdBQUcsRUFBRTtFQUNULENBQUMsQ0FBQzs7RUFHRjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy90YWJsZS1kYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKGUpIHtcclxuICAgICd1c2Ugc3RyaWN0J1xyXG4gICAgLy9fX19fX19CYXNpYyBEYXRhIFRhYmxlXHJcbiAgICAkKCcjYmFzaWMtZGF0YXRhYmxlJykuRGF0YVRhYmxlKHtcclxuICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICdjb2x2aXMnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBleHRlbmQ6ICdleGNlbCcsXHJcbiAgICAgICAgICAgICAgICBleHBvcnRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogJzpub3QoLm5vLWV4cG9ydCknXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHBhZ2luYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91czogXCJQcsOpY8OpZGVudFwiLFxyXG4gICAgICAgICAgICAgICAgbmV4dDogXCJTdWl2YW50XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic1Byb2Nlc3NpbmdcIjogXCJUcmFpdGVtZW50IGVuIGNvdXJzLi4uXCIsXHJcbiAgICAgICAgICAgIFwic1NlYXJjaFwiOiBcIlJlY2hlcmNoZXImbmJzcDs6XCIsXHJcbiAgICAgICAgICAgIFwic0xlbmd0aE1lbnVcIjogXCJBZmZpY2hlciBfTUVOVV8gJmVhY3V0ZTtsJmVhY3V0ZTttZW50c1wiLFxyXG4gICAgICAgICAgICBcInNJbmZvXCI6IFwiQWZmaWNoYWdlIGRlIGwnJmVhY3V0ZTtsZW1lbnQgX1NUQVJUXyAmYWdyYXZlOyBfRU5EXyBzdXIgX1RPVEFMXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzXCIsXHJcbiAgICAgICAgICAgIFwic0luZm9FbXB0eVwiOiBcIkFmZmljaGFnZSBkZSBsJyZlYWN1dGU7bGVtZW50IDAgJmFncmF2ZTsgMCBzdXIgMCAmZWFjdXRlO2wmZWFjdXRlO21lbnRzXCIsXHJcbiAgICAgICAgICAgIFwic0luZm9GaWx0ZXJlZFwiOiBcIihmaWx0ciZlYWN1dGU7IGRlIF9NQVhfICZlYWN1dGU7bCZlYWN1dGU7bWVudHMgYXUgdG90YWwpXCIsXHJcbiAgICAgICAgICAgIFwic0luZm9Qb3N0Rml4XCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwic0xvYWRpbmdSZWNvcmRzXCI6IFwiQ2hhcmdlbWVudCBlbiBjb3Vycy4uLlwiLFxyXG4gICAgICAgICAgICBcInNaZXJvUmVjb3Jkc1wiOiBcIkF1Y3VuICZlYWN1dGU7bCZlYWN1dGU7bWVudCAmYWdyYXZlOyBhZmZpY2hlclwiLFxyXG4gICAgICAgICAgICBcInNFbXB0eVRhYmxlXCI6IFwiQXVjdW5lIGRvbm4mZWFjdXRlO2UgZGlzcG9uaWJsZSBkYW5zIGxlIHRhYmxlYXVcIixcclxuICAgICAgICAgICAgXCJvUGFnaW5hdGVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJzRmlyc3RcIjogXCJQcmVtaWVyXCIsXHJcbiAgICAgICAgICAgICAgICBcInNQcmV2aW91c1wiOiBcIlByJmVhY3V0ZTtjJmVhY3V0ZTtkZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInNOZXh0XCI6IFwiU3VpdmFudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzTGFzdFwiOiBcIkRlcm5pZXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm9BcmlhXCI6IHtcclxuICAgICAgICAgICAgICAgIFwic1NvcnRBc2NlbmRpbmdcIjogXCI6IGFjdGl2ZXIgcG91ciB0cmllciBsYSBjb2xvbm5lIHBhciBvcmRyZSBjcm9pc3NhbnRcIixcclxuICAgICAgICAgICAgICAgIFwic1NvcnREZXNjZW5kaW5nXCI6IFwiOiBhY3RpdmVyIHBvdXIgdHJpZXIgbGEgY29sb25uZSBwYXIgb3JkcmUgZCZlYWN1dGU7Y3JvaXNzYW50XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZG9tOiAnPFwicm93XCI8XCJjb2wtc20tMTIgY29sLW1kLTggcm93XCI8XCJjb2wtbWQtOCBcIkI+PjxcImNvbC1zbS0xMiBjb2wtbWQtNFwiZj4+PFwicm93XCI8XCJjb2wtc20tMTJcInQ+PjxcInJvd1wiPFwiY29sLXNtLTEyIGNvbC1tZC01XCJpPjxcImNvbC1zbS0xMiBjb2wtbWQtN1wicD4+JyxcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyAvL19fX19fX1Jlc3BvbnNpdmUgRGF0YSBUYWJsZVxyXG4gICAgLy8gJCgnI3Jlc3BvbnNpdmUtZGF0YXRhYmxlJykuRGF0YVRhYmxlKHtcclxuICAgIC8vICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgLy8gICAgIGxhbmd1YWdlOiB7XHJcbiAgICAvLyAgICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyOiAnU2VhcmNoLi4uJyxcclxuICAgIC8vICAgICAgICAgc1NlYXJjaDogJycsXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gJCgnI21vZGFsLWRhdGF0YWJsZScpLkRhdGFUYWJsZSh7XHJcbiAgICAvLyAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgLy8gICAgICAgICBkZXRhaWxzOiB7XHJcbiAgICAvLyAgICAgICAgICAgICBkaXNwbGF5OiAkLmZuLmRhdGFUYWJsZS5SZXNwb25zaXZlLmRpc3BsYXkubW9kYWwoe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGhlYWRlcjogZnVuY3Rpb24gKHJvdykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJvdy5kYXRhKCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnRGV0YWlscyBmb3IgJyArIGRhdGFbMF0gKyAnICcgKyBkYXRhWzFdO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH0pLFxyXG4gICAgLy8gICAgICAgICAgICAgcmVuZGVyZXI6ICQuZm4uZGF0YVRhYmxlLlJlc3BvbnNpdmUucmVuZGVyZXIudGFibGVBbGwoe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M6ICd0YWJsZSdcclxuICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTtcclxuICAgIC8vXHJcbiAgICAvLyAvL19fX19fX0ZpbGUtRXhwb3J0IERhdGEgVGFibGVcclxuICAgIC8vIHZhciB0YWJsZSA9ICQoJyNmaWxlLWRhdGF0YWJsZScpLkRhdGFUYWJsZSh7XHJcbiAgICAvLyAgICAgYnV0dG9uczogWydjb3B5JywgJ2V4Y2VsJywgJ3BkZicsICdjb2x2aXMnXSxcclxuICAgIC8vICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgLy8gICAgIGxhbmd1YWdlOiB7XHJcbiAgICAvLyAgICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyOiAnU2VhcmNoLi4uJyxcclxuICAgIC8vICAgICAgICAgc1NlYXJjaDogJycsXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyB0YWJsZS5idXR0b25zKCkuY29udGFpbmVyKClcclxuICAgIC8vICAgICAuYXBwZW5kVG8oJyNmaWxlLWRhdGF0YWJsZV93cmFwcGVyIC5jb2wtbWQtNjplcSgwKScpO1xyXG4gICAgLy9cclxuICAgIC8vIC8vX19fX19fRGVsZXRlIERhdGEgVGFibGVcclxuICAgIC8vIHZhciB0YWJsZSA9ICQoJyNkZWxldGUtZGF0YXRhYmxlJykuRGF0YVRhYmxlKHtcclxuICAgIC8vICAgICBsYW5ndWFnZToge1xyXG4gICAgLy8gICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaC4uLicsXHJcbiAgICAvLyAgICAgICAgIHNTZWFyY2g6ICcnLFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgLy8gJCgnI2RlbGV0ZS1kYXRhdGFibGUgdGJvZHknKS5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcclxuICAgIC8vICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0YWJsZS4kKCd0ci5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgLy8gICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgLy8gJCgnI2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICB0YWJsZS5yb3coJy5zZWxlY3RlZCcpLnJlbW92ZSgpLmRyYXcoZmFsc2UpO1xyXG4gICAgLy8gfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gLy9fX19fX19Gb3JtIElucHV0IERhdGF0YWJsZVxyXG4gICAgLy8gJCgnI2Zvcm0taW5wdXQtZGF0YXRhYmxlJykuRGF0YVRhYmxlKHtcclxuICAgIC8vICAgICBsYW5ndWFnZToge1xyXG4gICAgLy8gICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaC4uLicsXHJcbiAgICAvLyAgICAgICAgIHNTZWFyY2g6ICcnLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIC8vICAgICBjb2x1bW5EZWZzOiBbe1xyXG4gICAgLy8gICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgLy8gICAgICAgICB0YXJnZXRzOiBbMSwgMiwgM11cclxuICAgIC8vICAgICB9XVxyXG4gICAgLy9cclxuICAgIC8vIH0pO1xyXG4gICAgLy9cclxuICAgIC8vIC8vX19fX19fU2VsZWN0MlxyXG4gICAgLy8gJCgnLnNlbGVjdDInKS5zZWxlY3QyKHtcclxuICAgIC8vICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHlcclxuICAgIC8vIH0pO1xyXG4gICAgLy9cclxuICAgIC8vXHJcbiAgICAvLyAkKCcuc2VsZWN0Mi1uby1zZWFyY2gnKS5zZWxlY3QyKHtcclxuICAgIC8vICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHksXHJcbiAgICAvLyAgICAgcGxhY2Vob2xkZXI6ICdBbGwgY2F0ZWdvcmllcycsXHJcbiAgICAvLyAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgLy8gfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gJCgnI2Zvcm0taW5wdXQtZGF0YXRhYmxlJykub24oJ2RyYXcuZHQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgJCgnLnNlbGVjdDItbm8tc2VhcmNoJykuc2VsZWN0Mih7XHJcbiAgICAvLyAgICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiBJbmZpbml0eSxcclxuICAgIC8vICAgICAgICAgcGxhY2Vob2xkZXI6ICdDaG9vc2Ugb25lJ1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfSk7XHJcblxyXG59KTtcclxuXHJcbiJdLCJuYW1lcyI6WyIkIiwiZSIsIkRhdGFUYWJsZSIsImJ1dHRvbnMiLCJleHRlbmQiLCJleHBvcnRPcHRpb25zIiwiY29sdW1ucyIsInJlc3BvbnNpdmUiLCJsYW5ndWFnZSIsInBhZ2luYXRlIiwicHJldmlvdXMiLCJuZXh0IiwiZG9tIl0sInNvdXJjZVJvb3QiOiIifQ==