$(document).ready(function(){
    $('#list-fruit').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            400:{
                items:2
            },
            800:{
                items:3
            },
            1200:{
                items:6
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
                items:2
            },
            800:{
                items:3
            },
            1200:{
                items:6
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
                items:2
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
                items:2
            },
            1200:{
                items:4
            }
        }
    })

    $('#banner2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            300:{
                items:1
            },
            800:{
                items:2
            },
            1200:{
                items:3
            }
        }
    })
})

// let navLink = document.querySelectorAll('.nav-pills .navlink');
// let listCard = document.querySelectorAll('.list-card');

// for(let i=0;i<navLink.length;i++){
//     navLink[i].addEventListener('click', function(){
//         for(let j=0;j<navLink.length;j++){
//             navLink[j].classList.remove('active');
//             listCard[j].classList.remove('active');
//         }
//         navLink[i].classList.add('active');
//         listCard[i].classList.add('active');
//     })
// }

// let listProduct = {
//     "product":
//     [
//         {"id": "chanhday", "name": "Chanh d??y ????? ??c", "image": "./images/ChanhDayDoUc.webp", "special-price": "400.000??", "old-price": "460.000??"},
//         {"id": "dualeo", "name": "D??a leo ???? L???t", "image": "./images/DuaLeoDaLat.webp", "special-price": "65.000??", "old-price": "460.000??"},
//         {"id": "hanhtay", "name": "H??nh t??y", "image": "./images/HanhTay.webp", "special-price": "50.000??", "old-price": "460.000??"},
//         {"id": "hong", "name": "H???ng ????? M???", "image": "./images/HongDoMy.webp", "special-price": "150.000??", "old-price": "460.000??"},
//         {"id": "nho", "name": "Nho ???? l???t", "image": "./images/NhoDaLat.webp", "special-price": "400.000??", "old-price": "460.000??"},
//         {"id": "kiwi", "name": "Qu??? kiwi xanh", "image": "./images/QuaKiwiXanh.webp", "special-price": "250.000??", "old-price": "460.000??"},
//         {"id": "taodo", "name": "T??o ????? M???", "image": "./images/TaoDoMy.webp", "special-price": "180.000??", "old-price": "460.000??"},
//         {"id": "taoqueen", "name": "T??o New Zealand", "image": "./images/TaoQueen.webp", "special-price": "150.000??", "old-price": "460.000??"},
//     ]
// }

// let btnDetail = document.querySelectorAll(".detail");
// let listCard = document.querySelectorAll(".list-card");

// for(let i=0; i<btnDetail.length; i++){
//     btnDetail[i].addEventListener('click', function(){
//         let detailOfProduct = document.createElement('div');
//         detailOfProduct.setAttribute('class', 'modal');
//         detailOfProduct.classList.add('fade');
//         detailOfProduct.setAttribute('id', "chanhday");
//         detailOfProduct.setAttribute('tabindex', '-1');
//         detailOfProduct.setAttribute('data-bs-backdrop', 'static');
//         detailOfProduct.setAttribute('data-bs-keyboard', 'false');
//         detailOfProduct.setAttribute('aria-labelledby', 'staticBackdropLabel');
//         detailOfProduct.setAttribute('aria-hidden', 'true');
//         detailOfProduct.innerHTML = ` <div class="modal fade" id="chanhday" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//               ...
//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" class="btn btn-primary">Save changes</button>
//             </div>
//           </div>
//         </div>
//       </div>`;
//       listCard.appendChild(detailOfProduct);

//     })
// }
