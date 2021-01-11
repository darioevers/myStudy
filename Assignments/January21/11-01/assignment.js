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

// 10. DRY, declare variable with index number. Increasing the index number inbetween console.logs.
let foodArr = ['Pasta', 'Salmon', 'Avocado']
let i = 0;
console.log(foodArr[i])
i++;

// 11. Loops will continue their action until the result is faulty. Loops can be infinite, but thats considered bad behaviour.
let cityArr = ['Hamburg', 'Berlin', 'Leipzig']
for(let i=0;i < cityArr.length;i++) {
    console.log(cityArr[i]);
}
for (let i = 0 ; i <=10; i++) {
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    // 1 * 1 = 1
    console.log(`${i} * 1 = ${i * 1}`);
    //   console.log(i. ' * 1 = ', i * 1);
}

// 12. Make an array output uppercase.
const chrArr = ['a', 'b', 'c'];
for(let i=0; i < chrArr.length;i++) {
    console.log(chrArr[i].toUpperCase());
}

// 12.1 ASSIGNMENT: Make the first character of a name uppercase. Called out of an array.
const nameArr = ['Dario', 'norman'];
for(let i=0; i < nameArr.length; i++) {
    console.log(nameArr[i][0].toUpperCase() + nameArr[i].slice(1));
}

// 13. Ternary Operators and IF ELSE function.
console.log(1 == 11 ? 'cool' : 'noooo')

let isSmart = false;
if (isSmart){
    console.log('coool');
} else{
    console.log('nooooo');
}

let count = 0;
if (22*3==229+3){
    count++;
    console.log('You are correct');
} else{
    count--;
    console.log("No that's \n this is new line");
}

// Examples for brackets:
// functions, if else, objects, scopes are all with {} curly brackets.
// array, strings are all with [] brackets.
// if conditions, method, conditioin function call are  all with () .

let a = true;
let b = false;
let c = 11==23;
if (a ==b && c !=a || c ==a){
    console.log('wow');
} else{
    console.log('I dont know what you need from me');
}

// 14. ASSIGNMENT: Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).
for (let i = 0 ; i <=20; i++){
    i % 2 == 0  ? console.log(i + ' is even.') : console.log(i + ' is odd.');
}

// 15. ASSIGNMENT: Write programs that produce the following outputs:

// 15.1: 100 200 300 400 500 600 700 800 900 1000
for (let i = 100; i <=100; i++){
    console.log(`${i} ${i + 100} ${i + 200} ${i + 300} ${i + 400} ${i + 500} ${i + 600} ${i + 700} ${i + 800} ${i + 900}`);
}

// 15.2: 0 2 4 6 8 10
for (let i = 0; i <=0; i++){
    console.log(`${i} ${i + 2} ${i + 4} ${i + 6} ${i + 8} ${i + 10}`);
}

// 15.3: 3 6 9 12 15
for (let i = 3; i <=3; i++){
    console.log(`${i} ${i + 3} ${i + 6} ${i + 9} ${i + 12}`);
}

// 15.4: 9 8 7 6 5 4 3 2 1 0
for (let i = 9; i <=9; i++){
    console.log(`${i} ${i - 1} ${i - 2} ${i - 3} ${i - 4} ${i - 5} ${i - 6} ${i - 7} ${i - 8} ${i - 9}`);
}

// 15.5: 1 1 1 2 2 2 3 3 3 4 4 4
for (let i = 1; i <=1; i++){
    console.log(`${i} ${i} ${i} ${i * 2} ${i * 2} ${i * 2} ${i * 3} ${i * 3} ${i * 3} ${i * 4} ${i * 4} ${i * 4}`);
}

// 15.6: 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for (let i = 0; i <=0; i++){
    console.log(`${i} ${i + 1} ${i + 2} ${i + 3} ${i + 4} ${i} ${i + 1} ${i + 2} ${i + 3} ${i + 4} ${i} ${i + 1} ${i + 2} ${i + 3} ${i + 4}`);
}