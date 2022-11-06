let form = sessionStorage.getItem('formulario')
form = JSON.parse(form)

const valor5 = document.getElementById('valor5')
const valor1 = document.getElementById('valor1')
const valor2 = document.getElementById('valor2')
const valor3 = document.getElementById('valor3')
const valor4 = document.getElementById('valor4')

valor1.innerText = form.valor1
valor2.innerText = form.valor2
valor3.innerText = form.valor3
valor4.innerText = form.valor4
valor5.innerText = form.valor5

valor5.style.backgroundColor = '#00aa00'

valor5.addEventListener('click',()=>{ location.href = 'index.html'})

Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Estos son tus datos ;)',
    showConfirmButton: false,
    timer:5000
})