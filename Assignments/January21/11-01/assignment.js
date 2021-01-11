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

// 3. Math function. Even shorter because its only one function. No curly brackets needed here. (ES6)
const sum = (x,y) => x+y;
console.log(sum(3,4));

// 4. isBigger function with a variable instead of a function keyword. (ES6)
const isBigger = (num1,num2)=> num1<num2;
console.log(isBigger(33, 43));