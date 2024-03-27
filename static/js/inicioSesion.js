document.addEventListener('DOMContentLoaded', ()=>{
    const boton = document.getElementById('boton-sesion')
    boton.addEventListener("click", (event) => {
        event.preventDefault()
    })
})

function validacionSesion(){

    let usuario = $('#usuario').val()
    let passUser = $('#passUser').val()

    const datos = {
        usuario,
        passUser
    }

    if(datos.usuario === '' && datos.passUser === ''){
        alert("Campos usuario y contraseña vacios");
    }
    else if(datos.usuario==='' || datos.passUser === '' ){
            datos.usuario === '' ? alert("Campo usuario vacio"): alert("Campo contraseña vacio")
         }
    else{
    
        $.ajax({
            url: 'http://127.0.0.1:8000/sge_prueba/default/api_consultar_user_system',
            contentType: 'application/json; charset=utf-8',
            type: 'POST',
            data: JSON.stringify(datos),
            dataType: "json",
            success: function(response) {
                if(response.mensaje == 0){
                    $('#modal-usuario').modal("show")
                    //alert('Usuario no existe en BD, por favor validar')
                }
                else{
                    window.location.href = "http://127.0.0.1:8000/sge_prueba/default/vistaEstudiantes";
                } 
            },
            error: function(xhr, status, error) {
                alert('Error al consultar el usuario: ' + xhr.responseText + "error: " + error);
            }
        });
    }     
}