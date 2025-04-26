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
import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('Mario');
  const [age, setAge] = useState(25);
  
  const handleClick = () => {
    setName('Luigi');
    setAge(30);
  }

  return (
    <div className="home">
      <p>{ name } is { age } years old.</p>
      {/* On Button Click - Initial run:
      Mario is 25 years old.
      Luigi is 30 years old. */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Home;