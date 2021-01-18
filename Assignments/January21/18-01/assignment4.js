// Capitalize.
// Create a program that capitalizes the first letter of each element in an array of names. Examples:

/*
const names = ["matt", "sara", "lara"];
const namesUpper = names.charAt(0).toUpperCase() + names.slice(1);
console.log(namesUpper + names.slice(1));
*/

const names = ["dario", "ercan", "mohammad"];
for (let i = 0; i < names.length; i++) {
  names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
}
console.log(names);

// City Names.
// Create an array of city names. Loop through the array and add the city names to a string. Examples:

const cities = ["Berlin", "Paris", "Prague", "Rome"];
for (let i = 0; i < cities.length; i++) {
  console.log(`This is ${cities[i]}.`);
}

// Hello
// Create an array filled with your friends’ or family’s names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array.

const namesHello = ["Dario", "Ercan", "Mohammad"];
for (let i = 0; i < namesHello.length; i++) {
  console.log(`Hi ${namesHello[i]}. How are you?`);
}

// Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:

let myNumbers = [3, 5, 2, 4];
for (let i = 0; i < myNumbers.length; i++) {
  if (i % 2) {
    console.log(i - 1);
  } else {
    console.log(i + 1);
  }
}
