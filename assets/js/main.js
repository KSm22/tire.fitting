$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        nav: true,
        // margin: 0,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            },
            1300:{
                items:4
            }
        }
    });
});