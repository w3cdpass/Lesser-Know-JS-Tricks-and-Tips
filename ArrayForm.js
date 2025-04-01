// Convert NodeLists, strings or objects with lenght into arrays

console.log(Array.from('hello')); // [ 'h', 'e', 'l', 'l', 'o' ]

console.log(Array.from({length : 5}, (_, i) => i))