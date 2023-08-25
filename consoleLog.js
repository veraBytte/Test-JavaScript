let nombres = ['Juan', 'Pedro', 'Pablo', 'Luis', 'Ana', 'Maria', 'Jose', 'Luisa', 'Pepe', 'Pepa', 'Pepita', 'Pepito', 'Pepin']

let object = {
    name: 'Juan',
    age: 25,
    country: 'Colombia'
}

let objectList = [
    {
        name: 'Juan',
        age: 25,
        country: 'Colombia'
    },
    {
        name: 'Pedro',
        age: 25,
        country: 'Colombia'
    },
    {
        name: 'Esteban',
        age: 15,
        country: 'Argentina'
    },
]

// Console.table
// Genera una tabla en la consola con los datos de un arreglo o un objeto lo que lo hace mucho mas legible

//console.log("nombres :", nombres);
//console.table(nombres);
//console.table(object);
//console.table(objectList);

// Console.count me permite saber cuantas veces se ha ejecutado una funcion, recibe un parametro que es el nombre de la etiqueta que se va a mostrar en la consola pero es opcional

const followMe = (dev) => {
    console.count('followers');
}

//followMe(); // followers: 1
//followMe(); // followers: 2
//followMe(); // followers: 3


//console.assert
const sum = (n1, n2) => {
    console.assert(n1 + n2 === 10, 'No es 10');
};

//sum(3,2); // Assertion failed: Not 10
sum(5,5); //
sum(10,0); //

// Estilizar los logs con labels

const lastName = 'Sánchez';

console.log('First Name: ', firstName, 'Last Name: ', lastName);
// First Name: Leira Last Name: Sánchez


console.log("%cHolaMundo", "font-family:arial;color:green;font-weight:bold;font-size:3rem");
