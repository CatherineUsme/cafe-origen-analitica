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
const resultado = totalVendido(ventas);
console.log("Total vendido:", resultado);

//funcion unidadesVendidas
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
console.log(ventaMayor(ventas));


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
console.log(ticketPromedio(ventas));

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
console.log(ventasPorCiudad(ventas, "medellín"));
