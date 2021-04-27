// Change the font of the body element.
const body = document.querySelector("body");
body.style.fontFamily = "Arial";
// Center the text of h1 on the page.
const h1 = document.querySelector("h1");
h1.style.textAlign = "center";

// main
const mainSec = document.querySelector(".main");
mainSec.style.display = "flex";
mainSec.style.flexFlow = "row wrap";
mainSec.style.justifyContent = "space-around";
mainSec.style.boxSizing = "border-box";

//The menu headings have a class named category. Select the elements by class name. Then, change the color and font-style of each element.
const category = document.querySelectorAll(".category");
category.forEach(({ style: cat }) => {
  cat.fontSize = "1.5rem";
  cat.fontStyle = "italic";
  cat.borderBottom = "1px solid black";
});

//Create a function named "colorGenerator" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of food-category. Give each list a different background color using the function that you created.
const colorGen = () => {
  let result = "#";
  let HexNum = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += HexNum[Math.floor(Math.random() * 16)];
  }
  // one more thing
  result += "50";
  return result;
};

// color generator in other way 😉
const colorGenOtherWay = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let a = Math.random();
  return `rgba(${r},${g},${b},${a})`;
};

// food-category
const food = document.querySelectorAll(".food-category");
food.forEach(({ style: i }) => {
  i.backgroundColor = colorGen();
  i.width = "30%";
  i.heigth = "10rem";
  i.textAlign = "left";
  i.padding = "2rem 0rem 2rem 3rem";
  i.borderRadius = "5px";
  i.listStyleType = "none";
});

// Select all even allergy-info items. Give the even items a different background color.

// Make the allergy-warning appear as a column in the center of the page.

//The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.
