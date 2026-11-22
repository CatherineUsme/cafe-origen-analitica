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

### Punto 1: Plan indicador - pseudocodigo

#### 1. total Vendido:
    -Que recorre:el arreglo de ventas
    -Que condicion aplico: ninguna, todas se suman
    -Que acumulo: la nueva constante valorVenta( cantidad * precio) 
    -Con que valor inicio: totalVentas=0


#### 2.  cuántas unidades salieron:
    -Que recorre: el arreglo de ventas
    -Que condicion aplico: ninguna, todas se suman
    -Que acumulo: la propiedad cantidad
    -Con que valor inicio: unidades=0

#### 3. cuál fue la venta más grande:
    -Que recorre: el arreglo de ventas
    -Que condicion aplico: tengo un pibote (mayor) y voy comparando cada valor venta con ese valor y si es mayor reemplazo ese pibote
    -Que acumulo: no se acumula solo se compara
    -Con que valor inicio: como se devuelve todo el objeto arranco pretendiento que la posicion cero es el mayor. mayor=ventas[0]

#### 4. cuánto gasta en promedio un cliente por compra (el ticket promedio):
    -Que recorre: el arreglo de ventas
    -Que condicion aplico: venta valida, cantidad >0
    -Que acumulo:se reuntiliza totalVenta y se divide por el total de ventas validas
    -Con que valor inicio: desde la posicion 0

### Punto 6: Prueba entradas 

    **Caso Arreglo vacio**:
    **totalVendido** = debe devolver cero, al no haber ventas que sumar
    **unidadesVendidas** = debe devolver cero, al no haber ventas que sumar
    **ventaMayor** = debe devolver null, porque no hay ningun objeto dentro del arreglo
    **ticketPromedio** = debe devolver cero, al no haber ventas que promediar
    **ventasPorCiudad** = debe devolver cero, al no haber ventas que sumar

### Punto 7 - Tablas de trazas

#### Tabla de Trazas: `ticketPromedio(ventas)`

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


#### Tabla de Trazas: `ventasPorCiudad(ventas, "Medellín")`

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



## Reto 3:  Del ciclo al metodo

### Punto 6. Análisis Funcional por Método

#### 1. `totalVendidoM(ventas)`
  **¿Qué recorro?** El arreglo completo `ventas` usando `.reduce()`.
  **¿Qué filtro?** Ningún elemento; se procesan todos los registros.
  **¿Qué transformo?** Cada objeto de venta `v` en su valor monetario llamando a la función auxiliar `valorVenta(v)` (`v.cantidad * v.precio`).
  **¿Qué acumulo?** En el acumulador `acum` (inicializado en `0`) se va sumando el dinero de cada venta hasta obtener el gran total (`$985.000`).
  **¿Cómo agrupo?** No aplica (reduce todo el arreglo a un único valor numérico).

#### 2. `unidadesVendidasM(ventas)`
  **¿Qué recorro?** El arreglo completo `ventas` usando `.reduce()`.
  **¿Qué filtro?** Ningún elemento; se recorren todas las transacciones.
  **¿Qué transformo?** De cada objeto `v` se extrae únicamente su propiedad numérica `v.cantidad`.
  **¿Qué acumulo?** En `acum` (inicializado en `0`) se suman las unidades de cada registro para obtener el total de productos vendidos (`21` unidades).
  **¿Cómo agrupo?** No aplica (reduce el arreglo a un único número entero).

#### 3. `ventasPorCiudadM(ventas, ciudad)`
  **¿Qué recorro?** El arreglo completo `ventas` usando `.reduce()`.
  **¿Qué filtro?** Se filtran únicamente los registros cuya propiedad `v.ciudad` (normalizada con `.trim().toLowerCase()`) coincida exactamente con la `ciudad` buscada también normalizada.
  **¿Qué transformo?** El texto de entrada `ciudad` y cada `v.ciudad` a minúsculas sin espacios laterales, y cada venta coincidente a su valor monetario mediante `valorVenta(v)`.
  **¿Qué acumulo?** En `acum` (inicializado en `0`) se suma `valorVenta(v)` únicamente cuando la ciudad coincide; de lo contrario, se conserva el acumulado sin cambios (`: acum`).
  **¿Cómo agrupo?** No devuelve un objeto agrupado general, sino que filtra y acumula el total para una ciudad específica.

#### 4. `totalPorCiudad(ventas)`
  **¿Qué recorro?** El arreglo completo `ventas` utilizando `.reduce()`.
  **¿Qué filtro?** Ningún registro; todos entran en la clasificación.
  **¿Qué transformo?**
    * Cada nombre de ciudad se normaliza mediante `v.ciudad.trim().toLowerCase()` para unificar variaciones de escritura (ej. `"Bogotá"` y `"Bogotá "` quedan bajo la misma clave `"bogotá"`, y `"Medellín"` con `"medellín"` bajo `"medellín"`).
    * Cada registro `v` se transforma en su valor monetario con `valorVenta(v)`.
  **¿Qué acumulo?** Dentro de cada clave de ciudad en el objeto acumulador, se suma el valor de la venta actual al subtotal previo (`(grupos[clave] || 0) + valorVenta(v)`).
  **¿Cómo agrupo?** Se utiliza un objeto vacío `{}` como acumulador inicial (`grupos`), creando dinámicamente una propiedad por cada ciudad normalizada (`{ medellín: 356000, bogotá: 276000, cali: 185000, pereira: 168000 }`).

#### 5. `unidadesPorProducto(ventas)`
  **¿Qué recorro?** El arreglo completo `ventas` usando `.reduce()`.
  **¿Qué filtro?** Ningún elemento; se consideran todos los registros del arreglo.
  **¿Qué transformo?** De cada venta `v` se extrae su nombre (`v.producto`) como clave y su cantidad (`v.cantidad`) como valor numérico a sumar.
  **¿Qué acumulo?** En cada propiedad del objeto acumulador se van sumando las unidades vendidas de ese producto (`(grupo[v.producto] || 0) + v.cantidad`).
  **¿Cómo agrupo?** Mediante un objeto vacío `{}` (`grupo`), usando el nombre exacto del producto (`v.producto`) como clave única.

#### 6. `topProductosPorValor(ventas, k)`
  **¿Qué recorro?**
    1. Primero el arreglo `ventas` con `.reduce()` para consolidar ingresos por producto.
    2. Luego el arreglo de parejas `[producto, total]` generado por `Object.entries(porProducto)` usando `.sort()`, `.slice()` y `.map()`.
  **¿Qué filtro?** Mediante `.slice(0, k)` se recortan y conservan únicamente los primeros `k` elementos (el Top `k`) después de ordenar.
  **¿Qué transformo?**
    1. Cada venta `v` en su valor monetario `valorVenta(v)`.
    2. El objeto agrupado `porProducto` en un arreglo de pares `[producto, total]` con `Object.entries()` para poder aplicar `.sort()` sin mutar el arreglo original `ventas`.
    3. Cada pareja ganadora `[producto, total]` en únicamente el texto del nombre del producto usando desestructuración en `.map(([producto]) => producto)`.
  **¿Qué acumulo?** Durante el `.reduce()` inicial, se acumula el dinero total generado por cada producto en el objeto `porProducto`.
  **¿Cómo agrupo?** Se agrupa inicialmente en un objeto `{}` usando `v.producto` como clave, antes de convertirlo a arreglo para ordenarlo de mayor a menor (`(a, b) => b[1] - a[1]`).



## Reto 4:  Analitica el primer reporte

### Punto 4. Documentación de Errores

#### Incidente 1: Ciudad duplicada en el reporte ("Bogotá aparecía dos veces")

  **Síntoma:** Al generar el consolidado de ventas por ciudad, "Bogotá" aparecía dividida en dos entradas separadas dentro del reporte.
  **Entrada que lo produce:** El arreglo `ventas` de `src/datos.js`, específicamente los registros donde la propiedad `ciudad` tiene espacios en blanco al final, así como diferencias entre mayúsculas y minúsculas.
  **Hipótesis:** La función de agrupación estaba utilizando el valor crudo `v.ciudad` directamente como clave del objeto acumulador sin limpiar espacios laterales ni estandarizar mayúsculas/minúsculas.
  **Prueba realizada:**
    1. Se reprodujo el fallo ejecutando una agrupación sin normalización (`grupos[v.ciudad]`), obteniendo dos claves distintas: `{ "Bogotá": 198000, "Bogotá ": 78000 }`.
    2. Se ejecutó la versión actual `totalPorCiudad(ventas)` sobre el mismo arreglo `ventas`.
  **Causa:** Ausencia de normalización de cadenas de texto (`string`) antes de comparar o asignar claves dinámicas en el objeto acumulador.
  **Corrección:** Se normalizó cada nombre de ciudad utilizando `.trim().toLowerCase()` antes de usarlo como clave en `totalPorCiudad(ventas)`.

#### Incidente 2: Ticket promedio devuelve NaN en un día sin ventas

**Síntoma:** Al filtrar las ventas de un día específico sin actividad comercial y calcular su ticket promedio, el sistema mostraba NaN (Not a Number) en lugar de $0.
**Entrada que lo produce:** Un arreglo vacío [] (resultado de filtrar una fecha sin registros, por ejemplo "2026-09-07" o "2026-09-08") o un arreglo donde todos los registros tienen cantidad <= 0 (como el registro id: 8 con cantidad: 0).
**Hipótesis:** Cuando no existen ventas válidas en el arreglo filtrado, tanto el acumulado de dinero (total) como el contador de ventas válidas (validas) terminan el recorrido en 0. Al ejecutar la división final total / validas, JavaScript evalúa 0 / 0, cuyo resultado matemático indefinido es NaN.
**Prueba realizada:**
    Se reprodujo el fallo ejecutando una división directa total / validas sobre un arreglo  vacío, confirmando que el retorno es NaN.
    Se ejecutó nuestra implementación actual ticketPromedio(ventas) con dos escenarios borde: un arreglo vacío [] y un arreglo con una venta de cantidad cero [{ cantidad: 0, precio: 42000 }].
**Causa:** Falta de validación previa para evitar la división entre cero cuando el contador validas es igual a 0.
**Corrección:** Se incorporó una validación explícita antes de realizar la división en ticketPromedio(ventas), asegurando que si validas === 0 la función retorne 0 directamente.



## Reto 5: ¿cuanto cuesta cada reporte?

### Punto 3: predicciones
n=10
**totalVendido** serian 10 operaciones porque solo hay visitas
**ventaMayor** serian 20 operaciones, hay una visita mas una comparacion
**totalPorCiudad** serian 20 operaciones, hay una visita mas una comparacion

### Punto 4: Ejecucion medir.js
┌─────────┬─────────┬──────────────┬────────────┬────────────────┐
│ (index) │ tamLote │ totalVendido │ ventaMayor │ totalPorCiudad │
├─────────┼─────────┼──────────────┼────────────┼────────────────┤
│ 0       │ 100     │ 100          │ 200        │ 100            │
│ 1       │ 1000    │ 1000         │ 2000       │ 1000           │
│ 2       │ 10000   │ 10000        │ 20000      │ 10000          │
│ 3       │ 100000  │ 100000       │ 200000     │ 100000         │
└─────────┴─────────┴──────────────┴────────────┴────────────────┘

###  Punto 5: funcion complejidad constante
┌─────────┬─────────┬──────────────┬────────────┬────────────────┬──────────────┐
│ (index) │ tamLote │ totalVendido │ ventaMayor │ totalPorCiudad │ primeraVenta │
├─────────┼─────────┼──────────────┼────────────┼────────────────┼──────────────┤
│ 0       │ 100     │ 100          │ 200        │ 100            │ 1            │
│ 1       │ 1000    │ 1000         │ 2000       │ 1000           │ 1            │
│ 2       │ 10000   │ 10000        │ 20000      │ 10000          │ 1            │
│ 3       │ 100000  │ 100000       │ 200000     │ 100000         │ 1            │
└─────────┴─────────┴──────────────┴────────────┴────────────────┴──────────────┘

## 8. Análisis de Rendimiento y Complejidad Computacional (Big O)

En esta etapa se construyó un generador de datos sintéticos (`src/generador.js`) y se instrumentaron las funciones de `src/analitica.js` para medir experimentalmente cómo crece el número de operaciones básicas cuando aumenta el volumen de ventas (`n`)[cite: 4].

### 8.1. Predicción Inicial (Antes de Medir)
* **Hipótesis:** Si el tamaño de entrada `n` se multiplica por 10, el número de operaciones de `totalVendido`, `ventaMayor` y `totalPorCiudad` también se multiplicará por **10**, ya que todas recorren el arreglo una sola vez de principio a fin sin ciclos anidados (crecimiento proporcional o lineal).
* Por el contrario, una función sin ciclos que acceda directamente a una posición en memoria (`primeraVenta`) mantendrá siempre **1** operación sin importar cuánto crezca `n`.

### 8.2. Resultados Experimentales (`node src/medir.js`)

| Tamaño del lote (`n`) | `totalVendido` | `ventaMayor` | `totalPorCiudad` | `primeraVenta` |
| :-------------------- | :------------- | :----------- | :--------------- | :------------- |
| `100`                 | `100`          | `200`        | `200`            | `1`            |
| `1.000`               | `1.000`        | `2.000`      | `2.000`          | `1`            |
| `10.000`              | `10.000`       | `20.000`     | `20.000`         | `1`            |
| `100.000`             | `100.000`      | `200.000`    | `200.000`        | `1`            |

### Punto 6: clasificacion funciones

**Complejidad Constante — O(1) (`primeraVenta`):** El número de operaciones permanece fijo en `1` independientemente de si el arreglo tiene `100` o `100.000` registros, debido a que accede directamente por índice (`ventas[0]`) sin recorrer la estructura.
**Complejidad Lineal — O(n) (`totalVendido`, `ventaMayor`, `totalPorCiudad`):** El trabajo crece de manera directamente proporcional al tamaño de los datos `n`:
  * `totalVendido` realiza 1n operaciones (1 visita por elemento).
  * `ventaMayor` y `totalPorCiudad` realizan 2n operaciones (1 visita más 1 comparación por elemento). Aunque tienen un factor constante de `2`, en notación Big O ambas pertenecen a la misma clase de crecimiento lineal O(n) por simplificacion.


## Reto 6: el reporte se volvio lento

### Punto 2: Traza clientesRecurrentes

## Traza de `clientesRecurrentes(ventas)` (Muestra de 5 ventas)

**Entrada de prueba:** `["C01", "C02", "C03", "C01", "C04"]` 

| Vuelta (`i`) | Cliente `i` | Vuelta (`j`) | Cliente `j` | ¿Iguales? | ¿Nuevo? | Arreglo `recurrentes` | Comp. vuelta |
| :----------- | :---------- | :----------- | :---------- | :-------- | :------ | :-------------------- | :----------- |
| **`i = 0`**  | `"C01"`     | `j = 1`      | `"C02"`     | No        | —       | `[]`                  | `1`          |
|              |             | `j = 2`      | `"C03"`     | No        | —       | `[]`                  | `2`          |
|              |             | `j = 3`      | `"C01"`     | Sí        | Sí      | `["C01"]`             | `3`          |
|              |             | `j = 4`      | `"C04"`     | No        | —       | `["C01"]`             | `4`          |
| **`i = 1`**  | `"C02"`     | `j = 2`      | `"C03"`     | No        | —       | `["C01"]`             | `1` (`5`)    |
|              |             | `j = 3`      | `"C01"`     | No        | —       | `["C01"]`             | `2` (`6`)    |
|              |             | `j = 4`      | `"C04"`     | No        | —       | `["C01"]`             | `3` (`7`)    |
| **`i = 2`**  | `"C03"`     | `j = 3`      | `"C01"`     | No        | —       | `["C01"]`             | `1` (`8`)    |
|              |             | `j = 4`      | `"C04"`     | No        | —       | `["C01"]`             | `2` (`9`)    |
| **`i = 3`**  | `"C01"`     | `j = 4`      | `"C04"`     | No        | —       | `["C01"]`             | `1` (`10`)   |
| **`i = 4`**  | `"C04"`     | *(Fin)*      | —           | —         | —       | `["C01"]`             | `0` (`10`)   |

Generalización Matemática
**Total con 5 ventas:** 4 + 3 + 2 + 1 + 0 = 10 comparaciones
**Fórmula para `n` ventas:** (n*(n - 1)) /2, lo que corresponde a una complejidad cuadrática O(n^2).

### Punto 4: tiempo de ejecucion

n=1000: 4.681ms 
n=2000: 12.909ms
n=4000: 47.517ms
n=8000: 199.74ms
n=16000: 782.371ms

El tiempo sigue como indica la complejidad un comportamiento cuadratico, es decir en este caso donde se duplican las ventas (2n), el tiempo se multiplica por 2^2=4, por eso pasa de 47.5 ms a 199.74ms y sucesivamente

### Punto 5: estimaciones con 100.000 y 1.000.000 ventas
 
 **Con 100.000 ventas** 
   -(100.000 / 16.000 = 6,25) el lote es 6,25 veces mas grande que 16.000 ventas
   -(6,25^2=39,06) por tanto el tiempo de 16.000 se debe multiplicar por 39,06
   -(0,782s * 39,06 =30,5 s) pase el tiempo a segundos y dio como resultado 30,5 segundos para el lote de 100.000 ventas
   -tiempo real de ejecucion: n=100000: 1:04.116 (m:ss.mmm) se explica por includes

 
 **Con 1.000.000 ventas** 
   -(1.000.000 / 100.000 = 10) el lote es 10 veces mas grande que 100.000 ventas
   -(10^2=100) por tanto el tiempo de 100.000 se debe multiplicar por 10
   -(30,5s * 100 =3.050s aprox 50,8 minutos) se demora casi un hora calculando el lote de 1.000.000

### Punto 6: costo oculto de includes
Dentro de los dos ciclos anidados O(n^2), la función ejecuta `!recurrentes.includes(ventas[i].cliente)` cada vez que encuentra una coincidencia. El método `.includes()` realiza una búsqueda secuencial recorriendo el arreglo `recurrentes` elemento por elemento. En un escenario donde existan miles de clientes distintos recurrentes, esa búsqueda interna añade un tercer recorrido lineal O(n) dentro de los dos ciclos, llevando la complejidad del peor caso hasta O(n^3).

### Punto 7: Conclusion ejecutiva para la genrencia
El reporte se vuelve tan lento porque el sistema está revisando las facturas comparando **cada venta contra todas las demás ventas del historial, una por una**. Con una muestra pequeña de mil ventas esto toma apenas unos milisegundos, pero con un historial de cien mil o un millón de ventas, la primera factura se compara contra las 999.999 restantes, la segunda contra 999.998, y así sucesivamente hasta realizar cientos de miles de millones de revisiones repetidas, haciendo que el reporte tarde más de una hora en responder.



## Reto 7: Tiempo, memoria y cadena de metodos

## Punto 4: Análisis versiones

| Métrica / Aspecto           | `totalCiudadCadena(ventas, ciudad)`         | `totalCiudadUnaPasada(ventas, ciudad)`         |
| :-------------------------- | :------------------------------------------ | :--------------------------------------------- |
| Implementación              | .map() -> .filter() -> .map() -> .reduce()  | Ciclo único `for...of` con acumulador numérico |
| Igualdad(10.000 ventas)     | Coincide exactamente (`OK`)                 | Coincide exactamente (`OK`)                    |
| Recorridos completos        | 4 recorridos                                | 1 recorrido                                    |
| Arreglos nuevos creados     | 3 arreglos intermedios en memoria           | 0 arreglos intermedios                         |
| Complejidad Temporal        | O(4n) = O(n) (Lineal)                       | O(n) (Lineal)                                  |
| Complejidad Espacial        | O(n) (Memoria proporcional a los datos)     | O(1) (Memoria constante)                       |


### Punto 5:  Simplificación de Constantes en Big O:

Aunque `totalCiudadCadena` realiza cuatro recorridos sobre los datos (4n operaciones) y `totalCiudadUnaPasada` realiza únicamente uno (1n operaciones), ambas tienen complejidad temporal O(n) porque la notación Big O mide la tasa de crecimiento asintótica del algoritmo a medida que el volumen de datos n crece hacia el infinito, no el tiempo exacto en milisegundos.

Según las reglas de simplificación de Big O, las constantes multiplicativas se eliminan: tanto 4n como 1n crecen en proporción directa (lineal) respecto al tamaño de entrada n. Sin embargo, en la práctica, eliminar esos recorridos redundantes reduce la carga de CPU y evita reservar memoria extra.

### Punto 6: Clasificación Espacial de las Funciones de analitica.js

|                  Función                 | Complejidad  | Justificación del Consumo de Memoria Adicional                                       |
|                                          | Espacial     |                                                                                      |
| :--------------------------------------- | :------------| :------------------------------------------------------------------------------------|
| `totalVendido` / `totalVendidoM`         | O(1)         | Solo utiliza un acumulador numérico simple en memoria.                               |
| `unidadesVendidas` / `unidadesVendidasM` | O(1)         | Solo utiliza un contador numérico entero.                                            |
| `ventaMayor`                             | O(1)         | Solo guarda una referencia al objeto con mayor valor encontrado.                     |
| `ticketPromedio`                         | O(1)         | Solo mantiene dos contadores numéricos (total y validas).                            |
| `ventasPorCiudad` / `ventasPorCiudadM`   | O(1)         | Solo almacena el texto normalizado buscada y un acumulador numérico.                 |
| `ventasDelDia`                           | O(1)         | Solo utiliza un acumulador numérico para el día consultado.                          |
| `totalCiudadUnaPasada`                   | O(1)         | Recorre el arreglo original sin crear copias ni estructuras auxiliares.              |
| `totalCiudadCadena`                      | O(n)         | 3 arreglos intermedios.                                                              |
| `totalPorCiudad`                         | O(n)         | Crea un objeto agrupador con una clave por cada ciudad distinta                      |
| `unidadesPorProducto`                    | O(n)         | Crea un objeto diccionario con una entrada por cada producto distinto                |
| `topProductosPorValor`                   | O(n)         | Crea el objeto agrupador y un nuevo arreglo de parejas, antes de ordenar y recortar. |
| `clientesRecurrentes`                    | O(n)         | Almacena un arreglo con identificadores de clientes.                                 |



### Punto 7: Decision version

Se decide conservar `totalCiudadUnaPasada` como la implementación oficial en el motor (`src/analitica.js`). Aunque la versión encadenada (`totalCiudadCadena`) resulta expresiva, la versión de una sola pasada ofrece una lectura igual de clara y directa con `for...of`, mientras que es más rápida en tiempo real y consume memoria constante O(1) al no instanciar arreglos intermedios, un factor crítico dado que el servidor del marketplace opera con recursos de memoria RAM limitados.