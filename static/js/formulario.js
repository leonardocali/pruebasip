document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos el contenedor para crear el formulario
    var formContenedor = document.getElementById("formRegistro");
    //Crear el formulario
    var form = document.createElement("form");
    //Creamos campo de texto para Nombre
    var inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Digite nombre";
    inputNombre.className = "form-control";
    inputNombre.name = "nombre";
    inputNombre.id = "nombre";
    inputNombre.pattern = "[A-Za-z ]+";
    inputNombre.addEventListener("change", function () {
        var nombreInput = document.getElementById("nombre");
        var valor = nombreInput.value.trim();
        var soloLetras = /^[A-Za-z ]+$/.test(valor);
        if (!soloLetras) {
            alert("El campo nombre solo recibe letras");
            nombreInput.value = "";
        }
    });
    var inputApellidos = document.createElement("input");
    inputApellidos.type = "text";
    inputApellidos.placeholder = "Digite apellidos";
    inputApellidos.className = "form-control";
    inputApellidos.name = "apellido";
    inputApellidos.id = "apellido";
    inputApellidos.pattern = "^[A-Za-z ]+$";
    inputApellidos.addEventListener("change", function () {
        var nombreInput = document.getElementById("apellido");
        var valor = nombreInput.value.trim();
        var soloLetras = /^[A-Za-z ]+$/.test(valor);
        if (!soloLetras) {
            alert("El campo apellido solo recibe letras");
            nombreInput.value = "";
        }
    });
    var inputTipodoc = document.createElement("select");
    var opciones = ["RC", "TI", "DE", "PA"];
    inputTipodoc.className = "form-control";
    inputTipodoc.name = "tipodocumento";
    inputTipodoc.id = "tipodocumento";
    opciones.forEach(function (opcion, index) {
        var option = document.createElement("option");
        option.value = String(opcion); // Asigna un valor (puede ser diferente al texto visible)
        option.text = opcion; // Texto visible para la opción
        inputTipodoc.add(option);
    });
    var inputNumdoc = document.createElement("input");
    inputNumdoc.type = "text";
    inputNumdoc.placeholder = "Digite # documento";
    inputNumdoc.className = "form-control";
    inputNumdoc.name = "numdoc";
    inputNumdoc.id = "numdoc";
    inputNumdoc.pattern = "^[0-9]+$";
    inputNumdoc.addEventListener("change", function () {
        var nombreInput = document.getElementById("numdoc");
        var valor = nombreInput.value.trim();
        var soloLetras = /^[0-9]+$/.test(valor);
        if (!soloLetras) {
            alert("El campo documento solo recibe numeros");
            nombreInput.value = "";
        }
    });
    var inputGrado = document.createElement("select");
    var opGrado = [
        "Primero - 1°",
        "Segundo - 2°",
        "Tercero - 3°",
        "Cuarto - 4°",
        "Quinto - 5°",
    ];
    inputGrado.className = "form-control";
    inputGrado.name = "grado";
    inputGrado.id = "grado";
    opGrado.forEach(function (opcion, index) {
        var option = document.createElement("option");
        option.value = String(index + 1); // Asigna un valor (puede ser diferente al texto visible)
        option.text = opcion; // Texto visible para la opción
        inputGrado.add(option);
    });
    var inputFecNac = document.createElement("input");
    inputFecNac.type = "date";
    inputFecNac.className = "form-control";
    inputFecNac.name = "fecnacest";
    inputFecNac.id = "fecnacest";
    //Agregar campos al formulario
    form.appendChild(inputNombre);
    form.appendChild(inputApellidos);
    form.appendChild(inputTipodoc);
    form.appendChild(inputNumdoc);
    form.appendChild(inputGrado);
    form.appendChild(inputFecNac);
    //Agregamos el formulario al contenedor
    if (formContenedor) {
        formContenedor.appendChild(form);
    }
    //Manejar el evento de envio del formulario
    form.addEventListener("submit", function (event) {
        //Evitar el envio
        event.preventDefault();
    });
});
