let form = sessionStorage.getItem('formulario')
form = JSON.parse(form)

const valor5 = document.getElementById('valor5')
const valor1 = document.getElementById('valor1')
const valor2 = document.getElementById('valor2')
const valor3 = document.getElementById('valor3')
const valor4 = document.getElementById('valor4')


valor1.innerText = 'Nombre: ' + form.valor1
valor2.innerText = 'Apellido: ' + form.valor2
valor3.innerText = 'Correo: ' + form.valor3
valor4.innerText = 'Cantidad de tickets reservados: ' + form.valor4
valor5.innerText = 'Categoria elegida: ' + form.valor5 + '\n' +'Haz click aqui para volver'

valor5.style.backgroundColor = '#00aa00'
valor4.style.backgroundColor = '#ff7f50'
valor1.style.backgroundColor = '#6495ed'
valor2.style.backgroundColor = '#6495ed'
valor3.style.backgroundColor = '#7fffd4'

valor5.addEventListener('click',()=>{ location.href = 'index.html'})



Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'La reserva se ha completado con exito!',
    showConfirmButton: false,
    timer:4000
})
