// marca, modelo, precio, km, color, cuotas, anio, patente, vendido.

//El primer auto es un Ford Fiesta Azul, del 2019, con 200 kilómetros, cuyo precio es 150000, disponible en 12 cuotas, con la patente APL123 que no está vendido.
//El segundo auto es un Toyota Corolla Blanco, del 2019, 0 kilómetros, cuyo precio es 100000, disponible en 14 cuotas, con la patente JJK116 que no está vendido.


let autos = [ {
    marca: 'Ford',
    modelo: 'Fiesta',
    precio: 150000,
    km: 200,
    color: 'Azul',
    cuotas: 12, //12500
    anio: 2019,
    patente: 'APL123',
    vendido: false,
}, 
{
    marca: 'Toyota',
    modelo: 'Corolla',
    precio: 100000,
    km: 0,
    color: 'Blanco',
    cuotas: 14, //7143
    anio: 2019,
    patente: 'JJK116',
    vendido: false,
}, 
{
    marca: 'Renault',
    modelo: 'Clio',
    precio: 120000,
    km: 40000,
    color: 'Gris',
    cuotas: 6, //20000
    anio: 2013,
    patente: 'ABC123',
    vendido: false,
}, 
{
    marca: 'Volkswagen',
    modelo: 'Gol',
    precio: 200000,
    km: 70,
    color: 'Azul',
    cuotas: 24, //8333
    anio: 2018,
    patente: 'GGG444',
    vendido: false,
}
]

//console.log(autos[1].marca);

module.exports = autos;