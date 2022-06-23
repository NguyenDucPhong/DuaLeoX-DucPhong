let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: "Chanh dây đỏ Úc",
        image: "./images/ChanhDayDoUc.webp",
        price: 400,
        incart: 0
    },
    {
        name: "Dưa leo Đà Lạt",
        image: "./images/DuaLeoDaLat.webp",
        price: 65,
        incart: 0
    },
    {
        name: "Hành tây",
        image: "./images/HanhTay.webp",
        price: 50,
        incart: 0
    },
    {
        name: "Hồng đỏ Mỹ",
        image: "./images/HongDoMy.webp",
        price: 150,
        incart: 0
    },
    {
        name: "Nho Đà lạt",
        image: "./images/NhoDaLat.webp",
        price: 400,
        incart: 0
    },
    {
        name: "Quả kiwi xanh",
        image: "./images/QuaKiwiXanh.webp",
        price: 250,
        incart: 0
    },
    {
        name: "Táo đỏ Mỹ",
        image: "./images/TaoDoMy.webp",
        price: 120,
        incart: 0
    },
    {
        name: "Táo New Zealand",
        image: "./images/TaoQueen.webp",
        price: 150,
        incart: 0
    },
    {
        name: "Chanh dây đỏ Úc",
        image: "./images/ChanhDayDoUc.webp",
        price: 400,
        incart: 0
    },
    {
        name: "Dưa leo Đà Lạt",
        image: "./images/DuaLeoDaLat.webp",
        price: 65,
        incart: 0
    },
    {
        name: "Hành tây",
        image: "./images/HanhTay.webp",
        price: 50,
        incart: 0
    },
    {
        name: "Hồng đỏ Mỹ",
        image: "./images/HongDoMy.webp",
        price: 150,
        incart: 0
    },
    {
        name: "Nho Đà lạt",
        image: "./images/NhoDaLat.webp",
        price: 400,
        incart: 0
    },
    {
        name: "Quả kiwi xanh",
        image: "./images/QuaKiwiXanh.webp",
        price: 250,
        incart: 0
    },
    {
        name: "Táo đỏ Mỹ",
        image: "./images/TaoDoMy.webp",
        price: 120,
        incart: 0
    },
    {
        name: "Táo New Zealand",
        image: "./images/TaoQueen.webp",
        price: 150,
        incart: 0
    },
    {
        name: "Chanh dây đỏ Úc",
        image: "./images/ChanhDayDoUc.webp",
        price: 400,
        incart: 0
    },
    {
        name: "Dưa leo Đà Lạt",
        image: "./images/DuaLeoDaLat.webp",
        price: 65,
        incart: 0
    },
    {
        name: "Hành tây",
        image: "./images/HanhTay.webp",
        price: 50,
        incart: 0
    },
    {
        name: "Hồng đỏ Mỹ",
        image: "./images/HongDoMy.webp",
        price: 150,
        incart: 0
    },
    {
        name: "Nho Đà lạt",
        image: "./images/NhoDaLat.webp",
        price: 400,
        incart: 0
    },
    {
        name: "Quả kiwi xanh",
        image: "./images/QuaKiwiXanh.webp",
        price: 250,
        incart: 0
    },
    {
        name: "Táo đỏ Mỹ",
        image: "./images/TaoDoMy.webp",
        price: 120,
        incart: 0
    },
    {
        name: "Táo New Zealand",
        image: "./images/TaoQueen.webp",
        price: 150,
        incart: 0
    },
   
]


for(let i=0; i< carts.length; i++){
    carts[i].addEventListener('click', function(e){
        e.preventDefault();
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumber(){
    let productNumber = localStorage.getItem("cartNumber")? parseInt(localStorage.getItem("cartNumber")) : [];
    document.querySelector(".icon-cart span").textContent = productNumber;


}

function cartNumbers(product){
    let productNumber = localStorage.getItem("cartNumber")? parseInt(localStorage.getItem("cartNumber")) : [];

    localStorage.setItem("cartNumber", productNumber+1);

    document.querySelector(".icon-cart span").textContent = productNumber + 1;

    setItems(product)
}

function setItems(product){
    
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems)

    if(cartItems != null){

        if(cartItems[product.name] == undefined){
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].incart += 1
    }
    else{
        product.incart = 1;
        cartItems = {
            [product.name]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem("totalCost")? parseInt(localStorage.getItem("totalCost")) : [];
        localStorage.setItem("totalCost", cartCost + product.price)
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem("totalCost");

    itemCart = ``;

    cost = ``;

    pay = ``;
    

    Object.values(cartItems).map((item, product) =>{
        itemCart += `  
    
    <div class="item-cart">
    <div style="width:19%;" class="text-center">
        <a href=""><img src="${item.image}" alt=""></a>
    </div>
    <div style="width:28%;" class="text-center"><span>${item.name}</span></div>
    <div style="width:17%;" class="text-center">${item.price}<span>.000đ</span></div>
    <div style="width:18%;" class="text-center">
        <div class="input-sl">
            <input aria-label="quantity" style="width: 80px" class="input-qty" value="${item.incart}"
                type="number">
        </div>
    </div>
    <div style="width:15%;" class="text-center">${item.incart * item.price}<span>.000đ</span></div>
    <div style="width:5%;" class="text-center"><a href="" onclick="deleteProduct(${product})"><i class='bx bxs-trash'></i></a></div>
    </div>
    
       `;

       
    pay +=`
    <div class="">
        <img src="${item.image}" alt="">
    <span>${item.name}</span>
    </div>
    <div class="">
        <span >${item.price}.000đ</span>
    </div>
  `

    })
    
    cost += ` <div class="col-12 checkout">
    <ul class="list-inline">
        <li>
            <div class="d-flex justify-content-end">
            <span>Tổng tiền: </span>
            <strong><span>${cartCost}.000đ</span></strong>
        </div>
        <a href="./index.html" class="btn btn-success"><span>Tiếp tục mua hàng</span></a>
        <a href="./pay.html" class="btn btn-success"><span>Tiến hành thanh toán</span></a>
        </li>
    </ul>
</div>`
  
    document.querySelector(".cart-body").innerHTML = itemCart;
    document.querySelector(".cart-submit").innerHTML = cost;
    document.querySelector(".product-image").innerHTML = pay;

}

// function deleteProduct(product){
//     event.preventDefault();
//     var listProduct = localStorage.getItem("productsInCart");
//     listProduct = JSON.parse(listProduct)
//     console.log(listProduct);
//     if(confirm("Bạn có muốn xoá sản phẩm này không?")){
//       delete listProduct[product.name];
//     }
//     localStorage.setItem("productsInCart", JSON.stringify(listProduct));
    
//   }


onLoadCartNumber();
displayCart();