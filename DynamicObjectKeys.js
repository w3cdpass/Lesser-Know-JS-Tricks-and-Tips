// Use square brackets to access dynamic keys in an object

const keys = "username";
const value = "JohnDoe";
const user = { [keys]: value };
console.log(user); // { username: 'JohnDoe' }
// The same as
// const user = { username: 'JohnDoe' };
// console.log(user); // { username: 'JohnDoe' }