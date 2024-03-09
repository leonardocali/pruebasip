const nombreForm = document.querySelector('#nombre') as HTMLInputElement;
const apellidoForm = document.querySelector('#apellido') as HTMLInputElement;
const tipoDocuForm = document.querySelector('#tipo-documento') as HTMLSelectElement;
const numeroDocuForm = document.querySelector('#numero-documento') as HTMLInputElement;
const valoresForm = document.querySelector('#regEstForm') as HTMLFormElement;

valoresForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log(nombreForm.value,apellidoForm.value,tipoDocuForm.value,numeroDocuForm.value);
})


