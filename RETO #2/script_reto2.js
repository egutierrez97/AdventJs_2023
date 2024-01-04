function manufacture(gifts, materials) {
    let array = [];
    const material = materials.split('')
    for(let i=0 ; i < gifts.length ; i++){
        let palabra = gifts[i].split('');
        let elemento = [];
        for(let a=0 ; palabra.length>a ; a++){
            if (material.indexOf(palabra[a]) !== -1){
                elemento.push(palabra[a]);
            }
        }
        elemento = elemento.join('');
        if (gifts.indexOf(elemento) !== -1) {
            array.push(elemento);
        }
    }
    return array;
}

manufacture(gifts,materials)

