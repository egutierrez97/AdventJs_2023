function createChristmasTree(ornaments, height) {
    let arreglo = []
    arreglo.push(ornaments.repeat(height**2));
    let texto = arreglo[0].split('')
    let arbol = []
    let cont = 0

    for (let i = 1; i <= height; i++) {
        let arbolito = texto.slice(cont,cont+i).join(' ')
        let linea = ' '.repeat(height-i) + arbolito + '\n'
        arbol.push(linea)
        cont = cont+i
    }
    
    let base = ' '.repeat(height-1) + '|\n'
    arbol.push(base)
    arbol = arbol.join('')

    return arbol;
}


















// MAL RESULETO
// function createChristmasTree(ornaments, height) {
//     let texto = ornaments.split('')
//     let resultado = []
//     let espacio = height - 1
//     for (i = 0; i < height; i++) {
//         let linea = []
//         let cont = 0;
//         linea.push(' '.repeat(espacio))
//         while (cont < i) {
//             if (cont < texto.length) {
//                 linea.push(texto[cont] + '')
//             } else {
//                 let linea2 = cont % texto.length
//                 linea.push(texto[linea2]+ '')
//             }
//             cont++
//         }
//         linea = linea.join('')
//         resultado.push(linea + '\n')

//         espacio--
//     }

//     resultado.push(' '.repeat(height-1) + '|')

//     resultado = resultado.join('')
//     return resultado
// }





