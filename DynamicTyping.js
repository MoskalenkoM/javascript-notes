// Examples of dynamic typing.
// Примеры динамической типизации.

let a; // неявное присваивание значения undefined
console.log(`Value: ${a}, Type:`, typeof a); // undefined

a = 1; // переменная связывается с типом в момент присваивания значения
console.log(`Value: ${a}, Type:`, typeof a); // number

a = 'Simple string';
console.log(`Value: ${a}, Type:`, typeof a); // string

a = true;
console.log(`Value: ${a}, Type:`, typeof a); // boolean

a = {};
console.log(`Value: ${a}, Type:`, typeof a); // object

a = function() {};
console.log(`Value: ${a}, Type:`, typeof a); // function
// тип function - это ошибка в языке, на самом деле функции в JavaScript - это объекты
