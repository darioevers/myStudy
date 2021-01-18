/* let is a preserved keyword from javascript to declare a value.
console is a object
log is a method
typeof is a function
*/

// TYPEOF
console.log


// BOOLEANS
let bool = true;
console.log(bool);
let check = 12<20;
console.log(1 == 100);
let str1= 'Hi';
let str2 = ' I am Dario';
console.log('check =', check);
console.log(str1 + str2);


// CONDITIONS
// =
let age = 12;
let age2 = '12';
// ==
console.log(' value check ==', age == age2); // true
// === value and type
console.log(' value and type check ==', age === age2); // false
// !== not equal / the opposite
console.log(!bool);
let bool2 = false;
console.log(!bool2);
console.log(1 !== 10);
// >=
// <==
// >
let che = 1 > 12;
// <
let che2 = 1 < 12;


// ternary operator
console.log(true? 'Yes': 'No');
console.log(1==1? 'Yes': 'No');
console.log(1 < 100? 'Yes': 'No');
console.log(1000 < 100? 'Yes': 'No');
let resultStr = 1<55 ? 'cool' : 'not so cool';
console.log(resultStr);
console.log(typeof resultStr);

// JS methods from Math
console.log(Math.max(1, 2, 455, 6675, 2, -1)); //6675
console.log(Math.min(1, 2, 455, 6675, 2, -1)); //-1
let num1 = 33.5;
console.log(Math.floor(num1));
console.log(Math.ceil(num1));
console.log(Math.floor(Math.random() * 8) + 1);

let str3 = 'Hi i Like air.';
let randomNum = Math.floor(Math.random() *str3.length);
console.log(str3[randomNum]);
console.log(str3.trim());

