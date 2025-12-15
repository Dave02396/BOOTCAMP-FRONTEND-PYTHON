//EJERCICIO 01
/*Santa ha recibido una lista de regalos, pero algunos están defectuosos. Un regalo es defectuoso si su nombre contiene el carácter #.

Ayuda a Santa escribiendo una función que reciba una lista de nombres de regalos y devuelva una nueva lista que solo contenga los regalos sin defectos.

Ejemplos*/

const gifts1 = ["car", "doll#arm", "ball", "#train"];
const good1 = filterGifts(gifts1);

console.log("Resultados del EJERCICIO 01");
console.log(good1);
// ['car', 'ball']

const gifts2 = ["#broken", "#rusty"];
const good2 = filterGifts(gifts2);
console.log(good2);
// []

const gifts3 = [];
const good3 = filterGifts(gifts3);
console.log(good3);
// []*/

function filterGifts(gifts) {
  const result = [];

  for (let i = 0; i < gifts.length; i++) {
    if (!gifts[i].includes("#")) {
      result.push(gifts[i]);
    }
  }

  return result;
}

//EJERCICIO 02
/*La fábrica de Santa ha empezado a recibir la lista de producción de juguetes.
Cada línea indica qué juguete hay que fabricar y cuántas unidades.

Los elfos, como siempre, han metido la pata: han apuntado algunos juguetes con cantidades que no tienen sentido.

Tienes una lista de objetos con esta forma:

toy: el nombre del juguete (string)
quantity: cuántas unidades hay que fabricar (number)
Tu tarea es escribir una función que reciba esta lista y devuelva un array de strings con:

Cada juguete repetido tantas veces como indique quantity
En el mismo orden en el que aparecen en la lista original
Ignorando los juguetes con cantidades no válidas (menores o iguales a 0, o que no sean número)
🧩 Ejemplos*/

const production1 = [
  { toy: "car", quantity: 3 },
  { toy: "doll", quantity: 1 },
  { toy: "ball", quantity: 2 },
];

const result1 = manufactureGifts(production1);

console.log("Resultados del EJERCICIO 02");
console.log(result1);
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
  { toy: "train", quantity: 0 }, // no se fabrica
  { toy: "bear", quantity: -2 }, // tampoco
  { toy: "puzzle", quantity: 1 },
];

const result2 = manufactureGifts(production2);
console.log(result2);
// ['puzzle']

const production3 = [];
const result3 = manufactureGifts(production3);
console.log(result3);
// []

function manufactureGifts(giftsToProduce) {
  const result = [];

  for (let i = 0; i < giftsToProduce.length; i++) {
    const item = giftsToProduce[i];

    if (typeof item.quantity === "number" && item.quantity > 0) {
      for (let j = 0; j < item.quantity; j++) {
        result.push(item.toy);
      }
    }
  }

  return result;
}

// EJERCIO 03
// En el taller de Santa hay un elfo becario que está aprendiendo a envolver regalos 🎁.

// Le han pedido que envuelva cajas usando solo texto… y lo hace más o menos bien.

// Le pasan dos parámetros:

// size: el tamaño del regalo cuadrado
// symbol: el carácter que el elfo usa para hacer el borde (cuando no se equivoca 😅)
// El regalo debe cumplir:

// Debe ser un cuadrado de size x size.
// El interior siempre está vacío (lleno de espacios), porque el elfo "aún no sabe dibujar el relleno".
// Si size < 2, devuelve una cadena vacía: el elfo lo intentó, pero se le perdió el regalo.
// El resultado final debe ser un string con saltos de línea \n.
// Sí, es un reto fácil… pero no queremos que despidan al becario. ¿Verdad?

// 🧩 Ejemplos
console.log("Resultados del EJERCICIO 03");
const g1 = drawGift(4, "*");
console.log(g1);
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, "#");
console.log(g2);
/*
###
# #
###
*/

const g3 = drawGift(2, "-");
console.log(g3);
/*
--
--
*/

const g4 = drawGift(1, "+");
console.log(g4);
// ""  pobre becario…

function drawGift(size, symbol) {
  if (size < 2) {
    return "";
  }

  let result = "";

  for (let i = 0; i < size; i++) {
    if (i === 0 || i === size - 1) {
      result += symbol.repeat(size);
    } else {
      result += symbol + " ".repeat(size - 2) + symbol;
    }
    if (i < size - 1) {
      result += "\n";
    }
  }

  return result;
}

//EJERCICIO 04
// Los elfos han encontrado el código cifrado que protege la puerta del taller de Santa 🔐. El PIN tiene 4 dígitos, y está escondido dentro de bloques como estos:

// [1++][2-][3+][<]
// Escribe una función que descifre el PIN a partir del código.

// El código está formado por bloques entre corchetes [...] y cada bloque genera un dígito del PIN.

// Un bloque normal tiene la forma [nOP...], donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).

// Las operaciones se aplican en orden al número y son:

// + suma 1
// - resta 1
// El resultado siempre es un dígito (aritmética mod 10), por ejemplo 9 + 1 → 0 y 0 - 1 → 9.

// También existe el bloque especial [<], que repite el dígito del bloque anterior.

// Si al final hay menos de 4 dígitos, se debe devolver null.

// 🧩 Ejemplos
console.log("Resultados del EJERCICIO 04");
const clave1 = decodeSantaPin("[1++][2-][3+][<]");
console.log(clave1);
// "3144"

const clave2 = decodeSantaPin("[9+][0-][4][<]");
console.log(clave2);
// "0944"

const clave3 = decodeSantaPin("[1+][2-]");
console.log(clave3);

// null (solo 2 dígitos)
function decodeSantaPin(code) {
  let digits = [];
  let i = 0;

  while (i < code.length) {
    if (code[i] === "[") {
      let block = "";
      i++;

      while (code[i] !== "]") {
        block += code[i];
        i++;
      }
      if (block === "<") {
        if (digits.length === 0) {
          return null;
        }
        digits.push(digits[digits.length - 1]);
      } else {
        let value = Number(block[0]);

        if (isNaN(value)) {
          return null;
        }
        for (let j = 1; j < block.length; j++) {
          if (block[j] === "+") {
            value = value + 1;
            if (value === 10) value = 0;
          }

          if (block[j] === "-") {
            value = value - 1;
            if (value === -1) value = 9;
          }
        }

        digits.push(value);
      }
    }

    i++;
  }
  if (digits.length < 4) {
    return null;
  }
  let pin = "";
  for (let k = 0; k < 4; k++) {
    pin += digits[k];
  }

  return pin;
}

//EJERCICIO 05
// Los elfos tienen un timestamp secreto: es la fecha y hora exacta en la que Papá Noel despega con el trineo 🛷 para repartir regalos por el mundo. Pero en el Polo Norte usan un formato rarísimo para guardar la hora: YYYY*MM*DD@HH|mm|ss NP (ejemplo: 2025*12*25@00|00|00 NP).

// Tu misión es escribir una función que reciba:

// fromTime → fecha de referencia en formato elfo (YYYY*MM*DD@HH|mm|ss NP).
// takeOffTime → la misma fecha de despegue, también en formato elfo.
// La función debe devolver:

// Los segundos completos que faltan para el despegue.
// Si ya estamos en el despegue exacto → 0.
// Si el despegue ya ocurrió → un número negativo indicando cuántos segundos han pasado desde entonces.
// 🎯 Reglas
// Convierte el formato elfo a un timestamp primero. El sufijo NP indica la hora oficial del Polo Norte (sin husos horarios ni DST), así que puedes tratarlo como si fuera UTC.
// Usa diferencias en segundos, no en milisegundos.
// Redondea siempre hacia abajo (floor): solo segundos completos.
// 🧩 Ejemplos
const takeoff = "2025*12*25@00|00|00 NP";

console.log("Resultados del EJERCICIO 05");
// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
const fecha1 = timeUntilTakeOff("2025*12*24@23|59|30 NP", takeoff);
console.log(fecha1);
// 30

// justo en el momento exacto
const fecha2 = timeUntilTakeOff("2025*12*25@00|00|00 NP", takeoff);
console.log(fecha2);
// 0

// 12 segundos después del despegue
const fecha3 = timeUntilTakeOff("2025*12*25@00|00|12 NP", takeoff);
console.log(fecha3);
// -12

function timeUntilTakeOff(fromTime, takeOffTime) {
  function convertToSeconds(dateText) {
    dateText = dateText.replace(" NP", "");

    let parts = dateText.split("@");
    let datePart = parts[0];
    let timePart = parts[1];

    let date = datePart.split("*");
    let time = timePart.split("|");

    let year = Number(date[0]);
    let month = Number(date[1]) - 1;
    let day = Number(date[2]);

    let hour = Number(time[0]);
    let minute = Number(time[1]);
    let second = Number(time[2]);

    let d = new Date(Date.UTC(year, month, day, hour, minute, second));

    return Math.floor(d.getTime() / 1000);
  }

  let fromSeconds = convertToSeconds(fromTime);
  let takeOffSeconds = convertToSeconds(takeOffTime);

  return takeOffSeconds - fromSeconds;
}

//EJERCICIO 06
// En el taller de Santa, los elfos han encontrado una montaña de guantes mágicos totalmente desordenados. Cada guante viene descrito por dos valores:

// hand: indica si es un guante izquierdo (L) o derecho (R)
// color: el color del guante (string)
// Tu tarea es ayudarles a emparejar guantes: Un par válido es un guante izquierdo y uno derecho del mismo color.

// Debes devolver una lista con los colores de todos los pares encontrados. Ten en cuenta que puede haber varios pares del mismo color. El orden se determina por el que se pueda hacer primero el par.

// 🧩 Ejemplos

console.log("Resultados del EJERCICIO 06");
const gloves = [
  { hand: "L", color: "red" },
  { hand: "R", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
  { hand: "L", color: "green" },
];

const guantes1 = matchGloves(gloves);
console.log(guantes1);
// ["red", "green"]

const gloves2 = [
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
];

const guantes2 = matchGloves(gloves2);
console.log(guantes2);
// ["gold", "gold"]

const gloves3 = [
  { hand: "L", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
];

const guantes3 = matchGloves(gloves3);
console.log(guantes3);
// []

const gloves4 = [
  { hand: "L", color: "green" },
  { hand: "L", color: "red" },
  { hand: "R", color: "red" },
  { hand: "R", color: "green" },
];

const guantes4 = matchGloves(gloves4);
console.log(guantes4);
// ['red', 'green']

function matchGloves(gloves) {
  let result = [];

  let count = {};

  for (let i = 0; i < gloves.length; i++) {
    let glove = gloves[i];
    let color = glove.color;
    let hand = glove.hand;

    if (!count[color]) {
      count[color] = { L: 0, R: 0 };
    }
    if (hand === "L") {
      count[color].L++;
    } else if (hand === "R") {
      count[color].R++;
    }

    if (count[color].L > 0 && count[color].R > 0) {
      result.push(color);
      count[color].L--;
      count[color].R--;
    }
  }

  return result;
}

//EJERCIICIO 07;
// ¡Es hora de decorar el árbol de Navidad 🎄! Escribe una función que reciba:

// height → la altura del árbol (número de filas).
// ornament → el carácter del adorno (por ejemplo, "o" o "@").
// frequency → cada cuántas posiciones de asterisco aparece el adorno.
// El árbol se dibuja con asteriscos *, pero cada frequency posiciones, el asterisco se reemplaza por el adorno.

// El conteo de posiciones empieza en 1, desde la copa hasta la base, de izquierda a derecha. Si frequency es 2, los adornos aparecen en las posiciones 2, 4, 6, etc.

// El árbol debe estar centrado y tener un tronco # de una línea al final. Cuidado con los espacios en blanco, nunca hay al final de cada línea.

// 🧩 Ejemplos

console.log("Resultados del EJERCICIO 07");
const arbol1 = drawTree(5, "o", 2);
console.log(arbol1);
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

const arbol2 = drawTree(3, "@", 3);
console.log(arbol2);
//   *
//  *@*
// *@**@
//   #

const arbol3 = drawTree(4, "+", 1);
console.log(arbol3);
//    +
//   +++
//  +++++
// +++++++
//

function drawTree(height, ornament, frequency) {
  let result = "";
  let position = 1;

  for (let row = 1; row <= height; row++) {
    let spaces = height - row;
    for (let s = 0; s < spaces; s++) {
      result += " ";
    }

    let stars = row * 2 - 1;
    for (let i = 0; i < stars; i++) {
      if (position % frequency === 0) {
        result += ornament;
      } else {
        result += "*";
      }

      position++;
    }

    result += "\n";
  }

  for (let s = 0; s < height - 1; s++) {
    result += " ";
  }
  result += "#";

  return result;
}

//EJERCICIO 08
// Santa 🎅 quiere saber cuál es la primera letra no repetida en el nombre de un juguete 🎁.

// Escribe una función que reciba un string y devuelva la primera letra que no se repite, ignorando mayúsculas y minúsculas al contar, pero devolviendo la letra tal como aparece en el string.

// Si no hay ninguna, devuelve una cadena vacía ("").

// Ejemplos:

console.log("Resultados del EJERCICIO 08");
const toy1 = findUniqueToy("Gift"); // 'G'
console.log(toy1);
// ℹ️ La G es la primera letra que no se repite
// y la devolvemos tal y como aparece

const toy2 = findUniqueToy("sS"); // ''
console.log(toy2);
// ℹ️ Las letras se repiten, ya que no diferencia mayúsculas

const toy3 = findUniqueToy("reindeeR"); // 'i'
console.log(toy3);
// ℹ️ La r se repite (aunque sea en mayúscula)
// y la e también, así que la primera es la 'i'

// Más casos:
const toy4 = findUniqueToy("AaBbCc"); // ''
console.log(toy4);
const toy5 = findUniqueToy("abcDEF"); // 'a'
console.log(toy5);
const toy6 = findUniqueToy("aAaAaAF"); // 'F'
console.log(toy6);
const toy7 = findUniqueToy("sTreSS"); // 'T'
console.log(toy7);
const toy8 = findUniqueToy("z"); // 'z'
console.log(toy8);

function findUniqueToy(toy) {
  let count = {};

  for (let i = 0; i < toy.length; i++) {
    let letter = toy[i].toLowerCase();

    if (count[letter] === undefined) {
      count[letter] = 1;
    } else {
      count[letter] = count[letter] + 1;
    }
  }

  for (let i = 0; i < toy.length; i++) {
    let letter = toy[i].toLowerCase();

    if (count[letter] === 1) {
      return toy[i];
    }
  }
  return "";
}

//EJERCICIO 09
// Los elfos han construido un reno 🦌 robot aspirador (@) para limpiar un poco el taller de cara a las navidades.

// El reno se mueve sobre un tablero para recoger cosas del suelo (*) y debe evitar obstáculos (#).

// Recibirás dos parámetros:

// board: un string que representa el tablero.
// moves: un string con los movimientos: 'L' (izquierda), 'R' (derecha), 'U' (arriba), 'D' (abajo).
// Reglas del movimiento:

// Si el reno recoge algo del suelo (*) durante los movimientos → devuelve 'success'.
// Si el reno se sale del tablero o choca contra un obstáculo (#) → devuelve 'crash'.
// Si el reno no recoge nada ni se estrella → devuelve 'fail'.
// Ten en cuenta que si el reno recoge algo del suelo, ya es 'success', indepentientemente de si en movimientos posteriores se chocase con un obstáculo o saliese del tabler.

// Importante: Ten en cuenta que en el board la primera y última línea están en blanco y deben descartarse.

// Ejemplo:
console.log("Resultados del EJERCICIO 09");
const board = `
.....
.*#.*
.@...
.....
`;

const movimiento1 = moveReno(board, "D");
console.log(movimiento1);
// ➞ 'fail' -> se mueve pero no recoge nada

const movimiento2 = moveReno(board, "U");
console.log(movimiento2);
// ➞ 'success' -> recoge algo (*) justo encima

const movimiento3 = moveReno(board, "RU");
console.log(movimiento3);
// ➞ 'crash' -> choca contra un obstáculo (#)

const movimiento4 = moveReno(board, "RRRUU");
console.log(movimiento4);
// ➞ 'success' -> recoge algo (*)

const movimiento5 = moveReno(board, "DD");
console.log(movimiento5);
// ➞ 'crash' -> se choca con la parte de abajo del tablero

const movimiento6 = moveReno(board, "UUU");
console.log(movimiento6);
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

const movimiento7 = moveReno(board, "RR");
console.log(movimiento7);
// ➞ 'fail' -> se mueve pero no recoge nada

function moveReno(board, moves) {
  let rows = board.split("\n");
  let map = [];

  for (let i = 0; i < rows.length; i++) {
    if (rows[i].trim() !== "") {
      map.push(rows[i]);
    }
  }

  let height = map.length;
  let width = map[0].length;

  let x = 0;
  let y = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (map[i][j] === "@") {
        y = i;
        x = j;
      }
    }
  }

  let collected = false;

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];

    if (move === "L") x--;
    if (move === "R") x++;
    if (move === "U") y--;
    if (move === "D") y++;

    if (x < 0 || x >= width || y < 0 || y >= height) {
      return collected ? "success" : "crash";
    }

    let cell = map[y][x];

    if (cell === "#") {
      return collected ? "success" : "crash";
    }

    if (cell === "*") {
      collected = true;
    }
  }

  if (collected) {
    return "success";
  }

  return "fail";
}

//EJERCICIO 10
// 🎄 Profundidad de Magia Navideña
// En el Polo Norte, Santa Claus está revisando las cartas mágicas 📩✨ que recibe de los niños de todo el mundo. Estas cartas usan un antiguo lenguaje navideño en el que los corchetes [ y ] representan la intensidad del deseo.

// Cuanto más profunda sea la anidación de los corchetes, más fuerte es el deseo. Tu misión es averiguar la máxima profundidad en la que se anidan los [].

// Pero ¡cuidado! Algunas cartas pueden estar mal escritas. Si los corchetes no están correctamente balanceados (si se cierra antes de abrir, sobran cierres o faltan cierres), la carta es inválida y debes devolver -1.
console.log("Resultados del EJERCICIO 10");

const carta1 = maxDepth("[]"); // -> 1
console.log(carta1);
const carta2 = maxDepth("[[]]"); // -> 2
console.log(carta2);
const carta3 = maxDepth("[][]"); // -> 1
console.log(carta3);
const carta4 = maxDepth("[[][]]"); // -> 2
console.log(carta4);
const carta5 = maxDepth("[[[]]]"); // -> 3
console.log(carta5);
const carta6 = maxDepth("[][[]][]"); // -> 2
console.log(carta6);

const carta7 = maxDepth("]["); // -> -1 (cierra antes de abrir)
console.log(carta7);
const carta8 = maxDepth("[[["); // -> -1 (faltan cierres)
console.log(carta8);
const carta9 = maxDepth("[]]]"); // -> -1 (sobran cierres)
console.log(carta9);
const carta10 = maxDepth("[][]["); // -> -1 (queda uno sin cerrar)
console.log(carta10);

function maxDepth(s) {
  let current = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === "[") {
      current++;
      if (current > max) {
        max = current;
      }
    }

    if (char === "]") {
      current--;
      if (current < 0) {
        return -1;
      }
    }
  }

  if (current !== 0) {
    return -1;
  }

  return max;
}

//EJERCICIO 11
// El grinch quiere robar los regalos de Navidad del almacén. Para ello necesita saber qué regalos no tienen vigilancia.

// El almacén se representa como un array de strings (string[]), donde cada regalo (*) está protegido si su posición está junto a una cámara (#). Cada espacio vacío se representa con un punto (.).

// Tu tarea es contar cuántos regalos están sin vigilancia, es decir, que no tienen ninguna cámara adyacente (arriba, abajo, izquierda o derecha).

// Ten en cuenta: solo se considera como "adyacente" las 4 direcciones cardinales, no en diagonal.

// Los regalos en las esquinas o bordes pueden estar sin vigilancia, siempre que no tengan cámaras directamente al lado.

console.log("Resultados del EJERCICIO 11");

const regalo1 = findUnsafeGifts([".*.", "*#*", ".*."]); // ➞ 0
console.log(regalo1);
// Todos los regalos están junto a una cámara

const regalo2 = findUnsafeGifts(["...", ".*.", "..."]); // ➞ 1
console.log(regalo2);
// Este regalo no tiene cámaras alrededor

const regalo3 = findUnsafeGifts(["*.*", "...", "*#*"]); // ➞ 2
console.log(regalo3);
// Los regalos en las esquinas superiores no tienen cámaras alrededor

const regalo4 = findUnsafeGifts([".....", ".*.*.", "..#..", ".*.*.", "....."]); // ➞ 4
console.log(regalo4);
// Los cuatro regalos no tienen cámaras, porque están en diagonal a la cámara

function findUnsafeGifts(warehouse) {
  let unsafeCount = 0;

  let rows = warehouse.length;
  let cols = warehouse[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (warehouse[i][j] === "*") {
        let hasCamera = false;

        if (i > 0 && warehouse[i - 1][j] === "#") {
          hasCamera = true;
        }

        if (i < rows - 1 && warehouse[i + 1][j] === "#") {
          hasCamera = true;
        }

        if (j > 0 && warehouse[i][j - 1] === "#") {
          hasCamera = true;
        }

        if (j < cols - 1 && warehouse[i][j + 1] === "#") {
          hasCamera = true;
        }

        if (!hasCamera) {
          unsafeCount++;
        }
      }
    }
  }

  return unsafeCount;
}

//EJERCICIO 12
// Dos elfos están jugando una batalla por turnos. Cada uno tiene un mazo de movimientos que se representan como un string donde cada carácter es una acción.

// A Ataque normal: causa 1 punto de daño si no es bloqueado
// B Bloqueo: bloquea un ataque normal (A)
// F Ataque fuerte: causa 2 puntos de daño, no puede ser bloqueado
// Ambos elfos comienzan con 3 puntos de vida. El primer elfo que llegue a 0 puntos de vida o menos pierde y la batalla termina inmediatamente (no se siguen procesando más movimientos).

// Reglas por ronda

// Si ambos usan ataque (A o F), ambos reciben daño según el tipo.
// B bloquea A, pero no bloquea F.
// Todo se resuelve simultáneamente.
// Tu tarea

// Devuelve el resultado de la batalla como un número:

// 1 → si el Elfo 1 gana
// 2 → si el Elfo 2 gana
// 0 → si empatan (ambos llegan a 0 a la vez o terminan con la misma vida)
console.log("Resultados del EJERCICIO 12");

const batalla1 = elfBattle("A", "B");
console.log(batalla1);
// Ronda 1: A vs B -> Elfo 2 bloquea
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 3 de vida
// → 0

const batalla2 = elfBattle("F", "B");
console.log(batalla2);
// Ronda 1: F vs B -> Elfo 2 recibe 2 de daño (F no se bloquea)
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 1 de vida
// → 1

const batalla3 = elfBattle("AAB", "BBA");
console.log(batalla3);
// R1: A vs B → Elfo 2 bloquea
// R2: A vs B → Elfo 2 bloquea
// R3: B vs A → Elfo 1 bloquea
// Resultado: Elfo 1 = 3, Elfo 2 = 3
// → 0

const batalla4 = elfBattle("AFA", "BBA");
console.log(batalla4);
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1
// Resultado: Elfo 1 = 2, Elfo 2 = 0
// → 1

const batalla5 = elfBattle("AFAB", "BBAF");
console.log(batalla5);
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1 → Elfo 2 llega a 0 ¡Batalla termina!
// R4: no se juega, ya que Elfo 2 no tiene vida
// → 1

const batalla6 = elfBattle("AA", "FF");
console.log(batalla6);
// R1: A vs F → Elfo 1 -2, Elfo 2 -1
// R2: A vs F → Elfo 1 -2, Elfo 2 -1 → Elfo 1 llega a -1
// → 2

function elfBattle(elf1, elf2) {
  let life1 = 3;
  let life2 = 3;

  let rounds = Math.max(elf1.length, elf2.length);

  for (let i = 0; i < rounds; i++) {
    let m1 = elf1[i];
    let m2 = elf2[i];

    let damageTo1 = 0;
    let damageTo2 = 0;

    if (m2 === "A") {
      if (m1 !== "B") {
        damageTo1 = 1;
      }
    } else if (m2 === "F") {
      damageTo1 = 2;
    }

    if (m1 === "A") {
      if (m2 !== "B") {
        damageTo2 = 1;
      }
    } else if (m1 === "F") {
      damageTo2 = 2;
    }

    life1 -= damageTo1;
    life2 -= damageTo2;

    if (life1 <= 0 && life2 <= 0) {
      return 0;
    }
    if (life1 <= 0) {
      return 2;
    }
    if (life2 <= 0) {
      return 1;
    }
  }

  if (life1 > life2) return 1;
  if (life2 > life1) return 2;
  return 0;
}

//EJERCICIO 13

// Simula el recorrido de un regalo dentro de una fábrica y devuelve cómo termina. Para ello debes crear una función runFactory(factory).

// factory es un string[] donde cada celda puede ser:

// > < ^ v movimientos
// . salida correcta
// Ten en cuenta que todas las filas tienen la misma longitud y que no habrá otros símbolos.

// El regalo siempre empieza en la posición (0,0) (arriba a la izquierda). En cada paso lee la celda actual y se mueve según la dirección. Si llega a una celda con un punto (.) significa que ha salido correctamente de la fábrica.

// Resultado

// Devuelve uno de estos valores:

// 'completed' si llega a un .
// 'loop' si visita una posición dos veces
// 'broken' si sale fuera del tablero
// Ejemplos
console.log("Resultados del EJERCICIO 13");
const recorrido1 = runFactory([">>."]); // 'completed'
console.log(recorrido1);

const recorrido2 = runFactory([">>>"]); // 'broken'
console.log(recorrido2);

const recorrido3 = runFactory([">><"]); // 'loop'
console.log(recorrido3);

const recorrido4 = runFactory([">>v", "..<"]); // 'completed'
console.log(recorrido4);

const recorrido5 = runFactory([">>v", "<<<"]); // 'broken'
console.log(recorrido5);

const recorrido6 = runFactory([">v.", "^.."]); // 'completed'
console.log(recorrido6);

const recorrido7 = runFactory(["v.", "^."]); // 'loop'
console.log(recorrido7);

function runFactory(factory) {
  let rows = factory.length;
  let cols = factory[0].length;

  let row = 0;
  let col = 0;

  let visited = [];

  while (true) {
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return "broken";
    }

    let position = row + "," + col;
    if (visited.includes(position)) {
      return "loop";
    }
    visited.push(position);

    let cell = factory[row][col];

    if (cell === ".") {
      return "completed";
    }

    if (cell === ">") col++;
    else if (cell === "<") col--;
    else if (cell === "^") row--;
    else if (cell === "v") row++;
  }
}

//EJERCICIO 14
// En el Polo Norte, los elfos han simplificado su sistema de almacenamiento para evitar errores.
// Ahora guardan los regalos en un objeto mágico con profundidad limitada, donde cada valor aparece una sola vez.

// Santa necesita una forma rápida de saber qué camino de claves debe seguir para encontrar un regalo concreto.

// Tu tarea es escribir una función que, dado un objeto y un valor, devuelva el array de claves que hay que recorrer para llegar a ese valor.

// Reglas:

// El objeto tiene como máximo 3 niveles de profundidad.
// El valor a buscar aparece como mucho una vez.
// El objeto solo contiene otros objetos y valores primitivos (strings, numbers, booleans).
// Si el valor no existe, devuelve un array vacío.
// Ejemplos:
console.log("Resultados del EJERCICIO 14");
const workshop = {
  storage: {
    shelf: {
      box1: "train",
      box2: "switch",
    },
    box: "car",
  },
  gift: "doll",
};

const ruta1 = findGiftPath(workshop, "train");
console.log(ruta1);
// ➜ ['storage', 'shelf', 'box1']

const ruta2 = findGiftPath(workshop, "switch");
console.log(ruta2);
// ➜ ['storage', 'shelf', 'box2']

const ruta3 = findGiftPath(workshop, "car");
console.log(ruta3);
// ➜ ['storage', 'box']

const ruta4 = findGiftPath(workshop, "doll");
console.log(ruta4);
// ➜ ['gift']

const ruta5 = findGiftPath(workshop, "plane");
console.log(ruta5);
// ➜ []

function findGiftPath(workshop, gift) {
  for (let key1 in workshop) {
    if (workshop[key1] === gift) {
      return [key1];
    }

    if (typeof workshop[key1] === "object") {
      for (let key2 in workshop[key1]) {
        if (workshop[key1][key2] === gift) {
          return [key1, key2];
        }

        if (typeof workshop[key1][key2] === "object") {
          for (let key3 in workshop[key1][key2]) {
            if (workshop[key1][key2][key3] === gift) {
              return [key1, key2, key3];
            }
          }
        }
      }
    }
  }
  return [];
}

//EJERCICIO 15
// Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

// Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

// La tabla dibujada debe tener:

// Cabecera con letras de columna (A, B, C…).
// El contenido de la tabla son los valores de los objetos.
// Los valores deben estar alineados a la izquierda.
// Los campos dejan siempre un espacio a la izquierda.
// Los campos dejan a la derecha el espacio necesario para alinear la caja.
// La función recibe un segundo parámetro sortBy que indica el nombre del campo por el que se deben ordenar las filas. El orden será alfabético ascendente si los valores son strings y numérico ascendente si son números.

// Mira el ejemplo para ver cómo debes dibujar la tabla:
console.log("Resultados del EJERCICIO 15");

const tabla1 = drawTable(
  [
    { name: "Charlie", city: "New York" },
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
  ],
  "name"
);
console.log(tabla1);
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

const tabla2 = drawTable(
  [
    { gift: "Book", quantity: 5 },
    { gift: "Music CD", quantity: 1 },
    { gift: "Doll", quantity: 10 },
  ],
  "quantity"
);
console.log(tabla2);
// +----------+----+
// | A        | B  |
// +----------+----+
// | Music CD | 1  |
// | Book     | 5  |
// | Doll     | 10 |
// +----------+----+

function drawTable(data, sortBy) {
  if (!data.length) return "";

  const cols = Object.keys(data[0]);

  data = [...data].sort((a, b) =>
    typeof a[sortBy] === "number"
      ? a[sortBy] - b[sortBy]
      : String(a[sortBy]).localeCompare(String(b[sortBy]))
  );

  const widths = cols.map(
    (c) => Math.max(...data.map((r) => String(r[c]).length), 1) + 2
  );

  const line = () => "+" + widths.map((w) => "-".repeat(w)).join("+") + "+";

  const row = (values) =>
    "|" + values.map((v, i) => " " + v.padEnd(widths[i] - 1) + "|").join("");

  const header = row(cols.map((_, i) => String.fromCharCode(65 + i)));

  return [
    line(),
    header,
    line(),
    ...data.map((r) => row(cols.map((c) => String(r[c])))),
    line(),
  ].join("\n");
}
