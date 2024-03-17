document.addEventListener("DOMContentLoaded", () => {
  // Obtenemos el contenedor para crear el formulario
  const formContenedor = document.getElementById("formRegistro");

  //Crear el formulario
  const form = document.createElement("form");

  //Creamos campo de texto para Nombre
  const inputNombre = document.createElement("input");
  inputNombre.type = "text";
  inputNombre.placeholder = "Digite nombre";
  inputNombre.className = "form-control";
  inputNombre.name = "nombre";
  inputNombre.id = "nombre";
  inputNombre.pattern = "[A-Za-z]+";
  inputNombre.addEventListener("change", function () {
    const nombreInput: HTMLInputElement | null = document.getElementById("nombre") as HTMLInputElement;
    var valor = nombreInput.value.trim();
    var soloLetras = /^[A-Za-z]+$/.test(valor);
    if (!soloLetras) {
      alert("El campo nombre solo recibe letras");
      nombreInput.value = "";
    }
  });

  const inputApellidos = document.createElement("input");
  inputApellidos.type = "text";
  inputApellidos.placeholder = "Digite apellidos";
  inputApellidos.className = "form-control";
  inputApellidos.name = "apellido";
  inputApellidos.id = "apellido";
  inputApellidos.pattern = "^[A-Za-z]+$";
  inputApellidos.addEventListener("change", function () {
    const nombreInput: HTMLInputElement | null = document.getElementById("apellido") as HTMLInputElement;
    var valor = nombreInput.value.trim();
    var soloLetras = /^[A-Za-z]+$/.test(valor);
    if (!soloLetras) {
      alert("El campo apellido solo recibe letras");
      nombreInput.value = "";
    }
  });

  const inputTipodoc = document.createElement("select");
  const opciones: string[] = ["RC", "TI", "DE", "PA"];
  inputTipodoc.className = "form-control";
  inputTipodoc.name = "tipodocumento";
  inputTipodoc.id = "tipodocumento";
  opciones.forEach((opcion, index) => {
    const option = document.createElement("option");
    option.value = String(opcion); // Asigna un valor (puede ser diferente al texto visible)
    option.text = opcion; // Texto visible para la opción
    inputTipodoc.add(option);
  });

  const inputNumdoc = document.createElement("input");
  inputNumdoc.type = "text";
  inputNumdoc.placeholder = "Digite # documento";
  inputNumdoc.className = "form-control";
  inputNumdoc.name = "numdoc";
  inputNumdoc.id = "numdoc";
  inputNumdoc.pattern = "^[0-9]+$"
  inputNumdoc.addEventListener("change", function () {
    const nombreInput: HTMLInputElement | null = document.getElementById("numdoc") as HTMLInputElement;
    var valor = nombreInput.value.trim();
    var soloLetras =/^[0-9]+$/.test(valor);
    if (!soloLetras) {
      alert("El campo documento solo recibe numeros");
      nombreInput.value = "";
    }
  });

  const inputGrado = document.createElement("select");
  const opGrado: string[] = [
    "Primero - 1°",
    "Segundo - 2°",
    "Tercero - 3°",
    "Cuarto - 4°",
    "Quinto - 5°",
  ];
  inputGrado.className = "form-control";
  inputGrado.name = "grado";
  inputGrado.id = "grado";
  opGrado.forEach((opcion, index) => {
    const option = document.createElement("option");
    option.value = String(index + 1); // Asigna un valor (puede ser diferente al texto visible)
    option.text = opcion; // Texto visible para la opción
    inputGrado.add(option);
  });

  const inputFecNac = document.createElement("input");
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

  form.addEventListener("submit", (event) => {
    //Evitar el envio
    event.preventDefault();
  });
});