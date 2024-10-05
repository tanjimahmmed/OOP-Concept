const { Guardian, Student, Teacher } = require("./person");
const { Contact, Address } = require("./contact");
const { Department, Subject } = require("./university");

// Guardian ID 1
const guardian = new Guardian(1, "Mr. Khaled", "Engineer", 100000);
guardian.blood = "B+";
guardian.contact = new Contact({
  id: 1,
  email: "tanjim@gmail.com",
  phone: "12345678",
});

guardian.contact.address = new Address({
  id: 1,
  roadNo: "6B",
  city: "Dhaka City",
  region: "Dhaka",
  country: "Bangladesh",
  postalCode: 1200,
});

// Student ID 1
const student = new Student(1, "Martin", "ST001", guardian);
student.blood = "B+";
student.contact = new Contact({
  id: 2,
  email: "demo@gmail.com",
  phone: "01254409474",
  alternativePhone: student.guardian.contact.phone,
  address: student.guardian.contact.address,
});

// Department ID 1
const department = new Department({ id: 1, name: "SWE" });
student.department = department;

department.subjects = [
  new Subject(1, "Computer Fundamentals", 4),
  new Subject(2, "Introduction to Softwere Engineering", 3),
  new Subject(3, "Software Testing", 4),
];

const credit = student.department.subjects.reduce((a, b) => {
    a += b.credit;
    return a;
}, 0);

console.log('Total credit', credit);


// Teachers
const dean = new Teacher(1, 'Jack', department.subjects[0], 'EMP1001');
dean.blood = 'AB+';
dean.department = department;
dean.salary = 100000;
dean.contact = new Contact({
    id: 3,
    email: 'nethan@gmail.com',
    phone: '0125234672',
    address: new Address({
        id: 2,
        roadNo: '423 AB',
        city: 'Dhaka City',
        region: 'Dhaka',
        country: 'Bangladesh',
        postalCode: 1212,
    })
})

const teacher1 = new Teacher(1, 'Mr. Loki', department.subjects[1], 'EMP1002')
teacher1.department = department;
teacher1.blood = 'AB-';
teacher1.salary = 40000;
teacher1.contact = new Contact({
    id: 3,
    email: 'nethan@gmail.com',
    phone: '0125234672',
    address: new Address({
        id: 4,
        roadNo: 'KL 45AB',
        city: 'Dhaka City',
        region: 'Dhaka',
        country: 'Bangladesh',
        postalCode: 1212,
    })
})


const teacher2 = new Teacher(2, 'Mr. Loki2', department.subjects[2], 'EMP1002')
teacher2.department = department;
teacher2.blood = 'O-';
teacher2.salary = 40000;
teacher2.contact = new Contact({
    id: 4,
    email: 'kiwi@gmail.com',
    phone: '0125234672',
    address: new Address({
        id: 4,
        roadNo: 'KL 45AB',
        city: 'Dhaka City',
        region: 'Dhaka',
        country: 'Bangladesh',
        postalCode: 1212,
    })
})

department.dean = dean;
department.addTeacher(dean)
department.addTeacher(teacher1)
department.addTeacher(teacher2)

student.department.teachers.forEach((teacher, index) => {
    console.log(`${index + 1}. ${teacher.name} (${teacher.subject.name})`);
    
})

guardian.addChild(student)

const teacherSalary = guardian.children[0].department.teachers.reduce(
  (acc, cur)=> {
    acc += cur.salary;
    return acc;
  },
  0
)

console.log(teacherSalary);

let count = 0;

if(student.blood === 'O+') count++
if(student.guardian.blood === 'O+') count++
student.department.teachers.forEach(teacher => {
  if(teacher.blood === 'O+') count++
})
console.log(count);

