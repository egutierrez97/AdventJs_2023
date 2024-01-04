
function findFirstRepeated(gifts) {
    let c = -1 ;
    let b = [];

    for(let i=0; c=== -1 && gifts.length > i ; i++ ){
      if (b.indexOf(gifts[i]) != -1){
          c = gifts[i]
      }
      b.push(gifts[i]);
    }
  return c
}
