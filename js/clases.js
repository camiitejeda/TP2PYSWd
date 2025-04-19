$(document).ready(function () {
    $(".btn-filter").click(function () {
        var filter = $(this).attr("data-filter");

        $(".btn-filter").removeClass("active");
        $(this).addClass("active");

        if (filter === "all") {
            $("#masonry-grid > div").show();
        } else {
            $("#masonry-grid > div").hide();
            $("#masonry-grid > div." + filter).show();
        }
    });
});
