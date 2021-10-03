const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(persons.find(id => id === id)), 1000);
  });
  // HO provato a farlo con la destrutturazione degli oggetti ma non ci vengo a capo!
}

fetchPersonById(2).then((person) => console.log(person));
// code here