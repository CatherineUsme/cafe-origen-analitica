const ventas=require("./datos");


//Funcion valorVenta
const valorVenta = (venta) => venta.cantidad * venta.precio;

//funcion totalVendido
function totalVendido(ventas){
    let total = 0;
    for (const v of ventas){
        total += valorVenta(v);
    } 
    return total;
}

//prueba
//const resultado = totalVendido(ventas);
//console.log("Total vendido:", resultado);

//funcion unidadesVendidas
function unidadesVendidas(ventas){
    let unidades = 0;
    for (const v of ventas){
        unidades += v.cantidad;
    }
    return unidades;
}

//prueba
//const unidadesVdas = unidadesVendidas(ventas);
//console.log("Unidades vendidas:", unidadesVdas);


//funcion ventaMayor
function ventaMayor (ventas) {
    if(ventas.length===0) return null;
    let mayor = ventas[0];
    for (const v of ventas){
        if (valorVenta(v) > valorVenta(mayor)) mayor = v;
    }
    return mayor;
}
//prueba
//console.log(ventaMayor(ventas));


//funcion ticketPromedio
function ticketPromedio (ventas){
    let valida=0;
    let total=0;
    for (const v of ventas){
        if (v.cantidad !== 0){
            valida += 1;
            total += valorVenta(v);
        }
    }
    return valida===0 ? 0 : total / valida
}

//prueba
//console.log(ticketPromedio(ventas));

//funcion ventasPorCiudad
function ventasPorCiudad(ventas, ciudad){
    buscada=ciudad.trim().toLowerCase();
    let total=0;
    for (const v of ventas){
        if(v.ciudad.trim().toLowerCase()===buscada) {
            total += valorVenta(v);
        }
    }
    return total 
}

//prueba
//console.log(ventasPorCiudad(ventas, "medellín"));


//funcion totalVendido con metodos
const totalVendidoM = (ventas) => ventas.reduce((acum, v) => acum + valorVenta(v) ,0)
 //prueba
//console.log("Total ventas" , totalVendidoM(ventas))

//funcion unidadesVendidasM con metodos
const unidadesVendidasM = (ventas) => ventas.reduce((acum, v)=> acum + v.cantidad , 0)
//prueba
//console.log("Unidades vendidas", unidadesVendidasM(ventas))

//funcion ventasPorCiudadM con metodos
function ventasPorCiudadM (ventas, ciudad) {
    return ventas.reduce((acum, v) => v.ciudad.trim().toLowerCase()===ciudad.trim().toLowerCase() ? acum + valorVenta(v): acum , 0)
}
//prueba
//console.log(ventasPorCiudadM(ventas, "Medellín"));


// funcion ventas totales por ciudad 
function totalPorCiudad (ventas) {
    return ventas.reduce((grupos, v) => {
        const clave=v.ciudad.trim().toLowerCase();
        grupos[clave]=(grupos[clave] || 0 ) + valorVenta(v);
        return grupos;
    },{});
}
//prueba
//console.log(totalPorCiudad (ventas));


//funcion cantidad de unidades vendidas por producto
function unidadesPorProducto (ventas) {
    return ventas.reduce((grupo, v)=>{
        grupo[v.producto]=(grupo[v.producto] || 0) + v.cantidad;
        return grupo;
    },{});
}
//console.log(unidadesPorProducto (ventas));


// funcion top k en ventas
function topProductosPorValor(ventas, k){
    const porProducto = ventas.reduce ((grupo,v)=>{
        grupo[v.producto]=(grupo[v.producto] || 0 ) + valorVenta(v);
        return grupo;
    },{});
    return Object.entries(porProducto)
    .sort((a,b) => b[1] - a[1])
    .slice(0, k);
}
//console.log(topProductosPorValor(ventas, 3));

function ventasDelDia(ventas, fecha){
    return ventas.reduce((acum,v)=> v.fecha===fecha ? acum + valorVenta(v) : acum  ,0)
}
console.log(ventasDelDia(ventas, "2026-09-07"));



//funciones instrumentadas
function totalVendidoInstrumentada(ventas, contador){
    let total = 0;
    for (const v of ventas){
        contador.ops++;
        total += valorVenta(v);
    } 
    return total;
}

function ventaMayorInstrumentada (ventas, contador) {
    if(ventas.length===0) return null;
    let mayor = ventas[0];
    for (const v of ventas){
        contador.ops++; //contador visita
        contador.ops++; //contador comparacion
        if (valorVenta(v) > valorVenta(mayor)) mayor = v;
    }
    return mayor;
}

function totalPorCiudadInstrumentada (ventas, contador) {
    return ventas.reduce((grupos, v) => {
        const clave=v.ciudad.trim().toLowerCase();
        grupos[clave]=(grupos[clave] || 0 ) + valorVenta(v);
        contador.ops++; //contador visita
        return grupos;
    },{});
}

function primeraVentaInstrumentada (ventas, contador){
    if(ventas.length===0) return null;
    contador.ops++;
    return ventas[0];
}

function clientesRecurrentes(ventas) {
  const recurrentes = [];
  for (let i = 0; i < ventas.length; i++) {
    for (let j = i + 1; j < ventas.length; j++) {
      if (ventas[i].cliente === ventas[j].cliente &&
          !recurrentes.includes(ventas[i].cliente)) {
        recurrentes.push(ventas[i].cliente);
      }
    }
  }
  return recurrentes;
}

//prueba
//console.log(clientesRecurrentes(ventas))

function totalCiudadCadena(ventas, ciudad){
    const buscada=ciudad.trim().toLowerCase();
    return ventas
    .map(v=> ( {...v, ciudad: v.ciudad.trim().toLowerCase()}))
    .filter(v=> v.ciudad===buscada)
    .map(v=>valorVenta(v))
    .reduce((acum,v)=>acum+ v ,0)
}

function totalCiudadUnaPasada(ventas, ciudad){
    const buscada=ciudad.trim().toLowerCase();
    let total =0
    for (const v of ventas){
        if (v.ciudad.trim().toLowerCase()===buscada){
            total +=valorVenta(v)
        }
    }
    return total
}

function clientesRecurrentesSet(ventas){
    const vistos = new Set();
    const recurrentes = new Set();
    for (const v of ventas){
        if (vistos.has(v.cliente)) recurrentes.add(v.cliente);
        else vistos.add(v.cliente);
    }
    return [... recurrentes]

}
//console.log(clientesRecurrentesSet(ventas))

function comprasPorCliente(ventas){
    const conteo = new Map();
    for (const v of ventas){
        const clave = v.cliente
        conteo.set(clave, (conteo.get(clave) || 0) +1 )
    }
    const recurrentes = [];
    for (const [cliente, compras] of conteo){
        if (compras > 1) recurrentes.push(cliente);
    }
    return recurrentes
}

module.exports = {
    totalVendido,
    totalVendidoM,
    unidadesVendidas,
    unidadesVendidasM,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad,
    ventasPorCiudadM,
    totalPorCiudad,
    topProductosPorValor,
    unidadesPorProducto,
    ventasDelDia,
    totalVendidoInstrumentada,
    ventaMayorInstrumentada,
    totalPorCiudadInstrumentada,
    primeraVentaInstrumentada,
    clientesRecurrentes,
    totalCiudadCadena,
    totalCiudadUnaPasada, 
    clientesRecurrentesSet,
    comprasPorCliente
};