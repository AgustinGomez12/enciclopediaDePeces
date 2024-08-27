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
const generarNavPeces = document.createElement("div")
//VARIABLES PARA GENERARA CONTENIDO EN PECES
function generarContenidoPeces() {
    generarNavPeces.className = "navbar-peces"
    generarNavPeces.id = "navbarPeces"
    generarNavPeces.innerHTML = `<div class="container-buscador">
                                     <input type="search" placeholder="Buscar por nombre🔍" name="buscadorPesces" id="buscadorP">
                                     <button class="btnBuscarP">Buscar</button>
                                </div>` +
                                `<nav class="container-wikiPeces">
                                 <ul class="container-aguaDulce">
                                    <h2>
                                        Peces de agua Dulce 
                                    </h2>

                                    <li>
                                    <a href="">
                                        Goldfish.                                    
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Pez betta.                                    
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Guppy.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Tetra neón.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Pez Ángel.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Corydoras.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Tetra.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Tetra azul.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Barbo Rosado.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Pez arcoiris.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Pez cebra.
                                    </a>
                                    </li>
                                    
                                    <li>
                                    <a href="">
                                        Pez killis. 
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Pez espiga.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Pez gato.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Pez globo.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Piraña.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Pez lucio.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Pez arowana.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Pez cuchilla negra.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Paiche.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Pez espiga.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Dorado.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Siluro.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Arowana amazónica.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Acara azul.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Perca americana.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        pez dragón africano.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                         Pez tigre goliat.
                                    </a>
                                    </li>
                                 </ul>
                                 
                                 <ul class="container-aguaSalada">
                                    <h2>
                                        Peces de agua salada. 
                                    </h2>

                                    <li>
                                    <a href="">
                                         Pez payaso.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                         Pez cirujano.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                         Pez dardo.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                         Pez navaja.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                         Pez mandibula azul.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                         Damiselas.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                         Estrellas de mar.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                         Cirujano amarillo.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                         Pez pez Unicornio.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                       Atún blanco.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                       Barracuda.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                       Tiburón.
                                    </a>
                                    </li>
                                    
                                    <li>
                                    <a href="">
                                       Pez ángel (agua salada). 
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                       Gobios.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                       pez mariposa.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Pez ángel emperador.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Pez mandarín.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Pez lábrido.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Dottyback.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Gobio payaso.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Pez Halcón.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Pez Cardenal.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Chromis verde.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Blenny bicolor.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Delfin.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Mantarraya.
                                    </a>
                                    </li>
                                 </ul>

                                 <ul class="Invertebrados">
                                  <h2>
                                       Peces de agua salada 
                                  </h2>

                                  <li>
                                    <a href="">
                                       Pulpo.
                                    </a>
                                  </li>

                                   <li>
                                    <a href="">
                                        Calamar.
                                    </a>
                                    </li>

                                     <li>
                                    <a href="">
                                        Medusa.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Cangrejo.
                                    </a>
                                    </li>
                                 </ul>

                                 <ul class="reptiles">
                                 <h2>
                                     Reptiles
                                 </h2>

                                   <li>
                                    <a href="">
                                        Cocodrilos.
                                    </a>
                                    </li>

                                     <li>
                                    <a href="">
                                        Tortugas.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Serpientes acuaticas.
                                    </a>
                                    </li>

                                    <li>
                                    <a href="">
                                        Igunas acuaticas.
                                    </a>
                                    </li>
                                 </ul>
                             </nav>`
    mainIndex.appendChild(generarNavPeces)

} generarContenidoPeces()

//FUNCION PARA GENERAR LA INFORMACION DE LOS PECES


