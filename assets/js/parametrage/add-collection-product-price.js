$(document).ready(function () {
    const addFormToCollectionProductPrice = () => {
        $('#AddPriceProduct').click(function (e) {
            const list = $($(this).attr('data-list-selector'));
            const $widget = $('#widget-counter-price-produits');
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
            list.data('widget-counter-price-produits', index);

            // create a new list element and add it to the list
            $('#table-collection-price-produits tbody').append(newWidget);
            // $('.select2').select2({width: '100%', theme: 'bootstrap'});
            addTagFormDeleteLinkProductPrice(newWidget);
        });
    };

    const addTagFormDeleteLinkProductPrice = () => {
        $('body').on('click', '.delete-product-price', function () {
            const target = $(this).attr('data-target');
            $(target).remove();
        });
    };

    addFormToCollectionProductPrice();
    addTagFormDeleteLinkProductPrice();
});
