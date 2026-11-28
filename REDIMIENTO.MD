#  INFORME DE RENDIMIENTO

## 1. Inventario y Clasificación de Rendimiento del Motor (`src/analitica.js`)

Todas las mediciones experimentales de esta tabla se ejecutaron sobre un lote sintético de `n = 10.000` registros de ventas generado por `src/generador.js`.


|Función | Qué hace | C. Temporal | C. Espacial | Justificación (basada en el código) | Medición |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `totalVendido` | Suma el ingreso total de todas las ventas. | O(n) | O(1) | Un único ciclo `for...of` que recorre los `n` registros sumando en un solo acumulador numérico `total` . | 10.000 ops |
| `totalVendidoM` | Suma el ingreso total usando `.reduce()`. | O(n) | O(1) | `.reduce()` realiza un único recorrido lineal sobre `ventas` manteniendo únicamente un acumulador numérico escalar (`acum`). | 0.359 ms |
| `unidadesVendidas` | Suma la cantidad de unidades vendidas. | O(n) | O(1) | Un único ciclo `for...of` que lee `v.cantidad` en cada registro y acumula en una variable entera `total`. | 0.565 ms |
| `unidadesVendidasM` | Suma el total de unidades usando `.reduce()`. | O(n) | O(1) | `.reduce()` recorre `ventas` una sola vez acumulando enteros en `acum` sin instanciar estructuras en memoria. | 0.260 ms |
| `ventaMayor` | Encuentra y devuelve el objeto de la venta de mayor valor. | O(n) | O(1) | Un único ciclo `for...of` que compara `valorVenta(v)` contra valorVenta(mayor) y guarda solo una referencia al ganador. | 20.000 ops |
| `ticketPromedio` | Calcula el valor promedio de compra de las ventas válidas (`cantidad > 0`). | O(n) | O(1) | Un único recorrido `for...of`con una condición (v.cantidad > 0) y dos contadores escalares (`total` y`validas`). | 0.585 ms |
| `ventasPorCiudad` | Calcula el ingreso total de una ciudad específica (con ciclo). | O(n) | O(1) | Normaliza `buscada` una vez fuera del ciclo y recorre `ventas` con un único `for...of` sumando en un acumulador numérico. | ~0.585 ms |
| `ventasPorCiudadM` | Calcula el ingreso total de una ciudad específica usando reduce() | O(n) | O(1) | Un único recorrido lineal con `.reduce()` y operador ternario sobre un acumulador numérico sin crear arreglos intermedios. | 3.045 ms |
| `totalPorCiudad` | Agrupa las ventas por ciudad y suma el dinero de cada una. | O(n) | O(n) O O(k) | Un único `.reduce()` recorre los `n` registros (O(n) en tiempo) Crea un objeto diccionario con una clave por cada ciudad única (k); en el peor caso escala como O(n). | 10.000 ops 1.595 ms |
| `unidadesPorProducto` | Agrupa los registros por producto y suma las undades vendidas de cada uno. | O(n) | O(n)o O(k) | Un único reduce() recorre los `n` registros ($O(n)$) y almacena las sumas en un objeto diccionario `{}` de $k$ productos distintos (peor caso $O(n)$). | 0.579 ms |
| `topProductosPorValor` | Devuelve los `k` productos que más dinero generaron, ordenados de mayor a menor. | O(n\log n) | O(n)o O(m) | Agrupa en `porProducto` en O(n), convierte a arreglo con Object.entries() (copia en memoria), ordena con sort() y recorta con .slice(0, k). Si cada venta tuviera un producto distinto (m = n), escala a O(n \log n) en tiempo y $O(n) en espacio. | 0.573 ms |
| `ventasDelDia` | Suma el dinero vendido en una fecha especifica | O(n) | O(1) | Un único recorrido lineal con reduce() filtrando por igualdad de fecha sobre un acumulador numérico simple. | 0.327 ms |
| `totalCiudadCadena` | Calcula el total de una ciudad encadenando map.filter.reduce. | O(n)->(4n) | O(n) | Realiza 4 recorridos lineales secuenciales y crea 3 arreglos intermedios nuevos en memoria RAM en el camino. | 1.534 ms |
| `totalCiudadUnaPasada` | Calcula el total de una ciudad en un solo recorrido. | O(n) (1n) | O(1) | Un único ciclo `for...of` normaliza al vuelo y acumula en una variable numérica `total`, creando 0 arreglos nuevos. | 0.585 ms |
| `clientesRecurrentes` | Identifica clientes que realizaro más de una compra en el historial | O(n^2) peor caso O(n^3) | O(n) | Dos ciclos `for` anidados comparan parejas. Además, !recurrentes.includes(...) realiza una búsqueda lineal interna en cada coincidencia (peor caso O(n^3)) | 310.248 ms |
 


## 2. Proyección de Rendimiento a `1.000.000` de Ventas

Al escalar de 10.000 a 1.000.000 de registros, el tamaño de entrada n se multiplica por 100.
Las proyecciones se calculan aplicando la tasa de crecimiento asintótica correspondiente a cada función:

| **Función**           | Complejidad Temporal | Medición Real (10.000 ventas) | Proyección Estimada (1.000.000 ventas) |
| --------------------- | -------------------- | ----------------------------- | -------------------------------------- |
| `totalVendido`        | O(n)                 | `10.000 ops` (~`0.36 ms`)     | `1.000.000 ops` (~`35.9 ms`)           |
| `totalVendidoM`       | O(n)                 | `0.359 ms`                    | `~35.9 ms` (`0.036 s`)                 | 
| `unidadesVendidas`    | O(n)                 | `0.565 ms`                    | `~56.5 ms` (`0.057 s`)                 |
| `unidadesVendidasM`   | O(n)                 | `0.260 ms`                    | `~26.0 ms` (`0.026 s`)                 |
| `ventaMayor`          | O(n)                 | `20.000 ops` (~`0.50 ms`)     | `2.000.000 ops` *(~`50.0 ms`)*         |
| `ticketPromedio`      | O(n)                 | `0.585 ms`                    | `~58.5 ms` (`0.059 s`)                 |
| `ventasPorCiudad`     | O(n)                 | `0.585 ms`                    | `~58.5 ms` (`0.059 s`)                 |
| `ventasPorCiudadM`    | O(n)                 | `3.045 ms`                    | `~304.5 ms` (`0.305 s`)                |
| `totalPorCiudad`      | O(n)                 | `1.595 ms` (`10.000 ops`)     | `~159.5 ms` (`0.160 s`)                |
| `unidadesPorProducto` | O(n)                 | `0.579 ms`                    | `~57.9 ms` (`0.058 s`)                 |
| `topProductosPorValor`| O(n \log n)          | `0.573 ms`                    | `~57.3 ms` a `~86.0 ms` (`< 0.1 s`)    |
| `ventasDelDia`        | O(n)                 | `0.327 ms`                    | `~32.7 ms` (`0.033 s`)                 |
| `totalCiudadCadena`   | O(n) (4n)            | `1.534 ms`                    | `~153.4 ms`(`0.153 s`) +alto uso de RAM|
| `totalCiudadUnaPasada`| O(n) (1n)            | `0.585 ms`                    | `~58.5 ms` (`0.059 s`)                 |
| `clientesRecurrentes` | O(n^2) peor caso $O(n^3)| `310.248 ms`                  | `~3.102.480 ms` (`~51.7 minutos`) Factor=100^2=10.000  |


## 3. Riesgos (De Mayor a Menor Riesgo al Crecer los Datos)

Para priorizar qué funciones representan una amenaza para la plataforma del marketplace al escalar el volumen de ventas, se utilizó un criterio combinado de complejidad temporal y espacial: primero el impacto en tiempo de ejecución (CPU) para evitar bloqueos del servidor, y segundo el consumo de memoria RAM adicional, dado que el entorno opera con memoria limitada.

### Nivel 1 — Riesgo Crítico (Bloqueo de CPU y alto uso de memoria)

1. `clientesRecurrentes(ventas)`— Tiempo: O(n^2) (peor caso O(n^3)) | Espacio: O(n)
   Es la única función no lineal del motor. Al comparar cada venta contra todas las demás mediante ciclos anidados y ejecutar `!recurrentes.includes(...)` en cada coincidencia, el tiempo crece de forma cuadrática/cúbica. Con `100.000` ventas ya tarda más de 1 minuto (`64.1 s`), y con `1.000.000` superaría los 51 minutos, congelando el servidor.


### Nivel 2 — Riesgo Moderado (Consumo de memoria RAM proporcional a los datos O(n))
2. `totalCiudadCadena(ventas, ciudad)` — Tiempo: O(n) (4n) | Espacio: O(n)
   Aunque es lineal en tiempo, recorre los datos 4 veces y crea 3 arreglos intermedios nuevos en memoria RAM en cada ejecución, lo que puede provocar picos o fallos de memoria con lotes grandes en un servidor limitado. (Nota: Por esto fue reemplazada en el motor por `totalCiudadUnaPasada`).
3. `topProductosPorValor(ventas, k)` — Tiempo: O(n \log n) (peor caso) | Espacio: O(n) (o O(m))
   Crea un objeto agrupador en memoria y genera un arreglo nuevo con `Object.entries()` antes de ordenar con `.sort()`. En el catálogo actual (m pequeño) es muy rápida, pero si la variedad de productos creciera al ritmo de las ventas (m -> n), escalaría a O(n \log n) en tiempo y O(n) en RAM.
4. `totalPorCiudad(ventas)` y `unidadesPorProducto(ventas)` — Tiempo: O(n) | Espacio: O(n)
   Recorren las ventas una sola vez O(n), pero construyen un objeto diccionario `{}` cuya memoria crece según la cantidad de ciudades o productos distintos (k); en el peor caso escala proporcionalmente a n.


### Nivel 3 — Riesgo Bajo (Escalabilidad lineal y memoria constante O(1))
5. `ventasPorCiudadM(ventas, ciudad)` y `totalCiudadUnaPasada(ventas, ciudad)` — Tiempo: O(n) | Espacio: O(1)
   Ambas recorren los datos una sola vez con memoria constante. `totalCiudadUnaPasada` (`0.585 ms`) es preferible sobre `ventasPorCiudadM` (`3.045 ms`) por tener menor tiempo de ejecución.
6. `ticketPromedio(ventas)`, `unidadesVendidas(ventas)` y `ventaMayor(ventas)` — Tiempo: O(n) | Espacio: O(1)
   Realizan un único recorrido lineal utilizando únicamente variables escalares o una sola referencia de objeto.
7. `totalVendido(ventas)`, `totalVendidoM(ventas)`, `unidadesVendidasM(ventas)` y `ventasDelDia(ventas, fecha)` — Tiempo: O(n) | Espacio: O(1)
   Son las funciones más livianas del motor (`0.26 ms` a `0.36 ms` en `10.000` ventas); procesan millones de registros en milisegundos sin reservar estructuras auxiliares en memoria.


## 4. Plan de Optimización (Función de Mayor Riesgo: `clientesRecurrentes`)

Para reducir `clientesRecurrentes(ventas)` de O(n^2) / O(n^3) a O(n) (pasando de ~51 minutos a ~50 milisegundos con 1 millón de ventas), se plantea optimizarla utilizando un objeto acumulador `{}` (mapa de frecuencias)** y métodos de arreglo ya empleados en el motor, sin implementar aún el cambio en el código productivo:

**¿Qué trabajo se está repitiendo innecesariamente?**
  1. Re-escaneo del historial completo por cada factura: Cada vez que el ciclo externo toma una venta `i`, vuelve a recorrer todas las facturas posteriores buscando si ese cliente aparece otra vez. Si un cliente realizó 10 compras, el algoritmo ejecuta 10 búsquedas completas sobre el resto del arreglo para el mismo cliente.
  2. Búsqueda secuencial repetida en resultados (`!recurrentes.includes(...)`): Cada vez que encuentra una coincidencia, recorre linealmente el arreglo `recurrentes` desde el inicio para comprobar si el cliente ya había sido registrado antes.

**¿Qué información se guardará en memoria para no buscar de nuevo?**

  Se utilizará un objeto diccionario `conteoClientes = {}` (el mismo patrón de conteo aplicado en `unidadesPorProducto` y `totalPorCiudad`) en un único recorrido `for...of` sobre `ventas` (complejidad espacial O(n)):
  1. Registro de frecuencia por cliente en O(1): En una sola pasada se anota cada `v.cliente` como clave única del objeto y se incrementa su contador de compras (`conteoClientes[v.cliente] = (conteoClientes[v.cliente] || 0) + 1`). Al ser claves únicas de un objeto, se eliminan automáticamente los duplicados y se evita cualquier búsqueda con `.includes()`.
  2. Extracción final lineal: Al terminar el recorrido único, se convierte el objeto con `Object.entries(conteoClientes)`, se filtran las parejas cuyo contador sea mayor a `1` (`([, compras]) => compras > 1`) y se extraen únicamente los códigos de cliente con `.map(([cliente]) => cliente)`.

  ## Observaciones
