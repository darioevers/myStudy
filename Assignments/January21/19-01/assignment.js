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
