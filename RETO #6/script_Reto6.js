function maxDistance(movements) {
    let movimiento = movements.split('')
    let derecha = 0;
    let izquierda = 0;
    let delante = 0;
    let total = 0;

    for(let i = 0 ; i < movimiento.length ; i++){
        if(movimiento[i]==">"){
            derecha++
        } else if(movimiento[i]=="<"){
            izquierda++
        } else {
            delante++
        }
    }

    total = Math.max(derecha,izquierda) - Math.min(derecha,izquierda) + delante;
   
    return total
  }