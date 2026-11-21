# Café Origen — Analítica de Ventas

## ¿Qué es el proyecto?

**Café Origen Analítica** es una aplicación de consola desarrollada en **JavaScript (Node.js)** diseñada para procesar, limpiar y analizar los registros de ventas de la empresa **Café Origen**. 

El sistema toma un conjunto de transacciones comerciales (con fecha, cliente, producto, ciudad, cantidad y precio unitario), aplica reglas de limpieza y normalización de datos (eliminación de espacios accidentales, estandarización de mayúsculas/minúsculas y filtrado de registros inválidos), y genera indicadores clave de rendimiento comercial junto con un reporte ejecutivo formateado en pesos colombianos (`COP`).

---

## Estructura del Proyecto

cafe-origen-analitica/
├── src/
│   ├── datos.js       # Arreglo con los registros históricos de ventas
│   ├── explorar.js    # Script de auditoría e inspección inicial de los datos
│   ├── analitica.js   # Módulo con todas las funciones de cálculo (ciclos y métodos)
│   ├── verificar.js   # Script de pruebas cruzadas ("OK" / "DIFERENTE") entre versiones
│   └── reporte.js     # Generador del informe ejecutivo alineado en consola
├── bitacora.md        # Documentación técnica, trazas y registro de depuración
└── README.md          # Documentación general del proyecto


## Ejecución desde la terminal (Recomendado)

    1. Abre la carpeta raíz del proyecto (cafe-origen-analitica) en Visual Studio Code.
    2. Abre la terminal integrada con el atajo Ctrl + ñ (teclado en español) o Ctrl +  `, o desde el menú superior en Terminal > Nueva terminal.
    3. Asegúrate de estar ubicado en la raíz del proyecto y ejecuta el script que desees:
        Generar el reporte ejecutivo completo en consola:
            node src/reporte.js
        Ejecutar las pruebas de verificación cruzada (OK / DIFERENTE):
            node src/verificar.js
        Ejecutar la exploración inicial y auditoría de datos:
            node src/explorar.js

## Ejecución con botón Play en VS Code 

    1. Si tienes instalada la extensión Code Runner en Visual Studio Code:
    2. Abre el archivo que deseas ejecutar (src/reporte.js).
    3 .Verifica que no tengas ningún fragmento de texto seleccionado en el editor (de lo contrario, Code Runner ejecutará solo esa línea aislada en un archivo temporal).
    4. Haz clic en el ícono de Play (▶) en la esquina superior derecha de VS Code.

## ¿Qué preguntas de negocio responde?

El proyecto transforma los datos crudos de facturación en respuestas claras para la toma de decisiones comerciales:
    ¿Cuánto dinero ingresó en total? (Ingresos brutos acumulados).
    ¿Cuántas unidades o bolsas de café se vendieron en total? (Volumen físico despachado).
    ¿Cuál fue la transacción individual de mayor valor y qué producto la generó?
    ¿Cuál es el valor promedio de compra por venta efectiva (ticket promedio)? (Excluyendo registros anulados o con cantidad 0).
    ¿Cuánto se vendió en una ciudad específica y cómo se distribuyen los ingresos entre todas las ciudades?
    ¿Cuántas unidades se vendieron de cada referencia de producto?
    ¿Cuáles son los 3 productos que más ingresos generaron (Top 3 por valor)?
    ¿Cuánto se vendió en un día específico (por ejemplo, durante los primeros 8 días de septiembre)?