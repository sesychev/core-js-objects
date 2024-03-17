function group(array, k, v) {
  const multimap = new Map();
  /*
  array.map((obj) =>
    multimap.set(
      k(obj),
      (multimap.get(k(obj)) === undefined ? [] : multimap.get(k(obj))).concat([v(obj)])
    )
  );
*/

  array.reduce((a, c) => {
    if (!multimap.get(k(c))) multimap.set(k(c), []);
    multimap.get(k(c)).push(v(c));
    return a;
  }, new Map());

  return multimap;
}

console.log(
  group(
    [
      { country: 'Belarus', city: 'Brest' },
      { country: 'Russia', city: 'Omsk' },
      { country: 'Russia', city: 'Samara' },
      { country: 'Belarus', city: 'Grodno' },
      { country: 'Belarus', city: 'Minsk' },
      { country: 'Poland', city: 'Lodz' },
    ],
    (item) => item.country,
    (item) => item.city
  )
);
//
// create your Animal class like object here
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

const dog = new Animal('Max', 'dog');
console.log(dog.toString()); // should return 'Max is a dog'
console.log(dog.name);
dog.name; // should == 'dog'

dog.name; // should == 'Max'

dog.name = 'Lassie'; // should set name to 'Lassie'

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
let person = new Person('John', 30);
console.log(person.toString()); // Output: "Name: John, Age: 30"
