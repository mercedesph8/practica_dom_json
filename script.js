//EJERCICIO 1: ACCEESO A DOM BÁSICO

//Busco el elemento a través del id
let titulo= document.getElementById("titulo1");
//Modifico el texto del elemento
titulo.textContent= "Título Principal Modificado";

let cambioColor= document.getElementsByTagName("p");
//Modifico el color del párrafo
cambioColor[0].style.color= "#3384ab";

//EJERCICIO 2: MODIFICACIÓN DE VARIOS ELEMENTOS

//Selecciono todos los párrafos con la clase "texto"
let colorFondoParrafos= document.getElementsByClassName("texto");

//Uso el bucle for para cambiar el fondo de cada párrafo
for(let i=0; i<colorFondoParrafos.length; i++){
    colorFondoParrafos[i].style.backgroundColor="#FF6BF5";
}

//EJERCICIO 3: SELECCIÓN CON QUERY SELECTOR

//Busco el elemento con la clase "caja"
let caja= document.querySelector(" .caja");

//Cambio de borde y fondo con style (css)
caja.style.border="4px solid #3b1b0d";
caja.style.backgroundColor=" #FFA87D";
caja.style.borderRadius = '10px';


//EJERCICIO 4: QUERYSELECTORALL Y FOREACH

//Selecciono todos los botones de la misma clase
let botones= document.querySelectorAll(".btn-dom");

//Uso el foreach para cambiar el texto de los botones
botones.forEach((boton,index) =>{
    botones.textContent= "DOM listo";
})