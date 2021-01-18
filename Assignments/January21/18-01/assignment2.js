/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
Store Mark’s and John’s mass and height in variables.
Calculate both their BMIs and store their BMIs in variables.
Create a boolean variable containing information about whether Mark has a higher BMI than John.
Print a string to the console containing the variable from step 3 using string interpolation. (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
Create an if statement which prints the name and BMI of the person with the highest BMI.
*/

var markHeight = 1.65;
var markWeight = 72.5;
var johnHeight = 1.88;
var johnWeight = 84.5;
var johnIndex = johnWeight / johnHeight ** 2;
console.log(
  `John has a Body-Mass-Index of ${johnIndex}, which is considered normal.`
);
var markIndex = markWeight / markHeight ** 2;
console.log(
  `Mark has a Body-Mass-Index of ${markIndex}, which is considered overweight.`
);
if (markIndex < johnIndex) {
  console.log(`John has a higher BMI by ${markIndex - johnIndex} BMI Points.`);
} else {
  console.log(`Mark has a higher BMI by ${markIndex - johnIndex} BMI Points.`);
}

let bool = markIndex > johnIndex;
console.log(bool);
if ((bool = false)) {
  console.log(`John has a higher BMI by ${markIndex - johnIndex} BMI Points.`);
} else {
  console.log(`Mark has a higher BMI by ${markIndex - johnIndex} BMI Points.`);
}

/* 
Make a variable for firstName and age and give each variable values. 
Create an if/else statement to check whether the person’s age is less than 13. If so, print “firstName is a child”. 
If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”. 
If the person’s age is equal to and more than 20 and less than 30, then print “firstName is a young adult”. 
If none of these conditions apply, print “firstName is a adult”.


var firstName = 'Dario';
var age = 25;
if (age <=)
*/
