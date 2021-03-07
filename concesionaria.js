//1) necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del archivo donde estás trabajando.
//2) necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.
//3) nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.

let autos = require('./autos.js');


let concesionaria = {
    autos: autos,
    
    //crear la funcionalidad buscarAuto que reciba por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null.
    buscarAuto: function(patenteBuscada) {
        //con patenteBuscada, tengo que recorrer el array autos y buscar en los parámetros patente cuál es igual a la patente buscada.
        let autoFiltrado = autos.filter((parametro) => {
            return parametro.patente == patenteBuscada;
        });
        if (autoFiltrado.length > 0) {
            autoFiltrado = autoFiltrado[0];
            return autoFiltrado;    
        } else {
            autoFiltrado = null;
            return autoFiltrado;
        }
    },
    //crear la funcionalidad venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.
    venderAuto: function(patenteBuscada) {
        let autoALaVenta = this.buscarAuto(patenteBuscada);
        if (autoALaVenta == null) {
            return autoALaVenta;
        } else {
            autoALaVenta.vendido = true;
            return autoALaVenta;
        }
    },
    autosParaLaVenta: function () {
        let autosDisponibles = autos.filter((parametro) => {
            return parametro.vendido == false;
        });
        return autosDisponibles;
    },
    autosNuevos: function () {
        let autoALaVenta = this.autosParaLaVenta();
        let autos0Km = autoALaVenta.filter((parametro) => {
            return parametro.km < 100;
        });
        return autos0Km;
    },
    listaDeVentas: function () {
        let autosVendidos = autos.filter ((parametro) => {
            return parametro.vendido == true;
        });
        let importeVentas = autosVendidos.map((parametro) => {
            return parametro.precio;
        });
        return importeVentas;
    },
    totalDeVentas: function () {
        let importeVentas = this.listaDeVentas();
        if (importeVentas[0] == undefined) {
            return 0;
        }
        let ventasTotales = importeVentas.reduce((acumulador, parametro) => {
            return acumulador + parametro;
        });
        return ventasTotales;        
    },
    puedeComprar: function (auto, persona) {
        if (auto.precio < persona.capacidadDePagoTotal && (auto.precio/auto.cuotas) < persona.capacidadDePagoEnCuotas) {
            return true;
        } else return false;
    },
    autosQuePuedeComprar: function (persona) {
        let autoALaVenta = this.autosParaLaVenta();
        let autosComprables = [];
        for (i=0; i<autoALaVenta.length; i++) {
            if (this.puedeComprar(autoALaVenta[i], persona) == true) {
                autosComprables.push(autoALaVenta[i]);
            }
        }
        return autosComprables;
    },
}

/*
let persona = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 21000,
    capacidadDePagoTotal: 200000,
    }
*/
//console.log(concesionaria.venderAuto('AAA111'));
console.log(concesionaria.autosQuePuedeComprar(persona));
