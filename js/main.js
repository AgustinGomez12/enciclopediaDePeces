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
        dezCarruseledu.style.display = `none`
        dezCarruselnot.style.display = `none`
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
} generarContenidoPeces()

//FUNCION PARA GENERAR LA INFORMACION DE LOS PECES

//FUNCION PARA GENERAR ACUARIOS

//VARIABLES PARA GENERAR ACUARIOS
const containerAcuario = document.getElementById("containerAcuario")
const navbarPeces = document.getElementById("navbarPeces")
//VARIABLES PARA GENERAR ACUARIOS


function generarAcuarios() {
    containerAcuario.addEventListener(`click`, () => {
        const conctacua = document.getElementById("contenidoDeAcuariosId")
        generarNavPeces.style.display = `none`
        textoDeIncio.style.display = "none"
        tituloDeNoticias.style.display = "none"
        containerDeNoticias.style.display = "none"
        videosInteresantes.style.display = "none"
        tituloEdu.style.display = "none"
        contenidoEducativo.style.display = "none"
        conctacua.style.display = "flex"
        dezCarruseledu.style.display = `none`
        dezCarruselnot.style.display = `none`
    })
} generarAcuarios()

//FUNCION PARA GENERAR ACUARIOS
function contenidoAcuarios() {
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
        `<div class="container-sustrato">
                                    <h2>
                                       ¿Que sustrato utilizar?
                                    </h2>
                                    <h4>
                                       Sustratos nutritivos:
                                    </h4>
                                    <p>
                                       Los sustratos nutritivos son para acuarios con gran volumenes de plantas:\n
                                       <br> 
                                       <ul>
                                       <li>
                                         <strong>Arcilla:</strong>Contiene nutrientes como magnisio,potasio,hierro y fósforo.
                                       </li> 
                                       <br>
                                       <li>
                                          <strong>Tierra:</strong>Rica en nutrientes,ideal para el crecimiento de las raíces de las 
                                          plantas acuaticas.
                                       </li>
                                       <br>
                                       <li>
                                          <strong>Mezclas:</strong>Combinan materiales como tierra,arcilla y turba para ofrecer una
                                          variedad de nutrientes.
                                       </li>
                                       </ul>
                                       <br>
                                    </p>
                                    <h4>
                                       Sustratos inertes:
                                    </h4>            
                                    <p>
                                    Ideales cuando tenemos peces sencibles a los nutrientes del 
                                    ustrato nutritivo.
                                    <ul>
                                    <br>
                                    <li>
                                     <strong>Grava:</strong>Facil de limpiar,disponible de varios colores y tamaños.Sirve para mantener
                                     plantas con raices poco profundas y es recomendable comprarla lo mas natural posible
                                     y sin colores quimicos.
                                    </li>
                                    <br>
                                    <li>
                                    
                                    </li>
                                    </ul>
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
                                    <br>
                                    <h3>
                                       ¿Como luce un filtro interno?
                                    </h3>
                                    <figure class="img-interno">
                                        <img src="./img/filtro-interno.webp" alt="">
                                    </figure>
                                    <br>
                                    <h3>
                                       Filtro de acuario externo
                                    </h3>
                                    <p>
                                       Los filtros externos tienen varias ventajas,mayor capasidad de filtrado y
                                       um mantenimiento mas comodo.Mantienen el agua un poco mas limpia que los
                                       filtros internos y esto veneficia mucho mas a la vida alvergada en nuestro
                                       acuario.Estos filtros son muy recomendables para personas recien inciadas en
                                       el hobby de la acuariofilia.
                                    </p>
                                      <br>
                                    <h3>
                                       ¿Como luce un filtro externo?
                                    </h3>
                                    <figure class="img-externo">
                                    <h4>
                                    Filtro canister
                                    </h4>
                                        <img src="./img/filtro-canister.webp" alt="">
                                    </figure>
                                    <br>
                                    <figure class="img-externo">
                                    <h4>
                                       Filtro cascada
                                    </h4>
                                        <img src="./img/filtro-cascada.webp" alt="">
                                    </figure>
                                </div>`+
        `<div class="container-calentador">
                                     <h2>
                                        Calentador
                                     </h2>
                                     <p>
                                        Es un elemento esencial para mantener una temperatura constante y
                                        adecuada para tus peces y plantas.Generalmente, se recomienda una potecia de
                                        3-5 vatios por cada litro de agua y se recomienda que el calentador sea termo 
                                        ajustable para poder controlar la temperatura con mas exatitud.Tambien es recomendable
                                        que venga con la funcion de apagado automatico despues de un rato.La temperatura
                                        adecuada es entre (24-26°C).
                                     </p>
                                     <figure class="calentador-img">
                                        <h4>
                                           ¿Como luce un calentador?
                                        </h4>
                                         <img src="./img/calentador.webp" alt="">
                                     </figure>
                                </div>`+
        `<div class="container-acondicionamientoagua">
                                     <h2>
                                         Acondicionamiento del agua
                                     </h2>
                                     <p>
                                       Para acondicionar el agua de forma correcta tendremos que hacer un
                                       proseso cuyo nombre es el ciclado.Este proceso implica el establecimiento de colonias
                                       de bacterias beneficiosas que transforman compuestos tóxicos, como el amoníaco y los nitritos,
                                       en nitratos que son menos dañinos.Este proceso puede durar 30 y 45 días,es inportante no introducir
                                       peces en el acuario mientras este proceso se esta llevando a cabo,ya que los niveles de amoniaco y nitritos
                                       puede matarlos.
                                     </p>
                                     <br>
                                     <h4>
                                        ¿Como realizar el ciclado?
                                     </h4>
                                     <p>
                                        Para hacer el ciclado existen dos metodos uno mas rapido que el 
                                        otro pero un poco mas costoso.Metodo rapido comprar bacterias ya
                                        desarrolladas e introducirlas al cabo de unos cuantos dias el acuario 
                                        ya estara listo.La forma comun de realizarlo es con alimento comercial
                                        tirarlo mientras el acuario tiene el filtro en funcionamiento y dejarlo que 
                                        se baya comvirtiendo en amoniaco esto hara que el primer grupo de bacterias 
                                        aparesca estas comvierten el amoniaco en nitritos que tambien son toxicos.
                                        luego de un tiempo aparece otro genero de bacterias llamadas nitrobacters
                                        que comvierten los nitritos en nitratos que son mucho menos toxicos para 
                                        nuestros peces y pueden ser absorbidos por las plantas o eliminados por cambios
                                        de agua regulares.Pasado 30 o 45 dias las colonias de bacterias se estabilizan 
                                        manteniendo el amoniaco y nitritos bajos, creando un ambiente seguro para los 
                                        peces.(Es importante medir siempre los prametros antes de introducir los peces
                                        con un test, estos los venden en las tiendas de acuarios).
                                     </p>
                                </div>`+
                                
                                `<div>
                                     <h2>
                                        Algunas especies de peces para acuarios
                                     </h2>
                                </div>`+
                                
                                `<h2>Agua dulce</h2>`+

                                `<div class="especies-recomendadas">
                                     <div class="peces-deaguadulce">
                                       
                                         <div class="pez-figure">
                                             <figure>
                                                <h4>
                                                   Goldfish
                                                </h4>
                                                <img src="https://i.pinimg.com/564x/ea/3d/b0/ea3db09a7e34e2cecb6472584826d7f7.jpg" alt="">
                                             </figure>
                                         </div>
                                         <div class="pez-figure">
                                             <figure>
                                                <h4>
                                                   Guppy
                                                </h4>
                                                <img src="https://i.pinimg.com/564x/47/d1/c9/47d1c953110352bf753e1078e841affb.jpg" alt="">
                                             </figure>
                                         </div>
                                         <div class="pez-figure">
                                             <figure>
                                                <h4>
                                                   Betta
                                                </h4>
                                                <img src="https://i.pinimg.com/564x/c7/66/e5/c766e550a22062f91bbeb2946d652405.jpg" alt="">
                                             </figure>
                                         </div>
                                         <div class="pez-figure">
                                             <figure>
                                                <h4>
                                                   pez angel
                                                </h4>
                                                <img src="https://i.pinimg.com/564x/65/f2/b4/65f2b48df266744d9daab17905808725.jpg" alt="">
                                             </figure>
                                         </div>
                                         <div class="pez-figure">
                                             <figure>
                                                <h4>
                                                   Killis
                                                </h4>
                                                <img src="https://i.pinimg.com/564x/54/ee/71/54ee716d3a29b10ddbf2faf47040e9cc.jpg" alt="">
                                             </figure>
                                         </div>
                                         <div class="pez-figure">
                                             <figure>
                                                <h4>
                                                   Corydoras
                                                </h4>
                                                <img src="https://i.pinimg.com/564x/1d/b4/38/1db4385df8b6c774ab19c7182c4d0710.jpg" alt="">
                                             </figure>
                                         </div>
                                         <div class="pez-figure">
                                             <figure>
                                                <h4>
                                                   Axolote
                                                </h4>
                                                <img src="https://i.pinimg.com/564x/ed/ee/9b/edee9baeb5bdba9084363648b76cca8c.jpg" alt="">
                                             </figure>
                                         </div>
                                     </div>
                                </div>`+

                                `<h2>
                                    Agua salada
                                </h2>`+
                                `<div>
                                    <p>
                                    <strong>
                                         Estos acuarios requieren mas trabajo.
                                         <br>
                                         <a href="">Mas informacion</a>
                                    </strong>
                                    </p>
                                </div>`+
                                `<div class="especies-recomendadas">
                                     <div class="peces-desalada">
                                       
                                         <div class="pez-figure">
                                             <figure>
                                                <h4>
                                                   Pez payaso
                                                </h4>
                                                <img src="https://i.pinimg.com/564x/54/d6/f3/54d6f37e9d6641522e63e3093d90e119.jpg" alt="">
                                             </figure>
                                         </div>
                                         <div class="pez-figure">
                                             <figure>
                                                <h4>
                                                   Pez Cirujano
                                                </h4>
                                                <img src="https://i.pinimg.com/564x/9f/89/77/9f89770bc521356d504e2247da874e42.jpg" alt="">
                                             </figure>
                                         </div>
                                         <div class="pez-figure">
                                             <figure>
                                                <h4>
                                                   Pez mandarìn
                                                </h4>
                                                <img src="https://i.pinimg.com/564x/eb/af/cf/ebafcf2f79d806250e011c0eef38415a.jpg" alt="">
                                             </figure>
                                         </div>
                                         <div class="pez-figure">
                                             <figure>
                                                <h4>
                                                   Pez angel enano
                                                </h4>
                                                <img src="https://i.pinimg.com/564x/e2/58/6b/e2586b4dbb96329589bf70bcd4117e7a.jpg" alt="">
                                             </figure>
                                         </div>
                                         <div class="pez-figure">
                                             <figure>
                                                <h4>
                                                   Damiselas
                                                </h4>
                                                <img src="https://i.pinimg.com/564x/53/e9/1a/53e91a3204ed09f69889b71859040fb0.jpg" alt="">
                                             </figure>
                                         </div>
                                     </div>
                                </div>`
    mainIndex.appendChild(contenidoDeAcuarios)
} contenidoAcuarios()
//FUNCION PARA GENERAR ACUARIOS

//FUNCION PARA RECUPERAR INDEX
//VARIABLES DE RECUPERAR INDEX
const containerCasa = document.getElementById("containerCasa")
const containerBuscador = document.getElementById("containerBuscador")
const dezCarruseledu = document.getElementById("dezCarruseledu")
const dezCarruselnot = document.getElementById("dezCarruselnot")
//VARIABLES DE RECUPERAR INDEX
function recuperarIndex() {
    containerCasa.addEventListener(`click`, () => {
        const conctacua = document.getElementById("contenidoDeAcuariosId")
        generarNavPeces.style.display = `none`
        conctacua.style.display = `none`
        textoDeIncio.style.display = "flex"
        tituloDeNoticias.style.display = "flex"
        containerDeNoticias.style.display = "flex"
        videosInteresantes.style.display = "flex"
        tituloEdu.style.display = "flex"
        contenidoEducativo.style.display = "flex"
         dezCarruseledu.style.display = `flex`
        dezCarruselnot.style.display = `flex`
    })
} recuperarIndex()