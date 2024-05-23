function sumn(a, b) {
    return a + b;
}
;
var TSresult = sumn(5, 8);
console.log(TSresult);
var learner = "Jessi";
var age = 22;
var isEnrolled = true;
var colors = ["red", "blue", "yellow"];
var numbers = [1, 2, 3, 4, 5];
numbers.push(5);
numbers.push(6);
var john = {
    id: "12345",
    name: {
        first: "Jessi",
        last: "Pavia"
    },
    course: "Introduction to TypeScript",
    grades: [100, 100, 100, 90]
};
function logLearner(john) {
    console.log("Learner ".concat(john.name.first, " ").concat(john.name.last, " is currently enrolled in ").concat(john.course));
}
logLearner(john);
//Tuples
var locationLo;
locationLo = [34, "jessi", false];
console.log(locationLo);
function createUser(obj) {
    var newUser = obj;
    return newUser;
}
var user1 = {
    username: "Jessi",
    email: "jessi@gmail.com",
    password: "jessipavia",
    age: 22,
    admin: true
};
console.log('username', user1);
createUser(user1);
