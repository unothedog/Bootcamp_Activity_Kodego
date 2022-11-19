console.log("connected");

let gino = {
    firstGrading: 95,
    subject: "English",
    teachers: ["Jelly", "Jem", "Joey"],
    isStudent:true,
    school: {
        city: "Manila",
        country: "Philippines"
    },
    classmates: [
        {
            name: "Dahl",
            batch: "26"
        },

        {
            name: "John Paul",
            batch: "5"
        },

        {
            name: "Jhyx",
            batch: "1"
        }
    ],

    description: function() {
        return `${this.subject}: ${this.firstGrading}`
    }
}

/*
    Q: How do we access properties in an object?
    //through dot (.) notation
    //through bracket ([""]) notation
    //objectName.propertyName
*/

console.log(gino.firstGrading);//95
//objectName.propertyName

console.log(gino.subject); //English

console.log(gino[`isStudent`]);
//true - returns a boolean

console.log(gino[`teachers`]);
//array of teachers

console.log(gino.teachers);
//even using dot notation it will still return the desired output

console.log(gino.teachers[1]);//outputs the index element Jem

console.log(gino.school); //objects

console.log(gino.school.city); //Manila
console.log(gino.school[`city`]);
console.log(gino [`school`][`city`]);

//Q: How to access school's country?
console.log(gino.school.country);
console.log(gino [`school`] [`country`]);

//Q: How to access the 2nd object of classmates?
console.log(gino[`classmates`][1]);

console.log(gino[`classmates`][1][`batch`]);


//Q: How do we access the function in the object?
console.log(gino.description);
//it displays the defined function but it did not exective the function.

console.log(gino.description());

//Q: How to add property in an object?
console.log(gino.semester); //undefined
gino.semester = "first";

console.log(gino);

//Removing a property in an object
delete gino.semester;
console.log(gino);

const studentGrades =[
    {
        studentId: 1,
        Q1: 89.3,
        Q2: 91.2,
        Q3: 93.3,
        Q4: 89.8
    },

    {
        studentId: 2,
        Q1: 69.2,
        Q2: 71.8,
        Q3: 76.5,
        Q4: 81.9
    },

    {
        studentId: 3,
        Q1: 95.7,
        Q2: 91.4,
        Q3: 90.7,
        Q4: 85.6
    },

    {
        studentId: 4,
        Q1: 86.9,
        Q2: 74.5,
        Q3: 83.3,
        Q4: 86.1
    },

    {
        studentId: 5,
        Q1: 70.9,
        Q2: 73.8,
        Q3: 80.1,
        Q4: 81.8
    },

];

//ASSIGNMENT: Compute the student average by accessing the declared objects

//CLUE: We can use to compute the average manually, using for loop, or you can use forEach

//SOLUTION 1: Coding Manually - Sir Dom's code

let student1 = (studentGrades);


let sum1=(89.3+ 91.2+ 93.3+89.8);
console.log (`the average grade of student1 is : ${sum1/4}`)


let student2 = (studentGrades);
let sum2=(69.3+ 71.9+ 76.5+81.9);
console.log (`the average grade of student2 is : ${sum2/4}`)

let student3 = (studentGrades);let sum3=(95.7+ 91.4+90.7+85.6);
console.log (`the average grade of student2 is : ${sum3/4}`)

let student4 = (studentGrades);
let sum4=(86.9+ 74.5+83.3+86.1);
console.log (`the average grade of student2 is : ${sum4/4}`)

let student5 = (studentGrades);

let sum5= (70.9+ 73.8+80.4+81.2);
console.log (`the average grade of student2 is : ${sum4/5}`)

//SOLUTION 2: Using For Loop
for (let i =0; i < studentGrades.length; i++)
{
    //compute element average
    let forLoopAve = (studentGrades[i].Q1 + studentGrades[i].Q2 + studentGrades[i].Q3 + studentGrades[i].Q4) / 4;

    console.log(forLoopAve);

    //add averaage property in each object
    studentGrades[i].forLoopAve = parseFloat(forLoopAve.toFixed(1));
}

console.log(studentGrades);

//SOLUTION 3: Using ForEach
studentGrades.forEach(function (element){
    let forEachAve = (element.Q1 + element.Q2 + element.Q3 + element.Q4)/4;
    console.log(forEachAve);
    element.forEachAve = parseFloat(forEachAve.toFixed(1));
});

console.log(studentGrades);

//Object Constructor
let hero = {
    name: "Angela",
    level: 1,
    role: "support",
    health: 100,
    attack: 50,
    mana: 100,

    tackle: function() {
        console.log(`This hero tackled hero`);
        console.log(`Target hero's health is now reduced to heroHealth`);
    },

    faint: function(){
        console.log(`Hero fainted`);
    }
}

console.log(hero);

//Q: What if we want to create a multiple objects with the same properties? Would you prefer creating 1 object each? No, it will take too long

//To solve this dilemma, Object Constructor will be a good use.

//Object Constructor - serves as a blueprint of our objects.
// Objects created using "this" constructor will inherit what are the function properties and methods set by this function.

//Q: What are the steps in creating an Object Constructor

//Step 1: Create a template or blueprint
function Pokemon (name, lvl, hp){
    this.name = name;
    this.level = lvl;
    this.health = hp * 2;
    this.attack = lvl;

    this.tackle = function (target){
        console.log(target);

        console.log(`This ${this.name} tackled ${target.name}`);

        console.log(`${target.name}'s health is now reduced to ${target.health - this.attack}`);
    };

    this.faint = function(){
        console.log(`${this.name} fainted!`);
    }
}

//Step 2: Initialize an Object with arguments
let pikachu = new Pokemon ("Pikachu", 5, 50);
let charizzard = new Pokemon ("Charizzard", 8, 40)

console.log(pikachu);
console.log(charizzard);

//Step 3: Execute the property
//For this example we execute the tackle property of Pikachu object
console.log(pikachu.tackle(charizzard));
console.log(pikachu.tackle(charizzard));
console.log(pikachu.tackle(charizzard));

//Exercise : Create your own object constructor
/*
    Create your own person self object and with the use of object constructor, create a new person with different information out of the template.
*/

function Person (firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullProfile = `${firstName}, ${lastName} age ${age}`;
}

let jelly = new Person ("Jelly", "Lumactud", 11);

console.log(jelly.fullProfile);