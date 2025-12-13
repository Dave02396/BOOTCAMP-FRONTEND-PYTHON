// FUNCIONES (Son bloques de código que podemos reutilizar)

// Declaración
function nombreDeLaFuncion() {
  // Cuerpo de la función y aquí va la lógica a ejecutar y las que vamos a reutlizar
  console.log("Hola soy una función");
  console.log("Soy un bloque de código");
}

// Ejecutar, estamos llamando a la función
nombreDeLaFuncion();
nombreDeLaFuncion();

// Funciones sin parámetros

function imprimirMiNombre() {
  console.log("¡Hola soy Victor!");
  console.log("Y soy fullstack");
}

imprimirMiNombre();

// Funciones con parámetros y valores por defecto

function imprimirUnNombre(nombre, nivel = "el mejor") {
  // if (!nivel) { ❌
  //   nivel = 'el mejor'
  // }

  console.log("¡Hola soy " + nombre + "!");
  console.log("Y soy " + nivel);
}

imprimirUnNombre(); // ¡Hola soy undefined! ❓
imprimirUnNombre("David", "Fullstack"); // ¡Hola soy David! Y soy Fullstack 😎
imprimirUnNombre("Diego"); // ¡Hola soy Diego! Y soy el mejor 😎

// EJERCICIOS

// 1. Usando funciones determinar si la edad de una persona es mayor o menor de edad mostrando 'Mayor de edad' o 'Menor de edad.

function esMayorOMenorDeEdad(edad) {
  if (edad >= 18) {
    // si es true se ejecuta
    console.log("Mayor de edad");
  } else {
    // si es false se ejecuta
    console.log("Menor de edad");
  }
}

esMayorOMenorDeEdad(39); // Mayor de edad
esMayorOMenorDeEdad(8); // Menor de edad
esMayorOMenorDeEdad(17); // Menor de edad

// 2. Retornar true si un numero es primo sino devolver false
// Pista: un numero primo es divisible por sí mismo y por 1

// 7 -> 1 (2 3 4 5 6) 7

function esNumeroPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let posibleDivisor = 2; posibleDivisor < numero; posibleDivisor++) {
    console.log("esNumeroPrimo", posibleDivisor);
    if (numero % posibleDivisor === 0) {
      return false;
    }
  }

  return true;
}

console.log(esNumeroPrimo(7)); // true
console.log(esNumeroPrimo(10)); // false
console.log(esNumeroPrimo(15)); // false

// FUNCIONES SIN RETORNO

function esMayorOMenorDeEdadSinRetorno(edad) {
  if (edad >= 18) {
    // si es true se ejecuta
    console.log("Mayor de edad");
  } else {
    // si es false se ejecuta
    console.log("Menor de edad");
  }

  // FUNCION QUE NO RETORNA NADA === undefined
}

esMayorOMenorDeEdadSinRetorno(39);

// FUNCIONES CON RETORNO

function esMayorOMenorDeEdadConRetorno(edad) {
  if (edad >= 18) {
    // si es true se ejecuta
    return "Mayor de edad";
  } else {
    // si es false se ejecuta
    return "Menor de edad";
  }
}

const resultado = esMayorOMenorDeEdadConRetorno(39);

console.log("RESULTADO:", resultado);

// MÉTODOS DE CADENAS

const welcome = " Hola Javascript ";

console.log(welcome);
console.log(welcome.length);
console.log(welcome.toUpperCase());
console.log(welcome.toLowerCase());
console.log(welcome.trim()); // Remueve los espacios en blanco al inicio y al final de la cadena

const avatar = "Hola @me";

console.log(avatar);
console.log(avatar.concat("victorvzn")); // Hola @mevictorvzn
console.log(avatar.replace("me", "victorvzn")); // Hola @victorvzn
console.log(avatar.slice(0, 5)); // Retorno una parte de la cadena tomando la posición/índice de inicio y final en los parámetros
console.log(welcome.indexOf("script")); // 10

// Split y join para cadenas

console.log("frutas".split("")); // Convierte en un arreglo y separa cada letra de la cadena
console.log("frutas".split("").join(","));
console.log("frutas".split("").join(""));

// TIPOS DE DATOS NO PRIMITIVOS (ARRAYS, OBJECTS)

// ARRAYS

// Un arreglo va a contener elementos de cualquier tipo de dato: cadenas, números, booleans, null, undefined, funciones, arrays, objetos, etc.

// Declarar un arreglo
const arregloVacio = [];
const arregloConNombres = ["Victor", "Liliana", "Marcial", "Mariana"];
const listaConValores = [
  1,
  2,
  3,
  "Victor",
  "Villazón",
  true,
  null,
  undefined,
  [6, 7, 8],
];

const listaConFunciones = [
  function () {
    console.log("Hola función");
  },
  "edad",
  123,
];

console.log(arregloVacio);
console.log(arregloConNombres);
console.log(listaConValores);
console.log(listaConFunciones);

// Lectura de los elementos de un arreglo

console.log(arregloConNombres[0]); // Victor
console.log(arregloConNombres[3]); // Mariana

console.log(listaConValores[0]); // 1
console.log(listaConValores[4]); // Villazón
console.log(listaConValores[5]); // true
console.log(listaConValores[100]); // undefined
console.log(listaConValores[8]); // (3) [6, 7, 8] -> Devolvio un arreglo
console.log(listaConValores[8][1]); // 7 -> Así accedemos a un elemento de un arreglo dentro de otro arreglo

console.log(listaConFunciones[0]); // Aquí devuelve la declaración de la función sin ejecutarla
console.log(listaConFunciones[0]()); // Estamos ejecutando la función que está en el índice 0 del arreglo

// ¿Cómo sabemos la longitud de un arreglo?

console.log(arregloConNombres.length); // 4 elemento
console.log(listaConValores.length); // 9 elementos

// Escritura en arreglos

console.log(listaConValores[0]); // 1
listaConValores[0] = "Grethel";
listaConValores[4] = "Juan";
console.log(listaConValores); // ['Grethel', ...]

// OPERACIONES SOBRE LOS ARREGLOS

// Insertar nuevos elementos al final del arreglo

arregloConNombres.push("Javascript");
arregloConNombres.push("CSS");

console.log(arregloConNombres);

// Remover elementos del final del arreglo

arregloConNombres.pop();

console.log(arregloConNombres);

// Insertar un elemento en una posición determinada

const arreglo = [...arregloConNombres]; // Copia o Clone del arregloNombres

console.log(arreglo);
arreglo.splice(1, 0, "HTML");
console.log(arreglo);
console.log(arregloConNombres); // Queda intacto

// Eliminar un elemento

console.log(arregloConNombres);
arregloConNombres.splice(2, 1);
console.log(arregloConNombres);

// Otras funciones: slice (Investiguen)

// EJERCICIOS

// EJERCICIO: Lista de Invitados

// Tienen un arreglo con los nombres de las personas invitadas a una fiesta.

// 01 - Declara el arreglo con 5 nombres.
let invitados = ["Ana", "Luis", "María", "Pedro", "Carla"];

// 02 - Muestra en consola todos los nombres.
console.log(invitados);
// 03 - Agrega un nuevo invitado al final de la lista.
const arregloI = [...invitados];
arregloI.splice(5, 0, "Sarai");
console.log(arregloI);
// 04 - Inserta un invitado al inicio de la lista.
arregloI.splice(1, 0, "Kimber");
console.log(arregloI);
// 05 - Elimina al último invitado de la lista.
arregloI.pop();
console.log(arregloI);
// 06 - Elimina al primer invitado de la lista.
arregloI.shift();
console.log(arregloI);
// 07 - Muestra cuántos invitados hay actualmente.
console.log(arregloI.length);
// 08 - Reemplaza el segundo invitado de la lista por otro nombre.
arregloI[1] = "MARCO";
console.log(arregloI);

// EJERCICIOS DE ALGORITMOS

// 1. Encontrar el mayor número
// Dado un arreglo de números, encuentra el número más grande sin usar Math.max.

const valores = [3, 10, 2, 8];

function encontrarMayor(numeros) {
  let mayor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    console.log(i, numeros[i]);
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }

  console.log(mayor);
  return mayor;
}

console.log(encontrarMayor(valores)); // 10

// 2. Contar pares e impares
// Dado un arreglo de números, muestra cuántos son pares y cuántos son impares.

function contarParesImpares(numeros) {
  let pares = 0; // Acumulador
  let impares = 0; // Acumulador

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      // Es un numero par
      pares = pares + 1;
    } else {
      impares = impares + 1;
    }
  }

  console.log(pares, impares);
  return [pares, impares];
}

console.log(contarParesImpares(valores)); // [3, 1]

// 3. Invertir un arreglo
// Dado un arreglo, crea otro arreglo con los elementos en orden inverso sin usar .reverse().
// 👉 Pista: usa un bucle desde el final hacia el inicio.

function invertirArreglo(arregloOriginal) {
  const nuevoArreglo = [];
  for (let i = arregloOriginal.length - 1; i >= 0; i--) {
    nuevoArreglo.push(arregloOriginal[i]);
  }
  return nuevoArreglo;
}

const arregloOriginal = [1, 2, 3, 4, 5, 6, 7];
const arregloInvertido = invertirArreglo(arregloOriginal);

console.log("Ejercicio  3");
console.log("Arreglo Original : " + arregloOriginal);
console.log("Arreglo Invertido : " + arregloInvertido);

// 4. Buscar un elemento
// Pide un nombre y verifica si está en el arreglo de invitados.
// Si está, muestra el índice donde se encuentra; si no, indica que no existe.
const nombresLista = ["Ana", "Luis", "David", "Kimber", "Sarai"];

function buscarInvitado(nombre) {
  for (let i = 0; i < nombresLista.length; i++) {
    if (nombresLista[i] === nombre) {
      return `El nombre "${nombre}" está en el índice ${i}.`;
    }
  }
  return `El nombre "${nombre}" no existe en la lista.`;
}

const nombreIngresado = "Ana";
const respuesta = buscarInvitado(nombreIngresado);
console.log(respuesta);

// 5. Eliminar duplicados
// Dado un arreglo con nombres repetidos, crea un nuevo arreglo sin duplicados.
// 👉 Pista: usa un arreglo auxiliar y verifica antes de insertar.

function eliminarDuplicados(nombres) {
  const resultado = [];

  for (let i = 0; i < nombres.length; i++) {
    const elemento = nombres[i];

    if (!resultado.includes(elemento)) {
      resultado.push(elemento);
    }
  }
  return resultado;
}

const nombres = ["David", "Marco", "David", "Pedro", "Ana", "Marco"];
const sinDuplicados = eliminarDuplicados(nombres);

console.log("Arreglo original: " + nombres);
console.log("Arreglo final :" + sinDuplicados);

// 6. Palíndromo con arreglos
// Verifica si una palabra es palíndroma (se lee igual al derecho y al revés).
// 👉 Pista: conviértela en arreglo de letras y compárala con su inverso.

// 7. Suma de todos los elementos
// Dado un arreglo de números, calcula la suma total de sus elementos sin usar reduce.
// 👉 Pista: acumula con un for.

function sumaNumeros(numeros) {
  let total = 0;
  for (let i = 0; i <= numeros.length; i++) {
    total = total + i;
  }
  return total;
}
let numeros = [1, 2, 3, 4, 5];
let total = sumaNumeros(numeros);
console.log("Ejericio 7");
console.log("El total es: " + total);
// 8. Número más repetido
// Dado un arreglo de números, encuentra cuál aparece más veces.
// 👉 Pista: usa un contador para cada número.

function numeroRepetido(numeros) {
  let contadores = [];
  let numeroMax = null;
  let maxRepeticiones = 0;

  // Contar apariciones
  for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];

    if (contadores[num]) {
      contadores[num]++;
    } else {
      contadores[num] = 1;
    }

    // Ver si este número es ahora el más repetido
    if (contadores[num] > maxRepeticiones) {
      maxRepeticiones = contadores[num];
      numeroMax = num;
    }
  }

  return numeroMax;
}

// Ejemplo
let numerosR = [1, 1, 1, 2, 3, 4, 5];
let repetido = numeroRepetido(numerosR);

console.log("Ejercicio 8");
console.log("El número más repetido es: " + repetido);

// 9. Ordenar un arreglo (básico)
// Ordena un arreglo de números de menor a mayor sin usar .sort().
// 👉 Pista: algoritmo de burbuja (intercambiar elementos si están desordenados).

// 10. Intercalar dos arreglos
// Dado dos arreglos [1,2,3] y ['a','b','c'], crea uno nuevo: [1,'a',2,'b',3,'c'].
// 👉 Pista: usa un for que recorra en paralelo.

// TODO: Investiguen cada uno de los métodos de arreglos que muestro en la siguiente línea

// MÉTODOS DE ARREGLOS (includes, map, filter, reduce, every, some, flat, flatMap, sort,forEach, etc.)

// MÉTODOS DE ARREGLOS (includes, map, filter, reduce, every, some, flat, flatMap, sort,forEach, etc.)

const languages = ["javascript", "php", "python", "C", "c++", "java", "python"];

// Método INCLUDES, verifica si exise cierto valor(tipo de dato) en un arreglo y devuelve un resultado booleano(true o false).

console.log(languages);

console.log("INCLUDES", languages.includes("java")); // true
console.log("INCLUDES", languages.includes("cobol")); // false
console.log("INCLUDES", languages.includes("PYTHON")); // false
console.log("INCLUDES", languages.includes("python")); // true

// Método FILTER, nos ayuda a ubicar un elemeneto dentro de un arreglo usando una condicion y devuelve un nuevo arreglo con los resultados.

const lenguajesFiltrados = languages.filter(function (lenguaje) {
  // return false
  // return lenguaje === 'java'
  // return lenguaje === 'python'
  // return lenguaje === 'Python'
  // return lenguaje.includes('c') || lenguaje.includes('C')
  return lenguaje.toLowerCase().includes("c");
});

console.log("FILTER", lenguajesFiltrados); // ['javascript', 'C', 'c++']
console.log(languages);

// TODO: EJERCICIO - Busca solo las personas cuyo nombre empieza con una vocal

const lista = ["Ana", "Luis", "Oscar", "Elena", "Pedro"];

// Resultado esperado: ["Ana", "Oscar", "Elena"]

const listaFiltrado = lista.filter(function (nombre) {
  const vocales = ["a", "e", "i", "o", "u"];
  const primera = nombre[0].toLowerCase();
  return vocales.includes(primera);
});

console.log(listaFiltrado);

// Método MAP, devuelve un arreglo y modifica cada elemento pasando una función(callback)
// El map siempre devuelve un arreglo nuevo

const nombresConAsterisco = languages.map(function (lenguaje) {
  return lenguaje + "*";
});

console.log("MAP", nombresConAsterisco);
console.log(languages);

// EJERCICIO: Análisis de compras
// Tienes un arreglo con los nombres de productos que un cliente compró en una tienda:

const compras = [
  "manzana",
  "pan",
  "leche",
  "manzana",
  "queso",
  "huevo",
  "pan",
  "jugo",
  "manzana",
];

// Resuelve lo siguiente:

// includes: Verifica si el cliente compró "queso".
console.log("EL CLIENTE COMPRO QUESO?", compras.includes("queso"));
// filter: Crea un nuevo arreglo que contenga solo las manzanas que se compraron.

const comprasFiltrados = compras.filter(function (compras) {
  return compras.toLowerCase().includes("manzana");
});

console.log("RESULTADO", comprasFiltrados);

// map: Convierte cada producto en un arreglo que contenga: El nombre del producto y La cantidad de letras que tiene. Por ejemplo: "pan" → ["pan", 3]

const comprasNuevas = compras.map(function (compras) {
  return [compras, compras.length];
});

console.log("PRODUCTOS", comprasNuevas);

// reduce: Cuenta cuántos productos en total compró el cliente.

const sumaProductos = compras.reduce(function (acumulador) {
  return acumulador + 1;
}, 0);
console.log("SUMA PRODUCTOS", sumaProductos);

// Método REDUCE, nos ayuda a tomar los valores de un arreglo y sumarlos.

const numeross = [3, 40, 100, 7, 50]; // 200

let acumulador = 0;

for (let i = 0; i < numeross.length; i++) {
  console.log(i, numeross[i]);
  acumulador = acumulador + numeross[i];
}

console.log(acumulador);

// Vamos a usar reduce

const sumatoria = numeros.reduce(function (acumulador, valorActual) {
  return acumulador + valorActual;
}, 0);

console.log(sumatoria);
