const names = ["Dario", "Ercan", "Mo"];
const smileys = ["😎", ":(", ":)"];

console.log(names.length);
console.log(names[names.length - 1]);

let cityName = ["Paris"];
console.log(cityName.length);
cityName[0] = "Berlin";
cityName[1] = "Paris";
cityName[2] = "Dubai";
console.log(cityName);

// .push
// add item at tje end
cityName.push("Hi");
cityName.push("Hi");
console.log(cityName);

// .pop
// delete item at the end
cityName.pop();
cityName.pop();
let removedItem = cityName.pop();

console.log(cityName);
console.log(`"${removedItem}" was the deleted item of the above array.`);

// .unshift
// add an item to the beginning
cityName.unshift("HH");
console.log(cityName);

// .shift
// remove an item at the beginning
cityName.shift();
let removedEle = cityName.shift();
console.log(cityName);
console.log(`${removedEle} got removed.`);

// .indexOf()
// Find the index of an item
console.log(names.indexOf("Ercan"));
let pos = names.indexOf("Ercan");
let n = 1;

// .splice
// remove an item by the index number
let removedIt = names.splice(pos, n);
console.log(names);
console.log(`${removedIt} got removed from the array.`);
for (let i = 0; i < names.length; i++) {
  console.log(`${names[i]} is left.`);
}

// .split()
// divide a string into an array
let str = "Hi this is Dario.";
let newArr = str.split(" ");
let newArra = str.split(" ").length;
console.log(
  `There are ${newArra} spaces in the string. It got converted into an array.`
);
console.log(newArr);

// .join
// create a string from an array
let newStr = newArr.join(" ");
console.log(newStr);

// .concat
// merge two or more arrays
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = arr1.concat(arr2, [22, 23, 24]);
console.log(arr3);

const add = ["Berlin", "Paris", "Prague"];
let fakeCopy = add;
console.log(fakeCopy);
fakeCopy.push("Dubai");
console.log(add);
fakeCopy.pop();
console.log(add);

// .slice()
// to make a shallow copy - its grabbing that array and making a copy. The main array will be unaffected by changes.
let shallowCopy = add.slice(1, 4);
console.log(shallowCopy);
shallowCopy.push("London");
console.log(shallowCopy);
console.log(add);
