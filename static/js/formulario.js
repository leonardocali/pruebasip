var app = document.getElementById("formulario-registro");
var formulario = document.createElement("form");
var crearInputText = function (textLabel, idInput, placeH) {
    var labelCampoUno = document.createElement("label");
    labelCampoUno.className = "col-sm-2 col-form-label font-weight-bold";
    labelCampoUno.textContent = textLabel;
    labelCampoUno.htmlFor = idInput;
    var divformulario = document.createElement("div");
    divformulario.className = "form-group row input-text";
    var divformulario2 = document.createElement("div");
    divformulario2.className = "col-sm-10";
    var nuevoCampoTexto = document.createElement("input");
    nuevoCampoTexto.type = "text";
    nuevoCampoTexto.placeholder = placeH;
    nuevoCampoTexto.id = idInput;
    if (idInput === 'documentoE' || idInput === 'edadE' || idInput === 'telecontactE' || idInput === 'edadM' || idInput === 'edadP') {
        nuevoCampoTexto.addEventListener('change', validaInputsNum);
    }
    else if (idInput === 'direresE') {
        nuevoCampoTexto.addEventListener('change', validaInputVarios);
    }
    else {
        nuevoCampoTexto.addEventListener('change', validaInputsText);
    }
    nuevoCampoTexto.className = "form-control font-weight-light";
    divformulario2.appendChild(nuevoCampoTexto);
    divformulario.appendChild(labelCampoUno);
    divformulario.appendChild(divformulario2);
    return divformulario;
};
var crearInputFecha = function (textLabel, idInput) {
    var label = document.createElement("label");
    label.className = "col-sm-2 col-form-label font-weight-bold";
    label.textContent = textLabel;
    label.htmlFor = idInput;
    var div1 = document.createElement("div");
    div1.className = "form-group row input-text";
    var div2 = document.createElement("div");
    div2.className = "col-sm-10";
    var nuevoCampoTexto = document.createElement("input");
    nuevoCampoTexto.type = "date";
    nuevoCampoTexto.id = idInput;
    nuevoCampoTexto.className = "form-control font-weight-light";
    div2.appendChild(nuevoCampoTexto);
    div1.appendChild(label);
    div1.appendChild(div2);
    return div1;
};
var crearInputSelect = function (opcLista, idInput, labelInput) {
    var gradosCurso = opcLista;
    var div1 = document.createElement("div");
    var label = document.createElement("label");
    label.className = "col-sm-2 col-form-label font-weight-bold";
    label.textContent = labelInput;
    label.htmlFor = idInput;
    div1.className = "form-group row input-text";
    var div2 = document.createElement("div");
    div2.className = "col-sm-10";
    var campotexto = document.createElement("select");
    gradosCurso.forEach(function (elemen, index) {
        var opcion = document.createElement("option");
        opcion.value = (index + 1).toString();
        opcion.text = elemen;
        campotexto.options.add(opcion);
    });
    campotexto.id = idInput;
    campotexto.className = "form-control font-weight-light";
    div2.appendChild(campotexto);
    div1.appendChild(label);
    div1.appendChild(div2);
    return div1;
};
//Input nombres
var nombreE = crearInputText("Nombres:", "nombreE", "Nombres del estudiante");
//Input apellidos
var apellidoE = crearInputText("Apellidos:", "apellidoE", "Apellidos del estudiante");
//Input tipo de documento
var listDocu = ["RC", "TI", "PA"];
var lisTipoDocuE = crearInputSelect(listDocu, "tipodocE", "Tipo de documento:");
//Input numero de docummento
var numDocE = crearInputText("Número de documento:", "documentoE", "Digite el número del documento");
//Input fecha nacimiento
var fechaNacE = crearInputFecha("Fecha de nacimiento:", "fechanace");
//Input edad estudiante
var edadE = crearInputText("Edad:", "edadE", "Escriba la edad del estudiante");
//Input Lugar de Nacimiento
var lugarNacE = crearInputText("Lugar de nacimiento:", "lugarNacE", "Escriba la ciudad de nacimiento");
//Input curso a registrar
var tipoSan = ["A+", "O+", "B+", "AB+", "A-", "O-", "B-", "AB-"];
var lisTipoSanE = crearInputSelect(tipoSan, "listagrados", "Tipo de Sangre:");
//Input Direccion Residencia Estudiante
var dirResE = crearInputText("Dirección residencia:", "direresE", "Escriba la dirección donde vive actualmente");
//Input Lugar de Nacimiento
var telContE = crearInputText("Teléfono:", "telecontactE", "Escriba el número de contacto");
//Input curso a registrar
var cursos = ["Primero", "Segundo", "Tercero", "Cuarto", "Quinto"];
var listCursosE = crearInputSelect(cursos, "listagrados", "Curso:");
//Titulo datos Padres
var titDatosPadres = document.createElement("h4");
titDatosPadres.textContent = "DATOS DE LOS PADRES";
var espacio = document.createElement("br");
//Datos de padres o acudientes
var inputNomP = crearInputText("Nombres:", "nombrep", "Nombres del papá");
var inputApeP = crearInputText("Apellidos:", "apellidosp", "Apellidos del papá");
var fecNaP = crearInputFecha("Fecha de nacimiento papá:", "fechanacp");
var edadP = crearInputText("Edad:", "edadP", "Escriba la edad del papá");
var ocupacionP = crearInputText("Ocupación:", "ocupacionp", "Escriba la ocupación actual");
var inputNomM = crearInputText("Nombres:", "nombrem", "Nombres de la mamá");
var inputApeM = crearInputText("Apellidos:", "apellidosm", "Apellidos de la mamá");
var fecNaM = crearInputFecha("Fecha de nacimiento mamá:", "fechanacm");
var edadM = crearInputText("Edad:", "edadM", "Escriba la edad de la mamá");
var ocupacionM = crearInputText("Ocupación:", "ocupacionm", "Escriba la ocupación actual");
/* const miBoton = document.createElement("button");
const divBoton = document.createElement("div");
divBoton.className = "boton-regsitro"
miBoton.type = "submit";
miBoton.style.backgroundColor = "darkcyan";
miBoton.style.border = "solid";
miBoton.style.borderColor = "white";
miBoton.textContent = "Registrar Estudiante";
miBoton.className = "btn btn-primary boton-registro";
miBoton.addEventListener('click', guardarDatosFormulario )
divBoton.appendChild(miBoton); */
var listaCampos = [
    nombreE,
    apellidoE,
    lisTipoDocuE,
    numDocE,
    fechaNacE,
    lugarNacE,
    edadE,
    lisTipoSanE,
    dirResE,
    telContE,
    listCursosE,
    titDatosPadres,
    inputNomP,
    inputApeP,
    fecNaP,
    edadP,
    ocupacionP,
    inputNomM,
    inputApeM,
    fecNaM,
    edadM,
    ocupacionM,
    /*divBoton*/
];
listaCampos.forEach(function (valor) {
    formulario.appendChild(valor);
});
app === null || app === void 0 ? void 0 : app.appendChild(formulario);
//Manejar el evento de envio del formulario
formulario.addEventListener("submit", function (event) {
    //Evitar el envio
    event.preventDefault();
});
function validaInputsText(event) {
    var target = event.target;
    var id = target.id;
    var verificaInput = document.getElementById(id);
    var valor = verificaInput.value.trim();
    var soloLetras = /^[A-Za-z ]+$/.test(valor);
    if (!soloLetras) {
        alert("El campo solo acepta letras");
        verificaInput.value = "";
        verificaInput.classList.add('validaciones-campo-incorrecto');
    }
    else {
        verificaInput.classList.add('validaciones-campo-correcto');
        //verificaInput.style.backgroundColor='#fff';
    }
}
function validaInputsNum(event) {
    var target = event.target;
    var id = target.id;
    var verificaInput = document.getElementById(id);
    var valor = verificaInput.value.trim();
    var soloLetras = /^[0-9]+$/.test(valor);
    if (!soloLetras) {
        alert("El campo solo recibe números");
        verificaInput.value = "";
        verificaInput.classList.add('validaciones-campo-incorrecto');
    }
    else {
        verificaInput.classList.add('validaciones-campo-correcto');
    }
}
function validaInputVarios(event) {
    var target = event.target;
    var id = target.id;
    var verificaInput = document.getElementById(id);
    var valor = verificaInput.value.trim();
    var soloLetrasyEspeciales = /^[a-zA-Z0-9\s#\-&bsol;.]+$/.test(valor);
    if (!soloLetrasyEspeciales) {
        alert("El campo solo recibe caracteres especiales como ('#' , '-'  y '.')");
        verificaInput.value = "";
        verificaInput.classList.add('validaciones-campo-incorrecto');
    }
    else {
        verificaInput.classList.add('validaciones-campo-correcto');
    }
}
