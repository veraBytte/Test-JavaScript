//Con query selector podemos mandar a llamar los elementos de HTML pasandole el nombre de la etiqueta, clase o id
const titulo = document.querySelector('h1');
const input = document.querySelector('input')
const parrafo = document.querySelector('p')
const parrafos = document.getElementsByClassName('parrafo')
const caja = document.querySelector('div')

// console.log({
//     titulo,
//     input,
//     parrafos
// });

//console.log(parrafo);

//INFO Manipulacion del DOM Escribir en el HTML

//? La propiedad innerHTML nos permite escribir el contenido de una etiqueta desde HTML, pero no solo texto tambien podemos escribir otras etiquetas, lo cual puede ser peligroso si no se tiene cuidado

//titulo.innerHTML = "Adios <span>Hola</span>"

//? La propiedad textContent nos permite escribir el contenido de una etiqueta desde HTML, pero solo texto, no podemos escribir otras etiquetas
titulo.textContent = "Adios <span>Hola</span>"

//INFO Modificar los atributos de un elmento HTML

//? La propiedad setAttribute nos permite modificar los atributos de un elemento HTML, recibe dos parametros, el nombre del atributo y el valor que se le va a asignar

parrafo.setAttribute('class', 'negrilla')

//? La propiedad getAttribute nos permite obtener el valor de un atributo de un elemento HTML, recibe como parametro el nombre del atributo

console.log(parrafos[2].getAttribute('class'));

//INFO Manipulacion de clases de CSS

//? La propiedad classList nos permite obtener un arreglo con todas las clases de un elemento HTML

console.log(parrafos[3].classList)

//? La propiedad add nos permite agregar una clase a un elemento HTML, recibe como parametro el nombre de la clase que se va a agregar

parrafos[3].classList.add('negrilla2')

//? La propiedad remove nos permite eliminar una clase de un elemento HTML, recibe como parametro el nombre de la clase que se va a eliminar

parrafos[3].classList.remove('negrilla2')

//? La propiedad toggle nos permite agregar una clase a un elemento HTML si no la tiene, y si la tiene la elimina, recibe como parametro el nombre de la clase que se va a agregar o eliminar

parrafos[3].classList.toggle('negrilla2')

//INFO Crear elementos HTML desde JS

//? La propiedad createElement nos permite crear un elemento HTML, recibe como parametro el nombre de la etiqueta que se va a crear

const nuevoParrafo = document.createElement('p')
nuevoParrafo.textContent = "Elemento creado con JS"

//? La propiedad appendChild nos permite agregar un elemento HTML dentro de otro elemento HTML, recibe como parametro el elemento HTML que se va a agregar

caja.appendChild(nuevoParrafo)