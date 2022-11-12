//Funcion evento: cuando estoy sobre cuadro de descuentos
function frameOver(valueFrame){
    valueFrame.classList.replace('border-muted','border-primary')
}

//Funcion evento: cuando salgo de arriba de cuadro de descuentos
function frameLeave(valueFrame){
    valueFrame.classList.replace('border-primary','border-muted')
}

//Funcion evento: cuando le hago click a un cuadro de descuentos
function frameClick(valueFrame){
    valueFrame.ariaChecked = true
    valueFrame.classList.replace('border-primary','border-success')
    valueFrame.classList.replace('border-muted','border-success')
    for(let cube of frames){
        if (cube.id !== valueFrame.id){
            cube.classList.replace('border-success', 'border-muted')
        }
    }
    if(valueFrame.id === 'card1') formulario.opcions.value = 1
    if(valueFrame.id === 'card2') formulario.opcions.value = 2
    if(valueFrame.id === 'card3') formulario.opcions.value = 3
    takeTickets()
}

//Funcion de asignacion de eventos a los cuadros de textos
function eventAsign(frame){
    frame.addEventListener('mouseover',() => frameOver(frame))
    frame.addEventListener('mouseleave',() => frameLeave(frame))
    frame.addEventListener('click',() => frameClick(frame))
}

eventAsign(frame1)
eventAsign(frame2)
eventAsign(frame3)
