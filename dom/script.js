//Con query selector podemos mandar a llamar los elementos de HTML pasandole el nombre de la etiqueta, clase o id
const titulo = document.querySelector('h1');
const input = document.querySelector('input')
const parrafo = document.querySelectorAll('p')
const parrafos = document.getElementsByClassName('parrafo')

console.log({
    // titulo,
    // input,
    parrafos
});

console.log(parrafo);