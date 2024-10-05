const person = {}
person.name = 'Mealer';
person.age = 50;
// console.log(person)

class Person {
    static className = 'PERSON';
    constructor(name, email){
        this._name = name;
        this._email = email;
    }

    get name(){
        console.log('This is a func call')
        return this._name.toUpperCase().split(' ')[0];
    }

    set name(value){
        if(value.toLowerCase() === 'new learner') return
        this._name = value;
    }

    print(){
        console.log('ClassName = Person, ' + this + '')
    }

    toString(){
        return `Name: ${this._name}, ${this._email}`
    }

    static isValid(age){
        return age >= 18
    }

    static equal(p1, p2){
        if(p1.name !== p2.name) return false;
        if(p1.email !== p2.email) return false;

        return true;
    }
}

const p1 = new Person('Tanjim', 'tanjim@gmail.com');
const p2 = new Person('Tanjim', 'tanjim@gmail.com');


console.log(p1 instanceof Person)

console.log(Person.className)

const testUser = {
    name: 'Test',
    email: 'test@gmail.com',
    age: 15,
}

let p5 = null;

if(Person.isValid(testUser.age)){
    p5 = new Person(testUser.name, testUser.email)
}

console.log(p5)

console.log(Person.equal(p1, p2))