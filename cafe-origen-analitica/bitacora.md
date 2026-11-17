## Reto 1: primer tueste

## Diccionario de Datos (`ventas`)

| Propiedad  | Tipo     | Significado                                                                |
| `id`       | `number` | Identificador único numérico de cada registro de venta.                    |
| `fecha`    | `string` | Fecha en que se realizó la venta (en formato ISO `AAAA-MM-DD`).            |
| `cliente`  | `string` | Código identificador único del cliente que realizó la compra (ej. `"C01"`).|
| `producto` | `string` | Nombre y presentación (gramaje) del café vendido.                          |
| `ciudad`   | `string` | Ciudad donde se registró o entregó la venta.                               |
| `cantidad` | `number` | Número de unidades o bolsas vendidas en la transacción.                    |
| `precio`   | `number` | Precio unitario de cada producto en pesos colombianos (COP).               |


## Casos borde detectados

Problemas en los datos                         | Decision
Ciudades: hay un Medellín con m minuscula      | Estandarizar antes de procesar
Cantidades: la venta 8 tiene cantidad en cero  | No cuenta en el ticket
Clientes: hay clientes con varias ventas       | Es válido



## Reto 2: los numeros del dia

## Plan indicador - pseudocodigo
1. cuánto se vendió en total:
-Que recorre:el arreglo de ventas
-Que condicion aplico: ninguna, todas se suman
-Que acumulo: la nueva constante valorVenta( cantidad * precio) 
-Con que valor inicio: totalVentas=0
2. cuántas unidades salieron:
-Que recorre: el arreglo de ventas
-Que condicion aplico: ninguna, todas se suman
-Que acumulo: la propiedad cantidad
-Con que valor inicio: unidades=0
3. cuál fue la venta más grande:
-Que recorre: el arreglo de ventas
-Que condicion aplico: tengo un pibote (mayor) y voy comparando cada valor venta con ese valor y si es mayor reemplazo ese pibote
-Que acumulo: no se acumula solo se compara
-Con que valor inicio: como se devuelve todo el objeto arranco pretendiento que la posicion cero es el mayor. mayor=ventas[0]
4. cuánto gasta en promedio un cliente por compra (el ticket promedio):
-Que recorre: el arreglo de ventas
-Que condicion aplico: venta valida, cantidad >0
-Que acumulo:se reuntiliza totalVenta y se divide por el total de ventas validas
-Con que valor inicio: desde la posicion 0

