let nombres = ['Juan', 'Pedro', 'Pablo', 'Luis', 'Ana', 'Maria', 'Jose', 'Luisa', 'Pepe', 'Pepa', 'Pepita', 'Pepito', 'Pepin']

//!METODOS INMUTABLES

// INFO METODO FILTER
let nombresFiltradosPorJ = nombres.filter(function (nombre) {
    return nombre[0] === 'J'
})
//console.table(nombresFiltradosPorJ)

// INFO METODO MAP
let nombresEnMayuscula = nombres.map(function (nombre){
    ConversionMayuscula = nombre.toUpperCase()
    return ConversionMayuscula
})
//console.table(nombresEnMayuscula)

// INFO METODO FIND
let primerNombreConJ = nombres.find(function(nombre, ){

    return nombre[0] === 'J'
})
//console.table(primerNombreConJ)

//INFO METODO JOIN
let nombresSeparadosPorGuion = nombres.join(' - ')
console.log(nombresSeparadosPorGuion)

//! METODOS MUTABLES

//INFO METODO PUSH
let nombresActualizados = nombres.push('Maria','Alberto')
//console.table(nombresActualizados)

//INFO METODO UNSHIFT
let agregarNombreAlPrincipio = nombres.unshift('Juan')
//console.table(agregarNombreAlPrincipio)

//INFO METODO POP
let eliminarUltimoNombre = nombres.pop()
//console.table(eliminarUltimoNombre)

//INFO METODO SHIFT
let eliminarPrimerNombre = nombres.shift()
//console.table(eliminarPrimerNombre)

//INFO METODO SLICE
let nombresCortados = nombres.slice(0,3)
//console.table(nombres)
//console.table(nombresCortados)
