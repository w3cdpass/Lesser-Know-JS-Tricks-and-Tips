// Quickly convert a boolean to a string and vice versa


console.log(!! "hello") // true (non-empty string is truthy)
console.log(!! "") // false (empty string is falsy)
console.log(!! 0) // false (0 is falsy)
console.log(!!1) // true (non-zero number is truthy)
console.log(!! null) // false (null is falsy)
console.log(!!undefined) // false (undefined is falsy)
console.log(!!NaN) // false (NaN is falsy)
console.log(!![]) // true (empty array is truthy)
console.log(!![1, 2, 3]) // true (non-empty array is truthy)
console.log(!!{}) // true (empty object is truthy)
console.log(!!{ name: "John" }) // true (non-empty object is truthy)
console.log(!!function () { }) // true (function is truthy)