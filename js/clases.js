$(document).ready(function () {
    // Filtrado de clases por categoría
    $("input[type='checkbox']").on('change', function () {
        var selectedCategories = [];
        $("input[type='checkbox']:checked").each(function () {
            selectedCategories.push($(this).val());
        });

        // Filtra los elementos de la galería
        $('#masonry-grid > div').each(function () {
            var categories = $(this).attr('class').split(' ');
            if (selectedCategories.length === 0 || categories.some(cat => selectedCategories.includes(cat))) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
