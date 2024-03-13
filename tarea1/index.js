const btnGenerarFormularios = document.querySelector('#btn-generar-formularios')

btnGenerarFormularios.onclick = function(){
    let cantidadDeMiembros = Number(document.querySelector('#cantidad-de-miembros').value)
    let formulario2 = document.querySelector('#formulario-2')

    formulario2.innerHTML = `<h3>Edad de los miembros:</h3>`

    for(i = 1; i <= cantidadDeMiembros; i++){
        formulario2.innerHTML += `
            <br>
            <label for="edad-miembro-${i}">Ingrese la edad del miembro ${i}</label>
            <input type="number" required min="0" id="edad-miembro-${i}"
            <br>
        `
    }

    formulario2.innerHTML += `
        <br>
        <button id="btn-calcular">Calcular</button>
    `
    return false
}

const btnCalcular = document.querySelector('#btn-calcular')
