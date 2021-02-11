// Destructuring objects as function

function fun(num, { name = "new" }) {
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}
fun(2, { name: "Dario" });

// GETTER and SETTER
// GETTER Get what an object has
// SETTER Set what an object has
// Get and Set should always have the same function name
// Used for example to overwrite userdate from userperspective

// CONSTRUCTER FUNCTION
// acts as an Object Template
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `Hi ${this.name}`;
  };
}
function Foo() {}
let person = new Person("Joe", 10);
console.log(person instanceof Foo);

// for in object
// for (let prop in zain) {
//   console.log(`zain.${prop} : ${zain[prop]}`);
// }

let family = [
  ["Dario", 26, "Dev"],
  ["Erc", 25, "Maler"],
];

// for instanceof// forEach arr
// for of arr

// class
class Animals {
  constructor(_kind, _hometown) {
    this.kind = _kind;
    this.hometown = _hometown;
  }
  // instances properties after constructor
  display() {
    console.log(`This very cute ${this.kind} lives in ${this.hometown}`);
  }
}
const cat = new Animals("Monkey", "Sri Lanka");
cat.display();
