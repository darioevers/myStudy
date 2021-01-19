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
cityName.push("Hi");
cityName.push("Hi");
console.log(cityName);

// .pop
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
let removedIt = names.splice(pos, 1);
console.log(names);
console.log(`${removedIt} got removed from the array.`);
