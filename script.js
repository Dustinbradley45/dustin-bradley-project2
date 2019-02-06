//BLOG JS
$(function () {

    // HIDE WORDS AT WIDTH
    if ($(window).width() >= 750) {

        $("hiddenWords").addClass("hideTheWords");
    }

    // HAVE EVENT HERE
    $(".toggleReadMore").on("click", function () {

        $(".hiddenWords").slideToggle("slow", function () {

            if ($(".hiddenWords").is(":visible")) {
                $(".toggleReadMore").html("Read Less");
            } else {
                $(".toggleReadMore").html("Read More");
            }
        });
    });
});