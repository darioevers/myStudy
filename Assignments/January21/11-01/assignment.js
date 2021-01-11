// How do functions work?

//1. Old type to write functions
function print(str) {
    console.log(str);
}

// 2. Updated way of adding functions: Function as a variable insted of function keyword. (ES6)
const display = (str) => {
    console.log(str);
}
print('Hi');
display('cool');

// 3. Math function. Even shorter because its only one function. No curly brackets needed.
const sum = (x,y) => x+y;
console.log(sum(3,4));