//Funcion que llama a la pagina excelent
function excelent(){
    location.href = 'excelent.html'
}

//Funcion del boton "Enviar" 
function send(e){
    e.preventDefault()
    calculatorTickets();
    const statusError = checkError()
    statusError && sessionStorage.setItem('formulario',JSON.stringify(statusError))
    statusError && excelent()
    console.log(statusError)
}

buton1.onclick = (e) => {clearForm(e)}
buton2.onclick = (e) => {send(e)}
