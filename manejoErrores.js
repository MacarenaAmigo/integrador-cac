// Agrega margen rojo en caso de error por celda vacia

function markDanger(enteredValueIn){
    const enteredValueNow = Object(enteredValueIn)
    enteredValueNow.value === ''
        ? enteredValueNow.classList.add('border-danger')
        : enteredValueNow.classList.remove('border-danger')
}

// Testea que no queden datos sin completar
function checkError(){
    let info = false
    const valor5=
        formulario.opcions.value === '1' && 'Estudiante' ||
        formulario.opcions.value === '2' && 'Trainee' ||
        formulario.opcions.value === '3' && 'Junior' 
    markDanger(formulario.valor1)
    markDanger(formulario.valor2)
    markDanger(formulario.valor3)
    markDanger(formulario.valor4)
    if (!formulario.opcions.value) markDanger(formulario.opcionSelect)
    if(formulario.opcions.value && 
        formulario.valor1.value && 
        formulario.valor2.value && 
        formulario.valor3.value && 
        formulario.valor4.value)
        {info= {
            valor1:formulario.valor1.value,
            valor2:formulario.valor2.value,
            valor3:formulario.valor3.value,
            valor4:formulario.valor4.value,
            valor5: valor5
        }
    }
    return info
}



//valida entrada de nombre y apellido
function valueEntryName(entryValue,option){
    entryValue.addEventListener('keyup',(event) =>{
        const valorEntry = Number(event.target.value);
        if (!isNaN(valorEntry) && option === 1){
            alert('Solo se permite su Nombre')
            event.target.value = ''
            entryValue.classList.add('border-danger')
        } 
        else if (!isNaN(valorEntry) && option === 2){
            alert('Solo se permite su Apellido')
            event.target.value = ''
            entryValue.classList.add('border-danger')
        }
        else{
            entryValue.classList.remove('border-danger')
            entryValue.classList.add('border-success')
        } 
    })
    
}

//valida cantidad de tickets
function valueEntryAmount(){
    formulario.valor4.addEventListener('keyup',(event) =>{
        const entryAmount = Number(event.target.value);
        if (isNaN(entryAmount) || entryAmount < 0 ){
            alert('Solo se permiten numeros positivos')
            event.target.value = ''
            formulario.valor4.classList.add('border-danger')
        }
        else{
            formulario.valor4.classList.remove('border-danger')
            formulario.valor4.classList.add('border-success')
        }
        takeTickets(); 
    })
    
} 

//valida email
function valueEntryEmail(){
    formulario.valor3.addEventListener('change',(event) =>{
        const entryEmail = event.target.value 
        const arrayEmail = Array.from(entryEmail);
        const arrayExist = arrayEmail.some(valor => valor === '@')
        if(!arrayExist){
            alert('Coloque correctamente su email')
            event.target.value = ''
            formulario.valor3.classList.add('border-danger')
        }
        else{
            formulario.valor3.classList.remove('border-danger')
            formulario.valor3.classList.add('border-success')
        } 
    })
}
function valueEntry(){
    valueEntryName(formulario.valor1,1)
    valueEntryName(formulario.valor2,2)
    valueEntryAmount()
    valueEntryEmail()
}

valueEntry()



