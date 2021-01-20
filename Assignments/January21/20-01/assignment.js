// The first way
const arr1 = [];
arr1.push("HI");
console.log(arr1);
const arr2 = ["Good", "Day"];

// new array
const arr3 = new Array();
arr3.push("cool");
console.log(arr3);

// .of
let newArr = Array.of(1, 20, 30, 40);
console.log(newArr);

// .sort
// to sort elements in an array
// it will use the UTF-16 CODE
let alpha = ["c", "b", "a", "1", "$", "A"];
let newSortedAlpha = alpha.sort();
console.log(newSortedAlpha);

// .reverse
// to reverse an array aka first is last and last is first
let crazyArr = ["3", "55", "2"];
let crazyArrRe = crazyArr.reverse();
console.log(crazyArrRe);

let newCrazyArr = ["A", "B", "C", "D"];
console.log(newCrazyArr.reverse());

console.log(typeof newCrazyArr);
// SIDENOTE: EVERYTHING INSIDE JS IS AN OBJECT. Things are being build inside the object.

// .isArray()
// true or false
let bool = Array.isArray(newCrazyArr);
console.log(bool);

let boolTwo = Array.isArray({});
console.log(boolTwo);

// .lastIndexOf()
// will start searching backwards
// -1 means nothing has been found
const arr4 = ["go", "we", "Home", "we", "I"];
console.log(arr4.lastIndexOf("we")); // 3
console.log(arr4.lastIndexOf("Home")); // 2
console.log(arr4.indexOf("Home")); // 2

let arr5 = ["here", "is", "a", "Assignment", "yea"];
console.log(arr5.lastIndexOf("Dario")); // -1

let str = "String";
console.log(str.indexOf("t")); // possible for strings too, but usually not to be used.

// .fill / overwriting content of an array
// (what, from, to) => (0,2,3)
let arr6 = [22, 32, 5, 7, 8, 4, 4, 1];
let newArr6 = arr6.fill(7, 1, 4);
console.log(newArr6);

let arr7 = ["dario", "oirad", "dci"];
let newArr7 = arr7.fill("OK", 1, 3);
console.log(newArr7);

console.log(arr7);

// do loop / another sort of loop / will always at least print one time, even if the condition is false. / will check after acting the first time.
let counter = 1;
do {
  console.log(counter);
  counter++;
} while (counter <= 10);

let counterTwo = 450;
do {
  console.log(counterTwo);
  counterTwo++;
} while (counterTwo <= 10);

let counterThree = 1;
do {
  console.log(`The counter is now at ${counterThree}`);
  arr5.push("Hi");
  counterThree++;
} while (counterThree <= 10);

// while loop / another sort of loop / will check the condition and only act if the conditions if true. / will check before acting.
let loopOne = 0;
while (loopOne <= 5) {
  console.log(loopOne);
  loopOne++;
}
console.log("___Above start from 0, since we count after console.logging.___");

let loopTwo = 0;
while (loopTwo <= 5) {
  loopTwo++;
  console.log(loopTwo);
}
console.log("___Above start from 1, since we console.log after counting.___");

let loopThree = 1;
while (loopThree < 5) {
  loopThree++;
}
console.log(loopThree);
console.log(
  "___Above does not count, since we are not console.logging in the loop.___"
);
