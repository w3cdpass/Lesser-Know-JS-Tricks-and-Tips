// Safety access nested properties without errors

const user={ address: { street: '123 Main St' } };
const street = user?.address?.street; // '123 Main St'
console.log(street); // '123 Main St'
const city = user?.address?.city; // undefined (no error)