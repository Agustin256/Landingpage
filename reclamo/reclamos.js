const nombre = document.getElementById("Nombre")
const email = document.getElementById("Email")
const form = document.getElementById("form")
const parrafo = document.getElementById("Mensaje")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let Mensaje = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]}?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.Value.length <6){
        Mensaje += `El nombre no es valido <br>` 
        entrar = true
    }
    if(regexEmail.test(email.value)){
        Mensaje += `El email no es valido <br>`
        entrar = true
    }
    
    if(entrar){
        parrafo.innerHTML = Mensaje
    }
})



$(document).ready(function(){
    $('#Enviar').on('click', function ( ){
        $.ajax({
            url:'https://reqres.in/api/users',
            type: 'POST',
            data: {
                name: $('#Nombre').val(),
                email: $('#Email').val(),
            },
            success: function (response) {
                console.log(response)
            },
        });
    });
});