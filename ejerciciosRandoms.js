
//Evaluar si el texto contiene más de una palabra (es decir, si hay algún espacio). indexOf()

let texto = "Hoy sera un buen dia";

if (texto.indexOf(" ") != -1) {
    console.log("Contiene mas de una palabra")
} else { console.log("No contiene mas de una palabra") }



//Evaluar si el texto tiene más de 10 letras o no.  length  

texto = "Hoy sera un buen dia";

if (texto.length > 10) {
    console.log("SI tiene mas de 10 letras")
} else {
    console.log("NO tiene mas de 10 letras")
}



//  Determinar si la cantidad de letras de la palabra es par o impar. length 

texto = "Hoy sera un gran dia"

if (texto.length % 2 == 0) {
    console.log("La cantidad de letras es par");
} else {
    console.log("La cantidad de letras es impar");
}



// Mostrar las primeras 4 letras del texto.  slice 

texto = "Hoy sera un buen dia";

console.log(texto.slice(0, 5));



/*Determinar si es un texto que está todo en mayúsculas, todo en minúsculas o si 
es alguna mezcla de ambos casos. toUpperCase() toLowerCase() */

texto = "Hoy sera un buen dia";

if (texto.toUpperCase() == texto) {
    console.log("Es todo mayuscula");
} else if (texto.toLowerCase() == texto) {
    console.log("Es todo minuscula");
} else {
    console.log("Hay mayusculas y minúsculas")
}



// Mostrar la última palabra del texto. slice lastIndexOf 

texto = "Hoy sera un buen dia";

let ultimoEspacio = texto.lastIndexOf(" ");

console.log(texto.slice(ultimoEspacio + 1, texto.length));



// Mostrar la letra del medio o la más cercana al medio. charAt 

texto = "Hoy sera un buen dia";

if (texto.charAt(texto.length / 2) == " ") {
    console.log('"espacio"')
}
else {
    console.log(texto.charAt(texto.length / 2))
}



//Evaluar si esa letra del medio es una vocal o no (o sea, es una consonante, un espacio, un número o un símbolo, x ej).

texto = "Hoy sera un buen dia";

let caracterMedio = texto.charAt(texto.length / 2);

if (caracterMedio == 'a' || caracterMedio == 'e' || caracterMedio == 'i' || caracterMedio == 'o' || caracterMedio == 'u') {

    console.log("Es vocal: " + caracterMedio)
}
else {

    console.log("No es vocal: " + caracterMedio)
}



// Evaluar si en la frase hay una pregunta. indexOf 

texto = "Hoy sera un buen dia";

if (texto.indexOf("?") != -1) {
    console.log("Es una pregunta");
}
else {
    console.log("No una es pregunta");
}



// Reemplazar la primer ocurrencia de la secuencia "dad" por "tud". replace

texto = "Me gusta jugar a los dados";

console.log(texto.replace("dad", "tud"));



/* Si la frase tiene una sola palabra, mostrarla toda en mayúsculas. Si 
tiene dos, juntarlas y mostrarlas como camelCase. Si tiene más, mostrar 
solo la última, toda en minúsculas. indexOf lastIndexOf slice toUpperCase toLowerCase replace */

texto = "Me gusta Mucho";

if (texto.indexOf(" ") == -1) {
    console.log(texto.toUpperCase());
} else if (texto.indexOf(" ") == texto.lastIndexOf(" ")) {

    var espacio = texto.indexOf(" ");
    console.log(texto.slice(0, espacio).toLowerCase() + texto.charAt(espacio + 1).toUpperCase() + texto.slice(espacio + 2, texto.length));

} else {
    espacio = texto.lastIndexOf(" ")
    console.log(texto.slice(espacio + 1, texto.length).toLowerCase());
}



/*Escribir un algoritmo que parta de declarar una constante (variable) "num" que contenga algún 
número entero cualquiera y luego evalúe si ese número es múltiplo de 3 y de 7 (de los dos números) 
y a la vez es par. Por ejemplo, para 42 o 294 el resultado sería afirmativo (muestra por consola "cumple"),
 para 4 o 21 sería negativo (muestra por consola "no cumple"). Probar para distintos valores.*/

console.log("Ejercicio 1 - Multiplo de 2,3 y 7");

let num = Math.floor(Math.random() * 1000) + 7;

console.log(num);

if ((num % 3 == 0) && (num % 7 == 0) && (num % 2 == 0)) {

    console.log("Cumple");
} else {
    console.log("No Cumple")
}



/*Escribir otro algoritmo que parta también de una constante numérica, esta vez un valor 
entero entre 0 y 99 y evalúe en qué "decil" se encuentra. Un decil es una parte de diez de un 
total. Vamos a llamar a esos deciles A, B, C, etc., hasta J. El decil A es de 0 a 9, el B de 10 a 19,
y así hasta el J de 90 a 99. Que se muestre por consola la letra del decil al que corresponde. Probar 
para distintos valores.*/

console.log("Ejercicio 2 - Decil");

 num = Math.floor(Math.random() * 100);

console.log(num)

if (num < 10) console.log("A");
else if (num < 20) console.log("B");
else if (num < 30) console.log("C");
else if (num < 40) console.log("D");
else if (num < 50) console.log("E");
else if (num < 60) console.log("F");
else if (num < 70) console.log("G");
else if (num < 80) console.log("H");
else if (num < 90) console.log("I");
else console.log("J");



//Encontrar el número capicua mayor más cercano

capicua(1234)             //Función y un numero como argumento en busca del capicúa siguiente

function capicua(numero) {

    let invertido = 0;
    let unidad;
    let aux = numero;

    while (aux != 0) {
        unidad = aux % 10;                       //Separa el número por unidad
        invertido = (invertido * 10) + unidad;  //Arma el número inversamente 
        aux = aux / 10;                         //Guarda el sobrante
        aux = Math.floor(aux)                    //Redondéa para no dejar decimales
    }

    if (numero == invertido) {              //Si hay coincidencia entre el número y su inverso
        console.log(`El capicua siguiente es: ${invertido}`);
    } else {                                 //Si no hay coincidencia, suma 1 y vuelve a iniciar
        numero++;
        capicua(numero)
    }
}



//Un contador de ocurrencias

let palabra1 = "ababa";
let palabra2 = "aba";
let palabraOriginal = palabra1;
let ocurrencias = 0;

//Busca mientras indexOf encuentra la palabra, al encontrarla corta la cadena con substring
//y vuelve a buscar desde el ultimo resultado encontrado

while (palabra1.indexOf(palabra2) > -1) {

    palabra1 = palabra1.substring(palabra1.indexOf(palabra2) + palabra2.length - 1, palabra1.length);
    ocurrencias++;

}

console.log(`Las cantidad de ocurrencia en ${palabraOriginal} de ${palabra2} es: ${ocurrencias} `);
