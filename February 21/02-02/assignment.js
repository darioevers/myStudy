// OBJECTS

// old life with no objects:
let firstName = "Dario";
let lastName = "Evers";
let userAge = 26;

// OBJECTS
// Object Literal
// const <name> = { <key1>: <value1>, ...}
// The whole thing is called property. key:value!

const obj = {
  1: "Dario",
  2: "Kid",
  3: "Cudi",
};

const objUser = {
  name: "Ercan",
  lastName: "Erdagi",
  age: 24,
  address: "Pinneberg",
  activity: ["Work", "Eat", "Drink", "Repeat"],
  young: true,
};
console.log(objUser.name);
console.log(objUser.activity[2]);
console.log(typeof console);

// Accessing properties
// 1- with (brackets notation)
console.log(objUser["activity"][2]);

// 2- with (dot notation)
console.log(objUser.activity[2]);
console.log(objUser.name);

// not pre-filled object
const obj2 = {};
obj2.name = "Dario";
console.log(obj2.name);

//
const save = new Object();
console.log(save);
const arr = new Array();
console.log(arr);

// output of an object in a loop
for (let properties in objUser) {
  console.log(`objUser.${properties} : ${objUser[properties]}`);
}

// Tell me more about you
const person = {
  name: "Dario",
  age: 25,
  birthYear: 1995,
  gender: "male",
  height: 180,
  print: function () {
    console.log(
      `I am ${this.name}, my age is ${this.age}. I was born in ${this.birthYear} and I am a ${person.height}cm tall ${person.gender}.`
    );
  },
};
person.print();

// Object keys
console.log(Object.keys(person));

// Object values
console.log(Object.values(person));

// delete

// Object.assign
const obj3 = { kids: 2, cars: 400 };
const obj4 = { color: ["red", "gray", "black"], pets: "fish" };
const totalObjects = Object.assign(obj3, obj4);
console.log(totalObjects);

// Object.defineProperty()
const newPersonObject = {};
Object.defineProperty(newPersonObject, "bike", {
  value: "Ducati",
  writable: true,
});
console.log(newPersonObject.bike);

// Object.defineProperties()
const otherNewPersonObject = {};
Object.defineProperties(otherNewPersonObject, {
  p1: {
    value: "Google",
    writable: true,
  },
  p2: {
    value: "Facebook",
    writable: false,
  },
  p3: {
    value: "100",
    writable: true,
  },
});
console.log(otherNewPersonObject.p1);

// Object yourPersonObject
// Create an object named person2. Loop through the object and print both the property and value of the object.
const person2 = {
  name: "Dario",
  age: 25,
  height: 180,
};
for (let properties in person2) {
  console.log(`${properties} : ${person2[properties]}`);
}

// Object yourPersonObject
//  Create a function that returns an array of the properties of a javascript object.
const person3 = {
  name: "Dario",
  age: 25,
  height: 180,
  print: function () {
    console.log(Object.keys(person3));
    console.log(Object.values(person3));
  },
};
person3.print();

//Create a method that prints the following:
//"Zain Oil a student in class 48"
const student = {
  firstName: "Zain",
  lastName: "Oil",
  class: 48,
  print: function () {
    console.log(
      `${this.firstName} ${this.lastName} a student in class ${this.class}`
    );
  },
};
student.print();

// Get values. Create a function that returns an array of all values of an object properties
const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};
const objVal = (obj) => {
  return Object.values(obj);
};
console.log(objVal(getObjectValues));

// List Properties. Create a function that returns an array of properties of a javascript object.
const student2 = {
  name: "Mike",
  class: "4A",
  course: "English",
  print: function () {
    console.log(Object.keys(student2));
  },
};
student2.print();

//

const object;

// THIS. <- Refers to current working object
