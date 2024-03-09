var nombreForm = document.querySelector('#nombre');
var apellidoForm = document.querySelector('#apellido');
var tipoDocuForm = document.querySelector('#tipo-documento');
var numeroDocuForm = document.querySelector('#numero-documento');
var valoresForm = document.querySelector('#regEstForm');
valoresForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var objetofinal = {
        nombres: nombreForm.value,
        apellidos: apellidoForm.value,
        tipo_documento: tipoDocuForm.value,
        numero_documento: numeroDocuForm.value
    };
    console.log(objetofinal);
});
