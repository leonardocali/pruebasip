function guardarDatosFormulario() {
    var datos = {
      nombres: $('#nombreE').val(),
      apellidos: $('#apellidoE').val(),
      tipodoc: $('#tipodocE').val(),
      numerodoc: $('#documentoE').val(),
      grado: $('#listagrados').val(),
      fecnacest: $('#fechanace').val(),
      nombrepadre: $('#nombrep').val()
    }

    var valCampos = {
      nombres: [$('#nombreE').val(), '#nombreE'],
      apellidos: [$('#apellidoE').val(), '#apellidoE' ],
      tipodoc: [$('#tipodocE').val(), '#tipodocE'],
      numerodoc: [$('#documentoE').val(), '#documentoE'],
      grado: [$('#listagrados').val(),'#listagrados'],
      fecnacest: [$('#fechanace').val(),'#fechanace'],
    }

    for (const evaluar in valCampos){
        if(valCampos[evaluar][0] != ''){
          $(valCampos[evaluar][1]).css('border','1px solid #ced4da');
        }
    }

    var responEstudiantes = {
      campo_1: ['Nombres', '#nombreE'],
      campo_2: ['Apellidos del estudiante', '#apellidoE'],
      campo_4: ['Numero de documento del estudiante','#documentoE'],
      campo_6: ['Fecha de nacimiento del estudiante','#fechanace']
    }

    console.log(datos);
    // Realizar la solicitud AJAX al API
    $.ajax({
        url: 'http://127.0.0.1:8000/sge_prueba/default/api_guardar_datos}',
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
