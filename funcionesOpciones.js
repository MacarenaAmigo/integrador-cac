// Funcion que controla si ya hay cantidad, entonces calcula
function takeTickets(){
    if (formulario.valor4.value) calculatorTickets()
    if (select.value) calculatorTickets()
}

//Funcion que selecciona cuadro segun lo seleccionado en el desplegable de categoria
function selectionMade(){
    Number(select.value) === 1 && frameClick(frame1) 
    Number(select.value) === 2 && frameClick(frame2)
    Number(select.value) === 3 && frameClick(frame3)
    Number(select.value) === 4 && clearSelection()
    takeTickets()    
}


select.addEventListener('change',selectionMade)

