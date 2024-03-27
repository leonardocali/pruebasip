document.addEventListener('DOMContentLoaded', () =>{
  $('#edadE, #edadM, #edadP').prop('disabled', true)
  const boton = document.getElementById('boton-guarda-formulario')
  boton.addEventListener('click', guardarDatosFormulario)

  document.getElementById("fechanace").addEventListener("change", function(event) {
    var idDelElemento = event.target.id;
    calculaYear(idDelElemento)
    console.log("El ID del elemento es: " + idDelElemento);
  });

  document.getElementById("fechanacp").addEventListener("change", function(event) {
    var idDelElemento = event.target.id;
    calculaYear(idDelElemento)
    console.log("El ID del elemento es: " + idDelElemento);
  });

  document.getElementById("fechanacm").addEventListener("change", function(event) {
    var idDelElemento = event.target.id;
    calculaYear(idDelElemento)
    console.log("El ID del elemento es: " + idDelElemento);
  });

  function calculaYear(id) {
    const datosfechas = {
      fechanace:'edadE',
      fechanacp:'edadP',
      fechanacm:'edadM'
    }

    if (id==='fechanace' || id==='fechanacp' || id==='fechanacm'){
      for(let val in datosfechas){
        if(val == id) {
          let valorFecha = $('#'+id).val()
          var fechaInicial = new Date(valorFecha);
          var fechaFinal = new Date(); // Fecha actual
            // Calcular la diferencia en milisegundos
          var diferenciaEnMilisegundos = fechaFinal.getTime() - fechaInicial.getTime();
            // Convertir la diferencia en milisegundos a días
          var milisegundosEnUnDia = 1000 * 60 * 60 * 24;
          var diferenciaEnDias = diferenciaEnMilisegundos / milisegundosEnUnDia;
            // Calcular años
          var anos = Math.floor(diferenciaEnDias / 365.25);
          $('#'+datosfechas[val]).val(anos)
        }
      }
    }
  }
})

function guardarDatosFormulario() {
    const datos = {
      nombres: $('#nombreE').val(),
      apellidos: $('#apellidoE').val(),
      tipodoc: $('#tipodocE').val(),
      numerodoc: $('#documentoE').val(),
      fecnacest: $('#fechanace').val(),
      lugarnacest: $('#lugarNacE').val(),
      edadest: $('#edadE').val(),
      tiposanest: $('#listiposan').val(),
      direstudiante: $('#direresE').val(),
      telest: $('#telecontactE').val(),
      grado: $('#listagrados').val(),
      nombrepadre: $('#nombrep').val(),
      apepadre:$('#apellidosp').val(),
      fecnacp:$('#fechanacp').val(),
      edadp:$('#edadP').val(),
      ocupacionp:$('#ocupacionp').val(),
      nombrem:$('#nombrem').val(),
      apem:$('#apellidosm').val(),
      fecnacm:$('#fechanacm').val(),
      edadm:$('#edadM').val(),
      ocupacionm:$('#ocupacionm').val(),
    }

    const valCampos = {
      nombres: [$('#nombreE').val(), '#nombreE'],
      apellidos: [$('#apellidoE').val(), '#apellidoE' ],
      tipodoc: [$('#tipodocE').val(), '#tipodocE'],
      numerodoc: [$('#documentoE').val(), '#documentoE'],
      grado: [$('#listagrados').val(),'#listagrados'],
      fecnacest: [$('#fechanace').val(),'#fechanace'],
      lugarnacest: [$('#lugarNacE').val(), '#lugarNacE'],
      edadest: [$('#edadE').val(),'#edadE'],
      tiposanest: [$('#listiposan').val(),'#listiposan'],
      direstudiante: [$('#direresE').val(),'#direresE'],
      telest: [$('#telecontactE').val(),'#telecontactE'],
      grado: [$('#listagrados').val(),'#listagrados'],
      nombrepadre: [$('#nombrep').val(),'#nombrep'],
      apepadre: [$('#apellidosp').val(),'#apellidosp'],
      fecnacp: [$('#fechanacp').val(),'#fechanacp'],
      edadp: [$('#edadP').val(),'#edadP'],
      ocupacionp: [$('#ocupacionp').val(),'#ocupacionp'],
      nombrem: [$('#nombrem').val(),'#nombrem'],
      apem: [$('#apellidosm').val(),'#apellidosm'],
      fecnacm: [$('#fechanacm').val(),'#fechanacm'],
      edadm: [$('#edadM').val(),'#edadM'],
      ocupacionm: [$('#ocupacionm').val(),'#ocupacionm']
    }

    for (const evaluar in valCampos){
        if(valCampos[evaluar][0] != ''){
          $(valCampos[evaluar][1]).css('border','1px solid #ced4da');
        }
    }

    const responEstudiantes = {
      campo_1: ['nombres', '#nombreE'],
      campo_2: ['apellidos del estudiante', '#apellidoE'],
      campo_4: ['número de documento del estudiante','#documentoE'],
      campo_5: ['fecha de nacimiento del estudiante','#fechanace'],
      campo_6: ['lugar de nacimiento del estudiante','#lugarNacE'],
      campo_7: ['edad del estudiante','#edadE'],
      campo_9: ['dirección residencia estudiante','#direresE'],
      campo_10: ['teléfono del estudiante','#telecontactE'],
      campo_12: ['nombres del padre','#nombrep'],
      campo_13: ['apellidos del padre','#apellidosp'],
      campo_14: ['fecha del pare','#fechanacp'],
      campo_15: ['edad del padre','#edadP'],
      campo_16: ['ocupación del padre','#ocupacionp'],
      campo_17: ['nombres de la madre','#nombrem'],
      campo_18: ['apellidos del madre','#apellidosm'],
      campo_19: ['fecha de nacimiento de la madre','#fechanacm'],
      campo_20: ['edad de la madre','#edadM'],
      campo_21: ['ocupación de la madre','#ocupacionm'],
    }
    
    console.log(datos);
        
    // Realizar la solicitud AJAX al API
    $.ajax({
        url: 'http://127.0.0.1:8000/sge_prueba/default/api_guardar_datos',
        contentType: 'application/json; charset=utf-8',
        type: 'POST',
        data: JSON.stringify(datos),
        dataType: "json",
        success: function(response) {
            if(response.mensaje == 1){
              console.log('campo_'+response.posicion)
              if('campo_'+response.posicion in responEstudiantes){
                id = responEstudiantes['campo_'+response.posicion][1];
                msj = "Por favor valida que el campo "+ responEstudiantes['campo_'+response.posicion][0] + " esta vacio";
                $(id).css('border','3px solid red');
                alert(msj);
              }
            }
            else{
              alert('Datos guardados con éxito');
              location.reload();
            }
        },
        error: function(xhr, status, error) {
            alert('Error al guardar datos: ' + xhr.responseText);
        }
    });
}