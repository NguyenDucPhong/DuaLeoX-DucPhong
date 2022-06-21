function add(e){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var classify = document.getElementById("classify").value;
    var discount = document.getElementById("discount").value;
    var date = document.getElementById("date").value;
    var listDiscount = localStorage.getItem("list-discount")? JSON.parse(localStorage.getItem("list-discount")) : [];
    listDiscount.push({
        name: name,
        classify: classify,
        discount: discount,
        date: date
    })

    localStorage.setItem("list-discount", JSON.stringify(listDiscount))
    render();
}

function render(){
    var listDiscount = localStorage.getItem("list-discount")? JSON.parse(localStorage.getItem("list-discount")) : [];
    table = ` <tr>
    <th scope="col">SST</th>
    <th scope="col">Tên sản phẩm</th>
    <th scope="col">Phân loại</th>
    <th scope="col">Khuyến mại</th>
    <th scope="col">Thời gian thêm</th>
    <th scope="col">Chỉnh sửa</th>
    <th scope="col">Xoá</th>
    </tr>
    `
    listDiscount.map((value, index) => {
        table += ` <tr>
        <th scope="row">${index + 1}</th>
        <td>${value.name}</td>
        <td>${value.classify}</td>
        <td>${value.discount}</td>
        <td>${value.date}</td>
        <td><a href="" data-bs-toggle="modal" data-bs-target="#discountmodal" onclick="edit(${index})"><i class='bx bx-edit'></i></a></td>
        <td><a href="" onclick="deleteDiscount(${index})"><i class='bx bx-trash'></i></a></td>
      </tr>`
    })
    
    document.getElementById("table").innerHTML = table;
    
}

function edit(index){
    var listDiscount = localStorage.getItem("list-discount")? JSON.parse(localStorage.getItem("list-discount")) : [];
    document.getElementById("name").value = listDiscount[index].name;
    document.getElementById("classify").value = listDiscount[index].classify;
    document.getElementById("discount").value = listDiscount[index].discount;
    document.getElementById("date").value = listDiscount[index].date;
    document.getElementById("index").value = index;

    document.getElementById("add1").style.display = "none";
    document.getElementById("save").style.display = "block";

}

function change(){
    var listDiscount = localStorage.getItem("list-discount")? JSON.parse(localStorage.getItem("list-discount")) : [];
    var index = document.getElementById("index").value;
    listDiscount[index] = {
        name: document.getElementById("name").value,
        classify: document.getElementById("classify").value,
        discount: document.getElementById("discount").value,
        date: document.getElementById("date").value
    }
    localStorage.setItem("list-discount", JSON.stringify(listDiscount));
    render();
    document.getElementById("name").value = null;
    document.getElementById("classify").value = null;
    document.getElementById("discount").value = null;
    document.getElementById("date").value = null;
}

function fix(){
    document.getElementById("add1").style.display = "block";
    document.getElementById("save").style.display = "none";

    document.getElementById("name").value = null;
    document.getElementById("classify").value = null;
    document.getElementById("discount").value = null;
    document.getElementById("date").value = null;
}

function deleteDiscount(index){
    event.preventDefault();
    var listDiscount = localStorage.getItem("list-discount")? JSON.parse(localStorage.getItem("list-discount")) : [];
    if(confirm("Bạn có chắc chắn muốn xoá không?")){
        listDiscount.splice(index, 1);
    }
    localStorage.setItem("list-discount", JSON.stringify(listDiscount));
    render();
}