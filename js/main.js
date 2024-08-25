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
function aparecerInformacion() {
    btnDocu.addEventListener(`click`, () => {
        informacionDocumentales.style.display = "flex"
        const cerraInfo = document.getElementById("cerraInfo")
        function serrarInformacion() {
            cerraInfo.addEventListener(`click`, () => {
                informacionDocumentales.style.display = "none"
            })
        } serrarInformacion()

    })
} aparecerInformacion()

//SEPARADOR ------------------

function aparecerInformacion2() {
    btnDocu2.addEventListener(`click`, () => {
        informacionDocumentales2.style.display = "flex"
        const cerraInfo2 = document.getElementById("cerraInfo2")
        function serrarInformacion() {
            cerraInfo2.addEventListener(`click`, () => {
                informacionDocumentales2.style.display = "none"
            })
        } serrarInformacion()
    })
} aparecerInformacion2()

//SEPARADOR ------------------

function aparecerInformacion3() {
    btnDocu3.addEventListener(`click`, () => {
        informacionDocumentales3.style.display = "flex"
        const cerraInfo3 = document.getElementById("cerraInfo3")
        function serrarInformacion() {
            cerraInfo3.addEventListener(`click`, () => {
                informacionDocumentales3.style.display = "none"
            })
        } serrarInformacion()
    })
} aparecerInformacion3()

//SEPARADOR ------------------

function aparecerInformacion4() {
    btnDocu4.addEventListener(`click`, () => {
        informacionDocumentales4.style.display = "flex"
        const cerraInfo4 = document.getElementById("cerraInfo4")
        function serrarInformacion() {
            cerraInfo4.addEventListener(`click`, () => {
                informacionDocumentales4.style.display = "none"
            })
        } serrarInformacion()
    })
} aparecerInformacion4()

//SEPARADOR ------------------

//FUNCION DEL BOTON PARA GENERAR CONTENIDO PECES ❗❕

//VARIABLE DEL BOTON PARA GENERAR PECES
const containerPez = document.getElementById("containerPez")
//VARIABLE DEL BOTON PARA GENERAR PECES

//VARIABLE DEL TEXTO DE INICIO
const textoDeIncio = document.getElementById("textoDeIncio")
//VARIABLE DEL TEXTO DE INICIO

//VARIABLE DEL TITULO DE NOTICIAS
const tituloDeNoticias = document.getElementById("tituloDeNoticias")
//VARIABLE DEL TITULO DE NOTICIAS

//CONTAINER DE NOTICIAS 
const containerDeNoticias = document.getElementById("ContainerDeNoticias")
//CONTAINER DE NOTICIAS

//VARIABLE DE VIDEOS INTERESANTES
const videosInteresantes = document.getElementById("videosInteresantes")
//VARIABLE DE VIDEOS INTERESANTES

//VARIABLE DE CONTENIDO EDUCATIVO TITULO
const contenidoEducativoTitulo = document.getElementById("contenidoEducativoTitulo")
//VARIABLE DE CONTENIDO EDUCATIVO TITULO

//VARIABLE DE CONTENIDO EDUCATIVO
const contenidoEducativo = document.getElementById("contenidoEducativo")
//VARIABLE DE CONTENIDO EDUCATIVO

//FUNCION PARA REMOVER CONTENIDO DE INCIO AL HACER CLICK PEZ
function contenidoPeces() {
    containerPez.addEventListener(`click`, () => {
        textoDeIncio.remove()
        tituloDeNoticias.remove()
        containerDeNoticias.remove()
        videosInteresantes.remove()
        contenidoEducativoTitulo.remove()
        contenidoEducativo.remove()
    })
} contenidoPeces()
//FUNCION PARA REMOVER CONTENIDO DE INCIO AL HACER CLICK PEZ

//FUNCION PARA GENERAR LA INFORMACION DE LOS PECES

//VARIABLES PARA GENERARA CONTENIDO EN PECES
const pecesDeAguaDulce = document.createElement("div")
const pecesDeAguaSalada = document.createElement("div")
const pecesExoticos = document.createElement("div")
const talasoFobia = document.createElement("div")
//VARIABLES PARA GENERARA CONTENIDO EN PECES
function generarContenidoPeces() {
    containerPez.addEventListener(`click`, () => {
        pecesDeAguaDulce.className = "container-aguaDulce"
        pecesDeAguaDulce.id = "containerAguaDulce"
        pecesDeAguaDulce.innerHTML = `<div class="titulo">
                                          <h2>PECES DE AGUA DULCE</h2>
                                          <nav>
                                            <figure>
                                                  <h2>Aguja de rio</h2>
                                                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Syngnathus_abaster_body_B.jpg" alt="">
                                            </figure>
                                            <figure>
                                                  <h2>Anguila Criolla</h2>
                                                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Synbranchus_cf_marmoratus.jpg/1024px-Synbranchus_cf_marmoratus.jpg" alt="">
                                            </figure>
                                            <figure>
                                                  <h2>Acaronia nassa</h2>
                                                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Acaronia_nassa.jpg" alt="">
                                            </figure>
                                            <figure>
                                                  <h2>Amblydoras nauticus</h2>
                                                  <img src="https://th.bing.com/th/id/OIP.n1i3NOc_1HJhQC1YaoLfWAHaE8?rs=1&pid=ImgDetMain" alt="">
                                            </figure>
                                            <figure>
                                                  <h2>Aplochiton taeniatus</h2>
                                                  <img src="https://th.bing.com/th/id/OIP.QYBI9neFHo981XxRZHFw5gHaFE?rs=1&pid=ImgDetMain" alt="">
                                            </figure>
                                            <figure>
                                                  <h2>Aplochiton zebra</h2>
                                                  <img src="https://th.bing.com/th/id/OIP.2wdvGfQLteS9GmxASl-bGgHaE7?rs=1&pid=ImgDetMain" alt="">
                                            </figure>
                                            <figure>
                                                  <h2>Arapaima</h2>
                                                  <img src="https://th.bing.com/th/id/R.14a10a9fbbd410fa958c95daf60ced91?rik=VkwDsUZa9%2fNJ9Q&pid=ImgRaw&r=0" alt="">
                                            </figure>
                                            <figure>
                                                  <h2>Anguilas</h2>
                                                  <img src="https://th.bing.com/th/id/OIP.Jd0d9Hb9GbPTaMu_FpHviQHaE6?rs=1&pid=ImgDetMain" alt="">
                                            </figure>
                                            <figure>
                                                  <h2>Arcoíris</h2>
                                                  <img src="https://th.bing.com/th/id/OIP.T4olE5N9J9tFCRmKK4yeUAHaE8?rs=1&pid=ImgDetMain" alt="">
                                            </figure>
                                            <figure>
                                                  <h2>Angel</h2>
                                                  <img src="https://th.bing.com/th/id/R.ead94dcd725a3af2dceed206795c0780?rik=lZUw6FBcywaf%2fg&pid=ImgRaw&r=0" alt="">
                                            </figure>
                                          </nav>
                                      </div>`
        pecesDeAguaSalada.className = "container-aguaSalada"
        pecesDeAguaSalada.id = "containerAguaSalada"
        pecesDeAguaSalada.innerHTML = `<div class="titulo">
                                           <h2>Peces de agua salada</h2>
                                       </div>`
        pecesExoticos.className = "container-pecesExoticos"
        pecesExoticos.id = "pecesExoticos"
        pecesExoticos.innerHTML = `<div class="titulo">
                                       <h2>Peces Exoticos</h2>
                                   </div>`
        talasoFobia.className = "container-talasoFobia"
        talasoFobia.id = "talasoFobia"
        talasoFobia.innerHTML = `<div class="titulo">
                                      <h2>Talaso fobia</h2>
                                 </div>`                                                                                            
    mainIndex.appendChild(pecesDeAguaDulce)
    mainIndex.appendChild(pecesDeAguaSalada)
    mainIndex.appendChild(pecesExoticos)
    mainIndex.appendChild(talasoFobia)                                
    })

}generarContenidoPeces()

