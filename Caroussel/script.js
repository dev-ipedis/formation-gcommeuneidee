$(document).on('ready', function() {
    $(".slider").slick({
        prevArrow:$(".prev"),
        nextArrow:$(".next"),
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        resetDots();
        var dot = $("li:eq("+ currentSlide +") .bt-dot"); //Get dot position of new slide
        setDotActive(dot);
    });

    $(".bt-dot").on("click", function(){
        resetDots();
        var index = $(this).parent().index(); //Get index of dot in list of navigation
        $(".slider").slick("slickGoTo", index); //Animate carrousel to selected slide
        setDotActive($(this));
    });

    // Adding select state to active navigation dot
    function setDotActive(dot){
        dot.addClass("active");
    }

    // Reset values of navigation dots
    function resetDots(){
        $(".bt-dot").removeClass("active");
    }
});