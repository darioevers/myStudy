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