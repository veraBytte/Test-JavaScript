const title = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button = document.querySelector('button');
const body = document.querySelector('body');

let resultado = 0;

//! Tip : Por defecto el .value de un input es un string, por lo que si queremos hacer una suma, tenemos que convertirlo a número con parseInt()

function hacerSuma() {
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



