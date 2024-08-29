//Constante de el main Index
const mainIndex = document.getElementById("mainIndex")
//Constante de el main Index

//FUNCION PARA RECUPERAR INDEX
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
const tituloEdu = document.getElementById("tituloEdu")
//VARIABLE DE CONTENIDO EDUCATIVO TITULO

//VARIABLE DE CONTENIDO EDUCATIVO
const contenidoEducativo = document.getElementById("contenidoEducativo")
//VARIABLE DE CONTENIDO EDUCATIVO

//FUNCION PARA REMOVER CONTENIDO DE INCIO AL HACER CLICK PEZ
function contenidoPeces() {
    containerPez.addEventListener(`click`, () => {
      const conctacua = document.getElementById("contenidoDeAcuariosId")
      conctacua.style.display = `none`   
      navbarPeces.style.display = "flex"
      textoDeIncio.style.display = "none"
      tituloDeNoticias.style.display = "none"
      containerDeNoticias.style.display = "none"
      videosInteresantes.style.display = "none"
      tituloEdu.style.display = "none"
      contenidoEducativo.style.display = "none" 
    })
} contenidoPeces()
//FUNCION PARA REMOVER CONTENIDO DE INCIO AL HACER CLICK PEZ

//FUNCION PARA GENERAR LA INFORMACION DE LOS PECES

//VARIABLES PARA GENERARA CONTENIDO EN PECES
const generarNavPeces = document.createElement("div")
const pulpito = document.getElementById("pulpito")
//VARIABLES PARA GENERARA CONTENIDO EN PECES
function generarContenidoPeces() {
    generarNavPeces.className = "navbar-peces"
    generarNavPeces.id = "navbarPeces"
    generarNavPeces.innerHTML = `<div class="container-buscador" id="containerBuscador">
                                     <input type="search" placeholder="Buscar por nombre🔍" name="buscadorPesces" id="buscadorP">
                                     <button class="btnBuscarP">Buscar</button>
                                </div>` +
                                `<div class="Introduccion-peces">
                                    <p>
                                       En esta seccion encotraras contenido sobre peces,reptiles y invertebrados.
                                       En cada uno de los enlaces habra un breve resumen de especies,catalogacion
                                       y nivel de dificultad a la hora de mantener la especie en cautiverio,muchas de
                                       estas especies saldran como no recomendadas para dicha practica.
                                       (Si buscas un pez en especifico puedes usar el buscador).
                                    </p>
                                </div>`+
                                `<nav class="container-wikiPeces">
                                 <ul class="container-aguaDulce">
                                    <h2>
                                        Peces de agua Dulce. 
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
                                       Invertebrados. 
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
                                     Reptiles.
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
                             </nav>` +

                             `<div class="explicacion-aguaDulce">
                                 <h2>
                                    Peces de agua dulce
                                 </h2>
                                 <p>
                                    Los  peces de agua dulce son aquellos que viven en cuerpos de agua con baja salinidad, como ríos, lagos y estanques. 
                                    Los parametros de estos peces varian de una especie a la otra. En cautividad suelen ser peces menos exigentes
                                    que los de agua salada.
                                 </p>
                             </div>` +

                             `<div class="explicacion-aguaSalada">
                             <h2>
                                Peces de agua salada
                             </h2>
                             <p>
                                Los peces de agua salada existen en una gran variedad de colores y formas.
                                Estos peces tienen necesidades específicas en cuanto a la salinidad del agua, temperatura y alimentación.
                                Son unos peces muy desafiantes en cautividad.
                             </p>
                             </div>` +

                             
                             `<div class="Reptiles-acuaticos">
                             <h2>
                                Reptiles acuaticos
                             </h2>
                             <p>
                                Son reptiles adaptados a el agua, estos reptiles tienen adaptaciones especiliales,
                                que les permiten vivir en el agua,como respiraciòn eficiente bajo el agua y mecanismos para 
                                expulsar el exceso de sal en caso de los reptiles marinos.
                             </p>
                             </div>` +

                                
                             `<div class="Invertebrados-acuaticos">
                             <h2>
                                Invertebrados acuaticos
                             </h2>
                             <p>
                                Son aquellos aquellos animales que vivien en el agua y no tienen columna vertebral.
                                Tienen adaptaciones ùnicas para sovrevivir en sus entornos acuàticos,como camuflarse,
                                exoesquleto protectores.
                             </p>
                             </div>` 

    mainIndex.appendChild(generarNavPeces)
}generarContenidoPeces()

//FUNCION PARA GENERAR LA INFORMACION DE LOS PECES

//FUNCION PARA GENERAR ACUARIOS

//VARIABLES PARA GENERAR ACUARIOS
const containerAcuario = document.getElementById("containerAcuario")
const navbarPeces = document.getElementById("navbarPeces")
//VARIABLES PARA GENERAR ACUARIOS


function generarAcuarios () {
containerAcuario.addEventListener(`click`,()=>{ 
    const conctacua = document.getElementById("contenidoDeAcuariosId")
    generarNavPeces.style.display = `none`
    textoDeIncio.style.display = "none"
    tituloDeNoticias.style.display = "none"
    containerDeNoticias.style.display = "none"
    videosInteresantes.style.display = "none"
    tituloEdu.style.display = "none"
    contenidoEducativo.style.display = "none"
    conctacua.style.display = "flex"
})
}generarAcuarios()

//FUNCION PARA GENERAR ACUARIOS
function contenidoAcuarios (){
const contenidoDeAcuarios = document.createElement("div")
contenidoDeAcuarios.className = "contenido-acuarios"
contenidoDeAcuarios.id = "contenidoDeAcuariosId"
contenidoDeAcuarios.innerHTML = `<div class="container-contenidotyp">
                                     <h2>
                                        ¿Como armar un acuario?
                                     </h2>
                                     <p>
                                        Para armar un acuario hay varias cosas que hay que tener en cuenta,
                                        para empesar, si va a ser de vidrio o acrílico y que tenga el
                                        tamaño adecuado para tener los peces que hayamos elegido.Despues hay
                                        mas detalles como filtro,calentador,iluminacion,sustrato,decoracion y
                                        el acodicionamiento del agua. Todos estos detalles seran explicados y
                                        enumerados a continuacion.
                                     </p>
                                </div>`+
                                `<div class="container-vidrio">
                                     <h2>
                                        Vidrio del acuario
                                     </h2>
                                     <p>
                                        El cristal que elijamos para el acuario determinara la recistencia y la 
                                        duracion de el mismo. En rigidez y duracion lo mas recomdable es el acrílico
                                        pero en dencidaddes de aguas bajas ya que este tiene menos capacidad para contener
                                        agua que el cristal. Para disminuir la fragilidad del cristal ante los golpes se 
                                        recomienda calcular el grosor dependiendo de la cantidad de agua que esta tenga.
                                        (hay varias calculadoras en linea que calculan esta medida).
                                     </p>                                    
                                </div>`+
                                `<div class="containar-filtracion">
                                    <h2>
                                       Filtracion  
                                    </h2>
                                    <p>
                                       Es fundamental para mantener el agua limpia y oxigenada. Ademas filtra los componentes
                                       químicos toxicos que se van acumulando por la actividad biológica de peces y plantas.
                                       Tambien limpian el agua del medicamento si es que emos estado sometiendo a un pez 
                                       a un tratamiento por enfermedad. El filtro simula el movimiento de agua de un lago o 
                                       rio y elimina compuestos quimicos (como nitratos,nitritos,fosfatos,etc). 
                                    </p>
                                     <br>
                                    <p> 
                                      Exiten multitud de sistemas que se pueden utilizar para filtrar el agua
                                      del acuario, cada sistema tiene sus ventajas y desventajas tu decides cual
                                      se amolda mas a tu proyecto.Los filtros se dividen en dos grupos, internos y 
                                      externos. 
                                    </p>
                                    <br>
                                    <h3>
                                       ¿Como funciona un filtro?
                                    </h3>
                                    <p>
                                     1)Entrada de agua sucia del acuario.Esta agua contiene restos
                                     de comida y otros detritos),tambien contiene sustacias nocivas
                                     como (amoniaco,nitritos,etc).
                                     <br>
                                     <br>
                                     2)Cabeza de poder, esta se encarga de succinar el agua y permitir 
                                     que esta recorra un sistema de tubos para dar con el material filtrante.
                                     <br>
                                     <br>
                                     3)Canastillo contenedor, en esta parate del filtro se encuentra la magia 
                                     del mismo, es decir todo el material filtrante, en el siguente orden:Arriba 
                                     del todo la filtracion mecanica que retiene todas las particulas solidas.
                                     En medio la filtracion biologica que tranforma amoniaco y nitritos en nitratos.
                                     En la parte baja la filtracion quimica que no siempre esta presente en los filtros
                                     ya que solo se pone en ocasiones especiales.
                                     <br>
                                     <br>
                                     4)Por ultimo la salida de agua limpia.
                                    </p>
                                    <br>
                                    <h3 class = "titulo-img">
                                       Reprecentacion de filtro de acuario:
                                    </h3>
                                    <div class= "container-img">
                                         <img src="./img/filtracion.png" alt="">                                   
                                    </div>
                                    <h3>
                                       Filtro de acuario interno
                                    </h3>
                                    <p>
                                       Los filtros de acuario internos van por dentro del acuario por lo tanto
                                       suelen se mas silenciosos que los externos, son recomendables para una 
                                       cantidad de peces pequeña ya que varios de estos modelos no cuenta con 
                                       toda la capacidad para almacenar el material filtrante.
                                    </p>
                                </div>`
mainIndex.appendChild(contenidoDeAcuarios)
}contenidoAcuarios()
//FUNCION PARA GENERAR ACUARIOS

//FUNCION PARA RECUPERAR INDEX
//VARIABLES DE RECUPERAR INDEX
const containerCasa = document.getElementById("containerCasa")
const containerBuscador = document.getElementById("containerBuscador")
//VARIABLES DE RECUPERAR INDEX
function recuperarIndex () {
containerCasa.addEventListener(`click`, ()=>{
   const conctacua = document.getElementById("contenidoDeAcuariosId") 
   generarNavPeces.style.display = `none`
   conctacua.style.display = `none`
   textoDeIncio.style.display = "flex"
   tituloDeNoticias.style.display = "flex"
   containerDeNoticias.style.display = "flex"
   videosInteresantes.style.display = "flex"
   tituloEdu.style.display = "flex"
   contenidoEducativo.style.display = "flex"
})
}recuperarIndex()