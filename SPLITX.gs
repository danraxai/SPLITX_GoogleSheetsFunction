/**
 * Función "SPLITX", divide el texto en celdas adyacentes usando múltiples delimitadores.
 *
 * @param {string} texto - El texto que se va a dividir.
 * @param {number} direccion - 0 para filas, 1 para columnas.
 * @param {string} delimitador1 - El primer delimitador.
 * @param {string} [delimitador2=''] - El segundo delimitador (opcional).
 * @param {string} [delimitador3=''] - El tercer delimitador (opcional).
 * @return {string[][]} El texto dividido en un array 2D.
 * @customfunction
 */
function SPLITX(texto, direccion, delimitador1, delimitador2 = '', delimitador3 = '') {
  // Se construye la cadena de delimitadores
  let delimitadores = delimitador1;
  if (delimitador2 !== '') delimitadores += '|' + delimitador2;
  if (delimitador3 !== '') delimitadores += '|' + delimitador3;

  // Se divide el texto usando los delimitadores
  const partes = dividirMultiplesDelimitadores(texto, delimitadores);

  // Se crea el array de salida basado en la dirección
  let salida = [];
  if (direccion === 0) { // Filas
    salida.push(partes);
  } else if (direccion === 1) { // Columnas
    salida = partes.map(parte => [parte]);
  }

  return salida;
}

/**
 * Se divide el texto usando múltiples delimitadores.
 *
 * @param {string} texto - El texto que se va a dividir.
 * @param {string} delims - Los delimitadores como un patrón de expresión regular.
 * @return {string[]} El texto dividido como un array.
 */
function dividirMultiplesDelimitadores(texto, delims) {
  const regex = new RegExp('[' + delims.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ']');
  return texto.split(regex).filter(Boolean);
}

/**
 * Se registra la función personalizada y proporciona texto de ayuda.
 */
function onOpen() {
  SpreadsheetApp.getActiveSpreadsheet().addMenu('Menú Personalizado', [{name: 'Acerca de SPLITX', functionName: 'mostrarAcercaDeSPLITX'}]);
}

/**
 * Se muestra un diálogo con información sobre la función SPLITX.
 */
function mostrarAcercaDeSPLITX() {
  const ui = SpreadsheetApp.getUi();
  ui.alert('Acerca de SPLITX',
           'SPLITX es una función personalizada que divide el texto en celdas adyacentes usando uno o múltiples delimitadores (hasta tres). ' +
           'Permite dividir el texto en partes más pequeñas y distribuirlas en celdas adyacentes, ya sea en filas o columnas, ' +
           'según los delimitadores especificados.\n\n' +
           'Uso: =SPLITX(texto, direccion, delimitador1, [delimitador2], [delimitador3])\n\n' +
           'Parámetros:\n' +
           '- texto: El texto que se va a dividir.\n' +
           '- direccion: 0 para filas, 1 para columnas.\n' +
           '- delimitador1: El primer delimitador.\n' +
           '- delimitador2: (Opcional) El segundo delimitador.\n' +
           '- delimitador3: (Opcional) El tercer delimitador.',
           ui.ButtonSet.OK);
}
