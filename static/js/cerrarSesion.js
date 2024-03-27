const cierraSesion = document.getElementById("cerrar-sesion");

if(cierraSesion == null){
    console.log("")
}else{
  cierraSesion.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:8000/sge_prueba";
    let valorCookies= document.cookie
    console.log(valorCookies)
    window.close();
  });
}
