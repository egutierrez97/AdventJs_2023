Reto #2: 🏭 Ponemos en marcha la fábrica

ORIGEN : https://adventjs.dev/es
ES INICIATIVA DE : https://midu.dev/

Letra : 
En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto 
limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres.Tu tarea es escribir una función 
que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos 
que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

ejemplo : 
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
'tren' SÍ porque sus letras están en 'tronesa'
'oso' SÍ porque sus letras están en 'tronesa'
'pelota' NO porque sus letras NO están en 'tronesa'


