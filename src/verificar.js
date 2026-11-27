const ventas = require("./datos");
const analitica = require("./analitica");
const CATALOGO = require ("./catalogo");
const {generarVentas} = require("./generador");




function comparar (nombreIndicador, resulCiclo, resulMetodo){
  const sonIguales = JSON.stringify (resulCiclo) === JSON.stringify (resulMetodo);
  const veredicto = sonIguales ? "OK" : "DIFERENTE";
  console.log(`${nombreIndicador}: ${veredicto}`)
}


comparar(
  "Total vendido",
  analitica.totalVendido(ventas),
  analitica.totalVendidoM(ventas)
)

comparar(
  "Unidades Vendidas",
  analitica.unidadesVendidas(ventas),
  analitica.unidadesVendidasM(ventas)
)

comparar(
  "Ventas por ciudad",
  analitica.ventasPorCiudad(ventas, "Medellín"),
  analitica.ventasPorCiudadM(ventas,  "Medellín")
)

//Comparacion metodos clientes recurrentes

//comparacion ventas dia 1
const origOrdenado = JSON.stringify([ ... analitica.clientesRecurrentes(ventas)].sort());
const setOrdenado = JSON.stringify([... analitica.clientesRecurrentesSet(ventas)].sort());
const mapOrdenado = JSON.stringify([... analitica.comprasPorCliente(ventas)].sort())
console.log({ origOrdenado, setOrdenado, mapOrdenado })
const estadoDia1 = (origOrdenado === setOrdenado && setOrdenado ===  mapOrdenado) ? "ok" : "verificar";
console.log(`Clientes recurrentes dia 1 ${estadoDia1}`)

//comparacion con 5000 ventas
const lote = generarVentas(5000);
const origOrdenado2 = JSON.stringify([ ... analitica.clientesRecurrentes(lote)].sort());
const setOrdenado2 = JSON.stringify([... analitica.clientesRecurrentesSet(lote)].sort());
const mapOrdenado2 = JSON.stringify([... analitica.comprasPorCliente(lote)].sort())
const estado5000 = (origOrdenado2 === setOrdenado2 && setOrdenado2 ===  mapOrdenado2) ? "ok" : "verificar";
console.log(`Clientes recurrentes 5000 ventas ${estado5000}`)

//Comparaciones Combo regalo
const casosCombo=[87000 , 61000, 50000];

for( const valor of casosCombo){
  const resBruta = analitica.comboRegalo(CATALOGO, valor);
  const resMap = analitica.comboRegaloMap(CATALOGO, valor);
  const estado= JSON.stringify(resBruta)=== JSON.stringify(resMap) ? "OK" : "Diferente"
  console.log(`Combo Regalo ${valor} : ${estado}`)
}

