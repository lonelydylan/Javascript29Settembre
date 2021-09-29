const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, ...personInfo } = person;
console.log(id, personInfo);

//copio l'esercizio perché sinceramente non sarei mai arrivato alla conclusione che dividere il primo valore, 
//ovvero id, con il rest operator, potesse permettermi di semplificare una azione
//così complessa.