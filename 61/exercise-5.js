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

// core here

function fetchById(collection, id, reject, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = collection.find(item => item.id === id);

      if (item) {
        return resolve(JSON.stringify(item));
      }

      return reject();
    }, delay);
  });
}

function fetchPersonById(id) {
  const reject = () => Promise.reject(`Person with id: ${id} doesn't exist`);
  return fetchById(persons, id, reject);
}

function fetchJobById(id) {
  const reject = () => Promise.reject(`Job with id: ${id} doesn't exist`);
  return fetchById(jobs, id, reject, 500);
}


// function fetchPersonById(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const person = persons.find((item) => item.id === id);
//       if (person) {
//         return resolve(person);
//       } else {
//         return reject(`Id non trovato. [ID: ${id}]`);
//       }
//     }, 1000);
//   });
// }

// function fetchJobById(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const personJob = jobs.find((item) => item.id === id);
//       if (personJob) {
//         return resolve(personJob);
//       } else {
//         return reject(`Questo ID non ha nessun lavoro. [ID: ${id}]`);
//       }
//     }, 1000);
//   });
// }

Promise.race([fetchPersonById(2), fetchJobById(2)])
  .then((result) => JSON.parse(result))
  .then((result) => console.log(result))
  .catch((err) => console.error(err));