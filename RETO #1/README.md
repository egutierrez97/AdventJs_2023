Reto #1: 🎁 ¡Primer regalo repetido!

ORIGEN : https://adventjs.dev/es
ES INICIATIVA DE : https://midu.dev/

Letra:
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más 
de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia 
tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia 
aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

Ejemplo: 
const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
Aunque el 2 y el 3 se repiten
el 3 aparece primero por segunda vez