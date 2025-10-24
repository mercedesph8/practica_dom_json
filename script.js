//EJERCICIO 1: ACCEESO A DOM BÁSICO

//Busco el elemento a través del id
let titulo = document.getElementById("titulo1");
//Modifico el texto del elemento
titulo.textContent = "Título Principal Modificado";

let cambioColor = document.getElementsByTagName("p");
//Modifico el color del párrafo
cambioColor[0].style.color = "#3384ab";

//EJERCICIO 2: MODIFICACIÓN DE VARIOS ELEMENTOS

//Selecciono todos los párrafos con la clase "texto"
let colorFondoParrafos = document.getElementsByClassName("texto");

//Uso el bucle for para cambiar el fondo de cada párrafo
for (let i = 0; i < colorFondoParrafos.length; i++) {
    colorFondoParrafos[i].style.backgroundColor = "#FF6BF5";
}

//EJERCICIO 3: SELECCIÓN CON QUERY SELECTOR

//Busco el elemento con la clase "caja"
let caja = document.querySelector(" .caja");

//Cambio de borde y fondo con style (css)
caja.style.border = "4px solid #3b1b0d";
caja.style.backgroundColor = " #FFA87D";
caja.style.borderRadius = '10px';


//EJERCICIO 4: QUERYSELECTORALL Y FOREACH

//Selecciono todos los botones de la misma clase
let botones = document.querySelectorAll(".btn-dom");

//Uso el foreach para cambiar el texto de los botones
botones.forEach(boton => {
    boton.textContent = "DOM listo";
});

//EJERCICIO 5: COMPARACIÓN ENTRE COLECCIONES VIVAS Y ESTÁTICAS
let lista = document.getElementById("lista");
//Colección viva 
const listaColeccionViva = document.getElementsByTagName("li");
console.log("listaColeccionViva.length");

//Colección estática 
const listaColeccionEstatica = document.querySelectorAll("li");
console.log("listaColeccionEstatica.length");

//Agrego elemento
const nuevoLi = document.createElement('li');
nuevoLi.textContent = 'Elemento nuevo agregado';
lista.appendChild(nuevoLi);

console.log(listaColeccionViva.length);//Se actualiza automaticamente, muestra 3
console.log(listaColeccionEstatica.length);//No se actualiza automáticamente, muestra 2

//EJERCICIO 6: CREAR ELEMENTOS DINÁMICAMENTE

//Creo el elemento
const parrafoNuevo = document.createElement("p");
parrafoNuevo.textContent = "Creado Dinámicamente";

//Añado el párrafo buscando con query selector porque te devuelve un solo elemento, no una colección como getElementsByClassName
document.querySelector(".ejercicio6").appendChild(parrafoNuevo);

//EJERCICIO 7: CREAR NODOS DE TEXTO

//Creo el nodo
const nodoNuevo = document.createTextNode("Nodo de texto creado dinámicamente");

//Añado el nodo dentro del contenedor
document.getElementById("contenedor").appendChild(nodoNuevo);


//EJERCICIO 8: AÑADIR ATRIBUTOS A UN ELEMENTO

//creo la imagen
let imagen = document.createElement("img");

//Añado atributos
imagen.setAttribute("src", "https://i.pinimg.com/736x/39/62/fd/3962fde1e4563401f2c47cae7916f30c.jpg");
imagen.setAttribute("alt", "Imagen creada por JS")

//Añado la imagen dinamicamente
document.getElementById("contenedorImagen").appendChild(imagen);


//EJERCICIO 9: CREAR ESTRUCTURA COMPLETA 

/*
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/

//Selecciono la seccion donde voy a hacer la estructura
const seccion = document.querySelector(".ejercicio9");

//Creo el contenedor
const div = document.createElement('div');
div.className = 'card';

//Añado el div card dentro de la seccion
seccion.appendChild(div);

//Creo el div card-Body según la estructura
const cardBody = document.createElement('div');
cardBody.className = 'card-body';

//Añado el card-Body dentro del div card
div.appendChild(cardBody);

//Creo todos los elementos del card-body

//Creo el titulo de la tarjeta
const tituloTarjeta = document.createElement('h5');
tituloTarjeta.className = 'card-title';
tituloTarjeta.textContent = "TITULO DE LA TARJETA";

//Creo el párrafo de la tarjeta
const parrafoTarjeta = document.createElement('p');
parrafoTarjeta.className = "card-text";
parrafoTarjeta.textContent = "Este es el texto de la tarjeta";

//Creo el botón de la tarjeta
const botonTarjeta = document.createElement('a');
botonTarjeta.className = "btn btn-primary";
botonTarjeta.setAttribute('href', '#');
botonTarjeta.textContent = "Click";

//Añado elementos al card-body
cardBody.appendChild(tituloTarjeta);
cardBody.appendChild(parrafoTarjeta);
cardBody.appendChild(botonTarjeta);


//EJERCICIO 10: INSERTAR ELEMENTOS EN DISTINTAS POSICIONES

//Selecciono donde voy a crear la lista
const sectionEj10 = document.querySelector(".ejercicio10");

//Creo la lista y la añado a la sección
const ul = document.createElement('ul');
ul.id = 'listaEj10';
sectionEj10.appendChild(ul);

//Creo los elementos de la lista
const li1 = document.createElement('li');
li1.textContent = "Elemento 1";

const li2 = document.createElement('li');
li2.textContent = "Elemento 2";

//Añado los elementos a la lista
ul.appendChild(li1);
ul.appendChild(li2);

//Creo y añado un elemento al final de la lista con append()
const liFinal = document.createElement('li');
liFinal.textContent = "Elemento añadido al final de la lista";
ul.append(liFinal);

//Creo y añado un elemento al principio de la lista con prepend()
const liPrincipio = document.createElement('li');
liPrincipio.textContent = "Elemento añadido al principio de la lista";
ul.prepend(liPrincipio);

//Crear y añadir un elemento antes de la lista
const h6Delante = document.createElement('h6');
h6Delante.textContent = "Titulo colocado antes de la lista";
ul.before(h6Delante);

//Crear y añadir un elemento después de la lista
const pDetras = document.createElement('p');
pDetras.textContent = "Párrafo colocado detrás de la lista";
ul.after(pDetras);


//EJERCICIO 11: REEMPLAZAR Y ELIMINAR - NO FUNCIONA

//Creo la función eliminarParrafo 
function eliminarParrafo() {
    let parrafo = document.getElementById("parrafoAEliminar");
    //Si el párrafo existe, lo elimino
    if (parrafo) {
        parrafo.remove();
    }
}

//Creo la función reemplazarParrafo 
function reemplazarParrafo() {
    let parrafo = document.getElementById("parrafoAEliminar");
    //Si el párrafo existe, creo un nuevo párrafo y lo reemplazo 
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = "Párrafo anterior reemplazado por este";
    if (parrafo) {
        parrafo.replaceWith(nuevoParrafo);
    } else {
        //Si el parrafo no existe(porque se haya eliminado), se añade
        document.querySelector(".ejercicio11").appendChild(nuevoParrafo);
    }
}


//EJERCICIO 12: CLONAR ELEMENTOS

//Hago una función para clonar la tarjeta
function clonarTarjeta() {
    const primeraTarjeta = document.querySelector(".card-img");
    const tarjetaClonada = primeraTarjeta.cloneNode(true);

    //Cambio el texto de la tarjeta clonada
    const textoTarjeta = document.querySelector('.card-text1');
    textoTarjeta.textContent = "Feliz Cumpleaños clonado";

    //Añado la tarjeta clonada al div
    document.querySelector(".col").appendChild(tarjetaClonada);

}


//EJERCICIO 13: CREAR LISTA DINÁMICA CON BOTÓN

//Creo la función de agregar elemento a la que se le llama al clicar en el botón
function agregarElemento(){
    const listaElementos= document.getElementById("listaElementos"); 
    const liNuevo= document.createElement('li');
    liNuevo.textContent="Elemento nuevo creado";

    //añado el elemento a la lista
    listaElementos.appendChild(liNuevo);
}

//EJERCICIO 14: ELIMINAR ÚLTIMO ELEMENTO

//Creo la función de agregar elemento a la que se le llama al clicar en el botón
function eliminarUltimoElemento(){
    const listaElementos= document.getElementById("listaElementos"); 
    if (listaElementos){
        listaElementos.lastElementChild.remove();
    }
    //añado el elemento a la lista
    listaElementos.appendChild(liNuevo);
}


//EJERCICIO 15: RECORRER COLECCIÓN Y MODIFICAR



//EJERCICIO 16: CREAR GALERÍA CON JSON LOCAL



//EJERCICIO 17: MOSTRAR DATOS API JSONPlaceholder



//EJERCICIO 18: MOSTRAR DATOS ANIDADOS DE JSON



//EJERCICIO 19: FILTRAR Y MOSTRAR DATOS



//EJERCICIO 20: MINI "VISOR DE USUARIOS"