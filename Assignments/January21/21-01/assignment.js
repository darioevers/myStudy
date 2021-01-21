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
const cities = ["Hamburg", "Los Angeles"];
const newArr = names.map((name, i) => {
  if ((name = ".map")) {
    console.log("Blabla");
  }
  console.log(`The name "${name}" has index nr. ${i}.`);
});

const newCity = cities.map((city, i) =>
  console.log(`The city "${city}" has index nr. ${i}.`)
);
