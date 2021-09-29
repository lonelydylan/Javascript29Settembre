class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);
console.log(developer.toJson());