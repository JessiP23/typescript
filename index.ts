function sumn(a: number, b: number): number {
    return a + b;
};

const TSresult = sumn(5, 8);
console.log(TSresult);

let learner: string = "Jessi";
let age: number = 22;
let isEnrolled: boolean = true;
const colors: string[] = ["red", "blue", "yellow"];
const numbers: number[] = [1,2,3,4,5];

numbers.push(5);
numbers.push(6);

interface Learner {
    id: string,
    name: {
        first: string,
        last: string,
    };
    course: string,
    grades: number[];
}

const john: Learner = {
    id: "12345",
    name: {
        first: "Jessi",
        last: "Pavia"
    },
    course: "Introduction to TypeScript",
    grades: [100,100,100,90]
};

function logLearner(john: Learner) {
    console.log(
        `Learner ${john.name.first} ${john.name.last} is currently enrolled in ${john.course}`
    );
}

logLearner(john);

//Tuples
let locationLo: [number, string, boolean];
locationLo = [34,"jessi", false];
console.log(locationLo);


//access modifiers: private, protected, public

//aliases

type User = {
    username: string,
    email: string,
    password: string,
    age: number,
    admin: boolean,
    dev?: boolean  //optional due to ?
}

interface Car {
    year: number,
    model: string
}

function createUser(obj: User): User {
    const newUser = obj;
    return newUser;
}

const user1: User = {
    username: "Jessi",
    email: "jessi@gmail.com",
    password: "jessipavia",
    age: 22,
    admin: true
}

console.log('username', user1);