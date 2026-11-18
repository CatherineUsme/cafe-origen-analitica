const productos = [
  { nombre: "Teclado", precio: 80 },
  { nombre: "Mouse", precio: 45 },
  { nombre: "Monitor", precio: 200 },
  { nombre: "Audífonos", precio: 60 }
];

function ordenarPorPrecio(lista) {
  const n = lista.length;

  // Ciclo externo: controla cuántas pasadas completas damos
  for (let i = 0; i < n - 1; i++) {
    
    // Ciclo interno: compara vecinos y empuja el más caro al final
    // Restamos "i" porque los últimos elementos ya quedaron ordenados
    for (let j = 0; j < n - 1 - i; j++) {
      
      if (lista[j].precio > lista[j + 1].precio) {
        // Intercambio (swap) usando una variable temporal
        const temp = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = temp;
      }
      
    }
  }
  return lista;
}

console.log(ordenarPorPrecio(productos));

const array_num=[5,6,8,4,9]
const n=array_num.length

function ordenar(array_num){
    for (let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - 1 - i; j++){
            if(array_num[j]> array_num[j+1]){
                const temp = array_num[j]
                array_num[j]=array_num[j+1]
                array_num[j+1]=temp
            }
        }
    }
    return array_num

}
console.log(array_num)


const estudiantes = [
  { nombre: "Ana",   ciudad: "Medellín", notas: [4.5, 3.8, 4.0] },
  { nombre: "Luis",  ciudad: "Bogotá",   notas: [2.5, 3.0, 2.8] },
  { nombre: "Sara",  ciudad: "Medellín", notas: [3.2, 3.6, 3.1] },
  { nombre: "Tomás", ciudad: "Cali",     notas: [] }
];

function promedio(notas) {
  if (notas.length === 0) return 0;          // caso borde
  return notas.reduce((s, n) => s + n, 0) / notas.length;
}

const conPromedio = estudiantes.map(e => ({ ...e, prom: promedio(e.notas) }));

const reprobados = conPromedio
  .filter(e => e.prom < 3.0)
  .map(e => e.nombre);                        // ["Luis", "Tomás"]

const mejor = conPromedio.reduce((m, e) => e.prom > m.prom ? e : m);   // Ana

const aprobadosPorCiudad = {};
for (const e of conPromedio) {
  if (e.prom >= 3.0) {
    aprobadosPorCiudad[e.ciudad] = (aprobadosPorCiudad[e.ciudad] || 0) + 1;
  }
}
// { Medellín: 2 }

console.log(reprobados);
console.log(mejor.nombre);
console.log(aprobadosPorCiudad);