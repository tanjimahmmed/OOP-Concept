const Person = require('./index-7-inheritance')

const _subject = Symbol('subject')
const _salary = Symbol('salary')

class Teacher extends Person {
    constructor(name, email, subject, salary){
        super(name, email)
        this[_subject] = subject;
        this[_salary] = salary;
    }

    get subject(){
        return this[_subject];
    }

    get salary(){
        return this[_salary];
    }

    print(){
        super.print();
        console.log(`Subjects: ${this[_subject]}, Fee: ${this[_salary]}`);
    }
}
module.exports = Teacher;