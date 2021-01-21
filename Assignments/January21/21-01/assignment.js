function display(str) {
  console.log(str);
}

// const functionName = (parameters) => { ... }
const print = (str) => {
  console.log(str);
};

// functions declarations as values:
// const functionName = function(parameters){...}
const sum = function (x, y) {
  return x + y;
};
sum(3, 4);

//invoke the function
function login() {
  //some things
  halloUser();
}
login();

function halloUser() {
  let userName = "dario";
  return `Hello, welcome back ${userName}!`;
}

// call stack

// an infinite call stack below. We should never do this.
// function one() {
//   two();
// }
// function two() {
//   one();
// }
// one();

// .map()
//for (let i=0;i<Array.length;i++) <- .map is a shorter version of it.
const names = ["Dario", "Elon Musk", ".map"];
const newArr = names.map((name, i) => {
  if ((name = ".map")) {
    console.log(".map is not included");
  }
  console.log(`The name "${name}" has index nr. ${i}.`);
});

const cities = ["Hamburg", "Los Angeles"];
const newCity = cities.map((city, i) =>
  console.log(`The city "${city}" has index nr. ${i}.`)
);

// .reduce()
const numArr = [1, 2, 3, 34, 5, 56];
const reducer = numArr.reduce((acc, cur) => acc + cur);
console.log(reducer);

// .break
// breaking out of a loop:

/*
T
TT
TTT
TTTT
*/

let TBox = "";
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    if (i == j) {
      break;
    } else {
      TBox += "T";
      console.log(TBox);
    }
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i == 4) {
    break;
  }
}
