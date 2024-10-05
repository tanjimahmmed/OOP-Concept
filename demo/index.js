const person = {}
person.name = 'Mealer';
person.age = 50;
// console.log(person)

class Person {
    constructor(name, email){
        this.name = name;
        this.email = email;
        console.log(this)
    }
}

const p1 = new Person('Tanjim', 'tanjim@gmail.com');
const p2 = new Person('Alyssa', 'alyssa@gmail.com');
const p3 = new Person('Austin', 'austin@gmail.com');

// console.log(p1)
// console.log(p2)

class Department {
    constructor(dname, droom){
        this.dname = dname;
        this.droom = droom;
    }
}

const d1 = new Department('Software Department', 5001)
console.log(d1)
