const title = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button = document.querySelector('button');
const body = document.querySelector('body');
const form = document.querySelector('form');
const cajaTexto = document.querySelector('#texto');

let resultado = 0;

//El addEventListener es una función que recibe dos parámetros:
//El primero es el evento que queremos escuchar
//El segundo es la función que queremos que se ejecute cuando se produzca ese evento puede ser una función anónima o una función declarada

function hacerSuma(event) {
    //Con esto estamos evitando que se recargue la página al cambiar el evento por defecto del submit
    event.preventDefault();

    num1 =  parseInt(input1.value);
    num2 =  parseInt(input2.value);

    //Se guarda el resultado en una variable
    resultado = num1 + num2;

    //Se crea la etiqueta p
    let mostarResultado = document.createElement('p');
    mostarResultado.innerText = 'El resultado es: ';
    //Se añade esa etiqueta al HTML
    body.appendChild(mostarResultado);
    //Se añade el resultado a la etiqueta p
    mostarResultado.append(resultado);
}

//? Funciones anónimas
form.addEventListener('submit', hacerSuma);

//? Funciones declaradas
// button.addEventListener('click', function() {
//     num1 =  parseInt(input1.value);
//     num2 =  parseInt(input2.value);

//     //Se guarda el resultado en una variable
//     resultado = num1 + num2;

//     //Se crea la etiqueta p
//     let mostarResultado = document.createElement('p');
//     mostarResultado.innerText = 'El resultado es: ';
//     //Se añade esa etiqueta al HTML
//     body.appendChild(mostarResultado);
//     //Se añade el resultado a la etiqueta p
//     mostarResultado.append(resultado);
// });


cajaTexto.addEventListener('copy', showMessageWhenCopy);

function showMessageWhenCopy() {
    alert('Has copiado el texto');
}