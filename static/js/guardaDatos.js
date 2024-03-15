function guardarDatos() {
    var datos = {
      nombres: $('#nombre').val(),
      apellidos: $('#apellido').val(),
      tipodoc: $('#tipodocumento').val(),
      numerodoc: $('#numdoc').val(),
      grado: $('#grado').val(),
      fecnacest: $('#fecnacest').val(),
    }

    var valCampos = {
      nombres: [$('#nombre').val(), '#nombre'],
      apellidos: [$('#apellido').val(), '#apellido' ],
      tipodoc: [$('#tipodocumento').val(), '#tipodocumento'],
      numerodoc: [$('#numdoc').val(), '#numdoc'],
      grado: [$('#grado').val(),'#grado'],
      fecnacest: [$('#fecnacest').val(),'#fecnacest'],
    }

    for (const evaluar in valCampos){
        if(valCampos[evaluar][0] != ''){
          $(valCampos[evaluar][1]).css('border','1px solid #ced4da');
        }
    }

    var responEstudiantes = {
      campo_1: ['Nombres', '#nombre'],
      campo_2: ['Apellidos del estudiante', '#apellido'],
      campo_4: ['Numero de documento del estudiante','#numdoc'],
      campo_6: ['Fecha de nacimiento del estudiante','#fecnacest']
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
              $('#nombre').val('');
              $('#apellido').val('');
              $('#numdoc').val('');
              $('#fecnacest').val('');
            }
        },
        error: function(xhr, status, error) {
            alert('Error al guardar datos: ' + xhr.responseText);
        }
    });
}