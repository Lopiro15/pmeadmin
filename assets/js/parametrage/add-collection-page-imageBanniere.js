$(document).ready(function () {
    const addFormToCollectionPageBanniere = () => {
        $('#AddImageBanniere').click(function (e) {
            const list = $($(this).attr('data-list-selector'));
            const $widget = $('#widget-counter-image-bannieres');
            const index = +$widget.val();
            // Try to find the counter of the list or use the length of the list

            // grab the prototype template
            let newWidget = list.attr('data-prototype');
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

    const addTagFormDeleteLinkPageBanniere = () => {
        $('body').on('click', '.delete-image-banniere', function () {
            const target = $(this).attr('data-target');
            $(target).remove();
        });
    };

    addFormToCollectionPageBanniere();
    addTagFormDeleteLinkPageBanniere();
});
