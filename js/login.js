function signup(e){
    event.preventDefault();
    var userName = document.getElementById("username").value;
    var passWord = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var listUser = localStorage.getItem("list-user")? JSON.parse(localStorage.getItem("list-user")) : [];
    listUser.push({
        userName: userName,
        email: email,
        passWord: passWord,
    })
        
    localStorage.setItem("list-user", JSON.stringify(listUser));
    alert("Đăng ký thành công!");

     document.getElementById("username").value = null;
    document.getElementById("password").value = null;
     document.getElementById("email").value = null;
}

function login(e){
    event.preventDefault();
    var passWord = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var listUser = localStorage.getItem("list-user")? JSON.parse(localStorage.getItem("list-user")) : [];
    listUser.map((value) => {
        if(passWord == value.passWord && email == value.email ){
            if( value.userName == "Admin"){
                alert("Đăng nhập thành công!")
                 window.location.href="/DualeoX-DucPhong/admin/index.html";
            }
            else{
                alert("Đăng nhập thành công!")
                window.location.href="/DualeoX-DucPhong/index.html";
            }
        }
        // if(passWord != value.passWord && email != value.email )
        // {
        //     alert("Đăng nhập không thành công!")
        //  }
    })
    // var data = JSON.parse(localStorage.getItem("list-user"))
    // if(passWord == data.passWord && email == data.email){
    //     alert("Đăng nhập thành công!")
    //     window.location.href="/DualeoX-DucPhong/admin/index.html";
    // }
    // else{
    //     alert("Đăng nhập không thành công!")
    // }
    
}

function render(){
    var listUser = localStorage.getItem("list-user")? JSON.parse(localStorage.getItem("list-user")) : [];
    table = `
    <tr>
      <th scope="col">SST</th>
      <th scope="col">Tên</th>
      <th scope="col">email</th>
      <th scope="col">Mật khẩu</th>
      <th scope="col">Xoá</th>
    </tr>`
  listUser.map((value, index) => {
    table += ` <tr>
    <th scope="row">${index + 1}</th>
    <td>${value.userName}</td>
    <td>${value.email}</td>
    <td>${value.passWord}</td>
    <td> <a href="" onclick="deleteUser(${index})"><i class='bx bx-trash'></i></a>
    </td>
  </tr>
  `
  })

  document.getElementById("table").innerHTML = table;
}

function deleteUser(index){
    event.preventDefault();
    var listUser = localStorage.getItem("list-user")? JSON.parse(localStorage.getItem("list-user")) : [];
    if(confirm("Bạn có muốn xoá tài khoản này không?")){
        listUser.splice(index, 1);
    }
    localStorage.setItem("list-user", JSON.stringify(listUser));
    render();
}
