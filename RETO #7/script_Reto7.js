function drawGift(size, symbol) {
    const espacio = " ";
    const hashtag = "#";
    let cara = size-1;
    const simbolo = symbol;
    const altura = size*2 - 1;
    let resultado = [];

    for(i = 0 ; i < altura ; i++){
        let linea = []
        if(i == 0){
            linea = espacio.repeat(cara) + hashtag.repeat(size) + "\n"
            cara = cara - 1
        } else if (0 < i && i < size-1){
            if(1 < i && i < size){
                linea = espacio.repeat(cara) + hashtag + simbolo.repeat(size-2) + hashtag + simbolo.repeat(i-1) + hashtag +"\n"
            } else {
                linea = espacio.repeat(cara) + hashtag + simbolo.repeat(size-2) + hashtag + hashtag +"\n"
            }

            if(cara>1){
                cara = cara - 1
            }
            
        } else {
            if(i == size-1){
                linea = hashtag.repeat(size) + simbolo.repeat(i-1) + hashtag + "\n"
            } else if(i == altura-1){
                linea = hashtag.repeat(size) +"\n"
            } else {
                linea = hashtag + simbolo.repeat(size-2) + hashtag + simbolo.repeat(size-cara-2) + hashtag +"\n"
                cara++
            }
        }

        resultado.push(linea);

    }

    let total = resultado.join('')

    return total
  }



//   SOLUCION ALTERNATIVA (CON MEJOR PUNTAJE):
//   function drawGift(size, symbol) {
//     let cube = [];
  
//     let space = " ";
//     let borderSymbol = "#";
//     let bgSymbol = symbol.toString();
//     let width = size - 2;
//     let i = 1;
  
//     while (i <= size) {
//       let newline = "";
//       newline += space.repeat(size - i);
  
//       if (i === 1) {
//         newline += borderSymbol.repeat(size);
//       } else if (i === size) {
//         newline +=
//           borderSymbol.repeat(size) + bgSymbol.repeat(width) + borderSymbol;
//       } else {
//         newline +=
//           borderSymbol +
//           bgSymbol.repeat(width) +
//           borderSymbol +
//           bgSymbol.repeat(i - 2) +
//           borderSymbol;
//       }
  
//       newline += "\n";
//       cube.push(newline);
//       i++;
//     }
  
//     let j = width;
//     while (j >= 0) {
//       let newline = cube[j].trim() + "\n";
//       cube.push(newline);
//       j--;
//     }
//     const stringCube = cube.join("");
//     return stringCube;
//   }