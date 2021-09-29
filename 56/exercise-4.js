function sum(...valori) {
  return valori.reduce((prima, dopo) => prima + dopo, 0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

//vorrei capire se sono riuscito ad ottimizzare per la prima volta un esercizio con spontaneità xd 