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

    changeName(name){
        this.name = name;
    }

    sendEmail(msg){
        console.log('To', this.email)
        console.log('Sending Email')
        console.log('MSG', msg)
    }

    print(){
        console.log(this)
    }
}

const p1 = new Person('Tanjim', 'tanjim@gmail.com');
const p2 = new Person('Alyssa', 'alyssa@gmail.com');
const p3 = new Person('Austin', 'austin@gmail.com');

// console.log(p1)
// console.log(p2)
p1.sendEmail('Hello')
p1.changeName('Tanjim Miler')
p1.print()


