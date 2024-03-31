import json

# ---- example index page ----
def index():
    return dict(titulo='Inicio de sesion')

def api_consultar_user_system():
    if request.method == 'POST':  # Verifica que la solicitud sea de tipo POST
        # Obtén los datos enviados en la solicitud POST
        try:
            datos = json.loads(request.body.read())
        except ValueError:
            raise HTTP(400, "Bad Request: Datos JSON inválidos")
        # Consulta del usuario del sistema en la BD
        usuario = datos['usuario']
        contra = datos['passUser']
        registro = db((db.user_system.usuario == usuario) & (db.user_system.password == contra)).select()
        if len(registro) == 0:
            return response.json({"mensaje": 0})
        else:
           return response.json({"mensaje": 1})
    else:
        # Maneja la posibilidad de que la solicitud no sea POST
        raise HTTP(400, "Solicitud incorrecta de consulta")
    
def vistaEstudiantes():
    return dict(mensajeTitle='Registro Estudiantes')

#Api para realizar validacion y guardar datos en BD
def api_guardar_datos():
   # Asegúrate de que la solicitud sea de tipo POST
    if request.env.request_method != 'POST':
        raise HTTP(400, "Bad Request: Se espera una solicitud POST")
    # Lee los datos del cuerpo de la solicitud POST (en formato JSON)
    try:
        datos = json.loads(request.body.read())
        posicion = 0

        for clave in datos:
            posicion +=1
            valor = datos[clave]
            if valor == '':
                return response.json({"mensaje": 1,"posicion":posicion})
        else:
            existe = db((db.estudiantes.numerodocest == datos['numerodocest'])&(db.estudiantes.tipodoc == datos['tipodoc'])).select()
            if(len(existe)>1):
                return response.json({"mensaje": 'existe', 'tipodoc': datos['tipodoc'], 'numerodoc': datos['numerodocest']})
            else:
                db.estudiantes.insert(**datos)
                return response.json({"mensaje": 'OK'})
    except ValueError:
        raise HTTP(400, "Bad Request: Datos JSON inválidos")


    
   
def actualizar_datos():
    return dict(message1="Actualización Estudiante")

def api_consultar_datos_estudiante():
    if request.method == 'POST':  # Verifica que la solicitud sea de tipo POST
        # Obtén los datos enviados en la solicitud POST
        try:
            datos = json.loads(request.body.read())
        except ValueError:
            raise HTTP(400, "Bad Request: Datos JSON inválidos")
        # Consulta del estudiante en la BD
        registro = db(db.estudiantes.numerodocest == datos).select()
        if len(registro) == 0:
            return response.json({"mensaje": 0})
        else:
            return response.json({"mensaje": registro})
    else:
        # Maneja la posibilidad de que la solicitud no sea POST
        raise HTTP(400, "Solicitud incorrecta de consulta")

def api_actualizar_datos_estudiante():
    if request.method == 'POST':  # Verifica que la solicitud sea de tipo POST
        # Obtén los datos enviados en la solicitud POST
        try:
            datos = json.loads(request.body.read())
        except ValueError:
            raise HTTP(400, "Bad Request: Datos JSON inválidos")
        #Valida los campos si estan vacios
        posicion = 0

        for clave in datos[0]:
            posicion +=1
            valor = datos[0][clave]
            if valor == '':
                return response.json({"mensaje": 1,"posicion":posicion})
        # Actuliza datos del estudiante en la BD por su ID
        actualizacion = db.estudiantes(int(datos[1])).update_record(**datos[0])
        if actualizacion :
           return response.json({"mensaje":2}) 
        else:
            return response.json({"mensaje":3}) 
        #return response.json({"mensaje": registro})
    else:
        # Maneja la posibilidad de que la solicitud no sea POST
        raise HTTP(400, "Solicitud incorrecta de consulta")

def estudiantes():
    grid = db().select(db.estudiantes.id, db.estudiantes.nombres, db.estudiantes.apellidos, db.estudiantes.tipodoc, db.estudiantes.numerodocest, db.estudiantes.grado, db.estudiantes.fecnacest, db.estudiantes.edadest, db.estudiantes.tiposanest, db.estudiantes.direstudiante, db.estudiantes.telest)
    return dict(grid=grid)

def admin_salon():

    grid = SQLFORM.grid(db.salon, 
                        user_signature=False,  
                        searchable=False,  # Permite búsqueda en la tabla
                        paginate=10,  # Número de registros por página
                        deletable=True,  # Permite eliminar registros
                        editable=True,  # Permite editar registros
                        create=True,  # Permite crear nuevos registros
                        csv=False,  # Deshabilita la exportación CSV
                        details=True, # Deshabilita la vista de detalles
                        )  
    return dict(datos=grid)

def admin_materia():

    grid = SQLFORM.grid(db.materias, 
                        user_signature=False,  
                        searchable=False,  # Permite búsqueda en la tabla
                        paginate=10,  # Número de registros por página
                        deletable=True,  # Permite eliminar registros
                        editable=True,  # Permite editar registros
                        create=True,  # Permite crear nuevos registros
                        csv=False,  # Deshabilita la exportación CSV
                        details=True, # Deshabilita la vista de detalles
                        )  
    return dict(datos=grid)