function cyberReindeer(road, time) {
    let mapa = road.split('');
    let recorrido = road.split('');
    let posicion = road.indexOf("S");
    let resultado = []

    for(let i = 0 ; i < time ; i++){
        if(i===1){
            mapa[posicion-1] = "."
        }

        if(i===5){
            let barreraLevantada = road.replace(/\|/g, '*')
            mapa = barreraLevantada.split('')
            let prueba = recorrido.join('').replace(/\|/g, '*')
            recorrido = prueba.split('')
        }

        if(recorrido[posicion] == '|' && i<5){
            resultado.push(recorrido.join(''))
        } else {
            recorrido[posicion] = "S"
            recorrido[posicion-1] = mapa[posicion-1];
            resultado.push(recorrido.join(''))
            posicion++
        }
        
    }
    return resultado;
}