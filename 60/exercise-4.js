const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

const jobs = [
  {
    id: 1,
    jobTitle: "CEO",
  },
  {
    id: 2,
    jobTitle: "Project Manager",
  },
  {
    id: 3,
    jobTitle: "Developer",
  },
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    const person = persons.find((item) => item.id === id);
    if (person) {
      return resolve(person);
    } else {
      return reject(`Id non trovato. [ID: ${id}]`);
    }
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    const personJob = jobs.find((item) => item.id === id);
    if (personJob) {
      return resolve(personJob);
    } else {
      return reject(`Questo ID non ha nessun lavoro. [ID: ${id}]`);
    }
  });
}

// persona = fetchPersonById(2)
// lavoro = fetchJobById(2)
// console.log(`La persona ${persona} è registrat* come ${lavoro}`);

fetchPersonById(2)
.then((persona) => console.log(persona));
fetchJobById(2)
.then((lavoro) => console.log(lavoro));

DA FINIRE
DA FINIRE
DA FINIRE
DA FINIRE
DA FINIRE
DA FINIRE
DA FINIRE
// core here
// # Async Management - Exercise 4

// Implementare le funzioni `fetchPersonById` e `fetchJobById`, le quali dato un id devono restituire rispettivamente:
// * La persona che ha come identificativo l'id passato come parametro
// * Il tipo di lavoro che ha come identificativo l'id passato come parametro

// Infine implementare il codice necessario che si occupa di stampare in console la persona e il tipo di lavoro trovato.
// N.B: la stampa dei risultati deve avvenire solo nel momento in cui entrambe le `Promise` sono state risolte.
