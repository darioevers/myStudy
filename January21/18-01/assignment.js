// for loop

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

console.log("---------");

for (let i = 0; i <= 8; ) {
  console.log(i);
  i += 2;
}

console.log("---------");

for (let i = 0; i < 5; i++) {
  console.log(`This is number ${i}`);
}

console.log("---------");

for (let i = 0; i < 5; i++) {
  if (i == 1) {
    console.log(`There is ${i} stars in the sky.`);
  } else {
    console.log(`There are ${i} stars in the sky.`);
  }
}

console.log("---------");

for (let i = 1; i <= 10; i++) {
  console.log(`1 * ${i} = ${1 * i}`);
}

console.log("---------");

for (let i = 1; i <= 10; i++) {
  console.log(`This is Multi table for ${i}`);
  for (let j = 1; j < 10; j++) {
    console.log(`${j} * ${i} = ${j * i}`);
  }
  console.log("-----");
}

console.log("---------");

for (let i = 0; i <= 10; ) {
  console.log(`${i} is even.`);
  i += 2;
}

console.log("---------");

let drawShape = "";
for (let i = 0; i <= 4; i++) {
  drawshape = "";
  for (let j = 0; j <= i; j++) {
    drawShape += "+";
  }
  console.log(drawShape);
}

console.log("---------");

const names = ["Dario", "Norman", "Paula"];
const jobs = ["Developer", "Athlete", "Lawyer"];
for (let i = 0; i < names.length; i++) {
  console.log(`Hi, I am ${names[i]}. I want to become a ${jobs[i]}.`);
}

console.log("---------");

const images = ["🤪", "😬"];
const likes = [22, 344, 666];
for (let i = 0; i < images.length; i++) {
  console.log(`
    _________
    | this img ${images[i]}
    | got ${likes[i]} likes.
    |________`);
}

console.log("---------");
