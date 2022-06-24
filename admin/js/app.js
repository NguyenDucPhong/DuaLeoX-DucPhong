// function validateInput(){
//     var modalElement = document.querySelector(".modal-body");
//     var inputElement = modalElement.querySelectorAll(".form-control");
//     for(var i=0; i<inputElement.length; i++){
//         if (inputElement[i].value === "" ){
//             inputElement[i].parentElement.querySelectorAll(".error").innerText = "Hãy nhập dữ liệu"
//         }
//     }
// }

function add(e){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var classify = document.getElementById("classify").value;
    var  origin = document.getElementById("origin").value;
    var image = document.getElementById("image").value;
    var amount = document.getElementById("amount").value;
    var date = document.getElementById("date").value;
    var price = document.getElementById("price").value;
    var listProduct = localStorage.getItem("list-product")? JSON.parse(localStorage.getItem("list-product")) : [];
    listProduct.push({
        name: name,
        classify: classify,
        origin: origin,
        image: image,
        amount: amount,
        date: date,
        price: price
    })
    localStorage.setItem("list-product", JSON.stringify(listProduct))
    
    render();
    document.getElementById("name").value = null;
  document.getElementById("classify").value = null;
  document.getElementById("origin").value = null;
  document.getElementById("image").value = null;
  document.getElementById("amount").value = null;
  document.getElementById("date").value = null;
  document.getElementById("price").value = null;
    
}

function render(){
    var listProduct = localStorage.getItem("list-product")? JSON.parse(localStorage.getItem("list-product")) : [];
    table = `
    <tr>
      <th scope="col">SST</th>
      <th scope="col">Ảnh</th>
      <th scope="col">Tên sản phẩm</th>
      <th scope="col">Phân loại</th>
      <th scope="col">Xuất xứ</th>
      <th scope="col">Số lượng</th>
      <th scope="col">thời gian thêm</th>
      <th scope="col">Giá bán</th>
      <th scope="col">chỉnh sửa</th>
      <th scope="col">xoá</th>
    </tr>`
  listProduct.map((value, index) => {
    table += ` <tr>
    <th scope="row">${index + 1}</th>
    <td class="goods"><img src="/DualeoX-DucPhong/images/ChanhDayDoUc.webp" alt=""></td>
    <td>${value.name}</td>
    <td>${value.classify}</td>
    <td>${value.origin}</td>
    <td>${value.amount}</td>
    <td>${value.date}</td>
    <td>${value.price}</td>
    <td><a href="" data-bs-toggle="modal"  data-bs-target="#exampleModal" onclick="edit(${index})"><i class='bx bx-edit'></i></a>
    </td>
    <td> <a href="" onclick="deleteProduct(${index})"><i class='bx bx-trash'></i></a>
    </td>
  </tr>
  `
  })


  document.getElementById("table").innerHTML = table;
}

function edit(index){
  var listProduct = localStorage.getItem("list-product")? JSON.parse(localStorage.getItem("list-product")) : [];
  document.getElementById("name").value = listProduct[index].name;
  document.getElementById("classify").value = listProduct[index].classify;
  document.getElementById("origin").value = listProduct[index].origin;
  // document.getElementById("image").value = listProduct[index].image;
  document.getElementById("amount").value = listProduct[index].amount;
  document.getElementById("date").value = listProduct[index].date;
  document.getElementById("price").value = listProduct[index].price;
  document.getElementById("index").value = index;


  document.getElementById("exampleModalLabel").textContent = "Chỉnh sửa sản phẩm";
  document.getElementById("save").style.display = "block";
  document.getElementById("add1").style.display = "none";
}

function change(){
  var listProduct = localStorage.getItem("list-product")? JSON.parse(localStorage.getItem("list-product")) : [];
  var index = document.getElementById("index").value;
  listProduct[index] ={
    name: document.getElementById("name").value,
    classify: document.getElementById("classify").value,
    origin: document.getElementById("origin").value,
    image: document.getElementById("image").value,
    amount: document.getElementById("amount").value,
    date: document.getElementById("date").value,
    price: document.getElementById("price").value
  } 
  localStorage.setItem("list-product", JSON.stringify(listProduct));
  render();
  document.getElementById("name").value = null;
  document.getElementById("classify").value = null;
  document.getElementById("origin").value = null;
  document.getElementById("image").value = null;
  document.getElementById("amount").value = null;
  document.getElementById("date").value = null;
  document.getElementById("price").value = null;
}

function fix(){
  document.getElementById("exampleModalLabel").textContent = "Thêm sản phẩm"
  document.getElementById("save").style.display = "none"
  document.getElementById("add1").style.display = "block"

  document.getElementById("name").value = null;
  document.getElementById("classify").value = null;
  document.getElementById("origin").value = null;
  document.getElementById("image").value = null;
  document.getElementById("amount").value = null;
  document.getElementById("date").value = null;
  document.getElementById("price").value = null;

}

function deleteProduct(index){
  event.preventDefault();
  var listProduct = localStorage.getItem("list-product")? JSON.parse(localStorage.getItem("list-product")) : [];
  if(confirm("Bạn có muốn xoá sản phẩm này không?")){
    listProduct.splice(index, 1);
  }
  localStorage.setItem("list-product", JSON.stringify(listProduct));
  render();
}