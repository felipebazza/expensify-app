// Object Destructuring

// const person = {
//   name: 'Felipe',
//   age: 27,
//   location: {
//     city: 'Caçador',
//     temp: 36
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age} years old.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city} today.`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'self-published' } = book.publisher;

// console.log(publisherName);

// Array Destructuring

// const address = ['1299 S Juniper Street', 'Philadeplhia', 'Pennsylvania', '19147'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}`);

const items = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [item, , mPrice] = items;

console.log(`The item ${item} is ${mPrice}`);