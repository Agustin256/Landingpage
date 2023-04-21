const nombre = document.getElementById("name")
const email = document.getElementById("correo")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warning")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]}?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.Value.length <6){
        warning += `El nombre no es valido <br>` 
        entrar = true
    }
    if(regexEmail.test(email.value)){
        warning += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length <8){
        warning += `La contraseña no es valido <br>`
    }

    if(entrar){
        parrafo.innerHTML = warning
    }
})