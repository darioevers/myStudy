// ___________________________________________________________ASSIGNMENT 1___________________________________________________________:
console.log("__________ASSIGNMENT 1__________");
// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:
//  [ { tile: “N”, score: 1 },
//    { tile: “K”, score: 5 },
//    { tile: “Z”, score: 10 },
//    { tile: “X”, score: 8 },
//    { tile: “D”, score: 2 },
//    { tile: “A”, score: 1 },
//    { tile: “E”, score: 1 } ]
const scrabbleScores = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
const scrabble = (arr) => {
  return arr.reduce((acc, cur) => acc + cur.score, 0);
};
console.log(scrabble(scrabbleScores));

// ___________________________________________________________ASSIGNMENT 2___________________________________________________________:
console.log("__________ASSIGNMENT 2__________");
// Switch Keys and Values.
// Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
// let person = {
//   name: “John”,
//   job: “teacher”
// }
// Expected Output:
// {“John”: name, “teacher”: job}

let person = {
  name: "John",
  job: "teacher",
};

const reverseObject = (obj) => {
  let newObj = {};
  for (let prop in obj) {
    newObj[obj[prop]] = prop;
  }
  return newObj;
};
console.log(reverseObject(person));

// ___________________________________________________________ASSIGNMENT 3___________________________________________________________:
console.log("__________ASSIGNMENT 3__________");
// Return Keys and Values.
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [[“a”, “b”, “c”], [1, 2, 3]]
// {key: true} ➞ [[“key”], [true]]
const twoArrFromAnObj = (obj) => {
  const keysArr = Object.keys(obj);
  const ValsArr = Object.values(obj);
  return [keysArr, ValsArr];
};
console.log(twoArrFromAnObj({ a: 1, b: 2, c: 3 }));
