// console.log('Hello World!');

const Person = {
  name: 'Wale',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    },
  sum: function() {
    return this.age + 10;
  }
}

console.log(Person.sum());
console.log(Person.name);
console.log(5 + 'hello' + 5);