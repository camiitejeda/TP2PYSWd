$(document).ready(function () {
    $(".btn-filter").click(function () {
        var filter = $(this).attr("data-filter");

        $(".btn-filter").removeClass("active");
        $(this).addClass("active");

        const $cards = $("#masonry-grid > div");

        if (filter === "all") {
            $cards.show();
            $("#masonry-grid").removeClass("single-item");
        } else {
            $cards.hide();
            const $filtered = $cards.filter("." + filter);
            $filtered.show();

            // Si solo hay un elemento, centramos
            if ($filtered.length === 1) {
                $("#masonry-grid").addClass("single-item");
            } else {
                $("#masonry-grid").removeClass("single-item");
            }
        }
    });
});
