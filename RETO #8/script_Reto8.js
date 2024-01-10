function organizeGifts(gifts) {
    let arreglo = gifts.split('');
    let posiciones = [];
    let ultimaPosicion = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].match(/[a-z]/i)) {
            let fragmento = gifts.slice(ultimaPosicion , i)
            fragmento = parseInt(fragmento)
            let cantBolsas = fragmento
            
            let cantPales = Math.floor(fragmento/50)
            cantBolsas = fragmento%50
            let cantCajas = Math.floor(cantBolsas/10)
            cantBolsas = cantBolsas%10

            let pales = `[${arreglo[i]}]`.repeat(cantPales)
            let cajas = `{${arreglo[i]}}`.repeat(cantCajas)
            
            posiciones.push(pales);
            posiciones.push(cajas);
            if(cantBolsas>0){
                let bolsas = `(${arreglo[i].repeat(cantBolsas)})`
                posiciones.push(bolsas);
            }
            

            ultimaPosicion = i + 1
        }
    }

    posiciones = posiciones.join('')

    return posiciones
}

