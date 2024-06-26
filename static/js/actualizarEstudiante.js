document.addEventListener('DOMContentLoaded',()=>{
    $("#edadE, #edadP, #edadM").prop("disabled", true)
    const btnEfoca = document.querySelector('#buscaEstudiante')
    btnEfoca.focus()
})

document.getElementById('botonBuscarEst').addEventListener('click', function(event) {
    // Prevenir el comportamiento predeterminado del envío del formulario
    event.preventDefault();
    // Caputrar datos del campo documento
    let documentoEst = document.getElementById('buscaEstudiante').value;
        
    //Datos para llenar el formulario
    const valCampos = {
        nombres: [$('#nombreE').val(), '#nombreE'],
        apellidos: [$('#apellidoE').val(), '#apellidoE' ],
        tipodoc: [$('#tipodocE').val(), '#tipodocE'],
        numerodocest: [$('#documentoE').val(), '#documentoE'],
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
        numerodocp: [$('#numerodocP').val(),'#numerodocP'],
        fecnacp: [$('#fechanacp').val(),'#fechanacp'],
        edadp: [$('#edadP').val(),'#edadP'],
        ocupacionp: [$('#ocupacionp').val(),'#ocupacionp'],
        nombrem: [$('#nombrem').val(),'#nombrem'],
        apem: [$('#apellidosm').val(),'#apellidosm'],
        numerodocm: [$('#numerodocM').val(),'#numerodocM'],
        fecnacm: [$('#fechanacm').val(),'#fechanacm'],
        edadm: [$('#edadM').val(),'#edadM'],
        ocupacionm: [$('#ocupacionm').val(),'#ocupacionm']
      }
    // Enviar el dato del formulario a través de una solicitud AJAX
    $.ajax({
        url: 'http://127.0.0.1:8000/sge_prueba/default/api_consultar_datos_estudiante',
        contentType: 'application/json; charset=utf-8',
        type: 'POST',
        data: JSON.stringify(documentoEst),
        dataType: "json",
        success: function(response) {
            if(response.mensaje === 0){
                alert("Sin datos para el documento " + documentoEst)
            }
            else{
                let muestraDiv = document.getElementById('actualizar-estudiante')
                let ocultaDiv = document.getElementById('busca-estudiante')
                muestraDiv.style.visibility = 'visible'
                muestraDiv.style.border = 'none'
                ocultaDiv.style.display = 'none'
                for(let elemento in response.mensaje[0]){
                    //console.log(`Campo ${elemento} : ${response.mensaje[0][elemento]}`)
                    if (elemento === 'id'){
                        $('#idestudiante').val(response.mensaje[0][elemento])
                    } 
                    for(let valida in valCampos){
                        if(valida === elemento){
                            //console.log(valCampos[valida][1])
                            $(valCampos[valida][1]).val(response.mensaje[0][elemento])
                        }
                    }
                }   
            } 
        },
        error: function(xhr, status, error) {
            alert('Error al guardar datos: ' + xhr.responseText);
        }
    });
});

function actualizarDatosEstudiante() {

    const idEst = $('#idestudiante').val()

    const datos = [{  
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
    }, idEst]
    
    
    //console.log(datos)

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

    //console.log(datos);
    // Realizar la solicitud AJAX al API
    $.ajax({
        url: 'http://127.0.0.1:8000/sge_prueba/default/api_actualizar_datos_estudiante',
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
            else if(response.mensaje===2){
                alert("Se actualizaron los datos correctamente")
                window.location.reload()
            }
            else{alert("No se pudo actualizar la información")}
        },
        error: function(xhr, status, error) {
            alert('Error al guardar datos: ' + xhr.responseText);
        }
    });
}