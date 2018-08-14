function dwarfRollCall(dwarves) {
  var dwarfNumberAndName = [];
  for (let i = 0; i<dwarves.length; i++){
    dwarfNumberAndName.push(`${i + 1}. ${dwarves[i]}`);
  }
  return `${dwarfNumberAndName.join(' ')} `;
}


function summonCaptainPlanet(planeteerCalls){
  let uppercaseCalls = [];
  for (let i = 0; i<planeteerCalls.length; i++){
    uppercaseCalls.push(planeteerCalls[i].toUpperCase() + "!");
  }
  return uppercaseCalls;
}


function longPlaneteerCalls(words) {
  for (var i=0; i < words.length; i++){
    if (words[i].length > 4){
      return true;
    }else{
      return false;
    }
  }
}

/*function longPlaneteerCalls(words) {
  function checkLength (word){
    return word.length > 4
  }
return words.every(checkLength); 
//need a small word situation
}*/


function findTheCheese (foods) {
  var findCheese = ['cheddar','gouda','camembert'];
  for (let i=0; i<findCheese.length; i++){
    for (let j=0; j<foods.length; j++){
      if (findCheese[i]===foods[j]){
        return findCheese[i];
      }
    }
    if (findCheese !== foods){
        return 'no cheese!';
    }
  }
}

