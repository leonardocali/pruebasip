document.addEventListener('DOMContentLoaded', ()=>{
    let titulos = document.querySelectorAll('span[title]')
    //console.log(titulos[0].closest('a').className === 'button btn btn-default btn-secondary')
    titulos.forEach(function(titulo) {
        let tagetA = titulo.closest('a')
        if(tagetA){
            console.log("Si esta en una etiqueta a")
            if (titulo.getAttribute('title') === 'Add record to database') {
                tagetA.className = 'btn btn-primary'
                titulo.textContent = 'Adicionar registro'
            }
            if (titulo.getAttribute('title') === 'Edit') {
                tagetA.className = 'btn btn-success'
                titulo.textContent = 'Editar registro'
             }
             
            if (titulo.getAttribute('title') === 'Delete') {
                tagetA.className = 'btn btn-danger'
                titulo.textContent = 'Eliminar registro'
            }
            if (titulo.getAttribute('title') === 'Vista') {
                tagetA.className = 'btn btn-info'
            }
            if (titulo.getAttribute('title') === 'Back') {
                titulo.textContent = 'Devolver'
                tagetA.className = 'btn btn-dark'
             }
        }
    });
})