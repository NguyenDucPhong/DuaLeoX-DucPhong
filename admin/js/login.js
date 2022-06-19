function signup(e){
    event.preventDefault();
    let userName = document.getElementById("username").value;
    let passWord = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let listUser = localStorage.getItem("list-user") ? JSON.parse(localStorage.getItem("list-user")) : []
    listUser.push(
        {
            userName: userName,
            email: email,
            passWord: passWord,
        }
    )

    localStorage.setItem("list-user", JSON.stringify(listUser));
    alert("Đăng ký thành công!");
}

function login(e){
    event.preventDefault();
    let passWord = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let data = localStorage.getItem("list-user")? JSON.parse(localStorage.getItem("list-user")) : [];
    if(passWord == data.passWord && email == data.email){
        alert("Đăng nhập thành công!")
        window.location.href="/DualeoX-DucPhong/admin/index.html";
        
    }
    else{
        alert("Đăng nhập không thành công!")
        console.log(data)
    }
    
   
}
