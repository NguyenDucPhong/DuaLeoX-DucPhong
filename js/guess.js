

function add(e){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var listGuess = localStorage.getItem("list-guess")?JSON.parse(localStorage.getItem("list-guess")) : [];
    listGuess.push({
        name: name,
        email: email,
        phone: phone,
        address: address
    })

    localStorage.setItem("list-guess", JSON.stringify(listGuess))
    alert("Mua hàng thành công!")
}

function render(index){
    var listGuess = localStorage.getItem("list-guess")?JSON.parse(localStorage.getItem("list-guess")) : [];
    table = ` <tr>
    <th scope="col">SST</th>
    <th scope="col">Tên</th>
    <th scope="col">Số điện thoại</th>
    <th scope="col">Địa chỉ</th>
    <th scope="col">Email</th>
  </tr>`
    listGuess.map((value, index) =>{
        table += ` <tr>
        <th scope="row">${index +1}</th>
     
        <td>${value.name}</td>
        <td>${value.phone}</td>
       
        <td>${value.address}</td>
        <td>${value.email}</td>
      </tr>`
    })

    document.getElementById("table").innerHTML = table;
}