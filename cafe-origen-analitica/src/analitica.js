const ventas=require("./datos");

const valorVenta = (venta) => venta.cantidad * venta.precio;

function totalVendido(ventas){
    let total = 0;
    for (const v of ventas){
        total += valorVenta(v);
    } 
    return total;
}

//prueba
const resultado = totalVendido(ventas);
console.log("Total vendido:", resultado);

function unidadesVendidas(ventas){
    let unidades = 0;
    for (const v of ventas){
        unidades += v.cantidad;
    }
    return unidades;
}

//prueba
const unidadesVdas = unidadesVendidas(ventas);
console.log("Unidades vendidas:", unidadesVdas);

function ventaMayor (ventas) {
    if(ventas.length===0) return null;
    let mayor = ventas[0];
    for (const v of ventas){
        if (valorVenta(v) > valorVenta(mayor)) mayor = v;
    }
    return mayor;
}
//prueba
const Mayor= ventaMayor(ventas);
console.log("mayor venta", Mayor);

