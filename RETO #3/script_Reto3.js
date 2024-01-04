function findNaughtyStep(original, modified) {
    let palabraOrg = original.split('');
    let palabraMod = modified.split('');
    let resultado = [];
    let max = Math.max(palabraOrg.length , palabraMod.length)

    for (let i=0 ; i < max && resultado.length === 0 ; i++){
        if(palabraOrg[i] !== palabraMod[i]) {
            if(palabraMod.length > palabraOrg.length){
                resultado.push(palabraMod[i]);
            }
            if(palabraMod.length < palabraOrg.length){
                resultado.push(palabraOrg[i]);
            }
            
        }
    }

    resultado = resultado.join('');

    return resultado ;
  }