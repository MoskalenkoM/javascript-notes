// Examples of weak typing.
// Примеры слабой типизации.

// '==' or '!='     ---> non-strict comparison operators (нестрогие операторы сравнения)
// '===' or '!=='   ---> strict comparison operators (строгие операторы сравнения)

let a = 1; // number
let b = 1; // number

console.log(a == b); // true
console.log(a === b); // true

a = 2; // number
b = '2'; // string

console.log(a == b); // true
console.log(a === b); // false

a = true; // boolean
b = 1; // number

console.log(a == b); // true
console.log(a === b); // false

// objects are compared by reference, not by value
// объекты сравниваются по ссылке, а не по значению

a = { name: 'Max' }; // object
b = { name: 'Max' }; // object

console.log(a == b); // false
console.log(a === b); // false

a = { name: 'JavaScript' }; // object
b = a; // object

console.log(a == b); // true
console.log(a === b); // true
