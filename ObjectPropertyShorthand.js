// if the variable name is the same as the property name, we can use shorthand syntax
const name = 'John';
const age = 30;
const person = { name, age }; // shorthand syntax
console.log(person); // { name: 'John', age: 30 }
// The same as
// const person = { name: name, age: age };
// console.log(person); // { name: 'John', age: 30 }