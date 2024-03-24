import json

# ---- example index page ----
def index():
    return dict(message1="Registro Estudiantes")

#Api para realizar validacion y guardar datos en BD
def api_guardar_datos():
   # Asegúrate de que la solicitud sea de tipo POST
    if request.env.request_method != 'POST':
        raise HTTP(400, "Bad Request: Se espera una solicitud POST")
    # Lee los datos del cuerpo de la solicitud POST (en formato JSON)
    try:
        datos = json.loads(request.body.read())
    except ValueError:
        raise HTTP(400, "Bad Request: Datos JSON inválidos")

    # Aquí puedes procesar y guardar los datos según tus necesidades
    # Por ejemplo, guardarlos en una base de datos
    posicion = 0

    for clave in datos:
        posicion +=1
        valor = datos[clave]
        if valor == '':
            return response.json({"mensaje": 1,"posicion":posicion})
    else:
        db.estudiantes.insert(**datos)
        return response.json({"mensaje": "Datos guardados exitosamente"})
   
def actualizar_datos():
    return dict(message1="Actualizacion Estudiante")

def api_consultar_datos_estudiante():
    if request.method == 'POST':  # Verifica que la solicitud sea de tipo POST
        # Obtén los datos enviados en la solicitud POST
        try:
            datos = json.loads(request.body.read())
        except ValueError:
            raise HTTP(400, "Bad Request: Datos JSON inválidos")
        # Consulta del estudiante en la BD
        registro = db(db.estudiantes.numerodoc == datos).select()
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