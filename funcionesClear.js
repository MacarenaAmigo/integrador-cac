
//Elimina todas las opciones seleccionadas de cuadros de descuentos
function clearSelection(){
    for(let here of frames) here.classList.replace('border-success', 'border-muted')
}

//Funcion que borra todo el contenido del formulario
function clearAll(e){
    e.preventDefault()
    const arrayForm = [formulario.valor1,formulario.valor2,formulario.valor3,formulario.valor4,formulario.opcions]
    for (let valor in arrayForm){
        arrayForm[valor].value = ""
        arrayForm[valor].classList.remove('border-danger') || arrayForm[valor].classList.remove('border-success')
    }
    clearSelection()
    cantTick.innerText = 'Total a Pagar: $'+''
}

//Funcion del boton "Borrar"
function clearForm(e){
    clearAll(e)
}