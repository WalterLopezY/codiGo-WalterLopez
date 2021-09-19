// console.log permite mostrar en la consola de JS, lo que se nos antoje es muy util para saber que esta pasando internamente dentro de JS
console.log("Hola Mundo");

// Variables
// Palabras Reservadas, JS las usa
// Los nombres de variables son sensibles a Mayus y Minus
var nombre = "Walter";

console.log(nombre); //Solamente para mostrar algo

// Tipos de datos - Texto, numeros , booleanos...

// String - Texto
var nombre2 = "Junior";

//Number - Numero
var edad = 38;
console.log(edad);

//Boolean - Booleano
var esDeNoche = true; //true o false
console.log(esDeNoche);

//Para ver el tipo de datos que es
console.log(typeof esDeNoche);

//Para de cambiar de valor a una variable, me basta con llamarla, esta variable tiene que existir antes.

edad = 25;
console.log(edad);

nombre = "WalterLY"
console.log(nombre);

//Cambiar de tipo de dato

var anio = 2021;
anio = "dos mil ventidos";
console.log(anio);

//JS es un lenguaje que no es tipado, no predeclaramos los tipos de datos

//VALORES RAROS EN VARIABLES

var nota; //Unidefined, no esta definido
console.log(nota);


var nulo = null; //deberia haber algo, pero no esta
console.log(nulo);

//Not a Number = NaN
var rareza = 100 / "cebollas";
console.log(rareza);

var infinito = 100 / 0;
console.log(infinito);
console.log(typeof infinito);