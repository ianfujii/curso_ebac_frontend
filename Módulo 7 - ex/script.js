function validacaoInput(){
    var input1 = document.querySelector('#primeiroN').value
    var input2 = document.querySelector('#segundoN').value

    var formulario = document.querySelector('#form')

    if(input1 < input2){
        formulario.innerHTML += `<div style='background: #5fcc83;' class='resultado'><p class='res'>Formulario valido</p></div>`
    }else{
        formulario.innerHTML += `<div style='background: #e04a52;' class='resultado'><p class='res'>Formulario invalido</p></div>`
    }
} // credit: Joucas