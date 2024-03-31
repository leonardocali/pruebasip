document.addEventListener('DOMContentLoaded', ()=>{
    //seleccionamos todos lo elementos dentro de la etiquetas span
    let titulos = document.querySelectorAll('span[title]')
    //Recorremos y validamos que esten contenidos dentro de la etiqueta a
    titulos.forEach(function(titulo) {
        let tagetA = titulo.closest('a')
        //Si existe cambiamos el nombre por su titulo y su contenedor a le asignamos la clase requerida
        if(tagetA){
            if (titulo.getAttribute('title') === 'Add record to database') {
                tagetA.className = 'btn btn-primary'
                titulo.textContent = 'Adicionar registro'
            }
            if (titulo.getAttribute('title') === 'Edit') {
                tagetA.className = 'btn btn-success'
                titulo.textContent = 'Editar registro'
            }
            if (titulo.getAttribute('title') === 'Delete') {
                tagetA.className = 'btn btn-danger'
                titulo.textContent = 'Eliminar registro'
            }
            if (titulo.getAttribute('title') === 'Vista') {
                tagetA.className = 'btn btn-info'
            }
            if (titulo.getAttribute('title') === 'Back') {
                titulo.textContent = 'Devolver'
                tagetA.className = 'btn btn-dark'
            }
        }
    });

    let errorEnterValue = document.getElementById('nombre__error')
    if(errorEnterValue){
        errorEnterValue.textContent = "Por favor ingresa un valor"
    }

    let tabla = document.querySelector('table');
    if (tabla) {
        tabla.classList.add('table');
        let th = document.createElement('th')
        th.textContent = 'Acciones';
        let primeraFila = tabla.querySelector('tr');
        // Si hay una fila, agrega el th como su primer hijo
        if (primeraFila) {
            let terceraCelda = primeraFila.cells[2]; // Índice 2 es la tercera celda
            if (terceraCelda) {
                let texto = terceraCelda.parentNode.insertBefore(th, terceraCelda);
                texto.style.color = "#007bff"
            };
        }
        let thAEliminar = tabla.querySelector('th:nth-child(4)');
        thAEliminar.remove();
    }

    let recordsFound = document.querySelector('.web2py_counter')
    if(recordsFound){
        let agregarEspacio = document.createElement('br')
        recordsFound.insertAdjacentElement('afterend', agregarEspacio);
        let textos = recordsFound.textContent.split(' ')
        if(textos[0] === '1'){
            recordsFound.textContent = `${textos[0]} registro encontrado` 
        }
        else{
            recordsFound.textContent = `${textos[0]} registros encontrados` 
        }
    }
})