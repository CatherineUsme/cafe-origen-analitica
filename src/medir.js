const analitica = require("./analitica");
const {generarVentas} = require("./generador");

const muestra = [100, 1000, 10000, 100000];
const resultados = [];

/* for (const n of muestra){
    const lote = generarVentas(n);
    const c1={ops:0};
    const c2={ops:0};
    const c3={ops:0};
    const c4={ops:0};
    analitica.totalVendidoInstrumentada(lote, c1);
    analitica.ventaMayorInstrumentada(lote, c2);
    analitica.totalPorCiudadInstrumentada(lote, c3);
    analitica.primeraVentaInstrumentada(lote,c4);

    resultados.push({
        tamLote: n,
        totalVendido: c1.ops,
        ventaMayor: c2.ops,
        totalPorCiudad: c3.ops,
        primeraVenta:c4.ops
    })
}

console.table(resultados)*/

const muestraRecurrentes=[1000, 2000, 4000, 8000, 16000,100000]

/*for (const n of muestraRecurrentes){
    const lote = generarVentas(n);
    console.time(`n=${n}`);
    analitica.clientesRecurrentes(lote);
    console.timeEnd(`n=${n}`);
}*/


const lote=generarVentas(10000)
const cadena=analitica.totalCiudadCadena(lote, "Medellín");
const unaPasada=analitica.totalCiudadUnaPasada(lote, "Medellín");
console.log(cadena===unaPasada ? "ok" : "diferente")
