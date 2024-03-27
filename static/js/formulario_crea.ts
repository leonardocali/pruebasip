const app = document.getElementById("formulario-registro");
const app_act = document.getElementById("actualizar-estudiante");
const formulario = document.createElement("form") as HTMLFormElement;

const crearInputText = (textLabel: string, idInput: string, placeH: string) => {
  const labelCampoUno = document.createElement("label");
  labelCampoUno.className = "col-sm-2 col-form-label font-weight-bold";
  labelCampoUno.textContent = textLabel;
  labelCampoUno.htmlFor = idInput;
  const divformulario = document.createElement("div");
  divformulario.className = "form-group row input-text";
  const divformulario2 = document.createElement("div");
  divformulario2.className = "col-sm-10";
  const nuevoCampoTexto = document.createElement("input");
  nuevoCampoTexto.type = "text";
  nuevoCampoTexto.placeholder = placeH;
  nuevoCampoTexto.id = idInput;
  if (idInput ==='documentoE' || idInput ==='telecontactE'){
    nuevoCampoTexto.addEventListener('change', validaInputsNum)
  }
  else if (idInput === 'direresE'){
    nuevoCampoTexto.addEventListener('change', validaInputVarios)
  } 
  else{
    nuevoCampoTexto.addEventListener('change', validaInputsText)
  }
  nuevoCampoTexto.className = "form-control font-weight-light";
  divformulario2.appendChild(nuevoCampoTexto);
  divformulario.appendChild(labelCampoUno);
  divformulario.appendChild(divformulario2);

  return divformulario;
};

const crearInputFecha = (textLabel: string, idInput: string) => {
  const label = document.createElement("label");
  label.className = "col-sm-2 col-form-label font-weight-bold";
  label.textContent = textLabel;
  label.htmlFor = idInput;
  const div1 = document.createElement("div");
  div1.className = "form-group row input-text";
  const div2 = document.createElement("div");
  div2.className = "col-sm-10";
  const nuevoCampoTexto = document.createElement("input");
  nuevoCampoTexto.type = "date";
  nuevoCampoTexto.id = idInput;
  nuevoCampoTexto.className = "form-control font-weight-light";
  div2.appendChild(nuevoCampoTexto);
  div1.appendChild(label);
  div1.appendChild(div2);

  return div1;
};

const crearInputSelect = (opcLista:string[], idInput:string, labelInput:string) => {
  const opcionesLista = opcLista;
  const div1 = document.createElement("div");
  const label = document.createElement("label");
  label.className = "col-sm-2 col-form-label font-weight-bold";
  label.textContent = labelInput;
  label.htmlFor = idInput;
  div1.className = "form-group row input-text";
  const div2 = document.createElement("div");
  div2.className = "col-sm-10";
  const campotexto = document.createElement("select");
  if (idInput === 'listiposan' || idInput === 'tipodocE'){
    opcionesLista.forEach((elemen, index) => {
      const opcion = document.createElement("option");
      opcion.value = elemen;
      opcion.text = elemen;
      campotexto.options.add(opcion);
    });
  }else{
    opcionesLista.forEach((elemen, index) => {
      const opcion = document.createElement("option");
      opcion.value = (index + 1).toString();
      opcion.text = elemen;
      campotexto.options.add(opcion);
    });
  }
  campotexto.id = idInput;
  campotexto.className = "form-control font-weight-light";
  div2.appendChild(campotexto);
  div1.appendChild(label);
  div1.appendChild(div2);
  return div1;
};

//Input nombres
const nombreE = crearInputText("Nombres:","nombreE","Nombres del estudiante");

//Input apellidos
const apellidoE = crearInputText("Apellidos:","apellidoE","Apellidos del estudiante");

//Input tipo de documento
let listDocu = ["RC","TI","PA"];
const lisTipoDocuE = crearInputSelect(listDocu,"tipodocE","Tipo de documento:");

//Input numero de docummento
const numDocE = crearInputText("Número de documento:","documentoE","Digite el número del documento");

//Input fecha nacimiento
const fechaNacE = crearInputFecha("Fecha de nacimiento:","fechanace");

//Input edad estudiante
const edadE = crearInputText("Edad:","edadE","Se calcula al digitar la fecha de nacimiento");

//Input Lugar de Nacimiento
const lugarNacE = crearInputText("Lugar de nacimiento:","lugarNacE","Escriba la ciudad de nacimiento");

//Input curso a registrar
let tipoSan = ["A+","O+","B+","AB+","A-","O-","B-","AB-"];
const lisTipoSanE = crearInputSelect(tipoSan,"listiposan","Tipo de Sangre:");

//Input Direccion Residencia Estudiante
const dirResE = crearInputText("Dirección residencia:","direresE","Escriba la dirección donde vive actualmente");

//Input Lugar de Nacimiento
const telContE = crearInputText("Teléfono:","telecontactE","Escriba el número de contacto");

//Input curso a registrar
let cursos = ["Primero","Segundo","Tercero","Cuarto","Quinto"]
const listCursosE = crearInputSelect(cursos,"listagrados","Curso:");

//Titulo datos Padres
const titDatosPadres = document.createElement("h4");
titDatosPadres.textContent = "DATOS DE LOS PADRES";
const espacio = document.createElement("br");
//Datos de padres o acudientes
const inputNomP = crearInputText("Nombres:", "nombrep", "Nombres del papá");
const inputApeP = crearInputText("Apellidos:","apellidosp","Apellidos del papá");
const fecNaP = crearInputFecha("Fecha de nacimiento papá:","fechanacp");
const edadP = crearInputText("Edad:","edadP","Se calcula al digitar la fecha de nacimiento");
const ocupacionP = crearInputText("Ocupación:","ocupacionp","Escriba la ocupación actual");
const inputNomM = crearInputText("Nombres:", "nombrem", "Nombres de la mamá");
const inputApeM = crearInputText("Apellidos:","apellidosm","Apellidos de la mamá");
const fecNaM = crearInputFecha("Fecha de nacimiento mamá:","fechanacm");
const edadM = crearInputText("Edad:","edadM","Se calcula al digitar la fecha de nacimiento");
const ocupacionM = crearInputText("Ocupación:","ocupacionm","Escriba la ocupación actual");


const listaCampos = [
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
  ocupacionM
];

listaCampos.forEach((valor) => {
    formulario.appendChild(valor);
})

app?.appendChild(formulario);
app_act?.appendChild(formulario);

  //Manejar el evento de envio del formulario

  formulario.addEventListener("submit", (event) => {
    //Evitar el envio
    event.preventDefault();
  });

function validaInputsText(event: Event) {
  const target = event.target as HTMLInputElement;
  const id = target.id;
  const verificaInput: HTMLInputElement | null = document.getElementById(id) as HTMLInputElement;
  let valor = verificaInput.value.trim();
  let soloLetras = /^[A-Za-z\sñ]+$/.test(valor);
  if (!soloLetras) {
    alert("El campo solo acepta letras");
    verificaInput.value = "";
    verificaInput.classList.add('validaciones-campo-incorrecto');
  }
  else{
    verificaInput.classList.add('validaciones-campo-correcto');
    //verificaInput.style.backgroundColor='#fff';
  }
}

function validaInputsNum(event: Event) {
  const target = event.target as HTMLInputElement;
  const id = target.id;
  const verificaInput: HTMLInputElement | null = document.getElementById(id) as HTMLInputElement;
  let valor = verificaInput.value.trim();
  let soloLetras = /^[0-9]+$/.test(valor);
  if (!soloLetras) {
    alert("El campo solo recibe números");
    verificaInput.value = "";
    verificaInput.classList.add('validaciones-campo-incorrecto');
  }
  else{
    verificaInput.classList.add('validaciones-campo-correcto');
  }

}

function validaInputVarios(event: Event) {
  const target = event.target as HTMLInputElement;
  const id = target.id;
  const verificaInput: HTMLInputElement | null = document.getElementById(id) as HTMLInputElement;
  let valor = verificaInput.value.trim();
  let soloLetrasyEspeciales = /^[a-zA-Z0-9\s#\-&bsol;.]+$/.test(valor);
  if (!soloLetrasyEspeciales) {
    alert("El campo solo recibe caracteres especiales como ('#' , '-'  y '.')");
    verificaInput.value = "";
    verificaInput.classList.add('validaciones-campo-incorrecto');
  }
  else{
    verificaInput.classList.add('validaciones-campo-correcto');
  }

}