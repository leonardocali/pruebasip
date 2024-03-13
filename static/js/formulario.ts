document.addEventListener('DOMContentLoaded', () => {
    
    // Obtenemos el contenedor para crear el formulario
    const formContenedor = document.getElementById('formRegistro');

    //Crear el formulario
    const form = document.createElement('form');
    
    //Creamos campo de texto para Nombre 
    const inputNombre = document.createElement('input');
    inputNombre.type = 'text';
    inputNombre.placeholder = 'Digite nombre';
    inputNombre.className = 'form-control';
    inputNombre.name = 'nombre';
    inputNombre.id = 'nombre';

    const inputApellidos = document.createElement('input');
    inputApellidos.type = 'text';
    inputApellidos.placeholder = 'Digite apellidos';
    inputApellidos.className = 'form-control';
    inputApellidos.name = 'apellido';
    inputApellidos.id = 'apellido';

    const inputTipodoc = document.createElement('select');
    const opciones: string[] = ['RC', 'TI', 'DE', 'PA'];
    inputTipodoc.className = 'form-control';
    inputTipodoc.name = 'tipodocumento';
    inputTipodoc.id = 'tipodocumento';
    opciones.forEach((opcion, index) => {
        const option = document.createElement('option');
        option.value = String(opcion); // Asigna un valor (puede ser diferente al texto visible)
        option.text = opcion; // Texto visible para la opción
        inputTipodoc.add(option);
      });

    const inputNumdoc = document.createElement('input');
    inputNumdoc.type = 'text';
    inputNumdoc.placeholder = 'Digite # documento';
    inputNumdoc.className = 'form-control';
    inputNumdoc.name = 'numdoc';
    inputNumdoc.id = 'numdoc';

    const inputGrado = document.createElement('select');
    const opGrado: string[] = ['Primero - 1°', 'Segundo - 2°', 'Tercero - 3°', 'Cuarto - 4°', 'Quinto - 5°'];
    inputGrado.className = 'form-control';
    inputGrado.name = 'grado';
    inputGrado.id = 'grado';
    opGrado.forEach((opcion, index) => {
        const option = document.createElement('option');
        option.value = String(index+1); // Asigna un valor (puede ser diferente al texto visible)
        option.text = opcion; // Texto visible para la opción
        inputGrado.add(option);
      });

    //Agregar campos al formulario
    form.appendChild(inputNombre);
    form.appendChild(inputApellidos);
    form.appendChild(inputTipodoc);
    form.appendChild(inputNumdoc);
    form.appendChild(inputGrado);
    
    //Agregamos el formulario al contenedor
    if(formContenedor) {
        formContenedor.appendChild(form);
    }   

    //Manejar el evento de envio del formulario

    form.addEventListener('submit', (event) =>{
        //Evitar el envio
        event.preventDefault();
    })
})




