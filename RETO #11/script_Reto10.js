function getIndexsForPalindrome(word) {
    let res = [];

    
    let reversoo = word.split('').reverse().join('')

    if(word === reversoo){
        res = []
    } else {
        for (let i = 0; i < word.length; i++) {
            for (let j = i + 1; j < word.length; j++) {
              let palabra = word.split('')
              let primeraLetra = word[i];
              let segundaLetra = word[j];
      
              palabra[i] = segundaLetra
              palabra[j] = primeraLetra
              
              let palabras = palabra.join('')
              let reverso = palabra.reverse().join('')
      
              if (palabras ===  reverso){
                res.push([i, j]);
              }
            }
          }
        if (res.length>0){
            res = res[0]
        } else {
            res = null
        }
        
    }

    return res;
  }




// CODIGO QUE NO FUNICONO
// function getIndexsForPalindrome(word) {
//     let repeticiones = Math.ceil(word.length/2)
//     let arreglo = []
//     for (i=0 ; i < repeticiones ; i++){
//         if (word[i] !== word[word.length-i-1]){
//             let linea = []
//             linea.push(i)
//             linea.push(word.length-i-1)
//             console.log(linea)
//             arreglo.push(linea)
//         } else {
//             console.log(word[i] + ".")
//             console.log(word[word.length-i-1] + '.')
//         }
        
//     }


//     return arreglo
//   }



 
  
//   function getIndexsForPalindrome(word) {
//       let res = null; // Inicializa la variable res como nula.
//       for (const a of Array.from({ length: word.length }).keys()) { // Itera sobre los índices de la palabra.
//         for (const b of Array.from({ length: word.length }).keys()) { // Itera sobre los índices de la palabra.
//           let swapped = [...word]; // Crea una copia de la palabra.
//           let aux = word[a]; // Guarda el valor de la letra en la posición a.
//           swapped[a] = word[b]; // Intercambia la letra en la posición a con la letra en la posición b.
//           swapped[b] = aux; // Intercambia la letra en la posición b con la letra guardada en aux.
    
//           let left = swapped.slice(0, Math.floor(word.length / 2)).join(""); // Obtiene la mitad izquierda de la palabra intercambiada.
//           let right = swapped.slice(Math.ceil(word.length / 2)).reverse().join(""); // Obtiene la mitad derecha de la palabra intercambiada y la invierte.
    
//           res = [ // Actualiza el valor de res.
//             [
//               null,[ [],[a, b],][+((a + b) > 0)],][+(left == right)], // Si la palabra intercambiada es un palíndromo, actualiza res con los índices a y b.
//             res, // Si no es un palíndromo, no actualiza res.
//           ][+!!res]; // Si res es nulo, actualiza res con los índices a y b. Si no es nulo, no actualiza res.
//         }
//       }
//       return res; // Devuelve el valor de res.
//     }