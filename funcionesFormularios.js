function clearAll(e){
    e.preventDefault()
    formulario.valor1.value = ""
    formulario.valor2.value = ""
    formulario.valor3.value = ""
    formulario.valor4.value = ""
    formulario.opcions.value = ""
    clearSelection()
}


function totalPay(){
    const valueTicket = 200
    let descuento = 0
    const eleccionDesc= Number(formulario.opcions.value)
    if(eleccionDesc === 1) descuento = 20
    else if(eleccionDesc === 2 ) descuento = 50
    else if(eleccionDesc === 3) descuento =85
    else{}
    const canti= formulario.valor4.value
    const total = ((valueTicket*canti)*descuento)/100 
    return total
}
function calci(){
    const pay = totalPay()
    cantTick.innerText = 'Total a Pagar: $'+ String(pay)
}

function markDanger(vi){
    const v = Object(vi)
    v.value === ''
        ? v.classList.add('border-danger')
        : v.classList.remove('border-danger')
}
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

function excelent(){
    location.href = 'excelent.html'
}
function send(e){
    e.preventDefault()
    calci()
    const a = checkError()
    a && sessionStorage.setItem('formulario',JSON.stringify(a))
    a && excelent()
    console.log(a)
}

buton1.onclick = (e) => {clearAll(e)}
buton2.onclick = (e) => {send(e)}