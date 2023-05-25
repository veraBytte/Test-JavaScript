# Test-JavaScript
Este repositorio contiene preguntas básicas y esenciales acerca de JavaScript ¿Te sientes con el conocimiento necesario para resolverlo ?

### ¿Que es un variable y para que sirve?
Una variable es un espacio en memoria al cual podemos asignarle un nombre, para guardar informacion, esta informacion normalmente es algun tipo de dato de JavaScript como Objetos, Enteros, Booleanod etc... )

### ¿Cuál es la diferencia entre declarar e inicializar una variable?
Cuando se declara una variable se asigna el espacio en memoria, JavaScript entiende que se va a guardar informacion en esa variable por lo que le asigna un lugar. En cambio, al inicializar una variable se le dice que va a guardar exactamente.

### ¿Cuál es la diferencia entre sumar números y concatenar strings?
Una suma hace referencia a dos mas cantidades numericas, en cambio, un concatenacion une o enlaza dos cadenas de texto separadas, ambas operaciones se realizan con el operador '+'

## 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre -> String
Apellido -> String
Nombre de usuario en Platzi -> String
Edad -> Entero
Correo electrónico -> String
Mayor de edad -> Boolean
Dinero ahorrado > Double
Deudas > Double

## 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

``` js
const Nombre = "Bryan"
const Apellido = "Andres"
const NombreDeUsuario= "Ramiro"
const Edad = 12
const CorreoElectronico ="brayan@gmail.com"
const MayorEdad = True
const Ahorro = 23.000
const Deudas = 540.350
```

4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)Dinero real (dinero ahorrado menos deudas)

``` js
const nombreCompleto = Nombre + Apellido // Bryan Andres
const dineroReal = Ahorro - Deudas;
```

# Funciones
---
## 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
### ¿Qué es una función?
Una funcion es un bloque de codigo que realiza una accion determinada siguiente un conjunto de pasos logicos, esta funcion puede llevar parametros, que serian como los ingredientes de la torta, la funcion seria el pastelero y lo que regrese la funcion seria a torta.

## ¿Cuándo me sirve usar una función en mi código?
Cuando algo se repite una y otra y otra vez, asi solucinamos el DRY Don't repet yourself

## ¿Cuál es la diferencia entre parámetros y argumentos de una función?

Los parametros son las variables que yo declaro cuando creo una función, en el siguiente ejemplo (x,y) son los parametros d emi funcion, estas letras son variables que seran utilizadas dentro de mi funcion.
``` js
def my_function(x, y):
  pass
```
En cambio, los argumentos son los datos que yo les paso a esas variables, cuando mando llamar a mi funcion
``` js
my_function(1, 2)
```
## 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
``` js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

Respuesta :
``` js
const referencia = function(name,lastname,nickname){
    const completeName = name + " " +lastname
    console.log(`Hola mi nombre es ${completeName} pero prefiero que me digas ${nickname}`)
  }
```
# Condicionales
## 1️⃣ Responde las siguientes preguntas :
### ¿Qué es un condicional?
Un condicional es un bloque de codigo que se ejecuta bajo una condicion previamente establecida.
### ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
* if : La sentencia if nos dice que dada una condicion ejecute o no, un bloque de codigo
* Switch : la sentencia switch lo que hace es que nos da la opcion de ejecutar diferentes acciones dadas diferentes condiciones
### ¿Puedo combinar funciones y condicionales?
Claro que si se pueden combinar, es mas normalmente se trabajan los condicionales dentro de funciones porque son pedaos de codigo que normalemente se reutilian a lo largo del codigo
## 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
``` js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```
Respuesta :
``` js
const tipoDeSuscripcion = "Basic";

function validarSuscripcion(tipoDeSuscripcion){
  if(tipoDeSuscripcion === 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
  }else if(tipoDeSuscripcion === 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
  } else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
  }
}
```
Respuesta solo con un if : 
``` js
let arraySubscriptions = ["free","basic","expert","plus"]
const arrayMessages = ["solo puedes tomar los cursos gratis", 
"puedes tomar casi todos los cursos de Platzi durante un mes", 
"puedes tomar casi todos los cursos de Platzi durante un año", 
"tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]

const usuario = "expert"

for (let index = 0; index < arraySubscriptions.length; index++){
    if (usuario === arraySubscriptions[index]) {
        console.log(`Tu subscripcion ${arraySubscriptions[index]} tiene acceso a ${arrayMessages[index]}`)
    }
}
```
# Listas
## 1️⃣ Responde las siguientes preguntas:
### ¿Qué es un array?
Nosotros usamos arrays cuando queremos crear y almacenar una lista de multiples items en una sola variable, son especialmente utiles cuando creamos colecciones ordenadas
### ¿Qué es un objeto?
Los objetos son utilizados para representar una "cosa" en mi codigo, basicamente cualquier cosa que este hecha o pueda ser definida por un par de caracteristicas, esas caracteristicas son llamados propiedades que consisten en parejas clave valor
### ¿Cuándo es mejor usar objetos o arrays?
Ambos son considerados como datos especiales en JavaScript. Los objetos representan un tipo especial de dato que es mutable y puede ser usado para almacenar colecciones de datos.

Arrays son un tipo especial de variable que tambien es mutable y puede ser usado para almacenar una lista de valores
### ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
## 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
``` js
let array = ["manzana","durazno","pera"];

function firstElement(array){
  return array[0]
}
```
## 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
``` js
function firstElement(array){
  for (let element of array) {
      console.log(element)
  }
}
```
## 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
``` js
let arrayObj = [{nombre: "manzana"},{nombre: "pera"},{nombre: "durazno"},{nombre: "mango"}]

function firstElementObj(array){
  for (let element of array) {
      console.log(element.nombre)
  }
}
```
