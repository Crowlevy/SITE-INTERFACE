const container = document.getElementById("container")
const registro = document.getElementById("register")
const logar = document.getElementById("login")
const buttonValidation = document.getElementById("button-validation")

registro.addEventListener("click",()=>{
    container.classList.add("active")
})
logar.addEventListener("click",()=>{
    container.classList.remove("active")
})

/*function validadeLogin(){
    const senha = document.getElementById("validation-senha").value
    const email = document.getElementById("validation-email").value
    if (email = "macaco@gmail.com" && senha =="macacada"){
            alert("PASSOU")
    }
    else{
        alert("NEGADO")
    }
}
buttonValidation.addEventListener("click",()=>{
    validadeLogin()
})   
*/