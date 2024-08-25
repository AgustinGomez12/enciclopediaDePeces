//Constante de el main Index
const mainIndex = document.getElementById("mainIndex")
//Constante de el main Index

//Constate de boton del ducumental
const btnDocu = document.getElementById("buttonDocumentales")
const btnDocu2 = document.getElementById("buttonDocumentales2")
const btnDocu3 = document.getElementById("buttonDocumentales3")
const btnDocu4 = document.getElementById("buttonDocumentales4")
//
//constante de informacion documentales
const informacionDocumentales = document.getElementById("informacionDocumentales")
const informacionDocumentales2 = document.getElementById("informacionDocumentales2")
const informacionDocumentales3 = document.getElementById("informacionDocumentales3")
const informacionDocumentales4 = document.getElementById("informacionDocumentales4")
//constante de informacion documentales
//Fuciones para llamar a la informacion de los documentales
function aparecerInformacion () {
btnDocu.addEventListener(`click`, () =>{
informacionDocumentales.style.display = "flex"
const cerraInfo = document.getElementById("cerraInfo")
function serrarInformacion () {
cerraInfo.addEventListener(`click`, () =>{
    informacionDocumentales.style.display = "none"
})
}serrarInformacion()

})
}aparecerInformacion()

//SEPARADOR ------------------

function aparecerInformacion2 (){
btnDocu2.addEventListener(`click`,()=>{
informacionDocumentales2.style.display = "flex"
const cerraInfo2 = document.getElementById("cerraInfo2")
function serrarInformacion () {
cerraInfo2.addEventListener(`click`, ()=>{
    informacionDocumentales2.style.display = "none"
})
}serrarInformacion()
})
}aparecerInformacion2()

//SEPARADOR ------------------

function aparecerInformacion3 (){
    btnDocu3.addEventListener(`click`,()=>{
    informacionDocumentales3.style.display = "flex"
    const cerraInfo3 = document.getElementById("cerraInfo3")
    function serrarInformacion () {
    cerraInfo3.addEventListener(`click`, ()=>{
        informacionDocumentales3.style.display = "none"
    })
    }serrarInformacion()
    })
    }aparecerInformacion3()

//SEPARADOR ------------------

function aparecerInformacion4 (){
    btnDocu4.addEventListener(`click`,()=>{
    informacionDocumentales4.style.display = "flex"
    const cerraInfo4 = document.getElementById("cerraInfo4")
    function serrarInformacion () {
    cerraInfo4.addEventListener(`click`, ()=>{
        informacionDocumentales4.style.display = "none"
    })
    }serrarInformacion()
    })
    }aparecerInformacion4()