const person = {}
person.name = 'Mealer';
person.age = 50;
// console.log(person)

class Person {
    constructor(name, email){
        this._name = name;
        this._email = email;
    }

    getName(){
        return this._name
    }

    setName(name){
        this._name = name;
    }

    getEmail(){
        return this._email
    }

    setEmail(email){
        this._email = email;
    }

    sendMail(msg) {
        console.log('To:', this._email)
        console.log('MSG:', this._sanitizeMsg(msg))
    }

    _sanitizeMsg(msg){
        return msg.trim().toLowerCase()
    }

    print(){
        console.log(this)
    }
}

const p1 = new Person('Tanjim', 'tanjim@gmail.com');
const p2 = new Person('Alyssa', 'alyssa@gmail.com');
const p3 = new Person('Austin', 'austin@gmail.com');

p1.setName('Tanjim Milton')
p1.setEmail('tanjimmil@gmail.com')
console.log(p1.getName(), p1.getEmail())

p1.sendMail('           wow   ')

