function sum(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5));