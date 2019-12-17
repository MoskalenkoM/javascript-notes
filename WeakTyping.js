// Example weak typing.
// Примеры слабой типизации.

// '==' or '!=' - non-strict comparison operators
// '===' or '!==' - strict comparison operators

let a = 1;
let b = '1';

console.log(a == b); // true
console.log(a === b); // false

a = true;
b = 1;

console.log(a == b); // true
console.log(a === b); // false

// объекты сравниваются по ссылке, а не по значению
// objects are compared by reference, not by value

a = { name: 'Max' };
b = { name: 'Max' };

console.log(a == b); // false
console.log(a === b); // false

a = { name: 'JavaScript' };
b = a;

console.log(a == b); // true
console.log(a === b); // true
