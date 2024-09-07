//variables para interaccion documentales
const headerDocumentales = document.getElementById("headerDocumentales")
const botonDesplegarMenu = document.getElementById("botonDesplegarMenu")
//variables para interaccion documentales

//FUNCION PARA DESPLEGAR MENU
function desplegarMenu () {
    botonDesplegarMenu.addEventListener(`click`, ()=>{
        headerDocumentales.style.height = "70px"
    
    })
}desplegarMenu()
//FUNCION PARA DESPLEGAR MENU

