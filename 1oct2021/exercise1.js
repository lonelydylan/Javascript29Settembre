let numbers = [1, 2, 3, 4, 5];
let othernumbers = [6, 7, 8]; 


let newnumbers = numbers.filter(num => num > 3);
let moreNewNumbers = [...numbers, ...othernumbers];

// console.log(numbers)
numbers.forEach((value, index) => {
    numbers[index] *= 2;
});
console.log(numbers)


// Fare test
// venerdì 8 test face to face
// organizzare su slack cambio giorno