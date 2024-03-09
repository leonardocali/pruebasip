# -*- coding: utf-8 -*-
# -------------------------------------------------------------------------
# This is a sample controller
# this file is released under public domain and you can use without limitations
# -------------------------------------------------------------------------
import json
# ---- example index page ----
def index():
    return dict(message="REGISTRO ESTUDIANTES")

def api_register_student():
    
    #API para el registro de estudiantes.
    
    response.headers['Content-Type'] = 'application/json'

    # Obtener datos de la solicitud
    data = json.loads(request.body.read().decode('utf-8'))

    # Validar los datos (puedes agregar más validaciones según tus necesidades)
    if 'nombres' not in data or 'apellidos' not in data or 'tipodoc' not in data or 'numerodoc' not in data:
        return json.dumps({"error": "Datos incompletos"})

    # Crear el estudiante en la base de datos
    student_id = db.estudiante.insert(nombres=data['nombres'], apellidos=data['apellidos'], tipodoc=data['tipodoc'], numerodoc=data['numerodoc'])

    # Respuesta exitosa
    return json.dumps({"success": True, "student_id": "student_id"})

# ---- API (example) -----
@auth.requires_login()
def api_get_user_email():
    if not request.env.request_method == 'GET': raise HTTP(403)
    return response.json({'status':'success', 'email':auth.user.email})

# ---- Smart Grid (example) -----
@auth.requires_membership('admin') # can only be accessed by members of admin groupd
def grid():
    response.view = 'generic.html' # use a generic view
    tablename = request.args(0)
    if not tablename in db.tables: raise HTTP(403)
    grid = SQLFORM.smartgrid(db[tablename], args=[tablename], deletable=False, editable=False)
    return dict(grid=grid)

# ---- Embedded wiki (example) ----
def wiki():
    auth.wikimenu() # add the wiki to the menu
    return auth.wiki() 

# ---- Action for login/register/etc (required for auth) -----
def user():
    """
    exposes:
    http://..../[app]/default/user/login
    http://..../[app]/default/user/logout
    http://..../[app]/default/user/register
    http://..../[app]/default/user/profile
    http://..../[app]/default/user/retrieve_password
    http://..../[app]/default/user/change_password
    http://..../[app]/default/user/bulk_register
    use @auth.requires_login()
        @auth.requires_membership('group name')
        @auth.requires_permission('read','table name',record_id)
    to decorate functions that need access control
    also notice there is http://..../[app]/appadmin/manage/auth to allow administrator to manage users
    """
    return dict(form=auth())

# ---- action to server uploaded static content (required) ---
@cache.action()
def download():
    """
    allows downloading of uploaded files
    http://..../[app]/default/download/[filename]
    """
    return response.download(request, db)

