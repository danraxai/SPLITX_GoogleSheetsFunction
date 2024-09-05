# **SPLITX\_GoogleSheetsFunction**

**SPLITX\_GoogleSheetsFunction** es una función personalizada para Google Sheets diseñada para dividir texto en celdas adyacentes utilizando uno o múltiples delimitadores. Puedes utilizarla para dividir el contenido en filas o columnas de acuerdo con las necesidades del usuario.

## **Características**

* **División de texto:** Divide texto en celdas adyacentes utilizando hasta tres delimitadores diferentes.  
* **Compatibilidad con filas y columnas:** Los resultados se pueden distribuir tanto en filas como en columnas, dependiendo de los parámetros proporcionados.  
* **Soporte para múltiples delimitadores:** Utiliza uno, dos o tres delimitadores para separar el texto de manera más eficiente.

## **Instalación**

Para utilizar **SPLITX\_GoogleSheetsFunction**, sigue los siguientes pasos:

1. Abre un documento de Google Sheets.  
2. Dirígete a **Extensiones** \> **Apps Script**.  
3. Copia y pega el código de la función **SPLITX** en el editor de Apps Script.  
4. Guarda el proyecto y cierra el editor.

## **Uso**

Para utilizar la función, sigue la siguiente sintaxis:

`=SPLITX(texto, direccion, delimitador1, [delimitador2], [delimitador3])`

### **Parámetros**

* `texto`: El texto que deseas dividir.  
* `direccion`: Define si el resultado se debe mostrar en filas o columnas. Usa `0` para filas y `1` para columnas.  
* `delimitador1`: El primer delimitador que separa el texto.  
* `delimitador2` (opcional): Un segundo delimitador adicional.  
* `delimitador3` (opcional): Un tercer delimitador adicional.

### **Ejemplo de Uso**

Si tienes el texto "Manzana, Plátano; Uva \- Melón" y deseas dividirlo utilizando los delimitadores `,`, `;` y `-`, puedes usar la función de la siguiente manera:

`=SPLITX("Manzana, Plátano; Uva - Melón", 0, ",", ";", "-")`

Esto dividirá el texto en celdas adyacentes en la misma fila.

## **Contribuciones**

Este complemento fue creado por el creador de **SPLITX\_GoogleSheetsFunction**. Si tienes sugerencias o mejoras, puedes contribuir abriendo un *issue* o haciendo un *pull request* en el repositorio.

## **Contacto**

Si tienes alguna pregunta o necesitas soporte, puedes contactar al creador en **danielraxai@gmail.com**.

