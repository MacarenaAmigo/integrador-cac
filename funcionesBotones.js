
function botonOver(b){
    b.classList.replace('text-light','text-dark')
}
function botonLeave(b){
    b.classList.replace('text-dark','text-light')
}

function eventAsign(buton){
    buton.addEventListener('mouseover',() => botonOver(buton))
    buton.addEventListener('mouseleave',() => botonLeave(buton))
}

eventAsign(buton1)
eventAsign(buton2)