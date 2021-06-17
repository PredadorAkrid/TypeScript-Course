"use strict";
const userName = 'Alexis';
let age = 30;
age = 29;
var result;
function add(a, b) {
    result = a + b;
    return result;
}
const add2 = (a, b) => {
    return a + b;
};
const add3 = (a, b) => a + b;
const printOutput = output => console.log(output);
const add4 = (a, b = 1) => a + b;
console.log(add4(10));
const hobbies = ['nadar', 'correr'];
const activeHobbies = ['bicicleta'];
activeHobbies.push(...hobbies);
const add5 = (...numbers) => {
    return numbers.reduce((currResult, currValue) => {
        return currResult + currValue;
    }, 0);
};
console.log(add5(1, 2, 3, 4, 5.5));
const [hobby1, hobby2] = hobbies;
