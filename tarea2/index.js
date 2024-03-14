const btnAgregar = document.querySelector('#btn-agregar')
const btnQuitar = document.querySelector('#btn-quitar')
let cantidadDeMiembros = 0

btnAgregar.onclick = function(){
    cantidadDeMiembros++

    let label = document.createElement('label')
    label.textContent = `Salario anual miembro ${cantidadDeMiembros}:`

    let input = document.createElement('input')
    input.type = 'number'
    input.class = 'salario'

    let formularioSalario = document.querySelector('#formulario-salario')
    formularioSalario.appendChild(label)
    formularioSalario.appendChild(input)
    formularioSalario.appendChild(document.createElement('br'))

}