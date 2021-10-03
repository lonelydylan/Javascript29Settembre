const persons = [{
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const persona = persons.find(item => item.id === id);
      if (persona) {
        return resolve(persona);
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}


fetchPersonById(2).then((persona) => console.log(persona));

