function decode(message) {
    for (let i = 0 ; i < message.length ; i++){
        let elemento = message[i];
        if (elemento===")"){
            let final = message.indexOf(")");
            let inicio = message.lastIndexOf("(", final)
            let subtexto = message.substring(inicio,final+1);
            let subTextoRev = subtexto.substring(1,subtexto.length-1).split('').reverse().join('');
            let nuevoTexto = message.replace(subtexto , subTextoRev);
            
            message = nuevoTexto;

        }
    }
    if (message.indexOf(")") !== -1){
        let final = message.indexOf(")");
            let inicio = message.lastIndexOf("(", final)
            let subtexto = message.substring(inicio,final+1);
            let subTextoRev = subtexto.substring(1,subtexto.length-1).split('').reverse().join('');
            let nuevoTexto = message.replace(subtexto , subTextoRev);
            
            message = nuevoTexto;

    }
    return message;
} 










// SOLUCION ALTERNATIVA
// function decode(message) {
//     for (let i = 0; i < message.length; i++) {
//         message = aux(message)
//     }
//     if (message.indexOf(")") !== -1) {
//         message = aux(message)
//     }
//     return message;
// }

// function aux(messageText) {
//     let final = messageText.indexOf(")");
//     let inicio = messageText.lastIndexOf("(", final)
//     let subtexto = messageText.substring(inicio, final + 1);
//     let subTextoRev = subtexto.substring(1, subtexto.length - 1).split('').reverse().join('');
//     let nuevoTexto = messageText.replace(subtexto, subTextoRev);

//     messageText = nuevoTexto;

//     return messageText
// }