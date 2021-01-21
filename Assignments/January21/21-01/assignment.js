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
