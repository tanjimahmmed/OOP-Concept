const Person = require('./index-7-inheritance');
const Teacher = require('./Teacher-inheritance');
const Student = require('./Student-inheritance');

const p = new Person('Tanjim', 'tanjim@gmail.com');
const t = new Teacher('Bond', 'bond@gmail.com', 'Computer Fundamental', 4000)
const s = new Student('Yuly', 'yuly@gmail.com',['Computer 101', 'Physics', 'Math'], 40000)



// t._name = 'Bond 09'


// console.log(t.name)
// console.log(t instanceof Person)
// console.log(s);

console.log(p);
console.log(t);
console.log(s);




