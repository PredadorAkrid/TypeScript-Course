"use strict";
function combine(input1, input2, resultType) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' && resultType === 'as-number') {
        return result = +input1 + +input2;
    }
    else {
        return result = input1.toString() + input2.toString();
    }
}
function add(x, y) {
    return x + y;
}
const combineAges = combine(30, 20, 'as-number');
const combineNames = combine('Alexis', ' Navarrete', 'as-text');
const combineNamesNumber = combine('10', ' 20', 'as-number');
//let combineValues: Function; forma 1
//let combineValues: () => number; forma 2
let combineValues;
combineValues = add;
console.log(combineValues(1, 2));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
console.log(addAndHandle(1, 200, (result) => {
    return result;
}));
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log("Clicked!");
});
