// function adjustLights(lights) {
//     let cantACorreguir = 0;
//     for (i = 0; i < lights.length; i++) {
//         if (i % 2 == 0 && lights[i] !== lights[0]) {
//             cantACorreguir++
//         } else if (i % 2 == 1 && lights[i] == lights[0]) {
//             cantACorreguir++
//         }
//     }
//     return cantACorreguir
// }



// function adjustLights(lights) {
//     let cantACorreguir = 0;

//     let parVerde = 0;
//     let parRojo = 0;
//     let imparVerde = 0;
//     let imparRojo = 0;

//     for (i = 0; i < lights.length; i++) {
//         if (i % 2 == 0) {
//             if(lights[i] == '🟢' ){
//                 parVerde++
//             } else {
//                 parRojo++
//             }

//         } else {
//             if(lights[i] == '🟢' ){
//                 imparVerde++
//             } else {
//                 imparRojo++
//             }
//         }

//     }

//     if (parVerde>imparVerde){
//         cantACorreguir += parRojo + imparVerde
//     } else {
//         cantACorreguir += parVerde + imparRojo
//     }


//     return cantACorreguir
// }


// OPTIMIZADO

function adjustLights(lights) {
    let cantACorreguir = 0;
    let counters = {par: {verde: 0, rojo: 0}, impar: {verde: 0, rojo: 0}};

    for (let i = 0; i < lights.length; i++) {
        const isPar = i % 2 === 0;
        const isVerde = lights[i] === '🟢';

        counters[isPar ? 'par' : 'impar'][isVerde ? 'verde' : 'rojo']++;
    }

    const {par, impar} = counters;
    cantACorreguir = par.verde > impar.verde ? par.rojo + impar.verde : par.verde + impar.rojo;

    return cantACorreguir;
} 