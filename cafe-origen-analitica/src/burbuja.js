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

