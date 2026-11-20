const ventas = require("./datos");
const analitica = require("./analitica");

const formato = (numero) => `$${Math.round(numero).toLocaleString("es-CO")}`

//calcular los datos
const totalVendido = analitica.totalVendidoM(ventas);
const unidadesTotales=analitica.unidadesVendidasM(ventas);
const ventaMayor=analitica.ventaMayor(ventas);
const ticketPromedio=analitica.ticketPromedio(ventas);
const totalPorCiudad=analitica.totalPorCiudad(ventas);
const unidadesPorProducto=analitica.unidadesPorProducto(ventas);
const topProductosPorValor=analitica.topProductosPorValor(ventas, 3)
const diaVentas=analitica.ventasDelDia(ventas, "2026-09-04");
const diaSinVentas=analitica.ventasDelDia(ventas, "2026-09-07");


// impresion repote

console.log(`=======================================================
=                REPORTE VENTAS CAFE                  =
======================================================= `)

console.group(`1. Resumen General
-------------------------------------------------------`);
console.log(`${"Total vendido:".padEnd(35)} ${formato(totalVendido).padStart(15)}`)
console.log(`${"Unidades vendido:".padEnd(35)} ${String(unidadesTotales).padStart(15)}`)
console.log(`${"Mayor venta:".padEnd(24)} ${ventaMayor.producto} (${String(ventaMayor.cantidad)} uds)`)
console.log(`${"ticket promedio:".padEnd(35)} ${formato(ticketPromedio).padStart(15)}`)
console.groupEnd();
console.log("");

console.group(`2. Ventas por ciudad
-------------------------------------------------------`);
for (const [ciudad , total] of Object.entries(totalPorCiudad)){
    const ciudadCapitalizada= ciudad.charAt(0).toUpperCase() + ciudad.slice(1)
    console.log(`${ciudadCapitalizada.padEnd(35)} ${formato(total).padStart(15)}`)
}
console.groupEnd();
console.log("");

console.group(`3. Ventas por producto
-------------------------------------------------------`);
for (const [producto , total] of Object.entries(unidadesPorProducto)){
    console.log(`${producto.padEnd(35)} ${(String(total) + " und").padStart(15)}`)
}
console.groupEnd();
console.log("");

console.group(`4. Top 3 Productos por valor
-------------------------------------------------------`);
for (const [producto , total] of topProductosPorValor){
    console.log(`${producto.padEnd(35)} ${formato(total).padStart(15)}`)
}
console.groupEnd();
console.log("");

console.group(`5. Ventas Septiembre 
-------------------------------------------------------`);
for (let i=1; i<=8; i++){
    dia=String(i).padStart(2,"0");
    fecha=`2026-09-${dia}`
    console.log(`${fecha.padEnd(35)} ${formato(analitica.ventasDelDia(ventas,fecha)).padStart(15)}`)
}
console.groupEnd();
console.log("=======================================================");