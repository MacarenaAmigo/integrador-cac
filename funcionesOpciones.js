function selectionMade(){
    Number(select.value) === 1 && frameClick(frame1) 
    Number(select.value) === 2 && frameClick(frame2)
    Number(select.value) === 3 && frameClick(frame3)
}


select.addEventListener('change',selectionMade)


/*
function selectionMadeInvert(){
    if(frameClick(frame1))
        (select.value) = 1
    if(frameClick(frame2))
        Number(select.value) = 2 
    if(frameClick(frame3))
        Number(select.value) = 3
}
select.addEventListener('change',selectionMadeInvert)*/
