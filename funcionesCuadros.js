function frameOver(f){
    f.classList.replace('border-muted','border-primary')
}

function frameLeave(f){
    f.classList.replace('border-primary','border-muted')
}

function frameClick(f){
    f.ariaChecked = true
    f.classList.replace('border-primary','border-success')
    f.classList.replace('border-muted','border-success')
    for(let cube of frames){
        if (cube.id !== f.id){
            cube.classList.replace('border-success', 'border-muted')
        }
    }
}

function eventAsign(frame){
    frame.addEventListener('mouseover',() => frameOver(frame))
    frame.addEventListener('mouseleave',() => frameLeave(frame))
    frame.addEventListener('click',() => frameClick(frame))
}

function clearSelection(){
    for(let here of frames) here.classList.replace('border-success', 'border-muted')
}
eventAsign(frame1)
eventAsign(frame2)
eventAsign(frame3)
