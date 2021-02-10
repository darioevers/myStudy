//1. Create two variables. One string, One Numeric. Concatenate the string and the number.
var userName = 'Dario'
var userAge = '25'
console.log(userName + ' is ' + userAge + ' Years old.');

//2. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
// 33, 40, 2, 1, 22
let numberOne = 33;
let numberTwo = 40;
let numberThree = 2;
let numberFour = 1;
let numberFive = 22;
numberOne % 2 == 0  ? console.log(numberOne + ' is even.') : console.log(numberOne + ' is odd.');
numberTwo % 2 == 0  ? console.log(numberTwo + ' is even.') : console.log(numberTwo + ' is odd.');
numberThree % 2 == 0  ? console.log(numberThree + ' is even.') : console.log(numberThree + ' is odd.');
numberFour % 2 == 0  ? console.log(numberFour + ' is even.') : console.log(numberFour + ' is odd.');
numberFive % 2 == 0  ? console.log(numberFive + ' is even.') : console.log(numberFive + ' is odd.');

//4. Create a variable with the value of “123”. Convert it to a number.
var numberSix = '123';
console.log(Number(numberSix))

//5. Create a variable with the value of “130.7". Convert it to a number.
var numberSeven = '130.7';
console.log(Number(numberSeven))

//6. Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’
let isDog = true;
isDog == false ? console.log('pat, pat') : console.log('find me a dog to pat!');