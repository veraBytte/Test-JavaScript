let nombres = ['Juan', 'Pedro', 'Pablo', 'Luis', 'Ana', 'Maria', 'Jose', 'Luisa', 'Pepe', 'Pepa', 'Pepita', 'Pepito', 'Pepin']

let nombresFiltradosPorJ = nombres.filter(function (nombre) {
    return nombre[0] === 'J'
})
//console.table(nombresFiltradosPorJ)

let nombresEnMayuscula = nombres.map(function (nombre){
    ConversionMayuscula = nombre.toUpperCase()
    return ConversionMayuscula
})
//console.table(nombresEnMayuscula)

let primerNombreConJ = nombres.find(function(nombre, ){

    return nombre[0] === 'J'
})
console.table(primerNombreConJ)