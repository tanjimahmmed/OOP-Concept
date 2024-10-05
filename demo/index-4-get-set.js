const person = {}
person.name = 'Mealer';
person.age = 50;
// console.log(person)

class Person {
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
        console.log(this)
    }
}

const p1 = new Person('Tanjim', 'tanjim@gmail.com');

p1.name = 'new learner'
console.log(p1.name)
p1.print()
