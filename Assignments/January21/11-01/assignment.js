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

// 5. Function which adds variables in a sentence and prints it.
const printFullWord = (firstName, age, add) => console.log(`Hi ${firstName}, I am ${age} years old, I live in ${add}.`);
printFullWord('Dario', 25, 'Hamburg');

// 6. Change login status everytime the login function is called. No console.log needed.
let isLogged = false;
const login = ()=>{
    isLogged = true;
}
login();

// 7. How to put more variables into one variable.
// 7.1 One variable per line. Not best behaviour.
let name1 = 'Dario';
let name2 = 'Norman';
let name3 = 'Paula';
// 7.2 Multiple variables in a line. They can be called with the [] brackets. This function is called Array.
let namesArr = ['Dario', 'Norman', 'Paula'];
console.log(namesArr[1]);

// 8. Print a specific value of an array. The index number has nothing to do with the output value.
const numbers = [0, 1, 2, 3, 4, 6, 5, 7, 8, 9];
console.log(numbers[5]);

// 9. ASSIGNMENT = PRINT YOUR HOBBIES WITH AN ARRAY.
let hobbiesArr = ['Computer', 'Outside', 'Sports']
console.log(hobbiesArr[1]);

//10. DRY, declare variable with index number. Increasing the index number inbetween console.logs.
let foodArr = ['Pasta', 'Salmon', 'Avocado']
let i = 0;
console.log(foodArr[i])
i++;

//11. Loops will continue their action until the result is faulty. Loops can be infinite, but thats considered bad behaviour.
let cityArr = ['Hamburg', 'Berlin', 'Leipzig']
for(let i=0;i < cityArr.length;i++) {
    console.log(cityArr[i]);
}
for (let i = 0 ; i <=10; i++) {
    console.log(i);
}