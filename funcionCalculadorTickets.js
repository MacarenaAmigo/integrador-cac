
//Funcion que calcula la cantidad a pagar
function totalPay(){
    const valueTicket = 200
    let discount = 0
    const eleccionDesc= Number(formulario.opcions.value);
    eleccionDesc === 1 && (discount = 20)
    eleccionDesc === 2 && (discount = 50)
    eleccionDesc === 3 && (discount = 85)
    eleccionDesc === 4 && (discount = 100)
    const amount= formulario.valor4.value
    const total = ((valueTicket*amount)*discount)/100 
    return total
}

//Funcion que modifica valor de ticket
function calculatorTickets(){
    const pay = totalPay()
    cantTick.innerText = 'Total a Pagar: $'+ String(pay)
}


