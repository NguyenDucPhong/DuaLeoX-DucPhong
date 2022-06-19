function validateInput(){
    let modalElement = document.querySelector(".modal-body");
    let inputElement = modalElement.querySelectorAll(".form-control");
    for(let i=0; i<inputElement.length; i++){
        if (inputElement[i].value === "" ){
            inputElement[i].parentElement.querySelectorAll(".error").innerText = "Hãy nhập dữ liệu"
        }
    }
}