const analitica = require("./analitica");
const {generarVentas} = require("./generador");

const muestra = [100, 1000, 10000, 100000];
const resultados = [];

for (const n of muestra){
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

console.table(resultados)

const muestraRecurrentes=[1000, 2000, 4000, 8000, 10000,]
for (const n of muestraRecurrentes){
    const lote = generarVentas(n);
    console.time(`n=${n}`);
    analitica.clientesRecurrentes(lote);
    console.timeEnd(`n=${n}`);
}


const lote = generarVentas(10000)
const cadena = analitica.totalCiudadCadena(lote, "Medellín");
const unaPasada = analitica.totalCiudadUnaPasada(lote, "Medellín");
console.log(cadena === unaPasada ? "ok" : "diferente")

const lote10k = generarVentas(10000);
console.time(`Cadena`);
analitica.totalCiudadCadena(lote10k, "Medellín");
console.timeEnd(`Cadena`);
console.time(`unPasada`);
analitica.totalCiudadUnaPasada(lote10k, "Medellín");
console.timeEnd(`unPasada`);
console.time(`unidadesVendidas`);
analitica.unidadesVendidas(lote10k);
console.timeEnd(`unidadesVendidas`);
console.time(`ticketPromedio`);
analitica.ticketPromedio(lote10k);
console.timeEnd(`ticketPromedio`);
console.time(`totalVendidoM`);
analitica.totalVendidoM(lote10k);
console.timeEnd(`totalVendidoM`);
console.time(`unidadesVendidasM`);
analitica.unidadesVendidasM(lote10k);
console.timeEnd(`unidadesVendidasM`);
console.time(`ventasPorCiudadM`);
analitica.ventasPorCiudadM(lote10k,  "Medellín");
console.timeEnd(`ventasPorCiudadM`);
console.time(`totalPorCiudad`);
analitica.totalPorCiudad(lote10k);
console.timeEnd(`totalPorCiudad`);
console.time(`unidadesPorProducto`);
analitica.unidadesPorProducto(lote10k);
console.timeEnd(`unidadesPorProducto`);
console.time(`topProductosPorValor`);
analitica.topProductosPorValor(lote10k, 3);
console.timeEnd(`topProductosPorValor`);
console.time(`ventasDelDia`);
analitica.ventasDelDia(lote10k, "2026-09-07");
console.timeEnd(`ventasDelDia`);
console.time(`topProductosPorValor`);
analitica.topProductosPorValor(lote10k, "2026-09-07");
console.timeEnd(`topProductosPorValor`);