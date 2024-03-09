var nombreForm = document.querySelector('#nombre');
var apellidoForm = document.querySelector('#apellido');
var tipoDocuForm = document.querySelector('#tipo-documento');
var numeroDocuForm = document.querySelector('#numero-documento');
var valoresForm = document.querySelector('#regEstForm');
valoresForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(nombreForm.value, apellidoForm.value, tipoDocuForm.value, numeroDocuForm.value);
});
