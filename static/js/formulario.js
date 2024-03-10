var nombreForm = document.querySelector('#nombre');
var apellidoForm = document.querySelector('#apellido');
var tipoDocuForm = document.querySelector('#tipodocumento');
var numeroDocuForm = document.querySelector('#numdoc');
var valoresForm = document.querySelector('#regEstForm');
valoresForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var objetofinal = {
        nombres: nombreForm.value,
        apellidos: apellidoForm.value,
        tipo_documento: tipoDocuForm.value,
        numero_documento: numeroDocuForm.value
    };
    return objetofinal;
});
