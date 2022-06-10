$(document).ready(function(){
    //HERO SLIDER
    $('#list-card').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        navText: ['PREV','NEXT'],
        responsive:{
            0:{
                nav: false,
            },
            768:{
                nav: true,
            }
        }
    })
})