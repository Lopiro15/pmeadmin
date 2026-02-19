$(function (e) {
    'use strict'
    //______Basic Data Table
    $('#basic-datatable').DataTable({
        buttons: [
            'colvis',
            {
                extend: 'excel',
                exportOptions: {
                    columns: ':not(.no-export)'
                }
            },
        ],
        responsive: true,
        language: {
            paginate: {
                previous: "Précédent",
                next: "Suivant",
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
        dom: '<"row"<"col-sm-12 col-md-8 row"<"col-md-8 "B>><"col-sm-12 col-md-4"f>><"row"<"col-sm-12"t>><"row"<"col-sm-12 col-md-5"i><"col-sm-12 col-md-7"p>>',
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

