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

    $('#feedback-slider').owlCarousel({
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

let navLink = document.querySelectorAll('.nav-pills .navlink');
let listCard = document.querySelectorAll('.list-card');

for(let i=0;i<navLink.length;i++){
    navLink[i].addEventListener('click', function(){
        for(let j=0;j<navLink.length;j++){
            navLink[j].classList.remove('active');
            listCard[j].classList.remove('active');
        }
        navLink[i].classList.add('active');
        listCard[i].classList.add('active');
    })
}