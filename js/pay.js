

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem("totalCost");



    cost = ``;

    pay = ``;
    

    Object.values(cartItems).map((item) =>{
       
    pay +=`          
    <div class="product-image d-flex justify-content-between align-items-center">

    <div class="">
        <img src="${item.image}" alt="">
    <span>${item.name}</span>
    <span>(${item.incart})</span>
    </div>
    <div class="">
        <span >${item.price * item.incart}.000đ</span>
        
    </div>
    
    </div>
    
  `

    })
    
    cost += ` <div class="price d-flex justify-content-between align-items-center">
    <p>Tạm tính</p>
    <p>${cartCost}.000đ</p>
  </div>
  <div class="ship d-flex justify-content-between align-items-center">
    <p>Phí vận chuyển</p>
    <p>-</p>
  </div>
  <div class="sum-price d-flex justify-content-between align-items-center">
    <p>Tổng cộng</p>
    <p>${cartCost}.000đ</p>
  </div>`
  
   
    document.querySelector(".image").innerHTML = pay;
    document.querySelector(".costPrice").innerHTML = cost;

}




displayCart();