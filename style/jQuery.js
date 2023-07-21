$(document).ready(function () {
    $(".arrow").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $(".arrow").fadeIn();
        } else {
            $(".arrow").fadeOut();
        }
    });

    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});