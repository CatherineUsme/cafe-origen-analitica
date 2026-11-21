const ventas=require("./datos");
console.log("Registros: ", ventas.length);
console.log("Primero: ",ventas[0]);
console.log("Ultimo: ", ventas[ventas.length-1]);
console.log("Producto de la posicion 4: ", ventas[4].producto)
console.table(ventas);
console.log(ventas.map(v=> `[${v.ciudad}]`).join(" "));

const array=[3, 2, 7, 1, 0]
array.pop()
console.log(array[array.length-1])