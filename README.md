# Complemento de Google Sheets: SPLITX

Este repositorio contiene un script de Google Apps Script que proporciona una función personalizada llamada `SPLITX` para Google Sheets. Esta función permite dividir texto en celdas adyacentes usando uno o varios delimitadores y puede distribuir los resultados en filas o columnas.

### Funcionalidad

- **Función `SPLITX`**: Divide el texto en celdas adyacentes utilizando uno o múltiples delimitadores especificados.
  - **Parámetros**:
    - `texto` (string): El texto que se va a dividir.
    - `direccion` (número): 0 para filas, 1 para columnas.
    - `delimitador1` (string): El primer delimitador.
    - `delimitador2` (string, opcional): El segundo delimitador.
    - `delimitador3` (string, opcional): El tercer delimitador.
  - **Uso**: `=SPLITX(texto, direccion, delimitador1, [delimitador2], [delimitador3])`

### Cómo Usar el Script

1. **Copiar el Código en Google Apps Script**:
   - Abre tu hoja de cálculo en Google Sheets.
   - Ve a `Extensiones` -> `Apps Script`.
   - Elimina cualquier código en el editor y copia el contenido del archivo `Código.gs` del repositorio en el editor.

2. **Guardar y Ejecutar**:
   - Guarda el proyecto con un nombre relevante.
   - Cierra el editor de Google Apps Script.

3. **Utilizar la Función `SPLITX` en Google Sheets**:
   - En cualquier celda de tu hoja de cálculo, ingresa la fórmula `=SPLITX("texto_a_dividir", direccion, "delimitador1", "delimitador2", "delimitador3")` según necesites.
   - Ejemplo: `=SPLITX(A1, 0, ",")` dividirá el contenido de la celda A1 en filas usando la coma como delimitador.

### Función Adicional

- **Menú Personalizado**: Al abrir la hoja de cálculo, se añadirá un menú personalizado llamado "Menú Personalizado" con una opción para ver información sobre la función `SPLITX`.

### Manual en PDF

Para una guía detallada con imágenes, consulta el [Manual en PDF](URL_DEL_MANUAL_PDF). Este manual proporciona instrucciones paso a paso para copiar y usar el código en Google Sheets.

### Contribuciones

Si encuentras algún problema o tienes sugerencias, no dudes en abrir un **Issue** en el repositorio.

### Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
