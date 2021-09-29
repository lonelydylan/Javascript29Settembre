const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const json = JSON.stringify(person, (key, value) => {
  if (typeof value === 'string') {
    return undefined;
  } 
  return value;
  } 
);
console.log(json); // Should return: { id: 1, age: 25 }

// ho provato a farlo al contrario, ovvero che se fosse stato numerico avrebbe dovuto tornare il valore, ma ho capito poi che ogni ciclo si sarebbe 
// fermato al primo valore numerico trovato