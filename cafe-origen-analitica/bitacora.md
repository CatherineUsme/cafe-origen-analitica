# Semana 1 

## Reto 1: primer tueste

### Diccionario de Datos (`ventas`)

| Propiedad  | Tipo     | Significado                                                                |
| `id`       | `number` | Identificador único numérico de cada registro de venta.                    |
| `fecha`    | `string` | Fecha en que se realizó la venta (en formato ISO `AAAA-MM-DD`).            |
| `cliente`  | `string` | Código identificador único del cliente que realizó la compra (ej. `"C01"`).|
| `producto` | `string` | Nombre y presentación (gramaje) del café vendido.                          |
| `ciudad`   | `string` | Ciudad donde se registró o entregó la venta.                               |
| `cantidad` | `number` | Número de unidades o bolsas vendidas en la transacción.                    |
| `precio`   | `number` | Precio unitario de cada producto en pesos colombianos (COP).               |


### Casos borde detectados

Problemas en los datos                         | Decision
Ciudades: hay un Medellín con m minuscula      | Estandarizar antes de procesar
Cantidades: la venta 8 tiene cantidad en cero  | No cuenta en el ticket
Clientes: hay clientes con varias ventas       | Es válido



## Reto 2: los numeros del dia

### Plan indicador - pseudocodigo

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

### Prueba entradas 

**Caso Arreglo vacio**:
**totalVendido** = debe devolver cero, al no haber ventas que sumar
**unidadesVendidas** = debe devolver cero, al no haber ventas que sumar
**ventaMayor** = debe devolver null, porque no hay ningun objeto dentro del arreglo
**ticketPromedio** = debe devolver cero, al no haber ventas que promediar
**ventasPorCiudad** = debe devolver cero, al no haber ventas que sumar

### Tabla de trazas

## Tabla de Trazas: `ticketPromedio(ventas)`

| Iteración (`id`) | `cantidad` | `precio` | ¿`v.cantidad > 0`? | `valorVenta(v)` | `total`  | `validas` |
| :--------------- | :--------- | :------- | :----------------- | :-------------- | :------- | :---------|
| **Inicio**       | —          | —        | —                  | —               | `0`      | `0`       |
| `1`              | `2`        | `42000`  | ✅ Sí (`true`)     | `84000`         | `84000`  | `1`       |
| `2`              | `1`        | `26000`  | ✅ Sí (`true`)     | `26000`         | `110000` | `2`       |
| `3`              | `1`        | `95000`  | ✅ Sí (`true`)     | `95000`         | `205000` | `3`       |
| `4`              | `1`        | `42000`  | ✅ Sí (`true`)     | `42000`         | `247000` | `4`       |
| `5`              | `3`        | `45000`  | ✅ Sí (`true`)     | `135000`        | `382000` | `5`       |
| `6`              | `2`        | `26000`  | ✅ Sí (`true`)     | `52000`         | `434000` | `6`       |
| `7`              | `1`        | `120000` | ✅ Sí (`true`)     | `120000`        | `554000` | `7`       |
| `8`              | `0`        | `42000`  | ❌ No (`false`)    | *(Se omite)*    | `554000` | `7`       |
| `9`              | `2`        | `45000`  | ✅ Sí (`true`)     | `90000`         | `644000` | `8`       |
| `10`             | `4`        | `42000`  | ✅ Sí (`true`)     | `168000`        | `812000` | `9`       |
| `11`             | `1`        | `95000`  | ✅ Sí (`true`)     | `95000`         | `907000` | `10`      |
| `12`             | `3`        | `26000`  | ✅ Sí (`true`)     | `78000`         | `985000` | `11`      |

### Cálculo Final (Retorno)
* **`total` final:** `$985.000`
* **`validas` final:** `11` *(el registro `id: 8` fue excluido por tener `cantidad: 0`)*
* **Resultado (`985000 / 11`):** **`89545.45`** *(aproximadamente `$89.545,45`)*


## Tabla de Trazas: `ventasPorCiudad(ventas, "Medellín")`

* **Valor buscado normalizado (`buscada`):** `"medellín"`

| Iteración (`id`) | `v.ciudad` (original) | Normalizado  | ¿Coincide con `buscada`? | `valorVenta(v)` | `total` (acumulado) |
| :--------------- | :-------------------- | :------------| :----------------------- | :-------------- | :------------------ |
| **Inicio**       | —                     | —            | —                        | —               | `0`                 |
| `1`              | `"Medellín"`          | `"medellín"` | ✅ Sí (`true`)           | `84000`         | `84000`             |
| `2`              | `"Bogotá"`            | `"bogotá"`   | ❌ No (`false`)          | *(Se omite)*    | `84000`             |
| `3`              | `"Cali"`              | `"cali"`     | ❌ No (`false`)          | *(Se omite)*    | `84000`             |
| `4`              | `"Medellín"`          | `"medellín"` | ✅ Sí (`true`)           | `42000`         | `126000`            |
| `5`              | `"medellín"`          | `"medellín"` | ✅ Sí (`true`)           | `135000`        | `261000`            |
| `6`              | `"Bogotá"`            | `"bogotá"`   | ❌ No (`false`)          | *(Se omite)*    | `261000`            |
| `7`              | `"Bogotá"`            | `"bogotá"`   | ❌ No (`false`)          | *(Se omite)*    | `261000`            |
| `8`              | `"Cali"`              | `"cali"`     | ❌ No (`false`)          | *(Se omite)*    | `261000`            |
| `9`              | `"Cali"`              | `"cali"`     | ❌ No (`false`)          | *(Se omite)*    | `261000`            |
| `10`             | `"Pereira"`           | `"pereira"`  | ❌ No (`false`)          | *(Se omite)*    | `261000`            |
| `11`             | `"Medellín"`          | `"medellín"` | ✅ Sí (`true`)           | `95000`         | `356000`            |
| `12`             | `"Bogotá "`           | `"bogotá"`   | ❌ No (`false`)          | *(Se omite)*    | `356000`            |

### Resultado Final (Retorno)
* **Registros que sumaron:** `id: 1` ($84.000), `id: 4` ($42.000), `id: 5` ($135.000) e `id: 11` ($95.000).
* **`total` devuelto:** **`356000`** (`$356.000`).