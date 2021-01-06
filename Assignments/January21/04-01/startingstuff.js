// print out
console.log('Dario');
// 
let x = 3;
let str = 'Hamburg'
let old = true;
let kid = 18;
kid > 16 ? console.log('yay') : console.log('Not today. kiddo.');
//
console.log(typeof x);
console.log(typeof old);
console.log(typeof str);
// length
let name = 'Dario';
console.log(name.length);
//conmsole.log(firstName[0]);
let something = 1231;
something = 4567;
console.log(something);
const fatherName = 'Joerg'
console.log(fatherName);
//fatherName = 'Dario';
//
var global = 'hy i am global';
{
    let local = 22;
    global = 'Hi';
    var localGlob = 'Hi its me';
}
//console.log(local);
//

function print(str){
    console.log(str);
}

print('hadi');
print(22);

let oString = 'Hi my name is Dario, I`am 25 years old.'
print(oString.length);
let str1 = oString.substring(5);
console.log(str1);
let str2 = oString.substring(6, 10);
console.log(str2);
//
let str3 = oString.toUpperCase();
console.log(str3)
let str4 = oString.toLocaleLowerCase();
console.log(str4)
let firstName = 'daRio';
console.log(firstName);
let firstChr = firstName[0].toUpperCase();
console.log(firstChr);
let restChr = firstName.substring(1).toLowerCase();
console.log(restChr);
let FinalFistName = firstChr + restChr;
console.log(FinalFistName);
//
let userName = 'daRio';
let userNameFinal = userName[0].toUpperCase() + userName.substring(1).toLowerCase();
console.log(userNameFinal);