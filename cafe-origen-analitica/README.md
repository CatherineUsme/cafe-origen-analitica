# Café Origen — Analítica de Ventas

## ¿Qué es el proyecto?

**Café Origen Analítica** es una aplicación de consola desarrollada en **JavaScript (Node.js)** diseñada para procesar, limpiar y analizar los registros de ventas de la empresa **Café Origen**. 

El sistema toma un conjunto de transacciones comerciales (con fecha, cliente, producto, ciudad, cantidad y precio unitario), aplica reglas de limpieza y normalización de datos (eliminación de espacios accidentales, estandarización de mayúsculas/minúsculas y filtrado de registros inválidos), y genera indicadores clave de rendimiento comercial junto con un reporte ejecutivo formateado en pesos colombianos (`COP`).

---

## Estructura del Proyecto

```text
cafe-origen-analitica/
├── src/
│   ├── datos.js       # Arreglo con los registros históricos de ventas
│   ├── explorar.js    # Script de auditoría e inspección inicial de los datos
│   ├── analitica.js   # Módulo con todas las funciones de cálculo (ciclos y métodos)
│   ├── verificar.js   # Script de pruebas cruzadas ("OK" / "DIFERENTE") entre versiones
│   └── reporte.js     # Generador del informe ejecutivo alineado en consola
├── bitacora.md        # Documentación técnica, trazas y registro de depuración
└── README.md          # Documentación general del proyecto