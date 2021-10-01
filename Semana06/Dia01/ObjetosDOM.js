//window.console.log("Hola");

//info del navegador
console.log('Info Navegador: ${window.navigator.userAgent}');

//cual es mi url
console.log('URL: ${window.location}');

navigator.geolocation.getCurrentPosition(function(ubicacion){
    console.log(ubicacion)
});
//Javascript a travez del objeto window
//window = pestaña del navegador

console.log(window.document);

let miTitulo = document.querySelector("h1");

console.log(miTitulo);

//innerHTML, es el contenido HTML de un elemento
miTitulo.innerHTML = "Hola soy un nuevo Titulo";

console.log(miTitulo.innerHTML);

//obtener un elemento
let miCaja = document.getElementById("caja");

console.log(miCaja);

//innerHTML, representa el contenido HTML de un elemento
miCaja.innerHTML = "<h2>Titulo Caja</h2>";

