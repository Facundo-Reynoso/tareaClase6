const btnAgregar = document.querySelector('#btn-agregar')
const btnQuitar = document.querySelector('#btn-quitar')
let cantidadDeMiembros = 0

const btnCalcular = document.querySelector('#btn-calcular')

btnAgregar.onclick = function(){
    cantidadDeMiembros++

    let label = document.createElement('label')
    label.textContent = `Salario anual miembro ${cantidadDeMiembros}:`

    let input = document.createElement('input')
    input.type = 'number'
    input.id = `salarioAnual${cantidadDeMiembros}`

    let formularioSalario = document.querySelector('#formulario-salario')
    formularioSalario.appendChild(label)
    formularioSalario.appendChild(input)
    formularioSalario.appendChild(document.createElement('br'))

    btnCalcular.className = ''
}

btnQuitar.onclick = function(){
    if(cantidadDeMiembros > 0){

        let formularioSalario = document.querySelector('#formulario-salario')

        //Borra el ultimo salto de linea
        formularioSalario.removeChild(formularioSalario.lastElementChild)

        //borra el ultimo input
        formularioSalario.removeChild(formularioSalario.lastElementChild)

        //borra el ultimo label
        formularioSalario.removeChild(formularioSalario.lastElementChild)

        cantidadDeMiembros--

        if(cantidadDeMiembros === 0){
            btnCalcular.className = 'oculto'
        }
    }
}

btnCalcular.onclick = function(){
    let salariosAnuales = []
    for(i = 1; i <= cantidadDeMiembros; i++){
        let salarioAnual = Number(document.querySelector(`#salarioAnual${i}`).value)
        salariosAnuales.push(salarioAnual)
    }
    

    
}
