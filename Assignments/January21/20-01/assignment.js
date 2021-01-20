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

// .isArray()
// true or false
