$(document).ready(function(){
    $('#list-fruit').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            400:{
                items:1
            },
            800:{
                items:4
            },
            1200:{
                items:5
            }
        }
    })

    $('#list-vegetable').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            400:{
                items:1
            },
            800:{
                items:4
            },
            1200:{
                items:5
            }
        }
    })

    $('#blog-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            400:{
                items:1
            },
            800:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
})